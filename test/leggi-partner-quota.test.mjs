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
import { attesaDa429, leggiPartner } from "../scripts/leggi-partner.mjs";

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
