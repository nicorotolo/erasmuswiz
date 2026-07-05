# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-07-05 — sessione 24, Claude Code (**BR6 Zaino
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
| v2 — Redesign UI | Tab OGGI/METE/TIMELINE/CHECKLIST, missione del giorno, percorso a tappe, countdown pill, mascotte Wiz, dark mode, GoatCounter | ✅ Promossa a main (2026-06-23) |

**Tab visibili nella pagina (navigazione inferiore):** Oggi (missione) → Mete → Scadenze → Checklist.
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
| `index.html` | codice | Struttura v2 (tab OGGI/METE/TIMELINE/CHECKLIST + Idoneità/Profilo nascosti) |
| `css/style.css` | codice | Design system v2: dark mode, font Bricolage/Jakarta/SpaceMono, responsive |
| `js/app.js` | codice | Logica v2: missione del giorno, percorso, countdown, mete, checklist, profilo |
| `img/wiz-hero.png` | asset | Mascotte Wiz (illustrazione, in sostituzione in BR2 con le pose di `design/assets/mascotte/`) |
| `img/logo-mark.svg` · `img/icon-star.svg` · `img/icon-sparkle.svg` | asset | Copiati da `design/assets/` in BR0; logo-mark usato nell'header desktop (`.nav-brand`) e come favicon |
| `js/atenei/` | **dati** | Dati per ateneo (multi-ateneo). Sottocartelle `cafoscari/` e `sapienza/`; vedi `js/atenei/README.md` |
| `js/atenei/cafoscari/dati-bando.js` | **dati** | Requisiti del bando Ca' Foscari (Idoneità) — `var BANDO_INFO`, `var REQUISITI_BANDO` |
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
| `automazioni/PROMPT_CODEX_mappatura.md` | automazione | Prompt dell'automazione Codex (ogni 15 min): unica fonte della mappatura mete. (Action Claude `mappatura-mete.yml` RIMOSSA) |
| `scripts/lib-mete.mjs` | automazione | Utilità condivise: scanner JS (rispetta stringhe/parentesi) + serializzazione |
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
| `PROGETTO_ERASMUS.md` | guida | Bussola strategica (idea, confini, rischi) |
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
| **Sapienza — 7 Facoltà avviate** (Giurisprudenza 55 ✅, Medicina-Psico area medica 15 ✅, Architettura 113 ✅, Farmacia 62, Comunicazione 59, Scienze Sociali 68 ✅, Psicologia 97) | REALI da Go Erasmus+; arricchimento Codex quasi completo (6 batch follow-up residui) | Codex chiude i follow-up |
| **Sapienza — ULTIME 10 Facoltà** (1.126 mete, seed 04/07) | REALI dall'export ufficiale; lingua/scadenze vuote nel repo, ma al setup Codex il RIUSO ne pre-compila ~metà | Codex: 10 setup + ~57 batch di ricerca |
| → posti/livello/area/coordinatore/codice Erasmus | reali, dalla lista | ok |
| → requisito di **lingua** | Economia: **52/58 righe complete** con CEFR e scadenze, 6 senza CEFR ufficiale classificate non trovabili. Management: **19/76 righe complete**; 2 mete del primo lotto hanno scadenze ma non CEFR generale ufficiale | continuare i batch Management |
| → scadenze ospitante / linkPdf | Economia: **58/58 con link scheda PDF** e **58/58 con scadenze** nomination/application. Management: **76/76 con link scheda PDF** e **21/76 con scadenze** | continuare i batch Management |
| → schede PDF scaricate | 53 PDF in `fonti/schede/` (solo locale, gitignore) | — |
| Meta Aix-Marseille | **completa e reale** (da scheda PDF) | Esempio di riferimento |
| 2 mete "ESEMPIO" (Madrid, Monaco) | **RIMOSSE** ✅ | fatto |
| Requisiti bando (`dati-bando.js`) | **REALI** ✅ validati art. per art. sul PDF (8 requisiti, con rif. agli articoli) | Riverificare sul bando 2027/28 |
| Scadenze (`dati-scadenze.js`) | **REALI** ✅ 7 tappe dal bando (candidature, laureandi, graduatoria, accettazione, ISEE, mobilità) | Riverificare ogni anno |
| Checklist (`dati-checklist.js`) | **REALI** ✅ 9 passi validati sul bando | Riverificare ogni anno |

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