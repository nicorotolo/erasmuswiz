// ============================================================
// REQUISITI DEL BANDO — SAPIENZA (IDONEITÀ)  [PROVVISORIO]
// ------------------------------------------------------------
// ⚠️ CONTENUTI PROVVISORI da VALIDARE sul testo ufficiale del bando
//    Erasmus+ studio 2026/2027 Sapienza prima di mostrarli agli studenti:
//    https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio
// Sono volutamente generici (veri ma non dettagliati) per non mostrare
// requisiti inventati. Vanno completati articolo per articolo dal bando.
// ============================================================

var BANDO_INFO = {
  annoAccademico: "2026/2027",
  titolo: "Bando Erasmus+ per studio 2026/2027 — Sapienza Università di Roma",
  linkUfficiale: "https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio",
  dataVerificaDati: "2026-06-26",
  inVerifica: true // DISEGNO_UX.md §8: contenuti provvisori, non ancora validati sul bando ufficiale
};

var REQUISITI_BANDO = [
  {
    id: "sap-iscrizione",
    titolo: "Iscrizione attiva",
    valore: "Iscritto alla Sapienza",
    descrizione: "Devi essere regolarmente iscritto a un corso di studi della Sapienza al momento della candidatura e per tutto il periodo di mobilità. Verifica le esclusioni sul bando ufficiale."
  },
  {
    id: "sap-lingua",
    titolo: "Conoscenza linguistica",
    valore: "Livello richiesto dalla meta",
    descrizione: "Devi possedere il livello di lingua richiesto dall'ateneo di destinazione (vedi ogni meta). L'eventuale verifica avviene secondo le modalità del partner."
  },
  {
    id: "sap-scelta-mete",
    titolo: "Scelta delle destinazioni",
    valore: "Secondo la tua Facoltà",
    descrizione: "Puoi candidarti solo alle destinazioni associate alla tua Facoltà/corso di studi nel database Go Erasmus+. Controlla area disciplinare e requisiti di ogni accordo."
  },
  {
    id: "sap-durata",
    titolo: "Durata della mobilità",
    valore: "Da 2 a 12 mesi",
    descrizione: "Il periodo di mobilità va da un minimo di 2 a un massimo di 12 mesi, da svolgere tra il 1° giugno 2026 e il 31 luglio 2027."
  },
  {
    id: "sap-requisiti-completi",
    titolo: "⚠️ Requisiti completi",
    valore: "Vedi bando ufficiale",
    descrizione: "Questi requisiti sono provvisori. Media, CFU minimi, criteri di graduatoria e altre condizioni vanno verificati sul bando ufficiale Sapienza 2026/2027."
  }
];
