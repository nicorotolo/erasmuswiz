// ==========================================================
// METE ERASMUS - SAPIENZA - LETTERE E FILOSOFIA
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=LETFIL).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 424 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (17).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-lett-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70233."
  },
  {
    id: "sap-lett-salzbur-2",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70235."
  },
  {
    id: "sap-lett-salzbur-3",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70242."
  },
  {
    id: "sap-lett-salzbur-4",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70243."
  },
  {
    id: "sap-lett-wien",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71132."
  },
  {
    id: "sap-lett-salzbur-5",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70246."
  },
  {
    id: "sap-lett-salzbur-6",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70247."
  },
  {
    id: "sap-lett-salzbur-7",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70248."
  },
  {
    id: "sap-lett-innsbru",
    universita: "MCI - MANAGEMENT CENTER INNSBRUCK G.M.B.H",
    citta: "Innsbru",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU08",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.mci.edu/de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71066."
  },
  {
    id: "sap-lett-salzbur-8",
    universita: "FH SALZBURG  FACHHOCHSCHULGESELLSCHAFT  MBH",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR08",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.fh-salzburg.ac.at/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70901."
  },
  {
    id: "sap-lett-linz",
    universita: "Private Pädagogische Hochschule der Diözese Linz",
    citta: "Linz",
    paese: "Austria",
    codiceErasmus: "A LINZ04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "SABINE KOESTERS GENSINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.phdl.at/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71133."
  },
  {
    id: "sap-lett-wien-2",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "PAOLO DE TROIA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71035."
  },
  {
    id: "sap-lett-wien-3",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Carlogiovanni CERETI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71249."
  },
  {
    id: "sap-lett-wien-4",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ANDREA CHEGAI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71131."
  },
  {
    id: "sap-lett-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70255."
  },
  {
    id: "sap-lett-bruxel-2",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70254."
  },
  {
    id: "sap-lett-bruxel-3",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70256."
  },
  {
    id: "sap-lett-bruxel-4",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70257."
  },
  {
    id: "sap-lett-bruxel-5",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70258."
  },
  {
    id: "sap-lett-bruxel-6",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70259."
  },
  {
    id: "sap-lett-bruxel-7",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0239", nome: "Languages, not elsewhere classified (0239), Languages, not elsewhere classified" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70406."
  },
  {
    id: "sap-lett-bruxel-8",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70260."
  },
  {
    id: "sap-lett-louvain",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCESCA TERRENATO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uclouvain.be/fr/index.html",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71139."
  },
  {
    id: "sap-lett-liege",
    universita: "UNIVERSITÉ DE LIÈGE",
    citta: "Liege",
    paese: "Belgio",
    codiceErasmus: "B  LIEGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Tiziana BANINI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulg.ac.be",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71072."
  },
  {
    id: "sap-lett-louvain-2",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "Gioia Paradisi",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uclouvain.be/fr/index.html",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70904."
  },
  {
    id: "sap-lett-sofia",
    universita: "SOFIIKI UNIVERSITET \"SVETI KLIMENT OHRIDSKI\"",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA06",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANNA IUSO",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-sofia.bg",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA71371."
  },
  {
    id: "sap-lett-nicosia",
    universita: "PANEPISTIMIO KYPROU",
    citta: "Nicosia",
    paese: "Cipro",
    codiceErasmus: "CY NICOSIA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ucy.ac.cy",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70906."
  },
  {
    id: "sap-lett-pula",
    universita: "SVEUCILISTE JURJA DOBRILE U PULI",
    citta: "Pula",
    paese: "Croazia",
    codiceErasmus: "HR PULA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unipu.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71444."
  },
  {
    id: "sap-lett-pula-2",
    universita: "SVEUCILISTE JURJA DOBRILE U PULI",
    citta: "Pula",
    paese: "Croazia",
    codiceErasmus: "HR PULA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unipu.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71442."
  },
  {
    id: "sap-lett-split",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Split",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "GIORGIO NISINI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unist.hr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71227."
  },
  {
    id: "sap-lett-rijeka",
    universita: "SVEUCILISTE U RIJECI",
    citta: "Rijeka",
    paese: "Croazia",
    codiceErasmus: "HR RIJEKA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Luca Vaglio",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uniri.hr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70980."
  },
  {
    id: "sap-lett-tallinn",
    universita: "TALLINN UNIVERSITY",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "BARBARA RONCHETTI",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tlu.ee/en/university",
    notePratiche: "Posti dell'accordo: 6. Accordo ERA70956."
  },
  {
    id: "sap-lett-tallinn-2",
    universita: "TALLINN UNIVERSITY",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "BARBARA RONCHETTI",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tlu.ee/en/university",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70957."
  },
  {
    id: "sap-lett-tartu",
    universita: "TARTU ULIKOOL",
    citta: "Tartu",
    paese: "Estonia",
    codiceErasmus: "EE TARTU02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ut.ee/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71418."
  },
  {
    id: "sap-lett-oulu",
    universita: "UNIVERSITY OF OULU",
    citta: "Oulu",
    paese: "Finlandia",
    codiceErasmus: "SF OULU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Lorenzo D'Angelo",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://oulu.fi/intl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71574."
  },
  {
    id: "sap-lett-oulu-2",
    universita: "UNIVERSITY OF OULU",
    citta: "Oulu",
    paese: "Finlandia",
    codiceErasmus: "SF OULU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Lorenzo D'Angelo",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://oulu.fi/intl",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71578."
  },
  {
    id: "sap-lett-montpel",
    universita: "UNIVERSITE PAUL VALERY (MONTPELLIER III)",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "STEFANO PIETRO LUIGI ASPERTI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71207."
  },
  {
    id: "sap-lett-amiens",
    universita: "UNIVERSITÉ DE PICARDIE JULES VERNE",
    citta: "Amiens",
    paese: "Francia",
    codiceErasmus: "F  AMIENS01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CECILIA CONATI BARBARO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.u-picardie.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71284."
  },
  {
    id: "sap-lett-paris",
    universita: "SORBONNE UNIVERSITE [former UNIVERSITÉ DE PARIS-SORBONNE PARIS IV - F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ELISABETTA CORSI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71439."
  },
  {
    id: "sap-lett-grenobl",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "GUIDO DI PALMA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71343."
  },
  {
    id: "sap-lett-montpel-2",
    universita: "UNIVERSITE PAUL VALERY (MONTPELLIER III)",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "GUIDO DI PALMA",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71344."
  },
  {
    id: "sap-lett-nantes",
    universita: "UNIVERSITE DE NANTES",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIAN LUCA GREGORI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-nantes.fr/foreignstudents",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71288."
  },
  {
    id: "sap-lett-montpel-3",
    universita: "UNIVERSITE PAUL VALERY (MONTPELLIER III)",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ROBERTO NICOLAI MASTROFRANCESCO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71287."
  },
  {
    id: "sap-lett-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Fine arts (0213), Music and performing arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70313."
  },
  {
    id: "sap-lett-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70311."
  },
  {
    id: "sap-lett-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0213", nome: "Audio-visual techniques and media production (0211), Fine arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70312."
  },
  {
    id: "sap-lett-marseil-4",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0114", nome: "Teacher training with subject specialization" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70310."
  },
  {
    id: "sap-lett-marseil-5",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70320."
  },
  {
    id: "sap-lett-marseil-6",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70317."
  },
  {
    id: "sap-lett-marseil-7",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70318."
  },
  {
    id: "sap-lett-marseil-8",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70325."
  },
  {
    id: "sap-lett-marseil-9",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70326."
  },
  {
    id: "sap-lett-marseil-10",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70327."
  },
  {
    id: "sap-lett-marseil-11",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70328."
  },
  {
    id: "sap-lett-marseil-12",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70329."
  },
  {
    id: "sap-lett-marseil-13",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70330."
  },
  {
    id: "sap-lett-marseil-14",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70331."
  },
  {
    id: "sap-lett-marseil-15",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70335."
  },
  {
    id: "sap-lett-marseil-16",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70336."
  },
  {
    id: "sap-lett-strasbo",
    universita: "THE UNIVERSITY OF STRASBOURG (UDS)",
    citta: "Strasbo",
    paese: "Francia",
    codiceErasmus: "F  STRASBO48",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0488", nome: "Literature and linguistics (0232), Business, administration and law, inter-disciplinary programmes" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unistra.fr/fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70497."
  },
  {
    id: "sap-lett-marseil-17",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70338."
  },
  {
    id: "sap-lett-marseil-18",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70339."
  },
  {
    id: "sap-lett-marseil-19",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70324."
  },
  {
    id: "sap-lett-marseil-20",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70337."
  },
  {
    id: "sap-lett-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-lille.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71101."
  },
  {
    id: "sap-lett-lyon",
    universita: "ECOLE NORMALE SUPERIEURE DE LYON (EX F LYON18+ F FONTENA01)",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON103",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ens-lyon.fr/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA71102."
  },
  {
    id: "sap-lett-paris-2",
    universita: "UNIVERSITE DE VINCENNES - SAINT DENIS (PARIS VIII)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS008",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "MARIASILVIA TATTI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-paris8.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71211."
  },
  {
    id: "sap-lett-paris-3",
    universita: "SORBONNE UNIVERSITE [former UNIVERSITÉ DE PARIS-SORBONNE PARIS IV - F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "STEFANO TEDESCHI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70969."
  },
  {
    id: "sap-lett-paris-4",
    universita: "SORBONNE UNIVERSITE [former UNIVERSITÉ DE PARIS-SORBONNE PARIS IV - F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "STEFANO TEDESCHI",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70970."
  },
  {
    id: "sap-lett-limoges",
    universita: "UNIVERSITÉ DE LIMOGES",
    citta: "Limoges",
    paese: "Francia",
    codiceErasmus: "F  LIMOGES01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "STEFANO TEDESCHI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unilim.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70963."
  },
  {
    id: "sap-lett-rennes",
    universita: "UNIVERSITE RENNES 2",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "021", nome: "Arts" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.uhb.fr",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71356."
  },
  {
    id: "sap-lett-toulous",
    universita: "UNIVERSITE TOULOUSE II-JEAN JAURES [former UNIVERSITE DE TOULOUSE LE MIRAIL (TOULOUSE II)]",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-tlse2.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71357."
  },
  {
    id: "sap-lett-montpel-4",
    universita: "UNIVERSITE PAUL VALERY (MONTPELLIER III)",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71345."
  },
  {
    id: "sap-lett-lyon-2",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Alessandro Jaia",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-lyon2.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71286."
  },
  {
    id: "sap-lett-corte",
    universita: "UNIVERSITE DE CORSE PASCAL PAOLI",
    citta: "Corte",
    paese: "Francia",
    codiceErasmus: "F  CORTE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "ANNA IUSO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-corse.fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71427."
  },
  {
    id: "sap-lett-lyon-3",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "ANNA IUSO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-lyon2.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71429."
  },
  {
    id: "sap-lett-poitier",
    universita: "UNIVERSITÉ DE POITIERS",
    citta: "Poitier",
    paese: "Francia",
    codiceErasmus: "F  POITIER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "ROBERTO GIGLIUCCI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71222."
  },
  {
    id: "sap-lett-paris-5",
    universita: "INSTITUT NATIONAL DE LANGUES ET CIVILISATIONS ORIENTALES",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS178",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Joulia NIKOLAEVA",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inalco.fr",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71218."
  },
  {
    id: "sap-lett-poitier-2",
    universita: "UNIVERSITÉ DE POITIERS",
    citta: "Poitier",
    paese: "Francia",
    codiceErasmus: "F  POITIER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ALEKSANDRA JOVICEVIC",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71354."
  },
  {
    id: "sap-lett-poitier-3",
    universita: "UNIVERSITÉ DE POITIERS",
    citta: "Poitier",
    paese: "Francia",
    codiceErasmus: "F  POITIER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALEKSANDRA JOVICEVIC",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71355."
  },
  {
    id: "sap-lett-rennes-2",
    universita: "UNIVERSITE RENNES 2",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ORESTE FLOQUET",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.uhb.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70973."
  },
  {
    id: "sap-lett-grenobl-2",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCESCO FRONTEROTTA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71100."
  },
  {
    id: "sap-lett-orleans",
    universita: "UNIVERSITE D`ORLEANS",
    citta: "Orleans",
    paese: "Francia",
    codiceErasmus: "F  ORLEANS01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Francesco Guizzi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-orleans.fr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71289."
  },
  {
    id: "sap-lett-bordeau",
    universita: "UNIVERSITE BORDEAUX MONTAIGNE [former UNIVERSITE MICHEL DE MONTAIGNE -  BORDEAUX 3]",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Francesco Guizzi",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.u-bordeaux-montaigne.fr/fr/index.html",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71285."
  },
  {
    id: "sap-lett-corte-2",
    universita: "UNIVERSITE DE CORSE PASCAL PAOLI",
    citta: "Corte",
    paese: "Francia",
    codiceErasmus: "F  CORTE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-corse.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71424."
  },
  {
    id: "sap-lett-corte-3",
    universita: "UNIVERSITE DE CORSE PASCAL PAOLI",
    citta: "Corte",
    paese: "Francia",
    codiceErasmus: "F  CORTE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-corse.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71425."
  },
  {
    id: "sap-lett-chamber",
    universita: "UNIVERSITÉ DE SAVOIE MONT BLANC",
    citta: "Chamber",
    paese: "Francia",
    codiceErasmus: "F  CHAMBER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Monica Cristina STORINI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-smb.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71204."
  },
  {
    id: "sap-lett-paris-6",
    universita: "ECOLE NORMALE SUPERIEURE",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS087",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" },
      { numero: 5, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://ww.ens.fr",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71109."
  },
  {
    id: "sap-lett-strasbo-2",
    universita: "THE UNIVERSITY OF STRASBOURG (UDS)",
    citta: "Strasbo",
    paese: "Francia",
    codiceErasmus: "F  STRASBO48",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unistra.fr/fr",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71114."
  },
  {
    id: "sap-lett-bordeau-2",
    universita: "UNIVERSITE BORDEAUX MONTAIGNE [former UNIVERSITE MICHEL DE MONTAIGNE -  BORDEAUX 3]",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Philosophy and ethics (0223), Literature and linguistics" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.u-bordeaux-montaigne.fr/fr/index.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71098."
  },
  {
    id: "sap-lett-nantes-2",
    universita: "UNIVERSITE DE NANTES",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-nantes.fr/foreignstudents",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71105."
  },
  {
    id: "sap-lett-paris-7",
    universita: "UNIVERSITÉ DE PARIS-NANTERRE (PARIS X)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS010",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.u-paris10.fr",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71108."
  },
  {
    id: "sap-lett-caen",
    universita: "UNIVERSITÉ DE CAEN",
    citta: "Caen",
    paese: "Francia",
    codiceErasmus: "F  CAEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "ORIETTA OMBROSI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unicaen.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71099."
  },
  {
    id: "sap-lett-paris-8",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO RUFFINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71347."
  },
  {
    id: "sap-lett-paris-9",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "ROMANA ANDO'",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71432."
  },
  {
    id: "sap-lett-grenobl-3",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MASSIMO BLANCO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70960."
  },
  {
    id: "sap-lett-valenci",
    universita: "UNIVERSITE POLYTECHNIQUE HAUTS-DE-FRANCE",
    citta: "Valenci",
    paese: "Francia",
    codiceErasmus: "F  VALENCI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "VALERIO CORDINER",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uphf.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70974."
  },
  {
    id: "sap-lett-paris-10",
    universita: "EPHE - ÉCOLE PRATIQUE DES HAUTES ÉTUDES",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS054",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "PAOLO DE TROIA",
    posti: [
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ephe.sorbonne.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71047."
  },
  {
    id: "sap-lett-chamber-2",
    universita: "UNIVERSITÉ DE SAVOIE MONT BLANC",
    citta: "Chamber",
    paese: "Francia",
    codiceErasmus: "F  CHAMBER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "EMMANUEL BETTA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-smb.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71419."
  },
  {
    id: "sap-lett-nancy",
    universita: "UNIVERSITE DE LORRAINE",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "F  NANCY43",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "EMMANUEL BETTA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-lorraine.fr/en/univ-lorraine/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71431."
  },
  {
    id: "sap-lett-paris-11",
    universita: "ECOLE DES HAUTES ETUDES EN SCIENCES SOCIALES DE PARIS- EHESS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS057",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "EMMANUEL BETTA",
    posti: [
      { numero: 5, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ehess.fr/fr/international/",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA71436."
  },
  {
    id: "sap-lett-grenobl-4",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "EMMANUEL BETTA",
    posti: [
      { numero: 6, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti dell'accordo: 6. Accordo ERA71428."
  },
  {
    id: "sap-lett-paris-12",
    universita: "SORBONNE UNIVERSITE [former UNIVERSITÉ DE PARIS-SORBONNE PARIS IV - F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Marta MARCHETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71220."
  },
  {
    id: "sap-lett-montpel-5",
    universita: "UNIVERSITE PAUL VALERY (MONTPELLIER III)",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0213", nome: "Fine arts" }],
    coordinatoreCf: "DANIELE GUASTINI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71103."
  },
  {
    id: "sap-lett-tahiti",
    universita: "UNIVERSITÉ DE LA POLYNÉSIE FRANÇAISE",
    citta: "Tahiti",
    paese: "Francia",
    codiceErasmus: "F  TAHITI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "MATTEO ARIA",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" },
      { numero: 5, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upf.pf",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA71470."
  },
  {
    id: "sap-lett-mayotte",
    universita: "Centre Universitaire de Formation et de Recherche de Mayotte",
    citta: "Mayotte",
    paese: "Francia",
    codiceErasmus: "F  MAYOTTE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "MATTEO ARIA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-mayotte.fr/fr/index.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71430."
  },
  {
    id: "sap-lett-clermon",
    universita: "UNIVERSITE CLERMONT AUVERGNE",
    citta: "Clermon",
    paese: "Francia",
    codiceErasmus: "F  CLERMON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uca.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71423."
  },
  {
    id: "sap-lett-clermon-2",
    universita: "UNIVERSITE CLERMONT AUVERGNE",
    citta: "Clermon",
    paese: "Francia",
    codiceErasmus: "F  CLERMON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uca.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71420."
  },
  {
    id: "sap-lett-clermon-3",
    universita: "UNIVERSITE CLERMONT AUVERGNE",
    citta: "Clermon",
    paese: "Francia",
    codiceErasmus: "F  CLERMON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uca.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71422."
  },
  {
    id: "sap-lett-clermon-4",
    universita: "UNIVERSITE CLERMONT AUVERGNE",
    citta: "Clermon",
    paese: "Francia",
    codiceErasmus: "F  CLERMON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uca.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71421."
  },
  {
    id: "sap-lett-paris-13",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "LUCIA MORI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71290."
  },
  {
    id: "sap-lett-caen-2",
    universita: "UNIVERSITÉ DE CAEN",
    citta: "Caen",
    paese: "Francia",
    codiceErasmus: "F  CAEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Andrea Del Lungo",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unicaen.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70958."
  },
  {
    id: "sap-lett-toulous-2",
    universita: "UNIVERSITE TOULOUSE II-JEAN JAURES [former UNIVERSITE DE TOULOUSE LE MIRAIL (TOULOUSE II)]",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANNALISA POLOSA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-tlse2.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71293."
  },
  {
    id: "sap-lett-lyon-4",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Leonardo Capezzone",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" },
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-lyon2.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71045."
  },
  {
    id: "sap-lett-paris-14",
    universita: "UNIVERSITE SORBONNE NOUVELLE - PARIS 3",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS003",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Leonardo Capezzone",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-paris3.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71046."
  },
  {
    id: "sap-lett-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "CECILIA BELLO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70964."
  },
  {
    id: "sap-lett-paris-15",
    universita: "UNIVERSITE DE VINCENNES - SAINT DENIS (PARIS VIII)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS008",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-paris8.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71213."
  },
  {
    id: "sap-lett-paris-16",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71209."
  },
  {
    id: "sap-lett-nice-2",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Emily Pierini",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71559."
  },
  {
    id: "sap-lett-kiel",
    universita: "CHRISTIAN-ALBRECHTS-UNIVERSITAT ZU KIEL",
    citta: "Kiel",
    paese: "Germania",
    codiceErasmus: "D  KIEL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MARIA LUISA CERRON PUGA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-kiel.de",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70925."
  },
  {
    id: "sap-lett-wuppert",
    universita: "BERGISCHE UNIVERSITÄT- GESAMTHOCHSCHULE WUPPERTAL",
    citta: "Wuppert",
    paese: "Germania",
    codiceErasmus: "D  WUPPERT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "DONATELLA DI CESARE",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-wuppertal.de/de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71089."
  },
  {
    id: "sap-lett-dresden",
    universita: "TECHNISCHE UNIVERSITÄT DRESDEN - TU DRESDEN",
    citta: "Dresden",
    paese: "Germania",
    codiceErasmus: "D  DRESDEN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "CLAUDIO DI MEOLA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-dresden.de",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70918."
  },
  {
    id: "sap-lett-erlange",
    universita: "FRIEDRICH-ALEXANDER-UNIVERSITÄT ERLANGEN-NÜRNBERG",
    citta: "Erlange",
    paese: "Germania",
    codiceErasmus: "D  ERLANGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "CLAUDIO DI MEOLA",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-erlangen.de",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70921."
  },
  {
    id: "sap-lett-munchen",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "CLAUDIO DI MEOLA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.lmu.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70928."
  },
  {
    id: "sap-lett-berlin",
    universita: "FREIE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO GALLI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.fu-berlin.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71258."
  },
  {
    id: "sap-lett-kiel-2",
    universita: "CHRISTIAN-ALBRECHTS-UNIVERSITAT ZU KIEL",
    citta: "Kiel",
    paese: "Germania",
    codiceErasmus: "D  KIEL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO GALLI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-kiel.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71264."
  },
  {
    id: "sap-lett-koln",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIAN LUCA GREGORI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71266."
  },
  {
    id: "sap-lett-munchen-2",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "GIORGIO MARIANI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.lmu.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70929."
  },
  {
    id: "sap-lett-dortmun",
    universita: "Technische Universität Dortmund",
    citta: "Dortmun",
    paese: "Germania",
    codiceErasmus: "D  DORTMUN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "GIORGIO MARIANI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-dortmund.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70917."
  },
  {
    id: "sap-lett-bochum",
    universita: "RUHR-UNIVERSITAT BOCHUM",
    citta: "Bochum",
    paese: "Germania",
    codiceErasmus: "D  BOCHUM01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FEDERICO MASINI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uv.ruhr-uni-bochum.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71037."
  },
  {
    id: "sap-lett-munster",
    universita: "UNIVERSITÄT MÜNSTER",
    citta: "Munster",
    paese: "Germania",
    codiceErasmus: "D  MUNSTER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO SAGGIORO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-muenster.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71384."
  },
  {
    id: "sap-lett-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70265."
  },
  {
    id: "sap-lett-tubinge-2",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70266."
  },
  {
    id: "sap-lett-tubinge-3",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70267."
  },
  {
    id: "sap-lett-tubinge-4",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70263."
  },
  {
    id: "sap-lett-tubinge-5",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70272."
  },
  {
    id: "sap-lett-tubinge-6",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70269."
  },
  {
    id: "sap-lett-tubinge-7",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70270."
  },
  {
    id: "sap-lett-tubinge-8",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70276."
  },
  {
    id: "sap-lett-tubinge-9",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70277."
  },
  {
    id: "sap-lett-koln-2",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71157."
  },
  {
    id: "sap-lett-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-freiburg.de/go/erasmus",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71153."
  },
  {
    id: "sap-lett-berlin-2",
    universita: "FREIE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.fu-berlin.de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71078."
  },
  {
    id: "sap-lett-konstan",
    universita: "UNIVERSITÄT KONSTANZ",
    citta: "Konstan",
    paese: "Germania",
    codiceErasmus: "D  KONSTAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-konstanz.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71085."
  },
  {
    id: "sap-lett-siegen",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71087."
  },
  {
    id: "sap-lett-stuttga",
    universita: "UNIVERSITÄT STUTTGART",
    citta: "Stuttga",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-stuttgart.de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71088."
  },
  {
    id: "sap-lett-koln-3",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "LUISA VALENTE",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71084."
  },
  {
    id: "sap-lett-gotting",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO VANZETTI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-goettingen.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71262."
  },
  {
    id: "sap-lett-heidelb",
    universita: "RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG",
    citta: "Heidelb",
    paese: "Germania",
    codiceErasmus: "D  HEIDELB01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Paola CANTONI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.eu.uni-heidelberg.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71155."
  },
  {
    id: "sap-lett-frankfu",
    universita: "JOHANN  WOLFGANG GOETHE UNIVERSITÄT",
    citta: "Frankfu",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-frankfurt.de/international",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71326."
  },
  {
    id: "sap-lett-bonn",
    universita: "RHEINISCHE FRIEDRICH-WILHELMS- UNIVERSITÄT BONN",
    citta: "Bonn",
    paese: "Germania",
    codiceErasmus: "D  BONN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bonn.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70915."
  },
  {
    id: "sap-lett-berlin-3",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "SABINE KOESTERS GENSINI",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-berlin.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71148."
  },
  {
    id: "sap-lett-berlin-4",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "SABINE KOESTERS GENSINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-berlin.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71149."
  },
  {
    id: "sap-lett-bayreut",
    universita: "UNIVERSITAT BAYREUTH",
    citta: "Bayreut",
    paese: "Germania",
    codiceErasmus: "D  BAYREUT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "SABINE KOESTERS GENSINI",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" },
      { numero: 5, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71659."
  },
  {
    id: "sap-lett-frankfu-2",
    universita: "EUROPA-UNIVERSITAT VIADRINA FRANKURT AND DER ODER",
    citta: "Frankfu",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU08",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Joulia NIKOLAEVA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.euv-frankfurt-o.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71152."
  },
  {
    id: "sap-lett-koln-4",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Joulia NIKOLAEVA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71156."
  },
  {
    id: "sap-lett-konstan-2",
    universita: "UNIVERSITÄT KONSTANZ",
    citta: "Konstan",
    paese: "Germania",
    codiceErasmus: "D  KONSTAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "CAMILLA MIGLIO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-konstanz.de/international",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70926."
  },
  {
    id: "sap-lett-hamburg",
    universita: "UNIVERSITÄT HAMBURG",
    citta: "Hamburg",
    paese: "Germania",
    codiceErasmus: "D  HAMBURG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "MARCO RUFFINI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hamburg.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71328."
  },
  {
    id: "sap-lett-bielefe",
    universita: "UNIVERSITÄT BIELEFELD",
    citta: "Bielefe",
    paese: "Germania",
    codiceErasmus: "D  BIELEFE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bielefeld.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70913."
  },
  {
    id: "sap-lett-hamburg-2",
    universita: "UNIVERSITÄT HAMBURG",
    citta: "Hamburg",
    paese: "Germania",
    codiceErasmus: "D  HAMBURG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hamburg.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70923."
  },
  {
    id: "sap-lett-dusseld",
    universita: "HEINRICH-HEINE-UNIVERSITAT DUSSELDORF",
    citta: "Dusseld",
    paese: "Germania",
    codiceErasmus: "D  DUSSELD01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duesseldorf.de",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70920."
  },
  {
    id: "sap-lett-halle",
    universita: "MARTIN-LUTHER-UNIVERSITÄT HALLE-WITTENBERG",
    citta: "Halle",
    paese: "Germania",
    codiceErasmus: "D  HALLE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.verwaltung.uni-halle.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70922."
  },
  {
    id: "sap-lett-bielefe-2",
    universita: "UNIVERSITÄT BIELEFELD",
    citta: "Bielefe",
    paese: "Germania",
    codiceErasmus: "D  BIELEFE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bielefeld.de",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70914."
  },
  {
    id: "sap-lett-dusseld-2",
    universita: "HEINRICH-HEINE-UNIVERSITAT DUSSELDORF",
    citta: "Dusseld",
    paese: "Germania",
    codiceErasmus: "D  DUSSELD01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GABRIELE GUERRA",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duesseldorf.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70919."
  },
  {
    id: "sap-lett-leipzig",
    universita: "UNIVERSITÄT LEIPZIG",
    citta: "Leipzig",
    paese: "Germania",
    codiceErasmus: "D  LEIPZIG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANTONELLA GHIGNOLI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-leipzig.de",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71383."
  },
  {
    id: "sap-lett-wuppert-2",
    universita: "BERGISCHE UNIVERSITÄT- GESAMTHOCHSCHULE WUPPERTAL",
    citta: "Wuppert",
    paese: "Germania",
    codiceErasmus: "D  WUPPERT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANTONELLA GHIGNOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-wuppertal.de/de/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71385."
  },
  {
    id: "sap-lett-wuppert-3",
    universita: "BERGISCHE UNIVERSITÄT- GESAMTHOCHSCHULE WUPPERTAL",
    citta: "Wuppert",
    paese: "Germania",
    codiceErasmus: "D  WUPPERT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANTONELLA GHIGNOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-wuppertal.de/de/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71386."
  },
  {
    id: "sap-lett-freibur-2",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANTONELLA GHIGNOLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-freiburg.de/go/erasmus",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71380."
  },
  {
    id: "sap-lett-wurzbur",
    universita: "BAYERISCHE JULIUS-MAXIMILIANS-SCHWEINFURT-ABT WURZBURG",
    citta: "Wurzbur",
    paese: "Germania",
    codiceErasmus: "D  WURZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "SARIN MARCHETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-wuerzburg.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71090."
  },
  {
    id: "sap-lett-berlin-5",
    universita: "FREIE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCESCA BALOSSI RESTELLI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.fu-berlin.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71256."
  },
  {
    id: "sap-lett-regensb",
    universita: "UNIVERSITÄT REGENSBURG",
    citta: "Regensb",
    paese: "Germania",
    codiceErasmus: "D  REGENSB01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Massimiliano PAPINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-regensburg.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71271."
  },
  {
    id: "sap-lett-potsdam",
    universita: "UNIVERSITAT POTSDAM",
    citta: "Potsdam",
    paese: "Germania",
    codiceErasmus: "D  POTSDAM01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCO D'INTINO",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-potsdam.de/de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70930."
  },
  {
    id: "sap-lett-marburg",
    universita: "PHILIPPS-UNIVERSITÄT MARBURG",
    citta: "Marburg",
    paese: "Germania",
    codiceErasmus: "D  MARBURG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "EMANUELA BORGIA",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-marburg.de/en",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71268."
  },
  {
    id: "sap-lett-marburg-2",
    universita: "PHILIPPS-UNIVERSITÄT MARBURG",
    citta: "Marburg",
    paese: "Germania",
    codiceErasmus: "D  MARBURG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCESCA ROMANA BERNO",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-marburg.de/en",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71269."
  },
  {
    id: "sap-lett-leipzig-2",
    universita: "UNIVERSITÄT LEIPZIG",
    citta: "Leipzig",
    paese: "Germania",
    codiceErasmus: "D  LEIPZIG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Daniela PUATO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-leipzig.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70927."
  },
  {
    id: "sap-lett-jena",
    universita: "FRIEDRICH SCHILLER UNIVERSITÄT",
    citta: "Jena",
    paese: "Germania",
    codiceErasmus: "D  JENA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "Daniela PADULAROSA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-jena.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70924."
  },
  {
    id: "sap-lett-wurzbur-2",
    universita: "BAYERISCHE JULIUS-MAXIMILIANS-SCHWEINFURT-ABT WURZBURG",
    citta: "Wurzbur",
    paese: "Germania",
    codiceErasmus: "D  WURZBUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Giuseppe LABUA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-wuerzburg.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71272."
  },
  {
    id: "sap-lett-jena-2",
    universita: "FRIEDRICH SCHILLER UNIVERSITÄT",
    citta: "Jena",
    paese: "Germania",
    codiceErasmus: "D  JENA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "021", nome: "Arts" }],
    coordinatoreCf: "ROBERTA CERONE",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-jena.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71330."
  },
  {
    id: "sap-lett-mainz",
    universita: "JOHANNES-GUTENBERG-UNIVERSITÄT MAINZ",
    citta: "Mainz",
    paese: "Germania",
    codiceErasmus: "D  MAINZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-mainz.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71159."
  },
  {
    id: "sap-lett-berlin-6",
    universita: "HUMBOLDT-UNIVERSITÄT ZU BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hu-berlin.de/de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71151."
  },
  {
    id: "sap-lett-berlin-7",
    universita: "HUMBOLDT-UNIVERSITÄT ZU BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ANDREA CHEGAI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hu-berlin.de/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71150."
  },
  {
    id: "sap-lett-heidelb-2",
    universita: "RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG",
    citta: "Heidelb",
    paese: "Germania",
    codiceErasmus: "D  HEIDELB01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ANDREA CHEGAI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.eu.uni-heidelberg.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71154."
  },
  {
    id: "sap-lett-hamburg-3",
    universita: "UNIVERSITÄT HAMBURG",
    citta: "Hamburg",
    paese: "Germania",
    codiceErasmus: "D  HAMBURG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "BRUNO LO TURCO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hamburg.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71038."
  },
  {
    id: "sap-lett-mainz-2",
    universita: "JOHANNES-GUTENBERG-UNIVERSITÄT MAINZ",
    citta: "Mainz",
    paese: "Germania",
    codiceErasmus: "D  MAINZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANNALISA LO MONACO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-mainz.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71267."
  },
  {
    id: "sap-lett-heidelb-3",
    universita: "RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG",
    citta: "Heidelb",
    paese: "Germania",
    codiceErasmus: "D  HEIDELB01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Antonio Musarra",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.eu.uni-heidelberg.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71381."
  },
  {
    id: "sap-lett-hildesh",
    universita: "HAWK HOCHSCHULE FUR ANGEWANDTE WISSENSCHAFT UND KUNST FACHHOCHSCHULE HILDESHEIM/HOLZMINDEN/GOTTINGEN",
    citta: "Hildesh",
    paese: "Germania",
    codiceErasmus: "D  HILDESH02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "Chiara Piva",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hawk.de/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71329."
  },
  {
    id: "sap-lett-trier",
    universita: "UNIVERSITÄT TRIER",
    citta: "Trier",
    paese: "Germania",
    codiceErasmus: "D  TRIER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "STEFANO ROMAGNOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.auslandsamt.uni-trier.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71667."
  },
  {
    id: "sap-lett-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 7, mesi: 5, livello: "L", note: "" },
      { numero: 7, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 7 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70348."
  },
  {
    id: "sap-lett-athine-2",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70349."
  },
  {
    id: "sap-lett-athine-3",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 7, mesi: 5, livello: "L", note: "" },
      { numero: 7, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 7 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70351."
  },
  {
    id: "sap-lett-athine-4",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70352."
  },
  {
    id: "sap-lett-athine-5",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0114", nome: "Teacher training with subject specialization" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70340."
  },
  {
    id: "sap-lett-athine-6",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70343."
  },
  {
    id: "sap-lett-athine-7",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70344."
  },
  {
    id: "sap-lett-athine-8",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70354."
  },
  {
    id: "sap-lett-athine-9",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70355."
  },
  {
    id: "sap-lett-athine-10",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70356."
  },
  {
    id: "sap-lett-athine-11",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 7, mesi: 5, livello: "L", note: "" },
      { numero: 7, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 7 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70357."
  },
  {
    id: "sap-lett-athine-12",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70358."
  },
  {
    id: "sap-lett-athine-13",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70359."
  },
  {
    id: "sap-lett-athine-14",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" },
      { numero: 8, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70360."
  },
  {
    id: "sap-lett-athine-15",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70361."
  },
  {
    id: "sap-lett-athine-16",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0213", nome: "Fine arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70342."
  },
  {
    id: "sap-lett-thessal",
    universita: "ARISTOTELIOU PANEPISTIMIO THESSALONIKIS",
    citta: "Thessal",
    paese: "Grecia",
    codiceErasmus: "G  THESSAL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.auth.gr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70978."
  },
  {
    id: "sap-lett-thessal-2",
    universita: "ARISTOTELIOU PANEPISTIMIO THESSALONIKIS",
    citta: "Thessal",
    paese: "Grecia",
    codiceErasmus: "G  THESSAL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.auth.gr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70979."
  },
  {
    id: "sap-lett-patra",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upatras.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70977."
  },
  {
    id: "sap-lett-kritis",
    universita: "PANEPISTIMIO KRITIS",
    citta: "Kritis",
    paese: "Grecia",
    codiceErasmus: "G  KRITIS01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uoc.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70976."
  },
  {
    id: "sap-lett-athine-17",
    universita: "IONIO PANEPISTIMIO",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE42",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "CHRISTOS BINTOUDIS",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ionio.gr/rc/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70975."
  },
  {
    id: "sap-lett-kallith",
    universita: "PANTION PANEPISTIMIO KINONIKON KE POLITIKON EPISTIMON",
    citta: "Kallith",
    paese: "Grecia",
    codiceErasmus: "G  KALLITH02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0319", nome: "Social and behavioural sciences, not elsewhere classified" }],
    coordinatoreCf: "SERGIO BOTTA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.panteion.gr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71441."
  },
  {
    id: "sap-lett-irldublin",
    universita: "UNIVERSITY COLLEGE DUBLIN - Ireland’s Global University - UCD",
    citta: "Irldublin",
    paese: "Irlanda",
    codiceErasmus: "IRLDUBLIN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "IOLANDA PLESCIA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucd.ie/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70987."
  },
  {
    id: "sap-lett-irldublin-2",
    universita: "UNIVERSITY COLLEGE DUBLIN - Ireland’s Global University - UCD",
    citta: "Irldublin",
    paese: "Irlanda",
    codiceErasmus: "IRLDUBLIN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "IOLANDA PLESCIA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ucd.ie/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70988."
  },
  {
    id: "sap-lett-klaiped",
    universita: "KLAIPEDOS UNIVERSITETAS",
    citta: "Klaiped",
    paese: "Lituania",
    codiceErasmus: "LT KLAIPED01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO VANZETTI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71704."
  },
  {
    id: "sap-lett-vilnius",
    universita: "VILNIUS UNIVERSITY",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.vu.lt/en/international/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70989."
  },
  {
    id: "sap-lett-vilnius-2",
    universita: "VILNIAUS GEDIMINO TECHNIKOS UNIVERSITETAS (VGTU)",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0414", nome: "Marketing and advertising" }],
    coordinatoreCf: "ROMANA ANDO'",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.vgtu.lt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71448."
  },
  {
    id: "sap-lett-malta",
    universita: "MCAST Malta College of Arts, Science & Tecnology",
    citta: "Malta",
    paese: "Malta",
    codiceErasmus: "MT MALTA02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ROMANA ANDO'",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://mcast.edu.mt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71449."
  },
  {
    id: "sap-lett-leiden",
    universita: "UNIVERSITEIT LEIDEN",
    citta: "Leiden",
    paese: "Olanda",
    codiceErasmus: "NL LEIDEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "Lorenzo D'Angelo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.leidenuniv.nl/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71560."
  },
  {
    id: "sap-lett-warszaw",
    universita: "UNIVERSITY OF WARSAW",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "NUNZIO ALLOCCA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.bwz.uw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71126."
  },
  {
    id: "sap-lett-poznan",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIAN LUCA GREGORI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71299."
  },
  {
    id: "sap-lett-lodz",
    universita: "UNIWERSYTET LÓDZKI",
    citta: "Lodz",
    paese: "Polonia",
    codiceErasmus: "PL LODZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "GIORGIO MARIANI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni.lodz.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71005."
  },
  {
    id: "sap-lett-wroclaw",
    universita: "UNIWERSYTET WROCLAWSKI",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "LUIGI MARINELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni.wroc.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71014."
  },
  {
    id: "sap-lett-poznan-2",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "MARIO COSTANTINO MARTINO",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71009."
  },
  {
    id: "sap-lett-krosno",
    universita: "PANSTWOWA WYZSZA SZKOLA ZAWODOWA IM. STANISLAWA PIGONIA W KROSNIE",
    citta: "Krosno",
    paese: "Polonia",
    codiceErasmus: "PL KROSNO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "BARBARA RONCHETTI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://pans.krosno.pl/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA71004."
  },
  {
    id: "sap-lett-poznan-3",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "BARBARA RONCHETTI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71008."
  },
  {
    id: "sap-lett-gdansk",
    universita: "UNIWERSITYTET GDANSKI",
    citta: "Gdansk",
    paese: "Polonia",
    codiceErasmus: "PL GDANSK01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO VANZETTI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.2.univ.gda.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71298."
  },
  {
    id: "sap-lett-gdansk-2",
    universita: "UNIWERSITYTET GDANSKI",
    citta: "Gdansk",
    paese: "Polonia",
    codiceErasmus: "PL GDANSK01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.2.univ.gda.pl",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70999."
  },
  {
    id: "sap-lett-lublin",
    universita: "UNIWERSYTET MARII CURIE-SKLODOWSKIEJ",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.umcs.lublin.pl",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71006."
  },
  {
    id: "sap-lett-krakow",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71003."
  },
  {
    id: "sap-lett-poznan-4",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71365."
  },
  {
    id: "sap-lett-krakow-2",
    universita: "UNIWERSYTET KOMISJI EDUKACJI NARODOWEJ W KRAKOWIE",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uken.krakow.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71364."
  },
  {
    id: "sap-lett-poznan-5",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "031", nome: "Social and behavioural sciences" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71366."
  },
  {
    id: "sap-lett-torun",
    universita: "UNIWERSYTET MIKOLAJA KOPERNIKA W TORUNIU - Nicolaus Copernicus University in Torun",
    citta: "Torun",
    paese: "Polonia",
    codiceErasmus: "PL TORUN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni.torun.pl/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71010."
  },
  {
    id: "sap-lett-bydgosz",
    universita: "UNIWERSYTET KAZIMIERZA WIELKIEGO",
    citta: "Bydgosz",
    paese: "Polonia",
    codiceErasmus: "PL BYDGOSZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ukw.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70998."
  },
  {
    id: "sap-lett-lublin-2",
    universita: "AKADEMIA NAUK STOSOWANYCH WINCENTEGO POLA W LUBLINIE [Former WYZSZA SZKOLA SPOLECZNO – PRZYRODNICZA IM. WINCENTEGO POLA W LUBLINIE]",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN08",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1013", nome: "Hotel, restaurants and catering" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.akademia-pol.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71007."
  },
  {
    id: "sap-lett-poznan-6",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "SABINE KOESTERS GENSINI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.amu.edu.pl",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71235."
  },
  {
    id: "sap-lett-wroclaw-2",
    universita: "UNIWERSYTET WROCLAWSKI",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni.wroc.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71459."
  },
  {
    id: "sap-lett-krakow-3",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "PAOLO DE TROIA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71064."
  },
  {
    id: "sap-lett-warszaw-2",
    universita: "UNIVERSITY OF WARSAW",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "IRENE RANZATO",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.bwz.uw.edu.pl",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71012."
  },
  {
    id: "sap-lett-krakow-4",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "031", nome: "Social and behavioural sciences" }],
    coordinatoreCf: "MATTEO ARIA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71455."
  },
  {
    id: "sap-lett-lublin-3",
    universita: "UNIWERSYTET MARII CURIE-SKLODOWSKIEJ",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "SARIN MARCHETTI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.umcs.lublin.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71125."
  },
  {
    id: "sap-lett-krakow-5",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71454."
  },
  {
    id: "sap-lett-krakow-6",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71453."
  },
  {
    id: "sap-lett-krakow-7",
    universita: "UNIWERSYTET PAPIESKI JANA PAWLA II W KRAKOWIE",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW08",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "UMBERTO GENTILONI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://upjp2.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71457."
  },
  {
    id: "sap-lett-kielce",
    universita: "UNIWERSYTET JANA KOCHANOWSKIEGO W KIELCACH",
    citta: "Kielce",
    paese: "Polonia",
    codiceErasmus: "PL KIELCE02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCESCO DE RENZO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ujk.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71059."
  },
  {
    id: "sap-lett-krakow-8",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Joanna Sondel-Cedarmas",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71456."
  },
  {
    id: "sap-lett-katowic",
    universita: "UNIWERSYTET SLASKI",
    citta: "Katowic",
    paese: "Polonia",
    codiceErasmus: "PL KATOWIC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "Carlo Martinez",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.us.edu.pl/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71000."
  },
  {
    id: "sap-lett-coimbra",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "SILVIA ORLANDI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uc.pt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71297."
  },
  {
    id: "sap-lett-porto",
    universita: "INSTITUTO POLITECNICO DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipp.pt/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70997."
  },
  {
    id: "sap-lett-porto-2",
    universita: "INSTITUTO POLITECNICO DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1013", nome: "Hotel, restaurants and catering" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipp.pt/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70995."
  },
  {
    id: "sap-lett-porto-3",
    universita: "INSTITUTO POLITECNICO DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1013", nome: "Hotel, restaurants and catering" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipp.pt/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70996."
  },
  {
    id: "sap-lett-lisboa",
    universita: "UNIVERSIDADE NOVA DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "FRANCESCA GALLO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unl.pt",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71362."
  },
  {
    id: "sap-lett-coimbra-2",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "BARBARA STANISCIA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uc.pt",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70991."
  },
  {
    id: "sap-lett-lisboa-2",
    universita: "UNIVERSIDADE NOVA DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "SIMONE CELANI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unl.pt",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70992."
  },
  {
    id: "sap-lett-glasgow",
    universita: "THE UNIVERSITY OF GLASGOW",
    citta: "Glasgow",
    paese: "Regno Unito",
    codiceErasmus: "UK GLASGOW01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.gla.ac.uk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70399."
  },
  {
    id: "sap-lett-exeter",
    universita: "UNIVERSITY OF EXETER",
    citta: "Exeter",
    paese: "Regno Unito",
    codiceErasmus: "UK EXETER01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MONICA BARNI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.exeter.ac.uk/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70479."
  },
  {
    id: "sap-lett-olomouc",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "ALESSANDRO SAGGIORO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71378."
  },
  {
    id: "sap-lett-olomouc-2",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "STEFANO TEDESCHI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70908."
  },
  {
    id: "sap-lett-olomouc-3",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "BEATRICE ALFONZETTI",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71147."
  },
  {
    id: "sap-lett-praha",
    universita: "UNIVERZITA KARLOVA -CHARLES UNIVERSITY",
    citta: "Praha",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ PRAHA07",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ANNALISA COSENTINO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.cuni.cz/cuni/ruk/zahran/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70911."
  },
  {
    id: "sap-lett-olomouc-4",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANNALISA COSENTINO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70907."
  },
  {
    id: "sap-lett-opava",
    universita: "SLEZSKA UNIVERZITA",
    citta: "Opava",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OPAVA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANNALISA COSENTINO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.slu.cz",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70909."
  },
  {
    id: "sap-lett-brno",
    universita: "MASARYKOVA UNIVERZITA V BRNE",
    citta: "Brno",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ BRNO05",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.czs.muni.cz/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71376."
  },
  {
    id: "sap-lett-olomouc-5",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ROBERTA CERONE",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71323."
  },
  {
    id: "sap-lett-olomouc-6",
    universita: "UNIVERZITA PALACKÉHO V OLOMOUCI",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "022", nome: "Humanities (except languages)" }],
    coordinatoreCf: "Elena Valeri",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upol.cz/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71377."
  },
  {
    id: "sap-lett-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70365."
  },
  {
    id: "sap-lett-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70366."
  },
  {
    id: "sap-lett-bucures-3",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70367."
  },
  {
    id: "sap-lett-bucures-4",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70369."
  },
  {
    id: "sap-lett-bucures-5",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70368."
  },
  {
    id: "sap-lett-bucures-6",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70371."
  },
  {
    id: "sap-lett-bucures-7",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70372."
  },
  {
    id: "sap-lett-bucures-8",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70031."
  },
  {
    id: "sap-lett-bucures-9",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70032."
  },
  {
    id: "sap-lett-bucures-10",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70370."
  },
  {
    id: "sap-lett-sibiu",
    universita: "Universitatea „Lucian Blaga” din Sibiu",
    citta: "Sibiu",
    paese: "Romania",
    codiceErasmus: "RO SIBIU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "Giuseppe Motta",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ulbsibiu.ro/ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71239."
  },
  {
    id: "sap-lett-albaiu",
    universita: "UNIVERSITATEA \"1 DECEMBRIE 1918\" ALBA IULIA",
    citta: "Albaiu",
    paese: "Romania",
    codiceErasmus: "RO ALBAIU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "022", nome: "Humanities (except languages)" }],
    coordinatoreCf: "Giuseppe Motta",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uab.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71238."
  },
  {
    id: "sap-lett-timisoa",
    universita: "UNIVERSITATEA DE VEST DIN TIMÍSOARA",
    citta: "Timisoa",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "ANDREA IMPERIA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uvt.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71462."
  },
  {
    id: "sap-lett-clujnap",
    universita: "UNIVERSITATEA BABES-BOLYAI",
    citta: "Clujnap",
    paese: "Romania",
    codiceErasmus: "RO CLUJNAP01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANGELA TARANTINO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ubbcluj.ro/ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71016."
  },
  {
    id: "sap-lett-iasi",
    universita: "UNIVERSITATEA \"ALEXANDRU IOAN CUZA\"",
    citta: "Iasi",
    paese: "Romania",
    codiceErasmus: "RO IASI02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ANGELA TARANTINO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://fenrir.info.uaic.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71018."
  },
  {
    id: "sap-lett-constan",
    universita: "UNIVERSITATEA OVIDIUS\"CONSTANTA\"",
    citta: "Constan",
    paese: "Romania",
    codiceErasmus: "RO CONSTAN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ANGELA TARANTINO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-ovidius.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71017."
  },
  {
    id: "sap-lett-brasov",
    universita: "UNIVERSITATEA TRANSILVANIA DIN BRASOV",
    citta: "Brasov",
    paese: "Romania",
    codiceErasmus: "RO BRASOV01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ANGELA TARANTINO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://unitbv.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71015."
  },
  {
    id: "sap-lett-clujnap-2",
    universita: "Unversitatea Sapientia din Cluj-Napoca (Sapientia Hungarian University of Transylvania)",
    citta: "Clujnap",
    paese: "Romania",
    codiceErasmus: "RO CLUJNAP07",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://sapientia.ro/en",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71460."
  },
  {
    id: "sap-lett-targu",
    universita: "UNIVERSITATEA DE MEDICINA, FARMACIE, STIINTE SI TEHNOLOGIE \"GEORGE EMIL PALADE\" DIN TARGU MURES",
    citta: "Targu",
    paese: "Romania",
    codiceErasmus: "RO TARGU02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://umfst.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71461."
  },
  {
    id: "sap-lett-belgrad",
    universita: "UNIVERZITET U BEOGRADU",
    citta: "Belgrad",
    paese: "Serbia",
    codiceErasmus: "RS  BELGRAD02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Luca Vaglio",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.bg.ac.rs/en/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71019."
  },
  {
    id: "sap-lett-bratisl",
    universita: "COMENIUS UNIVERSITY IN BRATISLAVA",
    citta: "Bratisl",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www..uniba.sk",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71242."
  },
  {
    id: "sap-lett-trnava",
    universita: "TRNAVSKÁ UNIVERZITA V TRNAVE",
    citta: "Trnava",
    paese: "Slovacchia",
    codiceErasmus: "SK TRNAVA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO VANZETTI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.truni.sk/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71302."
  },
  {
    id: "sap-lett-bratisl-2",
    universita: "COMENIUS UNIVERSITY IN BRATISLAVA",
    citta: "Bratisl",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANNALISA COSENTINO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www..uniba.sk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71023."
  },
  {
    id: "sap-lett-ljublja",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "GIOVANNI GIURIATI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-lj.si",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71240."
  },
  {
    id: "sap-lett-koper",
    universita: "UNIVERZA NA PRIMORSKEM UNIVERSITA DEL LITORALE",
    citta: "Koper",
    paese: "Slovenia",
    codiceErasmus: "SI KOPER03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upr.si",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71021."
  },
  {
    id: "sap-lett-ljublja-2",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MONIKA WOZNIAK",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-lj.si",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71022."
  },
  {
    id: "sap-lett-maribor",
    universita: "UNIVERZA V MARIBORU",
    citta: "Maribor",
    paese: "Slovenia",
    codiceErasmus: "SI MARIBOR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "ROBERTA CERONE",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.um.si/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71367."
  },
  {
    id: "sap-lett-cordoba",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "MARIA LUISA CERRON PUGA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70938."
  },
  {
    id: "sap-lett-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MARIA LUISA CERRON PUGA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70946."
  },
  {
    id: "sap-lett-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "022", nome: "Humanities (except languages)" }],
    coordinatoreCf: "ELISABETTA CORSI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.US.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71411."
  },
  {
    id: "sap-lett-barcelo",
    universita: "FUNDACIÓ PER A LA UNIVERSITAT OBERTA DE CATALUNYA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO45",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "ELISABETTA CORSI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uoc.edu/es",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71391."
  },
  {
    id: "sap-lett-cordoba-2",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO GALLI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71274."
  },
  {
    id: "sap-lett-madrid",
    universita: "UNIVERSIDAD NACIONAL DE EDUCACION A DISTANCIA (UNED)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIAN LUCA GREGORI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uned.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71275."
  },
  {
    id: "sap-lett-madrid-2",
    universita: "UNIVERSIDAD NACIONAL DE EDUCACION A DISTANCIA (UNED)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIAN LUCA GREGORI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uned.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71276."
  },
  {
    id: "sap-lett-santand",
    universita: "UNIVERSIDAD DE CANTABRIA",
    citta: "Santand",
    paese: "Spagna",
    codiceErasmus: "E  SANTAND01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ALESSANDRO SAGGIORO",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unican.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71410."
  },
  {
    id: "sap-lett-madrid-3",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70281."
  },
  {
    id: "sap-lett-madrid-4",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70291."
  },
  {
    id: "sap-lett-madrid-5",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70290."
  },
  {
    id: "sap-lett-madrid-6",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70301."
  },
  {
    id: "sap-lett-madrid-7",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70302."
  },
  {
    id: "sap-lett-madrid-8",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70303."
  },
  {
    id: "sap-lett-madrid-9",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA70304."
  },
  {
    id: "sap-lett-madrid-10",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70305."
  },
  {
    id: "sap-lett-madrid-11",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70306."
  },
  {
    id: "sap-lett-madrid-12",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70296."
  },
  {
    id: "sap-lett-madrid-13",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70297."
  },
  {
    id: "sap-lett-ciudar",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Ciuda-r",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71174."
  },
  {
    id: "sap-lett-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71194."
  },
  {
    id: "sap-lett-madrid-14",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70308."
  },
  {
    id: "sap-lett-madrid-15",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70309."
  },
  {
    id: "sap-lett-madrid-16",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70298."
  },
  {
    id: "sap-lett-madrid-17",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70299."
  },
  {
    id: "sap-lett-madrid-18",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70300."
  },
  {
    id: "sap-lett-madrid-19",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70280."
  },
  {
    id: "sap-lett-salaman",
    universita: "UNIVERSIDAD DE SALAMANCA",
    citta: "Salaman",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "CHIARA FAGGIOLANI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71191."
  },
  {
    id: "sap-lett-leon",
    universita: "UNIVERSIDAD DE LEÓN",
    citta: "Leon",
    paese: "Spagna",
    codiceErasmus: "E  LEON01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "CHIARA FAGGIOLANI",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" },
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unileon.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71179."
  },
  {
    id: "sap-lett-valenci-2",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "CHIARA FAGGIOLANI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71198."
  },
  {
    id: "sap-lett-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "CHIARA FAGGIOLANI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71176."
  },
  {
    id: "sap-lett-valenci-3",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71096."
  },
  {
    id: "sap-lett-madrid-20",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UCM.ES",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71092."
  },
  {
    id: "sap-lett-oviedo-2",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71094."
  },
  {
    id: "sap-lett-bilbao",
    universita: "UNIVERSIDAD DEL PAÍS VASCO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "MARIASILVIA TATTI",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ehu.eus/en/en-home",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71169."
  },
  {
    id: "sap-lett-pamplon",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "STEFANO TEDESCHI",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70947."
  },
  {
    id: "sap-lett-salaman-2",
    universita: "UNIVERSIDAD DE SALAMANCA",
    citta: "Salaman",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "JOHN THORNTON",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71279."
  },
  {
    id: "sap-lett-barcelo-2",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71334."
  },
  {
    id: "sap-lett-santiag-2",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71339."
  },
  {
    id: "sap-lett-valenci-4",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71341."
  },
  {
    id: "sap-lett-barcelo-3",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71332."
  },
  {
    id: "sap-lett-palma",
    universita: "UNIVERSIDAD DE LAS ISLAS BALEARES",
    citta: "Palma",
    paese: "Spagna",
    codiceErasmus: "E  PALMA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://sri.uib.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71337."
  },
  {
    id: "sap-lett-jaen",
    universita: "UNIVERSIDAD DE JAÉN",
    citta: "Jaen",
    paese: "Spagna",
    codiceErasmus: "E  JAEN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ujaen.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70940."
  },
  {
    id: "sap-lett-tenerif",
    universita: "UNIVERSIDAD DE LA LAGUNA",
    citta: "Tenerif",
    paese: "Spagna",
    codiceErasmus: "E  TENERIF01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.ULL.ES",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70951."
  },
  {
    id: "sap-lett-madrid-21",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urjc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70943."
  },
  {
    id: "sap-lett-valenci-5",
    universita: "UNIVERSIDAD POLITECNICA DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upv.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70954."
  },
  {
    id: "sap-lett-madrid-22",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1013", nome: "Hotel, restaurants and catering" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urjc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70944."
  },
  {
    id: "sap-lett-madrid-23",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "1013", nome: "Hotel, restaurants and catering" }],
    coordinatoreCf: "FERNANDO MARTINEZ DE CARNERO",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urjc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70945."
  },
  {
    id: "sap-lett-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANTONELLA SBRILLI",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71342."
  },
  {
    id: "sap-lett-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "MAURIZIO CAMPANELLI",
    posti: [
      { numero: 1, mesi: 4, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UCA.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71171."
  },
  {
    id: "sap-lett-ciudar-2",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Ciuda-r",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71173."
  },
  {
    id: "sap-lett-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.um.es/internacionales",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71189."
  },
  {
    id: "sap-lett-pamplon-2",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71190."
  },
  {
    id: "sap-lett-logrono",
    universita: "UNIVERSIDAD DE LA RIOJA",
    citta: "Logrono",
    paese: "Spagna",
    codiceErasmus: "E  LOGRONO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIRIOJA.ES",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71181."
  },
  {
    id: "sap-lett-alicant",
    universita: "UNIVERSIDAD DE ALICANTE",
    citta: "Alicant",
    paese: "Spagna",
    codiceErasmus: "E  ALICANT01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ua.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71163."
  },
  {
    id: "sap-lett-almeria",
    universita: "UNIVERSIDAD DE ALMERIA",
    citta: "Almeria",
    paese: "Spagna",
    codiceErasmus: "E  ALMERIA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UAL.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71164."
  },
  {
    id: "sap-lett-alcalh",
    universita: "UNIVERSIDAD DE ALCALA",
    citta: "Alcal-h",
    paese: "Spagna",
    codiceErasmus: "E  ALCAL-H01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0231", nome: "Language acquisition" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uah.es",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71162."
  },
  {
    id: "sap-lett-cordoba-3",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71175."
  },
  {
    id: "sap-lett-burgos",
    universita: "UNIVERSIDAD DE BURGOS",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E  BURGOS01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ubu.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71170."
  },
  {
    id: "sap-lett-vigo",
    universita: "UNIVERSIDAD DE VIGO",
    citta: "Vigo",
    paese: "Spagna",
    codiceErasmus: "E  VIGO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://internacional.uvigo.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71202."
  },
  {
    id: "sap-lett-madrid-24",
    universita: "UNIVERSIDAD NACIONAL DE EDUCACION A DISTANCIA (UNED)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uned.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71182."
  },
  {
    id: "sap-lett-lacoru",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "La-coru",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "DEBORA VACCARI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.udc.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71178."
  },
  {
    id: "sap-lett-santiag-3",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ROBERTO GIGLIUCCI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71193."
  },
  {
    id: "sap-lett-malaga",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uma.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71408."
  },
  {
    id: "sap-lett-ciudar-3",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Ciuda-r",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ISABELLA TOMASSETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70937."
  },
  {
    id: "sap-lett-castell",
    universita: "UNIVERSIDAD JAUME I DE CASTELLON",
    citta: "Castell",
    paese: "Spagna",
    codiceErasmus: "E  CASTELL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ISABELLA TOMASSETTI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://ujiapps.uji.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70936."
  },
  {
    id: "sap-lett-vallado",
    universita: "UNIVERSIDAD DE VALLADOLID",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "ELISABETTA SARMATI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uva.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71201."
  },
  {
    id: "sap-lett-barcelo-4",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0288", nome: "Arts and humanities, inter-disciplinary programmes" }],
    coordinatoreCf: "ELISABETTA SARMATI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71167."
  },
  {
    id: "sap-lett-madrid-25",
    universita: "GRAPOVISA - Centro Universitario Villanueva",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID221",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0212", nome: "Fashion, interior and industrial design" }],
    coordinatoreCf: "ROMANA ANDO'",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.villanueva.edu/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71406."
  },
  {
    id: "sap-lett-tarrago",
    universita: "UNIVERSITAT ROVIRA I VIRGILI",
    citta: "Tarrago",
    paese: "Spagna",
    codiceErasmus: "E  TARRAGO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "ALESSANDRO LUPO",
    posti: [
      { numero: 8, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti dell'accordo: 8. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71414."
  },
  {
    id: "sap-lett-tarrago-2",
    universita: "UNIVERSITAT ROVIRA I VIRGILI",
    citta: "Tarrago",
    paese: "Spagna",
    codiceErasmus: "E  TARRAGO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "022", nome: "Humanities (except languages)" }],
    coordinatoreCf: "ALESSANDRO LUPO",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA71413."
  },
  {
    id: "sap-lett-barcelo-5",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "ALESSANDRO LUPO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71388."
  },
  {
    id: "sap-lett-zaragoz-2",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Tiziana BANINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71097."
  },
  {
    id: "sap-lett-madrid-26",
    universita: "UNIVERSIDAD NACIONAL DE EDUCACION A DISTANCIA (UNED)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "PAOLA VOLPINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uned.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71397."
  },
  {
    id: "sap-lett-elche",
    universita: "UNIVERSIDAD MIGUEL HERNANDEZ DE ELCHE",
    citta: "Elche",
    paese: "Spagna",
    codiceErasmus: "E  ELCHE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "MATTEO ARIA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.umh.es/?lang=EN",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71393."
  },
  {
    id: "sap-lett-zaragoz-3",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Maurizio SONNINO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71283."
  },
  {
    id: "sap-lett-cordoba-4",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71673."
  },
  {
    id: "sap-lett-lacoru-2",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "La-coru",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0212", nome: "Fashion, interior and industrial design" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.udc.es",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA71396."
  },
  {
    id: "sap-lett-barcelo-6",
    universita: "LCI BARCELONA ESCUELA SUPERIOR S.L.U",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO33",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0212", nome: "Fashion, interior and industrial design" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://barcelona.lcieducation.com/es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71390."
  },
  {
    id: "sap-lett-vallado-2",
    universita: "UNIVERSIDAD DE VALLADOLID",
    citta: "Vallado",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA FARA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uva.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71416."
  },
  {
    id: "sap-lett-pamplon-3",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANDREA FARA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71409."
  },
  {
    id: "sap-lett-zaragoz-4",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MICHELINA DI CESARE",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71282."
  },
  {
    id: "sap-lett-salaman-3",
    universita: "UNIVERSIDAD DE SALAMANCA",
    citta: "Salaman",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0213", nome: "Fine arts" }],
    coordinatoreCf: "ROBERTA CERONE",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA71338."
  },
  {
    id: "sap-lett-santiag-4",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "Maria Caterina Pincherle",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70949."
  },
  {
    id: "sap-lett-santand-2",
    universita: "UNIVERSIDAD DE CANTABRIA",
    citta: "Santand",
    paese: "Spagna",
    codiceErasmus: "E  SANTAND01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unican.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71192."
  },
  {
    id: "sap-lett-lleida",
    universita: "UNIVERSITAT DE LLEIDA",
    citta: "Lleida",
    paese: "Spagna",
    codiceErasmus: "E  LLEIDA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.udl.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71180."
  },
  {
    id: "sap-lett-tenerif-2",
    universita: "UNIVERSIDAD DE LA LAGUNA",
    citta: "Tenerif",
    paese: "Spagna",
    codiceErasmus: "E  TENERIF01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "TESSA CANELLA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.ULL.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71415."
  },
  {
    id: "sap-lett-burgos-2",
    universita: "UNIVERSIDAD INTERNACIONAL ISABEL I DE CASTILLA SAU",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E  BURGOS20",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "022", nome: "Humanities (except languages)" }],
    coordinatoreCf: "MARIA TERESA D'ALESSIO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ui1.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71273."
  },
  {
    id: "sap-lett-tarrago-3",
    universita: "UNIVERSITAT ROVIRA I VIRGILI",
    citta: "Tarrago",
    paese: "Spagna",
    codiceErasmus: "E  TARRAGO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "ANNALISA LO MONACO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71281."
  },
  {
    id: "sap-lett-madrid-27",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "GIOVANNI PAOLONI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UCM.ES",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71184."
  },
  {
    id: "sap-lett-stockho",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.su.se/english/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70384."
  },
  {
    id: "sap-lett-stockho-2",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "FRANCA SINOPOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.su.se/english/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70385."
  },
  {
    id: "sap-lett-lund",
    universita: "LUNDS UNIVERSITET",
    citta: "Lund",
    paese: "Svezia",
    codiceErasmus: "S  LUND01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "FRANCESCA ROMANA STASOLLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.lu.se/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71300."
  },
  {
    id: "sap-lett-lugano",
    universita: "UNIVERSITA DELLA SVIZZERA ITALIANA (USI)",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "PAOLO DI GIOVINE",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.relint.usi.ch",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71145."
  },
  {
    id: "sap-lett-basel",
    universita: "UNIVERSITAT BASEL",
    citta: "Basel",
    paese: "Svizzera",
    codiceErasmus: "CH BASEL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "023", nome: "Languages" }],
    coordinatoreCf: "PAOLO DI GIOVINE",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibas.ch/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71140."
  },
  {
    id: "sap-lett-zurich",
    universita: "UNIVERSITÄT ZURICH",
    citta: "Zurich",
    paese: "Svizzera",
    codiceErasmus: "CH ZURICH01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "MARIA SERENA SAPEGNO",
    posti: [
      { numero: 1, mesi: 4, livello: "L", note: "" },
      { numero: 1, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uzh.ch/de.html",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70905."
  },
  {
    id: "sap-lett-delemon",
    universita: "HAUTE ECOLE SPECIALISEE DE SUISSE OCCIDENTALE",
    citta: "Delemon",
    paese: "Svizzera",
    codiceErasmus: "CH DELEMON02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0322", nome: "Library, information and archival studies" }],
    coordinatoreCf: "CHIARA FAGGIOLANI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hes-so.ch/accueil",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA71143."
  },
  {
    id: "sap-lett-bern",
    universita: "UNIVERSITY OF BERN",
    citta: "Bern",
    paese: "Svizzera",
    codiceErasmus: "CH BERN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0213", nome: "Fine arts" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibe.ch/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71320."
  },
  {
    id: "sap-lett-zurich-2",
    universita: "UNIVERSITÄT ZURICH",
    citta: "Zurich",
    paese: "Svizzera",
    codiceErasmus: "CH ZURICH01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "CLAUDIO ZAMBIANCHI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uzh.ch/de.html",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71321."
  },
  {
    id: "sap-lett-fribour",
    universita: "UNIVERSITE' DE FRIBOURG",
    citta: "Fribour",
    paese: "Svizzera",
    codiceErasmus: "CH FRIBOUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and cultural studies" }],
    coordinatoreCf: "ANNA IUSO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unifr.ch/home/fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71374."
  },
  {
    id: "sap-lett-basel-2",
    universita: "UNIVERSITAT BASEL",
    citta: "Basel",
    paese: "Svizzera",
    codiceErasmus: "CH BASEL01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities (except languages), not further defined" }],
    coordinatoreCf: "FRANCESCA ROMANA BERNO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibas.ch/de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71251."
  },
  {
    id: "sap-lett-bern-2",
    universita: "UNIVERSITY OF BERN",
    citta: "Bern",
    paese: "Svizzera",
    codiceErasmus: "CH BERN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Giuseppe LABUA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibe.ch/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71253."
  },
  {
    id: "sap-lett-fribour-2",
    universita: "UNIVERSITE' DE FRIBOURG",
    citta: "Fribour",
    paese: "Svizzera",
    codiceErasmus: "CH FRIBOUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "GIUSEPPE LENTINI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unifr.ch/home/fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71254."
  },
  {
    id: "sap-lett-bern-3",
    universita: "UNIVERSITY OF BERN",
    citta: "Bern",
    paese: "Svizzera",
    codiceErasmus: "CH BERN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "RICCARDO MORRI",
    posti: [
      { numero: 1, mesi: 3, livello: "L", note: "" },
      { numero: 1, mesi: 3, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibe.ch/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71142."
  },
  {
    id: "sap-lett-fribour-3",
    universita: "UNIVERSITE' DE FRIBOURG",
    citta: "Fribour",
    paese: "Svizzera",
    codiceErasmus: "CH FRIBOUR01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Elena Valeri",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unifr.ch/home/fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71373."
  },
  {
    id: "sap-lett-bern-4",
    universita: "UNIVERSITY OF BERN",
    citta: "Bern",
    paese: "Svizzera",
    codiceErasmus: "CH BERN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0215", nome: "Music and performing arts" }],
    coordinatoreCf: "ANDREA CHEGAI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unibe.ch/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71141."
  },
  {
    id: "sap-lett-ankara",
    universita: "ANKARA UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO GALLI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://en.ankara.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71303."
  },
  {
    id: "sap-lett-istanbu",
    universita: "ISTANBUL TICARET UNIVERSITESI (ISTANBUL COMMERCE UNIVERSITY)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU10",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0212", nome: "Fashion, interior and industrial design" }],
    coordinatoreCf: "ALESSANDRO SAGGIORO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.iticu.edu.tr/english/eng_index.htm",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71467."
  },
  {
    id: "sap-lett-istanbu-2",
    universita: "Yildiz Technical University / Yildiz Teknik Üniversitesi (YTU)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU07",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and ethics" }],
    coordinatoreCf: "EMIDIO SPINELLI",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.international.itu.edu.tr",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71129."
  },
  {
    id: "sap-lett-sakarya",
    universita: "SAKARYA UNIVERSITY",
    citta: "Sakarya",
    paese: "Turchia",
    codiceErasmus: "TR SAKARYA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "Giuseppe Motta",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.sakarya.edu.tr/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71245."
  },
  {
    id: "sap-lett-denizli",
    universita: "PAMUKKALE UNIVERSITESI",
    citta: "Denizli",
    paese: "Turchia",
    codiceErasmus: "TR DENIZLI01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Francesco Guizzi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pamukkale.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71308."
  },
  {
    id: "sap-lett-izmir",
    universita: "IZMIR DEMOKRASI UNVERSITESI",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Francesco Guizzi",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://idu.edu.tr/en/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71310."
  },
  {
    id: "sap-lett-izmir-2",
    universita: "IZMIR DEMOKRASI UNVERSITESI",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Francesco Guizzi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://idu.edu.tr/en/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71311."
  },
  {
    id: "sap-lett-ankara-2",
    universita: "ANKARA UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "FABIO L. GRASSI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://en.ankara.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71463."
  },
  {
    id: "sap-lett-istanbu-3",
    universita: "Yildiz Technical University / Yildiz Teknik Üniversitesi (YTU)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU07",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0210", nome: "Arts, not further defined" }],
    coordinatoreCf: "FABIO L. GRASSI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.international.itu.edu.tr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71465."
  },
  {
    id: "sap-lett-balikes",
    universita: "BANDIRMA ONYEDI EYLUL UNIVERSITY",
    citta: "Balikes",
    paese: "Turchia",
    codiceErasmus: "TR BALIKES02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FABIO L. GRASSI",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://bandirma.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71464."
  },
  {
    id: "sap-lett-ordu",
    universita: "ORDU ÜNIVERSITESI",
    citta: "Ordu",
    paese: "Turchia",
    codiceErasmus: "TR ORDU01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FABIO L. GRASSI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://erasmus.odu.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71468."
  },
  {
    id: "sap-lett-kahrama",
    universita: "KAHRAMANMARAS SUTCU IMAM UNIVERSITESI",
    citta: "Kahrama",
    paese: "Turchia",
    codiceErasmus: "TR KAHRAMA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "LORENZO VERDERAME",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ksu.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71065."
  },
  {
    id: "sap-lett-ankara-3",
    universita: "ANKARA HACI BAYRAM VELI UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA24",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "IRENE RANZATO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://hacibayram.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71024."
  },
  {
    id: "sap-lett-ankara-4",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCESCA BALOSSI RESTELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://akts.hacettepe.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71707."
  },
  {
    id: "sap-lett-izmir-3",
    universita: "EGE UNIVERSITY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR02",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "FRANCESCA BALOSSI RESTELLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ege.edu.tr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71309."
  },
  {
    id: "sap-lett-istanbu-4",
    universita: "BEYKENT UNIVERSITESI - BEYKENT UNIVERSITY",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU09",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0212", nome: "Fashion, interior and industrial design" }],
    coordinatoreCf: "MARIANNA FERRARA",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.beykent.edu.tr/en/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71466."
  },
  {
    id: "sap-lett-samsun",
    universita: "ONDOKUZ MAYIS UNIVERSITESI",
    citta: "Samsun",
    paese: "Turchia",
    codiceErasmus: "TR SAMSUN01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "LUCIA MORI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.omu.edu.tr/tr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71313."
  },
  {
    id: "sap-lett-ankara-5",
    universita: "ANKARA HACI BAYRAM VELI UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA24",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "LUCIA MORI",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://hacibayram.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71304."
  },
  {
    id: "sap-lett-istanbu-5",
    universita: "Istanbul Aydin University",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU25",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "ANDREA PEGHINELLI",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.aydin.edu.tr/en-us/Pages/default.aspx",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71028."
  },
  {
    id: "sap-lett-corum",
    universita: "HITIT UNIVERSITESI",
    citta: "Corum",
    paese: "Turchia",
    codiceErasmus: "TR CORUM01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "RITA FRANCIA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hitit.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71307."
  },
  {
    id: "sap-lett-antalya",
    universita: "AKDENIZ UNIVERSITESI",
    citta: "Antalya",
    paese: "Turchia",
    codiceErasmus: "TR ANTALYA01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "PAOLO CARAFA",
    posti: [
      { numero: 2, mesi: 4, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.akdeniz.edu.tr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71305."
  },
  {
    id: "sap-lett-szeged",
    universita: "SZEGEDI TUDOMÁNYEGYETEM",
    citta: "Szeged",
    paese: "Ungheria",
    codiceErasmus: "HU SZEGED01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0221", nome: "Religion and theology" }],
    coordinatoreCf: "ALESSANDRO SAGGIORO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://u-szeged.hu/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71447."
  },
  {
    id: "sap-lett-debrece",
    universita: "DEBRECENI EGYETEM",
    citta: "Debrece",
    paese: "Ungheria",
    codiceErasmus: "HU DEBRECE01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "02", nome: "Arts and humanities" }],
    coordinatoreCf: "ANDREA CARTENY",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://unideb.hu/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71446."
  },
  {
    id: "sap-lett-budapes",
    universita: "EÖTVÖS LORÁND TUDOMÁNYEGYETEM",
    citta: "Budapes",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "EDIT ROZSAVOLGYI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.elte.hu/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70982."
  },
  {
    id: "sap-lett-budapes-2",
    universita: "PAZMANY PETER CATHOLIC UNIVERSITY",
    citta: "Budapes",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES12",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0230", nome: "Languages, not further defined" }],
    coordinatoreCf: "EDIT ROZSAVOLGYI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ppke.hu/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70983."
  },
  {
    id: "sap-lett-miskolc",
    universita: "MISKOLCI EGYETEM",
    citta: "Miskolc",
    paese: "Ungheria",
    codiceErasmus: "HU MISKOLC01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "EDIT ROZSAVOLGYI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-miskolc.hu",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70984."
  },
  {
    id: "sap-lett-szeged-2",
    universita: "SZEGEDI TUDOMÁNYEGYETEM",
    citta: "Szeged",
    paese: "Ungheria",
    codiceErasmus: "HU SZEGED01",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "EDIT ROZSAVOLGYI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://u-szeged.hu/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70985."
  },
  {
    id: "sap-lett-budapes-3",
    universita: "PAZMANY PETER CATHOLIC UNIVERSITY",
    citta: "Budapes",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES12",
    dipartimentoCf: "Lettere e Filosofia",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "MARCO BAIS",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ppke.hu/en",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71653."
  }
];
