// Tre buchi dei cancelli, trovati il 30/08 sera guardando le 244 letture vere
// invece delle prove. Ognuno lasciava passare un dato sbagliato senza che
// nessuna prova diventasse rossa.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applicaCancelli, applicaCancelloLivello, livelliCitati } from "../scripts/cancelli.mjs";

const URL_PAGINA = "https://esempio.test/incoming";
const CITAZIONE = "Incoming exchange students need English at B2 level before arrival.";
// La seconda frase e' vera e presente nella pagina, ma NON dice alcun livello:
// serve a far arrivare il caso fino al cancello dei livelli, invece di vederlo
// fermare prima come citazione assente.
const SENZA_LIVELLO = "The medium of instruction at this university is English.";
const TESTO = `${CITAZIONE} ${SENZA_LIVELLO} ${"contorno ".repeat(60)}`;
const impronta = (t) => createHash("sha256").update(t, "utf8").digest("hex");
const PAGINA = { n: 1, file: "001.json", url: URL_PAGINA, titolo: "Incoming exchange",
  caratteri: TESTO.length, tagliata: false, impronta: impronta(TESTO) };

function radiceFinta(t) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-buchi-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const dir = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "001.json"), JSON.stringify({ url: URL_PAGINA, titolo: PAGINA.titolo, testo: TESTO }));
  return radice;
}
const fonte = (citazione = CITAZIONE) => ({ url: URL_PAGINA, citazione, verificataIl: "2026-08-30" });
const lettura = (campi) => ({ codiceNorm: "TEST 01", lettoIl: "2026-08-30T00:00:00.000Z", modello: "finto",
  pagineInviate: [PAGINA], campi, nonTrovati: {}, note: [] });

// ---------------------------------------------------------------- buco 1
test("un livello non dichiarato vale 'facolta', non 'ateneo'", async (t) => {
  // S GOTEBOR01 scriveva "level" invece di "livello", dichiarando "facolta" con
  // ambito "Institutionen for svenska". Il cancello leggeva undefined e lo
  // trattava come "ateneo": un dato di dipartimento sarebbe finito nel sito.
  const radice = radiceFinta(t);
  const campo = { valore: "https://esempio.test/catalogo", level: "facolta",
    ambito: "Institutionen for svenska", paginaCitata: 1, fonte: fonte() };
  const e = await applicaCancelli([lettura({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  const uscito = e.approvati[0] || e.facolta[0];
  assert.ok(uscito, "il campo doveva uscire da qualche parte");
  assert.equal(uscito.livello, "facolta", "un livello mancante non puo' diventare 'ateneo'");
  assert.equal(uscito.dichiarato, null, "il cancello deve registrare che il livello NON era dichiarato");
});

test("un campo stretto senza livello dichiarato non arriva agli approvati", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: "Solo per i giuristi", livello: "ATENEO", ambito: null, paginaCitata: 1, fonte: fonte() };
  const e = await applicaCancelli([lettura({ notaDisponibilita: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.approvati.length, 0, "'ATENEO' maiuscolo non e' il valore previsto: nel dubbio si va allo stretto");
  assert.equal(e.facolta.length, 1);
});

// ---------------------------------------------------------------- buco 2 (E3)
test("un codice inventato finisce negli scarti, non in riconciliazione", async (t) => {
  // La prova che E3 chiede: costruita da un capo all'altro, non sulla sola
  // funzione. Un campo di facolta' che supera tutti gli altri cancelli, su un
  // partner il cui codice non esiste, non deve diventare materiale della Fase 6.
  const radice = radiceFinta(t);
  const campo = { valore: { op: "ALL", figli: [{ lingua: "Inglese", livello: "B2" }],
    fonte: URL_PAGINA, verificatoIl: "2026-08-30" },
    livello: "facolta", ambito: "Faculty of Law", paginaCitata: 1, fonte: fonte() };

  const inventato = await applicaCancelli([lettura({ requisitoLingua: campo })],
    { radice, codici: new Set(["ALTRO 99"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(inventato.facolta.length, 0, "riconciliazione deve restare VUOTA per un partner che non esiste");
  assert.equal(inventato.approvati.length, 0);
  assert.deepEqual(inventato.scartati.map((s) => s.causa), ["codiceSconosciuto"]);

  // Con il codice vero, lo stesso campo deve invece arrivare in riconciliazione:
  // e' la meta' della prova che dimostra che non abbiamo solo rotto il cancello 4.
  const vero = await applicaCancelli([lettura({ requisitoLingua: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(vero.facolta.length, 1);
  assert.equal(vero.scartati.length, 0);
});

test("il cancello del codice resta l'ULTIMO a dare la causa", async (t) => {
  // Un campo con la citazione sbagliata su un partner inesistente deve
  // continuare a chiamarsi 'citazioneAssente', o il resoconto per causa del
  // §6.2 smette di essere confrontabile fra un'esecuzione e l'altra.
  const radice = radiceFinta(t);
  const campo = { valore: "Nota qualunque", livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: fonte("Questa frase non compare da nessuna parte nella pagina inviata.") };
  const e = await applicaCancelli([lettura({ notaDisponibilita: campo })],
    { radice, codici: new Set(["ALTRO 99"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(e.scartati.map((s) => s.causa), ["citazioneAssente"]);
});

// ---------------------------------------------------------------- buco 3
test("un livello CEFR che la citazione non contiene viene scartato", async (t) => {
  // Il caso vero di TR IZMIR04: la pagina dice quale lingua si insegna, non a
  // che livello, e il modello ci mette un livello suo.
  const radice = radiceFinta(t);
  const albero = (livello) => ({ op: "ALL", figli: [{ lingua: "Inglese", livello }],
    fonte: URL_PAGINA, verificatoIl: "2026-08-30" });
  const campo = (livello, citazione) => ({ valore: albero(livello), livello: "ateneo",
    ambito: null, paginaCitata: 1, fonte: fonte(citazione) });

  const inventato = await applicaCancelli([lettura({ requisitoLingua: campo("B1", SENZA_LIVELLO) })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(inventato.scartati.map((s) => s.causa), ["livelloNonCitato"],
    "la citazione c'e' davvero nella pagina: a fermarlo dev'essere il livello, non la citazione");
  assert.equal(inventato.approvati.length, 0);

  // La citazione predefinita dice "English at B2 level": quella deve passare.
  const letto = await applicaCancelli([lettura({ requisitoLingua: campo("B2") })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(letto.approvati.length, 1, "un livello scritto nella citazione deve passare");
});

test("basta UNA lingua col livello non citato per scartare tutto l'albero", () => {
  const cit = "Students need German at B1 level for the courses taught in German.";
  const dueLingue = { op: "ANY", figli: [
    { lingua: "Tedesco", livello: "B1" },
    { lingua: "Inglese", livello: "C1" },
  ] };
  const e = livelliCitati(dueLingue, cit);
  assert.equal(e.ok, false);
  assert.deepEqual(e.assenti, ["C1"], "il livello mancante va nominato, non basta dire che qualcosa non va");
  // I gruppi annidati vanno percorsi fino in fondo.
  const annidato = { op: "ALL", figli: [{ op: "ANY", figli: [{ lingua: "Tedesco", livello: "A2" }] }] };
  assert.equal(livelliCitati(annidato, cit).causa, "livelloNonCitato");
  assert.equal(livelliCitati(annidato, "A2 is enough for everyone here.").ok, true);
});

test("un livello dichiarato bene continua a funzionare", () => {
  const ateneo = applicaCancelloLivello("notaDisponibilita",
    { livello: "ateneo", fonte: { url: "https://esempio.test/incoming" } }, { titolo: "Incoming" });
  assert.equal(ateneo.livello, "ateneo");
  assert.equal(ateneo.dichiarato, "ateneo");
  assert.equal(ateneo.approvato, true);
  const declassato = applicaCancelloLivello("notaDisponibilita",
    { livello: "ateneo", fonte: { url: "https://esempio.test/faculty-of-law" } }, {});
  assert.equal(declassato.livello, "facolta");
  assert.equal(declassato.declassato, true, "il declassamento per URL deve restare visibile nel resoconto");
});
