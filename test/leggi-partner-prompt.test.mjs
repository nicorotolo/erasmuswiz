// Il prompt e' il pezzo che decide la resa e che nessuna prova "normale"
// giudica: il 30/08 sera si e' visto che si potevano cancellare TUTTE le sue
// regole senza far diventare rossa nessuna delle 217 prove, mentre sul campo il
// modello proponeva 4 campi e i cancelli ne approvavano 0. Queste prove chiudono
// quel buco: l'esempio JSON che il modello legge viene fatto passare dai
// cancelli COSI' COM'E', senza una sola sostituzione.
//
// Attenzione a una cosa imparata a caro prezzo: i cancelli NON si accorgono di
// una chiave sbagliata. Un campo con "level" al posto di "livello" li supera
// (livello mancante viene letto come "ateneo") e finirebbe nei dati del sito
// anche se e' un dato di facolta'. Per questo la forma delle chiavi si verifica
// a parte, e non attraverso i cancelli.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applicaCancelli } from "../scripts/cancelli.mjs";
import { costruisciPrompt, scegliFlashLite } from "../scripts/leggi-partner.mjs";

const PARTNER = {
  codiceNorm: "TEST 01", ateneo: "UNIVERSITA DI PROVA", citta: "Graz", paese: "Austria",
  campiMancanti: ["requisitoLingua", "scadenzeOspitante", "linkCatalogo", "notaDisponibilita"],
};
// La citazione dell'esempio e' un segnaposto: lo mettiamo dentro il testo delle
// pagine finte, cosi' l'esempio non va ritoccato in niente.
const TESTO = `Prima di LA-FRASE-COPIATA-DALLA-PAGINA e di LA-FRASE-COPIATA-CHE-NOMINA-LE-LINGUE-E-DICE-A1-E-A2 viene un po di contorno. ${"contorno ".repeat(60)}`;
const impronta = (t) => createHash("sha256").update(t, "utf8").digest("hex");
const PAGINE = [3, 16, 23].map((n) => ({
  n, file: `${String(n).padStart(3, "0")}.json`, url: `https://esempio/pagina-${n}`,
  titolo: `Incoming exchange ${n}`, caratteri: TESTO.length, tagliata: false,
  impronta: impronta(TESTO), testo: TESTO,
}));

// Ritaglia dal prompt l'oggetto JSON di esempio contando le graffe: e' proprio
// il testo che il modello ha davanti, non una copia tenuta a mano nella prova.
function esempioDelPrompt(prompt) {
  const inizio = prompt.indexOf('{\n  "campi": {');
  assert.notEqual(inizio, -1, "il prompt non contiene piu' l'esempio JSON della risposta");
  let profondita = 0;
  for (let i = inizio; i < prompt.length; i++) {
    if (prompt[i] === "{") profondita++;
    else if (prompt[i] === "}" && --profondita === 0) return JSON.parse(prompt.slice(inizio, i + 1));
  }
  throw new Error("esempio JSON non chiuso nel prompt");
}
const esempio = () => esempioDelPrompt(costruisciPrompt(PARTNER, PAGINE, "2026-08-30"));

test("l'esempio JSON del prompt passa i cancelli senza ritocchi", async (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-prompt-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const dir = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(dir, { recursive: true });
  for (const p of PAGINE) {
    fs.writeFileSync(path.join(dir, p.file), JSON.stringify({ url: p.url, titolo: p.titolo, testo: TESTO }));
  }

  const e = esempio();
  const lettura = {
    codiceNorm: "TEST 01", lettoIl: "2026-08-30T00:00:00.000Z", modello: "finto",
    pagineInviate: PAGINE.map(({ testo, ...m }) => m),
    campi: e.campi, nonTrovati: e.nonTrovati, note: e.note,
  };
  const esito = await applicaCancelli([lettura], {
    radice, codici: new Set(["TEST 01"]), statoLink: async () => ({ stato: "vivo" }),
  });

  assert.deepEqual(esito.scartati.map((s) => `${s.campo}=${s.causa}`), [],
    "l'esempio mostrato al modello viene scartato dai cancelli: prompt e validatore non sono piu' d'accordo");
  assert.equal(esito.approvati.length, Object.keys(e.campi).length);
});

test("ogni campo dell'esempio ha le chiavi esatte, in italiano, coi tipi giusti", () => {
  const e = esempio();
  const campi = Object.entries(e.campi);
  assert.ok(campi.length >= 3, "l'esempio deve mostrare almeno tre campi");
  for (const [nome, campo] of campi) {
    assert.deepEqual(Object.keys(campo).sort(), ["ambito", "fonte", "livello", "paginaCitata", "valore"],
      `${nome}: chiavi sbagliate nell'esempio (e' cosi' che nasce "level" al posto di "livello")`);
    assert.equal(typeof campo.paginaCitata, "number",
      `${nome}: paginaCitata dev'essere un numero, non una stringa`);
    assert.ok(["ateneo", "facolta"].includes(campo.livello), `${nome}: livello dev'essere ateneo o facolta`);
    assert.deepEqual(Object.keys(campo.fonte).sort(), ["citazione", "url", "verificataIl"],
      `${nome}.fonte: chiavi sbagliate`);
    // Numero di pagina e URL della fonte devono corrispondere: e' la regola che
    // il cancello 1 applica, e l'esempio deve insegnarla.
    const pagina = PAGINE.find((p) => p.n === campo.paginaCitata);
    assert.ok(pagina, `${nome}: paginaCitata ${campo.paginaCitata} non esiste fra le pagine allegate`);
    assert.equal(campo.fonte.url, pagina.url, `${nome}: l'esempio associa un URL a un numero di pagina diverso`);
  }
  // L'esempio deve coprire tutte e tre le forme di "valore".
  const albero = e.campi.requisitoLingua.valore;
  assert.deepEqual(Object.keys(albero).sort(), ["figli", "fonte", "op", "verificatoIl"],
    "la radice dell'albero delle lingue deve mostrare op, figli, fonte e verificatoIl");
  for (const foglia of albero.figli) {
    assert.ok(Object.keys(foglia).every((k) => ["lingua", "livello", "condizione", "quando"].includes(k)),
      "una foglia dell'esempio ha una chiave che il validatore rifiuta");
    assert.ok(["A1", "A2", "B1", "B2", "C1", "C2"].includes(foglia.livello), "livello CEFR non valido nell'esempio");
    assert.ok(!/[/,;|&]|\s(?:o|oppure|e)\s/i.test(foglia.lingua),
      "una foglia dell'esempio contiene piu' di una lingua");
  }
  assert.ok(Array.isArray(e.campi.scadenzeOspitante.valore), "l'array delle scadenze deve stare DENTRO 'valore'");
  assert.equal(typeof e.campi.linkCatalogo.valore, "string");
  // nonTrovati: nome del campo -> NUMERO di pagina.
  for (const [c, n] of Object.entries(e.nonTrovati)) {
    assert.equal(typeof n, "number", `nonTrovati.${c} dev'essere un numero`);
  }
});

test("il prompt dice al modello le cose che i cancelli poi pretendono", () => {
  const p = costruisciPrompt(PARTNER, PAGINE, "2026-08-30");
  const deve = [
    ["il nome dell'ateneo", "UNIVERSITA DI PROVA"],
    ["la citta e il paese", "(Graz, Austria)"],
    ["paginaCitata e' un numero", "e' un NUMERO JSON"],
    ["le chiavi sono in italiano", '"level" non esiste'],
    ["l'array di scadenzeOspitante sta dentro valore", 'array va DENTRO "valore"'],
    ["i livelli CEFR ammessi", "A1, A2, B1, B2, C1 o C2"],
    ["una lingua sola per foglia", "UNA lingua sola"],
    ["la radice dell'albero porta fonte e verificatoIl", '"fonte" (l\'URL della pagina citata) e "verificatoIl"'],
    ["degree contro exchange", "DEGREE STUDENTS"],
    ["ometti se non sei sicuro", "OMETTI il campo se non sei sicuro"],
    ["la citazione si copia carattere per carattere", "COPIATA carattere per carattere"],
    ["il minimo di 20 caratteri della citazione", "piu' corta di 20 caratteri viene rifiutata"],
    ["il dubbio va verso facolta", 'Nel dubbio scrivi sempre "facolta"'],
    ["i campi non trovati", '"nonTrovati"'],
    ["niente memoria ne' web", "Non usare la tua memoria, il web"],
    ["le pagine numerate col loro URL", "[PAGINA 3] URL: https://esempio/pagina-3"],
    ["il titolo della pagina", "TITOLO: Incoming exchange 3"],
    ["linkCatalogo non e' linkSito", "NON e' la stessa cosa di linkSito"],
    ["i campi richiesti", '["requisitoLingua","scadenzeOspitante","linkCatalogo","notaDisponibilita"]'],
    ["il testo della pagina", "LA-FRASE-COPIATA-DALLA-PAGINA"],
    ["che il livello CEFR dev'essere scritto nella citazione", "deve comparire ALLA LETTERA dentro la citazione"],
    ["che i valori dell'esempio sono finti", "TUTTI i valori qui sopra sono finti"],
  ];
  for (const [cosa, atteso] of deve) assert.ok(p.includes(atteso), `il prompt non dice piu': ${cosa}`);
});

test("l'esempio non offre al modello valori plausibili da copiare", () => {
  // Il 30/08 sera l'esempio diceva 'Inglese B2, condizione: per i corsi in
  // inglese'. Sette atenei su trentasei l'hanno copiato parola per parola,
  // compresi due in cui la pagina non nominava alcun livello: il B2 era
  // inventato. Un esempio deve insegnare la FORMA senza suggerire il CONTENUTO.
  const albero = esempio().campi.requisitoLingua.valore;
  const foglie = [];
  const gira = (n) => (n.figli ? n.figli.forEach(gira) : foglie.push(n));
  gira(albero);

  const COMUNI = ["inglese", "tedesco", "francese", "spagnolo", "italiano", "portoghese", "olandese", "english", "deutsch"];
  for (const f of foglie) {
    assert.ok(!COMUNI.includes(String(f.lingua).toLowerCase()),
      `l'esempio propone "${f.lingua}", una lingua che il modello copierebbe come se l'avesse letta: usarne una implausibile`);
    assert.ok(!["B1", "B2", "C1"].includes(f.livello),
      `l'esempio propone "${f.livello}", il livello piu' comune nella realta': una copia sarebbe indistinguibile da una lettura vera`);
  }
  // E il prompt deve dire a chiare lettere che quei valori non si riusano.
  const p = costruisciPrompt(PARTNER, PAGINE, "2026-08-30");
  assert.ok(/non copiarne nemmeno uno/i.test(p), "il prompt non vieta piu' di riusare i valori dell'esempio");
});

test("il modello si sceglie per numero di versione, non in ordine alfabetico", () => {
  // La lista vera della chiave, letta il 30/08: l'ordine alfabetico sceglieva
  // 'gemini-flash-lite-latest', un alias mobile, invece del 3.5 chiesto da E4.
  const veri = ["gemini-flash-lite-latest", "gemini-2.5-flash-lite", "gemini-3.1-flash-lite-preview",
    "gemini-3.1-flash-lite", "gemini-3.1-flash-lite-image", "gemini-3.5-flash-lite"];
  assert.equal(scegliFlashLite(veri), "gemini-3.5-flash-lite");
  assert.equal(scegliFlashLite(["gemini-flash-lite-latest", "gemini-3.1-flash-lite-preview"]), undefined);
  assert.equal(scegliFlashLite([]), undefined);
  assert.equal(scegliFlashLite(["gemini-2.5-flash-lite", "gemini-10.1-flash-lite"]), "gemini-10.1-flash-lite");
});
