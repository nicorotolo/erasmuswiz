// ============================================================
// PORTA "IN ATTESA" — CA' FOSCARI
// "Ho inviato la domanda, aspetto la graduatoria."
// ------------------------------------------------------------
// Fonte: Bando Erasmus+ per studio (Europa) 2026/2027, Ca' Foscari
// Venezia — artt. 7, 8 e 9. Copia in repo:
// fonti/Bando_Erasmus__per_studio__Europa__2026_2027.pdf
//
// ⚠️ PERCHE' QUESTO FILE ESISTE. La terza porta d'ingresso (V2 del
//    PLAN_REDESIGN_V3) atterra su uno stato che il sito non ha mai
//    raccontato: fra l'invio della domanda e la graduatoria passa
//    circa un mese, e in quel mese c'e' molto da fare — solo che
//    nessuno lo dice. Senza questi contenuti la porta si aprirebbe
//    sul niente.
//
// ⚠️ REGOLA DEL CICLO (gate G1). Le date del 2026/27 stanno in
//    `esempioCiclo` e NON vanno mostrate come attuali: servono a dare
//    la MISURA dell'attesa ("circa un mese"), non a fissare scadenze.
//    Il ciclo 2027/28 sposta tutto di un anno. Cio' che NON dipende
//    dal ciclo — la forma della procedura, le trappole — sta nei campi
//    `tappe`, `intanto` e `attenzione` ed e' riusabile.
// ============================================================

var ATTESA_INFO = {
  titolo: "Hai inviato la domanda. Adesso si aspetta.",
  sottotitolo: "È la fase in cui non dipende più da te — ma è anche quella in cui puoi portarti avanti. Ecco cosa succede e cosa conviene fare intanto.",

  // Quanto dura, detto con onestà: una misura, non una promessa.
  quantoDura: "Circa un mese fra la chiusura delle domande e la graduatoria. Poi tutto accelera di colpo: fra la pubblicazione e la scadenza per accettare il posto possono passare due giorni.",

  // Cosa succede, in ordine. Nessuna data assoluta: la forma, non il calendario.
  tappe: [
    { titolo: "La commissione valuta",
      testo: "La graduatoria si costruisce su velocità di carriera e media ponderata degli esami registrati entro la scadenza della domanda. Da qui in poi non puoi più modificare nulla." },
    { titolo: "Esce la graduatoria",
      testo: "Viene pubblicata nell'area riservata di unive.it, sezione «Mobilità Internazionale». Eventuali rinvii vengono annunciati sulla pagina del bando." },
    { titolo: "Sei vincitore oppure riserva",
      testo: "Vincitore lo sei per una sola destinazione. Riserva puoi esserlo per più d'una — e chi è vincitore non compare fra le riserve." },
    { titolo: "Accetti il posto",
      testo: "I vincitori accettano compilando il modulo indicato nel bando entro la scadenza. Se la mobilità dura fino a 6 mesi, è qui che indichi il semestre di partenza." },
    { titolo: "Poi tocca all'ateneo ospitante",
      testo: "Sapere di aver vinto non basta: devi ancora fare l'application presso l'università di destinazione, che ha scadenze sue e può respingerti se non hai i requisiti che chiede." }
  ],

  // Azioni vere, non riempitivo (regola V4: se non c'è niente da fare, non entra).
  intanto: [
    { titolo: "Guarda subito le scadenze dell'ateneo che hai chiesto",
      testo: "Il bando lo dice esplicitamente: fra l'accettazione del posto e la scadenza per l'application dell'ateneo ospitante possono passare pochi giorni. Cercarle adesso costa mezz'ora; cercarle dopo può costare il posto." },
    { titolo: "Controlla ogni giorno la posta istituzionale",
      testo: "Tutto passa da matricola@stud.unive.it. Se finisci fra le riserve, la convocazione arriva lì e i termini per rispondere possono essere molto ravvicinati." },
    { titolo: "Comincia a guardare i corsi",
      testo: "Il Learning Agreement lo dovrai concordare col Departmental Coordinator. Arrivarci con un'idea di quali corsi ti servono accorcia di settimane la parte più lenta." },
    { titolo: "Controlla i documenti",
      testo: "Verifica che carta d'identità o passaporto coprano tutto il periodo. Se sei cittadino extra-UE muoviti adesso: certe procedure di rilascio richiedono più di 90 giorni." },
    { titolo: "Non prendere impegni sul semestre",
      testo: "Finché non sai la destinazione e il semestre, tirocini, affitti e lavori vanno tenuti reversibili." }
  ],

  // Le cose che non sono ovvie e che costano care.
  attenzione: [
    { titolo: "La finestra per accettare è strettissima",
      testo: "Chi non accetta entro la scadenza decade dal diritto alla mobilità. Non è una formalità e non ci sono proroghe: nel 2026/27 la graduatoria usciva il 25 marzo e si accettava entro le 12.00 del 27." },
    { titolo: "Rinunciare dopo aver accettato ha un prezzo",
      testo: "Chi rinuncia dopo aver accettato il posto può perdere la possibilità di candidarsi al bando dell'anno successivo, salvo cause di forza maggiore documentate. Se il posto non ti va bene, è meglio non accettarlo." },
    { titolo: "Se non vuoi il posto, non devi fare nulla",
      testo: "Chi non intende accettare semplicemente non compila il modulo. Non serve una rinuncia formale." },
    { titolo: "Le riserve non compilano il modulo",
      testo: "Chi è in lista di riserva non deve accettare niente: viene contattato via email solo se un vincitore rinuncia." },
    { titolo: "Il ripescaggio esiste, ma spesso è per il secondo semestre",
      testo: "Lo scorrimento parte dal giorno dopo la scadenza delle accettazioni e può riguardare la sola mobilità del secondo semestre. L'ateneo può interromperlo in qualsiasi momento." },
    { titolo: "L'ultima parola è dell'ateneo ospitante",
      testo: "La candidatura può essere respinta dall'università di destinazione anche dopo la graduatoria e l'accettazione, se in fase di application i suoi requisiti non risultano soddisfatti." }
  ],

  // Riferimento del ciclo misurato — NON da mostrare come scadenza attuale (G1).
  esempioCiclo: {
    ciclo: "2026/27",
    domandaDal: "2026-02-02",
    domandaEntro: "2026-02-25",
    graduatoriaEntro: "2026-03-25",
    accettazioneEntro: "2026-03-27",
    nota: "Misura dell'attesa nel ciclo 2026/27: ~1 mese fra domanda e graduatoria, 2 giorni fra graduatoria e accettazione."
  },

  fonte: "Bando Erasmus+ per studio (Europa) 2026/2027 — Ca' Foscari Venezia, artt. 7-9",
  fonteUrl: "https://www.unive.it/erasmus-studio",
  verificatoIl: "2026-07-28"
};
