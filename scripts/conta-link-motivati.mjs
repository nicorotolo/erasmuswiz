// Quanti link che valgono abbiamo gia' sul disco e non abbiamo mai aperto.
//
// SOLA LETTURA: non scarica niente, non scrive niente. Serve a rimisurare con i
// classificatori veri i numeri che il piano porta come stime — quelli venivano
// da espressioni regolari scritte per la misura, non dai dizionari del repo, e
// il piano stesso dice che se calano molto il traguardo del 45% va rinegoziato
// PRIMA di lanciare la raccolta, non dopo.
//
//   node scripts/conta-link-motivati.mjs
//   node scripts/conta-link-motivati.mjs --campo=linkCatalogo --esempi=10

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CAMPI_MOTIVATI, motiviDelLink } from "./lib-motivi.mjs";
import { codiceCanonico } from "./lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RACCOLTA = path.join(RADICE, "raccolta");

// Un indirizzo si considera gia' visitato se compare come `url` o come
// `urlFinale` di una pagina: un redirect seguito e' comunque una visita, e
// contarlo come "mai aperto" gonfierebbe la misura di tutto cio' che abbiamo
// gia' in casa.
function visitati(cartella, indice) {
  const insieme = new Set();
  for (const riga of indice.pagine || []) {
    try {
      const pagina = JSON.parse(fs.readFileSync(path.join(cartella, riga.file), "utf8"));
      insieme.add(pagina.url); if (pagina.urlFinale) insieme.add(pagina.urlFinale);
    } catch { /* una pagina illeggibile non aggiunge visite */ }
  }
  return insieme;
}

export function contaMotivati({ radice = RADICE } = {}) {
  const base = path.join(radice, "raccolta", "pagine");
  let campiMancanti = new Map();
  let metePerPartner = new Map();
  try {
    for (const p of JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "partner.json"), "utf8"))) {
      campiMancanti.set(codiceCanonico(p.codiceNorm), new Set(p.campiMancanti || []));
      metePerPartner.set(codiceCanonico(p.codiceNorm), p.mete || 0);
    }
  } catch { /* senza partner.json si riportano i soli conteggi grezzi */ }

  const conteggi = Object.fromEntries(CAMPI_MOTIVATI.map((c) => [c, { partner: 0, link: 0, partnerCheServono: 0, mete: 0, esempi: [] }]));
  if (!fs.existsSync(base)) return { conteggi, partnerEsaminati: 0 };
  let partnerEsaminati = 0;

  for (const cartellaNome of fs.readdirSync(base).sort()) {
    const cartella = path.join(base, cartellaNome);
    const file = path.join(cartella, "indice.json");
    if (!fs.existsSync(file)) continue;
    let indice; try { indice = JSON.parse(fs.readFileSync(file, "utf8")); } catch { continue; }
    partnerEsaminati++;
    const gia = visitati(cartella, indice);
    const trovati = Object.fromEntries(CAMPI_MOTIVATI.map((c) => [c, []]));
    for (const riga of indice.pagine || []) {
      let pagina; try { pagina = JSON.parse(fs.readFileSync(path.join(cartella, riga.file), "utf8")); } catch { continue; }
      for (const l of pagina.link || []) {
        if (gia.has(l.url)) continue;
        for (const campo of motiviDelLink(l.testo)) trovati[campo].push(l);
      }
    }
    for (const campo of CAMPI_MOTIVATI) {
      if (!trovati[campo].length) continue;
      const c = conteggi[campo];
      c.partner++; c.link += trovati[campo].length;
      // Il numero che conta davvero non e' "quanti link ci sono", ma "quanti
      // partner a cui quel campo MANCA hanno un link che potrebbe darglielo".
      if (campiMancanti.get(cartellaNome)?.has(campo)) {
        c.partnerCheServono++; c.mete += metePerPartner.get(cartellaNome) || 0;
        if (c.esempi.length < 40) c.esempi.push({ partner: cartellaNome, testo: trovati[campo][0].testo, url: trovati[campo][0].url });
      }
    }
  }
  return { conteggi, partnerEsaminati };
}

function main() {
  const arg = (nome) => (process.argv.find((a) => a.startsWith(`--${nome}=`)) || "").split("=")[1];
  const { conteggi, partnerEsaminati } = contaMotivati();
  console.log(`Partner con un indice raccolto: ${partnerEsaminati}\n`);
  console.log("| Campo | Partner con link mai aperti | Link | Di cui a cui il campo MANCA | Mete interessate |");
  console.log("|---|---:|---:|---:|---:|");
  for (const campo of CAMPI_MOTIVATI) {
    const c = conteggi[campo];
    console.log(`| ${campo} | ${c.partner} | ${c.link} | ${c.partnerCheServono} | ${c.mete} |`);
  }
  const campo = arg("campo");
  if (campo) {
    const quanti = Number(arg("esempi") || 10);
    console.log(`\nEsempi per ${campo}:`);
    for (const e of (conteggi[campo]?.esempi || []).slice(0, quanti)) {
      console.log(`  ${e.partner.padEnd(14)} ${String(e.testo).slice(0, 50).padEnd(52)} ${e.url.slice(0, 70)}`);
    }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
