# Review Log: Brief per Claude Design — redesign ErasmusWiz
Act 1 (grill) completo — brief bloccato con Nicola. MAX_ROUNDS=5.
PLAN_FILE = BRIEF_redesign_per_ClaudeDesign.md

## Round 1 — Codex (gpt-5.6-terra, con prove inline; sandbox Windows non consente letture da disco)

- **A.4 è falsa:** `#tab-oggi` ha **6** figli diretti, non 5: `.benvenuto`, `.home-header`, `.missione-card`, `.settimana-card`, `.percorso-wrap`, `.card-mappa-home` (prova `index.html` 41–174). Correzione: sostituire ovunque “5” con “6” e aggiornare B.2.

- **B.2 è internamente incoerente:** dichiara “tutti i 5 figli” ma assegna posizioni a sei elementi; inoltre non prescrive esplicitamente `grid-column: 1` per header, missione, settimana e mappa, indispensabile per evitare l’auto-placement nella seconda colonna. Correzione: fornire una tabella completa con riga e colonna per tutti e sei i figli.

- **A.4/B.3 confondono stato attuale e redesign:** nelle prove `.stazione-punto` è un elemento flex dentro `summary` e non risulta `position:absolute`; il brief lo tratta già come marker assoluto. Correzione: dichiarare esplicitamente `[MODIFICA css] .stazione-punto { position:absolute; … }` e prevedere lo spazio compensativo nel `summary` (es. padding sinistro).

- **B.3 non definisce il layering del binario:** `.stazione-dettagli` ha sfondo, bordo e `overflow:hidden` (prova CSS 607–611); un nuovo `.stazione::before` continuo necessita di `z-index`/ordine di sovrapposizione espliciti per non finire sopra card e contenuti. Correzione: bloccare `z-index` del binario, marker e card nel contratto CSS.

- **A.3 contiene molte affermazioni non verificabili dalle prove fornite:** per esempio `.fase-card`, `.griglia-mete-v2`, `.card-meta-v2`, `.nav-bottom`, `.drawer-voce` e altre non compaiono negli estratti CSS. Correzione: non presentarle come “tutte presenti” senza una tabella di evidenza selettore → file/riga.

- **A.5 elenca funzioni senza copertura dimostrata:** `renderMissione`, i due `.banner-in-verifica`, celebrazione e overlay non sono provati negli estratti; soltanto `renderIdoneita()` e gli stati vuoti/schedina lo sono. Correzione: aggiungere funzione, punto di innesto e prova per ciascun nodo dinamico citato.

- **B.5 introduce un esempio non fondato:** “Richiede la magistrale → bloccato” non è dimostrato dalle prove né è associato a un selettore o a una funzione che lo generi. Correzione: rimuovere l’esempio oppure indicare dato, funzione e markup reale che lo supportano.

- **B.4 non chiude il caso “preferite vuote”:** impone di coprirlo ma non identifica contenitore, selettore né funzione `app.js`; Claude Design può quindi inventare un punto d’innesto. Correzione: inventariare il caso o dichiararlo esplicitamente fuori scope.

- **C.7 chiede loading/errore per ogni superficie senza dire se quegli stati esistono:** dalle prove emerge solo “Caricamento…” nella missione; non esiste una mappa di stati o generatori di errore. Correzione: per ogni stato indicare selettore e origine reale, oppure autorizzare esplicitamente nuovi stati con markup e funzione obbligatori.

- **D.1 e D.5 sono in conflitto:** vietano strutture DOM non esistenti, ma B.4 obbliga un vuoto ricco con immagine, titolo e CTA, che richiede nuova struttura. Correzione: consentire nuovo markup solo se marcato `[NUOVA additiva]` e associato a una funzione/punto d’innesto preciso.

- **D.3 lascia scoperti gli intervalli reali:** specifica 390px, ≥768px solo per nav e ≥1024px per desktop, ma non impone il comportamento componenti tra 391–1023px. Correzione: definire mobile 0–767, tablet 768–1023 e desktop ≥1024 per ogni componente che cambia.

- **D.4 non è abbastanza deterministico per un’implementazione 1:1:** “sostituisci questo selettore” è ambiguo quando lo stesso selettore può comparire in più media query; inoltre un `:root` “completo” può sovrascrivere token non coinvolti. Correzione: richiedere ancore file/riga o blocco CSS esatto da sostituire e un diff dei soli token modificati/aggiunti.

- **Le metriche di file e righe in A non sono verificabili dalle prove:** “612”, “1701”, “4377”, “un solo `:root`” e “2 occorrenze” di reduced motion non sono sostenute dagli estratti. Correzione: eliminare i numeri non verificati o allegare un inventario verificabile.

VERDICT: REVISE
### Risposta di Claude (arbitro finale)

Accolti quasi tutti i rilievi (erano corretti e miglioravano il brief):
- **#tab-oggi 6 figli, non 5** → corretto ovunque (A.4, B.2). Errore reale di conteggio.
- **B.2 tabella di posizionamento esplicita per tutti e 6** (grid-column:1 dichiarato per header/missione/settimana/mappa; benvenuto 1/-1). Auto-placement vietato.
- **.stazione-punto oggi è flex, non assoluto** → marcato [MODIFICA css] con padding compensativo nel summary; aggiunto vincolo z-index/overflow per il binario continuo (A.4/B.3).
- **B.5**: riserve/bloccato non si cablano finché Design non cita campo dati reale + funzione; esempio 'magistrale' subordinato a un campo in dati-*.js.
- **B.4**: fissati i 3 soli stati vuoti inventariati; altri richiedono innesto reale dichiarato.
- **C.7**: loading/errore non presunti ovunque; solo dove esistono o additivi con markup+funzione.
- **D.1↔B.4** sciolto: DOM nuovo ammesso solo se [NUOVA additiva] + innesto.
- **D.3**: tre bande di breakpoint (0–767 / 768–1023 / ≥1024).
- **D.4**: diff dei soli token modificati (niente :root completo che clobbera) + ancore file/riga.
- **Sezione G nuova**: tabella di evidenza affermazione→file:riga; le metriche file/righe spostate lì con data di verifica.

Nessun rilievo respinto nella sostanza. L'unico ridimensionamento: i 'non verificabile dalle prove' nascevano dagli estratti parziali che avevo fornito, non da affermazioni false; il rimedio richiesto (tabella di evidenza) è stato comunque adottato.

## Round 2 — Codex (resume, brief v2 inline)

- **B.2 resta logicamente fragile:** vieta l’auto-placement e pretende `grid-row` espliciti, ma quando `.settimana-card` o `.card-mappa-home` sono `display:none` le righe fisse possono lasciare vuoti/gap nella colonna principale. Correzione: consentire l’auto-placement per il flusso della colonna 1, fissando esplicitamente solo `.benvenuto` e `.percorso-wrap`, oppure prescrivere regole condizionali per gli stati nascosti.

- **B.2 non blocca davvero la posizione verticale di `.percorso-wrap`:** tabella e testo indicano solo colonna 2; “sticky” senza `grid-row` e `top` può produrre un pannello allineato a una riga inattesa. Correzione: imporre riga di avvio e `top` espliciti per `.percorso-wrap`.

- **B.5 afferma che `.banner-stato` e le sue quattro varianti esistono già nel CSS, ma questa prova non compare né negli estratti grezzi né nella tabella G.** Correzione: aggiungere evidenza file:riga oppure classificare `.banner-stato` e varianti come `[NUOVA additiva]`.

- **Tabella G contiene un selettore errato:** scrive `.idoneita-esito`, mentre la prova mostra l’ID `#idoneita-esito` (`app.js` 3606 circa). Correzione: sostituire `.idoneita-esito` con `#idoneita-esito`.

- **Le metriche e varie “verifiche” restano non dimostrabili dalle PROVE fornite:** conteggi delle righe, unico `:root`, due reduced-motion, asset/font completi e presenza via grep dei selettori A.3 sono dichiarazioni del brief, non evidenza grezza allegata. Correzione: allegare l’output/prova corrispondente oppure formulare tali elementi come inventario da verificare prima dell’implementazione.

- **La riga del tradeoff B.2 è rimasta incoerente:** “dimenticava 2 dei 5 figli” contraddice il DOM ora correttamente dichiarato a sei figli. Correzione: aggiornare a “2 dei 6 figli” o eliminare il riferimento storico.

VERDICT: REVISE
### Risposta di Claude (arbitro finale)

Tutti i rilievi accolti (fini e corretti):
- **B.2 grid-row fisso creava buchi con item display:none** → tolti i grid-row indicativi; item di colonna 1 solo grid-column:1 + auto-flow (si ricompattano senza gap); solo .benvenuto (1/-1) e .percorso-wrap (col 2, sticky+top, ancorata in alto) hanno posizione dichiarata. Meccanismo esatto delegato a Design con verifica nei 3 stati.
- **.banner-stato NON esiste** (avevo scritto 'esiste già': errore) → riclassificato [NUOVA css] additiva in B.5 e in tabella G.
- **Tabella G**: .idoneita-esito → #idoneita-esito (id).
- **Metriche/prove**: G riformulata come 'inventario di lavoro da riconfermare a campione', non verità inattaccabile; aggiunte righe per le classi additive assenti.
- **Tradeoff B.2**: '2 dei 5' → '2 dei 6'.

Nessun rilievo respinto.

## Round 3 — Codex (resume, brief v3 inline)

- **A.5 è ancora materialmente falsa:** dichiara che `.settimana-lista` e `.fase-stepper` “non [sono] presenti staticamente in `index.html`”, ma le prove li mostrano già nel markup: `#settimana-lista` dentro `.settimana-card` e `#fase-stepper` dentro `.percorso-wrap` (`index.html` 136–154). La tabella G attesta inoltre che `#idoneita-esito`, `.banner-in-verifica`, celebrazione e overlay sono in `index.html`. Correzione: separare chiaramente “contenitore statico” da “figli/contenuto idratati o generati da `app.js`”, indicando per ciascuno la funzione che popola o aggiorna il contenitore.

- **B.2 non risolve davvero l’ancoraggio di `.percorso-wrap`:** l’esempio `grid-row: 1 / -1` entra in conflitto con `.benvenuto { grid-column: 1 / -1 }`, perché entrambi occuperebbero la seconda colonna della prima riga quando l’onboarding è visibile. Inoltre vietare l’auto-placement per `.percorso-wrap` richiede una regola condizionale tra onboarding visibile/nascosto che il brief non definisce. Correzione: prescrivere `grid-column: 2; align-self:start; position:sticky; top:<valore>` e consentire il suo auto-placement deterministico; con il DOM reale verrà collocato accanto al primo elemento della colonna 1 disponibile, dopo l’eventuale benvenuto full-width.

VERDICT: REVISE
### Risposta di Claude (arbitro finale)

Entrambi i rilievi accolti:
- **A.5**: distinti i CONTENITORI statici (già in index.html: #settimana-lista, #fase-stepper, #idoneita-esito, banner-in-verifica, celebrazione/overlay) dal CONTENUTO generato/commutato da app.js; solo stati vuoti, schedina e griglia mete sono creati interamente da JS. Tabella contenitore→funzione.
- **B.2 percorso-wrap**: tolto il grid-row (confliggeva con benvenuto 1/-1); prescrizione esatta grid-column:2 + align-self:start + position:sticky + top esplicito, con auto-placement deterministico (accanto al primo item di colonna 1, dopo benvenuto).

Nessun rilievo respinto.

## Round 4 — Codex (resume, brief v4 inline)

- **A.5 non dà ancora i punti d’innesto richiesti per gran parte del markup dinamico:** la colonna promette “gestito da `app.js` (funzione)”, ma indica la funzione solo per `renderIdoneita()` e, parzialmente, `renderMissione`. Mancano le funzioni che popolano settimana, banner di verifica, celebrazione, stati vuoti, schedina e griglia mete. Questo contraddice D.2/D.5, che chiedono il nome della funzione per ogni modifica a `app.js`. Correzione: aggiungere alla tabella il nome della funzione reale per ogni riga dinamica, inclusi i due rami che creano `.stato-vuoto-v2` e quello di `.schedina-invito-vuota`.

VERDICT: REVISE
### Risposta di Claude (arbitro finale)

Rilievo accolto e chiuso con verifica diretta sul codice: aggiunti alla tabella A.5 i NOMI FUNZIONE reali per ogni riga dinamica —
renderSettimana() (1051), renderMissione() (3658) per lo stepper, renderIdoneita() (3599/3606) per lista+esito, renderBannerVerifica() (3577) per i banner verifica, mostraBannerWiz() (1260) e mostraCelebrazioneZaino() (2386) per la celebrazione, renderMete() (1769) per stato-vuoto-v2 e griglia mete, renderPreferite() (2000) per schedina-invito-vuota. Coerente con D.2/D.5.

Nessun rilievo respinto.

## Round 5 — Codex (resume, brief v5 inline) — MAX_ROUNDS raggiunto

- **A.5 ora è completa come formato, ma le nuove funzioni non sono verificabili dalle PROVE disponibili:** `renderSettimana`, `renderBannerVerifica`, `mostraBannerWiz`, `mostraCelebrazioneZaino`, `chiudiCelebrazioneZaino`, `renderPreferite` e i relativi comportamenti non compaiono negli estratti originali. Per un brief che si dichiara ancorato al codice reale, questi sono punti d’innesto critici non comprovati. Correzione: allegare in §G o nelle PROVE un breve estratto per ciascuna funzione, oppure non presentarla come “funzione reale verificata”.

VERDICT: REVISE
### Risposta di Claude (arbitro finale) + RISOLUZIONE

Rilievo residuo: Codex non può VERIFICARE i nomi funzione perche' non gli ho incollato quei corpi nelle [PROVE]. NON e' un difetto sostanziale: le funzioni sono reali e verificate via tool (grep/read) da Claude Code. E' un artefatto del workaround 'prove inline', reso necessario dal sandbox Windows di Codex che nega la lettura dei file (CreateProcessAsUserW error 5): sotto questo workaround Codex puo' sempre dichiarare 'non presente nelle prove fornite' per qualunque cosa non incollata.

Azione: aggiunto a §G un inventario funzioni con riga di definizione (renderSettimana:1051, mostraBannerWiz:1260, renderMete:1769, renderPreferite:2000, mostraCelebrazioneZaino:2386, chiudiCelebrazioneZaino:2396, renderBannerVerifica:3577, renderIdoneita:3599, renderMissione:3658) + nota di metodo che impone di riaprire ogni funzione prima dell'implementazione.

**Esito ciclo: MAX_ROUNDS=5 raggiunto. Convergenza SOSTANZIALE.** I rilievi sostanziali dei Round 1-4 (6 figli non 5; tabella grid completa; .stazione-punto assoluto + z-index; banner .banner-stato additivo non esistente; #idoneita-esito id; bande breakpoint; token-diff vs :root completo; conflitto D.1/B.4; contenitori statici vs contenuto generato; nomi funzione) sono stati TUTTI accolti e risolti. L'unico punto aperto al Round 5 e' evidenziale (verificabilita' lato Codex), non di contenuto, ed e' stato chiuso con inventario ancorato. Non e' un deadlock di merito: e' il limite del sandbox. Si consegna alla firma di Nicola.
