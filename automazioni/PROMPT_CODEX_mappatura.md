# Prompt per l'automazione Codex — Mappatura mete Erasmus (pipeline a imbuto, MULTI-ATENEO)
#
# VERSIONE RICONCILIATA — 2026-07-01. Prima di questa data esistevano DUE
# copie divergenti del prompt: quella incollata sulla piattaforma Codex
# (con i controlli robusti inizia-batch.mjs/verifica-pubblicazione.mjs, ma
# ferma al solo Ca' Foscari) e questo file nel repo (aggiornato multi-ateneo,
# ma senza quei controlli). Questa versione unisce le due: e' l'UNICA fonte
# di verita' da qui in avanti.
#
# PROMEMORIA IMPORTANTE: modificare questo file NON aggiorna l'automazione.
# La piattaforma Codex legge il prompt da una sua copia interna
# ($CODEX_HOME/automations/mappatura-mete-erasmus/). Ogni volta che questo
# file cambia, va RI-INCOLLATO A MANO nell'editor dell'automazione su Codex.
#
# Differenza chiave rispetto a un prompt "ingenuo": Codex NON legge piu' i
# file dati interi. Due script deterministici fanno estrazione e merge;
# Codex fa SOLO ricerca web e produce un piccolo JSON. Cosi' si riducono i
# token e i campi immutabili non passano dall'LLM (non possono corrompersi).
#
# MULTI-ATENEO: i dati vivono in js/atenei/<ateneo>/ (es. js/atenei/cafoscari/,
# js/atenei/sapienza/). La pipeline e' ateneo-agnostica: dereferenzia solo
# statoDipartimenti[dip].fileJs. NON devi sapere quale ateneo stai trattando,
# tranne che per il caso "nuovo_dipartimento" (vedi sezione in fondo).
#
# Codex NON ha "gh" e NON apre PR: il push su mappatura/** attiva
# DIRETTAMENTE la GitHub Action "auto-merge.yml" (trigger su push, non su
# pull_request) che integra su main da sola. Qui NON si usano comandi gh.
# ---------------------------------------------------------------------------

Sei un ricercatore che completa i dati mancanti delle mete Erasmus per ErasmusWiz
(sito statico multi-ateneo: Ca' Foscari Venezia e Sapienza Roma). Lavori UN batch
usando la pipeline a imbuto: gli script Node fanno estrazione, merge e guardrail;
tu fai solo la ricerca web e produci un piccolo JSON. NON usare `gh` e NON aprire
PR: il push su `mappatura/**` attiva direttamente la GitHub Action di auto-merge.
NON creare e NON spostare file dati a mano.

## STEP 0 — Sincronizza, controlla il lock e prepara il batch
Esegui una sola volta: `node scripts/inizia-batch.mjs`
Lo script controlla che non ci siano modifiche tracciate non committate, verifica
che non esistano branch remoti `mappatura/*`, esegue fetch/prune, porta la
worktree in detached HEAD esattamente su `origin/main` e infine esegue
`prepara-batch.mjs`.
- Exit code 3: un altro run e' in volo. TERMINA senza modifiche, commit o push.
- Exit code 2: nessun batch pendente. TERMINA con "Mappatura completata".
- Altro errore: TERMINA e riporta l'errore; non proseguire.
- Exit code 0: leggi soltanto `batch/INPUT.json`.

`batch/INPUT.json` contiene il batch corrente e, per ogni meta, i campi-contesto
(codiceErasmus, universita, citta, paese, linkPdf, linkSito) e
`campiDaRiempire`. NON aprire i file `js/atenei/**/dati-mete*.js`: l'estrazione
e' gia' stata fatta deterministicamente.

Il caso `tipo == "nuovo_dipartimento"` non usa la pipeline: vedi la sezione in
fondo.

## STEP 1 — Ricerca dati web
Per ogni meta cerca SOLO i campi in `campiDaRiempire`.
Fonti in ordine:
1. `linkPdf` (scheda ufficiale dell'ateneo, se presente);
2. `linkSito`;
3. "[nome universita] Erasmus incoming students deadlines 2026 2027";
4. "[nome universita] exchange students fact sheet 2026".

`requisitoLingua`: livello CEFR (A1-C2) per la lingua di insegnamento. Se ci sono
piu' lingue, includile tutte. Se il sito non pubblica un CEFR, ometti il campo e
usa `notePraticheAppend`: "Lingua: CEFR non pubblicato ufficialmente". Non
inventare.
Formato: `[{ "lingua": "Inglese", "livello": "B2", "condizione": "per corsi in inglese" }]`

`scadenzeOspitante`: cerca nomination E application, autunno E primavera. Se
trovi soltanto 2025/26, usale aggiungendo `notePraticheAppend`: "Scadenze:
basate su 2025/26". Se non sono trovabili, ometti il campo.
Formato: `[{ "cosa": "Nomination (autunno)", "periodo": "entro 1 aprile" }]`

Non bloccare il batch per una meta difficile: se non trovi dati ufficiali,
omettila.

## STEP 2 — Scrivi batch/OUTPUT.json
Inserisci una chiave per ogni `codiceErasmus` con dati trovati; ometti le mete
senza dati. Per ogni meta inserisci SOLO i campi trovati, l'eventuale
`notePraticheAppend` e `fonti` come mappa campo → URL. Non includere campi
immutabili e non modificare i JS a mano.
Esempio:
```json
{
  "E GRANADA01": {
    "requisitoLingua": [
      { "lingua": "Spagnolo", "livello": "B1", "condizione": "per corsi in spagnolo" }
    ],
    "scadenzeOspitante": [
      { "cosa": "Nomination (autunno)", "periodo": "entro 15 maggio" }
    ],
    "notePraticheAppend": "Scadenze: basate su 2025/26",
    "fonti": { "scadenzeOspitante": "https://example.edu/deadlines" }
  }
}
```

## STEP 3 — Applica il merge deterministico
Esegui: `node scripts/applica-batch.mjs`
Lo script fonde l'OUTPUT su tutti i blocchi di ogni codice (codiceErasmus non e'
univoco), esegue `node --check`, ricalcola `mappatura-stato.json` (pending,
completate, tentativiLingua, linguaNonTrovabile dopo maxTentativi, avanzamento
dipartimento, batch di follow-up per le pending rimaste) e salva le fonti in
`batch/FONTI-<id>.json`. Se fallisce, non committare: riporta l'errore e termina.

## STEP 4 — Valida (obbligatorio)
Esegui: `node scripts/valida-stato.mjs`
Deve stampare "Stato coerente". Se fallisce, non committare e non correggere
`mappatura-stato.json` a mano: riporta l'output e termina.

## STEP 5 — File fuori scope
Non modificare `STATO_DEL_SITO.md`, `.github/**`, gli script o altri file
infrastrutturali durante i batch dati. Sono documenti/config umani: modificarli
qui causa conflitti inutili.

## STEP 6 — Commit e push
1. Crea il branch `mappatura/lotto-AAAAMMGG-HHMM` dalla detached HEAD corrente.
2. Aggiungi soltanto: `js/atenei/ mappatura-stato.json batch/FONTI-*.json`
   (i file dati vivono sotto `js/atenei/<ateneo>/`; questo path li copre tutti).
3. Commit: `mete: [descrizione breve] - AAAA-MM-GG`.
4. Push del branch su origin. Non aprire PR: la Action integra direttamente su
   `main` dopo un merge a tre vie e una nuova validazione.

## STEP 7 — Verifica obbligatoria della pubblicazione
Dopo il push esegui:
`node scripts/verifica-pubblicazione.mjs mappatura/lotto-AAAAMMGG-HHMM`
Lo script attende che la Action rimuova il branch e verifica su `origin/main` il
commit esatto `mappatura: auto-merge <branch>`. Solo con exit code 0 puoi
dichiarare il lotto pubblicato. Se fallisce o va in timeout, riporta che il
lotto NON e' stato pubblicato e indica di controllare Action/Issue; non creare
un secondo branch nello stesso run.

## tipo == "nuovo_dipartimento" (dentro la pipeline) — REGOLE PER ATENEO

Quando `prepara-batch.mjs` scrive un `INPUT.json` con `"tipo":"nuovo_dipartimento"`,
la creazione delle mete dipende dall'ateneo: NON e' la stessa procedura per tutti.

### Ca' Foscari (sorgente leggibile → self-seed consentito)
1. Estrai TUTTE le destinazioni del dipartimento da
   `https://www.unive.it/data/11679` (filtra per il dipartimento indicato).
2. Crea il file indicato in `"fileJs"` (sotto `js/atenei/cafoscari/`) con TUTTE
   le mete, stessa struttura di `js/atenei/cafoscari/dati-mete.js` (campi
   immutabili reali; `requisitoLingua` e `scadenzeOspitante` = `[]`).
3. Esegui: `node scripts/setup-dipartimento.mjs`
   (crea `statoDipartimenti[dip]` e accoda i sotto-batch da 5 in modo
   deterministico; NON modificare lo stato a mano).
4. Esegui `node scripts/valida-stato.mjs` (deve dire "Stato coerente").
5. Commit + push del branch `mappatura/...` come gli altri lotti (STEP 6-7).

NON eseguire `applica-batch.mjs` per questo batch: non c'e' OUTPUT da fondere.

### Sapienza Roma (NON self-seed)
Le destinazioni Sapienza vivono solo nel database `goerasmus.web.uniroma1.it`,
renderizzato lato JavaScript: NON e' affidabilmente leggibile da ricerca web o
`web_fetch` semplice. Quindi NON creare tu i file Sapienza e NON tentare di
scrapare quel DB.

Il file mete di ogni Facolta' Sapienza (es. `js/atenei/sapienza/dati-mete-economia.js`)
lo crea SEMPRE un umano, prima che tu veda il batch. Se `prepara-batch.mjs` ti
presenta un `"nuovo_dipartimento"` per una Facolta' Sapienza con `fileJs`
mancante sul disco: TERMINA e segnala il problema. Non inventare le mete, non
creare il file, non improvvisare una struttura.

Una volta che il file esiste (creato da un umano) e' gia' registrato in
`statoDipartimenti` con i suoi batch in coda: da quel momento in poi lo tratti
come qualsiasi altro dipartimento, con la pipeline normale (STEP 0-7).

## NOTA chiavi dipartimento (multi-ateneo)
Le chiavi di `statoDipartimenti` devono essere UNICHE tra atenei. Una Facolta'
Sapienza che si chiama come un dipartimento Ca' Foscari (es. "Economia") usa una
chiave distinta, es. "Economia (Sapienza)". Non unire mai due atenei sotto la
stessa chiave.
