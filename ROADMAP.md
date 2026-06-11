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

### ONDATA B — Post-selezione: gli utenti di oggi (luglio–settembre 2026)

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
2. Lavorare su UN solo blocco per sessione; non anticipare ondate future.
3. Rispettare le due regole d'oro (codice/dati separati; zaino unico).
4. Niente framework, build step, backend, account: restano fuori scope.
5. A fine sessione: aggiornare `STATO_DEL_SITO.md` e spuntare il blocco qui.
6. Ogni nuovo dato inserito deve avere fonte verificabile (link/PDF in `/fonti`).

## COSA RESTA FUORI (confermato, non riaprire senza trazione)

Account/login, server/database, app native, PWA con notifiche, più di 2
atenei, monetizzazione. Motivazioni in `PROGETTO_ERASMUS.md` §4.
