// lib-mete.mjs — utilita condivise per la pipeline a imbuto della mappatura.
// Nessuna dipendenza esterna. Lavora sul TESTO del file js/dati-mete*.js con
// uno scanner che rispetta stringhe e parentesi annidate, cosi i campi
// immutabili non vengono mai toccati.

import fs from "node:fs";

// Contratto V0 per i nuovi dati in ingresso. I dati storici vengono adattati
// da js/puro.js; la pipeline, invece, deve impedire che il debito cresca.
export const LIVELLI_CEFR = Object.freeze(["A1", "A2", "B1", "B2", "C1", "C2"]);
export function linguaSempliceValida(valore) {
  if (typeof valore !== "string" || !valore.trim()) return false;
  const lingua = valore.trim();
  if (/[\/,;|&]|\s+(?:o|oppure|e)\s+/i.test(lingua)) return false;
  return !/^(?:n\/a|nessuna|nessuno|non indicata|non indicato|non specificata|non specificato|da verificare|sconosciuta|sconosciuto|lingua (?:degli studi|del corso scelto|di insegnamento(?: dei corsi scelti)?|principale (?:del programma scelto|di insegnamento del programma scelto)|da verificare))$/i.test(lingua);
}

// I file storici usano array; i nuovi requisiti lingua usano un albero.
// La pipeline deve considerarli entrambi "presenti", altrimenti un dato nuovo
// valido tornerebbe per errore nella coda delle ricerche mancanti.
export function datoStrutturatoVuoto(valore) {
  if (Array.isArray(valore)) return valore.length === 0;
  if (valore && typeof valore === "object" &&
      (valore.op === "ANY" || valore.op === "ALL") &&
      Array.isArray(valore.figli)) {
    return valore.figli.length === 0;
  }
  return true;
}

// Campi che l'LLM puo completare. Tutto il resto e immutabile.
export const CAMPI_RIEMPIBILI = [
  "requisitoLingua",
  "scadenzeOspitante",
  "linkSito",
  "linkCatalogo",
  "notaDisponibilita",
];
// Campi-contesto utili alla ricerca (gli unici che mandiamo all'LLM).
export const CAMPI_CONTESTO = [
  "codiceErasmus", "universita", "citta", "paese", "linkPdf", "linkSito",
];

// --- "completo": una definizione sola, usata da tutti gli script -----------
//
// La pipeline V2 (DISEGNO_PIPELINE_DATI.md §6) dice che un campo e' coperto se
// ha il dato CON fonte, OPPURE se e' dichiarato non trovabile CON la fonte
// tentata e la data. Un campo cercato invano e uno mai cercato non sono la
// stessa cosa, e finora sul sito erano indistinguibili: entrambi vuoti.
//
// Forma del campo su una meta:
//   nonTrovabile: {
//     requisitoLingua: { cercatoIl: "2026-09-01", fonte: "https://..." }
//   }
//
// Quattro stati possibili:
//   "dato"           il valore c'e';
//   "nonTrovabile"   cercato, l'ateneo non lo pubblica, e lo possiamo provare;
//   "daRiconfermare" dichiarato non trovabile ma SENZA fonte ne' data. E' il
//                    caso dei 153 ereditati dalla pipeline V1, che non teneva
//                    traccia dei tentativi falliti. Non e' copertura: e' un
//                    promemoria. Contarlo come coperto gonfierebbe i numeri
//                    senza che nessuno abbia verificato niente;
//   "vuoto"          mai cercato.
export function statoCampo(meta, campo) {
  if (!campoVuotoValore(meta?.[campo])) return "dato";
  const nt = meta?.nonTrovabile?.[campo];
  if (!nt) return "vuoto";
  return nt.fonte && nt.cercatoIl ? "nonTrovabile" : "daRiconfermare";
}

// L'UNICA definizione di "questo valore non c'e'", su un valore gia' letto.
// Prima ce n'erano cinque leggermente diverse (qui, in campoVuoto, in
// datoStrutturatoVuoto, e due copie locali in applica-batch e propaga-tutto), e
// bastava che due non fossero d'accordo perche' un campo diventasse
// inarrivabile: chi legge lo dichiara da fare, chi scrive lo salta perche' lo
// crede pieno, e nessuno lo riempie piu'.
// Attenzione al caso che aveva fatto scattare la revisione: l'albero
// { op: "ANY", figli: [] } ha tre chiavi ma NON e' un dato, ed e' proprio la
// forma che il modello restituisce quando non trova il requisito di lingua.
export function campoVuotoValore(valore) {
  if (valore == null) return true;
  if (typeof valore === "string") {
    const v = valore.trim();
    return !v || /^da verificare/i.test(v);
  }
  if (typeof valore === "object") return datoStrutturatoVuoto(valore);
  return true;
}

// Valuta il testo grezzo di un campo (stessa tecnica di caricaMete).
// Ritorna undefined se non e' un valore JS leggibile.
export function valoreParsato(raw) {
  try { return Function(`"use strict"; return (${raw});`)(); }
  catch { return undefined; }
}

// Vero solo per gli stati che contano davvero come copertura.
export function copertoDavvero(stato) {
  return stato === "dato" || stato === "nonTrovabile";
}

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
// Lavora sul TESTO grezzo, ma la decisione la prende campoVuotoValore: prima
// riconosceva solo la stringa esatta "[]", quindi un array vuoto scritto su
// due righe risultava "pieno" a chi scrive e "vuoto" a chi legge, e quel campo
// non lo riempiva piu' nessuno.
export function campoVuoto(raw) {
  if (raw == null) return true;
  const v = raw.trim();
  if (!v) return true;
  if (/^"?da verificare/i.test(v)) return true;
  const parsato = valoreParsato(v);
  if (parsato !== undefined) return campoVuotoValore(parsato);
  return v === "[]" || v === '""' || v === "''";
}

// Imposta un campo esistente oppure, per i campi introdotti dopo la creazione
// dei seed, lo inserisce subito prima di notePratiche. Questo permette di
// estendere lo schema senza riscrivere in massa tutti i file mete esistenti.
export function impostaCampo(blocco, campo, valore, { soloSeVuoto = false } = {}) {
  const raw = valoreCampo(blocco, campo);
  if (raw != null) {
    if (soloSeVuoto && !campoVuoto(raw)) return { blocco, modificato: false };
    const re = new RegExp(`((?:^|[\\s,{])${campo}\\s*:\\s*)`, "m");
    const m = re.exec(blocco);
    if (!m) return { blocco, modificato: false };
    const from = m.index + m[0].length;
    return {
      blocco: blocco.slice(0, from) + serializza(valore) + blocco.slice(from + raw.length),
      modificato: true,
    };
  }

  const nota = /^(\s*)notePratiche\s*:/m.exec(blocco);
  if (nota) {
    const inserimento = `${nota[1]}${campo}: ${serializza(valore)},\n`;
    return {
      blocco: blocco.slice(0, nota.index) + inserimento + blocco.slice(nota.index),
      modificato: true,
    };
  }

  const fine = blocco.lastIndexOf("}");
  if (fine === -1) return { blocco, modificato: false };
  const indent = /\n(\s*)[^\s}][^\n]*$/.exec(blocco.slice(0, fine))?.[1] || "    ";
  const prima = blocco.slice(0, fine).trimEnd();
  const separatore = prima.endsWith("{") || prima.endsWith(",") ? "" : ",";
  return {
    blocco: `${prima}${separatore}\n${indent}${campo}: ${serializza(valore)}\n${blocco.slice(fine)}`,
    modificato: true,
  };
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
