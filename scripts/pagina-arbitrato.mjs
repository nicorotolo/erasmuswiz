// Costruisce la pagina privata con cui Nicola giudica le proposte in coda
// d'arbitrato (Passo 2 di PLAN_FASE7.md).
//
// Due vincoli che vengono dal piano e non sono negoziabili:
//  1. La pagina e' costruita SUI DATI VERI, non su un elenco ribattuto a mano.
//  2. `improntaProposta` viene COPIATA dalla coda e mai ricalcolata: e' la
//     chiave del registro dei giudizi, e un carattere sbagliato rende il
//     verdetto irriconoscibile. La pagina non la calcola, non la mostra
//     modificabile, non la deriva dal valore.
//
// L'uscita e' un file di verdetti nella forma che `applica-arbitrato.mjs`
// accetta: [{codiceCanonico, campo, improntaProposta, esito}].
//
// Uso: node scripts/pagina-arbitrato.mjs [--fuori <file.html>]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { caricaMete, codiceCanonico } from "./lib-mete.mjs";
import { fileMete } from "./cancelli.mjs";
import { CAMPI_ARBITRATO } from "./esegui-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// --- lettura dei dati veri -------------------------------------------------

export function leggiCode(radice = RADICE) {
  const voci = [];
  for (const campo of CAMPI_ARBITRATO) {
    const file = path.join(radice, "raccolta", `arbitrato-${campo}.json`);
    if (!fs.existsSync(file)) continue;
    for (const v of JSON.parse(fs.readFileSync(file, "utf8"))) voci.push(v);
  }
  return voci;
}

// Quante mete tocca ogni partner, in quali dipartimenti, quanti posti.
// Serve a rispondere alla domanda che rende utile un si': quanto vale.
export function contestoMete(mete) {
  const per = new Map();
  for (const m of mete) {
    const c = codiceCanonico(m.codiceErasmus);
    const v = per.get(c)
      || { mete: 0, dipartimenti: new Set(), posti: 0, citta: "", paese: "" };
    v.mete++;
    if (m.dipartimentoCf) v.dipartimenti.add(m.dipartimentoCf);
    for (const p of m.posti || []) v.posti += Number(p.numero) || 0;
    v.citta = v.citta || m.citta || "";
    v.paese = v.paese || m.paese || "";
    per.set(c, v);
  }
  return per;
}

// --- gli avvisi: le cose che il piano dice di guardare ---------------------

const ANNO_VECCHIO = /(?:^|[^0-9])(20(?:1[0-9]|2[0-4]))(?![0-9])/;

export function dominio(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
}

// eTLD+1 approssimato: basta a dire "e' un altro sito", non a fare policy.
// Due etichette bastano quasi sempre (uni-graz.at, courseleaf.com), ma i domini
// accademici britannici e polacchi ne vogliono tre: ox.AC.UK, uw.EDU.PL. La
// regola scatta solo quando l'ultima etichetta e' un dominio di paese (due
// lettere) E la penultima e' uno dei suffissi noti — altrimenti "ac" dentro un
// nome proprio farebbe scivolare la radice di un pezzo.
const SUFFISSI_DUE = new Set(["co", "ac", "org", "gov", "edu", "com", "net", "or", "ne", "gob", "gouv"]);

function radiceDominio(host) {
  const p = String(host || "").toLowerCase().split(".").filter(Boolean);
  if (p.length <= 2) return p.join(".");
  const ultima = p[p.length - 1], penultima = p[p.length - 2];
  if (ultima.length === 2 && SUFFISSI_DUE.has(penultima)) return p.slice(-3).join(".");
  return p.slice(-2).join(".");
}

export function avvisi(voce) {
  const fuori = [];
  if (voce.campo === "linkCatalogo") {
    const val = String(voce.valore || "");
    if (/\.pdf(?:$|[?#])/i.test(val)) {
      fuori.push({ tipo: "pdf", testo: "E' un PDF. Il 02/09 sei «non so» su undici erano PDF: guarda la data dentro il documento, non solo l'indirizzo." });
    }
    const anno = ANNO_VECCHIO.exec(val);
    if (anno) {
      fuori.push({ tipo: "anno", testo: `L'indirizzo contiene l'anno ${anno[1]}: potrebbe essere un catalogo vecchio.` });
    }
    const dCat = dominio(val), dFonte = dominio(voce.fonte);
    if (dCat && dFonte && radiceDominio(dCat) !== radiceDominio(dFonte)) {
      fuori.push({ tipo: "dominio", testo: `Il catalogo sta su un altro sito (${dCat}) rispetto alla pagina che lo cita (${dFonte}). Non e' di per se' sbagliato — il catalogo di Cork vive su courseleaf.com — ma va guardato.` });
    }
    if (String(voce.citazione || "").trim().length < 20) {
      fuori.push({ tipo: "citazione", testo: "La citazione e' corta: per un indirizzo basta il testo del link, ma da sola dice poco." });
    }
  }
  if (voce.campo === "requisitoLingua") {
    const val = voce.valore || {};
    const lingue = new Set((val.figli || []).map((f) => f.lingua));
    if (val.op === "ANY" && lingue.size > 1) {
      fuori.push({ tipo: "any", testo: "«ANY» con piu' lingue: e' il difetto noto del campo. Da una tabella appiattita («ENGLISH B2 / TURKISH B2») il modello deduce «basta una delle due», mentre la lingua dipende dal dipartimento. E' il motivo per cui questo campo fu bocciato il 31/08." });
    }
  }
  return fuori;
}

// --- la voce pronta da mostrare -------------------------------------------

export function preparaVoci({ radice = RADICE, code, mete } = {}) {
  const voci = code || leggiCode(radice);
  const tutte = mete
    || fileMete(radice).flatMap((f) => caricaMete(fs.readFileSync(f, "utf8")));
  const per = contestoMete(tutte);
  return voci.map((v) => {
    const ctx = per.get(codiceCanonico(v.codiceCanonico))
      || { mete: 0, dipartimenti: new Set(), posti: 0, citta: "", paese: "" };
    return {
      // i tre campi della chiave, copiati alla lettera dalla coda
      codiceCanonico: v.codiceCanonico,
      campo: v.campo,
      improntaProposta: v.improntaProposta,
      // contorno, solo per guardare
      ateneo: v.ateneo || "",
      valore: v.valore,
      citazione: v.citazione || "",
      fonte: v.fonte || "",
      paginaCitata: v.paginaCitata ?? null,
      mete: ctx.mete,
      posti: ctx.posti,
      citta: ctx.citta,
      paese: ctx.paese,
      dipartimenti: [...ctx.dipartimenti].sort(),
      avvisi: avvisi(v),
    };
  });
}

// --- la pagina -------------------------------------------------------------

// Un `</script>` dentro una citazione chiuderebbe il blocco e romperebbe la
// pagina: si spezzano i segni, non si tocca il contenuto.
export function incorporaJson(dato) {
  return JSON.stringify(dato)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function costruisciPagina({ radice = RADICE, voci, quando } = {}) {
  const dati = voci || preparaVoci({ radice });
  const giorno = quando || new Date().toISOString().slice(0, 10);
  return MODELLO
    .replace("/*DATI*/null", incorporaJson(dati))
    .replace(/\{\{QUANDO\}\}/g, giorno);
}

const MODELLO = String.raw`<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Arbitrato — Passo 2</title>
<style>
  :root {
    --sfondo: #f4f6fb; --carta: #fff; --testo: #14203c; --tenue: #5b6a8a;
    --bordo: #d8e0f0; --si: #10794f; --si-b: #e6f5ee; --no: #a4243b;
    --no-b: #fdeced; --forse: #8a6100; --forse-b: #fdf3df; --primo: #1d3f9e;
    --avviso: #fff8e5; --avviso-b: #e8c96a;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--sfondo); color: var(--testo);
    font: 16px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  header { position: sticky; top: 0; z-index: 5; background: var(--carta);
    border-bottom: 1px solid var(--bordo); padding: 10px 20px;
    display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
  .barra { flex: 1 1 220px; height: 8px; background: var(--bordo);
    border-radius: 99px; overflow: hidden; min-width: 140px; }
  .barra i { display: block; height: 100%; background: var(--primo);
    width: 0; transition: width .2s; }
  .conta { font-variant-numeric: tabular-nums; font-weight: 600; white-space: nowrap; }
  .conta small { font-weight: 400; color: var(--tenue); }
  main { max-width: 860px; margin: 0 auto; padding: 22px 20px 120px; }
  .carta { background: var(--carta); border: 1px solid var(--bordo);
    border-radius: 14px; padding: 22px; }
  .cappello { display: flex; justify-content: space-between; gap: 14px;
    align-items: baseline; flex-wrap: wrap; }
  h1 { font-size: 21px; margin: 0 0 2px; line-height: 1.3; }
  .codice { font-family: ui-monospace, "Cascadia Mono", Consolas, monospace;
    font-size: 13px; color: var(--tenue); }
  .peso { text-align: right; font-size: 14px; color: var(--tenue); white-space: nowrap; }
  .peso b { display: block; font-size: 25px; color: var(--testo); line-height: 1.1; }
  .campo { display: inline-block; margin: 12px 0 4px; padding: 2px 10px;
    border-radius: 99px; background: #eaeffb; color: var(--primo);
    font-size: 13px; font-weight: 600; }
  .valore { margin: 10px 0 0; padding: 14px; background: #f8fafe;
    border: 1px solid var(--bordo); border-radius: 10px; word-break: break-word; }
  .valore a { color: var(--primo); font-weight: 600; }
  .apri { display: inline-flex; align-items: center; gap: 8px; margin-top: 12px;
    padding: 11px 18px; border-radius: 10px; background: var(--primo);
    color: #fff; text-decoration: none; font-weight: 600; }
  .lingue { margin: 6px 0 0; padding-left: 20px; }
  .op { font-weight: 700; }
  dl { display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px;
    margin: 18px 0 0; font-size: 14.5px; }
  dt { color: var(--tenue); }
  dd { margin: 0; word-break: break-word; }
  blockquote { margin: 0; padding: 8px 14px; border-left: 3px solid var(--bordo);
    color: #2c3550; font-style: italic; }
  .avviso { margin-top: 14px; padding: 11px 14px; background: var(--avviso);
    border: 1px solid var(--avviso-b); border-radius: 10px; font-size: 14.5px; }
  .impronta { margin-top: 16px; font-family: ui-monospace, Consolas, monospace;
    font-size: 11.5px; color: #93a0bb; word-break: break-all; user-select: all; }
  .scelte { display: flex; gap: 12px; margin-top: 22px; flex-wrap: wrap; }
  .scelte button { flex: 1 1 150px; padding: 15px 12px; font-size: 16px;
    font-weight: 700; border-radius: 12px; border: 2px solid transparent;
    cursor: pointer; font-family: inherit; }
  .b-si { background: var(--si-b); color: var(--si); border-color: #a9dcc4; }
  .b-no { background: var(--no-b); color: var(--no); border-color: #f0b8be; }
  .b-forse { background: var(--forse-b); color: var(--forse); border-color: #e8cd8c; }
  .scelte button:hover { filter: brightness(.96); }
  .scelte button.scelto { outline: 3px solid currentColor; outline-offset: 2px; }
  kbd { font: inherit; font-size: 12px; opacity: .7; }
  nav { display: flex; justify-content: space-between; align-items: center;
    margin-top: 18px; gap: 12px; }
  nav button { padding: 9px 16px; border-radius: 9px; border: 1px solid var(--bordo);
    background: var(--carta); cursor: pointer; font: inherit; color: var(--testo); }
  nav button:disabled { opacity: .4; cursor: default; }
  .fine { text-align: center; }
  .fine h2 { margin: 0 0 8px; }
  .riepilogo { display: flex; gap: 12px; justify-content: center;
    margin: 18px 0 24px; flex-wrap: wrap; }
  .riepilogo div { padding: 12px 20px; border-radius: 12px; min-width: 96px; }
  .riepilogo b { display: block; font-size: 27px; }
  .azioni { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .azioni button { padding: 13px 22px; border-radius: 11px; border: 0;
    background: var(--primo); color: #fff; font: inherit; font-weight: 700; cursor: pointer; }
  .azioni button.secondo { background: var(--carta); color: var(--testo);
    border: 1px solid var(--bordo); font-weight: 500; }
  .come { margin-top: 26px; padding: 16px 18px; background: #f8fafe;
    border: 1px solid var(--bordo); border-radius: 12px;
    font-size: 14.5px; text-align: left; }
  .come code { background: #eef2fa; padding: 2px 6px; border-radius: 5px;
    font-size: 13px; word-break: break-all; }
  .elenco { margin-top: 22px; font-size: 14px; text-align: left; }
  .elenco table { width: 100%; border-collapse: collapse; }
  .elenco td { padding: 5px 8px; border-bottom: 1px solid var(--bordo); }
  .elenco td:last-child { text-align: right; white-space: nowrap; }
  .elenco a { color: var(--primo); cursor: pointer; text-decoration: underline; }
  .nota { color: var(--tenue); font-size: 13.5px; margin-top: 10px; }
  .allarme { margin-bottom: 16px; padding: 14px 16px; background: var(--no-b);
    border: 2px solid #f0b8be; border-radius: 12px; color: #7d1b2c;
    font-size: 14.5px; font-weight: 500; }
  @media (max-width: 620px) {
    .peso { text-align: left; }
    main { padding: 16px 14px 110px; }
  }
</style>
</head>
<body>
<header>
  <strong>Arbitrato — Passo 2</strong>
  <div class="barra"><i id="riempi"></i></div>
  <div class="conta" id="conta"></div>
  <button id="salta" style="padding:7px 13px;border-radius:8px;border:1px solid var(--bordo);background:#fff;cursor:pointer;font:inherit">Riepilogo</button>
</header>
<main id="dove"></main>

<script>
var VOCI = /*DATI*/null;
var CHIAVE = "arbitrato-passo2-{{QUANDO}}";
var ESITI = { si: "si", no: "no", nonSo: "non so" };

var verdetti = {};
var salvataggioOk = true;
var scaricato = false;
try { verdetti = JSON.parse(localStorage.getItem(CHIAVE) || "{}") || {}; }
catch (e) { verdetti = {}; salvataggioOk = false; }
var i = 0;
var mostraFine = false;

// Una prova vera, non una supposizione: aperta con un doppio clic, la pagina
// puo' finire in un'origine dove localStorage esiste ma rifiuta di scrivere.
// Fallire in silenzio li' vuol dire perdere un'ora di giudizi senza saperlo.
try {
  localStorage.setItem(CHIAVE + "-prova", "1");
  localStorage.removeItem(CHIAVE + "-prova");
} catch (e) { salvataggioOk = false; }

function salva() {
  try { localStorage.setItem(CHIAVE, JSON.stringify(verdetti)); }
  catch (e) { salvataggioOk = false; }
}

function avvisoSalvataggio() {
  if (salvataggioOk) return "";
  return '<div class="allarme">Questo browser <b>non sta salvando</b> le risposte sul computer: '
    + "se chiudi la pagina le perdi. Scarica il file spesso (bottone «Riepilogo» in alto), "
    + "oppure apri la pagina da un server locale invece che con un doppio clic: "
    + "<code>npx serve raccolta</code>.</div>";
}
function chiaveDi(v) { return v.codiceCanonico + "\u0000" + v.campo + "\u0000" + v.improntaProposta; }
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function primaSenzaVerdetto() {
  for (var k = 0; k < VOCI.length; k++) if (!verdetti[chiaveDi(VOCI[k])]) return k;
  return 0;
}

function contaEsiti() {
  var c = { si: 0, no: 0, nonSo: 0 };
  for (var k = 0; k < VOCI.length; k++) {
    var e = verdetti[chiaveDi(VOCI[k])];
    if (e) c[e]++;
  }
  return c;
}

function quantiFatti() { var c = contaEsiti(); return c.si + c.no + c.nonSo; }

function testata() {
  var fatti = quantiFatti();
  document.getElementById("riempi").style.width = (VOCI.length ? fatti / VOCI.length * 100 : 0) + "%";
  document.getElementById("conta").innerHTML = fatti + " di " + VOCI.length + " <small>giudicate</small>";
}

function valoreHtml(v) {
  if (v.campo === "linkCatalogo") {
    return '<div class="valore"><a href="' + esc(v.valore) + '" target="_blank" rel="noopener noreferrer">'
      + esc(v.valore) + '</a></div>'
      + '<a class="apri" href="' + esc(v.valore) + '" target="_blank" rel="noopener noreferrer">Apri il catalogo in una scheda nuova &rarr;</a>';
  }
  var val = v.valore || {};
  var figli = val.figli || [];
  var spiega = val.op === "ANY" ? "ANY &mdash; basta <b>una</b> di queste"
    : "ALL &mdash; servono <b>tutte</b>";
  var righe = figli.map(function (f) {
    return "<li>" + esc(f.lingua) + " " + esc(f.livello)
      + (f.condizione ? " <i>(" + esc(f.condizione) + ")</i>" : "") + "</li>";
  }).join("");
  return '<div class="valore"><div class="op">' + spiega + '</div><ul class="lingue">' + righe + "</ul></div>"
    + '<a class="apri" href="' + esc(val.fonte || v.fonte) + '" target="_blank" rel="noopener noreferrer">Apri la pagina della fonte &rarr;</a>';
}

function disegnaVoce() {
  var v = VOCI[i];
  var scelto = verdetti[chiaveDi(v)];
  var dip = v.dipartimenti.length ? v.dipartimenti.map(esc).join(" &middot; ") : "&mdash;";
  document.getElementById("dove").innerHTML =
    '<div class="carta">'
    + '<div class="cappello"><div>'
    + "<h1>" + esc(v.ateneo || v.codiceCanonico) + "</h1>"
    + '<div class="codice">' + esc(v.codiceCanonico)
    + (v.citta ? " &middot; " + esc(v.citta) : "")
    + (v.paese ? ", " + esc(v.paese) : "") + "</div>"
    + '<span class="campo">' + esc(v.campo) + "</span>"
    + '</div><div class="peso"><b>' + v.mete + "</b>"
    + (v.mete === 1 ? "meta" : "mete")
    + (v.posti ? "<br>" + v.posti + " posti" : "") + "</div></div>"
    + valoreHtml(v)
    + v.avvisi.map(function (a) { return '<div class="avviso">' + esc(a.testo) + "</div>"; }).join("")
    + "<dl>"
    + "<dt>Citazione</dt><dd><blockquote>"
    + (v.citazione ? esc(v.citazione) : "<i>nessuna</i>") + "</blockquote></dd>"
    + '<dt>Pagina che la cita</dt><dd><a href="' + esc(v.fonte)
    + '" target="_blank" rel="noopener noreferrer">' + esc(v.fonte) + "</a></dd>"
    + "<dt>Dipartimenti</dt><dd>" + dip + "</dd>"
    + "</dl>"
    + '<div class="impronta">impronta ' + esc(v.improntaProposta) + "</div>"
    + '<div class="scelte">'
    + '<button class="b-si' + (scelto === "si" ? " scelto" : "") + '" data-e="si">Si <kbd>1</kbd></button>'
    + '<button class="b-no' + (scelto === "no" ? " scelto" : "") + '" data-e="no">No <kbd>2</kbd></button>'
    + '<button class="b-forse' + (scelto === "nonSo" ? " scelto" : "") + '" data-e="nonSo">Non so <kbd>3</kbd></button>'
    + "</div>"
    + '<nav><button id="prima"' + (i === 0 ? " disabled" : "") + ">&larr; Precedente</button>"
    + '<span class="codice">' + (i + 1) + " di " + VOCI.length + "</span>"
    + '<button id="dopo"' + (i >= VOCI.length - 1 ? " disabled" : "") + ">Successiva &rarr;</button></nav>"
    + "</div>"
    + '<p class="nota">Tasti: <kbd>1</kbd> si &middot; <kbd>2</kbd> no &middot; <kbd>3</kbd> non so &middot; <kbd>&larr;</kbd> <kbd>&rarr;</kbd> per muoverti. '
    + "Le risposte restano su questo computer finche' non scarichi il file.</p>";

  var bottoni = document.querySelectorAll(".scelte button");
  for (var k = 0; k < bottoni.length; k++) {
    (function (b) { b.onclick = function () { decidi(b.getAttribute("data-e")); }; })(bottoni[k]);
  }
  var p = document.getElementById("prima"), d = document.getElementById("dopo");
  if (p) p.onclick = function () { if (i > 0) { i--; disegna(); } };
  if (d) d.onclick = function () { if (i < VOCI.length - 1) { i++; disegna(); } };
}

function decidi(esito) {
  verdetti[chiaveDi(VOCI[i])] = esito;
  scaricato = false;
  salva();
  if (i < VOCI.length - 1) i++; else mostraFine = true;
  disegna();
}

// Solo i tre campi della chiave piu' l'esito, nell'ordine che
// applica-arbitrato.mjs si aspetta. L'impronta e' quella della coda.
function verdettiPuliti() {
  var fuori = [];
  for (var k = 0; k < VOCI.length; k++) {
    var v = VOCI[k], e = verdetti[chiaveDi(v)];
    if (!e) continue;
    fuori.push({
      codiceCanonico: v.codiceCanonico,
      campo: v.campo,
      improntaProposta: v.improntaProposta,
      esito: e
    });
  }
  return fuori;
}

function disegnaFine() {
  var c = contaEsiti();
  var fatti = c.si + c.no + c.nonSo;
  var mancanti = VOCI.length - fatti;
  var righe = VOCI.map(function (v, k) {
    var e = verdetti[chiaveDi(v)];
    return "<tr><td>" + esc(v.ateneo || v.codiceCanonico)
      + ' <span class="codice">' + esc(v.campo) + "</span></td>"
      + '<td><a data-i="' + k + '">' + (e ? ESITI[e] : "da giudicare") + "</a></td></tr>";
  }).join("");
  document.getElementById("dove").innerHTML =
    '<div class="carta fine">'
    + "<h2>" + (mancanti ? "Ne mancano " + mancanti : "Tutte giudicate") + "</h2>"
    + '<p class="nota" style="margin-top:0">' + fatti + " di " + VOCI.length + " proposte hanno un verdetto.</p>"
    + '<div class="riepilogo">'
    + '<div style="background:var(--si-b);color:var(--si)"><b>' + c.si + "</b>si</div>"
    + '<div style="background:var(--no-b);color:var(--no)"><b>' + c.no + "</b>no</div>"
    + '<div style="background:var(--forse-b);color:var(--forse)"><b>' + c.nonSo + "</b>non so</div>"
    + "</div>"
    + '<div class="azioni">'
    + '<button id="scarica">Scarica verdetti.json</button>'
    + '<button class="secondo" id="copia">Copia negli appunti</button>'
    + (mancanti ? '<button class="secondo" id="riprendi">Riprendi da dove manca</button>' : "")
    + "</div>"
    + '<div class="come"><b>Cosa farne.</b> Salva il file nella cartella del progetto, poi:'
    + "<br><code>node scripts/applica-arbitrato.mjs verdetti.json --prova</code>"
    + "<br>La prova pubblica i giudizi nel registro <b>senza scrivere niente nelle mete</b>. "
    + "Quando il risultato ti convince, rilancia lo stesso comando <b>senza</b> <code>--prova</code>: "
    + "solo allora i «si» entrano nel sito.</div>"
    + '<div class="elenco"><table>' + righe + "</table></div>"
    + "</div>";

  document.getElementById("scarica").onclick = function () {
    var testo = JSON.stringify(verdettiPuliti(), null, 2) + "\n";
    var b = new Blob([testo], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = "verdetti.json";
    a.click();
    scaricato = true;
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  };
  document.getElementById("copia").onclick = function (ev) {
    var testo = JSON.stringify(verdettiPuliti(), null, 2);
    var bottone = ev.target;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(testo).then(
        function () { bottone.textContent = "copiato"; },
        function () { bottone.textContent = "non riesco: usa Scarica"; });
    } else { bottone.textContent = "non riesco: usa Scarica"; }
  };
  var r = document.getElementById("riprendi");
  if (r) r.onclick = function () { i = primaSenzaVerdetto(); mostraFine = false; disegna(); };
  var link = document.querySelectorAll(".elenco a");
  for (var k = 0; k < link.length; k++) {
    (function (a) {
      a.onclick = function () { i = Number(a.getAttribute("data-i")); mostraFine = false; disegna(); };
    })(link[k]);
  }
}

function disegna() {
  testata();
  if (mostraFine || !VOCI.length) disegnaFine(); else disegnaVoce();
  if (!salvataggioOk) {
    document.getElementById("dove").insertAdjacentHTML("afterbegin", avvisoSalvataggio());
  }
  window.scrollTo(0, 0);
}

// Rete di sicurezza indipendente dal salvataggio: se ci sono giudizi che non
// sono ancora finiti in un file, chiudere la scheda chiede conferma.
window.addEventListener("beforeunload", function (ev) {
  if (quantiFatti() > 0 && !scaricato) { ev.preventDefault(); ev.returnValue = ""; }
});

document.getElementById("salta").onclick = function () { mostraFine = !mostraFine; disegna(); };

document.addEventListener("keydown", function (ev) {
  if (ev.metaKey || ev.ctrlKey || ev.altKey || mostraFine) return;
  if (ev.key === "1") { decidi("si"); ev.preventDefault(); }
  else if (ev.key === "2") { decidi("no"); ev.preventDefault(); }
  else if (ev.key === "3") { decidi("nonSo"); ev.preventDefault(); }
  else if (ev.key === "ArrowLeft" && i > 0) { i--; disegna(); }
  else if (ev.key === "ArrowRight" && i < VOCI.length - 1) { i++; disegna(); }
});

i = primaSenzaVerdetto();
if (VOCI.length && quantiFatti() === VOCI.length) mostraFine = true;
disegna();
</script>
</body>
</html>
`;

function main() {
  const k = process.argv.indexOf("--fuori");
  const fuori = k !== -1 && process.argv[k + 1]
    ? path.resolve(process.argv[k + 1])
    : path.join(RADICE, "raccolta", "arbitrato.html");
  const voci = preparaVoci({ radice: RADICE });
  fs.writeFileSync(fuori, costruisciPagina({ radice: RADICE, voci }));
  const per = {};
  for (const v of voci) per[v.campo] = (per[v.campo] || 0) + 1;
  const mete = voci.reduce((n, v) => n + v.mete, 0);
  const conAvvisi = voci.filter((v) => v.avvisi.length).length;
  console.log(`Pagina scritta: ${fuori}`);
  console.log(`${voci.length} proposte (${Object.entries(per).map(([c, n]) => `${c} ${n}`).join(", ")}), `
    + `${mete} mete, ${conAvvisi} con avvisi.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
