// scripts/lib-pdf.mjs
import { inflateSync } from "node:zlib";

function decodificaLetterale(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "\\") { out += s[i]; continue; }
    const n = s[++i];
    if (n == null) break;
    if (n === "n") out += "\n";
    else if (n === "r") out += "\r";
    else if (n === "t") out += "\t";
    else if (/[0-7]/.test(n)) {
      let ottale = n;
      while (ottale.length < 3 && /[0-7]/.test(s[i + 1])) ottale += s[++i];
      out += String.fromCharCode(parseInt(ottale, 8));
    } else if (n !== "\r" && n !== "\n") out += n;
  }
  return out;
}

function tokensPdf(testo) {
  const out = []; let i = 0;
  while (i < testo.length) {
    if (/\s/.test(testo[i])) { i++; continue; }
    if (testo[i] === "(") {
      let profondita = 1, j = ++i, escaped = false;
      for (; i < testo.length && profondita; i++) {
        if (escaped) { escaped = false; continue; }
        if (testo[i] === "\\") { escaped = true; continue; }
        if (testo[i] === "(") profondita++;
        if (testo[i] === ")") profondita--;
      }
      out.push({ tipo: "testo", valore: decodificaLetterale(testo.slice(j, i - 1)) }); continue;
    }
    if (testo[i] === "<" && testo[i + 1] !== "<") {
      const fine = testo.indexOf(">", ++i); if (fine < 0) break;
      const hex = testo.slice(i, fine).replace(/\s/g, "");
      out.push({ tipo: "testo", valore: Buffer.from(hex.length % 2 ? `${hex}0` : hex, "hex").toString("latin1") }); i = fine + 1; continue;
    }
    if ("[]".includes(testo[i])) { out.push({ tipo: testo[i++] }); continue; }
    const m = /^[^\s\[\]()<>]+/.exec(testo.slice(i));
    if (!m) { i++; continue; } out.push({ tipo: "altro", valore: m[0] }); i += m[0].length;
  }
  return out;
}

function testoFlusso(flusso) {
  const token = tokensPdf(flusso); const out = []; let pila = [];
  for (let i = 0; i < token.length; i++) {
    const t = token[i];
    if (t.tipo === "testo") { pila.push(t.valore); continue; }
    if (t.tipo === "[") { pila.push("["); continue; }
    if (t.tipo === "]") { pila.push("]"); continue; }
    const op = t.valore;
    if (op === "Tj" || op === "'" || op === "\"") { const v = [...pila].reverse().find((x) => typeof x === "string" && x !== "["); if (v) out.push(v); if (op !== "Tj") out.push("\n"); pila = []; continue; }
    if (op === "TJ") { let spazio = false; for (const x of pila) { if (x === "[" || x === "]") continue; if (typeof x === "string") { if (/^-?\d+(?:\.\d+)?$/.test(x)) spazio ||= Number(x) < -100; else { if (spazio) out.push(" "); out.push(x); spazio = false; } } } pila = []; continue; }
    if (["Td", "TD", "T*"].includes(op)) { out.push("\n"); pila = []; continue; }
    if (/^-?\d+(?:\.\d+)?$/.test(op)) { pila.push(op); continue; }
    pila = [];
  }
  return out.join("");
}

export function testoDaPdf(buffer) {
  if (!Buffer.isBuffer(buffer) || !buffer.subarray(0, 5).toString("latin1").startsWith("%PDF")) return null;
  let testo = ""; const re = /<<(?:[^>]|>(?!>))*\/FlateDecode(?:[^>]|>(?!>))*>>\s*stream\r?\n/g;
  let m;
  while ((m = re.exec(buffer.toString("latin1")))) {
    const inizio = m.index + m[0].length; const fine = buffer.indexOf(Buffer.from("endstream"), inizio);
    if (fine < 0) continue;
    try { testo += testoFlusso(inflateSync(buffer.subarray(inizio, fine)).toString("latin1")) + "\n"; } catch { /* flusso non leggibile */ }
  }
  testo = testo.replace(/\s+/g, " ").trim();
  const nonStampabili = [...testo].filter((c) => c.charCodeAt(0) < 32 && !/\s/.test(c)).length;
  return testo.length >= 200 && nonStampabili * 10 <= testo.length ? testo : null;
}
