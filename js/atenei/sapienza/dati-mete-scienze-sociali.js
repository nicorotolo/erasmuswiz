// ==========================================================
// METE ERASMUS - SAPIENZA - Facolta di SCIENZE POLITICHE, SOCIOLOGIA, COMUNICAZIONE - Dip. Scienze Sociali ed Economiche
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=SOCIO).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-03): 68 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (il sito gestisce L e LM).
// codiceErasmus = codice Erasmus UFFICIALE dall export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti).
// ==========================================================

var METE = [
  {
    id: "sap-socio-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" },
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B2", condizione: "per partecipare ai corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-salzbur-2",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" },
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B2", condizione: "per partecipare ai corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-louvain",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-leuven",
    universita: "KATHOLIEKE UNIVERSITEIT LEUVEN",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B  LEUVEN01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Luisa De Vita",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per bachelor/undergraduate presso Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "C1", condizione: "per master/graduate presso Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 settembre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese/Inglese", livello: "B2", condizione: "raccomandato per exchange students ULB" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bruxel-2",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese/Inglese", livello: "B2", condizione: "raccomandato per exchange students ULB" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Letteria Grazia Fassari",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studiare all'Universita di Lille" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-versail",
    universita: "UNIVERSITÉ DE VERSAILLES SAINT-QUENTIN-EN-YVELINES",
    citta: "Versail",
    paese: "Francia",
    codiceErasmus: "F  VERSAIL11",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Luisa Merolla",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per studenti Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lyon",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Luisa Merolla",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "B1-B2 consigliato per corsi prevalentemente in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-paris",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Giovanna Musso",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-poitier",
    universita: "UNIVERSITÉ DE POITIERS",
    citta: "Poitier",
    paese: "Francia",
    codiceErasmus: "F  POITIER01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese; B2 raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-socio-universite",
    universita: "UNIVERSITE LE HAVRE NORMANDIE",
    citta: "Universite",
    paese: "Francia",
    codiceErasmus: "F  LE-HAVR11",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-socio-paris-2",
    universita: "ECOLE DES HAUTES ETUDES EN SCIENCES SOCIALES DE PARIS- EHESS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS057",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "obbligatorio per studenti magistrali; B1 raccomandato per dottorandi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 10 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bordeau",
    universita: "UNIVERSITE DE BORDEAUX",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU58",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-paris-3",
    universita: "UNIVERSITE SORBONNE NOUVELLE - PARIS 3",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS003",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Emma Galli",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire corsi e completare gli elaborati; C1 puo essere richiesto da alcuni dipartimenti magistrali" },
        { lingua: "Inglese", livello: "B2", condizione: "per studenti che seguono solo corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno/anno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "dal 15 settembre al 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lille-2",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Giuseppe De Arcangelis",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studiare all'Universita di Lille" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-chamber",
    universita: "UNIVERSITÉ DE SAVOIE MONT BLANC",
    citta: "Chamber",
    paese: "Francia",
    codiceErasmus: "F  CHAMBER01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Ornella Tarola",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro fine marzo" },
        { cosa: "Application (autunno/anno)", periodo: "da meta marzo a fine aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro fine ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta ottobre a meta novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese; B2 richiesto in alcune facolta" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; C1 richiesto in alcune componenti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Application (autunno/anno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" },
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese; B2 richiesto in alcune facolta" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; C1 richiesto in alcune componenti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Application (autunno/anno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-munchen",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Rossana Galdini",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco all'inizio degli studi; almeno B1 in fase di candidatura" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-berlin",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Rossana Galdini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A2", condizione: "in fase di candidatura; B1 richiesto prima dell'inizio del semestre" },
        { lingua: "Inglese", livello: "B2", condizione: "per master con lingua di insegnamento inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Rossana Galdini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato per studenti Erasmus della Facolta di Giurisprudenza; prova del tedesco puo essere richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bamberg",
    universita: "OTTO-FRIEDRICH-UNIVERSITAT BAMBERG",
    citta: "Bamberg",
    paese: "Germania",
    codiceErasmus: "D  BAMBERG01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Rossana Galdini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto in alternativa al tedesco per studenti exchange, senza certificato in candidatura" },
        { lingua: "Tedesco", livello: "B1", condizione: "richiesto in alternativa all'inglese per studenti exchange, senza certificato in candidatura" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-aachen",
    universita: "RWTH Aachen University [RHEINISCH-WESTFÄLISCHE TECHNISCHE HOCHSCHULE AACHEN]",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D  AACHEN01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Rossana Galdini",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1.1", condizione: "in base alla scelta dei corsi e alla facolta" },
        { lingua: "Inglese", livello: "B2.1", condizione: "in base alla scelta dei corsi e alla facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-jena",
    universita: "FRIEDRICH SCHILLER UNIVERSITÄT",
    citta: "Jena",
    paese: "Germania",
    codiceErasmus: "D  JENA01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Pierluigi Montalbano",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "lingua di insegnamento" },
        { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lunebur",
    universita: "LEUPHANA UNIVERSITÄT LÜNEBURG",
    citta: "Lunebur",
    paese: "Germania",
    codiceErasmus: "D  LUNEBUR01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Pierluigi Montalbano",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio 2027" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-freibur-2",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Emma Galli",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato per studenti Erasmus della Facolta di Giurisprudenza; prova del tedesco puo essere richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-berlin-2",
    universita: "HWR-HOCHSCHULE FUR WIRTSCHAFT UND RECHT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN06",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Ornella Tarola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 1 aprile" },
        { cosa: "Application (autunno)", periodo: "15 marzo - 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 8, livello: "L", note: "" },
      { numero: 2, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello completato per corsi in tedesco; B2 raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "livello completato per corsi in inglese; B2 raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-kallith",
    universita: "PANTION PANEPISTIMIO KINONIKON KE POLITIKON EPISTIMON",
    citta: "Kallith",
    paese: "Grecia",
    codiceErasmus: "G  KALLITH02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "come requisito minimo definito dall'accordo bilaterale" },
        { lingua: "Inglese", livello: "B2", condizione: "come requisito minimo definito dall'accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (anno intero)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (anno intero)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-krakow",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Polacco", livello: "B2", condizione: "per corsi in polacco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (anno intero)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (anno intero)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-krakow-2",
    universita: "AKADEMIA GORNICZO-HUTNICZA IM. STANISLAWA STASZICA W KRAKOWIE",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Polacco", livello: "B2", condizione: "per corsi in polacco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (anno intero)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 17 maggio 2026" },
        { cosa: "Application (anno intero)", periodo: "entro 17 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lisboa",
    universita: "University Institute of Lisbon - (ISCTE-IUL) INSTITUTO UNIVERSITÁRIO DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA07",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B2", condizione: "per corsi in portoghese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-lisboa-2",
    universita: "UNIVERSIDADE AUTONOMA DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA11",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Ornella Tarola",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "per corsi in portoghese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-porto",
    universita: "Cooperativa de Ensino Superior de Serviço Social",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO11",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Lorenza Di Pentima",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per mobilita' di studio incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-southam",
    universita: "UNIVERSITY OF SOUTHAMPTON",
    citta: "Southam",
    paese: "Regno Unito",
    codiceErasmus: "UK SOUTHAM01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per exchange students single-semester da partner universities" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 29 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-olomouc",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e' indicato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination/Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-bucures-3",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Letteria Grazia Fassari",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "generale all'inizio del semestre" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per studenti della Faculty of Medicine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 25 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-vallado",
    universita: "UNIVERSIDAD DE VALLADOLID",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Luisa Merolla",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo; A2 ammesso con corso intensivo UVa" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per corsi in inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi degli International Semester Programmes" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per seguire corsi in inglese presso la Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 29 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 23 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "16 febbraio - 19 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 6 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bilbao",
    universita: "UNIVERSIDAD DEL PAÍS VASCO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo presso la Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato minimo necessario per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bilbao-2",
    universita: "UNIVERSIDAD DEL PAÍS VASCO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo presso la Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato minimo necessario per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi ordinari in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 17 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 29 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 29 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 29 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-madrid",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo generale; requisiti specifici possono variare per facolta/centro" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "15 marzo - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 20 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-tenerif",
    universita: "UNIVERSIDAD DE LA LAGUNA",
    citta: "Tenerif",
    paese: "Spagna",
    codiceErasmus: "E  TENERIF01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo richiesto per studenti Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Fabrizio Pirro",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-socio-valenci",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Luca Salmieri",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 31 ottobre" },
        { cosa: "Application (dopo accettazione)", periodo: "consigliata entro 30 giorni dalla ricezione dell'email UV" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-valenci-2",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Luca Salmieri",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 31 ottobre" },
        { cosa: "Application (dopo accettazione)", periodo: "consigliata entro 30 giorni dalla ricezione dell'email UV" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-universidad",
    universita: "UNIVERSIDAD DE LAS PALMAS DE GRAN CANARIA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Assunta Viteritti",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 24 febbraio al 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 2 ottobre al 10 novembre 2026" },
        { cosa: "Application/documenti piattaforma (autunno/anno intero)", periodo: "entro 31 luglio" },
        { cosa: "Application/documenti piattaforma (primavera)", periodo: "entro 30 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-universidad-2",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Assunta Viteritti",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "prima del 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "prima del 1 novembre" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-huelva",
    universita: "UNIVERSIDAD DE HUELVA",
    citta: "Huelva",
    paese: "Spagna",
    codiceErasmus: "E  HUELVA01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Assunta Viteritti",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per successo accademico" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per successo accademico" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-socio-huelva-2",
    universita: "UNIVERSIDAD DE HUELVA",
    citta: "Huelva",
    paese: "Spagna",
    codiceErasmus: "E  HUELVA01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Assunta Viteritti",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per successo accademico" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per successo accademico" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-socio-vallado-2",
    universita: "UNIVERSIDAD DE VALLADOLID",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Emma Galli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo; A2 ammesso con corso intensivo UVa" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per corsi in inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi degli International Semester Programmes" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-barcelo",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Orazio Giancola",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Application (autunno)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-socio-badajoz",
    universita: "UNIVERSIDAD DE EXTREMADURA",
    citta: "Badajoz",
    paese: "Spagna",
    codiceErasmus: "E  BADAJOZ01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Marco Antonio Marini",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per la maggior parte degli insegnamenti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "7 aprile - 22 giugno 2026" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 30 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-sevilla",
    universita: "UNIVERSIDAD PABLO DE OLAVIDE",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA03",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Grazia Galantino",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 30 maggio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-socio-pamplon",
    universita: "UNIVERSIDAD PUBLICA DE NAVARRA (UPNA)",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Maria Grazia Galantino",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato o attestazione richiesti per corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 24 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 14 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-bilbao-3",
    universita: "UNIVERSIDAD DE DEUSTO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO02",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Lorenza Di Pentima",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-alicant",
    universita: "UNIVERSIDAD DE ALICANTE",
    citta: "Alicant",
    paese: "Spagna",
    codiceErasmus: "E  ALICANT01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Luis Francesc Peris Cancio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-madrid-2",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-stockho",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Federico Goddi",
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
    id: "sap-socio-stockho-2",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Federico Goddi",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-ankara",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Pierluigi Montalbano",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-socio-istanbu",
    universita: "ISTANBUL GELISIM UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU32",
    dipartimentoCf: "Scienze Sociali ed Economiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Ornella Tarola",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
