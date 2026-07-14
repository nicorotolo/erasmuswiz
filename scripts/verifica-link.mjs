// scripts/verifica-link.mjs
// Controlla via HTTP che gli URL nella bozza Gemini (chiave "fonti") siano
// davvero raggiungibili PRIMA che Codex la usi per la verifica (T2). Se un
// link e' morto o da' errore, rimuove il campo corrispondente: meglio un
// "non trovato" onesto (il campo resta vuoto, verra' ricercato in un batch
// successivo) che un dato con una fonte rotta. Cosi' Codex non perde tempo
// ad aprire link morti: parte gia' da una bozza ripulita.
//
// Legge/scrive batch/SGROSSATURA.json (formato { batchId, dati: {...} }).
//
// Uso:  node scripts/verifica-link.mjs

import fs from "node:fs";

const TIMEOUT_MS = 10000;

async function statoLink(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      // Alcuni siti universitari rifiutano HEAD: riprova con GET.
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    if (res.ok) return "vivo";
    if (res.status === 404 || res.status === 410) return "morto";
    return "inconcludente";
  } catch {
    return "inconcludente";
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

for (const [codice, patch] of Object.entries(output)) {
  const fonti = patch.fonti || {};
  for (const [campo, evidenza] of Object.entries(fonti)) {
    const url = typeof evidenza === "string" ? evidenza : evidenza?.url;
    if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) continue;
    controllati++;
    const stato = await statoLink(url);
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
console.log(`Verifica link completata: ${controllati} URL controllati, ${rimossi} campi rimossi, ${inconcludenti} controlli inconcludenti lasciati a Codex.`);
console.log("Bozza pronta per Codex (T2) in batch/SGROSSATURA.json.");
