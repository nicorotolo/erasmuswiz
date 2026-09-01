// Tre buchi dei cancelli, trovati il 30/08 sera guardando le 244 letture vere
// invece delle prove. Ognuno lasciava passare un dato sbagliato senza che
// nessuna prova diventasse rossa.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applicaCancelli, applicaCancelloLivello, lingueCitate, livelliCitati, livelloAmbiguo, origineIndirizzo } from "../scripts/cancelli.mjs";
import { branoPagina } from "../scripts/leggi-partner.mjs";

const URL_PAGINA = "https://esempio.test/incoming";
const CITAZIONE = "Incoming exchange students need English at B2 level before arrival.";
// La seconda frase e' vera e presente nella pagina, ma NON dice alcun livello:
// serve a far arrivare il caso fino al cancello dei livelli, invece di vederlo
// fermare prima come citazione assente.
const SENZA_LIVELLO = "The medium of instruction at this university is English.";
// Dice il livello ma non la lingua, e una forma ambigua: due frasi vere, due difetti diversi.
const SENZA_LINGUA = "Proof of language proficiency at B2 level is required from all applicants.";
const AMBIGUO = "It is advisable to have a language level equivalent to, at least, A2/B1 here.";
const TESTO = `${CITAZIONE} ${SENZA_LIVELLO} ${SENZA_LINGUA} ${AMBIGUO} ${"contorno ".repeat(60)}`;
const impronta = (t) => createHash("sha256").update(t, "utf8").digest("hex");
const PAGINA = { n: 1, file: "001.json", url: URL_PAGINA, titolo: "Incoming exchange",
  caratteri: TESTO.length, tagliata: false, impronta: impronta(TESTO) };

function radiceFinta(t) {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-buchi-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const dir = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "001.json"), JSON.stringify({ url: URL_PAGINA, titolo: PAGINA.titolo, testo: TESTO }));
  return radice;
}
const fonte = (citazione = CITAZIONE) => ({ url: URL_PAGINA, citazione, verificataIl: "2026-08-30" });
const lettura = (campi) => ({ codiceNorm: "TEST 01", lettoIl: "2026-08-30T00:00:00.000Z", modello: "finto",
  pagineInviate: [PAGINA], campi, nonTrovati: {}, note: [] });

// ---------------------------------------------------------------- buco 1
test("un livello non dichiarato vale 'facolta', non 'ateneo'", async (t) => {
  // S GOTEBOR01 scriveva "level" invece di "livello", dichiarando "facolta" con
  // ambito "Institutionen for svenska". Il cancello leggeva undefined e lo
  // trattava come "ateneo": un dato di dipartimento sarebbe finito nel sito.
  const radice = radiceFinta(t);
    // L'indirizzo e' quello della pagina stessa: dal 31/08 un valore che non
  // viene ne' da un link, ne' dalla pagina, ne' dal testo e' "indirizzoInventato",
  // e la prova morirebbe per un motivo che non c'entra col livello.
  const campo = { valore: URL_PAGINA, level: "facolta",
    ambito: "Institutionen for svenska", paginaCitata: 1, fonte: fonte() };
  const e = await applicaCancelli([lettura({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  const uscito = e.approvati[0] || e.facolta[0];
  assert.ok(uscito, "il campo doveva uscire da qualche parte");
  assert.equal(uscito.livello, "facolta", "un livello mancante non puo' diventare 'ateneo'");
  assert.equal(uscito.dichiarato, null, "il cancello deve registrare che il livello NON era dichiarato");
});

test("un campo stretto senza livello dichiarato non arriva agli approvati", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: "Solo per i giuristi", livello: "ATENEO", ambito: null, paginaCitata: 1, fonte: fonte() };
  const e = await applicaCancelli([lettura({ notaDisponibilita: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.approvati.length, 0, "'ATENEO' maiuscolo non e' il valore previsto: nel dubbio si va allo stretto");
  assert.equal(e.facolta.length, 1);
});

// ---------------------------------------------------------------- buco 2 (E3)
test("un codice inventato finisce negli scarti, non in riconciliazione", async (t) => {
  // La prova che E3 chiede: costruita da un capo all'altro, non sulla sola
  // funzione. Un campo di facolta' che supera tutti gli altri cancelli, su un
  // partner il cui codice non esiste, non deve diventare materiale della Fase 6.
  const radice = radiceFinta(t);
  const campo = { valore: { op: "ALL", figli: [{ lingua: "Inglese", livello: "B2" }],
    fonte: URL_PAGINA, verificatoIl: "2026-08-30" },
    livello: "facolta", ambito: "Faculty of Law", paginaCitata: 1, fonte: fonte() };

  const inventato = await applicaCancelli([lettura({ requisitoLingua: campo })],
    { radice, codici: new Set(["ALTRO 99"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(inventato.facolta.length, 0, "riconciliazione deve restare VUOTA per un partner che non esiste");
  assert.equal(inventato.approvati.length, 0);
  assert.deepEqual(inventato.scartati.map((s) => s.causa), ["codiceSconosciuto"]);

  // Con il codice vero, lo stesso campo deve invece arrivare in riconciliazione:
  // e' la meta' della prova che dimostra che non abbiamo solo rotto il cancello 4.
  const vero = await applicaCancelli([lettura({ requisitoLingua: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(vero.facolta.length, 1);
  assert.equal(vero.scartati.length, 0);
});

test("il cancello del codice resta l'ULTIMO a dare la causa", async (t) => {
  // Un campo con la citazione sbagliata su un partner inesistente deve
  // continuare a chiamarsi 'citazioneAssente', o il resoconto per causa del
  // §6.2 smette di essere confrontabile fra un'esecuzione e l'altra.
  const radice = radiceFinta(t);
  const campo = { valore: "Nota qualunque", livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: fonte("Questa frase non compare da nessuna parte nella pagina inviata.") };
  const e = await applicaCancelli([lettura({ notaDisponibilita: campo })],
    { radice, codici: new Set(["ALTRO 99"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(e.scartati.map((s) => s.causa), ["citazioneAssente"]);
});

// ---------------------------------------------------------------- buco 3
test("un livello CEFR che la citazione non contiene viene scartato", async (t) => {
  // Il caso vero di TR IZMIR04: la pagina dice quale lingua si insegna, non a
  // che livello, e il modello ci mette un livello suo.
  const radice = radiceFinta(t);
  const albero = (livello) => ({ op: "ALL", figli: [{ lingua: "Inglese", livello }],
    fonte: URL_PAGINA, verificatoIl: "2026-08-30" });
  const campo = (livello, citazione) => ({ valore: albero(livello), livello: "ateneo",
    ambito: null, paginaCitata: 1, fonte: fonte(citazione) });

  const inventato = await applicaCancelli([lettura({ requisitoLingua: campo("B1", SENZA_LIVELLO) })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(inventato.scartati.map((s) => s.causa), ["livelloNonCitato"],
    "la citazione c'e' davvero nella pagina: a fermarlo dev'essere il livello, non la citazione");
  assert.equal(inventato.approvati.length, 0);

  // La citazione predefinita dice "English at B2 level": quella deve passare.
  const letto = await applicaCancelli([lettura({ requisitoLingua: campo("B2") })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(letto.approvati.length, 1, "un livello scritto nella citazione deve passare");
});

test("basta UNA lingua col livello non citato per scartare tutto l'albero", () => {
  const cit = "Students need German at B1 level for the courses taught in German.";
  const dueLingue = { op: "ANY", figli: [
    { lingua: "Tedesco", livello: "B1" },
    { lingua: "Inglese", livello: "C1" },
  ] };
  const e = livelliCitati(dueLingue, cit);
  assert.equal(e.ok, false);
  assert.deepEqual(e.assenti, ["C1"], "il livello mancante va nominato, non basta dire che qualcosa non va");
  // I gruppi annidati vanno percorsi fino in fondo.
  const annidato = { op: "ALL", figli: [{ op: "ANY", figli: [{ lingua: "Tedesco", livello: "A2" }] }] };
  assert.equal(livelliCitati(annidato, cit).causa, "livelloNonCitato");
  assert.equal(livelliCitati(annidato, "A2 is enough for everyone here.").ok, true);
});

// ---------------------------------------------------------------- buco 4
test("un livello ambiguo nella citazione non si traduce: si scarta", async (t) => {
  // E MADRID05: la pagina diceva "at least, A2/B1" e il modello ne ha fatto due
  // foglie, Spagnolo A2 e Spagnolo B1. Il cancello dei livelli citati non lo
  // ferma - A2 e B1 ci sono entrambi - ma la spec vieta di tradurre le forme
  // ambigue: si omette il campo, non si sceglie per conto della pagina.
  const radice = radiceFinta(t);
  const e = await applicaCancelli([lettura({ requisitoLingua: {
    valore: { op: "ANY", figli: [{ lingua: "Inglese", livello: "A2" }, { lingua: "Inglese", livello: "B1" }],
      fonte: URL_PAGINA, verificatoIl: "2026-08-30" },
    livello: "ateneo", ambito: null, paginaCitata: 1, fonte: fonte(AMBIGUO) } })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(e.scartati.map((s) => s.causa), ["livelloAmbiguo"]);
});

test("le forme ambigue si riconoscono, quelle sane no", () => {
  const ambigue = [
    "at least, A2/B1", "Studenten brauchen B1-B2 Deutsch", "Niveau B2.1", "Level B1 - B2 required",
    // La congiunzione conta quanto la barra, e la pagina la scrive nella sua lingua.
    "krefjast B1 eda B2 kunnattu i ensku", "Students need B1 or B2 English", "Niveau B1 oder B2 Deutsch",
  ];
  for (const c of ambigue) assert.equal(livelloAmbiguo(c).causa, "livelloAmbiguo", `doveva essere ambiguo: ${c}`);

  const sane = [
    "We require a B2 English Language Level",
    "Deadline 15 April for B2 students",
    // Il caso di D ERFURT05: due requisiti VERI e distinti, non un'alternativa.
    // Il separatore dev'essere l'unica cosa fra i due livelli, o questa cade.
    "Fur Kurse auf Deutsch brauchen Sie mindestens B1. Fur Kurse auf Englisch brauchen Sie mindestens B2.",
  ];
  for (const c of sane) assert.equal(livelloAmbiguo(c).ok, true, `non doveva essere ambiguo: ${c}`);
});

test("le radici delle lingue coprono i falsi positivi gia' pagati", () => {
  // Ogni radice qui sotto e' stata aggiunta DOPO aver visto il cancello
  // scartare un dato buono, mai per prudenza.
  const albero = (lingua) => ({ op: "ALL", figli: [{ lingua, livello: "B2" }] });
  assert.equal(lingueCitate(albero("Francese"), "Pour les etudiants non francophones natifs, un niveau minimum (B2) est requis").ok,
    true, "F ALES02: 'francophones' e' il francese");
  assert.equal(lingueCitate(albero("Inglese"), "namskeid sem kennd eru a ensku krefjast B2 kunnattu").ok,
    true, "IS AKUREYR01: 'ensku' e' l'inglese in islandese");
});

// ---------------------------------------------------------------- buco 5
test("una lingua che la citazione non nomina viene scartata", async (t) => {
  // F PARIS063 leggeva "la langue des cours choisi (B2 recommande)" e proponeva
  // Inglese; TR ERZURUM01 leggeva "Dil sinavi" (esame di lingua) e proponeva
  // Turco. Il livello c'era, la lingua no.
  const radice = radiceFinta(t);
  const e = await applicaCancelli([lettura({ requisitoLingua: {
    valore: { op: "ALL", figli: [{ lingua: "Inglese", livello: "B2" }],
      fonte: URL_PAGINA, verificatoIl: "2026-08-30" },
    livello: "ateneo", ambito: null, paginaCitata: 1, fonte: fonte(SENZA_LINGUA) } })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.deepEqual(e.scartati.map((s) => s.causa), ["linguaNonCitata"]);
});

test("la lingua si riconosce anche quando la pagina la nomina in un'altra lingua", () => {
  const albero = (lingua) => ({ op: "ALL", figli: [{ lingua, livello: "B2" }] });
  // La citazione e' sempre nella lingua del sito, mai in italiano.
  assert.equal(lingueCitate(albero("Inglese"), "un niveau B2 en anglais").ok, true);
  assert.equal(lingueCitate(albero("Tedesco"), "Fur Kurse auf Deutsch").ok, true);
  assert.equal(lingueCitate(albero("Spagnolo"), "nivel B1 de espanol").ok, true);
  assert.equal(lingueCitate(albero("Turco"), "Turkce B1 seviyesi").ok, true);
  assert.equal(lingueCitate(albero("Inglese"), "proof of language proficiency").causa, "linguaNonCitata");
  // Basta una lingua non nominata per fermare tutto l'albero.
  const due = { op: "ANY", figli: [{ lingua: "Tedesco", livello: "B1" }, { lingua: "Inglese", livello: "B2" }] };
  assert.deepEqual(lingueCitate(due, "Deutschkenntnisse B1 erforderlich").assenti, ["inglese"]);
  // Una lingua fuori tabella non viene bloccata: meglio un dato raro che un falso scarto.
  assert.equal(lingueCitate(albero("Islandese"), "some requirement at B2").ok, true);
});

test("un livello dichiarato bene continua a funzionare", () => {
  const ateneo = applicaCancelloLivello("notaDisponibilita",
    { livello: "ateneo", fonte: { url: "https://esempio.test/incoming" } }, { titolo: "Incoming" });
  assert.equal(ateneo.livello, "ateneo");
  assert.equal(ateneo.dichiarato, "ateneo");
  assert.equal(ateneo.approvato, true);
  const declassato = applicaCancelloLivello("notaDisponibilita",
    { livello: "ateneo", fonte: { url: "https://esempio.test/faculty-of-law" } }, {});
  assert.equal(declassato.livello, "facolta");
  assert.equal(declassato.declassato, true, "il declassamento per URL deve restare visibile nel resoconto");
});

// ------------------------------------------------- il buco del 31/08
// Misura sui 53 linkCatalogo in cache: 17 puntavano alla pagina che PARLA del
// catalogo, e uno (E MATARO01, la home di Tecnocampus) non compariva da
// nessuna parte nel materiale inviato. Nessun cancello lo vedeva: un indirizzo
// inventato che risponde 200 supera il controllo del link.
const LINK_CATALOGO = { testo: "Course Catalogue", url: "https://esempio.test/elenco-corsi" };
const PAGINA_CON_LINK = { ...PAGINA, link: [LINK_CATALOGO], impronta: impronta(branoPagina(TESTO, [LINK_CATALOGO])) };
const letturaLink = (campi) => ({ codiceNorm: "TEST 01", lettoIl: "2026-08-30T00:00:00.000Z", modello: "finto",
  pagineInviate: [PAGINA_CON_LINK], campi, nonTrovati: {}, note: [] });

test("un indirizzo che non viene ne' dai link, ne' dalla pagina, ne' dal testo e' inventato", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: "https://tecnocampus.example/", livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: CITAZIONE, verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([letturaLink({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.approvati.length, 0, "un indirizzo inventato non puo' essere approvato");
  assert.equal(e.scartati[0].causa, "indirizzoInventato");
});

test("un indirizzo preso da un link passa, e la citazione e' il testo del link", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: LINK_CATALOGO.url, livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: LINK_CATALOGO.testo, verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([letturaLink({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  // "Course Catalogue" sono 16 caratteri: la regola generale dei 20 lo
  // rifiuterebbe, ma qui la prova e' la coppia testo-del-link -> indirizzo.
  assert.equal(e.scartati.length, 0, JSON.stringify(e.scartati));
  assert.equal(e.approvati.length, 1);
});

// Due prove possibili per un indirizzo, e ne basta una. Il 01/09, misurando
// sui 53, pretendere l'uguaglianza esatta col testo del link ha buttato via
// cinque valori giusti: le etichette portano coda ("http://tiss.tuwien.ac.at ,
// opens an external URL in a new window") e lo stesso indirizzo compare piu'
// volte con nomi diversi. Ora vale la citazione DENTRO il testo di un link,
// oppure la regola generale dei 20 caratteri nel brano inviato.
test("la citazione vale se sta dentro il testo di un link, coda compresa", async (t) => {
  const radice = radiceFinta(t);
  const conCoda = { testo: "Course Catalogue , opens an external URL in a new window", url: "https://esempio.test/elenco-corsi" };
  const pagina = { ...PAGINA, link: [conCoda], impronta: impronta(branoPagina(TESTO, [conCoda])) };
  const campo = { valore: conCoda.url, livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: "Course Catalogue", verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([{ codiceNorm: "TEST 01", lettoIl: "2026-08-30T00:00:00.000Z", modello: "finto",
    pagineInviate: [pagina], campi: { linkCatalogo: campo }, nonTrovati: {}, note: [] }],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.scartati.length, 0, JSON.stringify(e.scartati));
  assert.equal(e.approvati.length, 1);
});

// Su un campo-indirizzo la prova sta nell'indirizzo, che deve esistere nel
// materiale inviato; alla citazione si chiede solo di essere letterale nel
// brano. Restano due modi di fallire, e questa prova li tiene fermi entrambi.
test("una citazione che nel brano non c'e' viene scartata, anche se lunga", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: LINK_CATALOGO.url, livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: "Questa frase non compare da nessuna parte nella pagina inviata.", verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([letturaLink({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.approvati.length, 0);
  assert.equal(e.scartati[0].causa, "citazioneAssente");
});

test("una citazione di meno di otto caratteri viene scartata", async (t) => {
  const radice = radiceFinta(t);
  // "need" sta nella pagina, ma quattro caratteri non dimostrano niente.
  const campo = { valore: LINK_CATALOGO.url, livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: "need", verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([letturaLink({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.approvati.length, 0);
  assert.equal(e.scartati[0].causa, "citazioneFuoriMisura");
});

// Una citazione corta ma letterale basta per un indirizzo. E' il caso piu'
// forte di tutti e veniva buttato: Brema, Brno e Stoccolma citavano "Course
// Catalog" (14 caratteri) - il nome della pagina che E' il catalogo, che
// testoVisibile lascia in testa al testo - e la regola dei 20 caratteri li
// scartava tutti e tre. NB: il titolo passa perche' compare nel TESTO della
// pagina, non perche' il cancello legga il campo titolo: quello non fa parte
// del brano firmato, e citarlo e basta non sarebbe verificabile.
test("una citazione corta ma letterale nel brano vale per un indirizzo", async (t) => {
  const radice = radiceFinta(t);
  const campo = { valore: URL_PAGINA, livello: "ateneo", ambito: null, paginaCitata: 1,
    fonte: { url: URL_PAGINA, citazione: "Incoming exchange", verificataIl: "2026-08-30" } };
  const e = await applicaCancelli([letturaLink({ linkCatalogo: campo })],
    { radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }) });
  assert.equal(e.scartati.length, 0, JSON.stringify(e.scartati));
  assert.equal(e.approvati.length, 1);
});

test("le tre origini lecite, e la differenza fra www e non-www non conta", () => {
  const pagina = { url: "https://esempio.test/incoming", link: [LINK_CATALOGO] };
  assert.equal(origineIndirizzo("https://www.esempio.test/elenco-corsi/", pagina, ""), "link");
  assert.equal(origineIndirizzo("https://esempio.test/incoming", pagina, ""), "pagina");
  assert.equal(origineIndirizzo("https://terzo.test/x", pagina, "vedi https://terzo.test/x qui"), "testo");
  assert.equal(origineIndirizzo("https://terzo.test/x", pagina, "niente"), null);
});
