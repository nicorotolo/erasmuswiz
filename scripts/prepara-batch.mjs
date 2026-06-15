// prepara-batch.mjs — IMBUTO IN INGRESSO.
// Legge mappatura-stato.json + il fileJs del dipartimento corrente ed estrae
// SOLO il prossimo batch, con SOLO i campi-contesto e l'elenco dei campi da
// riempire. Scrive batch/INPUT.json (pochi KB invece di ~100 KB di JS).
//
// Uso:  node scripts/prepara-batch.mjs
// Esce con codice 2 se non c'è nessun batch pendente (così la Action può
// terminare pulita senza aprire PR).

import fs from "node:fs";
import {
  leggiStato, spanMeta, valoreCampo, campoVuoto,
  CAMPI_RIEMPIBILI, CAMPI_CONTESTO,
} from "./lib-mete.mjs";

const stato = leggiStato();
const batch = (stato.prossimiBatch || [])[0];

if (!batch) {
  console.log("Nessun batch pendente in mappatura-stato.json.");
  process.exit(2);
}

const dip = batch.dipartimento;
const fileJs = stato.statoDipartimenti?.[dip]?.fileJs;
if (!fileJs) throw new Error(`Dipartimento senza fileJs: ${dip}`);

const text = fs.readFileSync(fileJs, "utf8");

// Quali campi cercare in base al tipo del batch.
const tipo = batch.tipo || "scadenze+lingua";
const cercaLingua = tipo.includes("lingua");
const cercaScadenze = tipo.includes("scadenze");

// Codici unici nell'ordine del batch (un codice può avere più blocchi: per la
// ricerca basta una voce, i dati valgono per tutti gli accordi dell'ateneo).
const codiciUnici = [...new Set(batch.mete)];

const mete = codiciUnici.map((codice) => {
  const { start, end } = spanMeta(text, codice); // primo blocco = contesto
  const blocco = text.slice(start, end);

  const contesto = {};
  for (const campo of CAMPI_CONTESTO) {
    const raw = valoreCampo(blocco, campo);
    if (raw != null) {
      try { contesto[campo] = JSON.parse(raw); } catch { contesto[campo] = raw; }
    }
  }
  const daRiempire = CAMPI_RIEMPIBILI.filter((campo) => {
    if (campo === "requisitoLingua" && !cercaLingua) return false;
    if (campo === "scadenzeOspitante" && !cercaScadenze) return false;
    return campoVuoto(valoreCampo(blocco, campo));
  });
  return { ...contesto, campiDaRiempire: daRiempire };
});

const input = {
  batchId: batch.id,
  dipartimento: dip,
  tipo: batch.tipo,
  fileJs,
  istruzioni:
    "Per ogni meta cerca SOLO i campi in campiDaRiempire su fonti ufficiali. " +
    "Restituisci batch/OUTPUT.json: per ogni codiceErasmus un oggetto con i " +
    "campi trovati (requisitoLingua/scadenzeOspitante/linkSito), opzionale " +
    "notePraticheAppend (testo da aggiungere dopo ' || '), e fonti{campo:url}. " +
    "Mai inventare: se un dato non si trova, ometti il campo.",
  mete,
};

fs.mkdirSync("batch", { recursive: true });
fs.writeFileSync("batch/INPUT.json", JSON.stringify(input, null, 2) + "\n");

const stimaKb = (Buffer.byteLength(JSON.stringify(input)) / 1024).toFixed(1);
console.log(
  `INPUT.json pronto: batch ${batch.id} (${dip}), ${mete.length} mete, ~${stimaKb} KB.`
);
for (const m of mete) {
  console.log(`  - ${m.codiceErasmus}: ${m.campiDaRiempire.join(", ") || "(nulla da riempire)"}`);
}
