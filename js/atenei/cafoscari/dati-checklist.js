// ============================================================
// CHECKLIST DELLA DOMANDA — "cosa fare e quando"
// ------------------------------------------------------------
// I passi da spuntare durante la candidatura Erasmus.
// Lo STATO delle spunte (fatto / da fare) NON sta qui: viene
// salvato nello "zaino unico" in localStorage. Qui c'è solo
// l'ELENCO dei passi (i dati), separato dal codice.
//
// ✅ PASSI REALI, validati sul bando ufficiale 2026/2027
//    (PDF in /fonti, riferimenti agli articoli del bando).
//
// Ogni voce ha:
//  - id:          identificatore unico e STABILE (non cambiarlo: è la
//                 chiave con cui si ricorda se la voce è spuntata)
//  - scadenzaId:  a quale tappa (SCADENZE_*) è collegata la voce
//  - testo:       cosa deve fare lo studente (titolo della voce)
//  - spiegazione: la frase umana ("cosa significa") — traduttore §6
//  - azione:      cosa fare in concreto
//  - citazione:   testo LETTERALE del bando ("cosa dice il bando")
//  - fonte:       articolo/comma + riferimento al PDF ufficiale
// I campi del traduttore sono opzionali: se mancano, la voce mostra
// solo il testo (retrocompatibile).
// ============================================================

var CHECKLIST = [
  {
    id: "chk-requisiti", scadenzaId: "cf-chiusura",
    testo: "Verificare di avere i requisiti: iscrizione attiva e CFU minimi verbalizzati nel libretto (6/24/42 per la triennale, 6/24 per la magistrale) entro le 23:59 del 25/02/2026.",
    spiegazione: "Prima di tutto controlla di poter partecipare: iscrizione a Ca' Foscari nel 2025/2026 in regola e i CFU minimi già registrati sul libretto.",
    azione: "Apri il libretto, conta i CFU registrati e controlla che l'iscrizione sia a posto.",
    citazione: "Al fine dell'ammissione alla selezione, le iscritte e gli iscritti ad un Corso di Laurea dovranno aver registrato nel proprio libretto telematico, entro le ore 23:59 del 25 febbraio 2026: a) almeno 6 CFU… b) almeno 24 CFU… c) almeno 42 CFU…",
    fonte: "Art. 2, c. 1–2 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-mete", scadenzaId: "cf-chiusura",
    testo: "Studiare le destinazioni su unive.it/erasmus-studio: area disciplinare, offerta formativa, requisiti linguistici e restrizioni di ogni meta.",
    spiegazione: "Usa il tempo prima dell'apertura per studiarti le destinazioni con calma: ogni meta ha aree, requisiti e limiti diversi. Lo consiglia il bando stesso.",
    azione: "Sfoglia le mete su unive.it/erasmus-studio e segna quelle adatte al tuo corso.",
    citazione: "Il tempo che intercorre tra la pubblicazione del bando e il 2 febbraio andrà impiegato per studiare le caratteristiche delle destinazioni e le diverse restrizioni.",
    fonte: "Art. 7, c. 1 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-pdf", scadenzaId: "cf-chiusura",
    testo: "Leggere le schede delle mete scelte (scadenze dell'ateneo ospitante e prerequisiti) e sceglierne fino a 5 in ordine di priorità.",
    spiegazione: "Puoi scegliere fino a 5 destinazioni, in ordine dalla preferita all'ultima (anche meno di 5). Leggi bene le schede: ognuna ha scadenze e requisiti suoi.",
    azione: "Scegli fino a 5 mete e mettile in ordine di preferenza prima di compilare la domanda.",
    citazione: "All'interno della candidatura si potranno indicare fino a un massimo di 5 destinazioni, elencate in ordine di priorità. Chi non fosse interessato a 5 destinazioni potrà indicarne un numero inferiore.",
    fonte: "Art. 7, c. 4 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-lingua", scadenzaId: "cf-chiusura",
    testo: "Verificare il livello di lingua richiesto da ogni destinazione (l'eventuale prova si presenta solo dopo la selezione).",
    spiegazione: "Ti serve il livello di lingua richiesto dall'università estera. Per candidarti non carichi certificati: se serve, la prova arriva solo dopo la selezione.",
    azione: "Controlla il livello richiesto nella scheda di ogni meta che ti interessa.",
    citazione: "Le candidate e i candidati dovranno essere in possesso di un livello di conoscenza della lingua veicolare… Le studentesse e gli studenti selezionati dovranno presentare eventuale prova del livello linguistico solamente in fase successiva alla selezione…",
    fonte: "Art. 2, c. 9 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-verbalizzati", scadenzaId: "cf-chiusura",
    testo: "Controllare che tutti gli esami sostenuti risultino verbalizzati nel libretto: niente autocertificazioni, contattare Campus e docenti se manca qualcosa.",
    spiegazione: "Contano solo gli esami già registrati sul libretto entro il 25/02/2026. Le autocertificazioni non valgono: se hai dato un esame ma il voto non è ancora sul libretto, sistemalo per tempo.",
    azione: "Se un voto non compare sul libretto, scrivi subito al Campus e al docente per farlo registrare entro il 25/02.",
    citazione: "In nessun caso verranno accettate autocertificazioni per esami non ancora verbalizzati entro le ore 23:59 del 25 febbraio 2026.",
    fonte: "Art. 2, c. 5–6 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-spm", scadenzaId: "cf-chiusura",
    testo: "Compilare la candidatura online in Esse3 (questionario + iscrizione al bando) tra il 02/02 e il 25/02/2026 ore 12:00. Nessun allegato va caricato.",
    spiegazione: "La domanda si fa online su Esse3 (l'area riservata dello studente) e ha due parti obbligatorie: il questionario e l'iscrizione con la scelta delle mete. Occhio: non devi allegare nessun documento.",
    azione: "Compila tutte e due le parti su Esse3 entro le 12:00 del 25/02/2026, senza caricare allegati.",
    citazione: "Le studentesse e gli studenti interessati potranno presentare candidatura online tramite Area Riservata in Esse3 a partire dalle ore 12:00 del 2 febbraio 2026 ed entro le ore 12.00 del 25 febbraio 2026… NON dovrà essere caricato alcun documento nella sezione \"Allegati\".",
    fonte: "Art. 7, c. 1 e c. 3 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-isee", scadenzaId: "cf-isee",
    testo: "Se rientri nelle categorie 'minori opportunità' (es. ISEE fino a 27.948,60 €): dare il consenso ISEE in candidatura e richiedere l'attestazione 2026 entro il 31/03/2026.",
    spiegazione: "Se la tua famiglia ha un reddito basso (ISEE fino a ~27.900 €) prendi più soldi di borsa. Per averli fai due cose: quando compili la domanda dici \"sì, usate il mio ISEE\", e ti fai fare l'ISEE 2026 entro il 31 marzo.",
    azione: "Nella domanda spunta il consenso all'ISEE. Poi vai al CAF (o su INPS) e chiedi l'ISEE 2026 entro il 31/03/2026.",
    citazione: "Studenti e studentesse che vogliono far valere il proprio ISEE dovranno fornire il proprio consenso all'acquisizione dello stesso da parte dell'URI in fase di candidatura al bando. Studenti e studentesse potranno richiedere entro il 31 marzo 2026 l'attestazione ISEE 2026…",
    fonte: "Art. 6 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-graduatoria", scadenzaId: "cf-graduatoria",
    testo: "Controllare la graduatoria nell'area riservata (pubblicazione entro il 25/03/2026).",
    spiegazione: "La classifica esce nell'area riservata del sito entro il 25/03/2026. Non ti arriva nessuna mail: devi controllarla tu.",
    azione: "Dal 25/03 vai nell'area riservata di unive.it, sezione \"Mobilità Internazionale\", e cerca la graduatoria.",
    citazione: "La graduatoria sarà pubblicata nell'area riservata del sito www.unive.it, nella sezione \"Mobilità Internazionale\", entro il 25 marzo 2026.",
    fonte: "Art. 8, c. 4 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "chk-accettazione", scadenzaId: "cf-accettazione",
    testo: "Se vincitore: accettare il posto entro le 12:00 del 27/03/2026 col modulo indicato dal bando, poi verificare subito le scadenze di application dell'ateneo ospitante.",
    spiegazione: "Essere in graduatoria non basta: devi accettare il posto compilando il modulo entro le 12:00 del 27/03/2026. Se non lo fai in tempo, perdi il posto.",
    azione: "Accetta il posto col modulo entro le 12:00 del 27/03/2026, poi controlla subito le scadenze dell'università che ti ospita.",
    citazione: "L'accettazione del posto dovrà essere effettuata da parte di studentesse e studenti vincitori entro le ore 12.00 del 27 marzo 2026… La mancata accettazione del posto entro la scadenza comporterà la decadenza del diritto allo svolgimento della mobilità.",
    fonte: "Art. 8, c. 5–6 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  }
];
