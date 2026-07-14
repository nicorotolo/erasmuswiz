# AUTOMAZIONE GEMINI + CODEX — pipeline mappatura in un unico processo automatico

> Scritto il 2026-07-09 con Claude, rivisto lo stesso giorno dopo la
> decisione di Nicola: Codex RESTA nella pipeline come verificatore (T2), non
> viene eliminato. Cambia solo COME viene invocato: non più tramite l'app
> Codex con la sua automazione a orario (ogni ~9 min), ma dentro lo stesso
> script che chiama anche Gemini — un unico processo lineare, un batch alla
> volta. Gira sul PC dedicato sempre acceso (quello dove oggi gira Codex),
> non su questo PC di lavoro.

## Cosa fa

Un solo comando (`node scripts/esegui-lotto-automatico.mjs`) tratta UN batch
da cima a fondo, senza intervento umano, Gemini E Codex incatenati:

1. `inizia-batch.mjs` — sync, lock, prepara `batch/INPUT.json` (già esistente).
2. `gemini-sgrossatura.mjs` — **nuovo**, T1. Chiama l'API Gemini (con
   ricerca Google integrata) al posto tuo: niente più copia-incolla in AI
   Studio. Scrive una BOZZA in `batch/SGROSSATURA.json`.
3. `verifica-link.mjs` — **nuovo**. Controlla via HTTP che ogni fonte citata
   nella bozza sia raggiungibile; scarta i campi con link morto (meglio "non
   trovato" onesto che un dato con fonte rotta) — così Codex parte già pulito.
4. **`codex exec` — T2, Codex verifica.** Lo script chiama la CLI di Codex in
   modalità non interattiva (non l'app con l'automazione a orario) con il
   prompt in `automazioni/PROMPT_CODEX_verifica.md`: apre le fonti della
   bozza, controlla che il dato corrisponda davvero, corregge se serve, e
   scrive il vero `batch/OUTPUT.json`. Se la bozza manca o è vecchia, Codex fa
   ricerca da zero come faceva prima (fallback di sicurezza).
5. `valida-output-batch.mjs` rifiuta output vecchi, campi fuori scope e dati
   privi di URL ufficiale, citazione o data; poi `applica-batch.mjs` e
   `valida-stato.mjs` eseguono merge e controlli deterministici.
6. Commit + push del branch `mappatura/lotto-...` + `verifica-pubblicazione.mjs`.

**La vecchia automazione "app Codex ogni 9 minuti" va disattivata** (Codex
app → Automations) prima di usare questo script: altrimenti due processi
toccherebbero lo stesso repo in parallelo e rischiano di scontrarsi sullo
stesso branch/worktree. `automazioni/PROMPT_CODEX_mappatura.md` resta solo
come riferimento storico (descrive il vecchio ruolo "Codex fa tutto").

## Perché così

Verificare è 3-5 volte più leggero che cercare da zero (principio già scritto
in `DISEGNO_PIPELINE_DATI.md`): spostando la ricerca su Gemini e
lasciando a Codex solo la verifica, il consumo di credito Codex/ChatGPT Plus
per batch dovrebbe scendere molto — è esattamente questo che deve risolvere
il "finisco i token". Non è comunque garantito al 100% (l'uso di `codex exec`
attinge allo stesso monte crediti Plus dell'app, non è un pool separato):
nella Fase 1 (test manuale) guarda quanto consuma un batch verificato rispetto
a uno cercato da zero, per avere un numero vero invece di una stima.

## Fase 0 — Setup una tantum (lo fai tu, non posso farlo per te)

1. Vai su [Google AI Studio](https://aistudio.google.com), sezione API keys.
2. Crea un progetto Google Cloud (o usane uno esistente), attiva la
   fatturazione e configura avvisi/limiti di spesa. Quote e prezzi cambiano:
   controlla sempre il pannello Usage di AI Studio invece di assumere costo zero.
3. Genera una API key.
4. Sul **PC dedicato**, salva la variabile per lo stesso utente Windows che
   eseguira' il task (non serve amministratore):
   - Prompt dei comandi (`cmd`): `setx GEMINI_API_KEY "LA-TUA-CHIAVE"`
   - PowerShell, su una riga:
     `[Environment]::SetEnvironmentVariable('GEMINI_API_KEY','LA-TUA-CHIAVE','User')`
   - Chiudi e riapri il terminale. In `cmd` verifica senza mostrare la chiave:
     `if defined GEMINI_API_KEY (echo Chiave presente) else (echo Chiave assente)`
5. **Mai** mettere la chiave in un file dentro il repo (verrebbe pubblicata su
   GitHub). Vive solo come variabile d'ambiente sul PC dedicato.
6. Conferma che Node.js sia installato sul PC dedicato (quasi certo, essendo
   già usato dagli script della pipeline): `node --version`.
7. **Codex CLI** (diversa dall'app Codex che usi oggi con l'interfaccia
   grafica, anche se stesso prodotto OpenAI): sul PC dedicato, installa/
   verifica la CLI (`codex --version`) e fai login col TUO account ChatGPT
   Plus (non con una API key separata: vuoi che consumi il credito già
   incluso nel piano, non un pagamento a parte).
8. **Disattiva la vecchia automazione Codex a orario** (app Codex →
   Automations → quella che gira ogni ~9 minuti su questo repo): da qui in
   avanti Codex viene invocato solo dallo script, non più da solo.

## Fase 1 — Test manuale (prima di pianificare qualsiasi cosa)

Sul PC dedicato, dalla cartella del repo:

```
node scripts/esegui-lotto-automatico.mjs --preflight --online
```

Deve terminare con `PREFLIGHT OK`. Solo dopo:

```
node scripts/esegui-lotto-automatico.mjs
```

Guarda l'output: quante mete ha trovato Gemini, cosa ha scartato
`verifica-link.mjs`, cosa ha corretto/confermato Codex in fase di verifica, se
il push è andato a buon fine. Poi apri 2-3 fonti citate a mano e confronta col
dato scritto — è il tuo primo campione T3. Segna anche quanto credito
Codex/ChatGPT Plus ha consumato questo run "solo verifica": è il numero che
serve per sapere se il problema dei token è davvero risolto.

## Fase 2 — Pianificazione (Task Scheduler)

Solo dopo un test manuale riuscito:

1. Apri "Utilità di pianificazione" (Task Scheduler) sul PC dedicato.
2. Nuova attività, trigger giornaliero (orario a scelta, es. 21:00).
3. Azione: avvia programma
   - Programma: `powershell.exe`
   - Argomenti: `-NoProfile -ExecutionPolicy Bypass -File "<REPO>\scripts\esegui-lotto-pianificato.ps1"`
   - Percorso di partenza: la cartella del repo su quel PC.
4. "Esegui anche se l'utente non ha effettuato l'accesso" se vuoi che giri col
   PC bloccato (serve comunque acceso).
5. In "Se l'attivita' e' gia' in esecuzione" scegli **Non avviare una nuova
   istanza**. I log finiscono in `%LOCALAPPDATA%\ErasmusWiz\logs`.

Se un run non trova batch pendenti o un altro run è in corso, lo script esce
pulito senza fare danni (exit code 0): pianificarlo ogni giorno anche "a
vuoto" non è un problema.

## Cosa NON cambia

- `mappatura-stato.json`, `valida-stato.mjs` e
  `verifica-pubblicazione.mjs` restano i gate autorevoli.
- Il caso `nuovo_dipartimento`: se il seed umano esiste, lo script esegue
  automaticamente setup, validazione e pubblicazione; se manca, termina senza
  inventare o creare destinazioni.
- Il campionamento umano T3 resta tuo (nessuno script lo sostituisce, ed è
  giusto così: è il controllo di qualità finale sul dato che può costare un
  anno a uno studente).

## Se qualcosa va storto

- **429 ripetuti da Gemini**: hai superato il limite di richieste al minuto.
  Lo script ritenta da solo (backoff), ma se fallisce dopo 5 tentativi vuol
  dire che il rate limit gratuito è troppo stretto per oggi: riprova domani,
  non serve intervento.
- **Push fallito**: quasi certamente un conflitto/branch residuo. Controlla a
  mano su GitHub; non far ripartire lo script finché non è risolto (rischio
  branch doppi).
- **`batch/GEMINI-RAW.txt` presente**: Gemini ha risposto con testo non-JSON.
  Aprilo, capisci cosa ha risposto (spesso basta aggiustare il prompt), poi
  cancella il file e rilancia.
- **`codex exec` resta appeso senza rispondere**: quasi certo che stia
  chiedendo un'approvazione interattiva (permesso di scrittura/comando) che
  nessuno può dargli in automatico. Verifica che il flag `--sandbox
  workspace-write` sia presente nel comando dentro `esegui-lotto-automatico.mjs`
  — senza, Codex aspetta un umano e lo script si blocca.
- **Codex esaurisce comunque il credito Plus anche solo verificando**: se
  succede nonostante il carico ridotto, è il segnale per riconsiderare (upgrade
  di piano, o passare `codex exec` a un'API key separata — a pagamento,
  vedi la stima costi in `DISEGNO_PIPELINE_DATI.md`/chat con Claude del 09/07).
