// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. di Scienze statistiche
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=STATIS).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 38 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-stat-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 3, mesi: 8, livello: "L", note: "" },
      { numero: 3, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68387."
  },
  {
    id: "sap-stat-klagenf",
    universita: "UNIVERSITAT KLAGENFURT",
    citta: "Klagenf",
    paese: "Austria",
    codiceErasmus: "A  KLAGENF01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.aau.at/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68108."
  },
  {
    id: "sap-stat-graz",
    universita: "KARL-FRANZENS UNIVERSITÄT GRAZ",
    citta: "Graz",
    paese: "Austria",
    codiceErasmus: "A  GRAZ01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://INTERNATIONAL.UNI-GRAZ.AT/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68105."
  },
  {
    id: "sap-stat-louvain",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uclouvain.be/fr/index.html",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68119."
  },
  {
    id: "sap-stat-leuven",
    universita: "KATHOLIEKE UNIVERSITEIT LEUVEN",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B  LEUVEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.kuleuven.be/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71480."
  },
  {
    id: "sap-stat-sofia",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unwe.acad.bg",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68124."
  },
  {
    id: "sap-stat-sofia-2",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unwe.acad.bg",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68121."
  },
  {
    id: "sap-stat-sofia-3",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unwe.acad.bg",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68122."
  },
  {
    id: "sap-stat-sofia-4",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0412", nome: "Finance, banking and insurance" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unwe.acad.bg",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68123."
  },
  {
    id: "sap-stat-limasso",
    universita: "CYPRUS UNIVERISTY OF TECHNOLOGY- TECHNOLOGIKO PANEPISTIMIO KYPROU",
    citta: "Limasso",
    paese: "Cipro",
    codiceErasmus: "CY LIMASSO02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.cut.ac.cy/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68133."
  },
  {
    id: "sap-stat-helsink",
    universita: "HELSINGIN YLIOPISTO",
    citta: "Helsink",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.helsinki.fi/en",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68386."
  },
  {
    id: "sap-stat-paris",
    universita: "L‘INSTITUT AGRO Rennes Angers -INSTITUT NATIONAL D'ENSEIGNEMENT SUPERIEUR POUR L'AGRICULTURE, L'ALIMENTATION ET L'ENVIRONNEMENT - [former F RENNES47]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS487",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.institut-agro-rennes-angers.fr/ecole/decouvrir-linstitut-agro-rennes-angers",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68272."
  },
  {
    id: "sap-stat-antony",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68235."
  },
  {
    id: "sap-stat-antony-2",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68233."
  },
  {
    id: "sap-stat-vaulxv",
    universita: "ECOLE NATIONALE DES TRAVAUX PUBLICS DE L`ETAT",
    citta: "Vaulx-v",
    paese: "Francia",
    codiceErasmus: "F  VAULX-V02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.entpe.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68280."
  },
  {
    id: "sap-stat-paris-2",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68260."
  },
  {
    id: "sap-stat-rennes",
    universita: "ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ANALYSE DE L'INFORMATION",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES32",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "AGOSTINO DI CIACCIO",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensai.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68274."
  },
  {
    id: "sap-stat-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "GIULIA ZACCHIA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68253."
  },
  {
    id: "sap-stat-trier",
    universita: "UNIVERSITÄT TRIER",
    citta: "Trier",
    paese: "Germania",
    codiceErasmus: "D  TRIER01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.auslandsamt.uni-trier.de",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68168."
  },
  {
    id: "sap-stat-dortmun",
    universita: "Technische Universität Dortmund",
    citta: "Dortmun",
    paese: "Germania",
    codiceErasmus: "D  DORTMUN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-dortmund.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68147."
  },
  {
    id: "sap-stat-frankfu",
    universita: "JOHANN  WOLFGANG GOETHE UNIVERSITÄT",
    citta: "Frankfu",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-frankfurt.de/international",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68152."
  },
  {
    id: "sap-stat-essen",
    universita: "UNIVERSITÄT DUISBURG-ESSEN",
    citta: "Essen",
    paese: "Germania",
    codiceErasmus: "D  ESSEN04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duisburg-essen.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68151."
  },
  {
    id: "sap-stat-erfurt",
    universita: "UNIVERSITÄT ERFURT",
    citta: "Erfurt",
    paese: "Germania",
    codiceErasmus: "D  ERFURT05",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-erfurt.de/foreign",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68149."
  },
  {
    id: "sap-stat-essen-2",
    universita: "UNIVERSITÄT DUISBURG-ESSEN",
    citta: "Essen",
    paese: "Germania",
    codiceErasmus: "D  ESSEN04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duisburg-essen.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68150."
  },
  {
    id: "sap-stat-siegen",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68165."
  },
  {
    id: "sap-stat-bremen",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-bremen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68146."
  },
  {
    id: "sap-stat-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68413."
  },
  {
    id: "sap-stat-egaleo",
    universita: "PANEPISTIMIO DYTIKIS ATTIKIS",
    citta: "Egaleo",
    paese: "Grecia",
    codiceErasmus: "G  EGALEO02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uniwa.gr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71552."
  },
  {
    id: "sap-stat-opole",
    universita: "Uniwersitet Opolski",
    citta: "Opole",
    paese: "Polonia",
    codiceErasmus: "PL OPOLE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni.opole.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68336."
  },
  {
    id: "sap-stat-opole-2",
    universita: "Uniwersitet Opolski",
    citta: "Opole",
    paese: "Polonia",
    codiceErasmus: "PL OPOLE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni.opole.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68337."
  },
  {
    id: "sap-stat-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.US.ES",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68214."
  },
  {
    id: "sap-stat-madrid",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UCM.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68191."
  },
  {
    id: "sap-stat-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA68208."
  },
  {
    id: "sap-stat-lugano",
    universita: "UNIVERSITA DELLA SVIZZERA ITALIANA (USI)",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.relint.usi.ch",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68129."
  },
  {
    id: "sap-stat-istanbu",
    universita: "ISTANBUL TICARET UNIVERSITESI (ISTANBUL COMMERCE UNIVERSITY)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU10",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.iticu.edu.tr/english/eng_index.htm",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68365."
  },
  {
    id: "sap-stat-ankara",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://akts.hacettepe.edu.tr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68359."
  },
  {
    id: "sap-stat-istanbu-2",
    universita: "MIMAR SINAN GUZEL SANATLAR UNIVERSITESI   [MIMAR SINAN FINE ARTS UNIVERSITY]",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU06",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://msgsu.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68364."
  },
  {
    id: "sap-stat-istanbu-3",
    universita: "ISTANBUL TEKNIK ÜNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "041", nome: "Business and administration" }],
    coordinatoreCf: "MARCELLA CORSI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.itu.edu.tr/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68363."
  }
];
