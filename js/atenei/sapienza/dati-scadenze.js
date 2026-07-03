// ============================================================
// SCADENZE — SAPIENZA UNIVERSITÀ DI ROMA (bando Erasmus+ studio 2026/27)
// ------------------------------------------------------------
// Fonte: bando unico Erasmus+ 2026/2027 Sapienza.
//   https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio
// Date candidatura/mobilità VERIFICATE via pagina ufficiale (giu 2026).
// ⚠️ Graduatoria e accettazione: date da validare sul testo del bando.
// Formato data: "ANNO-MESE-GIORNOTORA:MINUTI".
//
// Campi extra letti dal motore (app.js):
//  - azionabile:          true se lo studente può/deve agire per questa data.
//  - chiusuraCandidature: true sulle scadenze che chiudono le candidature;
//                         quando sono TUTTE passate il sito dichiara il bando chiuso.
// ============================================================

var SCADENZE_INFO = {
  annoAccademico: "2026/2027"
};

var SCADENZE_CAFOSCARI = [
  {
    id: "sap-bando",
    cosa: "Pubblicazione bando",
    data: "2025-12-16T12:00",
    azionabile: false,
    descrizione: "Pubblicato il bando unico Erasmus+ per studio 2026/2027 della Sapienza (oltre 500 atenei partner, ~2.000 borse)."
  },
  {
    id: "sap-chiusura1",
    cosa: "Chiusura candidature (1ª finestra)",
    data: "2026-02-27T13:00",
    azionabile: true,
    chiusuraCandidature: true,
    descrizione: "Termine per la compilazione online della domanda di candidatura (prima finestra). Verifica la procedura esatta sul bando ufficiale."
  },
  {
    id: "sap-chiusura2",
    cosa: "Chiusura candidature (2ª finestra)",
    data: "2026-05-27T13:00",
    azionabile: true,
    chiusuraCandidature: true,
    descrizione: "Seconda finestra per candidarsi alle destinazioni ancora disponibili dopo la prima assegnazione."
  },
  {
    id: "sap-mobilita",
    cosa: "Inizio finestra di mobilità",
    data: "2026-06-01T00:00",
    azionabile: false,
    descrizione: "La mobilità fisica può svolgersi tra il 1° giugno 2026 e il 31 luglio 2027, secondo il calendario dell'ateneo ospitante."
  }
];
