// ============================================================
// REQUISITI DEL BANDO ERASMUS — SAPIENZA (IDONEITÀ)
// ------------------------------------------------------------
// ✅ DATI REALI, validati articolo per articolo sul bando ufficiale:
//    "Programma Erasmus+ mobilità per studio — Bando di selezione
//    a.a. 2026/2027", Sapienza Università di Roma,
//    Decreto n. 3613/2025, Prot. n. 0183341 del 16/12/2025.
//    Copia in repo: fonti/sapienza/Bando_Erasmus_studio_Sapienza_2026_2027.pdf
//    Validato il 2026-07-28 (prima di allora il file era dichiarato
//    PROVVISORIO con inVerifica: true e 5 requisiti generici).
//
// ⚠️ QUESTI CONTENUTI DIPENDONO DAL CICLO, per costruzione: un requisito
//    di bando E' fatto di anni accademici e di date (iscrizione 2025/2026,
//    rinnovo 2026/2027, riconoscimento CFU entro il 31/10/2027, finestra
//    di mobilità 1/06/2026–31/07/2027). Non vanno ripuliti — vanno
//    NASCOSTI o etichettati "storico 2026/27" finché non esce il bando
//    2027/28. È il gate G1: vedi INVENTARIO_G1.md.
//
// ⚠️ Due scadenze, non una, e la prima è stata SPOSTATA. Il bando 2026/2027
//    nasce con 1ª scadenza 12/02/2026 e 2ª (sedi rimaste) 27/05/2026, con
//    regole proprie: chi è assegnatario alla 1ª NON può partecipare alla 2ª,
//    e chi si candida alla 2ª parte solo nel secondo semestre. Nessun
//    requisito qui sotto scrive "la scadenza" al singolare.
//
// ⚠️⚠️ L'ARTICOLATO NON BASTA: I DECRETI SUCCESSIVI LO MODIFICANO.
//    Il Decreto n. 326/2026 (prot. 0024622 del 17/02/2026) ha riaperto i
//    termini portando la 1ª scadenza al 27/02/2026 ore 13.00 — per un
//    incidente informatico che rese indisponibile la piattaforma Socrates
//    Organizer — e ha cambiato anche la PROCEDURA: candidature via moduli
//    Google distinti per Facoltà, non più dalla piattaforma d'ateneo.
//    Quindi: `dati-scadenze.js` porta 2026-02-27 e ha ragione; chi validasse
//    solo sul PDF del bando lo "correggerebbe" introducendo un errore.
//    Regola: prima di toccare una data, controllare gli allegati della
//    pagina del bando, non solo l'articolato.
//
// ⚠️ Il punteggio NON è solo merito accademico: 0-50 punti di merito
//    (formula uguale per tutti) + fino a 50 punti di criteri specifici
//    che ogni Facoltà definisce nell'Allegato 2 del bando. Dire "conta
//    la media" sarebbe vero a metà, e la metà mancante è quella che
//    cambia da Facoltà a Facoltà.
//
// Per aggiornare un contenuto si modifica SOLO questo file, mai il codice.
// ============================================================

var BANDO_INFO = {
  annoAccademico: "2026/2027",
  titolo: "Bando Erasmus+ per studio 2026/2027 — Sapienza Università di Roma",
  linkUfficiale: "https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio",
  dataVerificaDati: "2026-07-28",
  // Il decreto precedente documenta il periodo; la sveglia invita soltanto
  // a controllare, perche' il nuovo bando non e' ancora confermato.
  finestraAttesa: {
    inizio: "2026-12-16",
    precedente: {
      ciclo: "2026/2027",
      data: "2025-12-16",
      fonte: "Decreto 3613/2025, Prot. 0183341 del 16/12/2025 — Bando Erasmus+ studio 2026/2027"
    },
    stato: "atteso"
  }
  // inVerifica rimosso il 2026-07-28: i requisiti sono stati validati sul
  // testo ufficiale del bando. Il banner "dati in corso di verifica"
  // (app.js:3957) non deve più comparire per la Sapienza.
};

// Stesso schema di cafoscari/dati-bando.js — il "traduttore a 3 registri":
//  - spiegazione: la frase umana ("cosa significa")
//  - azione:      cosa devi fare, in concreto
//  - citazione:   testo LETTERALE del bando ("cosa dice il bando")
//  - fonte:       articolo/comma + riferimento al PDF ufficiale
var REQUISITI_BANDO = [
  {
    id: "sap-iscrizione",
    titolo: "Iscrizione attiva",
    valore: "Iscritto nel 2025/2026 + rinnovo 2026/2027",
    descrizione: "Devi risultare iscritto alla Sapienza (anche part-time) nell'a.a. 2025/2026 a un corso di laurea, laurea magistrale, laurea magistrale a ciclo unico, dottorato o scuola di specializzazione, e devi rinnovare l'iscrizione per l'a.a. 2026/2027 entro le scadenze dell'Ateneo. (Art. 5.1)",
    spiegazione: "Servono due iscrizioni, non una: quella in corso quando ti candidi e il rinnovo per l'anno in cui parti. Vale anche se sei part-time.",
    azione: "Verifica di essere iscritto per il 2025/2026 e metti in calendario il rinnovo per il 2026/2027: senza rinnovo salta anche il contributo integrativo.",
    citazione: "Per potersi candidare al Bando è necessario: - risultare iscritti (anche part-time) a Sapienza nell'a.a. 2025/2026 ad un corso di laurea, laurea magistrale, laurea magistrale a ciclo unico, dottorato di ricerca o scuola di specializzazione; - provvedere al rinnovo dell'iscrizione a Sapienza per l'a.a. 2026/2027 entro le scadenze fissate dall'Ateneo.",
    fonte: "Art. 5.1, c. 1 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-lingua",
    titolo: "Conoscenza linguistica",
    valore: "Almeno A2 in candidatura",
    descrizione: "In fase di candidatura serve almeno il livello A2 (CEFR) nella lingua di insegnamento dei corsi indicati nel Learning Agreement preliminare. Chi è iscritto ai corsi di area medica (Farmacia e Medicina — area medica, Medicina e Odontoiatria) deve invece possedere già in candidatura il livello richiesto dalla sede. Il livello si dimostra con il test del Centro Linguistico di Ateneo (CLA) o con un esonero. (Art. 5.2)",
    spiegazione: "Per candidarti basta un A2 nella lingua in cui studierai — non il livello pieno della sede. Se il tuo livello è sotto quello richiesto dalla destinazione, puoi comunque essere assegnato «con riserva» e dovrai raggiungerlo nei tempi che fissa l'università estera. Fa eccezione l'area medica, dove il livello della sede serve subito.",
    azione: "Guarda il livello richiesto dalle mete che ti interessano, poi prenota il test CLA (massimo 4 lingue) oppure verifica se rientri in un esonero: madrelingua, certificazione riconosciuta almeno A2, corso di laurea interamente in inglese, diploma di liceo internazionale.",
    citazione: "Con riferimento alla lingua di insegnamento dei corsi indicati nel progetto formativo preliminare (learning agreement), è richiesto in fase di candidatura un livello minimo di competenza linguistica pari al livello A2 del Quadro Comune Europeo di Riferimento […] Se il livello esposto in candidatura è inferiore a quello previsto dall'ateneo di destinazione, l'assegnazione della mobilità in graduatoria potrà essere effettuata con riserva.",
    fonte: "Art. 5.2, c. 1 e c. 2 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-scelta-mete",
    titolo: "Scelta delle destinazioni",
    valore: "Da 1 a 5, ordine vincolante",
    descrizione: "Puoi candidarti a un minimo di 1 e un massimo di 5 destinazioni. Indicarne 5 è consigliato ma non obbligatorio. L'ordine di priorità che dichiari è vincolante: se risulti vincitore su più sedi, ti viene assegnata quella più in alto. Le destinazioni devono essere quelle associate alla tua Facoltà/corso nel database Go Erasmus+. (Art. 6.2)",
    spiegazione: "Scegli da 1 a 5 mete e le metti in ordine. Quell'ordine non è un suggerimento: se vinci su più sedi ti danno la prima della tua lista, non quella che preferisci a posteriori.",
    azione: "Ordina le mete con la testa: la prima della lista è quella che ti verrà assegnata se vinci più posti.",
    citazione: "Lo studente/la studentessa potrà candidarsi ad un minimo di 1 fino a un massimo di 5 destinazioni. Si specifica che: 1. La scelta di 5 mete è consigliata, NON è obbligatoria; 2. L'ordine di priorità indicato al momento della candidatura è vincolante ai fini dell'assegnazione della sede, nel caso in cui il candidato risulti vincitore per più sedi.",
    fonte: "Art. 6.2 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-durata",
    titolo: "Durata della mobilità",
    valore: "Da 2 a 12 mesi",
    descrizione: "La mobilità lunga dura da un minimo di 2 mesi (60 giorni) a un massimo di 12 mesi per ciclo di studi (24 per i corsi a ciclo unico) e va svolta in modo continuativo fra il 1° giugno 2026 e il 31 luglio 2027. La durata effettiva della singola sede è fissata dall'accordo fra Sapienza e l'ateneo partner. Per i soli dottorandi esiste anche una «short mobility» da 5 a 30 giorni. (Art. 2)",
    spiegazione: "Da 2 a 12 mesi, tutti di fila, dentro la finestra fissata dal bando. Quanto dura davvero la tua meta però non lo decidi tu: lo dice l'accordo con quell'università.",
    azione: "Controlla nella scheda della meta quanti mesi prevede l'accordo, e che il periodo stia dentro la finestra di mobilità del bando.",
    citazione: "I periodi di studio all'estero, intesi come mobilità fisica, possono essere avviati a partire dal 1° giugno 2026, dovranno concludersi entro il 31 luglio 2027 e dovranno essere svolti in modo continuativo. […] ha una durata minima di 2 mesi (60 giorni) e massima di 12 mesi per ciclo di studi (24 mesi in caso di corso di studio a ciclo unico). […] La durata della specifica mobilità è definita dall'accordo interistituzionale stipulato tra Sapienza e gli Atenei partner.",
    fonte: "Art. 2 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-limite-mesi",
    titolo: "Limite mesi Erasmus",
    valore: "Max 12 mesi per ciclo",
    descrizione: "Il totale complessivo di mobilità Erasmus+ non può superare i 12 mesi per ciclo di studi (24 per i corsi a ciclo unico), anche se i periodi precedenti sono stati svolti presso un altro ateneo. Nel conteggio rientrano anche ICM, Lifelong Learning Programme, Erasmus Mundus Azione 1 e 2; non rientrano i periodi svolti in modalità virtuale dal paese di residenza. Candidandoti dichiari di avere mensilità residue sufficienti, e i contributi presi in eccesso vanno restituiti. (Art. 5.1)",
    spiegazione: "In ogni ciclo (triennale, magistrale, dottorato) hai un budget di 12 mesi di Erasmus in totale, non 12 per volta. Contano anche gli Erasmus fatti altrove e sotto altri nomi. Quando ti candidi stai dichiarando di essere nei limiti: è una dichiarazione, con le conseguenze che ha una dichiarazione falsa.",
    azione: "Somma i mesi di mobilità già fatti in questo ciclo prima di candidarti: il nuovo periodo non deve sforare i 12.",
    citazione: "Poiché la mobilità Erasmus+ può essere svolta per un periodo complessivo che non superi i 12 mesi per ogni ciclo di studi […] anche se svolti presso altro ateneo, presentando domanda di candidatura al presente bando la/il candidata/o conferma di possedere un numero di mensilità residue congruente con la regola sopra menzionata. I contributi eventualmente usufruiti per un numero di mensilità superiore al sopra citato limite dovranno essere restituiti.",
    fonte: "Art. 5.1, c. 3 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-graduatoria",
    titolo: "Graduatoria",
    valore: "Merito 0-50 + criteri di Facoltà 0-50",
    descrizione: "Per laurea, magistrale e ciclo unico il punteggio ha due metà. Merito accademico (0-50): (media ponderata rapportata alla media ponderata del corso) × 30, più (CFU acquisiti / CFU previsti per l'anno di iscrizione) × 20, meno 1 punto per ogni anno oltre la durata legale del corso. Criteri specifici (0-50): li definisce ogni Facoltà nell'Allegato 2 e possono pesare conoscenza della lingua, progetto formativo preliminare e anno di iscrizione. Per i dottorandi vale invece il giudizio della Commissione (fino a 50 punti). (Art. 7.1)",
    spiegazione: "Metà del punteggio è una formula uguale per tutti: media rapportata a quella del tuo corso, più crediti fatti sui crediti previsti, meno un punto per ogni anno fuori corso. L'altra metà la decide la tua Facoltà, e può contare la lingua, il piano di studi che proponi e a che anno sei. Contano solo gli esami verbalizzati su Infostud alla scadenza — un esame dato ma non ancora chiuso dal docente non esiste.",
    azione: "Prima della scadenza apri Infostud e controlla che tutti gli esami risultino verbalizzati; poi leggi l'Allegato 2 del bando per la tua Facoltà, perché è lì che si gioca metà del punteggio.",
    citazione: "Merito accademico: 0 – 50 punti. […] Media (rapporto tra media dei voti ponderata e media dei voti ponderata del Corso) x30 + (più) Totale CFU (rapporto n. CFU acquisiti e n. CFU previsti nel Corso per l'anno a cui lo studente è iscritto) x 20 - (meno) 1 punto per ogni anno in più rispetto alla durata legale del corso […] In sede di selezione, saranno presi in considerazione e valutati esclusivamente i CFU che risultino maturati e verbalizzati su Infostud alla scadenza di presentazione della domanda.",
    fonte: "Art. 7.1 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-cfu-riconoscimento",
    titolo: "CFU da riconoscere al rientro",
    valore: "Almeno 12 CFU",
    descrizione: "Per non dover restituire il contributo integrativo Sapienza/MUR devi ottenere il riconoscimento in carriera di almeno 12 CFU entro il 31/10/2027 — ridotti a 3 CFU se svolgi esclusivamente ricerca tesi e a 10 CFU per il tirocinio abilitante. Serve anche risultare iscritti entro il primo anno fuori corso. Non si applica a dottorandi e specializzandi. Il riconoscimento passa solo dalle procedure digitalizzate, con convalida del RAM e verbalizzazione su Infostud. (Art. 4.2)",
    spiegazione: "Non basta partire: al rientro devi portare a casa almeno 12 crediti riconosciuti, o ti chiedono indietro i soldi. Se vai solo per la tesi la soglia scende a 3. E il riconoscimento vale solo se passa dalla procedura ufficiale: un esame superato ma mai convalidato, per il bando, non conta.",
    azione: "Costruisci un Learning Agreement che arrivi ad almeno 12 CFU riconoscibili, e al rientro non fermarti all'esame superato: segui la convalida fino alla verbalizzazione su Infostud.",
    citazione: "I beneficiari riescano ad ottenere entro il 31/10/2027 il riconoscimento in carriera di almeno 12 CFU (ridotti a 3 CFU per gli studenti/le studentesse che svolgano esclusivamente attività di ricerca per la preparazione della tesi e a 10 CFU per il tirocinio abilitante). […] Agli studenti/le studentesse che non dovessero ottenere il riconoscimento […] verrà chiesta la restituzione del contributo integrativo eventualmente già liquidato.",
    fonte: "Art. 4.2, c. 5 e Art. 4.2.1 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-laureandi",
    titolo: "Se ti stai per laureare",
    valore: "Laurea solo dopo il riconoscimento",
    descrizione: "Chi svolge la mobilità da laureando può laurearsi solo dopo aver concluso il periodo all'estero E completato la procedura digitalizzata di riconoscimento delle attività previste da Learning Agreement o Change Form, pena la restituzione dei contributi. Chi prevede di laurearsi entro la sessione di gennaio 2027 e vuole partire durante la magistrale può farlo solo nel secondo semestre 2026/27. (Art. 5.1 c. 2 e Art. 5.4 c. 1)",
    spiegazione: "Laurearsi prima che il tuo Erasmus sia stato riconosciuto ti costa la borsa. È il tipo di errore che si fa per fretta, non per distrazione: la seduta di laurea c'è, il riconoscimento sembra una formalità, e invece è la condizione.",
    azione: "Se sei laureando, chiedi al RAM i tempi reali della convalida prima di prenotare la seduta di laurea.",
    citazione: "Gli studenti/le studentesse laureandi che svolgono un periodo di mobilità potranno laurearsi solo dopo la conclusione del periodo di studio all'estero e il completamento della procedura digitalizzata di riconoscimento dell'attività didattica prevista da Learning agreement/Change form (esami o attività di ricerca tesi), pena la restituzione dei contributi.",
    fonte: "Art. 5.4, c. 1 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  },
  {
    id: "sap-extracomunitari",
    titolo: "Se hai cittadinanza extra-UE",
    valore: "Permesso di soggiorno + visto",
    descrizione: "Oltre a essere regolarmente iscritto alla Sapienza devi possedere il permesso di soggiorno. In caso di selezione, partire resta subordinato al rilascio del visto d'ingresso nel Paese di destinazione: è una pratica da seguire personalmente e con largo anticipo. Alcuni Paesi chiedono di certificare la disponibilità di mezzi finanziari, per un importo che può superare la somma dei contributi di mobilità. (Art. 5.4)",
    spiegazione: "Vincere il posto non garantisce che potrai partire: il visto lo dà il paese di destinazione, non Sapienza. E in alcuni casi ti chiedono di dimostrare di avere soldi tuoi, più di quanti ne dà la borsa.",
    azione: "Appena sai la destinazione, informati sul visto e sull'eventuale prova di mezzi finanziari: le pratiche partono da te e sono lente.",
    citazione: "I cittadini extracomunitari, oltre ad essere regolarmente iscritti a Sapienza, devono essere in possesso del permesso di soggiorno. In caso di selezione, la possibilità di intraprendere lo scambio è sempre subordinata al rilascio del visto d'ingresso nel Paese di destinazione […] Per ottenere il visto, alcuni Paesi richiedono agli studenti/le studentesse di certificare la disponibilità di mezzi finanziari. L'importo minimo è variabile, ma può talvolta superare l'ammontare della somma dei contributi per la mobilità.",
    fonte: "Art. 5.4, c. 4 — Bando Erasmus+ studio 2026/2027, Sapienza (D.R. 3613/2025)."
  }
];
