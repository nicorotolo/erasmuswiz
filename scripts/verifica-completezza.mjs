// scripts/verifica-completezza.mjs
// FASE 2 della pipeline V2 (vedi DISEGNO_PIPELINE_DATI.md).
//
// Risponde in modo automatico alla domanda "manca una meta?", che finora era
// solo un sospetto. Confronta le destinazioni pubblicate sul sito con l'elenco
// UFFICIALE della Sapienza, scaricato dal database Go Erasmus+ (endpoint
// pubblico, senza login) per tutti i 18 ambiti.
//
// Confronta tre cose, dalla piu' grave alla meno:
//   1. destinazioni ufficiali che il sito NON pubblica  -> uno studente non le
//      vede, e sono proprio quelle che potrebbe scegliere;
//   2. destinazioni pubblicate che nell'ufficiale NON esistono piu' -> uno
//      studente potrebbe candidarsi a un accordo che non c'e';
//   3. differenze nei posti (numero borse, mesi) sullo stesso accordo.
//
// Tutte e tre bloccano (uscita 1). Al 30/08/2026 il controllo parte da ZERO
// differenze su tutti i 17 dipartimenti: da qui in avanti qualunque scostamento
// e' una notizia, non rumore di fondo.
//
// Uso:
//   node scripts/verifica-completezza.mjs            (scarica e confronta)
//   node scripts/verifica-completezza.mjs --cache    (riusa i CSV gia' scaricati)
//   node scripts/verifica-completezza.mjs --tollera-posti  (non blocca sui posti)
//   node scripts/verifica-completezza.mjs --json     (rapporto leggibile da script)

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const USA_CACHE = process.argv.includes("--cache");
// Tutte e tre le differenze bloccano, perche' al 30/08/2026 il controllo parte
// da zero differenze su tutti i 17 dipartimenti: da qui in avanti qualunque
// scostamento e' una notizia. --tollera-posti serve solo se un giorno si
// decide di pubblicare posti diversi dall'ufficiale sapendo perche'.
const TOLLERA_POSTI = process.argv.includes("--tollera-posti");
const JSON_OUT = process.argv.includes("--json");
const CARTELLA = "fonti/sapienza/goerasmus";

// ambito dell'export ufficiale -> chiave del dipartimento in mappatura-stato.json
const AMBITI = {
  ARCHI: "Architettura (Sapienza)",
  ECON: null, // 0 sedi nel database ufficiale: non esiste un file dati
  FARM: "Farmacia (Sapienza)",
  IUS: "Giurisprudenza (Sapienza)",
  INGE: "Ingegneria Civile e Industriale (Sapienza)",
  IIIS: "Ingegneria elettronica e comunicazioni - DIET (Sapienza)",
  IIIS1: "Ingegneria informatica e gestionale - DIAG (Sapienza)",
  IIIS2: "Informatica (Sapienza)",
  STATIS: "Scienze Statistiche (Sapienza)",
  LETFIL: "Lettere e Filosofia (Sapienza)",
  MEDPROFSANIT: "Medicina e Odontoiatria - Area medica (Sapienza)",
  PSICO1: "Psicologia e Servizio Sociale (Sapienza)",
  MEDIC2: "Medicina e Psicologia - Area medica e professioni sanitarie (Sapienza)",
  POLAT: "Polo di Latina (Sapienza)",
  MATEM: "Scienze Matematiche Fisiche e Naturali (Sapienza)",
  COMM: "Comunicazione e Ricerca Sociale (Sapienza)",
  SOCIO: "Scienze Sociali ed Economiche (Sapienza)",
  POLIT: "Scienze Politiche (Sapienza)",
};

const norm = (c) => String(c || "").replace(/\s+/g, " ").trim().toUpperCase();

function csvRighe(testo) {
  const out = [];
  for (const riga of testo.split(/\r?\n/).slice(1)) {
    if (!riga.trim()) continue;
    const celle = [];
    let cur = "", virgolette = false;
    for (const ch of riga) {
      if (ch === '"') { virgolette = !virgolette; continue; }
      if (ch === ";" && !virgolette) { celle.push(cur); cur = ""; continue; }
      cur += ch;
    }
    celle.push(cur);
    out.push(celle);
  }
  return out;
}

async function export_(ambito) {
  fs.mkdirSync(CARTELLA, { recursive: true });
  const file = path.join(CARTELLA, `${ambito}.csv`);
  if (USA_CACHE && fs.existsSync(file)) return fs.readFileSync(file, "utf8");
  const risposta = await fetch(
    `https://accordi-didattica.web.uniroma1.it/goerasmus/export?ambito=${ambito}`,
    { headers: { "user-agent": "ErasmusWiz/1.0" } }
  );
  if (!risposta.ok) throw new Error(`${ambito}: HTTP ${risposta.status}`);
  const testo = await risposta.text();
  if (!/Codice erasmus/i.test(testo)) throw new Error(`${ambito}: risposta inattesa`);
  fs.writeFileSync(file, testo);
  return testo;
}

function meteDelFile(fileJs) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(
    `${fs.readFileSync(fileJs, "utf8")};globalThis.__M = typeof METE !== "undefined" ? METE : [];`,
    ctx
  );
  return ctx.__M || [];
}

// --------------------------------------------------------------- esecuzione

const stato = JSON.parse(fs.readFileSync("mappatura-stato.json", "utf8"));
const rapporto = { generato: new Date().toISOString().slice(0, 10), ambiti: [], mancanti: [], inPiu: [], posti: [] };

if (!JSON_OUT) console.log(`Confronto col database ufficiale Go Erasmus+ (${USA_CACHE ? "cache locale" : "scaricato ora"})\n`);

for (const [ambito, dipartimento] of Object.entries(AMBITI)) {
  const righe = csvRighe(await export_(ambito)).filter((c) => /Laurea/i.test(c[7] || ""));

  // Ufficiale: quanti accordi per ciascun partner, e con quali posti.
  const ufficiale = new Map();
  for (const c of righe) {
    const cod = norm(c[3]);
    if (!cod) continue;
    if (!ufficiale.has(cod)) ufficiale.set(cod, { ateneo: (c[2] || "").trim(), accordi: 0, borse: 0, mesi: new Set() });
    const u = ufficiale.get(cod);
    u.accordi++;
    u.borse += Number(c[6]) || 0;
    u.mesi.add(Number(c[5]) || 0);
  }

  if (!dipartimento) {
    if (ufficiale.size && !JSON_OUT) console.log(`${ambito}: ${ufficiale.size} partner ufficiali ma nessun file dati collegato`);
    rapporto.ambiti.push({ ambito, dipartimento: null, ufficiali: ufficiale.size, pubblicati: 0 });
    continue;
  }

  const info = stato.statoDipartimenti?.[dipartimento];
  if (!info?.fileJs || !fs.existsSync(info.fileJs)) {
    rapporto.mancanti.push({ ambito, dipartimento, motivo: "file dati assente" });
    continue;
  }

  // Sito: quante mete per partner, e quanti posti dichiarati.
  const pubblicato = new Map();
  for (const m of meteDelFile(info.fileJs)) {
    const cod = norm(m.codiceErasmus);
    if (!cod) continue;
    if (!pubblicato.has(cod)) pubblicato.set(cod, { accordi: 0, borse: 0, mesi: new Set() });
    const p = pubblicato.get(cod);
    p.accordi++;
    // Attenzione al conteggio dei posti: il sito rappresenta "4 posti aperti a
    // L e LM" come DUE voci da 4, non come 8. Sommarle raddoppierebbe, ed e'
    // esattamente l'errore che la prima versione di questo controllo faceva
    // (755 false differenze). Verificato il 30/08 su 870 mete: nessuna ha
    // numeri o mesi diversi fra i livelli, e usando il massimo per meta il
    // sito coincide con l'ufficiale in 517 casi su 517.
    const numeri = (m.posti || []).map((x) => Number(x.numero) || 0);
    p.borse += numeri.length ? Math.max(...numeri) : 0;
    for (const x of m.posti || []) p.mesi.add(Number(x.mesi) || 0);
  }

  const mancanti = [...ufficiale.keys()].filter((c) => !pubblicato.has(c));
  const inPiu = [...pubblicato.keys()].filter((c) => !ufficiale.has(c));
  const postiDiversi = [];
  for (const [cod, u] of ufficiale) {
    const p = pubblicato.get(cod);
    if (!p) continue;
    const mesiUguali = [...u.mesi].sort().join(",") === [...p.mesi].sort().join(",");
    if (p.accordi !== u.accordi || p.borse !== u.borse || !mesiUguali) {
      postiDiversi.push({
        codice: cod, ateneo: u.ateneo,
        ufficiale: { accordi: u.accordi, borse: u.borse, mesi: [...u.mesi].sort() },
        sito: { accordi: p.accordi, borse: p.borse, mesi: [...p.mesi].sort() },
      });
    }
  }

  for (const c of mancanti) rapporto.mancanti.push({ ambito, dipartimento, codice: c, ateneo: ufficiale.get(c).ateneo });
  for (const c of inPiu) rapporto.inPiu.push({ ambito, dipartimento, codice: c });
  for (const d of postiDiversi) rapporto.posti.push({ ambito, dipartimento, ...d });
  rapporto.ambiti.push({ ambito, dipartimento, ufficiali: ufficiale.size, pubblicati: pubblicato.size, mancanti: mancanti.length, inPiu: inPiu.length, postiDiversi: postiDiversi.length });

  if (!JSON_OUT) {
    const esito = mancanti.length || inPiu.length || (postiDiversi.length && !TOLLERA_POSTI)
      ? "DIFFERENZE" : postiDiversi.length ? "posti da guardare" : "ok";
    console.log(
      `${ambito.padEnd(13)} ${String(ufficiale.size).padStart(4)} ufficiali  ${String(pubblicato.size).padStart(4)} pubblicati` +
      `  mancanti ${String(mancanti.length).padStart(3)}  in piu ${String(inPiu.length).padStart(3)}  posti ${String(postiDiversi.length).padStart(3)}   ${esito}`
    );
  }
}

if (JSON_OUT) {
  console.log(JSON.stringify(rapporto, null, 2));
} else {
  console.log(`\n--- ESITO ---`);
  console.log(`destinazioni ufficiali NON pubblicate: ${rapporto.mancanti.length}`);
  for (const m of rapporto.mancanti.slice(0, 25)) console.log(`  ! ${m.dipartimento}: ${m.codice} ${m.ateneo || m.motivo || ""}`);
  if (rapporto.mancanti.length > 25) console.log(`  ... e altre ${rapporto.mancanti.length - 25}`);

  console.log(`destinazioni pubblicate NON piu ufficiali: ${rapporto.inPiu.length}`);
  for (const m of rapporto.inPiu.slice(0, 25)) console.log(`  ! ${m.dipartimento}: ${m.codice}`);

  console.log(`accordi con posti diversi dall ufficiale: ${rapporto.posti.length}`);
  for (const d of rapporto.posti.slice(0, 15)) {
    console.log(`  ~ ${d.dipartimento}: ${d.codice} ${String(d.ateneo).slice(0, 34)} | ufficiale ${d.ufficiale.accordi} accordi/${d.ufficiale.borse} posti - sito ${d.sito.accordi}/${d.sito.borse}`);
  }
  if (rapporto.posti.length > 15) console.log(`  ... e altri ${rapporto.posti.length - 15}`);
}

const blocca = rapporto.mancanti.length || rapporto.inPiu.length || (!TOLLERA_POSTI && rapporto.posti.length);
if (blocca) {
  if (!JSON_OUT) console.error(`\nIl sito NON corrisponde all'elenco ufficiale.`);
  process.exit(1);
}
if (!JSON_OUT) console.log(`\nIl sito corrisponde all'elenco ufficiale.`);
