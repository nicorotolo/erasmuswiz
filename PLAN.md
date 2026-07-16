# Plan: Ondata "PERCORSO" — ErasmusWiz pilot-ready

_Baseline operativa — Nicola + Codex, 2026-07-15._
_Sostituisce il piano “definitivo” della sessione 50 dopo la revisione strategica
da cofondatore. La direzione visiva resta scelta; priorità e scope diventano
modificabili sulla base di prove reali._

> **Precedenza documentale:** per il lavoro luglio-settembre 2026 questo file è
> l’ordine operativo principale e prevale sulle sequenze precedenti di
> `ROADMAP.md`, `DISEGNO_OPERATIONS.md` e dei vecchi piani PERCORSO quando sono
> in conflitto. `PROGETTO_ERASMUS.md` resta la bussola strategica. Da ottobre
> torna valida la roadmap di lungo periodo, da riallineare agli esiti del
> pilota di settembre.

## 1. Obiettivo vero entro settembre

Portare ErasmusWiz a una versione **pilot-ready**: non una collezione di
schermate che sembra un’app, ma un prodotto che uno studente reale di Sapienza
o Ca’ Foscari riesce a usare senza aiuto per:

1. capire se e come può candidarsi;
2. trovare e ordinare mete realmente accessibili;
3. capire qual è il prossimo passaggio burocratico;
4. costruire e modificare una bozza di Learning Agreement;
5. verificare sempre fonte e data delle informazioni importanti.

La forma resta un sito statico che **si comporta come una web app**. Non serve
un account per essere percepito come utile, rapido e curato.

La capacità disponibile dichiarata è circa **10 ore a settimana**, con una
sessione Claude/Codex per giorno lavorativo. Tra metà luglio e fine settembre
il budget realistico è circa 100-110 ore umane, oltre alla produzione dei
modelli. Il piano protegge quel budget: velocità di generazione del codice non
elimina il tempo necessario per dati, controllo, test e decisioni.

## 2. Che cosa significa “qualità”

La qualità di questa ondata si misura in quest’ordine:

1. **Comprensione:** lo studente capisce cosa fare senza spiegazioni di Nicola.
2. **Affidabilità:** ogni informazione critica ha fonte, stato e data di verifica.
3. **Completezza del compito:** i flussi principali non finiscono in vicoli ciechi.
4. **Velocità:** il sito risponde bene anche su telefono economico.
5. **Accessibilità:** tastiera, focus, lettori di schermo e movimento ridotto.
6. **Coerenza visiva:** il viaggio cartografico dà identità senza coprire il valore.
7. **Quantità di funzioni:** viene dopo tutto il resto.

Una funzione presente ma non verificata non aumenta la qualità. Un placeholder
evita una promessa falsa, ma non rende automaticamente utile una funzione.

## 3. La strategia di copertura: larghezza + profondità

L’obiettivo finale resta avere **Ca’ Foscari e Sapienza completi**. Per evitare
che “completo” significhi cose diverse a seconda della sessione, si fissano tre
livelli.

### Livello A — Meta pronta

Deve valere per tutte le mete presenti nei due atenei entro settembre. Ogni
meta possiede, oppure dichiara onestamente come non pubblicato/non trovato:

- ateneo e dipartimento/facoltà;
- università partner, città, Paese e codice Erasmus;
- area disciplinare, livello, posti e durata;
- requisito linguistico con stato verificabile;
- collegamento ufficiale disponibile;
- fonte e data dell’ultimo controllo.

Un dato non pubblicato non blocca il Livello A se viene mostrato esplicitamente
come tale. Non si inventa e non si nasconde l’assenza.

### Livello B — Meta arricchita

In aggiunta al Livello A:

- scadenze dell’ospitante;
- `linkCatalogo` alla pagina corsi per incoming/Erasmus, preferita al catalogo
  generale;
- `notaDisponibilita` quando la fonte distingue corsi, semestre o accesso agli
  studenti Erasmus;
- fonte e `verificataIl` dei dati.

Entro settembre il Livello B è obbligatorio per i due starter e cresce in
parallelo sulle altre mete. Non è realistico prometterlo per circa 2.000 mete
senza avere prima aggiornato la pipeline.

### Livello C — Corsi mappati

Comprende singoli corsi host, lingua, semestre, ECTS e disponibilità. È un
arricchimento progressivo, non un prerequisito del sito di settembre e non una
promessa per tutte le mete.

### I due starter

- **Sapienza Giurisprudenza** — starter obbligatorio: ground truth di Bruno,
  55 mete, validatore disponibile.
- **Ca’ Foscari Economia** — starter predefinito: dataset maturo e dimensione
  gestibile. Può essere sostituito **solo in R0** se Nicola dispone di tester
  reali più accessibili in un altro dipartimento Ca’ Foscari. Dopo R0 non si
  cambia più starter durante l’ondata.

L’architettura e i flussi devono funzionare per entrambi gli atenei da subito;
la maggiore profondità dei dati parte dai due starter.

## 4. Priorità esplicite

### MUST — obbligatorio per dichiarare settembre “pilot-ready”

- Livello A per tutte le mete dei due atenei.
- Navigazione Mete · Home · Percorso e zaino separato per ateneo.
- Ingresso, onboarding e Home essenziale.
- Mete e Percorso completi nei compiti principali.
- LA Workspace v0 funzionante, testato sul caso Bruno.
- Livello B per i due starter.
- Test con utenti reali dei due atenei.
- QA mobile/desktop, accessibilità di base, fonti e prestazioni.
- Completamento delle attività SEO già avviate e Search Console.

### SHOULD — si fa se i MUST sono stabili

- Calendario mensile ricco nella Home.
- Check-in settimanale autonomo.
- Stazione città con checklist universale e link ufficiali.
- Animazioni cartografiche più elaborate del minimo previsto.
- Livello B esteso oltre i due starter.
- Export aggiuntivi oltre stampa/PDF e testo ordinato.

### LATER — ottobre-dicembre o dopo validazione

- Cataloghi di singoli corsi per tutte le mete.
- Matching automatico L3 casa↔host.
- Notifiche push e rifinitura PWA completa.
- Account, backend, sincronizzazione fra dispositivi.
- Tema notte, app nativa, monetizzazione.
- Contenuti editoriali per ogni città.

**Regola sostitutiva della vecchia D15:** se il tempo stringe, si proteggono i
MUST e si rinviano SHOULD/LATER. La scadenza slitta solo quando un MUST richiede
più tempo per essere affidabile, non per conservare tutto lo scope.

## 5. Percorso utente

### 5.1 Ingresso — promessa concreta dentro una scena emozionale

La direzione resta **“Notte cartografica in versione giorno”**:

- sito in solo tema chiaro;
- scena d’ingresso a inchiostro profondo con rotte d’oro;
- card-copertina scure usate con parsimonia;
- Wiz come segno grafico lineare, non come render 3D dominante.

La mappa è la veste, non la promessa. Il primo messaggio deve rendere visibile
la missione, per esempio:

> Capisci il bando, scegli mete davvero accessibili e non perdere i passaggi
> importanti.

CTA principale: **“Inizia il tuo percorso”**.

- Mobile: scena pulita, zero pin nel primo viewport, massimo 4-6 rotte lente,
  `prefers-reduced-motion` e Page Visibility.
- Desktop: mappa interattiva solo se non rallenta il valore principale; pin
  accessibili, salto all’elenco, controparte testuale completa e focus gestito.
- Il contenuto SEO resta nel DOM statico completo e leggibile dai motori.

### 5.2 Onboarding — personalizzazione, non finta iscrizione

Titolo e microcopy parlano di **“Personalizza il tuo percorso”**, non di
iscrizione. Tre passi:

1. Ateneo.
2. Corso/dipartimento + livello.
3. Lingue e livello CEFR, saltabile.

Messaggio sempre visibile:

> I dati restano su questo dispositivo. Se cancelli i dati del browser o cambi
> dispositivo, il percorso non viene recuperato.

Niente account, bottoni social finti o promesse di sincronizzazione. Le lingue
derivano dai dati delle mete, mai da una lista hardcoded.

### 5.3 Home — una risposta a “che cosa devo fare adesso?”

La Home non è una bacheca di sette moduli equivalenti. Ordine:

1. **Prossima mossa** — azione principale + prossima scadenza verificata.
2. **Questa settimana** — massimo 2-3 azioni pertinenti.
3. **Il tuo progresso** — linea Scegli la meta → Candidati → Parti.
4. **Le tue rotte** — preferite e accesso rapido alle mete.

“Sei in linea?” viene integrato nella prima o seconda card, con linguaggio
prudente: “in ritardo” solo per una voce azionabile non spuntata oltre la sua
scadenza. Mai giudizi generici sulla performance dello studente.

Calendario mensile e check-in sono secondo livello/SHOULD. Senza ciclo di bando
pubblicato e verificato, non si simula un planner vivo: si mostra l’ultimo
controllo con link ufficiale e stato neutro.

### 5.4 Mete — prima orientamento, poi strumento

Prima visita senza rotte:

- “Hai già in mente le tue destinazioni?”
- Sì → cerca e ordina fino a 5 mete.
- No → esplora mappa, affinità e filtri.
- Sempre saltabile; rilanciabile con “Ripensa le rotte”.

Dopo la prima visita, Mete diventa uno strumento stabile: ricerca, filtri,
elenco e mappa sincronizzati. La logica di compatibilità resta invariata finché
non esiste una decisione separata e motivata.

L’interfaccia distingue chiaramente:

- requisito verificato;
- requisito non pubblicato;
- dato non ancora controllato;
- dato potenzialmente scaduto.

### 5.5 Percorso — itinerario burocratico unico

Un’unica schermata verticale:

1. Prepara la candidatura.
2. Candidatura e scadenze.
3. Gate auto-dichiarato “Hai indicato di essere stato selezionato”.
4. Learning Agreement / LA Workspace.
5. Parti: prima, durante, dopo.
6. Preparati alla città — solo se i MUST sono già stabili.

La linea di viaggio racconta il progresso, non sostituisce la navigazione.
Una sola tappa è corrente: la prima non completata secondo regole
deterministiche e dati disponibili.

### 5.6 Navigazione

- Mobile: bottom nav Mete · Home · Percorso, target ≥44 px e `aria-current`.
- Desktop: barra alta con le stesse tre voci.
- Drawer: Profilo, Cambia ateneo, Guide, Come funziona.
- Escape, focus e ritorno al controllo di apertura obbligatori.

Gli hash attuali importanti restano alias durante la migrazione. Non si promette
“per sempre”: si documentano gli alias realmente supportati e li si testa.

## 6. LA Workspace v0 — il punto qualitativo corretto

La vecchia decisione “Generator completo subito” è sostituita da:

> Costruire entro settembre un LA Workspace manual-first, realmente utile e
> modificabile, profondo sui due starter e utilizzabile onestamente anche dove
> i cataloghi non sono ancora mappati.

### 6.1 Perché cambia

Il caso Bruno mostra che il problema non è solo creare la prima bozza:

- 6 corsi su 8 non erano disponibili;
- la lingua reale poteva divergere dal catalogo;
- l’ospitante poteva richiedere cambi;
- esistevano conflitti d’orario;
- il riconoscimento continuava dopo il rientro.

Il prodotto deve gestire un piano instabile, non soltanto stampare una tabella.

### 6.2 Dati della prima versione

Non si assume più che “i corsi di casa esistono già”: oggi non esistono in
forma strutturata. Lo studente può inserire manualmente:

**Esame di casa**
- nome;
- codice facoltativo;
- CFU;
- stato/nota facoltativa.

**Corso host**
- nome;
- ECTS;
- lingua;
- semestre;
- link ufficiale;
- stato: da verificare / disponibile / non disponibile / sostituito;
- data dell’ultima verifica.

Dove esistono dati verificati della pipeline, l’app li propone senza impedire
l’inserimento manuale. Dove mancano, mostra `linkCatalogo` se disponibile e
spiega onestamente che la selezione va inserita a mano.

### 6.3 Funzioni MUST

- Bozze separate per ateneo e meta.
- Raggruppamento molti-a-molti fra corsi host ed esami di casa.
- Totali ECTS e CFU sempre visibili.
- Segnalazione prudente delle soglie, mai approvazione automatica.
- Versioni della bozza con timestamp.
- Sostituzione di un corso senza perdere la versione precedente.
- Motivo della modifica: non disponibile, lingua, richiesta ospitante,
  conflitto orario, scelta personale, altro.
- Checklist pre-invio: link aperti e ECTS confrontati con la fonte.
- Export stampabile/PDF e testo ordinato da inviare al RAM/docente.
- Microcopy costante: “bozza di lavoro; il LA ufficiale resta nel sistema
  dell’ateneo/OLA-EWP”.

Niente codici corso host obbligatori: nel LA reale di Bruno erano “000”.

### 6.4 Persistenza

Nuovo ramo additivo nello zaino per-ateneo:

```text
la: {
  bozzePerMeta: {
    [metaId]: {
      versioneCorrente,
      versioni: [...],
      aggiornatoIl
    }
  }
}
```

Lo schema dettagliato viene definito prima dell’UI. Gli zaini senza `la`
valgono “nessuna bozza”; nessuna perdita dei dati precedenti.

### 6.5 Gate di pubblicazione

- Il Workspace può essere usato manualmente da tutti.
- L’esperienza arricchita da dati/cataloghi viene dichiarata solo per le mete
  realmente coperte.
- Prima della visibilità pubblica completa: test sul LA e Change Form di Bruno
  + almeno un secondo scenario sintetico con corsi cambiati.
- Nessun contatore “LA generato” viene considerato prova di valore finché non
  sappiamo se la bozza è stata effettivamente utilizzata.

## 7. Piano di esecuzione R0→R6

Le stime sono intervalli, non promesse. Una fase può richiedere più sessioni.
Ogni fase si chiude con un risultato verificabile prima di iniziare la
successiva.

### R0 — Verità, dati e confini (2-3 sessioni, 6-10 ore)

1. Confermare starter Ca’ Foscari in base ai tester disponibili; default
   Economia.
2. Inviare la mail all’ufficio Erasmus come conferma della prassi del prospetto.
3. Intervista breve a Bruno su:
   - come ha trovato i corsi;
   - quando e come ha scoperto che non erano disponibili;
   - lingua, orari e sostituzioni;
   - Transcript e riconoscimento appena disponibili.
4. Eseguire G5 della pipeline:
   - `linkCatalogo`;
   - `notaDisponibilita`;
   - fonte e `verificataIl`;
   - controllo dei link;
   - aggiornamento del contratto batch.
5. Misurare il Livello A attuale per entrambi gli atenei e produrre l’elenco
   dei gap, senza confonderlo col Livello B/C.
6. Definire lo schema `la` e il formato dei dati che la pipeline potrà proporre.

**Gate R0:** starter confermati, contratto dati scritto, gap misurati, nessuna
assunzione falsa sui corsi disponibili.

### R1 — Fondamenta e velocità (3-5 sessioni, 12-18 ore)

1. Token solo-giorno e rimozione del toggle tema notte. **[fatto, sessione 52
   del 15/07: `body.tema-notte`, regole notte della mappa, toggle e `initTema()`
   rimossi; `--night-*` restano come superfici a inchiostro del tema giorno]**
2. Drawer (Profilo, Cambia ateneo, Guide, Come funziona). **[fatto, sessione 53
   del 15/07: aperto da "☰ Altro" (4ª voce della nav), chiusura ✕/Escape/velo,
   focus trappolato e restituito al controllo di apertura. "Cambia ateneo" è
   una SCORCIATOIA alla tendina del Profilo — decisione di Nicola: il cambio
   ateneo vero, con zaino separato, resta tutto nel punto 3 qui sotto]**
   **Decisione di Nicola
   15/07: la nav a tre voci Mete·Home·Percorso si implementa a FINE R1 insieme
   a R3**, perché la schermata Percorso unificata nasce in R3 e una voce
   "Percorso" puntata all'attuale Candidatura sarebbe una nav definitiva su un
   contenuto provvisorio. Conseguenza accettata: la parte "navigazione stabile"
   del Gate R1 si chiude solo con R3.
3. Migrazione zaino per-ateneo:
   - contenitore con ateneo attivo e zaini separati;
   - legacy assegnato automaticamente solo con corrispondenza univoca;
   - ogni ambiguità chiede allo studente;
   - nessuna perdita in cambio ateneo.
   **[fatto, sessione 54 del 15/07: contenitore `{ v:2, zaini:{…} }` in
   `erasmuswiz-zaino`; l'ateneo attivo resta in `erasmuswiz_ateneo` (una sola
   fonte di verità, letta da index.html prima di app.js). **Decisione di Nicola
   15/07: lo zaino legacy si SPACCA per evidenza**, non va intero a un ateneo —
   gli id delle mete non si sovrappongono (392 CF vs 1595 Sapienza, zero
   collisioni), i dipartimenti nemmeno, checklist/requisiti sono prefissati:
   quindi anche uno zaino contaminato dal bug si ricompone senza perdite. Il
   profilo e i tre scalari (fase, onboardingFatto, zainoCelebrato) seguono
   l'ateneo del dipartimento; si chiede allo studente SOLO se il profilo non è
   attribuibile E c'è contenuto di due atenei. Alternativa scartata: assegnare
   tutto a un ateneo solo (avrebbe lasciato le stelline dell'altro come id
   morti = perdita silenziosa, contro il quarto trattino).]**
4. Contratto hash e funzione unica di navigazione/history. **[fatto, sessione 55
   del 15/07: `vaiA()` è l'unica porta di navigazione; il contratto (`TAB_VALIDI`,
   `TAB_PREDEFINITO`, `ALIAS_HASH`) è dichiarato in cima alla sezione e non più
   sepolto dentro `initNav()`. Sanato il bug per cui 6 punti su 10 cambiavano tab
   SENZA toccare l'hash (l'URL diceva `#oggi` mentre eri sulle mete).
   **Decisione di Nicola 15/07 (a) tasto Indietro**: la navigazione voluta dallo
   studente fa `pushState`, quindi Indietro torna al tab precedente — ma solo se
   il tab cambia davvero, così ri-cliccare il tab attivo non sporca la cronologia.
   Conseguenza accettata: dopo 5 tab servono 5 Indietro per uscire dal sito.
   **Decisione di Nicola 15/07 (b) alias**: si dichiara SOLO `#timeline`→`checklist`,
   l'unico con prova reale (era un hash supportato fino a OP2, che ha rimosso la
   pagina Timeline fondendola in scadenze+checklist). Scartati `#percorso` e
   `#candidatura`: sono etichette della nav, hash non lo sono mai stati —
   sarebbero alias inventati, e i nomi veri arrivano con la nav di R3.]**
5. ~~Caricamento dati progressivo~~ ✅ **FATTO (R1.5, sessione 56)** — per
   ATENEO. Si carica solo l'ateneo attivo: **903 KB invece di 2.263 per uno
   studente Ca' Foscari (-60%), 1.565 KB per uno Sapienza (-31%)**. Elenco file
   dichiarato in `js/atenei/registro.js`, decisione in `js/carica-atenei.js`;
   `index.html` non elenca piu' i file a mano. Chi arriva per la prima volta
   paga 903 KB prima di dire dove studia.
   **Per DIPARTIMENTO: NON si fa, e non e' un rinvio pigro.** Misurato il 15/07:
   alla Sapienza **42 aree disciplinari su 101 vivono in piu' file** (una in 7),
   e il tab Mete filtra per AREA (`app.js`, `filter(m => m.areeDisciplinari...)`).
   Caricare il solo file del dipartimento dello studente gli nasconderebbe in
   silenzio mete che gli spettano — la perdita che R1.3 esiste per impedire.
   Servirebbe un indice area→file o un rilayout dei dati per area: e' una
   decisione di `DISEGNO_PIPELINE_DATI.md`, non una modifica all'app.
   **Vincolo scoperto e protetto:** `migraZainoLegacy` (R1.3) attribuisce le
   chiavi leggendo gli id delle mete di TUTTI gli atenei. Quando c'e' una
   migrazione da fare si caricano tutti, una volta sola; e app.js si rifiuta di
   migrare con mezzi dati in memoria (`rinviaMigrazioneERicarica`), cosi' il
   caso non previsto costa un riavvio, mai un dato.
6. ~~Regola deterministica della tappa corrente~~ ✅ **FATTO (R1.6, sessione 58
   del 16/07)** — `tappaCorrente()` in `js/app.js` è l'unica funzione che decide
   la tappa, con contratto dichiarato in testa: priorità selezione dichiarata →
   stato bando per data → prima tappa non completata (requisiti→mete→
   candidatura) → "esiti" a viaggio completo; fallback "mete" quando l'ateneo
   non pubblica né requisiti né checklist. Casi limite dichiarati nel contratto
   (zaino legacy/vuoto, dati mancanti, scadenze senza flag chiusura). Stepper e
   missione derivano da lei; sanato il caso in cui a viaggio completo NESSUNA
   fase risultava attiva. Banco di prova: 11 scenari deterministici, tutti
   verdi; QA browser su entrambi gli atenei.

**Gate R1:** cambio ateneo sicuro, navigazione stabile, primo avvio misurato su
telefono e regressione dei dati esistenti. La voce "navigazione stabile" è
**CHIUSA con R3** (sessione 59 del 16/07: nav a 3 voci Mete·Home·Percorso).
**Primo avvio misurato ✅ (15/07):** 7 secondi su Galaxy S21 in 4G, scheda in
incognito, PRIMA di R1.5. La misura del 3/7 (3 secondi) era falsa: GitHub Pages
serviva il sito del 3 luglio, meta' del JS e senza motore mappa (vedi
`STATO_DEL_SITO.md`). **Da rifare dopo la pubblicazione di R1.5** per avere il
numero del "dopo".

### R2 — Ingresso, onboarding e Home essenziale (3-4 sessioni, 10-16 ore)

1. ~~Scena cartografica~~ ✅ **FATTO (sessione 59 del 16/07)** — **decisione
   di Nicola 16/07: scena CON CTA "Inizia il tuo percorso"** (§5.1 alla
   lettera; alternativa "senza CTA" scartata). Primo contatto = scena a
   inchiostro profondo (`.modo-scena` su #home-benvenuto): missione in
   chiaro ("Capisci il bando, scegli mete davvero accessibili e non perdere
   i passaggi importanti"), mappa notte SENZA pin, 6 rotte d'oro lente
   (curve dalle due città-ateneo a città geocodificate NEI DATI, mai
   coordinate inventate nel codice), CTA. Al clic parte il flusso a 3
   domande esistente (focus sulla prima scelta). `prefers-reduced-motion`
   ferma le rotte (regola globale); Page Visibility le mette in pausa.
   Chi rientra dal cambio ateneo salta la scena (stava già rispondendo).
   H1, title e description INVARIATI (vincolo §10.8). ⚠️ Implementata e
   verificata staticamente; il QA browser della scena è il primo atto
   della prossima verifica (strumento JS indisponibile a fine sessione).
2. ~~Onboarding “Personalizza il tuo percorso”~~ ✅ **FATTO (sessione 58 del
   16/07)** — kicker "Personalizza il tuo percorso" sopra i passi, messaggio
   sempre visibile "I dati restano su questo dispositivo…", passo 3 nuovo
   "Le tue lingue" (CEFR, saltabile con "Salta per ora"); facoltà+livello
   restano il passo 2. Il form Profilo si riallinea subito dopo l'onboarding.
3. ~~Lingue derivate dai dati~~ ✅ **FATTO (sessione 58)** — `lingueDaiDati()`
   legge `requisitoLingua` dalle mete dell'ateneo attivo (30 lingue CF, 39
   Sapienza), ordina per frequenza; rimosse le 4 opzioni hardcoded da
   `index.html`; una lingua salvata che sparisse dai dati resta selezionabile
   (`assicuraOpzioneLingua`).
4. ~~Home a quattro moduli, non sette~~ ✅ **FATTO (sessione 58)** — ordine
   §5.3: 1 "La tua prossima mossa" (ex missione, col countdown DENTRO la
   card), 2 "Questa settimana" (nuovo: max 3 azioni dalla checklist attiva,
   ordinate per scadenza; con selezione dichiarata usa la checklist di
   partenza; SI NASCONDE senza ciclo su cui agire — niente planner simulato),
   3 "Il tuo progresso" (stepper R1.6 + barra preparazione nello stesso
   modulo), 4 "Le tue rotte" (mappa compatta + preferite). "Sei in linea?"
   integrato prudente: item "In ritardo" SOLO per una voce azionabile oltre
   la sua scadenza e SOLO a bando aperto. Griglia desktop riallineata.
5. ~~Stati del bando a quattro valori~~ ✅ **FATTO (sessione 58)** —
   `statoBando()` con contratto dichiarato: aperto / chiuso-ciclo-attivo /
   dati-scaduti / non-pubblicato, deciso SOLO da dati+data (`fineCiclo` nuovo
   campo di SCADENZE_INFO, dal testo dei bandi). Badge Home a 4 stati (oro solo
   per "aperto"). Banco di prova: 8 scenari verdi.
6. ~~Fonte raggiungibile e `verificataIl` per ogni scadenza mostrata~~ ✅
   **FATTO (sessione 58)** — riga fonte in testa alla vista Candidatura:
   "Dati verificati il {dataVerificaDati}. Fa sempre fede la fonte ufficiale ↗"
   (link `BANDO_INFO.linkUfficiale`), con avviso esplicito negli stati
   dati-scaduti / non-pubblicato.
7. Invarianti SEO della home verificati sul DOM statico completo.

**Gate R2:** in 10 secondi un utente capisce che cosa fa ErasmusWiz e qual è
la prossima azione disponibile.

### R3 — Mete e Percorso (4-5 sessioni, 14-20 ore)

1. ~~Wizard prima visita + rilancio~~ ✅ **FATTO (sessione 59 del 16/07)** —
   "Hai già in mente le tue destinazioni?" nel tab Mete, solo senza rotte
   salvate e finché senza risposta (`ZAINO.wizardMete`, additivo con
   fallback). Sì → focus sulla ricerca; No → scroll alla mappa/filtri;
   "Salta per ora" sempre presente. Rilancio con "✨ Ripensa le rotte"
   nella testa della schedina (forza la comparsa anche con rotte salvate).
2. ~~Mappa e lista sincronizzate~~ ✅ **FATTO (sessione 59)** — mappa nel tab
   Mete (`#card-mappa-mete`), stesso motore delle altre (SVG costruito una
   volta, si ridisegnano solo i pin). Riceve ESATTAMENTE l'elenco filtrato
   di renderMete (una sola fonte: ricerca+filtri), stelline delle preferite
   comprese; nota di copertura onesta per le mete fuori mappa.
3. ~~Rotte preferite ordinate, massimo 5~~ ✅ **verificato (sessione 59)** —
   già implementate da BR4 (schedina): max 5 con messaggio, riordino ▲▼,
   ordine persistito. QA rifatto dopo R3: verde.
4. ~~Percorso unico a stazioni~~ ✅ **FATTO (sessione 59)** — tab `#percorso`
   (nuovo hash nel contratto; #checklist, #idoneita e #timeline alias
   permanenti). Cinque stazioni (§5.5): 1 Prepara la candidatura (ex
   Idoneità), 2 Candidatura e scadenze, 3 gate auto-dichiarato dell'esito
   (i due bottoni di fase, con microcopy onesto sulle graduatorie),
   4 Learning Agreement (guida; il Workspace arriva con R4, nessuna
   promessa in UI), 5 Parti: lo zaino. Stati fatto/attivo/futuro derivati
   da tappaCorrente() (R1.6); stazione corrente aperta, le altre chiuse
   (`<details>`); "ponte" verso Mete quando la tappa corrente è "mete".
   **Nav a 3 voci Mete·Home·Percorso** (Home centrale su mobile, "Altro"
   apre il drawer): il gate R1 "navigazione stabile" È CHIUSO.
5. ~~Ramo selezionato isolato~~ ✅ **FATTO (sessione 59)** — la checklist di
   partenza scrive nel SUO contenitore (`#lista-checklist-post`, stazione 5)
   e si renderizza sempre insieme a quella di candidatura, ciascuna nella
   propria stazione. Niente più contenitore condiviso commutato dalla fase.
6. ~~Export `.ics` esistente preservato~~ ✅ **verificato (sessione 59)** —
   codice intatto; bottone presente per le scadenze future (simulata in
   memoria), assente per le passate (comportamento voluto).
7. ~~Prestazioni col dataset completo~~ ✅ **FATTO (sessione 59)** — render
   a LOTTI da 80 card ("Mostra altre N — ne restano M", nessuna meta
   nascosta in silenzio: conteggio e mappa restano sull'elenco completo).
   Misure post-lotti: renderMete Sapienza senza profilo (1.595 mete) 6 ms,
   filtrato 7 ms, Ca' Foscari 4 ms — budget 250 ms rispettato con margine.

**Gate R3:** i due starter completano i flussi Mete e Percorso senza aiuto.
QA interno superato (sessione 59, entrambi gli atenei, 390/768/1280,
console pulita); la parte "senza aiuto" si prova coi tester in R5.

### R4 — LA Workspace v0 (6-9 sessioni, 25-40 ore)

1. Schema e migrazione additiva.
2. Inserimento manuale casa/host.
3. Proposte dai dati solo dove verificate.
4. Gruppi molti-a-molti e totali.
5. Versioni, sostituzioni e motivazioni.
6. Link/fonti e checklist pre-invio.
7. Export stampa/PDF + testo ordinato.
8. Test sul caso Bruno:
   - prima bozza;
   - 6/8 corsi non disponibili;
   - lingua diversa;
   - richiesta host;
   - conflitto orario;
   - versione modificata.

**Gate R4:** il caso Bruno può essere ricostruito senza perdere informazioni e
senza presentare la bozza come ufficiale.

### R5 — Test utenti e decisioni (2-3 sessioni + disponibilità tester)

Test minimo:

- Bruno + almeno 2 studenti Sapienza;
- almeno 3 studenti dello starter Ca’ Foscari, se reperibili;
- telefono reale prima del desktop.

Compiti osservati senza aiutare:

1. Capisci se puoi ancora candidarti?
2. Trova e salva tre mete compatibili.
3. Dimmi qual è il prossimo passaggio.
4. Crea una bozza LA con un corso che poi diventa non disponibile.
5. Trova la fonte di una scadenza o di un requisito linguistico.

Correzioni immediate solo per:

- blocchi di comprensione;
- errori o ambiguità reputazionali;
- perdita dati;
- accessibilità;
- prestazioni che impediscono il compito.

Le nuove idee entrano nel backlog, non automaticamente nello scope.

**Gate R5:** nessun blocco critico nei cinque compiti; feedback separato per
ateneo e per tipo di utente.

### R6 — Completezza, SEO, QA e chiusura (3-5 sessioni, 15-25 ore)

1. Livello A verificato per tutte le mete dei due atenei.
2. Livello B verificato per i due starter.
3. Racconto SEO del caso Bruno, anonimizzato e approvato da lui.
4. Search Console e controllo SEO/Lighthouse.
5. Asset pubblici allineati alla direzione giorno: OG, manifest, favicon.
6. Service worker: shell offline esplicita e cache bump; niente notifiche push
   in questa fase.
7. Regressione completa:
   - entrambi gli atenei;
   - mobile 375 + desktop;
   - localStorage pulito e legacy;
   - cambio ateneo;
   - hash supportati;
   - tastiera/focus/reduced motion;
   - bando nei quattro stati;
   - date Europe/Rome, Capodanno e ora legale;
   - Workspace con/senza dati e con versioni separate;
   - primo avvio, offline e upgrade cache.

Chiusura a due stati:

- **implementata:** QA interno superato;
- **validata:** test utenti superato.

Non usare “completa” se manca uno dei due.

## 8. Cantiere dati parallelo

Il lavoro sui dati non aspetta R6. Dopo R0 procede in parallelo senza
modificare manualmente i grandi file mete:

1. setup delle Facoltà Sapienza ancora in seed;
2. completamento Livello A con stato esplicito dei campi mancanti;
3. Livello B prima sui due starter;
4. propagazione per codice Erasmus quando affidabile;
5. campione umano: Nicola + Bruno per Giurisprudenza;
6. da novembre, aggiornamento bando e scadenze 2027/28.

La pipeline è fornitore del prodotto, non una promessa invisibile. Il piano
misura copertura A/B/C separatamente.

## 9. Checkpoint e regole di correzione

Il brand non viene ridiscusso a ogni sessione. Le priorità possono cambiare
quando una prova reale contraddice il piano.

### 31 luglio

- R0 chiusa;
- starter confermati;
- gap A/B/C misurati;
- decisione tecnica sul caricamento progressivo.

### 14 agosto

- R1 chiusa o con blocchi dichiarati;
- se migrazione e prestazioni non sono stabili, nessun ampliamento UI.

### 31 agosto

- R2+R3 utilizzabili sui due starter;
- se il core non è testabile, si rinviano tutti gli SHOULD.

### 15 settembre

- LA Workspace ricostruisce il caso Bruno;
- se non ci riesce, si riduce l’export o la rifinitura, non versioni e fonti.

### 30 settembre

- QA + test utenti;
- classificazione implementata/validata;
- decisione ottobre-dicembre basata sui risultati.

Ogni checkpoint risponde a tre domande:

1. Che cosa è stato provato da un utente o da un test ripetibile?
2. Quale assunzione si è rivelata falsa?
3. Che cosa esce dallo scope per proteggere i MUST?

## 10. Vincoli ingegneristici trasversali

1. Codice separato dai dati (`js/dati-*.js`, `js/atenei/**`).
2. Zaino unico come contenitore, ma dati separati per ateneo.
3. AI fuori dal runtime.
4. Stack statico HTML/CSS/JS, senza framework, backend o build obbligatorio.
5. Ogni informazione critica: fonte HTTPS pubblica ufficiale + data/stato.
   Vietati link pubblici verso `fonti/`.
6. Unica funzione per interpretare le date del bando come orari civili
   `Europe/Rome`; vietato il parsing diretto incoerente nei moduli planner.
7. Campi dati resi con API sicure (`textContent`/elementi), non HTML arbitrario.
8. URL, canonical e contenuti indicizzati cambiano solo con decisione SEO
   esplicita, mai come effetto collaterale di un redesign.
9. GoatCounter su tutte le pagine, nessun dato personale negli eventi.
10. Ogni blocco: mini-QA mobile+desktop, entrambi gli atenei, `node --check`
    sui JS toccati.
11. Git solo tramite workflow `.bat` previsto dal progetto.
12. I dati personali di Bruno restano in `fonti/caso-bruno/`, mai su GitHub.

## 11. Decisioni aggiornate

- **Confermata:** direzione giorno cartografica.
- **Confermata:** niente account.
- **Modificata:** “iscrizione” → personalizzazione locale onesta.
- **Confermata:** nav Mete · Home · Percorso.
- **Confermata:** mappa mobile decorativa e pulita; interattività progressiva.
- **Modificata:** Home da sette moduli equivalenti a quattro livelli principali.
- **Modificata:** Generator completo → LA Workspace v0 manual-first, versionato.
- **Confermata:** esperienza arricchita solo dove i dati sono verificati.
- **Confermata:** città senza editoriale per-meta; ora è SHOULD.
- **Confermata:** linea di viaggio = progresso, non navigazione.
- **Superata:** “nessun sacrificabile”. Ora valgono MUST/SHOULD/LATER.
- **Superata:** “ultima pianificazione fino a settembre”. Ora esistono
  checkpoint basati su prove, senza riaprire il brand per gusto personale.
- **Confermata:** un solo `PLAN.md` operativo per luglio-settembre.

## 12. Rischi principali

1. **Copertura dati confusa con qualità:** mitigazione A/B/C separati.
2. **Workspace troppo grande:** proteggere manuale, versioni, fonti e test;
   rinviare export secondari e automazioni.
3. **Nessun tester Ca’ Foscari:** entro R0 cambiare starter una sola volta in
   favore del dipartimento con accesso reale agli studenti.
4. **Bando 2027/28 non ancora pubblicato:** planner onesto e neutro; niente
   date simulate.
5. **Dati locali persi:** messaggio esplicito e migrazione prudente; sync solo
   dopo validazione.
6. **Scene e mappa rallentano il primo avvio:** caricamento progressivo e
   animazione ridotta prima della rifinitura.
7. **Terzo rebrand in poco tempo:** asset pubblici riallineati una volta in R6;
   niente ulteriori esplorazioni visive durante l’ondata.
8. **Documenti precedenti in conflitto:** questo file prevale fino a settembre;
   ROADMAP e disegni si riallineano dopo la validazione.

## 13. Fuori scope fino alla validazione

- account, backend, database e sync multi-dispositivo;
- app nativa;
- matching automatico L3;
- cataloghi corso-per-corso per tutte le mete;
- notifiche push prima dell’audit ottobre;
- contenuti editoriali per ogni città;
- tema notte;
- monetizzazione e partnership;
- nuovo logo definitivo o render 3D della mascotte;
- modifiche non necessarie al motore di compatibilità.

## 14. Regola di delega

Ogni modello esecutore legge `PLAN.md` e `STATO_DEL_SITO.md`, implementa solo
la fase assegnata e chiude il relativo gate. Non anticipa la fase successiva
perché “avanza tempo”.

Se scopre che un’assunzione del piano è falsa:

1. si ferma sulla parte coinvolta;
2. porta prova concreta a Nicola;
3. propone l’impatto su MUST/SHOULD/LATER;
4. non decide da solo un ampliamento di scope.

Il piano non è un contratto per difendere decisioni passate: è uno strumento
per arrivare al prodotto migliore verificabile entro il tempo disponibile.
