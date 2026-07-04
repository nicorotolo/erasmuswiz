// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. Ingegneria informatica, automatica e gestionale (DIAG)
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=IIIS1).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 58 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (1).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-diag-innsbru",
    universita: "MCI - MANAGEMENT CENTER INNSBRUCK G.M.B.H",
    citta: "Innsbru",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU08",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Christian Napoli",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.mci.edu/de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68107."
  },
  {
    id: "sap-diag-stpolt",
    universita: "USTP - University of Applied Sciences St. Pölten",
    citta: "St-polt",
    paese: "Austria",
    codiceErasmus: "A  ST-POLT03",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Christian Napoli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ustp.at/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68111."
  },
  {
    id: "sap-diag-innsbru-2",
    universita: "MCI - MANAGEMENT CENTER INNSBRUCK G.M.B.H",
    citta: "Innsbru",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU08",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Tiziana D'Alfonso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.mci.edu/de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68106."
  },
  {
    id: "sap-diag-namur",
    universita: "UNIVERSITY OF NAMUR",
    citta: "Namur",
    paese: "Belgio",
    codiceErasmus: "B  NAMUR01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "FRANCISCO FACCHINEI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unamur.be/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68120."
  },
  {
    id: "sap-diag-varna",
    universita: "University of Economics - Varna - IKONOMICHESKI UNIVERSITET - VARNA",
    citta: "Varna",
    paese: "Bulgaria",
    codiceErasmus: "BG VARNA04",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ue-varna.bg/en/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68125."
  },
  {
    id: "sap-diag-tartu",
    universita: "TARTU ULIKOOL",
    citta: "Tartu",
    paese: "Estonia",
    codiceErasmus: "EE TARTU02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "GIUSEPPE DE GIACOMO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ut.ee/en",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68232."
  },
  {
    id: "sap-diag-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0613", nome: "Software and applications development and analysis" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68409."
  },
  {
    id: "sap-diag-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0413", nome: "Management and administration" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68404."
  },
  {
    id: "sap-diag-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68403."
  },
  {
    id: "sap-diag-marseil-4",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68412."
  },
  {
    id: "sap-diag-cergy",
    universita: "ECOLE NATIONALE SUPERIEURE DE L`ELECTRONIQUE ET DE SES APPLICATIONS",
    citta: "Cergy",
    paese: "Francia",
    codiceErasmus: "F  CERGY01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 5, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensea.fr/",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA68241."
  },
  {
    id: "sap-diag-cergy-2",
    universita: "ECOLE NATIONALE SUPERIEURE DE L`ELECTRONIQUE ET DE SES APPLICATIONS",
    citta: "Cergy",
    paese: "Francia",
    codiceErasmus: "F  CERGY01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensea.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68242."
  },
  {
    id: "sap-diag-noisy",
    universita: "ESIEE PARIS [former ECOLE SUPERIEURE D'INGENIEURS EN ELECTROTECHNIQUE ET ELECTRONIQUE]",
    citta: "Noisy",
    paese: "Francia",
    codiceErasmus: "F  NOISY02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.esiee.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68258."
  },
  {
    id: "sap-diag-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68255."
  },
  {
    id: "sap-diag-toulous",
    universita: "INSTITUT SUPÉRIEUR DE L'AÉRONAUTIQUE ET DE L'ESPACE [ECOLE NATIONALE SUPERIEURE DE L`AERONAUTIQUE ET DE L`ESPACE] -ISAE",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS16",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.supaero.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68279."
  },
  {
    id: "sap-diag-grenobl",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68246."
  },
  {
    id: "sap-diag-antony",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68237."
  },
  {
    id: "sap-diag-grenobl-2",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68244."
  },
  {
    id: "sap-diag-noisy-2",
    universita: "ESIEE PARIS [former ECOLE SUPERIEURE D'INGENIEURS EN ELECTROTECHNIQUE ET ELECTRONIQUE]",
    citta: "Noisy",
    paese: "Francia",
    codiceErasmus: "F  NOISY02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.esiee.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68256."
  },
  {
    id: "sap-diag-antony-2",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68236."
  },
  {
    id: "sap-diag-rennes",
    universita: "ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ANALYSE DE L'INFORMATION",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES32",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensai.fr/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68273."
  },
  {
    id: "sap-diag-paris",
    universita: "Institut Mines Telecom - Telecom Paris Tech",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS083",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.telecom-paris.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68264."
  },
  {
    id: "sap-diag-nantes",
    universita: "Ecole Centrale de Nantes",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES07",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "CLAUDIA CALIFANO",
    posti: [
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ec-nantes.fr",
    notePratiche: "Posti dell'accordo: 4. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68252."
  },
  {
    id: "sap-diag-lubeck",
    universita: "UNIVERSITAET ZU LUEBECK",
    citta: "Lubeck",
    paese: "Germania",
    codiceErasmus: "D  LUBECK01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANDREA VITALETTI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-luebeck.de/universitaet/universitaet.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68162."
  },
  {
    id: "sap-diag-braunsc",
    universita: "TECHNISCHE UNIVERSITÄT CAROLO-WILHELMINA ZU BRAUNSCHWEIG",
    citta: "Braunsc",
    paese: "Germania",
    codiceErasmus: "D  BRAUNSC01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANDREA VITALETTI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tu-braunschweig.de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68144."
  },
  {
    id: "sap-diag-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE NARDI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-freiburg.de/go/erasmus",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68154."
  },
  {
    id: "sap-diag-staugu",
    universita: "HOCHSCHULE BONN-RHEIN-SIEG",
    citta: "St-augu",
    paese: "Germania",
    codiceErasmus: "D  ST-AUGU02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE NARDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.h-brs.de/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68167."
  },
  {
    id: "sap-diag-aachen",
    universita: "RWTH Aachen University [RHEINISCH-WESTFÄLISCHE TECHNISCHE HOCHSCHULE AACHEN]",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D  AACHEN01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.rwth-aachen.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68137."
  },
  {
    id: "sap-diag-karlsru",
    universita: "KARLSRUHE INSTITUTE OF TECHNOLOGY (KIT)",
    citta: "Karlsru",
    paese: "Germania",
    codiceErasmus: "D  KARLSRU01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-karlsruhe.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68158."
  },
  {
    id: "sap-diag-aachen-2",
    universita: "RWTH Aachen University [RHEINISCH-WESTFÄLISCHE TECHNISCHE HOCHSCHULE AACHEN]",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D  AACHEN01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.rwth-aachen.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68135."
  },
  {
    id: "sap-diag-karlsru-2",
    universita: "KARLSRUHE INSTITUTE OF TECHNOLOGY (KIT)",
    citta: "Karlsru",
    paese: "Germania",
    codiceErasmus: "D  KARLSRU01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-karlsruhe.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68157."
  },
  {
    id: "sap-diag-koln",
    universita: "FACHHOCHSCHULE KÖLN  UNIVERSITY OF APPLIED SCIENCES COLOGNE",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN04",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.fh-koeln.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68159."
  },
  {
    id: "sap-diag-dortmun",
    universita: "Technische Universität Dortmund",
    citta: "Dortmun",
    paese: "Germania",
    codiceErasmus: "D  DORTMUN01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ALESSANDRO DE LUCA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-dortmund.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68148."
  },
  {
    id: "sap-diag-paderbo",
    universita: "UNIVERSITAT PADERBORN",
    citta: "Paderbo",
    paese: "Germania",
    codiceErasmus: "D  PADERBO01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Christian Napoli",
    posti: [
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-paderborn.de/",
    notePratiche: "Posti dell'accordo: 4. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68164."
  },
  {
    id: "sap-diag-wildau",
    universita: "TECHNISCHE HOCHSCHULE WILDAU",
    citta: "Wildau",
    paese: "Germania",
    codiceErasmus: "D  WILDAU01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Riccardo MARZANO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.th-wildau.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68169."
  },
  {
    id: "sap-diag-ioannin",
    universita: "PANEPISTIMIO IOANNINON",
    citta: "Ioannin",
    paese: "Grecia",
    codiceErasmus: "G  IOANNIN01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uoi.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68287."
  },
  {
    id: "sap-diag-athine",
    universita: "IONIO PANEPISTIMIO",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE42",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "ARISTIDIIS ANAGNOSTOPOULOS",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ionio.gr/rc/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68284."
  },
  {
    id: "sap-diag-athine-2",
    universita: "IONIO PANEPISTIMIO",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE42",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Ioannis Chatzigiannakis",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ionio.gr/rc/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68285."
  },
  {
    id: "sap-diag-ensched",
    universita: "UNIVERSITEIT TWENTE",
    citta: "Ensched",
    paese: "Olanda",
    codiceErasmus: "NL ENSCHED01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "MARILENA VENDITTELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.utwente.nl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68308."
  },
  {
    id: "sap-diag-warszaw",
    universita: "UNIVERSITY OF WARSAW",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "STEFANO LEONARDI",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.bwz.uw.edu.pl",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68342."
  },
  {
    id: "sap-diag-targu",
    universita: "UNIVERSITATEA DE MEDICINA, FARMACIE, STIINTE SI TEHNOLOGIE \"GEORGE EMIL PALADE\" DIN TARGU MURES",
    citta: "Targu",
    paese: "Romania",
    codiceErasmus: "RO TARGU02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "DANIELE NARDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://umfst.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68384."
  },
  {
    id: "sap-diag-craiova",
    universita: "UNIVERSITATEA DIN CRAIOVA",
    citta: "Craiova",
    paese: "Romania",
    codiceErasmus: "RO CRAIOVA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucv.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68350."
  },
  {
    id: "sap-diag-bucures",
    universita: "UNIVERSITATEA ROMANO AMERICANA",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES18",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.rau.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68346."
  },
  {
    id: "sap-diag-craiova-2",
    universita: "UNIVERSITATEA DIN CRAIOVA",
    citta: "Craiova",
    paese: "Romania",
    codiceErasmus: "RO CRAIOVA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucv.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68349."
  },
  {
    id: "sap-diag-craiova-3",
    universita: "UNIVERSITATEA DIN CRAIOVA",
    citta: "Craiova",
    paese: "Romania",
    codiceErasmus: "RO CRAIOVA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucv.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68351."
  },
  {
    id: "sap-diag-targu-2",
    universita: "UNIVERSITATEA DE MEDICINA, FARMACIE, STIINTE SI TEHNOLOGIE \"GEORGE EMIL PALADE\" DIN TARGU MURES",
    citta: "Targu",
    paese: "Romania",
    codiceErasmus: "RO TARGU02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://umfst.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68385."
  },
  {
    id: "sap-diag-bucures-2",
    universita: "ACADEMIA DE STUDII ECONOMICE DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES04",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.ASE.RO",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68345."
  },
  {
    id: "sap-diag-bratisl",
    universita: "COMENIUS UNIVERSITY IN BRATISLAVA",
    citta: "Bratisl",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "MARCO TEMPERINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www..uniba.sk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68357."
  },
  {
    id: "sap-diag-malaga",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "TIZIANA CATARCI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uma.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68203."
  },
  {
    id: "sap-diag-malaga-2",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "TIZIANA CATARCI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uma.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68205."
  },
  {
    id: "sap-diag-vallado",
    universita: "UNIVERSIDAD EUROPEA MIGUEL DE CERVANTES (U.E.M.C.)",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO03",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANDREA VITALETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uemc.edu",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68223."
  },
  {
    id: "sap-diag-laspal",
    universita: "UNIVERSIDAD DE LAS PALMAS DE GRAN CANARIA",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANDREA VITALETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ulpgc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68188."
  },
  {
    id: "sap-diag-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE NARDI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68226."
  },
  {
    id: "sap-diag-vallado-2",
    universita: "UNIVERSIDAD EUROPEA MIGUEL DE CERVANTES (U.E.M.C.)",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO03",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0719", nome: "Engineering and engineering trades, not elsewhere classified" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uemc.edu",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68224."
  },
  {
    id: "sap-diag-orebro",
    universita: "ÖREBRO UNIVERSITY",
    citta: "Orebro",
    paese: "Svezia",
    codiceErasmus: "S  OREBRO01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "ANDREA VITALETTI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.oru.se/exchange",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68354."
  },
  {
    id: "sap-diag-kocaeli",
    universita: "KOCAELI UNIVERSITESI",
    citta: "Kocaeli",
    paese: "Turchia",
    codiceErasmus: "TR KOCAELI02",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "TIZIANA CATARCI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.kocaeli.edu.tr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68367."
  },
  {
    id: "sap-diag-canakka",
    universita: "CANAKKALE ONSEKIZ MART ÜNIVERSITESI",
    citta: "Canakka",
    paese: "Turchia",
    codiceErasmus: "TR CANAKKA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.comu.edu.tr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68362."
  },
  {
    id: "sap-diag-canakka-2",
    universita: "CANAKKALE ONSEKIZ MART ÜNIVERSITESI",
    citta: "Canakka",
    paese: "Turchia",
    codiceErasmus: "TR CANAKKA01",
    dipartimentoCf: "Ingegneria informatica, automatica e gestionale (DIAG)",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CINZIA DARAIO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.comu.edu.tr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68361."
  }
];
