// La semina e' la migrazione dell'arbitrato del 01/09, che su disco non esiste
// piu'. Sbagliarla ha due modi opposti e ugualmente gravi: seminare troppo poco
// e rimettere in coda i valori gia' bocciati; seminare troppo e SEPPELLIRE una
// proposta nuova che nessuno ha mai guardato.

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { leggiRegistro } from "../scripts/esegui-partner.mjs";
import { codiciDopoArbitrato, seminaArbitrato } from "../scripts/semina-giudizi.mjs";

const FONTE = { url: "https://esempio.test/p", citazione: "Una citazione.", verificataIl: "2026-09-01" };

function radiceFinta(t, campi = {}) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-semina-"));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  const righe = Object.entries(campi).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n");
  fs.writeFileSync(path.join(dir, "dati-mete-1.js"),
    `const METE = [\n{\n  id: "x-1",\n  codiceErasmus: "VECCHIO 01",\n${righe}\n  notePratiche: []\n}\n];\n`);
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  return radice;
}

test("semina: un valore pubblicato diventa 'applicato', uno assente 'legacyGiudicato'", (t) => {
  const radice = radiceFinta(t, { linkCatalogo: "https://pubblicato.test/" });
  const esito = seminaArbitrato({ radice, approvati: [
    { codiceNorm: "VECCHIO 01", campo: "linkCatalogo", valore: "https://pubblicato.test/", fonte: FONTE },
    { codiceNorm: "VECCHIO 01", campo: "requisitoLingua", valore: { livello: "B2" }, fonte: FONTE },
  ] });
  assert.equal(esito.applicato, 1);
  assert.equal(esito.legacyGiudicato, 1);
  assert.equal(leggiRegistro(radice).size, 2);
});

test("semina: 'campo pieno' non basta, serve l'uguaglianza col valore proposto", (t) => {
  // Un campo riempito da un'altra fonte non e' un si' dato a QUESTA proposta.
  const radice = radiceFinta(t, { linkCatalogo: "https://un-altro.test/" });
  const esito = seminaArbitrato({ radice, approvati: [
    { codiceNorm: "VECCHIO 01", campo: "linkCatalogo", valore: "https://proposto.test/", fonte: FONTE },
  ] });
  assert.equal(esito.applicato, 0, "valore diverso: non e' un si'");
  assert.equal(esito.legacyGiudicato, 1);
});

test("semina: NON seppellisce una proposta nata dopo l'arbitrato", (t) => {
  // E' il difetto opposto e piu' insidioso: seminare una proposta nuova la
  // toglie dalla coda per sempre, senza che nessuno l'abbia mai vista.
  const radice = radiceFinta(t, { linkCatalogo: "" });
  fs.writeFileSync(path.join(radice, "raccolta", "esegui-partner.jsonl"),
    JSON.stringify({ codici: ["NUOVO 99"] }) + "\n");
  assert.ok(codiciDopoArbitrato(radice).has("NUOVO99"), "il diario deve dire chi la catena ha gia' lavorato");
  const esito = seminaArbitrato({ radice, approvati: [
    { codiceNorm: "VECCHIO 01", campo: "linkCatalogo", valore: "https://vecchio.test/", fonte: FONTE },
    { codiceNorm: "NUOVO 99", campo: "linkCatalogo", valore: "https://nuovo.test/", fonte: FONTE },
  ] });
  assert.equal(esito.saltatiPerchePosteriori, 1, "la proposta del partner gia' lavorato non si semina");
  assert.equal(esito.eventi, 1);
  const registro = leggiRegistro(radice);
  assert.equal([...registro.values()].some((e) => e.codiceCanonico === "NUOVO99"), false,
    "un valore mai giudicato non deve finire nel registro");
});

test("semina: e' una migrazione, non gira due volte", (t) => {
  const radice = radiceFinta(t, { linkCatalogo: "" });
  const approvati = [{ codiceNorm: "VECCHIO 01", campo: "linkCatalogo", valore: "https://x.test/", fonte: FONTE }];
  seminaArbitrato({ radice, approvati });
  const secondo = seminaArbitrato({ radice, approvati });
  assert.equal(secondo.giaFatta, true);
  assert.equal(leggiRegistro(radice).size, 1, "nessun evento duplicato");
});

test("semina: --prova non scrive niente", (t) => {
  const radice = radiceFinta(t, { linkCatalogo: "" });
  const esito = seminaArbitrato({ radice, prova: true, approvati: [
    { codiceNorm: "VECCHIO 01", campo: "linkCatalogo", valore: "https://x.test/", fonte: FONTE },
  ] });
  assert.equal(esito.eventi, 1);
  assert.equal(fs.existsSync(path.join(radice, "raccolta", "giudizi.jsonl")), false);
});
