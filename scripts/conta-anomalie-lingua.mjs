#!/usr/bin/env node
// Conteggio ripetibile V0. Legge i dati correnti: nessun numero è scritto a
// mano, perché la pipeline può aggiungere requisiti tra una sessione e l'altra.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { caricaMete } from "./lib-mete.mjs";

const require = createRequire(import.meta.url);
const PURO = require("../js/puro.js");
const QUI = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(QUI, "..");
const ATENEI = [
  { key: "cafoscari", label: "Ca' Foscari" },
  { key: "sapienza", label: "Sapienza" },
];
const CEFR = new Set(PURO.SCALA_CEFR);

function fileMete(ateneo) {
  const cartella = path.join(ROOT, "js", "atenei", ateneo);
  return fs.readdirSync(cartella)
    .filter((nome) => /^dati-mete.*\.js$/.test(nome))
    .sort()
    .map((nome) => path.join(cartella, nome));
}

function caricaAteneo(ateneo) {
  return fileMete(ateneo).flatMap((file) =>
    caricaMete(fs.readFileSync(file, "utf8")) || []
  );
}

function eSegnaposto(lingua) {
  return /^(?:n\/a|nessuna|nessuno|non indicata|non indicato|non specificata|non specificato|da verificare|sconosciuta|sconosciuto|lingua (?:degli studi|del corso scelto|di insegnamento(?: dei corsi scelti)?|principale (?:del programma scelto|di insegnamento del programma scelto)|da verificare))$/i.test(String(lingua || "").trim());
}

function eComposta(lingua) {
  return /[\/,;|&]|\s+(?:o|oppure|e)\s+/i.test(String(lingua || "").trim());
}

function haRootPresunta(nodo) {
  if (!nodo) return false;
  if (nodo.rootPresunta) return true;
  return Array.isArray(nodo.figli) && nodo.figli.some(haRootPresunta);
}

function requisitiGrezzi(nodo) {
  if (!nodo) return [];
  if (Array.isArray(nodo)) return nodo.flatMap(requisitiGrezzi);
  if (typeof nodo === "object" && Array.isArray(nodo.figli)) {
    return nodo.figli.flatMap(requisitiGrezzi);
  }
  return typeof nodo === "object" ? [nodo] : [];
}

function anomalieMeta(meta) {
  const requisiti = requisitiGrezzi(meta.requisitoLingua);
  const lingueComposte = requisiti.filter((r) => eComposta(r && r.lingua));
  const segnaposto = requisiti.flatMap((r) => {
    const lingua = String(r && r.lingua || "").trim();
    if (eSegnaposto(lingua)) return [r];
    // "Inglese o lingua degli studi" contiene un'alternativa valida e un
    // segnaposto: sono due anomalie distinte, come nel conteggio congelato.
    return lingua.split(/\s+(?:o|oppure)\s+/i)
      .filter(eSegnaposto)
      .map((parte) => ({ ...r, lingua: parte }));
  });
  const livelli = requisiti.filter((r) => !CEFR.has(String(r && r.livello || "").trim().toUpperCase()));
  const normalizzato = PURO.requisitiLinguaNormalizzati(meta);
  const daVerificare = PURO.foglieRequisitoLingua(normalizzato)
    .filter((f) => f.daVerificare || f.livelloAmbiguo);
  return { requisiti, lingueComposte, segnaposto, livelli, normalizzato, daVerificare };
}

function numeroPosti(meta, livello) {
  return (meta.posti || [])
    .filter((posto) => posto.livello === livello)
    .reduce((somma, posto) => somma + (posto.numero || 0), 0);
}

function punteggiComuni(meta, profilo) {
  const posti = numeroPosti(meta, profilo.livello);
  return {
    livello: (meta.posti || []).some((posto) => posto.livello === profilo.livello) ? 30 : 0,
    posti: posti <= 0 ? 0 : Math.min(20, 5 + (posti - 1) * 3),
  };
}

// Fotografia del difetto precedente: confronto esatto della lingua e indexOf
// sul livello, incluso il -1 che promuoveva i livelli fuori scala.
function punteggioLinguaVecchio(meta, profilo) {
  const requisiti = Array.isArray(meta.requisitoLingua) ? meta.requisitoLingua : [];
  if (!requisiti.length) return null;
  return Math.max(...requisiti.map((richiesta) => {
    const posseduta = profilo.lingue.find((l) => l.lingua === richiesta.lingua);
    if (!posseduta) return 0;
    const diff = PURO.SCALA_CEFR.indexOf(posseduta.livello) -
      PURO.SCALA_CEFR.indexOf(richiesta.livello);
    if (diff >= 0) return posseduta.certificata ? 50 : 25;
    if (diff === -1) return 12;
    return 0;
  }));
}

function categoriaVecchia(meta, profilo) {
  const comune = punteggiComuni(meta, profilo);
  const pLingua = punteggioLinguaVecchio(meta, profilo);
  if (pLingua === null) return comune.livello === 0 ? 0 : 1;
  const totale = pLingua + comune.livello + comune.posti;
  return totale >= 80 ? 2 : totale >= 40 ? 1 : 0;
}

function categoriaNuova(meta, profilo) {
  const comune = punteggiComuni(meta, profilo);
  const lingua = PURO.valutaRequisitoLingua(meta, profilo);
  const presentazione = PURO.presentaCompatibilita(lingua, {
    livello: comune.livello,
    posti: comune.posti,
    livelloTesto: profilo.livello === "L" ? "triennale" : "magistrale",
  });
  if (presentazione.icona === "✅") return 2;
  if (presentazione.icona === "🔒") return 0;
  return 1;
}

function visibileVecchio(meta, profilo) {
  const p = punteggioLinguaVecchio(meta, profilo);
  return p === null || p === 50;
}

function profiliConfronto(mete) {
  const lingue = new Set();
  for (const meta of mete) {
    const requisito = PURO.requisitiLinguaNormalizzati(meta);
    for (const lingua of PURO.lingueDaRequisito(requisito)) lingue.add(lingua);
  }
  const out = [];
  for (const livelloStudio of ["L", "LM"]) {
    out.push({ livello: livelloStudio, lingue: [] });
    for (const lingua of [...lingue].sort((a, b) => a.localeCompare(b, "it"))) {
      for (const livelloLingua of PURO.SCALA_CEFR) {
        out.push({
          livello: livelloStudio,
          lingue: [{ lingua, livello: livelloLingua, certificata: true }],
        });
        out.push({
          livello: livelloStudio,
          lingue: [{ lingua, livello: livelloLingua, certificata: false }],
        });
      }
    }
  }
  return out;
}

const dataset = ATENEI.map((ateneo) => ({
  ...ateneo,
  mete: caricaAteneo(ateneo.key),
}));
const tutteLeMete = dataset.flatMap((d) =>
  d.mete.map((meta) => ({ meta, ateneo: d.label }))
);

console.log("=== ANOMALIE LINGUA V0 — dati correnti ===");
for (const dati of dataset) {
  const analisi = dati.mete.map((meta) => ({ meta, ...anomalieMeta(meta) }));
  const requisiti = analisi.flatMap((a) => a.requisiti);
  const composte = analisi.flatMap((a) => a.lingueComposte);
  const segnaposto = analisi.flatMap((a) => a.segnaposto);
  const livelli = analisi.flatMap((a) => a.livelli);
  const meteLingua = analisi.filter((a) => a.lingueComposte.length || a.segnaposto.length);
  const meteLivello = analisi.filter((a) => a.livelli.length);
  // I valori distinti sono i valori grezzi del campo, non i frammenti interni
  // estratti per contare un segnaposto dentro "X o lingua degli studi".
  const segnapostoGrezzi = analisi.flatMap((a) =>
    a.requisiti.filter((r) => eSegnaposto(r && r.lingua)));
  const valoriLingua = new Set([...composte, ...segnapostoGrezzi].map((r) => r.lingua));
  const valoriLivello = new Set(livelli.map((r) => r.livello));
  const rootPresunte = analisi.filter((a) => haRootPresunta(a.normalizzato));

  console.log(`\n${dati.label}`);
  console.log(`  Mete: ${dati.mete.length}`);
  console.log(`  Requisiti lingua: ${requisiti.length}`);
  console.log(`  Mete con lingua composta/segnaposto: ${meteLingua.length}`);
  console.log(`  Occorrenze lingua composta: ${composte.length}`);
  console.log(`  Occorrenze segnaposto: ${segnaposto.length}`);
  console.log(`  Valori lingua anomali distinti: ${valoriLingua.size}`);
  console.log(`  Mete con livello CEFR fuori scala: ${meteLivello.length}`);
  console.log(`  Occorrenze livello CEFR fuori scala: ${livelli.length}`);
  console.log(`  Valori livello fuori scala distinti: ${valoriLivello.size}`);
  console.log(`  rootPresunta non revisionate: ${rootPresunte.length}`);

  const revisioni = new Map();
  for (const voce of analisi) {
    for (const foglia of voce.daVerificare) {
      const originale = foglia.testoOriginale || `${foglia.lingua} ${foglia.livello}`;
      const chiave = originale || "(vuoto)";
      if (!revisioni.has(chiave)) revisioni.set(chiave, new Set());
      revisioni.get(chiave).add(voce.meta.id || voce.meta.codiceErasmus || voce.meta.universita);
    }
  }
  console.log("  daVerificare (valore -> mete):");
  if (!revisioni.size) console.log("    nessuno");
  for (const [valore, idSet] of [...revisioni].sort((a, b) => a[0].localeCompare(b[0], "it"))) {
    const ids = [...idSet];
    console.log(`    - ${valore} -> ${ids.length} [${ids.join(", ")}]`);
  }
}

const totaleRequisiti = tutteLeMete.reduce((somma, { meta }) =>
  somma + requisitiGrezzi(meta.requisitoLingua).length, 0);
const totaleRootPresunte = tutteLeMete.filter(({ meta }) =>
  haRootPresunta(PURO.requisitiLinguaNormalizzati(meta))).length;
const analisiTotali = tutteLeMete.map(({ meta }) => ({ meta, ...anomalieMeta(meta) }));
const composteTotali = analisiTotali.flatMap((a) => a.lingueComposte);
const segnapostoTotali = analisiTotali.flatMap((a) => a.segnaposto);
const livelliTotali = analisiTotali.flatMap((a) => a.livelli);
const valoriLinguaTotali = new Set(analisiTotali.flatMap((a) =>
  a.requisiti
    .filter((r) => eComposta(r && r.lingua) || eSegnaposto(r && r.lingua))
    .map((r) => r.lingua)));
const valoriLivelloTotali = new Set(livelliTotali.map((r) => r.livello));
console.log("\nTOTALE REPO");
console.log(`  Mete: ${tutteLeMete.length}`);
console.log(`  Requisiti lingua: ${totaleRequisiti}`);
console.log(`  Mete con lingua composta/segnaposto: ${analisiTotali.filter((a) => a.lingueComposte.length || a.segnaposto.length).length}`);
console.log(`  Occorrenze lingua composta: ${composteTotali.length}`);
console.log(`  Occorrenze segnaposto: ${segnapostoTotali.length}`);
console.log(`  Valori lingua anomali distinti: ${valoriLinguaTotali.size}`);
console.log(`  Mete con livello CEFR fuori scala: ${analisiTotali.filter((a) => a.livelli.length).length}`);
console.log(`  Occorrenze livello CEFR fuori scala: ${livelliTotali.length}`);
console.log(`  Valori livello fuori scala distinti: ${valoriLivelloTotali.size}`);
console.log(`  rootPresunta non revisionate: ${totaleRootPresunte}`);

// Confronto su una matrice deterministica: L/LM, nessuna lingua e ogni lingua
// normalizzata a tutti i sei livelli, certificata e non. Si contano mete uniche
// che cambiano in almeno uno scenario; una meta può comparire in entrambi i
// versi se profili diversi espongono difetti diversi.
const profili = profiliConfronto(tutteLeMete.map(({ meta }) => meta));
const scese = new Set();
const saliteOVisibili = new Set();
for (const { meta, ateneo } of tutteLeMete) {
  const id = `${ateneo}:${meta.id || meta.codiceErasmus || meta.universita}`;
  for (const profilo of profili) {
    const prima = categoriaVecchia(meta, profilo);
    const dopo = categoriaNuova(meta, profilo);
    if (dopo < prima) scese.add(id);
    if (dopo > prima ||
        (!visibileVecchio(meta, profilo) && PURO.linguaCopertaPerFiltro(meta, profilo))) {
      saliteOVisibili.add(id);
    }
  }
}

console.log("\n=== CONFRONTO PRIMA/DOPO V0 ===");
console.log(`Matrice profili: ${profili.length} scenari per meta`);
console.log(`Mete scese di categoria: ${scese.size}`);
console.log(`Mete salite o tornate visibili: ${saliteOVisibili.size}`);

// Deroga di prodotto decisa da Nicola: misuriamo separatamente il suo effetto
// con uno studente "perfetto" (tutte le lingue note a C2 certificate), sia L
// sia LM. Le cause residue possono sovrapporsi: vengono quindi contate come
// insiemi dichiarati, non forzate in una spartizione che perderebbe informazione.
const lingueCatalogo = [...new Set(tutteLeMete.flatMap(({ meta }) =>
  PURO.lingueDaRequisito(PURO.requisitiLinguaNormalizzati(meta))
))].sort((a, b) => a.localeCompare(b, "it"));
const linguePerfette = lingueCatalogo.map((lingua) => ({
  lingua,
  livello: "C2",
  certificata: true,
}));

function riepilogoDeroga(mete) {
  const tornateVerdi = new Set();
  const fuoriVerde = new Set();
  const cause = {
    rootPresunta: new Set(),
    livelloAmbiguo: new Set(),
    daVerificare: new Set(),
    segnaposto: new Set(),
    requisitoAssente: new Set(),
    nessunPostoLlm: new Set(),
    altroSconosciuto: new Set(),
  };

  for (const meta of mete) {
    const id = meta.id || meta.codiceErasmus || meta.universita;
    const normalizzato = PURO.requisitiLinguaNormalizzati(meta);
    const foglie = PURO.foglieRequisitoLingua(normalizzato);
    const scenari = ["L", "LM"].map((livello) => {
      const profilo = { livello, lingue: linguePerfette };
      const comune = punteggiComuni(meta, profilo);
      const lingua = PURO.valutaRequisitoLingua(meta, profilo);
      const presentazione = PURO.presentaCompatibilita(lingua, {
        livello: comune.livello,
        posti: comune.posti,
        livelloTesto: livello === "L" ? "triennale" : "magistrale",
      });
      return { lingua, presentazione };
    });
    const verdeNuovo = scenari.some((s) => s.presentazione.icona === "✅");
    const verdePrimaDeroga = scenari.some((s) =>
      s.lingua.esito !== PURO.ESITI_LINGUA.CONDIZIONATO &&
      s.presentazione.icona === "✅");
    if (verdeNuovo && !verdePrimaDeroga) tornateVerdi.add(id);
    if (verdeNuovo) continue;

    fuoriVerde.add(id);
    const analisi = anomalieMeta(meta);
    const nessunPosto = !(meta.posti || []).some((posto) =>
      (posto.livello === "L" || posto.livello === "LM") && posto.numero > 0);
    const flags = {
      rootPresunta: haRootPresunta(normalizzato),
      livelloAmbiguo: foglie.some((foglia) => foglia.livelloAmbiguo),
      daVerificare: foglie.some((foglia) => foglia.daVerificare),
      segnaposto: analisi.segnaposto.length > 0,
      requisitoAssente: !!normalizzato.assente,
      nessunPostoLlm: nessunPosto,
    };
    for (const [causa, presente] of Object.entries(flags)) {
      if (presente) cause[causa].add(id);
    }
    if (!Object.values(flags).some(Boolean)) cause.altroSconosciuto.add(id);
  }
  return { tornateVerdi, fuoriVerde, cause };
}

console.log("\n=== DEROGA DI PRODOTTO — CORSI SCELTI ===");
console.log(`Profilo di prova: tutte le ${lingueCatalogo.length} lingue note a C2 certificate; livelli L e LM`);
console.log("Le cause residue possono sovrapporsi.");
for (const dati of [...dataset, {
  label: "TOTALE REPO",
  mete: tutteLeMete.map(({ meta }) => meta),
}]) {
  const esito = riepilogoDeroga(dati.mete);
  console.log(`\n${dati.label}`);
  console.log(`  Mete tornate al ✅ rispetto alla regola precedente: ${esito.tornateVerdi.size}`);
  console.log(`  Mete che restano fuori dal verde: ${esito.fuoriVerde.size}`);
  console.log(`    - rootPresunta: ${esito.cause.rootPresunta.size}`);
  console.log(`    - livelloAmbiguo: ${esito.cause.livelloAmbiguo.size}`);
  console.log(`    - daVerificare (totale): ${esito.cause.daVerificare.size}`);
  console.log(`      - di cui segnaposto: ${esito.cause.segnaposto.size}`);
  console.log(`    - requisito assente: ${esito.cause.requisitoAssente.size}`);
  console.log(`    - nessun posto L/LM: ${esito.cause.nessunPostoLlm.size}`);
  console.log(`    - altro sconosciuto/contraddittorio: ${esito.cause.altroSconosciuto.size}`);
}
