# Plan: Fase B — 3 mockup di direzione visiva con mappa-hero interattiva
_Locked via grill — by Claude + Nicola (2026-07-10) — rev. 2 dopo review Codex_

> Dettaglia la Fase B del piano d'ondata `PLAN.md` (approvato da Codex il
> 2026-07-10). NON lo sostituisce, ma **ne estende consapevolmente lo scope
> di Fase B** ("home + una schermata interna" → 3 mockup con mappa-hero
> interattiva, 4 viste, doppio tema): decisione esplicita di Nicola in questa
> sessione, passata dal grill. Stima aggiornata: 1-2 sessioni invece di 1.
> Tutti gli altri vincoli dell'ondata restano ereditati (stack vanilla, dati
> intoccabili, niente git da bash, ecc.).

## Goal

Produrre in `design/proposte-2026-07/` tre mockup HTML statici e autonomi
(nessuna dipendenza dal sito né da CDN) che permettano a Nicola di scegliere
la direzione visiva del sito ristrutturato. Tutti e tre condividono la stessa
struttura — **la home ha come hero una mappa d'Europa interattiva** dove il
nuovo visitatore sceglie ateneo e facoltà e vede accendersi le mete reali, con
anteprima al passaggio (hover su desktop, tap + scheda su mobile) — e si
differenziano SOLO nell'identità visiva: (a) giocosa-premium con Wiz
protagonista, (b) professionale/sobria senza mascotte, (c) ibrida (base
sobria, Wiz come guida nei momenti chiave). La scelta di Nicola diventa il
binario vincolante della Fase C e sostituisce formalmente BR0–BR7.

**Ruolo dichiarato della mappa** (dal grill, dopo avvocato del diavolo): è un
asset di ACQUISIZIONE (memorabilità al primo contatto, screenshot
condivisibile su WhatsApp), NON lo strumento decisionale primario — per
decidere restano griglia+filtri, e la gerarchia della bussola (LA > scadenze
> lingua > mete) non cambia. **Gate esplicito**: la mappa entra in Fase C
solo se Nicola, giudicando i mockup A 375PX PRIMA CHE A DESKTOP, conferma che
(1) è leggibile e usabile su mobile e (2) non ritarda il valore quotidiano
dell'utente profilato — criterio oggettivo minimo: **missione del giorno e
countdown interamente visibili nel primo viewport mobile (375×667) della home
profilata, senza scroll**. Se il gate fallisce, la Fase C usa le direzioni visive
scelte con un hero classico — i mockup restano validi per la scelta
dell'identità.

## Approach

1. **Struttura file** in `design/proposte-2026-07/`:
   - `proposta-a-giocosa.html`, `proposta-b-professionale.html`,
     `proposta-c-ibrida.html` — ciascuno autonomo e apribile con doppio click
     (niente server necessario), CSS e JS inline propri per tutto ciò che è
     IDENTITÀ; i dati e l'SVG condivisi arrivano da `_assets/` come normali
     `<script src>` locali — **nessun `fetch`, nessun modulo ES**: tutto deve
     funzionare aprendo il file via `file://`;
   - sottocartella `_assets/` condivisa SOLO per ciò che è identico nei tre:
     `europa-svg.js` (path SVG della mappa come stringa JS), `dati-demo.js`
     (vedi punto 2), eventuali immagini Wiz ottimizzate (webp ≤100 KB, regola
     DISEGNO_BRAND §2-bis);
   - `index.html` comparatore: pagina-indice con i link ai tre mockup e le
     istruzioni di visione (provare mobile e desktop, chiaro e notte).
   - **Ogni pagina include `<meta name="robots" content="noindex,nofollow">`
     e un disclaimer visibile "Mockup di design — non è il sito operativo"**
     (quando Nicola pusherà, saranno raggiungibili su GitHub Pages).
2. **Dati demo** (`_assets/dati-demo.js`): oggetti meta REALI nello stesso
   schema di `js/atenei/**` (subset dei campi: `universita`, `citta`,
   `paese`, `requisitoLingua`, `posti`, più borsa risolta), estesi con il
   blocco coordinate nello **schema che sarà quello vero di Fase C**:
   `coord: { lat, lon, x, y, fonte, precisione }` — `x`/`y` sono le
   coordinate SVG **precalcolate offline** (proiezione equirettangolare
   fissata sui bounds dell'SVG Europa, calcolata una volta in fase di
   preparazione: NESSUNA proiezione a runtime, niente trigonometria da
   sbagliare nel browser). Il file salva anche i parametri per riprodurre il
   calcolo in Fase C: `PROIEZIONE = { tipo: "equirettangolare", bounds:
   {latMin, latMax, lonMin, lonMax}, svgViewBox }`. Inoltre `borsaStimata`
   è dichiarato nel file come **campo solo-demo** (nel sito reale la borsa
   si calcola da `BORSE_INFO`, non è un campo della meta). Contenuto:
   - **TUTTE le 55 mete di Giurisprudenza Sapienza** (il beachhead, densità
     reale — non un sottoinsieme: la densità si valuta vera o non si valuta);
   - **TUTTE le mete di Ca' Foscari Economia** (così anche il secondo pin
     ateneo è dimostrato con dati veri, non finto);
   - le altre facoltà appaiono nella lista di scelta ma disabilitate con
     etichetta onesta "demo: nel sito reale tutte le facoltà".
   - Almeno un caso con `coord` mancante per dimostrare il fallback (la meta
     appare nella lista testuale sotto la mappa, non sparisce).
3. **Ogni mockup mostra 4 viste** (navigabili nella stessa pagina, senza
   ricarica):
   a. **Home "primo contatto"** (hero = mappa): mappa d'Europa SVG, i 2 pin
      atenei (Roma/Venezia) → scelta facoltà (lista/griglia, NON sulla mappa:
      la facoltà non è geografica) → le mete della facoltà si accendono sulla
      mappa; hover desktop = tooltip con università, lingua richiesta,
      posti/mesi e stima borsa (etichettata "stima", con fonte e data nel
      corpo della scheda, non omessa); CTA "Inizia il percorso".
   b. **Home "utente profilato"**: missione del giorno + countdown IN CIMA
      (padroni della home), mappa compattata sotto con le mete della propria
      facoltà e le preferite evidenziate. Questa vista mostra anche lo stato
      **"bando chiuso"** (il default reale dei prossimi mesi): banner con
      testo hardcoded nel mockup ma **con data e fonte esplicite nel testo**
      (stesso pattern di onestà del sito reale; la logica vera resta quella
      di `dati-scadenze.js`, fuori scope qui).
   c. **Tab Mete**: card meta ridisegnate (risolvono i difetti P1.6/7/8
      dell'audit: niente testi ripetuti 60 volte, case normalizzato, una sola
      icona di stato) + schedina compatta a stato vuoto (difetto P1.4).
   d. **Vista mobile**: le stesse viste responsive a 375px; sulla mappa il
      tap sostituisce l'hover aprendo una scheda-anteprima ancorata in basso.
4. **Clustering (specifica, non impressione)**: i pin si raggruppano in un
   cluster numerato quando (a) condividono la stessa coppia `citta+paese`
   (più università nella stessa città = coordinate IDENTICHE — es. più
   atenei a Parigi o Madrid: caso obbligato, non opzionale) oppure (b) la
   distanza in pixel SVG scende sotto una soglia allo zoom corrente.
   Tap/click sul cluster = lista espandibile delle mete contenute.
5. **Accessibilità della mappa (in tutti e tre i mockup)**: i pin/cluster
   sono **`<button>` HTML in un layer di overlay posizionato sopra l'SVG**
   (un `<button>` non è un figlio valido di `<svg>`; l'overlay evita anche
   i problemi di focus/hit-target degli elementi SVG), con `aria-label`
   ("Università X, città Y — apri anteprima"), focus visibile, attivabile
   da tastiera (Tab/Enter; Escape chiude la scheda **e riporta il focus al
   pin/cluster che l'aveva aperta**), target ≥44px; sotto la mappa una
   **lista testuale equivalente** delle mete accese (che è anche il fallback
   per coord mancanti e per screen reader). Nessun contenuto solo-hover.
6. **Regola di rendering**: ogni campo proveniente dai dati (università,
   città, note…) va nel DOM SOLO via `textContent`/`createElement` — mai
   `innerHTML` con stringhe di dati. (I dati sono nostri, ma la regola
   evita XSS futuri quando lo stesso codice migrerà in Fase C.)
7. **Budget misurabili per mockup** (verificati prima della consegna):
   peso totale pagina + asset ≤ 600 KB (di cui SVG Europa ≤ 80 KB, immagini
   Wiz ≤ 100 KB); interazione hover/tap fluida a 375px senza jank percepibile
   (niente re-render dell'intera mappa a ogni evento: si aggiorna solo il
   tooltip/scheda); nodi pin nel DOM ≤ ~100 (i cluster riducono i nodi).
8. **Tema chiaro e notte in ogni mockup** con toggle in pagina; il tema notte
   è disegnato come prima classe (palette dedicata, non filtro scuro).
9. **Verifica a video prima della consegna**: preview locale, 375px e 1280px,
   chiaro e notte, hover e tap simulati, **più i casi di stato**: resize
   375→1280 con scheda-anteprima aperta, cambio tema con una meta
   selezionata, apertura/chiusura cluster, rotazione simulata (landscape
   ~667px). Stato UI coerente dopo ogni transizione; nessun errore console.
10. **Consegna e scelta**: Nicola apre `index.html`, guarda i tre mockup nei
    due temi e nei due stati della home — **prima da telefono, poi da
    desktop** (il gate del §Goal si giudica lì) — e sceglie. La traduzione
    in token (`design/tokens/*.css`) e l'aggiornamento di DISEGNO_BRAND
    restano nella Fase C.
11. **Nessun file del sito viene toccato**: né `index.html` di root, né
    `css/`, né `js/`. Nessun commit: i file restano nel worktree, il push lo
    fa Nicola via .bat quando vuole.

## Key decisions & tradeoffs

- **Mappa come hero della home (decisione di Nicola, post avvocato del
  diavolo)**: asset di distribuzione, non strumento decisionale. Due
  condizioni vincolanti: (1) su mobile tap+scheda, mai hover, con clustering;
  (2) per l'utente profilato la mappa si ridimensiona e missione/countdown
  tornano padroni. In più, **gate di conferma sui mockup a 375px** (§Goal):
  la decisione strutturale per la Fase C si prende sui pixel, non
  sull'entusiasmo.
- **Mappa strutturale in tutti e tre i mockup**: la Fase B fa scegliere
  l'identità visiva a parità di struttura; un mockup senza mappa avrebbe
  inquinato il confronto.
- **SVG inline, zero librerie, proiezione precalcolata**: niente Leaflet/tile
  server; coordinate SVG x/y calcolate offline e salvate nei dati demo —
  a runtime solo lettura, zero matematica di proiezione nel browser.
- **La facoltà si sceglie da lista, non sulla mappa**: l'unica scelta
  geografica onesta è l'ateneo (2 pin).
- **Dati demo = due facoltà REALI complete** (Giurisprudenza Sapienza, 55
  mete; Economia Ca' Foscari): la densità si valuta al vero. **La
  validazione della densità vale per queste facoltà** — prima della Fase C
  va misurata la facoltà più numerosa del dataset e, se supera nettamente le
  55 mete, il clustering va ri-verificato su quella (registrato come check
  di Fase C2, non di Fase B).
- **Coordinate: schema definito ORA** (`coord: {lat, lon, x, y, fonte,
  precisione}` + fallback "senza coordinate" = lista testuale): i mockup
  usano già lo schema che la pipeline G5 popolerà in Fase C — niente debito
  nascosto, il lavoro di lookup (~200 città) resta rinviato ma ha già il
  contratto.
- **Tre direzioni, non due**: l'ibrida è la candidata statisticamente più
  forte; farla subito costa poco, farla dopo costa una sessione e un altro
  giro di scelta.
- **Scope di Fase B esteso rispetto al piano d'ondata**: da "home + una
  schermata interna" a 3 mockup × 4 viste × 2 temi con mappa interattiva.
  Deciso da Nicola nel grill; stima onesta 1-2 sessioni. Il piano d'ondata
  NON viene riscritto: questa estensione è documentata qui e nel log.

## Risks / open questions

- **Densità pin su mobile**: se anche col clustering la mappa a 375px non è
  leggibile con 55 mete, il fallback onesto è mostrarne un sottoinsieme
  "top" + CTA verso la griglia. Da giudicare sui pixel — è uno degli scopi
  dei mockup, e il gate del §Goal lo formalizza.
- **Peso e resa dell'SVG Europa**: tracciato semplificato ma riconoscibile;
  budget 80 KB nel §Approach 7.
- **Asset Wiz**: i render esistenti sono PNG pesanti (wiz-hero.png 408 KB);
  i mockup usano versioni webp ottimizzate o Wiz ridisegnato in CSS/SVG
  leggero — vincolo ≤100 KB.
- **Costo Fase C della mappa reale**: lavoro aggiuntivo su C2 (~1 sessione)
  + file coordinate dalla pipeline + ri-verifica clustering sulla facoltà
  più numerosa. Nicola ne è consapevole: accettato nel grill.
- **Esposizione su GitHub Pages**: mitigata con noindex + disclaimer
  (§Approach 1); nei mockup solo dati mete pubblici, nessun dato personale.

## Out of scope

- Qualsiasi modifica ai file del sito live (`index.html`, `css/`, `js/`,
  `guide/`) e ai dati (`js/atenei/**`).
- Il popolamento del lookup coordinate per il sito vero (Fase C / pipeline
  G5) — qui se ne definisce solo lo schema.
- La logica reale di scadenze/bando chiuso (il mockup mostra testo hardcoded
  con data e fonte esplicite).
- La traduzione della direzione scelta in token CSS (Fase C1).
- LA Generator UI (Fase C6), igiene repo, ogni altro blocco dell'ondata.
- Test di integrazione col sito reale: i mockup restano autonomi; il ponte
  con la realtà è lo schema dati condiviso (§Approach 2), l'integrazione
  vera è Fase C.
- Commit/push (li fa Nicola via .bat).
