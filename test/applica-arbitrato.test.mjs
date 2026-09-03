// L'applicazione di un arbitrato umano. E' l'unico percorso per cui un
// linkCatalogo entra nei dati, e il suo cancello non e' la fiducia nel
// chiamante: e' l'impronta del valore, che deve avere un "si" nel registro.

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  appendiEventi, applicaEControlla, codaRecupero, codaRiesame, costruisciCode,
  improntaValore, leggiRegistro, statoGiudizio,
} from "../scripts/esegui-partner.mjs";
import { preparaApplicazione } from "../scripts/applica-partner.mjs";
import {
  abbinaVerdetti, applicaArbitrato, recuperaArbitrati,
} from "../scripts/applica-arbitrato.mjs";

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

function gitFinto({ sporco = false, fallisciPush = null, locali = false } = {}) {
  const registro = [];
  let testa = "aaa";
  let numeroCommit = 0, numeroPush = 0;
  return { registro, esegui(radice, a) {
    registro.push(a);
    if (a[0] === "rev-parse" && a[1] === "HEAD") return testa;
    if (a[0] === "status") return sporco ? " M raccolta/giudizi.jsonl" : "";
    if (a[0] === "log" && a[1] === "@{u}..HEAD") return locali ? testa : "";
    if (a[0] === "commit") { numeroCommit++; testa = `commit-${numeroCommit}`; sporco = false; return ""; }
    if (a[0] === "push") {
      numeroPush++;
      if (numeroPush === fallisciPush) throw new Error("push simulato fallito");
      locali = false;
    }
    return "";
  } };
}

function radiceConMete(t, fileMete) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-atto0-"));
  for (let i = 0; i < fileMete.length; i++) {
    const cartella = path.join(radice, "js", "atenei", `test-${i}`);
    fs.mkdirSync(cartella, { recursive: true });
    const blocchi = fileMete[i].map((m) => `{
  id: ${JSON.stringify(m.id)},
  codiceErasmus: ${JSON.stringify(m.codiceErasmus)},
  linkCatalogo: ${JSON.stringify(m.linkCatalogo)},
  notePratiche: []
}`).join(",\n");
    fs.writeFileSync(path.join(cartella, `dati-mete-${i}.js`), `const METE = [\n${blocchi}\n];\n`);
  }
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  return radice;
}

const meta = (codiceErasmus, linkCatalogo = "", id = codiceErasmus) => ({
  id, codiceErasmus, linkCatalogo, notePratiche: [],
});
const propostaPer = (codiceNorm, valore = VALORE) => ({
  codiceNorm, campo: "linkCatalogo", valore, fonte: FONTE,
});
const verdettoPer = (codiceCanonico, valore, esito) => ({
  codiceCanonico, campo: "linkCatalogo", improntaProposta: improntaValore(valore), esito,
});
const eventoPer = (codiceCanonico, valore, esito, quando = "2026-09-03") => ({
  codiceCanonico, campo: "linkCatalogo", improntaProposta: improntaValore(valore), esito, quando,
});

async function applicatoreTemporaneo({ radice, approvati, prova = false }) {
  const file = [];
  const visita = (cartella) => {
    for (const nome of fs.readdirSync(cartella, { withFileTypes: true })) {
      const completo = path.join(cartella, nome.name);
      if (nome.isDirectory()) visita(completo);
      else if (/dati-mete-.*\.js$/.test(nome.name)) file.push(completo);
    }
  };
  visita(path.join(radice, "js", "atenei"));
  const originali = new Map(file.map((f) => [f, fs.readFileSync(f, "utf8")]));
  const preparata = preparaApplicazione({ originali, proposte: approvati, letture: [] });
  const contenutoProspettico = new Map(preparata.fileToccati.map((f) => [f, preparata.fileNuovi.get(f)]));
  if (!prova) for (const [f, testo] of contenutoProspettico) fs.writeFileSync(f, testo);
  return { ...preparata, contenutoProspettico };
}

const leggiCoda = (radice, nome) => JSON.parse(fs.readFileSync(path.join(radice, "raccolta", nome), "utf8"));
const statoPer = (radice, codice, valore) => statoGiudizio(leggiRegistro(radice)
  .get(`${codice}\u0000linkCatalogo\u0000${improntaValore(valore)}`));

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

test("Atto 0 - prova 1: nonSo -> si applica e conserva il verdetto estraneo", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "nonSo")]);
  const esito = await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica: applicatoreTemporaneo, quando: "2026-09-03" });
  assert.equal(statoPer(radice, "TEST01", VALORE), "applicato");
  assert.equal(statoPer(radice, "ALTRO02", altro), "no", "il secondo partner deve arrivare al suo no");
  assert.match(fs.readFileSync(path.join(radice, "js", "atenei", "test-0", "dati-mete-0.js"), "utf8"), new RegExp(VALORE));
  assert.equal(esito.confronto.ok, true);
  assert.ok(!leggiCoda(radice, "da-riesaminare.json").some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(!leggiCoda(radice, "da-recuperare.json").some((v) => v.codiceCanonico === "TEST01"));
});

test("Atto 0 - prova 2: nonSo -> no accorcia il riesame e conserva l'estraneo", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "nonSo")]);
  const git = gitFinto();
  const esito = await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "no"), verdettoPer("ALTRO02", altro, "nonSo")],
    git, applica: applicatoreTemporaneo });
  assert.equal(esito.eventiNuovi, 2);
  assert.equal(statoPer(radice, "TEST01", VALORE), "no");
  assert.equal(statoPer(radice, "ALTRO02", altro), "nonSo", "il secondo partner deve restare riesaminabile");
  const riesame = leggiCoda(radice, "da-riesaminare.json");
  assert.ok(!riesame.some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(riesame.some((v) => v.codiceCanonico === "ALTRO02"));
  assert.ok(!leggiCoda(radice, "da-recuperare.json").some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(git.registro.some((a) => a[0] === "commit"), "anche un lotto senza dati deve committare il registro");
  assert.ok(!git.registro.some((a) => a[0] === "add" && a.some((x) => /dati-mete/.test(x))),
    "un lotto di no/nonSo non deve creare commit dati");
});

test("Atto 0 - prova 3: si identico non crea eventi ne richiama l'applicatore", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01", VALORE), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si")]);
  let chiamate = 0;
  const applica = async (o) => { chiamate++; return applicatoreTemporaneo(o); };
  await recuperaArbitrati({ radice, approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    git: gitFinto(), applica });
  assert.equal(chiamate, 0, "il recupero gia' uguale si chiude senza applicatore");
  const prima = fs.readFileSync(path.join(radice, "raccolta", "giudizi.jsonl"), "utf8");
  const esito = await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica });
  assert.equal(esito.eventiNuovi, 1, "l'unico evento nuovo appartiene al partner estraneo");
  assert.equal(chiamate, 0);
  const dopo = fs.readFileSync(path.join(radice, "raccolta", "giudizi.jsonl"), "utf8");
  assert.equal(dopo.split("\n").filter((r) => r.includes('"codiceCanonico":"TEST01"')).length,
    prima.split("\n").filter((r) => r.includes('"codiceCanonico":"TEST01"')).length);
  assert.equal(statoPer(radice, "ALTRO02", altro), "no");
});

test("Atto 0 - prova 4: applicato -> si non regredisce e conserva l'estraneo", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01", VALORE), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "applicato")]);
  let chiamate = 0;
  const esito = await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica: async () => { chiamate++; return {}; } });
  assert.equal(esito.eventiNuovi, 1);
  assert.equal(chiamate, 0);
  assert.equal(statoPer(radice, "TEST01", VALORE), "applicato");
  assert.equal(statoPer(radice, "ALTRO02", altro), "no");
});

test("Atto 0 - prova 5: terminali contraddetti sono giaChiuso e i dati restano", async (t) => {
  for (const [iniziale, nuovo] of [["applicato", "no"], ["no", "si"]]) {
    const altro = `https://altro.test/${iniziale}`;
    const radice = radiceConMete(t, [[meta("TEST 01", iniziale === "applicato" ? VALORE : ""), meta("ALTRO 02")]]);
    appendiEventi(radice, [eventoPer("TEST01", VALORE, iniziale)]);
    const file = path.join(radice, "js", "atenei", "test-0", "dati-mete-0.js");
    const prima = fs.readFileSync(file, "utf8");
    await assert.rejects(() => applicaArbitrato({ radice,
      approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
      verdetti: [verdettoPer("TEST01", VALORE, nuovo), verdettoPer("ALTRO02", altro, "nonSo")],
      git: gitFinto(), applica: applicatoreTemporaneo }), /giaChiuso/);
    assert.equal(fs.readFileSync(file, "utf8"), prima);
    assert.equal(statoPer(radice, "TEST01", VALORE), iniziale);
    assert.equal(statoPer(radice, "ALTRO02", altro), "daGiudicare",
      "il lotto atomico non deve registrare nemmeno l'estraneo se contiene un orfano");
  }
});

test("Atto 0 - prova 6: errore dopo nonSo -> si lascia recupero tecnico visibile", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "nonSo")]);
  const file = path.join(radice, "js", "atenei", "test-0", "dati-mete-0.js");
  const prima = fs.readFileSync(file, "utf8");
  await assert.rejects(() => applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica: async () => { throw new Error("applicazione simulata fallita"); } }), /simulata fallita/);
  assert.equal(fs.readFileSync(file, "utf8"), prima);
  assert.equal(statoPer(radice, "TEST01", VALORE), "siNonApplicato");
  assert.equal(statoPer(radice, "ALTRO02", altro), "no", "il verdetto estraneo gia' registrato deve sopravvivere");
  assert.ok(leggiCoda(radice, "da-recuperare.json").some((v) => v.codiceCanonico === "TEST01" && v.causa === "applicazioneNonRiuscita"));
  assert.ok(!leggiCoda(radice, "da-riesaminare.json").some((v) => v.codiceCanonico === "TEST01"));
});

test("Atto 0 - prova 7: valore gia uguale chiude applicato senza commit dati", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01", VALORE), meta("ALTRO 02")]]);
  const git = gitFinto();
  await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git, applica: applicatoreTemporaneo });
  assert.equal(statoPer(radice, "TEST01", VALORE), "applicato");
  assert.equal(statoPer(radice, "ALTRO02", altro), "no");
  const add = git.registro.filter((a) => a[0] === "add");
  assert.ok(add.length >= 2, "i due commit del registro devono esistere");
  assert.ok(add.every((a) => a.includes("raccolta/giudizi.jsonl")), "nessun file dati va messo in stage");
});

test("Atto 0 - prova 8: registro e due code concordano senza perdere l'estraneo", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "nonSo")]);
  await applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "no"), verdettoPer("ALTRO02", altro, "nonSo")],
    git: gitFinto(), applica: applicatoreTemporaneo });
  const umana = leggiCoda(radice, "da-riesaminare.json");
  const tecnica = leggiCoda(radice, "da-recuperare.json");
  assert.equal(statoPer(radice, "TEST01", VALORE), "no");
  assert.ok(!umana.some((v) => v.codiceCanonico === "TEST01") && !tecnica.some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(umana.some((v) => v.codiceCanonico === "ALTRO02"), "l'estraneo resta nella propria uscita");
  assert.ok(!tecnica.some((v) => v.codiceCanonico === "ALTRO02"));
});

test("Atto 0 - prova 9: le forme reali seminate e duplicate restano classificabili", (t) => {
  const valori = ["a", "b", "c", "d"];
  const codici = ["UNO01", "DUE02", "TRE03", "QUA04"];
  const radice = radiceConMete(t, [[meta("UNO 01", valori[0]), meta("DUE 02"), meta("TRE 03"), meta("QUA 04", valori[3])]]);
  appendiEventi(radice, [
    eventoPer(codici[0], valori[0], "applicato"),
    eventoPer(codici[1], valori[1], "legacyGiudicato"),
    eventoPer(codici[2], valori[2], "no"), eventoPer(codici[2], valori[2], "no"),
    eventoPer(codici[3], valori[3], "si"), eventoPer(codici[3], valori[3], "applicato"),
  ]);
  const proposte = codici.map((c, i) => propostaPer(c, valori[i]));
  assert.doesNotThrow(() => costruisciCode({ radice, approvati: proposte, partner: [] }),
    "il chiamante deve accettare tutte le forme reali");
  const stati = [...leggiRegistro(radice).values()].map(statoGiudizio);
  assert.deepEqual(stati, ["applicato", "legacyGiudicato", "no", "applicato"]);
  assert.ok(!stati.includes("statoSconosciuto"));
});

test("Atto 0 - prova 10: legacyGiudicato resta fuori dalle code e non autorizza", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  const propostaLegacy = propostaPer("TEST 01");
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "legacyGiudicato")]);
  costruisciCode({ radice, approvati: [propostaLegacy, propostaPer("ALTRO 02", altro)], partner: [] });
  assert.ok(!leggiCoda(radice, "da-riesaminare.json").some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(!leggiCoda(radice, "da-recuperare.json").some((v) => v.codiceCanonico === "TEST01"));
  await assert.rejects(() => applicaEControlla({ radice, proposte: [propostaLegacy], campi: ["linkCatalogo"],
    etichetta: "x", idTransazione: "x", git: gitFinto(), applica: applicatoreTemporaneo }), /senza un "si"/);
  const ordinaria = leggiCoda(radice, "arbitrato-linkCatalogo.json");
  assert.ok(!ordinaria.some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(ordinaria.some((v) => v.codiceCanonico === "ALTRO02"), "la proposta estranea deve restare ordinaria");
});

test("Atto 0 - prova 11: esito ignoto ferma i chiamanti e non diventa daGiudicare", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "boh")]);
  const proposte = [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)];
  assert.throws(() => costruisciCode({ radice, approvati: proposte, partner: [] }), /stato giudizio sconosciuto/);
  await assert.rejects(() => applicaArbitrato({ radice, approvati: proposte,
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica: applicatoreTemporaneo }), /stato giudizio sconosciuto/);
  assert.equal(statoPer(radice, "ALTRO02", altro), "daGiudicare", "l'estraneo non va perso in un lotto fermato");
});

test("Atto 0 - prova 12: recupero decide vuoto uguale conflitto e propostaAssente sui dati", async (t) => {
  const casi = [
    { nome: "vuoto", campo: "", proposta: true, stato: "applicato" },
    { nome: "uguale", campo: VALORE, proposta: true, stato: "applicato" },
    { nome: "diverso", campo: "https://diverso.test/", proposta: true, causa: "conflittoValoreDiverso" },
    { nome: "assente", campo: "", proposta: false, causa: "propostaAssente" },
  ];
  for (const caso of casi) {
    const radice = radiceConMete(t, [[meta("TEST 01", caso.campo), meta("ALTRO 02")]]);
    appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("ALTRO02", "altro", "nonSo")]);
    const proposte = [propostaPer("ALTRO 02", "altro"), ...(caso.proposta ? [propostaPer("TEST 01")] : [])];
    await recuperaArbitrati({ radice, approvati: proposte, git: gitFinto(), applica: applicatoreTemporaneo });
    if (caso.stato) assert.equal(statoPer(radice, "TEST01", VALORE), caso.stato, caso.nome);
    else assert.ok(leggiCoda(radice, "da-recuperare.json")
      .some((v) => v.codiceCanonico === "TEST01" && v.causa === caso.causa), caso.nome);
    assert.ok(codaRiesame({ radice, approvati: proposte, partner: [] })
      .some((v) => v.codiceCanonico === "ALTRO02"), "la voce umana estranea deve sopravvivere");
  }
});

test("Atto 0 - prova 13: la coda tecnica nasce anche dagli eventi senza proposta", (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("ALTRO02", "altro", "si")]);
  const coda = codaRecupero({ radice, approvati: [propostaPer("ALTRO 02", "altro")], partner: [] });
  assert.ok(coda.some((v) => v.codiceCanonico === "TEST01" && v.causa === "propostaAssente"));
  assert.ok(coda.some((v) => v.codiceCanonico === "ALTRO02"), "la proposta estranea riagganciata deve restare");
});

test("Atto 0 - prova 14: siNonApplicato va solo nella coda tecnica", (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("ALTRO02", "altro", "nonSo")]);
  const proposte = [propostaPer("TEST 01"), propostaPer("ALTRO 02", "altro")];
  assert.ok(codaRecupero({ radice, approvati: proposte, partner: [] }).some((v) => v.codiceCanonico === "TEST01"));
  const umana = codaRiesame({ radice, approvati: proposte, partner: [] });
  assert.ok(!umana.some((v) => v.codiceCanonico === "TEST01"));
  assert.ok(umana.some((v) => v.codiceCanonico === "ALTRO02"), "il vero nonSo estraneo resta umano");
});

test("Atto 0 - prova 15: occorrenze miste riempiono solo il vuoto prima di applicato", async (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01", VALORE, "piena")], [meta("TEST01", "", "vuota"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("ALTRO02", "altro", "nonSo")]);
  const proposte = [propostaPer("TEST 01"), propostaPer("ALTRO 02", "altro")];
  await recuperaArbitrati({ radice, approvati: proposte, git: gitFinto(), applica: applicatoreTemporaneo });
  assert.equal(statoPer(radice, "TEST01", VALORE), "applicato");
  const testi = [0, 1].map((i) => fs.readFileSync(path.join(radice, "js", "atenei", `test-${i}`, `dati-mete-${i}.js`), "utf8"));
  assert.ok(testi.every((testo) => testo.includes(`linkCatalogo: ${JSON.stringify(VALORE)}`)));
  assert.ok(codaRiesame({ radice, approvati: proposte, partner: [] }).some((v) => v.codiceCanonico === "ALTRO02"));
});

test("Atto 0 - prova 16: metaAssente resta una causa visibile", async (t) => {
  const radice = radiceConMete(t, [[meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("ALTRO02", "altro", "nonSo")]);
  const proposte = [propostaPer("TEST 01"), propostaPer("ALTRO 02", "altro")];
  await recuperaArbitrati({ radice, approvati: proposte, git: gitFinto(), applica: applicatoreTemporaneo });
  assert.ok(leggiCoda(radice, "da-recuperare.json")
    .some((v) => v.codiceCanonico === "TEST01" && v.causa === "metaAssente"));
  assert.ok(codaRiesame({ radice, approvati: proposte, partner: [] }).some((v) => v.codiceCanonico === "ALTRO02"));
});

test("Atto 0 - prova 17: propostaAmbigua ferma invece di scegliere l'ultima", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  const doppia = [propostaPer("TEST 01"), propostaPer("TEST01"), propostaPer("ALTRO 02", altro)];
  await assert.rejects(() => applicaArbitrato({ radice, approvati: doppia,
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto(), applica: applicatoreTemporaneo }), /propostaAmbigua/);
  assert.equal(statoPer(radice, "TEST01", VALORE), "daGiudicare");
  assert.equal(statoPer(radice, "ALTRO02", altro), "daGiudicare", "l'estraneo non deve essere scartato dal fermo");
});

test("Atto 0 - prova 18: nonSo senza proposta resta nel riesame inverso", (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "nonSo"), eventoPer("ALTRO02", "altro", "nonSo")]);
  const coda = codaRiesame({ radice, approvati: [propostaPer("ALTRO 02", "altro")], partner: [] });
  assert.ok(coda.some((v) => v.codiceCanonico === "TEST01" && v.causa === "propostaAssente"));
  assert.ok(coda.some((v) => v.codiceCanonico === "ALTRO02"), "la proposta estranea riagganciata resta");
});

test("Atto 0 - prova 19: righe rotte vanno in quarantena e bloccano la pipeline", async (t) => {
  for (const riga of ["{non-json", JSON.stringify({ codiceCanonico: "TEST01", esito: "si" })]) {
    const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
    fs.writeFileSync(path.join(radice, "raccolta", "giudizi.jsonl"), `${riga}\n`);
    const proposte = [propostaPer("TEST 01"), propostaPer("ALTRO 02", "altro")];
    assert.throws(() => costruisciCode({ radice, approvati: proposte, partner: [] }), /quarantena/);
    await assert.rejects(() => applicaArbitrato({ radice, approvati: proposte,
      verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", "altro", "no")],
      git: gitFinto(), applica: applicatoreTemporaneo }), /quarantena/);
    assert.ok(fs.existsSync(path.join(radice, "raccolta", "giudizi-quarantena.json")));
  }
});

test("Atto 0 - prova 20: una fine valida non nasconde una storia corrotta", (t) => {
  for (const sequenza of [["no", "si"], ["boh", "applicato"]]) {
    const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
    appendiEventi(radice, sequenza.map((esito) => eventoPer("TEST01", VALORE, esito)));
    assert.throws(() => costruisciCode({ radice,
      approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", "altro")], partner: [] }),
    /stato giudizio sconosciuto/);
    assert.equal(statoPer(radice, "ALTRO02", "altro"), "daGiudicare", "l'estraneo resta intatto");
  }
});

test("Atto 0 - prova 21: push iniziale fallito impedisce ogni applicazione", async (t) => {
  const altro = "https://altro.test/corsi";
  const radice = radiceConMete(t, [[meta("TEST 01"), meta("ALTRO 02")]]);
  const file = path.join(radice, "js", "atenei", "test-0", "dati-mete-0.js");
  const prima = fs.readFileSync(file, "utf8");
  let chiamate = 0;
  await assert.rejects(() => applicaArbitrato({ radice,
    approvati: [propostaPer("TEST 01"), propostaPer("ALTRO 02", altro)],
    verdetti: [verdettoPer("TEST01", VALORE, "si"), verdettoPer("ALTRO02", altro, "no")],
    git: gitFinto({ fallisciPush: 1 }), applica: async () => { chiamate++; return {}; } }), /push simulato fallito/);
  assert.equal(chiamate, 0);
  assert.equal(fs.readFileSync(file, "utf8"), prima);
  assert.equal(statoPer(radice, "TEST01", VALORE), "siNonApplicato");
  assert.equal(statoPer(radice, "ALTRO02", altro), "no", "anche l'estraneo resta registrato localmente");
});

test("Atto 0 - prova 22: il riavvio pubblica l'applicato rimasto locale", async (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01", VALORE)]]);
  appendiEventi(radice, [eventoPer("TEST01", VALORE, "si"), eventoPer("TEST01", VALORE, "applicato")]);
  const git = gitFinto({ sporco: true });
  let chiamate = 0;
  await applicaArbitrato({ radice, approvati: [propostaPer("TEST 01")], verdetti: [],
    soloRecupero: true, git, applica: async () => { chiamate++; return {}; } });
  assert.equal(chiamate, 0);
  assert.ok(git.registro.some((a) => a[0] === "commit" && a[2]?.includes("completa registro interrotto")));
  assert.ok(git.registro.some((a) => a[0] === "push"), "la modifica locale deve essere pubblicata");
  assert.equal(statoPer(radice, "TEST01", VALORE), "applicato");
});

test("Atto 0c - lock: l'arbitrato usa lo stesso lock della catena", async (t) => {
  const radice = radiceConMete(t, [[meta("TEST 01")]]);
  fs.writeFileSync(path.join(radice, "raccolta", ".esegui.lock"), JSON.stringify({ pid: process.pid }) + "\n");
  const git = gitFinto();
  await assert.rejects(() => applicaArbitrato({ radice, approvati: [propostaPer("TEST 01")],
    verdetti: [verdettoPer("TEST01", VALORE, "no")], git, applica: applicatoreTemporaneo }), /gia' lavorando/);
  assert.equal(git.registro.length, 0, "col lock occupato non si deve nemmeno leggere o pubblicare Git");
});
