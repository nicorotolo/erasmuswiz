// ==========================================================
// METE ERASMUS - SAPIENZA - Facolta di SCIENZE POLITICHE, SOCIOLOGIA, COMUNICAZIONE - Dip. Comunicazione e Ricerca Sociale
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=COMM).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-03): 59 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (il sito gestisce L e LM).
// codiceErasmus = codice Erasmus UFFICIALE dall export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti).
// ==========================================================

var METE = [
  {
    id: "sap-comm-wien",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-louvain",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Gaia Peruzzi",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese in Economics, social, political sciences and communication / altri campi" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese in Economics, social, political sciences and communication / altri campi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-tartu",
    universita: "TARTU ULIKOOL",
    citta: "Tartu",
    paese: "Estonia",
    codiceErasmus: "EE TARTU02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro fine marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro meta ottobre" },
        { cosa: "Application (autunno)", periodo: "15 marzo - 15 aprile" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-paris",
    universita: "UNIVERSITE DE VINCENNES - SAINT DENIS (PARIS VIII)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS008",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Isabella Pezzini",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-lyon",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Gaia Peruzzi",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "consigliato per seguire la maggior parte dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-rennes",
    universita: "UNIVERSITE RENNES 2",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Gaia Peruzzi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire corsi e vita universitaria; minimo B1 richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-lyon-2",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Gaia Peruzzi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "consigliato per seguire la maggior parte dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi ALLSH in francese" },
        { lingua: "Francese", livello: "C1", condizione: "per French as Second Language Department (FSL/FLE)" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi del dipartimento di inglese, riservati agli English majors" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-augsbur",
    universita: "UNIVERSITÄT AUGSBURG",
    citta: "Augsbur",
    paese: "Germania",
    codiceErasmus: "D  AUGSBUR01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Francesca Ieracitano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco; B1 completato obbligatorio per l'ammissione" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese; B1 completato obbligatorio per l'ammissione" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-munchen",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "livello richiesto entro l'inizio degli studi; almeno B1 in fase di candidatura" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco o Inglese", livello: "B2", condizione: "requisito minimo definito dagli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 15 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-riga",
    universita: "RIGAS TEHNISKA UNIVERSITATE",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Fulvio Pellegrini",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificazione o conferma ufficiale secondo CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-vilnius",
    universita: "VILNIUS UNIVERSITY",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Lingua del corso scelto", livello: "B2", condizione: "per la lingua in cui e' tenuto il corso scelto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-vilnius-2",
    universita: "VILNIUS UNIVERSITY",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Lingua del corso scelto", livello: "B2", condizione: "per la lingua in cui e' tenuto il corso scelto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-oslo",
    universita: "HOYSKOLEN KRISTIANIA - ERNST G. MORTENSENS STIFTELSE",
    citta: "Oslo",
    paese: "Norvegia",
    codiceErasmus: "N  OSLO58",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Francesca Ieracitano",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 7 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-krakow",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-warszaw",
    universita: "UNIVERSITY OF WARSAW",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Carmelo Lombardo",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti incoming" },
        { lingua: "Polacco", livello: "B2", condizione: "per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-lisboa",
    universita: "UNIVERSIDADE AUTONOMA DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA11",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Laura Ferrarotti",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "atteso prima dell'inizio dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-covilha",
    universita: "UNIVERSIDADE DA BEIRA INTERIOR",
    citta: "Covilha",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-porto",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "entro 21 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-coimbra",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 luglio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-lisboa-2",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "B1", condizione: "certificato accettato prima della mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-lisboa-3",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "B1", condizione: "certificato accettato prima della mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-covilha-2",
    universita: "UNIVERSIDADE DA BEIRA INTERIOR",
    citta: "Covilha",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0414", nome: "Marketing and advertising" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-lisboa-4",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0413", nome: "Management and administration" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "B1", condizione: "certificato accettato prima della mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-covilha-3",
    universita: "UNIVERSIDADE DA BEIRA INTERIOR",
    citta: "Covilha",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-maia",
    universita: "MAIEUTICA COOPERATIVA DE ENSINO SUPERIOR CRL",
    citta: "Maia",
    paese: "Portogallo",
    codiceErasmus: "P  MAIA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Francesca Ieracitano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-lisboa-5",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "B1", condizione: "certificato accettato prima della mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-praha",
    universita: "UNIVERZITA KARLOVA -CHARLES UNIVERSITY",
    citta: "Praha",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ PRAHA07",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Carmelo Lombardo",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "Faculty of Social Sciences: certificate or confirmation from home university" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-vallado",
    universita: "UNIVERSIDAD EUROPEA MIGUEL DE CERVANTES (U.E.M.C.)",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-bilbao",
    universita: "UNIVERSIDAD DEL PAÍS VASCO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi regolari in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi regolari in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 15 giugno" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-universidad",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato per mobilita studenti" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-madrid",
    universita: "UNIVERSIDAD UNIE S.L.",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID238",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "lingua delle lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-vigo",
    universita: "UNIVERSIDAD DE VIGO",
    citta: "Vigo",
    paese: "Spagna",
    codiceErasmus: "E  VIGO01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo/galiziano" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "dal 15 marzo al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-madrid-2",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 22 aprile al 22 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 23 settembre al 23 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 16 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-salaman",
    universita: "UNIVERSIDAD PONTIFICIA DE SALAMANCA",
    citta: "Salaman",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per mobilita Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-comm-madrid-3",
    universita: "UNIVERSIDAD UNIE S.L.",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID238",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "lingua delle lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-barcelo",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0414", nome: "Marketing and advertising" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Catalano", livello: "B1", condizione: "per corsi in catalano" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-universidad-2",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo/Galiziano", livello: "B1", condizione: "raccomandato per mobilita per studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-vallado-2",
    universita: "UNIVERSIDAD EUROPEA MIGUEL DE CERVANTES (U.E.M.C.)",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-madrid-4",
    universita: "UNIVERSIDAD ALFONSO X EL SABIO",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID17",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "lingua di insegnamento 1" },
        { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento 2, soggetta a disponibilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "18 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-madrid-5",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0319", nome: "Social and behavioural sciences, not elsewhere classified" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi di grado della Facultad de Ciencias de la Informacion" },
        { lingua: "Spagnolo", livello: "B2/C1", condizione: "per corsi di master della Facultad de Ciencias de la Informacion" },
        { lingua: "Inglese", livello: "B2", condizione: "per eventuali corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-madrid-6",
    universita: "UNIVERSIDAD UNIE S.L.",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID238",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "lingua delle lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-madrid-7",
    universita: "UNIVERSIDAD ALFONSO X EL SABIO",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID17",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "lingua di insegnamento 1" },
        { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento 2, soggetta a disponibilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "18 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Paola Panarese",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "2 marzo - 30 giugno 2026" },
        { cosa: "Nomination/Application (primavera)", periodo: "15 settembre - 29 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-comm-lugano",
    universita: "UNIVERSITA DELLA SVIZZERA ITALIANA (USI)",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Giovanna Gianturco",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Italiano", livello: "B2", condizione: "per corsi in italiano" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-fribour",
    universita: "UNIVERSITE' DE FRIBOURG",
    citta: "Fribour",
    paese: "Svizzera",
    codiceErasmus: "CH FRIBOUR01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Gaia Peruzzi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per la lingua dei corsi nel Learning Agreement; prova B2 richiesta per il visto se lingua di istruzione" },
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per la lingua dei corsi nel Learning Agreement; prova B2 richiesta per il visto se lingua di istruzione" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese; prova B2 richiesta per il visto se lingua di istruzione" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 15 marzo" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 31 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 settembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-bern",
    universita: "UNIVERSITY OF BERN",
    citta: "Bern",
    paese: "Svizzera",
    codiceErasmus: "CH BERN01",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0520", nome: "Environment, not further defined" }],
    coordinatoreCf: "Giuseppe Anzera",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per seguire corsi e sostenere esami in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per seguire corsi e sostenere esami in inglese; C1 per corsi dell'English Department" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 settembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-istanbu",
    universita: "ISTANBUL UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Laura Ferrarotti",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-ankara",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Laura Ferrarotti",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-ankara-2",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Laura Ferrarotti",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-comm-istanbu-2",
    universita: "YEDITEPE UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU21",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0321", nome: "Journalism and reporting" }],
    coordinatoreCf: "Laura Ferrarotti",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 luglio" },
        { cosa: "Application (autunno)", periodo: "entro 30 luglio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 15 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-comm-istanbu-3",
    universita: "KOC UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU17",
    dipartimentoCf: "Comunicazione e Ricerca Sociale",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Giuseppe Anzera",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studiare in inglese a Koç University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno/anno intero)", periodo: "1 aprile - 1 giugno" },
        { cosa: "Nomination e application (primavera, seconda call)", periodo: "1 settembre - 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
