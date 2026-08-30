import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { readFileSync } from "node:fs";
import { riscaricaPdf } from "../scripts/riscarica-pdf.mjs";

const fixture = (nome) => readFileSync(new URL(`./fixtures/pdf/${nome}`, import.meta.url));
const robotsPermette = async () => ({ regole: [] });

function prepara(pagine) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-pdf-"));
  for (const [codice, elenco] of Object.entries(pagine)) {
    const cartella = path.join(radice, "raccolta", "pagine", codice.replace(/\s+/g, ""));
    fs.mkdirSync(cartella, { recursive: true });
    fs.writeFileSync(path.join(cartella, "indice.json"), JSON.stringify({ codice, pagine: elenco.map((_, i) => ({ file: `${String(i + 1).padStart(3, "0")}.json` })) }));
    elenco.forEach((pagina, i) => fs.writeFileSync(path.join(cartella, `${String(i + 1).padStart(3, "0")}.json`), JSON.stringify({ url: `https://iniziale.example/${i}`, urlFinale: `https://pdf.example/${codice}/${i}.pdf`, tipo: "pdf", testo: null, ...pagina })));
  }
  return radice;
}

function pagina(radice, codice, n = 1) {
  return JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "pagine", codice.replace(/\s+/g, ""), `${String(n).padStart(3, "0")}.json`), "utf8"));
}

function scaricatoreDa(mappa, contatore) {
  return async (url) => {
    contatore.numero++;
    const corpo = mappa.get(url);
    return corpo ? { ok: true, corpo } : { ok: false, corpo: Buffer.alloc(0) };
  };
}

test("riscarica una factsheet e conserva il testo leggibile nella pagina", async (t) => {
  const radice = prepara({ "A BUONO": [{}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const richieste = { numero: 0 };
  const url = "https://pdf.example/A BUONO/0.pdf";
  await riscaricaPdf({ radice, scarica: scaricatoreDa(new Map([[url, fixture("factsheet-vera.pdf")]]), richieste), regoleRobots: robotsPermette });
  const salvata = pagina(radice, "A BUONO");
  assert.match(salvata.testo, /Fact Sheet Student Exchange Programme/);
  assert.equal(salvata.tipo, "pdf");
  assert.ok(salvata.estrattoIl);
  assert.equal(salvata.estrazioneFallita, undefined);
  assert.equal(richieste.numero, 1);
});

test("segna il PDF con font proprietario come illeggibile", async (t) => {
  const radice = prepara({ "A ILLEGG": [{}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const richieste = { numero: 0 }, url = "https://pdf.example/A ILLEGG/0.pdf";
  await riscaricaPdf({ radice, scarica: scaricatoreDa(new Map([[url, fixture("font-illeggibile.pdf")]]), richieste), regoleRobots: robotsPermette });
  assert.equal(pagina(radice, "A ILLEGG").testo, null);
  assert.equal(pagina(radice, "A ILLEGG").estrazioneFallita, "illeggibile");
});

test("alla ripartenza non richiede ne i PDF letti ne quelli falliti", async (t) => {
  const radice = prepara({ "A RIP": [{}, {}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const richieste = { numero: 0 };
  const mappa = new Map([
    ["https://pdf.example/A RIP/0.pdf", fixture("factsheet-vera.pdf")],
    ["https://pdf.example/A RIP/1.pdf", fixture("font-illeggibile.pdf")],
  ]);
  const opzioni = { radice, scarica: scaricatoreDa(mappa, richieste), regoleRobots: robotsPermette };
  await riscaricaPdf(opzioni);
  assert.equal(richieste.numero, 2);
  await riscaricaPdf(opzioni);
  assert.equal(richieste.numero, 2);
});

test("un contenuto non PDF e segnato senza fermare l altro partner", async (t) => {
  const radice = prepara({ "A NONPDF": [{}], "A ALTRO": [{}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const richieste = { numero: 0 };
  const mappa = new Map([
    ["https://pdf.example/A NONPDF/0.pdf", Buffer.from("questa non e una factsheet")],
    ["https://pdf.example/A ALTRO/0.pdf", fixture("factsheet-vera.pdf")],
  ]);
  const esito = await riscaricaPdf({ radice, scarica: scaricatoreDa(mappa, richieste), regoleRobots: robotsPermette });
  assert.equal(pagina(radice, "A NONPDF").estrazioneFallita, "nonPdf");
  assert.match(pagina(radice, "A ALTRO").testo, /Fact Sheet Student Exchange Programme/);
  assert.equal(esito.letti, 1);
});

test("un PDF oltre 8 MB e troppo grande prima dell estrazione", async (t) => {
  const radice = prepara({ "A GRANDE": [{}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const grande = Buffer.alloc(8 * 1024 * 1024 + 1, 65); Buffer.from("%PDF").copy(grande);
  const richieste = { numero: 0 }, url = "https://pdf.example/A GRANDE/0.pdf";
  const esito = await riscaricaPdf({ radice, scarica: scaricatoreDa(new Map([[url, grande]]), richieste), regoleRobots: robotsPermette });
  assert.equal(pagina(radice, "A GRANDE").estrazioneFallita, "troppoGrande");
  assert.equal(esito.letti, 0);
});

test("robots vieta il PDF senza alcuna richiesta al file", async (t) => {
  const radice = prepara({ "A ROBOTS": [{}] }); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const richieste = { numero: 0 };
  await riscaricaPdf({ radice, scarica: scaricatoreDa(new Map(), richieste), regoleRobots: async () => ({ regole: ["/"] }) });
  assert.equal(pagina(radice, "A ROBOTS").estrazioneFallita, "robotsVieta");
  assert.equal(richieste.numero, 0);
});
