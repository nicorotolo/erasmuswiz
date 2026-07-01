# ROADMAP DI SVILUPPO — ErasmusWiz

> **A cosa serve questo file.** È il piano di costruzione che Claude Code segue
> per sviluppare il sito **una fase per volta**. Ogni fase è una scheda chiusa
> e autosufficiente: obiettivo, file esatti, cosa scrivere, definizione di
> "fatto", come testare. Non si passa alla fase successiva finché la precedente
> non è "fatta".
>
> Da leggere insieme a `PROGETTO_ERASMUS.md` (strategia) e `STATO_DEL_SITO.md`
> (stato). Non copre la mappatura dati delle mete (la fa l'automazione Codex).
>
> **Creato:** 2026-06-25 · **Stack:** HTML+CSS+JS puro, statico, niente build.

---

## 0. MAPPA DEL CODICE (leggere PRIMA di toccare qualsiasi cosa)

Serve a Claude Code per non rompere nulla. Stato verificato sul codice attuale.

### Globali dei dati (caricati da `index.html`, in quest'ordine)
- `REQUISITI_BANDO` — da `js/dati-bando.js`
- `METE` — concatenazione dei 5 file `js/dati-mete*.js` (catena `_meteAll` in
  `index.html`); 249 mete su 5 dipartimenti.
- `SCADENZE_CAFOSCARI` — da `js/dati-scadenze.js`
- `CHECKLIST` — da `js/dati-checklist.js` (array di `{ id, testo }`)

### Lo "zaino unico" (regola d'oro n.2)
- Chiave localStorage: `"erasmuswiz-zaino"`.
- Forma attuale: `ZAINO = { profilo: {...}|null, checklist: { "id-voce": true } }`.
- Si legge con `caricaZaino()`, si scrive con `salvaZaino(ZAINO)`.
- **Regola:** ogni nuovo stato dello studente va DENTRO `ZAINO`, mai in chiavi
  localStorage separate. Così il giorno degli account si sposta un oggetto solo.
  (Eccezione già esistente: tema notte in `"ew-tema"`, è preferenza UI non dati.)

### Navigazione
- Funzione unica: `mostraTab("nome")`. Tab validi in `TAB_VALIDI`
  (`app.js`): `["oggi","timeline","checklist","mete","idoneita","profilo"]`.
- Ogni tab è `<section id="tab-NOME" class="tab-pane">` in `index.html`.
- Voci nav: `<a class="nav-item" data-tab="NOME">` in `<nav class="nav-bottom">`.
- Link interni: qualsiasi elemento con `data-goto="NOME"` cambia tab.

### Helper e convenzioni
- `crea(tag, classe, testo)` crea un elemento **già con testo via
  `textContent`** → usarlo sempre per inserire dati (anti-XSS, regola del
  progetto). Mai `innerHTML` con dati.
- `init()` (fondo `app.js`) chiama in ordine tutte le `render*()`. Una feature
  nuova con la sua `render*()` va aggiunta lì.

### Cosa è GIÀ fatto (NON rifare)
- Footer con disclaimer "sito non ufficiale" + link bando + **"Segnala un
  errore" → GitHub issues** (già presente in `index.html`).
- Analytics GoatCounter (script nel `<head>`).
- Tema notte, countdown dal vivo, motore di compatibilità, checklist persistente.

### Come testare (sempre, per ogni fase)
Non aprire `index.html` col doppio click (pagina bianca). Avviare un server:
```
cd "...\3. ErasmusWiz"
python -m http.server 8000   →   http://localhost:8000
```
Controllo sintassi JS prima di dire "fatto": `node --check js/NOMEFILE.js`.

### Regole d'ingaggio per Claude Code (ogni sessione)
1. UNA fase per volta; non anticipare le successive.
2. Modifica più piccola possibile; preserva struttura, nomi, stile esistenti.
3. Dati separati dal codice; tutto lo stato studente dentro `ZAINO`.
4. Niente framework, build, backend, account, librerie esterne.
5. A fine sessione: aggiorna `STATO_DEL_SITO.md` e spunta la fase qui sotto.

---

## ORDINE DELLE FASI

Ordinate per **rischio crescente e dipendenze**: prima i mattoni piccoli e
isolati (per prendere confidenza e non rompere il sito), poi la feature grande
che ha pubblico, infine rifinitura e distribuzione.

| # | Fase | Tipo | Chi serve | Rischio |
|---|------|------|-----------|---------|
| 1 | Nome studente + saluto personalizzato | UX piccola | Claude Code | basso |
| 2 | Ricerca/filtro mete + contatore | UX | Claude Code | basso |
| 3 | Mete preferite (salvate nello zaino) | Funzione | Claude Code | basso |
| 4 | Fase post-selezione | Funzione grande | Nicola (contenuti) + CC | medio |
| 5 | Condivisibilità (anteprima link / OG) | Tecnica | Claude Code | bassiss. |
| 6 | Accessibilità + stati vuoti + robustezza | Qualità | Claude Code | basso |
| 7 | PWA "aggiungi a schermata Home" (no push) | Tecnica | Claude Code | medio |
| 8 | Evento analytics "checklist usata" | Misura | Claude Code | bassiss. |

---

## FASE 1 — Nome studente + saluto personalizzato
**Obiettivo:** sostituire l'hardcoded "Ciao, Studente" con il nome vero. Primo
mattone, tocca lo zaino in modo sicuro.
**Dipende da:** niente.

**File da modificare:**
- `index.html` — tab Profilo: aggiungere un campo nome in cima al form
  `#form-profilo-v2`.
- `js/app.js` — `initProfilo()` (salvataggio), `precompilaFormV2()`
  (ripristino), `renderHome()` o nuova `renderSaluto()` per scrivere
  `#home-nome`.

**Cosa costruire:**
- Campo `<input id="nome-v2" type="text" maxlength="30">` nel form profilo.
- Al submit, salvare in `ZAINO.profilo.nome`.
- All'avvio, se `ZAINO.profilo?.nome`, scrivere `#home-nome` con `textContent`
  (mai innerHTML); altrimenti lasciare "Studente".

**Definizione di FATTO:**
- Inserisco "Marco", salvo, ricarico la pagina → l'home saluta "Ciao, Marco".
- Senza profilo → "Ciao, Studente" (nessun errore in console).

**Fuori scope:** validazioni complesse, più nomi, avatar.

---

## FASE 2 — Ricerca/filtro mete + contatore
**Obiettivo:** con 249 mete (Management da solo 76), serve trovarne una in
fretta. Una barra di ricerca + un contatore "N mete".
**Dipende da:** niente.

**File da modificare:**
- `index.html` — tab Mete (`#tab-mete`): aggiungere sopra `#griglia-mete-v2`
  un `<input id="cerca-mete" type="search">` e uno `<span id="conta-mete">`.
- `js/app.js` — `renderMete()`: filtrare `elenco` per testo su
  `universita`/`citta`/`paese`; aggiornare il contatore; gestire "0 risultati".

**Cosa costruire:**
- Input di ricerca con `addEventListener("input", ...)` che richiama il
  rendering della griglia filtrata (case-insensitive, `String.includes`).
- Il filtro lavora SOPRA l'ordinamento per compatibilità già esistente (prima
  filtra per profilo come ora, poi per testo).
- `#conta-mete` mostra quante mete sono visibili (es. "76 mete").
- Stato vuoto: se 0 risultati, messaggio "Nessuna meta trovata per «X»".

**Definizione di FATTO:**
- Scrivo "Barcel" → restano solo le mete di Barcellona; il contatore aggiorna.
- Cancello il testo → tornano tutte, nell'ordine di compatibilità.
- Con profilo compilato, il filtro per area continua a valere.

**Nice-to-have (stessa fase, solo se semplice):** filtro per stato del semaforo
(✅ / ⚠️ / 🔒) con pochi bottoni.
**Fuori scope:** filtri multipli combinati, mappa, paginazione.

---

## FASE 3 — Mete preferite (salvate nello zaino)
**Obiettivo:** lo studente segna le mete che gli interessano (max 5, come il
bando) e le ritrova al ritorno. Dà un motivo per tornare.
**Dipende da:** Fase 2 consigliata (stessa pagina).

**File da modificare:**
- `js/app.js` — `caricaZaino()` (default), `renderMete()` (bottone preferito
  sulla card), nuova `renderPreferite()` o sezione in cima alle mete.
- `index.html` — eventuale contenitore "Le tue mete (N/5)" in `#tab-mete`.

**Cosa costruire:**
- Estendere lo zaino: `ZAINO.metePreferite = []` (array di `meta.id`).
  Aggiornare il default in `caricaZaino()` a
  `{ profilo:null, checklist:{}, metePreferite:[] }` (con fallback se manca,
  per gli zaini già salvati).
- Su ogni card un bottone ⭐ che aggiunge/rimuove l'id da `metePreferite`,
  `salvaZaino(ZAINO)`, ri-render.
- Limite morbido a 5: oltre, messaggio "Il bando ne ammette 5".

**Definizione di FATTO:**
- Salvo 3 mete, ricarico → restano evidenziate; il contatore dice "3/5".
- Funziona anche su uno zaino vecchio (senza il campo) senza errori.

**Fuori scope:** ordinare le preferite, note per meta, export.

---

## FASE 4 — Fase post-selezione  ⭐ la più importante
**Obiettivo:** dopo la selezione la checklist cambia: learning agreement,
alloggio, documenti pre-partenza. È l'unica feature con pubblico vivo PRIMA di
gennaio (gli studenti già selezionati 2026/27).
**Dipende da:** **contenuti che fornisce Nicola** (vedi sotto). Senza, Claude
Code non parte: rischierebbe di inventare una checklist sbagliata.

### Passo 4A — Contenuti (Nicola, PRIMA del codice)
Intervistare 1-2 studenti selezionati: quali passi, quali scadenze, dove si
perdono. Output: una lista di passi in fasi (accettazione → learning agreement
→ pre-partenza → arrivo). Consegnare a Claude Code come elenco testuale.

### Passo 4B — Codice (Claude Code)
**File da creare:**
- `js/dati-postselezione.js` → `const CHECKLIST_POST = [ { id, fase, testo } ]`
  (stessa forma di `CHECKLIST` + campo `fase`). Collegarlo in `index.html`
  accanto a `dati-checklist.js`.

**File da modificare:**
- `js/app.js`:
  - Estendere lo zaino: `ZAINO.fase = "domanda" | "selezionato"` (default
    `"domanda"`) e `ZAINO.checklistPost = {}` (spunte separate).
  - Nuova `renderChecklistPost()` modellata su `renderChecklist()` (riusa
    `mostraBannerWiz`, barra progresso). NON duplicare il motore: condividere
    le funzioni dove possibile.
  - La tab Checklist mostra `CHECKLIST` o `CHECKLIST_POST` secondo `ZAINO.fase`.
- `index.html`:
  - Un toggle "Sei stato selezionato? Sì/No" (es. nel tab Oggi o Profilo) che
    imposta `ZAINO.fase` e ri-renderizza.

**Vincolo chiave:** stesso motore, nessun sistema nuovo. Se per farlo servono
modifiche pesanti, fermarsi e rivedere lo schema dati (è il test della regola
d'oro n.1).

**Definizione di FATTO:**
- Attivo "selezionato" → la checklist mostra i passi post-selezione, spuntabili
  e salvati; le spunte della domanda restano intatte separate.
- Torno a "domanda" → riappare la checklist originale com'era.

**Nice-to-have:** scadenze post-selezione con countdown (riusa
`calcolaCountdown`). **Fuori scope ora:** reminder email, upload documenti,
contenuti specifici per singola meta.

---

## FASE 5 — Condivisibilità (anteprima link / Open Graph)
**Obiettivo:** quando uno studente incolla il link su WhatsApp/Telegram (il
canale vero), appare un'anteprima curata. È così che ti troveranno.
**Dipende da:** niente. Velocissima.

**File da modificare:** solo `index.html` (`<head>`).

**Cosa costruire:**
- `<meta name="description" content="...">` chiaro.
- Tag Open Graph: `og:title`, `og:description`, `og:type`, `og:url`,
  `og:image` (usa `img/wiz-hero.png` o un'immagine 1200×630 dedicata).
- `<meta name="twitter:card" content="summary_large_image">`.

**Definizione di FATTO:**
- Incollando l'URL pubblico su WhatsApp/Telegram appare titolo + descrizione +
  immagine. (Verifica con opengraph.xyz o la preview reale.)

**Nice-to-have:** `sitemap.xml` + `robots.txt` statici; Google Search Console.
**Fuori scope:** blog, ossessione SEO.

---

## FASE 6 — Accessibilità + stati vuoti + robustezza
**Obiettivo:** usabile da più persone e a prova di dati incompleti.
**Dipende da:** meglio dopo le fasi che aggiungono UI (1-4).

**File da modificare:** `index.html` (attributi), `css/style.css` (focus,
contrasto), `js/app.js` (stati vuoti).

**Cosa costruire (MVP):**
- `aria-label` sulle voci nav e sui bottoni-icona; `alt` su tutte le immagini
  (verificare le `wiz-hero`); stato attivo nav con `aria-current`.
- Focus visibile da tastiera (outline in CSS); navigazione completa con Tab.
- Nessun `undefined` a schermo: ovunque si legga un campo meta che può mancare
  (es. `citta`, `requisitoLingua`), gestire il caso assente con un testo onesto
  (parte è già fatta nel motore di compatibilità: estenderla).
- Contrasto leggibile in dark mode (verificare i grigi su sfondo notte).

**Definizione di FATTO:**
- Navigo tutto il sito solo da tastiera, con focus sempre visibile.
- Lighthouse (Chrome DevTools) → Accessibilità ≥ 90.
- Nessuna card mostra "undefined".

**Avanzato:** prova con screen reader sul flusso principale.
**Fuori scope:** certificazione WCAG completa.

---

## FASE 7 — PWA "aggiungi a schermata Home" (SENZA notifiche)
**Obiettivo:** lo studente tiene l'icona sul telefono e ci torna.
**Dipende da:** meglio dopo la Fase 4 (serve un motivo per tornare).

**File da creare:**
- `manifest.json` (nome, `short_name`, icone 192/512, `theme_color`,
  `display: standalone`, `start_url`).
- `sw.js` — service worker minimo (cache di base dei file statici).
- Icone in `img/` (192×192 e 512×512).

**File da modificare:** `index.html` — `<link rel="manifest">`, meta
`theme-color`, registrazione del service worker.

**Definizione di FATTO:**
- Da mobile compare "Aggiungi a schermata Home"; aperta, parte a schermo intero.
- Nessun errore service worker in console.

**Onestà / trade-off (importante):** **niente notifiche push.** Su iPhone le
push web richiedono service worker avanzato + un servizio di invio: troppo per
ora e per un sito statico. È la feature che *sembra* il cuore ma costa 10x.
Rimandata, non cancellata.
**Fuori scope:** notifiche, offline completo, sincronizzazione.

---

## FASE 8 — Evento analytics "checklist usata"
**Obiettivo:** distinguere chi *visita* da chi *usa davvero* (spunta la
checklist). Serve a misurare la trazione a gennaio.
**Dipende da:** niente.

**File da modificare:** `js/app.js` — dentro il `change` della checklist
(`renderChecklist`, e poi `renderChecklistPost`).

**Cosa costruire:**
- Alla prima spunta di una sessione, inviare un evento GoatCounter:
  `window.goatcounter?.count({ path: "checklist-usata", event: true })`.
- Mandarlo una volta per sessione (un flag in memoria), per non gonfiare i dati.

**Definizione di FATTO:**
- Spunto una voce → nel pannello GoatCounter compare l'evento `checklist-usata`.

**Fuori scope:** Google Analytics, cookie, tracciamenti personali.

---

## DA NON COSTRUIRE (confermato — non riaprire senza trazione provata)
Account/login, server/database, app native, **notifiche push**, più di una 2ª
università di test, monetizzazione. Motivazioni in `PROGETTO_ERASMUS.md` §4.

## NOTA PER NICOLA
La Fase 4 (post-selezione) è l'unica che richiede il TUO lavoro prima del
codice: i contenuti veri, validati con uno studente selezionato. Tutte le altre
fasi Claude Code le può costruire da sé. Se vuoi un solo documento di roadmap,
puoi eliminare `ROADMAP_PRODOTTO.md` e tenere questo + `ROADMAP.md`.
