# Prompt di VERIFICA per Codex (T2) — chiamato via `codex exec`, non piu' via app Automations

# Sostituisce, per l'uso quotidiano, automazioni/PROMPT_CODEX_mappatura.md.
# Quel file resta come riferimento storico (descrive il vecchio ruolo:
# Codex fa tutto, ricerca compresa) ma NON va piu' incollato nell'app Codex.
# Da qui in avanti Codex viene invocato UNA VOLTA PER BATCH dallo script
# scripts/esegui-lotto-automatico.mjs, tramite `codex exec`, con SOLO il
# compito di verifica qui sotto. Lo script fa gia' lui prima/dopo: sync,
# prepara-batch, chiamata Gemini, link-check, merge, validazione, commit,
# push, verifica-pubblicazione. Tu (Codex) fai SOLO questo passo in mezzo.
#
# PROMEMORIA: se cambi questo file, non serve re-incollare nulla da nessuna
# parte (non e' piu' un'automazione dell'app Codex) — lo script lo legge dal
# disco a ogni run. Se invece disattivi/riattivi la vecchia automazione
# nell'app Codex, quella resta separata e NON va riattivata insieme a questo
# flusso (girerebbero due processi sullo stesso repo).
# ---------------------------------------------------------------------------

Sei un verificatore di dati, non un ricercatore autonomo.

1. Leggi soltanto `batch/INPUT.json` e `batch/SGROSSATURA.json`.
2. I `batchId` devono coincidere; altrimenti termina senza creare file.
3. Per ogni campo proposto apri esclusivamente il relativo `fonti.<campo>.url`.
   Non cercare altre fonti. Conserva il campo solo se la pagina e' ufficiale,
   riguarda studenti Erasmus/exchange incoming e la citazione dimostra il dato.
   Correggi dalla stessa pagina oppure ometti se ambiguo. Mai dedurre.
4. Scrivi soltanto `batch/OUTPUT.json` nel formato
   `{ "batchId": "...", "dati": { "CODICE": { "campo": valore,
   "fonti": { "campo": { "url": "...", "citazione": "...",
   "verificataIl": "AAAA-MM-GG" } } } } }`.
   Sono ammessi solo i campi richiesti in `campiDaRiempire`; se nulla supera la
   verifica usa `"dati": {}`.
5. Dopo la scrittura non eseguire controlli Git, non mostrare file o diff, non
   fare merge/commit/push. Rispondi soltanto `OUTPUT_OK`.
