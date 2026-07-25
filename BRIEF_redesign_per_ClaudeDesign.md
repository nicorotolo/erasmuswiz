# Brief per Claude Design — redesign ErasmusWiz implementabile 1:1
_Locked via grill — by Claude + Nicola (2026-07-24)_

> **Cos'è questo file.** Non è un piano di codice. È il **brief da consegnare a Claude Design**
> ("Clone Design") come richiesta per il prossimo output di design. Il suo scopo è vincolare
> Claude Design a produrre un redesign **ancorato al codebase reale di `C:\erasmuswiz`** e
> corredato di un **contratto di consegna** tale che Claude Code lo implementi **esattamente**,
> senza gli scollamenti che finora hanno reso un design "bello ma non implementabile 1:1".

---

## Goal

Produrre un brief per Claude Design che elimini a monte le tre cause note di mismatch
design→implementazione: (1) affermazioni sul DOM che non corrispondono al markup reale;
(2) schermate/stati lasciati scoperti; (3) classi "nuove" che collidono con classi esistenti.
Il brief incorpora la **verità del codebase** (selettori reali, cosa è statico vs generato da
`app.js`, collisioni note), le **decisioni bloccate** in questo grill, la **copertura richiesta**
(tutte le schermate e gli stati), un **contratto di consegna** che impone il formato dell'output,
e i **vincoli di onestà/brand** del prodotto. Fonte-di-verità dei token: `redesign-erasmuswiz.html`
§6.2. Il deliverable finale del ciclo è: brief approvato → consegnato a Claude Design → il suo
output torna conforme al contratto → Claude Code implementa.

---

## Approach — IL BRIEF DA CONSEGNARE A CLAUDE DESIGN

Tutto ciò che segue (Sezioni A–F) è testo destinato a Claude Design.

### Sezione A — Verità del codebase (NON negoziabile: verifica prima di affermare)

Il sito è **statico puro** (HTML/CSS/JS vanilla, nessun framework/build). Tre file toccati dal
redesign: `index.html` (612 righe, markup statico), `css/style.css` (1701 righe, un solo `:root`),
`js/app.js` (4377 righe, genera/idrata il markup dinamico). Regole d'oro del progetto: **codice
separato dai dati** (`js/dati-*.js`), **"zaino unico" in localStorage** (`ZAINO`, account-ready).

**A.1 — Token già esistenti (stessi nomi, non rinominare).** `--primary`, `--primary-fill`,
`--night-bg`, `--gold`, `--gold-dark`, `--bg-app`, `--bg-card-hover`, `--text-hint`,
`--border-strong`, `--mission-glow` esistono già in `:root`. Il redesign li **rimappa di valore**,
non li rinomina.

**A.2 — Token da introdurre (additivi, non esistono oggi).** `--space-*` (scala 4px), `--fs-*`
(scala tipografica), `--gutter`, `--stack`, `--container`, `--shadow-gold`. Vanno aggiunti in coda
al `:root` + override in `@media (min-width:1024px)`.

**A.3 — Classi esistenti che il redesign restila (tutte presenti in CSS, non rinominare):**
`.missione-card`, `.fase-stepper`, `.fase-card`, `.stazione`, `.stazione-punto`,
`.griglia-mete-v2`, `.card-meta-v2`, `.voce-checklist-v2`, `.chip-filtro`, `.countdown-pill`,
`.nav-bottom`, `.nav-item`, `.tab-pane`, `.home-header`, `.settimana-card`, `.percorso-wrap`,
`.home-saluto`, `.sezione-titolo`, `.missione-titolo`.

**A.4 — Struttura DOM reale (correzioni a errori della spec precedente):**

- **Timeline / stazioni.** Struttura reale:
  `li.stazione > details.stazione-dettagli > summary.stazione-testa > span.stazione-punto`.
  `.stazione-punto` **NON è figlio diretto** di `.stazione` (la spec precedente lo affermava: era
  falso). È un **accordion `<details>` nativo**. → Vedi decisione B.3: si tiene `<details>`, il
  binario è CSS. **Verificato nel CSS attuale**: `.stazione { position: relative }` esiste già
  (style.css:597), mentre `.stazione-dettagli`, `summary.stazione-testa` e `details` **non** sono
  posizionati → l'`position:absolute` del marker risolve correttamente su `.stazione` anche se è
  annidato in `summary`. **Nessuna patch di contesto necessaria** — MA Design deve blindare due punti
  nel CSS: **(a) `.stazione-punto` oggi NON è assoluto** (è un elemento flex dentro `summary`,
  style.css ~611): il redesign lo rende marker sulla linea → marcare `[MODIFICA css] .stazione-punto
  { position:absolute; left:0 }` **e** aggiungere padding-left compensativo al `summary`/riga testi,
  o il testo finisce sotto il marker. **(b) `.stazione-dettagli` ha `background`+`border`+
  `overflow:hidden`** (style.css 605–611): il binario `.stazione::before` vive sul genitore
  `.stazione`, quindi sta **dietro** la card → Design deve dichiarare esplicitamente `z-index`/ordine
  di sovrapposizione di binario, marker e card, e verificare che l'`overflow:hidden` non tagli il
  marker. Il vero delta: oggi il
  binario è disegnato su `.stazione + .stazione::before` (un segmento *tra* stazioni adiacenti,
  style.css:600); il redesign vuole un **binario continuo per-stazione** (`.stazione::before` con
  `top:0; bottom:-…`). Design deve specificare esattamente questo cambio di selettore.

- **`#tab-oggi` ha 6 figli diretti** (verificato, index.html 41–174). In ordine DOM:
  (1) `.benvenuto#home-benvenuto` (onboarding primo contatto, `display:none` per utenti di ritorno) →
  (2) `.home-header` (hero indigo) → (3) `.missione-card#missione-card` →
  (4) `.settimana-card#settimana-card` (`display:none` di default, mostrata da `app.js` solo con
  ciclo attivo) → (5) `.percorso-wrap` (contiene `.fase-stepper` + `.preparazione-card`) →
  (6) `.card-mappa-home#card-mappa-home` ("Le tue rotte", `display:none` finché il gate lo abilita).
  Design **deve assegnare una posizione di griglia a tutti e 6** (vedi tabella B.2), incluso il caso
  in cui `.settimana-card`/`.card-mappa-home` sono nascoste e in cui `.benvenuto` è visibile.

- **Stato vuoto già presente come altra classe.** `app.js` emette già `.stato-vuoto-v2` (un `<p>`)
  in 2 punti (ricerca senza risultati; filtro senza risultati). **Non c'è alcun `display:none`
  sulle liste vuote** (la spec precedente lo affermava: impreciso). La classe ricca `.stato-vuoto`
  della spec **collide concettualmente** con `.stato-vuoto-v2`. → Vedi B.4.

- **Idoneità.** È **auto-verifica per-requisito** (`renderIdoneita()` in `app.js`, checkbox
  "Lo rispetto", stato salvato in `ZAINO.autoverifica`). L'esito complessivo è **binario**: la riga
  `#idoneita-esito` ("Sembri idoneo ✅") appare solo se **tutti** i requisiti sono spuntati; ogni
  requisito è ✅ (ok) o 🟡 (da verificare). **Non esiste** logica per "idoneo con riserve" o
  "bloccato": quello stato **non è nei dati**. Le fasce ✅/⚠️/🔒 vivono **solo** sul punteggio delle
  *mete* (`.card-meta-v2-stato`), non sull'idoneità. → Vedi B.5.

**A.5 — Contenitori statici vs contenuto generato (distinzione obbligatoria).** Attenzione: quasi
tutti i **contenitori** esistono già staticamente in `index.html`; è il loro **contenuto interno**
(o la loro visibilità) a essere generato/idratato/commutato da `app.js`. Design deve trattarli come
contenitori esistenti da riempire, **non** inventarli.

| contenitore statico (index.html) | contenuto/stato gestito da app.js — **funzione reale** |
|---|---|
| `#settimana-lista` dentro `.settimana-card` (136–140) | `renderSettimana()` (app.js:1051): inietta le voci `settimana-item` e commuta la visibilità della card |
| `#fase-stepper` dentro `.percorso-wrap` (150) | `renderMissione()` (app.js:3658 e commento "stepper, missione, settimana e stazioni derivano da qui") inietta le card fasi |
| `#lista-requisiti-v2` | `renderIdoneita()` (app.js:3599) inietta le card requisito |
| `#idoneita-esito` (252) | `renderIdoneita()` (app.js:3606–3616): testo + `display` |
| `.banner-in-verifica` ×2 (251, 278) | `renderBannerVerifica()` (app.js:3577) commuta testo + `display` |
| `#banner-wiz.banner-celebrazione` (236) | `mostraBannerWiz()` (app.js:1260) |
| `#celebrazione-overlay` (519) | `mostraCelebrazioneZaino()` (app.js:2386) / chiude `chiudiCelebrazioneZaino()` (2396) |
| `.stato-vuoto-v2` ×2 (create da JS) | `renderMete()` (app.js:1769; siti 1890, 1894) |
| `.schedina-invito-vuota` (create da JS) | `renderPreferite()` (app.js:2000; sito ~2031) |
| griglia mete `.griglia-mete-v2` (card create da JS) | `renderMete()` (app.js:1769) |

Ogni volta che il design richiede markup **nuovo** in queste zone, deve dire se il contenitore è
già statico (allora è `[MODIFICA index.html]` o solo CSS) o se il nodo va emesso da JS (allora
`[MARKUP app.js: <funzione>]`, nominando la funzione e mostrando l'HTML esatto).

**A.6 — Asset e font disponibili (usare questi path esatti).** Font già caricati in `<head>`:
Bricolage Grotesque (500;700;800), Plus Jakarta Sans (400–800), Space Mono (400;700). Mascotte in
`img/mascotte/`: `wiz-saluto.webp`, `wiz-pensieroso.webp`, `wiz-esulta.webp`, `wiz-clessidra.webp`,
`wiz-spiega.webp`, `wiz-zaino.webp`, `scena-scrivania-marketing.webp`. Brand: `img/logo-mark.svg`,
`img/icon-star.svg`, `img/icon-sparkle.svg`. Il blocco `@media (prefers-reduced-motion: reduce)`
**esiste già** (2 occorrenze): Design deve dire quali nuove animazioni vanno aggiunte lì dentro.

### Sezione B — Decisioni di design bloccate (il grill le ha risolte; Design le rispetta)

- **B.1 — Redesign completo (pelle + struttura).** Non solo token: si adottano anche i cambi
  strutturali (griglia desktop, binario timeline, banner unificato, stati vuoti ricchi), **entro** i
  vincoli A.4 (nessuna rinomina, DOM reale).

- **B.2 — Griglia desktop "Oggi" a 2 colonne, tutti e 6 i figli con COLONNA esplicita.**
  `#tab-oggi { display:grid; grid-template-columns: minmax(0,1fr) 360px }` a ≥1024px. Regola di
  posizionamento (colonna esplicita per tutti; **la RIGA no**, per non creare buchi quando gli item
  sono `display:none`):

  | # | figlio | colonna | riga |
  |---|--------|---------|------|
  | 1 | `.benvenuto` | `1 / -1` (full-width) | prima riga (auto), quando visibile |
  | 2 | `.home-header` | `1` | auto-flow |
  | 3 | `.missione-card` | `1` | auto-flow |
  | 4 | `.settimana-card` | `1` | auto-flow (spesso `display:none`) |
  | 5 | `.percorso-wrap` | `2` | ancorata in alto alla colonna azione (vedi sotto) |
  | 6 | `.card-mappa-home` | `1` | auto-flow (spesso `display:none`) |

  Vincoli precisi che Design deve rispettare e **verificare nei tre stati** (a) benvenuto visibile,
  (b) settimana-card e/o card-mappa-home nascoste, (c) utente di ritorno (benvenuto nascosto):
  - gli item di **colonna 1** hanno solo `grid-column: 1` e **fluiscono in auto-placement** nell'ordine
    DOM: così, se uno è `display:none`, la colonna si ricompatta **senza lasciare gap** (era il rischio
    del grid-row fisso);
  - `.percorso-wrap`: **niente `grid-row` esplicito** (un `grid-row: 1/-1` andrebbe in conflitto con
    `.benvenuto { grid-column: 1/-1 }`). Prescrizione esatta:
    `grid-column: 2; align-self: start; position: sticky; top: <valore esplicito>`. Si lascia il suo
    auto-placement **deterministico**: col DOM reale finisce accanto al **primo item disponibile di
    colonna 1**, dopo l'eventuale `.benvenuto` full-width. Design fissa il `top` e **prova** i tre stati.
  - l'auto-placement è la soluzione voluta per tutti tranne `.benvenuto` (unico con `grid-column: 1/-1`
    dichiarato). `.percorso-wrap` ha colonna dichiarata (2) ma riga automatica. Ordine DOM invariato.

- **B.3 — Timeline: si tiene l'accordion `<details>` + binario continuo via CSS.** Nessuna rimozione
  dei `<details>` (la disclosure progressiva nativa è funzione voluta e accessibile). Il binario è
  `.stazione::before` + marker assoluto, con il vincolo di posizionamento di A.4. Zero JS nuovo.

- **B.4 — Stato vuoto ricco `.stato-vuoto`, che sostituisce `.stato-vuoto-v2`.** Design specifica la
  classe ricca (mascotte `wiz-pensieroso.webp` + titolo + una riga d'azione) e indica che i **2 siti
  esistenti** di `.stato-vuoto-v2` in `app.js` (ricerca a zero; filtro a zero) vanno sostituiti.
  Esiste già anche `.schedina-invito-vuota` (schedina vuota, generata da `app.js`): va **allineata**
  alla nuova classe/stile, non duplicata. Questi sono i **tre soli** stati vuoti noti e inventariati
  (ricerca-zero, filtro-zero, schedina-vuota). Se Design ne individua altri (es. preferite vuote),
  **deve prima indicarne contenitore/selettore/funzione reale**; è vietato inventare un punto
  d'innesto non verificato. Nessun vuoto muto.

- **B.5 — Banner `.banner-stato` unificato, cablato SOLO su stati reali.** `.banner-stato` e le sue 4
  varianti (ok/riserve/bloccato/verifica) **NON esistono oggi** nel CSS (grep = assente): vanno
  **create come `[NUOVA css]` additiva** (catalogo componenti riusabile). Poi `app.js` viene
  ricablato **solo dove i dati esistono**: `#idoneita-esito` → `.banner-stato.stato-ok`;
  `.banner-in-verifica` (×2) → `.banner-stato.stato-verifica`. Le varianti `stato-riserve`/
  `stato-bloccato` restano nel CSS ma **non si cablano finché Design non cita il campo dati reale e la
  funzione `app.js` che le popola**: se il dato non esiste, la variante resta solo nel catalogo
  componenti, non a schermo. **Vietato inventare** uno stato idoneità "riserve"/"bloccato" non
  calcolato dal motore, o un requisito meta (es. "richiede la magistrale") senza indicarne il campo
  dati in `js/dati-*.js`.

- **B.6 — Fonte-di-verità dei token = `redesign-erasmuswiz.html` §6.2** (indigo `--primary #4F46E5`,
  notte `--night-bg #211E42`, oro `--gold #FBBF24`, app `--bg-app #FAF8F3`). Il bundle `_ds/` nello
  zip usa una palette **diversa e più vecchia** (azzurro `#3d7dff`, notte `#1b377b`, nomi token
  diversi `--blue-500/--bg-page/--bg-night`): **va ignorato** come sorgente di colore. Se serve
  coerenza, si allinea `_ds` alla §6.2, mai il contrario.

### Sezione C — Copertura richiesta (tutte le schermate e gli stati)

Design deve specificare **ogni** superficie che usa i componenti condivisi, con i **selettori reali**:

1. **Oggi** `#tab-oggi`: onboarding `.benvenuto#home-benvenuto` (scena a 3 domande sulla mappa),
   hero `.home-header`, `.missione-card` (+ `.countdown-pill`), `.settimana-card`, `.percorso-wrap`
   (`.fase-stepper` + `.preparazione-card`/`.prep-barra`), `.card-mappa-home`,
   celebrazione inline `#banner-wiz.banner-celebrazione`.
2. **Mete** `#tab-mete`: `.sezione-header`, `.chip-filtro`, `.griglia-mete-v2`/`.card-meta-v2`
   (+ badge `.card-meta-v2-stato`); **dettaglio meta** = famiglia `.dett-*` (`.dett-titolo`,
   `.dett-label`, …, style.css ~1148–1231); **schedina** = `.schedina-lista` / `.schedina-slot` /
   `.schedina-numero` / `.schedina-corpo` / `.schedina-nome` / `.schedina-stato` / `.schedina-azioni`
   / `.schedina-freccia`, vuota = `.schedina-invito-vuota` (generata da `app.js` ~riga 2031–2058);
   stato vuoto lista = `.stato-vuoto-v2` (→ `.stato-vuoto`).
3. **Percorso** `#tab-percorso`: `ol.stazioni` (timeline `<details>`), `.requisito-v2` (idoneità),
   banner idoneità/verifica.
4. **Profilo** `#tab-profilo`: form con `.campo-form` (input/select).
5. **Drawer "Altro"** `#drawer` (dialog): `.drawer-voce`, `.drawer-gruppo`.
6. **Overlay celebrazione** `#celebrazione-overlay` (`wiz-esulta.webp`).
7. **Stati trasversali:** `:hover`/`:active`/`:focus-visible`/`:disabled` e `prefers-reduced-motion`
   sono richiesti su ogni interattivo. Gli stati **vuoto** (`.stato-vuoto`), **caricamento** ed
   **errore** vanno specificati **solo dove esistono davvero**: oggi è inventariato solo un
   caricamento inline nella missione ("Caricamento…", `#missione-titolo`) e i 3 stati vuoti (B.4).
   Non esiste una mappa di stati di errore. Design **non deve presumere** loading/errore ovunque: per
   ciascuno indica il selettore e l'origine reale, oppure lo propone come `[NUOVA additiva]` con
   markup **e** funzione `app.js` obbligatori. Nessuno stato "fantasma".

### Sezione D — Contratto di consegna (COME Design deve consegnare, per l'implementazione 1:1)

Per ogni componente/schermata, l'output di Design **deve** contenere:

1. **Selettori esistenti** (vedi A.1/A.3 e la tabella di evidenza §G) **oppure** markup nuovo, ma
   **solo se** marcato `[NUOVA additiva]` **e** legato a un punto d'innesto preciso (riga di
   `index.html` o funzione di `app.js`). Nessun nome di classe o struttura DOM inventato "a vuoto":
   l'unico DOM nuovo ammesso è quello additivo con innesto dichiarato (es. `.stato-vuoto`,
   `.banner-stato`). *(Questo scioglie l'apparente conflitto D.1↔B.4: il vuoto ricco è consentito
   proprio perché additivo e agganciato a una funzione.)*
2. **Marcatura per ogni regola**: `[MODIFICA css]` (ritocca selettore esistente),
   `[NUOVA css]` (additiva), `[MARKUP index.html]` (cambio statico), `[MARKUP app.js: <funzione>]`
   (cambio al generatore, con nome funzione da A.5). Niente cambi impliciti.
3. **Valori espliciti per bande di breakpoint** — Design definisce il comportamento di ogni componente
   che cambia in **tre bande**: **mobile 0–767px** (riferimento 390px), **tablet 768–1023px**
   (dove cambia la nav: da bottom a header a 768px), **desktop ≥1024px** (griglia 2-col, scala
   tipografica desktop). Niente zona 391–1023 lasciata implicita. Valori in px/rem, riferiti ai token.
4. **CSS incollabile e deterministico**: per i token, un **diff dei soli token modificati/aggiunti**
   (non un `:root` "completo" che rischia di sovrascrivere token non coinvolti), più il blocco
   `@media (min-width:1024px) :root` di override. Per i componenti, **ancora file/riga** (o il blocco
   CSS esatto da sostituire) per ogni regola, così l'implementazione è 1:1 anche quando lo stesso
   selettore ricorre in più media query. Marcatore `/*__PROD_END__*/` per separare produzione da
   specimen.
5. **HTML esatto** per ogni nodo nuovo, con il **punto di innesto** (statico: riga/blocco di
   `index.html`; dinamico: funzione di `app.js`).
6. **Manifest di diff** finale: tabella `file → selettore/blocco → tipo → rischio → nota`, con una
   sezione ⚠️ per ogni punto che tocca `index.html` o `app.js`.
7. **Checklist di verifica** (criteri di "fatto"): triplo controllo a **390 → 768 → 1280**, zero
   scroll orizzontale, focus-ring da tastiera su ogni interattivo, target touch ≥44/48px,
   `prefers-reduced-motion` rispettato. La verifica finale a video la fa Nicola nel browser.
8. **Nessuna dipendenza esterna nuova** oltre ai font già caricati; nessuna libreria JS; nessun
   asset non presente in `img/` (o marcato esplicitamente "da produrre").

### Sezione E — Vincoli di onestà e brand (regole d'oro del prodotto)

- **Onestà prima di tutto**: niente percentuali/stati finti. Se un dato non è verificabile, si dice
  ("Requisito lingua non dichiarato: verifica sulla scheda"). I blocchi si spiegano e si indica la
  via d'uscita. → Vincola B.5 (niente stati idoneità inventati).
- **Tono**: competente ma umano, dare del **tu**, sentence case ovunque (MAIUSCOLO solo micro-label).
- **Emoji funzionali e codificate**: ✅ compatibile · ⚠️ riserve · 🔒 bloccata · 🟡 da verificare ·
  ✨ magia/azione. Mai decorative a caso.
- **Numeri/date in formato italiano**; countdown `39g 23h 59m 57s` in mono.
- **Una sola superficie scura** (indigo notte) per hero/celebrazioni; ombre a tinta, mai nero puro.

### Sezione F — Cosa NON chiedere a Claude Design

Vedi "Out of scope" più sotto.

### Sezione G — Tabella di evidenza (ogni affermazione ancorata al file reale)

Verificato da Claude Code il 2026-07-24 sul repo `C:\erasmuswiz` con strumenti (grep/wc/read); misure:
`index.html` 612 righe, `css/style.css` 1701, `js/app.js` 4377; un solo blocco `:root`;
`prefers-reduced-motion` = 2 occorrenze in `style.css`. È un **inventario di lavoro**: le ancore
file:riga vanno **riconfermate a campione** prima dell'implementazione (i numeri di riga possono
slittare se il file cambia).

| Affermazione | Prova (file:riga) |
|---|---|
| `:root` con `--primary #4F46E5` | style.css:50 |
| `--primary-fill #4F46E5` | style.css:56 |
| `--bg-app #FAFAF7` (→ remap #FAF8F3) | style.css:22 |
| `--bg-card-hover #F3F1FA` | style.css:24 |
| `--text-hint #686180` (→ #5B5473) | style.css:30 |
| `--border-strong #D6D1EA` (→ #D2CCE6) | style.css:34 |
| `--night-bg #232046` (→ #211E42) | style.css:37 |
| `--gold #FBBF24` | style.css:44 |
| `--gold-dark #B45309` (→ #A34A06) | style.css:45 |
| `--mission-glow` | style.css:72 |
| token nuovi (`--space-*`,`--fs-*`,`--gutter`,`--stack`,`--container`,`--shadow-gold`) NON esistono | assenti in style.css (grep 0) |
| `.stazione { position: relative }` | style.css:597 |
| binario attuale `.stazione + .stazione::before` | style.css:600 |
| `.stazione-dettagli` con background/border/overflow | style.css:605–611 |
| `.stazione-testa` (summary) + marker flex | style.css:611 |
| struttura `li.stazione>details.stazione-dettagli>summary.stazione-testa>span.stazione-punto` | index.html:239–248 |
| `#tab-oggi` 6 figli diretti | index.html:41–174 (`.benvenuto`:48, `.home-header`:83, `.missione-card`:106, `.settimana-card`:136, `.percorso-wrap`:145, `.card-mappa-home`:164) |
| `.settimana-card` default `display:none` | index.html:136 |
| `.card-mappa-home` default `display:none` | index.html:164 |
| nav 4 voci (Mete/Home/Percorso/Altro-drawer) | index.html:441–461 |
| 4 tab: oggi/mete/percorso/profilo | index.html:41,179,231,357 |
| `.stato-vuoto-v2` (2 siti, `<p>`) | app.js:1890, app.js:1894 |
| nessun `display:none` su liste vuote | app.js (grep 0) |
| idoneità per-requisito, esito binario `#idoneita-esito` | app.js:3599–3616 (`renderIdoneita`) |
| `renderMissione()` ricalcola stepper/missione/settimana/stazioni | app.js:3658 |
| `.banner-in-verifica` (2 istanze) | index.html:251, index.html:278 |
| `#idoneita-esito` (id; classe omonima) | index.html:252 (accesso via `getElementById`, app.js:3606) |
| `.banner-stato` + 4 varianti = **NON esistono** (additive da creare) | assenti in style.css (grep 0) |
| `.stato-vuoto` (ricco) = **NON esiste** (additiva da creare) | assente in style.css (grep 0) |
| celebrazione inline `#banner-wiz.banner-celebrazione` | index.html:236 |
| overlay `#celebrazione-overlay` | index.html:519 |
| drawer `#drawer` + `.drawer-voce`/`.drawer-gruppo` | index.html:468–515 |
| schedina `.schedina-*` + `.schedina-invito-vuota` | app.js:2031–2058 |
| dettaglio meta famiglia `.dett-*` | style.css ~1148–1231 |
| font Bricolage/Jakarta/Space Mono già caricati | index.html `<head>` (link Google Fonts) |
| mascotte `img/mascotte/*.webp`, logo `img/logo-mark.svg` | filesystem verificato |

> Selettori di A.3 non elencati qui (`.fase-card`, `.griglia-mete-v2`, `.card-meta-v2`, `.nav-bottom`,
> ecc.) sono stati verificati presenti in `css/style.css` via grep; Design può assumerli esistenti,
> ma se un valore preciso serve, deve ancorarlo al file come sopra.

**Inventario funzioni `app.js` (nomi + riga di definizione, verificati via grep il 2026-07-24):**

| funzione | riga def. | ruolo |
|---|---|---|
| `renderSettimana()` | app.js:1051 | popola `#settimana-lista`, commuta visibilità `.settimana-card` |
| `mostraBannerWiz()` | app.js:1260 | mostra/riempie `#banner-wiz.banner-celebrazione` |
| `renderMete()` | app.js:1769 | crea le card in `.griglia-mete-v2` + `.stato-vuoto-v2` (1890, 1894) |
| `renderPreferite()` | app.js:2000 | crea la schedina + `.schedina-invito-vuota` (~2031) |
| `mostraCelebrazioneZaino()` | app.js:2386 | mostra `#celebrazione-overlay` |
| `chiudiCelebrazioneZaino()` | app.js:2396 | chiude `#celebrazione-overlay` |
| `renderBannerVerifica()` | app.js:3577 | commuta `#banner-verifica-idoneita` / `#banner-verifica-checklist` (`.banner-in-verifica`) |
| `renderIdoneita()` | app.js:3599 | popola `#lista-requisiti-v2` + `#idoneita-esito` (3606–3616) |
| `renderMissione()` | app.js:3658 (chiamata) | motore centrale: da qui derivano stepper (`#fase-stepper`), missione, settimana, stazioni |

> Nota di metodo: questi anchor sono stati raccolti con `grep`/`read` sui file reali, ma **non sono
> stati incollati come estratti grezzi nel presente documento**. Prima dell'implementazione, chi
> lavora deve **riaprire ogni funzione** all'ancora indicata e riconfermarla (i numeri di riga
> possono slittare). Il brief è ancorato al codice, non un sostituto della lettura del codice.

---

## Key decisions & tradeoffs

| # | Decisione | Perché | Tradeoff |
|---|-----------|--------|----------|
| B.1 | Redesign completo, non solo token | Nicola vuole l'impatto pieno | Tocca markup+JS → più verifica |
| B.2 | Benvenuto full-width, rotte in col 1 | La spec dimenticava 2 dei 6 figli | Colonna esplicita + auto-flow riga: robusta agli stati nascosti |
| B.3 | Tieni `<details>`, binario via CSS | Disclosure progressiva è UX voluta e accessibile; il manifest stesso diceva "non rinominare" | Meno fedele al pixel dello specimen appiattito |
| B.4 | `.stato-vuoto` sostituisce `.stato-vuoto-v2` | Evita doppio vocabolario di classi; stati vuoti ricchi | Richiede toccare 2 siti `app.js` + aggiungerne altri |
| B.5 | Banner unificato cablato solo su stati reali | Regola d'oro onestà: niente stati non fondati sui dati | Le varianti riserve/bloccato restano poco usate finché non c'è motore |
| B.6 | Token = redesign HTML §6.2, ignora `_ds` | Due direzioni di brand nello zip; serve una sola fonte | Il bundle `_ds` resta disallineato finché non lo si aggiorna |
| C | Copertura di tutte le schermate/stati | Le zone scoperte (profilo, onboarding, dettaglio-meta) sono la fonte storica dei mismatch | Brief e output di Design più grandi |
| D | Contratto di consegna esplicito | È il fix diretto del "design bello ma non implementabile 1:1" | Vincola Claude Design a un formato rigido |

---

## Risks / open questions

1. ~~Selettori di `schedina`/`dettaglio meta` non inventariati.~~ **CHIUSO**: schedina =
   `.schedina-*` + `.schedina-invito-vuota`; dettaglio meta = famiglia `.dett-*`. Vedi C.2.
2. **Varianti `stato-riserve`/`stato-bloccato` senza motore.** Restano CSS riusabile; se in futuro
   servono nell'idoneità serve lavoro di logica separato (fuori da questo brief).
3. **Rischio tipografico**: passando ai token `--fs-*`, i titoli lunghi (`missione-titolo`,
   `sezione-titolo`) possono andare a capo male a 390px. Il contratto D.7 lo cattura con il controllo
   a 390.
4. ~~Contesto di posizionamento del marker timeline.~~ **CHIUSO**: `.stazione` è `position:relative`
   (style.css:597), `.stazione-dettagli`/`summary`/`details` non sono posizionati → marker ok. Vedi A.4.
5. **Doppio repo**: sviluppo reale in `C:\erasmuswiz`; `C:\Users\ASUS\erasmuswiz` è stale. Ogni
   riferimento del brief è a `C:\erasmuswiz`.

---

## Out of scope

- **Implementazione del codice** del redesign (è una passata separata, dopo l'output di Design).
- **Nuova logica di idoneità** (riserve/bloccato calcolati): è lavoro di prodotto, non di redesign.
- **Pipeline dati / `js/dati-*.js` / mappatura Gemini+Codex** (gestita sul PC aziendale).
- **Palette del bundle `_ds/`** come sorgente di colore (ignorata; eventualmente allineata dopo).
- **Nuovi framework, librerie JS, backend, account/login**: il sito resta statico puro.
- **Asset illustrativi nuovi** oltre a quelli in `img/` (salvo marcati "da produrre").
