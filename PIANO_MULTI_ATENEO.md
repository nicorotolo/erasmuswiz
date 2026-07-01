# Piano — Estensione multi-ateneo (Ca' Foscari → Sapienza)

> Decisione confermata (25/06/2026): **una sola automazione generalizzata**, non
> due bot separati. Motivo: pipeline identica fra atenei (doppia manutenzione da
> evitare) e due bot sullo stesso repo = più conflitti di merge.
> Questo file è il documento-bussola del refactor. Aggiornarlo a fine sessione.

## A. Obiettivo

Far sì che, completato Ca' Foscari, la stessa automazione Codex prosegua con la
Sapienza senza riscrivere la pipeline. La continuazione vera è una sola riga di
logica: il bot lavora `prossimiBatch[0]` finché la coda non è vuota → basta
accodare i seed Sapienza **dopo** che il sito sa gestire più atenei.

## B. Scoperta che semplifica tutto

`scripts/prepara-batch.mjs` non conosce l'ateneo: dereferenzia solo
`statoDipartimenti[dip].fileJs`. Quindi la pipeline è **già ateneo-agnostica**.
Il lavoro pesante è sito + dati, non l'automazione.

## C. Sequenza vincolata (NON saltare l'ordine)

| Fase | Cosa | Chi | Automatizzabile? |
|------|------|-----|------------------|
| 0 | Chiudere Ca' Foscari 8/8 (3 dip. residui) | bot | sì (già in corso) |
| 1 | Refactor multi-ateneo sito+dati | Claude + Nicola | NO |
| 2 | Generalizzare pipeline (`nuovo_ateneo`) | Claude | — (codice) |
| 3 | Accodare seed Sapienza → continuazione | bot | sì |

**Caveat onesto:** non esiste un passaggio Ca' Foscari→Sapienza "tutto
automatico". In mezzo c'è il refactor umano (Fase 1): obbligatorio.

## D. Modello dati multi-ateneo (decisione di design)

Approccio a **minima modifica** (coerente con la regola d'oro "smallest reliable
change"): NON nidificare lo stato in `atenei: {...}`. Invece:

- I file dati vivono in `js/atenei/<ateneo>/dati-mete*.js`
  (es. `js/atenei/cafoscari/...`, `js/atenei/sapienza/...`).
- In `mappatura-stato.json`, ogni voce di `statoDipartimenti` aggiunge il campo
  `ateneo` e il suo `fileJs` punta al percorso nuovo. La coda `prossimiBatch`
  resta **unica e condivisa**; ogni batch porta già `dipartimento` + `fonte`,
  si aggiunge `ateneo`.
- `universitaCorrente` (già presente nello stato) resta il puntatore "ateneo in
  lavorazione".

Perché flat e non nidificato: `prepara-batch` segue `fileJs`, quindi non serve
riscriverlo; una coda sola = un lock solo = nessuna collisione fra atenei.

## E. File da creare / modificare

**Fase 1 — sito + dati (umano):**
- Spostare i `js/dati-mete*.js` di Ca' Foscari sotto `js/atenei/cafoscari/`.
- Creare `js/atenei/sapienza/` (vuoto all'inizio; lo riempie il bot in Fase 3).
- `index.html` + JS aggregatore: selettore d'ateneo che carica solo i dati
  dell'ateneo scelto (oggi la catena `concat _meteAll` è cablata su Ca' Foscari).
- Contenuti Sapienza-specifici: bando, scadenze, checklist (diversi da Ca' Foscari).
- Fonti Sapienza: portale Go Erasmus+ (goerasmus.web.uniroma1.it), database
  accordi (accordi-didattica.web.uniroma1.it/goerasmus), bandi per Facoltà.
  Dettagli in `GROUNDWORK-sapienza.md`.

**Fase 2 — pipeline (codice):**
- `scripts/setup-ateneo.mjs` (NUOVO): gemello di `setup-dipartimento.mjs`, un
  livello sopra. Su un seed `tipo:"nuovo_ateneo"` imposta lo scaffolding
  dell'ateneo e accoda i seed `nuovo_dipartimento` delle sue Facoltà.
- `scripts/prepara-batch.mjs`: gestire `tipo:"nuovo_ateneo"` (come già fa per
  `nuovo_dipartimento`) emettendo un task che invoca `setup-ateneo.mjs`.
- `scripts/valida-stato.mjs`: estendere i controlli di coerenza al campo `ateneo`.
- `automazioni/PROMPT_CODEX_mappatura.md`: aggiungere la sezione `nuovo_ateneo`
  (analoga a `nuovo_dipartimento`, ma fonte = uniroma1 e file sotto `js/atenei/`).

**Fase 3 — dati (bot):**
- Accodare in `prossimiBatch` i seed `nuovo_ateneo` (Sapienza). Ordine Facoltà:
  Economia → Giurisprudenza → resto. **Da verificare:** se il bando Economia
  26/27 non è pubblicato, partire da Giurisprudenza.

## F. Trasversale — prima di aggiungere carico

Chiudere la falla dei conflitti di merge su `STATO_DEL_SITO.md` (causa n.1 dei run
rossi). Più atenei = più run = più conflitti se la falla resta aperta.

## G. Test

- Fase 1: aprire il sito in locale, cambiare ateneo dal selettore, verificare che
  carichi i dati giusti e che Ca' Foscari resti invariato.
- Fase 2: `node scripts/prepara-batch.mjs` su un seed `nuovo_ateneo` finto deve
  produrre il task setup senza crash; poi `node scripts/valida-stato.mjs` → "Stato
  coerente".
- Fase 3: un run reale crea i file Sapienza; i run successivi riempiono
  lingua/scadenze fino a "Mappatura completata" su entrambi gli atenei.

## H. Errori comuni

- Accodare i seed Sapienza **prima** della Fase 1 → il bot crea file in una
  struttura che il sito non legge. Ordine obbligato.
- Toccare `STATO_DEL_SITO.md` dagli script → conflitti.
- Dimenticare di sostituire la sezione `nuovo_dipartimento` del prompt Codex
  (TODO ancora aperto sull'altro PC) → i seed non partono.

## I. Stato

- [25/06/2026] Decisione "una automazione" confermata. Piano redatto. In attesa
  che Ca' Foscari chiuda 8/8 prima di iniziare la Fase 1.
- [26/06/2026] **Fase 0 ✅** (Ca' Foscari 8/8 completo, 392 mete).
- [26/06/2026] **GROUNDWORK Sapienza ✅** → `GROUNDWORK-sapienza.md`. Modello dati
  compatibile (Facoltà ≈ dipartimento, area = ISCED). DB accordi è JS-rendered:
  per il seed Fase 3 preferire i PDF destinazioni per Facoltà. CIVIS = come EUTOPIA.
- [26/06/2026] **Fase 1 (sito) ✅** — refactor multi-ateneo fatto e verificato:
  - dati Ca' Foscari → `js/atenei/cafoscari/`; creato `js/atenei/sapienza/` (placeholder).
  - registro `ATENEI{}` in `index.html`; ateneo attivo da localStorage; `app.js` intatto.
  - selettore d'ateneo (Sapienza "(in arrivo)" disabilitata); `const`→`var` nei 4 file.
  - simulazione Node: 392 mete intatte, registro a 2 atenei OK. `node --check` OK.
  - ⏳ DA FARE: test locale a video + `PUBBLICA.bat`.
- [26/06/2026] **Avvio mappatura Sapienza (Giurisprudenza)** — scelta di saltare
  la Fase 2 formale (`setup-ateneo.mjs`): non serve, la pipeline è già
  ateneo-agnostica. Trattate le Facoltà Sapienza come "dipartimenti" con chiave
  univoca `Giurisprudenza (Sapienza)` e `fileJs` sotto `js/atenei/sapienza/`.
  - Seed campione 20/56 mete estratto dal DB `?ambito=IUS` via browser (il DB è
    JS-rendered ma i risultati sono **server-side via parametri URL**: `?ambito=IUS&page=N`).
  - **Economia Sapienza NON ha sedi pubblicate** sul bando 26/27 → rimandata.
  - Fix: `mappatura-stato.json` aveva i percorsi CF vecchi (pre-refactor) →
    corretti + campo `ateneo`. Prompt Codex aggiornato a multi-ateneo.
  - 4 lotti accodati, `valida-stato` coerente. Codex arricchirà lingua+scadenze.
- **Prossimo:** pubblicare; far girare Codex sui 4 lotti Giurisprudenza; validare
  i contenuti provvisori (bando/checklist Sapienza); poi le altre 36 mete
  Giurisprudenza + Economia quando pubblicata. Test con studenti Sapienza.
  Per un nuovo ateneo "vero" servirà comunque Fase 2 (`nuovo_ateneo`).
