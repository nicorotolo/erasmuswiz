// L'applicazione di un arbitrato umano. E' l'unico percorso per cui un
// linkCatalogo entra nei dati, e il suo cancello non e' la fiducia nel
// chiamante: e' l'impronta del valore, che deve avere un "si" nel registro.

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { improntaValore, leggiRegistro } from "../scripts/esegui-partner.mjs";
import { abbinaVerdetti, applicaArbitrato } from "../scripts/applica-arbitrato.mjs";

const FONTE = { url: "https://esempio.test/p", citazione: "Una citazione.", verificataIl: "2026-09-02" };
const VALORE = "https://catalogo.test/corsi";

function radiceFinta(t) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-arb-"));
  const dir = path.join(radice, "js", "atenei", "test");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "dati-mete-1.js"),
    'const METE = [\n{\n  id: "x-1",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: "",\n  notePratiche: []\n}\n];\n');
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  return radice;
}

const proposta = () => ({ codiceNorm: "TEST 01", campo: "linkCatalogo", valore: VALORE, fonte: FONTE });
const verdetto = (esito) => ({ codiceCanonico: "TEST01", campo: "linkCatalogo",
  improntaProposta: improntaValore(VALORE), esito });

function gitFinto() {
  const registro = [];
  let testa = "aaa";
  return { registro, esegui(radice, a) {
    registro.push(a);
    if (a[0] === "rev-parse" && a[1] === "HEAD") return testa;
    if (a[0] === "commit") { testa = "bbb"; return ""; }
    return "";
  } };
}

test("arbitrato: un verdetto con impronta ignota non si abbina e ferma tutto", async (t) => {
  const radice = radiceFinta(t);
  const esito = abbinaVerdetti({ radice, approvati: [proposta()],
    verdetti: [{ ...verdetto("si"), improntaProposta: "0".repeat(64) }] });
  assert.equal(esito.abbinati.length, 0);
  assert.equal(esito.orfani[0].causa, "improntaSenzaProposta");
  await assert.rejects(() => applicaArbitrato({ radice, approvati: [proposta()], git: gitFinto(),
    verdetti: [{ ...verdetto("si"), improntaProposta: "0".repeat(64) }],
    applica: async () => ({ scritti: 0, disaccordi: [] }) }), /non abbinati/);
});

test("arbitrato: un 'no' diventa evento e NON tocca i dati", async (t) => {
  const radice = radiceFinta(t);
  const git = gitFinto();
  let applicaChiamata = false;
  const esito = await applicaArbitrato({ radice, approvati: [proposta()], verdetti: [verdetto("no")], git,
    applica: async () => { applicaChiamata = true; return { scritti: 1, disaccordi: [] }; } });
  assert.equal(esito.no, 1);
  assert.equal(applicaChiamata, false, "un no non deve arrivare all'applicazione");
  assert.equal(esito.commit, null);
  assert.equal([...leggiRegistro(radice).values()][0].esito, "no");
});

test("arbitrato: un 'si' applica, e poi diventa 'applicato' col commit come fonte", async (t) => {
  const radice = radiceFinta(t);
  const git = gitFinto();
  const esito = await applicaArbitrato({ radice, approvati: [proposta()], verdetti: [verdetto("si")], git,
    applica: async ({ radice: r }) => {
      fs.writeFileSync(path.join(r, "js", "atenei", "test", "dati-mete-1.js"),
        `const METE = [\n{\n  id: "x-1",\n  codiceErasmus: "TEST 01",\n  linkCatalogo: ${JSON.stringify(VALORE)},\n  notePratiche: []\n}\n];\n`);
      return { scritti: 1, disaccordi: [] };
    } });
  assert.equal(esito.confronto.ok, true);
  assert.deepEqual(esito.confronto.scritti, { linkCatalogo: 1 });
  assert.ok(esito.commit);
  const stato = [...leggiRegistro(radice).values()];
  assert.equal(stato.length, 1, "un solo stato finale per quella proposta");
  assert.equal(stato[0].esito, "applicato", "il si diventa applicato DOPO la scrittura");
  assert.equal(stato[0].fonte, esito.commit, "e porta il commit come fonte");
});

test("arbitrato: rieseguirlo non riscrive gli stessi eventi", async (t) => {
  // La chiave del registro va costruita in UN posto solo: costruirla qui con un
  // separatore diverso rendeva questo controllo sempre falso, e gli eventi
  // finivano scritti due volte.
  const radice = radiceFinta(t);
  const opzioni = { radice, approvati: [proposta()], verdetti: [verdetto("no")],
    applica: async () => ({ scritti: 0, disaccordi: [] }) };
  const primo = await applicaArbitrato({ ...opzioni, git: gitFinto() });
  assert.equal(primo.eventiNuovi, 1);
  const secondo = await applicaArbitrato({ ...opzioni, git: gitFinto() });
  assert.equal(secondo.eventiNuovi, 0, "il secondo giro non deve aggiungere eventi");
  const righe = fs.readFileSync(path.join(radice, "raccolta", "giudizi.jsonl"), "utf8").trim().split("\n");
  assert.equal(righe.length, 1, "e il file non deve crescere");
});
