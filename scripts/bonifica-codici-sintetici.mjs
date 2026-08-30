// scripts/bonifica-codici-sintetici.mjs
// FASE 1 della pipeline V2 (vedi DISEGNO_PIPELINE_DATI.md).
//
// Sostituisce i codiceErasmus INVENTATI (`SAP-*`) con i codici UFFICIALI presi
// dall'export Go Erasmus+ della Sapienza. Un codice inventato e' un partner che
// il riuso non riconosce: le sue mete restano fuori dalla rete di propagazione
// e vengono rimappate da capo, con esiti incoerenti fra dipartimenti.
//
// PERCHE' NON BASTA IL NOME DELL'ATENEO: provato, e sbaglia. "Hochschule Mainz"
// somiglia a "Hochschule Darmstadt", "Politechnika Lubelska" a "Politechnika
// Poznanska": un abbinamento sul solo nome assegnava a Magonza il codice di
// Darmstadt. Un codice sbagliato qui vuol dire scrivere su una meta i requisiti
// di un'ALTRA universita' - l'errore piu' pericoloso che questo progetto possa
// fare. Percio' si richiede l'accordo di piu' prove indipendenti:
//
//   1. citta': il codice Erasmus contiene il nome della citta' (D MAINZ08),
//      che deve corrispondere alla citta' o al nome dell'ateneo sul sito;
//   2. coordinatore: il "Promotore" dell'accordo ufficiale deve essere lo
//      stesso docente di `coordinatoreCf`;
//   3. durata e posti: mesi e numero borse devono comparire fra i `posti`;
//   4. area disciplinare ISCED;
//   5. nome dell'ateneo (che da solo non basta mai).
//
// Si accetta solo se: il PAESE coincide, ci sono almeno DUE prove concordi, il
// nome e' forte OPPURE la citta' conferma, e il secondo candidato e' staccato.
// Tutto il resto finisce in ELENCO_MANUALE, dove ogni voce porta scritto il
// motivo per cui e' sicura. Se resta anche un solo caso non risolto, lo script
// NON scrive niente: o si bonifica tutto, o non si tocca nulla.
//
// NON tocca il campo `id` delle mete: gli id vivono nel localStorage di chi usa
// il sito (mete salvate, Learning Agreement) e cambiarli perderebbe quei dati.
//
// Uso:
//   node scripts/bonifica-codici-sintetici.mjs             (solo rapporto)
//   node scripts/bonifica-codici-sintetici.mjs --applica   (scrive)

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const APPLICA = process.argv.includes("--applica");
const CARTELLA_FONTI = "fonti/sapienza/goerasmus";
const STATO = "mappatura-stato.json";

// Facolta' con codici inventati -> ambito dell'export ufficiale.
const FILES = {
  ARCHI: "js/atenei/sapienza/dati-mete-architettura.js",
  IUS: "js/atenei/sapienza/dati-mete-giurisprudenza.js",
  MEDIC2: "js/atenei/sapienza/dati-mete-medicina-psicologia-area-medica.js",
};

// Casi in cui le prove automatiche non bastano ma l'atto ufficiale porta lo
// STESSO nome dell'ateneo: la verifica e' stata fatta a mano, leggendola.
const ELENCO_MANUALE = {
  "SAP-ARCHI-GUSTAVE-EIFFEL": ["F  PARIS483", "l'export ufficiale si chiama UNIVERSITE GUSTAVE EIFFEL"],
  "SAP-ARCHI-SORBONNE": ["F  PARIS468", "l'export ufficiale si chiama SORBONNE UNIVERSITE"],
  "SAP-ARCHI-HVANNEYRI": ["IS BORGARN02", "stesso nome: LANDBUNADARHASKOLI ISLANDS"],
  "SAP-ARCHI-VIC-A": ["E  VIC01", "stesso nome: UNIVERSITAT DE VIC; unico accordo Vic"],
  "SAP-ARCHI-VIC-B": ["E  VIC01", "secondo accordo con lo stesso ateneo"],
};

const url = (amb) => `https://accordi-didattica.web.uniroma1.it/goerasmus/export?ambito=${amb}`;

function csvRighe(testo) {
  const out = [];
  for (const riga of testo.split(/\r?\n/).slice(1)) {
    if (!riga.trim()) continue;
    const celle = [];
    let cur = "", traVirgolette = false;
    for (const ch of riga) {
      if (ch === '"') { traVirgolette = !traVirgolette; continue; }
      if (ch === ";" && !traVirgolette) { celle.push(cur); cur = ""; continue; }
      cur += ch;
    }
    celle.push(cur);
    out.push(celle);
  }
  return out;
}

const su = (s) => String(s || "").toUpperCase().normalize("NFD")
  .replace(/[̀-ͯ]/g, "").replace(/[^A-Z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

const GENERICHE = new Set(("UNIVERSITY UNIVERSITE UNIVERSITA UNIVERSITAT UNIVERSITAET UNIVERSIDAD " +
  "UNIVERSIDADE UNIWERSYTET UNIVERZITA UNIVERSITEIT SVEUCILISTE PANEPISTIMIO DE DI DA DU DES DEL " +
  "DELLA DER DAS DIE OF DEGLI STUDI ECOLE NATIONALE SUPERIEURE THE AND ET IN ZU VAN FOR HOCHSCHULE " +
  "FACHHOCHSCHULE POLITECHNIKA TECHNISCHE TECHNICKA UNIVERSITETI APPLIED SCIENCES CENTRO").split(" "));

const parole = (s) => new Set(su(s).split(" ").filter((x) => x.length > 2 && !GENERICHE.has(x)));
const nomi = (s) => new Set(su(s).split(" ").filter((x) => x.length > 2 && !["DEL", "DELLA", "LA"].includes(x)));

function somiglianza(a, b) {
  if (!a.size || !b.size) return 0;
  let comuni = 0;
  for (const x of a) if (b.has(x)) comuni++;
  return comuni / Math.max(a.size, b.size);
}

async function scaricaExport(amb) {
  fs.mkdirSync(CARTELLA_FONTI, { recursive: true });
  const file = path.join(CARTELLA_FONTI, `${amb}.csv`);
  if (fs.existsSync(file)) return fs.readFileSync(file, "utf8");
  const risposta = await fetch(url(amb), { headers: { "user-agent": "ErasmusWiz/1.0" } });
  if (!risposta.ok) throw new Error(`export ${amb}: HTTP ${risposta.status}`);
  const testo = await risposta.text();
  if (!/Codice erasmus/i.test(testo)) throw new Error(`export ${amb}: risposta inattesa`);
  fs.writeFileSync(file, testo);
  console.log(`  scaricato ${file}`);
  return testo;
}

function accordiUfficiali(testo) {
  return csvRighe(testo)
    .filter((c) => /Laurea/i.test(c[7] || ""))
    .map((c) => ({
      codice: (c[3] || "").trim(),        // esattamente come nell'export ("A  WIEN02")
      ateneo: (c[2] || "").trim(),
      paese: su(c[1]),
      mesi: Number(c[5]) || 0,
      borse: Number(c[6]) || 0,
      isced: [...String(c[9] || "").matchAll(/\((\d{3,4})\)/g)].map((m) => m[1]),
      pNome: parole(c[2]),
      pProm: nomi(c[4]),
    }));
}

function candidati(meta, accordi) {
  const pNome = parole(meta.universita);
  const pProm = nomi(meta.coordinatoreCf);
  const citta = su(meta.citta);
  const nomeSito = su(meta.universita);
  const mesi = (meta.posti || []).map((p) => p.mesi);
  const borse = (meta.posti || []).map((p) => p.numero);
  const isced = (meta.areeDisciplinari || []).map((a) => String(a.codice));

  return accordi.map((a) => {
    const sNome = somiglianza(pNome, a.pNome);
    const sProm = somiglianza(pProm, a.pProm) >= 0.5 ? 1 : 0;
    // La citta' e' dentro al codice: "D MAINZ08" -> "MAINZ".
    const cittaCodice = su(a.codice).replace(/^[A-Z]{1,2} /, "").replace(/[0-9]+$/, "").trim();
    const radice = cittaCodice.slice(0, 5);
    const sCitta = cittaCodice.length >= 4 &&
      (citta.startsWith(radice) || nomeSito.includes(radice) || citta.slice(0, 5) === radice) ? 1 : 0;
    const sPosti = mesi.includes(a.mesi) && borse.includes(a.borse) ? 1 : 0;
    const sIsced = isced.some((x) => a.isced.includes(x)) ? 1 : 0;
    const prove = sProm + sCitta + sPosti + sIsced;
    const punteggio = sNome * 2 + sProm * 1.5 + sCitta * 1.5 + sPosti * 0.7 + sIsced * 0.3;
    return { a, sNome, sProm, sCitta, sPosti, sIsced, prove, punteggio };
  }).sort((x, y) => y.punteggio - x.punteggio);
}

function paeseCoincide(meta, accordo) {
  const p = su(meta.paese), q = accordo.paese;
  if (!p || !q) return false;
  return q.startsWith(p.slice(0, 4)) || p.startsWith(q.slice(0, 4));
}

// ---------------------------------------------------------------- esecuzione

console.log("FASE 1 - bonifica dei codici Erasmus inventati\n");
const decisioni = [];   // { file, sap, codice, motivo }
const irrisolti = [];

for (const [amb, rel] of Object.entries(FILES)) {
  const accordi = accordiUfficiali(await scaricaExport(amb));
  const testo = fs.readFileSync(rel, "utf8");
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(`${testo};globalThis.__M = typeof METE !== "undefined" ? METE : [];`, ctx);
  const finti = (ctx.__M || []).filter((m) => /^SAP-/.test(m.codiceErasmus || ""));
  console.log(`\n${amb}: ${finti.length} mete con codice inventato, ${accordi.length} accordi ufficiali`);

  for (const meta of finti) {
    const manuale = ELENCO_MANUALE[meta.codiceErasmus];
    if (manuale) {
      const [codice, motivo] = manuale;
      // Si riprende la scrittura ESATTA dall'export (la spaziatura dei codici
      // ufficiali non e' uniforme: "A  WIEN02" ha due spazi, "BG SOFIA04" uno).
      const ufficiale = accordi.find((a) => su(a.codice) === su(codice));
      if (!ufficiale) {
        irrisolti.push({ sap: meta.codiceErasmus, perche: `il codice ${codice} dell'elenco manuale non esiste nell'export ${amb}` });
        continue;
      }
      decisioni.push({ file: rel, sap: meta.codiceErasmus, codice: ufficiale.codice, motivo: `a mano: ${motivo}` });
      continue;
    }
    const [primo, secondo] = candidati(meta, accordi);
    const staccato = !secondo || primo.punteggio - secondo.punteggio >= 0.6;
    const sicuro = primo && paeseCoincide(meta, primo.a) && staccato &&
      (primo.sNome >= 0.5 || primo.sCitta === 1) && primo.prove >= 2;
    if (!sicuro) {
      irrisolti.push({
        sap: meta.codiceErasmus,
        perche: `prove insufficienti (nome ${primo ? primo.sNome.toFixed(2) : "-"}, citta ${primo ? primo.sCitta : "-"}, prove ${primo ? primo.prove : "-"})`,
        proposta: primo ? `${primo.a.codice} ${primo.a.ateneo}` : "(nessuna)",
      });
      continue;
    }
    const prove = [primo.sCitta && "citta", primo.sProm && "coordinatore", primo.sPosti && "mesi+posti", primo.sIsced && "ISCED"].filter(Boolean);
    decisioni.push({ file: rel, sap: meta.codiceErasmus, codice: primo.a.codice, motivo: `nome ${primo.sNome.toFixed(2)} + ${prove.join(", ")}` });
  }
}

console.log(`\n--- RISULTATO ---`);
console.log(`risolti: ${decisioni.length}`);
console.log(`irrisolti: ${irrisolti.length}`);
for (const x of irrisolti) console.log(`  ! ${x.sap}: ${x.perche}${x.proposta ? ` | proposta scartata: ${x.proposta}` : ""}`);

if (irrisolti.length) {
  console.error("\nNIENTE E' STATO SCRITTO: o si bonifica tutto, o non si tocca nulla.");
  process.exit(1);
}

if (!APPLICA) {
  console.log("\nSolo rapporto. Per scrivere: node scripts/bonifica-codici-sintetici.mjs --applica");
  const perFile = {};
  for (const d of decisioni) (perFile[d.file] ||= []).push(d);
  for (const [f, ds] of Object.entries(perFile)) {
    console.log(`\n${f}`);
    for (const d of ds) console.log(`  ${d.sap.padEnd(30)} -> ${d.codice.padEnd(14)} (${d.motivo})`);
  }
  process.exit(0);
}

// --- scrittura -------------------------------------------------------------

let sostituzioni = 0;
const perFile = {};
for (const d of decisioni) (perFile[d.file] ||= []).push(d);

for (const [file, ds] of Object.entries(perFile)) {
  let testo = fs.readFileSync(file, "utf8");
  for (const d of ds) {
    const cerca = `codiceErasmus: "${d.sap}"`;
    if (!testo.includes(cerca)) throw new Error(`${file}: non trovo ${cerca}`);
    testo = testo.split(cerca).join(`codiceErasmus: "${d.codice}"`);
    sostituzioni++;
  }
  fs.writeFileSync(file, testo);
  console.log(`${file}: ${ds.length} codici sostituiti`);
}

// Anche il file di stato cita i codici inventati (linguaNonTrovabile, pending,
// batch in coda): se restassero li', punterebbero a mete che non esistono piu'.
let stato = fs.readFileSync(STATO, "utf8");
let inStato = 0;
for (const d of decisioni) {
  const cerca = `"${d.sap}"`;
  if (!stato.includes(cerca)) continue;
  inStato += stato.split(cerca).length - 1;
  stato = stato.split(cerca).join(`"${d.codice}"`);
}
fs.writeFileSync(STATO, stato);
console.log(`${STATO}: ${inStato} riferimenti aggiornati`);

const rimasti = Object.values(FILES).reduce((n, f) => n + (fs.readFileSync(f, "utf8").match(/codiceErasmus: "SAP-/g) || []).length, 0);
console.log(`\nFatto: ${sostituzioni} codici sostituiti. Codici inventati rimasti: ${rimasti}`);
if (rimasti) { console.error("ATTENZIONE: ne restano. Controllare a mano."); process.exit(1); }
