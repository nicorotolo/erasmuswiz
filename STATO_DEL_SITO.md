# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-07-03 — sessione 12 (**BLOCCO D ristrutturazione UX —
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
**Fase raggiunta:** Fase 5 / 5 + Ondata A completa + ROADMAP Fase 1 ✅ + ROADMAP Fase 2 ✅ + ROADMAP Fase 3 ✅ + ROADMAP Fase 4 ✅ (post-selezione) + ROADMAP Fase 5 ✅ (condivisibilità) + ROADMAP Fase 7 ✅ (PWA, no notifiche) + ROADMAP Fase 8 ✅ (evento analytics checklist) + **ONDATA UX: UX1 ✅ (onboarding 3 domande, 2026-07-02) + UX2 ✅ (home-percorso 4 fasi + nav 3 tab, 2026-07-02) + UX3 ✅ (fusione Scadenze+Checklist + export .ics, 2026-07-02) + UX4 ✅ (traduttore 3 registri + banner "in verifica", 2026-07-02)** — SITO PUBBLICATO con design v2, ora multi-dipartimento (8), **392 mete totali** Ca' Foscari + 3 Facoltà Sapienza (183 mete)
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
| `img/wiz-hero.png` | asset | Mascotte Wiz (illustrazione) |
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
| `js/atenei/sapienza/dati-scadenze.js` | **dati** | Scadenze bando Sapienza 26/27 (REALI) |
| `js/atenei/sapienza/dati-bando.js` · `dati-checklist.js` · `dati-postselezione.js` | **dati** | Idoneità/checklist/post-selezione Sapienza (**PROVVISORI**, da validare sul bando) |
| `js/atenei/sapienza/dati-mete.js` | **dati** | Deprecato (vuoto; sostituito dai file per Facoltà) |
| `js/atenei/README.md` | guida | Come è collegato il multi-ateneo + come aggiungere un ateneo |
| `GROUNDWORK-sapienza.md` | guida | Ricognizione fonti/modello dati Sapienza (26/06) |
| `v2/` | storico | Design v2 originale (sottocartella, non più il sito principale) |
| `automazioni/PROMPT_CODEX_mappatura.md` | automazione | Prompt dell'automazione Codex (ogni 15 min): unica fonte della mappatura mete. (Action Claude `mappatura-mete.yml` RIMOSSA) |
| `scripts/lib-mete.mjs` | automazione | Utilità condivise: scanner JS (rispetta stringhe/parentesi) + serializzazione |
| `scripts/prepara-batch.mjs` | automazione | Imbuto in ingresso: estrae il prossimo batch in `batch/INPUT.json` (pochi KB) |
| `scripts/applica-batch.mjs` | automazione | Imbuto in uscita: fonde `batch/OUTPUT.json` nel fileJs, `node --check`, aggiorna lo stato |
| `fonti/` | **fonti ufficiali** | PDF/ODS del bando 2026/27 Ca' Foscari (lista destinazioni, legenda, EUTOPIA) — base del database mete |
| `README.md` | guida | Spiegazione file + come aggiungere una meta + come testare |
| `STATO_DEL_SITO.md` | guida | Questo file: stato aggiornato |
| `DISEGNO_UX.md` | guida | **Specifica vincolante del ridisegno UX v3** (02/07) — da leggere nelle sessioni UX1–UX6 |
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
GoatCounter (A3) già integrato nella v2: account `erasmuswiz.goatcounter.com`.

Fatto in sessione (2026-06-25): **MERGE GitHub→locale.** Il lavoro di Codex
(che merge solo su GitHub) è stato portato nel working tree locale. Scoperta la
divergenza incrociata: GitHub aveva i dati nuovi ma il design v1; il locale aveva
il v2 ma i dati vecchi. Merge selettivo: presi i file `js/dati-*.js` +
`mappatura-stato.json` da `origin/main` con `git show`, tenuto il codice v2
(`index.html`, `css/style.css`, `js/app.js`, `img/`). Aggiunti 3 dipartimenti
(Lingue, Scienze, Filosofia) → **249 mete totali**. Convertiti i 5 file mete a
`var METE` e collegati in `index.html` con catena `_meteAll`. Validato: `node
--check` su tutti i JS OK, simulazione concat = 249 mete / 249 ID unici / 0
problemi strutturali. Backup pre-merge in `_backup-20260625-*/`. **Push su GitHub
FATTO** (commit `8bc3206` su main, via `pubblica-v2-su-github.bat`): il sito
pubblico ora serve il v2 con 249 mete. `node_modules/` (jsdom usato per i test)
aggiunto a `.gitignore`, da cancellare a mano.

0. **⬆️ PUSH locale → GitHub:** i 3 nuovi file (`dati-mete-molecolari.js`,
   `dati-mete-linguistici.js`, `dati-mete-umanistici.js`) e l'`index.html`
   aggiornato sono solo in locale (branch `feature/pipeline-imbuto`). Vanno pushati
   su `origin/main` con il metodo bat già usato (`pubblica-v2-su-github.bat` o
   equivalente) per aggiornare il sito pubblico.
1. **Mappatura Codex automatica:** l'automazione è ATTIVA (ogni ~9 min, GPT-5.5 Basso).
   8 dipartimenti tutti "completo" — Codex può fermarsi o essere puntato su EUTOPIA.
2. **EUTOPIA (task futura):** 46 accordi cross-dipartimentali (presenti in
   `fonti/Lista_destinazioni_Erasmus__per_studio_europa_a.a._2026-2027.ods`, riga
   "EUTOPIA"). Richiedono logica filtro speciale (non legati a un singolo
   dipartimentoCf). Da pianificare in sessione dedicata.
3. **Testare in locale** (`python -m http.server 8000`) e verificare che 392 mete
   si carichino correttamente (tutti e 8 i file nella catena `_meteAll`).
4. **Test utenti reali:** far usare il cruscotto a 2-3 studenti Ca' Foscari.

### Idee future (solo con trazione provata — vedi PROGETTO_ERASMUS.md)
- Fase post-selezione (checklist che cambia dopo l'assegnazione).
- PWA ("aggiungi a schermata home" + notifiche scadenze).
- Più dipartimenti, poi altre università.
- Account/login (lo "zaino" è già pronto per il passaggio).

---

## COME AGGIORNARE QUESTO FILE
Dopo ogni avanzamento: cambia la data in alto, aggiorna la tabella delle fasi
(sezione 2), lo stato contenuti (sezione 6) e i prossimi passi (sezione 8).
