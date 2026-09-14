#!/usr/bin/env node
// Redesign v4 — Fase 1: genera le 9 artboard dell'esplorazione (3 varianti ×
// style tile, Mete 390, LA 1280). I token vengono da css/style.css via
// scripts/confronta-token.mjs: nessun colore inventato.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const QUI = path.dirname(fileURLToPath(import.meta.url));
const RADICE = path.resolve(QUI, "../..");
const OUT = path.join(QUI, "canvas");
fs.mkdirSync(OUT, { recursive: true });
const TOKEN = execFileSync("node", [path.join(RADICE, "scripts/confronta-token.mjs"), "--estrai"], { encoding: "utf8" }).trim();

// ── Varianti: cambiano SOLO densità, tipografia, Wiz/ambra ──────────────
const VARIANTI = {
  GuidaCalda: {
    nome: "V1 · Guida calda",
    cardPad: 24, gap: 16, radius: "var(--radius-xl)", secGap: 28,
    h1: "font-family: var(--font-display); font-weight: 800; font-size: 30px; line-height: 1.12; letter-spacing: -.03em;",
    h2: "font-family: var(--font-display); font-weight: 800; font-size: 21px; line-height: 1.2; letter-spacing: -.02em;",
    h3: "font-family: var(--font-display); font-weight: 700; font-size: 19px; line-height: 1.22; letter-spacing: -.015em;",
    body: 15.5, small: 13.5, score: 21,
    stile: "pill", wizMete: true, wizVuoto: true, wizLA: true, ambraPreferite: true, righeCompatte: false,
  },
  Strumento: {
    nome: "V2 · Strumento chiaro",
    cardPad: 14, gap: 8, radius: "var(--radius-md)", secGap: 18,
    h1: "font-family: var(--font-body); font-weight: 800; font-size: 22px; line-height: 1.2; letter-spacing: -.02em;",
    h2: "font-family: var(--font-body); font-weight: 700; font-size: 16px; line-height: 1.3; letter-spacing: -.01em;",
    h3: "font-family: var(--font-body); font-weight: 700; font-size: 15.5px; line-height: 1.3; letter-spacing: -.005em;",
    body: 14.5, small: 13, score: 16,
    stile: "dot", wizMete: false, wizVuoto: false, wizLA: false, ambraPreferite: false, righeCompatte: true,
  },
  Equilibrio: {
    nome: "V3 · Equilibrio",
    cardPad: 20, gap: 12, radius: "var(--radius-lg)", secGap: 22,
    h1: "font-family: var(--font-display); font-weight: 800; font-size: 25px; line-height: 1.15; letter-spacing: -.025em;",
    h2: "font-family: var(--font-display); font-weight: 700; font-size: 18px; line-height: 1.25; letter-spacing: -.015em;",
    h3: "font-family: var(--font-display); font-weight: 700; font-size: 17px; line-height: 1.25; letter-spacing: -.015em;",
    body: 15.5, small: 13.5, score: 19,
    stile: "pill", wizMete: false, wizVuoto: true, wizLA: false, ambraPreferite: false, righeCompatte: false,
  },
  // Scelta di Nicola (2026-09-14): densità e card di V3; tipografia, semaforo,
  // stato vuoto e stelle blu di V2; profilo in riga sotto il titolo; LA senza
  // kicker, con "i" informative e tabella centrata; bottoni: opzione C "Inchiostro".
  Scelta: {
    nome: "Scelta · V3 + tipografia V2",
    cardPad: 20, gap: 12, radius: "var(--radius-lg)", secGap: 22,
    h1: "font-family: var(--font-body); font-weight: 800; font-size: 22px; line-height: 1.2; letter-spacing: -.02em;",
    h2: "font-family: var(--font-body); font-weight: 700; font-size: 16px; line-height: 1.3; letter-spacing: -.01em;",
    h3: "font-family: var(--font-body); font-weight: 700; font-size: 15.5px; line-height: 1.3; letter-spacing: -.005em;",
    body: 14.5, small: 13, score: 16,
    stile: "dot", wizMete: false, wizVuoto: false, wizLA: false, ambraPreferite: false, righeCompatte: false,
    profiloInRiga: true, laInfo: true, bottoniC: true, cardOrdinata: true,
  },
};

// ── Dati: mete reali di Sapienza Giurisprudenza (profilo: Inglese B2) ──
const METE = [
  { nome: "Vilniaus Gedimino Technikos Universitetas (VGTU)", luogo: "Vilnius (Lituania)", posti: "6 posti", mesi: "6 mesi", lingua: "Inglese B2", cat: "ok", stato: "Compatibile", punti: "92%", pref: true },
  { nome: "Univerza v Ljubljani (University of Ljubljana)", luogo: "Lubiana (Slovenia)", posti: "6 posti", mesi: "9 mesi", lingua: "Sloveno o Inglese B2", cat: "ok", stato: "Compatibile", punti: "88%", pref: true },
  { nome: "National and Kapodistrian University of Athens (NKUA)", luogo: "Atene (Grecia)", posti: "4 posti", mesi: "10 mesi", lingua: "Greco o Inglese B2", cat: "medio", stato: "Possibile — verifica le lingue", punti: "71%", pref: false },
  { nome: "Universidad de Zaragoza", luogo: "Saragozza (Spagna)", posti: "6 posti", mesi: "10 mesi", lingua: "Lingua da verificare", cat: "medio", stato: "Verifica la lingua", punti: null, pref: false },
  { nome: "Gottfried Wilhelm Leibniz Universität Hannover", luogo: "Hannover (Germania)", posti: "2 posti", mesi: "10 mesi", lingua: "Tedesco B1", cat: "basso", stato: "Non accessibile ora", punti: "34%", pref: false },
];

// ── Icone SVG (stroke 2, griglia 24) ────────────────────────────────────
const ico = (d, size = 18, color = "currentColor", fill = "none") =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none; display: block">${d}</svg>`;
const I = {
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"></path>',
  arrow: '<path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path>',
  check: '<path d="M20 6L9 17l-5-5"></path>',
  alert: '<path d="M12 4l9 16H3z"></path><path d="M12 10v4"></path><path d="M12 17.5v.5"></path>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path>',
  search: '<circle cx="11" cy="11" r="6.5"></circle><path d="M20 20l-4-4"></path>',
  menu: '<path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path>',
  sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"></path>',
  map: '<path d="M9 4L3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5z"></path><path d="M9 4v13.5M15 6.5V20"></path>',
  route: '<circle cx="6" cy="18" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"></path>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path><path d="M9 13h6M9 17h4"></path>',
  up: '<path d="M6 15l6-6 6 6"></path>',
  x: '<path d="M6 6l12 12M18 6L6 18"></path>',
  home: '<path d="M4 11l8-7 8 7"></path><path d="M6 10v10h12V10"></path><path d="M10 20v-5h4v5"></path>',
  pencil: '<path d="M4 20h4L19 9l-4-4L4 16z"></path><path d="M13.5 6.5l4 4"></path>',
  info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v5"></path><path d="M12 7.5v.5"></path>',
  printer: '<path d="M7 9V4h10v5"></path><rect x="4" y="9" width="16" height="8" rx="2"></rect><path d="M7 14h10v6H7z"></path>',
  save: '<path d="M5 4h11l3 3v13H5z"></path><path d="M8 4v5h7V4"></path><path d="M8 20v-6h8v6"></path>',
};

// "i" informativa: il suggerimento compare al passaggio o al focus (tastiera).
// `aperta` lo mostra fisso, solo per farlo vedere sulla canvas.
function info(testo, { chiaro = false, aperta = false, larghezza = 260 } = {}) {
  const col = chiaro ? "var(--night-muted)" : "var(--text-hint)";
  return `<span class="info" tabindex="0" role="button" aria-label="Informazioni: ${testo.replace(/"/g, "&quot;")}" style="position: relative; display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; color: ${col}; vertical-align: middle; cursor: help; flex: none">${ico(I.info, 18, col)}<span class="info-tip" role="tooltip" style="position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); width: ${larghezza}px; padding: 10px 12px; border-radius: var(--radius-sm); background: var(--text-dark); color: #fff; font-family: var(--font-body); font-size: 13px; font-weight: 500; line-height: 1.45; letter-spacing: 0; text-transform: none; text-align: left; box-shadow: 0 8px 24px rgba(30,27,46,.22); z-index: 5; display: ${aperta ? "block" : "none"}">${testo}</span></span>`;
}

const COLORI = {
  ok: { fg: "var(--green)", bg: "var(--green-bg)", bd: "var(--green-border)", icona: I.check, punti: "var(--green)" },
  medio: { fg: "var(--amber)", bg: "var(--amber-bg)", bd: "var(--amber-border)", icona: I.alert, punti: "var(--amber)" },
  basso: { fg: "var(--red)", bg: "var(--red-bg)", bd: "var(--red-border)", icona: I.lock, punti: "var(--red)" },
};

// ── Componenti ──────────────────────────────────────────────────────────
function semaforo(T, cat, testo) {
  const c = COLORI[cat];
  if (T.stile === "dot") {
    return `<span style="display: inline-flex; align-items: center; gap: 5px; color: ${c.fg}; font-size: 12.5px; font-weight: 700; white-space: nowrap">${ico(c.icona, 14, c.fg)}${testo}</span>`;
  }
  return `<span style="display: inline-flex; align-items: center; gap: 5px; background: ${c.bg}; color: ${c.fg}; border: 1px solid ${c.bd}; border-radius: var(--radius-pill); padding: 4px 10px; font-size: var(--fs-xs); font-weight: 700; white-space: nowrap">${ico(c.icona, 13, c.fg)}${testo}</span>`;
}

function chipMeta(T, testo) {
  if (T.righeCompatte) return `<span style="font-size: 12.5px; font-weight: 600; color: var(--text-muted)">${testo}</span>`;
  return `<span style="display: inline-flex; align-items: center; background: var(--bg-app); border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 5px 11px; font-size: var(--fs-xs); font-weight: 600; color: var(--text-muted)">${testo}</span>`;
}

function stella(T, attiva) {
  const col = attiva ? (T.ambraPreferite || T.stile !== "dot" ? "var(--gold-dark)" : "var(--primary)") : "var(--text-hint)";
  const fill = attiva ? (T.ambraPreferite || T.stile !== "dot" ? "var(--gold)" : "var(--primary)") : "none";
  return `<button aria-label="${attiva ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}" style="width: 44px; height: 44px; display: grid; place-items: center; border: 0; background: transparent; border-radius: var(--radius-pill); color: ${col}; flex: none; cursor: pointer">${ico(I.star, 22, col, fill)}</button>`;
}

function cardMeta(T, m) {
  const c = COLORI[m.cat];
  // Card ordinata (commento di Nicola, 14/09: "tutto troppo compresso"):
  // prima la compatibilità, poi chi e dove, poi i dettagli con etichetta,
  // in ordine di utilità per chi sceglie. Niente pillole.
  if (T.cardOrdinata) {
    const dettagli = [["Lingua richiesta", m.lingua], ["Durata", m.mesi], ["Posti", m.posti]];
    return `<article style="background: var(--bg-card); border-radius: ${T.radius}; padding: 20px; box-shadow: 0 1px 2px rgba(30,27,46,.04); box-sizing: border-box; display: flex; flex-direction: column; gap: 12px">
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: -8px -10px -4px 0">
    <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
      <span style="font-family: var(--font-mono); font-weight: 700; font-size: 34px; line-height: 1; letter-spacing: -.04em; color: ${m.punti ? c.punti : "var(--text-hint)"}">${m.punti ?? "—"}</span>
      ${semaforo(T, m.cat, m.stato)}
    </div>
    ${stella(T, m.pref)}
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px">
    <h3 style="margin: 0; ${T.h3} color: var(--text-dark); text-wrap: pretty; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.6em">${m.nome}</h3>
    <div style="font-size: 13.5px; color: var(--text-hint)">${m.luogo}</div>
  </div>
  <dl style="margin: 0; padding-top: 12px; border-top: 1px solid var(--border); display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr) minmax(0, 1fr); gap: 12px">
    ${dettagli.map(([l, v]) => `<div style="display: flex; flex-direction: column; gap: 3px; min-width: 0"><dt style="font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--text-hint)">${l}</dt><dd style="margin: 0; font-size: 14px; font-weight: 600; color: ${v === "Lingua da verificare" ? "var(--amber)" : "var(--text-dark)"}">${v}</dd></div>`).join("")}
  </dl>
</article>`;
  }
  if (T.righeCompatte) {
    return `<article style="display: grid; grid-template-columns: 52px minmax(0, 1fr) 44px; align-items: center; gap: 10px; background: var(--bg-card); border: 1px solid var(--border); border-radius: ${T.radius}; padding: 10px 6px 10px 12px">
  <div style="font-family: var(--font-mono); font-weight: 700; font-size: ${T.score}px; color: ${c.punti}; letter-spacing: -.02em; text-align: center">${m.punti ?? "—"}</div>
  <div style="min-width: 0; display: flex; flex-direction: column; gap: 3px">
    <h3 style="margin: 0; ${T.h3} color: var(--text-dark); text-wrap: pretty">${m.nome}</h3>
    <div style="display: flex; flex-wrap: wrap; column-gap: 10px; row-gap: 2px; align-items: center">
      <span style="font-size: 12.5px; color: var(--text-hint)">${m.luogo}</span>
      ${chipMeta(T, m.posti + " · " + m.mesi)}
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center">${semaforo(T, m.cat, m.stato)}${chipMeta(T, m.lingua)}</div>
  </div>
  ${stella(T, m.pref)}
</article>`;
  }
  return `<article style="position: relative; background: var(--bg-card); border: 1px solid var(--border); border-radius: ${T.radius}; padding: ${T.cardPad}px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: ${Math.round(T.gap * 0.75)}px">
  <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin: -6px -8px 0 0">
    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding-top: 6px">
      ${m.punti ? `<span style="font-family: var(--font-mono); font-weight: 700; font-size: ${T.score}px; letter-spacing: -.02em; color: ${c.punti}">${m.punti}</span>` : ""}
      ${semaforo(T, m.cat, m.stato)}
    </div>
    ${stella(T, m.pref)}
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px">
    <h3 style="margin: 0; ${T.h3} color: var(--text-dark); text-wrap: pretty">${m.nome}</h3>
    <div style="font-size: var(--fs-sm); color: var(--text-hint)">${m.luogo}</div>
  </div>
  <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 8px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">${chipMeta(T, m.posti)}${chipMeta(T, m.mesi)}${chipMeta(T, m.lingua)}</div>
    <span style="color: var(--primary); flex: none">${ico(I.arrow, 20, "var(--primary)")}</span>
  </div>
</article>`;
}

function chip(T, testo, attivo) {
  const base = `display: inline-flex; align-items: center; min-height: 44px; border-radius: var(--radius-pill); padding: 0 ${T.righeCompatte ? 14 : 17}px; font-family: var(--font-body); font-size: var(--fs-sm); white-space: nowrap; flex: none;`;
  return attivo
    ? `<span style="${base} background: var(--primary-fill); border: 1.5px solid var(--primary-fill); color: #fff; font-weight: 700; ${T.righeCompatte ? "" : "box-shadow: 0 6px 16px var(--primary-shadow);"}">${testo}</span>`
    : `<span style="${base} background: var(--bg-card); border: 1.5px solid var(--border); color: var(--text-muted); font-weight: 600">${testo}</span>`;
}

const btn = {
  primario: (testo, stato = "") => {
    const s = {
      "": "background: var(--primary-fill); color: #fff; box-shadow: 0 2px 5px rgba(79,70,229,.18), 0 10px 24px var(--primary-shadow);",
      hover: "background: var(--primary-fill-hover); color: #fff; transform: translateY(-1px); box-shadow: 0 3px 7px rgba(79,70,229,.22), 0 14px 32px rgba(79,70,229,.34);",
      focus: "background: var(--primary-fill); color: #fff; box-shadow: var(--shadow-focus);",
      disabled: "background: var(--border); color: var(--text-hint);",
    }[stato];
    return `<span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 0 20px; border-radius: 14px; font-family: var(--font-body); font-size: var(--fs-body); font-weight: 700; ${s}">${testo}</span>`;
  },
  secondario: (testo, stato = "") => {
    const s = {
      "": "border: 1.5px solid var(--border-strong); background: var(--bg-card-hover); color: var(--primary-active);",
      hover: "border: 1.5px solid var(--primary); background: #EEF2FF; color: var(--primary-active);",
      focus: "border: 1.5px solid var(--primary); background: var(--bg-card-hover); color: var(--primary-active); box-shadow: var(--shadow-focus);",
      disabled: "border: 1.5px solid var(--border); background: var(--bg-app); color: var(--text-hint);",
    }[stato];
    return `<span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 0 20px; border-radius: 14px; font-family: var(--font-body); font-size: var(--fs-body); font-weight: 700; ${s}">${testo}</span>`;
  },
};

const wiz = (size) => `<img src="mascot-wiz.svg" alt="" style="width: ${size}px; height: ${Math.round(size * 280 / 220)}px; flex: none; display: block">`;

function etichetta(testo) {
  return `<div style="font-size: 11.5px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; color: var(--text-hint)">${testo}</div>`;
}

function documento(T, corpo, sfondo = "var(--bg-app)") {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Space+Mono:wght@400;700&amp;display=swap">
  <style>
${TOKEN}
    body { margin: 0; background: ${sfondo}; font-family: var(--font-body); color: var(--text-dark); -webkit-font-smoothing: antialiased; }
    a { color: var(--primary); } a:hover { color: var(--primary-hover); }
    button { font: inherit; }
    .info:hover .info-tip, .info:focus-visible .info-tip { display: block !important; }
    .info:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
  </style>
</helmet>
${corpo}
</x-dc>
</body>
</html>
`;
}

// ── Artboard 1: style tile ──────────────────────────────────────────────
function styleTile(T) {
  const riga = (label, contenuto) => `<div style="display: flex; flex-direction: column; gap: 10px">${etichetta(label)}<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">${contenuto}</div></div>`;
  const input = (focus) => `<div style="display: flex; flex-direction: column; gap: 6px; width: 300px">
    <label style="font-size: var(--fs-sm); font-weight: 700; color: var(--text-dark)">Cerca</label>
    <div style="display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; background: var(--bg-card); border: 1.5px solid ${focus ? "var(--primary)" : "var(--border-strong)"}; border-radius: ${T.righeCompatte ? "var(--radius-sm)" : "var(--radius-md)"}; ${focus ? "box-shadow: var(--shadow-focus);" : ""}">
      ${ico(I.search, 18, "var(--text-hint)")}<span style="font-size: var(--fs-body); color: ${focus ? "var(--text-dark)" : "var(--text-hint)"}">${focus ? "Lubiana" : "Università, città o paese…"}</span>
    </div></div>`;
  const vuoto = `<div style="display: flex; align-items: center; gap: 16px; background: var(--bg-card); border: 1.5px dashed var(--border-strong); border-radius: ${T.radius}; padding: ${T.cardPad}px; max-width: 520px">
    ${T.wizVuoto ? wiz(T.righeCompatte ? 40 : 64) : ico(I.search, 24, "var(--text-hint)")}
    <div style="display: flex; flex-direction: column; gap: 4px">
      <div style="${T.h3} color: var(--text-dark)">Nessuna meta con questi filtri</div>
      <div style="font-size: var(--fs-sm); color: var(--text-muted); line-height: 1.5">Prova a togliere «Per la mia lingua» o a cercare un altro paese.</div>
    </div></div>`;
  const countdown = `<div style="display: inline-flex; align-items: center; gap: 14px; background: var(--night-bg); border-radius: ${T.radius}; padding: ${T.righeCompatte ? "10px 14px" : "16px 20px"}">
    <div style="display: flex; flex-direction: column; gap: 2px">
      <span style="font-size: 11.5px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; color: var(--night-muted)">Scadenza d'esempio</span>
      <span style="font-size: var(--fs-sm); color: var(--night-text)">Nomination (autunno)</span>
    </div>
    <span style="font-family: var(--font-mono); font-weight: 700; font-size: ${T.righeCompatte ? 20 : 26}px; color: var(--gold)">12g 04h</span></div>`;

  const corpo = `<div style="width: 820px; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; gap: ${T.secGap + 8}px">
  <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--border); padding-bottom: 20px">
    <div style="display: flex; flex-direction: column; gap: 6px">
      ${etichetta("Style tile · redesign v4")}
      <div style="font-family: var(--font-display); font-weight: 800; font-size: 34px; letter-spacing: -.03em; color: var(--text-dark)">${T.nome}</div>
    </div>
    ${T.wizMete ? wiz(56) : ""}
  </div>
  ${riga("Scala tipografica", `<div style="display: flex; flex-direction: column; gap: 10px">
    <div style="${T.h1} color: var(--text-dark)">Mete disponibili</div>
    <div style="${T.h2} color: var(--text-dark)">Le tue preferite, in ordine di priorità</div>
    <div style="${T.h3} color: var(--text-dark)">Univerza v Ljubljani (University of Ljubljana)</div>
    <div style="font-size: ${T.body}px; line-height: 1.6; color: var(--text-muted); max-width: 560px">Le mete sono ordinate per compatibilità con il tuo profilo: Giurisprudenza, Inglese B2.</div>
    <div style="font-size: ${T.small}px; color: var(--text-hint)">Lubiana (Slovenia)</div>
    <div style="font-family: var(--font-mono); font-weight: 700; font-size: ${T.score}px; color: var(--green)">88%</div>
  </div>`)}
  ${T.bottoniC ? riga("Bottone primario · C Inchiostro · default / hover / focus / disabled", ["", "hover", "focus", "disabled"].map(st => bottoneC("primario", "Salva versione", st, I.save)).join("")) + riga("Azione secondaria · link", LINK_AZIONE("Stampa", I.printer) + LINK_AZIONE("Vai alla riga", null, I.arrow)) : riga("Bottone primario · default / hover / focus / disabled", btn.primario("Vedi le mete") + btn.primario("Vedi le mete", "hover") + btn.primario("Vedi le mete", "focus") + btn.primario("Vedi le mete", "disabled")) + riga("Bottone secondario", btn.secondario("Confronta") + btn.secondario("Confronta", "hover") + btn.secondario("Confronta", "focus") + btn.secondario("Confronta", "disabled"))}
  ${riga("Chip filtro · attivo / inattivo", chip(T, "Tutte", true) + chip(T, "Compatibili", false) + chip(T, "Con riserve", false) + chip(T, "Per la mia lingua", false))}
  ${riga("Semaforo · colore + icona + testo", semaforo(T, "ok", "Compatibile") + semaforo(T, "medio", "Verifica la lingua") + semaforo(T, "basso", "Non accessibile ora"))}
  ${riga("Countdown · superficie inchiostro", countdown)}
  ${riga("Campo · default / focus", input(false) + input(true))}
  ${riga("Card meta", `<div style="width: 358px">${cardMeta(T, METE[1])}</div><div style="width: 358px">${cardMeta(T, METE[4])}</div>`)}
  ${riga("Stato vuoto · zero risultati", vuoto)}
</div>`;
  return documento(T, corpo);
}

// ── Artboard 2: Mete a 390 ─────────────────────────────────────────────
function mete(T) {
  const preferite = METE.filter(m => m.pref);
  // Preferita ordinata (commento di Nicola, 14/09: "tutto troppo schiacciato").
  // Gerarchia: posizione in graduatoria → nome intero → compatibilità; le azioni
  // di ordinamento stanno insieme, la rimozione a parte e più discreta.
  const slotOrdinato = (m, i, tot) => `<div style="display: grid; grid-template-columns: 36px minmax(0, 1fr) auto; column-gap: 12px; row-gap: 10px; align-items: start; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: 0 1px 2px rgba(30,27,46,.04); padding: 14px 8px 10px 14px">
    <span style="grid-row: span 2; display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; font-family: var(--font-mono); font-weight: 700; font-size: 16px; background: var(--night-bg); color: #fff">${i + 1}</span>
    <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0; padding-top: 1px">
      <span style="font-size: 15px; font-weight: 700; line-height: 1.3; color: var(--text-dark); text-wrap: pretty">${m.nome}</span>
      <span style="font-size: 13px; color: var(--text-hint)">${m.luogo}</span>
    </div>
    <span style="display: grid; place-items: center; width: 44px; height: 44px; margin: -10px 0 0; color: var(--text-hint)" aria-label="Rimuovi dalle tue preferite">${ico(I.x, 18)}</span>
    <div style="grid-column: 2 / span 2; display: flex; align-items: center; justify-content: space-between; gap: 8px">
      <span style="display: flex; align-items: center; gap: 8px"><span style="font-family: var(--font-mono); font-weight: 700; font-size: 18px; color: ${COLORI[m.cat].punti}">${m.punti}</span>${semaforo(T, m.cat, m.stato)}</span>
      <span style="display: flex">
        <span style="display: grid; place-items: center; width: 44px; height: 40px; color: ${i === 0 ? "var(--border-strong)" : "var(--text-muted)"}" aria-label="Sposta su">${ico(I.up, 18)}</span>
        <span style="display: grid; place-items: center; width: 44px; height: 40px; color: ${i === tot - 1 ? "var(--border-strong)" : "var(--text-muted)"}; transform: rotate(180deg)" aria-label="Sposta giù">${ico(I.up, 18)}</span>
      </span>
    </div>
  </div>`;
  const slot = (m, i) => `<div style="display: flex; align-items: center; gap: 10px; background: var(--bg-card); border: ${T.cardOrdinata ? "0" : `1px solid ${T.ambraPreferite ? "var(--gold-border)" : "var(--border)"}`}; ${T.cardOrdinata ? "box-shadow: 0 1px 2px rgba(30,27,46,.04);" : ""} border-radius: ${T.righeCompatte ? "var(--radius-sm)" : "var(--radius-md)"}; padding: 6px 4px 6px 10px">
    <span style="display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; flex: none; font-family: var(--font-mono); font-weight: 700; font-size: 13px; background: ${T.ambraPreferite ? "var(--gold)" : "var(--night-bg)"}; color: ${T.ambraPreferite ? "var(--night-bg)" : "#fff"}">${i + 1}</span>
    <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px">
      <span style="font-size: var(--fs-sm); font-weight: 700; color: var(--text-dark); overflow: hidden; text-overflow: ellipsis; white-space: nowrap">${m.nome}</span>
      <span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-muted)">${m.punti} · ${m.stato}</span>
    </span>
    <span style="display: grid; place-items: center; width: 44px; height: 44px; color: ${i === 0 ? "var(--border-strong)" : "var(--text-muted)"}" aria-label="Sposta su">${ico(I.up, 18)}</span>
    <span style="display: grid; place-items: center; width: 44px; height: 44px; color: var(--red)" aria-label="Rimuovi dalle tue preferite">${ico(I.x, 18)}</span>
  </div>`;
  const nav = (T.bottoniC ? VOCI_NAV("mete") : [["Oggi", I.sun, false], ["Mete", I.map, true], ["Percorso", I.route, false], ["Learning Agreement", I.doc, false]])
    .map(([l, i, a]) => `<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; min-height: 52px; padding: 8px 4px; border-radius: var(--radius-md); color: ${a ? "var(--gold)" : "var(--night-muted)"}; background: ${a ? "rgba(251,191,36,0.12)" : "transparent"}">${ico(i, 19)}<span style="font-size: 11px; font-weight: ${a ? 800 : 700}; line-height: 1.15; text-align: center; text-wrap: balance">${l}</span></div>`).join("");

  const corpo = `<div style="width: 390px; min-height: 1600px; box-sizing: border-box; display: flex; flex-direction: column; background: var(--bg-app)">
  <header style="display: flex; align-items: center; justify-content: space-between; padding: 10px 8px 0 16px">
    <img src="logo-mark.svg" alt="ErasmusWiz" style="width: 30px; height: 30px">
    <span style="display: grid; place-items: center; width: 44px; height: 44px; color: var(--text-dark)" aria-label="Menu">${ico(I.menu, 22)}</span>
  </header>
  <main style="flex: 1; padding: ${T.cardOrdinata ? "12px 16px 32px" : "8px 16px 24px"}; display: flex; flex-direction: column; gap: ${T.cardOrdinata ? 32 : T.secGap}px">
    <div style="display: flex; flex-direction: column; gap: ${T.cardOrdinata ? 10 : 6}px">
      <h1 style="margin: 0; ${T.h1} color: var(--text-dark)">Mete disponibili</h1>
      ${T.profiloInRiga ? `<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-right: -10px">
        <p style="margin: 0; min-width: 0; font-size: var(--fs-sm); line-height: 1.45; color: var(--text-muted)">Sapienza · Giurisprudenza<br><strong style="color: var(--text-dark); font-weight: 600">Laurea triennale · Inglese B2</strong></p>
        <a href="#" aria-label="Modifica il profilo" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 10px; border-radius: var(--radius-sm); font-size: var(--fs-sm); font-weight: 700; color: var(--primary); text-decoration: none; flex: none">${ico(I.pencil, 16, "var(--primary)")}Modifica</a>
      </div>` : `<p style="margin: 0; font-size: ${T.body}px; line-height: 1.55; color: var(--text-muted)">Sapienza · Giurisprudenza · ordinate per compatibilità</p>`}
    </div>
    ${T.profiloInRiga ? "" : T.wizMete ? `<div style="display: flex; align-items: center; gap: 14px; background: var(--gold-bg); border: 1px solid var(--gold-border); border-radius: var(--radius-lg); padding: 14px 16px">
      ${wiz(46)}
      <p style="margin: 0; font-size: var(--fs-sm); line-height: 1.5; color: var(--text-dark)">In cima trovi le mete in cui il tuo <strong>Inglese B2</strong> basta. Tocca la stella per metterle nelle tue scelte.</p>
    </div>` : `<div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--bg-card); border: 1px solid var(--border); border-radius: ${T.righeCompatte ? "var(--radius-sm)" : "var(--radius-md)"}; padding: 8px 8px 8px 14px">
      <span style="font-size: var(--fs-sm); color: var(--text-muted)">Profilo: <strong style="color: var(--text-dark)">Laurea · Inglese B2</strong></span>
      <span style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 10px; font-size: var(--fs-sm); font-weight: 700; color: var(--primary)">Modifica</span>
    </div>`}
    <div style="display: flex; flex-direction: column; gap: ${T.cardOrdinata ? 14 : 10}px">
      <div style="display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; background: var(--bg-card); border: 1.5px solid var(--border-strong); border-radius: ${T.righeCompatte ? "var(--radius-sm)" : "var(--radius-md)"}">
        ${ico(I.search, 18, "var(--text-hint)")}<span style="flex: 1; font-size: var(--fs-body); color: var(--text-hint)">Università, città o paese…</span><span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-hint)">55 mete</span>
      </div>
      <div style="display: flex; gap: 8px; overflow: hidden; margin-right: -16px">${chip(T, "Tutte", true)}${chip(T, "Compatibili", false)}${chip(T, "Con riserve", false)}${chip(T, "Non accessibili", false)}</div>
    </div>
    <section style="display: flex; flex-direction: column; gap: ${T.righeCompatte ? 6 : T.cardOrdinata ? 12 : 10}px; ${T.ambraPreferite ? "background: var(--gold-bg); border: 1px solid var(--gold-border); border-radius: var(--radius-lg); padding: 14px;" : ""}">
      <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 8px">
        <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">Le tue preferite</h2>
        <span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: ${T.ambraPreferite ? "var(--gold-dark)" : "var(--text-muted)"}">2 di 5</span>
      </div>
      ${T.preferiteOrdinate ? `<p style="margin: -4px 0 2px; font-size: 13px; color: var(--text-muted)">L'ordine conta: è quello con cui le indicherai nella candidatura.</p>` + preferite.map((m, i) => slotOrdinato(m, i, preferite.length)).join("\n") : preferite.map(slot).join("\n")}
    </section>
    <section style="display: flex; flex-direction: column; gap: ${T.cardOrdinata ? 16 : T.gap}px">
      <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">Tutte le mete</h2>
      ${METE.map(m => cardMeta(T, m)).join("\n")}
    </section>
  </main>
  <nav style="position: sticky; bottom: 0; display: flex; gap: 4px; padding: 8px; background: var(--night-bg); border-top: 1px solid var(--night-border); box-shadow: 0 -8px 24px rgba(16, 27, 63, 0.14)">${nav}</nav>
</div>`;
  return documento(T, corpo);
}

// ── Artboard 3: LA Workspace a 1280 ────────────────────────────────────
function la(T) {
  const fasi = ["Il mio piano", "Confronta le mete", "Prepara la proposta", "Approva e modifica", "Convalida"];
  const stage = fasi.map((f, i) => {
    const a = i === 2, fatto = i < 2;
    return `<li style="display: flex; align-items: center; gap: 8px; min-width: 0; padding: ${T.righeCompatte ? "8px 10px" : "12px 12px"}; border: 1px solid ${a ? "var(--primary)" : "var(--border)"}; border-radius: var(--radius-md); background: var(--bg-card); color: ${a ? "var(--primary)" : fatto ? "var(--text-dark)" : "var(--text-muted)"}; font-size: 13px; font-weight: 700; ${a ? "box-shadow: var(--shadow-focus);" : ""}">
      <span style="display: grid; place-items: center; width: 24px; height: 24px; flex: none; border-radius: 50%; background: ${fatto ? "var(--green-bg)" : a ? "var(--primary-fill)" : "var(--bg-card-hover)"}; color: ${fatto ? "var(--green)" : a ? "#fff" : "var(--text-muted)"}; font-family: var(--font-mono); font-size: 12px">${fatto ? ico(I.check, 14, "var(--green)") : i + 1}</span>
      <span>${f}</span></li>`;
  }).join("");

  const righe = [
    ["Derecho Civil I", "6", "Diritto privato", "9", "ok"],
    ["Derecho de la Unión Europea", "6", "Diritto dell'Unione europea", "6", "ok"],
    ["Derecho Internacional Público", "6", "Diritto internazionale", "6", "ok"],
    ["Historia del Derecho", "4,5", "Storia del diritto medievale e moderno", "9", "medio"],
  ];
  const pad = T.righeCompatte ? "8px 12px" : T.cardPad >= 24 ? "16px 18px" : "12px 16px";
  const tabella = `<div style="border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden">
    <div style="display: grid; grid-template-columns: minmax(0, 1.3fr) 70px minmax(0, 1.3fr) 70px 150px; gap: 12px; padding: ${pad}; background: var(--bg-app); border-bottom: 1px solid var(--border)">
      ${["Esame all'estero", "ECTS", "Esame Sapienza", "CFU", T.laInfo ? "Stato della scelta" : "Stato"].map((h, k) => {
        const spiega = T.laInfo && k === 1 ? "Crediti europei degli esami che sosterrai nell'università ospitante." : T.laInfo && k === 3 ? "Crediti che Sapienza ti riconoscerà al rientro, se gli esami vengono superati." : "";
        return `<span style="display: flex; align-items: center; justify-content: ${T.laInfo && !(k === 0 || k === 2) ? "center" : "flex-start"}; margin: ${spiega ? "-6px 0" : "0"}; font-size: 11.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--text-hint)">${h}${spiega ? info(spiega, { larghezza: 220 }) : ""}</span>`;
      }).join("")}
    </div>
    ${righe.map(([e, ects, s, cfu, cat], i) => `<div style="display: grid; grid-template-columns: minmax(0, 1.3fr) 70px minmax(0, 1.3fr) 70px 150px; gap: 12px; align-items: center; padding: ${pad}; ${i < righe.length - 1 ? "border-bottom: 1px solid var(--border);" : ""} background: var(--bg-card)">
      <span style="font-size: ${T.small + 1}px; font-weight: 600; color: var(--text-dark)">${e}</span>
      <span style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: var(--text-dark); ${T.laInfo ? "text-align: center" : ""}">${ects}</span>
      <span style="font-size: ${T.small + 1}px; color: var(--text-muted)">${s}</span>
      <span style="font-family: var(--font-mono); font-size: 14px; font-weight: 700; color: ${cat === "medio" ? "var(--amber)" : "var(--text-dark)"}; ${T.laInfo ? "text-align: center" : ""}">${cfu}</span>
      ${T.laInfo ? `<span style="display: flex; justify-content: center">${semaforo(T, cat, cat === "ok" ? "Coerente" : "Crediti diversi")}</span>` : semaforo(T, cat, cat === "ok" ? "Coerente" : "Crediti diversi")}
    </div>`).join("")}
    ${T.laInfo ? `<div style="display: grid; grid-template-columns: minmax(0, 1.3fr) 70px minmax(0, 1.3fr) 70px 150px; gap: 12px; align-items: center; padding: ${pad}; border-top: 1px solid var(--border-strong); background: var(--bg-app)">
      <span style="font-size: 13px; font-weight: 700; color: var(--text-muted)">Totale all'estero</span>
      <span style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--text-dark); text-align: center">22,5</span>
      <span style="font-size: 13px; font-weight: 700; color: var(--text-muted)">Totale riconosciuto</span>
      <span style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--text-dark); text-align: center">30</span>
      <span></span>
    </div>` : ""}
  </div>`;

  const guida = `<section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: ${T.radius}; padding: ${T.cardPad}px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: ${T.gap}px">
    <h2 style="margin: 0; ${T.h2} color: var(--text-dark); display: flex; align-items: center; gap: 2px">Procedura Sapienza${T.laInfo ? info("Le regole del tuo ateneo per preparare il Learning Agreement: cosa serve, in che ordine e chi approva. Le mostriamo solo se verificate per il ciclo in corso.", { larghezza: 250 }) : ""}</h2>
    ${T.wizLA ? `<div style="display: flex; gap: 12px; align-items: flex-start">${wiz(44)}<p style="margin: 0; font-size: var(--fs-sm); line-height: 1.55; color: var(--text-muted)">ErasmusWiz prepara e conserva il lavoro. Invio, firma e approvazione restano nei sistemi ufficiali dell'ateneo.</p></div>`
      : `<p style="margin: 0; font-size: var(--fs-sm); line-height: 1.55; color: var(--text-muted)">ErasmusWiz prepara e conserva il lavoro. Invio, firma e approvazione restano nei sistemi ufficiali dell'ateneo.</p>`}
    <div style="display: flex; gap: 10px; align-items: flex-start; background: var(--amber-bg); border: 1px solid var(--amber-border); border-radius: var(--radius-md); padding: 12px 14px; color: var(--amber)">
      ${ico(I.alert, 18, "var(--amber)")}<p style="margin: 0; font-size: var(--fs-sm); line-height: 1.5; font-weight: 600">Procedura da verificare per il ciclo 2027/28. Non riutilizziamo regole di un ciclo precedente.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px">
      ${etichetta("Prima di inviare")}
      ${[["Tutti gli esami hanno un abbinamento", true], ["Crediti coerenti su ogni riga", false], ["Proposta salvata come versione", false]].map(([t, ok]) => `<div style="display: flex; align-items: center; gap: 10px; min-height: 36px; font-size: var(--fs-sm); color: var(--text-dark)"><span style="display: grid; place-items: center; width: 22px; height: 22px; flex: none; border-radius: 6px; border: 1.5px solid ${ok ? "var(--green)" : "var(--border-strong)"}; background: ${ok ? "var(--green-bg)" : "var(--bg-card)"}">${ok ? ico(I.check, 14, "var(--green)") : ""}</span>${t}</div>`).join("")}
    </div>
  </section>`;

  const corpo = `<div style="width: 1280px; min-height: 940px; box-sizing: border-box; background: var(--bg-app); display: flex; flex-direction: column">
  <nav style="display: flex; align-items: center; gap: 8px; height: 64px; padding: 0 70px; background: var(--night-bg); color: var(--night-text)">
    <img src="logo-mark.svg" alt="" style="width: 30px; height: 30px"><span style="font-family: var(--font-display); font-weight: 800; font-size: 18px; margin-right: 24px">ErasmusWiz</span>
    ${(T.bottoniC ? VOCI_NAV("learning-agreement").map(([l, , a]) => [l, a]) : [["Oggi", false], ["Mete", false], ["Percorso", false], ["Learning Agreement", true]]).map(([l, a]) => `<span style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 14px; border-radius: var(--radius-md); font-size: 14px; font-weight: ${a ? 800 : 700}; color: ${a ? "var(--gold)" : "var(--night-muted)"}; background: ${a ? "rgba(251,191,36,0.12)" : "transparent"}">${l}</span>`).join("")}
  </nav>
  <main style="width: 1140px; margin: 0 auto; padding: 24px 0 48px; display: flex; flex-direction: column; gap: ${T.gap + 4}px">
    <header style="display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; border-radius: var(--radius-lg); background: var(--night-bg); color: #fff; padding: ${T.righeCompatte ? "20px 24px" : T.cardPad >= 24 ? "40px 36px 28px" : "32px 28px 22px"}">
      <div style="display: flex; flex-direction: column; gap: 6px">
        ${T.laInfo ? "" : `<span style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #E8D992">Dossier personale · solo su questo dispositivo</span>`}
        <h1 style="margin: 0; display: flex; align-items: center; gap: 6px; font-family: ${T.righeCompatte || T.laInfo ? "var(--font-body)" : "var(--font-display)"}; font-weight: 800; font-size: ${T.righeCompatte ? 28 : T.cardPad >= 24 ? 44 : 36}px; letter-spacing: -.03em; line-height: 1.05">${T.laInfo ? "<span>Costruisci il tuo Learning Agreement</span>" : "Learning Agreement"}${T.laInfo ? info("Qui prepari il piano degli esami da sostenere all'estero e come verranno riconosciuti. Il dossier resta solo su questo dispositivo: nessun account, nessun invio. Per non perderlo, scarica un backup.", { chiaro: true, aperta: true, larghezza: 320 }) : ""}</h1>
        <a href="#" style="color: #fff; font-size: 14px; margin-top: 4px">← Torna al percorso</a>
      </div>
      ${T.wizLA ? wiz(70) : ""}
    </header>
    <ol style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; margin: 0; padding: 0; list-style: none">${stage}</ol>
    <div style="display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: ${T.gap + 4}px; align-items: start">
      <section style="background: var(--bg-card); border: 1px solid var(--border); border-radius: ${T.radius}; padding: ${T.cardPad}px; box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: ${T.gap}px">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 4px">
            <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">Universidad de Zaragoza · versione 2</h2>
            <span style="font-size: var(--fs-sm); color: var(--text-hint)">Saragozza (Spagna) · E ZARAGOZ01 · esami d'esempio</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; flex: none">${T.bottoniC ? LINK_AZIONE("Stampa", I.printer) + bottoneC("primario", "Salva versione", "", I.save) : btn.secondario("Stampa") + btn.primario("Salva versione")}</div>
        </div>
        ${T.laInfo ? "" : `<div style="display: flex; gap: 24px; flex-wrap: wrap">
          ${[["ECTS all'estero", "22,5", "Crediti degli esami che sosterrai nell'università ospitante."], ["CFU riconosciuti", "30", "Crediti che Sapienza ti riconoscerà al rientro, se gli esami vengono superati."], ...(T.laInfo ? [] : [["Righe da controllare", "1", ""]])].map(([l, v, spiega], i) => `<div style="display: flex; flex-direction: column; gap: 2px">${T.laInfo ? `<div style="display: flex; align-items: center; gap: 0; margin: -6px 0">${etichetta(l)}${info(spiega, { larghezza: 230 })}</div>` : etichetta(l)}<span style="font-family: var(--font-mono); font-weight: 700; font-size: ${T.score + 3}px; color: ${i === 2 ? "var(--amber)" : "var(--text-dark)"}">${v}</span></div>`).join("")}
        </div>`}
        ${T.laInfo ? `<div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border)">
          <div style="display: flex; align-items: center; gap: 12px; min-width: 0">
            <span style="display: grid; place-items: center; width: 32px; height: 32px; flex: none; border-radius: 50%; background: var(--amber-bg); color: var(--amber)">${ico(I.alert, 17, "var(--amber)")}</span>
            <div style="display: flex; flex-direction: column; gap: 2px; min-width: 0">
              <span style="display: flex; align-items: center; gap: 2px; margin: -6px 0; font-size: 14.5px; font-weight: 700; color: var(--text-dark)">1 abbinamento da controllare${info("Un abbinamento va controllato quando crediti o contenuti non tornano. Non è un errore bloccante, ma conviene sistemarlo prima di salvare la versione da presentare.", { larghezza: 250 })}</span>
              <span style="font-size: 13px; color: var(--text-muted)">Historia del Derecho vale 4,5 ECTS, ma copre un esame Sapienza da 9 CFU.</span>
            </div>
          </div>
          <a href="#" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 8px; font-size: 14px; font-weight: 700; color: var(--primary); text-decoration: none; flex: none">Vai alla riga${ico(I.arrow, 16, "var(--primary)")}</a>
        </div>` : ""}
        ${tabella}
      </section>
      ${guida}
    </div>
  </main>
</div>`;
  return documento(T, corpo);
}

// ── Artboard: bottoni — alternative ────────────────────────────────────
const STILI_BOTTONE = [
  {
    nome: "A · Piatto squadrato",
    perche: "Il più sobrio: nessuna ombra, raggio piccolo come i campi. Si legge come uno strumento, sta bene in tabelle e barre.",
    base: "border-radius: var(--radius-sm); min-height: 44px; padding: 0 16px; font-weight: 700;",
    primario: { "": "background: var(--primary-fill); color: #fff;", hover: "background: var(--primary-fill-hover); color: #fff;", focus: "background: var(--primary-fill); color: #fff; box-shadow: var(--shadow-focus);", disabled: "background: var(--bg-track); color: var(--text-hint);" },
    secondario: { "": "background: var(--bg-card); color: var(--text-dark); box-shadow: inset 0 0 0 1px var(--border-strong);", hover: "background: var(--bg-card-hover); color: var(--text-dark); box-shadow: inset 0 0 0 1px var(--primary);", focus: "background: var(--bg-card); color: var(--text-dark); box-shadow: inset 0 0 0 1px var(--primary), var(--shadow-focus);", disabled: "background: var(--bg-app); color: var(--text-hint); box-shadow: inset 0 0 0 1px var(--border);" },
    terziario: "color: var(--primary); padding: 0 8px;",
  },
  {
    nome: "B · Pillola con contorno",
    perche: "Stessa forma dei chip filtro: tutto ciò che si tocca è arrotondato. Il secondario è solo un contorno, così il primario resta unico.",
    base: "border-radius: var(--radius-pill); min-height: 44px; padding: 0 20px; font-weight: 700;",
    primario: { "": "background: var(--primary-fill); color: #fff;", hover: "background: var(--primary-fill-hover); color: #fff;", focus: "background: var(--primary-fill); color: #fff; box-shadow: var(--shadow-focus);", disabled: "background: var(--bg-track); color: var(--text-hint);" },
    secondario: { "": "background: transparent; color: var(--primary); box-shadow: inset 0 0 0 1.5px var(--primary);", hover: "background: var(--bg-card-hover); color: var(--primary-active); box-shadow: inset 0 0 0 1.5px var(--primary-active);", focus: "background: transparent; color: var(--primary); box-shadow: inset 0 0 0 1.5px var(--primary), var(--shadow-focus);", disabled: "background: transparent; color: var(--text-hint); box-shadow: inset 0 0 0 1.5px var(--border-strong);" },
    terziario: "color: var(--primary); padding: 0 10px; text-decoration: underline; text-underline-offset: 3px;",
  },
  {
    nome: "C · Inchiostro",
    perche: "Il primario prende l'inchiostro della barra di navigazione, con l'icona in ambra: più caldo e più identitario, l'indigo resta per link e selezioni.",
    base: "border-radius: var(--radius-md); min-height: 44px; padding: 0 18px; font-weight: 700;",
    primario: { "": "background: var(--night-bg); color: #fff;", hover: "background: var(--night-bg-2); color: #fff;", focus: "background: var(--night-bg); color: #fff; box-shadow: var(--shadow-focus);", disabled: "background: var(--bg-track); color: var(--text-hint);" },
    secondario: { "": "background: var(--bg-card); color: var(--night-bg); box-shadow: inset 0 0 0 1px var(--border-strong);", hover: "background: var(--bg-card-hover); color: var(--night-bg); box-shadow: inset 0 0 0 1px var(--night-bg);", focus: "background: var(--bg-card); color: var(--night-bg); box-shadow: inset 0 0 0 1px var(--night-bg), var(--shadow-focus);", disabled: "background: var(--bg-app); color: var(--text-hint); box-shadow: inset 0 0 0 1px var(--border);" },
    terziario: "color: var(--primary); padding: 0 8px;",
    iconaAmbra: true,
  },
  {
    nome: "D · Tonale",
    perche: "Il secondario è una campitura indigo chiarissima senza bordo: meno linee sulla pagina, gerarchia data dal peso del colore.",
    base: "border-radius: var(--radius-md); min-height: 44px; padding: 0 18px; font-weight: 700;",
    primario: { "": "background: var(--primary-fill); color: #fff;", hover: "background: var(--primary-fill-hover); color: #fff;", focus: "background: var(--primary-fill); color: #fff; box-shadow: var(--shadow-focus);", disabled: "background: var(--bg-track); color: var(--text-hint);" },
    secondario: { "": "background: var(--bg-track); color: var(--primary-active);", hover: "background: var(--border-strong); color: var(--primary-active);", focus: "background: var(--bg-track); color: var(--primary-active); box-shadow: var(--shadow-focus);", disabled: "background: var(--bg-app); color: var(--text-hint);" },
    terziario: "color: var(--text-muted); padding: 0 8px;",
  },
];

// Bottone scelto: C · Inchiostro.
function bottoneC(tipo, testo, stato = "", icona = null) {
  const S = STILI_BOTTONE[2];
  const coloreIcona = tipo === "primario" && stato !== "disabled" ? "var(--gold)" : "currentColor";
  const stile = tipo === "terziario" ? S.terziario : S[tipo][stato];
  return `<span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; ${S.base} font-family: var(--font-body); font-size: 14.5px; white-space: nowrap; ${stile}">${icona ? ico(icona, 17, coloreIcona) : ""}${testo}</span>`;
}

const LINK_AZIONE = (testo, iconaPrima, iconaDopo) => `<a href="#" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 8px; font-size: 14px; font-weight: 700; color: var(--primary); text-decoration: none; flex: none">${iconaPrima ? ico(iconaPrima, 16, "var(--primary)") : ""}${testo}${iconaDopo ? ico(iconaDopo, 16, "var(--primary)") : ""}</a>`;

function bottoni() {
  const T = VARIANTI.Scelta;
  const b = (S, tipo, testo, stato = "", icona = null) => {
    const coloreIcona = S.iconaAmbra && tipo === "primario" && stato !== "disabled" ? "var(--gold)" : "currentColor";
    const stile = tipo === "terziario" ? S.terziario : S[tipo][stato];
    return `<span style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; ${S.base} font-family: var(--font-body); font-size: 14.5px; white-space: nowrap; ${stile}">${icona ? ico(icona, 17, coloreIcona) : ""}${testo}</span>`;
  };
  const blocco = (S) => `<section style="display: flex; flex-direction: column; gap: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px">
    <div style="display: flex; flex-direction: column; gap: 4px">
      <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">${S.nome}</h2>
      <p style="margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--text-muted); max-width: 520px">${S.perche}</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px">
      ${etichetta("Primario · default / hover / focus / disabled")}
      <div style="display: flex; flex-wrap: wrap; gap: 10px">${["", "hover", "focus", "disabled"].map(s => b(S, "primario", "Salva versione", s, I.save)).join("")}</div>
      ${etichetta("Secondario")}
      <div style="display: flex; flex-wrap: wrap; gap: 10px">${["", "hover", "focus", "disabled"].map(s => b(S, "secondario", "Stampa", s, I.printer)).join("")}</div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px">
      ${etichetta("In contesto · card missione (390px)")}
      <div style="width: 358px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-app); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px">
        <div style="${T.h3} color: var(--text-dark)">Scegli le tue 5 mete</div>
        <div style="font-size: 14px; line-height: 1.5; color: var(--text-muted)">Ne hai salvate 2. L'ordine conta nella graduatoria.</div>
        <div style="display: flex; gap: 8px">${b(S, "primario", "Vedi le mete").replace("display: inline-flex;", "display: flex; flex: 1;")}${b(S, "terziario", "Più tardi")}</div>
      </div>
      ${etichetta("In contesto · barra del LA (1280px)")}
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; background: var(--bg-app); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 14px 20px">
        <span style="${T.h2} color: var(--text-dark)">Universidad de Zaragoza · versione 2</span>
        <div style="display: flex; gap: 8px">${b(S, "terziario", "Annulla modifiche")}${b(S, "secondario", "Stampa", "", I.printer)}${b(S, "primario", "Salva versione", "", I.save)}</div>
      </div>
    </div>
  </section>`;
  const corpo = `<div style="width: 1400px; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px; background: var(--bg-app)">
  <div style="display: flex; flex-direction: column; gap: 6px">
    ${etichetta("Redesign v4 · da scegliere")}
    <div style="font-family: var(--font-body); font-weight: 800; font-size: 30px; letter-spacing: -.02em; color: var(--text-dark)">Bottoni — alternative</div>
    <p style="margin: 0; font-size: 14.5px; color: var(--text-muted)">Tutte con la tipografia scelta, altezza minima 44px e anello di focus del sito. Si possono combinare: per esempio forma di A con secondario di D.</p>
  </div>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px">${STILI_BOTTONE.map(blocco).join("")}</div>
</div>`;
  return documento(T, corpo);
}


// ════════════════════════════════════════════════════════════════════════
// Blocco 1 (Fase 2): schermate mancanti nella direzione scelta.
// Contenuti dal sito reale: copy di index.html/app.js, dati Sapienza.
// ════════════════════════════════════════════════════════════════════════
function VOCI_NAV(attiva) {
  return [["Mete", I.map, attiva === "mete"], ["Home", I.home, attiva === "oggi"], ["Learning Agreement", I.doc, attiva === "learning-agreement"]];
}

function navMobile(attiva) {
  return `<nav style="position: sticky; bottom: 0; display: flex; gap: 4px; padding: 8px; background: var(--night-bg); border-top: 1px solid var(--night-border); box-shadow: 0 -8px 24px rgba(16, 27, 63, 0.14)">${VOCI_NAV(attiva).map(([l, i, a]) => `<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; min-height: 52px; padding: 8px 4px; border-radius: var(--radius-md); color: ${a ? "var(--gold)" : "var(--night-muted)"}; background: ${a ? "rgba(251,191,36,0.12)" : "transparent"}">${ico(i, 19)}<span style="font-size: 11px; font-weight: ${a ? 800 : 700}; line-height: 1.15; text-align: center; text-wrap: balance">${l}</span></div>`).join("")}</nav>`;
}

function testataMobile() {
  return `<header style="display: flex; align-items: center; justify-content: space-between; padding: 10px 8px 0 16px">
    <img src="logo-mark.svg" alt="ErasmusWiz" style="width: 30px; height: 30px">
    <span style="display: grid; place-items: center; width: 44px; height: 44px; color: var(--text-dark)" aria-label="Menu">${ico(I.menu, 22)}</span>
  </header>`;
}

function schermoMobile(T, attiva, contenuto, altezza) {
  return documento(T, `<div style="width: 390px; min-height: ${altezza}px; box-sizing: border-box; display: flex; flex-direction: column; background: var(--bg-app)">
  ${testataMobile()}
  <main style="flex: 1; padding: 12px 16px 32px; display: flex; flex-direction: column; gap: 28px">${contenuto}</main>
  ${attiva ? navMobile(attiva) : ""}
</div>`);
}

const SUPERFICIE = "background: var(--bg-card); border-radius: var(--radius-lg); box-shadow: 0 1px 2px rgba(30,27,46,.04);";

// Home ────────────────────────────────────────────────────────────────
function home(T) {
  const tappe = [
    ["Requisiti", "Profilo compilato: requisiti verificati.", "fatto"],
    ["Mete e le 5 scelte", "2 mete salvate tra le preferite.", "corso"],
    ["Candidatura e scadenze", "Si apre con il bando 2027/28.", "dopo"],
    ["Esito", "Quando conosci l'esito, dichiaralo qui.", "dopo"],
    ["Learning Agreement", "Dopo accettazione, nomination e application.", "dopo"],
    ["Parti: lo zaino", "Prima, durante e dopo la partenza.", "dopo"],
  ];
  const puntoTappa = (stato, n) => stato === "fatto"
    ? `<span style="display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--green-bg); color: var(--green); flex: none">${ico(I.check, 15, "var(--green)")}</span>`
    : `<span style="display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; flex: none; font-family: var(--font-mono); font-size: 12px; font-weight: 700; ${stato === "corso" ? "background: var(--night-bg); color: #fff;" : "background: var(--bg-track); color: var(--text-muted);"}">${n}</span>`;
  const contenuto = `
    <div style="display: flex; flex-direction: column; gap: 4px">
      <span style="font-size: 13px; font-weight: 600; color: var(--text-hint)">Lunedì 14 settembre · Sapienza · Giurisprudenza</span>
      <h1 style="margin: 0; ${T.h1} color: var(--text-dark)">Il tuo percorso Erasmus</h1>
    </div>

    <section style="${SUPERFICIE} padding: 20px; display: flex; flex-direction: column; gap: 14px">
      <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--gold-dark)">${ico('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>', 14, "var(--gold-dark)")}La tua prossima mossa</span>
      <div style="display: flex; flex-direction: column; gap: 8px">
        <h2 style="margin: 0; font-family: var(--font-body); font-weight: 800; font-size: 20px; line-height: 1.25; letter-spacing: -.015em; color: var(--text-dark)">Il bando 2027/28 non è ancora uscito</h2>
        <p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: var(--text-muted); text-wrap: pretty">Il bando precedente è uscito il 16 dicembre 2025: quello nuovo è atteso in un periodo simile. Intanto puoi esplorare le mete e salvare le tue preferite.</p>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--night-bg); border-radius: var(--radius-md); padding: 12px 14px">
        <div style="display: flex; flex-direction: column; gap: 2px">
          <span style="font-size: 13.5px; font-weight: 700; color: #fff">Bando 2027/28 atteso</span>
          <span style="font-size: 12.5px; color: var(--night-muted)">stima dal bando precedente, non confermata</span>
        </div>
        <span style="font-family: var(--font-mono); font-weight: 700; font-size: 16px; color: var(--gold); white-space: nowrap">~93 giorni</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap">
        ${bottoneC("primario", "Esplora le mete", "", I.map)}
        ${LINK_AZIONE("Avvisami quando esce", '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"></path>')}
      </div>
    </section>

    <section style="display: flex; flex-direction: column; gap: 12px">
      <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 8px">
        <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">Il tuo progresso</h2>
        <span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-muted)">1 di 6 tappe</span>
      </div>
      <div style="${SUPERFICIE} padding: 6px 16px">
        ${tappe.map(([t, sub, stato], i) => `<div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; ${i < tappe.length - 1 ? "border-bottom: 1px solid var(--border);" : ""}">
          ${puntoTappa(stato, i + 1)}
          <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
            <span style="font-size: 14.5px; font-weight: 700; color: ${stato === "dopo" ? "var(--text-muted)" : "var(--text-dark)"}">${t}</span>
            <span style="font-size: 13px; color: var(--text-hint)">${sub}</span>
          </div>
          ${stato === "corso" ? `<span style="color: var(--primary)">${ico(I.arrow, 18, "var(--primary)")}</span>` : ""}
        </div>`).join("")}
      </div>
      <div style="display: flex; gap: 4px; margin-left: -8px">${LINK_AZIONE("Apri il Percorso", I.route)}${LINK_AZIONE("Learning Agreement", I.doc)}</div>
    </section>`;
  return schermoMobile(T, "oggi", contenuto, 1130);
}

// Onboarding (benvenuto sulla mappa) ─────────────────────────────────
function onboarding(T) {
  const passi = ["Il tuo momento", "Ateneo", "Cosa studi", "Le tue lingue"];
  const pin = (x, y, cat) => `<span style="position: absolute; left: ${x}%; top: ${y}%; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(30,27,46,.25); background: ${cat === "ok" ? "var(--green)" : cat === "medio" ? "var(--amber)" : "var(--red)"}"></span>`;
  const scelta = (nome, sub, attiva) => `<div style="display: flex; align-items: center; gap: 12px; min-height: 60px; padding: 10px 14px; ${SUPERFICIE} ${attiva ? "box-shadow: inset 0 0 0 1.5px var(--primary);" : ""}">
    <span style="width: 20px; height: 20px; border-radius: 50%; flex: none; box-sizing: border-box; ${attiva ? "border: 6px solid var(--primary);" : "border: 1.5px solid var(--border-strong);"}"></span>
    <span style="display: flex; flex-direction: column; gap: 2px"><span style="font-size: 15px; font-weight: 700; color: var(--text-dark)">${nome}</span><span style="font-size: 13px; color: var(--text-hint)">${sub}</span></span>
  </div>`;
  const contenuto = `
    <div style="display: flex; flex-direction: column; gap: 10px">
      <h1 style="margin: 0; font-family: var(--font-body); font-weight: 800; font-size: 28px; line-height: 1.15; letter-spacing: -.025em; color: var(--text-dark); text-wrap: balance">Scopri dove può portarti il tuo Erasmus.</h1>
      <p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: var(--text-muted)">Capisci il bando, scegli mete davvero accessibili e non perdere i passaggi importanti. Gratis, senza account.</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px">
      <div style="display: flex; align-items: center; justify-content: space-between">
        <span style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-hint)">Passo 2 di 4 · ${passi[1]}</span>
        <span style="display: flex; gap: 6px">${passi.map((_, i) => `<span style="width: ${i === 1 ? 22 : 8}px; height: 8px; border-radius: 99px; background: ${i <= 1 ? "var(--night-bg)" : "var(--bg-track)"}"></span>`).join("")}</span>
      </div>
      <div style="display: flex; align-items: flex-end; gap: 12px">
        ${wiz(58)}
        <div style="position: relative; margin-bottom: 18px; padding: 12px 14px; ${SUPERFICIE} border-radius: 16px 16px 16px 4px; font-size: 15px; font-weight: 600; color: var(--text-dark)">Ciao! Sono Wiz. Dove studi?</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px">
        ${scelta("Sapienza Università di Roma", "Bando unico Erasmus+ per studio", true)}
        ${scelta("Università Ca' Foscari Venezia", "Bando Erasmus+ studio", false)}
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
        ${LINK_AZIONE("Indietro", '<path d="M19 12H5"></path><path d="M11 18l-6-6 6-6"></path>')}
        ${bottoneC("primario", "Continua", "", I.arrow)}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px">
      <div style="position: relative; height: 220px; border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-card-hover)">
        <svg viewBox="0 0 360 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="position: absolute; inset: 0"><path d="M40 170 C70 120 60 80 110 70 C150 60 150 30 200 40 C250 50 260 20 300 45 C330 65 320 110 290 130 C260 150 280 190 230 195 C180 200 170 175 130 185 C90 195 60 200 40 170 Z" fill="var(--bg-track)"></path></svg>
        ${pin(30, 60, "ok")}${pin(46, 38, "ok")}${pin(58, 55, "medio")}${pin(70, 30, "ok")}${pin(52, 72, "basso")}${pin(40, 48, "medio")}
        <span style="position: absolute; left: 12px; bottom: 10px; font-size: 11.5px; font-weight: 600; color: var(--text-hint)">Mappa reale del sito · segnaposto</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 14px">${semaforo(T, "ok", "Compatibile")}${semaforo(T, "medio", "Da verificare")}${semaforo(T, "basso", "Non accessibile ora")}</div>
    </div>

    <p style="margin: 0; font-size: 13px; line-height: 1.5; color: var(--text-hint)">I dati restano su questo dispositivo. Se cancelli i dati del browser o cambi dispositivo, il percorso non viene recuperato.</p>`;
  return schermoMobile(T, null, contenuto, 980);
}

// Percorso ───────────────────────────────────────────────────────────
function percorso(T) {
  const stazioni = [
    ["Requisiti", "Verifica i requisiti del bando: sono uguali per tutte le mete.", "ok", "Fatto"],
    ["Mete e le 5 scelte", "Esplora e salva le tue preferite: ne hai 2.", null, ""],
    ["Candidatura e scadenze", "I passi da fare, capitolo per capitolo, con le date del bando.", null, "Aperta qui sotto"],
    ["L'esito", "Quando conosci l'esito della selezione, dichiaralo qui.", null, ""],
    ["Learning Agreement", "Prepara la bozza: esami di casa, corsi host e corrispondenze.", null, ""],
    ["Parti: lo zaino", "Prima, durante e dopo la partenza.", null, ""],
  ];
  const passi = [
    ["Verificare di avere i requisiti del bando (iscrizione attiva, eventuali CFU/media).", true],
    ["Esplorare le destinazioni della tua Facoltà nel database Go Erasmus+.", true],
    ["Verificare il livello di lingua richiesto da ogni destinazione che ti interessa.", false],
    ["Compilare la domanda online entro la scadenza, indicando le destinazioni in ordine di preferenza.", false],
  ];
  const aperta = 2;
  const contenuto = `
    <div style="display: flex; flex-direction: column; gap: 6px">
      <h1 style="margin: 0; ${T.h1} color: var(--text-dark); display: flex; align-items: center; gap: 2px">Il tuo percorso${info("Le tappe burocratiche del tuo Erasmus, in ordine. Quello che spunti resta salvato su questo dispositivo.", { larghezza: 240 })}</h1>
      <p style="margin: 0; font-size: 14.5px; color: var(--text-muted)">6 tappe · sei alla 2</p>
    </div>
    <ol style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column">
      ${stazioni.map(([t, sub, cat, stato], i) => {
        const ultima = i === stazioni.length - 1;
        const punto = cat === "ok"
          ? `<span style="display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--green-bg); flex: none">${ico(I.check, 16, "var(--green)")}</span>`
          : `<span style="display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; flex: none; font-family: var(--font-mono); font-size: 13px; font-weight: 700; ${i === 1 || i === aperta ? "background: var(--night-bg); color: #fff;" : "background: var(--bg-track); color: var(--text-muted);"}">${i + 1}</span>`;
        return `<li style="display: grid; grid-template-columns: 30px minmax(0, 1fr); column-gap: 14px">
          <div style="display: flex; flex-direction: column; align-items: center">${punto}${ultima ? "" : `<span style="flex: 1; width: 2px; min-height: 18px; background: ${cat === "ok" ? "var(--green-border)" : "var(--border)"}"></span>`}</div>
          <div style="display: flex; flex-direction: column; gap: 10px; padding: 3px 0 ${ultima ? 0 : 22}px">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px">
              <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0">
                <span style="font-size: 15.5px; font-weight: 700; color: ${i > aperta ? "var(--text-muted)" : "var(--text-dark)"}">${t}</span>
                <span style="font-size: 13px; line-height: 1.45; color: var(--text-hint)">${sub}</span>
              </div>
              ${cat ? `<span style="padding-top: 2px">${semaforo(T, cat, stato)}</span>` : `<span style="color: var(--text-hint); padding-top: 2px; ${i === aperta ? "transform: rotate(180deg);" : ""}">${ico('<path d="M6 9l6 6 6-6"></path>', 18)}</span>`}
            </div>
            ${i === aperta ? `<div style="${SUPERFICIE} padding: 16px; display: flex; flex-direction: column; gap: 14px">
              <div style="display: flex; flex-direction: column; gap: 6px">
                <div style="display: flex; justify-content: space-between; font-size: 13px"><span style="font-weight: 700; color: var(--text-dark)">Preparazione</span><span style="font-family: var(--font-mono); font-weight: 700; color: var(--text-muted)">2/4</span></div>
                <span style="display: block; height: 6px; border-radius: 99px; background: var(--bg-track)"><span style="display: block; width: 50%; height: 100%; border-radius: 99px; background: var(--night-bg)"></span></span>
              </div>
              ${passi.map(([testo, fatto]) => `<label style="display: flex; align-items: flex-start; gap: 12px; min-height: 44px; font-size: 14px; line-height: 1.45; color: ${fatto ? "var(--text-muted)" : "var(--text-dark)"}">
                <span style="display: grid; place-items: center; width: 22px; height: 22px; margin-top: 1px; flex: none; border-radius: 6px; box-sizing: border-box; ${fatto ? "background: var(--night-bg);" : "border: 1.5px solid var(--border-strong); background: var(--bg-card);"}">${fatto ? ico(I.check, 14, "#fff") : ""}</span>
                <span style="${fatto ? "text-decoration: line-through; text-decoration-color: var(--border-strong);" : ""}">${testo}</span>
              </label>`).join("")}
              <div style="display: flex; align-items: center; gap: 10px; padding-top: 12px; border-top: 1px solid var(--border)">
                ${ico('<rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4M16 3v4M4 10h16"></path>', 18, "var(--text-hint)")}
                <span style="font-size: 13px; line-height: 1.45; color: var(--text-muted)">Date del ciclo 2026/27, solo come riferimento: chiusura candidature 27 febbraio e 27 maggio 2026.</span>
              </div>
            </div>` : ""}
          </div>
        </li>`;
      }).join("")}
    </ol>`;
  return schermoMobile(T, "percorso", contenuto, 1120);
}

// Profilo ────────────────────────────────────────────────────────────
function profilo(T) {
  const campo = (label, valore, extra = "") => `<div style="display: flex; flex-direction: column; gap: 6px">
    <label style="display: flex; align-items: center; font-size: 13.5px; font-weight: 700; color: var(--text-dark); margin: ${extra ? "-6px 0" : "0"}">${label}${extra}</label>
    <div style="display: flex; align-items: center; justify-content: space-between; min-height: 48px; padding: 0 14px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: inset 0 0 0 1px var(--border-strong)">
      <span style="font-size: 15px; color: ${valore.startsWith("—") ? "var(--text-hint)" : "var(--text-dark)"}">${valore}</span>${ico('<path d="M6 9l6 6 6-6"></path>', 18, "var(--text-hint)")}
    </div>
  </div>`;
  const lingua = (nome, livello, cert) => `<div style="display: grid; grid-template-columns: minmax(0, 1fr) 78px; gap: 8px">
    <div style="display: flex; align-items: center; justify-content: space-between; min-height: 48px; padding: 0 12px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: inset 0 0 0 1px var(--border-strong)"><span style="font-size: 15px; color: ${nome.startsWith("—") ? "var(--text-hint)" : "var(--text-dark)"}">${nome}</span>${ico('<path d="M6 9l6 6 6-6"></path>', 18, "var(--text-hint)")}</div>
    <div style="display: flex; align-items: center; justify-content: space-between; min-height: 48px; padding: 0 10px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: inset 0 0 0 1px var(--border-strong)"><span style="font-family: var(--font-mono); font-size: 15px; font-weight: 700; color: var(--text-dark)">${livello}</span>${ico('<path d="M6 9l6 6 6-6"></path>', 16, "var(--text-hint)")}</div>
    <label style="grid-column: 1 / -1; display: flex; align-items: center; gap: 10px; min-height: 36px; font-size: 14px; color: var(--text-dark)"><span style="display: grid; place-items: center; width: 22px; height: 22px; flex: none; border-radius: 6px; box-sizing: border-box; ${cert ? "background: var(--night-bg);" : "border: 1.5px solid var(--border-strong); background: var(--bg-card);"}">${cert ? ico(I.check, 14, "#fff") : ""}</span>Ho un certificato</label>
  </div>`;
  const gruppo = (titolo, corpo) => `<section style="display: flex; flex-direction: column; gap: 16px">
    <h2 style="margin: 0; ${T.h2} color: var(--text-dark)">${titolo}</h2>${corpo}</section>`;
  const contenuto = `
    <div style="display: flex; flex-direction: column; gap: 6px">
      <h1 style="margin: 0; ${T.h1} color: var(--text-dark)">Il tuo profilo</h1>
      <p style="margin: 0; font-size: 14.5px; line-height: 1.55; color: var(--text-muted)">Inserisci i tuoi dati una volta: le mete si ordinano per compatibilità. I dati restano solo sul tuo dispositivo.</p>
    </div>
    ${gruppo("I tuoi studi", campo("Università", "Sapienza Università di Roma") + campo("Cosa studi", "Giurisprudenza") + campo("Livello di studi", "Triennale (L)"))}
    ${gruppo(`<span style="display: flex; align-items: center; margin: -6px 0">Le tue lingue${info("Servono a calcolare la compatibilità: confrontiamo il tuo livello con quello richiesto da ogni meta. Un certificato conta di più di un livello dichiarato.", { larghezza: 240 })}</span>`, lingua("Inglese", "B2", true) + lingua("— nessuna —", "A1", false))}
    ${gruppo("Situazioni particolari", campo("Hai cittadinanza extra-UE?", "No") + campo("Il tuo Erasmus è (anche) per ricerca tesi?", "— non ho ancora risposto —") + `<div style="display: flex; flex-direction: column; gap: 6px"><label style="font-size: 13.5px; font-weight: 700; color: var(--text-dark)">Il tuo nome <span style="font-weight: 500; color: var(--text-hint); margin-left: 4px">facoltativo</span></label><div style="display: flex; align-items: center; min-height: 48px; padding: 0 14px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: inset 0 0 0 1px var(--border-strong)"><span style="font-size: 15px; color: var(--text-hint)">es. Marco</span></div></div>`)}
    <div style="display: flex; flex-direction: column; gap: 10px">
      ${bottoneC("primario", "Salva e calcola la compatibilità", "", I.check).replace("display: inline-flex;", "display: flex;")}
      <span style="font-size: 13px; color: var(--text-hint); text-align: center">Puoi cambiarli quando vuoi dal Menu.</span>
    </div>`;
  return schermoMobile(T, null, contenuto, 1180);
}

// Mete a 1280 ────────────────────────────────────────────────────────
function meteDesktop(T) {
  const corpo = `<div style="width: 1280px; min-height: 820px; box-sizing: border-box; background: var(--bg-app); display: flex; flex-direction: column">
  <nav style="display: flex; align-items: center; gap: 8px; height: 64px; padding: 0 70px; background: var(--night-bg); color: var(--night-text)">
    <img src="logo-mark.svg" alt="" style="width: 30px; height: 30px"><span style="font-family: var(--font-display); font-weight: 800; font-size: 18px; margin-right: 24px">ErasmusWiz</span>
    ${VOCI_NAV("mete").map(([l, , a]) => `<span style="display: inline-flex; align-items: center; min-height: 44px; padding: 0 14px; border-radius: var(--radius-md); font-size: 14px; font-weight: ${a ? 800 : 700}; color: ${a ? "var(--gold)" : "var(--night-muted)"}; background: ${a ? "rgba(251,191,36,0.12)" : "transparent"}">${l}</span>`).join("")}
    <span style="margin-left: auto; display: grid; place-items: center; width: 44px; height: 44px; color: var(--night-muted)">${ico(I.menu, 22)}</span>
  </nav>
  <main style="width: 1140px; margin: 0 auto; padding: 32px 0 56px; display: grid; grid-template-columns: 320px minmax(0, 1fr); gap: 32px; align-items: start">
    <aside style="display: flex; flex-direction: column; gap: 28px; position: sticky; top: 24px">
      <div style="display: flex; flex-direction: column; gap: 8px">
        <h1 style="margin: 0; font-family: var(--font-body); font-weight: 800; font-size: 28px; letter-spacing: -.02em; color: var(--text-dark)">Mete disponibili</h1>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-right: -8px">
          <p style="margin: 0; font-size: 13.5px; line-height: 1.45; color: var(--text-muted)">Sapienza · Giurisprudenza<br><strong style="color: var(--text-dark); font-weight: 600">Laurea triennale · Inglese B2</strong></p>
          ${LINK_AZIONE("Modifica", I.pencil)}
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 14px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: inset 0 0 0 1px var(--border-strong)">${ico(I.search, 18, "var(--text-hint)")}<span style="flex: 1; font-size: 15px; color: var(--text-hint)">Università, città o paese…</span></div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">${chip(T, "Tutte", true)}${chip(T, "Compatibili", false)}${chip(T, "Con riserve", false)}${chip(T, "Non accessibili", false)}${chip(T, "Per la mia lingua", false)}</div>
      </div>
      <section style="display: flex; flex-direction: column; gap: 10px">
        <div style="display: flex; align-items: baseline; justify-content: space-between"><h2 style="margin: 0; ${T.h2} color: var(--text-dark)">Le tue preferite</h2><span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-muted)">2 di 5</span></div>
        ${METE.filter(m => m.pref).map((m, i) => `<div style="display: flex; align-items: center; gap: 10px; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: 0 1px 2px rgba(30,27,46,.04); padding: 6px 4px 6px 10px">
          <span style="display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; flex: none; font-family: var(--font-mono); font-weight: 700; font-size: 13px; background: var(--night-bg); color: #fff">${i + 1}</span>
          <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px"><span style="font-size: var(--fs-sm); font-weight: 700; color: var(--text-dark); overflow: hidden; text-overflow: ellipsis; white-space: nowrap">${m.nome}</span><span style="font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--text-muted)">${m.punti} · ${m.stato}</span></span>
          <span style="display: grid; place-items: center; width: 40px; height: 40px; color: ${i === 0 ? "var(--border-strong)" : "var(--text-muted)"}">${ico(I.up, 18)}</span>
          <span style="display: grid; place-items: center; width: 40px; height: 40px; color: var(--red)">${ico(I.x, 18)}</span>
        </div>`).join("")}
      </section>
    </aside>
    <section style="display: flex; flex-direction: column; gap: 16px">
      <div style="display: flex; align-items: baseline; justify-content: space-between"><h2 style="margin: 0; ${T.h2} color: var(--text-dark)">55 mete · ordinate per compatibilità</h2><span style="font-size: 13px; color: var(--text-hint)">percentuali d'esempio</span></div>
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">${METE.map(m => cardMeta(T, m)).join("")}</div>
    </section>
  </main>
</div>`;
  return documento(T, corpo);
}

// ── Scrittura file + canvas.json ───────────────────────────────────────
// Solo la riga "Scelta" e i bottoni si rigenerano: le artboard dell'esplorazione
// vengono dalla canvas salvata (contengono ritocchi di Nicola) e non si toccano.
if (process.argv[2] === "--scelta") {
  const T = VARIANTI.Scelta;
  const esistente = JSON.parse(fs.readFileSync(path.join(OUT, "canvas.json"), "utf8"));
  const nuove = [
    ["SceltaTile.dc.html", styleTile(T), 820, 1780, "Style tile", 0, 0],
    ["SceltaMete.dc.html", mete(T), 390, 2000, "Mete · 390", 920, 0],
    ["SceltaLA.dc.html", la(T), 1280, 940, "Learning Agreement · 1280", 1410, 0],
    ["Bottoni.dc.html", bottoni(), 1400, 1560, "Bottoni — alternative", 1410, 1060],
    ["SceltaOnboarding.dc.html", onboarding(T), 390, 980, "Onboarding · 390", 0, 2800],
    ["SceltaHome.dc.html", home(T), 390, 1130, "Home · 390", 490, 2800],
    ["SceltaPercorso.dc.html", percorso(T), 390, 1120, "Percorso · 390", 980, 2800],
    ["SceltaProfilo.dc.html", profilo(T), 390, 1180, "Profilo · 390", 1470, 2800],
    ["SceltaMeteDesktop.dc.html", meteDesktop(T), 1280, 820, "Mete · 1280", 1960, 2800],
  ];
  const pages = [{ id: "scelta", name: "Scelta" }, { id: "esplorazione", name: "Esplorazione (3 varianti)" }];
  const artboards = esistente.artboards.filter(a => !nuove.some(([n]) => n === a.file)).map(a => ({ ...a, page: "esplorazione" }));
  for (const [nome, html, w, h, titolo, x, y] of nuove) {
    fs.writeFileSync(path.join(OUT, nome), html);
    artboards.push({ file: nome, x, y, w, h, title: `${nome === "Bottoni.dc.html" ? "Redesign v4" : T.nome} — ${titolo}`, page: "scelta" });
  }
  const annotations = (esistente.annotations || []).map(a => ({ ...a, page: a.page || "esplorazione" }))
    .filter(a => a.id !== "scelta-note" && a.id !== "blocco1-note");
  annotations.push({ id: "scelta-note", page: "scelta", x: -420, y: 0, w: 340, text: "Scelta di Nicola, 14/09.\n\nBase V3 Equilibrio (densità, card, raggi).\nDa V2: tipografia (Plus Jakarta anche nei titoli), semaforo con sola icona e testo, stato vuoto senza Wiz, stelle blu.\nMete: profilo in riga sotto il titolo con «Modifica»; card senza bordo, compatibilità grande, dettagli per utilità.\nLA: tolto «Dossier personale · solo su questo dispositivo»; al suo posto le «i» con spiegazione al passaggio (quella del titolo è mostrata aperta). Tabella centrata, stato senza pillole.\nBottoni: scelta C «Inchiostro» (primario blu notte con icona ambra); azioni secondarie come link." });
  annotations.push({ id: "blocco1-note", page: "scelta", x: -420, y: 2800, w: 340, text: "Blocco 1, 14/09: le schermate mancanti nella direzione scelta.\n\nNavigazione come nel sito reale (tranche pre-Bruno): Mete · Home · Learning Agreement; Percorso e Profilo si aprono da Home e Menu.\nHome e Percorso usano i testi reali di oggi (bando 2027/28 non ancora uscito, date 2026/27 solo come riferimento).\nOnboarding: la mappa vera del sito resta, qui è un segnaposto.\nPercentuali ed esami restano d'esempio." });
  fs.writeFileSync(path.join(OUT, "canvas.json"), JSON.stringify({ pages, artboards, annotations: annotations.filter((a, i, arr) => arr.findIndex(b => b.id === a.id) === i), launch: { view: "canvas", page: "scelta" } }, null, 2));
  console.log(`riga Scelta + bottoni scritte in ${OUT}`);
  process.exit(0);
}

const artboards = [];
const annotations = [];
let y = 0;
for (const [chiave, T] of Object.entries(VARIANTI).filter(([k]) => k !== "Scelta")) {
  const tile = chiave === "Equilibrio" ? "Main.dc.html" : `${chiave}Tile.dc.html`;
  const files = [[tile, styleTile(T), 820, 1780, "Style tile"], [`${chiave}Mete.dc.html`, mete(T), 390, 1780, "Mete · 390"], [`${chiave}LA.dc.html`, la(T), 1280, 940, "Learning Agreement · 1280"]];
  let x = 0;
  for (const [nome, html, w, h, titolo] of files) {
    fs.writeFileSync(path.join(OUT, nome), html);
    artboards.push({ file: nome, x, y, w, h, title: `${T.nome} — ${titolo}` });
    x += w + 100;
  }
  y += 1780 + 200;
}
annotations.push({
  id: "brief", x: -420, y: 0, w: 340,
  text: "Redesign v4 — esplorazione (PLAN_REDESIGN_V4.md, Fase 1).\n\nStessa palette, stessi raggi, stessi token di css/style.css. Cambiano solo densità, tipografia e uso di Wiz/ambra.\n\nV1 Guida calda: ariosa, Bricolage protagonista, Wiz presente, ambra generosa.\nV2 Strumento chiaro: compatta, titoli in Plus Jakarta, dati e semafori protagonisti, niente Wiz nelle schermate di lavoro.\nV3 Equilibrio: densità media, Wiz solo in onboarding e stati vuoti.\n\nMete reali Sapienza Giurisprudenza; percentuali, esami del LA e countdown sono d'esempio.\nIbridi ammessi asse per asse: densità / tipografia / Wiz+ambra.",
});
fs.writeFileSync(path.join(OUT, "canvas.json"), JSON.stringify({ artboards, annotations, launch: { view: "canvas" } }, null, 2));
for (const a of ["mascot-wiz.svg", "logo-mark.svg"]) fs.copyFileSync(path.join(RADICE, "design/assets", a), path.join(OUT, a));
console.log(`scritte ${artboards.length} artboard in ${OUT}`);
