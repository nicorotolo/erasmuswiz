// scripts/propaga-tutto.mjs
// Passata di propagazione su TUTTO il sito (pipeline V2, vedi
// DISEGNO_PIPELINE_DATI.md). `applica-batch.mjs` propaga solo i dati di un
// lotto appena unito; questa passata fa lo stesso lavoro sull'intero archivio,
// e serve dopo una bonifica di codici o quando si vuole verificare che non ci
// siano dati fermi in un dipartimento e mancanti in un altro.
//
// REGOLE, le stesse di applica-batch:
//   - stesso codice Erasmus (spazi normalizzati) = stesso ateneo partner;
//   - si riempiono SOLO i campi vuoti, mai una sovrascrittura;
//   - se due dipartimenti portano valori DIVERSI per lo stesso campo dello
//     stesso partner, non si sceglie: il campo viene escluso dalla
//     propagazione e finisce nell'elenco dei disaccordi. Scegliere a caso
//     vorrebbe dire pubblicare il requisito di un corso al posto di un altro.
//
// Uso:
//   node scripts/propaga-tutto.mjs                (solo rapporto)
//   node scripts/propaga-tutto.mjs --applica      (scrive)
//   node scripts/propaga-tutto.mjs --disaccordi   (elenca i conflitti per esteso)

import fs from "node:fs";
import { execSync } from "node:child_process";
import {
  CAMPI_RIEMPIBILI, leggiStato, caricaMete, spanTutteMete,
  valoreCampo, campoVuoto, impostaCampo,
} from "./lib-mete.mjs";

const APPLICA = process.argv.includes("--applica");
const MOSTRA_DISACCORDI = process.argv.includes("--disaccordi");
const norm = (c) => String(c || "").replace(/\s+/g, " ").trim().toUpperCase();

// Un requisito di lingua o una scadenza possono valere per TUTTO l'ateneo
// oppure per una sola facolta'. Aix-Marseille chiede francese B1 in generale,
// B2 alla Facolta' di Giurisprudenza e C1 al dipartimento di francese: sono
// tutti veri, e propagare il primo su tutti i dipartimenti sarebbe una bugia.
// Finche' la fonte di ogni dato non dice a che livello e' stata letta (pagina
// d'ateneo o pagina di facolta', vedi V2 Fase 4), si usa il segnale che
// abbiamo: se il testo NOMINA una facolta' o un corso, non si propaga.
const CAMPI_SENSIBILI = new Set(["requisitoLingua", "scadenzeOspitante", "notaDisponibilita"]);

// Quali campi si propagano. Il valore predefinito e' PRUDENTE e lascia fuori
// lingua e scadenze, e la ragione e' un caso vero trovato il 30/08/2026:
// "F LILLE11" e' la IESEG School of Management, che insegna in gran parte in
// inglese, e la propagazione le aveva dato "francese B1/B2, la maggior parte
// dei corsi e' in francese" - vero per l'Universite Catholique de Lille nel suo
// insieme, falso per quella scuola. Nessuna parola nel testo lo tradiva: il
// filtro sulle parole di facolta' non poteva accorgersene.
// Un indirizzo web sbagliato si vede e si corregge; un livello di lingua
// sbagliato manda uno studente in una sede dove non puo' entrare.
// Con --tutti-i-campi si torna al comportamento largo (quello che
// applica-batch.mjs usa da mesi): farlo solo sapendo cosa comporta.
const CAMPI_PRUDENTI = ["linkSito", "linkCatalogo", "notaDisponibilita"];
const campoArg = process.argv.find((a) => a.startsWith("--campi="));
const CAMPI_ATTIVI = new Set(
  process.argv.includes("--tutti-i-campi") ? CAMPI_RIEMPIBILI
    : campoArg ? campoArg.slice("--campi=".length).split(",").map((s) => s.trim()).filter(Boolean)
      : CAMPI_PRUDENTI
);
const PAROLE_DI_FACOLTA = /\b(facolt|faculty|facultad|facult[ée]|fakult|dipartiment|department|departament|school of|corso di laurea|degree in|philolog|filolog|law|medicin|engineering|psicolog|psycholog|architett|architect)/i;

function riferitoAUnaFacolta(valore) {
  return PAROLE_DI_FACOLTA.test(JSON.stringify(valore));
}

const stato = leggiStato();
const files = [...new Set(
  Object.values(stato.statoDipartimenti || {}).map((i) => i.fileJs).filter(Boolean)
)].filter((f) => fs.existsSync(f));

console.log(`Propagazione su ${files.length} file dati.\n`);

// --- 1) Raccolta: cosa sappiamo di ogni partner, e da chi -------------------

const conosciuto = new Map();   // "CODICE|campo" -> Map(json -> [file])

for (const file of files) {
  const testo = fs.readFileSync(file, "utf8");
  let mete;
  try { mete = caricaMete(testo); } catch (e) { console.error(`salto ${file}: ${e.message}`); continue; }
  for (const meta of mete) {
    const codice = norm(meta.codiceErasmus);
    if (!codice) continue;
    for (const campo of CAMPI_RIEMPIBILI) {
      const valore = meta[campo];
      const vuoto = valore == null || (Array.isArray(valore) && !valore.length) ||
        (typeof valore === "string" && (!valore.trim() || /^da verificare/i.test(valore.trim())));
      if (vuoto) continue;
      const chiave = `${codice}|${campo}`;
      const json = JSON.stringify(valore);
      if (!conosciuto.has(chiave)) conosciuto.set(chiave, new Map());
      const varianti = conosciuto.get(chiave);
      if (!varianti.has(json)) varianti.set(json, []);
      varianti.get(json).push(file);
    }
  }
}

// --- 2) Separa cio' che e' concorde da cio' che e' in disaccordo ------------

const concordi = new Map();     // "CODICE|campo" -> valore JS
const disaccordi = [];
let trattenuti = 0;
const perCampoTrattenuti = {};
for (const [chiave, varianti] of conosciuto) {
  if (varianti.size === 1) {
    const campo = chiave.split("|")[1];
    if (!CAMPI_ATTIVI.has(campo)) continue;
    const valore = JSON.parse([...varianti.keys()][0]);
    if (CAMPI_SENSIBILI.has(campo) && riferitoAUnaFacolta(valore)) {
      trattenuti++;
      perCampoTrattenuti[campo] = (perCampoTrattenuti[campo] || 0) + 1;
      continue;
    }
    concordi.set(chiave, valore);
  } else {
    const [codice, campo] = chiave.split("|");
    disaccordi.push({ codice, campo, varianti: [...varianti.entries()].map(([j, f]) => ({ valore: j, file: [...new Set(f)] })) });
  }
}

console.log(`partner x campo conosciuti: ${conosciuto.size}`);
console.log(`  concordi (propagabili): ${concordi.size}`);
console.log(`  in disaccordo (NON propagati): ${disaccordi.length}`);
console.log(`  trattenuti perche' nominano una facolta': ${trattenuti}`);
for (const [campo, n] of Object.entries(perCampoTrattenuti).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${campo}: ${n}`);
}
const perCampo = {};
for (const d of disaccordi) perCampo[d.campo] = (perCampo[d.campo] || 0) + 1;
console.log(`  dettaglio dei disaccordi:`);
for (const [campo, n] of Object.entries(perCampo).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${campo}: ${n}`);
}

if (MOSTRA_DISACCORDI) {
  console.log("\n--- DISACCORDI (da risolvere: Fase 6) ---");
  for (const d of disaccordi) {
    console.log(`\n${d.codice}  ${d.campo}`);
    for (const v of d.varianti) console.log(`   ${v.valore.slice(0, 150)}\n      da: ${v.file.map((f) => f.split("/").pop()).join(", ")}`);
  }
}

// --- 3) Scrittura ----------------------------------------------------------

let riempiti = 0;
const perCampoRiempiti = {};
const modificati = [];

for (const file of files) {
  let testo = fs.readFileSync(file, "utf8");
  let mete;
  try { mete = caricaMete(testo); } catch { continue; }

  // Quali campi mancano, per quali codici, in questo file.
  const daFare = [];
  for (const codice of [...new Set(mete.map((m) => m.codiceErasmus).filter(Boolean))]) {
    for (const campo of CAMPI_RIEMPIBILI) {
      const chiave = `${norm(codice)}|${campo}`;
      if (!concordi.has(chiave)) continue;
      daFare.push({ codice, campo, valore: concordi.get(chiave) });
    }
  }
  if (!daFare.length) continue;

  let cambiato = false;
  for (const { codice, campo, valore } of daFare) {
    // Dal fondo verso l'inizio: cosi' gli indici dei blocchi restano validi.
    const spans = spanTutteMete(testo, codice).sort((a, b) => b.start - a.start);
    for (const { start, end } of spans) {
      const blocco = testo.slice(start, end);
      if (!campoVuoto(valoreCampo(blocco, campo))) continue;
      const r = impostaCampo(blocco, campo, valore, { soloSeVuoto: true });
      if (!r.modificato) continue;
      testo = testo.slice(0, start) + r.blocco + testo.slice(end);
      cambiato = true;
      riempiti++;
      perCampoRiempiti[campo] = (perCampoRiempiti[campo] || 0) + 1;
    }
  }
  if (!cambiato) continue;

  if (APPLICA) {
    fs.writeFileSync(file, testo);
    try { execSync(`node --check "${file}"`, { stdio: "pipe" }); }
    catch (e) {
      console.error(`\nERRORE: ${file} non e' JS valido dopo la propagazione.`);
      console.error(e.stderr?.toString() || e.message);
      process.exit(1);
    }
  }
  modificati.push(file);
}

// --- 4) Ricalcolo dello stato -----------------------------------------------
// Senza questo, il file di stato continua a elencare come "da cercare" mete che
// la propagazione ha appena riempito: la coda tornerebbe a cercare dati che
// abbiamo gia'. Stessa logica di ricalcolaDip() in applica-batch.mjs.
if (APPLICA) {
  const vuoto = (v) => v == null || (Array.isArray(v) && !v.length) ||
    (typeof v === "string" && (!v.trim() || /^da verificare/i.test(v.trim())));
  let dipRicalcolati = 0;
  for (const info of Object.values(stato.statoDipartimenti || {})) {
    if (!info.fileJs || !fs.existsSync(info.fileJs)) continue;
    let meteD;
    try { meteD = caricaMete(fs.readFileSync(info.fileJs, "utf8")); } catch { continue; }
    const perCodice = new Map();
    for (const m of meteD) {
      if (!perCodice.has(m.codiceErasmus)) perCodice.set(m.codiceErasmus, []);
      perCodice.get(m.codiceErasmus).push(m);
    }
    const senzaLingua = new Set(), senzaScadenze = new Set();
    for (const [cod, blocchi] of perCodice) {
      if (blocchi.some((b) => vuoto(b.requisitoLingua))) senzaLingua.add(cod);
      if (blocchi.some((b) => vuoto(b.scadenzeOspitante))) senzaScadenze.add(cod);
    }
    const nonTrovabile = new Set(info.linguaNonTrovabile || []);
    info.pendingLingua = [...senzaLingua].filter((c) => !nonTrovabile.has(c));
    info.pendingScadenze = [...senzaScadenze];
    info.completate = meteD.filter((m) => !vuoto(m.requisitoLingua) && !vuoto(m.scadenzeOspitante)).length;
    info.totale = meteD.length;
    dipRicalcolati++;
  }
  stato.aggiornato = new Date().toISOString().slice(0, 10);
  fs.writeFileSync("mappatura-stato.json", `${JSON.stringify(stato, null, 2)}\n`);
  console.log(`\nstato ricalcolato per ${dipRicalcolati} dipartimenti`);
}

console.log(`\n--- RIEMPIMENTI ---`);
console.log(`blocchi riempiti: ${riempiti} in ${modificati.length} file`);
for (const [campo, n] of Object.entries(perCampoRiempiti).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${campo}: ${n}`);
}
if (!APPLICA) console.log(`\nSolo rapporto. Per scrivere: node scripts/propaga-tutto.mjs --applica`);
