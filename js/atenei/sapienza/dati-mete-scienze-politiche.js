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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "per corsi in croato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (primo semestre)", periodo: "entro fine maggio" },
        { cosa: "Nomination (secondo semestre)", periodo: "entro fine dicembre" }
      ],
    linkSito: "http://www.ephe.sorbonne.fr",
    linkCatalogo: "https://www.ephe.psl.eu/formations-conferences",

    notaDisponibilita: "Lo status di studente in scambio è rivolto esclusivamente a studenti di livello Master e Dottorato.",

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
    linkCatalogo: "https://www.sciencespo-aix.fr/international/etudier-a-sciences-po-aix/cours/",

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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 marzo al 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 15 maggio 2026" },
        { cosa: "Application tardiva (autunno)", periodo: "dal 16 maggio al 25 giugno 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B2/C1 raccomandato per Faculty of Business, Economics and Management Information Systems" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 15 novembre" }
      ],
    linkSito: "http://www.uni-regensburg.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70068. || Scadenze: Universit�t Regensburg exchange application, nomination 1/5 e 1/11, application 1/4-15/5 e 1/9-15/11 || Lingua: B2 tedesco per corsi in tedesco; B2 inglese per corsi in inglese, B2/C1 indicato per la Faculty of Business, Economics and Management Information Systems"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato per studenti Erasmus della Facolta di Giurisprudenza; prova del tedesco puo essere richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 10 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.uni-freiburg.de/go/erasmus",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70066. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "richiesto certificato formale solo per i programmi Study of Religion, English Studies e Law" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    linkCatalogo: "https://campusonline.uni-bayreuth.de/ubto/webnav.ini",

    notaDisponibilita: "Il programma di scambio scelto deve essere coerente con il piano di studi dell'università di origine.",

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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "richiesto per corsi con tedesco come lingua di insegnamento" },
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per corsi con inglese come lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (winter semester)", periodo: "entro 1 maggio" },
        { cosa: "Application (winter semester)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Nomination (summer semester)", periodo: "entro 15 novembre" },
        { cosa: "Application (summer semester)", periodo: "dal 15 settembre al 1 dicembre" }
      ],
    linkSito: "https://www.thws.de/",
    linkCatalogo: "https://international.thws.de/en/thws-international/ways-to-thws/study-programmes-at-thws/module-handbooks/",

    notaDisponibilita: "Sono ammessi gli studenti iscritti a corsi di laurea Triennale (Bachelor). Per gli studenti di livello Magistrale (Master) sono previste restrizioni per alcuni programmi.",

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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi o documentazione in inglese" },
        { lingua: "Francese", livello: "B1", condizione: "per corsi o documentazione in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 luglio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 agosto" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://fenrir.info.uaic.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71534. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi regolari in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi regolari in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "1 aprile - 15 giugno" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
      ],
    linkSito: "http://www.um.es/internacionales",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70083. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "certificato di spagnolo obbligatorio per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70084. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Italiano", livello: "B2", condizione: "per corsi in italiano" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    linkSito: "http://www.yeditepe.edu.tr/en",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70143. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2023/24 || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per mobilita studenti; indicato come B1/2 nel documento" },
        { lingua: "Turco", livello: "B2", condizione: "per mobilita studenti; indicato come B2/C1 nel documento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (autunno)", periodo: "entro 15 agosto" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://akts.hacettepe.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70140. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito linguistico per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
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
