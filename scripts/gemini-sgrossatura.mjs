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
// I modelli Gemini 3.x "pensano" prima di rispondere. Il default di
// gemini-3.5-flash e' thinkingLevel=MEDIUM: con il grounding Google Search su un
// intero batch supera i 180s e faceva scattare AbortError a ripetizione, con la
// pipeline che moriva senza mai chiamare Codex (visto il 22/07). Per un compito
// di estrazione dati + citazioni non serve ragionamento profondo: LOW e' molto
// piu' veloce e Codex (T2) verifica comunque ogni dato. Valore REST in
// MAIUSCOLO (MINIMAL|LOW|MEDIUM|HIGH). Override con GEMINI_THINKING_LEVEL.
const THINKING_LEVEL = (process.env.GEMINI_THINKING_LEVEL || "LOW").toUpperCase();
const TIMEOUT_MS = Number(process.env.GEMINI_TIMEOUT_MS || 300000);
const MAX_TENTATIVI = 3;

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
  pagina, "verificataIl": "${OGGI}" }. La citazione deve dimostrare il dato
  ed essere BREVE: al massimo 25 parole, solo il pezzo che dimostra il dato.
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
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY,
      },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        tools: [{ google_search: {} }],
        generationConfig: {
          responseMimeType: "application/json",
          thinkingConfig: { thinkingLevel: THINKING_LEVEL },
        },
      }),
    });
  } catch (errore) {
    if (tentativo < MAX_TENTATIVI && (errore?.name === "AbortError" || errore instanceof TypeError)) {
      const attesaMs = 15000 * tentativo;
      console.log(`Gemini non ha risposto (${errore.name}). Riprovo tra ${attesaMs / 1000}s (tentativo ${tentativo}/${MAX_TENTATIVI})...`);
      await new Promise((r) => setTimeout(r, attesaMs));
      return chiamaGemini(prompt, tentativo + 1);
    }
    throw errore;
  } finally {
    clearTimeout(timeout);
  }

  const erroreTemporaneo = res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504;
  if (erroreTemporaneo && tentativo < MAX_TENTATIVI) {
    const attesaMs = 15000 * tentativo; // backoff: 15s, poi 30s
    console.log(`Gemini HTTP ${res.status} temporaneo. Riprovo tra ${attesaMs / 1000}s (tentativo ${tentativo}/${MAX_TENTATIVI})...`);
    await new Promise((r) => setTimeout(r, attesaMs));
    return chiamaGemini(prompt, tentativo + 1);
  }
  if (!res.ok) {
    throw new Error(`Gemini API errore ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const candidato = data.candidates?.[0];
  const testo = candidato?.content?.parts?.map((p) => p.text).join("") ?? "";
  if (!testo) {
    // Capita con finishReason RECITATION (filtro anti-copyright: il prompt
    // chiede citazioni testuali, ogni tanto il filtro scatta — visto il
    // 16/07) o SAFETY: la generazione e' stocastica, ritentare spesso basta.
    const motivo = candidato?.finishReason || "contenuto assente";
    if (tentativo < MAX_TENTATIVI) {
      const attesaMs = 15000 * tentativo;
      console.log(`Risposta Gemini vuota (${motivo}). Riprovo tra ${attesaMs / 1000}s (tentativo ${tentativo}/${MAX_TENTATIVI})...`);
      await new Promise((r) => setTimeout(r, attesaMs));
      return chiamaGemini(prompt, tentativo + 1);
    }
    throw new Error(`Risposta Gemini vuota dopo tutti i tentativi (${motivo}): ` + JSON.stringify(data).slice(0, 800));
  }
  if (candidato?.finishReason && candidato.finishReason !== "STOP") {
    console.error(`Attenzione: finishReason=${candidato.finishReason} (risposta forse troncata o bloccata).`);
  }

  // Anche una risposta HTTP 200 puo' essere una generazione corrotta (JSON
  // rotto a meta', visto il 16/07): un nuovo tentativo di solito la sana.
  // Il parse sta DENTRO il budget MAX_TENTATIVI cosi' il tetto esterno dei
  // 20 minuti (calcolato per 3 tentativi da TIMEOUT_MS) resta valido.
  try {
    return estraiJson(testo);
  } catch (errore) {
    if (tentativo < MAX_TENTATIVI) {
      const attesaMs = 15000 * tentativo;
      console.log(`Risposta Gemini non-JSON (${errore.message}). Riprovo tra ${attesaMs / 1000}s (tentativo ${tentativo}/${MAX_TENTATIVI})...`);
      await new Promise((r) => setTimeout(r, attesaMs));
      return chiamaGemini(prompt, tentativo + 1);
    }
    const fallimento = new Error("Risposta Gemini non-JSON dopo tutti i tentativi.");
    fallimento.rispostaGrezza = testo;
    throw fallimento;
  }
}

function estraiJson(testo) {
  // Con la ricerca Google integrata il modello a volte incornicia la risposta
  // in ```json ... ``` o aggiunge prosa attorno, nonostante le istruzioni:
  // prova il testo ripulito, poi la porzione fra la prima "{" e l'ultima "}".
  const pulito = testo.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
  try { return JSON.parse(pulito); } catch {}
  const inizio = pulito.indexOf("{");
  const fine = pulito.lastIndexOf("}");
  if (inizio === -1 || fine <= inizio) throw new Error("Nessun oggetto JSON nel testo.");
  return JSON.parse(pulito.slice(inizio, fine + 1));
}

console.log(`Chiamo Gemini (${MODEL}, thinkingLevel=${THINKING_LEVEL}, timeout ${TIMEOUT_MS / 1000}s) per il batch ${input.batchId} (${input.mete.length} mete)...`);

let output;
try {
  output = await chiamaGemini(PROMPT);
} catch (errore) {
  fs.mkdirSync("batch", { recursive: true });
  const motivo = errore?.rispostaGrezza !== undefined
    ? "Risposta non-JSON dopo tutti i tentativi (vedi batch/GEMINI-RAW.txt)"
    : errore.message;
  if (errore?.rispostaGrezza !== undefined) {
    console.error("Risposta di Gemini non e' JSON valido dopo tutti i tentativi. Salvo il grezzo per ispezione manuale.");
    fs.writeFileSync("batch/GEMINI-RAW.txt", errore.rispostaGrezza);
    console.error("Vedi batch/GEMINI-RAW.txt. Termino senza scrivere SGROSSATURA.json.");
  } else {
    console.error(`Sgrossatura fallita: ${errore.message}`);
  }
  // Traccia leggibile del guasto: la prossima volta il motivo del blocco e'
  // visibile subito (batch, modello, thinkingLevel, timeout) senza ri-fare il
  // debug. File gitignored, ripulito automaticamente al primo run riuscito.
  fs.writeFileSync(
    "batch/ULTIMO-ERRORE-GEMINI.txt",
    `${new Date().toISOString()}\nbatch=${input.batchId}\nmodel=${MODEL}\n` +
    `thinkingLevel=${THINKING_LEVEL}\ntimeoutMs=${TIMEOUT_MS}\nmotivo=${motivo}\n`,
  );
  // Niente process.exit() ne' eccezioni non gestite: con i socket di fetch
  // ancora in chiusura innescano su Windows l'assert libuv
  // "UV_HANDLE_CLOSING" (visto due volte il 16/07).
  process.exitCode = 1;
}

if (output) {
  fs.mkdirSync("batch", { recursive: true });
  // Run riuscito: butta via l'eventuale traccia di un fallimento precedente.
  fs.rmSync("batch/ULTIMO-ERRORE-GEMINI.txt", { force: true });
  // batchId dentro il file: cosi' chi lo consuma dopo (Codex) puo' controllare
  // che la bozza sia per LO STESSO batch corrente e non un residuo vecchio.
  const conBatchId = { batchId: input.batchId, dati: output };
  fs.writeFileSync("batch/SGROSSATURA.json", JSON.stringify(conBatchId, null, 2) + "\n");
  console.log(`batch/SGROSSATURA.json scritto (batch ${input.batchId}): ${Object.keys(output).length} mete con almeno un dato trovato.`);
  console.log("Pronto per la verifica di Codex (T2) -> node scripts/verifica-link.mjs, poi Codex.");
}
