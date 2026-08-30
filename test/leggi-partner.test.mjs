import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applicaCancelli } from "../scripts/cancelli.mjs";
import { leggiPartner } from "../scripts/leggi-partner.mjs";

function prepara(partner, pagine) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-lettura-"));
  fs.mkdirSync(path.join(radice, "raccolta", "pagine", partner.codiceNorm.replace(/\s+/g, "")), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "partner.json"), JSON.stringify([partner]));
  const dir = path.join(radice, "raccolta", "pagine", partner.codiceNorm.replace(/\s+/g, ""));
  fs.writeFileSync(path.join(dir, "indice.json"), JSON.stringify({ esito: "raggiunto", pagine: pagine.map((p, i) => ({ file: `${String(i + 1).padStart(3,"0")}.json`, url: p.url, punteggio: p.punteggio ?? 10 })) }));
  pagine.forEach((p, i) => fs.writeFileSync(path.join(dir, `${String(i + 1).padStart(3,"0")}.json`), JSON.stringify(p)));
  return radice;
}
const modelli = async () => ["gemini-3.5-flash-lite"];
const partner = (codice = "TEST 01") => ({ codiceNorm: codice, campiMancanti: ["notaDisponibilita", "requisitoLingua"] });
const proposta = (citazione, campo = "notaDisponibilita", livello = "ateneo") => { const fonte = { url: "https://example.test/1", citazione, verificataIl: "2026-08-30" }; return { campi: { [campo]: { valore: campo === "notaDisponibilita" ? "Disponibile per Erasmus" : { op: "ALL", figli: [{ lingua: "Inglese", livello: "B2" }], fonte: fonte.url, verificatoIl: fonte.verificataIl }, livello, ambito: livello === "facolta" ? "Faculty of Law" : null, paginaCitata: 1, fonte } }, nonTrovati: { linkCatalogo: 1 }, note: [] }; };

test("l impronta segue il brano inviato: citazione oltre il taglio scartata, prima approvata", async (t) => {
  const oltre = "Questa citazione riconoscibile e certamente oltre il limite di quarantamila caratteri.";
  const prima = "Questa citazione riconoscibile e certamente prima del limite di quarantamila caratteri.";
  for (const [citazione, testo, causa] of [[oltre, `${"a ".repeat(20000)}${oltre}`, "citazioneAssente"], [prima, `${prima} ${"a ".repeat(20000)}`, undefined]]) {
    const radice = prepara(partner(), [{ url: "https://example.test/1", titolo: "Incoming", testo }]); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
    await leggiPartner({ radice, chiamaModello: async () => proposta(citazione), elencaModelli: modelli });
    const lettura = JSON.parse(fs.readFileSync(path.join(radice,"raccolta","letture","TEST01.json"),"utf8"));
    const esito = await applicaCancelli([lettura], { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
    assert.equal(causa ? esito.scartati[0].causa : esito.approvati.length, causa || 1);
  }
});

test("titolo della pagina declassa il requisito a facolta", async (t) => {
  const frase = "Incoming Erasmus students need English B2 level for admission today.";
  const radice = prepara(partner(), [{ url: "https://example.test/1", titolo: "Faculty of Law - Incoming", testo: `${frase} ${"testo ".repeat(50)}` }]); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  await leggiPartner({ radice, chiamaModello: async () => proposta(frase, "requisitoLingua"), elencaModelli: modelli });
  const lettura = JSON.parse(fs.readFileSync(path.join(radice,"raccolta","letture","TEST01.json"),"utf8"));
  const esito = await applicaCancelli([lettura], { radice, codici: new Set(["TEST 01"]) });
  assert.equal(esito.facolta.length, 1); assert.equal(esito.approvati.length, 0);
});

test("nonTrovati, pagine mute, tetti, ripartenza e 429 sono registrati", async (t) => {
  const p = partner(); const lungo = `${"parola ".repeat(7000)} fine`;
  const radice = prepara(p, [{ url:"https://example.test/1", titolo:"Ateneo", testo: lungo }, { url:"https://example.test/2", titolo:"Muta", testo:null }, { url:"https://example.test/3", titolo:"Corta", testo:"x".repeat(199) }]); t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  let chiamate = 0; const finto = async () => { chiamate++; return proposta("parola parola parola parola parola parola parola parola"); };
  const esito = await leggiPartner({ radice, chiamaModello: finto, elencaModelli: modelli });
  const lettura = JSON.parse(fs.readFileSync(path.join(radice,"raccolta","letture","TEST01.json"),"utf8"));
  assert.equal(esito.nonTrovati.linkCatalogo, 1); assert.equal(lettura.pagineInviate.length, 1); assert.ok(lettura.pagineInviate[0].caratteri <= 40000); assert.equal(lettura.pagineInviate[0].tagliata, true);
  await leggiPartner({ radice, chiamaModello: finto, elencaModelli: modelli }); assert.equal(chiamate, 1);
  const dati = [partner("TEST 02"), partner("TEST 03"), partner("TEST 04")]; fs.writeFileSync(path.join(radice,"raccolta","partner.json"), JSON.stringify(dati));
  for (const x of dati) { const d = path.join(radice,"raccolta","pagine",x.codiceNorm.replace(/\s+/g,"")); fs.mkdirSync(d,{recursive:true}); fs.writeFileSync(path.join(d,"indice.json"),JSON.stringify({esito:"raggiunto",pagine:[{file:"001.json",punteggio:1}]})); fs.writeFileSync(path.join(d,"001.json"),JSON.stringify({url:"https://example.test/1",titolo:"A",testo:"x ".repeat(200)})); }
  // Il 429 che ferma davvero la passata e' quello GIORNALIERO: dal 30/08 sera
  // un 429 al minuto viene aspettato e superato (vedi leggi-partner-quota.test.mjs),
  // quindi qui serve il corpo che dice PerDay, e un'attesa finta per non
  // fermare la prova per un minuto vero.
  const perGiorno = '{"violations":[{"quotaId":"GenerateRequestsPerDayPerProjectPerModel-FreeTier"}]}';
  let n = 0; const quota = async () => { n++; if (n === 3) { const e = new Error(perGiorno); e.status=429; throw e; } return proposta("x x x x x x x x x x x x x x x x x x x x"); };
  const r = await leggiPartner({ radice, chiamaModello: quota, elencaModelli: modelli, attendi: async () => {} }); assert.equal(r.quota429, true); assert.equal(r.chiamateRiuscite, 2);
});
