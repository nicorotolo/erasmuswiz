// scripts/gemini-sgrossatura.mjs
// LIVELLO T1 della pipeline dati (vedi DISEGNO_PIPELINE_DATI.md e
// AUTOMAZIONE_GEMINI.md). Sostituisce SOLO il copia-incolla manuale in
// Gemini AI Studio: legge batch/INPUT.json (prodotto da prepara-batch.mjs),
// chiama l'API Gemini con ricerca Google integrata ("grounding") per
// l'INTERO batch in una sola chiamata, e scrive una BOZZA in
// batch/SGROSSATURA.json.
//
// IMPORTANTE: questo NON e' il file finale. batch/SGROSSATURA.json va poi
// verificato da Codex (T2, vedi esegui-lotto-automatico.mjs), che produce lui
// il vero batch/OUTPUT.json. Non saltare la verifica: principio non
// negoziabile della pipeline (un dato sbagliato costa un anno a uno
// studente).
//
// Richiede la variabile d'ambiente GEMINI_API_KEY (vedi setup in
// AUTOMAZIONE_GEMINI.md). Non tocca i batch di tipo "nuovo_dipartimento":
// quelli restano gestiti da un umano/Codex.
//
// Uso:  node scripts/gemini-sgrossatura.mjs

import fs from "node:fs";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Manca la variabile d'ambiente GEMINI_API_KEY. Vedi AUTOMAZIONE_GEMINI.md.");
  process.exit(1);
}

const MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const OGGI = new Date().toISOString().slice(0, 10);

const input = JSON.parse(fs.readFileSync("batch/INPUT.json", "utf8"));

if (input.tipo === "nuovo_dipartimento") {
  console.error(
    "Batch di tipo 'nuovo_dipartimento': questo script non lo gestisce " +
    "(serve un umano o Codex per creare il fileJs). Termino senza fare nulla."
  );
  process.exit(2);
}

const PROMPT = `Sei un assistente di ricerca dati. Per ciascuna universita' partner
nell'elenco JSON qui sotto devi trovare SOLO informazioni verificabili online,
per studenti Erasmus INCOMING. Per ogni partner cerca SOLO i campi elencati nel
suo "campiDaRiempire":

- "requisitoLingua": lingua e livello CEFR richiesti agli incoming, formato
  [{ "lingua": "Inglese", "livello": "B2", "condizione": "per corsi in inglese" }].
  Se ci sono piu' lingue, includile tutte.
- "scadenzeOspitante": scadenze di nomination e application per incoming
  (autunno e primavera se distinte), formato
  [{ "cosa": "Nomination (autunno)", "periodo": "entro 1 aprile" }].
- "linkSito": URL della pagina ufficiale incoming/exchange dell'ateneo partner.
- "linkCatalogo": URL del catalogo corsi per studenti Erasmus/exchange incoming.
- "notaDisponibilita": eventuali facolta', corsi o livelli aperti/esclusi per
  studenti Erasmus/exchange incoming.

REGOLE FERREE:
- Ogni dato deve avere una fonte dentro "fonti", nel formato
  campo -> { "url": URL esatto, "citazione": frase testuale presente nella
  pagina, "verificataIl": "${OGGI}" }. La citazione deve dimostrare il dato.
- Se non trovi un dato con una fonte precisa, OMETTI il campo. NON dedurre,
  NON stimare, NON usare la tua memoria: solo cio' che leggi ora su una pagina
  raggiungibile.
- Non confondere i requisiti per DEGREE STUDENTS con quelli per
  ERASMUS/EXCHANGE: se la pagina non distingue, ometti il campo e segnala il
  dubbio in "notePraticheAppend".
- Se trovi solo scadenze di un anno accademico diverso da 2026/27, usale ma
  aggiungi in "notePraticheAppend": "Scadenze: basate su <anno>".
- Rispondi SOLO con un oggetto JSON (nessun testo attorno, nessun blocco
  markdown), con una chiave per ogni "codiceErasmus" che ha almeno un dato
  trovato. Ometti le mete senza nessun dato. Formato per ogni meta:
  { "requisitoLingua": [...], "scadenzeOspitante": [...], "linkSito": "...",
    "linkCatalogo": "...", "notaDisponibilita": "...",
    "notePraticheAppend": "...", "fonti": {
      "requisitoLingua": { "url": "https://...", "citazione": "...", "verificataIl": "${OGGI}" }
    } }

Ecco l'elenco delle mete (usa SOLO "campiDaRiempire" di ciascuna per capire
cosa cercare):

${JSON.stringify(input.mete, null, 2)}`;

async function chiamaGemini(prompt, tentativo = 1) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120000);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": API_KEY,
    },
    signal: controller.signal,
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      tools: [{ google_search: {} }],
      generationConfig: { responseMimeType: "application/json" },
    }),
  });
  clearTimeout(timeout);

  if (res.status === 429 && tentativo <= 5) {
    const attesaMs = 15000 * tentativo; // backoff: 15s, 30s, 45s, 60s, 75s
    console.log(`Rate limit (429). Riprovo tra ${attesaMs / 1000}s (tentativo ${tentativo}/5)...`);
    await new Promise((r) => setTimeout(r, attesaMs));
    return chiamaGemini(prompt, tentativo + 1);
  }
  if (!res.ok) {
    throw new Error(`Gemini API errore ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const testo = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
  if (!testo) throw new Error("Risposta Gemini vuota o in formato inatteso: " + JSON.stringify(data));
  return testo;
}

function estraiJson(testo) {
  // Il modello a volte incornicia la risposta in ```json ... ```: ripuliamo.
  const pulito = testo.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
  return JSON.parse(pulito);
}

console.log(`Chiamo Gemini (${MODEL}) per il batch ${input.batchId} (${input.mete.length} mete)...`);
const rispostaGrezza = await chiamaGemini(PROMPT);

let output;
try {
  output = estraiJson(rispostaGrezza);
} catch {
  console.error("Risposta di Gemini non e' JSON valido. Salvo il grezzo per ispezione manuale.");
  fs.mkdirSync("batch", { recursive: true });
  fs.writeFileSync("batch/GEMINI-RAW.txt", rispostaGrezza);
  console.error("Vedi batch/GEMINI-RAW.txt. Termino senza scrivere SGROSSATURA.json.");
  process.exit(1);
}

fs.mkdirSync("batch", { recursive: true });
// batchId dentro il file: cosi' chi lo consuma dopo (Codex) puo' controllare
// che la bozza sia per LO STESSO batch corrente e non un residuo vecchio.
const conBatchId = { batchId: input.batchId, dati: output };
fs.writeFileSync("batch/SGROSSATURA.json", JSON.stringify(conBatchId, null, 2) + "\n");
console.log(`batch/SGROSSATURA.json scritto (batch ${input.batchId}): ${Object.keys(output).length} mete con almeno un dato trovato.`);
console.log("Pronto per la verifica di Codex (T2) -> node scripts/verifica-link.mjs, poi Codex.");
