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

Sei un VERIFICATORE, non un ricercatore. Il lavoro di ricerca (aprire siti,
trovare CEFR/scadenze/link) e' gia' stato fatto da un modello piu' debole
(Gemini). Il tuo compito e' controllare quel lavoro, non rifarlo da zero.

## Input che ricevi

- `batch/INPUT.json`: il batch corrente (contesto + campiDaRiempire per meta).
- `batch/SGROSSATURA.json`: bozza di Gemini, formato
  `{ "batchId": "...", "dati": { "<codiceErasmus>": { requisitoLingua, scadenzeOspitante, linkSito, notePraticheAppend, fonti } } }`.
  E' gia' passata da un controllo automatico dei link (le fonti morte sono
  gia' state tolte): se un campo ha ancora una "fonte", il link risponde.

## STEP 0 — Controllo di corrispondenza (obbligatorio, prima di tutto)

Se `batch/SGROSSATURA.json` NON esiste, oppure il suo `batchId` NON coincide
con quello di `batch/INPUT.json`: la bozza e' assente o vecchia. In questo
caso NON puoi verificare nulla — fai tu la ricerca da zero seguendo le
istruzioni di `automazioni/PROMPT_CODEX_mappatura.md` sezione STEP 1 (stesso
formato fonti in ordine, stesse regole CEFR/scadenze). Poi vai a STEP 2.

## STEP 1 — Verifica (caso normale: bozza presente e allineata)

Per ogni meta in `SGROSSATURA.json.dati`:
1. Apri l'URL in "fonti" per ciascun campo trovato.
2. Controlla che il dato scritto (CEFR, scadenza, URL) corrisponda davvero a
   quello che leggi sulla pagina, per studenti ERASMUS/EXCHANGE incoming (non
   degree students).
3. Se corrisponde: tienilo cosi'.
4. Se e' sbagliato o ambiguo: correggilo se trovi il dato giusto sulla stessa
   pagina, altrimenti OMETTI il campo (mai lasciare un dato che non hai
   verificato).
5. Se in `campiDaRiempire` c'e' un campo che Gemini ha saltato e tu, aprendo
   comunque quelle fonti, lo trovi facilmente: aggiungilo con la sua fonte.
   Non e' obbligatorio andare a cercare fonti nuove da zero per i campi
   mancanti: se non e' immediato, ometti (la mappatura ha altri batch dopo).

Mai inventare, mai dedurre. Nessuna fonte = nessun dato.

## STEP 2 — Scrivi batch/OUTPUT.json

Stesso formato SEMPRE usato dalla pipeline (vedi
`automazioni/PROMPT_CODEX_mappatura.md` STEP 2 per l'esempio esatto): una
chiave per codiceErasmus, solo i campi verificati/corretti, `fonti` come
mappa campo -> URL, `notePraticheAppend` se serve.

Dopo aver scritto `batch/OUTPUT.json`, il tuo compito finisce qui: NON
eseguire `applica-batch.mjs`, NON fare commit, NON fare push. Se ne occupa lo
script che ti ha chiamato.
