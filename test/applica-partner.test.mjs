import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applicaPartner, ricostruisciDisaccordi, ricostruisciFonti } from "../scripts/applica-partner.mjs";

const fonte = { url: "https://esempio.test/fonte", citazione: "Una citazione valida abbastanza lunga.", verificataIl: "2026-08-31" };
const proposta = (codice = "TEST 01", valore = "https://esempio.test/catalogo") => ({ codiceNorm: codice, campo: "linkCatalogo", valore, fonte });
const lettura = (codice = "TEST 01") => ({ codiceNorm: codice, lettoIl: "2026-08-31T10:00:00.000Z", pagineInviate: [{ n: 1, url: "https://esempio.test/inviata" }], nonTrovati: {} });

function sorgente(codice, link = '""') {
  const linkPerBlocco = Array.isArray(link) ? link : [link];
  return `const METE = [${linkPerBlocco.map((valore, indice) => `\n{\n  id: "${codice}-${indice + 1}",\n  codiceErasmus: "${codice}",\n  linkCatalogo: ${valore},\n  notePratiche: []\n}`).join(",")}\n];\n`;
}
function radiceFinta(t, file = 3) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-applica-"));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  for (let i = 1; i <= file; i++) fs.writeFileSync(path.join(dir, `dati-mete-${i}.js`), sorgente("TEST 01"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  return radice;
}
const file = (radice, n) => path.join(radice, "js", "atenei", "test", `dati-mete-${n}.js`);

test("piu file: lo stesso codice viene riempito in ogni file", async (t) => {
  const radice = radiceFinta(t);
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  for (let n = 1; n <= 3; n++) assert.match(fs.readFileSync(file(radice, n), "utf8"), /linkCatalogo: "https:\/\/esempio.test\/catalogo"/);
});

test("piu blocchi nello stesso file: riempie tutti e mantiene JS valido", async (t) => {
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), sorgente("TEST 01", ['""', '"da verificare"']));
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  const testo = fs.readFileSync(file(radice, 1), "utf8");
  assert.equal((testo.match(/linkCatalogo: "https:\/\/esempio.test\/catalogo"/g) || []).length, 2);
  assert.doesNotThrow(() => execFileSync(process.execPath, ["--check", file(radice, 1)], { stdio: "pipe" }));
});

test("mai sovrascrivere: conserva i byte e registra il disaccordo", async (t) => {
  const radice = radiceFinta(t, 1); const prima = sorgente("TEST 01", '"https://gia.test/catalogo"');
  fs.writeFileSync(file(radice, 1), prima);
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  assert.equal(fs.readFileSync(file(radice, 1), "utf8"), prima);
  assert.equal(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "riconciliazione", "disaccordi.json"))).length, 1);
});

test("disaccordi: due applicazioni su campi diversi conservano la prima prova", async (t) => {
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "https://gia.test/catalogo",\n  linkSito: "https://gia.test/sito",\n  notePratiche: []\n}];\n`);
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  await applicaPartner({ radice, approvati: [{ ...proposta(), campo: "linkSito", valore: "https://nuovo.test/sito" }], letture: [] });
  const disaccordi = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "riconciliazione", "disaccordi.json")));
  assert.deepEqual(disaccordi.map((d) => d.campo).sort(), ["linkCatalogo", "linkSito"]);
});

test("disaccordi: la ricostruzione misura separatamente automatici e restanti", (t) => {
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "gia",\n  linkSito: "gia",\n  notePratiche: []\n}];\n`);
  const esito = ricostruisciDisaccordi({ radice, approvati: [
    proposta(), { ...proposta(), campo: "linkSito", valore: "nuovo" },
  ] });
  assert.equal(esito.automatici, 1);
  assert.equal(esito.restanti, 1);
  assert.equal(esito.disaccordi.length, 2);
});

test("uguale non e disaccordo e non modifica il file", async (t) => {
  const radice = radiceFinta(t, 1); const prima = sorgente("TEST 01", '"https://esempio.test/catalogo"');
  fs.writeFileSync(file(radice, 1), prima);
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  assert.equal(fs.readFileSync(file(radice, 1), "utf8"), prima);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "riconciliazione", "disaccordi.json"))), []);
});

test("D7: registra solo la pagina realmente inviata e con il suo URL", async (t) => {
  const radice = radiceFinta(t, 1); const l = lettura(); l.nonTrovati = { linkSito: 2, notaDisponibilita: 1 };
  await applicaPartner({ radice, approvati: [], letture: [l] });
  const testo = fs.readFileSync(file(radice, 1), "utf8");
  assert.doesNotMatch(testo, /linkSito/);
  assert.match(testo, /notaDisponibilita/); assert.match(testo, /https:\/\/esempio.test\/inviata/);
});

test("D7: una voce nonTrovabile gia presente resta identica", async (t) => {
  const radice = radiceFinta(t, 1);
  const prima = `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n  linkSito: "",\n  nonTrovabile: { linkSito: { origine: "pipeline V1", nota: "gia cercato" } },\n  notePratiche: []\n}];\n`;
  fs.writeFileSync(file(radice, 1), prima);
  const l = lettura(); l.nonTrovati = { linkSito: 1 };
  await applicaPartner({ radice, approvati: [], letture: [l] });
  const dopo = fs.readFileSync(file(radice, 1), "utf8");
  assert.equal(dopo, prima);
  assert.doesNotMatch(dopo, /cercatoIl/);
});

test("nonTrovati su un dato pieno non dichiara il dato non trovabile", async (t) => {
  const radice = radiceFinta(t, 1);
  const prima = `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n  notaDisponibilita: "Aperto a tutti i corsi di Economia",\n  notePratiche: []\n}];\n`;
  fs.writeFileSync(file(radice, 1), prima);
  const l = lettura(); l.nonTrovati = { notaDisponibilita: 1 };
  const esito = await applicaPartner({ radice, approvati: [], letture: [l] });
  const dopo = fs.readFileSync(file(radice, 1), "utf8");
  assert.equal(dopo, prima);
  assert.doesNotMatch(dopo, /nonTrovabile/);
  assert.equal(esito.nonTrovabileSaltatiPieni, 1);
});

test("nonTrovati su un campo vuoto scrive nonTrovabile", async (t) => {
  const radice = radiceFinta(t, 1);
  const prima = `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n  notaDisponibilita: "",\n  notePratiche: []\n}];\n`;
  fs.writeFileSync(file(radice, 1), prima);
  const l = lettura(); l.nonTrovati = { notaDisponibilita: 1 };
  const esito = await applicaPartner({ radice, approvati: [], letture: [l] });
  const dopo = fs.readFileSync(file(radice, 1), "utf8");
  assert.match(dopo, /nonTrovabile/);
  assert.match(dopo, /cercatoIl: "2026-08-31"/);
  assert.equal(esito.nonTrovabileSaltatiPieni, 0);
});

test("tutto o niente: un controllo sintattico fallito ripristina ogni file", async (t) => {
  const radice = radiceFinta(t); const prima = [1, 2, 3].map((n) => fs.readFileSync(file(radice, n), "utf8"));
  const originale = fs.writeFileSync; let corrotto = false;
  fs.writeFileSync = function (destinazione, testo, ...resto) {
    if (!corrotto && destinazione === file(radice, 2) && String(testo).includes("https://esempio.test/catalogo")) { corrotto = true; return originale.call(this, destinazione, "const METE = [", ...resto); }
    return originale.call(this, destinazione, testo, ...resto);
  };
  try { await assert.rejects(() => applicaPartner({ radice, approvati: [proposta()], letture: [] }), /tutto annullato/); }
  finally { fs.writeFileSync = originale; }
  for (let n = 1; n <= 3; n++) assert.equal(fs.readFileSync(file(radice, n), "utf8"), prima[n - 1]);
});

test("tutto o niente: un cancello di sistema fallito ripristina ogni file", async (t) => {
  const radice = radiceFinta(t, 1); const prima = fs.readFileSync(file(radice, 1), "utf8");
  await assert.rejects(() => applicaPartner({ radice, approvati: [proposta()], letture: [],
    cancelliDiSistema: async () => { throw new Error("cancello finto fallito"); } }));
  assert.equal(fs.readFileSync(file(radice, 1), "utf8"), prima);
});

test("le fonti finiscono nel file affiancato, dove il progetto le mette gia'", async (t) => {
  // §3.4 punto 5: i file dati NON hanno una chiave 'fonti' - applica-batch.mjs
  // scrive un file affiancato nella forma { codice: { campo: url } }, e qui si
  // fa lo stesso. Senza questa prova si poteva togliere del tutto la
  // registrazione delle fonti e tutte le altre restavano verdi.
  const radice = radiceFinta(t, 1);
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  const fonti = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "FONTI-partner.json"), "utf8"));
  assert.deepEqual(fonti, { TEST01: { linkCatalogo: fonte.url } });
});

test("0c: due applicazioni consecutive conservano le fonti della prima", async (t) => {
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), `const METE = [\n${sorgente("TEST 01").match(/\{[\s\S]*\}/)[0]},\n${sorgente("TEST 02").match(/\{[\s\S]*\}/)[0]}\n];\n`);
  await applicaPartner({ radice, approvati: [proposta("TEST 01")], letture: [] });
  await applicaPartner({ radice, approvati: [proposta("TEST 02", "https://esempio.test/due")], letture: [] });
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "FONTI-partner.json"))), {
    TEST01: { linkCatalogo: fonte.url },
    TEST02: { linkCatalogo: fonte.url },
  });
});

test("0c: la ricostruzione separa fonti recuperabili e perdite esplicite", (t) => {
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), sorgente("TEST 01", '"https://esempio.test/catalogo"'));
  const esito = ricostruisciFonti({ radice, approvati: [
    proposta("TEST 01"),
    { ...proposta("TEST 01", "https://diverso.test/"), campo: "linkSito" },
  ] });
  assert.equal(esito.recuperate, 1);
  assert.deepEqual(esito.fonti, { TEST01: { linkCatalogo: fonte.url } });
  assert.deepEqual(esito.irrecuperabili, [{ codiceNorm: "TEST 01", codiceCanonico: "TEST01", campo: "linkSito", causa: "valoreNonPubblicato" }]);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "fonti-irrecuperabili.json"))), esito.irrecuperabili);
});

test("0c: la ricostruzione NON perde una fonte che non sa ricostruire", (t) => {
  // Rottura trovata a mano dopo i giri delegati: azzerare la fusione dentro
  // ricostruisciFonti lasciava la suite verde. E' il difetto 0c dentro la
  // funzione scritta per ripararlo - la piu' pericolosa dove possa annidarsi,
  // perche' la si lancia proprio quando le fonti sono gia' fragili. Una fonte
  // gia' registrata per un campo che le proposte non coprono deve sopravvivere.
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), sorgente("TEST 01", '"https://esempio.test/catalogo"'));
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "FONTI-partner.json"),
    JSON.stringify({ "ALTRO 99": { scadenzeOspitante: "https://storica.test/fonte" } }, null, 2));
  const esito = ricostruisciFonti({ radice, approvati: [proposta("TEST 01")] });
  assert.equal(esito.fonti["ALTRO99"]?.scadenzeOspitante, "https://storica.test/fonte");
  assert.equal(esito.fonti.TEST01?.linkCatalogo, fonte.url);
  const suDisco = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "FONTI-partner.json")));
  assert.equal(suDisco["ALTRO99"]?.scadenzeOspitante, "https://storica.test/fonte");
});

test("un campo non scritto non lascia la sua fonte nel file affiancato", async (t) => {
  // Un disaccordo non e' una scrittura: registrare la fonte vorrebbe dire
  // annotare la provenienza di un dato che nei file non e' mai entrato.
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), sorgente("TEST 01", '"https://gia.test/catalogo"'));
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  const fonti = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "FONTI-partner.json"), "utf8"));
  assert.deepEqual(fonti, {});
});

test("con 'campi' si applica solo cio' di cui ci si fida, il resto resta fuori", async (t) => {
  // L'arbitrato del 31/08 ha promosso tre campi e bocciato linkCatalogo: si
  // applica quello che ha passato il controllo umano, il resto aspetta.
  const radice = radiceFinta(t, 1);
  fs.writeFileSync(file(radice, 1), `const METE = [{\n  id: "TEST 01",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n  linkSito: "",\n  notePratiche: []\n}];\n`);
  const esito = await applicaPartner({ radice, letture: [], campi: ["linkSito"], approvati: [
    { codiceNorm: "TEST 01", campo: "linkCatalogo", valore: "https://esempio.test/catalogo", fonte },
    { codiceNorm: "TEST 01", campo: "linkSito", valore: "https://esempio.test/sito", fonte },
  ] });
  const dopo = fs.readFileSync(file(radice, 1), "utf8");
  assert.match(dopo, /linkSito: "https:\/\/esempio.test\/sito"/, "il campo promosso deve entrare");
  assert.match(dopo, /linkCatalogo: ""/, "il campo bocciato deve restare vuoto");
  assert.equal(esito.scritti, 1);
  const fonti = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "FONTI-partner.json"), "utf8"));
  assert.deepEqual(fonti, { TEST01: { linkSito: fonte.url } }, "niente fonte per un campo non applicato");
});

test("0b: un array approvati esplicito non rilegge il file globale coi collisi", async (t) => {
  const radice = radiceFinta(t, 1);
  const prima = fs.readFileSync(file(radice, 1), "utf8");
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "approvati.json"), JSON.stringify([proposta()]));
  const esito = await applicaPartner({ radice, approvati: [], letture: [] });
  assert.equal(esito.scritti, 0);
  assert.equal(fs.readFileSync(file(radice, 1), "utf8"), prima);
});

test("senza letture non si scrive nessun nonTrovabile", async (t) => {
  const radice = radiceFinta(t, 1);
  const prima = fs.readFileSync(file(radice, 1), "utf8");
  const esito = await applicaPartner({ radice, approvati: [], letture: [] });
  assert.equal(fs.readFileSync(file(radice, 1), "utf8"), prima);
  assert.equal(esito.nonTrovabili, 0);
});

test("prova scrive solo l anteprima e lascia i file dati identici", async (t) => {
  const radice = radiceFinta(t); const prima = [1, 2, 3].map((n) => fs.readFileSync(file(radice, n), "utf8"));
  const esito = await applicaPartner({ radice, approvati: [proposta()], letture: [], prova: true });
  for (let n = 1; n <= 3; n++) assert.equal(fs.readFileSync(file(radice, n), "utf8"), prima[n - 1]);
  assert.equal(esito.contenutoProspettico.size, 3);
  for (const testo of esito.contenutoProspettico.values()) assert.match(testo, /linkCatalogo: "https:\/\/esempio\.test\/catalogo"/);
  const anteprimaFile = path.join(radice, "raccolta", "anteprima-partner.json");
  assert.ok(fs.existsSync(anteprimaFile));
  const testoAnteprima = fs.readFileSync(anteprimaFile, "utf8");
  const anteprima = JSON.parse(testoAnteprima);
  assert.equal("contenutoProspettico" in anteprima, false, "il testo completo non va scritto su disco");
  assert.equal(typeof anteprima.disaccordi, "number", "su disco basta il conteggio; i dettagli restano nel ritorno");
  assert.equal(anteprima.fileProspettici.length, 3);
  assert.equal(anteprima.fileProspettici.every((voce) => voce.caratteriCambiati > 0), true);
  assert.doesNotMatch(testoAnteprima, /const METE/);
  assert.ok(fs.statSync(anteprimaFile).size < 100_000, "l'anteprima deve restare sotto 100 KB");
});

// ------------------------- il marcatore che smette di essere vero (03/09)

test("riempire un daRiconfermare toglie il suo nonTrovabile e lascia stare gli altri", async (t) => {
  // Il caso vero di PL KATOWIC01: valore vuoto piu' un marcatore V1. Scrivere il
  // dato e lasciare il marcatore farebbe dire alla meta due cose incompatibili,
  // e i dati pubblicati non lo ammettono (test/stato-campo.test.mjs).
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-nt-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  const percorso = path.join(dir, "dati-mete-1.js");
  fs.writeFileSync(percorso, 'const METE = [\n{\n  id: "x-1",\n'
    + '  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n'
    + '  nonTrovabile: { linkCatalogo: { origine: "pipeline V1" }, linkSito: { origine: "pipeline V1" } },\n'
    + "  notePratiche: []\n}\n];\n");

  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  const testo = fs.readFileSync(percorso, "utf8");
  assert.match(testo, /linkCatalogo: "https:\/\/esempio\.test\/catalogo"/, "il dato deve entrare");
  assert.doesNotMatch(testo, /nonTrovabile:[^\n]*linkCatalogo/,
    "il marcatore del campo riempito non e' piu' vero e va tolto");
  // E CIO' CHE NON C'ENTRA DEVE RESTARE: il marcatore di un ALTRO campo, che
  // nessuno ha riempito, e' ancora vero. Toglierli tutti sarebbe "butta via",
  // e passerebbe la prova qui sopra esattamente come la correzione giusta.
  assert.match(testo, /linkSito: \{ origine: "pipeline V1" \}/,
    "il marcatore di un campo non toccato deve sopravvivere");
});

test("un campo riempito senza marcatore non inventa un nonTrovabile vuoto", async (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-nt2-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  const percorso = path.join(dir, "dati-mete-1.js");
  fs.writeFileSync(percorso, sorgente("TEST 01"));
  await applicaPartner({ radice, approvati: [proposta()], letture: [] });
  const testo = fs.readFileSync(percorso, "utf8");
  assert.match(testo, /linkCatalogo: "https:\/\/esempio\.test\/catalogo"/);
  assert.doesNotMatch(testo, /nonTrovabile/, "senza marcatore non se ne crea uno");
});
