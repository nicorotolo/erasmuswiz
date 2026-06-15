// lib-mete.mjs — utilita condivise per la pipeline a imbuto della mappatura.
// Nessuna dipendenza esterna. Lavora sul TESTO del file js/dati-mete*.js con
// uno scanner che rispetta stringhe e parentesi annidate, cosi i campi
// immutabili non vengono mai toccati.

import fs from "node:fs";

// Campi che l'LLM puo completare. Tutto il resto e immutabile.
export const CAMPI_RIEMPIBILI = ["requisitoLingua", "scadenzeOspitante", "linkSito"];
// Campi-contesto utili alla ricerca (gli unici che mandiamo all'LLM).
export const CAMPI_CONTESTO = [
  "codiceErasmus", "universita", "citta", "paese", "linkPdf", "linkSito",
];

export function leggiStato(path = "mappatura-stato.json") {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

// Ritorna l'indice subito DOPO il valore che inizia in `from`, rispettando
// stringhe e annidamento di []{}(). Si ferma a profondita 0 su `,` o chiusura.
function fineValore(text, from) {
  let i = from, depth = 0, str = null;
  while (i < text.length) {
    const c = text[i];
    if (str) {
      if (c === "\\") { i += 2; continue; }
      if (c === str) str = null;
      i++; continue;
    }
    if (c === '"' || c === "'" || c === "`") { str = c; i++; continue; }
    if (c === "[" || c === "{" || c === "(") { depth++; i++; continue; }
    if (c === "]" || c === "}" || c === ")") {
      if (depth === 0) return i;
      depth--; i++; continue;
    }
    if (c === "," && depth === 0) return i;
    i++;
  }
  return i;
}

// Dato un indice dentro un oggetto meta, ritorna lo span [start, end) (start =
// `{` di apertura, end dopo la `}` bilanciata).
function spanDaPosizione(text, pos) {
  const start = text.lastIndexOf("{", pos);
  let i = start, depth = 0, str = null;
  for (; i < text.length; i++) {
    const c = text[i];
    if (str) { if (c === "\\") { i++; continue; } if (c === str) str = null; continue; }
    if (c === '"' || c === "'" || c === "`") { str = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) { i++; break; } }
  }
  return { start, end: i };
}

// Span del PRIMO oggetto meta con quel codiceErasmus.
export function spanMeta(text, codice) {
  const pos = text.indexOf(`codiceErasmus: "${codice}"`);
  if (pos === -1) throw new Error(`Meta non trovata: ${codice}`);
  return spanDaPosizione(text, pos);
}

// Span di TUTTI i blocchi con quel codiceErasmus (il codice NON e univoco).
export function spanTutteMete(text, codice) {
  const ago = `codiceErasmus: "${codice}"`;
  const out = [];
  let from = 0, pos;
  while ((pos = text.indexOf(ago, from)) !== -1) {
    const sp = spanDaPosizione(text, pos);
    out.push(sp);
    from = sp.end;
  }
  if (out.length === 0) throw new Error(`Meta non trovata: ${codice}`);
  return out;
}

// Carica l'array METE valutando il sorgente JS (stessa tecnica del validatore).
export function caricaMete(src) {
  return Function('"use strict"; ' + src + "; return METE;")();
}

// Estrae il valore grezzo (testo) di un campo dentro un blocco meta.
export function valoreCampo(blocco, campo) {
  const re = new RegExp(`(^|[\\s,{])${campo}\\s*:\\s*`, "m");
  const m = re.exec(blocco);
  if (!m) return null;
  const from = m.index + m[0].length;
  return blocco.slice(from, fineValore(blocco, from)).trim();
}

// Vero se il campo e vuoto/segnaposto e quindi va riempito.
export function campoVuoto(raw) {
  if (raw == null) return true;
  const v = raw.trim();
  return v === "[]" || v === '""' || v === "''" || /^"?da verificare/i.test(v);
}

// Serializza un valore JS in stile-file (chiavi non quotate).
export function serializza(val, indent = "      ") {
  if (Array.isArray(val)) {
    if (val.length === 0) return "[]";
    const items = val.map((x) => indent + "  " + serializza(x, indent + "  "));
    return "[\n" + items.join(",\n") + "\n" + indent + "]";
  }
  if (val && typeof val === "object") {
    const parts = Object.entries(val).map(([k, v]) => `${k}: ${serializza(v, indent)}`);
    return "{ " + parts.join(", ") + " }";
  }
  return JSON.stringify(val);
}
