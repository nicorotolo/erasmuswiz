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
var BANDO_INFO = {
  annoAccademico: "2026/2027",
  titolo: "Bando Erasmus+ per studio (Europa) a.a. 2026/2027 — Ca' Foscari",
  linkUfficiale: "https://www.unive.it/erasmus-studio",
  dataVerificaDati: "2026-06-10" // ultima volta che questi dati sono stati controllati sul bando
};

// Ogni requisito ha, oltre a id/titolo/valore/descrizione (testo attuale,
// mantenuto come fallback), i 4 campi del "traduttore a 3 registri":
//  - spiegazione: la frase umana ("cosa significa")
//  - azione:      cosa devi fare, in concreto
//  - citazione:   testo LETTERALE del bando ("cosa dice il bando")
//  - fonte:       articolo/comma + riferimento al PDF ufficiale
var REQUISITI_BANDO = [
  {
    id: "cf-iscrizione",
    titolo: "Iscrizione attiva",
    valore: "Iscritto a Ca' Foscari nel 2025/2026",
    descrizione: "Devi essere regolarmente iscritto a un Corso di Laurea, Laurea Magistrale o Dottorato a Ca' Foscari per l'a.a. 2025/2026. Esclusi i Corsi Singoli e chi non ha perfezionato l'immatricolazione. Per i corsi interateneo la sede amministrativa deve essere Ca' Foscari. (Art. 2)",
    spiegazione: "Per candidarti devi già essere iscritto a Ca' Foscari (triennale, magistrale o dottorato) per l'anno 2025/2026. Se non hai ancora finito l'immatricolazione, o segui solo un Corso Singolo, resti fuori.",
    azione: "Controlla di avere l'iscrizione al 2025/2026 in regola prima che scada il bando.",
    citazione: "Potranno partecipare alla selezione le studentesse e gli studenti regolarmente iscritti ad un Corso di Laurea, Laurea Magistrale o Dottorato di Ricerca presso l'Università Ca' Foscari Venezia per l'anno accademico 2025/2026. […] Non verranno prese in considerazione le candidature di chi, al momento della scadenza del presente Bando, non abbia ancora perfezionato la propria immatricolazione o sia iscritto a Corsi Singoli.",
    fonte: "Art. 2, c. 1 — Bando Erasmus+ per studio (Europa) 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-cfu-triennale",
    titolo: "CFU minimi — Triennale",
    valore: "6 / 24 / 42 CFU",
    descrizione: "Crediti verbalizzati nel libretto entro le 23:59 del 25/02/2026: almeno 6 CFU se iscritto al 1° anno, 24 CFU al 2° anno, 42 CFU dal 3° anno in poi. Anche le matricole possono candidarsi. Niente autocertificazioni per esami non verbalizzati. (Art. 2)",
    spiegazione: "Per la triennale ti serve un minimo di esami già registrati sul libretto: 6 CFU al 1° anno, 24 al 2°, 42 dal 3° in poi. Conta solo ciò che è già a libretto, non gli esami che hai dato ma non ancora registrati.",
    azione: "Apri il libretto e conta i CFU registrati: devi arrivare al minimo entro le 23:59 del 25/02/2026.",
    citazione: "…le iscritte e gli iscritti ad un Corso di Laurea dovranno aver registrato nel proprio libretto telematico, entro le ore 23:59 del 25 febbraio 2026: a) almeno 6 CFU, se iscritti al 1° anno; b) almeno 24 CFU, se iscritti al 2° anno; c) almeno 42 CFU, se iscritto ad anni successivi al secondo.",
    fonte: "Art. 2, c. 2 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-cfu-magistrale",
    titolo: "CFU minimi — Magistrale",
    valore: "6 / 24 CFU",
    descrizione: "Crediti verbalizzati entro le 23:59 del 25/02/2026: almeno 6 CFU se iscritto al 1° anno, 24 CFU dal 2° anno in poi. (Art. 2)",
    spiegazione: "Per la magistrale il minimo è 6 CFU registrati sul libretto al 1° anno e 24 dal 2° in poi.",
    azione: "Controlla i CFU già a libretto entro il 25/02/2026.",
    citazione: "Le iscritte e gli iscritti ad un Corso di Laurea Magistrale dovranno aver registrato nel proprio libretto telematico, entro le ore 23:59 del 25 febbraio 2026: a) almeno 6 CFU, se iscritti al 1° anno; b) almeno 24 CFU, se iscritti al 2° anno o ad anni successivi.",
    fonte: "Art. 2, c. 3 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-lingua",
    titolo: "Conoscenza linguistica",
    valore: "Livello richiesto dalla meta",
    descrizione: "Devi avere il livello di lingua richiesto dall'ateneo di destinazione (vedi ogni meta). L'eventuale prova del livello si presenta solo DOPO la selezione, nei modi e tempi stabiliti dall'università partner. (Art. 2)",
    spiegazione: "Ti serve il livello di lingua che chiede l'università estera che scegli. Per candidarti non carichi nessun certificato: se te lo chiedono, la prova la fai solo dopo essere stato preso.",
    azione: "Guarda il livello di lingua richiesto nella scheda di ogni meta che ti interessa.",
    citazione: "Le candidate e i candidati dovranno essere in possesso di un livello di conoscenza della lingua veicolare utilizzata per l'insegnamento presso l'ateneo di destinazione adeguato a quanto richiesto dall'ateneo stesso… Le studentesse e gli studenti selezionati dovranno presentare eventuale prova del livello linguistico solamente in fase successiva alla selezione nelle modalità e nei termini stabiliti dall'università partner.",
    fonte: "Art. 2, c. 9 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-limite-mesi",
    titolo: "Limite mesi Erasmus",
    valore: "Max 12 mesi per ciclo",
    descrizione: "Massimo 12 mesi complessivi di mobilità Erasmus+ per ciclo di studi (triennale, magistrale, dottorato), contando tutte le mobilità Erasmus+ già svolte (studio, ICM, tirocinio), anche presso altri atenei. (Art. 5)",
    spiegazione: "In ogni ciclo di studi (triennale, magistrale, dottorato) puoi fare al massimo 12 mesi di Erasmus+ in totale. Contano anche gli Erasmus già fatti, pure in un'altra università.",
    azione: "Somma i mesi di Erasmus+ già fatti in questo ciclo: col nuovo periodo non devi superare i 12 mesi.",
    citazione: "…in ogni caso per un periodo complessivo non superiore a 12 mesi per ogni ciclo di studio… Ai fini del calcolo di tale periodo vengono considerate tutte le mobilità realizzate nell'ambito di Erasmus+ (Erasmus+ per studio, Erasmus+ per studio ICM, Erasmus+ per tirocinio), comprese quelle svolte durante l'iscrizione presso altri Atenei.",
    fonte: "Art. 5, c. 1 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-scelta-mete",
    titolo: "Scelta delle destinazioni",
    valore: "Fino a 5, in ordine di priorità",
    descrizione: "Nella candidatura puoi indicare fino a 5 destinazioni in ordine di priorità, coerenti con area disciplinare, dipartimento, requisiti linguistici e restrizioni indicate nella scheda di ogni meta. (Art. 4 e 7)",
    spiegazione: "Nella domanda puoi indicare fino a 5 destinazioni, in ordine dalla tua preferita all'ultima. Puoi anche metterne meno di 5.",
    azione: "Scegli fino a 5 mete e ordinale per preferenza prima di compilare la domanda.",
    citazione: "All'interno della candidatura si potranno indicare fino a un massimo di 5 destinazioni, elencate in ordine di priorità. Chi non fosse interessato a 5 destinazioni potrà indicarne un numero inferiore.",
    fonte: "Art. 7, c. 4 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-durata",
    titolo: "Durata della mobilità",
    valore: "Da 60 giorni a 12 mesi",
    descrizione: "La mobilità (L e LM) dura da un minimo di 60 giorni a un massimo di 12 mesi e va svolta tra il 15 luglio 2026 e il 31 luglio 2027, secondo il calendario dell'ateneo ospitante. (Art. 5)",
    spiegazione: "Per triennale e magistrale l'Erasmus dura da un minimo di 2 mesi (60 giorni) a un massimo di 12, da fare tra il 15 luglio 2026 e il 31 luglio 2027.",
    azione: "Controlla che il periodo della meta scelta stia tra 2 mesi e 12, dentro la finestra 15/07/2026–31/07/2027.",
    citazione: "La mobilità potrà svolgersi tra il 15 luglio 2026 e il 31 luglio 2027… Per le studentesse e gli studenti iscritti a Corsi di Laurea e Laurea Magistrale la durata della mobilità non potrà essere inferiore a 60 giorni e superiore a 12 mesi.",
    fonte: "Art. 5, c. 2 e c. 3 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  },
  {
    id: "cf-graduatoria",
    titolo: "Graduatoria",
    valore: "Velocità di carriera + media",
    descrizione: "La graduatoria si basa su velocità di carriera (rapporto anno di iscrizione / CFU registrati) e media ponderata normalizzata sul corso di studi. Bonus: +1 punto se non hai fatto mobilità Erasmus+ studio nel 2025/2026; +6 punti per gli iscritti al Collegio Internazionale. (Art. 8)",
    spiegazione: "Ti mettono in classifica su due cose: quanti esami hai dato rispetto agli anni che frequenti, e quanto è alta la tua media. Il confronto è col tuo corso, non con tutta l'università. Puoi guadagnare punti extra: +1 se quest'anno non sei già in Erasmus, +6 se sei al Collegio Internazionale.",
    azione: "Un solo consiglio pratico: media alta e nessun esame lasciato indietro.",
    citazione: "Graduatoria di merito, sulla base di velocità di carriera (rapporto tra anno di iscrizione e numero di CFU registrati entro le ore 23.59 del 25/02/2026) e media ponderata degli esami registrati… normalizzata rispetto al corso di studi… Attribuzione dei seguenti punti bonus: 1 punto bonus per chi non ha svolto mobilità Erasmus+ per studio in Europa nell'a.a. 2025/2026; 6 punti bonus per studenti e studentesse iscritti/e al Collegio Internazionale.",
    fonte: "Art. 8, c. 1 — Bando Erasmus+ studio 2026/2027, Ca' Foscari (DR 13/2026)."
  }
];
