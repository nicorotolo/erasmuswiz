# ROADMAP OPERATIVA — ErasmusWiz

> Documento di riferimento per Nicola e Claude Code. Da leggere a inizio
> sessione insieme a `PROGETTO_ERASMUS.md` (strategia) e `STATO_DEL_SITO.md`
> (stato). Quando un blocco è completato, spuntarlo qui e aggiornare
> STATO_DEL_SITO.md.
>
> **Creato:** 2026-06-10 · **Obiettivo dichiarato:** validare un modello
> replicabile su più università (business potenziale), 3-5 h/settimana.

---

## IL VINCOLO STRATEGICO: LA STAGIONALITÀ

Il bando 2026/27 di Ca' Foscari si è CHIUSO il 25/02/2026. I prossimi
candidati arrivano a **gennaio-febbraio 2027**. Conseguenze:

1. Non c'è fretta di pubblicare il cruscotto "domanda": il pubblico torna a
   gennaio. C'è invece una **finestra di 6 mesi** per fare contenuti,
   post-selezione e preparazione Sapienza con calma.
2. Gli studenti di ADESSO (selezionati 2026/27) sono in fase
   **post-selezione**: learning agreement, alloggio, documenti. Se vogliamo
   utenti veri prima di gennaio, è lì che bisogna costruire.
3. **Data di lancio target: 7 gennaio 2027** (prima dell'apertura
   candidature ~2 febbraio 2027), con dati del bando 2027/28 appena escono.

---

## LE 5 ONDATE (giugno 2026 → marzo 2027)

### ONDATA A — Consolidamento e fondamenta (giugno–luglio 2026)

Obiettivo: sito pubblicato in "soft launch", misurabile, legalmente coperto,
codice irrobustito. ~6 sessioni.

- [x] **A1. Igiene del codice** (Claude Code, 1 sessione) ✅ 2026-06-10
  - Sostituire le interpolazioni `innerHTML` con `textContent`/`createElement`
    dove entrano dati (prevenzione XSS, prerequisito per dati multi-ateneo).
  - Aggiungere campo `annoAccademico` a `dati-scadenze.js` e `dati-bando.js`;
    banner automatico "Dati del bando AAAA/AA" in pagina.
  - Test: pagina identica a prima, banner visibile.
- [x] **A2. Disclaimer e identità** (Nicola + Claude Code, 1 sessione) ✅ 2026-06-10
  - Footer: "Sito non ufficiale, non affiliato a Ca' Foscari. Fa sempre fede
    il bando ufficiale" + link al bando + data ultimo aggiornamento dati.
  - Pagina/sezione "Chi siamo e perché" (3 righe, costruisce fiducia).
- [~] **A3. Pubblicazione soft + analytics** (parziale: pubblicato ✅ 2026-06-10
  su GitHub Pages — https://nicorotolo.github.io/erasmuswiz/ ; manca analytics)
  - ~~Netlify Drop~~ → GitHub Pages (repo nicorotolo/erasmuswiz); valutare
    dominio (~12€/anno) — consigliato: serve per credibilità coi contatti
    istituzionali.
  - GoatCounter o Plausible (script 1 riga, niente cookie banner): senza
    numeri non esiste "trazione dimostrata".
- [x] **A4. Contenuti — lotto 1 lingue** ✅ 2026-06-11 (15 mete top per
  posti×mesi: lingua dalle schede ufficiali dove indicano un livello CEFR,
  scadenze ospitante, link PDF; schede in `fonti/schede/`; 5 mete restano
  "da verificare" con nota e fonte)
  - NON tutte e 57: le **15 mete più richieste** (chiedere ai contatti
    Ca' Foscari quali sono, o usare posti×durata come proxy).
  - Metodo a lotti: scheda apps.unive.it → compilare `requisitoLingua`,
    `scadenzeOspitante`, `linkPdf` → spuntare su un foglio di lavoro.
  - Regola: ogni dato ha la sua fonte (link PDF). Mai "a memoria".
- [x] **A5. Validare bando e checklist** ✅ 2026-06-10 (validati sul PDF del bando, rif. articoli nei file dati)
  - `dati-bando.js` e `dati-checklist.js` sono ancora ESEMPI: verificarli
    riga per riga sul PDF del bando in `/fonti`.

### ONDATA UX — Ridisegno del percorso (luglio–agosto 2026) ⬅ PRIORITÀ ATTUALE

> Decisione 02/07/2026: la UX attuale (4 tab per feature, profilo prima del
> valore, traduzione invisibile) non funziona. Si ridisegna PRIMA del test
> utente; il fratello di Nicola (studente Sapienza Giurisprudenza, reduce dal
> processo Erasmus) testerà la versione NUOVA.
> **Specifica vincolante: `DISEGNO_UX.md`** — Claude Code deve leggerla a
> inizio sessione insieme ai soliti tre documenti. Una sessione = un blocco.

- [x] **UX1. Onboarding 3 domande + valore immediato** ✅ 2026-07-02 (Claude Code, 1 sessione)
  - Al primo accesso: 3 passi a selezione (ateneo → dipartimento/facoltà →
    livello), niente campi di testo; poi atterraggio con "N mete per te +
    prossima scadenza". Lingue NON chieste qui. `ZAINO.onboardingFatto` con
    fallback zaini vecchi. Dettagli in `DISEGNO_UX.md` §3.
  - Test: primo accesso (localStorage pulito) → onboarding → home con numeri
    giusti per entrambi gli atenei; accesso con zaino esistente → NESSUN onboarding.
- [x] **UX2. Home-percorso + nav a 3 tab** ✅ 2026-07-02 (Claude Code, 1 sessione)
  - La home diventa lo stepper delle 4 fasi (stato, domanda-guida, una CTA);
    nav inferiore: Percorso · Mete · Candidatura (→ Partenza se selezionato);
    tab Idoneità e Profilo fuori dalla nav. `DISEGNO_UX.md` §2.
  - Test: le 4 fasi avanzano correttamente (profilo → preferita → checklist →
    selezionato); "Modifica profilo" raggiungibile; nessuna regressione mete.
- [x] **UX3. Fusione Scadenze+Checklist + export calendario** ✅ 2026-07-02 (Claude Code, 1 sessione)
  - Vista "Candidatura" cronologica: card-scadenza con dentro le voci di
    checklist collegate (`scadenzaId` nei dati); bottone "Aggiungi al
    calendario" (.ics generato client-side). `DISEGNO_UX.md` §6.
  - Test: spunte salvate come prima (stesse chiavi zaino); .ics scaricato si
    apre in Google Calendar; voci senza scadenzaId nel capitolo "Quando puoi".
- [x] **UX4. Traduttore a 3 registri (UI) + banner "dati in verifica"** ✅ 2026-07-02 (Claude Code, 1 sessione)
  - Card requisito/checklist: spiegazione+azione visibili, "Cosa dice il
    bando" espandibile con citazione e fonte; se i campi nuovi mancano, la UI
    mostra il testo attuale (retrocompatibile). Banner `inVerifica:true` per
    i dati provvisori (Sapienza). `DISEGNO_UX.md` §4 e §8.
  - Test: requisito con campi nuovi → 3 registri; senza → identico a oggi;
    banner visibile solo con Sapienza attiva.
- [~] **UX5. Contenuti del traduttore** (Nicola + Claude in chat, 2 sessioni)
  - Scrivere `spiegazione`/`azione`/`citazione`/`fonte` per i requisiti e le
    checklist di Ca' Foscari e Sapienza. Lavoro di contenuto, non di Codex.
    Ogni citazione col riferimento all'articolo del bando.
  - ✅ 2026-07-03 (sessione 8): **Ca' Foscari fatta** — 8 requisiti
    (`dati-bando.js`) + 9 voci checklist (`dati-checklist.js`), citazioni
    letterali dal PDF ufficiale, riferimenti Art. 2/5/6/7/8. In più chiuso il
    gap UI: `creaVoceChecklist()` (app.js) ora rende i 3 registri anche sulle
    voci di checklist (UX4 li faceva solo sui requisiti) + 3 righe CSS.
  - [ ] **Resta: Sapienza** (requisiti + checklist, dati ancora `inVerifica`).
    Priorità Giurisprudenza per sbloccare UX6.
- [ ] **UX6. Test con utente reale** (Nicola, 1 sessione) — **sbloccata: BR7 fatta il 2026-07-05**
  - Il fratello (Sapienza, Giurisprudenza) usa la versione nuova senza
    spiegazioni. Osservare: primi 60 secondi, capisce cosa fare dopo?, parole
    non capite. Annotare in `FEEDBACK_UTENTI.md`. Poi sessione correzioni.
  - Primo passaggio informale già fatto (inizio luglio): direzione confermata,
    nessuna nota puntuale. Questo è il test approfondito.

### ONDATA BRAND — Identità visiva + rifiniture (luglio 2026)

> Decisione 04/07/2026, aggiornata dopo l'assessment dello stesso giorno.
> **Specifica vincolante: `DISEGNO_BRAND.md`** (+ design system in `design/`).
> Sessioni BR0–BR7 (rinominate da B0–B7 per non confonderle con l'ONDATA B).
> Una sessione = un blocco. Il sito v2 usa GIÀ i font del brand e una palette
> vicina: BR0 è un riallineamento dei token, non un rifacimento.

- [x] **BR0. Fondamenta** ✅ 2026-07-04 — riallineati i token di `css/style.css` a
  `design/tokens/` (notte `#101b3f`→`#1b377b`, oro `#ffd766`→`#ffb627`,
  raggi/ombre), logo+wordmark SVG nell'header desktop, favicon dal logo-mark.
  Dark mode: adattamento minimo, verificato.
- [x] **BR1. Componenti base** (solo CSS) ✅ 2026-07-04 — bottoni (hover tinta
  più scura + ombra, press translateY(1px) scale(.985)), card cliccabili (lift
  -3px + ombra blu), campi form (focus ring 4px), checklist con check animato
  (`--ease-bounce`), progress bar armonizzate, `prefers-reduced-motion` globale.
  Badge/chip già pill da BR0, nessuna modifica necessaria.
- [x] **BR2. Home e identità** ✅ 2026-07-04 — hero blu notte con Wiz, claim e
  badge "Bando aperto", stepper (icona di stato circolare) e nav ribrandizzati.
  Mascotte convertita in webp trasparente.
- [x] **BR3. Onboarding + Fase 1** ✅ 2026-07-05 — onboarding vestito (Wiz
  pensieroso/saluto, opzioni pill grandi, 3 puntini di progresso discreti);
  fase 1 (idoneità) diventata semaforo — ogni requisito mostra 🟡/✅.
  **Fix coerenza fase 1**: lo stepper marca la fase 1 ✅ solo quando TUTTE
  le auto-verifiche sono spuntate (`ZAINO.autoverifica`), non col solo
  `profiloOk`; fallback verificato (profilo compilato, nessuna spunta →
  fase "▶ attiva").
- [x] **BR4. Mete + Schedina** ✅ 2026-07-05 — card compatte con punteggio mono
  + chip (4a), filtri a chip pill per compatibilità; nuova vista "Le tue 5
  scelte" con slot ordinabili ▲▼ (`ZAINO.schedina`, fallback da
  `metePreferite`, verificato su zaini vecchi). **Fix da assessment: banner
  lingue contestuale** in fase 2 ("Aggiungi le tue lingue per vedere le mete
  compatibili") — era in `DISEGNO_UX.md` §3/§5 e non era mai stato
  implementato, ora chiuso.
- [x] **BR5. Candidatura "prossimi 3 passi"** (5b) ✅ 2026-07-05 — blocco
  "Ora tocca a te" sopra i capitoli con le prime 3 voci non spuntate in
  ordine cronologico; capitoli non imminenti ripiegati in `<details>`.
- [x] **BR6. Zaino (6a) + Desktop (7a)** ✅ 2026-07-05 — fase 4 presentata come
  "Lo zaino" con 3 capitoli Prima/Durante/Dopo (`gruppoZaino`, fallback
  "Prima"); celebrazione blu notte all'ingresso in fase 4 (una sola volta).
  Layout desktop 2 colonne per il tab Candidatura/Zaino (≥1024px), mobile
  invariato; breakpoint 700px→768px consolidati.
- [x] **BR7. QA e chiusura** ✅ 2026-07-05 — regressione completa (2 atenei,
  zaino vecchio simulato, chiaro/scuro, mobile 390px/desktop 1280px,
  export .ics, riordino schedina, `prefers-reduced-motion`, breakpoint
  consolidati): nessun errore console, nessuna richiesta fallita. Meta
  description/OG/Twitter di `index.html` aggiornate (testo neutro
  rispetto all'ateneo, "Oltre 1.900 mete" invece di "Ca' Foscari, 249
  mete"). Pagina Timeline nascosta: confermata ridondante rispetto alla
  Candidatura ma funzionante (non un bug) — rimozione rimandata a
  UX6/correzioni come da spec, non eseguita ora. **Ondata BRAND (BR0-BR7)
  COMPLETATA.**

### ONDATA B — Post-selezione: gli utenti di oggi (luglio–settembre 2026)

> Aggiornamento 02/07/2026: B2 è FATTA (checklist post-selezione implementata
> il 26/06). B1 e B3 sono assorbite da UX5/UX6 (validazione contenuti e test
> utente sulla versione ridisegnata). B4 resta come sessione correzioni post-UX6.

Obiettivo: la checklist post-selezione, unica feature che ha pubblico ADESSO.
È anche il test del prodotto con utenti reali fuori stagione. ~6 sessioni.

- [ ] **B1. Disegno dati post-selezione** (Nicola + Claude in chat, 1 sessione)
  - Intervistare 1-2 studenti selezionati 2026/27 (contatti Ca' Foscari):
    quali passi, quali scadenze, dove si perdono. PRIMA di scrivere codice.
  - Output: `dati-postselezione.js` (passi con fasi: accettazione → learning
    agreement → prima della partenza → all'arrivo).
- [ ] **B2. Implementazione** (Claude Code, 2 sessioni)
  - Lo zaino acquisisce `fase: "domanda" | "selezionato"`; toggle in pagina
    ("Sei stato selezionato?"); la checklist e la timeline cambiano di
    conseguenza. Stessa architettura, nessun nuovo sistema.
- [ ] **B3. Test con utenti veri** (Nicola, 2 sessioni)
  - 2-3 studenti selezionati usano la sezione post-selezione davanti a te
    (o in call con schermo condiviso). Guardare, non spiegare.
  - Annotare in `FEEDBACK_UTENTI.md`: cosa non capiscono, cosa cercano e
    non trovano.
- [ ] **B4. Correzioni dal feedback** (Claude Code, 1 sessione)

### ONDATA C — Sapienza: il test di replicabilità (settembre–novembre 2026)

Obiettivo: il passaggio da "sito di un dipartimento" a "modello". È QUESTO
che valida il business, non le feature. ~8 sessioni.

- [ ] **C1. Raccolta fonti Sapienza** (Nicola, 2 sessioni)
  - Tramite il contatto Sapienza: bando, lista destinazioni, scadenze di UN
    dipartimento/facoltà (uno solo, come per Ca' Foscari).
- [ ] **C2. Refactoring multi-ateneo** (Claude Code, 2 sessioni)
  - Struttura: `js/atenei/cafoscari/dati-*.js` e `js/atenei/sapienza/dati-*.js`
    con lo STESSO schema; selettore ateneo salvato nello zaino.
  - Questo è il test vero della Regola d'oro n.1: se servono modifiche
    pesanti ad `app.js`, lo schema dati va corretto ORA, non alla terza
    università.
  - Misurare e annotare: **quante ore costa aggiungere un ateneo**. È il
    numero che decide se il business sta in piedi.
- [ ] **C3. Dati Sapienza nel formato** (Nicola, 3 sessioni)
- [ ] **C4. Validazione col contatto Sapienza** (Nicola, 1 sessione)

### ONDATA D — Lancio (dicembre 2026–febbraio 2027)

Obiettivo: arrivare all'apertura candidature 2027/28 con dati freschi e un
canale di distribuzione attivo. ~6 sessioni.

- [ ] **D1. Aggiornamento dati bando 2027/28** (Nicola, 2 sessioni)
  - Appena escono i bandi (di solito gennaio): nuove scadenze, nuova lista
    mete, diff con l'anno prima. Documentare il processo in
    `PROCESSO_AGGIORNAMENTO_ANNUALE.md` — sarà la procedura standard.
- [ ] **D2. Distribuzione** (Nicola, 2 sessioni) — un sito senza canale non
  esiste. In ordine di resa:
  1. Gruppi WhatsApp/Telegram/Facebook degli studenti Erasmus dei due atenei
     (chiedere ai contatti studenti di condividere — il messaggio deve
     scriverlo uno studente, non noi).
  2. Rappresentanti degli studenti e associazioni (ESN Venezia/Roma).
  3. SOLO dopo trazione: proporre all'ufficio relazioni internazionali di
     linkarlo (serve il disclaimer A2 e numeri da mostrare).
- [ ] **D3. Presidio in stagione** (Nicola, gen-feb, ~1h/settimana extra)
  - Monitorare analytics, correggere dati segnalati, rispondere ai feedback.
    Aggiungere in pagina un link "Segnala un errore" (mailto o modulo
    Tally/Google Form gratuito).

### ONDATA E — Bilancio e decisione (marzo 2027)

- [ ] **E1. Verifica trazione** contro soglie decise ORA (per non barare poi):
  - ≥500 visitatori unici nella finestra gen-feb 2027;
  - ≥50 zaini con checklist usata (misurabile con 1 evento analytics);
  - ≥5 feedback spontanei.
- [ ] **E2. Decisione:** sopra le soglie → terza università + esplorare il
  terzo pagante. Sotto → capire perché (canale? prodotto? stagione?) prima
  di costruire altro. NON aggiungere feature per compensare la mancanza di
  utenti.

---

## REGOLE DI INGAGGIO PER CLAUDE CODE (ogni sessione)

1. Leggere `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md` e questa roadmap.
   Per le sessioni UX1–UX6 leggere anche `DISEGNO_UX.md` (specifica vincolante).
2. Lavorare su UN solo blocco per sessione; non anticipare ondate future.
3. Rispettare le due regole d'oro (codice/dati separati; zaino unico).
4. Niente framework, build step, backend, account: restano fuori scope.
5. A fine sessione: aggiornare `STATO_DEL_SITO.md` e spuntare il blocco qui.
6. Ogni nuovo dato inserito deve avere fonte verificabile (link/PDF in `/fonti`).

## COSA RESTA FUORI (confermato, non riaprire senza trazione)

Account/login, server/database, app native, PWA con notifiche, più di 2
atenei, monetizzazione. Motivazioni in `PROGETTO_ERASMUS.md` §4.
