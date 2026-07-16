// scripts/verifica-link.mjs
// Controlla via HTTP che gli URL nella bozza Gemini (chiave "fonti") siano
// davvero raggiungibili PRIMA che Codex la usi per la verifica (T2). Se un
// link e' morto o da' errore, rimuove il campo corrispondente: meglio un
// "non trovato" onesto (il campo resta vuoto, verra' ricercato in un batch
// successivo) che un dato con una fonte rotta. Cosi' Codex non perde tempo
// ad aprire link morti: parte gia' da una bozza ripulita.
//
// In piu' (16/07): con la ricerca Google integrata Gemini cita come fonte gli
// URL di rimbalzo vertexaisearch.cloud.google.com/grounding-api-redirect/...,
// non la pagina reale. Qui vengono RISOLTI seguendo il redirect e sostituiti
// con l'URL finale; se il rimbalzo non porta a una pagina reale, il campo
// viene rimosso (una fonte che nessuno puo' aprire non e' una fonte).
//
// Legge/scrive batch/SGROSSATURA.json (formato { batchId, dati: {...} }).
//
// Uso:  node scripts/verifica-link.mjs

import fs from "node:fs";

const TIMEOUT_MS = 10000;
const GROUNDING_RE = /^https?:\/\/vertexaisearch\.cloud\.google\.com\/grounding-api-redirect\//;

async function statoLink(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      // Alcuni siti universitari rifiutano HEAD: riprova con GET.
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    const urlFinale = res.url || url;
    if (res.ok) return { stato: "vivo", urlFinale };
    if (res.status === 404 || res.status === 410) return { stato: "morto", urlFinale };
    return { stato: "inconcludente", urlFinale };
  } catch {
    return { stato: "inconcludente", urlFinale: url };
  } finally {
    clearTimeout(t);
  }
}

const path = "batch/SGROSSATURA.json";
if (!fs.existsSync(path)) {
  console.error(`${path} non trovato. Esegui prima gemini-sgrossatura.mjs.`);
  process.exit(1);
}
const contenitore = JSON.parse(fs.readFileSync(path, "utf8"));
const output = contenitore.dati || {};
let controllati = 0;
let rimossi = 0;
let inconcludenti = 0;
let risolti = 0;

for (const [codice, patch] of Object.entries(output)) {
  const fonti = patch.fonti || {};
  for (const [campo, evidenza] of Object.entries(fonti)) {
    const url = typeof evidenza === "string" ? evidenza : evidenza?.url;
    if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) continue;
    controllati++;
    const { stato, urlFinale } = await statoLink(url);
    if (GROUNDING_RE.test(url)) {
      if (stato === "vivo" && !GROUNDING_RE.test(urlFinale)) {
        if (typeof evidenza === "string") fonti[campo] = urlFinale;
        else evidenza.url = urlFinale;
        risolti++;
        console.log(`  ${codice}.${campo}: URL di grounding risolto -> ${urlFinale}`);
      } else {
        console.log(`  ${codice}.${campo}: URL di grounding non risolvibile (${stato}) -> campo rimosso`);
        delete patch[campo];
        delete fonti[campo];
        rimossi++;
      }
      continue;
    }
    if (stato === "morto") {
      console.log(`  ${codice}.${campo}: fonte non raggiungibile (${url}) -> campo rimosso`);
      delete patch[campo];
      delete fonti[campo];
      rimossi++;
    } else if (stato === "inconcludente") {
      console.log(`  ${codice}.${campo}: controllo HTTP inconcludente (${url}) -> resta per la verifica Codex`);
      inconcludenti++;
    }
  }
  const campiRimasti = Object.keys(patch).filter((k) => k !== "fonti" && k !== "notePraticheAppend");
  if (campiRimasti.length === 0) delete output[codice]; // niente e' sopravvissuto al controllo
}

contenitore.dati = output;
fs.writeFileSync(path, JSON.stringify(contenitore, null, 2) + "\n");
console.log(`Verifica link completata: ${controllati} URL controllati, ${risolti} URL di grounding risolti, ${rimossi} campi rimossi, ${inconcludenti} controlli inconcludenti lasciati a Codex.`);
console.log("Bozza pronta per Codex (T2) in batch/SGROSSATURA.json.");
