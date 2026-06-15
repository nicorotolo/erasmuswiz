// lib-mete.mjs — utilità condivise per la pipeline a imbuto della mappatura.
// Nessuna dipendenza esterna. Lavora sul TESTO del file js/dati-mete*.js
// (mai con regex ingenue: usa uno scanner che rispetta stringhe e parentesi
// annidate), così i campi immutabili non vengono mai toccati.

import fs from "node:fs";

// Campi che l'LLM può completare. Tutto il resto è immutabile.
export const CAMPI_RIEMPIBILI = ["requisitoLingua", "scadenzeOspitante", "linkSito"];
// Campi-contesto utili alla ricerca (gli unici che mandiamo all'LLM).
export const CAMPI_CONTESTO = [
  "codiceErasmus", "universita", "citta", "paese", "linkPdf", "linkSito",
];

export function leggiStato(path = "mappatura-stato.json") {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

// Scorre `text` a partire da `from` e ritorna l'indice subito DOPO il valore
// che inizia in quel punto, rispettando stringhe e annidamento di []{}.
// Si ferma quando torna a profondità 0 e incontra `,` o `}` di chiusura blocco.
function fineValore(text, from) {
  let i = from;
  let depth = 0;
  let str = null; // carattere di apertura stringa attivo
  while (i < text.length) {
    const c = text[i];
    if (str) {
      if (c === "\\") { i += 2; continue; }
      if (c === str) str = null;
      i++;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { str = c; i++; continue; }
    if (c === "[" || c === "{" || c === "(") { depth++; i++; continue; }
    if (c === "]" || c === "}" || c === ")") {
      if (depth === 0) return i;        // chiusura del blocco padre
      depth--; i++; continue;
    }
    if (c === "," && depth === 0) return i;
    i++;
  }
  return i;
}

// Trova lo span [inizio, fine) dell'intero oggetto meta che contiene
// `codiceErasmus: "<codice>"`. `inizio` è la `{`, `fine` la `}` corrispondente.
export function spanMeta(text, codice) {
  const ago = `codiceErasmus: "${codice}"`;
  const pos = text.indexOf(ago);
  if (pos === -1) throw new Error(`Meta non trovata: ${codice}`);
  // Risali alla `{` di apertura dell'oggetto.
  let start = text.lastIndexOf("{", pos);
  // Scendi fino alla `}` bilanciata.
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

// Estrae il valore grezzo (testo) di un campo dentro un blocco meta.
export function valoreCampo(blocco, campo) {
  const re = new RegExp(`(^|[\\s,{])${campo}\\s*:\\s*`, "m");
  const m = re.exec(blocco);
  if (!m) return null;
  const from = m.index + m[0].length;
  const to = fineValore(blocco, from);
  return blocco.slice(from, to).trim();
}

// Vero se il campo è "vuoto/segnaposto" e quindi va riempito.
export function campoVuoto(raw) {
  if (raw == null) return true;
  const v = raw.trim();
  return v === "[]" || v === '""' || v === "''" ||
         /^"Da verificare/i.test(v) || /^"da verificare/i.test(v);
}

// --- Serializzazione di valori JS in stile-file (chiavi non quotate) ---
export function serializza(val, indent = "      ") {
  if (Array.isArray(val)) {
    if (val.length === 0) return "[]";
    const items = val.map((x) => indent + "  " + serializza(x, indent + "  "));
    return "[\n" + items.join(",\n") + "\n" + indent + "]";
  }
  if (val && typeof val === "object") {
    const parts = Object.entries(val).map(
      ([k, v]) => `${k}: ${serializza(v, indent)}`
    );
    return "{ " + parts.join(", ") + " }";
  }
  return JSON.stringify(val); // stringhe, numeri, bool, null
}
