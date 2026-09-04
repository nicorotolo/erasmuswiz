// Non tutti i 429 sono uguali, e il 30/08 sera la differenza e' costata la
// misura che la Fase 5 aspettava: la passata si fermava dopo 5 partner credendo
// di aver esaurito la giornata, mentre il corpo dell'errore diceva
// "GenerateContentInputTokensPerModelPerMinute-FreeTier", limite 250000,
// "Please retry in 25.304161866s". Il tetto era quello dei token AL MINUTO.
// Queste prove tengono separati i due casi.
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { attesaDa429, attesaDa5xx, leggiPartner } from "../scripts/leggi-partner.mjs";

// Il corpo vero, catturato dalla chiave il 30/08 sera.
const AL_MINUTO = `Gemini API errore 429: {"error":{"code":429,"message":"You exceeded your current quota. \\n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_input_token_count, limit: 250000, model: gemini-3.5-flash-lite\\nPlease retry in 25.304161866s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"quotaId":"GenerateContentInputTokensPerModelPerMinute-FreeTier","quotaValue":"250000"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"25s"}]}}`;
const AL_GIORNO = `Gemini API errore 429: {"error":{"details":[{"violations":[{"quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier","quotaValue":"250"}]}]}}`;

function prepara(quanti) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-quota-"));
  const partner = Array.from({ length: quanti }, (_, i) => ({
    codiceNorm: `TEST 0${i + 1}`, ateneo: "ATENEO DI PROVA", citta: "Graz", paese: "Austria",
    campiMancanti: ["notaDisponibilita"],
  }));
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "partner.json"), JSON.stringify(partner));
  for (const p of partner) {
    const d = path.join(radice, "raccolta", "pagine", p.codiceNorm.replace(/\s+/g, ""));
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, "indice.json"), JSON.stringify({ esito: "raggiunto", pagine: [{ file: "001.json", url: "https://esempio/1", punteggio: 9 }] }));
    fs.writeFileSync(path.join(d, "001.json"), JSON.stringify({ url: "https://esempio/1", titolo: "Incoming", testo: "testo ".repeat(200) }));
  }
  return radice;
}
const risposta = () => ({ campi: {}, nonTrovati: { notaDisponibilita: 1 }, note: [] });
const modelli = async () => ["gemini-3.5-flash-lite"];

test("il 429 al minuto e quello del giorno si distinguono, e il ritardo si legge dal corpo", () => {
  assert.deepEqual(attesaDa429(AL_MINUTO), { giornaliero: false, attesaMs: 30000 }, "25s dichiarati + 5s di margine");
  assert.equal(attesaDa429(AL_GIORNO).giornaliero, true);
  // Se il corpo non dice niente si aspetta un minuto pieno, non zero.
  assert.deepEqual(attesaDa429("429 senza dettagli"), { giornaliero: false, attesaMs: 60000 });
});

test("sul 429 al minuto si aspetta e si riprende LO STESSO partner", async (t) => {
  const radice = prepara(3); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const visti = []; const attese = [];
  let n = 0;
  const chiamaModello = async (prompt) => {
    visti.push(/codice Erasmus (TEST \d+)/.exec(prompt)[1]);
    if (++n === 2) { const e = new Error(AL_MINUTO); e.status = 429; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(esito.partnerLetti, 3, "il 429 al minuto non deve far perdere nessun partner");
  assert.deepEqual(attese, [30000], "si aspetta esattamente quanto dice il server, piu' il margine");
  assert.equal(esito.attese429, 1);
  assert.deepEqual(visti, ["TEST 01", "TEST 02", "TEST 02", "TEST 03"], "il partner rifiutato va ripreso, non saltato");
  assert.equal(esito.quota429, false, "un limite al minuto non e' il tetto della giornata");
});

test("sul 429 giornaliero ci si ferma subito, senza aspettare", async (t) => {
  const radice = prepara(3); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const attese = []; let n = 0;
  const chiamaModello = async () => {
    if (++n === 2) { const e = new Error(AL_GIORNO); e.status = 429; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(esito.partnerLetti, 1, "dopo il tetto giornaliero non si legge piu' niente");
  assert.deepEqual(attese, [], "sul tetto giornaliero non si aspetta: si esce");
  assert.equal(esito.quota429, true);
  assert.equal(esito.quota429Giornaliera, true);
  assert.ok(esito.messaggio429.includes("PerDay"), "il resoconto deve dire PERCHE' si e' fermato");
});

test("un 429 al minuto che non passa mai non fa girare a vuoto", async (t) => {
  const radice = prepara(2); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const attese = []; let chiamate = 0;
  const chiamaModello = async () => { chiamate++; const e = new Error(AL_MINUTO); e.status = 429; throw e; };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, maxAttese: 3, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(chiamate, 4, "un primo tentativo piu' tre attese, poi basta");
  assert.equal(attese.length, 3);
  assert.equal(esito.quota429, true);
  assert.equal(esito.quota429Giornaliera, false, "ci si ferma, ma senza spacciarlo per tetto giornaliero");
  assert.equal(esito.partnerLetti, 0);
});

// --------------------------------------------------------------- IL 5xx
//
// Il 04/09, sulla prima passata vera del recupero motivi: 175 partner su 198
// persi in un giro solo con `HTTP 503`, e una sonda subito dopo 119 su 122.
// Le chiamate riuscite in mezzo dimostravano che la richiesta era valida e il
// modello raggiungibile: era saturazione. Il codice pero' ritentava SOLO il
// 429, e ogni 503 saltava il partner all'istante. Queste prove tengono fermi i
// due comportamenti nuovi: si aspetta e si riprova, e se il servizio e' giu'
// davvero ci si ferma invece di consumare la coda.

const CINQUECENTOTRE = `Gemini API errore 503: {"error":{"code":503,"message":"The model is overloaded. Please try again later.","status":"UNAVAILABLE"}}`;

test("l'attesa dopo un 5xx cresce, e un retryDelay dichiarato ha la precedenza", () => {
  assert.equal(attesaDa5xx(0), 5000);
  assert.equal(attesaDa5xx(1), 15000);
  assert.equal(attesaDa5xx(2), 45000);
  assert.equal(attesaDa5xx(9), 45000, "oltre l'ultimo scalino non si torna indietro ne' si esplode");
  assert.equal(attesaDa5xx(0, `{"retryDelay":"20s"}`), 25000, "20s dichiarati + 5s di margine");
});

test("sul 503 si aspetta e si riprende LO STESSO partner, che non va perso", async (t) => {
  const radice = prepara(3); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const visti = []; const attese = []; let n = 0;
  const chiamaModello = async (prompt) => {
    visti.push(/codice Erasmus (TEST \d+)/.exec(prompt)[1]);
    if (++n === 2) { const e = new Error(CINQUECENTOTRE); e.status = 503; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(esito.partnerLetti, 3, "un 503 passeggero non deve far perdere nessun partner");
  assert.deepEqual(attese, [5000], "il primo scalino dell'attesa");
  assert.equal(esito.attese5xx, 1);
  assert.deepEqual(visti, ["TEST 01", "TEST 02", "TEST 02", "TEST 03"], "il partner rifiutato va ripreso, non saltato");
  assert.deepEqual(esito.chiamateFallite, {}, "un 503 poi rientrato non e' un fallimento");
  assert.ok(!esito.servizioNonDisponibile, "un 503 isolato non e' un servizio giu'");
});

test("i tentativi del 429 e quelli del 5xx hanno bilanci separati", async (t) => {
  const radice = prepara(1); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const attese = []; let n = 0;
  // Due 429, due 503, poi passa: con un contatore solo il quinto tentativo non
  // sarebbe mai arrivato, perche' maxAttese vale 3 e i guasti sono quattro.
  const chiamaModello = async () => {
    n++;
    if (n <= 2) { const e = new Error(AL_MINUTO); e.status = 429; throw e; }
    if (n <= 4) { const e = new Error(CINQUECENTOTRE); e.status = 503; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(esito.partnerLetti, 1, "quattro guasti di due famiglie diverse non devono esaurire un bilancio da tre");
  assert.equal(esito.attese429, 2);
  assert.equal(esito.attese5xx, 2);
  assert.deepEqual(attese, [30000, 30000, 5000, 15000], "ogni famiglia usa la propria scala di attesa");
});

test("un 503 che non passa mai consuma le sue attese e poi lascia perdere IL PARTNER, non la passata", async (t) => {
  const radice = prepara(3); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const attese = []; let chiamate = 0;
  const chiamaModello = async (prompt) => {
    chiamate++;
    if (/TEST 01/.test(prompt)) { const e = new Error(CINQUECENTOTRE); e.status = 503; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, attendi: async (ms) => { attese.push(ms); } });

  assert.equal(chiamate, 6, "quattro tentativi sul primo partner, poi uno a testa sugli altri due");
  assert.deepEqual(attese, [5000, 15000, 45000]);
  assert.equal(esito.partnerLetti, 2, "un partner irriducibile non deve fermare gli altri");
  assert.deepEqual(esito.chiamateFallite, { "HTTP 503": 1 });
  assert.ok(!esito.servizioNonDisponibile, "uno solo non fa un servizio giu'");
});

test("se il servizio e' giu' davvero ci si ferma, invece di bruciare tutta la coda", async (t) => {
  const radice = prepara(20); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  let chiamate = 0;
  const chiamaModello = async () => { chiamate++; const e = new Error(CINQUECENTOTRE); e.status = 503; throw e; };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, maxConsecutivi5xx: 4, attendi: async () => {} });

  assert.equal(esito.servizioNonDisponibile, true);
  assert.equal(esito.partnerLetti, 0);
  assert.deepEqual(esito.chiamateFallite, { "HTTP 503": 4 }, "quattro partner consecutivi, poi stop");
  assert.equal(chiamate, 16, "quattro partner per quattro tentativi ciascuno: gli altri sedici non si toccano");
  assert.ok(esito.messaggio5xx.includes("overloaded"), "il resoconto deve dire PERCHE' si e' fermato");
  assert.ok(!esito.quota429, "un servizio giu' non e' una quota esaurita, e non va spacciato per tale");
});

test("il contatore dei 5xx consecutivi si azzera su ogni lettura riuscita", async (t) => {
  const radice = prepara(9); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  let n = 0;
  // 503 sui partner dispari, successo sui pari: mai tre di fila, quindi non ci
  // si deve fermare nemmeno con la soglia a tre.
  const chiamaModello = async (prompt) => {
    n++;
    const codice = Number(/codice Erasmus TEST 0?(\d+)/.exec(prompt)[1]);
    if (codice % 2 === 1) { const e = new Error(CINQUECENTOTRE); e.status = 503; throw e; }
    return risposta();
  };
  const esito = await leggiPartner({ radice, chiamaModello, elencaModelli: modelli, maxConsecutivi5xx: 3, attendi: async () => {} });

  assert.ok(!esito.servizioNonDisponibile, "i fallimenti alternati a successi non sono un servizio giu'");
  assert.equal(esito.partnerLetti, 4, "i quattro pari si leggono tutti");
  assert.equal(esito.chiamateFallite["HTTP 503"], 5, "i cinque dispari falliscono, ma nessuno ferma la passata");
});
