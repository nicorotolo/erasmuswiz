// ============================================================
// REQUISITI DEL BANDO ERASMUS — IDONEITÀ
// ------------------------------------------------------------
// Requisiti per partecipare al bando Ca' Foscari (idoneità a
// monte, validi per tutte le mete).
//
// ✅ DATI REALI, validati sul bando ufficiale 2026/2027:
//    "Bando di selezione Programma Erasmus+ per studio (Europa)
//    a.a. 2026-2027" — Decreto Rettorale 13/2026 del 14/01/2026.
//    Il PDF è in /fonti. I riferimenti (Art. X) sono agli
//    articoli del bando.
//
// Per aggiornare un contenuto si modifica SOLO questo file,
// mai il codice.
// ============================================================

// Informazioni generali sul bando: usate dal banner in cima alla
// pagina e dal footer (anno di riferimento + data ultimo controllo).
const BANDO_INFO = {
  annoAccademico: "2026/2027",
  titolo: "Bando Erasmus+ per studio (Europa) a.a. 2026/2027 — Ca' Foscari",
  linkUfficiale: "https://www.unive.it/erasmus-studio",
  dataVerificaDati: "2026-06-10" // ultima volta che questi dati sono stati controllati sul bando
};

const REQUISITI_BANDO = [
  {
    titolo: "Iscrizione attiva",
    valore: "Iscritto a Ca' Foscari nel 2025/2026",
    descrizione: "Devi essere regolarmente iscritto a un Corso di Laurea, Laurea Magistrale o Dottorato a Ca' Foscari per l'a.a. 2025/2026. Esclusi i Corsi Singoli e chi non ha perfezionato l'immatricolazione. Per i corsi interateneo la sede amministrativa deve essere Ca' Foscari. (Art. 2)"
  },
  {
    titolo: "CFU minimi — Triennale",
    valore: "6 / 24 / 42 CFU",
    descrizione: "Crediti verbalizzati nel libretto entro le 23:59 del 25/02/2026: almeno 6 CFU se iscritto al 1° anno, 24 CFU al 2° anno, 42 CFU dal 3° anno in poi. Anche le matricole possono candidarsi. Niente autocertificazioni per esami non verbalizzati. (Art. 2)"
  },
  {
    titolo: "CFU minimi — Magistrale",
    valore: "6 / 24 CFU",
    descrizione: "Crediti verbalizzati entro le 23:59 del 25/02/2026: almeno 6 CFU se iscritto al 1° anno, 24 CFU dal 2° anno in poi. (Art. 2)"
  },
  {
    titolo: "Conoscenza linguistica",
    valore: "Livello richiesto dalla meta",
    descrizione: "Devi avere il livello di lingua richiesto dall'ateneo di destinazione (vedi ogni meta). L'eventuale prova del livello si presenta solo DOPO la selezione, nei modi e tempi stabiliti dall'università partner. (Art. 2)"
  },
  {
    titolo: "Limite mesi Erasmus",
    valore: "Max 12 mesi per ciclo",
    descrizione: "Massimo 12 mesi complessivi di mobilità Erasmus+ per ciclo di studi (triennale, magistrale, dottorato), contando tutte le mobilità Erasmus+ già svolte (studio, ICM, tirocinio), anche presso altri atenei. (Art. 5)"
  },
  {
    titolo: "Scelta delle destinazioni",
    valore: "Fino a 5, in ordine di priorità",
    descrizione: "Nella candidatura puoi indicare fino a 5 destinazioni in ordine di priorità, coerenti con area disciplinare, dipartimento, requisiti linguistici e restrizioni indicate nella scheda di ogni meta. (Art. 4 e 7)"
  },
  {
    titolo: "Durata della mobilità",
    valore: "Da 60 giorni a 12 mesi",
    descrizione: "La mobilità (L e LM) dura da un minimo di 60 giorni a un massimo di 12 mesi e va svolta tra il 15 luglio 2026 e il 31 luglio 2027, secondo il calendario dell'ateneo ospitante. (Art. 5)"
  },
  {
    titolo: "Graduatoria",
    valore: "Velocità di carriera + media",
    descrizione: "La graduatoria si basa su velocità di carriera (rapporto anno di iscrizione / CFU registrati) e media ponderata normalizzata sul corso di studi. Bonus: +1 punto se non hai fatto mobilità Erasmus+ studio nel 2025/2026; +6 punti per gli iscritti al Collegio Internazionale. (Art. 8)"
  }
];
