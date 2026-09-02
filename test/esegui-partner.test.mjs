// Prove della catena della Fase 5. Dove possibile colpiscono CHI CHIAMA, non la
// funzione: il 30/08, il 31/08 e il 01/09 una rottura su quattro e' rimasta
// verde sempre per la stessa ragione - la prova copriva la funzione e non il
// suo chiamante.

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  CAMPI_AUTOMATICI, applicaEControlla, apriLock, bloccoZero, confrontaMete, costruisciCode,
  eseguiBlocco, fondiEsiti, fotografiaMete, improntaValore, leggiRegistro, pdfCompleto,
  appendiEventi, recuperaTransazione, rilasciaLock, statoPartner,
} from "../scripts/esegui-partner.mjs";

const FONTE = { url: "https://esempio.test/p1", citazione: "Una citazione lunga abbastanza.", verificataIl: "2026-09-01" };

function sorgente(codice, campi = {}) {
  const righe = Object.entries(campi).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n");
  return `const METE = [\n{\n  id: "${codice}-1",\n  codiceErasmus: "${codice}",\n${righe}\n  notePratiche: []\n}\n];\n`;
}

function radiceFinta(t, { codice = "TEST 01", campi = {} } = {}) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-catena-"));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "dati-mete-1.js"), sorgente(codice, campi));
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  return radice;
}

const scriviJson = (radice, rel, dato) => {
  const f = path.join(radice, "raccolta", rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, JSON.stringify(dato, null, 2) + "\n");
};

function gitFinto(testa = "aaa") {
  const registro = [];
  return {
    registro,
    esegui(radice, argomenti) {
      registro.push(argomenti);
      if (argomenti[0] === "rev-parse" && argomenti[1] === "HEAD") return testa;
      if (argomenti[0] === "rev-parse") return "genitore";
      if (argomenti[0] === "commit") { testa = "bbb"; return ""; }
      return "";
    },
  };
}

const pagina = (extra = {}) => ({ url: "https://esempio.test/p1", tipo: "pdf", testo: "contenuto", ...extra });

// ------------------------------------------------------------- impronta

test("catena: l'impronta non dipende dall'ordine delle chiavi", () => {
  assert.equal(improntaValore({ a: 1, b: { c: 2, d: 3 } }), improntaValore({ b: { d: 3, c: 2 }, a: 1 }));
  assert.notEqual(improntaValore({ a: 1 }), improntaValore({ a: 2 }));
});

// ------------------------------------------------------------------ lock

test("catena: il lock e' esclusivo, e il secondo processo non parte", (t) => {
  const radice = radiceFinta(t);
  const primo = apriLock(radice, { pid: process.pid });
  assert.equal(primo.preso, true);
  const secondo = apriLock(radice, { pid: process.pid });
  assert.equal(secondo.preso, false);
  assert.match(secondo.motivo, /gia' lavorando/);
  rilasciaLock(radice);
});

test("catena: un lock abbandonato da un PID morto viene recuperato", (t) => {
  const radice = radiceFinta(t);
  fs.writeFileSync(path.join(radice, "raccolta", ".esegui.lock"), JSON.stringify({ pid: 999999999 }) + "\n");
  const esito = apriLock(radice, { pid: process.pid });
  assert.equal(esito.preso, true);
  assert.equal(esito.recuperatoDa, 999999999);
  rilasciaLock(radice);
});

test("catena: davanti a un lock di recupero orfano ci si FERMA e si dice come", (t) => {
  // Rinuncia deliberata: rimuoverlo da soli sarebbe la stessa corsa un piano
  // piu' in basso. Un fermo che si vede vale piu' di una corsa che non si vede.
  const radice = radiceFinta(t);
  fs.writeFileSync(path.join(radice, "raccolta", ".esegui.lock"), JSON.stringify({ pid: 999999999 }) + "\n");
  fs.writeFileSync(path.join(radice, "raccolta", ".esegui.recupero.lock"), JSON.stringify({ pid: 999999998 }) + "\n");
  const esito = apriLock(radice, { pid: process.pid });
  assert.equal(esito.preso, false);
  assert.match(esito.motivo, /recupero orfano/);
  assert.match(esito.motivo, /rm /);
});

// -------------------------------------------------------------- stato PDF

test("catena: un PDF svuotato senza estrazioneFallita rende il passo incompleto", (t) => {
  const radice = radiceFinta(t);
  const cart = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(cart, { recursive: true });
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify(pagina({ testo: null })));
  scriviJson(radice, path.join("pagine", "TEST01", "indice.json"), { esito: "raggiunto", pagine: [{ file: "001.json" }] });
  assert.equal(pdfCompleto(radice, "TEST 01"), false);
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify(pagina({ testo: null, estrazioneFallita: "illeggibile" })));
  assert.equal(pdfCompleto(radice, "TEST 01"), true);
});

test("catena: il CHIAMANTE rifiuta di leggere se il passo PDF non e' completo", async (t) => {
  // La trappola pagata il 01/09 su A GRAZ02: riraccogliere azzera il testo dei
  // PDF, e senza questo rifiuto la lettura parte su pagine svuotate e i valori
  // che ne venivano spariscono, sembrando una regressione del modello.
  const radice = radiceFinta(t);
  const cart = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(cart, { recursive: true });
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify(pagina({ testo: null })));
  scriviJson(radice, path.join("pagine", "TEST01", "indice.json"), { esito: "raggiunto", pagine: [{ file: "001.json" }] });
  let lettoChiamato = false;
  const esito = await eseguiBlocco({
    radice, codici: ["TEST 01"], passi: ["pdf", "lettura"],
    riscarica: async () => ({ letti: 0, falliti: {} }),
    leggi: async () => { lettoChiamato = true; return { partnerLetti: 0, chiamateFallite: {} }; },
    cancelli: async () => ({ approvati: [], scartati: [], facolta: [] }),
    applica: async () => ({ scritti: 0, disaccordi: [] }), git: gitFinto(),
  });
  assert.equal(lettoChiamato, false, "la lettura non deve partire su PDF svuotati");
  assert.match(esito.fermato, /PDF non completato/);
  assert.equal(esito.pdf.stato, "iniziato");
});

// ------------------------------------------------------------ stato partner

test("catena: gli stati seguono il primo passo incompleto, non 'mai raccolto'", (t) => {
  const radice = radiceFinta(t);
  const p = { codiceNorm: "TEST 01", campiMancanti: ["linkSito"], siti: ["https://x.test/"] };
  assert.equal(statoPartner({ radice, partner: p }), "daRaccogliere");
  const cart = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(cart, { recursive: true });
  // La pagina deve avere testo VERO: un indice "raggiunto" con zero pagine non
  // esiste nella raccolta reale (esito e' "raggiunto" solo se pagine.length),
  // e una finzione impossibile faceva provare uno stato che nessun dato produce.
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify({
    url: "https://x.test/", tipo: "html", titolo: "", testo: "parole ".repeat(400), link: [] }));
  scriviJson(radice, path.join("pagine", "TEST01", "indice.json"),
    { esito: "raggiunto", pagine: [{ file: "001.json", url: "https://x.test/" }] });
  assert.equal(statoPartner({ radice, partner: p }), "daLeggere");
  fs.mkdirSync(path.join(radice, "raccolta", "letture"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "letture", "TEST01.json"), "{}");
  assert.equal(statoPartner({ radice, partner: p }), "daFondere");
  assert.equal(statoPartner({ radice, partner: p, avanzamento: { TEST01: { fuso: true, applicato: false } } }), "daApplicare");
  assert.equal(statoPartner({ radice, partner: p, avanzamento: { TEST01: { fuso: true, applicato: true } } }), "fatto");
  assert.equal(statoPartner({ radice, partner: p, collisi: new Set(["TEST01"]) }), "colliso");
});

test("catena: un partner raggiunto ma senza testo utile ha un CAPOLINEA", (t) => {
  // "raggiunto" e' largo: basta una pagina, anche vuota. Sei partner veri sono
  // stati raggiunti con pagine da 32-173 caratteri (siti costruiti in
  // JavaScript) e restavano `daLeggere` per sempre, ripresi a ogni giro senza
  // che succedesse niente. Un capolinea mancante non e' lavoro rimasto.
  const radice = radiceFinta(t);
  const p = { codiceNorm: "TEST 01", campiMancanti: ["linkSito"], siti: ["https://x.test/"] };
  const cart = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(cart, { recursive: true });
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify({
    url: "https://x.test/", tipo: "html", titolo: "", testo: "poche parole", link: [] }));
  scriviJson(radice, path.join("pagine", "TEST01", "indice.json"),
    { esito: "raggiunto", pagine: [{ file: "001.json", url: "https://x.test/" }] });
  assert.equal(statoPartner({ radice, partner: p }), "senzaTestoUtile");

  // con una pagina vera torna lavoro da fare
  fs.writeFileSync(path.join(cart, "001.json"), JSON.stringify({
    url: "https://x.test/", tipo: "html", titolo: "", testo: "parole ".repeat(400), link: [] }));
  assert.equal(statoPartner({ radice, partner: p }), "daLeggere");
});

// ------------------------------------------------------------- fusione

test("catena: la fusione toglie la voce vecchia da TUTTI E TRE gli esiti", (t) => {
  // La prima stesura di questa prova guardava solo che la voce VECCHIA
  // sparisse - e restava verde anche riscrivendo i tre file da zero, perche'
  // buttare tutto fa sparire anche quella. La rottura numero 5 l'ha mostrato.
  // Fondere significa due cose insieme: la voce vecchia se ne va, e QUELLO CHE
  // NON C'ENTRA RESTA. Servono entrambe le meta'.
  const radice = radiceFinta(t);
  const estraneo = { codiceNorm: "ALTRO 99", campo: "scadenzeOspitante", valore: "gia in cache" };
  scriviJson(radice, "approvati.json", [{ codiceNorm: "TEST 01", campo: "linkSito", valore: "vecchio" }, estraneo]);
  scriviJson(radice, "scartati.json", [{ codiceNorm: "TERZO 77", campo: "linkSito", causa: "urlMorto" }]);
  scriviJson(radice, path.join("riconciliazione", "facolta.json"), [{ codiceNorm: "QUARTO 55", campo: "linkCatalogo" }]);
  fondiEsiti({ radice, nuovi: { approvati: [], scartati: [{ codiceNorm: "TEST 01", campo: "linkSito", causa: "urlMorto" }], facolta: [] } });
  const leggi = (f) => JSON.parse(fs.readFileSync(path.join(radice, "raccolta", f), "utf8"));
  const app = leggi("approvati.json");
  const sca = leggi("scartati.json");
  const fac = leggi(path.join("riconciliazione", "facolta.json"));
  assert.ok(!app.some((v) => v.codiceNorm === "TEST 01"), "la vecchia approvazione deve sparire dagli approvati");
  assert.ok(sca.some((v) => v.codiceNorm === "TEST 01"), "e ricomparire nel solo esito nuovo");
  assert.deepEqual(app.filter((v) => v.codiceNorm === "ALTRO 99"), [estraneo], "cio' che non c'entra deve sopravvivere");
  assert.equal(sca.length, 2, "gli scarti preesistenti non si buttano");
  assert.equal(fac.length, 1, "e nemmeno le voci di facolta'");
});

// ------------------------------------------------------------- confronto

test("catena: il confronto vede il campo gia' pieno modificato e quello non ammesso", () => {
  const prima = new Map([["f 1", { codiceErasmus: "T 1", linkSito: "vecchio", note: "x" }]]);
  const pieno = confrontaMete(prima, new Map([["f 1", { codiceErasmus: "T 1", linkSito: "nuovo", note: "x" }]]));
  assert.equal(pieno.ok, false);
  assert.equal(pieno.problemi[0].causa, "campoGiaPienoModificato");
  const fuori = confrontaMete(prima, new Map([["f 1", { codiceErasmus: "T 1", linkSito: "vecchio", note: "y" }]]));
  assert.equal(fuori.ok, false);
  assert.equal(fuori.problemi[0].causa, "campoNonAmmesso");
  const persa = confrontaMete(prima, new Map());
  assert.equal(persa.ok, false);
  assert.ok(persa.problemi.some((p) => p.causa === "numeroMeteCambiato"));
  const vuoto = new Map([["f 1", { codiceErasmus: "T 1", linkSito: "", note: "x" }]]);
  const buono = confrontaMete(vuoto, new Map([["f 1", { codiceErasmus: "T 1", linkSito: "nuovo", note: "x" }]]));
  assert.equal(buono.ok, true);
  assert.deepEqual(buono.scritti, { linkSito: 1 });
});

// -------------------------------------------------- il cancello sui campi

test("catena: un campo d'arbitrato senza un 'si' nel registro viene RIFIUTATO", async (t) => {
  // Il cancello non e' "mai": e' "solo con un si' umano dimostrato". La prova
  // si porta per VALORE - l'impronta - non per intenzione del chiamante.
  const radice = radiceFinta(t);
  for (const campo of ["linkCatalogo", "requisitoLingua"]) {
    const proposta = { codiceNorm: "TEST 01", campo, valore: "https://qualcosa.test/", fonte: FONTE };
    await assert.rejects(() => applicaEControlla({ radice, proposte: [proposta], campi: [campo],
      etichetta: "x", idTransazione: "x", git: gitFinto(), applica: async () => ({ scritti: 0, disaccordi: [] }) }),
      /senza un "si" nel registro/, `${campo} deve essere rifiutato senza giudizio`);
  }
});

test("catena: con il 'si' nel registro il campo d'arbitrato passa", async (t) => {
  const radice = radiceFinta(t, { campi: { linkCatalogo: "" } });
  const valore = "https://giudicato.test/";
  const proposta = { codiceNorm: "TEST 01", campo: "linkCatalogo", valore, fonte: FONTE };
  appendiEventi(radice, [{ codiceCanonico: "TEST01", campo: "linkCatalogo",
    improntaProposta: improntaValore(valore), esito: "si", quando: "2026-09-02" }]);
  const esito = await applicaEControlla({ radice, proposte: [proposta], campi: ["linkCatalogo"],
    etichetta: "x", idTransazione: "x", git: gitFinto(), applica: async () => ({ scritti: 1, disaccordi: [] }) });
  assert.equal(esito.annullato, false);
});

test("catena: un 'si' su un valore DIVERSO non autorizza la proposta", async (t) => {
  // Se il valore e' cambiato dopo il giudizio, quel giudizio non vale piu':
  // e' il motivo per cui la chiave del registro contiene l'impronta.
  const radice = radiceFinta(t);
  appendiEventi(radice, [{ codiceCanonico: "TEST01", campo: "linkCatalogo",
    improntaProposta: improntaValore("https://vecchio.test/"), esito: "si", quando: "2026-09-02" }]);
  await assert.rejects(() => applicaEControlla({ radice,
    proposte: [{ codiceNorm: "TEST 01", campo: "linkCatalogo", valore: "https://cambiato.test/", fonte: FONTE }],
    campi: ["linkCatalogo"], etichetta: "x", idTransazione: "x", git: gitFinto(),
    applica: async () => ({ scritti: 1, disaccordi: [] }) }), /senza un "si" nel registro/);
});

test("catena: un 'no' nel registro non autorizza niente", async (t) => {
  const radice = radiceFinta(t);
  const valore = "https://bocciato.test/";
  appendiEventi(radice, [{ codiceCanonico: "TEST01", campo: "linkCatalogo",
    improntaProposta: improntaValore(valore), esito: "no", quando: "2026-09-02" }]);
  await assert.rejects(() => applicaEControlla({ radice,
    proposte: [{ codiceNorm: "TEST 01", campo: "linkCatalogo", valore, fonte: FONTE }],
    campi: ["linkCatalogo"], etichetta: "x", idTransazione: "x", git: gitFinto(),
    applica: async () => ({ scritti: 1, disaccordi: [] }) }), /senza un "si" nel registro/);
});

test("catena: nessun nonTrovabile viene scritto (letture sempre vuote)", async (t) => {
  const radice = radiceFinta(t, { campi: { linkSito: "" } });
  let vistoLetture = "non chiamato";
  await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI, etichetta: "x", idTransazione: "x",
    git: gitFinto(), applica: async (opzioni) => { vistoLetture = opzioni.letture; return { scritti: 0, disaccordi: [] }; } });
  assert.deepEqual(vistoLetture, [], "applicaPartner deve ricevere letture: [] o scriverebbe i nonTrovabile");
});

test("catena: anche in --prova il confronto gira davvero e vede il guaio", async (t) => {
  // Un'anteprima che risponde sempre "nessun problema" e' una cerimonia:
  // direbbe che va tutto bene mentre prepara mille guai.
  const radice = radiceFinta(t, { campi: { linkSito: "gia-pieno" } });
  const file = path.join(radice, "js", "atenei", "test", "dati-mete-1.js");
  const esito = await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI,
    etichetta: "x", idTransazione: "x", prova: true, git: gitFinto(),
    applica: async () => ({ scritti: 1, disaccordi: [],
      contenutoProspettico: new Map([[file, sorgente("TEST 01", { linkSito: "sovrascritto" })]]) }) });
  assert.equal(esito.confronto.ok, false, "l'anteprima deve vedere il campo gia' pieno sovrascritto");
  assert.equal(esito.confronto.problemi[0].causa, "campoGiaPienoModificato");
  assert.equal(fs.readFileSync(file, "utf8").includes("sovrascritto"), false, "e non deve toccare il file");
});

// ----------------------------------------------- transazione e commit

test("catena: se il confronto fallisce non si committa e si ripristina", async (t) => {
  const radice = radiceFinta(t, { campi: { linkSito: "gia-pieno" } });
  const git = gitFinto();
  const esito = await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI,
    etichetta: "x", idTransazione: "tx1", git,
    applica: async () => {
      // simula un'applicazione che sovrascrive un campo gia' pieno
      const f = path.join(radice, "js", "atenei", "test", "dati-mete-1.js");
      fs.writeFileSync(f, sorgente("TEST 01", { linkSito: "sovrascritto" }));
      return { scritti: 1, disaccordi: [] };
    } });
  assert.equal(esito.annullato, true);
  assert.equal(esito.commit, null);
  assert.equal(esito.confronto.problemi[0].causa, "campoGiaPienoModificato");
  assert.ok(git.registro.some((a) => a[0] === "restore"), "deve ripristinare con git restore");
  assert.ok(!git.registro.some((a) => a[0] === "commit"), "non deve committare");
});

test("catena: il commit arriva DOPO il confronto, e con percorsi espliciti", async (t) => {
  const radice = radiceFinta(t, { campi: { linkSito: "" } });
  const git = gitFinto();
  await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI, etichetta: "b", idTransazione: "tx2", git,
    applica: async () => {
      fs.writeFileSync(path.join(radice, "js", "atenei", "test", "dati-mete-1.js"), sorgente("TEST 01", { linkSito: "nuovo" }));
      return { scritti: 1, disaccordi: [] };
    } });
  const add = git.registro.find((a) => a[0] === "add");
  assert.ok(add, "deve fare git add");
  assert.ok(!add.includes("-A"), "mai git add -A: prenderebbe file non tracciati");
  assert.ok(add.includes("--"), "i percorsi vanno passati espliciti dopo --");
  const iAdd = git.registro.findIndex((a) => a[0] === "add");
  const iCommit = git.registro.findIndex((a) => a[0] === "commit");
  assert.ok(iCommit > iAdd, "il commit viene dopo l'add");
});

test("catena: il push per blocco arriva dopo il commit, con fetch davanti", async (t) => {
  const radice = radiceFinta(t, { campi: { linkSito: "" } });
  const git = gitFinto();
  const esito = await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI,
    etichetta: "b", idTransazione: "tx4", git, spingi: true,
    applica: async () => {
      fs.writeFileSync(path.join(radice, "js", "atenei", "test", "dati-mete-1.js"), sorgente("TEST 01", { linkSito: "nuovo" }));
      return { scritti: 1, disaccordi: [] };
    } });
  assert.equal(esito.push, "fatto");
  const ordine = git.registro.map((a) => a[0]);
  assert.ok(ordine.indexOf("fetch") > ordine.indexOf("commit"), "il fetch viene dopo il commit");
  assert.ok(ordine.indexOf("push") > ordine.indexOf("fetch"), "e il push dopo il fetch");
});

test("catena: se il push fallisce ci si FERMA, senza merge automatico", async (t) => {
  // Un merge deciso da uno script sui dati del sito e' esattamente cio' che
  // questa cartella e' separata da C:\\erasmuswiz per evitare.
  const radice = radiceFinta(t, { campi: { linkSito: "" } });
  const git = gitFinto();
  const esegui = git.esegui.bind(git);
  git.esegui = (r, a) => { if (a[0] === "push") throw new Error("rejected: non-fast-forward"); return esegui(r, a); };
  const esito = await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI,
    etichetta: "b", idTransazione: "tx5", git, spingi: true,
    applica: async () => {
      fs.writeFileSync(path.join(radice, "js", "atenei", "test", "dati-mete-1.js"), sorgente("TEST 01", { linkSito: "nuovo" }));
      return { scritti: 1, disaccordi: [] };
    } });
  assert.equal(esito.push, "fallito");
  assert.match(esito.fermato, /push non riuscito/);
  assert.ok(esito.commit, "il commit resta: non si torna indietro su un commit riuscito");
  assert.ok(!git.registro.some((a) => a[0] === "merge" || a[0] === "pull"), "nessun merge automatico");
});

test("catena: senza spingi non si tocca il remoto", async (t) => {
  const radice = radiceFinta(t, { campi: { linkSito: "" } });
  const git = gitFinto();
  await applicaEControlla({ radice, proposte: [], campi: CAMPI_AUTOMATICI,
    etichetta: "b", idTransazione: "tx6", git,
    applica: async () => {
      fs.writeFileSync(path.join(radice, "js", "atenei", "test", "dati-mete-1.js"), sorgente("TEST 01", { linkSito: "nuovo" }));
      return { scritti: 1, disaccordi: [] };
    } });
  assert.ok(!git.registro.some((a) => a[0] === "push"), "il push e' una scelta esplicita, non il default");
});

test("catena: HEAD avanzata ma non nostra -> si ferma, non pubblica", (t) => {
  const radice = radiceFinta(t);
  scriviJson(radice, ".transazione.json", { stato: "preparato", baseHead: "vecchio", idTransazione: "tx9",
    fileMete: ["js/atenei/test/dati-mete-1.js"], accessori: [] });
  const git = { esegui: (r, a) => {
    if (a[0] === "rev-parse" && a[1] === "HEAD") return "nuovo";
    if (a[0] === "rev-parse") return "un-altro-genitore";
    if (a[0] === "diff-tree") return "js/atenei/test/dati-mete-1.js";
    if (a[0] === "log") return "un commit di Nicola";
    return "";
  } };
  const esito = recuperaTransazione({ radice, git });
  assert.equal(esito.azione, "fermato");
  assert.match(esito.motivo, /non e' della pipeline/);
});

test("catena: HEAD uguale a baseHead -> ripristino con git restore, non checkout", (t) => {
  const radice = radiceFinta(t);
  scriviJson(radice, ".transazione.json", { stato: "preparato", baseHead: "aaa", idTransazione: "tx3",
    fileMete: ["js/atenei/test/dati-mete-1.js"], accessori: [] });
  const git = gitFinto("aaa");
  const esito = recuperaTransazione({ radice, git });
  assert.equal(esito.azione, "ripristinato");
  const restore = git.registro.find((a) => a[0] === "restore");
  assert.ok(restore, "deve usare git restore");
  assert.ok(restore.includes("--source=aaa"), "restore deve partire dal commit base, non dall'indice");
  assert.ok(!git.registro.some((a) => a[0] === "checkout"), "git checkout -- legge l'indice: non va usato");
});

// ---------------------------------------------- registro e code di arbitrato

test("catena: la coda esclude tutto cio' che il registro ha gia' giudicato", (t) => {
  const radice = radiceFinta(t, { campi: { linkCatalogo: "" } });
  const approvati = [{ codiceNorm: "TEST 01", campo: "linkCatalogo", valore: "https://nuovo.test/", fonte: FONTE }];
  scriviJson(radice, "approvati.json", approvati);
  scriviJson(radice, "partner.json", [{ codiceNorm: "TEST 01", ateneo: "Ateneo di prova" }]);
  const prima = costruisciCode({ radice });
  assert.equal(prima.linkCatalogo.length, 1);
  assert.equal(prima.linkCatalogo[0].ateneo, "Ateneo di prova");
  appendiEventi(radice, [{ codiceCanonico: "TEST01", campo: "linkCatalogo",
    improntaProposta: prima.linkCatalogo[0].improntaProposta, esito: "legacyGiudicato", quando: "2026-09-01" }]);
  const dopo = costruisciCode({ radice });
  assert.equal(dopo.linkCatalogo.length, 0, "un valore gia' giudicato non torna in coda");
});

// ------------------------------------------------------------ blocco zero

test("catena: il blocco zero applica solo i campi elencati in campiDaApplicare", async (t) => {
  const radice = radiceFinta(t, { campi: { notaDisponibilita: "" } });
  scriviJson(radice, "avanzamento.json", { TEST01: { fuso: true, applicato: false, campiDaApplicare: ["notaDisponibilita"] } });
  scriviJson(radice, "approvati.json", [
    { codiceNorm: "TEST 01", campo: "notaDisponibilita", valore: "una nota", fonte: FONTE },
    { codiceNorm: "TEST 01", campo: "linkSito", valore: "https://no.test/", fonte: FONTE },
  ]);
  let viste = null;
  const esito = await bloccoZero({ radice, git: gitFinto(),
    applica: async (o) => { viste = o.approvati; return { scritti: 1, disaccordi: [] }; } });
  assert.equal(esito.saltato, false);
  assert.equal(viste.length, 1, "solo il campo in attesa, non tutte le proposte del partner");
  assert.equal(viste[0].campo, "notaDisponibilita");
  const avanz = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "avanzamento.json"), "utf8"));
  assert.equal(avanz.TEST01.applicato, true, "a fine blocco zero la voce diventa applicata");
});
