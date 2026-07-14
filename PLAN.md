# Plan: Ondata "PERCORSO" — redesign a viaggio di ErasmusWiz
_Locked via grill — by Claude + Nicola (2026-07-14)_

> **Supersessione**: questo piano sostituisce i blocchi residui del piano
> "MERCATO-UI" del 2026-07-10 (C6 LA Generator demo e Fase D QA vengono
> assorbiti qui). Le fasi C1–C5 già implementate restano il punto di
> partenza del codice, ma la loro direzione visiva (direzione C
> indigo/ambra) è formalmente RIAPERTA dalla decisione 8 del grill.

## Goal

Trasformare ErasmusWiz da "sito a card impilate" ad app strutturata come un
VIAGGIO: il verdetto di Nicola sull'esito delle fasi C1–C5 è "troppo
bambinesco, manca il percorso, non c'è trasporto". Il redesign introduce un
modello a due mondi — un INGRESSO emozionale (mappa d'Europa con archi di
volo leggermente animati, onboarding come inizio del viaggio) e una
DASHBOARD operativa ("cabina di pilotaggio") per l'utente profilato — con la
LINEA DI VIAGGIO (Scegli la meta → Candidati → Parti) che diventa la
navigazione principale al posto delle tab. Ogni sezione è una TAPPA: la
candidatura diventa un itinerario a stazioni, le mete una mappa sincronizzata
con le "rotte" preferite, la demo del LA Generator (ex C6) nasce come
stazione del viaggio. L'identità si semplifica: immaginario cartografico
lineare, Wiz ridotto a segno grafico a tratto, palette riaperta con due
direzioni a confronto (Notte cartografica vs Orizzonte chiaro). Metodo:
2 mockup HTML completi → scelta vincolante di Nicola da telefono →
implementazione a blocchi. Chiusura entro settembre 2026. Dati, motore di
compatibilità/scadenze, URL e SEO esistenti sono intoccabili.

## Approach

**Fase P0 — Due mockup completi + scelta (1 sessione + scelta di Nicola)**
1. Nuova cartella `design/proposte-percorso-2026-07/` con comparatore e due
   mockup navigabili autonomi, ciascuno con TRE schermate collegate:
   (a) INGRESSO — mappa d'Europa con archi di volo animati (disegno
   progressivo via stroke-dashoffset + punto luminoso che percorre la rotta,
   poche rotte a rotazione in loop lento) e onboarding a 3 domande ambientato
   sul viaggio; (b) DASHBOARD profilata — linea di viaggio orizzontale in
   testa con tappa corrente evidenziata, sotto moduli operativi cliccabili
   (prossima scadenza con countdown, missione del giorno, "Le tue rotte" come
   widget mini-mappa con le preferite, stato candidatura, zaino, teaser LA
   Generator); (c) CANDIDATURA — itinerario verticale a stazioni (linea di
   rotta continua, scadenze come stazioni: passate spente, corrente
   evidenziata con countdown, future attenuate; "Ora tocca a te" = stazione
   corrente).
2. Direzione 1 "Notte cartografica": fondo inchiostro profondo, rotte
   oro/luce, città come punti luminosi; il tema chiaro è la "mappa diurna"
   della stessa cartografia. Direzione 2 "Orizzonte chiaro": fondi
   chiarissimi, blu orizzonte + un accento caldo, superfici pulite, ombre
   minime. ENTRAMBE condividono: immaginario cartografico lineare, Wiz come
   segno grafico a tratto (SVG, niente render 3D, niente stelline), tema
   chiaro E notte disegnati entrambi, movimento gentile con fallback
   `prefers-reduced-motion` (scena statica con rotte già disegnate).
2-bis. **Riferimenti visivi forniti da Nicola (2026-07-14, 4 dashboard/app
   scolastiche)** — principi vincolanti per ENTRAMBI i mockup:
   (a) *chiarezza lineare e accogliente*: fondo chiarissimo con molta aria,
   card morbide arrotondate, UN colore profondo come accento e per le
   "card-copertina"; niente affollamento (rif. "iStudent");
   (b) *quadro d'insieme modulare*: la dashboard tiene insieme numeri
   chiave in alto, avanzamento, calendario-scadenze e bacheca delle
   prossime azioni in una griglia ordinata e leggibile (rif. "ACERO") —
   è l'impianto dei moduli di P3;
   (c) *mobile a scorrimento*: una sola colonna verticale di card, hero
   card "oggi" in testa (= missione del giorno), striscia giorni/date,
   bottom nav a pillola (= la barra tappe compatta);
   (d) *sintesi con le due direzioni*: i riferimenti sono tutti a tema
   chiaro → in "Notte cartografica" il buio vive nell'INGRESSO/mappa e
   nelle card-copertina, mentre la dashboard resta chiara e ariosa in
   entrambe le direzioni; il tema notte completo resta di prima classe
   come da piano.
2-ter. **La dashboard è un PLANNER (grill 2026-07-14, ricognizione study
   planner: Shovel, Structured, My Study Life)** — pattern vincolanti, da
   mostrare GIÀ nei mockup della schermata dashboard: (a) *piano della
   settimana AUTO-GENERATO*: l'app propone le prossime azioni incrociando
   le scadenze del bando (dati con fonte esistenti) con le voci checklist
   aperte — lo studente spunta, non crea nulla; (b) *indicatore "Sei in
   linea?"*: segnale sempre visibile (in anticipo / in linea / in ritardo)
   derivato onestamente da giorni alla prossima scadenza vs voci aperte
   collegate; (c) *calendario mensile delle scadenze* come modulo (pattern
   ACERO), complementare all'export .ics esistente; (d) *check-in
   settimanale gentile*: card di inizio settimana (fatto / proposto /
   quanto manca) che appare alla prima apertura in una nuova settimana —
   niente notifiche. ESCLUSI consapevolmente: streak/serie di giorni
   (meccanica di gioco, riporterebbe il bambinesco) e task personali
   creati dallo studente (scope nuovo, eventualmente MERCATO-2).
3. Vincoli tecnici dei mockup: dati REALI riusati da
   `design/proposte-2026-07/_assets/` (mappa 43 paesi, mete demo con
   coordinate precalcolate), pin = `<button>` accessibili in overlay HTML,
   clustering esistente, rendering solo textContent/createElement, noindex,
   budget ≤600 KB/pagina, gate mobile 375×667: nell'ingresso si vede mappa +
   invito all'azione; nella dashboard linea di viaggio + primo modulo interi
   nel primo viewport.
4. Nicola guarda il comparatore PRIMA DA TELEFONO e sceglie. La scelta è
   vincolante, sostituisce formalmente la direzione C (nota di supersessione
   in `DISEGNO_BRAND.md`) e viene tradotta in token in P1. **Fonte di verità
   dei colori (una sola)**: i valori APPLICATI vivono in `css/style.css`
   (:root); `design/tokens/colors.css` è documentazione della direzione e va
   riscritto nello stesso blocco P1, con un controllo di coerenza tra i due
   file prima di ogni deploy che tocchi i token.

**Fase P1 — Fondamenta della direzione scelta (1 sessione)**
5. Ritaratura completa di `css/style.css` :root + tema notte sui nuovi
   token; nuovo componente LINEA-NAV che sostituisce la nav a tab: tappe
   cliccabili (Dashboard · Scegli la meta · Candidati · Parti) con la
   posizione dello studente segnata; su mobile si comprime in barra tappe
   compatta in basso. **Contratto di navigazione definito in questa fase**:
   ricognizione degli hash reali esistenti (`#oggi`, `#mete`, `#checklist`,
   `#idoneita`, `#profilo`, …) e tabella stabile tappa→hash→sezione —
   con la decisione su "Parti" GIÀ PRESA: la tappa "Parti" ha un hash
   dedicato NUOVO (`#parti`) che mostra la sezione zaino/partenza estratta
   dall'area oggi condivisa con la candidatura, mentre `#checklist` resta
   la tappa "Candidati"; i vecchi hash restano alias validi per sempre
   (link esterni/bookmark), e UNA sola funzione di navigazione gestisce
   tappe, alias e Indietro/Avanti del browser. L'alias legacy `#checklist`
   risolve in modo DIPENDENTE DALLO STATO, replicando il comportamento
   attuale: per l'utente selezionato apre lo zaino (`#parti`), altrimenti
   la candidatura; `#parti` è il nuovo URL canonico dello zaino.
   **`#parti` PRIMA della selezione** (raggiungibile dalla linea-nav e via
   URL): tappa bloccata ma informativa — spiega cosa contiene ("qui
   troverai la checklist di partenza quando sarai selezionato") con
   bottone verso Candidati; NIENTE checklist post-selezione vuota e
   NESSUN controllo che permetta di dichiararsi selezionato per errore
   da questa vista. **Nella stessa fase si fissa
   la regola deterministica della "tappa corrente"** (la linea-nav la mostra
   da subito, non si può rimandare a P3): tabella di priorità su stato del
   bando per data → flag selezione → progressi checklist, con fallback
   "Scegli la meta" per zaini vecchi o stato indeterminabile. Wiz lineare come
   SVG inline riutilizzabile; rimozione stelline decorative e riferimenti ai
   render 3D dall'UI (gli asset restano in `img/` finché l'OG non è
   riallineata in P6).

**Fase P2 — Ingresso (1 sessione)**
6. La home non profilata diventa la mappa-scena: motore archi di volo
   (riuso del motore mappa C2: pin, cluster, tooltip, dettaglio), onboarding
   a 3 domande sul viaggio (riuso flusso `#home-benvenuto`, ambientazione
   nuova), landing con mete accese + prossima scadenza.
   `prefers-reduced-motion` e tab in background (Page Visibility) fermano
   l'animazione; nessuna animazione su più di ~6 rotte simultanee.
   **Invarianti SEO della home fissati PRIMA di toccarla**: title,
   description, canonical, H1 e il testo indicizzabile restano identici.
   ATTENZIONE (verificato): parte del testo dell'onboarding vive GIÀ nel
   file HTML statico, solo nascosta via CSS — quindi il controllo si fa
   confrontando il DOM STATICO COMPLETO di `index.html` prima/dopo
   (inclusi blocchi nascosti, headings e testo), non solo ciò che appare
   con JavaScript attivo; ogni testo statico che il redesign vuole
   cambiare va deciso consapevolmente come cambiamento SEO, non subito
   per sbaglio. **Accessibilità della mappa
   (regola per OGNI uso della mappa, qui e in P3/P4)**: link "Salta ai
   risultati" prima dei pin, elenco testuale controparte COMPLETA della
   mappa, annuncio `aria-live` del conteggio filtrato, stato
   selezionato/corrente visibile e annunciato, focus gestito
   esplicitamente all'apertura e chiusura di dettaglio/modal.

**Fase P3 — Dashboard profilata (1 sessione)**
7. L'utente profilato atterra sulla dashboard-hub: linea di viaggio in testa
   con tappa corrente calcolata dallo stato reale (fase del bando + progressi
   checklist), moduli operativi cliccabili che portano alle tappe. La
   missione del giorno e il countdown esistenti diventano moduli (il motore
   temporale non si tocca). La mappa qui è SOLO il widget "Le tue rotte".
   **Moduli planner (dal grill 2026-07-14, irrobustiti dalla review)**:
   *Prerequisito dati (estensione ADDITIVA autorizzata, unica eccezione
   all'intoccabilità dei dati)*: le scadenze guadagnano campi metadati
   per-voce — `fonte`, `verificataIl`, `pubblicato`, `ciclo` — e il bando
   uno STATO FORMALE che distingue: candidature aperte / candidature
   chiuse ma ciclo attivo (graduatoria, accettazione, ISEE) / dati scaduti
   / prossimo bando non pubblicato. Nessun valore esistente viene alterato;
   i CONTENUTI dei nuovi valori vengono dai documenti già in `fonti/`, ma
   il campo `fonte` è un oggetto {etichetta, url} il cui url è SEMPRE un
   link HTTPS pubblico ufficiale (pagina/PDF dell'ateneo) — VIETATI i
   percorsi verso `fonti/` (cartella in `.gitignore`, non esiste su GitHub
   Pages); i link fonte si verificano nella QA P7 sul sito pubblicato. *Fuso
   canonico*: tutte le date del bando si interpretano in `Europe/Rome`
   (oggi sono orari locali `T12:00` letti nel fuso del dispositivo —
   difetto latente per studenti all'estero e cambi d'ora); regola tecnica
   VINCOLANTE: un'UNICA funzione di parsing che legge le stringhe-data
   come orari civili italiani, e DIVIETO di `new Date(stringa)` diretto
   nei moduli planner/countdown/calendario.
   (a) "Questa settimana" — piano auto-generato da una FUNZIONE PURA di
   derivazione con SPECIFICA COMPLETA: input (scadenze del ciclo attivo +
   voci checklist aperte con collegamento voce→scadenza dell'impianto
   OP2), ordinamento deterministico (per scadenza, poi per ordine di
   checklist), regole per i casi limite — più voci sulla stessa scadenza,
   voce senza scadenza collegata (mostrata senza data, mai inventata),
   settimana già iniziata, checklist vuota o completa (risultato NEUTRO
   esplicito: nessuna urgenza finta); nessun dato nuovo persistito oltre
   le spunte esistenti. (b) indicatore "Sei in linea?": "in ritardo" SOLO
   per voci azionabili non spuntate oltre la PROPRIA scadenza; negli altri
   casi messaggio prudente e mai una valutazione di performance (le voci
   non pesano tutte uguale e le spunte non hanno timestamp); sempre con la
   spiegazione del perché. (c) calendario mensile con le scadenze del
   ciclo attivo evidenziate; se NON esiste un ciclo pubblicato e
   verificato, piano e calendario operativo si NASCONDONO e al loro posto
   compaiono la data dell'ultimo controllo e il link alla pagina
   ufficiale — in quello stato l'indicatore "Sei in linea?" mostra un
   neutro "non disponibile" e la card check-in NON viene creata né
   salvata. *Fonte raggiungibile ovunque* (coerenza con la promessa del
   sito "link e data per ogni informazione"): ogni scadenza mostrata da
   piano settimanale, calendario e dettaglio del giorno espone la sua
   fonte apribile e la data dell'ultima verifica (`fonte`+`verificataIl`). (d) card check-in di inizio settimana: il campo "ultima
   settimana vista" (formato completo `YYYY-Www`, fallback su valore
   mancante o corrotto = mostra la card) vive DENTRO lo zaino
   per-ateneo della migrazione P3, mai globale. *Ramo "selezionato"
   separato*: lo stato è auto-dichiarato e va presentato come tale ("Hai
   indicato di essere stato selezionato"); il planner post-selezione NON
   mostra semaforo né piano datato finché non esistono date verificate
   (molte dipendono dalla meta o da comunicazioni successive) — solo i
   passi post-selezione pertinenti, senza date inventate; le scadenze
   delle candidature non contaminano il ramo post-selezione.
   **Migrazione zaino-ateneo OBBLIGATORIA in questo blocco** (difetto
   dimostrato dal codice: un'unica chiave `erasmuswiz-zaino` senza campo
   ateneo, conservata al cambio ateneo). Schema di arrivo: CONTENITORE
   PER-ATENEO — un unico oggetto persistito con uno zaino separato per
   ciascun ateneo + l'ateneo attivo; al cambio ateneo lo zaino corrente
   viene ARCHIVIATO sotto il suo ateneo di origine (mai applicato al
   nuovo) e il nuovo ateneo riparte dal proprio archivio se esiste,
   altrimenti dall'onboarding. Migrazione dello zaino legacy: assegnazione
   AUTOMATICA all'ateneo attivo SOLO con corrispondenza UNIVOCA
   (dipartimento+area del profilo esistono nell'ateneo attivo E non
   nell'altro); in OGNI caso ambiguo — area condivisa dai due atenei,
   campo mancante, incoerenza — si chiede esplicitamente allo studente a
   quale ateneo appartiene il profilo e si archivia il risultato scelto.
   Nessuna perdita di dati in nessun ramo. Scenario cambio-ateneo nel mini-QA di
   blocco: dashboard, mete e checklist coerenti col nuovo ateneo; ritorno
   all'ateneo precedente che ripristina il suo zaino archiviato; zaino
   legacy coerente e incoerente entrambi simulati.

**Fase P4 — Tappa "Scegli la meta" (1 sessione)**
8. Tab Mete: mappa sincronizzata in testa (mete dell'area del profilo;
   filtri e ricerca aggiornano mappa ed elenco insieme; card↔pin collegati),
   schedina ribattezzata "Le tue rotte" con le preferite disegnate come archi
   sulla mappa in ordine di priorità. Card, filtri, motore di compatibilità,
   stima borsa: INVARIATI nella logica. **Budget prestazioni con il dataset
   COMPLETO** (la pagina carica già ~2,1 MB di dati dei due atenei):
   l'aggiornamento mappa+lista è coalizzato — debounce già esistente sulla
   ricerca + UN solo passaggio per frame via `requestAnimationFrame`, mai
   render doppi a cascata; sulla mappa si disegnano solo cluster/città
   uniche (mai un pin per meta). **Criterio misurabile e verificato nel
   mini-QA di blocco** (375px, CPU throttled 4x, dataset completo):
   nessun long task > 50 ms durante digitazione/filtri, aggiornamento
   completo lista+mappa entro 250 ms dal termine del debounce; se il
   criterio fallisce, si interviene su `renderMete()` (render incrementale
   o cap+"mostra altre", già ipotizzato in C3) finché passa.

**Fase P5 — Tappa "Candidati" + LA Generator demo (1-2 sessioni)**
9. Candidatura come itinerario a stazioni (presentazione nuova, dati
   scadenze/fonti e export .ics INVARIATI). La demo UI del LA Generator (ex
   C6) nasce come stazione dell'itinerario, con i vincoli già decisi e NON
   rinegoziati: read-only, NESSUNA scrittura zaino, mapping molti-a-molti con
   totali ECTS/CFU, niente campi codici corso host, placeholder onesto dove
   manca `linkCatalogo`, stato onesto "in arrivo".

**Fase P6 — Tappa "Parti" + riallineamento brand pubblico (1 sessione)**
10. Zaino/Partenza come tappa conclusiva dell'itinerario (stesso linguaggio
    a stazioni; conteggi capitolo e retrocompatibilità zaino INVARIATI).
    Riallineamento degli asset pubblici alla nuova identità: OG image nuova
    (≤100 KB), `manifest.json` (theme/background color), favicon se serve,
    guide SEO e pagina fiducia riallineate SENZA cambiare URL/canonical/
    contenuti. **Service worker**: non solo cache bump — definizione
    esplicita della shell offline (elenco preciso di HTML, CSS, JS
    applicativo, file dati atenei e mappa necessari al primo avvio) nella
    precache di `sw.js`.

**Fase P7 — QA e chiusura (1 sessione)**
11. Regressione completa: onboarding da localStorage pulito, zaino vecchio
    simulato, entrambi gli atenei, chiaro/notte, mobile/desktop, export .ics,
    riordino rotte, `prefers-reduced-motion`, navigazione da tastiera sulla
    linea-nav, vecchi hash/bookmark che risolvono sugli alias. **Planner
    (casi di prova ripetibili, da script o localStorage preparato)**:
    checklist vuota, voce senza scadenza collegata, bando nei 4 stati
    (aperto / chiuso ma ciclo attivo / dati scaduti / non pubblicato),
    ramo selezionato senza date verificate, cambio ateneo (check-in e
    piano indipendenti per ateneo), ISO week a cavallo di Capodanno,
    date interpretate in Europe/Rome da un fuso diverso e nei cambi
    d'ora. **PWA**:
    upgrade da una cache precedente, primo avvio offline, riapertura dopo
    deploy. Chiusura a due stati: "implementata" col QA interno,
    "validata" col test di Bruno (se slitta, resta "implementata").
    Aggiornamento `ROADMAP.md`, `STATO_DEL_SITO.md`, `DISEGNO_BRAND.md`.

**Regola trasversale (invariata dall'ondata precedente)**: ogni blocco si
chiude con mini-QA a video (mobile ~375px + desktop, chiaro + notte,
ENTRAMBI gli atenei), `node --check` sui JS toccati, e checklist SEO: URL e
`rel=canonical` invariati, GoatCounter su tutte le pagine, `sitemap.xml`
coerente, nessun evento analytics con dati personali. Git SOLO via .bat
(incidente OneDrive, sessione 38).

## Key decisions & tradeoffs

- **Percorso = spina dorsale, non una sezione** (decisione 1): il viaggio
  struttura navigazione, home e sezioni. Rifiutato il "percorso solo in
  home" (non risolveva il verdetto) e la gamification (avrebbe aumentato il
  bambinesco).
- **Due mondi: ingresso vs dashboard** (decisioni 4-5): la mappa animata è
  la scena del PRIMO contatto e dell'onboarding; l'utente profilato atterra
  su una dashboard operativa dove la mappa è ridotta a widget. Rifiutata la
  mappa protagonista anche da profilati (consuma il primo viewport a ogni
  accesso) e la dashboard a sola to-do list (perde il colpo d'occhio).
- **La linea di viaggio DIVENTA la nav** (decisione 6): le tab spariscono.
  È la scelta più rischiosa del piano (pattern non convenzionale); mitigata
  mantenendo identici hash/meccanismo di routing e comprimendo la linea in
  barra tappe in basso su mobile — posizione convenzionale.
- **Wiz ridotto a segno grafico lineare** (decisione 2): niente più render
  3D e stelline nell'UI; tono di voce caldo invariato. Rifiutata
  l'eliminazione totale (si perde riconoscibilità già costruita) e il
  restyling 2D da protagonista (rischio di rientro del bambinesco).
- **Archi di volo animati come firma del brand** (decisione 3): linguaggio
  delle mappe di volo, adulto. Vincoli: poche rotte alla volta, loop lento,
  stop con `prefers-reduced-motion` e tab nascosta. Rifiutata la scena
  ricca continua (peso, distrazione) e il movimento solo all'interazione
  (prima impressione statica = il difetto lamentato).
- **Palette riaperta** (decisione 8): la direzione C decade a sole 4
  sessioni dalla sua adozione — costo di riallineamento accettato
  consapevolmente da Nicola pur di ottenere la semplificazione d'immagine.
  Due direzioni a confronto: Notte cartografica e Orizzonte chiaro
  (decisione 10; scartate "Inchiostro e carta" e "Indigo evoluto").
- **La dashboard è un planner auto-generato** (grill 2026-07-14): il piano
  settimanale nasce dai dati del bando, non da task creati dallo studente —
  zero attrito e sfrutta il vantaggio competitivo (i dati con fonte).
  Adottati "Sei in linea?", calendario scadenze e check-in settimanale;
  rifiutati streak (bambinesco) e task personali (scope da MERCATO-2);
  il planner manuale classico è stato scartato perché butta via i dati.
- **Mockup-first** (decisione 9): 2 mockup completi prima di toccare il
  sito, scelti da telefono. Costo ~1 sessione; assicura che il rebrand non
  si faccia due volte sul sito vero.
- **C6 dentro il viaggio** (decisione 7): la demo LA Generator si costruisce
  UNA volta, già come stazione dell'itinerario, coi vincoli OP8 invariati.
  Rifiutato "prima chiudere C6+D sul design bocciato" (lavoro da rifare).
- **Intoccabili confermati**: dati (`js/atenei/**`, `js/dati-*.js`), motore
  compatibilità/scadenze/temporale, schema ZAINO con retrocompatibilità,
  URL/canonical/sitemap delle pagine indicizzate, stack vanilla senza build.
  UNICA eccezione autorizzata (review 2026-07-14): estensione ADDITIVA dei
  metadati delle scadenze/bando (fonte, verificataIl, pubblicato, ciclo,
  stato del bando) richiesta dal planner — nessun valore esistente alterato.

## Risks / open questions

- **Sostituire le tab con la linea-nav** può disorientare gli utenti
  esistenti e ha esigenze di accessibilità proprie (ruolo `navigation`,
  stato corrente annunciato, target ≥44px nella barra compatta mobile).
  Il QA P7 include navigazione completa da tastiera e screen-reader di base.
- **Prestazioni dell'animazione** su telefoni economici: gli archi animati
  vanno misurati (niente jank sul thread principale; solo proprietà
  compositabili dove possibile). Budget: ingresso fluido a 375px su CPU
  throttled 4x nel pannello dev.
- **Terzo rebrand pubblico in un mese** (blu → direzione C → PERCORSO):
  OG image, manifest e guide vanno riallineati di nuovo (P6); finché P6 non
  chiude, il sito live convive con asset della direzione C — accettato, i
  contenuti e gli URL non cambiano.
- **Calcolo della "tappa corrente"**: la regola deterministica è fissata in
  P1 (vedi Approach) perché la linea-nav la mostra da subito; il rischio
  residuo sono combinazioni non previste di zaini vecchi/parziali —
  coperte dal fallback "Scegli la meta" e dallo scenario cambio-ateneo nel
  mini-QA di P3.
- **Deadline settembre 2026** con 7-8 sessioni stimate: realistica solo se
  la scelta mockup arriva rapidamente; se slitta, si comprime P6 (solo OG +
  manifest, guide dopo).
- **Disponibilità di Bruno** per la validazione: invariata dall'ondata
  precedente (se slitta, l'ondata chiude "implementata").

## Out of scope

- Monetizzazione in ogni forma; backend, account, database, app native;
  framework e build step.
- Logica del LA Generator (generazione documento reale) e matching L3.
- PWA push / notifiche (MERCATO-2) — il check-in settimanale è SOLO in-app.
- Task/attività personali creati dallo studente e streak/serie di giorni
  (decisione del grill 2026-07-14).
- Modifiche a dati mete/bando/scadenze/borse e al motore di compatibilità
  (eccetto l'estensione additiva dei metadati scadenze/bando autorizzata
  per il planner, vedi Key decisions).
- Cambi di URL o di contenuto testuale delle pagine indicizzate (home,
  2 guide, pagina fiducia).
- Nuovi render 3D o nuove pose della mascotte.
