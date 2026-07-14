# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-07-14 — sessione 62, Nicola + Codex
(**ORCHESTRATORE AUTOMATICO VERIFICATO SU SETUP SCIENZE STATISTICHE.** Nicola
ha eseguito `node scripts/esegui-lotto-automatico.mjs`: l'intero flusso
unattended ha completato gate, setup deterministico, validazione, commit, push
e verifica della pubblicazione. Scienze Statistiche Sapienza: 38 mete, 16
completate per riuso, 18 scadenze riusate, 2 CEFR non-trovabili ereditati e 2
sotto-batch da 8. Commit dati `3ba5330`, auto-unione verificata su
`origin/main` (`25561c2`). Gemini e Codex non sono stati chiamati perché era
ancora un setup: il consumo token T1→T3 resta da misurare sul primo batch
standard.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 61, Codex (**SETUP POLO DI
LATINA PUBBLICATO E VERIFICATO.** Eseguito un solo gate manuale: selezionato
`setup-polo-latina`, batch speciale con seed umano già pronto e senza ricerca
web. Il setup deterministico ha elaborato 33 mete: 12 completate per riuso di
lingua e scadenze, 2 sotto-batch da 8 creati; stato coerente senza avvisi.
Commit dati `85fda7e` sul branch `mappatura/lotto-20260714-1452`, auto-unione
verificata su `origin/main`. La vecchia automazione resta da mantenere ferma.
Prossimo gate: un solo batch effettivo di ricerca Gemini+Codex.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 60, Codex (**SETUP DIET
SAPIENZA PUBBLICATO E VERIFICATO.** Eseguito un solo gate manuale: selezionato
`setup-inge-elettronica`, batch speciale con seed umano già pronto e senza
ricerca web. Il setup deterministico ha elaborato 26 mete: 17 completate per
riuso di lingua e scadenze, 8 raccolte nel primo sotto-batch; stato coerente
senza avvisi. Commit dati `f63f943` sul branch
`mappatura/lotto-20260714-1449`, auto-unione verificata su `origin/main`. La
vecchia automazione resta da mantenere ferma. Prossimo gate: un solo batch
effettivo di ricerca Gemini+Codex.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 59, Codex (**PRIMO LOTTO REALE
CONTROLLATO RIUSCITO.** Dopo la pausa comunicata della vecchia automazione,
preflight completo online superato (9 script, stato, Codex smoke e Gemini). Il
primo tentativo ha individuato un bug nel parser dei percorsi `git status` e si è
fermato prima del commit; corretto e pubblicato su `main` con commit `71d25ba`.
Ripetuto esclusivamente lo stesso lotto `setup-scienze-politiche`: 24 mete
Sapienza, 11 completate per riuso di lingua e scadenze, 13 pending e 2
sotto-batch creati. Commit dati `a143991`, auto-merge `10e101b`; pubblicazione
verificata su `origin/main`. Nessun batch di ricerca Gemini+Codex ancora
eseguito. Coda attuale: 14 batch.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 58, Codex (**FASE 1
GEMINI+CODEX UNITA A `main`.** Revisionata la pull request **#36**: diff pulito,
sintassi degli script valida, 7/7 test superati e `valida-stato.mjs` coerente
senza avvisi. I due commit della Fase 1 (`b82a2c8` e `3d4c479`) sono stati
pubblicati con fast-forward su `main`; `origin/main` punta a `3d4c479`. Nessun
batch reale eseguito e nessun file dati modificato. Prossimo gate: verificare e
fermare la vecchia automazione multi-ateneo, poi eseguire un solo lotto reale
controllato.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 57, Codex (**FASE 1
GEMINI+CODEX PUBBLICATA IN PULL REQUEST.** Autenticazione GitHub verificata;
creato e pubblicato il branch `codex/fase1-gemini-codex`, commit principale
`b82a2c8` (`Rendi pronta la pipeline Gemini e Codex`) e pull request in bozza
**#36**. Prima del commit sono passati 7/7 test, `valida-stato.mjs`, controllo
diff e preflight completo online con chiamate reali Gemini e Codex. Nessun batch
reale o file dati modificato. Prossimo gate: revisione/merge della PR #36,
pausa della vecchia automazione multi-ateneo e un solo lotto reale controllato.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 56, Codex (**GH INSTALLATA MA
PATH NON ANCORA VISIBILE NEL TERMINALE.** La nuova finestra PowerShell continua
a ereditare un PATH precedente e non risolve il comando `gh`; l'eseguibile è
comunque installato e già verificato in
`%LOCALAPPDATA%\Programs\GitHubCLI\bin\gh.exe`. Prossimo passo: avviare
`gh auth login` tramite percorso assoluto, senza reinstallazione. Nessun branch,
commit, push, PR o dato creato.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 55, Codex (**GITHUB CLI
PORTABILE INSTALLATA.** Rimossa la cartella accidentale `%LOCALAPPDATA%` creata
nel repository usando sintassi cmd dentro PowerShell. Scaricato lo ZIP ufficiale
GitHub CLI 2.96.0 con il workaround Windows `--ssl-no-revoke`, estratto in
`%LOCALAPPDATA%\Programs\GitHubCLI\bin` e aggiunto correttamente al PATH utente;
`gh --version` verificato. Resta solo l'autenticazione interattiva `gh auth
login`. Nessun branch, commit, push, PR o dato creato.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 54, Codex (**INSTALLAZIONE GH
SENZA ADMIN DEFINITA.** L'installazione MSI di GitHub CLI 2.96.0 tramite winget
è stata annullata con exit code 1602 perché Nicola non dispone di privilegi
amministrativi. Scelta la distribuzione ZIP portabile ufficiale da installare
nel profilo utente (`%LOCALAPPDATA%\Programs\GitHubCLI`) e aggiungere al PATH
utente. Nessun branch, commit, push, PR o dato creato; dopo installazione e
`gh auth login` riprendere la pubblicazione della Fase 1.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 53, Codex (**PUBBLICAZIONE FASE 1
FERMATA PRIMA DEL COMMIT.** Verificato che tutte le modifiche presenti nella
worktree appartengono alla nuova automazione Gemini+Codex; remoto GitHub
configurato correttamente su `nicorotolo/erasmuswiz`. La procedura di
pubblicazione non è partita perché GitHub CLI (`gh`) non è installato sul PC,
prerequisito necessario per completare in sicurezza branch, push e pull request.
Nessun branch, commit, push, PR o dato creato. Prossimo passo: installare GitHub
CLI, autenticarsi e riprendere la pubblicazione della Fase 1.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 52, Codex (**AZZERAMENTO CODEX
VERIFICATO.** Dopo l'azzeramento effettuato da Nicola, eseguito il preflight
completo con `--online --codex-smoke`: sintassi dei 9 script OK, repository e
stato coerenti, Codex CLI 0.144.4 autenticato, chiamata reale `codex exec`
riuscita, chiave Gemini presente e modello Gemini 3.5 Flash disponibile.
Risultato finale `PREFLIGHT OK`; il precedente blocco fino al 20/07 non è più
attuale. Nessun batch, dato o branch modificato dal test. Prossimo gate:
pubblicare il codice della Fase 1 su un branch dedicato, fermare la vecchia
automazione multi-ateneo e solo dopo eseguire un lotto reale controllato.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 51, Codex (**FASE 1
GEMINI+CODEX IMPLEMENTATA E VERIFICATA LOCALMENTE.** Completati schema esteso
(`linkCatalogo`, `notaDisponibilita`), contratto OUTPUT con fonti strutturate
(URL, citazione, data), validazione stretta anti-output residuo, ramo automatico
`nuovo_dipartimento`, lock locale, staging limitato ai file previsti, log
persistente e wrapper per Task Scheduler. Aggiunti test isolati e report di
copertura: 7/7 test passati, sintassi script e PowerShell valida,
`valida-stato.mjs` coerente e preflight online OK. Codex CLI aggiornato a 0.144.4;
il test reale Codex è fermo esclusivamente dal limite d'uso dell'account fino al
20/07/2026 ore 11:16. Nessun batch reale, dato, branch remoto o attività Windows
creati. Prima dell'avvio completo restano: confermare la chiave Gemini persistente
nel nuovo terminale, pubblicare queste modifiche, sospendere l'automazione
multi-ateneo precedente e ripetere il test Codex quando il credito torna
disponibile.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 50, Codex (**CHECKLIST DI
AVVIO GEMINI+CODEX DEFINITA.** Confermato l'ordine operativo: (1) hardening
degli script e gestione automatica dei 10 setup Sapienza già seedati; (2)
allineamento dello schema alla pipeline definitiva; (3) configurazione chiave
Gemini sul PC dedicato e pausa delle automazioni Codex precedenti; (4) test
manuale setup, poi test manuale di un batch Gemini+Codex con controllo umano;
(5) solo dopo esito positivo, registrazione in Task Scheduler una volta al
giorno, istanza singola e log persistente. Nessuna automazione avviata e nessun
file dati modificato in questa sessione.)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 49, Codex (**AUDIT NUOVA
AUTOMAZIONE GEMINI + CODEX — analisi completata, attivazione non ancora
eseguita.** Verificati `AUTOMAZIONE_GEMINI.md`, `DISEGNO_PIPELINE_DATI.md`,
gli script T0-T2 e lo stato reale locale. Node 24.17 e Codex CLI 0.143 sono
installati; login Codex via ChatGPT attivo; la chiave Gemini presente nella
sessione risponde correttamente e `gemini-3.5-flash` supporta
`generateContent`; sintassi dei tre nuovi script valida; `valida-stato.mjs`
riporta "Stato coerente"; nessun branch remoto `mappatura/*`. **Blocco
principale:** la coda inizia con 10 batch `nuovo_dipartimento` Sapienza e tutti
i relativi seed esistono, ma `esegui-lotto-automatico.mjs` oggi termina senza
eseguire `setup-dipartimento.mjs`: pianificato così resterebbe fermo sul primo
setup. **Gap rispetto alla pipeline definitiva:** `linkCatalogo`,
`notaDisponibilita`, citazioni testuali e data fonte non sono ancora propagati
dallo schema/script; manca inoltre una protezione robusta da `OUTPUT.json`
residuo e da due istanze locali avviate insieme. La chiave è presente solo
nell'ambiente della sessione verificata, non come variabile Machine; nessuna
attività Windows per Gemini/Codex risulta registrata. Automazioni Codex: legacy
`mappatura-mete-erasmus` PAUSED; `mappatura-mete-erasmus-multiateneo` ancora
marcata ACTIVE ma senza thread/run propri trovati, quindi va messa in pausa
prima del nuovo scheduler per eliminare ogni rischio di concorrenza. **Ordine
approvabile:** correggere i guardrail e il ramo setup → completare i lavori
schema della pipeline definitiva → test manuale di un solo lotto con controllo
fonti/costi → solo dopo registrare Task Scheduler con una sola istanza e log.**)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 48, Claude Code (**NUOVA ONDATA
"PERCORSO" PIANIFICATA E APPROVATA — nessun file del sito toccato.** Sessione
/grill-me-codex sul verdetto di Nicola dopo C1–C5: "troppo bambinesco, manca
il percorso, non c'è trasporto". **Atto 1 — grill, 10 decisioni di Nicola**:
(1) il percorso diventa la SPINA DORSALE dell'app; (2) Wiz ridotto a segno
grafico lineare (via render 3D e stelline dall'UI, tono di voce invariato);
(3) mappa d'ingresso con ARCHI DI VOLO animati (movimento gentile,
prefers-reduced-motion rispettato); (4) primo accesso = mappa-scena con
l'onboarding ambientato sul viaggio; (5) modello a DUE MONDI: ingresso
emozionale → DASHBOARD operativa "cabina di pilotaggio" per il profilato
(linea di viaggio in testa + moduli operativi; la mappa lì è solo il widget
"Le tue rotte"); (6) la linea di viaggio SOSTITUISCE la nav a tab; (7) la
nuova ondata assorbe C6+D (la demo LA Generator nasce come stazione del
viaggio, vincoli OP8 invariati), deadline settembre 2026, dati/motore/URL/SEO
intoccabili; (8) PALETTE RIAPERTA — la direzione C decade, costo del terzo
riallineamento accettato consapevolmente; (9) metodo mockup-first: 2 mockup
completi (ingresso+dashboard+itinerario candidatura, chiaro E notte, dati
veri) scelti DA TELEFONO, scelta vincolante; (10) direzioni a confronto:
"Notte cartografica" vs "Orizzonte chiaro". Mete = mappa sincronizzata +
schedina ribattezzata "Le tue rotte"; Candidatura = ITINERARIO A STAZIONI
(dati scadenze e .ics invariati). **Atto 2 — revisione avversariale Codex
(gpt-5.6-terra, codex-cli 0.144.1, sandbox read-only): APPROVED al Round 5;
16 rilievi in 4 round di REVISE, TUTTI accolti**, tra cui: contratto di
navigazione tappa→hash (`#parti` nuovo hash canonico dello zaino; alias
`#checklist` dipendente dallo stato — selezionato→zaino, altrimenti
candidatura; `#parti` pre-selezione = tappa bloccata ma informativa, senza
toggle "selezionato" raggiungibile); **difetto REALE scovato nel codice:
zaino unico `erasmuswiz-zaino` senza campo ateneo** → migrazione
OBBLIGATORIA in P3 a contenitore per-ateneo (archivio al cambio ateneo, mai
applicato al nuovo; migrazione legacy automatica SOLO con corrispondenza
univoca dipartimento+area, altrimenti domanda esplicita allo studente);
criteri prestazioni misurabili in P4 (nessun long task >50 ms, aggiornamento
lista+mappa ≤250 ms post-debounce, 375px CPU 4x, dataset completo);
invarianti SEO sul DOM STATICO COMPLETO della home (l'onboarding è già
nell'HTML, nascosto via CSS — non solo-JS); regola accessibilità mappa
(skip-link, elenco controparte completa, aria-live sul conteggio, focus
espliciti); shell offline PWA definita in P6 e testata in P7 (upgrade cache,
primo avvio offline); fonte colori operativa unica = `css/style.css`
(`design/tokens/colors.css` è documentazione, con controllo di coerenza).
**Deliverable: `PLAN.md` RISCRITTO** (ondata PERCORSO, fasi P0 mockup → P7
QA, supersede i residui MERCATO-UI) + log integrale del confronto in coda a
`PLAN-REVIEW-LOG.md`. **Nicola ha scelto di fermarsi al piano approvato:
nessuna implementazione in questa sessione.** **Prossimo passo: Fase P0 —
2 mockup completi in `design/proposte-percorso-2026-07/` (Notte cartografica
vs Orizzonte chiaro), poi scelta di Nicola DA TELEFONO (vincolante).**)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 47, Claude Code (**FASE C5
IMPLEMENTATA: OG image dedicata (chiude P2.14) + pagina fiducia + guide
allineate + igiene root (30 file spazzatura eliminati).** Eseguito il blocco
C5 di `PLAN.md`. **(1) OG IMAGE DEDICATA — P2.14 CHIUSO**: nuova
`img/og-erasmuswiz.png` (1200×630, 64 KB — budget ≤100 KB rispettato)
generata offline con PIL nello stile notte della direzione C (fondo indigo
`#232046` con gradiente, stelline oro/lavanda tenute FUORI dalla zona testo,
wordmark + tagline "Il tuo cruscotto per l'Erasmus", pillola oro onesta
"Gratuito · Senza account · Dati con fonte", Wiz `wiz-saluto` a destra; font
Segoe UI Bold — Bricolage non è installato sul PC, per una bitmap OG è un
grottesco equivalente); og:image + twitter:image aggiornate su home ed
ENTRAMBE le guide (+ og:image:width/height in home); il vecchio
`wiz-hero.png` (408 KB) ora NON è più referenziato da NESSUN file del sito —
si può eliminare nel blocco igiene con conferma di Nicola. **(2) sw.js
allineato**: la precache non scarica più il PNG da 408 KB a ogni install
(`wiz-esulta.webp` 68 KB al suo posto), cache bump `erasmuswiz-v2`. **(3)
PAGINA FIDUCIA (raccomandata dall'audit)**: nuova `guide/come-funziona.html`
— "Come funziona ErasmusWiz (e chi c'è dietro)": cos'è/cosa non è (strumento
di appoggio, mai canale ufficiale), da dove vengono i dati (fonte+data,
"stima mai promessa", dati in verifica dichiarati), dove finiscono i dati
dello studente (SOLO localStorage, niente account/server, GoatCounter senza
dati personali), chi c'è dietro (progetto indipendente di Nicola Rotolo,
nato da una candidatura reale, codice pubblico su GitHub), quanto costa
(niente, senza pubblicità). Stesso impianto delle guide OP5: canonical,
OG/Twitter con la nuova immagine, JSON-LD FAQPage (3 domande, validato),
GoatCounter, disclaimer datato, riuso `.guida-*`. **GATE PRIVACY
RISPETTATO**: nessun dato personale, nessun racconto caso-Bruno, nessuna
matricola/data personale; il testo "chi c'è dietro" nomina solo Nicola
(già pubblico via GitHub) — **Nicola: rileggi quella sezione prima del
deploy**. **(4) COLLEGAMENTI**: link alla pagina fiducia nel footer di
`index.html` e delle 2 guide (footer incrociati); `sitemap.xml` +1 URL
(4 totali, lastmod 2026-07-14). **(5) CSS**: rimossa graffa orfana a fine
file (residuo OP5, dopo `.guida-footer a`) — token app verificati intatti
dopo la rimozione. **(6) IGIENE ROOT (parte file, da PLAN punto 12)**:
inventario dry-run → eliminati i **30 file a 0 byte** con nomi-frammento di
shell (la lista P3.17 dell'audit + successivi: `Il`, `Una`, `0`, `1`, `s`,
`t`, `{`, `x.codice`, `benvScegliAteneo(k))`…) — erano gli UNICI file a
0 byte in root, nessun altro file toccato; `_smoke.js` (ha contenuto) e le
cartelle legacy `_backup-*`, `v2/`, `chatgpt-project/` NON toccate (il
piano richiede conferma esplicita di Nicola + procedura .bat). **Verifica a
video** (preview di sessione 8001, 375 e desktop; le pagine guida non hanno
tema notte per scelta — statiche): pagina fiducia con token direzione C
(nav `#232046`, CTA `#4F46E5` testo bianco, Bricolage sull'H1), FAQPage
JSON-LD parsato valido, niente scroll orizzontale a 375px; home con OG
nuova + link fiducia (doppio controllo con fetch no-store: il primo giro
leggeva la cache del pannello), guide con OG nuova/link/canonical INVARIATI,
zero errori console; `node --check` su `sw.js` e `js/app.js` OK. **Checklist
SEO**: URL e canonical delle pagine esistenti INVARIATI, GoatCounter su
TUTTE le pagine (fiducia inclusa), sitemap coerente (4 URL), nessun evento
con dati personali. **File nuovi**: `img/og-erasmuswiz.png`,
`guide/come-funziona.html`. **Modificati**: `index.html` (meta OG + 1 link
footer), 2 guide (meta OG + 1 link footer), `sitemap.xml`, `sw.js`,
`css/style.css` (solo graffa orfana). **Eliminati**: 30 file spazzatura a
0 byte in root. **Non toccati**: dati, motore, `js/app.js`, manifest.
**Prossimo passo: Fase C6 — LA Generator UI demo** (vincoli OP8: read-only,
NESSUNA scrittura zaino, mapping molti-a-molti con totali ECTS/CFU, niente
campi codici corso host, placeholder onesto dove manca `linkCatalogo`).)

**Ultimo aggiornamento precedente:** 2026-07-14 — sessione 46, Claude Code (**FASE C4
IMPLEMENTATA: Candidatura + Partenza/zaino nella direzione C — restyle
coerente, impianto OP2 validato NON toccato (verdetto audit "TENERE con
rifinitura").** Eseguito il blocco C4 di `PLAN.md`. **(1) Lo zaino parla la
lingua dei capitoli della candidatura**: ogni capitolo Prima/Durante/Dopo ora
ha una testa-card distinta (bordo sinistro ambra 4px, raggio 16, ombra card —
stesso linguaggio di `.cand-scadenza-card`) con il CONTEGGIO del capitolo
("N di M", pillola mono ambra — al posto del countdown: qui non c'è urgenza)
che si aggiorna a ogni spunta; le voci sotto sono subordinate come in
candidatura (niente cornice propria, indentazione con bordo tratteggiato,
verde solo a voce fatta) — prima erano h2 piatti con sottolineatura oro e
voci-card a piena cornice, più pesanti dei capitoli-scadenza. **(2) Banner
Wiz post-spunta (P2.14, parte in-tab)**: `mostraBannerWiz` ora usa
`img/mascotte/wiz-esulta.webp` (68 KB) al posto di `img/wiz-hero.png`
(408 KB) — il PNG resta SOLO come immagine OG in `index.html` (riallineamento
OG in C5/D, fuori da questo blocco). **(3) Overlay celebrazione accessibile
(P2.16 per questo componente)**: all'apertura il focus va sul bottone "Apri
lo zaino", Escape chiude, alla chiusura il focus torna al toggle "Sono stato
selezionato" (stesso pattern del meta-modal). **(4) Bonifica residui blu
`#1b377b`**: eliminate le 6 occorrenze `rgba(27,55,123,…)` sopravvissute alla
C1 (drop-shadow logo/mascotte, ombra bottone, scrim e ombra del meta-modal,
ombra Wiz celebrazione) → ink direzione C `rgba(30,27,46,…)`. **Impianto NON
toccato**: capitoli-scadenza, "Ora tocca a te", export .ics, toggle fase,
motore temporale, dati checklist/postselezione. **Verifica a video** (preview
di sessione porta 8001, 375×812 e 1280×800, giorno E notte — la voce fatta in
notte dava il verde del giorno: era di nuovo la TRANSITION congelata dal
throttling del pannello, rimisurata con transizioni disattivate:
`rgba(74,222,128,.12)` corretto —, ENTRAMBI gli atenei; gli screenshot del
pannello vanno ancora in timeout, verifica via DOM/computed styles come
C1–C3): Sapienza zaino "Prima 0 di 5"→"1 di 5" alla spunta con banner webp,
candidatura con capitolo-scadenza e "Ora tocca a te" invariati, celebrazione
focus→Escape→focus verificata; Ca' Foscari 3 capitoli ("Prima 2 di 15",
"Durante 0 di 2", "Dopo 0 di 3"), 4 capitoli-scadenza in candidatura;
griglia desktop 712px/320px intatta, niente scroll orizzontale a 375px,
zero errori console. **Checklist SEO**: URL/canonical/sitemap/GoatCounter
NON toccati (`index.html` non toccato). `node --check js/app.js` OK. **File
toccati**: `js/app.js` (renderChecklistPost testa+conteggio+corpo,
mostraBannerWiz webp, celebrazione focus/Escape), `css/style.css` (blocco
ZAINO riscritto, 6 residui blu → ink C). **Non toccati**: dati, motore
compatibilità, index.html, guide. **Prossimo passo: Fase C5 — guide SEO
ristilizzate + eventuale pagina fiducia (gate privacy), accorpabile con
l'igiene repo; poi C6 LA Generator UI demo.**)

**Ultimo aggiornamento precedente:** 2026-07-13 — sessione 45, Claude Code (**FASE C3
IMPLEMENTATA: tab Mete nella direzione C — card/schedina/dettaglio; chiusi
P1.4, P1.6, P1.7, P1.8 + P0.2 + P1.5-strip + debounce P2.15.** Eseguito il
blocco C3 di `PLAN.md`. **(1) Schedina compatta (P1.4)**: a schedina VUOTA
niente più 5 slot a piena larghezza (~1,5 schermate mobile prima delle mete)
ma una riga di invito ("☆ Tocca la stellina… massimo 5, l'ordine conta") —
misurato: il riquadro passa a ~122px; a schedina parziale si mostrano SOLO
gli slot pieni + una riga "puoi aggiungerne altre N"; frecce/rimozione/
riordino invariati. **(2) Icona di stato unica (P1.6)**: il numero-punteggio
resta solo numero, l'icona vive nel nuovo badge-pillola di stato colorato
per categoria (`stato-ok/medio/basso`, semaforo a token esistente, leggibile
in entrambi i temi) — prima le card senza punteggio mostravano 🟡 due volte.
**(3) Nomi normalizzati in presentazione (P1.7)**: nuova `nomeUniversita()` —
title-case SOLO delle parole tutte-maiuscole ("PARIS LODRON UNIVERSITÄT
SALZBURG"→"Paris Lodron Universität Salzburg", "UNIVERSIDAD DE ZARAGOZA"→
"Universidad de Zaragoza"), sigle ≤3 lettere e sigle tra parentesi intatte
("KU Leuven", "(TISEM)", "(AMU)"), preposizioni in minuscolo, nomi già
scritti bene NON toccati; i dati restano intatti (typo alla pipeline) e la
ricerca continua a lavorare sui dati grezzi. Applicata a card, schedina,
titolo dettaglio, tooltip/cluster/aria-label della mappa. **(4) Niente testi
ripetuti (P1.8)**: rimossi da OGNI card "Portale … ↗" e "Tocca per i
dettagli →" (60 ripetizioni); l'affordance ora è del design — cursor
pointer, hover-lift con bordo indigo, freccia "→" in basso a destra che si
accende all'hover; `aria-label` "«nome» — apri il dettaglio" su ogni card;
il link ufficiale vive nel dettaglio (già presente). **(5) P0.2 CHIUSO**: i
codici Erasmus SINTETICI della pipeline (pattern `SAP-`/`CF-`) non compaiono
più nel dettaglio (verificato su entrambi gli atenei); i codici reali
passeranno quando la pipeline li sana. **(6) Strip profilo (P1.5, parte tab
Mete)**: via "Area: 0421" → nuova `nomeAreaProfilo()` mostra la facoltà
("Giurisprudenza · magistrale · Inglese B2"); l'onboarding ora SALVA
`profilo.dipartimento` (campo aggiuntivo, zaini vecchi ok col fallback sul
nome area dai dati). **(7) Debounce ricerca 150ms (P2.15 parziale)**:
verificato 527→7 card dopo il timer, ripristino ok; il cap/"mostra altre"
per il caso senza profilo resta aperto. **Verifica a video** (preview di
sessione, 375×812 e desktop, giorno E notte con reflow forzato — gli
screenshot del pannello vanno ancora in timeout, verifica via DOM/computed
styles come C1/C2 —, ENTRAMBI gli atenei): Sapienza Giurisprudenza 60 card
(pill verde `#e6f6ec`, notte `rgba(74,222,128,.12)` su card solida), stella
→ schedina 2/5 con hint "altre 3", dettaglio Bruxelles senza codice
sintetico e con "Scheda ufficiale (PDF) ↗", Ca' Foscari Economia 39 card
griglia desktop 3 colonne, onboarding simulato salva la facoltà e la strip
la mostra, niente scroll orizzontale a 375px nei due temi, filtri/ricerca/
compatibilità invariati, zero errori console. **Checklist SEO**: URL/
canonical invariati, `index.html`/sitemap/GoatCounter NON toccati.
`node --check js/app.js` OK. **File toccati**: `js/app.js` (nomeUniversita,
nomeAreaProfilo, renderMete card, renderPreferite riscritta compatta,
apriDettaglioMeta P0.2, completaOnboarding +dipartimento, debounce, 3 punti
mappa), `css/style.css` (blocco METE v2: card hover/freccia/badge stato,
schedina a token semantici — leggibile anche in notte dove `--gold-bg` è
traslucido —, rimosse regole morte `.link-scheda-v2`/`.card-dettagli-hint`/
slot vuoti). **Non toccati**: dati mete/bando/scadenze, motore
compatibilità, index.html, guide. **Prossimo passo: Fase C4 — Candidatura +
Partenza/zaino (restyle coerente, impianto OP2 validato resta).**)

**Ultimo aggiornamento precedente:** 2026-07-13 — sessione 44, Codex (**VERIFICA API PUBBLICA Erasmus+ App.**) L’app espone una API documentata: i soli dati pubblici utili al progetto sono anagrafiche di atenei/città, servizi pratici dichiarati dall’ateneo (es. housing/visa/assicurazione) e un vocabolario comune (livelli CEFR, livelli di studio, termini/step generici). Verificato: Sapienza e Ca’ Foscari hanno schede pubbliche. Dati decisivi per ErasmusWiz — accordi specifici, cataloghi esami, CEFR ufficiale delle mete e scadenze host — NON sono disponibili in questa API; requisiti d’application, eventi/offerte e informazioni per ateneo richiedono autorizzazione. Decisione proposta: usarla SOLO nella pipeline offline come controllo/arricchimento secondario, mai come dipendenza runtime e mai come fonte unica; non estrarre né copiare contenuti protetti o testi. Nessun file del sito o dato studente modificato.

**Ultimo aggiornamento:** 2026-07-13 — sessione 43, Codex (**RICOGNIZIONE COMPETITIVA: Erasmus+ App ufficiale UE analizzata.**) Non è un prodotto da imitare né un colpo mortale: è il canale istituzionale europeo per il percorso amministrativo, mentre ErasmusWiz resta lo strumento locale di PREPARAZIONE (mete del proprio ateneo, lingua, scadenze con fonti e bozza del Learning Agreement). È una sovrapposizione parziale: rafforza il confine già scelto “strumento di appoggio, non sostituto”. Rischio da monitorare: una futura integrazione molto profonda dell’ateneo nell’app ufficiale; azione prioritaria invariata: verificare con l’ufficio Erasmus Sapienza la forma ammessa della bozza LA e il flusso OLA. Nessun file del sito o dato studente modificato.

**Ultimo aggiornamento:** 2026-07-10 — sessione 42, Claude Code (**FASE C2
IMPLEMENTATA: home con MAPPA-HERO nel sito vero + bug P0.1 CHIUSO + gerarchia
mobile della home rifatta (P1.10 parziale).** Eseguito il blocco C2 di
`PLAN.md` col disegno di `design/PLAN-FASE-B.md`. **(1) NUOVI DATI CONDIVISI**:
`js/dati-coordinate.js` (45 KB) — lookup città→coordinate GENERATO OFFLINE da
gazetteer manuale con schema del piano (`lat/lon/x/y/precisione`, x/y
PRECALCOLATE, proiezione equirettangolare parallelo 48° con parametri salvati):
**508/511 chiavi risolte = 99,6% delle 1.985 mete** di entrambi gli atenei; i
nomi-città TRONCATI a 7 caratteri del seed (es. "Marseil", "Salzbur" — il
"typo" dell'audit è troncamento sistematico) risolti per prefisso sul nome
locale (precisione "citta-prefisso"); 23 città con coordinate vere ma FUORI
inquadratura (Canarie, Madeira, Islanda, Turchia est, Bodø/Tromsø, Tahiti/
Mayotte) marcate `fuori:true`; le 3 chiavi-spazzatura del seed ("Universidad",
"Universite", "Ustp") restano "senza posizione" per la pipeline. +
`js/dati-mappa-europa.js` (25 KB, 43 paesi, riuso Fase B). **(2) ONBOARDING
SULLA MAPPA (bug P0.1 CHIUSO)**: l'overlay onboarding è stato RIMOSSO
(markup+CSS+JS) e sostituito da `#home-benvenuto` IN PAGINA — stesso flusso a
3 domande (ateneo sui 2 pin di Roma/Venezia o bottoni ridondanti → facoltà da
lista → livello), con le mete della facoltà che si ACCENDONO sulla mappa al
passo 3 e landing con nMete+prossima scadenza; niente più overlay centrato che
tagliava le opzioni: **verificato a 375px che le 17 facoltà Sapienza sono
tutte raggiungibili e cliccabili, Giurisprudenza compresa**. Cambio ateneo:
salva+ricarica con ripresa al passo 2 (meccanismo preesistente, verificato).
**(3) MOTORE MAPPA in `js/app.js`** (regole PLAN-FASE-B): pin = `<button>`
44px in overlay HTML sopra l'SVG con aria-label, cluster per città identica E
per distanza (soglia scalata sulla larghezza, ri-cluster al resize via rAF),
tooltip anteprima solo desktop-hover (università, lingua, stima borsa via
`trovaGruppoBorsa`), tap/click su pin singolo → **il VERO
`apriDettaglioMeta`**, su cluster → elenco nel meta-modal esistente (stessa
chiusura/Escape), nota di copertura onesta sotto la mappa ("N mete non sono
sulla mappa: … le trovi nell'elenco"), rendering dati solo
textContent/createElement. **(4) MAPPA COMPATTA nella home profilata**
(`#card-mappa-home`): SOTTO missione/countdown/preparazione, mete dell'area
del profilo con le preferite stellate (si aggiornano da `renderPreferite`),
link "Elenco completo →" al tab Mete. **(5) GERARCHIA MOBILE HOME RIFATTA**:
il gate 375×667 falliva NON per la mappa ma per il percorso a 4 fasi tra hero
e missione (difetto P1.10) → riordinato il DOM (missione+countdown PRIMA del
percorso; il desktop non cambia: la griglia usa posizioni esplicite,
verificato) → **gate PASSA: missione a 413px nel primo viewport** (countdown
pill legittimamente nascosta a bando chiuso). **Verifica a video** (preview
8001, 375×812/375×667/1280×800, giorno E notte con reflow forzato per il
throttling del pannello — stesso falso-allarme della C1 —, ENTRAMBI gli
atenei): flusso completo nuovo visitatore Sapienza→Giurisprudenza (55 mete,
17 pin/12 cluster a 375px, nota "1 fuori inquadratura"), pin→dettaglio
Olomouc, cluster→"7 mete vicino a Salisburgo"→dettaglio→Escape, landing "60
mete a Giurisprudenza" col messaggio bando-chiuso onesto, home profilata con
mappa compatta (17 pin) e stelle, flusso Ca' Foscari→Economia (58 mete, 31
pin), tema notte con terra #242741/casa indigo e contrasti 14-15:1, griglia
desktop intatta, zero errori console, niente scroll orizzontale.
**Checklist SEO**: URL/canonical invariati, GoatCounter presente, sitemap non
toccata. `node --check js/app.js` OK. Peso: +70 KB di dati mappa (~3% della
pagina; il loader per-ateneo resta P2.13, non di questo blocco). **File
toccati**: NUOVI `js/dati-coordinate.js`, `js/dati-mappa-europa.js`;
`index.html` (sezione benvenuto, card mappa home, riordino
missione/countdown/percorso, overlay onboarding rimosso, 2 script tag);
`js/app.js` (motore mappa ~230 righe, blocco onboarding riscritto come
benvenuto, hook in renderHome/renderPreferite/init); `css/style.css` (blocco
MAPPA+BENVENUTO al posto del blocco overlay onboarding, regola
`modo-benvenuto`). **Non toccati**: dati mete/bando/scadenze, motore
compatibilità, tab Mete/Candidatura, guide. **Prossimo passo: Fase C3 — tab
Mete nella direzione C** (card ridisegnate: difetti P1.4/6/7/8 — schedina
compatta, icona di stato unica, nomi normalizzati, niente testi ripetuti).)

**Ultimo aggiornamento precedente:** 2026-07-10 — sessione 41, Claude Code (**DIREZIONE C
SCELTA DA NICOLA + FASE C1 (FONDAMENTA) IMPLEMENTATA sul sito live.**
**Nicola ha scelto la Proposta C "Ibrida"** tra i 3 mockup di Fase B: la
scelta SOSTITUISCE formalmente BR0–BR7 (nota di supersessione in testa a
`DISEGNO_BRAND.md`; restano valide le sue regole non visive: BR1 movimento
gentile, budget asset §2-bis, tono di voce). **Fase C1 eseguita** secondo
`PLAN.md`: (1) **`css/style.css` :root ritarato** alla direzione C — primario
indigo `#4F46E5` (hover/active `#4338CA`/`#3730A3`), ambra `#FBBF24` con
`--gold-dark #B45309` leggibile su chiaro, sfondo pagina avorio `#FAFAF7`,
neutri caldi (`#1E1B2E`/`#4B4560`/`#686180`), bordi lilla, nav/countdown da
blu `#1b377b` a indigo profondo `#232046`, raggi 20/16/12/9, ombre
ink-indigo, nuovo token `--bg-track` per i binari delle barre; font
CONFERMATI (Bricolage/Jakarta/SpaceMono). (2) **NUOVI token
`--primary-fill`/`--primary-fill-hover`**: i fill con testo bianco (btn
primari, chip attivi, toggle fase, .dett-link.primario, .btn-primario)
restano indigo saturi in ENTRAMBI i temi, mentre `--primary` in notte si
schiarisce per testi/link — evita il classico bug "lavanda su bianco". (3)
**Tema notte di PRIMA CLASSE** (chiude P1.11 dell'audit): non più blu-nav
con card traslucide ma palette dedicata — fondo `#12141F`, card SOLIDE
`#1B1E30`, hover `#252840`, testi `#EDEBF7/#BEB9D6/#A29CC4`, bordi propri,
primario notturno `#818CF8/#A5B4FC`, semaforo ricalibrato per il buio
(testi chiari + tinte trasparenti), ambra che si accende (`--gold-dark`→
`#FBBF24`), stelline ridotte a opacità .5 e virate indigo. (4) Hardcoded
residui portati a token (fase-attiva, missione-card ring, barre progresso,
bordo capitoli, testi celebrazione/onboarding su fondo scuro). (5)
**`design/tokens/colors.css` RISCRITTO** come fonte di verità della
direzione C (scale indigo/ambra/ink caldi + sezione notte + alias
semantici). (6) `theme-color` in `index.html` e `manifest.json`
`#1b377b`→`#232046`, `background_color`→`#FAFAF7`. **Verifica a video**
(preview 8001, profilo demo via localStorage, mobile 375 e desktop 1280,
tema giorno E notte, ENTRAMBI gli atenei — Sapienza Giurisprudenza LM,
Ca' Foscari Economia L): token applicati ovunque via `getComputedStyle`
(nav `#232046`, btn `#4F46E5` r999, card r20, countdown ambra, track
lilla), notte con card solide e contrasti misurati (hero 18,3:1, card
13,9:1, muted 8,7:1, btn 6,3:1; il falso allarme fase-cta 1,99:1 era la
TRANSITION congelata dal throttling del pannello browser — rimisurato con
reflow forzato: `#1B1E30`, ~7,7:1 ✓), motore compatibilità intatto su
entrambi gli atenei (Bordeaux 100%, chip borsa €400), niente scroll
orizzontale a 375px, console pulita. **Checklist SEO di blocco**: URL e
canonical INVARIATI, GoatCounter presente, `sitemap.xml` non toccata; le
2 guide ereditano i nuovi token via `css/style.css` (CTA indigo 6,3:1).
Nessun `.js` toccato (niente `node --check` necessario). NOTA ambiente: gli
screenshot del pannello browser vanno in timeout (renderer throttled) — la
verifica è via DOM/computed styles; Nicola può guardare il sito in locale
per il colpo d'occhio. File toccati: `css/style.css`,
`design/tokens/colors.css` (riscritto), `index.html` (solo theme-color),
`manifest.json` (2 valori), `DISEGNO_BRAND.md` (nota supersessione).
**Prossimo passo: Fase C2 — home/percorso + onboarding nella direzione C
(include la mappa-hero: serve il lookup coordinate dalla pipeline, schema
in `design/PLAN-FASE-B.md` §Approach 2, e il fix del bug P0.1
dell'onboarding mobile).**)

**Ultimo aggiornamento precedente:** 2026-07-10 — sessione 40, Claude Code (**FASE B
ESEGUITA: 3 MOCKUP DI DIREZIONE VISIVA CON MAPPA-HERO INTERATTIVA, pronti per
la scelta di Nicola. Nessun file del sito live toccato.** Sessione in due
tempi. **Tempo 1 — /grill-me-codex sul caveat di Nicola** ("home molto
interattiva: mappa del mondo, scegli l'università, vedi le mete, hover =
anteprima"): 4 decisioni al grill — (1) la mappa d'Europa è l'HERO della home
(scelta esplicita dopo avvocato del diavolo che opponeva la gerarchia della
bussola LA>scadenze>lingua>mete: la mappa vale come asset di ACQUISIZIONE/
condivisione WhatsApp, non come strumento decisionale); (2) strutturale in
TUTTI i mockup, si sceglie l'identità a parità di struttura; (3) due
condizioni vincolanti: mobile = tap+scheda con clustering (mai hover), utente
profilato = mappa compattata sotto missione/countdown, con GATE oggettivo
"missione+countdown interi nel primo viewport 375×667"; (4) tre direzioni,
non due. Piano bloccato in **NUOVO `design/PLAN-FASE-B.md`**; revisione
avversariale Codex (gpt-5.5, codex-cli 0.144.1 via npx — il binario locale
non c'era più): Round 1 REVISE con 16 rilievi (14 accolti — tra cui demo con
TUTTE le 55 mete non un sottoinsieme, + Economia Ca' Foscari per il secondo
pin, schema coordinate `coord{lat,lon,x,y,fonte,precisione}` definito ORA con
proiezione precalcolata offline, clustering anche per città identica,
accessibilità pin=<button> in overlay HTML sopra l'SVG con tastiera e lista
testuale equivalente, regola anti-XSS textContent-only, budget misurabili,
noindex — 2 respinti con motivo a log), Round 2 **APPROVED** + 6 rilievi
residui non bloccanti comunque integrati. Log in coda a `PLAN-REVIEW-LOG.md`.
**Tempo 2 — costruzione (skill ui-ux-pro-max)**: NUOVA cartella
`design/proposte-2026-07/` con `index.html` (comparatore con istruzioni e
gate), `proposta-a-giocosa.html` (claymorphism caldo arancio, Wiz protagonista
con fumetti e pose, pin oro su notte viola), `proposta-b-professionale.html`
(fintech sobrio blu, niente mascotte, etichette testuali), `proposta-c-ibrida.html`
(indigo+ambra, Wiz solo come guida) e `_assets/` condivisi: `europa-svg.js`
(25 KB, 43 paesi, generato offline da GeoJSON con proiezione equirettangolare
parallelo 48°), `dati-demo.js` (85 KB: 55 mete Giurisprudenza + 58 Economia
REALI con coordinate precalcolate, borsa risolta marcata solo-demo, 2 mete
Canarie senza coord per dimostrare il fallback lista), 3 webp Wiz (≤68 KB,
riusati da img/mascotte). Ogni mockup: 3 viste (primo contatto / home
profilata con stato bando chiuso datato e con fonte / tab Mete con card che
risolvono P1.4-6-7-8), tema chiaro+notte disegnati entrambi, flusso mappa
funzionante sui dati veri (ateneo→facoltà→55 pin), cluster per città identica
e distanza con ricluster al resize, tooltip desktop / scheda mobile, Escape
che restituisce il focus, elenco testuale accessibile. **Fix in corso di
verifica**: gate 375×667 inizialmente fallito di 95px → barra-mockup e testa
della home profilata compattate su mobile, ora passa su tutte e tre (countdown
a ~580px); sizing circolare `fit-content`+`min(100%,…)` che collassava l'SVG
a 300px su desktop → larghezze definite (620px hero desktop, 351px compatta),
allineamento pin verificato a scarto 0px; contrasti misurati via
getComputedStyle e corretti (`--ink-faint` A chiaro 3,26→5,08, C
chiaro/notte →≥4,5); plurale "1 meta"; microcopy "tocca" su touch. **Verifica
a video completa**: 375×812, 375×667, 667×375 landscape (no scroll
orizzontale, stato coerente al cambio tema con scheda aperta), 1280×800,
chiaro e notte, nessun errore console. Budget: ~290 KB/pagina (limite 600),
SVG 25/80, Wiz 68/100. Sapienza posti condivisi tra livelli contati una volta
sola (1+1=1), Ca' Foscari sommati (3L+6LM=9). **Prossimo passo: Nicola apre
`design/proposte-2026-07/index.html` — PRIMA DA TELEFONO — e sceglie la
direzione; la scelta sostituisce BR0–BR7 e sblocca la Fase C.** File nuovi:
`design/PLAN-FASE-B.md`, `design/proposte-2026-07/{index,proposta-a-giocosa,
proposta-b-professionale,proposta-c-ibrida}.html`, `design/proposte-2026-07/_assets/{europa-svg.js,dati-demo.js,wiz-saluto.webp,wiz-esulta.webp,wiz-spiega.webp}`;
aggiornato `PLAN-REVIEW-LOG.md` (log Fase B in coda).)

**Ultimo aggiornamento precedente:** 2026-07-10 — sessione 39, Claude Code (**NUOVA ONDATA
"MERCATO-UI" PIANIFICATA E APPROVATA + FASE A (AUDIT) ESEGUITA. Nessun file di
codice/dati del sito toccato.** Sessione /grill-me-codex su richiesta di Nicola
("revisione completa e ristrutturazione del sito, pronto per il mercato").
**Atto 1 — grill, 6 decisioni di Nicola**: (1) metodo audit-first (si rifà solo
ciò che l'audit condanna; dati e motore compatibilità INTOCCABILI); (2)
traguardo = sito a qualità professionale + UI del LA Generator come demo
navigabile read-only (logica in MERCATO-2/OP8); (3) **brand in discussione** —
2-3 direzioni visive come mockup HTML in `design/proposte-2026-07/`, sceglie
Nicola, la scelta SOSTITUISCE formalmente BR0-BR7; (4) stack vanilla confermato,
nessun build step; (5) lancio gratuito agli studenti, zero monetizzazione; (6)
ondata chiusa entro settembre 2026, MERCATO-2 resta a ott-dic, sopravvivono in
parallelo OP5-residuo/G4/G5/OP6. **Atto 2 — revisione avversariale Codex
(gpt-5.5, codex-cli 0.142.5, sandbox read-only)**: Round 1 REVISE con 12
rilievi (10 accolti — tra cui demo LA senza scritture zaino coi vincoli OP8,
gate privacy, checklist SEO per blocco, igiene repo con dry-run, mini-QA per
blocco, chiusura a due stati implementata/validata — 2 respinti con motivo a
log perché decisioni esplicite del grill); Round 2 **APPROVED**. Deliverable:
**NUOVI `PLAN.md`** (il piano vincolante dell'ondata: Fasi A audit → B
direzioni visive → C1-C6 ristrutturazione+igiene → D QA) e
**`PLAN-REVIEW-LOG.md`** (trascrizione integrale del confronto). **Fase A
eseguita nella stessa sessione → NUOVO `design/AUDIT_SITO.md`**: 20 difetti
priorizzati P0-P3 + verdetti TENERE/RIFARE per area. **I tre P0**: (1) bug
CONFERMATO onboarding mobile — con le 17 facoltà Sapienza l'overlay centrato
taglia le prime opzioni e "Giurisprudenza" (il beachhead!) è irraggiungibile
da telefono 375px; (2) codici Erasmus SINTETICI (SAP-IUS-*) mostrati nel
dettaglio meta come dato ufficiale — da nascondere finché la pipeline non li
sana; (3) form profilo limitato a 4 lingue hardcoded → chi sa il portoghese
(caso Lisbona!) vede falsi 🔒 — la lista deve derivare dai dati. Misurato
anche: 2,45 MB alla prima visita (2,16 MB dati JS, SEMPRE entrambi gli
atenei), wiz-hero.png 408 KB come OG, dark mode con sole 11 regole override,
schedina vuota che occupa 1,5 schermate prima delle mete, "Area: 0421" grezzo
nello strip, 19 file spazzatura in root. Cosa funziona (da non rompere):
onestà sistematica banner/disclaimer/stime, fusione candidatura OP2, .ics,
filtri OP3/OP4, guide SEO, token CSS ordinati. **Prossimo passo: Fase B —
2-3 mockup HTML delle direzioni visive (include tema notte di prima classe e
stato "bando chiuso"), poi scelta di Nicola.** Verifica a video eseguita su
preview 8001, mobile 375 e desktop 1280, chiaro+notte, Sapienza Giurisprudenza
LM e Ca' Foscari Economia L, onboarding da localStorage pulito; nessun errore
console (solo warn GoatCounter su localhost, atteso). File nuovi: `PLAN.md`,
`PLAN-REVIEW-LOG.md`, `design/AUDIT_SITO.md`.)

**Ultimo aggiornamento precedente:** 2026-07-09 — sessione 38, Claude (Cowork) — **NON
tocca il sito/contenuti: sessione di infrastruttura per l'automazione dati**
(vedi [[AUTOMAZIONE_GEMINI.md]]). Riassunto: (1) indicazioni per completare la
Fase 0 lato Gemini (API key + fatturazione Google Cloud + variabile
d'ambiente `GEMINI_API_KEY` sul PC dedicato); (2) primo tentativo di
`node scripts/esegui-lotto-automatico.mjs` sul PC dedicato bloccato da
`inizia-batch.mjs` con errore git "bad object refs/codex/snapshots/...";
diagnosi: **110+ segnalibri interni di Codex (`refs/codex/snapshots/*`)
corrotti**, causa quasi certa OneDrive che sincronizza `.git` mentre Codex
scrive continuamente — non un problema di Gemini o dello script. (3)
**Il repo sul PC dedicato è stato spostato fuori da OneDrive**, in
`C:\repos\erasmuswiz` (clone pulito da GitHub, verificato `git status`
clean e i 235 file `batch/FONTI-*.json` presenti): da qui in avanti
**l'automazione (Gemini+Codex, script della pipeline dati) gira SOLO lì**,
mai più nella cartella OneDrive. La cartella OneDrive resta per il lavoro
manuale di Nicola (documenti, pianificazione) e per le sessioni Claude/
Cowork su questi file — ma ha ereditato gli stessi segnalibri corrotti
(stessa cartella sincronizzata): pulizia consigliata ma non urgente, quando
comodo, con gli stessi comandi usati sul PC dedicato (vedi memoria
`erasmuswiz-automazione-gemini`). **Confermato durante il controllo:** Claude
non deve più eseguire comandi git (nemmeno di sola lettura) sulla cartella
OneDrive da questa sandbox — il mount stesso può introdurre falsi "file
modificati" per differenze di fine riga (CRLF/LF), rumore non pericoloso ma
da evitare. **Fase 1 (test reale con l'API Gemini) non ancora eseguita**:
va rilanciata dal PC dedicato, ora da `C:\repos\erasmuswiz`, dopo `npm
install` e verifica che `GEMINI_API_KEY` sia ancora impostata (variabile di
macchina, dovrebbe sopravvivere al trasloco).

**Ultimo aggiornamento precedente:** 2026-07-08 — sessione 37, Claude Code (**OP5 SEO di
base ONLINE — PARZIALE (2/3 pagine + sitemap/robots), analytics già attivo.**
Letti in ordine `CLAUDE.md`, `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`,
`ROADMAP.md`, `DISEGNO_OPERATIONS.md`. Eseguito SOLO il blocco OP5, nella
parte sbloccata dalle dipendenze (il 3° articolo, il racconto caso-Bruno,
resta bloccato: serve l'ok esplicito di Bruno sul testo anonimizzato — non
richiedibile in questa sessione). **Nuova cartella `guide/`** con due pagine
HTML statiche autonome, indicizzabili, che riusano `css/style.css` (stesso
design system, nessun JS applicativo): (1)
`come-fare-learning-agreement-sapienza.html` — le due fasi del LA (bozza
libera via mail + compilazione ufficiale su piattaforma OLA/EWP), i due
errori più comuni (link rotti, ECTS non corrispondenti — genericizzati dai
due rimbalzi reali documentati nel dossier, MAI attribuiti a una persona
riconoscibile), cosa non serve ancora (i codici corso); (2)
`requisiti-lingua-erasmus.html` — perché il requisito lingua è la prima
causa di esclusione, differenza tra livello dichiarato e certificato,
checklist di verifica (il caso Madrid/Amsterdam del dossier è stato reso
generico: "destinazioni molto richieste possono chiedere C1 o certificazioni
specifiche", NESSUN dettaglio personale di Bruno, coerente con la regola
privacy di `ROADMAP.md` §Regole di ingaggio p.6). Ogni pagina: title/
description/OG/Twitter dedicati, `rel=canonical`, JSON-LD FAQPage, H1 unico,
data di pubblicazione visibile, disclaimer datato con fonte, CTA verso
`index.html`. **Analytics**: GoatCounter risultava GIÀ attivo in
`index.html` da una sessione precedente (script `data-goatcounter`) — non
era il residuo da riattivare che temeva la roadmap; aggiunto lo stesso
script anche alle due pagine guida per coprire tutto il sito (spec OP5:
"su TUTTE le pagine"). **`sitemap.xml` + `robots.txt`** nuovi in root, con
le 3 URL (home + 2 guide) e riferimento incrociato. **`index.html` footer**:
aggiunta una riga con i link alle 2 guide (unico punto toccato del file,
come da vincolo "Non toccare" del blocco). **CSS**: nuovo blocco
`.guida-*` in fondo a `css/style.css` (namespace dedicato, riuso delle
variabili esistenti — nessun nuovo colore/font introdotto) per rendere
leggibili le pagine-articolo, che non avevano un equivalente nel design
system pensato per l'app. **Bug auto-introdotto e corretto in sessione**:
la prima versione di `.guida-wrap a { color: var(--primary) }` sovrascriveva
(stessa specificità, dichiarata dopo) il colore bianco di `.btn-primary`
usato nel CTA — risultato testo blu su sfondo blu, invisibile; corretto con
`.guida-wrap a.btn-primary { color: #fff }`, verificato via
`getComputedStyle` che il contrasto torna corretto. **Nessun file `.js`
toccato in questa sessione → nessun `node --check` necessario.** **Verifica
a video** (preview locale porta 8001, mobile 375px e desktop nativo, tema
chiaro E notte, ENTRAMBI gli atenei — Sapienza e Ca' Foscari, cambiati via
localStorage): home e footer di `index.html` corretti su entrambi gli
atenei con i 2 nuovi link guida presenti e cliccabili; in tema notte i link
del footer ereditano `.footer-v2 a { color: var(--gold) }`, leggibili senza
CSS nuovo; le 2 pagine guida verificate su mobile e desktop (H1/FAQ/CTA
presenti, nessun errore console, CTA con testo bianco leggibile dopo il
fix); nessuna regressione sull'app (percorso, missione del giorno, nav).
**Cosa resta di OP5 (non chiuso, dipendenze non soddisfatte o azioni umane)**:
(a) 3° articolo "racconto caso-Bruno" — bloccato in attesa del suo ok sul
testo anonimizzato (bussola: mai un fatto raccontato senza consenso); (b)
Lighthouse SEO ≥90 — non eseguibile in questo ambiente (nessun tool
Lighthouse disponibile), da controllare manualmente da Nicola con Chrome
DevTools; (c) **registrazione su Google Search Console — azione umana di
Nicola**: (1) andare su search.google.com/search-console, (2) aggiungere
la proprietà `https://nicorotolo.github.io/erasmuswiz/` (tipo "prefisso
URL"), (3) verificare la proprietà (metodo file HTML o tag meta — GitHub
Pages supporta l'upload di un file di verifica in root), (4) inviare
`sitemap.xml` da Search Console → Sitemap. Roadmap: OP5 marcato parziale
`[~]`, non spuntato del tutto. Prossimo passo: chiudere OP5 (3° articolo,
quando Bruno dà l'ok) oppure passare a OP6/OP3-OP4 già fatti → valutare
OP8 quando arrivano ToR/convalida di Bruno.)

**Aggiornamento precedente:** 2026-07-08 — sessione 36, Claude Code (**OP4 Stima
borsa per gruppo-paese IMPLEMENTATA — nuovo `dati-borse.js` per ateneo,
badge nella card meta + blocco nel dettaglio.** Letti in ordine `CLAUDE.md`,
`PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`,
`DISEGNO_OPERATIONS.md`. Eseguito SOLO il blocco OP4. **Fonti, nessuna
mancante da chiedere a Nicola** (la spec OP4 prevedeva di chiedere l'
equivalente Ca' Foscari se assente in `fonti/`, ma era già lì): Sapienza da
`fonti/caso-bruno/638864454957146686_INFORMAZIONI_GENERALI_25_26.pdf`
pp. 3-4 (Gruppo 1 costo vita alto 350€/mese, Gruppo 2 medio 300€/mese +
tabella CISM a fasce ISEE 200-500€/mese); Ca' Foscari da
`fonti/Bando_Erasmus__per_studio__Europa__2026_2027.pdf` (Art. 6) +
`fonti/Allegato_1.pdf` (tabella INDIRE ufficiale, non ancora letta nelle
sessioni precedenti): 3 gruppi 400/350/350€ al mese + top-up flat 250€/mese
per minori opportunità (diverso dalla tabella ISEE a fasce di Sapienza:
schemi finanziari realmente distinti tra i due atenei, non un'incoerenza).
**Nuovo file dati per ateneo** (`js/atenei/{cafoscari,sapienza}/dati-borse.js`,
`var BORSE_INFO`): schema comune con campi opzionali per assorbire le due
architetture di contributo (`gruppiPaese` uguale in entrambi;
`integrazioneMinoriOpportunita` a `tipo: "isee_a_fasce"` per Sapienza o
`tipo: "flat"` per Ca' Foscari) — un solo schema, non due. **"Olanda"
incluso come alias di "Paesi Bassi"** in entrambi i gruppi 1: verificato con
uno script Node che estrae tutti i valori `paese` distinti dai file mete
reali — le mete usano "Olanda" più spesso del nome ufficiale del gruppo, un
mapping che ignorasse l'alias avrebbe fatto sparire il badge su mete vere
(es. Groninga, Tilburg) senza errore visibile. **Integrazione**
(`index.html`): nuovo script tag per ciascun ateneo, campo `borse: BORSE_INFO`
nell'oggetto `ATENEI[key]`, esposizione globale `BORSE_INFO = A.borse` nel
blocco "ateneo attivo" (stesso pattern di `BANDO_INFO`). **Nuove funzioni**
(`js/app.js`): `trovaGruppoBorsa(meta)` mappa `meta.paese` al gruppo
dell'ateneo attivo (nessuna soglia hardcoded, legge solo `BORSE_INFO`);
`borsaSintesi(meta)` per la chip compatta. **UI**: chip "💶 ~€XXX/mese"
aggiunta alla riga chip esistente della card (`renderMete()`, stesso
componente `.chip-meta`, nessun CSS nuovo — verificato che il flex-wrap
esistente assorbe la chip in più anche a 375px senza rotture); nel pannello
dettaglio (`apriDettaglioMeta()`) nuovo blocco "Borsa Erasmus" con stima,
riga di integrazione (ISEE o top-up a seconda dell'ateneo) e disclaimer
datato con fonte (riusa la classe esistente `.dett-compat-detail`, nessun
CSS nuovo). Formulazione "stima", mai "spetta" (bussola §3). **`node --check
js/app.js` + entrambi i `dati-borse.js`**: OK. **Verifica a video** (preview
locale porta 8001, profilo impostato via localStorage, mobile 375px e
desktop nativo, tema chiaro E notte, ENTRAMBI gli atenei): Ca' Foscari
Economia triennale — meta francese (Bordeaux) → €400/mese, meta olandese
(Groninga, "Olanda") → €400/mese (alias risolto), dettaglio con top-up
250€/mese e fonte Allegato 1; Sapienza Giurisprudenza magistrale — meta
belga (Bruxelles) → €350/mese, dettaglio con range CISM "da €200 a
€500/mese in base all'ISEE" e fonte INFORMAZIONI GENERALI; verificato via
script che NESSUNA meta di nessuno dei due atenei risulta senza gruppo
riconosciuto (0 "undefined" nel DOM); chip leggibile in tema notte
(`getComputedStyle`: sfondo blu scuro, testo chiaro, stesso pattern degli
altri chip); nessun errore console in nessuno scenario. **File toccati**:
NUOVI `js/atenei/cafoscari/dati-borse.js`, `js/atenei/sapienza/dati-borse.js`;
modificati `index.html` (2 script tag, 2 campi `borse:`, 1 riga di
esposizione globale), `js/app.js` (`trovaGruppoBorsa`, `borsaSintesi`,
chip in `renderMete()`, blocco in `apriDettaglioMeta()`). **Non toccati**:
`css/style.css` (riuso di classi esistenti), schema esistente delle mete
(si aggiunge un file dati, non campi), motore di compatibilità, dati
bando/scadenze/checklist. Roadmap: OP4 spuntato. Prossimo passo: OP5 — SEO
di base online.)

**Aggiornamento precedente:** 2026-07-08 — sessione 35, Claude Code (**OP3 Filtro
lingua nelle mete IMPLEMENTATA — nuovo chip "🗣️ Per la mia lingua".** Letti
in ordine `CLAUDE.md`, `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`,
`ROADMAP.md`, `DISEGNO_OPERATIONS.md`. Eseguito SOLO il blocco OP3.
**Nuovo chip filtro** (`renderMete()` in `js/app.js`, area `#filtri-mete-chip`
già esistente per i chip di compatibilità BR4): "🗣️ Per la mia lingua"
aggiunto in coda a Tutte/✅/⚠️/🔒, stesso componente/classe `.chip-filtro`
(nessun CSS nuovo). **Nessuna soglia CEFR duplicata**: il filtro riusa
`punteggioLingua()`/`punteggioLinguaSingola()` del motore di compatibilità
già esistenti (BR4) — una meta è "coperta" quando il punteggio è 50 (livello
richiesto raggiunto E certificato: la certificazione mancante è esattamente
il motivo reale di esclusione documentato nella bussola, caso Madrid/
Amsterdam di Bruno). Le mete con `requisitoLingua` multiplo (alternative
lingua bachelor/master o corsi in lingue diverse) restano incluse se ALMENO
UNA alternativa è coperta (`Math.max` già nel motore, comportamento
preesistente riusato, non nuovo). **Mete non verificabili MAI nascoste in
silenzio**: `requisitoLingua` vuoto → restano nell'elenco filtrato, la card
le marca già "Lingua da verificare" (comportamento esistente `linguaSintesi`,
invariato). **Profilo senza lingue**: il click sul chip non filtra a vuoto —
richiama `mostraTab("profilo")` come già fa il link dello strip profilo,
verificato che il filtro si auto-resetta a "tutte" se le lingue vengono
svuotate mentre il chip è attivo (nuovo controllo in cima a `renderMete()`).
**Microcopy della riunione d'asta** (dossier §1-ter A, richiesto dalla
spec): quando il filtro è attivo l'intro sopra la griglia diventa "Preparati
alla riunione di assegnazione: queste sono le mete che le tue lingue
coprono davvero." **`node --check js/app.js`**: OK. **Verifica a video**
(preview locale porta 8001, profilo impostato via localStorage per
velocità — zaino con lingue Inglese B2 certificata — poi verificato anche
il caso senza lingue; mobile 375px e desktop nativo, tema chiaro E notte,
ENTRAMBI gli atenei): Ca' Foscari Economia triennale — 85 mete totali, 78
col filtro attivo (7 esplicitamente escluse per requisito lingua non
coperto, verificato via `punteggioLingua()` in console, es. Copenhagen
Business School C1 inglese; le 6 "da verificare" restano visibili);
Sapienza Giurisprudenza magistrale — 60 mete totali, 43 col filtro; chip
attivo leggibile in tema notte (`getComputedStyle`: sfondo blu `#3d7dff`,
testo bianco, stesso pattern degli altri chip); su mobile 375px il chip
resta nel flusso orizzontale dei filtri esistente, nessuna rottura di
layout; nessun errore console in nessuno scenario. **File toccati**:
`js/app.js` (`renderMete()`, solo l'area filtri e il blocco di filtraggio
elenco — nessuna funzione nuova, riuso di `punteggioLingua`). **Non
toccati**: `js/app.js` pesi del motore (50/30/20 invariati), `css/style.css`
(nessuna modifica: `.chip-filtro` già copriva il caso), dati mete di
nessun ateneo. Roadmap: OP3 spuntato. Prossimo passo: OP4 — Stima borsa
per gruppo-paese.)

**Aggiornamento precedente:** 2026-07-08 — sessione 34, Claude Code (**OP2
Candidatura riformattata IMPLEMENTATA — Timeline rimossa, "Ora tocca a te"
con scadenza collegata, gerarchia visiva rinforzata.** Letti in ordine
`CLAUDE.md`, `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`,
`DISEGNO_OPERATIONS.md` (+ `FEEDBACK_UTENTI.md` e `DISEGNO_UX.md` §6 come
richiesto dalla specifica OP2 prima di scrivere codice). Eseguito SOLO il
blocco OP2. **Rimossa la pagina Timeline nascosta** (decisione BR7, ora
eseguita): sezione `#tab-timeline` in `index.html`, funzione `renderTimeline()`
e relativo blocco CSS (`#timeline-v2`, `.tappa-v2*`) in `js/app.js`/
`css/style.css`, voce `"timeline"` da `TAB_VALIDI`, entrambi i link
`.link-torna-tab` (ormai orfani, classe CSS rimossa anche dagli override
tema-notte/desktop) — i 4 pulsanti di missione che puntavano al tab
"timeline" (bando-chiuso/urgente/attendi/default) ora puntano a "checklist",
dove le stesse scadenze sono già presenti nei capitoli fusi (nessun dato
perso, solo un tab in meno). **"Ora tocca a te" (BR5) arricchito**: ogni
passo mostrato ora porta con sé, senza dover aprire il capitolo sotto, la
scadenza collegata e il countdown (nuovo `.prossimo-passo-scadenza`,
pillola con sfondo proprio come `.cand-scadenza-countdown` — necessario:
il primo tentativo usava solo colore di testo rosso su sfondo trasparente,
illeggibile in tema notte dove la card è quasi trasparente sul blu scuro;
corretto con sfondo dedicato `--red-bg`, indipendente dal tema, stesso
pattern già in uso altrove). **Gerarchia visiva rinforzata** (richiesta
esplicita OP2: "una scadenza = un blocco distinto, le voci sono
subordinate"): `.cand-scadenza-card` con titolo in `--font-display` 800
1.05rem, bordo sinistro e raggio più marcati; voci in `.cand-checklist-sotto`
attenuate (sfondo/bordo trasparenti, font più piccolo) — **bug
auto-introdotto e richiuso in sessione**: l'attenuazione cancellava anche
il bordo blu della voce "attiva" (stessa specificità CSS della regola
`.attiva` preesistente, scritta dopo in cascata); corretto escludendo
`:not(.attiva)` dalla regola, verificato via `getComputedStyle` che il
bordo/ombra evidenziati tornano visibili. **`node --check js/app.js`**: OK.
**Verifica a video** (preview locale porta 8001, mobile 390px e desktop
1280px, tema chiaro E notte, ENTRAMBI gli atenei — Ca' Foscari Economia e
Sapienza Giurisprudenza, data di sistema forzata solo lato test a prima
delle scadenze reali per vedere capitoli non scaduti, nessun file toccato
per il test): capitoli per-scadenza e "Quando puoi" corretti, dettagli
ripiegabili invariati, badge scadenza visibile su ogni passo di "Ora tocca
a te" con contrasto verificato in entrambi i temi, griglia desktop 2
colonne invariata (712px/320px, "Ora tocca a te" in colonna azione),
checkbox testata via `dispatchEvent` (progresso 0/5→1/5, l'elenco si
riempie col passo successivo), banner "dati in verifica" Sapienza ancora
presente, nessun errore console, nessun residuo `timeline`/`tappa-v2`/
`link-torna-tab` nei file di root (grep mirato). **Nota**: esiste una
cartella `v2/` con una vecchia istantanea del sito (committata a parte,
non citata nei documenti-bussola) che contiene ancora riferimenti a
"timeline" — non è stata toccata, fuori dallo scope del blocco OP2 e non
il sito live. **File toccati**: `index.html` (rimossa sezione Timeline e i
2 link `.link-torna-tab`), `js/app.js` (rimossi `renderTimeline()` e la
sua chiamata, aggiornati 4 target di bottone, `renderProssimiPassi()`
arricchita, `aggiornaCountdownV2()` aggiornata per il nuovo badge),
`css/style.css` (rimosso blocco TIMELINE v2 e `.link-torna-tab`, rinforzata
`.cand-scadenza-card`/`.cand-checklist-sotto`, nuovo `.prossimo-passo-scadenza`).
**Non toccati**: dati checklist/scadenze (`dati-checklist.js`,
`dati-scadenze.js` di entrambi gli atenei), motore temporale
(`scadenzaPerId`, `voceScaduta`, `prossimaScadenzaAzionabile`), export
`.ics`, onboarding, motore di compatibilità. Roadmap: OP2 spuntato.
Prossimo passo: OP3 — Filtro lingua nelle mete.)

**Aggiornamento precedente:** 2026-07-08 — sessione 33, Claude Code (**OP1 Fix UI
dal feedback UX6 IMPLEMENTATA — stellina, link portale, microcopy limite 5.**
Letti in ordine `CLAUDE.md`, `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`,
`ROADMAP.md`, `DISEGNO_OPERATIONS.md`. Eseguito SOLO il blocco OP1. **Punto 1
— "Informazioni importanti"**: la stringa/sezione non esiste nel codice
attuale (né in `index.html` né in `js/app.js`) — probabilmente già rinominata
o superata da sessioni BRAND precedenti (es. "La tua missione di oggi").
`FEEDBACK_UTENTI.md` è un template mai compilato, quindi non fornisce il
riferimento esatto: **nessuna modifica fatta per non indovinare** — segnalato
a Nicola, da chiarire con Bruno cosa intendesse esattamente. **Punto 2 —
stellina preferiti** (`js/app.js` `renderMete()`, `css/style.css`): spostata
in cima alla card (prima era un bottone a piena larghezza in fondo), ora
icona sola (⭐/☆) in un cerchio 40×40px posizionato in alto a destra
(`.btn-preferita` con `position:absolute`), con `aria-label`. **Punto 3 —
link "Portale Sapienza/Ca' Foscari"**: de-enfatizzato da bottone pieno
(`background:var(--primary)`) a link di testo sottolineato — la CTA
principale della card resta "Tocca per i dettagli →"; aggiunto override
tema notte (`#a7c3ff`, stesso pattern di `.card-dettagli-hint`). **Punto 4 —
limite 5 scelte**: la schedina (`renderPreferite()`) mostrava il limite solo
come errore reattivo dopo il tentativo di aggiungere una sesta meta; ora un
microcopy proattivo ("Puoi sceglierne al massimo 5: l'ordine conta, sono le
mete che porterai alla riunione di assegnazione" — riusa il use case della
riunione d'asta documentato nel dossier di Bruno §1-ter A) è sempre visibile
finché la schedina non è piena; il numero resta 5 hardcoded (uguale per
entrambi gli atenei nei dati raccolti finora, nessun campo per-ateneo
introdotto senza necessità). **Punto 5 — debug 2/55 mete Giurisprudenza**:
trovate via grep (`requisitoLingua: []`) — Universidad de Castilla-La Mancha
e Universidad de Zaragoza. Verificato che ENTRAMBE hanno già in
`notePratiche` la nota "Lingua: CEFR non pubblicato ufficialmente" +
"CEFR non trovato dopo ricerca approfondita": soddisfano già la definizione
di "completo" della pipeline dati (`DISEGNO_PIPELINE_DATI.md`: fonte+data
OPPURE marcato non trovabile con fonte tentata). **Nessuna modifica ai dati
mete** — inventare un CEFR non verificato avrebbe violato la regola
"mai un'affermazione senza fonte" della bussola §3. L'app le mostra
correttamente con chip "Lingua da verificare" (comportamento esistente, non
un bug). **`node --check js/app.js`**: OK. **Verifica a video** (preview
locale porta 8001, mobile 390px e desktop 1280px, tema chiaro E notte,
ENTRAMBI gli atenei — Sapienza Giurisprudenza e Ca' Foscari Economia):
stellina in alto a destra funzionante (click reale, aggiunta/rimozione,
schedina 1/5→persistenza), link "Portale"/"Scheda ufficiale" leggibile in
entrambi i temi (contrasto verificato via `getComputedStyle`: `#a7c3ff` in
notte), microcopy limite visibile finché schedina < 5 e nascosto a schedina
piena, nessun errore console, nessuna regressione su filtri/ricerca/
compatibilità. **File toccati**: `js/app.js` (`renderMete()`,
`renderPreferite()`), `css/style.css` (`.card-meta-v2`, `.btn-preferita`,
`.link-scheda-v2`, `.preferite-hint`, override tema notte). **Non toccati**:
motore di compatibilità, onboarding, dati mete (nessuna riga modificata).
Roadmap: OP1 spuntato. Prossimo passo: OP2 — Candidatura riformattata da
zero (include rimozione pagina Timeline, decisione BR7).)

**Aggiornamento precedente:** 2026-07-07 — sessione 32, Cowork (**PIPELINE DATI
CHIUSA: nuovo documento definitivo `DISEGNO_PIPELINE_DATI.md`.** Nessun
codice toccato. Decisioni prese con Nicola: budget ZERO oltre gli
abbonamenti (ChatGPT Plus/Codex, Claude), operatore unico Nicola,
obiettivo copertura completa per feb 2027 — con "completo" definito come
"dato con fonte+data OPPURE marcato non trovabile con fonte tentata", mai
riempito per completismo. **Architettura a 4 livelli**: T0 script
(riuso/propagazione/validazioni + NUOVO link-checker HTTP), T1 sgrossatura
GRATIS su Gemini AI Studio (prompt pronto nel documento, protocollo
evidence-based: ogni dato con URL+citazione o "nonTrovato"), T2 Codex come
VERIFICATORE (verificare è 3-5× più veloce che cercare → la capacità Plus
si moltiplica), T3 campionamento umano (Nicola 10% + Bruno su
Giurisprudenza). **Claude escluso dalla mappatura di massa** (token = la
risorsa più scarsa, solo sessioni OP). Numeri misurati sul repo: 1.987
mete ma ~856 codici partner UNICI → l'unità di lavoro è il partner, non
la meta. ⚠️ Scoperto difetto dati: alcuni seed hanno codici Erasmus
SINTETICI (es. `SAP-IUS-SALZBURG` vs il reale `A SALZBUR01`) che rendono
ciechi riuso/propagazione — sanarli è il passo 0 dei lavori una-tantum
(§6 del documento: fix codici, schema +`linkCatalogo`+`notaDisponibilita`,
`verifica-link.mjs`, prompt Codex riscritto da ricercatore a verificatore
— da RE-INCOLLARE in piattaforma). Calendario §7: follow-up residui →
una-tantum → Giurisprudenza (validata con la tabella 28/03 del caso-Bruno)
→ Ca' Foscari residui → 10 Facoltà nuove (~408 codici, ~13 serate di
sgrossatura) → backfill catalogo → refresh bando 27/28. Checkpoint onesto:
misurare il ritmo reale dopo 2 settimane; se è la metà del previsto si
taglia la COPERTURA (fallback: beachhead completo + resto best-effort),
mai la qualità. Il legame col LA Generator è esplicito (§10): la stessa
passata che completa le mete raccoglie il dato L2 (cataloghi+
disponibilità), con la pagina INCOMING preferita al catalogo generale
(lezione del Change Form di Bruno). `ROADMAP.md` aggiornata: nuovo G5
(lavori una-tantum) e OP12 rimandato al documento pipeline.)

**Aggiornamento precedente:** 2026-07-07 — sessione 31, Cowork (**CORPUS MAIL
DI BRUNO ANALIZZATO (feb 2025 → lug 2026) — tre scoperte strategiche.**
Nessun codice toccato. Il file `scambi mail bruno.md` (secondo tentativo,
questa volta corretto — il mount bash mostrava ancora la versione stale,
contenuto vero verificato col Read tool) contiene: domanda di candidatura
completa 18/02/2025, graduatoria, riunione di assegnazione, nomination,
iterazioni del prospetto LA, promemoria contratto/partenza/chiusura.
**Scoperta 1 — la "riunione d'asta" è letterale** (dossier §1-ter A): a
Giurisprudenza l'assegnazione avviene in una riunione telematica
obbligatoria (28/03/2025, 194 candidati, assenza=rinuncia) con la tabella
mete+requisiti lingua inviata 18 MINUTI prima; chi scende in graduatoria
sceglie un'alternativa al volo "in base ai propri requisiti di lingua" →
la schedina 5 scelte + filtro lingua (OP3) è lo strumento di preparazione
alla riunione: killer use case documentato della fase domanda, recepito
nel microcopy di OP3. La tabella stessa (~70 mete con CEFR) è una fonte
ufficiale per validare i dati lingua Giurisprudenza → aggiunta a G4.
**Scoperta 2 — D7 risolta, scenario OP8 deciso**: il "prospetto" LA si
manda come allegato libero a erasmuslaw@ (scadenza Vademecum 30/05),
l'ufficio lo itera nel merito — a Bruno DUE rimbalzi documentati: "link
non funzionanti" (03/06) e "ECTS non corrispondenti ai link" (04/06) —
poi approvazione RAM (06/06) e solo dopo compilazione in piattaforma →
**scenario A confermato dalla prassi**; G1 declassata da bloccante a
conferma; i due rimbalzi diventano le validazioni obbligatorie del
Generator (link verificati + ECTS coerenti), scritte in OP8.
**Scoperta 3 — D4 quasi risolta**: Amsterdam chiedeva TOEFL 100/IELTS 7/C1
e Madrid C3 ES B2+EN B2, Bruno aveva EN B2 → non "certificato dimenticato"
ma "requisito host più alto del previsto": cambia il taglio dell'articolo
SEO sui requisiti lingua. **Altre pepite**: accettazione mobilità entro 7
giorni o si perde (16/04); LA in piattaforma entro 10/07 o 10/12; dati
bancari visibili solo dopo contratto controfirmato; cert. frequenza deve
inviarlo l'HOST; la candidatura chiede già corsi+esami a febbraio
("mini-LA" 10 mesi prima); tre uffici diversi scrivono allo studente
(smout/erasmuslaw/RAEF-RAM). ⚠️ Il corpus contiene dati di TERZI (~200
indirizzi studenti): mai estrarre contenuti non anonimizzati.
**Aggiornati**: `DOSSIER_CASO_BRUNO.md` (nuova §1-ter con riunione d'asta,
flusso prospetto, tabella scadenze vissute, candidatura, burocratese;
timeline §4 ora quasi completa con 20+ date documentate),
`LISTA_MATERIALI_BRUNO.md` (B1 ✅, D7 ✅ risolta, D4 riformulata; restano
ToR/convalida/piano studi post-rientro + D2/D3/D5/D6/A2),
`DISEGNO_OPERATIONS.md` (OP8 scenario A + validazioni; OP3 use case
riunione + fonte tabella lingue; grafo aggiornato), `ROADMAP.md` (G1
declassata, G2 quasi completa, G4 arricchito). Restano da Bruno: ToR,
convalida, piano di studi, Word del prospetto se ritrovato, racconti
D2/D3/D5/D6/A2.)

**Aggiornamento precedente:** 2026-07-07 — sessione 30, Cowork (**GROUND TRUTH
ARRIVATA: LA + Change Form di Bruno analizzati, documenti operativi
aggiornati.** Nessun codice toccato. Nuovi file in `fonti/caso-bruno/`:
`LearningAgreement (3).pdf` e `ChangeForm (1).pdf` (⚠️ terzo file
`scambi mail bruno.md` ERRATO: copia identica di `pagina processo
domanda.md`, le mail vanno ri-esportate da Bruno). **Scoperte chiave**
(dettaglio in `DOSSIER_CASO_BRUNO.md` §1-bis): (1) il Change Form
(19/02/2026) cancella **6 corsi su 8** del LA originale con motivazione
ufficiale "componente NON disponibile presso l'ospitante" e ne aggiunge 10
— il 75% del piano è saltato per DISPONIBILITÀ, non per scelta: la
dimensione "corso davvero offerto agli incoming + semestre" diventa
primaria (alza il valore di L2/OP9, vincola lo schema del pilota L3/OP6);
(2) il LA ufficiale è **digitale end-to-end** (approvato online da Bruno +
RAM Scarchillo lo stesso istante, 11/09/2025 — 2 giorni prima della
partenza; Católica via **EWP** il 05/11/2025, a mobilità iniziata da 2
mesi): conferma il posizionamento "preparazione, mai modulo"; (3) i codici
corso host nel LA erano tutti "000" → il LA Generator non deve chiederli;
(4) mapping molti-a-molti coi totali (8 corsi/44 ECTS ↔ 6 esami/45 CFU,
poi 12/53 ↔ 8/57); (5) discrepanza lingua OLS "Portoghese" vs corsi in
inglese B2 → trappola da checklist. **Aggiornati**: `DOSSIER_CASO_BRUNO.md`
(nuova §1-bis con le due tabelle e le implicazioni, timeline con date reali
11/09-05/11-19/02, inventario, stato consegne), `LISTA_MATERIALI_BRUNO.md`
(A1/A3 spuntati, B1 da rifare, nuove domande D5-D7: come ha scoperto i
corsi non disponibili, discrepanza OLS, ruolo della "bozza Word"),
`DISEGNO_OPERATIONS.md` (OP6 sbloccato in fase 1 con disponibilità come
dimensione primaria; OP8 con vincoli dalla ground truth; OP9 con link
catalogo Católica verificato e nota disponibilità; grafo dipendenze),
`ROADMAP.md` (G2 parziale, G1+D7). **Azioni per Nicola/Bruno**: rifare
l'export delle mail (B1), inviare la mail G1, rispondere a D5-D7;
ToR/convalida/piano di studi dopo il rientro (12/07).)

**Aggiornamento precedente:** 2026-07-07 — sessione 29, Cowork (**SESSIONE STRATEGICA:
operations rimodulate sulla bussola v2 + dossier caso-Bruno avviato.** Nessun
file di codice/dati del sito toccato — solo documenti operativi, scritti per
essere eseguiti in autonomia da qualsiasi modello Claude (Opus/Sonnet).
(1) **`ROADMAP.md` RISCRITTA (v2)**: ondate nuove allineate alla bussola —
GATE (luglio: mail ufficio Erasmus G1, materiali Bruno G2, dossier G3 ✅,
UX5-Sapienza G4) → MERCATO-1 (lug-set: OP1-OP7) → MERCATO-2 (ott-dic:
OP8-OP13) → LANCIO (gennaio, freeze) → BANDO (feb-apr, KPI) → BILANCIO
(maggio); storico v1 compattato in fondo; regole d'ingaggio estese ai
modelli (ordine di lettura, no git da bash, privacy caso-Bruno). Scoperta
in sessione: `manifest.json`+`sw.js` PWA esistono GIÀ (network-first, senza
push) → OP10 è un audit, non una creazione. (2) **NUOVO
`DISEGNO_OPERATIONS.md`**: specifica vincolante eseguibile delle sessioni
OP1-OP13 stile DISEGNO_BRAND (obiettivo/dipendenze/file/specifica/test/non
toccare per ogni blocco), con grafo delle dipendenze e priorità di taglio
(OP6 pilota L3 si taglia per primo, SEO non si rimanda). OP8 (LA Generator)
scritto a DUE scenari in attesa dell'esito G1. (3) **NUOVO
`PLAYBOOK_TEAM.md`**: divisione Nicola/Bruno (tabelle B-1…B-7, N-1…N-8),
4 prompt pronti da incollare per le sessioni Claude di Bruno (validazione
contenuti, rilettura articolo SEO, social, preparazione contatti ufficio),
regole di seeding gennaio (messaggio da studente, `?src=` per canale) e
guida handoff ai modelli. (4) **Cartella `fonti/caso-bruno/` analizzata**
(10 file: pagina personale Relint in MD+video, INFORMAZIONI GENERALI 25/26
— la guida ufficiale dell'intero processo outgoing, certificati arrivo/
frequenza, polizze, OLS, Charter): creati **`DOSSIER_CASO_BRUNO.md`**
(profilo del caso: Giurisprudenza→Católica Lisbona 10 mesi €300/mese,
inventario, timeline da completare, regole d'uso per i modelli; nota-anomalia
dichiarazione di arrivo 01/01/2026 vs partenza 13/09/2025 da chiarire) e
**`LISTA_MATERIALI_BRUNO.md`** (checklist A1-D4 di cosa deve consegnare
Bruno — mancano LA/Change Form/ToR/mail, la vera ground truth — + BOZZA
PRONTA della mail all'ufficio Erasmus §E, il gate che decide la forma del
LA Generator). Verificato: `fonti/` è già in `.gitignore` → caso-bruno mai
su GitHub. **Azioni immediate per Nicola**: girare a Bruno
`LISTA_MATERIALI_BRUNO.md` (mail G1 = 10 minuti, blocca OP8) e recuperare
le tabelle borse Ca' Foscari (N-7, serve a OP4). Prossima sessione di
codice: OP1 (fix UI dal feedback UX6) via `DISEGNO_OPERATIONS.md`.)

**Aggiornamento precedente:** 2026-07-06 — sessione 28, Cowork (**SESSIONE STRATEGICA:
bussola riscritta come v2 dopo la validazione UX6 col fratello (05/07).**
Nessun file di codice/dati toccato — solo strategia. `PROGETTO_ERASMUS.md`
riscritto integralmente (v1 conservata in appendice come storico). Decisioni
chiave: (1) **pivot di gerarchia** — il test ha confermato la tesi della v1
("il dolore è il processo, non la scelta mete"): nuova gerarchia LA >
scadenze > requisiti lingua > scelta mete; (2) **killer feature = LA
Generator a livelli** — L1 documento pulito da upload piano studi + L2 link
cataloghi host nell'MVP; L3 matching esami SOLO come esperimento pilota su
Giurisprudenza (go/no-go a settembre), mai prerequisito; (3) **notifiche =
PWA** con service worker (decisione architetturale presa, unica aggiunta
all'architettura statica); (4) **posizionamento "guida all'asta"** —
strumento di appoggio, no partnership università in questa fase, disclaimer
datati ovunque; (5) **distribuzione** (sezione nuova, il rischio più
sottovalutato): beachhead doppio Sapienza Giurisprudenza (fratello insider)
+ Ca' Foscari (contatti Nicola/Pisa Network), canali in gerarchia —
WhatsApp/Telegram primario a gennaio-febbraio, SEO di base SUBITO (lag di
indicizzazione), social warm-up da dicembre; (6) **calendario a ritroso** dal
bando di febbraio 2027 con PRODUCT FREEZE a gennaio (da lì solo promozione);
(7) **team**: fratello nel progetto in pianta stabile come owner validazione
contenuti Giurisprudenza + canale Sapienza; vincolo 3-5 h/settimana della v1
rimosso. KPI 2027 = traffico ricorrente (utenti unici nel bando, % ritorno
post-selezione, LA generati, iscrizioni push), NON revenue. Idea garanzia
depositi = parcheggiata (altro business). **Assessment critico finale (stessa
sessione), limature accettate da Nicola e integrate in bussola**: §3-bis
natura del progetto (churn strutturale 100%/coorte, volumi piccoli, valore
vero = ASSET dati, uscita più plausibile = partnership/acquisizione, non
banner); SEO sopra il social (unico canale che si accumula tra coorti);
verifica ufficio Erasmus a luglio PRIMA del codice (LA generato accettato
come bozza? rapporto con OLA/EWP?) tramite Bruno; framing notifiche
"promemoria di controllo, non oracolo" fino al microcopy; rischi nuovi §10:
OLA/EWP e ChatGPT come sostituto; SOGLIE di successo con revisione onesta a
maggio 2027 (≥500 utenti unici, ≥30% ritorno, ≥50 LA generati, ≥5
condivisioni spontanee). Il fratello si chiama **Bruno** (aggiornato ovunque).
Da fare da Nicola: salvare i documenti del percorso Erasmus di Bruno in
`fonti/caso-bruno/` (aggiungere la cartella a `.gitignore` — dati personali,
MAI su GitHub); è la ground truth di LA Generator e pilota L3. Prossimi passi
operativi in §8. Prossima sessione strategica: roadmap operativa delle fasi.)

**Aggiornamento precedente:** 2026-07-05 — sessione 27, Claude Code (**Rifinitura UI/UX
"sito da professionisti" — SOLO `css/style.css`, zero logica toccata.** Richiesta di
Nicola: eliminare l'aria "da developer", sistemare mobile e desktop. Interventi:
(1) **Desktop home ristrutturata**: la vecchia griglia a 3 colonne comprimeva
hero+missione a ~500px con la colonna destra quasi vuota; ora 2 colonne bilanciate
(`minmax(0,1fr) 360px`) — hero largo 668px con padding e saluto 34px, missione/
countdown/preparazione sotto, percorso come sidebar destra; `main-content` a
1140px con più aria sopra (104px). (2) **Fase-card mobile**: il CTA schiacciava il
testo su 4 righe; ora `flex-wrap` di base con CTA a tutta larghezza sotto il testo
(regola prima solo desktop, unificata). (3) **Toggle tema su mobile**: il bottone
`#toggle-tema` era `display:none` sotto i 768px (nota aperta da BR7) — ora sempre
visibile nella nav in basso; testato il cambio tema dal telefono. (4) **Footer
mobile**: l'ultima riga finiva sotto la nav fissa — aggiunto padding-bottom
dedicato sotto i 768px, verificato via bounding box. (5) **Modernizzazione
diffusa**: ombre morbide a due livelli (`--shadow-card` rivisto) su percorso/
preparazione/card mete/requisiti/scadenze; bottoni primari/secondari/link-scheda/
celebrazione a pillola (`--radius-pill`); micro-transizione `tab-in` al cambio
tab; sfondo body con gradiente leggero in testa; ombra alla nav; gap 16px nella
griglia mete desktop; titoli sezione 1.6rem su desktop. (6) **Leggibilità tema
notte**: link/CTA testuali blu `--primary` poco leggibili sul fondo blu notte
portati a `#a7c3ff` (fase-cta, link-torna-tab, cand-checklist-toggle,
card-dettagli-hint, profilo-strip-link). **Verifica a video** (preview porta
8001, mobile 375px e desktop 1280px, tema chiaro e notte, Sapienza area 0421 con
60 mete): home/percorso, Mete (card, chip, schedina), Candidatura ("Ora tocca a
te" + capitoli), footer; griglie desktop confermate via `getBoundingClientRect()`
(hero 668px + sidebar 360px; checklist 712px + colonna azione 320px); nessun
errore console. Nessun file JS/HTML/dati toccato: unico file modificato
`css/style.css` (più questa nota).)

**Aggiornamento precedente:** 2026-07-05 — sessione 26, Cowork (**Script di utilità: RUN-SITO.bat creato.** Nuovo file batch `RUN-SITO.bat` nel repo per lanciare il sito localmente con un singolo comando. Opzioni: (1) doppio-click senza sincronizzazione → avvia il server sulla porta 8001 istantaneamente; (2) doppio-click + rispondi `s` → scarica dati fresh da GitHub e poi avvia. Coerente nello stile con i file `.bat` esistenti (`SCARICA.bat`, `PUBBLICA.bat`), con UTF-8 e gestione lock di git inclusi. Nessun file modificato, nessun codice del sito toccato. Aggiornato il file presente.)

**Aggiornamento precedente:** 2026-07-05 — sessione 25, Claude Code (**BR7 QA e
chiusura ondata BRAND — regressione completa + due fix da assessment.**
Letti in ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`,
`DISEGNO_BRAND.md`, `design/readme.md`. Eseguito SOLO il blocco BR7 di
`DISEGNO_BRAND.md` §3 — ultima sessione dell'ondata BRAND (BR0-BR7 tutte
fatte). **Fix 1 — meta description/OG/Twitter** (`index.html`, head):
sostituiti i tre blocchi che dicevano ancora "per studenti Ca' Foscari …
249 mete" (risalenti a prima del multi-ateneo) con testo neutro rispetto
all'ateneo e un numero tondo per difetto — "Oltre 1.900 mete" (contate le
occorrenze di `id:` nei 23 file `js/atenei/**/dati-mete-*.js`: 1.929 mete
reali a oggi tra i due atenei, quindi "oltre 1.900" resta onesto anche
dopo i prossimi batch Codex che ne aggiungono). Nessun cambio HTML/JS di
logica, solo testo nei tag `<meta>` — **nessun `node --check` necessario**
(zero file `.js` toccati in questa sessione). **Fix 2 — decisione sulla
pagina Timeline nascosta**: verificata a video (Ca' Foscari e Sapienza,
sottotitolo `scadenze-sottotitolo` corretto per ateneo grazie a
`window.ATENEO_LABEL`, dati `SCADENZE_CAFOSCARI` — nome storico ma
riassegnato per ateneo in `index.html`, non un bug) — la pagina FUNZIONA
correttamente e non ha difetti, ma resta una lista piatta delle stesse
scadenze già presenti (in forma più ricca, coi passi di checklist
collegati) nella vista Candidatura da BR5/UX3: la duplicazione sospettata
nell'assessment 04/07 è confermata. **Decisione**: non rimuovere ora — la
spec (`DISEGNO_BRAND.md` §3 BR7) assegna la rimozione effettiva a
"UX6/correzioni", cioè dopo il test con l'utente reale (il fratello di
Nicola), per verificare sul campo se la pagina confonde davvero prima di
tagliarla; BR7 si limita a registrare la decisione. Nessun file toccato
per questo punto. **Regressione completa** (preview locale porta 8001 —
porta 8000 già occupata sull'ambiente, stessa nota ambientale di sessioni
precedenti; `localhost:8001` usato senza differenze): (1) **onboarding da
localStorage pulito**, Ca' Foscari → Economia → Triennale: 3 passi, puntini
di progresso, pose Wiz corrette, landing con conteggio mete reale (39),
badge "Bando 2026/27 aperto" quando la data di sistema è forzata (solo
lato test, nessun file toccato) a prima della chiusura bando — spento
correttamente quando il bando è chiuso (dato reale, 5/7/2026); (2)
**Sapienza** (onboarding pulito → Giurisprudenza → Magistrale): 60 mete,
banner oro "dati in verifica" su Idoneità, footer con ateneo corretto,
Timeline con sottotitolo e scadenze Sapienza (non quelle di Ca' Foscari);
(3) **zaino vecchio simulato** (oggetto minimo `{profilo, checklist:{},
metePreferite:[], fase:"selezionato"}`, senza `schedina`/`checklistPost`/
`zainoCelebrato`/`gruppoZaino` sui dati Sapienza ancora `inVerifica`): zero
errori, zaino "Lo zaino" mostra tutte le voci nel capitolo "Prima"
(fallback corretto, nessun campo `gruppoZaino` sui dati Sapienza),
nessuna celebrazione ri-mostrata (fase già "selezionato" trattata come già
festeggiata); (4) **chiaro/notte** su entrambe le viste "Oggi"/Mete/Zaino,
mobile e desktop: leggibile ovunque, schedina resta color crema in
entrambi i temi (invariato, scelta di BR4); (5) **mobile ~390px e desktop
1280px**: layout 2 colonne desktop confermato via
`getBoundingClientRect()` (container 1185px), nav in header con
logo+wordmark e voci Percorso/Mete/Zaino, mobile invariato a 1 colonna;
(6) **export .ics**: forzata la data di sistema (solo lato test) a prima
delle scadenze, bottone "🗓 Aggiungi al calendario" presente solo sulle
scadenze future (corretto, non un difetto) e produce un blob `.ics`
valido; (7) **riordino schedina**: aggiunta di 2 mete preferite, frecce
▲▼ testate (click reale), ordine si scambia correttamente e persiste dopo
reload; (8) **`prefers-reduced-motion`**: verificata la presenza della
regola globale in `css/style.css` (introdotta in BR1, invariata); (9)
**breakpoint**: confermato nessun residuo `700px` in `css/style.css` (già
consolidati su 768/1024 in BR6). Nessun errore in console, nessuna
richiesta di rete fallita in nessuno scenario. **Nota emersa in QA, NON
corretta in questa sessione** (fuori dai due fix esplicitamente assegnati
a BR7, per non anticipare correzioni non richieste): il bottone
`#toggle-tema` (cambio tema chiaro/notte) ha `display:none` sotto i
768px (`css/style.css`) — su mobile lo studente non ha un modo per
cambiare tema dall'interfaccia (la modalità notte segue solo l'ultima
preferenza salvata o va forzata da chi testa). Non risulta introdotto da
nessuna sessione BR (il CSS non è stato toccato per questo in BR0-BR6):
segnalato per una futura sessione di correzioni, non essendo uno dei due
fix esplicitamente assegnati a BR7. **Non toccati**: `js/app.js` (zero
modifiche, quindi zero `node --check` da eseguire), tutti i file dati,
motore di compatibilità, markup/logica di onboarding/schedina/zaino/
candidatura. **Ondata BRAND (BR0-BR7) COMPLETATA.** Roadmap: BR7
spuntato, ondata BRAND chiusa. Prossimo passo: **UX6** — test con
l'utente reale (il fratello di Nicola, Sapienza Giurisprudenza).)

**Aggiornamento precedente:** 2026-07-05 — sessione 24, Claude Code (**BR6 Zaino
(6a) + Desktop (7a) IMPLEMENTATA — fase 4 come "Lo zaino" a 3 capitoli,
celebrazione blu notte, layout desktop 2 colonne per la Candidatura.** Letti
in ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR6 di `DISEGNO_BRAND.md` §3.
**6a — Lo zaino**: la checklist post-selezione (fase 4, `renderChecklistPost()`
in `js/app.js`) ora si presenta in 3 capitoli cronologici "Prima" / "Durante" /
"Dopo" (nuovo `<h2 class="zaino-capitolo-titolo">`), ognuno con le stesse
sotto-intestazioni per `fase` di prima (nessun dato perso, solo un livello di
raggruppamento in più). Mappatura via nuovo campo dati `gruppoZaino` su
ciascuna voce di `js/atenei/cafoscari/dati-postselezione.js` (Accettazione +
Learning Agreement + Documenti pre-partenza → Prima, Arrivo → Durante,
Rientro → Dopo); **fallback verificato su dati reali**: il file Sapienza
(ancora provvisorio, `inVerifica`) NON ha il campo — lasciato apposta senza,
per testare che il codice ricada su "Prima" per tutte le sue 5 voci senza
inventare una mappatura Prima/Durante/Dopo non validata. Titolo/sottotitolo
del tab (`#checklist-titolo`/`#checklist-sottotitolo`, nuovi id) e l'etichetta
di nav (`aggiornaNavCandidatura()`) cambiano in "🎒 Lo zaino"/"Zaino" solo in
fase "selezionato" (`aggiornaIntestazioneZaino()`, nuova funzione). **Fix
minore chiuso in corso di sessione**: `renderChecklistPost()` non svuotava
mai `#prossimi-passi-v2` (blocco BR5 "Ora tocca a te", specifico della fase
"domanda") — passando a "selezionato" restava visibile con contenuto vecchio;
ora viene nascosto esplicitamente all'ingresso nello zaino. **Celebrazione
ingresso in fase 4**: riusato l'overlay blu notte `#celebrazione-overlay` di
`index.html` — era markup MORTO (nessun JS lo pilotava dai tempi della v1,
usava ancora `img/wiz-hero.png`); ora `mostraCelebrazioneZaino()`/
`initCelebrazioneZaino()` lo mostrano una sola volta al primo click su "🎉 Sono
stato selezionato" (nuovo flag `ZAINO.zainoCelebrato`, fallback per zaini
vecchi: già `selezionato` → considerato già celebrato, per non sorprendere chi
è già in quella fase), con Wiz in posa `wiz-esulta.webp` (tabella pose
DISEGNO_BRAND §2-bis) e testo "Sei stato selezionato! 🎉 Ora prepara lo zaino:
prima, durante e dopo la partenza." **7a — Desktop 2 colonne**: `#tab-checklist`
diventa una griglia CSS 2 colonne (`1fr 320px`) da 1024px in su — stessa
tecnica già in uso per `#tab-oggi` (assegnazione di `grid-column` ai figli
esistenti via CSS, nessun markup nuovo): colonna sinistra = header/banner/
lista o capitoli; colonna destra (azione) = cambio fase, barra di progresso,
banner Wiz e "Ora tocca a te". Mobile INVARIATO (`display:block` sotto i
1024px, verificato). **Consolidamento breakpoint**: le due regole a
`min-width:700px` (griglia mete e griglia requisiti) portate a `768px` come
da regola BR §3 ("usare 768 e 1024 come soglie canoniche"); lasciato invariato
il blocco `max-width:480px` (rifinitura telefono piccolo, non un confine
mobile/tablet/desktop) e il breakpoint 768px già esistente per la nav in
header (era già conforme, nessuna modifica necessaria). **`node --check`**:
OK su `js/app.js` e su entrambi i `dati-postselezione.js` toccati. **Verifica
a video** (preview locale porta 8001; **nota ambientale ricorrente**: il
processo del server ha servito per un po' una copia stale di
`dati-postselezione.js` dal mount OneDrive anche dopo un riavvio del server —
stesso problema già documentato nelle sessioni 8/9/15/19; risolto forzando un
fetch `cache:'no-store'` e confermando poi che il file su disco e il
contenuto servito coincidevano, nessun file toccato per il test): mobile
~390px e desktop 1280px, tema chiaro E notte, ENTRAMBI gli atenei (Ca'
Foscari fase domanda E selezionato, Sapienza selezionato) — capitoli Prima/
Durante/Dopo corretti via bounding-box e screenshot; spunta di una voce dello
zaino salva in `ZAINO.checklistPost` e persiste; celebrazione mostrata al
primo passaggio a "selezionato" e MAI più ai passaggi successivi (verificato
il flag anche dentro il localStorage); griglia desktop del tab Candidatura
verificata via `getBoundingClientRect()` (colonna lista 837px + colonna
azione 320px, gap 28px) oltre che a video; "Ora tocca a te" verificato anche
con contenuto reale forzando temporaneamente (solo lato test, nessun file
toccato) la data di sistema a prima delle scadenze, come nelle sessioni BR2/
BR5 — compare correttamente nella colonna azione desktop; tab Percorso e
Mete verificati senza regressioni dopo le modifiche; nessun errore console,
nessuna richiesta di rete fallita. **Non toccati:** dati di checklist/
scadenze/mete, motore di compatibilità, onboarding, Idoneità, Mete/Schedina
(BR4), Candidatura "Ora tocca a te" (BR5, solo riposizionata via CSS su
desktop). Roadmap: BR6 spuntato.)

**Aggiornamento precedente:** 2026-07-05 — sessione 23, Claude Code (**BR5 Candidatura
"Ora tocca a te" IMPLEMENTATA — prossimi 3 passi + capitoli ripiegabili.** Letti in
ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR5 (5b) di `DISEGNO_BRAND.md` §3, nessun
dato nuovo — solo presentazione derivata da ciò che UX3 (`renderChecklist()` in
`js/app.js`) già calcola. **Nuovo blocco "Ora tocca a te"** (`renderProssimiPassi()`,
nuovo `#prossimi-passi-v2` in `index.html`, subito sopra `#lista-checklist-v2`): le
prime 3 voci di checklist non spuntate in ordine cronologico (stesso ordine con cui i
capitoli le presentano sotto — voci per scadenza in ordine di data, poi quelle di
"Quando puoi"), escluse quelle scadute (`voceScaduta()`, invariata) — coerente con la
regola "mai proporre come prossimo passo qualcosa su cui non si può più agire" già
in uso altrove. Riusa `creaVoceChecklist()` così checkbox, salvataggio zaino,
traduttore a 3 registri e animazione di spunta restano IDENTICI a quelli sotto (nessuna
logica duplicata); nuove classi CSS solo per il taglio più grande richiesto dalla
spec ("grandi e spuntabili direttamente"). Se non ci sono voci attuabili (bando
chiuso, o tutto spuntato) il blocco si nasconde (`display:none`) invece di restare
vuoto. **Capitoli ripiegabili**: ogni capitolo (per-scadenza e "Quando puoi") ora
racchiude le sue voci di checklist in un `<details class="cand-checklist-dettagli">`
con `<summary>` — aperto di default SOLO per il capitolo "imminente" (quello che
contiene la voce attualmente attiva, stessa logica di `prossimaVoceId`), tutti gli
altri partono chiusi con etichetta "Mostra i passi ▸"; l'header della scadenza
(card data/countdown/bottone .ics) resta SEMPRE visibile fuori dal `<details>`, quindi
il bottone "Aggiungi al calendario" non rischia di far scattare/richiudere il
riquadro per errore (nessun bottone dentro un `<summary>`). Nessuna modifica ai dati
(`dati-checklist.js`/`dati-scadenze.js`) né al motore (`prossimaScadenzaAzionabile`,
`voceScaduta`, countdown): solo presentazione. **`node --check js/app.js`**: OK.
**Verifica a video** (preview locale porta 8001): mobile ~390px e desktop 1280px,
tema chiaro E notte, ENTRAMBI gli atenei (Ca' Foscari, Sapienza) — dato che la data
di sistema (5/7/2026) è successiva a TUTTE le scadenze del bando 2026/27 di entrambi
gli atenei (bando chiuso, coerente con la nota già in Roadmap "stagionalità"), il
blocco "Ora tocca a te" con dati reali risultava vuoto/nascosto quando le uniche voci
non spuntate erano tutte scadute — comportamento CORRETTO, non un difetto; per
verificare il caso con voci attuabili ho temporaneamente forzato la data di sistema
nel browser (solo lato test, nessun file toccato) a un giorno precedente le scadenze:
confermato che il blocco mostra le prime 3 voci, che spuntarne una dal blocco
aggiorna lo zaino e fa comparire subito la voce successiva, e che il capitolo
"imminente" parte aperto mentre gli altri restano chiusi ("Mostra i passi ▸",
verificato anche il click reale di apertura/chiusura). Zaino vecchio testato
(Sapienza, senza `schedina`/`autoverifica`/`checklistPost`): nessun errore, fallback
invariato. Dark mode: pannello e toggle leggibili (bordo/testo su `--primary`, stesso
pattern già usato altrove in tema notte, nessun colore nuovo). Nessun errore console,
nessuna richiesta di rete fallita. **Confronto col prototipo**
(`design/riferimenti/ErasmusWiz Prototipo (standalone).html`): stesso limite già
documentato in BR2 — il bundle React dà `[bundle] error` offline e non arriva a
renderizzare la schermata Candidatura, quindi nessun confronto pixel possibile;
realizzato seguendo la descrizione testuale di `DISEGNO_BRAND.md` §3 (BR5) e i token
di `design/tokens/` (bordo/ombra `--primary`/`--shadow-card`, raggio `--radius-lg`,
titolo in `--font-display`). **Non toccati:** dati di checklist/scadenze, motore
temporale, Mete/Schedina (BR4), Zaino/Desktop (BR6). Roadmap: BR5 spuntato.)

**Aggiornamento precedente:** 2026-07-05 — sessione 22, Claude Code (**BR4 Mete + Schedina
IMPLEMENTATA — card compatte, filtri a chip, schedina "Le tue 5 scelte", banner lingue.**
Letti in ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR4 di `DISEGNO_BRAND.md` §3 (l'unico
blocco BR con logica nuova). **4a — card mete compatte** (`renderMete()` in
`js/app.js`): rimossi dalla card in griglia gli elenchi completi di posti/lingue
(restano SOLO nel pannello di dettaglio esistente, `apriDettaglioMeta()`, non
toccato); al loro posto un punteggio compatto in Space Mono (classe `.meta-punteggio`,
già definita in CSS da sessioni precedenti ma MAI usata in `renderMete()` — bug
minore chiuso) + stato testuale, e due chip sintetiche ("N posti", "Lingua Livello"
tramite nuove `postiSintesi()`/`linguaSintesi()`). **Filtri a chip pill** (nuovo
`#filtri-mete-chip`): Tutte/✅ Compatibili/⚠️ Con riserve/🔒 Non accessibili, visibili
solo con profilo compilato, stato in variabile di modulo `filtroMeteAttivo` (UI, non
salvato nello zaino); nuovo helper `categoriaCompat(comp)` condiviso tra badge e
filtro (stessa soglia di `calcolaCompatibilita`, nessuna doppia fonte di verità).
**4b — Schedina "Le tue 5 scelte"** (sostituisce la vecchia lista semplice
`renderPreferite()`, stesso contenitore `#sezione-preferite`): 5 slot numerati sempre
visibili, riempiti dalle mete preferite ⭐ (meccanismo di raccolta invariato), frecce
▲▼ per riordinare + ✕ per rimuovere, slot vuoti come invito ("Aggiungi dalla lista qui
sotto"), stato ✅/⚠️/🔒 ereditato dalla meta se il profilo è compilato. Nuovo campo
`ZAINO.schedina: [idMeta,...]`; nuova funzione `schedinaIds()` sincronizza ad ogni
render l'ordine salvato con le preferite correnti (mantiene l'ordine per chi è ancora
preferita, aggiunge in coda le nuove, scarta chi non lo è più) — **fallback zaini
vecchi verificato**: zaino senza `schedina` (solo `metePreferite`) ricostruisce
correttamente lo slot 1/5 al primo render, nessun errore anche con un id-meta non
più esistente nei dati (slot trattato come vuoto, nessun crash). **Fix da assessment
04/07 — banner lingue contestuale** (mai implementato da UX3/UX5, ora chiuso):
nuovo `#banner-lingue-mete` in `renderMete()`, visibile SOLO se il profilo esiste e
`profilo.lingue` è vuoto — riusa lo stile esistente `.banner-in-verifica` (oro, già
usato da BR3 per "dati in verifica"), nessun colore nuovo. **Pulizia CSS**: rimosse le
regole ormai morte per l'evoluzione di questa sessione — `.badge-v2*`/`.campo-v2*`
(vecchia card estesa) e `.preferita-item`/`.preferita-nome`/`.preferita-rimuovi`/
`.preferite-lista` + relativi override `.tema-notte` (vecchia lista preferiti
sostituita dalla schedina). **Bug di leggibilità in tema notte trovato e corretto
in corso di sessione** (non pre-esistente nel codice pubblicato, introdotto e
richiuso nella stessa sessione): il riquadro della schedina (`#sezione-preferite`)
resta color crema (`--gold-bg`) in ENTRAMBI i temi per scelta preesistente (mai
sovrascritto per il tema notte, come gli altri banner oro del sito); il primo
tentativo di stile per lo slot usava però `var(--text-dark)`/`var(--text-muted)`,
che in tema notte diventano bianco/chiaro e sparivano sullo sfondo crema — corretto
usando colori fissi (`var(--night-bg)` per il nome, blu trasparente per lo stato),
stesso pattern già in uso per `.preferite-label`/`.msg-preferite` nello stesso
riquadro. Token: nessun valore nuovo, solo variabili già mappate da BR0
(`--gold`, `--gold-dark`, `--gold-border`, `--primary`, `--radius-pill`,
`--radius-sm`, `--font-mono`). **`node --check js/app.js`**: OK. **Verifica a video**
(preview locale porta 8001): mobile ~390px e desktop 1280px, tema chiaro E notte,
ENTRAMBI gli atenei (Ca' Foscari area 0413, Sapienza area 0731) — card compatte
leggibili in tutte le combinazioni, punteggio mono ben visibile, chip filtro
funzionanti (conteggio aggiornato, messaggio "Nessuna meta con questo filtro"
quando 0 risultati), schedina: aggiunta/rimozione/riordino ▲▼ testati dal vivo
(click reali, non solo `element.click()` di bypass), persistenza dopo reload
verificata; banner lingue compare/sparisce correttamente compilando il campo
lingue; nessun errore console, nessuna richiesta di rete fallita. **Non toccati:**
motore di compatibilità (pesi 50/30/20), pannello di dettaglio meta, onboarding,
fase 1/idoneità, checklist/candidatura (BR5), zaino/desktop (BR6). Roadmap:
BR4 spuntato.)

**Aggiornamento precedente:** 2026-07-05 — sessione 21, Claude Code (**BR3 Onboarding +
Fase 1 IMPLEMENTATA — vestizione onboarding e semaforo requisiti.** Letti in ordine
`CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`, `design/readme.md`.
Eseguito SOLO il blocco BR3 di `DISEGNO_BRAND.md` §3, incluso il fix da assessment
04/07 sulla coerenza fase 1. **Fix coerenza fase 1** (`js/app.js`, `calcolaFasi()`):
la fase 1 dello stepper diventava ✅ col solo `profiloOk`, ignorando le
auto-verifiche introdotte da UX4 — bug reale, verificabile: bastava compilare il
profilo (senza spuntare nulla in Idoneità) per vedere la fase 1 già "fatta". Ora
`fatto` dipende da `requisitiOk` (tutte le voci di `REQUISITI_BANDO` presenti in
`ZAINO.autoverifica`); fallback verificato a video: profilo compilato + zero
spunte → fase 1 resta "▶ attiva" con CTA "Controlla se sei idoneo", esattamente
come richiesto dalla spec. **Onboarding (2b), vestito** (`index.html`/`css/style.css`/
`js/app.js`, nessun cambio alla logica dei 3 passi già esistente da UX1): Wiz cambia
posa in base allo schermo — `wiz-pensieroso.webp` (mano al mento) durante le 3
domande, `wiz-saluto.webp` nello schermo finale "Fatto ✨" (tabella pose di
DISEGNO_BRAND.md §2-bis, sostituendo il vecchio `wiz-hero.png` SOLO nell'overlay
onboarding); nuovo codice in `mostraPassoOnboarding()` gestisce anche l'`src`
dell'unico `<img id="onboarding-wiz-img">`. Aggiunti 3 puntini di progresso
discreti (`#onboarding-progresso`, oro sul passo attivo, nascosti nello schermo
finale) sotto Wiz, sopra l'eyebrow testuale già esistente ("1 di 3" ecc., non
toccato). Le opzioni (`.onboarding-opzione`) da rettangoli a "card pill grandi" —
`border-radius: var(--radius-pill)`, padding più generoso, testo centrato, più il
press `translateY(1px) scale(.985)` di BR1 (mancava). **Fase 1 (3b), semaforo**
(`renderIdoneita()` in `js/app.js` + CSS): ogni card requisito mostra ora
esplicitamente lo stato in testa — 🟡 "da verificare" o ✅ quando la checkbox "Lo
rispetto" è spuntata (nuove classi `.requisito-v2--daverificare`/`--ok`, bordo
superiore oro→verde); il traduttore a scomparsa "Cosa dice il bando" (UX4/UX5) non
è stato toccato. La checkbox ora richiama anche `renderFaseStepper()` oltre a
`renderIdoneita()`, così lo stepper si aggiorna live mentre si spunta. **Nessun
flag ⚠️/🔒 nei dati dei requisiti**: la scala del bando è binaria (verificato/da
verificare), quindi il semaforo usa solo 🟡/✅ — coerente coi dati reali, non
inventato. **Validato:** `node --check js/app.js` OK. **Verifica a video** (preview
locale porta 8001, localStorage pulito per il flusso onboarding completo):
mobile ~390px e desktop 1280px, tema chiaro E notte, ENTRAMBI gli atenei (Ca'
Foscari, Sapienza) — onboarding completo passo 1→2→3→landing con Wiz e puntini
corretti anche per dipartimenti Sapienza con nomi lunghi (le pill vanno a capo su
due righe, nessuna rottura); tab Idoneità: semaforo 🟡 su tutti i requisiti appena
arrivati, ✅ + bordo verde dopo spunta, banner "Sembri idoneo" invariato, banner
"in verifica" Sapienza invariato; stepper "Percorso" verificato nei due stati
(profilo senza spunte → fase 1 attiva; tutte le spunte → fase 1 fatta); dark mode
leggibile (bordo verde `--green` su sfondo card scuro, contrasto sufficiente,
stesso token già usato altrove in dark mode prima di questa sessione); nessun
errore console, nessuna richiesta di rete fallita. **Nota ambientale (non un
bug del sito):** lo strumento di screenshot del preview a 1280px mostrava
visivamente solo una porzione della larghezza reale — verificato via
`getBoundingClientRect()` che l'overlay onboarding e i suoi contenuti occupano
davvero l'intera larghezza (1280px, contenuto centrato a x 450–830), quindi è un
artefatto dello strumento di cattura, non un difetto di layout (coerente con
analoghe note di sessioni precedenti sul tool di preview). **Non toccati:** Mete/
Schedina (BR4), Candidatura (BR5), Zaino/Desktop (BR6), meta description/OG (BR7).
Roadmap: BR3 spuntato.)

**Aggiornamento precedente:** 2026-07-04 — sessione 20, in chat con Claude (**MAPPATURA
SAPIENZA COMPLETATA (seeding) + pipeline Codex efficientata.** (1) **Seeding finito**:
generate via script (da export CSV ufficiale `goerasmus/export`, niente scraping) le
ULTIME 10 Facoltà Sapienza — Scienze Politiche 24, DIET 26, Polo di Latina 33, Scienze
Statistiche 38, Informatica 50, DIAG 58, Medicina e Odontoiatria 91, Ingegneria Civile
128, Scienze MFN 254, Lettere e Filosofia 424 = **1.126 mete** in 10 nuovi file
`js/atenei/sapienza/dati-mete-*.js`, agganciati a `_meteAllSap` in `index.html`. I CSV
grandi li ha scaricati Nicola in `fonti/goerasmus-*.csv` (il mount bash risultava di
nuovo stale/troncato su vari file: contenuto vero verificato col Read tool, 2 download
errati del browser individuati via md5 e rifatti). (2) **Pipeline efficientata** (scelta
di Nicola: riuso + batch da 8): `setup-dipartimento.mjs` ora fa il **RIUSO** — pre-compila
lingua/scadenze dei nuovi dipartimenti copiandole dalle mete già mappate con lo stesso
codice Erasmus (spazi normalizzati, vale anche tra atenei) ed eredita i CEFR "non
trovabili"; `applica-batch.mjs` fa la **PROPAGAZIONE** — ogni dato trovato da Codex viene
copiato negli altri dipartimenti con lo stesso partner (solo campi vuoti); sotto-batch e
follow-up passano **da 5 a 8 mete**; `prepara-batch.mjs` emette `fileGiaCreato` e
istruzioni "solo setup" quando il seed Sapienza esiste già (Codex non tenta mai il
self-seed). Tutto testato end-to-end in scratch (mini-repo): simulazione dei 10 setup →
**~530 mete su 1.126 (47%) complete col solo riuso**, restano ~408 codici in 57 batch;
propagazione verificata cross-ateneo (E SEVILLA01 → 2 file Ca' Foscari); `valida-stato`
sempre "Stato coerente". (3) In `mappatura-stato.json`: accodati 10 batch
`nuovo_dipartimento` (dopo i 6 follow-up residui), ordine piccole→grandi. (4) Nuovo
documento `PIANO_MAPPATURA_SAPIENZA.md` (piano completo + azioni manuali).
**⬆️ Azioni per Nicola: `PUBBLICA.bat` e RE-INCOLLARE il prompt aggiornato
`automazioni/PROMPT_CODEX_mappatura.md` nella piattaforma Codex** — senza questi due
passi Codex non vede né coda né nuove regole.)

**Aggiornamento precedente:** 2026-07-04 — sessione 19, Claude Code (**BR2 Home e
identità IMPLEMENTATA — hero blu notte, stepper e nav ribrandizzati.** Letti
in ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR2 di `DISEGNO_BRAND.md` §3.
**Mascotte (§2-bis)**: scritto uno script Python (Pillow + scipy, non un
servizio online) che rimuove lo sfondo bianco delle 7 pose in
`design/assets/mascotte/*.png` per flood-fill dai bordi (solo i pixel
"quasi bianchi" CONNESSI al bordo diventano trasparenti, con una lieve
sfumatura anti-aliasing sul contorno — non un taglio netto, e senza
intaccare il bianco che fa parte del personaggio, es. i dettagli del
vestito), ritaglia al bounding box e converte in webp; risultato in
`img/mascotte/*.webp`, tutte sotto i 100 KB richiesti (36-67 KB), verificato
visivamente componendo su una scacchiera di controllo. **Hero**: `.home-header`
(in `index.html`/`css/style.css`) trasformato da semplice riga di saluto a
pannello blu notte (`--night-bg`→`--night-bg-2`, stelline dorate via
radial-gradient, bordo raggi 0/0/28/28px flush in cima su mobile, card
interamente arrotondata su desktop) con: eyebrow (data), nuovo badge dorato
"Bando AAAA/AA aperto" (`#badge-bando`), saluto invariato (`#home-data`/
`#home-nome`, stessi id, nessuna rottura di `renderHome()`), nuova riga claim
"Entri confuso, esci con un piano." (testo fisso da `design/readme.md`, non
dati), Wiz in posa `wiz-saluto` (nuovo asset, sostituisce `wiz-hero.png` SOLO
nell'hero e nel Wiz della card missione — stessa posa in entrambi per
rispettare la regola "una posa per schermata" di BR §2-bis — dato che sono
nella stessa schermata "Oggi"; onboarding/celebrazione NON toccati, restano
`wiz-hero.png`: la loro vestizione è BR3/fuori scope di questa sessione).
**Badge onesto, non hardcoded**: nuova funzione in `renderHome()` (`js/app.js`)
che mostra il badge SOLO se il bando non è chiuso (riusa `candidatureChiuse()`
già esistente da UX3, nessuna logica nuova) e lo studente non è già
`selezionato` — altrimenti il badge resta nascosto, mai una scritta "aperto"
quando non è vero (regola di onestà di `design/readme.md`). Formato anno
`"2026/2027"` → `"2026/27"` per il testo del badge. **Stepper 4 fasi**:
`.fase-stato-icona` da semplice emoji a badge circolare 28px con sfondo per
stato (verde tenue se fatto, oro pieno se attivo, grigio se futuro);
`.fase-cta` da riquadro a pillola (radius-pill) coerente col resto dei
bottoni. Nessuna modifica alla logica di `calcolaFasi()`/`renderFaseStepper()`.
**Nav**: aggiunta la stessa pillola dorata di sfondo sull'item attivo anche
su mobile (prima era solo desktop), rimosso un colore oro non allineato ai
token rimasto da prima di BR0 (`rgba(255,215,102,…)` → ora eredita lo stesso
stile della classe base, allineato a `--gold`). **Non toccati**: markup/logica
di onboarding, celebrazione, schedina (BR3/BR4), meta description/OG (BR7).
Validato: `node --check js/app.js` OK. **Verifica a video** (preview locale
porta 8001, zaino di test precompilato in localStorage): mobile ~390px e
desktop 1280px, tema chiaro E notte, ENTRAMBI gli atenei (Ca' Foscari,
Sapienza) — hero leggibile in tutte le combinazioni; in tema notte a
desktop l'hero rischiava di sparire nel fondo pagina (stesso `--night-bg` di
`--bg-app` in dark mode) → aggiunto un bordo sottile (`--night-border`) su
tutti i lati per ridargli un contorno visibile, fix minimo non estetico;
badge testato in entrambi gli stati (forzando `candidatureChiuse()` a
`false` da console): compare in oro "Bando 2026/27 aperto", altrimenti
resta nascosto come nel dato reale (bando chiuso al 4/7/2026); nessun
errore console, nessuna richiesta di rete fallita. **Confronto col
prototipo** (`design/riferimenti/ErasmusWiz Prototipo (standalone).html`):
il file è un bundle React che in locale/offline dà `[bundle] error` a
schermo e non renderizza uno stato "hero" separato dalla home (mostra
saluto+itinerario in un'unica vista chiara, senza superficie blu notte) —
la sezione hero blu notte descritta in `DISEGNO_BRAND.md` §3 non è quindi
osservabile 1:1 nel prototipo così com'è; realizzata seguendo la
descrizione testuale della spec e i token di `design/tokens/`, non un
confronto pixel. **Nota ambientale**: durante il test iniziale il server di
preview ha servito per un po' una versione cache di `js/app.js` dopo un
reload semplice (niente header di cache da `python -m http.server`) — non
un difetto del codice, verificato rifetchando i file con `cache: 'no-store'`
e a server riavviato la versione corretta viene servita al primo colpo.
Roadmap: BR2 spuntato.)

**Aggiornamento precedente:** 2026-07-04 — sessione 18, Claude Code (**BR1 Componenti
base IMPLEMENTATA — rifiniture di interazione (solo CSS) in `css/style.css`.**
Letti in ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR1 di `DISEGNO_BRAND.md` §3 ("Componenti
base — solo CSS"). Nessun componente nuovo di design system esisteva già nel repo
(`design/components/` non è stato copiato, solo `design/tokens/` e `design/assets/`),
quindi il lavoro è stato applicare le regole d'interazione previste da BR1 e da
`design/readme.md` §VISUAL FOUNDATIONS agli elementi già esistenti in `css/style.css`,
senza toccare markup (`index.html`) né logica (`js/app.js`). Aggiunti in `:root`:
token di movimento `--ease-out`/`--ease-bounce`/`--dur-fast` (120ms)/`--dur-base`
(200ms)/`--dur-slow` (360ms) e token di stato `--primary-hover` (`#2a63ec`, =
`--blue-600` di `design/tokens/colors.css`), `--primary-active` (`#214ec4`, =
`--blue-700`), `--ring`/`--shadow-focus` (anello focus blu 4px, stessa formula
35% di `--ring` in `design/tokens/colors.css`), `--shadow-card`/`--shadow-card-hover`
(coerenti con `--shadow-sm`/`--shadow-lg` di `design/tokens/spacing.css`, tinta blu,
mai nero). **Bottoni**: corretto un disallineamento dal design system — l'hover
usava `filter: brightness(1.08)` (schiarisce) invece di "tinta più scura" richiesto
da BR1/readme; ora tutti i bottoni primari (`.btn-primary`, `.btn-primario`,
`.link-scheda-v2`, `.celebrazione-btn`) passano a `--primary-hover`/`--gold-dark`
in hover + ombra più grande, e tutti i bottoni (`.btn-primary`, `.btn-secondary`,
`.btn-primario`, `.link-scheda-v2`, `.cand-btn-ics`, `.toggle-fase-btn`,
`.btn-preferita`, `.fase-cta`, `.celebrazione-btn`, `.meta-modal-chiudi`) hanno ora
il press `translateY(1px) scale(.985)` su `:active`, come da spec. **Badge/chip
pill**: verificato che i chip esistenti (`.missione-scadenza`, `.tappa-v2-countdown`,
`.cand-scadenza-countdown`, `.toggle-fase-btn`, `.btn-preferita`,
`.ateneo-selettore`) usano già `--radius-pill` da BR0 — nessuna modifica necessaria.
**Card**: `.card-cliccabile` (card meta cliccabili) allineata esattamente al token
readme "lift al hover" — `translateY(-3px)` (era -2px) + `--shadow-card-hover`
(era un'ombra ad hoc `rgba(31,45,82,...)`, ora tinta blu coerente col design
system). **Campi form**: `.campo-form select/input`, `.riga-lingua select`,
`#cerca-mete` — aggiunto `box-shadow: var(--shadow-focus)` (anello blu 4px) al
focus, in aggiunta al cambio bordo già esistente. **Checklist animata**: nuova
regola `.voce-checklist-v2 input:checked` con `animation: check-pop` (keyframe
scale 1→1.3→1, easing `--ease-bounce`, durata 360ms) — un "pop" alla spunta, non
un loop continuo. **Progress bar**: `.barra-riempimento`/`.prep-barra-fill`
armonizzate sul token `--dur-slow`/`--ease-out` invece di durate/easing ad hoc.
**`prefers-reduced-motion`**: nuova regola globale a fine file che azzera durate
di animazioni/transizioni per chi lo richiede (standard, copre tutte le regole
sopra senza doverle duplicare una per una). **Nessun file JS toccato** — solo
`css/style.css` — quindi nessun `node --check` necessario. **Verifica a video**
(preview locale porta 8001, localStorage precompilato con chiave corretta
`erasmuswiz-zaino` per bypassare l'onboarding): mobile ~390px e desktop 1280px,
tema chiaro E notte, ENTRAMBI gli atenei (Ca' Foscari Economia, Sapienza
Giurisprudenza) — home/percorso, tab Mete (card + link "Scheda ufficiale"), tab
Candidatura (checkbox con animazione pop testata via click, progress bar
aggiornata 0/9→1/9), tab Idoneità, form Profilo (focus ring blu 4px verificato
via `preview_inspect`, valore esatto `rgba(61,125,255,.35) 0 0 0 4px`): tutto
leggibile, nessun testo illeggibile in nessuna combinazione, nessun errore
console, nessuna richiesta di rete fallita. Sapienza in questa sessione mostrava
0 mete in tab Mete con lo zaino di test sintetico (area `IUS/01` non presente nei
dati reali) — comportamento atteso dei dati di prova, non un difetto introdotto
da BR1 (nessun file dati toccato). **Non toccati:** `index.html`, `js/app.js`,
tutti i file dati, `design/`. Roadmap: BR1 spuntato.)

**Aggiornamento precedente:** 2026-07-04 — sessione 17, Claude Code (**BR0 Fondamenta
IMPLEMENTATA — token del design system allineati in `css/style.css`.** Letti in
ordine `CLAUDE.md`, `STATO_DEL_SITO.md`, `ROADMAP.md`, `DISEGNO_BRAND.md`,
`design/readme.md`. Eseguito SOLO il blocco BR0 di `DISEGNO_BRAND.md` §3, come da
istruzione. Nel blocco `:root` di `css/style.css` i valori (non i nomi) delle
variabili sono stati rimappati sui token ufficiali di `design/tokens/*.css`:
blu notte `--night-bg` `#101b3f`→`#1b377b` (+ `--night-bg-2` `#16265c`→`#16306f`),
oro `--gold` `#ffd766`→`#ffb627` (+ `--gold-dark/--gold-bg/--gold-border` sui
token `--gold-600/--gold-50/--gold-200`), testo/bordi (`--text-dark/--text-muted/
--text-hint/--border/--border-strong`) sui token ink-900/500/400/100/200, sfondo
pagina `--bg-app` `#eef3fb`→`#f3f6fc`, semaforo compatibilità (`--green/--amber/
--red` + varianti bg/border) sui token ok/warn/lock; **`--primary` (`#3d7dff`) e
`--red-bg` (`#fdecec`) erano già identici ai token** — confermato: BR0 è un
riallineamento, non un rifacimento. Raggi: `--radius-xl/lg/md/sm` 22/16/12/8px →
28/20/14/10px (pill invariato). Ripulite anche le poche istanze di colore
"inventato" fuori dal `:root` non ancora legate a variabile: i due gradienti blu
notte (celebrazione/onboarding overlay) ora usano `var(--night-bg/--night-bg-2)`;
le due ombre nere pure (`rgba(0,0,0,…)` su Wiz celebrazione e modale mete,
vietate da DISEGNO_BRAND §1 "ombre sempre a tinta blu, mai nero") sostituite con
`rgba(27,55,123,…)`; le stelline del tema notte da `#ffd766` a `var(--gold)`;
i banner `.idoneita-esito` e `.banner-in-verifica` (colori ad hoc `#e6f7ee`/
`#fff4e0` ecc.) ora usano `var(--green/--green-bg)` e `var(--gold/--gold-bg/
--gold-dark)`. **Logo nell'header + favicon**: copiati `logo-mark.svg`,
`icon-star.svg`, `icon-sparkle.svg` da `design/assets/` in `img/` (le pose
mascotte in `design/assets/mascotte/` restano lì: la rimozione sfondo/conversione
webp è compito di BR2, non toccata). L'header desktop mostrava il wordmark
"ErasmusWiz" solo come testo generato via CSS (`::before` su `.nav-bottom`,
niente logo vero); sostituito con un vero markup in `index.html` — nuovo
`<div class="nav-brand">` (logo SVG + wordmark, non cliccabile, `aria-hidden`)
inserito come primo figlio di `.nav-bottom`, nascosto su mobile e mostrato solo
da 768px in su (stessa soglia di prima), senza toccare `.nav-item[data-tab]` né
la logica di navigazione in `app.js` (verificato: `app.js` seleziona solo
`.nav-item[data-tab]`, il nuovo div ha classe diversa quindi zero rischio di
interferenza). Favicon: `<link rel="icon">` ora punta a `img/logo-mark.svg`
(SVG, "favicon dal logo-mark" come da specifica) con `img/icon-192.png` come
`rel="alternate icon"` di fallback per i browser che non supportano favicon SVG;
`apple-touch-icon` invariato. `theme-color` in `index.html` e `background_color`/
`theme_color` in `manifest.json` allineati agli stessi nuovi valori
(`#f3f6fc`/`#1b377b`). **Nessun file JS toccato** (solo CSS/HTML/JSON) — quindi
nessun `node --check` necessario; verificato comunque che `manifest.json` resti
JSON valido dopo la modifica. **Verifica a video** (preview locale porta 8001,
via `preview_start`/localStorage precompilato per bypassare l'onboarding dove
serviva): mobile ~390px e desktop 1280px, tema chiaro E notte, ENTRAMBI gli
atenei (Ca' Foscari Economia, Sapienza Giurisprudenza) — home/percorso a 4 fasi,
missione del giorno, nav (bottom mobile / top desktop col nuovo logo+wordmark
visibile), footer con branding ateneo corretto, tab Mete (badge rossi "non
accessibile"), tab Idoneità (banner oro "in verifica" + valori requisito in
gold-dark): tutto leggibile, nessun testo illeggibile in nessuna combinazione,
nessun errore console, nessuna richiesta di rete fallita. **Confronto di
fedeltà**: i valori hex del prototipo di riferimento
(`design/riferimenti/ErasmusWiz Prototipo (standalone).html`) per bg-page/
bg-night/ok/warn/lock sono risultati IDENTICI a quelli ora in uso — nessuna
divergenza da motivare. **Nota:** durante il test è emerso che il tool di
preview automatico (`preview_click`) non attiva sempre gli handler `click` reali
del sito (onboarding, cambio tab, toggle tema) — bypassato con `element.click()`
via `preview_eval`; NON è un difetto introdotto da questa sessione (nessun JS
toccato, verificato che gli handler funzionano correttamente quando invocati
programmaticamente) — da tenere presente per le prossime sessioni BR se si
riusa lo stesso strumento di preview. **Non toccati:** `js/app.js`, tutti i file
dati, `v2/` (copia storica non collegata al sito, fuori scope), le pose mascotte
webp (BR2). Roadmap: BR0 spuntato.)

**Aggiornamento precedente:** 2026-07-04 — sessione 16, in chat con Claude (**Definita
l'ONDATA BRAND: design system, assessment del sito, mascotte definitiva.** Nessun
codice toccato: sessione di design e pianificazione. (1) **Design system**: Nicola ha
portato da Claude Design il sistema (token, tono di voce, font Bricolage/Jakarta/
Space Mono, blu #3d7dff + oro #ffb627 + notte #1b377b), un prototipo React standalone
e il PDF "Redesign — Esplorazioni"; tutto copiato in `design/` (tokens, asset SVG,
riferimenti). Regola fissata: **niente React** — il prototipo è solo riferimento
visivo, si resta vanilla. (2) **Brief `DISEGNO_BRAND.md`** (nuovo documento-specifica,
vincolante come DISEGNO_UX.md): sessioni **BR0–BR7** (fondamenta token → componenti →
home/identità → onboarding+fase1 → mete+schedina → "prossimi 3 passi" → zaino+desktop
→ QA). Varianti scelte dal PDF: 1a/2b/3b/4a+4b/5b/6a/7a; scartati quiz 3a, chat 2a,
home 1b. Schedina = 5 slot ordinabili (`ZAINO.schedina`); nav desktop nell'header
≥1024px; breakpoint canonici 768/1024. (3) **Assessment sul codice** (fatto file alla
mano): struttura UX al ~70% della visione; 4 difetti trovati e inseriti nel brief —
banner lingue fase 2 MAI implementato (era in DISEGNO_UX §3/§5) → BR4; stepper marca
fase 1 ✅ col solo profiloOk ignorando `ZAINO.autoverifica` → fix in BR3; meta
description/OG di index.html obsoleta ("Ca' Foscari, 249 mete") → BR7; pagina Timeline
nascosta ridondante → decidere in BR7/UX6. ROADMAP aggiornata: nuova sezione ONDATA
BRAND tra UX e B; UX6 marcato "dopo BR7" (primo passaggio informale col fratello già
fatto: direzione confermata). (4) **Mascotte**: approvati i render 3D del maghetto-
tartaruga (stesso personaggio Wiz, forma definitiva — la bozza `mascot-wiz.svg` è
superata); set di 6 pose semantiche + 1 scena marketing, tabella d'uso in
DISEGNO_BRAND §2-bis; cartella `design/assets/mascotte/` creata. **Azioni per
Nicola**: salvare le 7 immagini in `design/assets/mascotte/` coi nomi della tabella;
committare tutto con `PUBBLICA.bat`; poi lanciare Claude Code su BR0 col prompt
concordato in chat. Ordine: UX5-Sapienza (in chat) e BR0–BR7 in parallelo → UX6.)

**Aggiornamento precedente:** 2026-07-03 — sessione 15 (**Sbloccata l'automazione Codex:
bug in `mappatura-stato.json` impediva l'avanzamento a Farmacia/Comunicazione/Scienze
Sociali/Psicologia (Sapienza).** Nicola segnalava che, pur avendo già programmato
l'espansione ai 4 dipartimenti Sapienza rimanenti, ogni lancio di Codex non procedeva.
Due cause distinte, in sequenza: **(a) worktree locale sporca** — il guardrail
`scripts/inizia-batch.mjs` (`git status --porcelain --untracked-files=no` non vuoto →
exit 1, run interrotto SENZA log leggibile per l'utente) blocca ogni run prima ancora
di guardare la coda batch. Causa: gli stessi file-spazzatura tracciati di sessione 14
(l'azione richiesta lì non era ancora stata eseguita) più 2 file con sole differenze
di fine riga. Risolti su Windows con commit mirati (`8d5ef99` rimozione
`m.dipartimentoCf`, poi `2105223` rimozione di altri 4 file-fantasma
`!(ZAINO.checklist`, `` `${a.nome}` ``, `{,+` ecc. — stesso pattern di sessione 14, la
cui azione richiesta è quindi **completata ora**, manualmente via git invece che coi
file `.bat`). **(b) bug più serio, sui dati** — a worktree pulita, Codex si bloccava
dentro `prepara-batch.mjs` con `Error: Meta non trovata: sap-farm-leuven`. Causa: le
voci `statoDipartimenti` di Farmacia/Comunicazione/Scienze Sociali/Psicologia
(Sapienza) in `mappatura-stato.json` erano state scritte A MANO (mai passate da
`scripts/setup-dipartimento.mjs`, violando la regola esplicita del prompt automazione
"NON modificare lo stato a mano") usando il campo `id` della meta (es.
`sap-farm-leuven`) al posto di `codiceErasmus` (es. `"B  LEUVEN01"`) dentro
`pendingScadenze`/`pendingLingua`/`prossimiBatch[].mete` — ma `prepara-batch.mjs`
cerca le mete sempre per `codiceErasmus`. Verificato prima di correggere:
`completate = 0` su tutti e 4 i dipartimenti, quindi nessun lavoro reale da perdere.
Fix: le 4 sezioni sono state rigenerate da zero con la STESSA logica di
`setup-dipartimento.mjs` (chiavi = codiceErasmus, deduplica per le mete che
condividono lo stesso codice — più accordi con lo stesso partner — sotto-batch da 5),
incluso nel commit di pulizia sopra. Verificato due volte DOPO il push, sul commit
pubblicato: `node scripts/valida-stato.mjs` → "Stato coerente"; `node
scripts/prepara-batch.mjs` → batch `farmacia-batch-1` valido con 5 codici Erasmus
reali (`B  LEUVEN01`, `B  LIEGE01`, `B  BRUSSEL01`, `B  BRUXEL04`, `B  ANTWERP01`).
Codex è pronto a ripartire da solo dal batch di Farmacia. **Nota per sessioni
future**: qualsiasi nuovo dipartimento in `mappatura-stato.json` va SEMPRE registrato
via `node scripts/setup-dipartimento.mjs`, mai scrivendo lo stato a mano — è la causa
esatta di questo blocco. **Azione residua per Nicola**: cancellare da Windows due
file di lavoro non tracciati e innocui rimasti sul disco — `_ripara_tmp.mjs` e
`batch/INPUT.json` (`del _ripara_tmp.mjs` e `del batch\INPUT.json`).)

**Aggiornamento precedente:** 2026-07-03 — sessione 14 (**Manutenzione: risolta la causa
dei "file spazzatura" ricorrenti (`!(ZAINO.checklist`, `` `${a.nome}` ``, `{,+`, `main`,
`Stato`...).** Non era corruzione OneDrive: erano residui di comandi shell rotti che
`PUBBLICA.bat` (via `git add -A`) inglobava nei commit, e `PULISCI-SPAZZATURA.bat`
cancellava solo dal disco (non da git), quindi tornavano ad ogni pull. Fix: `PUBBLICA.bat`
ora esclude in automatico dal commit qualsiasi file vuoto senza estensione o con nome
contenente caratteri shell (`$ \` ! { } [ ]`), prima che arrivi online; `PULISCI-SPAZZATURA.bat`
ora fa anche `git rm`, non solo `del`; `.gitignore` aggiornato. **Azione richiesta a
Nicola**: lanciare `PULISCI-SPAZZATURA.bat` poi `PUBBLICA.bat` su Windows per completare
e pubblicare la pulizia — vedi sezione 8, punto 0. Dettagli in sezione 8.)

**Aggiornamento precedente:** 2026-07-03 — sessione 13 (**Form profilo: da codici SSD a
dipartimenti (livello 1, solo UX).** Lo studente nel form "Compila profilo" sceglieva
l'area disciplinare da un menu di codici grezzi (es. "IUS/01"), poco comprensibile.
Ora funziona come l'onboarding: sceglie il DIPARTIMENTO (stesso elenco già usato da
`popolaPassoDipartimento()`) e il codice area viene ricavato dietro le quinte con la
funzione già esistente `areaDominanteDipartimento()` — nessun nuovo file dati, nessuna
mappatura corso-di-laurea. In `index.html`: etichetta del campo cambiata in "Cosa studi
(dipartimento)", stesso `<select id="area-v2">` (id invariato per non rompere il resto
del codice). In `js/app.js`: `popolaAreeV2()` ora popola il select con i dipartimenti
distinti (`m.dipartimentoCf`) invece dei codici area; il submit di `initProfilo()`
legge il dipartimento scelto e salva in `ZAINO.profilo` sia `area` (derivata con
`areaDominanteDipartimento(dipartimento)`, retrocompatibile col matching mete esistente
`m.areeDisciplinari.some(a => a.codice === profilo.area)`, NON toccato) sia
`dipartimento` (nuovo campo, solo per la precompilazione); `precompilaFormV2()` mostra
il dipartimento salvato se presente, altrimenti lo ricava a ritroso dall'area salvata
cercando la prima meta con quell'area che abbia un `dipartimentoCf` (fallback per
profili vecchi salvati prima di questa modifica). Le mete senza `dipartimentoCf`
vengono semplicemente ignorate nella lista (stesso pattern già usato da
`popolaPassoDipartimento()`), nessun crash. Validato in preview locale (porta 8001):
select mostra 8 dipartimenti (non codici); selezionato "Management" e salvato →
`ZAINO.profilo` conteneva `area:"0410"` + `dipartimento:"Management"`; dopo reload il
campo precompilato mostra di nuovo "Management"; nessun errore console. Onboarding non
toccato, continua a usare `areaDominanteDipartimento()` come prima.)

**Aggiornamento precedente:** 2026-07-03 — sessione 12 (**BLOCCO D ristrutturazione UX —
gerarchia della home (P2 di DISEGNO_UX.md: una schermata = una domanda = una azione).**
Deciso con Nicola di saltare il blocco C (= UX5 contenuti Sapienza): resta esplicitamente
"lavoro di Nicola, non di Codex" per `DISEGNO_UX.md` §4 — richiede il testo del bando
Sapienza sotto mano per non rischiare interpretazioni normative inventate. Individuata
l'unica vera ridondanza rimasta: la card "Preparazione candidatura" ripeteva in una
lista (`#prep-steps`) gli stessi testi delle voci di checklist già visibili nella
missione e nel tab Candidatura — tre volte la stessa informazione nella stessa
schermata. Lo stepper (`fase-riassunto`) e la dimensione tipografica (missione 
grande, stepper 13.5px) erano già corretti, non toccati. In `js/app.js`:
`renderPreparazione()` semplificata — mostra solo conteggio (`N/M`) e barra di
progresso, rimossa la generazione della lista `.prep-step`. In `index.html`: rimosso
il contenitore `<div class="prep-steps" id="prep-steps">` non più usato. In
`css/style.css`: rimosse le regole morte `.prep-steps`/`.prep-step`/`.prep-step-check`
(9 righe). **Nota ambientale:** un'altra sessione aveva già un server sulla porta 8001
(`.claude/launch.json` puntava a `python -m http.server 8001` fisso) → reso il
launch config `autoPort`-friendly (`cmd /c "python -m http.server %PORT%"`) così le
sessioni parallele non si bloccano più a vicenda. Validato: `node --check js/app.js`
OK; test end-to-end in preview locale (porta assegnata dinamicamente, onboarding da
zero → Ca' Foscari/Economia/Triennale → home): card "Preparazione candidatura" mostra
solo "0/9" + barra, nessun elenco di passi ripetuto; stepper, missione "Il bando
2026/2027 è chiuso" e barra coesistono senza sovrapposizioni; nessun errore console.
**Restano:** blocco C (contenuti Sapienza, di Nicola) + titoli brevi imperativi per
la checklist (già annotati come "aggiunta al piano C"); poi UX6 (test col fratello).
**NON ANCORA PUBBLICATO:** `git fetch` + rebase + commit + push come da regola sessione 7,
insieme al blocco B della sessione 11 ancora in sospeso.)

**Aggiornamento precedente:** 2026-07-03 — sessione 11 (**BLOCCO B ristrutturazione UX —
motore consapevole del tempo.** Il sito ora sa che il bando 26/27 è chiuso. Nei DATI
(`js/atenei/{cafoscari,sapienza}/dati-scadenze.js`) due nuovi flag per scadenza, letti
dal motore ma dichiarati nei dati (regola d'oro rispettata): `azionabile` (true se lo
studente può/deve fare qualcosa per quella data; false per eventi solo informativi come
pubblicazione graduatoria e inizio mobilità) e `chiusuraCandidature` (true sulla/e
scadenza/e che chiudono le candidature — Sapienza ne ha 2, il bando è "chiuso" quando
sono passate TUTTE). In `js/app.js`: nuovi helper temporali (`scadenzaPerId`,
`scadenzaPassata`, `prossimaScadenzaAzionabile`, `candidatureChiuse`,
`dataChiusuraCandidature`, `voceScaduta`, `giorniA`); `calcolaMissione()` riscritta —
salta le voci di checklist con scadenza passata, considera solo scadenze future
AZIONABILI, e ha due stati nuovi: **"bando-chiuso"** (non selezionato + candidature
chiuse → titolo "Il bando 2026/2027 è chiuso", messaggio onesto col bivio: bottone
"Sono stato selezionato 🎒" che imposta la fase e passa alla preparazione partenza,
oppure "il prossimo bando esce in genere tra dicembre e gennaio") e **"partenza"**
(selezionato → la missione è la prima voce di `CHECKLIST_POST` non spuntata, pill
"tra Ng" verso il prossimo evento); la pill countdown della home mostra SOLO la
prossima scadenza azionabile e si NASCONDE se non ce n'è (niente urgenza finta verso
eventi su cui non si può agire); la voce "attiva" evidenziata (checklist e card
Preparazione) è la prima non spuntata la cui scadenza NON è passata; onboarding: la
landing dice "Il bando 2026/2027 è chiuso: il prossimo esce in genere tra dicembre e
gennaio" invece di annunciare scadenze morte. Testato end-to-end in preview locale
(porta 8001, 3 luglio 2026): home = "Il bando 2026/2027 è chiuso" col bivio, pill
countdown nascosta, click "Sono stato selezionato" → fase salvata nello zaino, nav
"🎒 Partenza", missione = primo passo post-selezione con pill "tra 12g" (inizio
mobilità 15/07); onboarding da zero → landing onesta; nessun errore console.
**Restano:** blocco D (gerarchia home) e i titoli brevi imperativi per le voci di
checklist (aggiunta al piano C). **NON ANCORA PUBBLICATO:** `git fetch` + rebase +
commit + push come da regola sessione 7.)

**Aggiornamento precedente:** 2026-07-03 — sessione 10 (**Coda mappatura per il weekend.**
Codex aveva svuotato `prossimiBatch` (Architettura Sapienza finita, `runCompletati` 193)
e si era fermato. Accodate **4 nuove Facoltà Sapienza** con dati REALI presi dall'export
ufficiale Go Erasmus+ (`/goerasmus/export?ambito=…`), righe solo-Phd escluse:
**Farmacia (62), Comunicazione e Ricerca Sociale (59), Scienze Sociali ed Economiche (68),
Psicologia/pedagogia/servizio sociale (97) = 286 mete**. Creati 4 file
`js/atenei/sapienza/dati-mete-{farmacia,comunicazione,scienze-sociali,psicologia}.js`
(schema standard; `codiceErasmus` = codice Erasmus UFFICIALE dall'export;
`requisitoLingua`/`scadenzeOspitante` vuoti, da arricchire col bot), agganciati in
`index.html` alla catena `_meteAllSap`. In `mappatura-stato.json`: 4 voci in
`statoDipartimenti` (stato `in_corso`, pending pieni) + **59 batch da 5** in `prossimiBatch`
(`scadenze+lingua`). Tutto validato (`node --check` sui JS; parse JSON delle strutture
inserite; 286 id senza duplicati). **Limite noto:** il campo `citta` è derivato dal token
del codice Erasmus (l'export non popola Città) → da rifinire in una passata futura.
**⬆️ Nicola deve lanciare `PUBBLICA.bat`** per pubblicare i nuovi file + la coda; poi
Codex lavora in automatico per il weekend (~286 mete ≈ 2-3 giorni al ritmo osservato).
Nota di metodo: il file `mappatura-stato.json` visto da bash risultava di nuovo troncato/
stale (mount OneDrive) → modificato SOLO con gli strumenti Read/Edit sul file reale.

**Aggiornamento precedente:** 2026-07-03 — sessione 9 (**BLOCCO A ristrutturazione UX —
riparazione meccanica layout desktop + onestà temporale visiva.** Diagnosi con Nicola
sugli screenshot del sito: l'impianto a 4 fasi regge, ma (1) il sito è "cieco al
tempo" — missione che cita una scadenza passata da 127 giorni, scadenze scadute in
VERDE (colore-successo) col bottone calendario ancora attivo, countdown al secondo
con urgenza finta; (2) i contenuti non tradotti (= UX5, in corso in parallelo);
(3) desktop rotto — colonna stepper 220px con testo una-parola-per-riga, mascotte
in absolute SOPRA il testo della missione. Deciso piano in 4 blocchi: **A riparazione
meccanica ✅ (questa sessione) → B motore consapevole del tempo → C = UX5 contenuti →
D gerarchia della home**; UX6 (test fratello) dopo A–D. Implementato il blocco A —
in `css/style.css`: griglia desktop `#tab-oggi` 220px/1fr/360px → **300px/1fr/340px**;
`.fase-cta` a capo su riga propria nella colonna stretta (`flex-wrap` su `.fase-card`,
solo desktop); `.missione-card` con `padding-right:170px` sul desktop → il Wiz non
copre più il testo; Wiz dell'header nascosto sul desktop (doppione di quello nella
card missione); scadenze passate da verde a **grigio neutro** su timeline
(`.tappa-v2.passata`) e candidatura (`.cand-capitolo.passata`); input di testo del
form profilo stilizzato come le select (anche dark mode). In `js/app.js`:
`countdownInParole()` senza secondi ("Mancano 11 giorni"); pill countdown senza
secondi e senza "· niente proroghe" (era hardcoded e compariva anche su eventi non
prorogabili tipo inizio mobilità); intervalli 1s → 30s; bottone "🗓 Aggiungi al
calendario" NON più generato per scadenze già passate. Validato: `node --check` OK su
`app.js` e sui dati; test end-to-end in preview locale (porta 8001, viewport 1440px,
service worker disattivato per il test): griglia 300/504/340, pill "11 giorni" +
"15 lug, ore 00:00", 4 capitoli candidatura scaduti grigi senza bottone ICS, 6 tappe
timeline passate grigie + "Inizio mobilità" con "Mancano 11 giorni", input nome
stilizzato, nessuna sovrapposizione Wiz/testo (verificata via bounding box), nessun
errore console. **Verificata anche la convivenza con UX5 della sessione 8 parallela**
(le sue modifiche a dati-bando/dati-checklist/app.js sono arrivate via OneDrive a
metà sessione): il traduttore sulle voci di checklist è visibile in preview
("Prima di tutto: controlla di essere idoneo…"), zero conflitti. **NON toccati:**
logica missione (il difetto "missione su scadenza passata" è il blocco B), contenuti
Sapienza (resto di UX5), ridondanza home (blocco D). **NON ANCORA PUBBLICATO:** nel
working tree ci sono insieme blocco A + UX5 sessione 8 + file bot mappatura — fare
`git fetch` + rebase + commit + push in giornata, come da regola della sessione 7.)

**Ultimo aggiornamento precedente:** 2026-07-03 — sessione 8 (**UX5 avviata — contenuti del
traduttore Ca' Foscari + completato il gap UI della checklist.** Scritti i 4 campi del
traduttore (`spiegazione`/`azione`/`citazione`/`fonte`) con **citazioni LETTERALI** estratte
dal PDF ufficiale del bando (`fonti/Bando_Erasmus…2026_2027.pdf`, via `pdftotext`) per
**tutti gli 8 requisiti** (`js/atenei/cafoscari/dati-bando.js`) e **tutte le 9 voci di
checklist** (`js/atenei/cafoscari/dati-checklist.js`), ognuna con riferimento ad articolo/comma
(Art. 2/5/6/7/8). **Scoperta importante:** UX4 aveva implementato il traduttore a 3 registri
SOLO per i requisiti (`renderIdoneita`); la checklist mostrava solo `voce.testo` — i campi
tradotti sarebbero stati invisibili. Deciso con Nicola di chiudere il gap: estesa
`creaVoceChecklist()` in `js/app.js` (specchio del rendering requisiti: spiegazione+azione
visibili, "Cosa dice il bando ▸" espandibile con citazione/fonte, blocco FUORI dal `<label>`
così il click non spunta la checkbox; retrocompatibile: senza i campi la voce è identica a
prima) + 3 righe CSS (`.voce-checklist-wrap`, `.voce-checklist-trad`). Validazione: `node
--check` OK su copie fresche (il mount OneDrive risultava di nuovo STALE/troncato per bash —
problema ambientale noto — quindi verifica fatta ricopiando il contenuto vero in outputs).
**Restano per chiudere UX5:** requisiti + checklist Sapienza (marcati `inVerifica`), da fare con
il bando Sapienza sotto mano. NON ANCORA PUBBLICATO: testare a video su localhost (Ca' Foscari,
tab Candidatura → ogni voce deve mostrare spiegazione/azione e l'espandibile "Cosa dice il
bando") poi `PUBBLICA.bat`.)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 7 (**FIX DEFINITIVO: sito online non
corrispondeva al locale — causa trovata e risolta, UX4 finalmente PUBBLICATA.**
Sintomo riportato da Nicola: "pubblico ma il sito online non cambia mai". Diagnosi:
NON era un bug del workflow Pages (l'errore "Deployment cancelled" su run #190 era
solo rumore — un run superato da un push successivo, comportamento normale). La causa
vera: `origin/main` avanza in automatico ogni pochi minuti grazie al workflow
`.github/workflows/auto-merge.yml` (fonde i lotti `mappatura/**` su main), mentre le
modifiche vere del sito — tutto il lavoro di UX4 della sessione 6 (`index.html`,
`css/style.css`, `js/app.js`, dati bando/checklist/scadenze Ca' Foscari e Sapienza) —
erano rimaste **committate mai / solo locali** per un'intera sessione. Ogni deploy di
Pages quindi pubblicava sempre e solo l'ultimo commit del bot, mai il lavoro di
Nicola. Soluzione applicata: `git fetch` + rebase di main locale su `origin/main`
(nessun conflitto: il bot tocca solo `js/dati-mete*.js`, mai i file del sito), commit
delle modifiche pendenti, push su `origin/main` (commit `1ba5853`) → **UX4 è ora
davvero online**, non solo pronta in locale. Rimossi anche i 4 file spazzatura non
tracciati nella root (`0`, `listaVoci.appendChild(creaVoceChecklist(voce`, `s.id)`,
`{,+` — residuo di un comando shell andato male in una sessione precedente, confermato
innocuo e cancellato). **Nuova regola di lavoro per evitare la ricaduta:** non
lasciare modifiche locali "in sospeso" da una sessione all'altra — il bot di
mappatura avanza `main` in background indipendentemente da Nicola/Claude Code; prima
di pubblicare fare sempre `git fetch` + `git rebase origin/main` (sicuro, il bot non
tocca i file del sito) poi `git add`/`commit`/`push` nella stessa sessione in cui si
lavora, non rimandare "a fine giornata". Nessun codice del sito toccato in questa
sessione, solo git/pubblicazione.)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 6 (**UX4 IMPLEMENTATA — traduttore a 3
registri (UI) + banner "dati in verifica".** Tab Idoneità (`renderIdoneita()` in
`js/app.js`): ogni card requisito mostra ora 3 registri — 1) "in chiaro" sempre
visibile (`req.spiegazione || req.descrizione` + riga "→ azione" se `req.azione` è
presente); 2) "Cosa dice il bando" in un `<details>` espandibile con citazione +
fonte, mostrato SOLO se `req.citazione`/`req.fonte` esistono nei dati (oggi assenti
per entrambi gli atenei — comportamento retrocompatibile confermato: card identiche
a prima salvo la nuova checkbox); 3) auto-verifica "☐ Lo rispetto" per requisito,
salvata in `ZAINO.autoverifica{}` (nuovo campo zaino, fallback `{}` per zaini vecchi
in `caricaZaino()`) — quando tutti i requisiti sono spuntati compare il messaggio
"Sembri idoneo ✅ — fa sempre fede il bando ufficiale" (`#idoneita-esito`). Aggiunto
un `id` stabile a ogni voce di `REQUISITI_BANDO` (entrambi gli atenei, es.
`cf-iscrizione`/`sap-lingua`) per avere una chiave univoca su cui salvare
l'auto-verifica — nessun altro campo toccato, nessuna rottura sui dati esistenti.
Nuova funzione `renderBannerVerifica()`: mostra "⚠️ Dati in corso di verifica sul
bando ufficiale — usali come traccia, non come fonte" pilotata dal flag
`BANDO_INFO.inVerifica` (aggiunto `inVerifica:true` SOLO a
`js/atenei/sapienza/dati-bando.js`, Ca' Foscari resta senza il campo → banner
nascosto), renderizzato sia nel tab Idoneità sia in cima al tab Candidatura (i due
contenuti provvisori Sapienza). In `index.html`: nuovi contenitori
`#banner-verifica-idoneita`, `#idoneita-esito`, `#banner-verifica-checklist`. Nuovi
stili in `css/style.css` (`.requisito-v2-azione`, `.requisito-v2-bando`/`-citazione`/
`-fonte`, `.requisito-v2-autoverifica`, `.idoneita-esito`, `.banner-in-verifica`).
**Nota per UX5:** i campi `spiegazione`/`azione`/`citazione`/`fonte` NON sono ancora
scritti nei file dati (lavoro di contenuto di Nicola) — la UI è pronta e
retrocompatibile, li userà non appena compaiono nei `REQUISITI_BANDO`. Validato:
`node --check` OK su `app.js` e sui due `dati-bando.js`; test end-to-end nel browser
(preview locale, porta temporanea per bypassare una cache del browser rimasta sui
file precedenti) su ENTRAMBI gli atenei — Ca' Foscari: 8 card coi 3 registri,
checkbox "Lo rispetto" funzionante, spunta di tutti gli 8 requisiti mostra l'esito
"Sembri idoneo ✅", stato persistito dopo reload, nessun banner "in verifica";
Sapienza: banner "in verifica" visibile sia in Idoneità sia in Candidatura,
`inVerifica:true` confermato. Nessun errore in console. **Non toccati:** onboarding
(UX1), stepper 4 fasi (UX2 — la condizione di completamento fase 1 resta `profiloOk`
come prima, non legata all'auto-verifica per non introdurre regressioni non richieste
dai test della roadmap), vista cronologica Candidatura ed export .ics (UX3). Roadmap:
UX4 spuntata. Prossima sessione: UX5 (contenuti del traduttore, lavoro di Nicola con
Claude in chat) poi UX6 (test con l'utente reale). **Nota ambientale:** trovati 2 file
spazzatura non tracciati nella root del progetto con nomi anomali (frammenti di
codice, es. `listaVoci.appendChild(creaVoceChecklist(voce`) — probabile residuo di un
comando di shell andato male in un'altra sessione; non toccati in questa sessione, da
verificare e rimuovere con Nicola.)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 5 (**UX3 IMPLEMENTATA — fusione
Scadenze+Checklist in vista cronologica + export .ics.** Il tab Candidatura
(`#tab-checklist`, container `#lista-checklist-v2`) non mostra più la checklist
piatta: ogni scadenza di `SCADENZE_CAFOSCARI` con almeno una voce collegata
diventa un "capitolo" — card con titolo/data/countdown dal vivo + bottone
"🗓 Aggiungi al calendario" (genera un `.ics` client-side via Blob, nessun
server) — seguita dalle voci di `CHECKLIST` con quel `scadenzaId`, spuntabili
come prima. Le voci senza `scadenzaId` (o con uno non riconosciuto) finiscono
in un capitolo finale "Quando puoi". Le scadenze senza voci collegate (es.
apertura candidature, laureandi, inizio mobilità) non generano un capitolo
vuoto. In `js/app.js`: `renderChecklist()` riscritta per la vista cronologica
(stesso nome/stessi punti di chiamata di init()/initToggleFase(), zero
modifiche a index.html); nuova `creaVoceChecklist()` (checkbox riusata anche
nel capitolo "Quando puoi"); nuove `formattaDataICS()`/`escapaTestoICS()`/
`scaricaICSScadenza()` per l'export calendario; `aggiornaCountdownV2()` estesa
per aggiornare anche i countdown delle nuove card `.cand-scadenza-card` (prima
solo `.tappa-v2` della vecchia Timeline). **Dati:** ogni voce di `SCADENZE_*`
in ENTRAMBI gli atenei ha ora un `id` stabile (es. `cf-chiusura`, `sap-
chiusura1`); ogni voce di `CHECKLIST` in entrambi gli atenei ha un campo
`scadenzaId` che la collega alla scadenza giusta (Sapienza: `sap-chk-
graduatoria` resta senza `scadenzaId`, dato che il bando Sapienza non elenca
ancora una data di graduatoria — cade in "Quando puoi", comportamento
atteso). **Non toccati:** `dati-postselezione.js`/`CHECKLIST_POST` (fase 4,
"Sono stato preso!" — resta la vista raggruppata per fase, invariata);
onboarding (UX1); stepper 4 fasi (UX2); motore di compatibilità; `index.html`
(nessuna modifica: la vista cronologica si inietta nello stesso contenitore
già esistente). Nuovi stili in `css/style.css`: `.cand-capitolo`/
`.cand-scadenza-card`/`.cand-scadenza-titolo`/`.cand-scadenza-data`/
`.cand-scadenza-countdown`/`.cand-btn-ics`/`.cand-checklist-sotto`/
`.cand-capitolo-quando-puoi`/`.cand-capitolo-titolo` (con `var(--bg-card)` per
compatibilità dark mode, verificata a video). Validato: `node --check` OK su
`js/app.js` e sui 4 file dati toccati; test end-to-end nel browser (preview
locale) su ENTRAMBI gli atenei — Ca' Foscari: 9 voci raggruppate in 4 capitoli
per scadenza (chiusura candidature 6 voci, graduatoria 1, accettazione 1, ISEE
1), ordinati cronologicamente, nessun capitolo per apertura/laureandi/mobilità
(0 voci collegate); Sapienza: 4 voci nel capitolo "Chiusura candidature (1ª
finestra)" + 1 voce ("controlla la graduatoria…") in "Quando puoi". Spunta di
una voce → salvata nello zaino con la stessa chiave di prima (`ZAINO.
checklist`), barra di progresso aggiornata (verificato "1 di 9" → "2 di 9"
dopo una spunta). Bottone "Aggiungi al calendario" testato intercettando
`URL.createObjectURL`: file `.ics` generato con `BEGIN:VCALENDAR`/`DTSTART`/
`SUMMARY`/`DESCRIPTION` validi (formato compatibile Google Calendar). Toggle
fase → "Sono stato selezionato" verificato invariato (checklist post-
selezione raggruppata per fase, nav "🎒 Partenza"). Dark mode verificato a
video sulla nuova vista. Nessun errore in console in tutte le prove.
Roadmap: UX3 spuntata. Prossima sessione: UX4 (traduttore 3 registri + banner
"dati in verifica").)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 4 (**UX2 IMPLEMENTATA — home-percorso
a 4 fasi + nav ridotta a 3 tab.** La home (`#tab-oggi`, nav "Percorso" 🧭) non mostra
più il vecchio mini-percorso a 5 tappe astratte: al suo posto uno stepper verticale
con le 4 fasi di `DISEGNO_UX.md` §2.1 — "Posso partire?" (✅ quando c'è un profilo),
"Dove posso andare?" (✅ quando ≥1 meta preferita), "La candidatura" (✅ a checklist
completa), "Sono stato preso!" (attiva quando `ZAINO.fase==="selezionato"`, forza le
prime 3 a "fatte"). Ogni card mostra icona di stato (✅/▶/🔒), la domanda-guida, un
riassunto testuale calcolato dallo zaino e una CTA che naviga al tab giusto (Idoneità,
Mete, Candidatura). Link "Modifica profilo" nell'header dello stepper (riusa il
sistema `data-goto` già esistente per Idoneità/Profilo). Nav inferiore passata da 4 a
3 voci: **Percorso · Mete · Candidatura** — il terzo tab (`data-tab="checklist"`,
id `nav-candidatura`) cambia icona/etichetta in **🎒 Partenza** quando lo studente
segna "Sono stato selezionato" (nuova `aggiornaNavCandidatura()`, chiamata da
`init()` e dai due bottoni di `initToggleFase()`). Il tab Scadenze/Timeline è uscito
dalla nav (come già Idoneità/Profilo) mantenendo però la pagina intatta: raggiungibile
con un link "Vedi tutte le scadenze ⏳" dal tab Checklist e un link di ritorno
"← Torna alla candidatura" dal tab Timeline (stesso pattern `data-goto` esistente).
In `js/app.js`: rimossi come dead code il vecchio `TAPPE_DEF`/`NOMI_TAPPA`/
`calcolaTappaAttiva`/`renderPercorso` (5 tappe astratte, sostituiti dalle 4 fasi
concrete); aggiunte `calcolaFasi()` e `renderFaseStepper()`, chiamate da
`renderMissione()` (come già `renderPercorso()` prima) e anche da `togglePreferita()`
e dai due handler di `initToggleFase()` per aggiornamento live senza reload. **Non
toccati:** motore di compatibilità, file dati mete, `ZAINO.onboardingFatto` (UX1).
Nuovi stili in `css/style.css`: `.fase-stepper`/`.fase-card`/`.fase-stato-icona`/
`.fase-testi`/`.fase-domanda`/`.fase-riassunto`/`.fase-cta` (con `var(--bg-card)` per
compatibilità dark mode) al posto delle vecchie `.percorso-dot`/`.percorso-tappe`/
`.percorso-linea`; nuovo `.link-torna-tab` per i link di navigazione verso/da Timeline.
Validato: `node --check js/app.js` OK; test end-to-end nel browser (preview locale)
su ENTRAMBI gli atenei — localStorage pulito → onboarding → landing → stepper con
fase 1 ✅ e fase 2 ▶ (profilo compilato, 0 mete preferite) per sia Ca' Foscari
Economia sia Sapienza Giurisprudenza; nav mostra "🎒 Partenza" subito dopo aver
cliccato "Sono stato selezionato" nel tab Checklist, coerente con `ZAINO.fase` in
localStorage; link "Vedi tutte le scadenze"/"Torna alla candidatura" funzionanti;
zaino esistente (localStorage NON pulito) → nessun onboarding, tab e fase ripristinati
dall'hash/zaino come prima. Nessun errore in console in tutte le prove.
Roadmap: UX2 spuntata. Prossima sessione: UX3 (fusione Scadenze+Checklist + export
.ics).)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 3 (**UX1 IMPLEMENTATA — onboarding
3 domande + valore immediato.** Nuovo overlay a schermo intero (`index.html`,
sezione `#onboarding-overlay`) mostrato al primo accesso: 1) "Dove studi?" →
ateneo (riusa il registro `ATENEI{}`; se diverso da quello attivo salva
`erasmuswiz_ateneo` + un marcatore in `sessionStorage` e ricarica, riprendendo
l'onboarding allo step 2 dopo il reload); 2) "Cosa studi?" → dipartimento/
facoltà (`dipartimentoCf` distinti nelle mete dell'ateneo attivo); 3) "A che
punto sei?" → Triennale/Magistrale. Landing con valore immediato: "Per te ci
sono N mete a [dipartimento]" + prossima scadenza con countdown in giorni,
poi "Inizia il percorso →". Nessun campo di testo, nessuna domanda sulle
lingue (arriveranno in UX2/fase Mete come da `DISEGNO_UX.md` §3).
Implementazione in `js/app.js`: `areaDominanteDipartimento()` traduce la
scelta "dipartimento" nel campo `profilo.area` già usato dal motore di
compatibilità esistente (moda dei codici `areeDisciplinari` delle mete di
quel dipartimento — stesso comportamento del form profilo manuale, motore
di compatibilità NON toccato); `caricaZaino()` estesa con
`ZAINO.onboardingFatto` con fallback `!!z.profilo` per gli zaini esistenti
(chi ha già un profilo NON rivede l'onboarding). Nuovi stili in
`css/style.css` (`.onboarding-*`, riuso della palette/overlay esistenti).
Validato: `node --check js/app.js` OK; test end-to-end nel browser (preview
locale) su ENTRAMBI gli atenei — localStorage pulito → onboarding compare,
numeri "N mete" coerenti col tab Mete dopo (Ca' Foscari Economia: 39 mete;
Sapienza Giurisprudenza: 55 mete), cambio ateneo Sapienza dentro l'onboarding
→ reload → ripresa corretta allo step 2 con le 3 Facoltà Sapienza; zaino
esistente → onboarding NON compare, home già popolata. Nessun errore in
console. **Nota emersa durante il test:** il service worker PWA (sw.js,
Fase 7) cache-a `index.html` — chi ha già visitato il sito potrebbe vedere
la versione vecchia finché il service worker non si aggiorna da solo o non
svuota la cache del browser; da tenere presente per il rilascio.
Roadmap: UX1 spuntata. Prossima sessione: UX2 (home-percorso + nav a 3 tab).)

**Ultimo aggiornamento precedente:** 2026-07-02 — sessione 2 (DECISO RIDISEGNO UX. Analisi critica del piano in sessione di brainstorming: la UX attuale (4 tab per feature, profilo chiesto prima del valore, "traduzione della burocrazia" invisibile in interfaccia, nessun gancio di retention) non regge la promessa del prodotto. Creato **`DISEGNO_UX.md`** (specifica vincolante v3): onboarding a 3 domande con valore immediato, home = percorso a 4 fasi ("Posso partire?" → "Dove posso andare?" → "Candidatura" → "Sono stato preso"), nav ridotta a 3 tab, fusione Scadenze+Checklist con export .ics, traduttore a 3 registri (bando→significato→azione, con fonte), banner "dati in verifica" per i contenuti provvisori Sapienza. ROADMAP.md riscritta: nuova **ONDATA UX (UX1–UX6) = priorità attuale**; Ondata B assorbita (B2 già fatta, B1/B3→UX5/UX6). Decisione: il test utente (fratello di Nicola, studente Sapienza Giurisprudenza di ritorno dall'Erasmus, disponibile da settimana prossima) si farà sulla versione NUOVA. Mappatura Codex: continua in background come "dessert" di fine sessione, non più piatto principale. Nessun codice toccato in questa sessione.)

**Ultimo aggiornamento precedente:** 2026-07-02 (AVVIATA 3ª FACOLTÀ SAPIENZA — Architettura (113 mete) + roadmap capacità Codex. Verificato prima in diretta sul DB che **Economia Sapienza resta senza sedi pubblicate** sul bando 26/27 (come nella sessione precedente). Scelta **Architettura** (`ambito=ARCHI`) come 3ª Facoltà, esplicitamente non piccola su richiesta di Nicola: estratte via `web_fetch` tutte le 118 righe (12 pagine) del DB Go Erasmus+; 5 righe erano riservate a soli PhD/Specializzandi e non modellate (stesso criterio di Giurisprudenza) → **113 mete reali**. Creato `js/atenei/sapienza/dati-mete-architettura.js` (id/codici a slug corto, coerenti con lo standard già in uso — non i nomi completi usati per errore nella prima bozza, poi corretta); 12 atenei compaiono più volte come accordi distinti, disambiguati con `-a/-b/-c`. Promotore non unico per Facoltà (come Medicina). Agganciato a `index.html` nella catena `_meteAllSap`. `mappatura-stato.json`: nuova voce `statoDipartimenti["Architettura (Sapienza)"]` + **23 batch da 5 mete accodati** in `prossimiBatch`, dopo i 3 di Medicina — coda totale ora **33 batch / 163 mete** (7 Giurisprudenza-followup + 3 Medicina + 23 Architettura). Validato: `node --check` OK su `dati-mete-architettura.js` (113 id/113 codici univoci); `mappatura-stato.json` validato a mano leggendo il contenuto vero col tool Read (il mount bash risultava STALE/troncato per questo file, problema ambientale noto, non un difetto della modifica). ⚠️ **REALITY-CHECK CAPACITÀ (vedi anche sezione 8):** al ritmo dichiarato (5 mete/7 min continuativi) la coda attuale si esaurirebbe in **~4 ore**, non "giorni" — e persino l'INTERO catalogo Sapienza rimanente (~1455 mete su 14 Facoltà) durerebbe solo **~1,5 giorni** se Codex girasse davvero H24. Lo storico reale (`mappatura-stato.json.storico`) mostra invece buchi di più giorni (es. 16→23 giugno), segno che l'automazione (Codex "Worktree" locale, non un'Action cloud) NON gira 24/7 continuativamente. NON ANCORA PUBBLICATO: lanciare `PUBBLICA.bat`.)

**Ultimo aggiornamento precedente:** 2026-07-01 (BATCH NOTTURNI Sapienza: Giurisprudenza espansa 20→55 mete + avviata 2ª Facoltà. Estratte dal DB ufficiale Go Erasmus+ (`?ambito=IUS`, 6 pagine) le 35 mete Giurisprudenza mancanti (56 righe reali meno 1 duplicato PhD/Specializzandi UAM Madrid, non modellato per lo stesso motivo già usato altrove). Riscritto `js/atenei/sapienza/dati-mete-giurisprudenza.js`: 55 mete totali, le 20 originali con l'arricchimento reale già fatto da Codex (lingua+scadenze) preservato intatto, le 35 nuove in seed grezzo. `mappatura-stato.json` aggiornato: totale 55/completate 20, 7 nuovi batch di follow-up in coda. Individuata e avviata una 2ª Facoltà Sapienza — **Medicina e Psicologia, Area medica e professioni sanitarie** (`ambito=MEDIC2`, la più piccola tra le 17 disponibili: 15 mete, 2 pagine DB) — creato `js/atenei/sapienza/dati-mete-medicina-psicologia-area-medica.js` con tutti i campi reali (qui il promotore/coordinatore varia per accordo, non è unico come Giurisprudenza) e 3 batch iniziali accodati DOPO i 7 di Giurisprudenza, così l'automazione Codex finisce Giurisprudenza e prosegue da sola. `index.html`: nuova Facoltà agganciata alla catena `_meteAllSap` di Sapienza. Validato con `scripts/valida-stato.mjs` → "Stato coerente"; `node --check` OK su entrambi i file dati. ⚠️ Durante la ricerca dell'ambito giusto è stato cliccato per errore un link "Esporta i risultati" sul sito Sapienza (possibile download non richiesto sul PC di Nicola, dati pubblici non sensibili, da verificare). NON ANCORA PUBBLICATO: lanciare `PUBBLICA.bat`.)

**Ultimo aggiornamento precedente:** 2026-07-01 (FIX BUG multi-ateneo: 6 punti hardcoded su Ca' Foscari resi dinamici. Il selettore ateneo (Sapienza Roma) funzionava per i dati ma non per l'interfaccia: footer disclaimer, link "bando ufficiale", sottotitolo tab Scadenze, etichetta "Dipartimento Ca' Foscari", etichetta "Coordinatore Ca' Foscari" e il link "Portale Ca' Foscari" (che puntava sempre a unive.it anche con Sapienza attiva — bug più grave, mandava lo studente sul portale sbagliato) restavano fissi. Aggiunti `bandoUrl`/`portaleUrl` a entrambi gli oggetti `ATENEI[...]` in `index.html`, esposti come `window.ATENEO_LABEL`/`ATENEO_BANDO_URL`/`ATENEO_PORTALE_URL` nel blocco "Scelta ateneo attivo"; dati id stabili a footer (`footer-disclaimer`, `footer-link-bando`) e sottotitolo Scadenze (`scadenze-sottotitolo`). In `js/app.js`: etichette generiche "Dipartimento / Facoltà" e "Coordinatore / Docente referente" (card compatta + modale dettaglio), link portale/PDF ora usa `window.ATENEO_PORTALE_URL`, nuova funzione `applicaBrandingAteneo()` chiamata in `init()` dopo `initTema()` che riscrive footer e sottotitolo in base all'ateneo attivo. Meta tag SEO/Open Graph lasciati intenzionalmente su Ca' Foscari. Verificato in preview locale (porta 8001): con Sapienza attiva tutti i 6 punti mostrano correttamente "Sapienza Roma" e i link puntano a uniroma1.it; tornando su Ca' Foscari tutto rientra come prima (nessuna regressione). `node --check js/app.js` OK.)

**Ultimo aggiornamento precedente:** 2026-06-30 (ROADMAP Fase 8: evento analytics "checklist usata". In `js/app.js` aggiunti il flag di modulo `analyticsChecklistInviato` e la funzione `segnalaChecklistUsata()`, che invia `window.goatcounter?.count({ path: "checklist-usata", event: true })` una sola volta per sessione. Chiamata dentro i due listener `change` della checklist: `renderChecklist()` (checklist normale) e `renderChecklistPost()` (post-selezione), solo alla prima spunta di una voce. `node --check js/app.js` OK. Da testare: spuntare una voce checklist sul sito e verificare nel pannello GoatCounter (`erasmuswiz.goatcounter.com`) la comparsa dell'evento `checklist-usata`.)

**Ultimo aggiornamento precedente:** 2026-06-30 (ROADMAP Fase 7: PWA "aggiungi a schermata Home", senza notifiche. Creati `manifest.json` (nome, theme_color `#101b3f`, background `#eef3fb`, `display:standalone`, `start_url:./index.html`), `sw.js` (service worker minimo: cache base di index.html/style.css/app.js/wiz-hero.png/manifest.json, niente offline completo) e due icone `img/icon-192.png` / `img/icon-512.png` (generate via script Node senza dipendenze esterne, sfondo blu notte + "EW" bianco — provvisorie, da sostituire con un'icona disegnata se si vuole un look migliore). In `index.html` `<head>` aggiunti `<link rel="manifest">`, `<meta name="theme-color">`, `<link rel="icon">`/`apple-touch-icon`; prima di `</body>` aggiunta la registrazione del service worker (`navigator.serviceWorker.register('sw.js')`, solo se supportato, errori ignorati silenziosamente). Verificato in preview locale (porta 8001): sito carica senza errori console, `navigator.serviceWorker.getRegistrations()` → 1 registrazione attiva, manifest raggiungibile. `node --check sw.js` OK, manifest.json JSON valido. DA FARE: testare "Aggiungi a schermata Home" da telefono reale (il preview desktop non lo mostra); valutare se sostituire le icone placeholder con una vera icona/logo.)

**Ultimo aggiornamento precedente:** 2026-06-26 (AVVIO MAPPATURA SAPIENZA — seed campione Giurisprudenza + fix automazione. Creato il seed `js/atenei/sapienza/dati-mete-giurisprudenza.js`: **20 mete campione** (su 56 reali) estratte dal DB ufficiale Go Erasmus+ (`?ambito=IUS`) via browser, con 12 paesi, area Law/0421, posti/durata/livello reali, docente referente Scarchillo; codiceErasmus SINTETICO provvisorio (prefisso SAP-IUS-, il DB lista non espone il codice ufficiale). requisitoLingua/scadenzeOspitante VUOTI → li riempie Codex. Creati i file Sapienza `dati-scadenze.js` (REALI dal bando: 27/02 e 27/05/2026, mobilità 01/06/26–31/07/27), `dati-bando.js`, `dati-checklist.js`, `dati-postselezione.js` (questi 3 **PROVVISORI**, marcati "da validare sul bando ufficiale" — NON mostrare come definitivi agli studenti). In `index.html` Sapienza ora carica i suoi file e si registra `disponibile:true` → **selezionabile dalla tendina** 🎓. ⚠️ **ECONOMIA Sapienza: nessuna sede pubblicata** sul bando 26/27 ("non è prevista la pubblicazione… non ci sono sedi disponibili") → partita solo Giurisprudenza, come previsto dal caveat groundwork. **FIX CRITICO automazione:** `mappatura-stato.json` puntava ancora ai vecchi percorsi `js/dati-mete*.js` (post-refactor i file sono in `js/atenei/cafoscari/`) → corretti tutti gli 8 `fileJs` Ca' Foscari + aggiunto campo `ateneo`; senza questo fix l'automazione si sarebbe rotta anche su Ca' Foscari. Accodati **4 lotti** `giurisprudenza-batch-1..4` via `setup-dipartimento.mjs`; `valida-stato.mjs` = "Stato coerente"; `prepara-batch` genera un INPUT valido. Aggiornato il prompt Codex a MULTI-ATENEO (`git add js/atenei/`, regole nuovo_dipartimento per ateneo, no-scrape DB JS Sapienza). Simulazione caricamento: CF 392 mete intatte, Sapienza 20 mete attivabili. DA FARE: test locale + `PUBBLICA.bat`; aggiornare il prompt anche in `$CODEX_HOME`.)

**Ultimo aggiornamento precedente:** 2026-06-26 (PREP MULTI-ATENEO — Fase 1 refactor + GROUNDWORK Sapienza. Eseguito il refactor multi-ateneo del sito: tutti i file dati Ca' Foscari spostati in `js/atenei/cafoscari/`, creata `js/atenei/sapienza/` con placeholder (`var METE=[]`). In `index.html` introdotto il registro `ATENEI{}`: ogni ateneo carica i suoi dati, viene "fotografato" nel registro, poi l'ateneo ATTIVO (salvato in localStorage, chiave `erasmuswiz_ateneo`) viene esposto sui globali che `app.js` già legge → **app.js NON toccato**. Convertiti `const`→`var` in dati-bando/scadenze/checklist/postselezione (per riassegnabilità, come già METE). Aggiunto selettore d'ateneo (tendina 🎓 nel tab Oggi): Sapienza appare "(in arrivo)" disabilitata finché vuota; cambio ateneo = salva + `location.reload()`. CSS coerente col design system + dark mode. VERIFICATO con simulazione Node dell'ordine di caricamento: registro a 2 atenei, **392 mete / 392 ID unici** Ca' Foscari intatte, requisiti 8 / scadenze 7 / checklist 9 / post 20, Sapienza `disponibile:false`. `node --check` OK su tutti i 12 file dati spostati. Creato `GROUNDWORK-sapienza.md`: fonti ufficiali (DB accordi `accordi-didattica.web.uniroma1.it/goerasmus`, portale Go Erasmus+, bandi per Facoltà), modello dati Sapienza ✅ compatibile (Facoltà al posto di dipartimento, area = codici ISCED), CIVIS = analogo di EUTOPIA da rimandare, scala ~1500 accordi (~4x Ca' Foscari → partire da 1 Facoltà). ⚠️ Ostacolo Fase 3: il DB accordi è renderizzato lato JS (web_fetch torna vuoto) → preferire i PDF destinazioni per Facoltà. NON ancora pubblicato: testare in locale e poi `PUBBLICA.bat`.)

**Ultimo aggiornamento precedente:** 2026-06-26 (SINCRONIZZAZIONE online↔locale + workflow waterproof. Diagnosi: NON c'era un lato "avanti" — dati in parità (392 mete), ma online/`main` era avanti di 118 commit sull'architettura (8 dipartimenti, file `batch/`, index.html completo) mentre il locale aveva SOLO modifiche non committate = funzioni v2 (preferiti, ricerca mete, fase post-selezione, `dati-postselezione.js`). L'index.html locale era rotto (troncato). Causa: OneDrive sincronizzava i file ma git locale restava su branch vecchio `feature/pipeline-imbuto`. SOLUZIONE: unificazione su `main` (unica fonte di verità). Eseguita via script Windows `00-RIPARA-E-UNIFICA.bat` (git non eseguibile dal sandbox: il mount OneDrive corrompe `.git`). Risultato VERIFICATO su commit `80c9b8f`: `app.js` + `dati-postselezione.js` v2 online, 392 mete, Pages build #155 Success. `dati-postselezione.js` ora finalmente presente su main (prima referenziato ma mancante — bug latente risolto). Nuovo workflow: `SCARICA.bat` (pull prima di lavorare) + `PUBBLICA.bat` (commit+pull--rebase+push dopo); guida in `WORKFLOW.md`. Backup completo in `_backup-sync-20260626-110132/`. NOTA: eseguire git SOLO dagli .bat su Windows, mai dal sandbox.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 5 ROADMAP: condivisibilità Open Graph. Aggiunti in `index.html` `<head>`: `meta description`, 5 tag `og:*` (type, url, title, description, image) e 3 tag `twitter:*` (card, title, description, image). URL pubblico `https://nicorotolo.github.io/erasmuswiz/`, immagine `img/wiz-hero.png`. Solo `index.html` toccato, nessun JS.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Mappatura multi-dipartimento completata. Aggiunti 3 nuovi dipartimenti Ca' Foscari: **Scienze Molecolari e Nanosistemi** (8 mete, `dati-mete-molecolari.js`, tutte arricchite 8/8), **Studi Linguistici e Culturali Comparati** (114 mete, `dati-mete-linguistici.js`, 104/114 arricchite — 10 in linguaNonTrovabile), **Studi Umanistici** (21 mete, `dati-mete-umanistici.js`, 18/21 arricchite — 3 in linguaNonTrovabile). Tutti e 3 i dipartimenti marcati "completo" da Codex (soglia 0.85 raggiunta). Arricchimento eseguito automaticamente dall'automazione Codex in 45 run (batch 84→129). `index.html` aggiornato con catena `_meteAll` per i 3 nuovi file. Totale mete: **392** su **8 dipartimenti**. `node --check` OK su tutti e 3 i file. EUTOPIA (46 accordi cross-dipartimentali) annotata come task futura — richiede logica filtro speciale, non implementata ora.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 4 ROADMAP: fase post-selezione. Nuovo file `js/dati-postselezione.js` con `CHECKLIST_POST` — 20 voci reali in 5 fasi (Accettazione, Learning Agreement, Documenti pre-partenza, Arrivo, Rientro), fonte: pagina ufficiale Ca' Foscari procedure outgoing 2026/27. `caricaZaino()` esteso con `fase:"domanda"` e `checklistPost:{}` + fallback per zaini vecchi. Toggle "Sto preparando la candidatura / Sono stato selezionato" in cima al tab Checklist (HTML+CSS). Nuove funzioni in `app.js`: `renderChecklistPost()` con voci raggruppate per fase, `initToggleFase()` che salva `ZAINO.fase` e switch tra le due checklist. `aggiornaProgressoV2(lista, spunte)` reso parametrico. `node --check` OK su app.js e dati-postselezione.js.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 3 ROADMAP: mete preferite. `caricaZaino()` ora include `metePreferite: []` con fallback per zaini vecchi. Aggiunto `<div id="sezione-preferite">` in `#tab-mete`. Nuove funzioni: `renderPreferite()` (sezione riepilogo con contatore N/5 e rimozione ✕) e `togglePreferita(id)` (aggiunge/rimuove con limite morbido a 5). Bottone ⭐ su ogni card in `renderMete()`: mostra "⭐ Preferita" se già salvata, "☆ Aggiungi ai preferiti" altrimenti. CSS in `style.css` con sfondo oro e dark-mode override. `node --check` OK.)

**Ultimo aggiornamento precedente:** 2026-06-25 (MERGE GitHub→locale: i dati mappati da Codex su GitHub (che la copia locale non aveva) sono stati portati nel working tree mantenendo il design v2. Catalogo passato da 134 a **249 mete su 5 dipartimenti**: Economia 58, Management 76, Lingue 24, Scienze 25, Filosofia 66. I 3 nuovi file dati (`dati-mete-lingue.js`, `dati-mete-scienze.js`, `dati-mete-filosofia.js`) collegati in `index.html` con la catena di concat `_meteAll`; tutti i 5 file mete convertiti a `var METE`. ATTENZIONE: il merge NON è stato fatto via git (working tree su branch `feature/pipeline-imbuto` con modifiche non committate + lock OneDrive su `.git`); i file dati sono stati estratti con `git show origin/main:...`. Backup pre-merge in `_backup-20260625-*/`.)
**Fase raggiunta:** Fase 5 / 5 + Ondata A completa + ROADMAP Fase 1 ✅ + ROADMAP Fase 2 ✅ + ROADMAP Fase 3 ✅ + ROADMAP Fase 4 ✅ (post-selezione) + ROADMAP Fase 5 ✅ (condivisibilità) + ROADMAP Fase 7 ✅ (PWA, no notifiche) + ROADMAP Fase 8 ✅ (evento analytics checklist) + **ONDATA UX: UX1 ✅ (onboarding 3 domande, 2026-07-02) + UX2 ✅ (home-percorso 4 fasi + nav 3 tab, 2026-07-02) + UX3 ✅ (fusione Scadenze+Checklist + export .ics, 2026-07-02) + UX4 ✅ (traduttore 3 registri + banner "in verifica", 2026-07-02)** + **ONDATA BRAND: BR0 ✅ (fondamenta — token/raggi/logo/favicon riallineati, 2026-07-04)** — SITO PUBBLICATO con design v2, ora multi-dipartimento (8), **392 mete totali** Ca' Foscari + 3 Facoltà Sapienza (183 mete)
**Cosa funziona:** tutto, validato (node --check su tutti i JS); mete REALI su 8 dipartimenti Ca' Foscari; bando, scadenze e checklist VALIDATI sul PDF ufficiale. Completezza lingua per dipartimento:
Economia 52/58; Management 71/76; Lingue 23/24; Scienze 23/25; Filosofia 56/66;
Scienze Molecolari 8/8; Studi Linguistici 104/114; Studi Umanistici 18/21.
Sito online su GitHub Pages con design v2 (push effettuato 2026-06-25, commit `8bc3206` su main):
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** (1) ✅ unificazione online↔locale su `main` FATTA e verificata (commit `80c9b8f`); (2) lanciare `PUBBLICA.bat` per pubblicare anche questo aggiornamento di STATO; (3) cancellare i file-spazzatura con `PULISCI-SPAZZATURA.bat`; (4) completare lingua Filosofia e scadenze residue; (5) verificare a video gli 8 dipartimenti; (6) test utenti reali. D'ora in poi: SEMPRE `SCARICA.bat` prima di lavorare e `PUBBLICA.bat` dopo (vedi `WORKFLOW.md`).
**Automazione:** OpenAI Codex ("Mappatura mete Erasmus", progetto 3. ErasmusWiz) ATTIVA — gira ogni ~9 min su Worktree, modello GPT-5.5 Basso. Nessun token aggiuntivo necessario.

---

## 1. COS'È
Cruscotto web per studenti che fanno domanda Erasmus all'Università Ca' Foscari.
Sito 100% statico (HTML/CSS/JavaScript puro). Nessun framework, backend,
database o login. Pubblicabile trascinando la cartella su Netlify Drop.

## 2. STATO DELLE FASI

| Fase | Cosa fa | Stato |
|------|---------|-------|
| 1 — Scheletro + dati separati | Legge i dati dai file e li mostra | ✅ Fatta e testata |
| 2 — Timeline + countdown | Tappe ordinate, conto alla rovescia dal vivo, gestione scadenze passate | ✅ Fatta e testata |
| 3 — Mete filtrabili + compatibilità | Profilo studente, filtro per area, punteggio pesato, icone oneste | ✅ Fatta e testata |
| 4 — Blocco Idoneità | Requisiti del bando in chiaro | ✅ Fatta e testata |
| 5 — Checklist con spunte salvate | Passi spuntabili + barra progresso, salvati su dispositivo | ✅ Fatta e testata |
| v2 — Redesign UI | Tab OGGI/METE/CANDIDATURA, missione del giorno, percorso a tappe, countdown pill, mascotte Wiz, dark mode, GoatCounter | ✅ Promossa a main (2026-06-23) |
| OP2 — Candidatura riformattata | Pagina Timeline rimossa (era ridondante, BR7); "Ora tocca a te" mostra la scadenza collegata a ogni passo; gerarchia visiva scadenza/voci rinforzata | ✅ Fatta e testata (2026-07-08) |
| OP3 — Filtro lingua nelle mete | Chip "🗣️ Per la mia lingua" tra i filtri, riusa il motore di compatibilità esistente | ✅ Fatta e testata (2026-07-08) |
| OP4 — Stima borsa per gruppo-paese | Nuovo `dati-borse.js` per ateneo, badge nella card + blocco nel dettaglio con disclaimer datato | ✅ Fatta e testata (2026-07-08) |
| MERCATO-UI Fase A — Audit | `design/AUDIT_SITO.md`: 20 difetti P0-P3 + verdetti per area | ✅ Fatta (2026-07-10) |
| MERCATO-UI Fase B — Direzioni visive | 3 mockup con mappa-hero interattiva in `design/proposte-2026-07/` (piano: `design/PLAN-FASE-B.md`, review Codex APPROVED) | ✅ Chiusa: **Nicola ha scelto la C "Ibrida"** (2026-07-10) — sostituisce BR0–BR7 |
| MERCATO-UI Fase C1 — Fondamenta | Token direzione C in `css/style.css` + `design/tokens/colors.css`, `--primary-fill`, tema notte di prima classe (card solide, palette dedicata), theme-color/manifest | ✅ Fatta e testata (2026-07-10) |
| MERCATO-UI Fase C2 — Home con mappa-hero | Onboarding IN PAGINA sulla mappa (bug P0.1 chiuso), motore mappa in app.js, `dati-coordinate.js` (99,6% mete) + `dati-mappa-europa.js`, mappa compatta in home, gerarchia mobile rifatta (gate 375×667 ✅) | ✅ Fatta e testata (2026-07-10) |
| MERCATO-UI Fase C3 — Tab Mete | Card ridisegnate (badge stato unico, nomi normalizzati, niente testi ripetuti), schedina compatta, codici sintetici nascosti nel dettaglio, strip con nome facoltà, debounce ricerca | ✅ Fatta e testata (2026-07-13) |
| MERCATO-UI Fase C4 — Candidatura + Zaino | Zaino coi capitoli-card della candidatura (testa ambra + conteggio "N di M"), banner Wiz in webp (408→68 KB), celebrazione con focus/Escape, bonifica 6 residui blu pre-C1 | ✅ Fatta e testata (2026-07-14) |
| MERCATO-UI Fase C5 — Guide + fiducia + OG | OG dedicata 64 KB (P2.14 chiuso), pagina fiducia `guide/come-funziona.html` (gate privacy ok), sw.js senza PNG 408 KB, sitemap 4 URL, 30 file spazzatura eliminati (cartelle legacy: attendono conferma Nicola) | ✅ Fatta e testata (2026-07-14) |
| MERCATO-UI Fasi C6, D — Demo LA + QA | Assorbite dall'ondata PERCORSO: la demo LA Generator diventa stazione del viaggio (P5), il QA finale diventa P7 | 🔁 Superate (2026-07-14) |
| **PERCORSO — redesign a viaggio** | `PLAN.md` riscritto (grill 10 decisioni + Codex APPROVED al R5): due mondi ingresso/dashboard, linea di viaggio = nav, itinerario a stazioni, palette riaperta (2 direzioni: Notte cartografica vs Orizzonte chiaro), fasi P0 mockup → P7 QA, deadline settembre 2026 | 📋 Pianificata — prossima: P0 (2 mockup) |
| **Pipeline dati T0→T3 — Gemini + Codex** | Orchestratore automatico verificato end-to-end sul setup Scienze Statistiche; 38 mete, 16 completate per riuso, 2 sotto-batch da 8 | ⚠️ Prossimo gate: primo batch standard con chiamata Gemini e verifica Codex, poi campionamento umano |

**Tab visibili nella pagina (navigazione inferiore):** Oggi (missione) → Mete → Candidatura (scadenze+checklist fuse).
**Tab nascosti (accessibili da JS):** Idoneità · Profilo.

## 3. ARCHITETTURA (le 2 regole d'oro, rispettate)

- **Codice separato dai dati.** I contenuti vivono nei file `js/dati-*.js`;
  `js/app.js` è solo logica. Per aggiornare un contenuto si tocca SOLO il file dati.
- **"Zaino unico" (account-ready).** Tutto lo stato dello studente sta in un solo
  oggetto in localStorage:
  `ZAINO = { profilo: {...}, checklist: { "chk-mete": true, ... } }`.
  Domani lo stesso oggetto andrà su un server senza riscrivere la logica.

## 4. FILE DEL PROGETTO

| File | Tipo | A cosa serve |
|------|------|--------------|
| `index.html` | codice | Struttura v2 (tab OGGI/METE/CANDIDATURA + Idoneità/Profilo nascosti; Timeline rimossa in OP2) |
| `css/style.css` | codice | Design system v2: dark mode, font Bricolage/Jakarta/SpaceMono, responsive |
| `js/app.js` | codice | Logica v2: missione del giorno, percorso, countdown, mete, checklist, profilo |
| `img/wiz-hero.png` | asset | **NON più referenziato da nessun file** (C5: sostituito da webp + OG dedicata) — eliminabile nel blocco igiene con conferma di Nicola |
| `img/og-erasmuswiz.png` | asset | **OG image dedicata** (C5): 1200×630, 64 KB, stile notte direzione C — usata da home e guide per og:image/twitter:image |
| `guide/` | codice | Pagine statiche indicizzabili: 2 guide SEO (OP5) + `come-funziona.html` (pagina fiducia, C5). URL con canonical, JSON-LD FAQPage, GoatCounter |
| `img/logo-mark.svg` · `img/icon-star.svg` · `img/icon-sparkle.svg` | asset | Copiati da `design/assets/` in BR0; logo-mark usato nell'header desktop (`.nav-brand`) e come favicon |
| `js/atenei/` | **dati** | Dati per ateneo (multi-ateneo). Sottocartelle `cafoscari/` e `sapienza/`; vedi `js/atenei/README.md` |
| `js/atenei/cafoscari/dati-bando.js` | **dati** | Requisiti del bando Ca' Foscari (Idoneità) — `var BANDO_INFO`, `var REQUISITI_BANDO` |
| `js/atenei/cafoscari/dati-borse.js` · `js/atenei/sapienza/dati-borse.js` | **dati** | OP4 (08/07): stima borsa UE per gruppo-paese + integrazione minori opportunità (ISEE a fasce per Sapienza, top-up flat per Ca' Foscari) — `var BORSE_INFO` |
| `js/atenei/cafoscari/dati-mete.js` | **dati** | Mete — Economia (58, `var METE`) |
| `js/atenei/cafoscari/dati-mete-management.js` | **dati** | Mete — Management (76) |
| `js/atenei/cafoscari/dati-mete-lingue.js` | **dati** | Mete — Lingue e culture orientali (24) |
| `js/atenei/cafoscari/dati-mete-scienze.js` | **dati** | Mete — Scienze ambientali/informatica/statistica (25) |
| `js/atenei/cafoscari/dati-mete-filosofia.js` | **dati** | Mete — Filosofia e Beni Culturali (66) |
| `js/atenei/cafoscari/dati-mete-molecolari.js` | **dati** | Mete — Scienze Molecolari e Nanosistemi (8) |
| `js/atenei/cafoscari/dati-mete-linguistici.js` | **dati** | Mete — Studi Linguistici e Culturali Comparati (114) |
| `js/atenei/cafoscari/dati-mete-umanistici.js` | **dati** | Mete — Studi Umanistici (21) |
| `js/atenei/cafoscari/dati-scadenze.js` | **dati** | Scadenze Ca' Foscari (timeline) — `var SCADENZE_INFO`, `var SCADENZE_CAFOSCARI` |
| `js/atenei/cafoscari/dati-checklist.js` | **dati** | Passi della checklist — `var CHECKLIST` |
| `js/atenei/cafoscari/dati-postselezione.js` | **dati** | Checklist post-selezione — `var CHECKLIST_POST` |
| `js/atenei/sapienza/dati-mete-giurisprudenza.js` | **dati** | Mete Giurisprudenza Sapienza (55/56 destinazioni reali; 20 arricchite lingua+scadenze da Codex, 35 in coda) |
| `js/atenei/sapienza/dati-mete-medicina-psicologia-area-medica.js` | **dati** | Mete Medicina e Psicologia - Area medica Sapienza (15 destinazioni reali, seed grezzo da arricchire) |
| `js/atenei/sapienza/dati-mete-architettura.js` | **dati** | Mete Architettura Sapienza (113/118 destinazioni reali, 5 righe PhD-only escluse; seed grezzo da arricchire) |
| `js/atenei/sapienza/dati-mete-{farmacia,comunicazione,scienze-sociali,psicologia}.js` | **dati** | Mete Farmacia (62), Comunicazione (59), Scienze Sociali (68), Psicologia (97) — in arricchimento Codex |
| `js/atenei/sapienza/dati-mete-{scienze-politiche,inge-elettronica,polo-latina,scienze-statistiche,informatica,inge-informatica-gestionale,medicina-odontoiatria,ingegneria-civile,scienze-mfn,lettere-filosofia}.js` | **dati** | Le ULTIME 10 Facoltà Sapienza (1.126 mete, seed 04/07): in coda per setup+arricchimento Codex |
| `js/atenei/sapienza/dati-scadenze.js` | **dati** | Scadenze bando Sapienza 26/27 (REALI) |
| `js/atenei/sapienza/dati-bando.js` · `dati-checklist.js` · `dati-postselezione.js` | **dati** | Idoneità/checklist/post-selezione Sapienza (**PROVVISORI**, da validare sul bando) |
| `js/atenei/sapienza/dati-mete.js` | **dati** | Deprecato (vuoto; sostituito dai file per Facoltà) |
| `js/atenei/README.md` | guida | Come è collegato il multi-ateneo + come aggiungere un ateneo |
| `GROUNDWORK-sapienza.md` | guida | Ricognizione fonti/modello dati Sapienza (26/06) |
| `v2/` | storico | Design v2 originale (sottocartella, non più il sito principale) |
| `js/dati-mappa-europa.js` | **dati** | Geometria SVG dell'Europa (43 paesi, generata offline da GeoJSON, proiezione equirettangolare parallelo 48°) — Fase C2 |
| `js/dati-coordinate.js` | **dati** | Lookup città→coordinate per la mappa (508 chiavi = 99,6% mete; x/y precalcolate; `fuori:true` per le città fuori inquadratura). La pipeline G5 lo estende | 
| `design/PLAN-FASE-B.md` | piano | Fase B dettagliata (mappa-hero, 3 direzioni, gate mobile) — locked via grill + Codex APPROVED (10/07) |
| `design/proposte-2026-07/` | mockup | 3 proposte di direzione visiva + comparatore `index.html` + `_assets/` (mappa SVG, dati demo, Wiz webp). NON è il sito: noindex + disclaimer |
| `automazioni/PROMPT_CODEX_mappatura.md` | automazione | Prompt storico del flusso Codex che faceva ricerca+merge; non va riattivato insieme alla nuova pipeline Gemini+Codex |
| `automazioni/PROMPT_CODEX_verifica.md` | automazione | Prompt T2 letto da disco da `codex exec`: verifica la bozza Gemini e scrive `batch/OUTPUT.json` |
| `AUTOMAZIONE_GEMINI.md` | guida | Setup sicuro della chiave, preflight e avvio del processo Gemini T1 → Codex T2 → merge/pubblicazione; procedura Task Scheduler con istanza singola e log |
| `scripts/esegui-lotto-automatico.mjs` | automazione | Orchestratore indurito: preflight, lock atomico, pulizia output, setup seed esistenti, validazione, staging ristretto, push e verifica pubblicazione |
| `scripts/esegui-lotto-pianificato.ps1` | automazione | Wrapper per Task Scheduler; esegue un lotto e salva i log fuori dal repository in `%LOCALAPPDATA%\ErasmusWiz\logs` |
| `scripts/gemini-sgrossatura.mjs` · `scripts/verifica-link.mjs` | automazione | Sgrossatura T1 via Gemini API con Google Search + controllo HTTP preliminare delle fonti |
| `scripts/lib-mete.mjs` | automazione | Utilità condivise: scanner/serializzazione + inserimento sicuro dei nuovi campi mappabili |
| `scripts/lib-output-batch.mjs` · `scripts/valida-output-batch.mjs` | automazione | Contratto e validatore dell'OUTPUT: batch corretto, soli campi richiesti, formato dati e prove ufficiali obbligatorie |
| `scripts/test-pipeline-gemini.mjs` | test | Suite isolata della pipeline: inserimento campi, anti-output residuo, evidenze, setup/riuso e merge |
| `scripts/report-copertura-mappatura.mjs` | automazione | Report di sola lettura sulla copertura di lingua, scadenze, sito, catalogo e disponibilità |
| `scripts/prepara-batch.mjs` | automazione | Imbuto in ingresso: estrae il prossimo batch in `batch/INPUT.json` (pochi KB) |
| `scripts/applica-batch.mjs` | automazione | Imbuto in uscita: fonde `batch/OUTPUT.json` nel fileJs + **PROPAGAZIONE** agli altri dipartimenti (04/07), `node --check`, aggiorna lo stato, follow-up da 8 |
| `scripts/setup-dipartimento.mjs` | automazione | Bootstrap nuovo dipartimento + **RIUSO** da dipartimenti già mappati (04/07), sotto-batch da 8 |
| `PIANO_MAPPATURA_SAPIENZA.md` | guida | **Piano completo mappatura Sapienza** (04/07): coda, meccanismo riuso/propagazione, azioni manuali |
| `fonti/` | **fonti ufficiali** | PDF/ODS del bando 2026/27 Ca' Foscari (lista destinazioni, legenda, EUTOPIA) — base del database mete |
| `README.md` | guida | Spiegazione file + come aggiungere una meta + come testare |
| `STATO_DEL_SITO.md` | guida | Questo file: stato aggiornato |
| `DISEGNO_UX.md` | guida | **Specifica vincolante del ridisegno UX v3** (02/07) — da leggere nelle sessioni UX1–UX6 |
| `DISEGNO_BRAND.md` | guida | **Specifica vincolante dell'ondata BRAND** (04/07) — da leggere nelle sessioni BR0–BR7 |
| `design/` | design | Design system da Claude Design: `readme.md` (brand+tono), `tokens/*.css` (fonte dei valori), `assets/` (logo, SVG), `assets/mascotte/` (pose Wiz 3D, le salva Nicola), `riferimenti/` (prototipo + PDF esplorazioni) |
| `PROGETTO_ERASMUS.md` | guida | **Bussola strategica v2** (06/07: gerarchia validata, LA Generator, distribuzione, calendario a ritroso; v1 in appendice) |
| `ROADMAP.md` | guida | **Roadmap operativa v2** (07/07: ondate GATE/MERCATO-1/MERCATO-2/LANCIO/BANDO/BILANCIO allineate alla bussola v2; storico v1 in fondo) |
| `DISEGNO_OPERATIONS.md` | guida | **Specifica vincolante delle sessioni OP1–OP13** (07/07) — da leggere nelle sessioni OP, stile DISEGNO_BRAND |
| `PLAYBOOK_TEAM.md` | guida | Divisione compiti Nicola/Bruno + prompt pronti per le sessioni Claude di Bruno + guida handoff modelli (07/07) |
| `DISEGNO_PIPELINE_DATI.md` | guida | **Pipeline dati definitiva** (07/07): livelli T0-T3 (script/Gemini free/Codex verificatore/campione umano), prompt sgrossatura, lavori una-tantum §6, calendario §7 — la mappatura segue SOLO questo documento |
| `fonti/caso-bruno/` | **fonti (PRIVATE, mai su GitHub)** | Percorso Erasmus reale di Bruno: `DOSSIER_CASO_BRUNO.md` (ground truth strutturata), `LISTA_MATERIALI_BRUNO.md` (materiali da consegnare + mail ufficio Erasmus), pagina Relint (MD+video), INFORMAZIONI GENERALI 25/26, certificati e polizze |
| `BRIEF_claude_code_fase1.md` | guida | Brief iniziale Fase 1 (storico) |
| `DISEGNO_DATI_erasmus.md` | guida | Struttura dati validata + logica compatibilità |

## 5. LOGICA DI COMPATIBILITÀ (già implementata)

- **Filtro netto a monte:** si vedono solo le mete della stessa area disciplinare.
- **Punteggio pesato 0-100:** lingua **50** / livello accademico **30** / posti **20**
  (i pesi sono costanti in `app.js`, facili da cambiare in un punto solo).
- **Onestà:** ✅ Compatibile (≥80) · ⚠️ Possibile con riserve (40-79) · 🔒 Non
  accessibile ora (<40), con spiegazione di cosa manca.

## 6. ⚠️ STATO DEI CONTENUTI (il vero lavoro che resta)

Il CODICE è pronto. Le mete ora sono **REALI** (dalla lista ufficiale del bando
2026/27). Resta da completare lingua e dettagli-scheda, e validare bando/checklist.

| Dato | Stato attuale | Da fare |
|------|---------------|---------|
| **58 mete Economia** (`dati-mete.js`) | **REALI** dalla lista ufficiale 2026/27 | Economia chiusa; arricchimenti futuri su alloggio/prerequisiti |
| **76 mete Management** (`dati-mete-management.js`) | **REALI** 2026/27; link scheda PDF presenti; **71/76 lingua**, **76/76 scadenze** | completare le 5 lingue residue |
| **24 mete Lingue** (`dati-mete-lingue.js`) | **REALI** 2026/27; **23/24 lingua**, **24/24 scadenze** | 1 lingua residua |
| **25 mete Scienze** (`dati-mete-scienze.js`) | **REALI** 2026/27; **23/25 lingua**, **25/25 scadenze** | 2 lingue residue |
| **66 mete Filosofia** (`dati-mete-filosofia.js`) | **REALI** 2026/27; **56/66 lingua**, **66/66 scadenze** | 10 lingue in linguaNonTrovabile (non trovabili su siti ufficiali) |
| **8 mete Scienze Molecolari** (`dati-mete-molecolari.js`) | **REALI** 2026/27; **8/8 lingua**, **8/8 scadenze** ✅ | completo |
| **114 mete Studi Linguistici** (`dati-mete-linguistici.js`) | **REALI** 2026/27; **104/114 lingua**, **114/114 scadenze** | 10 lingue in linguaNonTrovabile |
| **21 mete Studi Umanistici** (`dati-mete-umanistici.js`) | **REALI** 2026/27; **18/21 lingua**, **21/21 scadenze** | 3 lingue in linguaNonTrovabile |
| **⚠️ EUTOPIA (46 accordi)** | non mappati | Cross-dipartimentali, richiede logica filtro speciale; task futura |
| **Sapienza — 11 Facoltà avviate** (Giurisprudenza 55 ✅, Medicina-Psico area medica 15 ✅, Architettura 113 ✅, Farmacia 62, Comunicazione 59, Scienze Sociali 68 ✅, Psicologia 97, Scienze Politiche 24, DIET 26, Polo di Latina 33, Scienze Statistiche 38) | REALI da Go Erasmus+; Scienze Statistiche: 16/38 completate per riuso, 18 scadenze riusate, 2 CEFR non-trovabili ereditati, 2 sotto-batch da 8 | Codex chiude i follow-up |
| **Sapienza — ULTIME 6 Facoltà** | REALI dall'export ufficiale; lingua/scadenze vuote nel repo, ma al setup Codex il RIUSO ne pre-compila ~metà | Codex: 6 setup + batch di ricerca |
| → posti/livello/area/coordinatore/codice Erasmus | reali, dalla lista | ok |
| → requisito di **lingua** | Economia: **52/58 righe complete** con CEFR e scadenze, 6 senza CEFR ufficiale classificate non trovabili. Management: **19/76 righe complete**; 2 mete del primo lotto hanno scadenze ma non CEFR generale ufficiale | continuare i batch Management |
| → scadenze ospitante / linkPdf | Economia: **58/58 con link scheda PDF** e **58/58 con scadenze** nomination/application. Management: **76/76 con link scheda PDF** e **21/76 con scadenze** | continuare i batch Management |
| → schede PDF scaricate | 53 PDF in `fonti/schede/` (solo locale, gitignore) | — |
| Meta Aix-Marseille | **completa e reale** (da scheda PDF) | Esempio di riferimento |
| 2 mete "ESEMPIO" (Madrid, Monaco) | **RIMOSSE** ✅ | fatto |
| Requisiti bando (`dati-bando.js`) | **REALI** ✅ validati art. per art. sul PDF (8 requisiti, con rif. agli articoli) | Riverificare sul bando 2027/28 |
| Scadenze (`dati-scadenze.js`) | **REALI** ✅ 7 tappe dal bando (candidature, laureandi, graduatoria, accettazione, ISEE, mobilità) | Riverificare ogni anno |
| Checklist (`dati-checklist.js`) | **REALI** ✅ 9 passi validati sul bando | Riverificare ogni anno |
| **Automazione dati Gemini+Codex** | Orchestratore automatico riuscito end-to-end sul setup Scienze Statistiche; nessuna chiamata modello ancora eseguita | Eseguire il primo batch standard Gemini+Codex, campionare 2-3 fonti e misurare il consumo; mantenere ferma la vecchia automazione |

**Nota motore di compatibilità:** `app.js` ora gestisce la lingua mancante in modo
onesto. Per le mete senza lingua mostra 🟡 "Idoneo — verifica la lingua" (se hai
livello e posti) o 🔒 "Non accessibile" (se manca il livello), SENZA inventare una
percentuale. Le mete con lingua nota (Aix) mantengono il punteggio 0-100 pieno.

## 7. COME TESTARE (promemoria)

Non aprire `index.html` col doppio click (pagina bianca: sicurezza del browser).
Avviare un server locale:
```
cd "C:\Users\ASUS\OneDrive - Presidenza del Consiglio dei ministri\Desktop\Me\6. Business AI\3. ErasmusWiz"
python -m http.server 8000
```
poi aprire **http://localhost:8000**. (Dettagli e alternative nel `README.md`.)

## 8. PROSSIMI PASSI

**Aggiornamento 2026-07-14 — sessione 62 (orchestratore automatico riuscito):**
1. Mantenere ferma la vecchia automazione multi-ateneo.
2. Eseguire nuovamente `node scripts/esegui-lotto-automatico.mjs` fino al primo
   batch standard che chiama realmente Gemini e Codex.
3. Sul primo batch standard riuscito, aprire manualmente 2-3 fonti, confrontare
   i dati pubblicati e annotare il consumo Codex; solo dopo creare l'attività
   Windows giornaliera con istanza singola e log persistente.

**Aggiornamento 2026-07-14 — sessione 61 (setup Polo di Latina riuscito):**
1. Mantenere ferma la vecchia automazione multi-ateneo.
2. Eseguire manualmente un solo batch effettivo di ricerca Gemini+Codex e
   verificare fonti, diff, consumo, validazione e pubblicazione.
3. Solo dopo un batch T1→T3 riuscito creare l'attività Windows giornaliera con
   istanza singola e log persistente.

**Aggiornamento 2026-07-14 — sessione 60 (setup DIET riuscito):**
1. Mantenere ferma la vecchia automazione multi-ateneo.
2. Eseguire manualmente un solo batch effettivo di ricerca Gemini+Codex e
   verificare fonti, diff, consumo, validazione e pubblicazione.
3. Solo dopo un batch T1→T3 riuscito creare l'attività Windows giornaliera con
   istanza singola e log persistente.

**Aggiornamento 2026-07-14 — sessione 59 (primo setup reale riuscito):**
1. Controllare il commit auto-unito `10e101b` e mantenere ferma la vecchia
   automazione multi-ateneo.
2. Eseguire manualmente un solo batch reale di ricerca Gemini+Codex e verificare
   fonti, diff, consumo, validazione e pubblicazione.
3. Solo dopo un batch T1→T3 riuscito creare l'attività Windows giornaliera con
   istanza singola e log persistente.

**Aggiornamento 2026-07-14 — sessione 58 (Fase 1 unita a main):**
1. Verificare lo stato effettivo e mettere in pausa
   `mappatura-mete-erasmus-multiateneo`, evitando due processi concorrenti.
2. Aggiornare il checkout locale su `main` e verificare nuovamente il preflight
   senza modificare dati.
3. Eseguire un solo lotto reale manuale e controllare fonti, diff, consumo e
   verifica pubblicazione prima di creare l'attività Windows giornaliera.

**Aggiornamento 2026-07-14 — sessione 57 (Fase 1 pubblicata):**
1. Rivedere e unire la pull request in bozza #36.
2. Tornare su `main`, aggiornare il repository e mettere in pausa
   `mappatura-mete-erasmus-multiateneo`.
3. Eseguire un solo lotto reale manuale e controllare fonti, diff, consumo e
   verifica pubblicazione prima di creare l'attività Windows giornaliera.

**Aggiornamento 2026-07-14 — sessione 55 (GitHub CLI installata):**
1. Chiudere e riaprire PowerShell, eseguire `gh auth login` e completare
   l'accesso GitHub via browser.
2. Riprendere branch, commit, push e PR della Fase 1.

**Aggiornamento 2026-07-14 — sessione 54 (GitHub CLI senza admin):**
1. Installare lo ZIP portabile ufficiale di GitHub CLI nel profilo utente.
2. Aggiungere la cartella `bin` al PATH utente, riaprire il terminale e fare
   `gh auth login`.
3. Riprendere branch, commit, push e PR della Fase 1.

**Aggiornamento 2026-07-14 — sessione 53 (blocco pubblicazione):**
1. Installare GitHub CLI (`gh`) e autenticare l'account GitHub.
2. Riprendere la pubblicazione: branch dedicato, commit intenzionale, push e PR.
3. Solo dopo proseguire con pausa della vecchia automazione e lotto reale.

**Aggiornamento 2026-07-14 — sessione 52 (azzeramento Codex riuscito):**
1. Pubblicare le modifiche della Fase 1 su un branch dedicato.
2. Mettere in pausa `mappatura-mete-erasmus-multiateneo`.
3. Eseguire un solo lotto reale manuale e controllare fonti, diff, consumo e
   verifica pubblicazione.
4. Solo dopo il lotto riuscito creare l'attività Windows giornaliera con
   `scripts/esegui-lotto-pianificato.ps1` e istanza singola.

**Aggiornamento 2026-07-14 — sessione 51 (Fase 1 Gemini+Codex pronta):**
1. Aprire un nuovo Prompt dei comandi e verificare che `GEMINI_API_KEY` sia
   presente; non incollare mai la chiave in chat o nel repository.
2. Rivedere e pubblicare le modifiche della Fase 1 su un branch dedicato prima
   di eseguire l'orchestratore sui dati reali.
3. Mettere in pausa `mappatura-mete-erasmus-multiateneo`, così una sola
   automazione potrà scrivere e pubblicare dati.
4. Dal 20/07/2026 dopo le 11:16 ripetere il preflight con smoke Codex; poi
   eseguire prima un setup reale e quindi un solo lotto Gemini+Codex, controllando
   fonti, diff, consumo e verifica pubblicazione.
5. Creare l'attività giornaliera Windows solo dopo il lotto end-to-end riuscito,
   usando `scripts/esegui-lotto-pianificato.ps1` e l'opzione istanza singola.

**Aggiornamento 2026-07-14 — sessione 50 (checklist di avvio):**
1. Far implementare a Codex il blocco repository dell'audit della sessione 49.
2. Configurare la chiave Gemini persistente sul PC dedicato senza inserirla nel
   repo; verificare Node, Codex CLI e login ChatGPT.
3. Mettere in pausa entrambe le vecchie automazioni Codex prima di qualsiasi
   prova del nuovo orchestratore.
4. Eseguire manualmente i setup Sapienza già seedati; poi un singolo lotto T1→T2
   e verificarne fonti, diff, validazione e pubblicazione.
5. Solo dopo il test riuscito creare l'attività Windows giornaliera con istanza
   singola, directory del repo e log persistente.

**Aggiornamento 2026-07-14 — sessione 49 (audit automazione Gemini+Codex):**
1. **Non creare ancora l'attività pianificata.** Prima correggere
   `scripts/esegui-lotto-automatico.mjs`: se `tipo=nuovo_dipartimento` e
   `fileGiaCreato=true`, eseguire setup+validazione+pubblicazione; se il file
   manca, stop umano. Eliminare/invalidare `batch/OUTPUT.json` prima di Codex,
   aggiungere lock locale atomico e verifica stretta dei file staged.
2. Completare i lavori una-tantum di `DISEGNO_PIPELINE_DATI.md` §6: schema e
   propagazione di `linkCatalogo` e `notaDisponibilita`, evidenza con URL,
   citazione e data; report copertura. Allineare prompt Gemini/Codex e formato
   JSON alla stessa definizione di "completo".
3. Sul PC dedicato: salvare `GEMINI_API_KEY` per l'account che eseguirà il task,
   verificare Node/Codex/login, mettere in pausa anche l'automazione Codex
   multi-ateneo, poi eseguire **un solo lotto manuale**. Controllare 2-3 fonti,
   diff, validazione, branch e `verifica-pubblicazione.mjs`; misurare consumo e
   costi reali Gemini/Codex.
4. Solo dopo il test riuscito creare Task Scheduler con percorso assoluto di
   Node, cartella di lavoro del repo dedicato, log su file e opzione "non
   avviare una nuova istanza". Avviare inizialmente una volta al giorno e
   rivedere i primi run prima di aumentare la frequenza.

**Aggiornamento 2026-07-14 — sessione 48 (ondata PERCORSO pianificata):**
1. **Prossima sessione: Fase P0 — i 2 mockup completi** in
   `design/proposte-percorso-2026-07/` ("Notte cartografica" vs "Orizzonte
   chiaro"), ciascuno con 3 schermate collegate: ingresso con mappa ad archi
   di volo animati + onboarding sul viaggio, dashboard profilata con linea
   di viaggio e moduli PLANNER (piano "Questa settimana" auto-generato,
   indicatore "Sei in linea?", calendario scadenze, card check-in — vedi
   addendum sessione 48 e `PLAN.md` §P0 2-ter), candidatura come
   itinerario a stazioni. Tema chiaro
   E notte, dati veri riusati da `design/proposte-2026-07/_assets/`,
   `prefers-reduced-motion`, gate mobile 375×667, noindex, ≤600 KB/pagina.
   Poi **Nicola sceglie DA TELEFONO** — la scelta è vincolante e sblocca
   P1–P7 (vedi `PLAN.md`, ondata PERCORSO). **Brief visivo aggiunto da
   Nicola a fine sessione 48** (4 riferimenti dashboard/app scolastiche,
   distillati in `PLAN.md` §P0 punto 2-bis): fondi chiari e ariosi, card
   morbide, un colore profondo come accento, dashboard modulare "quadro
   d'insieme", mobile a colonna singola con hero card "oggi" e bottom nav
   a pillola; in "Notte cartografica" il buio vive nell'ingresso/mappa e
   nelle card-copertina, la dashboard resta chiara in entrambe le direzioni.
   **Addendum PLANNER (stessa sessione 48, secondo grill + review Codex
   APPROVED al R4, 14 rilievi tutti accolti)**: la dashboard è un PLANNER —
   piano settimanale AUTO-GENERATO da scadenze bando × checklist aperte
   (niente task manuali, niente streak), indicatore "Sei in linea?" con
   semantica onesta (in ritardo SOLO oltre la propria scadenza, mai
   valutazione di performance), calendario mensile scadenze, check-in
   settimanale in-app (campo `YYYY-Www` nello zaino per-ateneo). Requisiti
   emersi dalla review: estensione ADDITIVA dei metadati scadenze/bando
   (`fonte` {etichetta, url HTTPS ufficiale — MAI percorsi fonti/},
   `verificataIl`, `pubblicato`, `ciclo` + stato formale del bando a 4
   valori), fuso canonico Europe/Rome con UNICA funzione di parsing
   (vietato new Date(stringa) nei moduli), ramo "selezionato" separato e
   presentato come auto-dichiarato, degradazione onesta senza ciclo
   pubblicato (piano/calendario nascosti, semaforo "non disponibile",
   check-in non salvato), casi di prova ripetibili in P7.
2. La Fase C6 (demo LA Generator) NON si fa più sul design attuale: nasce
   come stazione del viaggio in P5, vincoli OP8 invariati.
3. Le azioni di Nicola della sessione 47 restano valide (rilettura pagina
   fiducia, decisione cartelle legacy via .bat, sitemap su Search Console).

**Aggiornamento 2026-07-14 — sessione 47 (C5 fatta):**
1. **Prossima sessione: Fase C6 — LA Generator, SOLO UI dimostrativa.**
   Vincoli espliciti dal piano (OP8): (a) NESSUNA scrittura nello zaino —
   niente `ZAINO.laGenerator`; (b) flusso scenario A navigabile (seleziona
   esami da convalidare → incolla link corsi host → anteprima documento) con
   stato onesto "in arrivo" dove la logica non c'è; (c) mapping
   molti-a-molti corsi↔esami con totali ECTS/CFU, NIENTE campi per codici
   corso host, campo semestre/disponibilità; (d) placeholder onesto dove
   manca `linkCatalogo` (arriva dalla pipeline G5, non è un prerequisito).
2. **Azioni di Nicola**: (a) rileggere la sezione "Chi c'è dietro" di
   `guide/come-funziona.html` prima del deploy; (b) decidere sulle cartelle
   legacy `_backup-*`, `v2/` (ancora deployata su Pages!) e
   `chatgpt-project/` — si eliminano SOLO via .bat con la sua conferma;
   con l'occasione si può eliminare anche `img/wiz-hero.png` (408 KB, non
   più referenziato) e valutare `_smoke.js`; (c) dopo il deploy, inviare
   la sitemap aggiornata da Google Search Console (azione OP5 residua).
3. Code NON bloccanti invariate: cap render Mete senza profilo (P2.15
   metà), focus-trap completo dei modali (QA), loader per-ateneo (P2.13),
   canale feedback a zero attrito (P1.12), 3° articolo caso-Bruno (serve
   l'ok di Bruno).

**Aggiornamento 2026-07-14 — sessione 46 (C4 fatta):**
1. **Prossima sessione: Fase C5 — guide SEO ristilizzate + eventuale pagina
   fiducia** ("Come funziona / chi c'è dietro", raccomandata dall'audit).
   Vincoli dal piano: gate privacy su ogni pagina nuova o toccata (nessun
   dato personale, consenso di Bruno per racconti reali), URL delle guide
   INVARIATI, checklist SEO di blocco. È il blocco che include il
   riallineamento asset della direzione C: **l'immagine OG è ancora
   `wiz-hero.png` (408 KB)** — serve un'OG dedicata ≤100 KB (P2.14, parte
   restante). C5 è accorpabile con l'igiene repo (P3.17/18: dry-run +
   conferma esplicita di Nicola + solo procedura .bat).
2. Code NON bloccanti che restano aperte: cap di rendering / "mostra altre"
   per il tab Mete senza profilo (P2.15 seconda metà); focus-trap COMPLETO
   dei modali (C4 ha sistemato focus/Escape della celebrazione; il trap del
   tab dentro il meta-modal resta per il blocco QA); loader per-ateneo
   (P2.13); feedback a zero attrito al posto di GitHub Issues (P1.12).
3. Dopo C5: C6 demo LA Generator (vincoli OP8: read-only, niente scritture
   zaino), poi Fase D QA e chiusura.

**Aggiornamento 2026-07-13 — sessione 45 (C3 fatta):**
1. **Prossima sessione: Fase C4 — Candidatura + Partenza/zaino** nella
   direzione C. Dall'audit l'impianto OP2 è "TENERE con rifinitura": solo
   restyle coerente (capitoli scadenza, "Ora tocca a te", zaino), nessuna
   riprogettazione della logica validata.
2. Code NON bloccanti lasciate aperte da C3: il cap di rendering / "mostra
   altre" per il tab Mete senza profilo (P2.15 seconda metà — oggi si
   renderizzano tutte le card dell'ateneo, il debounce mitiga); focus-trap
   dei modali e target 44px delle frecce schedina (P2.16, pensati per il
   blocco QA); il loader per-ateneo resta P2.13.
3. Nota dati per la pipeline: nomi con case sporco nei dati restano tali
   (es. "School of economics and management" minuscolo nel seed Ca'
   Foscari) — la presentazione normalizza solo le parole tutte-maiuscole.

**Aggiornamento 2026-07-13 — sessione 44 (API Erasmus+ App):** non implementare nulla nel sito ora. Se si affronta l’arricchimento post-selezione, fare prima un piccolo test offline di 10 mete: API pubblica solo per normalizzare il nome/paese dell’ateneo e verificare eventuali servizi host; conservare URL e data di controllo. Promuovere il campo dati solo se le informazioni sono presenti, attuali e utili. Nessuna chiamata dell’app utente direttamente all’API.

**Aggiornamento 2026-07-13 — sessione 43 (ricognizione Erasmus+ App):** prima di implementare il LA Generator, inviare la verifica all’ufficio Erasmus Sapienza: quale bozza accettano, quale modello vogliono, e come si raccorda al loro OLA ufficiale. Nel prodotto, mantenere sempre il collegamento all’app/OLA ufficiale e presentare ErasmusWiz come preparazione locale, non come alternativa al canale istituzionale.

**Aggiornamento 2026-07-10 — sessione 42 (C2 fatta):**
1. **Prossima sessione: Fase C3 — tab Mete nella direzione C.** Difetti
   dall'audit: P1.4 schedina vuota compatta (1 riga, non 5 slot), P1.6 icona
   di stato unica per card, P1.7 nomi università normalizzati in
   presentazione (title-case; i typo/troncamenti del seed restano compito
   della pipeline), P1.8 niente testi ripetuti 60 volte (link portale solo
   nel dettaglio). P2.15 (debounce ricerca + cap render) se la sessione
   regge.
2. Per la mappa restano due code NON bloccanti: le 3 chiavi-spazzatura del
   seed ("Universidad|Spagna" ecc.) da sanare in pipeline; il ri-check del
   clustering sulla facoltà più numerosa (Studi Linguistici Ca' Foscari,
   114 mete) è già coperto dal ri-cluster dinamico ma va guardato a video
   quando quella facoltà avrà dati arricchiti.
3. Restano vivi in parallelo: residuo OP5, G4, G5/pipeline (che ora ha
   anche il compito di ESTENDERE `js/dati-coordinate.js` per le città
   nuove), go/no-go OP6.

**Aggiornamento 2026-07-10 — sessione 41 (direzione C scelta, C1 fatta):**
1. **Prossima sessione: Fase C2** — home/percorso + onboarding nella
   direzione C. Include: la mappa-hero del mockup C portata nel sito vero
   (serve il **lookup città→coordinate** dalla pipeline — schema già
   definito in `design/PLAN-FASE-B.md` §Approach 2 e già usato da
   `design/proposte-2026-07/_assets/dati-demo.js`; il gate mobile 375×667
   resta vincolante), il **fix del bug P0.1** (onboarding mobile con 17
   facoltà tagliate) e il ridimensionamento della mappa per l'utente
   profilato (missione/countdown padroni).
2. Poi C3 (Mete: card/schedina — difetti P1.4/6/7/8), C4, C5, C6, igiene
   repo, Fase D QA — un blocco per sessione come da `PLAN.md`.
3. Restano vivi in parallelo: residuo OP5 (3° articolo con ok di Bruno,
   Google Search Console), G4, G5/pipeline dal PC dedicato, go/no-go OP6.

**Aggiornamento 2026-07-10 — sessione 40 (Fase B costruita):**
1. **Azione di Nicola (sblocca tutto): scegliere la direzione visiva.**
   Aprire `design/proposte-2026-07/index.html` (in locale con doppio click, o
   su preview) — **prima da telefono/finestra stretta ~375px**, poi desktop;
   provare le 3 viste e i 2 temi in ciascuna proposta. Il gate è scritto nel
   comparatore: la mappa entra in Fase C solo se a 375px è leggibile e non
   ritarda missione/countdown.
2. Comunicata la scelta → **Fase C1** (token + fondamenta nella direzione
   scelta; la scelta sostituisce formalmente BR0–BR7, si aggiorna
   DISEGNO_BRAND). Per la mappa nel sito vero servirà il lookup
   città→coordinate dalla pipeline (schema già definito in
   `design/PLAN-FASE-B.md` §Approach 2) + ri-verifica clustering sulla
   facoltà più numerosa (check registrato per C2).
3. Restano vivi in parallelo (non sepolti dall'ondata): residuo OP5
   (3° articolo con ok di Bruno, Google Search Console), G4 (tabella 28/03),
   G5/pipeline dati dal PC dedicato, go/no-go OP6 a settembre.

**Aggiornamento 2026-07-08 — sessione 36 (OP4 chiusa):**
1. **Prossima sessione: OP5** — SEO di base online (`DISEGNO_OPERATIONS.md`):
   3 pagine statiche indicizzabili entro l'autunno + attivazione analytics
   (residuo Ondata A). L'articolo caso-Bruno resta subordinato al suo ok sul
   testo anonimizzato; gli altri due articoli partono subito.
2. OP6 (pilota matching L3 Giurisprudenza) e OP7 (già accorpato in OP1)
   restano paralleli/indipendenti, nessuna dipendenza da OP4.
3. Resta aperto il chiarimento con Nicola/Bruno su "Informazioni
   importanti" (segnalato in sessione 33, non modificato per non
   indovinare).
4. Restano validi i punti di G5/pipeline dati delle sessioni precedenti
   (invariati, nessun codice del sito li tocca).

**Aggiornamento 2026-07-08 — sessione 33 (OP1 chiusa):**
1. **Prossima sessione di codice: OP2** — Candidatura riformattata da zero
   (`DISEGNO_OPERATIONS.md`), include la rimozione della pagina Timeline
   decisa in BR7. Dipendenza: OP1 (fatta) per non lavorare due volte sugli
   stessi blocchi.
2. **Chiarire con Nicola/Bruno** cosa intendeva il feedback UX6 per
   "Informazioni importanti": la stringa non esiste nel codice attuale, non
   modificato per non indovinare (dettaglio nella nota di sessione sopra).
3. Restano validi i punti di G5/pipeline dati della sessione 32 (invariati,
   nessun codice del sito li tocca).

**Aggiornamento 2026-07-07 — sessione 32 (pipeline dati chiusa):**
1. **La mappatura mete segue da oggi SOLO `DISEGNO_PIPELINE_DATI.md`**
   (livelli T0-T3, prompt sgrossatura pronto, calendario §7, regole §9).
2. **Prima azione: G5** (lavori una-tantum §6) — in particolare il fix dei
   codici Erasmus sintetici, che può completare mete GRATIS via riuso.
3. **Cadenza Nicola** (§8 del documento): 2-3 serate di sgrossatura
   Gemini + 1 lancio Codex/giorno + campionamento weekend. Dopo 2
   settimane: misurare il ritmo e decidere se confermare "tutto completo"
   o ripiegare su beachhead+best-effort.
4. Restano validi i punti delle sessioni 29-31 (OP1 prossima sessione di
   codice; mail G1 come conferma; materiali post-rientro da Bruno).

**Aggiornamento 2026-07-07 — sessione 31 (corpus mail analizzato):**
1. **OP8 è sbloccato**: scenario A (generatore) confermato dalla prassi
   documentata nelle mail; G1 resta come conferma non bloccante. Le
   validazioni obbligatorie del Generator sono i due rimbalzi reali di
   Bruno (link verificati, ECTS coerenti coi link).
2. **Nuovo use case per OP3** (filtro lingua): preparazione alla riunione
   d'asta di assegnazione — documentata con orari e numeri nel dossier
   §1-ter A. La tabella mete+lingue del 28/03/2025 va usata in G4 per
   validare i dati Giurisprudenza.
3. **Da Bruno restano solo**: ToR + convalida + piano di studi (dopo il
   12/07), il Word del prospetto se lo ritrova, e i racconti D2/D3/D5/D6/A2
   (bastano vocali).
4. **OP5 ha la storia completa**: candidatura → asta → prospetto (con
   rimbalzi) → partenza col LA approvato 2 giorni prima → 6 corsi su 8
   non disponibili → Change Form. Attenzione all'anonimizzazione: il
   corpus contiene dati di terzi.
5. Restano validi i punti delle sessioni 29-30 (OP1 prossima sessione di
   codice; SEO entro autunno; tabelle borse Ca' Foscari per OP4).

**Aggiornamento 2026-07-07 — sessione 30 (LA + Change Form analizzati):**
1. **⚠️ Bruno**: (a) ri-esportare le MAIL (il file consegnato era una copia
   della pagina Relint — B1 della lista); (b) inviare la mail G1
   all'ufficio Erasmus; (c) rispondere alle domande D5-D7 (come ha
   scoperto i 6 corsi non disponibili; discrepanza lingua OLS; ruolo della
   "bozza Word"); (d) dopo il rientro (12/07): ToR, convalida, piano di
   studi.
2. **La tesi di prodotto si è raffinata**: disponibilità corsi > matching
   semantico (il 75% del LA di Bruno è saltato per NON disponibilità).
   Recepita in OP6 (schema pilota), OP8 (vincoli generator) e OP9 (link
   cataloghi con nota disponibilità — valore alzato).
3. **OP6 fase 1 SBLOCCATA** (LA+CF bastano per il confronto retrospettivo);
   OP5 (articolo caso-Bruno) ha già la storia principale.
4. Restano validi i punti della sessione 29 (OP1 prossima sessione di
   codice; SEO entro autunno; tabelle borse Ca' Foscari per OP4).

**Aggiornamento 2026-07-07 — sessione 29 (operations rimodulate, handoff pronto):**
1. **Documenti di riferimento da oggi**: `ROADMAP.md` v2 (cosa e quando) +
   `DISEGNO_OPERATIONS.md` (come, sessione per sessione) + `PLAYBOOK_TEAM.md`
   (chi). Ordine di lettura a inizio sessione: `CLAUDE.md` →
   `PROGETTO_ERASMUS.md` → questo file → `ROADMAP.md` → disegno dell'ondata.
2. **⚠️ Azioni umane SUBITO (bloccanti)**: (a) Nicola gira a Bruno
   `fonti/caso-bruno/LISTA_MATERIALI_BRUNO.md`; (b) Bruno invia la mail
   all'ufficio Erasmus (bozza §E — decide la forma del LA Generator, OP8);
   (c) Bruno consegna i materiali §A-§D (sbloccano pilota L3 e articolo
   SEO); (d) Nicola recupera le tabelle borse Ca' Foscari (per OP4).
3. **Prossima sessione di codice: OP1** (fix UI dal feedback UX6, include il
   debug 2/55 mete) via `DISEGNO_OPERATIONS.md`; poi OP2 (Candidatura
   riformattata, include la rimozione della pagina Timeline decisa in BR7).
4. **In parallelo (chat)**: G4 UX5-Sapienza (contenuti traduttore, base:
   INFORMAZIONI GENERALI nel dossier) e OP5 (SEO — il tempo di
   indicizzazione non si recupera: online entro l'autunno).
5. Aggiornare `DOSSIER_CASO_BRUNO.md` a ogni consegna di Bruno (timeline §4
   e inventario §2-§3); chiarire con lui la nota-anomalia della
   dichiarazione di arrivo (01/01/2026 vs partenza 13/09/2025).

**Aggiornamento 2026-07-06 — sessione 28 (bussola v2 scritta, ondata MERCATO definita):**
1. **Leggere la nuova `PROGETTO_ERASMUS.md` v2** a inizio di ogni sessione:
   contiene gerarchia problemi validata, confini v2-mercato, distribuzione,
   team, KPI e calendario a ritroso dal bando di febbraio 2027.
1-bis. **Primi task di luglio (prima del codice nuovo)**: (a) Bruno chiede
   all'ufficio Erasmus se un LA generato da noi è accettato come bozza e
   qual è il rapporto col sistema OLA ufficiale — l'esito determina la
   forma del LA Generator (generatore vs compilatore del loro template);
   (b) Nicola salva i documenti del percorso di Bruno in `fonti/caso-bruno/`
   (+ `.gitignore`); (c) definite in bussola le soglie di successo — la
   revisione onesta è fissata a maggio 2027.
2. **Ondata luglio–settembre** (in ordine): (a) fix UI dal feedback UX6 —
   rinomina "Informazioni importanti", stellina preferiti in alto a destra,
   de-enfasi "Portale Sapienza", comunicare limite 5 scelte; (b)
   **riformattazione completa sezione Candidatura** (confusa su mobile);
   (c) filtro lingua + stima borsa nelle schede mete; (d) SEO di base
   online (pagine indicizzabili prima dell'autunno); (e) avviare il pilota
   matching esami L3 su Giurisprudenza col caso Lisbona come ground truth
   (go/no-go a settembre).
3. **Ondata ottobre–dicembre**: LA Generator L1+L2, PWA + notifiche push,
   debug 2/55 mete Giurisprudenza; da novembre pipeline dati su bando 27/28;
   da dicembre warm-up social.
4. **Gennaio 2027 = PRODUCT FREEZE**: solo promozione e verifica dati.
5. La nota BR7 sulla pagina Timeline duplicata e il resto del feedback UX6
   confluiscono nel punto 2 (le correzioni post-test sono ora l'ondata
   corrente). UX5-Sapienza (contenuti traduttore Giurisprudenza) resta
   aperta e prioritaria: serve al LA Generator e al test di febbraio.

**Aggiornamento 2026-07-05 — sessione 25 (BR7 fatta, ondata BRAND chiusa):**
1. **Ondata BRAND (BR0-BR7) COMPLETATA.** Prossima sessione di codice sul
   sito = **UX6**: test con l'utente reale (il fratello di Nicola, Sapienza
   Giurisprudenza) sulla versione ribrandizzata, senza spiegazioni —
   osservare i primi 60 secondi, se capisce cosa fare dopo, le parole non
   capite; annotare in `FEEDBACK_UTENTI.md`. Vedi `ROADMAP.md` UX6.
2. **Decisione presa in BR7, azione rimandata a UX6/correzioni**: la
   pagina Timeline nascosta (`#tab-timeline`, link "Vedi tutte le
   scadenze ⏳") duplica la vista Candidatura ed è candidata alla rimozione
   — ma si decide DOPO aver visto se il test utente la trova confusa,
   come da `DISEGNO_BRAND.md` §3 BR7.
3. **Nota minore da valutare in una futura sessione di correzioni** (non
   un blocco per UX6): `#toggle-tema` è nascosto sotto i 768px — su
   mobile non c'è un modo per cambiare tema dall'interfaccia. Dettagli
   nel blocco di sessione qui sopra.
4. In parallelo (Nicola + Claude in chat): UX5-Sapienza resta aperta
   (contenuti traduttore requisiti/checklist Sapienza, priorità
   Giurisprudenza) — invariato, può procedere insieme a UX6.

**Aggiornamento 2026-07-04 — sessione 20 (mappatura Sapienza completata + pipeline efficientata):**
1. **⚠️ Nicola, subito, in ordine**: (a) `PUBBLICA.bat` — pubblica 10 file mete,
   coda in `mappatura-stato.json`, script aggiornati, `index.html`,
   `PIANO_MAPPATURA_SAPIENZA.md`, prompt; (b) **re-incollare**
   `automazioni/PROMPT_CODEX_mappatura.md` nell'editor dell'automazione sulla
   piattaforma Codex (cambiata la sezione Sapienza + riuso/propagazione).
   Senza (a)+(b) Codex resta fermo o segue regole vecchie.
2. Poi Codex fa tutto da solo: 6 follow-up → 10 setup (riuso, ~47% mete
   auto-complete) → ~57 batch di ricerca. Dettagli in `PIANO_MAPPATURA_SAPIENZA.md`.
3. Il seeding Sapienza è FINITO: niente più sessioni di estrazione mete; le
   prossime sessioni tornano su BRAND (BR3) e UX5-contenuti Sapienza.
4. Rifinitura futura (bassa priorità): campo `citta` abbreviato nei seed
   (derivato dal codice Erasmus), vedi PIANO §5.

**Aggiornamento 2026-07-04 — sessione 17 (BR0 Fondamenta fatta):**
1. **Prossima sessione di codice = BR1 Componenti base** (solo CSS, leggere
   `DISEGNO_BRAND.md` §3 BR1): bottoni (press/hover), badge/chip pill, card con
   lift al hover, campi form con focus ring 4px, checklist con check animato,
   progress bar; rispettare `prefers-reduced-motion`. I token sono già pronti
   (BR0), quindi BR1 è "solo" applicarli ai componenti.
2. **In parallelo (Nicola + Claude in chat)**: continua UX5-Sapienza
   (spiegazione/azione/citazione/fonte, priorità Giurisprudenza) — invariato.
3. Nota per BR2: la rimozione sfondo + conversione webp delle 6 pose mascotte
   (già salvate in `design/assets/mascotte/*.png`) resta da fare lì, non in BR1.
4. `PUBBLICA.bat` per questa sessione lo lancia Nicola (non fatto da Claude Code
   su richiesta esplicita).

**Aggiornamento 2026-07-04 — sessione 16 (ondata BRAND definita):**
1. **Nicola, subito**: salvare le 7 immagini della mascotte in
   `design/assets/mascotte/` (nomi: `wiz-saluto`, `wiz-pensieroso`,
   `wiz-spiega`, `wiz-esulta`, `wiz-zaino`, `wiz-clessidra`,
   `scena-scrivania-marketing`), poi `PUBBLICA.bat` per committare
   design/ + DISEGNO_BRAND.md + ROADMAP + questo file.
2. **Poi**: lanciare Claude Code sulla sessione **BR0** (prompt concordato:
   leggere CLAUDE.md, STATO, ROADMAP, DISEGNO_BRAND.md, design/readme.md;
   solo BR0; niente commit). Avanti così BR1→BR7, un blocco per sessione,
   `PUBBLICA.bat` tra una e l'altra.
3. **In parallelo (Nicola + Claude in chat)**: UX5-Sapienza — scrivere
   spiegazione/azione/citazione/fonte per bando e checklist Sapienza
   (priorità Giurisprudenza). È il gap più urgente per il test.
4. **Dopo BR7**: UX6, test approfondito col fratello su mobile.

**Aggiornamento 2026-07-03 — sessione 15:**
- **Punto 0 di sessione 14 (qui sotto) COMPLETATO**: i file-fantasma sono stati
  rimossi e pushati manualmente via git (commit `8d5ef99` e `2105223`), non tramite
  `PULISCI-SPAZZATURA.bat`/`PUBBLICA.bat`. La rete di sicurezza aggiunta a quei due
  `.bat` in sessione 14 resta comunque attiva per eventuali file-fantasma futuri.
- **Sbloccata anche l'automazione Codex** (bug `id` vs `codiceErasmus` in
  `mappatura-stato.json` per Farmacia/Comunicazione/Scienze Sociali/Psicologia
  Sapienza — dettagli in cima al documento). Prossimo passo: rilanciare/attendere il
  normale giro di Codex e verificare che proceda oltre `farmacia-batch-1` senza
  errori.
- Da cancellare su Windows (residui innocui, non tracciati): `_ripara_tmp.mjs`,
  `batch/INPUT.json`.

**Aggiornamento 2026-07-03 — sessione 14 (fix "file spazzatura" nel repo, manutenzione, non contenuti):**
0. **⚠️ Azione richiesta da Nicola su Windows, in ordine**: lanciare
   `PULISCI-SPAZZATURA.bat` (toglie i file-fantasma anche dalla storia di git,
   non solo dal disco) e subito dopo `PUBBLICA.bat` per registrare e pubblicare
   la pulizia. Vedi anche il messaggio "rm 'nomefile'" che compare: è normale,
   conferma che il file è stato tolto anche da GitHub.
1. **Causa risolta**: i file vuoti con nomi assurdi (`!(ZAINO.checklist`,
   `` `${a.nome}` ``, `{,+`, `main`, `Stato`, ecc.) che Nicola segnalava come
   "corruzione ricorrente" erano residui di comandi shell rotti (probabilmente
   di un'automazione AI) che `git add -A` in `PUBBLICA.bat` inglobava nei
   commit senza distinguerli dal lavoro vero. `PULISCI-SPAZZATURA.bat`
   cancellava solo dal disco, non da git: per questo tornavano ad ogni
   `SCARICA.bat` (pull), dando l'impressione di un problema irrisolvibile.
2. **Fix applicato**: `PUBBLICA.bat` ora riconosce ed esclude in automatico,
   PRIMA di ogni commit, qualsiasi file vuoto senza estensione o con nome
   contenente caratteri tipici della shell (`$ \` ! { } [ ]`) — quindi anche
   file-fantasma futuri con nomi mai visti prima non potranno più finire su
   GitHub. `.gitignore` e `PULISCI-SPAZZATURA.bat` aggiornati con l'elenco
   completo dei nomi già noti (inclusi `git rm`, non solo `del`).
3. **Nota per sessioni future**: se ricompaiono file-fantasma nuovi, non è
   "corruzione OneDrive" — è lo stesso bug a monte (comando shell rotto in
   qualche automazione) che li rigenera; la rete di sicurezza in
   `PUBBLICA.bat` li blocca comunque prima che arrivino online.

**🔮 BACKLOG FUTURO (non urgente) — Selezione profilo per corso di laurea:**
Oggi il form profilo fa scegliere l'AREA DISCIPLINARE per codice SSD grezzo
(poco comprensibile). Migliorìa a due livelli:
- **Livello 1 (facile, prioritario quando si tocca il profilo)**: nel form
  profilo riusare lo schema dell'onboarding → lo studente sceglie il
  DIPARTIMENTO e il codice area si ricava con `areaDominanteDipartimento()`.
  Nessun nuovo file dati. Retrocompatibile (`profilo.area` resta il codice).
- **Livello 2 (importante, futuro)**: `areaDominanteDipartimento()` sceglie UNA
  sola area dominante per dipartimento → se un dipartimento contiene corsi di
  laurea con aree molto diverse, lo studente vede solo l'area dominante e perde
  mete valide. Soluzione futura: introdurre un layer "corso di laurea" con una
  mappatura `corsoLaurea → [codici area]` (nuovo file dati da costruire e
  mantenere). Da valutare quando si estende oltre le facoltà attuali.
- Livello 3 (materie per area in UI): scartato per ora — informativo, non
  entra nel matching, raddoppia la manutenzione dati.

**Aggiornamento 2026-07-03 — sessione 11 (blocco B motore consapevole del tempo):**
0. **⬆️ Da pubblicare**: `git fetch` + `git rebase origin/main` + commit + push.
   Il working tree contiene blocco A + blocco B + UX5 Ca' Foscari + file mappatura.
1. **Prossima sessione di codice = blocco D gerarchia home**: card "Preparazione"
   solo barra di progresso (senza ripetere i testi grezzi dei passi); il riassunto
   dello stepper non deve duplicare la missione; una schermata = un messaggio.
2. **Blocco C = chiudere UX5** (Sapienza) + titoli brevi imperativi per le voci di
   checklist (titolo max ~8 parole + dettaglio) + mappa codici ISCED → etichette
   italiane (mai "0421" in UI senza etichetta umana).
3. UX6 (test col fratello) DOPO i blocchi C–D, con i 3 compiti secchi.

**Aggiornamento 2026-07-03 — sessione 9 (blocco A ristrutturazione UX):**
0. **⬆️ Da pubblicare in giornata**: `git fetch` + `git rebase origin/main` +
   commit + push. Il working tree contiene blocco A (questa sessione) + UX5
   Ca' Foscari (sessione 8) + file bot mappatura: pubblicarli insieme va bene,
   sono già verificati insieme in preview.
1. **Prossima sessione di codice = blocco B "motore consapevole del tempo"**
   (`js/app.js`): `calcolaMissione()` deve saltare le voci di checklist la cui
   scadenza (`scadenzaId`) è passata; se l'intero ciclo del bando è scaduto la
   home lo dice onestamente e propone il bivio (selezionato → fase 4 / non
   selezionato → "il prossimo bando esce a gennaio"); la pill countdown punta
   solo a eventi su cui lo studente può ancora agire. Test dei 10 secondi come
   criterio: chi atterra oggi capisce subito a che punto del ciclo siamo e qual
   è la SUA prossima azione possibile.
2. Poi **blocco C = chiudere UX5** (Sapienza, vedi punti sessione 8 sotto) +
   mappa codici ISCED → etichette italiane (mai un codice tipo "0421" in UI
   senza etichetta umana — oggi compare nel form profilo e nella strip Mete).
3. Poi **blocco D gerarchia home**: card "Preparazione" solo barra di progresso
   (senza ripetere i testi dei passi); il passo attivo oggi compare 3 volte
   nella stessa schermata (missione, riassunto stepper, card Preparazione).
4. UX6 (test col fratello) DOPO i blocchi B–D, con 3 compiti secchi: "puoi
   ancora fare domanda quest'anno?", "dove potresti andare?", "qual è la prima
   cosa da fare?".

**Aggiornamento 2026-07-03 — sessione 8 (UX5 Ca' Foscari + gap UI checklist chiuso):**
1. **Testare a video su localhost** (Ca' Foscari attiva): tab Candidatura → ogni voce
   di checklist ora mostra spiegazione + "→ azione" e l'espandibile "Cosa dice il bando ▸"
   con citazione/fonte; tab/fase "Posso partire?" → stessi 3 registri sui requisiti.
   Verificare anche una voce SENZA campi (es. Sapienza) → deve restare identica a prima.
2. `PUBBLICA.bat` (ricordare: `git fetch` + rebase su `origin/main` PRIMA, il bot avanza
   main in background — vedi lezione sessione 7).
3. **Chiudere UX5 = fare Sapienza**: `spiegazione`/`azione`/`citazione`/`fonte` per
   requisiti + checklist Sapienza, con il bando Sapienza ufficiale sotto mano (i dati
   Sapienza sono ancora `inVerifica`). Priorità suggerita: prima Giurisprudenza, così si
   sblocca UX6 (test col fratello) senza aspettare tutto il resto.
4. Poi UX6 (test con il fratello di Nicola, Sapienza Giurisprudenza).

**Aggiornamento 2026-07-02 — sessione 7 (fix sync online↔locale, UX4 pubblicata):**
0. **✅ Pubblicato** (commit `1ba5853` su `origin/main`) — UX4 e tutte le modifiche
   pendenti sono finalmente online, non solo in locale. File spazzatura rimossi.
1. Verificare a video https://nicorotolo.github.io/erasmuswiz/ dopo il prossimo
   deploy di Pages (Actions → "pages build and deployment") per confermare che UX4
   sia visibile online su entrambi gli atenei.
2. **Prossima sessione = UX5** (contenuti veri del traduttore, Nicola + Claude
   in chat, non Claude Code): scrivere `spiegazione`/`azione`/`citazione`/
   `fonte` per ogni voce di `REQUISITI_BANDO` di ENTRAMBI gli atenei (la UI di
   UX4 li mostra già appena compaiono nei dati — nessun altro codice da
   toccare). Ogni citazione con riferimento all'articolo del bando.
3. Poi UX6 (test con il fratello di Nicola, Sapienza Giurisprudenza).
4. Non toccare onboarding (UX1), stepper 4 fasi (UX2), vista cronologica
   Candidatura/export .ics (UX3) né la UI del traduttore/auto-verifica (UX4),
   già testati.
5. **Regola per non ripetere il problema di sync:** in ogni sessione futura,
   se si modificano file del sito, fare `git fetch` + `git rebase origin/main`
   e `git push` PRIMA di chiudere la sessione — non lasciare modifiche committate
   solo in locale da una sessione all'altra (il bot di mappatura avanza `main`
   in continuazione e "nasconde" il problema finché non lo si nota).

**Aggiornamento 2026-07-02 — sessione 6 (UX4 traduttore 3 registri + banner "in verifica"):**
0. **⬆️ PUBBLICA.bat ancora da lanciare** (include anche UX4 di questa sessione) — **FATTO in sessione 7**.
1. Poi UX6 (test con il fratello di Nicola, Sapienza Giurisprudenza).
2. Non toccare onboarding (UX1), stepper 4 fasi (UX2), vista cronologica
   Candidatura/export .ics (UX3) né la UI del traduttore/auto-verifica (UX4),
   già testati.
3. ~~Da chiarire con Nicola: file spazzatura non tracciati nella root~~ — **rimossi in sessione 7**.

**Aggiornamento 2026-07-02 — sessione 5 (UX3 fusione Scadenze+Checklist):**
0. **⬆️ PUBBLICA.bat ancora da lanciare** (include anche UX3 di questa sessione).
1. **Prossima sessione di codice = UX4** (traduttore a 3 registri in UI +
   banner "dati in verifica"): leggere `DISEGNO_UX.md` §4 e §8 prima di
   iniziare. Tocca card requisito (`REQUISITI_BANDO`, tab Idoneità) e voci di
   checklist: spiegazione/azione sempre visibili, "Cosa dice il bando"
   espandibile con citazione+fonte; retrocompatibile se i campi mancano.
   Banner `inVerifica:true` per Sapienza (bando/checklist provvisori).
2. UX5 (contenuti veri spiegazione/azione/citazione/fonte) resta lavoro di
   Nicola in chat, DOPO che UX4 ha pronta la UI che li mostra.
3. Non toccare onboarding (UX1), stepper 4 fasi (UX2) né la vista cronologica
   Candidatura (UX3), già testati.

**Aggiornamento 2026-07-02 — sessione 4 (UX2 home-percorso):**
0. **⬆️ PUBBLICA.bat ancora da lanciare** (include anche UX2 di questa sessione).
1. **Prossima sessione di codice = UX3** (fusione Scadenze+Checklist + export
   .ics): leggere `DISEGNO_UX.md` §6 prima di iniziare. Le voci di `CHECKLIST`
   dovranno acquisire il campo `scadenzaId`; il tab Timeline (già fuori dalla
   nav dopo UX2, raggiungibile da "Vedi tutte le scadenze ⏳") va probabilmente
   assorbito nella nuova vista cronologica del tab Candidatura.
2. Non toccare l'onboarding (UX1) né lo stepper a 4 fasi (UX2), già testati.

**Aggiornamento 2026-07-02 — sessione 2 (ridisegno UX):**
0. **⬆️ PUBBLICA.bat ancora da lanciare** (include anche Architettura della
   sessione precedente + i 3 nuovi/aggiornati documenti di questa).
1. **Prossima sessione di codice = UX1** (onboarding 3 domande): dare a
   Claude Code il prompt UX1 (in fondo alla ROADMAP/DISEGNO_UX), che legge
   `DISEGNO_UX.md` §3 e lavora SOLO su quel blocco.
2. Poi UX2 → UX3 → UX4 in ordine; UX5 (contenuti traduttore) è lavoro di
   Nicola con Claude in chat; UX6 = test col fratello (Sapienza,
   Giurisprudenza) sulla versione nuova — preparare griglia di osservazione
   e `FEEDBACK_UTENTI.md`.
3. Mappatura Sapienza: SOLO a fine sessione se avanza tempo (1 Facoltà
   piccola: POLIT 24 o IIIS 26). La coda Codex attuale (33 batch) basta.

**Aggiornamento 2026-07-02 (3ª Facoltà Architettura + roadmap capacità):**
0. **⬆️ PUBBLICA.bat da lanciare:** Architettura (113 mete) creata e agganciata,
   coda `mappatura-stato.json` ora a 33 batch/163 mete. Tutto solo in locale.
1. **Reality-check capacità (vedi dettagli sopra):** al ritmo dichiarato di 5
   mete/7 min continui, la coda attuale (163 mete) regge **~4 ore**, non giorni;
   l'intero catalogo Sapienza rimanente (~1455 mete) reggerebbe **~1,5 giorni**
   se Codex girasse davvero no-stop. Ma lo storico mostra buchi di più giorni
   (16→23 giugno) perché Codex è un'automazione **locale** (Worktree sul PC di
   Nicola), non un cron cloud H24 — quindi il vincolo reale non è "quante mete
   riesco a scrivere prima che finiscano", ma "tenere la coda piena ad ogni
   sessione di lavoro", che è esattamente quello che si sta già facendo.
2. **Facoltà Sapienza ancora da mappare (14, ~1455 mete totali)**, ordinate per
   dimensione crescente — piccole prima per costruire slancio, le due grandi
   (MATEM, LETFIL) vanno riservate a sessioni dedicate:
   POLIT (24) · IIIS (26) · POLAT (33) · STATIS (38) · IIIS2 (50) · IIIS1 (59) ·
   FARM (62) · COMM (62) · SOCIO (69) · MEDPROFSANIT (96) · PSICO1 (102) ·
   INGE (138) · MATEM (255) · LETFIL (441, 45 pagine — NON tentare in una sessione).
3. **Prossima sessione:** controllare `mappatura-stato.json` (`runCompletati`,
   `storico`) per capire quanto ha effettivamente lavorato Codex, poi avviare la
   prossima Facoltà dalla lista sopra (consigliato: POLIT o IIIS, piccole e veloci
   da estrarre, per mantenere il ritmo di aggiunta ad ogni sessione).
4. Verificare a video (http://localhost:8000) che con Sapienza attiva compaiano
   Giurisprudenza, Medicina e Psicologia e Architettura tra le mete.

**Aggiornamento 2026-07-01 (batch notturni Sapienza):**
0. **⬆️ PUBBLICA.bat da lanciare:** Giurisprudenza espansa a 55 mete, nuova Facoltà
   Medicina e Psicologia - Area medica (15 mete) creata e agganciata a `index.html`,
   `mappatura-stato.json` con 10 batch in coda (7 Giurisprudenza + 3 Medicina). Tutto
   solo in locale finché non si esegue `PUBBLICA.bat`.
1. **Lasciare girare Codex stanotte:** con 10 batch in coda (~9 min/run) dovrebbe
   completare Giurisprudenza e avanzare parecchio su Medicina senza intervento.
2. **Prossima sessione:** controllare `mappatura-stato.json` (`runCompletati`,
   `storico`) per vedere quanti batch sono stati processati; se Medicina finisce,
   individuare una 3ª Facoltà (candidate scartate per ora: Lettere e Filosofia
   ~450 mete/troppo grande, Economia senza sedi pubblicate).
3. Verificare a video (http://localhost:8000) che con Sapienza attiva compaiano
   sia Giurisprudenza sia Medicina e Psicologia tra le mete.



Fatto in sessione 5 (2026-06-11): **A4 COMPLETATO** — tutte le 58 mete con lingua e link scheda.
Fatto in run notturno (2026-06-12): **scadenze arricchite per 5 mete** —
  Copenhagen (KU): application 1/5 e 1/10;
  Alicante (UA): nomination 1/6 e 1/11, application 15/6 e 15/11, lingua B1/B2 raccomandato;
  UC3M (E MADRID14): nomination 13/3-15/5 e 15/9-16/10;
  Vytautas Magnus (LT KAUNAS01): nomination 11/5 e 11/11, application 17/5 e 17/11;
  NTNU (N TRONDHE01): nomination 15/4 e 15/9, application 1/5 e 1/10, lingua inglese B2.
Fatto in run mappatura (2026-06-14): **New University completata** — lingua B2 CEFR in inglese o sloveno da Info Package ufficiale. **Bilkent resta senza CEFR ufficiale**: richiesta lettera di competenza in inglese, pianificato ultimo tentativo.
Fatto in run mappatura (2026-06-14): **KU Leuven completata** — inglese C1 per corsi master della Faculty of Economics and Business. **Pafos, Copenhagen e Iriarte restano senza CEFR ufficiale**: pianificato ultimo tentativo.
Fatto in run mappatura (2026-06-14): **Palma ultimo tentativo completato** — la scheda UIB 2026/27 e le pagine incoming non pubblicano un requisito CEFR; E PALMA01 spostata in linguaNonTrovabile.
Fatto in run mappatura (2026-06-14): **Bilkent ultimo tentativo completato** - le pagine exchange ufficiali richiedono una lettera di competenza in inglese, ma non pubblicano un livello CEFR; TR ANKARA07 spostata in linguaNonTrovabile.
Fatto in run mappatura (2026-06-14): **Pafos, Copenhagen e Iriarte ultimo tentativo completato** - le fonti ufficiali non pubblicano un requisito CEFR generale per queste mete; CY PAFOS01, DK KOBENHA01 ed E TENERIF28 spostate in linguaNonTrovabile. Economia chiusa, prossimo batch Management.
Fatto in sessione (2026-06-15): **pipeline a imbuto per ridurre i token su Codex/Claude**. L'agente non legge più i file JS interi (~109 KB): `prepara-batch.mjs` estrae il batch in un INPUT.json di ~2 KB, l'agente restituisce solo i campi trovati in OUTPUT.json, `applica-batch.mjs` fa il merge surgicale deterministico (campi immutabili intatti), `node --check`, aggiorna `mappatura-stato.json` e salva le fonti in `batch/FONTI-*.json`. Prompt della Action riscritto di conseguenza. Testato end-to-end su management-batch-6.
Fatto in sessione (2026-06-15, parte 2): **pipeline estesa anche all'automazione Codex** (quella che gira spesso). `applica-batch.mjs` arricchito con TUTTA la logica di stato di Codex: gestione di codici Erasmus duplicati (più blocchi stesso codice), `tentativiLingua` + spostamento in `linguaNonTrovabile` dopo `maxTentativi`/`lingua_ultimo_tentativo`, ricalcolo `pending`/`completate` dal file, avanzamento dipartimento con soglia, creazione batch di follow-up per le pending rimaste. Validato contro `valida-stato.mjs` ("Stato coerente"). Nuovo prompt Codex in `automazioni/PROMPT_CODEX_mappatura.md` (da incollare in `$CODEX_HOME`). **Prossimi passi:** (1) ri-committare gli script aggiornati + il nuovo prompt; (2) sostituire il prompt nell'automazione Codex; (3) lanciare un run di prova e controllare la PR.
Fatto in run mappatura (2026-06-14): **Management avviato** - creato `js/dati-mete-management.js` con 76 mete ufficiali Venice School of Management, 74 codici Erasmus unici e link PDF scheda; pianificati 15 batch `scadenze+lingua`.
Fatto in run mappatura (2026-06-14): **Management lotto 1 arricchito** - scadenze completate per Klagenfurt, Vienna, ULB Phisoc, UCLouvain LSM e Bamberg; lingue CEFR completate per ULB Phisoc, UCLouvain LSM e Bamberg. Klagenfurt e Vienna restano in pending lingua per secondo tentativo.
Fatto in run mappatura (2026-06-15): **Management lotto 2 completato** - Deggendorf, FAU Erlangen-Nuernberg, Frankfurt School, University of Hamburg e HSBA arricchite con scadenze nomination/application e requisiti lingua CEFR ufficiali.
Fatto in run mappatura (2026-06-15): **Management lotto 3 completato** - Heilbronn, WHU, Cologne WiSo, Leuphana Lueneburg e Munich Business School arricchite con scadenze nomination/application e requisiti lingua ufficiali; Leuphana aggiornata su entrambe le righe D LUNEBUR01.
Fatto in run mappatura (2026-06-15): **Management lotto 4 completato** - Regensburg, Aarhus BSS, Copenhagen Business School, SDU Odense e Universidad de Alcala arricchite con scadenze nomination/application e requisiti lingua ufficiali.
Fatto in sessione debug (2026-06-15): **infra waterproof** - diagnosticato e risolto bug race condition auto-merge (branch divergenti ora eliminati silenziosamente); aggiunto stop esplicito anti-doppio-batch nel prompt; puliti 13 branch orfani; ripristinati file corrotti da OneDrive.
Totale Economia: 52/58 righe complete con lingua CEFR e scadenze; 58/58 con scadenze ospitante; 6 righe senza CEFR ufficiale classificate non trovabili.
Totale Management: 19/76 righe complete; 76/76 con link scheda PDF; scadenze completate per 21/76 righe; lingua CEFR completata per 19/76 righe.

Fatto in sessione (2026-06-23): **v2 promossa a sito principale** — `index.html`
root sostituito con il design v2 (tab OGGI/METE/TIMELINE/CHECKLIST, missione del
giorno, percorso a tappe, countdown pill, mascotte Wiz, dark mode). `css/style.css`
e `js/app.js` aggiornati, `img/wiz-hero.png` copiato, `const METE` → `var METE`
in entrambi i file dati, concat Economia+Management inline in `index.html`.
GoatCounter (A3) già integrato n
