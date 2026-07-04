// ==========================================================
// METE ERASMUS - SAPIENZA - POLO DI LATINA
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=POLAT).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 33 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-polat-zagreb",
    universita: "SVEUCILIŠTE U ZAGREBU - UNIVERSITY OF ZAGREB",
    citta: "Zagreb",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Maurizio ORLANDI",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://international.unizg.hr/relations",
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli). Accordo ERA69658."
  },
  {
    id: "sap-polat-brest",
    universita: "BREST BUSINESS SCHOOL/ECOLE SUPERIEURE DE COMMERCE DE BREST",
    citta: "Brest",
    paese: "Francia",
    codiceErasmus: "F  BREST29",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Maurizio ORLANDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://brest-bs.com/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69657."
  },
  {
    id: "sap-polat-munster",
    universita: "UNIVERSITÄT MÜNSTER",
    citta: "Munster",
    paese: "Germania",
    codiceErasmus: "D  MUNSTER01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CRISTINA SIMONE",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-muenster.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69640."
  },
  {
    id: "sap-polat-nurnber",
    universita: "TECHNISCHE HOCHSCHULE NURNBERG GEORG SIMON OHM",
    citta: "Nurnber",
    paese: "Germania",
    codiceErasmus: "D  NURNBER02",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Bernardino QUATTROCIOCCHI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.th-nuernberg.de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69641."
  },
  {
    id: "sap-polat-nurnber-2",
    universita: "TECHNISCHE HOCHSCHULE NURNBERG GEORG SIMON OHM",
    citta: "Nurnber",
    paese: "Germania",
    codiceErasmus: "D  NURNBER02",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Bernardino QUATTROCIOCCHI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.th-nuernberg.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69642."
  },
  {
    id: "sap-polat-clausth",
    universita: "TECHNISCHE UNIVERSITAT CLAUSTHAL",
    citta: "Clausth",
    paese: "Germania",
    codiceErasmus: "D  CLAUSTH01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Alberto Budoni",
    posti: [
      { numero: 1, mesi: 3, livello: "L", note: "" },
      { numero: 1, mesi: 3, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tu-clausthal.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69639."
  },
  {
    id: "sap-polat-warszaw",
    universita: "Wyzsza Szkola Ekologii i Zarzadzania w Warszawie",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW41",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://eng.wseiz.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69664."
  },
  {
    id: "sap-polat-katowic",
    universita: "UNIWERSYTET EKONOMICZNY W KATOWICACH",
    citta: "Katowic",
    paese: "Polonia",
    codiceErasmus: "PL KATOWIC02",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ue.katowice.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69663."
  },
  {
    id: "sap-polat-warszaw-2",
    universita: "Wyzsza Szkola Ekologii i Zarzadzania w Warszawie",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW41",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Giuseppe BONIFAZI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://eng.wseiz.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69665."
  },
  {
    id: "sap-polat-wroclaw",
    universita: "UNIWERSYTET EKONOMICZNY WE WROCLAWIU",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW03",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Annamaria Tarola",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ue.wroc.pl/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69666."
  },
  {
    id: "sap-polat-porto",
    universita: "INSTITUTO POLITECNICO DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO05",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipp.pt/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69662."
  },
  {
    id: "sap-polat-skopje",
    universita: "Univerzitet za Turizam i Menagment vo Skopje",
    citta: "Skopje",
    paese: "Macedonia del Nord",
    codiceErasmus: "MK SKOPJE15",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Giulia ROTUNDO",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.utms.edu.mk/en/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA69660."
  },
  {
    id: "sap-polat-hradec",
    universita: "UNIVERZITA HRADEC KRALOVE",
    citta: "Hradec",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ HRADEC01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Annamaria Tarola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uhk.cz/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69638."
  },
  {
    id: "sap-polat-bucures",
    universita: "UNIVERSITATEA ROMANO AMERICANA",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES18",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Paola CAMPANA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.rau.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69672."
  },
  {
    id: "sap-polat-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Paola CAMPANA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69670."
  },
  {
    id: "sap-polat-bucures-3",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Paola CAMPANA",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69671."
  },
  {
    id: "sap-polat-craiova",
    universita: "UNIVERSITATEA DIN CRAIOVA",
    citta: "Craiova",
    paese: "Romania",
    codiceErasmus: "RO CRAIOVA01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucv.ro/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69674."
  },
  {
    id: "sap-polat-bucures-4",
    universita: "UNIVERSITATEA ROMANO AMERICANA",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES18",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.rau.ro/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69673."
  },
  {
    id: "sap-polat-brasov",
    universita: "UNIVERSITATEA TRANSILVANIA DIN BRASOV",
    citta: "Brasov",
    paese: "Romania",
    codiceErasmus: "RO BRASOV01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Silvia SERRANTI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://unitbv.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69667."
  },
  {
    id: "sap-polat-bratisl",
    universita: "COMENIUS UNIVERSITY IN BRATISLAVA",
    citta: "Bratisl",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL02",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www..uniba.sk",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69675."
  },
  {
    id: "sap-polat-madrid",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "LAURA MARIOTTINI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UCM.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69648."
  },
  {
    id: "sap-polat-vallado",
    universita: "UNIVERSIDAD DE VALLADOLID",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "LAURA MARIOTTINI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uva.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69656."
  },
  {
    id: "sap-polat-sevilla",
    universita: "UNIVERSIDAD PABLO DE OLAVIDE",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA03",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upo.es",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69655."
  },
  {
    id: "sap-polat-murcia",
    universita: "UNIVERSIDAD POLITECNICA DE CARTAGENA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA04",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upct.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69650."
  },
  {
    id: "sap-polat-huelva",
    universita: "UNIVERSIDAD DE HUELVA",
    citta: "Huelva",
    paese: "Spagna",
    codiceErasmus: "E  HUELVA01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Paola CAMPANA",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uhu.es/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69646."
  },
  {
    id: "sap-polat-huelva-2",
    universita: "UNIVERSIDAD DE HUELVA",
    citta: "Huelva",
    paese: "Spagna",
    codiceErasmus: "E  HUELVA01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Paola CAMPANA",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uhu.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69647."
  },
  {
    id: "sap-polat-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Maurizio ORLANDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69653."
  },
  {
    id: "sap-polat-oviedo-2",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Maurizio ORLANDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69654."
  },
  {
    id: "sap-polat-murcia-2",
    universita: "UNIVERSIDAD POLITECNICA DE CARTAGENA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA04",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upct.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69651."
  },
  {
    id: "sap-polat-murcia-3",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.um.es/internacionales",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69649."
  },
  {
    id: "sap-polat-canakka",
    universita: "CANAKKALE ONSEKIZ MART ÜNIVERSITESI",
    citta: "Canakka",
    paese: "Turchia",
    codiceErasmus: "TR CANAKKA01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.comu.edu.tr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69677."
  },
  {
    id: "sap-polat-erzurum",
    universita: "ATATÜRK ÜNIVERSITESI - Ataturk University",
    citta: "Erzurum",
    paese: "Turchia",
    codiceErasmus: "TR ERZURUM01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCESCO MERCURI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.atauni.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69678."
  },
  {
    id: "sap-polat-erzurum-2",
    universita: "ATATÜRK ÜNIVERSITESI - Ataturk University",
    citta: "Erzurum",
    paese: "Turchia",
    codiceErasmus: "TR ERZURUM01",
    dipartimentoCf: "Polo di Latina",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Giuseppe BONIFAZI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.atauni.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69679."
  }
];
