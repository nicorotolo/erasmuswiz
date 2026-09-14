#!/usr/bin/env node
// Redesign v4 (PLAN_REDESIGN_V4.md, Fase 0 punto 2): la fonte di verità dei
// token è `:root` di css/style.css. Questo script
//   --estrai                 stampa il blocco token pronto da incollare (canvas)
//   --canvas <file...>       verifica che ogni file contenga il blocco IDENTICO
//   --design-tokens          elenca le variabili di design/tokens/*.css che
//                            divergono da style.css (stesso nome, valore diverso)
// Esce con codice 1 su qualunque divergenza.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INIZIO = "/* token-runtime:inizio */";
const FINE = "/* token-runtime:fine */";

function bloccoRoot(css) {
  const i = css.indexOf(":root {");
  if (i < 0) throw new Error(":root non trovato in css/style.css");
  let prof = 0;
  for (let j = css.indexOf("{", i); j < css.length; j++) {
    if (css[j] === "{") prof++;
    else if (css[j] === "}" && --prof === 0) return css.slice(i, j + 1);
  }
  throw new Error(":root non chiuso");
}

function variabili(testo) {
  const senzaCommenti = testo.replace(/\/\*[\s\S]*?\*\//g, "");
  const mappa = new Map();
  for (const m of senzaCommenti.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    mappa.set(m[1], m[2].replace(/\s+/g, " ").trim());
  }
  return mappa;
}

export function bloccoToken() {
  const css = fs.readFileSync(path.join(RADICE, "css/style.css"), "utf8");
  const vars = variabili(bloccoRoot(css));
  const righe = [...vars].map(([k, v]) => `  ${k}: ${v};`);
  return `${INIZIO}\n:root {\n${righe.join("\n")}\n}\n${FINE}`;
}

const [modo, ...argomenti] = process.argv.slice(2);
if (modo === "--estrai") {
  process.stdout.write(bloccoToken() + "\n");
} else if (modo === "--canvas") {
  const atteso = bloccoToken();
  let errori = 0;
  for (const f of argomenti) {
    const t = fs.readFileSync(f, "utf8");
    const a = t.indexOf(INIZIO), b = t.indexOf(FINE);
    const trovato = a >= 0 && b > a ? t.slice(a, b + FINE.length) : null;
    if (trovato !== atteso) { errori++; console.error(`DIVERGE: ${f}`); }
  }
  console.log(`${argomenti.length - errori}/${argomenti.length} file allineati ai token runtime`);
  process.exit(errori ? 1 : 0);
} else if (modo === "--design-tokens") {
  const runtime = variabili(bloccoRoot(fs.readFileSync(path.join(RADICE, "css/style.css"), "utf8")));
  const dir = path.join(RADICE, "design/tokens");
  let errori = 0;
  for (const f of fs.readdirSync(dir).filter(n => n.endsWith(".css"))) {
    for (const [k, v] of variabili(fs.readFileSync(path.join(dir, f), "utf8"))) {
      if (runtime.has(k) && runtime.get(k) !== v) {
        errori++; console.error(`${f}: ${k} = ${v}  (runtime: ${runtime.get(k)})`);
      }
    }
  }
  console.log(errori ? `${errori} divergenze` : "design/tokens allineato");
  process.exit(errori ? 1 : 0);
} else {
  console.error("uso: confronta-token.mjs --estrai | --canvas <file...> | --design-tokens");
  process.exit(2);
}
