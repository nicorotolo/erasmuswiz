import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { normalizzaNonTrovati, normalizzaNonTrovato } from "../scripts/lib-mete.mjs";
import { aggiornaImprontaIndice, improntaMateriale, improntaPagina, letturaDaRifare } from "../scripts/leggi-partner.mjs";
import { invalidaLettura } from "../scripts/esegui-partner.mjs";
import { candidatiDaRecuperare, normalizzaUrl } from "../scripts/recupera-motivi.mjs";

const pagina = (n, extra = {}) => ({
  url: `https://ateneo.test/p${n}`, urlFinale: `https://ateneo.test/p${n}`,
  tipo: "html", titolo: `p${n}`, testo: `testo ${n}`, link: [], ...extra,
});

// ------------------------------------------------------- l'ambito dell'assenza

test("assenza: la forma vecchia si legge ancora, e vale come ambito ignoto", () => {
  // 479 letture gia' fatte hanno il numero nudo. Devono restare valide per quel
  // che sanno dire - e non sanno dire l'ambito, quindi non potranno mai
  // generare la frase forte del Passo 3. E' la conseguenza voluta.
  assert.deepEqual(normalizzaNonTrovato(3), { paginaCitata: 3, livello: null, ambito: null });
  assert.deepEqual(normalizzaNonTrovato({ paginaCitata: 5, livello: "ateneo", ambito: null }),
    { paginaCitata: 5, livello: "ateneo", ambito: null });
});

test("assenza: 'facolta' senza dire quale vale meno di 'non so'", () => {
  // Promette una precisione che non ha: si degrada ad ambito ignoto invece di
  // essere presa per buona. La pagina citata resta, perche' e' vera.
  assert.deepEqual(normalizzaNonTrovato({ paginaCitata: 5, livello: "facolta" }),
    { paginaCitata: 5, livello: null, ambito: null });
  assert.deepEqual(normalizzaNonTrovato({ paginaCitata: 5, livello: "facolta", ambito: "  " }),
    { paginaCitata: 5, livello: null, ambito: null });
  assert.deepEqual(normalizzaNonTrovato({ paginaCitata: 5, livello: "facolta", ambito: "Fakultat fur Architektur" }),
    { paginaCitata: 5, livello: "facolta", ambito: "Fakultat fur Architektur" });
});

test("assenza: cio' che non si lascia interpretare non entra, e si vede che e' stato scartato", () => {
  for (const spazzatura of ["tre", null, {}, { livello: "ateneo" }, [], 2.5]) {
    assert.equal(normalizzaNonTrovato(spazzatura), null, `doveva essere scartato: ${JSON.stringify(spazzatura)}`);
  }
  const esito = normalizzaNonTrovati({ linkSito: 1, linkCatalogo: "boh", requisitoLingua: { paginaCitata: 2, livello: "ateneo" } });
  assert.deepEqual(Object.keys(esito.nonTrovati), ["linkSito", "requisitoLingua"]);
  assert.deepEqual(esito.scartati, ["linkCatalogo"], "lo scarto va elencato, non taciuto");
});

// --------------------------------------------- l'impronta del materiale

test("materiale: riordinare l'indice non cambia l'impronta, aggiungere una pagina si'", () => {
  const a = { pagine: [
    { url: "a", file: "001.json", improntaContenuto: "x", motivi: [] },
    { url: "b", file: "002.json", improntaContenuto: "y", motivi: ["linkCatalogo"] },
  ] };
  const riordinato = { pagine: [a.pagine[1], a.pagine[0]] };
  const conUnaInPiu = { pagine: [...a.pagine, { url: "c", file: "003.json", improntaContenuto: "z", motivi: [] }] };
  assert.equal(improntaMateriale(a), improntaMateriale(riordinato),
    "una ricostruzione che riordina non deve invalidare centinaia di letture");
  assert.notEqual(improntaMateriale(a), improntaMateriale(conUnaInPiu));
  // Anche solo i MOTIVI cambiano l'impronta: cambiano l'ordine d'invio, quindi
  // cambiano cosa il modello vede per primo.
  const motiviDiversi = { pagine: [a.pagine[0], { ...a.pagine[1], motivi: ["scadenzeOspitante"] }] };
  assert.notEqual(improntaMateriale(a), improntaMateriale(motiviDiversi));
});

test("materiale: un indice non migrato non ha impronta, e NON si rilegge", () => {
  // La riga che protegge i 479 partner gia' fatti: "non so" non e' "e' cambiato".
  // Se questa tornasse un'impronta qualsiasi, la prossima passata rimanderebbe
  // alla lettura tutti quanti, e sono ore di quota Gemini.
  const nonMigrato = { pagine: [{ url: "a", file: "001.json", motivi: [] }] };
  assert.equal(improntaMateriale(nonMigrato), null);
  assert.equal(letturaDaRifare(nonMigrato, { improntaMateriale: "qualcosa" }), false);
  const migrato = { pagine: [{ url: "a", file: "001.json", improntaContenuto: "x", motivi: [] }] };
  assert.equal(letturaDaRifare(migrato, {}), false, "una lettura senza impronta non si rilegge");
  assert.equal(letturaDaRifare(migrato, { improntaMateriale: "vecchia" }), true);
  assert.equal(letturaDaRifare(migrato, { improntaMateriale: improntaMateriale(migrato) }), false);
  assert.equal(letturaDaRifare(migrato, null), true, "senza lettura si legge");
});

test("materiale: chi cambia una pagina aggiorna l'indice", (t) => {
  const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "mat-"));
  t.after(() => fs.rmSync(cartella, { recursive: true, force: true }));
  const p1 = pagina(1); const file = path.join(cartella, "001.json");
  fs.writeFileSync(file, JSON.stringify(p1));
  const indice = { pagine: [{ url: p1.url, file: "001.json", motivi: [], improntaContenuto: improntaPagina(p1) }] };
  indice.improntaMateriale = improntaMateriale(indice);
  fs.writeFileSync(path.join(cartella, "indice.json"), JSON.stringify(indice));
  const prima = indice.improntaMateriale;
  // E' il caso vero: riscarica-pdf riempie il testo DOPO la raccolta.
  const conTesto = { ...p1, testo: "il testo del PDF, arrivato dopo" };
  assert.equal(aggiornaImprontaIndice(file, conTesto), true);
  const dopo = JSON.parse(fs.readFileSync(path.join(cartella, "indice.json"), "utf8"));
  assert.notEqual(dopo.improntaMateriale, prima, "il testo del PDF e' materiale nuovo");
  assert.equal(dopo.pagine[0].improntaContenuto, improntaPagina(conTesto));
});

// ------------------------------------------------------ invalidare una lettura

test("invalidare: archiviare e azzerare lo stato sono la stessa cosa, non due", (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "inv-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const letture = path.join(radice, "raccolta", "letture");
  fs.mkdirSync(letture, { recursive: true });
  fs.writeFileSync(path.join(letture, "AGRAZ01.json"), JSON.stringify({ codiceNorm: "A GRAZ01" }));
  const avanzamento = { AGRAZ01: { improntaLettura: "vecchia", fuso: true, applicato: true, campiDaApplicare: ["linkCatalogo"] } };
  const esito = invalidaLettura(radice, "A GRAZ01", avanzamento);
  assert.equal(esito.archiviata, true);
  assert.equal(fs.existsSync(path.join(letture, "AGRAZ01.json")), false, "la lettura vecchia non resta al suo posto");
  assert.equal(fs.readdirSync(path.join(letture, "storico")).length, 1, "e non viene buttata: e' archiviata");
  // Senza azzerare `applicato`, la rilettura produrrebbe proposte nuove che
  // nessuno applica, perche' il partner risulta gia' applicato.
  assert.equal(avanzamento.AGRAZ01.applicato, false);
  assert.equal(avanzamento.AGRAZ01.fuso, false);
  assert.equal("improntaLettura" in avanzamento.AGRAZ01, false, "l'impronta vecchia non deve sopravvivere");
  // `bloccoZero()` gira PRIMA della rilettura: se questi campi sopravvivessero,
  // applicherebbe proposte nate dal materiale che abbiamo appena superato.
  assert.deepEqual(avanzamento.AGRAZ01.campiDaApplicare, [], "le proposte della lettura vecchia non devono restare in coda");
  assert.equal(invalidaLettura(radice, "A GRAZ01", avanzamento).archiviata, false, "due volte non fa danni");
});

// ------------------------------------------------------------- il recupero

test("url: la normalizzazione e' conservativa, e la barra finale si conserva", () => {
  // `/x` e `/x/` possono essere risorse diverse: unificarle farebbe sembrare
  // "gia' visitato" un indirizzo che non lo e'.
  assert.notEqual(normalizzaUrl("https://a.test/x"), normalizzaUrl("https://a.test/x/"));
  assert.equal(normalizzaUrl("https://A.TEST/x#frammento"), normalizzaUrl("https://a.test/x"));
  assert.equal(normalizzaUrl("https://a.test:443/x"), normalizzaUrl("https://a.test/x"));
  assert.equal(normalizzaUrl("https://a.test/x?utm_source=news&id=3"), "https://a.test/x?id=3");
  assert.equal(normalizzaUrl("non un url"), "non un url", "un indirizzo storto non fa esplodere il recupero");
});

test("recupero: gli indirizzi gia' visitati non sono candidati, urlFinale compreso", () => {
  const pagine = [
    pagina(1, { link: [{ testo: "Course catalogue", url: "https://ateneo.test/p2" }] }),
    { ...pagina(2), url: "https://ateneo.test/vecchio", urlFinale: "https://ateneo.test/p2" },
  ];
  assert.deepEqual(candidatiDaRecuperare(pagine), [],
    "un redirect gia' seguito e' una visita: richiederlo non insegna niente");
});

test("recupero: lo stesso indirizzo si unisce, con i motivi di tutte le sue etichette", () => {
  const pagine = [pagina(1, { link: [
    { testo: "Course catalogue", url: "https://ateneo.test/corsi" },
    { testo: "Language requirements", url: "https://ateneo.test/corsi" },
  ] })];
  const c = candidatiDaRecuperare(pagine);
  assert.equal(c.length, 1, "un indirizzo, un candidato");
  assert.deepEqual(c[0].motivi, ["linkCatalogo", "requisitoLingua"]);
});

test("recupero: al piu' due per campo e otto in tutto", () => {
  const link = [];
  for (let i = 0; i < 12; i++) link.push({ testo: `Course catalogue ${i}`, url: `https://ateneo.test/c${i}` });
  for (let i = 0; i < 12; i++) link.push({ testo: `Application deadline ${i}`, url: `https://ateneo.test/d${i}` });
  const c = candidatiDaRecuperare([pagina(1, { link })]);
  const perCampo = {};
  for (const x of c) for (const m of x.campiPresi) perCampo[m] = (perCampo[m] || 0) + 1;
  assert.ok(c.length <= 8, `presi ${c.length}, il tetto e' 8`);
  assert.equal(perCampo.linkCatalogo, 2);
  assert.equal(perCampo.scadenzeOspitante, 2);
});

test("recupero: i posti gia' consumati non si riprendono a ogni passata", () => {
  const link = [{ testo: "Course catalogue", url: "https://ateneo.test/c1" },
    { testo: "Module catalogue", url: "https://ateneo.test/c2" }];
  const primoGiro = candidatiDaRecuperare([pagina(1, { link })]);
  assert.equal(primoGiro.length, 2);
  const secondoGiro = candidatiDaRecuperare([pagina(1, { link })], { usiPerCampo: { linkCatalogo: 2 } });
  assert.deepEqual(secondoGiro, [], "un partner gia' recuperato non ne prende altri otto");
});

// ------------------------------------------------- il recupero, davvero eseguito
// Le prove qui sopra provano le funzioni pure. Codex ha osservato, con ragione,
// che nessuna chiamava `recuperaUnPartner`: erano proprio i difetti di
// ORDINE e di RIPRESA a restare scoperti.

import { recuperaUnPartner } from "../scripts/recupera-motivi.mjs";

function partnerFinto(t, { link = [], letturaConImpronta = false, orfano = null } = {}) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "rec-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const cartella = path.join(radice, "raccolta", "pagine", "AGRAZ01");
  fs.mkdirSync(cartella, { recursive: true });
  const p1 = pagina(1, { link });
  fs.writeFileSync(path.join(cartella, "001.json"), JSON.stringify(p1));
  // Un indice NON migrato, come tutti i 585 veri: nessuna improntaContenuto.
  const indice = { codice: "A GRAZ01", esito: "raggiunto", tentativi: [],
    pagine: [{ file: "001.json", url: p1.url, punteggio: 4, profondita: 0, motivi: [] }] };
  fs.writeFileSync(path.join(cartella, "indice.json"), JSON.stringify(indice));
  if (orfano) fs.writeFileSync(path.join(cartella, orfano.file || orfano),
    JSON.stringify({ url: orfano.url || "orfano", testo: "NON TOCCARMI", tipo: "html", titolo: "orfano", link: [] }));
  const letture = path.join(radice, "raccolta", "letture");
  fs.mkdirSync(letture, { recursive: true });
  fs.writeFileSync(path.join(letture, "AGRAZ01.json"),
    JSON.stringify({ codiceNorm: "A GRAZ01", ...(letturaConImpronta ? { improntaMateriale: "vecchia" } : {}) }));
  return { radice, cartella, letture };
}

const rispostaOk = (corpo = "<html><body>catalogo dei corsi</body></html>") => ({
  ok: true, stato: 200, urlFinale: "https://ateneo.test/corsi", tipo: "text/html",
  corpo: Buffer.from(corpo), troncato: false,
});
const robotsLiberi = async () => ({ regole: [] });

test("recupero: migra le impronte anche quando non c'e' niente da aggiungere", async (t) => {
  const { radice, cartella } = partnerFinto(t);
  const esito = await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false, regoleFn: robotsLiberi });
  assert.equal(esito.candidati, 0);
  assert.equal(esito.migrate, 1, "la pagina esistente deve ricevere la sua impronta");
  const indice = JSON.parse(fs.readFileSync(path.join(cartella, "indice.json"), "utf8"));
  assert.ok(indice.pagine[0].improntaContenuto, "senza questa, improntaMateriale resta null per sempre");
  assert.ok(indice.improntaMateriale, "e il versionamento delle letture resterebbe codice morto");
});

test("recupero: la lettura e' gia' archiviata quando l'indice viene scritto", async (t) => {
  // IL difetto critico, e la prova va fatta nel punto esatto: una caduta FRA la
  // scrittura dell'indice e l'archiviazione lasciava un indice con materiale
  // nuovo e una lettura vecchia ancora valida - e quel materiale non sarebbe
  // stato letto MAI PIU', perche' al riavvio non restano candidati e
  // `letturaDaRifare` su una lettura senza impronta risponde "non si puo' dire".
  //
  // Guardare lo stato finale non basta: nei due ordini e' identico. Si guarda
  // il MOMENTO della scrittura dell'indice, ed e' per questo che e' iniettabile.
  const { radice, letture } = partnerFinto(t, {
    link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }],
  });
  const osservazioni = [];
  const scriviIndiceFn = (file, contenuto) => {
    osservazioni.push({ pagineNellIndice: JSON.parse(contenuto).pagine.length,
      letturaAncoraAlSuoPosto: fs.existsSync(path.join(letture, "AGRAZ01.json")) });
    fs.writeFileSync(file, contenuto);
  };
  await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false,
    regoleFn: robotsLiberi, scaricaFn: async () => rispostaOk(), avanzamento: {}, scriviIndiceFn });
  const conPaginaNuova = osservazioni.filter((o) => o.pagineNellIndice > 1);
  assert.ok(conPaginaNuova.length, "l'indice deve pur essere stato scritto con la pagina nuova");
  for (const o of conPaginaNuova) {
    assert.equal(o.letturaAncoraAlSuoPosto, false,
      "l'indice non deve MAI essere scritto con materiale nuovo mentre la lettura vecchia e' ancora valida");
  }
});

test("recupero: non sovrascrive un file orfano gia' sul disco", async (t) => {
  // Sei partner veri hanno gia' occupato il nome che `pagine.length + 1`
  // propone: ESEVILLA01, NOSLO72, PLBIALYST04, SILJUBLJA01, SLINKOPI01,
  // TRANKARA15. Scriverci sopra avrebbe distrutto una pagina vera.
  const { radice, cartella } = partnerFinto(t, {
    link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }],
    orfano: "002.json",
  });
  const esito = await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false,
    regoleFn: robotsLiberi, scaricaFn: async () => rispostaOk(), avanzamento: {} });
  assert.equal(esito.aggiunte, 1);
  assert.equal(JSON.parse(fs.readFileSync(path.join(cartella, "002.json"), "utf8")).testo, "NON TOCCARMI");
  assert.ok(fs.existsSync(path.join(cartella, "003.json")), "la pagina nuova prende il primo nome libero");
});

test("recupero: un fallimento non perde i tentativi, e l'indice resta coerente", async (t) => {
  const { radice, cartella } = partnerFinto(t, {
    link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }],
  });
  const esito = await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false,
    regoleFn: robotsLiberi, scaricaFn: async () => ({ ok: false, errore: "timeout" }), avanzamento: {} });
  assert.equal(esito.aggiunte, 0);
  assert.equal(esito.falliti.nonRaggiunto, 1);
  const indice = JSON.parse(fs.readFileSync(path.join(cartella, "indice.json"), "utf8"));
  assert.equal(indice.pagine.length, 1, "un fallimento non aggiunge pagine");
  assert.ok(indice.improntaMateriale, "ma la migrazione viene comunque salvata");
});

// ------------------------------------------- le sei correzioni del secondo giro
import { adottaOrfani, nomeLibero, tentativiTerminali } from "../scripts/recupera-motivi.mjs";
import { migraImpronteIndice, scegliPagine } from "../scripts/leggi-partner.mjs";

test("invalidare: l'archiviazione e' persistita PRIMA che l'indice cresca", async (t) => {
  // Tenere l'invalidazione in memoria fino a fine partner lasciava sul disco i
  // `campiDaApplicare` della lettura vecchia, e `bloccoZero()` - che gira prima
  // della rilettura - li avrebbe applicati. L'ordine si osserva, non si assume.
  const { radice } = partnerFinto(t, { link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }] });
  const ordine = [];
  await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false, regoleFn: robotsLiberi,
    scaricaFn: async () => rispostaOk(), avanzamento: {},
    salvaAvanzamento: () => ordine.push("avanzamento"),
    scriviIndiceFn: (f, c) => { if (JSON.parse(c).pagine.length > 1) ordine.push("indice"); fs.writeFileSync(f, c); } });
  assert.deepEqual(ordine.slice(0, 2), ["avanzamento", "indice"],
    "lo stato invalidato deve essere sul disco prima che l'indice annunci il materiale nuovo");
});

test("invalidare: senza un avanzamento in memoria, lo aggiorna da sola sul disco", (t) => {
  // Serve alla LETTURA, che invalida ma non possiede l'avanzamento: senza questa
  // modalita' una lettura invecchiata per un PDF riscaricato o per un prompt
  // cambiato verrebbe sovrascritta in silenzio.
  const { radice } = partnerFinto(t);
  const fileAvanz = path.join(radice, "raccolta", "avanzamento.json");
  fs.writeFileSync(fileAvanz, JSON.stringify({ AGRAZ01: { fuso: true, applicato: true, campiDaApplicare: ["linkCatalogo"] } }));
  invalidaLettura(radice, "A GRAZ01");
  const dopo = JSON.parse(fs.readFileSync(fileAvanz, "utf8"));
  assert.equal(dopo.AGRAZ01.applicato, false);
  assert.deepEqual(dopo.AGRAZ01.campiDaApplicare, []);
});

test("selezione: a parita' di punteggio decide il nome del file, non l'ordine dell'indice", (t) => {
  // Le pagine recuperate hanno tutte punteggio zero: senza spareggio finivano a
  // pari merito e a decidere restava l'ordine dell'indice - che l'impronta del
  // materiale non guarda. Riordinare cambiava cio' che il modello riceve
  // lasciando l'impronta identica.
  const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "sel-"));
  t.after(() => fs.rmSync(cartella, { recursive: true, force: true }));
  for (const n of ["001", "002"]) {
    fs.writeFileSync(path.join(cartella, `${n}.json`), JSON.stringify({ url: `u${n}`, titolo: n, testo: "x".repeat(500), link: [] }));
  }
  const righe = [
    { file: "001.json", url: "u001", punteggio: 0, motivi: ["linkCatalogo"] },
    { file: "002.json", url: "u002", punteggio: 0, motivi: ["linkCatalogo"] },
  ];
  const dritto = scegliPagine({ pagine: righe }, cartella).map((s) => s.file);
  const rovescio = scegliPagine({ pagine: [...righe].reverse() }, cartella).map((s) => s.file);
  assert.deepEqual(dritto, rovescio, "l'ordine dell'indice non deve cambiare cio' che si invia");
  assert.deepEqual(dritto, ["001.json", "002.json"]);
});

test("impronte: la riconciliazione ripara un'impronta rimasta indietro", (t) => {
  // Il caso vero: `riscarica-pdf` scrive la pagina e poi l'indice, e una caduta
  // fra le due lascia testo nuovo con impronta vecchia. Al riavvio quel PDF non
  // e' piu' pendente, quindi senza riconciliazione nessuno lo ripara.
  const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "ric-"));
  t.after(() => fs.rmSync(cartella, { recursive: true, force: true }));
  const p1 = pagina(1);
  fs.writeFileSync(path.join(cartella, "001.json"), JSON.stringify({ ...p1, testo: "testo NUOVO del pdf" }));
  const indice = { pagine: [{ file: "001.json", url: p1.url, motivi: [], improntaContenuto: improntaPagina(p1) }] };
  assert.equal(migraImpronteIndice(indice, cartella), 0, "senza riconciliare non tocca chi ha gia' un'impronta");
  assert.equal(migraImpronteIndice(indice, cartella, { riconcilia: true }), 1);
  assert.equal(indice.pagine[0].improntaContenuto, improntaPagina({ ...p1, testo: "testo NUOVO del pdf" }));
  // E riconciliare quando non c'e' niente da riparare non conta modifiche finte.
  assert.equal(migraImpronteIndice(indice, cartella, { riconcilia: true }), 0);
});

test("orfani: una pagina caduta fuori dall'indice si adotta, non si riscarica", (t) => {
  const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "orf-"));
  t.after(() => fs.rmSync(cartella, { recursive: true, force: true }));
  fs.writeFileSync(path.join(cartella, "001.json"), JSON.stringify(pagina(1)));
  fs.writeFileSync(path.join(cartella, "002.json"), JSON.stringify(pagina(2, { motivi: ["linkCatalogo"] })));
  const indice = { pagine: [{ file: "001.json", url: "https://ateneo.test/p1", motivi: [] }] };
  assert.equal(adottaOrfani(indice, cartella), 1);
  assert.equal(indice.pagine.length, 2);
  assert.deepEqual(indice.pagine[1].motivi, ["linkCatalogo"], "l'orfano porta con se' i suoi motivi");
  assert.ok(indice.pagine[1].improntaContenuto);
  assert.equal(adottaOrfani(indice, cartella), 0, "due volte non duplica");
  // E il nome libero tiene conto anche degli adottati.
  assert.equal(nomeLibero(cartella, indice), "003.json");
});

test("tentativi: un no definitivo non si richiede, un guasto si'", () => {
  const terminali = tentativiTerminali([
    { url: "https://a.test/vietato", causa: "robots" },
    { url: "https://a.test/sparito", causa: "http404" },
    { url: "https://a.test/lento", causa: "timeout" },
    { url: "https://a.test/rotto", causa: "http503" },
  ]);
  assert.equal(terminali.has(normalizzaUrl("https://a.test/vietato")), true);
  assert.equal(terminali.has(normalizzaUrl("https://a.test/sparito")), true);
  assert.equal(terminali.has(normalizzaUrl("https://a.test/lento")), false, "un timeout e' un guasto, spesso intermittente");
  assert.equal(terminali.has(normalizzaUrl("https://a.test/rotto")), false);
  // E il filtro arriva davvero ai candidati.
  const pagine = [pagina(1, { link: [{ testo: "Course catalogue", url: "https://a.test/vietato" }] })];
  assert.deepEqual(candidatiDaRecuperare(pagine, { tentativi: [{ url: "https://a.test/vietato", causa: "robots" }] }), []);
});

test("provenienza: testo del link e pagina padre restano una coppia vera", () => {
  // Aggiornarne uno solo salverebbe un abbinamento padre-etichetta mai esistito,
  // e la prova di provenienza del piano poggia esattamente su quella coppia.
  const pagine = [
    pagina(1, { link: [{ testo: "leggi qui il course catalogue completo", url: "https://ateneo.test/corsi" }] }),
    pagina(2, { link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }] }),
  ];
  const [c] = candidatiDaRecuperare(pagine);
  assert.equal(c.testoLink, "Course catalogue", "vince l'etichetta piu' titolata");
  assert.equal(c.scopertaDa, "https://ateneo.test/p2", "e la provenienza la segue: e' la stessa pagina");
});

test("orfani: il recupero li adotta invece di riscaricare lo stesso indirizzo", async (t) => {
  // La prova precedente chiamava `adottaOrfani` direttamente, quindi rompere il
  // punto in cui viene invocata non la faceva diventare rossa: si autoassolveva.
  // Questa passa dal recupero vero, ed e' l'unica che dimostra che l'adozione
  // avviene DAVVERO nel percorso reale.
  const { radice, cartella } = partnerFinto(t, {
    link: [{ testo: "Course catalogue", url: "https://ateneo.test/corsi" }],
    orfano: { file: "002.json", url: "https://ateneo.test/corsi" },
  });
  let scaricamenti = 0;
  const esito = await recuperaUnPartner({ radice, codice: "A GRAZ01", limitatore: false,
    regoleFn: robotsLiberi, scaricaFn: async () => { scaricamenti++; return rispostaOk(); }, avanzamento: {} });
  assert.equal(esito.adottate, 1, "l'orfano dev'essere entrato nell'indice");
  assert.equal(scaricamenti, 0, "e quell'indirizzo non va richiesto una seconda volta");
  const indice = JSON.parse(fs.readFileSync(path.join(cartella, "indice.json"), "utf8"));
  assert.equal(indice.pagine.length, 2);
  assert.ok(indice.pagine.some((r) => r.file === "002.json"));
});
