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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "atteso per tutti i campi di studio salvo German Philology; se ci sono abbastanza corsi in inglese, livello richiesto B2 anche per l'inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71132. || Lingua: l'Universita di Vienna si aspetta tedesco CEFR B2 per gli incoming; se nel campo di studio ci sono abbastanza corsi in inglese, anche il requisito per l'inglese corrisponde a B2. Di norma non serve caricare un certificato, ma l'universita di provenienza conferma le competenze in nomination. [Fonti: scheda destinazione; University of Vienna International Office] || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti incoming di livello Bachelor; accettati test standard o test online MCI" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale)", periodo: "entro 1 aprile" },
        { cosa: "Application (sem. autunnale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 1 ottobre" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.mci.edu/de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71066. || Lingua: MCI richiede prova di inglese per incoming exchange; per Bachelor il livello e CEFR B2 (TOEFL iBT 75, IELTS 5.5 o equivalenti/test online MCI). Corso di lingua MCI ~100 EUR. [Fonti: scheda destinazione; MCI Incoming Exchange]"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "atteso per tutti i campi di studio salvo German Philology; se ci sono abbastanza corsi in inglese, livello richiesto B2 anche per l'inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71035. || Lingua: l'Universita di Vienna si aspetta tedesco CEFR B2 per gli incoming; se nel campo di studio ci sono abbastanza corsi in inglese, anche il requisito per l'inglese corrisponde a B2. Di norma non serve caricare un certificato, ma l'universita di provenienza conferma le competenze in nomination. [Fonti: scheda destinazione; University of Vienna International Office] || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "atteso per tutti i campi di studio salvo German Philology; se ci sono abbastanza corsi in inglese, livello richiesto B2 anche per l'inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71249. || Lingua: l'Universita di Vienna si aspetta tedesco CEFR B2 per gli incoming; se nel campo di studio ci sono abbastanza corsi in inglese, anche il requisito per l'inglese corrisponde a B2. Di norma non serve caricare un certificato, ma l'universita di provenienza conferma le competenze in nomination. [Fonti: scheda destinazione; University of Vienna International Office] || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "atteso per tutti i campi di studio salvo German Philology; se ci sono abbastanza corsi in inglese, livello richiesto B2 anche per l'inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univie.ac.at/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71131. || Lingua: l'Universita di Vienna si aspetta tedesco CEFR B2 per gli incoming; se nel campo di studio ci sono abbastanza corsi in inglese, anche il requisito per l'inglese corrisponde a B2. Di norma non serve caricare un certificato, ma l'universita di provenienza conferma le competenze in nomination. [Fonti: scheda destinazione; University of Vienna International Office] || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70255. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70254. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70256. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70257. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70258. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70259. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70406. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70260. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per seguire i corsi di Economics in inglese; ammessi test o transcript con almeno 3 corsi di economics in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://uclouvain.be/fr/index.html",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71139. || Lingua: per i Master in Economics e' richiesta prova di capacita di seguire lezioni in inglese, con test almeno CEFR B2 oppure transcript con almeno 3 corsi di economics in inglese. [Fonti: UCLouvain ESL; pagina nomination/application UCLouvain] || Scadenze: LSM fact sheet 2025/26, da confermare per 2026/27 || Lingua: LSM indica CEFR B2 raccomandato in francese o inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per la maggior parte dei corsi" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    linkSito: "https://www.ulg.ac.be",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71072. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per seguire i corsi di Economics in inglese; ammessi test o transcript con almeno 3 corsi di economics in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://uclouvain.be/fr/index.html",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70904. || Lingua: per i Master in Economics e' richiesta prova di capacita di seguire lezioni in inglese, con test almeno CEFR B2 oppure transcript con almeno 3 corsi di economics in inglese. [Fonti: UCLouvain ESL; pagina nomination/application UCLouvain] || Scadenze: LSM fact sheet 2025/26, da confermare per 2026/27 || Lingua: LSM indica CEFR B2 raccomandato in francese o inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "TOEFL/IGCSE/IELTS min. B2, oppure attestazione di corsi di inglese fino al B2 nel transcript dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 1 ottobre" },
        { cosa: "Application (sem. autunnale)", periodo: "entro 20 maggio" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 20 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "livello equivalente CEFR richiesto per gli studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "15 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 - 31 ottobre" }
      ],
    linkSito: "https://www.unipu.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71444. || Lingua: UNIPU richiede competenze linguistiche equivalenti a B2 CEFR per lettura, scrittura e parlato. Corso di croato gratuito ogni semestre; Student X-card per mense e sconti. [Fonti: scheda destinazione; pagina nomination UNIPU]"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "livello equivalente CEFR richiesto per gli studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "15 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 - 31 ottobre" }
      ],
    linkSito: "https://www.unipu.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71442. || Lingua: UNIPU richiede competenze linguistiche equivalenti a B2 CEFR per lettura, scrittura e parlato. Corso di croato gratuito ogni semestre; Student X-card per mense e sconti. [Fonti: scheda destinazione; pagina nomination UNIPU]"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato necessario (certificazione ufficiale o attestato dell'universita di provenienza); la Faculty of Economics puo avere requisiti aggiuntivi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 15 ottobre" },
        { cosa: "Application (sem. invernale/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (sem. estivo)", periodo: "entro 1 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 10 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 10 novembre" }
      ],
    linkSito: "https://uniri.hr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70980. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi undergraduate" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi postgraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71207. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "atteso per studenti incoming; B2 idealmente" },
        { lingua: "Inglese", livello: "B1", condizione: "per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "per mobilita di scambio presso UFR Arts et Sciences Humaines" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 marzo al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 30 agosto al 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "dal 15 marzo al 30 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 30 agosto al 18 ottobre" }
      ],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71343. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi undergraduate" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi postgraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71344. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi undergraduate" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi postgraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71287. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://www.unistra.fr/fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70497. || Scadenze: EM Strasbourg fact sheet 2025/26 || Lingua: B2 nella lingua di insegnamento fortemente raccomandato; certificato non richiesto || Scadenze: basate su 2024/25"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univ-lille.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71101. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "livello raccomandato per la lingua di insegnamento; la maggior parte dei corsi e' in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.univ-paris8.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71211. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire corsi e vita universitaria; minimo B1 richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "livello minimo per corsi in inglese" },
        { lingua: "Francese", livello: "A1", condizione: "livello minimo nel secondo semestre per studenti nominati a French as a Foreign Language; nessun minimo nel primo semestre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 10 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 24 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 27 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro l'11 ottobre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi undergraduate" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi postgraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71345. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "consigliato per seguire la maggior parte dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "consigliato per seguire la maggior parte dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71222. || Scadenze: IAE Poitiers fact sheet 2025/26 || Lingua: B2 CEFR in francese e/o inglese || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi di lingua e civilta" },
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi tematici e disciplinari" },
        { lingua: "Francese", livello: "C1", condizione: "per corsi professionalizzanti" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi professionalizzanti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "2 marzo - 31 marzo 2026" },
        { cosa: "Application (autunno)", periodo: "6 aprile - 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "7 settembre - 4 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "5 ottobre - 1 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71354. || Scadenze: IAE Poitiers fact sheet 2025/26 || Lingua: B2 CEFR in francese e/o inglese || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIV-POITIERS.FR",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71355. || Scadenze: IAE Poitiers fact sheet 2025/26 || Lingua: B2 CEFR in francese e/o inglese || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire corsi e vita universitaria; minimo B1 richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "per mobilita di scambio presso UFR Arts et Sciences Humaines" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 marzo al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 30 agosto al 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "dal 15 marzo al 30 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 30 agosto al 18 ottobre" }
      ],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71100. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per frequentare lezioni e seminari" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.u-bordeaux-montaigne.fr/fr/index.html",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71285. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per i corsi in inglese" },
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "entro fine marzo" },
        { cosa: "Nomination (2 semestre)", periodo: "entro fine ottobre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "meta marzo - fine aprile (MoveOn)" },
        { cosa: "Application (2 semestre)", periodo: "meta ottobre - meta novembre (MoveOn)" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2/C1", condizione: "raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://www.unistra.fr/fr",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71114. || Scadenze: EM Strasbourg fact sheet 2025/26 || Lingua: B2 nella lingua di insegnamento fortemente raccomandato; certificato non richiesto || Scadenze: basate su 2024/25"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per frequentare lezioni e seminari" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.u-bordeaux-montaigne.fr/fr/index.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71098. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Lingua di insegnamento", livello: "B1", condizione: "francese o inglese, secondo la lingua dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "dal 15 aprile al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 15 aprile al 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "B2 nella lingua dei corsi; certificato o lettera di un docente di lingua" },
        { lingua: "Inglese", livello: "B2", condizione: "alcuni corsi in inglese/spagnolo a seconda di ciclo e area" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71347. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "B2 nella lingua dei corsi; certificato o lettera di un docente di lingua" },
        { lingua: "Inglese", livello: "B2", condizione: "alcuni corsi in inglese/spagnolo a seconda di ciclo e area" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71432. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "per mobilita di scambio presso UFR Arts et Sciences Humaines" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 marzo al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 30 agosto al 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "dal 15 marzo al 30 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 30 agosto al 18 ottobre" }
      ],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70960. || Lingua: CEFR non pubblicato ufficialmente"
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
    scadenzeOspitante: [
        { cosa: "Nomination (primo semestre)", periodo: "entro fine maggio" },
        { cosa: "Nomination (secondo semestre)", periodo: "entro fine dicembre" }
      ],
    linkSito: "http://www.ephe.sorbonne.fr",
    linkCatalogo: "https://www.ephe.psl.eu/formations-conferences",

    notaDisponibilita: "Lo status di studente in scambio è rivolto esclusivamente a studenti di livello Master e Dottorato.",

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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per i corsi in inglese" },
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "entro fine marzo" },
        { cosa: "Nomination (2 semestre)", periodo: "entro fine ottobre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "meta marzo - fine aprile (MoveOn)" },
        { cosa: "Application (2 semestre)", periodo: "meta ottobre - meta novembre (MoveOn)" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "la maggior parte dei corsi e' in francese; livello richiesto secondo i corsi scelti" },
        { lingua: "Inglese", livello: "B1/B2", condizione: "per il semestre/corsi in inglese; livello richiesto secondo i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://www.univ-lorraine.fr/en/univ-lorraine/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71431. || Scadenze: Universit� de Lorraine Student Mobility Fact Sheet 2025/2026 || Lingua: CEFR non pubblicato ufficialmente nella scheda IAE Metz; corsi offerti in inglese"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "per mobilita di scambio presso UFR Arts et Sciences Humaines" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 marzo al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 30 agosto al 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "dal 15 marzo al 30 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 30 agosto al 18 ottobre" }
      ],
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Posti dell'accordo: 6. Accordo ERA71428. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi undergraduate" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi postgraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.univ-montp3.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71103. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "B2 nella lingua dei corsi; certificato o lettera di un docente di lingua" },
        { lingua: "Inglese", livello: "B2", condizione: "alcuni corsi in inglese/spagnolo a seconda di ciclo e area" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71290. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "livello minimo per corsi in inglese" },
        { lingua: "Francese", livello: "A1", condizione: "livello minimo nel secondo semestre per studenti nominati a French as a Foreign Language; nessun minimo nel primo semestre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 10 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 24 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 27 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro l'11 ottobre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "consigliato per seguire la maggior parte dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono esclusivamente corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 1 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "minimo B2 in francese E/O in inglese (test ufficiale o dichiarazione dell'universita di provenienza)" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 in francese E/O in inglese (test ufficiale o dichiarazione dell'universita di provenienza)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 30 settembre" },
        { cosa: "Application (sem. autunnale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 31 ottobre" },
        { cosa: "Richiesta alloggio CROUS", periodo: "15 gennaio - 15 maggio (solo online)" }
      ],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70964. || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "livello raccomandato per la lingua di insegnamento; la maggior parte dei corsi e' in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.univ-paris8.fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71213. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "B2 nella lingua dei corsi; certificato o lettera di un docente di lingua" },
        { lingua: "Inglese", livello: "B2", condizione: "alcuni corsi in inglese/spagnolo a seconda di ciclo e area" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    linkSito: "http:/www.univ-paris1.fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71209. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "minimo B2 in francese E/O in inglese (test ufficiale o dichiarazione dell'universita di provenienza)" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 in francese E/O in inglese (test ufficiale o dichiarazione dell'universita di provenienza)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 30 settembre" },
        { cosa: "Application (sem. autunnale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 31 ottobre" },
        { cosa: "Richiesta alloggio CROUS", periodo: "15 gennaio - 15 maggio (solo online)" }
      ],
    linkSito: "https://univ-cotedazur.fr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71559. || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "requisito generale" },
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale" },
        { lingua: "Tedesco", livello: "B2", condizione: "per German Philology" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "buona conoscenza del tedesco (almeno B1)" },
        { lingua: "Inglese", livello: "B2", condizione: "B1/B2 - solo se i corsi scelti sono in inglese (soprattutto magistrali)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (sem. invernale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. estivo)", periodo: "entro 15 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per School of Business, Economics and Society" },
        { lingua: "Inglese", livello: "B1", condizione: "per School of Business, Economics and Society" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.uni-erlangen.de",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70921. || Scadenze: fact sheet FAU per studenti UE/SEE/Svizzera || Lingua: WiSo richiede/recomanda B1 in tedesco o inglese"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "richiesto all'inizio degli studi per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.lmu.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70928. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per eventuali corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "requisito generale" },
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale" },
        { lingua: "Tedesco", livello: "B2", condizione: "per German Philology" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 5 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71266. || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "richiesto all'inizio degli studi per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.lmu.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70929. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B1/B2", condizione: "per seguire corsi in tedesco o inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo per corsi in tedesco; alcune facolta, es. German Philology, possono avere requisiti superiori" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://www.uni-muenster.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71384. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 5 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71157. || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71153. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per eventuali corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (semestre invernale)", periodo: "entro 15 aprile" },
        { cosa: "Application (semestre invernale)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (semestre estivo)", periodo: "entro 15 ottobre" },
        { cosa: "Application (semestre estivo)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.uni-siegen.de/start/",
    linkCatalogo: "https://unisono.uni-siegen.de",

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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco; in alternativa A2 tedesco e B2 inglese con corso intensivo obbligatorio" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi esclusivamente in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application Mobility-Online (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application Mobility-Online (primavera)", periodo: "entro 1 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 5 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71084. || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1/B2", condizione: "raccomandato; i requisiti variano in base a facolta o corso" },
        { lingua: "Inglese", livello: "B1/B2", condizione: "in alcuni casi; i requisiti variano in base a facolta o corso" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://www.uni-goettingen.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71262. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per i programmi in tedesco (la firma dell'universita di provenienza vale come conferma del B1)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 15 novembre" },
        { cosa: "Application (sem. invernale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. estivo)", periodo: "entro 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco; ammesso A2 alla candidatura con B1 da presentare successivamente" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi master in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco; ammesso A2 alla candidatura con B1 da presentare successivamente" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi master in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "richiesto certificato formale solo per i programmi Study of Religion, English Studies e Law" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    linkCatalogo: "https://campusonline.uni-bayreuth.de/ubto/webnav.ini",

    notaDisponibilita: "Il programma di scambio scelto deve essere coerente con il piano di studi dell'università di origine.",

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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 5 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://verwaltung.uni-koeln.de/international/content/index_eng.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71156. || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "circa 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "circa 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per Psicologia" },
        { lingua: "Inglese", livello: "B2", condizione: "per Psicologia" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 1 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 1 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "circa 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "circa 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 24 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 4 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per Psicologia" },
        { lingua: "Inglese", livello: "B2", condizione: "per Psicologia" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 1 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 1 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 24 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 4 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco; B1 minimo solo se approvato individualmente" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B1 minimo solo se approvato individualmente" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 aprile al 15 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 ottobre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71380. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato se servono crediti ECTS" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato se servono crediti ECTS e per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per eventuali corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71271. || Scadenze: Universit�t Regensburg exchange application, nomination 1/5 e 1/11, application 1/4-15/5 e 1/9-15/11 || Lingua: B2 tedesco per corsi in tedesco; B2 inglese per corsi in inglese, B2/C1 indicato per la Faculty of Business, Economics and Management Information Systems"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "requisito usuale negli accordi Erasmus+" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.uni-potsdam.de/de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70930. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco; B1 minimo solo se approvato individualmente" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B1 minimo solo se approvato individualmente" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 aprile al 15 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 ottobre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    linkSito: "https://www.uni-jena.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70924. || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato se servono crediti ECTS" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato se servono crediti ECTS e per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    linkSito: "https://www.uni-jena.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71330. || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "circa 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "circa 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://www.auslandsamt.uni-trier.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71667. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 20 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "http://www.upatras.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70977. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito standard UoC; lingua principale dei corsi: greco, alcuni corsi/valutazioni alternative in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (anno intero/sem. invernale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Greco", livello: "B1", condizione: "lingua principale di insegnamento ed esame, livello raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "seconda lingua, livello richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.vu.lt/en/international/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70989. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese o Polacco", livello: "B2", condizione: "per studenti exchange/incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per seguire i corsi e partecipare alle lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 24 aprile" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 4 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 24 ottobre" },
        { cosa: "Application (primavera)", periodo: "dal 1 al 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    notaDisponibilita: "I moduli partono a condizione che vi siano almeno 3 studenti iscritti. Gli studenti incoming devono scegliere un modulo completo da 30 ECTS.",

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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "inglese O polacco almeno B2: certificati ufficiali (TOEFL, Cambridge, IELTS) o form interno certificato da un docente di lingua dell'ateneo di provenienza; possibile verifica individuale (test online o colloquio Teams)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" },
        { cosa: "Application (sem. invernale/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. estivo)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1/B2", condizione: "certificato di lingua richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese o Polacco", livello: "B2", condizione: "per studenti exchange/incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 gennaio" },
        { cosa: "Application (primavera)", periodo: "entro 30 gennaio" }
      ],
    linkSito: "https://ujk.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71059. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "minimo raccomandato per corsi FEUC in portoghese" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo raccomandato per corsi FEUC in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 dicembre" }
      ],
    linkSito: "http://www.uc.pt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71297. || Scadenze: University of Coimbra incoming/FEUC 2025/26; nomination entro 30 giugno; application 1 marzo-15 luglio e 1 settembre-15 dicembre || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "statement della home university (fluency B2) o titolo di studio interamente in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "20 febbraio - 20 aprile" },
        { cosa: "Nomination (primavera)", periodo: "20 luglio - 20 settembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 27 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 27 settembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "minimo raccomandato per corsi FEUC in portoghese" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo raccomandato per corsi FEUC in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 dicembre" }
      ],
    linkSito: "http://www.uc.pt",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70991. || Scadenze: University of Coimbra incoming/FEUC 2025/26; nomination entro 30 giugno; application 1 marzo-15 luglio e 1 settembre-15 dicembre || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "statement della home university (fluency B2) o titolo di studio interamente in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "20 febbraio - 20 aprile" },
        { cosa: "Nomination (primavera)", periodo: "20 luglio - 20 settembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 27 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 27 settembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "Faculty of Arts: conferma del livello B2 o superiore" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 settembre" }
      ],
    linkSito: "http://www.cuni.cz/cuni/ruk/zahran/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70911. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato o documento comprovante il livello" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "tra gennaio e aprile/maggio" },
        { cosa: "Application (autunno)", periodo: "tra febbraio e aprile/maggio; documenti entro meta giugno" },
        { cosa: "Nomination (primavera)", periodo: "tra gennaio e settembre/ottobre" },
        { cosa: "Application (primavera)", periodo: "tra gennaio e settembre/ottobre; documenti entro novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70365. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70366. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70367. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70369. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70368. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70371. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70372. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70031. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70032. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70370. || Lingua: CEFR non pubblicato ufficialmente"
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://www.uvt.ro",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71462. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1-B2", condizione: "per corsi in inglese o nella lingua di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71018. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Serbo", livello: "B1-B2", condizione: "secondo il programma di studio" },
        { lingua: "Inglese", livello: "B1-B2", condizione: "secondo il programma di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 25 novembre" }
      ],
    linkSito: "http://www.bg.ac.rs/en/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71019. || Scadenze: basate su 2024/25"
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
    requisitoLingua: [
        { lingua: "Sloveno", livello: "B2", condizione: "per studiare in sloveno" },
        { lingua: "Inglese", livello: "B2", condizione: "per studiare in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Sloveno", livello: "B2", condizione: "per studiare in sloveno" },
        { lingua: "Inglese", livello: "B2", condizione: "per studiare in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 aprile al 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre 2026" }
      ],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70938. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus incoming undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Documentazione/application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione/application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70946. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo richiesto; B2 fortemente raccomandato - le lezioni sono in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno/anno intero)", periodo: "2 marzo - 30 giugno 2026" },
        { cosa: "Nomination/Application (primavera)", periodo: "15 settembre - 29 novembre 2025 (ultimo periodo ufficiale pubblicato nella factsheet generale)" }
      ],
    linkSito: "HTTP://WWW.US.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71411. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 aprile al 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre 2026" }
      ],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71274. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato o secondo accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato o secondo accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70281. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70291. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70290. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70301. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70302. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70303. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA70304. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70305. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70306. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70296. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70297. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Lingua di insegnamento dei corsi scelti", livello: "B1", condizione: "livello B1 o superiore nella lingua in cui sono insegnati gli insegnamenti richiesti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71174. || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71194. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70308. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70309. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70298. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70299. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70300. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/inicio",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70280. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71191. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; certificato ufficiale non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giorni dalla email di accettazione" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 giorni dalla email di accettazione" }
      ],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71198. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71176. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; certificato ufficiale non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giorni dalla email di accettazione" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 giorni dalla email di accettazione" }
      ],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71096. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi di laurea" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 15 marzo al 15 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 20 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus incoming undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Documentazione/application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione/application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71094. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo presso la Faculty of Economics and Business" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato minimo necessario per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.ehu.eus/en/en-home",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71169. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71279. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese/Spagnolo/Catalano", livello: "B2", condizione: "richiesto dalla Faculty of Economics and Business nella lingua di insegnamento dei corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "15 settembre - 15 novembre" }
      ],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71334. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71339. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; certificato ufficiale non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giorni dalla email di accettazione" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 giorni dalla email di accettazione" }
      ],
    linkSito: "http://www.uv.es/relint/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71341. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; certificato ufficiale o attestazione dell'universita di provenienza" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo; certificato ufficiale o attestazione dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro il 31 ottobre 2026" }
      ],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71332. || Scadenze: basate su 2025/26"
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
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 30 settembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://sri.uib.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71337. || Lingua: la scheda non indica un livello CEFR (corsi prevalentemente in spagnolo/catalano; corsi di lingua per exchange: spagnolo 100 EUR, catalano 25 EUR, 6 ECTS) - da verificare. [Fonte: scheda destinazione] || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "corsi in spagnolo - certificato non necessario" },
        { lingua: "Inglese", livello: "B1", condizione: "corsi in inglese - certificato non necessario" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application 1 semestre (UE)", periodo: "entro 30 giugno" },
        { cosa: "Nomination/Application 2 semestre (UE)", periodo: "entro 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per i bachelor in inglese (certificato richiesto)" },
        { lingua: "Spagnolo", livello: "B1", condizione: "per gli altri bachelor (B2 fortemente raccomandato, certificato richiesto)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "22 aprile - 22 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "23 settembre - 23 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 16 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 16 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per i bachelor in inglese (certificato richiesto)" },
        { lingua: "Spagnolo", livello: "B1", condizione: "per gli altri bachelor (B2 fortemente raccomandato, certificato richiesto)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "22 aprile - 22 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "23 settembre - 23 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 16 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 16 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per i bachelor in inglese (certificato richiesto)" },
        { lingua: "Spagnolo", livello: "B1", condizione: "per gli altri bachelor (B2 fortemente raccomandato, certificato richiesto)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "22 aprile - 22 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "23 settembre - 23 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 16 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 16 dicembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo consigliato/richiesto per seguire le lezioni alla Facolta di Economia e Impresa" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 7 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71342. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per studenti Erasmus incoming; B2 per studenti della Faculty of Medicine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Lingua di insegnamento dei corsi scelti", livello: "B1", condizione: "livello B1 o superiore nella lingua in cui sono insegnati gli insegnamenti richiesti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71173. || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71189. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per i corsi in spagnolo (B1 minimo per Infermieristica)" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 1 giugno" },
        { cosa: "Application (1 semestre)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 1 novembre" },
        { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo per Faculty of Economics/Law; master e corsi pienamente in spagnolo richiedono B2" },
        { lingua: "Spagnolo", livello: "B2", condizione: "standard entry requirement e per programmi master/corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi tenuti in inglese, secondo livello richiesto agli studenti regolari" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 marzo - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "http://www.uah.es",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71162. || Scadenze: UAH fact sheet/procedura Erasmus, nomination 1/3-30/4 e 15/9-15/10, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 standard; Faculty of Economics richiede minimo B1 spagnolo, inglese B2 per corsi in inglese"
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 aprile al 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre 2026" }
      ],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71175. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per la maggior parte dei corsi, insegnati in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.ubu.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71170. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo/galiziano" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "dal 15 marzo al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 31 ottobre" }
      ],
    linkSito: "http://internacional.uvigo.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71202. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato o secondo accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    linkSito: "http://www.udc.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71178. || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71193. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per seguire i corsi; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta aprile a meta giugno" },
        { cosa: "Application (autunno)", periodo: "selezione insegnamenti da meta luglio a meta settembre" },
        { cosa: "Nomination (primavera)", periodo: "da meta aprile a fine ottobre" },
        { cosa: "Application (primavera)", periodo: "selezione insegnamenti da meta dicembre a meta febbraio" }
      ],
    linkSito: "http://www.uma.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71408. || Scadenze: UMA fact sheet 2025/26, nomination via Algoria; application operativa tramite selezione insegnamenti in Algoria || Lingua: spagnolo B1 raccomandato, certificato non richiesto || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Lingua di insegnamento dei corsi scelti", livello: "B1", condizione: "livello B1 o superiore nella lingua in cui sono insegnati gli insegnamenti richiesti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "https://www.uclm.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70937. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "A2", condizione: "livello ammesso per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application", periodo: "entro due settimane dalla nomination" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo se non madrelingua" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese se non madrelingua" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; certificato ufficiale o attestazione dell'universita di provenienza" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo; certificato ufficiale o attestazione dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro il 31 ottobre 2026" }
      ],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA71167. || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto per seguire corsi in inglese presso la Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 20 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 aprile - 20 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti dell'accordo: 8. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71414. || Lingua: Faculty of Economics and Business URV richiede certificato B1 di inglese per corsi in inglese. [Fonte: pagina Academic Mobility Coordinators URV]"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto per seguire corsi in inglese presso la Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 20 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 aprile - 20 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti dell'accordo: 5. Accordo ERA71413. || Lingua: Faculty of Economics and Business URV richiede certificato B1 di inglese per corsi in inglese. [Fonte: pagina Academic Mobility Coordinators URV]"
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
    requisitoLingua: [
        { lingua: "Inglese/Spagnolo/Catalano", livello: "B2", condizione: "richiesto dalla Faculty of Economics and Business nella lingua di insegnamento dei corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "15 settembre - 15 novembre" }
      ],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71388. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo consigliato/richiesto per seguire le lezioni alla Facolta di Economia e Impresa" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 7 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71097. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato o secondo accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo consigliato/richiesto per seguire le lezioni alla Facolta di Economia e Impresa" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 7 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71283. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 aprile al 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre 2026" }
      ],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71673. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    linkSito: "http://www.udc.es",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA71396. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo se non madrelingua" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese se non madrelingua" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo consigliato/richiesto per seguire le lezioni alla Facolta di Economia e Impresa" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 7 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71282. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.usal.es",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA71338. || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70949. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "fortemente raccomandato" },
        { lingua: "Catalano", livello: "A1", condizione: "opzionale, raccomandato per corsi in catalano" },
        { lingua: "Catalano", livello: "B1", condizione: "richiesto per corsi di Catalan Philology" },
        { lingua: "Occitano", livello: "B1", condizione: "richiesto per corsi di Occitan Studies" },
        { lingua: "Spagnolo", livello: "B2", condizione: "richiesto per corsi di Hispanic Philology" },
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per corsi di English Studies" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
    linkSito: "http://www.udl.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71180. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto per seguire corsi in inglese presso la Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 20 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 aprile - 20 ottobre 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    linkSito: "http://www.urv.cat",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71281. || Lingua: Faculty of Economics and Business URV richiede certificato B1 di inglese per corsi in inglese. [Fonte: pagina Academic Mobility Coordinators URV]"
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
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi di laurea" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 15 marzo al 15 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 20 novembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 10 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
      ],
    linkSito: "http://www.su.se/english/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70384. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 10 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
      ],
    linkSito: "http://www.su.se/english/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70385. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese, equivalente a IELTS 6.5 / TOEFL 90" },
        { lingua: "Svedese", livello: "C1", condizione: "per corsi in svedese, oppure B2 secondo il singolo corso" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 aprile" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 ottobre" }
      ],
    linkSito: "https://www.lu.se/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA71300. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco; C1 per German Literature and Linguistics" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese; C1 per English Literature and Linguistics" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 settembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco; C1 per German Literature and Linguistics" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese; C1 per English Literature and Linguistics" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 settembre" }
      ],
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
    requisitoLingua: [
        { lingua: "Turco", livello: "B2", condizione: "certificato di competenza in turco" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato di competenza in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 18 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Turco", livello: "B1", condizione: "per la maggior parte dei corsi" },
        { lingua: "Inglese", livello: "B1/B2", condizione: "per programmi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" }
      ],
    linkSito: "http://www.international.itu.edu.tr",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71129. || Lingua: CEFR non pubblicato ufficialmente"
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
    requisitoLingua: [
        { lingua: "Turco", livello: "B2", condizione: "certificato di competenza in turco" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato di competenza in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 18 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2025" }
      ],
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
    requisitoLingua: [
        { lingua: "Turco", livello: "B1", condizione: "per la maggior parte dei corsi" },
        { lingua: "Inglese", livello: "B1/B2", condizione: "per programmi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" }
      ],
    linkSito: "http://www.international.itu.edu.tr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71465. || Lingua: CEFR non pubblicato ufficialmente"
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71707. || Lingua: CEFR non pubblicato ufficialmente"
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
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.ege.edu.tr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71309. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
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
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "almeno conoscenza intermedia (B2) della lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale)", periodo: "entro 10 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 10 novembre" },
        { cosa: "Application (sem. autunnale)", periodo: "entro 30 maggio" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 30 novembre" }
      ],
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71653."
  }
];
