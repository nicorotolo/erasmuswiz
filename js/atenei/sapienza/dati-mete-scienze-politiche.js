// ==========================================================
// METE ERASMUS - SAPIENZA - SCIENZE POLITICHE, SOCIOLOGIA, COMUNICAZIONE - Dip. Scienze Politiche
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=POLIT).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 24 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-polit-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "FEDERICO GODDI",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70049."
  },
  {
    id: "sap-polit-zagreb",
    universita: "SVEUCILIŠTE U ZAGREBU - UNIVERSITY OF ZAGREB",
    citta: "Zagreb",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Gianluca PASSARELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://international.unizg.hr/relations",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70112."
  },
  {
    id: "sap-polit-paris",
    universita: "EPHE - ÉCOLE PRATIQUE DES HAUTES ÉTUDES",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS054",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Tito MARCI",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ephe.sorbonne.fr",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70105."
  },
  {
    id: "sap-polit-marseil",
    universita: "INSTITUT D'ETUDES POLITIQUES",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL55",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Beatrice BONAFE'",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.sciencespo-aix.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70094."
  },
  {
    id: "sap-polit-angers",
    universita: "UNIVERSITÉ DE ANGERS",
    citta: "Angers",
    paese: "Francia",
    codiceErasmus: "F  ANGERS01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Beatrice BONAFE'",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-angers.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70087."
  },
  {
    id: "sap-polit-nantes",
    universita: "UNIVERSITE DE NANTES",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Giulio MICHELETTA",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-nantes.fr/foreignstudents",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70098."
  },
  {
    id: "sap-polit-regensb",
    universita: "UNIVERSITÄT REGENSBURG",
    citta: "Regensb",
    paese: "Germania",
    codiceErasmus: "D  REGENSB01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Fulco LANCHESTER",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-regensburg.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70068."
  },
  {
    id: "sap-polit-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Tito MARCI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-freiburg.de/go/erasmus",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70066."
  },
  {
    id: "sap-polit-chemnit",
    universita: "TECHNISCHE UNIVERSITAT CHEMNITZ-ZWICKAU",
    citta: "Chemnit",
    paese: "Germania",
    codiceErasmus: "D  CHEMNIT01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "MARIA GRAZIA RODOMONTE",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tu-chemnitz.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70061."
  },
  {
    id: "sap-polit-bayreut",
    universita: "UNIVERSITAT BAYREUTH",
    citta: "Bayreut",
    paese: "Germania",
    codiceErasmus: "D  BAYREUT01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "Roberta IANNONE",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70058."
  },
  {
    id: "sap-polit-wurzbur",
    universita: "UNIVERSITY OF APPLIED SCIENCES WUERZBURG-SCHWEINFURT",
    citta: "Wurzbur",
    paese: "Germania",
    codiceErasmus: "D  WURZBUR03",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Luigino MANCA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.thws.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70070."
  },
  {
    id: "sap-polit-frankfu",
    universita: "EUROPA-UNIVERSITAT VIADRINA FRANKURT AND DER ODER",
    citta: "Frankfu",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU08",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Francesco BATTAGLIA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.euv-frankfurt-o.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70065."
  },
  {
    id: "sap-polit-warszaw",
    universita: "AKADEMIA SZTUKI WOJENNEJ",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW68",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "ASTRID ZEI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.akademia.mil.pl/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71533."
  },
  {
    id: "sap-polit-katowic",
    universita: "UNIWERSYTET SLASKI",
    citta: "Katowic",
    paese: "Polonia",
    codiceErasmus: "PL KATOWIC01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Fabio GIGLIONI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.us.edu.pl/en/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70124."
  },
  {
    id: "sap-polit-krakow",
    universita: "UNIWERSYTET KOMISJI EDUKACJI NARODOWEJ W KRAKOWIE",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW05",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Edoardo BORIA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uken.krakow.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70126."
  },
  {
    id: "sap-polit-targu",
    universita: "UNIVERSITATEA DE MEDICINA, FARMACIE, STIINTE SI TEHNOLOGIE \"GEORGE EMIL PALADE\" DIN TARGU MURES",
    citta: "Targu",
    paese: "Romania",
    codiceErasmus: "RO TARGU02",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Alessandro VAGNINI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://umfst.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70134."
  },
  {
    id: "sap-polit-iasi",
    universita: "UNIVERSITATEA \"ALEXANDRU IOAN CUZA\"",
    citta: "Iasi",
    paese: "Romania",
    codiceErasmus: "RO IASI02",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Renata GRAVINA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://fenrir.info.uaic.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71534."
  },
  {
    id: "sap-polit-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Gianluca PASSARELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.um.es/internacionales",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70083."
  },
  {
    id: "sap-polit-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Francesco BATTAGLIA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70084."
  },
  {
    id: "sap-polit-istanbu",
    universita: "YEDITEPE UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU21",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Tito MARCI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.yeditepe.edu.tr/en",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70143."
  },
  {
    id: "sap-polit-ankara",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Tito MARCI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://akts.hacettepe.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70140."
  },
  {
    id: "sap-polit-budapes",
    universita: "PAZMANY PETER CATHOLIC UNIVERSITY",
    citta: "Budapes",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES12",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "ASTRID ZEI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ppke.hu/en",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71531."
  },
  {
    id: "sap-polit-gyor",
    universita: "SZECHENYI ISTVAN EGYETEM",
    citta: "Gyor",
    paese: "Ungheria",
    codiceErasmus: "HU GYOR01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "ASTRID ZEI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni.sze.hu",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71532."
  },
  {
    id: "sap-polit-pecs",
    universita: "PÉCSI TUDOMÁNYEGYETEM",
    citta: "Pecs",
    paese: "Ungheria",
    codiceErasmus: "HU PECS01",
    dipartimentoCf: "Scienze Politiche",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Alessandro VAGNINI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.pte.hu",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70115."
  }
];
