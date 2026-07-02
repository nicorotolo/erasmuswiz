// ============================================================
// SCADENZE DI CA' FOSCARI (comuni a tutte le mete)
// ------------------------------------------------------------
// ✅ DATI REALI dal bando ufficiale 2026/2027 (PDF in /fonti).
// I riferimenti (Art. X) sono agli articoli del bando.
//
// Il campo "data" usa il formato ANNO-MESE-GIORNOToRA:MINUTI
// (es. "2026-02-25T12:00" = 25 febbraio 2026 alle 12:00).
// Per aggiornare basta cambiare i testi/date qui: NON si tocca
// il codice.
// ============================================================

var SCADENZE_INFO = {
  annoAccademico: "2026/2027"
};

var SCADENZE_CAFOSCARI = [
  {
    id: "cf-apertura",
    cosa: "Apertura candidature",
    data: "2026-02-02T12:00",
    descrizione: "Si apre la candidatura online in Area Riservata Esse3: questionario + iscrizione al bando con scelta di max 5 destinazioni. (Art. 7)"
  },
  {
    id: "cf-laureandi",
    cosa: "Scadenza laureandi (3° anno → Magistrale)",
    data: "2026-02-18T12:00",
    descrizione: "Chi è al 3° anno di triennale e vuole partire durante il 1° anno di magistrale deve scrivere a erasmusout@unive.it entro questa data. (Art. 7)"
  },
  {
    id: "cf-chiusura",
    cosa: "Chiusura candidature",
    data: "2026-02-25T12:00",
    descrizione: "Ultimo momento per completare la candidatura online. Nessuna proroga. Gli esami devono risultare verbalizzati nel libretto entro le 23:59 dello stesso giorno. (Art. 2 e 7)"
  },
  {
    id: "cf-graduatoria",
    cosa: "Pubblicazione graduatoria",
    data: "2026-03-25T23:59",
    descrizione: "La graduatoria viene pubblicata nell'area riservata di unive.it (sezione Mobilità Internazionale) entro il 25 marzo 2026. (Art. 8)"
  },
  {
    id: "cf-accettazione",
    cosa: "Accettazione del posto",
    data: "2026-03-27T12:00",
    descrizione: "I vincitori devono accettare il posto entro questa data compilando il modulo indicato dal bando. Senza accettazione si perde la mobilità. (Art. 8)"
  },
  {
    id: "cf-isee",
    cosa: "Scadenza ISEE / certificati (minori opportunità)",
    data: "2026-03-31T23:59",
    descrizione: "Termine per richiedere l'attestazione ISEE 2026 e inviare gli eventuali certificati per il contributo aggiuntivo 'minori opportunità'. (Art. 6)"
  },
  {
    id: "cf-mobilita",
    cosa: "Inizio finestra di mobilità",
    data: "2026-07-15T00:00",
    descrizione: "La mobilità può svolgersi tra il 15 luglio 2026 e il 31 luglio 2027, secondo il calendario accademico dell'ateneo ospitante. (Art. 5)"
  }
];
