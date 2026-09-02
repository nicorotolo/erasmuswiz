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

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70105. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    scadenzeOspitante: [
        { cosa: "Nomination (first semester or full year)", periodo: "At the latest by 1 May" },
        { cosa: "Nomination (second semester)", periodo: "At the latest on 1October" },
        { cosa: "Application (first semester or full year)", periodo: "By 15 May at the latest" },
        { cosa: "Application (second semester)", periodo: "By 15 October at the latest" }
      ],
    linkSito: "https://www.sciencespo-aix.fr/",
    linkCatalogo: "https://www.sciencespo-aix.fr/international/etudier-a-sciences-po-aix/cours/",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70094. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    scadenzeOspitante: [
        { cosa: "Nomination deadline for 1st semester and full academic year", periodo: "30 April" },
        { cosa: "Nomination deadline for 2nd semester", periodo: "31 October" },
        { cosa: "Application deadline for 1st semester and full academic year", periodo: "15 May" },
        { cosa: "Application deadline for 2nd semester", periodo: "15 November" }
      ],
    linkSito: "http://www.univ-nantes.fr/foreignstudents",
    notaDisponibilita: "Almeno il 70% dei corsi selezionati deve appartenere all'area di studio coperta dall'accordo bilaterale.",

    linkCatalogo: "https://www.univ-nantes.fr/international/venir-a-nantes/incoming-exchange-students-class-catalog",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70098. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    linkCatalogo: "https://uni-freiburg.link/vvz",
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
    scadenzeOspitante: [
        { cosa: "Application (semestre estivo)", periodo: "da meta dicembre al 15 gennaio" },
        { cosa: "Application (semestre invernale)", periodo: "da meta maggio al 15 luglio" }
      ],
    linkSito: "https://www.tu-chemnitz.de/",
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notaDisponibilita: "Erasmus/exchange students are not required to provide a language certificate.",

    linkCatalogo: "https://www.tu-chemnitz.de/international/incoming/erasmus/vlvz.php.en",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70061. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    scadenzeOspitante: [
        { cosa: "Nomination (semestre invernale)", periodo: "15 marzo - 1 maggio" },
        { cosa: "Nomination (semestre estivo)", periodo: "15 settembre - 1 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Winter semester (fall)", periodo: "15.07. f or EU - students (31.05. recommended f or n on- EU - students)" },
        { cosa: "Summer semester (spring)", periodo: "15.01. f or EU - students (30.11. recommended f or n on- EU - students)" }
      ],
    linkSito: "http://www.euv-frankfurt-o.de",
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70065. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71533. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    scadenzeOspitante: [
        { cosa: "Application (semestre invernale)", periodo: "entro 15 giugno" },
        { cosa: "Application (semestre estivo)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.us.edu.pl/en/",
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkCatalogo: "https://informator.us.edu.pl/modules",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70124. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    requisitoLingua: { op: "ALL", figli: [
        { lingua: "Inglese", livello: "B2" }
      ], fonte: "https://bwm.uken.krakow.pl/incoming/exchange-student-application-procedure/", verificatoIl: "2026-07-29" },
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination deadline for winter semester", periodo: "April 30, 2026" },
        { cosa: "Nomination deadline for summer semester", periodo: "October 15, 2026" },
        { cosa: "Application deadline for winter semester", periodo: "May 31, 2026" },
        { cosa: "Application deadline for summer semester", periodo: "November 31, 2026" }
      ],
    linkSito: "https://www.uken.krakow.pl/",
    notaDisponibilita: "I moduli partono a condizione che vi siano almeno 3 studenti iscritti. Gli studenti incoming devono scegliere un modulo completo da 30 ECTS.",

    linkCatalogo: "https://bwm.uken.krakow.pl/incoming/modules-2025-2026/",

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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (semestre autunnale)", periodo: "entro 1 giugno" },
        { cosa: "Application (semestre autunnale)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (semestre primaverile)", periodo: "entro 1 novembre" },
        { cosa: "Application (semestre primaverile)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://umfst.ro/",
    linkCatalogo: "https://www.umfst.ro/home.html",

    notaDisponibilita: "Per il catalogo corsi consultare l'università/facoltà.",

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
    linkCatalogo: "https://erasmusmi.um.es/erasmusmi/erasmusmi.public.academicoffer.do?i_p=clear&t_m=clear",
    notaDisponibilita: "Interested applicants must apply for one of the offers included in the Academic Catalogue , according to their profile (Bachelor's, Master's, PhD, administrative staff, or academic staff.",
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
    notaDisponibilita: "They are required to take at least 50% of the total credit from the department, which they are nominated for.",
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
    linkCatalogo: "https://bilsis.hacettepe.edu.tr/oibs/bologna/",
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
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71532. || Lingua: CEFR non trovato dopo ricerca approfondita"
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
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70115. || Lingua: CEFR non trovato dopo ricerca approfondita"
  }
];
