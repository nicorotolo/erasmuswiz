# ROADMAP OPERATIVA v2 — ErasmusWiz

> Documento di riferimento per Nicola, Bruno e i modelli Claude (Opus/Sonnet,
> chat o Claude Code). Da leggere a inizio sessione DOPO `CLAUDE.md`,
> `PROGETTO_ERASMUS.md` (bussola v2) e `STATO_DEL_SITO.md`. Quando un blocco
> è completato: spuntarlo qui E aggiornare `STATO_DEL_SITO.md`.
>
> **v2 — riscritta il 2026-07-07** (sessione 29) per allinearla alla bussola
> v2 del 06/07: gerarchia LA > scadenze > lingua > mete, LA Generator killer
> feature, PWA push, SEO subito, pilota L3 con go/no-go, product freeze a
> gennaio 2027, team Nicola+Bruno. La v1 (creata 10/06) è superata; il suo
> storico è compattato in fondo (§STORICO).
>
> **Specifica vincolante delle sessioni OP**: `DISEGNO_OPERATIONS.md` —
> contiene il dettaglio eseguibile di ogni blocco (file, vincoli, test).
> Questa roadmap dice COSA e QUANDO; il disegno dice COME.

---

## IL VINCOLO STRATEGICO: LA STAGIONALITÀ (invariato)

I bandi 2027/28 escono a **gennaio-febbraio 2027**. Il pubblico di massa
arriva allora; fino ad allora si costruisce. Data di lancio target:
**7 gennaio 2027** (PRODUCT FREEZE: da lì solo promozione e dati).
Regola di fase (bussola §7): da gennaio il lavoro si sposta da prodotto a
promozione. Un'eccezione al "nessuno ci guarda fino a gennaio": il **SEO
va online entro l'autunno** — Google impiega mesi a posizionare.

## LE ONDATE (luglio 2026 → maggio 2027)

### ONDATA GATE — Ground truth e verifiche (luglio 2026) ⬅ PRIORITÀ ATTUALE

> Costa pochissimo e sblocca tutto il resto. Owner: Bruno (materiali e mail),
> Nicola (dossier e coordinamento). Nessun codice.

- [ ] **G1. Mail all'ufficio Erasmus** (Bruno, 10 minuti) — DECLASSATA da
  bloccante a CONFERMA: il corpus mail (dossier §1-ter B) documenta la
  prassi reale — prospetto libero via mail, giudicato nel merito →
  scenario A di OP8 confermato. La mail resta utile per ufficializzare
  (la prassi osservata è una facoltà, un anno). Non blocca più nulla.
- [~] **G2. Consegna materiali caso-Bruno** (Bruno) — QUASI COMPLETA al
  07/07: **LA ✅, Change Form ✅, corpus mail ✅** (scoperte nel dossier
  §1-bis e §1-ter: 6 corsi su 8 saltati per NON disponibilità; riunione
  d'asta documentata; flusso prospetto con 2 rimbalzi reali; scadenze
  vissute; D7 risolta, D4 quasi). Restano: ToR + convalida + piano di
  studi (dopo il rientro del 12/07), Word del prospetto se ritrovato,
  risposte D2/D3/D5/D6/A2. OP6 fase 1 e OP8 sono sbloccate.
- [x] **G3. Dossier caso-Bruno** ✅ 2026-07-07 — `DOSSIER_CASO_BRUNO.md`
  creato con l'inventario dei materiali già presenti, la timeline da
  completare e le regole d'uso. Va aggiornato man mano che G2 consegna.
- [ ] **G5. Pipeline dati — lavori una-tantum** (1 sessione Codex/Claude
  Code + script) — eseguire §6 di **`DISEGNO_PIPELINE_DATI.md`** (nuovo
  documento definitivo della pipeline, 07/07): sanare i codici Erasmus
  sintetici (il riuso non li riconosce), aggiungere allo schema
  `linkCatalogo` + `notaDisponibilita`, creare `verifica-link.mjs`,
  riscrivere il prompt Codex come VERIFICATORE (la ricerca passa alla
  sgrossatura gratuita su Gemini, flusso T1→T2). Da qui in poi la
  mappatura segue SOLO quel documento (calendario in §7).
- [ ] **G4. UX5-Sapienza** (Nicola + Claude in chat, 1 sessione) — residuo
  della vecchia ondata UX: scrivere spiegazione/azione/citazione/fonte per
  requisiti e checklist Sapienza (oggi `inVerifica`), partendo da
  INFORMAZIONI_GENERALI_25_26.pdf, dal bando E dal corpus mail (scadenze
  vissute in dossier §1-ter C: accettazione entro 7 giorni, prospetto al
  30/05, LA in piattaforma al 10/07-10/12, cert. frequenza inviato
  dall'host). In più: validare i requisiti lingua delle mete
  Giurisprudenza contro la tabella ufficiale del 28/03/2025 (dossier
  §1-ter A). Validazione finale di Bruno.

### ONDATA MERCATO-1 — Fix, lingua, borsa, SEO, pilota (luglio–settembre 2026)

> Sessioni OP1–OP7, dettagliate in `DISEGNO_OPERATIONS.md` §OP1-OP7.
> Una sessione = un blocco. A settembre: **go/no-go del pilota L3**.

- [x] **OP1. Fix UI dal feedback UX6** ✅ 2026-07-08 — stellina preferiti in
  alto a destra, de-enfatizzare "Portale Sapienza", comunicare il limite 5
  scelte PRIMA del limite; punto "Informazioni importanti" non trovato nel
  codice attuale (segnalato, vedi `STATO_DEL_SITO.md`); 2/55 mete
  Giurisprudenza già correttamente marcate "non trovato dopo ricerca
  approfondita" (nessuna modifica dati necessaria).
- [x] **OP2. Candidatura riformattata da zero** ✅ 2026-07-08 — pagina
  Timeline rimossa (decisione BR7, ridondante); "Ora tocca a te" mostra ora
  la scadenza collegata a ogni passo; gerarchia visiva scadenza/voci
  rinforzata. Logica dati invariata.
- [x] **OP3. Filtro lingua nelle mete** ✅ 2026-07-08 — chip "🗣️ Per la mia
  lingua" tra i filtri esistenti, riusa `punteggioLingua()` del motore di
  compatibilità (nessuna soglia CEFR duplicata); mete non verificabili
  restano visibili con "Lingua da verificare"; senza lingue in profilo il
  chip porta al profilo invece di filtrare a vuoto.
- [x] **OP4. Stima borsa per gruppo-paese** ✅ 2026-07-08 — nuovo
  `dati-borse.js` per ateneo (Sapienza: INFORMAZIONI GENERALI pp. 3-4;
  Ca' Foscari: bando 2026/27 + Allegato 1 INDIRE, entrambi già in `fonti/`,
  nessun dato mancante da chiedere a Nicola); badge nella card meta + blocco
  esteso nel dettaglio con disclaimer datato e fonte.
- [~] **OP5. SEO di base ONLINE** (Nicola + Claude, 2-3 sessioni) — PARZIALE
  2026-07-08: online 2/3 pagine ("come si fa il Learning Agreement
  Sapienza", "requisiti di lingua Erasmus") in `guide/`, + `sitemap.xml` +
  `robots.txt` + link footer; analytics GoatCounter già attivo (esteso alle
  guide). Manca: il racconto caso-Bruno (bloccato, serve il suo ok sul
  testo anonimizzato), Lighthouse SEO ≥90 (da verificare manualmente),
  registrazione Google Search Console (azione umana di Nicola, istruzioni
  in `STATO_DEL_SITO.md`). È SOPRA il social nelle priorità (bussola §7).
- [ ] **OP6. Pilota matching L3 — Giurisprudenza** (Nicola + Claude in chat,
  parallelo, time-boxed) — esperimento su 55 mete con la ground truth di
  Bruno (LA+CF ✅; ToR/convalida in arrivo). La disponibilità dei corsi è
  la dimensione primaria (lezione del Change Form, dossier §1-bis).
  **Go/no-go a SETTEMBRE**: se non convince, si chiude senza rimpianti e
  L1+L2 restano il prodotto. Mai prerequisito dell'MVP.
- [ ] **OP7. Debug 2/55 mete Giurisprudenza non mappate** (Claude Code,
  ½ sessione — accorpabile a OP1).

### ONDATA MERCATO-2 — LA Generator e PWA (ottobre–dicembre 2026)

> Sessioni OP8–OP12, dettagliate in `DISEGNO_OPERATIONS.md` §OP8-OP12.
> Il cuore della v2-mercato. Richiede l'esito di G1/G2.

- [ ] **OP8. LA Generator L1** (Claude Code, 2-3 sessioni) — carichi piano di
  studi → spunti esami → incolli link corsi host → esce Word/PDF pulito con
  disclaimer datato. Forma decisa dall'esito di G1 (generatore vs
  compilatore del template Sapienza). Test sul caso reale Lisbona.
- [ ] **OP9. LA Generator L2 — link cataloghi host** (pipeline dati + Code,
  1-2 sessioni) — per ogni meta il link diretto al catalogo corsi
  dell'ospitante (campo dati nuovo, riempito via pipeline Codex).
- [ ] **OP10. PWA installabile — audit e completamento** (Claude Code,
  1 sessione) — `manifest.json` e `sw.js` (network-first, senza push)
  esistono GIÀ: verificarli, completare icone/installabilità, test su
  telefono reale. SENZA push (separato apposta: rilascio piccolo e
  testabile).
- [ ] **OP11. Notifiche push scadenze** (Claude Code, 2 sessioni) — il motore
  di retention. Framing OBBLIGATORIO fino al microcopy: "Verifica su Relint:
  si avvicina X" — promemoria di controllo, MAI oracolo (bussola §4).
- [ ] **OP12. Pipeline dati bando 27/28** (Nicola + Codex, da novembre) — la
  finestra critica: aggiornamento scadenze/mete sui bandi nuovi appena
  escono. La pipeline deve reggere DA SOLA mentre si sviluppa OP8-11
  (rischio n.4 della bussola). Metodo, livelli e calendario:
  **`DISEGNO_PIPELINE_DATI.md`** (§7 fase G per il refresh); documentare
  il processo annuale in `PROCESSO_AGGIORNAMENTO_ANNUALE.md`.
- [ ] **OP13. Warm-up social** (Bruno, da dicembre) — contenuti leggeri
  ("cosa avrei voluto sapere", errori comuni, scadenze). Owner con nome e
  cognome: Bruno. Dettagli nel `PLAYBOOK_TEAM.md`.

### ONDATA LANCIO — Product freeze e promozione (gennaio 2027)

- [ ] **L1. PRODUCT FREEZE (7 gennaio)** — da qui nessuna feature nuova.
  Solo: correzione bug, dati, promozione.
- [ ] **L2. Verifica finale dati** (Nicola + Bruno) — scadenze e mete 27/28
  contro i bandi pubblicati; validazione Bruno su Giurisprudenza.
- [ ] **L3. Seeding canali** (Bruno: Sapienza; Nicola: Ca' Foscari) — gruppi
  WhatsApp/Telegram di corso e canali Erasmus; il messaggio lo scrive uno
  studente, non "l'azienda". Social a pieno regime.

### ONDATA BANDO — Misura (febbraio–aprile 2027)

- [ ] **M1. Presidio in stagione** (~1h/giorno tra i due) — analytics,
  segnalazioni errori, risposte nei gruppi.
- [ ] **M2. KPI della bussola §9** — utenti unici per ateneo, % ritorno,
  LA generati, iscrizioni push, condivisioni spontanee.

### BILANCIO — Revisione onesta (maggio 2027)

- [ ] **B1. Confronto con le soglie** (bussola §9: ≥500 unici, ≥30% ritorno,
  ≥50 LA, ≥5 condivisioni spontanee). Sopra → si scala. Sotto → revisione
  del progetto, senza insistenza per inerzia. L'asset dati resta
  valorizzabile in ogni caso (bussola §3-bis).

---

## REGOLE DI INGAGGIO PER I MODELLI (ogni sessione)

1. Leggere in ordine: `CLAUDE.md` → `PROGETTO_ERASMUS.md` (bussola v2) →
   `STATO_DEL_SITO.md` → questa roadmap → il disegno dell'ondata in corso
   (`DISEGNO_OPERATIONS.md` per le sessioni OP).
2. UNA sessione = UN blocco. Non anticipare ondate future, non "già che ci
   sono" — le correzioni non richieste si segnalano, non si eseguono.
3. Regole d'oro (bussola §6): codice separato dai dati; zaino unico
   account-ready; AI mai nel runtime. Unica eccezione architetturale
   ammessa: la PWA (manifest + service worker).
4. Niente framework, build step, backend, account, login.
5. Ogni dato nuovo ha fonte verificabile e disclaimer datato ("Dati
   aggiornati al … — verifica sulla fonte ufficiale").
6. I dati personali di Bruno restano in `fonti/caso-bruno/` (MAI su GitHub);
   nel sito e nei contenuti SEO entra solo materiale anonimizzato.
7. `node --check` su ogni .js toccato; verifica a video (mobile ~390px +
   desktop 1280px, tema chiaro e notte, ENTRAMBI gli atenei).
8. NON eseguire comandi git da bash sul repo (mount OneDrive corrompe
   `.git`): per pubblicare si usano i `.bat` su Windows (`PUBBLICA.bat`).
9. A fine sessione: aggiornare `STATO_DEL_SITO.md` e spuntare il blocco qui.

## COSA RESTA FUORI (bussola §5 — non riaprire senza trazione)

Mappa interattiva ("il dessert"), estensione Chrome guida-Relint, garanzia
depositi, partnership università, account/login/backend, app native,
monetizzazione. NOTA: "PWA con notifiche" era fuori scope nella v1 — la
bussola v2 l'ha portata DENTRO (unica aggiunta architetturale).

---

## STORICO — ondate completate (v1, compattato)

- **ONDATA A — Consolidamento** (giu 2026) ✅ — igiene codice (XSS,
  `annoAccademico`), disclaimer e identità, pubblicazione GitHub Pages
  (https://nicorotolo.github.io/erasmuswiz/), lotto 1 lingue (15 mete),
  validazione bando/checklist Ca' Foscari. Residuo: analytics mai attivato —
  RIENTRA in OP5/M1 (senza numeri non esiste trazione dimostrata).
- **ONDATA UX — Ridisegno** (lug 2026) ✅ UX1-UX5(CF) — onboarding 3 domande,
  home-percorso, fusione scadenze+checklist+.ics, traduttore 3 registri,
  contenuti Ca' Foscari. UX5-Sapienza → G4. UX6 (test con Bruno) ✅ 05/07 —
  esiti nella bussola v2 e in `FEEDBACK_UTENTI.md`; le correzioni → OP1/OP2.
- **ONDATA BRAND** (lug 2026) ✅ BR0-BR7 — token, componenti, hero, onboarding
  vestito, mete+schedina, "Ora tocca a te", zaino 3 capitoli, QA completo.
- **ONDATA B/C (v1)** — assorbite: post-selezione implementata (26/06),
  multi-ateneo fatto (Sapienza 12 Facoltà, 1.126+ mete via pipeline Codex),
  contenuti → G4, test utente → fatto con Bruno (UX6).
