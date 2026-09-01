import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { migraAvanzamento, ricostruisciAvanzamento } from "../scripts/migra-avanzamento.mjs";

const fonte = { url: "https://x.test", citazione: "citazione abbastanza lunga", verificataIl: "2026-09-01" };
const lettura = (campi = {}) => ({ file: "TEST01.json", testo: JSON.stringify({ codiceNorm: "TEST 01", campi }), dati: { codiceNorm: "TEST 01", campi } });
const base = { codici: new Set(["TEST01"]), mete: [{ codiceErasmus: "TEST 01", linkSito: "https://x.test" }] };

test("0g: una lettura senza campi e' una conclusione fusa e applicata", () => {
  const esito = ricostruisciAvanzamento({ ...base, letture: [lettura()] });
  assert.equal(esito.ambigui.length, 0);
  assert.deepEqual(esito.avanzamento.TEST01.fuso, true);
  assert.deepEqual(esito.avanzamento.TEST01.applicato, true);
});

test("0g: ogni campo richiede esattamente un esito", () => {
  const l = lettura({ linkSito: { valore: "https://x.test" }, notaDisponibilita: { valore: "Aperta" } });
  const approvato = { codiceNorm: "TEST 01", campo: "linkSito", valore: "https://x.test", fonte };
  const assente = ricostruisciAvanzamento({ ...base, letture: [l], approvati: [approvato] });
  assert.equal(assente.ambigui[0].problemi[0].causa, "esitoAssente");
  const doppio = ricostruisciAvanzamento({ ...base, letture: [lettura({ linkSito: {} })], approvati: [approvato], scartati: [approvato] });
  assert.equal(doppio.ambigui[0].problemi[0].causa, "esitoDuplicato");
});

test("0g: un automatico e' applicato se pubblicato o registrato come disaccordo", () => {
  const approvato = { codiceNorm: "TEST 01", campo: "linkSito", valore: "https://x.test", fonte };
  const pubblicato = ricostruisciAvanzamento({ ...base, letture: [lettura({ linkSito: {} })], approvati: [approvato] });
  assert.equal(pubblicato.avanzamento.TEST01.applicato, true);
  const disaccordo = ricostruisciAvanzamento({ ...base, mete: [{ codiceErasmus: "TEST 01", linkSito: "https://altro.test" }],
    letture: [lettura({ linkSito: {} })], approvati: [approvato], disaccordi: [{ codiceNorm: "TEST01", campo: "linkSito" }] });
  assert.equal(disaccordo.avanzamento.TEST01.applicato, true);
});

test("0g: un automatico fuso ma ancora vuoto resta daApplicare, non ambiguo", () => {
  const approvato = { codiceNorm: "TEST 01", campo: "linkSito", valore: "https://x.test", fonte };
  const esito = ricostruisciAvanzamento({ ...base,
    mete: [{ codiceErasmus: "TEST 01", linkSito: "" }],
    letture: [lettura({ linkSito: {} })], approvati: [approvato] });
  assert.equal(esito.ambigui.length, 0);
  assert.equal(esito.avanzamento.TEST01.fuso, true);
  assert.equal(esito.avanzamento.TEST01.applicato, false);
  assert.deepEqual(esito.avanzamento.TEST01.campiDaApplicare, ["linkSito"]);
});

function radiceMigrazione(t, { conEsito = true } = {}) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-migrazione-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const meteDir = path.join(radice, "js", "atenei", "test");
  const raccolta = path.join(radice, "raccolta");
  fs.mkdirSync(meteDir, { recursive: true });
  fs.mkdirSync(path.join(raccolta, "letture"), { recursive: true });
  fs.writeFileSync(path.join(meteDir, "dati-mete.js"), `const METE = [{ codiceErasmus: "TEST 01", linkSito: "" }];\n`);
  fs.writeFileSync(path.join(raccolta, "letture", "TEST01.json"), JSON.stringify({
    codiceNorm: "TEST 01", campi: { linkSito: {} },
  }));
  fs.writeFileSync(path.join(raccolta, "approvati.json"), JSON.stringify(conEsito ? [{
    codiceNorm: "TEST 01", campo: "linkSito", valore: "https://x.test", fonte,
  }] : []));
  return radice;
}

test("0g: migraAvanzamento scrive daApplicare e non si ferma", (t) => {
  const radice = radiceMigrazione(t);
  assert.doesNotThrow(() => migraAvanzamento({ radice }));
  const avanzamento = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "avanzamento.json")));
  assert.equal(avanzamento.TEST01.applicato, false);
  assert.deepEqual(avanzamento.TEST01.campiDaApplicare, ["linkSito"]);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "avanzamento-ambigui.json"))), []);
});

test("0g: migraAvanzamento non scrive avanzamento se resta un ambiguo vero", (t) => {
  const radice = radiceMigrazione(t, { conEsito: false });
  assert.throws(() => migraAvanzamento({ radice }), /1 letture ambigue/);
  assert.equal(fs.existsSync(path.join(radice, "raccolta", "avanzamento.json")), false);
});

test("0g: una collisione dichiarata resta fuori dalla migrazione ordinaria", () => {
  const esito = ricostruisciAvanzamento({ ...base, letture: [lettura()], collisioni: [{ codiceCanonico: "TEST01" }] });
  assert.deepEqual(esito.collisioniSaltate, ["TEST01"]);
  assert.deepEqual(esito.avanzamento, {});
});
