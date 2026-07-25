# Plan: implementare il redesign v2 di ErasmusWiz (canvas "Redesign ErasmusWiz.dc.html")
_Locked via grill — by Claude + Nicola (2026-07-24) · rev. 4, dopo 4 round di Codex_
_rev. 5 (2026-07-25, in corso d'opera): **F0 e F1 chiuse, GATE 1 passato**; **F2 passa a
Claude Code** invece che a Codex (scelta di Nicola) → D4 rivista, la sezione "Consegna a
Codex" è decaduta. Vedi «Stato di avanzamento» qui sotto._

---

## Stato di avanzamento

| Fase | Stato | Commit |
|---|---|---|
| **F0** Preparazione | ✅ chiusa 2026-07-25 | `ac7c1c9` + `1e23ddf` |
| **F1** Token, ritmo, gutter, griglia | ✅ chiusa 2026-07-25 | `ce0d5a8` |
| **🚦 GATE 1** | ✅ passato 2026-07-25 — Nicola ha confermato le tre default: **P-A** su `modo-benvenuto` (R3), **`!important`** su `#banner-wiz` (R38, `index.html` non si tocca), **full-bleed conservato** per il hero sotto i 768px | — |
| **F2** Componenti §04 | ✅ chiusa 2026-07-25 — fatta da Claude Code | vedi «Esiti di F2» |
| **F3** Timeline e stato vuoto | ✅ chiusa 2026-07-25 | `ee2aca0` (F3a) · `db8d67b` (F3b) |
| **🚦 GATE 2** · **F4** | ⬜ da fare | — |

### Esiti di F1 che correggono questo piano

Due affermazioni del canvas recepite dal piano si sono rivelate **false alla misura** (non
alla stima). F1 le ha corrette; chi legge F2/F3 deve partire da qui, non dal testo originale
di F1.10–F1.12 più sotto.

1. **`.percorso-wrap` conserva `grid-row: 1 / 6`** — non è una dimenticanza. Il canvas
   sostiene che l'auto-placement la metta accanto al hero «in modo deterministico, perché è
   l'unico item della colonna 2»: è il **5° figlio nel DOM** (dopo `missione-card` e
   `settimana-card`), quindi il cursore la deposita in riga 2. Misurato a 1280 **senza** la
   riga: sidebar a `top: 310px` invece di 102, **337px di buco** sotto `.missione-card`, e
   **sticky a corsa zero** (l'area di griglia era alta quanto l'elemento). Con la riga:
   sidebar a filo col hero, corsa **363.7px**, righe implicite 4–5 alte 0px.
   → Conseguenza: `#tab-oggi` usa **`gap: 0 var(--space-6)`**, non `gap: var(--space-6)`.
   Con un row-gap vero ogni riga implicita attraversata dalla sidebar porterebbe il suo gap.
   Il ritmo verticale resta 24px, ma lo dà `--stack` via `> * + *`. **Il reset
   `#tab-oggi > * + * { margin-top: 0 }` di F1.12 NON è stato applicato**: sarebbe servito
   solo con un row-gap.
2. **Il hero è full-bleed sotto i 768px, con margini negativi espliciti.** Spostando il
   gutter su `.main-content`, `.home-header` si rientrava di 16px conservando
   `border-radius: 0 0 xl xl` + `border-top: none`: due angoli superiori squadrati a
   mezz'aria. Prima di F1 il full-bleed era **implicito** (a mobile `.main-content` non
   aveva alcun padding). Sopra i 768 il hero era già rientrato anche prima, e a ≥1024 è una
   card a tutti gli effetti: la regola si ferma a 767px.

Nota per **F2.0 / F4** (R30): l'inventario touch misurato dopo F1 dà 11/15/15 su Oggi,
48/52/52 su Mete, 35/52/57 su Percorso, 15/20/20 su Profilo (390/768/1280). I conteggi di
Mete sono più bassi di quelli di F0 perché il render a lotti non aveva ancora finito: la
lista di riferimento resta quella di `baseline/README.md`.

### Esiti di F2 che correggono questo piano

**Il criterio touch di R30 è già soddisfatto qui, non a F4.** Dopo F2.0 l'inventario a
390/768/1280 su tutti e 4 i tab (con i `<details>` del Percorso forzati aperti, o i controlli
dentro le stazioni chiuse sfuggirebbero alla misura) contiene **soltanto** le quattro
eccezioni già dichiarate in `baseline/README.md` — i link inline dentro un paragrafo:
`#footer-link-bando`, i tre link del footer, `.profilo-strip-link`, «fonte ufficiale ↗».
Nessuna eccezione nuova. A F4 resta da rimisurare, non da correggere.

**Sei scostamenti deliberati dal canvas**, tutti per un motivo strutturale o di contrasto,
non di gusto — chi legge F3/F4 deve partire da qui:

1. **`.preparazione-card` è ESCLUSA dal corpo condiviso §4.2.** Vive dentro «Il tuo
   progresso», cioè dentro un'altra card: darle fondo, bordo e ombra propri produrrebbe una
   card annidata. Resta la sezione senza cornice che era.
2. **`.voce-checklist-v2` resta una card, non diventa la riga con `border-bottom`.**
   `.lista-checklist-v2` non contiene voci ma **capitoli** (`.cand-capitolo`,
   `.zaino-capitolo`, app.js:1414): le voci vivono in `.cand-checklist-sotto` e
   `.gruppo-post`, che le appiattiscono già. La forma-card compare solo in «Ora tocca a te»
   (max 3 voci), dove è il punto. Del canvas si prende touch 48, spaziatura a token e la
   voce attiva a filetto invece che ad anello da 2px + alone.
3. **Il drawer resta un pannello da destra a ogni banda.** Il canvas lo vuole bottom-sheet
   sotto i 768, ma l'animazione d'ingresso è `translateX(100%)`: un foglio che sale dal
   basso scivolando da destra è un movimento sbagliato. Adottati testa `sticky`, scala e
   spaziature.
4. **`.meta-punteggio` conserva la famiglia semaforo** (`--green/--amber/--red`) invece dei
   letterali del canvas: `#059669` sul bianco sta a **3.4:1** e non passa il 4.5:1 richiesto
   a un testo che *è* il dato della card. Del canvas si prende il registro rosso per
   `locked`. Stesso criterio per i fondi dei badge di stato.
5. **44px e non 36/40 su `.btn-preferita`, `.schedina-freccia`, `.schedina-rimuovi`.** Il
   canvas propone misure sotto soglia (e un `@media (max-width:767px)` che le alzerebbe solo
   a mobile): il criterio d'uscita di R30 è **lista vuota a tutte e tre le larghezze**.
6. **L'anello di focus non impone `border-radius`.** Il canvas ne prescrive uno (10px, 20px
   sulle card): ma il raggio si applica all'ELEMENTO, quindi ogni bottone tondo da 44px
   (`.drawer-chiudi`, `.btn-preferita`, `.meta-modal-chiudi`) diventerebbe un quadrato
   smussato nell'istante in cui riceve il fuoco. L'outline segue già da sé il raggio.
   La specificità dell'anello è alzata a (0,3,0) con `:is(…):focus-visible:not(:disabled)`,
   o `.missione-urgente .btn-primary` (0,2,0) ne spegnerebbe l'alone.

**Due cose in più rispetto a §04, entrambe dovute:**
- **`.sezione-titolo` consuma `--fs-h1`** (25/27/30px). Il token, creato in F1, dichiara nei
  suoi commenti proprio quel selettore come consumatore; prima `.sezione-titolo` viveva su
  una scala parallela (1.35rem, con override a 1.6rem a ≥1024). Rimosso l'override.
- **`.prep-barra` e `.barra-progresso` diventano lo stesso componente** (§4.7 le tratta
  insieme): stessa altezza, stesso binario, stesso riempimento indaco, etichette monospazio.

**Una cosa NON fatta, da decidere al GATE 2:** il commento del canvas su `--fs-hero` indica
come consumatori `.home-hero-claim` e `.celebrazione-titolo`. Il secondo è applicato; il
primo **no**: `.home-hero-claim` è la riga piccola sotto il saluto (13-14.5px, `--night-muted`),
e portarla a 30-40px non è un cambio di scala ma un cambio di gerarchia del hero — cioè §3,
già passata dal GATE 1. Sembra un lapsus del canvas (il consumatore naturale sarebbe
`.home-saluto`): la decisione è di Nicola.

**Nota per il GATE 2 — il filetto di stato a sinistra.** §4.4 e §4.7 lo prescrivono come
grammatica degli stati, e ora è usato da `.banner-stato` (4 varianti), `.requisito-v2` (3
registri), `.idoneita-esito`, `.banner-in-verifica` e `.voce-checklist-v2.attiva`, sopra i
`border-left` d'oro che `.cand-scadenza-card` e `.zaino-capitolo-testa` già avevano. È un
motivo forte e ripetuto: se a video risulta troppo, il posto per dirlo è il GATE 2.
`.profilo-salvato` è già stato riportato indietro — lì il filetto l'avevo aggiunto io, non
il canvas, e un messaggio di conferma non è uno stato.
**Corroborato da fuori**: il detector meccanico di `/impeccable` segnala 9 `border-left`
colorati ≥3px come antipattern — tutti pre-esistenti a F3, nessuno introdotto da F3. Non è
un verdetto (il filetto qui ha un motivo), ma è una seconda voce che dice la stessa cosa.

### Esiti di F3 che il GATE 2 deve conoscere

**Cinque scostamenti dal canvas**, tutti misurati, non di gusto:

1. **Il binario del canvas non è continuo.** Con `bottom: calc(-1 * var(--space-4))` il
   tratto finisce al bordo superiore della `<li>` successiva, non al suo marker: restava
   scoperto il tratto alto `--marker-top`, cioè **un buco di 14px esattamente sopra ogni
   punto** — su un elemento che il canvas chiama "binario continuo". La geometria è ora
   espressa in funzione di `--marker` (`left`, `top`, `bottom` e la corsia si ricalcolano
   da sé) e il blocco desktop cambia **un solo numero**. Misurato: buchi = 0 a 390 e 1280,
   marker e binario allineati a **0.00px**.
2. **`#stazione-mete-ponte` è l'unica `<li>` senza marker né `<details>`** (index.html:260).
   Il blocco del canvas la ignora: la linea si spezzava proprio lì. Il suo binario parte da
   `top: 0`, e se la stazione precedente è completata il tratto resta verde.
3. **Bianco su `#10B981` sta a 2,6:1** — si usa `--green` (#0f7a3a, **5,5:1**). È lo stesso
   criterio della deroga 4 di F2, applicato al colore che il canvas propone per il verde
   della timeline. Stessa logica per il binario: 2,4:1 contro 5,1:1 su `--bg-app`.
4. **Tolto l'alone indaco fisso** (`0 0 0 5px rgba(79,70,229,.16)`) sotto il marker attivo:
   con l'anello di focus installato in F2 sarebbe indistinguibile da un elemento a fuoco.
   Il pieno indaco basta da solo — verde = fatto, indaco = sei qui, contorno = dopo.
5. **La tappa corrente passa da oro a indaco, con la pillola di stato al seguito.** Non è
   una scelta nuova: è la grammatica che F2 ha già dato a `.voce-checklist-v2.attiva`
   (`#EEF2FF` + `--primary`, ~894). Con la sola metà cambiata, la stazione corrente sarebbe
   rimasta mezza oro e mezza indaco. **È la cosa più visibile di F3: se non convince, il
   posto è il GATE 2.**

**Un difetto trovato alla misura, non nel diff** (come in F1): con `padding-top: 0` sul
corpo — che è ciò che il canvas prescrive — le stazioni il cui primo figlio è un banner
`display:none` (`#banner-verifica-idoneita`, `#banner-verifica-checklist`) avevano il
contenuto vero **appiccicato alla testa, 0px misurati**. È la stessa trappola di R39: `>
:first-child` non sa nulla di `display:none`. Lo stacco ora lo dà il corpo — 12px in tutte
e 5 le stazioni, in ogni combinazione di banner acceso/spento.

**Due scelte su §5.1** oltre alle correzioni R21/R22/R23 già nel piano:
- il filtro **"lingua" non è una categoria di compatibilità**: con la spiegazione generica
  ("questa categoria è vuota, le altre restano piene") lo stato vuoto direbbe la cosa
  sbagliata. Ha una sua variante di copy, stesso sito di render;
- **niente animazione d'ingresso** sullo stato vuoto: la griglia si ri-renderizza a ogni
  battuta della ricerca (debounce 150ms) e un'entrata ripartirebbe a ogni keystroke.

**Una cosa NON fatta, dichiarata**: se l'**area** del profilo non ha mete e c'è un filtro
attivo, compare "Nessuna meta con questo filtro" invece di "Nessuna meta per la tua area"
(che oggi vive solo nel testo d'intro, app.js:1820). È **pre-esistente**, l'ordine dei due
`if` non è stato toccato, e §5.1 inventaria tre soli stati vuoti: fuori scope di F3.

> **Fonte-di-verità del design:** `design/redesign-2026-07/Redesign ErasmusWiz.dc.html`
> (166 KB, prodotto da Claude Design in risposta a `BRIEF_redesign_per_ClaudeDesign.md`; il progetto
> remoto è `claude.ai/design/p/9965e1be-fac2-4891-82e2-c24fba385c0c`, e lo zip consegnato ne è una
> copia completa — verificato con `list_files` sul MCP design).
> Nel seguito lo chiamiamo **il canvas**, citato per sezione (§2.1, §4.3, …).
> Repo di lavoro: **`C:\erasmuswiz`** (NON `C:\Users\ASUS\erasmuswiz`, copia stale del 25/06).

---

## Goal

Portare in produzione, su `css/style.css` e `js/app.js`, il redesign v2 specificato dal canvas —
**senza rinominare classi, senza toccare `index.html`, senza nuove dipendenze** — in 4 fasi con 2
gate di verifica umana, committando direttamente su `main`. Il risultato atteso non è un cambio di
tinta (la palette è **già** indigo) ma un cambio di **ritmo verticale, scala tipografica e
trattamento dei componenti**.

## ⚠️ Regola 1 — PRESERVAZIONE

I blocchi `[MODIFICA css]` del canvas sono scritti come **corpi completi sostitutivi**, ma i blocchi
reali portano proprietà funzionali che il canvas non conosce. Casi misurati:

| blocco reale | proprietà che il canvas perderebbe | conseguenza |
|---|---|---|
| `.missione-card` (414–422) | `position:relative`, `overflow:hidden` | la mascotte assoluta deborda |
| `.nav-bottom` @768 (174–183) | `height:64px`, `justify-content:flex-end`, `top:0` con `fixed` | nav rotta a desktop |
| `.missione-card` @1024 (1361) | `padding-right:190px` | il testo finisce sotto l'illustrazione |
| `.main-content` (265–279, 1338) | è il **proprietario** di container e spazio-nav | doppio padding |

**Procedura obbligatoria per ogni `[MODIFICA css]`:** (1) leggere il blocco reale prima di
sostituirlo — mai per numero di riga cieco (R7); (2) diff proprietà-per-proprietà; (3) riportare nel
blocco nuovo **ogni proprietà funzionale** che il canvas non menziona; (4) droppare una proprietà
**solo** se il canvas la sostituisce esplicitamente. In caso di ambiguità: **si preserva**.

**Unica eccezione dichiarata** (R26): i **margini orizzontali legacy** (`margin: … 20px`, e i 14px
del blocco ≤480px) **non** si preservano — sono il vecchio gutter, e vengono sostituiti dal padding
di `.main-content` nello stesso diff (F1.13). Del margine si preserva la **sola componente
verticale**: `margin: 12px 20px 0` → `margin-top: 12px`.

### Cosa è già stato verificato (misurato — non ri-discutere)

| Affermazione | Verifica indipendente di Claude Code (2026-07-24) |
|---|---|
| V1 — palette già indigo, rebase = 2 righe | ✅ `--primary #4F46E5`, `--gold #FBBF24` già a target |
| V4 — due bottoni primari distinti | ✅ `.btn-primary` e `.btn-primario` (944) |
| V5 — la griglia di Oggi usa `grid-row` fisse | ✅ 1352–1363, **5 selettori, non 4** (R1) |
| V7 — lo stato vuoto obbliga a toccare `app.js` | ✅ 1890 e 1894, `crea("p",…)` + `return` immediato |
| `.stato-vuoto`, `.banner-stato`, `__PROD_END__` assenti | ✅ grep = 0 |
| `uploads/style.css` = CSS reale | ✅ SHA-256 identico |
| **`--ease-out` esiste già** (65) e governa 30+ transizioni | ✅ → **non ridefinirlo** |
| **`.main-content` possiede container e spazio-nav** (265–279, 1338) | ✅ mobile `padding-bottom: calc(80px + safe-area)`; ≥768 `64px 20px 0`, max-w 740; ≥1024 `104px 40px 48px`, max-w **1140** |
| **la nav sta dopo `</main>` e dopo `</footer>`** (423, 435, 441) | ✅ → `sticky` la manderebbe in fondo: resta `fixed` |
| **la nav a ≥768 è già in header** (174–183, `fixed; top:0; height:64px`) | ✅ il canvas la riscrive perdendo `height` e `justify-content` |
| `missione-urgente` sta sulla **card**; keyframes = `pulsa-dot` | ✅ app.js:1203, style.css:458/485 |
| i chip filtro **non hanno** `data-filtro` | ✅ app.js:1842 |
| `.stato-vuoto-v2` **non ha stile** in `style.css` | ✅ non può "coprire chiamate residue" |
| **`.tab-pane.attivo` è `display:block`** (283) | ✅ → `gap` su di esso sarebbe **inerte** (R27) |
| **il gutter mobile è per-figlio, non del contenitore** | ✅ **17** `margin … 20px` + **5** `padding … 20px` + blocco ≤480px (1655–1663) + **1 margine inline** in `index.html` (R28, R38) |

---

## Approach

### F0 — Preparazione (Claude) · rischio nullo

1. **Ordine corretto** (R10): `git status` → committare il lavoro pendente (`STATO_DEL_SITO.md`
   modificato; i due `BRIEF_redesign_*` untracked) → **solo dopo** `git pull --rebase`.
   Un `pull --rebase` con modifiche non salvate fallisce.
2. `git pull --rebase` resta obbligatorio a inizio di **ogni** fase: il PC aziendale pusha lotti di
   mappatura su `main` più volte al giorno. Toccano solo `js/atenei/*`.
3. Versionare la spec in **`design/redesign-2026-07/`**: `Redesign ErasmusWiz.dc.html`,
   **`support.js`** (il canvas lo carica: senza, non si apre), `redesign-erasmuswiz.html`, `img/`,
   `uploads/`. **Non** copiare `_ds/` (palette vecchia, B.6). Aprire il canvas dalla nuova cartella
   per verificare che renderizzi.
4. **Screenshot di riferimento** a 390 / 768 / 1280 dei 4 tab, **con la checklist di invarianti**
   che li rende confrontabili (R29) — senza criteri, ogni differenza è "intenzionale" e il confronto
   non dice nulla. Invarianti: tutti i contenuti presenti · nessun testo tagliato · nessun overflow
   orizzontale · ordine dei blocchi invariato · nav visibile e non sovrapposta · card non sovrapposte.
5. **Inventario touch programmatico** (R12), a 390px, misurando il **vero bersaglio cliccabile**
   (il `label`/`button` contenitore, non il `<input>` interno) per non produrre falsi positivi:
   ```js
   [...document.querySelectorAll('a,button,summary,input,select,[tabindex]')]
     .map(el => { const t = el.closest('label,button,a,summary') || el;
                  return {sel: t.className || t.tagName, r: t.getBoundingClientRect()}; })
     .filter(o => o.r.width && (o.r.width < 44 || o.r.height < 44))
   ```
   Salvare la lista "prima". **Criterio di uscita (R30): a F4 la lista dev'essere VUOTA**, salvo
   eccezioni singolarmente motivate e scritte nel piano di fase (es. link inline dentro un paragrafo).
   Non "un sottoinsieme" — sarebbe un criterio che si autoassolve.
6. Commit: `redesign: versiona la spec v2 e il brief (F0)`.

### F1 — Token, ritmo di pagina e griglia (Claude) · rischio MEDIO/ALTO · §2 §3

7. **§2.1 — due righe del `:root`**: `--bg-app: #FAFAF7 → #FAF8F3` (22) · `--night-bg: #232046 →
   #211E42` (37). **Non** rimpiazzare il `:root` intero (40+ token vivi).
8. **§2.2 — blocco additivo** in coda al `:root`: `--space-1…16`, `--fs-*`, `--gutter`, `--stack`,
   **`--container: 1140px`** (R31: valore **deciso**, non aperto — conserva la larghezza desktop
   attuale di `.main-content`; il 1120px del canvas restringerebbe la pagina di 20px senza motivo),
   `--shadow-gold`. ⛔ **`--ease-out` non si tocca**: esiste (65) e governa 30+ transizioni.
9. **§2.3 — due `@media :root`** additivi (768, 1024) con la scala per banda.
10. **§3.1 — griglia di `#tab-oggi` a ≥1024** (~1343–1363): rimuovere la **sola dichiarazione
    `grid-row`** da **cinque** selettori — `.home-header` (1352, **dimenticato dal canvas**, R1),
    `.percorso-wrap` (1360), `.missione-card` (1361), `.settimana-card` (1362), `.card-mappa-home`
    (1363) — conservando tutto il resto (`padding-right:190px`, radius, margin verticali).
    Poi aggiungere le regole del canvas.
11. **Offset sticky reale** (R13): `.percorso-wrap { position:sticky; top: calc(64px + var(--space-6)) }`.
    Il canvas dice `top: var(--space-6)` assumendo una nav non-fissa: falso, la nav è `fixed` alta 64px.
12. **Ritmo verticale — `gap` non funziona su `.tab-pane`** (R27): `.tab-pane.attivo` è
    `display:block` (283), dove `gap` è **inerte**. Si usa il selettore fratello — che però ha tre
    effetti collaterali, tutti da neutralizzare **nello stesso blocco** (R39):
    ```css
    .tab-pane.attivo > * + * { margin-top: var(--stack); }

    /* (a) il primo figlio non deve sommare il suo vecchio margine al padding
       superiore di .main-content — es. .sezione-header ha margin-top:20px (532),
       ed è il primo figlio di Mete, Percorso e Profilo */
    .tab-pane.attivo > :first-child { margin-top: 0; }

    /* (b) `+` non sa nulla di display:none: #home-benvenuto è il primo figlio ma
       è spento per gli utenti di ritorno, quindi .home-header — secondo nodo —
       riceverebbe comunque il margine */
    #tab-oggi:not(.modo-benvenuto) > .home-header { margin-top: 0; }

    /* (c) contenitori condizionali vuoti = spazi fantasma. Verificato: i tre
       nodi sono `<div id="…"></div>` senza whitespace interno (index.html:185,
       200, 213), quindi :empty li intercetta davvero. */
    #banner-lingue-mete:empty,
    #filtri-mete-chip:empty,
    #sezione-preferite:empty { display: none; }

    /* dentro la griglia il ritmo lo dà il gap, o si sommano */
    @media (min-width: 1024px) { #tab-oggi > * + * { margin-top: 0; } }
    ```
13. **§3.2 — migrazione del gutter: UN SOLO proprietario, `.main-content`** (R14, R28).
    ⚠️ **È il pezzo di lavoro più grosso di tutto il piano** e va fatto in **un solo diff**, o si
    somma al vecchio. Oggi il gutter mobile **non** è del contenitore. Inventario completo, verificato
    a grep il 2026-07-24:
    - **17 `margin: … 20px`** — righe **359, 415, 497, 532, 539, 574, 596, 668, 910, 914, 928, 953,
      1144, 1162, 1381, 1444, 1463**;
    - **1 `margin: … 12px`** che nessun grep su 20/14px trova: **1268**, `.benvenuto` dentro
      `@media (max-width:759px)` (R43). È il caso che dimostra perché il criterio di completezza non
      può essere una lista di valori: il gutter legacy usa **tre** misure diverse (20, 14, 12);
    - **5 `padding: … 20px`** che fanno anch'essi da gutter — **547** (`.lista-checklist-v2`),
      **801** (`.cerca-mete-barra`), **805** (`.griglia-mete-v2`), **830** (`.filtri-mete-chip`),
      **894** (`.griglia-requisiti-v2`); di questi il canvas ne ignora l'esistenza;
    - il blocco **`@media (max-width:480px)` 1655–1663**, che riporta tutto a 14px su altri 8 gruppi;
    - **un margine inline nell'HTML** (R38): `#banner-wiz` ha `style="… margin: 0 20px 14px"`
      (index.html:236) — **l'inline vince su qualunque cascata** e il grep sul CSS non lo trova.
      È l'unico `style=` con margin di tutto `index.html`.

    **Non sono gutter e NON vanno toccati** (precisione che evita rimozioni a strascico): riga 257
    (footer — sta **fuori** da `<main>`, index.html:425, quindi il padding di `.main-content` non lo
    raggiunge), 294, 998, 1292 (padding interni di componente), **224** (`.drawer-testa`, padding
    asimmetrico interno al drawer), **1049** (`.scelta-percorso-overlay`, padding di un overlay
    fisso), e tutta la famiglia `.guida-*` (1683, 1686, 1700 — pagine guida separate).

    Operazioni, nello stesso commit:
    - `.main-content` riscritta **per intero in tutte e tre le bande** (R32 — niente shorthand
      ereditato dai vecchi blocchi, o il `padding:104px 40px 48px` di riga 1338 continua a vincere):
      - mobile: `padding: var(--space-5) var(--gutter) calc(80px + env(safe-area-inset-bottom,0px));`
        `max-width: 680px; margin: 0 auto;`
      - ≥768: `padding: calc(64px + var(--space-5)) var(--gutter) var(--space-16);` `max-width: 740px`
        — **il `64px` è l'altezza della nav fissa e da solo non lascia respiro**: va sommato uno
        spazio, non usato nudo;
      - ≥1024: `padding: calc(64px + var(--space-8)) var(--gutter) var(--space-12);`
        `max-width: var(--container);`
    - i **17 margini legacy** → si conserva la sola componente verticale (eccezione alla Regola 1);
    - i **5 padding-gutter** → si conserva la sola componente verticale
      (es. `.cerca-mete-barra { padding: 10px 20px 4px }` → `padding: 10px 0 4px`);
    - il blocco **≤480px** si riduce a ciò che non è gutter (oggi: solo `.home-header { padding }`),
      il resto si cancella: il gutter mobile lo dà `--gutter`;
    - **`#banner-wiz`**: l'inline `margin: 0 20px 14px` va neutralizzato. Default — regola CSS mirata
      `#banner-wiz { margin-inline: 0 !important; }`, che **rispetta il vincolo "zero modifiche a
      `index.html`"** al costo di un `!important` circoscritto e commentato.
      ⚠️ **L'alternativa non è "togliere l'attributo `style`"** (R41): quell'attributo contiene
      *anche* `display:none`, e `.banner-celebrazione` è `display:flex` (style.css:980) → si
      vedrebbe un banner verde vuoto all'avvio. Se Nicola autorizza di toccare `index.html`, va
      rimossa **la sola dichiarazione `margin`**, lasciando `style="display:none"`. Decisione al GATE 1.

    **Criterio di completezza** (R40 — il grep sul solo shorthand `margin` non basta): F1 non è chiusa
    finché tutti e quattro i controlli non passano:
    1. `grep -nE "margin: *[0-9-]+px *(20|14|12)px|margin: *0 *(20|14|12)px|margin-(left|right): *(20|14|12)px" css/style.css` → 0 righe
       (**tre** misure, non una: vedi R43);
    2. `grep -nE "padding: *[^;]*\b20px\b" css/style.css` → solo le righe dichiarate "non gutter" sopra;
    3. `grep -n 'style="[^"]*margin' index.html` → 0 righe, **oppure** `#banner-wiz` coperto dalla
       regola `!important`;
    4. **verifica nel browser** (l'unica che chiude davvero il cerchio). Il confronto va fatto contro
       il **content-box del tab attivo**, non di `.main-content` (R42): a ≥1024 `#tab-percorso` è
       centrato a `max-width:820px` (1373), `.benvenuto` a 900px (1264) e `.percorso-wrap` sta nella
       **seconda colonna** della griglia — con `.main-content` come riferimento avrebbero tutti un
       delta legittimo diverso da zero, e il controllo non potrebbe mai passare.
       ```js
       const pane = document.querySelector('.tab-pane.attivo');
       const cs = getComputedStyle(pane), r = pane.getBoundingClientRect();
       const x0 = r.left + parseFloat(cs.paddingLeft);
       const desktop = window.innerWidth >= 1024;
       [...pane.children]
         .filter(el => getComputedStyle(el).display !== 'none')
         // le due esclusioni valgono SOLO a desktop: a 390 .benvenuto deve
         // allinearsi come tutti — è proprio lì che si nasconde il margin
         // 12px di riga 1268 (R43)
         .filter(el => !desktop || getComputedStyle(el).gridColumnStart !== '2')
         .filter(el => !desktop || !el.matches('.benvenuto'))
         .map(el => ({el: el.id || el.className, delta: el.getBoundingClientRect().left - x0}))
         .filter(o => Math.abs(o.delta) > 0.5)
       ```
       **Va eseguito 9 volte, non una** (R44): i 4 tab × 390 e 1280 — lo snippet guarda il *tab
       attivo*, quindi una sola esecuzione controllerebbe solo Oggi e lascerebbe scoperti tutti i
       gutter di Mete, Percorso e Profilo — **più** Oggi a 390 nello stato onboarding
       (`.modo-benvenuto`), che è l'unico in cui `.benvenuto` è visibile. Ogni esecuzione deve
       restituire **array vuoto**. È questo il controllo che intercetta i gutter da padding, quelli
       inline e quelli che il grep non vede.
14. `.griglia-mete-v2`: 1 col → 2 col (768) → `auto-fill minmax(300px,1fr)` (1024).
15. **Creare `/*__PROD_END__*/`** in coda al foglio già qui (R33): F2 deve poterci mettere sotto
    le varianti banner non cablate, e un marcatore creato solo in F4 arriverebbe troppo tardi.
16. Commit: `redesign F1: token, ritmo di pagina, gutter unificato e griglia`.
17. **🚦 GATE 1 — Nicola verifica a video a 390 / 768 / 1280.** Oggetto:
    (a) il ritmo verticale e il gutter convincono? (b) **nessun doppio gutter e nessuna riga vuota**
    nei tre stati della griglia? (c) confronto con gli screenshot di F0.4 sulle invarianti.
    (d) **decisione R3** (`modo-benvenuto`): entrambe le patch sono pre-scritte, si applica quella
    scelta **prima di chiudere F1**.
    ⚠️ **Cosa NON si giudica qui** (R15): la scala tipografica e i componenti — F1 *definisce* i
    `--fs-*`, ma sono i componenti di F2 a consumarli. Il giudizio sul redesign compiuto è al GATE 2.

### F2 — Componenti §04 (**Claude Code**) · rischio MEDIO

> **rev. 5 — F2 non va più a Codex.** Scelta di Nicola (2026-07-25), dopo F1: le due
> correzioni che F1 ha dovuto fare al canvas si sono viste **solo misurando nel browser**,
> e la misura in sessione è precisamente ciò che la consegna a Codex non ha. Lo stesso
> rischio vale per i componenti: §4.1 sostituisce un sistema `:focus-visible` esistente e
> §4.2 tocca `.missione-card`, che porta `position:relative` + `overflow:hidden` funzionali.
> Decade quindi la sezione «Consegna a Codex» in fondo, e con essa la contingenza sandbox
> (R24). **Restano in vigore** le regole non negoziabili (a)–(d) e la lista dei divieti:
> non erano vincoli *per Codex*, sono vincoli *della fase*.

Fase interamente **CSS**. Non tocca `js/app.js` né `index.html`.

18. **Preparazione, non più consegna** (R16 rivista): la tabella **blocco-vecchio →
    blocco-nuovo già normalizzato** (righe esatte, proprietà da preservare, valori tradotti in
    `var(--…)`, `@media` successivi che riapplicherebbero i valori vecchi) **non è più il
    contratto di handover verso un altro modello**, quindi non è più un prerequisito
    bloccante. Resta però il metodo: per ogni `[MODIFICA css]` si rilegge il blocco reale,
    si fa il diff proprietà-per-proprietà e si preserva in caso di ambiguità (Regola 1, R7).
    ⚠️ **Il tempo risparmiato sulla tabella va speso nella verifica**, non incassato: è la
    misura nel browser che in F1 ha intercettato entrambi gli errori del canvas.
19. **F2.0 — sanare l'inventario touch** (R34): la lista di F0.5 diventa **patch CSS qui**, non un
    rilevamento senza seguito. Include i controlli che il canvas non nomina (`.fase-cta`,
    `.percorso-modifica-profilo`, il selettore d'ateneo, `.mappa-vai-elenco`). Ogni bersaglio che
    resta sotto 44px va motivato per iscritto.
20. **§4.1 Interattivi** — `.btn-primary, .btn-primario` insieme (V4), `min-height:48px`;
    `.btn-secondary`. ⚠️ Il submit del profilo passa da 41 a 48px: atteso. **Focus** (R17): esiste
    già un sistema `:focus-visible` con regole più specifiche per ricerca, select e card → il blocco
    del canvas **sostituisce** quel sistema, non si accoda; serve una variante chiara/oro per le
    superfici notte (outline `--night-bg` su nav `--night-bg` è invisibile).
21. **§4.2 Superfici** — corpo condiviso di `.missione-card`, `.settimana-card`, `.preparazione-card`,
    `.card-mappa-home`, `.card-meta-v2`. ⚠️ Preservare `position:relative` + `overflow:hidden` di
    `.missione-card` (420–421) e il `padding-right:190px` desktop.
22. **§4.4 `.banner-stato`** — additiva. `stato-ok` e `stato-verifica` sopra `__PROD_END__`;
    `stato-riserve` e `stato-bloccato` **sotto** il marcatore. ⚠️ **Onestà su cosa significa** (R35):
    il marcatore è un commento, non una build step — quelle regole **restano distribuite al browser**.
    La separazione è organizzativa, non un risparmio: sono ~8 righe di CSS non cablato, tenute perché
    B.5 le vuole come vocabolario. Nessun cablaggio JS: `renderIdoneita()`/`renderBannerVerifica()`
    scrivono con `textContent` e cancellerebbero qualunque figlio al re-render.
23. **§4.5 Mete · §4.6 Missione & countdown · §4.7 Checklist & requisito · §4.8 Dettaglio meta +
    schedina · §4.9 Profilo, nav, drawer, celebrazione**. Due correzioni obbligatorie al canvas:
    - **§4.6** (R19): `.missione-urgente .countdown-dot { animation: pulsa-dot … }` con
      `animation:none` sul pallino base. La classe sta sulla **card** (app.js:1203), il keyframes è
      **`pulsa-dot`** (485), non `pulsa`.
    - **§4.9** (R20): la nav resta **`fixed`**. Sta dopo `</main>` e dopo `</footer>`: `sticky` la
      mostrerebbe in fondo alla pagina. Preservare `height:64px` e `justify-content:flex-end` a ≥768.
24. Commit: `redesign F2: componenti §04`.

### F3 — Timeline e stato vuoto (Claude) · rischio **ALTO** · §4.3 §5.1

25. **Baseline di regressione, qui e non a F0** (R36): il confronto va fatto sullo **stesso snapshot
    dei dati**, non sullo "stesso commit" — F3 crea due commit propri, quindi l'SHA cambia comunque;
    ciò che deve restare identico è `js/atenei/*`, che solo un `pull` può muovere. Procedura:
    `pull --rebase` → **poi** server su `127.0.0.1:8123` (porta attesa da `_smoke.js:9`;
    `RUN-SITO.bat` usa la 8001) → `node _smoke.js` → salvare l'output → modificare → rieseguire
    **senza alcun pull in mezzo**.
26. **§4.3 — timeline `ol.stazioni`** (~590–615). **Blocco sostitutivo**: eliminare
    `.stazione + .stazione::before` (600) e `.stazione-fatta + .stazione::before`, o si sommano due
    binari sfalsati (V3). Modello: corsia 38px (`padding-left` su `.stazione`), marker assoluto 30px
    (`left:0; top:14px`), binario `left:14px; top:44px; bottom:calc(-1 * var(--space-4))`,
    `:last-child::before { display:none }`.
    - **GUARDIA 1** (commento obbligatorio nel CSS): mai `position`/`transform`/`filter`/
      `will-change` su `.stazione-dettagli`, o il marker rientra nella card e l'`overflow:hidden` lo taglia.
    - **GUARDIA 2**: `box-sizing: border-box` su `.stazione-punto` — con `content-box` il bordo da
      2px sposta il centro del marker fuori dall'asse del binario.
27. **§5.1 — stato vuoto ricco**, unico JS nuovo: helper `creaStatoVuoto(titolo, spiegazione, azione)`
    + sostituzione dei **due** `appendChild` in `renderMete()` (1890, 1894).
    - ⚠️ **Conservare il `return`** dopo ciascuno: senza, si renderizzano insieme lista vuota e stato vuoto.
    - **Correzione al canvas** (R21): l'azione "Mostra tutte le mete" non deve cercare
      `.chip-filtro[data-filtro="tutte"]` — l'attributo non esiste (app.js:1842). Usare
      `filtroMeteAttivo = "tutte"; renderMete();`.
    - **Accessibilità** (R22): `role="status"` sul nodo `.stato-vuoto` (nasce a runtime dopo
      un'interazione: senza, chi usa screen reader non sa che la ricerca è a vuoto).
    - `.schedina-invito-vuota` (app.js:2031) **non** usa l'helper: resta un invito di una riga per
      scelta deliberata; si allinea solo lo stile.
28. CSS `.stato-vuoto` (additiva, `grid-column: 1/-1`) + `-wiz/-titolo/-testo` + restyle di
    `.schedina-invito-vuota`. **Va scritto sopra `/*__PROD_END__*/`**: è CSS di produzione a tutti
    gli effetti, e il marcatore esiste già da F1.15. ⛔ **Ritirata** l'affermazione del canvas per cui `.stato-vuoto-v2`
    "resta nel foglio a coprire chiamate residue" (R23): quella classe **non ha stile**. Non si
    aggiunge nulla e non si promette una compatibilità inesistente.
29. **Prova**: `node _smoke.js` sullo stesso **snapshot dei dati** del baseline di F3.25 (nessun
    `pull` fra i due run) — stessi numeri, zero
    eccezioni, zero nuovi errori in console. Più prova manuale: ricerca «zurigo» → filtro a vuoto →
    click su entrambi i bottoni d'azione.
30. Commit separati: `redesign F3a: timeline con binario continuo` · `redesign F3b: stato vuoto ricco`.

31. **🚦 GATE 2 — revisione dell'INTERO redesign, non solo di F3** (R37). Il GATE 1 esclude
    esplicitamente tipografia e componenti; se il GATE 2 guardasse solo timeline e stati vuoti,
    **card, nav, form, modal e scala tipografica arriverebbero al push senza che Nicola li abbia mai
    approvati**. Oggetto del GATE 2:
    - i 4 tab a **390 / 768 / 1280**, confrontati con gli screenshot di F0.4 sulle invarianti;
    - timeline: apri/chiudi ogni stazione con mouse **e** con Invio, marker fermo e visibile;
    - i due stati vuoti: mascotte, testo, bottone d'azione funzionante;
    - tipografia e componenti: è **questo** il momento in cui il redesign si approva o si ferma.

### F4 — Chiusura e checklist §07 (Claude) · rischio basso

32. Percorrere i **9 punti** della checklist §07, con tre correzioni: "griglia nei tre stati" va
    riletto alla luce di R3; "nessun target sotto 44px" si verifica con lo snippet di F0.5 e il
    criterio è **lista vuota** (R30); il punto tipografia è già stato giudicato al GATE 2.
    Sospetti dichiarati per lo scroll orizzontale: `.schedina-nome` senza `min-width:0` e la riga di
    chip filtro.
33. Aggiornare `STATO_DEL_SITO.md` (data, fase, contenuti, prossimi passi, mappa file) — regola
    permanente di `CLAUDE.md`.
34. Commit finale + `git push`.

---

## ~~Consegna a Codex — ordine di lavoro per F2~~ → Regole di fase per F2

> **rev. 5 (2026-07-25): la consegna a Codex è decaduta**, F2 la fa Claude Code (vedi il
> riquadro all'inizio di F2). Questa sezione resta perché i vincoli qui sotto non erano
> vincoli *per Codex*: sono vincoli *della fase*, e valgono identici per chiunque la esegua.
> Cade solo la **contingenza sandbox (R24)**, che riguardava esclusivamente la capacità di
> Codex di leggere i file su questo PC.

- **File da toccare: solo `css/style.css`.** Vietato `index.html` e `js/app.js`.
- **Regole non negoziabili**: (a) nessuna classe rinominata; (b) le regole `[MODIFICA css]`
  **sostituiscono** il blocco esistente, non si accodano più avanti nel foglio; (c) se lo stesso
  selettore ricorre in più `@media`, si sostituisce quello della banda giusta; (d) nessuna proprietà
  del blocco vecchio sparisce se non è dichiaratamente sostituita.
- **Vietato**: "migliorare" valori a orecchio, aggiungere token oltre quelli di §2.2, toccare la
  timeline (`ol.stazioni`, `.stazione*` → è F3).
- **Revisione**: il diff si rilegge per intero come una PR (nessuna rinomina? tutti i `var()`?
  nessuna proprietà funzionale persa? nessun blocco duplicato?) **e si misura nel browser**
  prima del commit. In F1 la rilettura del diff da sola non avrebbe intercettato né la
  griglia né il hero: entrambi si vedevano solo alla misura.

---

## Key decisions & tradeoffs

| # | Decisione | Perché | Tradeoff |
|---|-----------|--------|----------|
| D1 | **Commit diretti su `main`** | Scelta di Nicola: `git revert` chirurgico per fase | `pull --rebase` a inizio fase, nell'ordine di F0.1 |
| D2 | **4 fasi, 2 gate umani** | Scelta di Nicola | Il GATE 1 non può giudicare la tipografia (R15) → il GATE 2 diventa la revisione completa (R37) |
| D3 | **`modo-benvenuto`: si decide al GATE 1, patch pre-scritte** | La decisione è di prodotto, l'esecuzione non deve slittare | Lavoro preparato che verrà in parte buttato |
| ~~D4~~ | ~~Metà e metà: Codex fa F2, Claude F1/F3/F4~~ | **RIVISTA rev. 5 (2026-07-25): tutte le fasi le fa Claude Code.** In F1 entrambi gli errori del canvas (griglia desktop, hero) si sono visti **solo misurando nel browser** — e la misura in sessione è esattamente ciò che manca a una consegna a Codex. §4.1 e §4.2 hanno la stessa forma di rischio (un sistema `:focus-visible` da sostituire, `position:relative`+`overflow:hidden` da preservare) | Nessuna seconda opinione automatica sul diff di F2: la revisione resta di Claude + il GATE 2 |
| ~~D5~~ | ~~aggiungere `--ease-out`~~ | **RITIRATA**: esiste già (65), governa 30+ transizioni | — |
| D6 | `grid-row` rimossa **dichiarazione per dichiarazione** | Quei blocchi portano `padding-right:190px`, radius, margin | Più lento di "cancella e riscrivi", e molto più sicuro |
| D7 | Il canvas entra nel repo (con `support.js`) | È ciò che rende il lavoro ripetibile | ~700 KB nel repo |
| D8 | `_ds/` escluso | Palette azzurra vecchia, mai entrata nel codebase (B.6) | Design system remoto disallineato |
| D9 | **Gutter con un solo proprietario: `.main-content`**, migrazione in un unico diff | Il `.tab-pane` del canvas raddoppierebbe padding e container | **~24 selettori toccati**: è il pezzo più grosso del piano (R28) |
| D10 | **`--container: 1140px`** (non 1120) | Conserva la larghezza desktop attuale invece di restringerla di 20px in silenzio | Diverge dal canvas: scelta dichiarata |
| D11 | **Ritmo verticale con `> * + *`, non `gap`** | `.tab-pane.attivo` è `display:block`: `gap` è inerte (R27) | Serve il reset dentro la griglia a ≥1024 |
| D12 | **`_smoke.js` non viene riscritto** | È una prova di *non-esplosione*. F3 sostituisce 2 `appendChild` e aggiunge un helper di ~20 righe: superficie piccola e tutta esercitata dalle prove manuali. Una suite con asserzioni è un altro progetto | Non cattura layout, CSS, media query, focus: lì la prova è il gate umano |
| D13 | **Le 2 varianti banner non cablate restano, sotto `__PROD_END__`** | B.5 le vuole come vocabolario | Sono comunque distribuite al browser: è organizzazione, non risparmio (R35) |

---

## Risks / open questions

1. **R1** — I `grid-row` da rimuovere sono **5**, non 4: il canvas dimentica `.home-header` (1352). *Verificato.*
2. **R2** — Rimuovere blocchi ≠ rimuovere dichiarazioni. → Regola 1.
3. **R3** — **Contraddizione canvas ↔ codice sull'onboarding.** Il canvas (§3.1 stato "a") descrive
   «benvenuto full-width, percorso accanto al hero»; il CSS reale fa l'opposto:
   `#tab-oggi.modo-benvenuto { display:block }` (1263) + `> *:not(#home-benvenuto) { display:none }`
   (1160) — durante l'onboarding **tutto il resto è spento**. → **DECISO al GATE 1
   (2026-07-25): P-A.** Non si tocca nulla; resta da correggere la checklist §07 in F4. P-B
   (rimuovere le due regole) è stata scartata perché è un cambio di UX dell'onboarding, non
   un restyling.
4. **R7** — Ancore `file:riga` verificate al 2026-07-24; dopo ogni fase slittano. **Rileggere il
   blocco prima di ogni sostituzione**, mai applicare per numero di riga cieco.
5. **R8** — Il redesign **non si vede a colpo d'occhio**: la palette è già indigo. Rischio di
   aspettativa, non tecnico. Detto qui perché il GATE 1 non venga letto come una bocciatura.
6. **R10** — `pull --rebase` con modifiche non salvate fallisce → ordine di F0.1.
7. **R12 / R30 / R34** — Touch: misura programmatica (F0.5) sul **vero contenitore cliccabile**,
   criterio **lista vuota** con eccezioni motivate, e **patch in F2.0** — non un rilevamento senza seguito.
8. **R13** — Offset sticky falso nel canvas (`top: var(--space-6)` con nav fissa da 64px). → F1.11.
9. **R14 / R28** — **Il gutter è per-figlio, non del contenitore**: 17 `margin … 20px` + **5
   `padding … 20px`** + blocco ≤480px (1655–1663) + **1 margine inline nell'HTML** (R38).
   Migrazione in un solo diff (F1.13). **È il rischio maggiore dell'intero piano**: se l'inventario è
   incompleto sopravvivono doppi gutter, e il GATE 1 potrebbe non intercettarli su tutte le superfici
   — per questo il criterio di completezza non è più un grep ma **quattro controlli**, di cui uno nel
   browser che misura il bordo sinistro di ogni figlio (R40).
10. **R38** — **Gutter inline invisibile al grep**: `#banner-wiz` porta `style="… margin: 0 20px 14px"`
    (index.html:236) e l'inline batte la cascata. È l'unico caso in tutto `index.html`.
    → **DECISO al GATE 1 (2026-07-25): override `!important` circoscritto**
    (`#banner-wiz { margin-inline: 0 !important }`, con commento in loco). `index.html` resta
    intatto. L'alternativa — rimuovere **solo** la dichiarazione `margin` conservando
    `style="display:none"` (vedi R41) — è scartata.
11. **R39** — Il selettore di ritmo `> * + *` ha **tre effetti collaterali**: somma il margine al
    primo figlio che già ne ha uno (`.sezione-header`, 532), non sa nulla di `display:none` (colpisce
    `.home-header` quando `#home-benvenuto` è spento), e dà spazio ai contenitori condizionali vuoti.
    Tutti e tre neutralizzati nello stesso blocco (F1.12). *Verificato che i tre contenitori
    condizionali sono `<div id="…"></div>` senza whitespace → `:empty` funziona davvero.*
12. **R40** — Il criterio di completezza del gutter **non può essere un solo grep**: non vede i
    padding-gutter, i `margin-left/right`, né gli `style=` inline. Servono i 4 controlli di F1.13.
10. **R15 / R37** — Il GATE 1 giudica il ritmo, non la tipografia; **il GATE 2 è la revisione
    dell'intero redesign** prima di F4 e del push.
11. **R16** — ~~La consegna a Codex è il punto fragile di F2, non l'esecuzione.~~ **DECADUTO
    rev. 5**: F2 la fa Claude Code, non c'è più una consegna. Il punto fragile di F2 torna a
    essere l'esecuzione, e l'antidoto non è la tabella ma la **misura nel browser** (vedi
    punto 18 rivisto).
12. **R17** — Il focus non sarà "un unico anello" senza sostituire il sistema esistente; l'outline
    `--night-bg` è invisibile sulla nav dello stesso colore.
13. **R19** — L'animazione urgente del canvas punta a classe e keyframes inesistenti.
14. **R20** — La nav non può diventare `sticky` con il DOM attuale.
15. **R21** — `data-filtro` non esiste: il bottone "Mostra tutte le mete" del canvas sarebbe morto.
16. **R22** — Lo stato vuoto dinamico non è annunciato agli screen reader → `role="status"`.
17. **R23** — `.stato-vuoto-v2` non ha stile: la garanzia di compatibilità del canvas è falsa.
18. **R24** — ~~Sandbox di Codex su Windows: comportamento non affidabile.~~ **DECADUTO
    rev. 5**: nessuna fase viene più eseguita da Codex. Il rischio resta vero come fatto
    (fallito il 24/07 con `CreateProcessAsUserW` err. 5), ma non tocca più questo piano.
19. **R25** — **Focus trap del modal dettaglio-meta**: prende il focus ma non intrappola Tab né lo
    restituisce alla card d'origine. **Pre-esistente, non introdotto da questo redesign** →
    consapevolmente fuori scope, da aprire come lavoro separato.
20. **R26** — I margini orizzontali legacy sono l'**eccezione dichiarata** alla Regola 1.
21. **R27** — `gap` su `.tab-pane` è inerte (`display:block`, riga 283) → D11.
22. **R29** — Screenshot senza criteri non distinguono redesign da regressione → checklist di
    invarianti in F0.4.
23. **R31** — Container: **deciso 1140px**. Non è più una domanda aperta.
24. **R32** — La matrice di `.main-content` va scritta **completa per banda**, o lo shorthand di riga
    1338 continua a vincere; e il `padding-top: 64px` a ≥768 è l'altezza della nav, non uno spazio:
    va sommato un respiro.
25. **R33** — `__PROD_END__` va creato in **F1**, non in F4: F2 deve poterci scrivere sotto.
26. **R35** — Sotto `__PROD_END__` il CSS **è comunque distribuito**: la separazione è organizzativa.
27. **R36** — Il baseline di `_smoke.js` va preso **all'inizio di F3**, non in F0, e il confronto va
    fatto **senza pull in mezzo**: il PC aziendale modifica proprio i dati delle mete.
28. **R41** — **Togliere l'attributo `style` di `#banner-wiz` mostrerebbe un banner vuoto**: quel
    `style` porta anche `display:none`, e `.banner-celebrazione` è `display:flex` (980). Se si tocca
    `index.html`, si rimuove **solo** la dichiarazione `margin`.
29. **R42** — **Il controllo browser del gutter non può usare `.main-content` come riferimento a
    ≥1024**: `#tab-percorso` è centrato a 820px (1373), `.benvenuto` a 900px (1264), `.percorso-wrap`
    sta in colonna 2. Il riferimento è il **content-box del tab attivo**, con quelle due esclusioni.

30. **R43** — **Il gutter legacy usa tre misure, non una**: 20px (17 selettori), 14px (blocco ≤480px)
    e **12px** — `.benvenuto` a riga 1268, dentro `@media (max-width:759px)`, che nessun grep sui
    primi due valori avrebbe trovato. È la ragione per cui il controllo decisivo è quello nel
    browser, non il grep.
31. **R44** — Il controllo browser guarda il **tab attivo**: eseguirlo una volta per larghezza
    coprirebbe solo Oggi. Vanno **9 esecuzioni** (4 tab × 390/1280, più Oggi a 390 in stato
    onboarding), tutte con esito array vuoto.

> Nota sulla numerazione: i rischi si citano per **codice `Rn`**, non per posizione nell'elenco —
> i codici sono stabili fra le revisioni, la numerazione dell'elenco no.

---

## Out of scope

- **Nuova logica di idoneità**: `stato-riserve`/`stato-bloccato` restano vocabolario non cablato.
- **`index.html`**: zero modifiche — inclusa la posizione della nav (che è ciò che impone `fixed`).
- **Riscrittura di `_smoke.js` in suite con asserzioni** (D12) e **focus trap del modal** (R25):
  lavori separati.
- **Pipeline dati** (`js/dati-*.js`, mappatura Gemini+Codex): del PC aziendale, ha il suo `PLAN.md`.
- **Palette `_ds/`** come sorgente colore; **`v2/`** e `design/proposte-*` (prototipi storici).
- **Framework, librerie JS, backend, login**: il sito resta statico puro.
- **Asset nuovi** oltre a quelli in `img/`.
- **Riallineare il design system remoto** su claude.ai alla §6.2.
