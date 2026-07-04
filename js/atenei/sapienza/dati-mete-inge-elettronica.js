// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. Ingegneria dell'informazione, elettronica e TLC (DIET)
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=IIIS).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 26 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-diet-split",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Split",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "MARTA CAVAGNARO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unist.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68295."
  },
  {
    id: "sap-diet-lille",
    universita: "Institut Mines-Télécom Nord Europe  - IMT LILLE DOUAI",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE91",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://imt-lille-douai.fr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68248."
  },
  {
    id: "sap-diet-lille-2",
    universita: "Institut Mines-Télécom Nord Europe  - IMT LILLE DOUAI",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE91",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://imt-lille-douai.fr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68247."
  },
  {
    id: "sap-diet-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68407."
  },
  {
    id: "sap-diet-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68408."
  },
  {
    id: "sap-diet-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68411."
  },
  {
    id: "sap-diet-paris",
    universita: "UNIVERSITE PARIS 13 - PARIS NORD",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS013",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "STEFANIA COLONNESE",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-spn.fr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68263."
  },
  {
    id: "sap-diet-paris-2",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PAOLO BURGHIGNOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68269."
  },
  {
    id: "sap-diet-braunsc",
    universita: "TECHNISCHE UNIVERSITÄT CAROLO-WILHELMINA ZU BRAUNSCHWEIG",
    citta: "Braunsc",
    paese: "Germania",
    codiceErasmus: "D  BRAUNSC01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tu-braunschweig.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68145."
  },
  {
    id: "sap-diet-hannove",
    universita: "GOTTFRIED WILHELM LEIBNIZ UNIVERSITAET HANNOVER",
    citta: "Hannove",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hannover.de",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68155."
  },
  {
    id: "sap-diet-landshu",
    universita: "HOCHSCHULE LANDSHUT - HOCHSCHULE FÜR ANGEWANDTE WISSENSCHAFTEN",
    citta: "Landshu",
    paese: "Germania",
    codiceErasmus: "D  LANDSHU01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.haw-landshut.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68161."
  },
  {
    id: "sap-diet-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68414."
  },
  {
    id: "sap-diet-pireas",
    universita: "PANEPISTIMIO PIREOS (EX A.V.S.P.)",
    citta: "Pireas",
    paese: "Grecia",
    codiceErasmus: "G  PIREAS01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "LUCA DE NARDIS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unipi.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68293."
  },
  {
    id: "sap-diet-czestoc",
    universita: "POLITECHNIKA CZESTOCHOWSKA",
    citta: "Czestoc",
    paese: "Polonia",
    codiceErasmus: "PL CZESTOC01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Christian Napoli",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pcz.pl/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71656."
  },
  {
    id: "sap-diet-lisboa",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0611", nome: "Computer use" }],
    coordinatoreCf: "Danilo Comminiello",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ulusofona.pt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71679."
  },
  {
    id: "sap-diet-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "MARCO BALSI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68213."
  },
  {
    id: "sap-diet-barcelo",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "LUCA DE NARDIS",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68174."
  },
  {
    id: "sap-diet-laspal",
    universita: "UNIVERSIDAD DE LAS PALMAS DE GRAN CANARIA",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ALESSANDRO TRIFILETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ulpgc.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68189."
  },
  {
    id: "sap-diet-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANDREA BAIOCCHI",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68185."
  },
  {
    id: "sap-diet-granada-2",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANDREA BAIOCCHI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68186."
  },
  {
    id: "sap-diet-avila",
    universita: "UNIVERSIDAD CATOLICA DE AVILA \"SANTA TERESA DE JESUS\"",
    citta: "Avila",
    paese: "Spagna",
    codiceErasmus: "E  AVILA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Fabrizio Frezza",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucavila.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68170."
  },
  {
    id: "sap-diet-madrid",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PAOLO BURGHIGNOLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urjc.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68201."
  },
  {
    id: "sap-diet-mataro",
    universita: "FUNDACIO´ PUBLICA TECNOCAMPUS MATARO´-MARESME",
    citta: "Mataro",
    paese: "Spagna",
    codiceErasmus: "E  MATARO01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Danilo Comminiello",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tecnocampus.cat/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68206."
  },
  {
    id: "sap-diet-lugano",
    universita: "SCUOLA UNIVERSITARIA PROFESSIONALE DELLA SVIZZERA ITALIANA",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO02",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.supsi.ch/international/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68131."
  },
  {
    id: "sap-diet-ankara",
    universita: "ANKARA UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PIERFRANCESCO LOMBARDO",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://en.ankara.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68358."
  },
  {
    id: "sap-diet-istanbu",
    universita: "MILLI SAVUNMA UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU63",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Fabrizio Frezza",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://msu.edu.tr/eng/default",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68366."
  }
];
