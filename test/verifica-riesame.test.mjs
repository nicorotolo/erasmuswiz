// Le prove girano SENZA rete: lo scaricatore e l'estrattore sono iniettati.
// Una prova che dipende dalla rete non e' ripetibile, ed e' gia' costato al
// progetto una volta (i PDF di prova costruiti a mano, il 30/08).

import assert from "node:assert/strict";
import test from "node:test";
import {
  dataPdf, eUnPdf, metadatiPdf, segnaliElenco, stampa, verificaRiesame, verificaVoce,
} from "../scripts/verifica-riesame.mjs";

const voce = (extra = {}) => ({ codiceCanonico: "TEST01", ateneo: "Ateneo di prova",
  campo: "linkCatalogo", valore: "https://esempio.test/x.pdf", motivi: ["pdf"], ...extra });

// Un PDF finto ma con la forma giusta: intestazione %PDF e dizionario Info.
function pdfFinto({ creato = "D:20240925103000+02'00'", modificato = null, titolo = "Un titolo", produttore = "Canva" } = {}) {
  const info = `<< /Title (${titolo}) /Producer (${produttore}) /CreationDate (${creato})`
    + (modificato ? ` /ModDate (${modificato})` : "") + " >>";
  return Buffer.from("%PDF-1.7\n" + "x".repeat(200) + "\n" + info + "\n%%EOF", "latin1");
}
const risposta = (corpo, extra = {}) => ({ ok: true, stato: 200, corpo, lastModified: null, ...extra });

test("riesame: la data del PDF si legge dal formato dello standard", () => {
  assert.equal(dataPdf("D:20240925103000+02'00'"), "2024-09-25");
  assert.equal(dataPdf("D:20221231"), "2022-12-31");
  assert.equal(dataPdf("spazzatura"), null);
  assert.equal(dataPdf(null), null);
});

test("riesame: i metadati si leggono ANCHE se il testo non si decodifica", async () => {
  // E' il punto dello strumento: tre dei sei PDF del 02/09 non davano testo, e
  // hanno comunque risposto alla domanda "e' vecchio?".
  const r = await verificaVoce({ voce: voce(), estrai: () => null,
    scarica: async () => risposta(pdfFinto({ titolo: "Programme 2024", produttore: "Canva" })) });
  assert.equal(r.esito, "illeggibile", "il testo non c'e'");
  assert.equal(r.creato, "2024-09-25", "ma la data si");
  assert.equal(r.titoloPdf, "Programme 2024");
  assert.equal(r.produttore, "Canva");
});

test("riesame: ModDate vince su CreationDate, e l'HTTP e' l'ultimo ripiego", async () => {
  const conMod = await verificaVoce({ voce: voce(), estrai: () => "",
    scarica: async () => risposta(pdfFinto({ modificato: "D:20250830120000" })) });
  assert.equal(conMod.dataMigliore, "2025-08-30");
  const soloHttp = await verificaVoce({ voce: voce(), estrai: () => "",
    scarica: async () => risposta(Buffer.from("%PDF-1.4\nniente info\n%%EOF", "latin1"),
      { lastModified: "Tue, 27 May 2025 13:33:45 GMT" }) });
  assert.equal(soloHttp.creato, null);
  assert.equal(soloHttp.dataMigliore, "2025-05-27", "senza dizionario Info resta la data del server");
});

test("riesame: un Last-Modified di OGGI non e' una data, ed e' detto", async () => {
  // Tre voci su undici uscivano con la data di oggi: e' il server che la genera
  // alla richiesta. Presentarla come data del documento sarebbe un numero che
  // sembra un'informazione senza esserlo.
  const oggi = new Date();
  const r = await verificaVoce({ voce: voce(), estrai: () => "",
    scarica: async () => risposta(Buffer.from("<html>x</html>"), { lastModified: oggi.toUTCString() }) });
  assert.equal(r.dataHttpAttendibile, false);
  assert.match(r.dataHttpMotivo, /generata dal server/);
  const testo = stampa([r]);
  assert.match(testo, /NON ATTENDIBILE/, "e il resoconto lo deve dire, non nasconderlo");
  assert.doesNotMatch(testo, new RegExp("data: " + oggi.toISOString().slice(0, 10) + "\\b"),
    "la data di oggi non va presentata come data del documento");
});

test("riesame: una data inattendibile non diventa 'dataMigliore' di un PDF", async () => {
  const r = await verificaVoce({ voce: voce(), estrai: () => "",
    scarica: async () => risposta(Buffer.from("%PDF-1.4\nsenza info\n%%EOF", "latin1"),
      { lastModified: new Date().toUTCString() }) });
  assert.equal(r.dataMigliore, null, "meglio nessuna data che una data falsa");
});

test("riesame: un file che non e' un PDF viene detto, non finto", async () => {
  const r = await verificaVoce({ voce: voce(), estrai: () => "qualcosa",
    scarica: async () => risposta(Buffer.from("<html>ciao</html>"), { lastModified: "Wed, 20 Mar 2024 14:06:28 GMT" }) });
  assert.equal(r.esito, "nonEPdf");
  assert.equal(r.dataHttp, "2024-03-20", "la domanda sulla data ha comunque una risposta");
  assert.equal(eUnPdf(Buffer.from("<html>")), false);
});

test("riesame: uno scarico fallito non inventa numeri", async () => {
  const r = await verificaVoce({ voce: voce(), estrai: () => "", scarica: async () => ({ ok: false, stato: 404 }) });
  assert.equal(r.esito, "scaricoFallito");
  assert.equal(r.dettaglio, "HTTP 404");
  assert.equal(r.segnali, undefined, "nessun segnale inventato su un file mai letto");
  const morto = await verificaVoce({ voce: voce(), estrai: () => "",
    scarica: async () => { throw Object.assign(new Error("x"), { name: "TimeoutError" }); } });
  assert.equal(morto.dettaglio, "timeout");
});

test("riesame: i segnali distinguono un elenco da una scheda informativa", () => {
  // I due casi veri del 02/09, in miniatura.
  const elenco = segnaliElenco("ENG 101 semester 1 6 ECTS\nENG 202 semester 2 6 credits\nFRA 303 semestre 3 3 ECTS");
  assert.ok(elenco.crediti >= 3 && elenco.codiciCorso >= 3, "un elenco ha crediti e codici");
  const scheda = segnaliElenco("INFORMATION SHEET ERASMUS+ 2022-2023 Institution ENTPE Website contact address nomination deadline autumn semester spring semester");
  assert.ok(scheda.codiciCorso === 0, "una scheda informativa non ha codici corso");
  assert.ok(scheda.crediti === 0);
});

test("riesame: il resoconto dice quando NON ha potuto misurare", async () => {
  const esiti = await verificaRiesame({
    voci: [voce({ codiceCanonico: "A01" }), voce({ codiceCanonico: "B02" })],
    estrai: () => null,
    scarica: async (u) => (u.includes("x.pdf") ? risposta(pdfFinto()) : { ok: false, stato: 500 }),
  });
  assert.equal(esiti.length, 2);
  const testo = stampa(esiti);
  assert.match(testo, /TESTO NON DECODIFICABILE/);
  assert.match(testo, /non sono un giudizio/, "il resoconto deve dirlo a chiare lettere");
});

test("riesame: metadatiPdf non esplode su un buffer minuscolo o assente", () => {
  assert.deepEqual(metadatiPdf(Buffer.alloc(0)), {});
  assert.deepEqual(metadatiPdf(null), {});
});
