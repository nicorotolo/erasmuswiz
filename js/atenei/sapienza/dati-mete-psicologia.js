// ==========================================================
// METE ERASMUS - SAPIENZA - Facolta di MEDICINA E PSICOLOGIA - Area psicologia, pedagogia e servizio sociale
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=PSICO1).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-03): 97 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (il sito gestisce L e LM).
// codiceErasmus = codice Erasmus UFFICIALE dall export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti).
// ==========================================================

var METE = [
  {
    id: "sap-psico1-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "competenza raccomandata per studenti incoming" },
        { lingua: "Inglese", livello: "B2", condizione: "competenza raccomandata per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-salzbur-2",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "competenza raccomandata per studenti incoming" },
        { lingua: "Inglese", livello: "B2", condizione: "competenza raccomandata per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-klagenf",
    universita: "UNIVERSITAT KLAGENFURT",
    citta: "Klagenf",
    paese: "Austria",
    codiceErasmus: "A  KLAGENF01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Pierluigi Zoccolotti",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-psico1-ustp",
    universita: "USTP - University of Applied Sciences St. Pölten",
    citta: "Ustp",
    paese: "Austria",
    codiceErasmus: "A  ST-POLT03",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Elena Bocci",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (anno accademico)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (anno accademico)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bruxel-2",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-liege",
    universita: "UNIVERSITÉ DE LIÈGE",
    citta: "Liege",
    paese: "Belgio",
    codiceErasmus: "B  LIEGE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Silvia Mazzoni",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno accademico)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-varna",
    universita: "TECHNICAL UNIVERSITY OF VARNA",
    citta: "Varna",
    paese: "Bulgaria",
    codiceErasmus: "BG VARNA02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Anna Di Norcia",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-psico1-osijek",
    universita: "SVEUCILISTE JOSIPA JURJA STROSSMAYERA U OSIJEKU",
    citta: "Osijek",
    paese: "Croazia",
    codiceErasmus: "HR OSIJEK01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "per corsi in croato" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Ungherese", livello: "B2", condizione: "per corsi in ungherese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bordeau",
    universita: "UNIVERSITE DE BORDEAUX",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU58",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Roberto Baiocco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per health and human sciences, education" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lyon",
    universita: "UNIVERSITE LUMIERE LYON II",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "B1-B2 consigliato per corsi prevalentemente in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-paris",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per UFR Sciences Humaines et Sociales" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-brest",
    universita: "UNIVERSITÉ DE BRETAGNE OCCIDENTALE",
    citta: "Brest",
    paese: "Francia",
    codiceErasmus: "F  BREST01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato; corsi principalmente in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese" },
        { lingua: "Francese", livello: "C1", condizione: "per il dipartimento French as a Second Language (FLE)" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi in inglese nel dipartimento di inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese" },
        { lingua: "Francese", livello: "C1", condizione: "per il dipartimento French as a Second Language (FLE)" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi in inglese nel dipartimento di inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-paris-2",
    universita: "UNIVERSITE DE VINCENNES - SAINT DENIS (PARIS VIII)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS008",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lyon-2",
    universita: "UNIVERSITE CATHOLIQUE DE LYON",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON10",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 3 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-psico1-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Marilena Fatigante",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-psico1-lille-2",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Vincenzo Cestari",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-paris-3",
    universita: "ECOLE NORMALE SUPERIEURE",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS087",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Salvatore Maria Aglioti",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-ludwigb",
    universita: "EVANGELISCHE HOCHSCHULE LUDWIGSBURG",
    citta: "Ludwigb",
    paese: "Germania",
    codiceErasmus: "D  LUDWIGB06",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Viviana Langher",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-darmsta",
    universita: "HOCHSCHULE DARMSTADT",
    citta: "Darmsta",
    paese: "Germania",
    codiceErasmus: "D  DARMSTA02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Viviana Langher",
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
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 8, livello: "L", note: "" },
      { numero: 2, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo obbligatorio per corsi in tedesco; B2 raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "minimo obbligatorio per corsi in inglese; B2 raccomandato" }
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
    id: "sap-psico1-konstan",
    universita: "UNIVERSITÄT KONSTANZ",
    citta: "Konstan",
    paese: "Germania",
    codiceErasmus: "D  KONSTAN01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Caterina Lombardo",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-tubinge-2",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo obbligatorio per corsi in tedesco; B2 raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "minimo obbligatorio per corsi in inglese; B2 raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-witten",
    universita: "UNIVERSITÄT WITTEN/HERDECKE",
    citta: "Witten",
    paese: "Germania",
    codiceErasmus: "D  WITTEN02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-jena",
    universita: "FRIEDRICH SCHILLER UNIVERSITÄT",
    citta: "Jena",
    paese: "Germania",
    codiceErasmus: "D  JENA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-wurzbur",
    universita: "BAYERISCHE JULIUS-MAXIMILIANS-SCHWEINFURT-ABT WURZBURG",
    citta: "Wurzbur",
    paese: "Germania",
    codiceErasmus: "D  WURZBUR01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bochum",
    universita: "RUHR-UNIVERSITAT BOCHUM",
    citta: "Bochum",
    paese: "Germania",
    codiceErasmus: "D  BOCHUM01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 2, mesi: 8, livello: "L", note: "" },
      { numero: 2, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-trier",
    universita: "UNIVERSITÄT TRIER",
    citta: "Trier",
    paese: "Germania",
    codiceErasmus: "D  TRIER01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Antonino Raffone",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-eichsta",
    universita: "KATHOLISCHE UNIVERSITÄT EICHSTÄTT-INGOLSTADT",
    citta: "Eichsta",
    paese: "Germania",
    codiceErasmus: "D  EICHSTA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Antonino Raffone",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bielefe",
    universita: "UNIVERSITÄT BIELEFELD",
    citta: "Bielefe",
    paese: "Germania",
    codiceErasmus: "D  BIELEFE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Antonino Raffone",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-gotting",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-berlin",
    universita: "EVANGELISCHE HOCHSCHULE BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN10",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-hildesh",
    universita: "UNIVERSITÄT HILDESHEIM",
    citta: "Hildesh",
    paese: "Germania",
    codiceErasmus: "D  HILDESH01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-berlin-2",
    universita: "KATHOLISCHE HOCHSCHULE FUR SOZIALWESEN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN20",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-berlin-3",
    universita: "EVANGELISCHE HOCHSCHULE BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN10",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-hamburg",
    universita: "UNIVERSITÄT HAMBURG",
    citta: "Hamburg",
    paese: "Germania",
    codiceErasmus: "D  HAMBURG01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Elena Bocci",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-potsdam",
    universita: "UNIVERSITAT POTSDAM",
    citta: "Potsdam",
    paese: "Germania",
    codiceErasmus: "D  POTSDAM01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Guido Alessandri",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-koln",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Marino Bonaiuto",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0112", nome: "Training for pre-school teachers" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-athine-2",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0113", nome: "Teacher training without subject specialization" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-athine-3",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-vilnius",
    universita: "MYKOLO ROMERIO UNIVERSITETAS",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS06",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Anna Di Norcia",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-malta",
    universita: "UNIVERSITY OF MALTA",
    citta: "Malta",
    paese: "Malta",
    codiceErasmus: "MT MALTA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Viviana Langher",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-nijmege",
    universita: "RADBOUD UNIVERISITEIT NIJMEGEN",
    citta: "Nijmege",
    paese: "Paesi Bassi",
    codiceErasmus: "NL NIJMEGE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Donatella Cesareni",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lublin",
    universita: "THE JOHN PAUL II CATHOLIC UNIVERSITY OF LUBLIN",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Guido D'Alessandri",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-kielce",
    universita: "UNIWERSYTET JANA KOCHANOWSKIEGO W KIELCACH",
    citta: "Kielce",
    paese: "Polonia",
    codiceErasmus: "PL KIELCE02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
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
    id: "sap-psico1-bydgosz",
    universita: "UNIWERSYTET KAZIMIERZA WIELKIEGO",
    citta: "Bydgosz",
    paese: "Polonia",
    codiceErasmus: "PL BYDGOSZ01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Concetta Pastorelli",
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
    id: "sap-psico1-wroclaw",
    universita: "WYZSZA SZKOLA ZARZADZANIA “EDUKACJA\"",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW13",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-poznan",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 6, mesi: 10, livello: "L", note: "" },
      { numero: 6, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 6 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-covilha",
    universita: "UNIVERSIDADE DA BEIRA INTERIOR",
    citta: "Covilha",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lisboa",
    universita: "ISPA INSTITUTO UNIVERSITARIO DE CIENCIAS PSICOLOGICAS, SOCIAIS E DA VIDA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA17",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Viviana Langher",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lisboa-2",
    universita: "UNIVERSIDADE CATOLICA PORTUGUESA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
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
    id: "sap-psico1-lisboa-3",
    universita: "INSTITUTO SUPERIOR DE EDUCAÇÃO E CIÊNCIAS - UNIVERSITAS  /UNIVERSITAS, COOPERATIVA DE ENSINO SUPERIOR E INVESTIGAÇÃO CIENTÍFICA, C.R.L.",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA104",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lisboa-4",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-funchal",
    universita: "UNIVERSIDADE DA MADEIRA",
    citta: "Funchal",
    paese: "Portogallo",
    codiceErasmus: "P  FUNCHAL03",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
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
    id: "sap-psico1-braga",
    universita: "UNIVERSIDADE DO MINHO",
    citta: "Braga",
    paese: "Portogallo",
    codiceErasmus: "P  BRAGA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Guido Alessandri",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-iasi",
    universita: "UNIVERSITATEA \"ALEXANDRU IOAN CUZA\"",
    citta: "Iasi",
    paese: "Romania",
    codiceErasmus: "RO IASI02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bucures-3",
    universita: "UNIVERSITATEA NATIONALA DE STIINTA  SI TEHNOLOGIE POLITEHNICA BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES43",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-bratisl",
    universita: "PANEUROPSKA VYSOKA SKOLA NO",
    citta: "Bratisl",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL08",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-universidad",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Roberto Baiocco",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-universidad-2",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "Universidad",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Silvia Mazzoni",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-madrid",
    universita: "UNIVERSIDAD SAN PABLO-CEU",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID21",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-malaga",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Clelia Matilde Rossi Arnaud",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Pierluigi Zoccolotti",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-oviedo-2",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-barcelo",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "011", nome: "Education" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Guido Benvenuto",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-murcia",
    universita: "UNIVERSIDAD CATOLICA SAN ANTONIO DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA05",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Elena Bocci",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-castell",
    universita: "UNIVERSIDAD JAUME I DE CASTELLON",
    citta: "Castell",
    paese: "Spagna",
    codiceErasmus: "E  CASTELL01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-castell-2",
    universita: "UNIVERSIDAD JAUME I DE CASTELLON",
    citta: "Castell",
    paese: "Spagna",
    codiceErasmus: "E  CASTELL01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-madrid-2",
    universita: "UNIVERSIDAD NACIONAL DE EDUCACION A DISTANCIA (UNED)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-avila",
    universita: "UNIVERSIDAD CATOLICA DE AVILA \"SANTA TERESA DE JESUS\"",
    citta: "Avila",
    paese: "Spagna",
    codiceErasmus: "E  AVILA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Fabio Lucidi",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-zaragoz-2",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Anna Pecchinenda",
    posti: [
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0923", nome: "Social work and counselling" }],
    coordinatoreCf: "Anna Di Norcia",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-granada-2",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Emiliane Rubat Du Merac",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-malaga-2",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Emiliane Rubat Du Merac",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-stockho",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0910", nome: "Health, not further defined" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-stockho-2",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Maria Gerbino",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-geneve",
    universita: "UNIVERSITE' DE GENEVE",
    citta: "Geneve",
    paese: "Svizzera",
    codiceErasmus: "CH GENEVE01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-brugg",
    universita: "FACHHOCHSCHULE NORDWESTSCHWEIZ",
    citta: "Brugg",
    paese: "Svizzera",
    codiceErasmus: "CH BRUGG02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
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
    id: "sap-psico1-zurich",
    universita: "UNIVERSITÄT ZURICH",
    citta: "Zurich",
    paese: "Svizzera",
    codiceErasmus: "CH ZURICH01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-lausann",
    universita: "UNIVERSITÉ  DE LAUSANNE",
    citta: "Lausann",
    paese: "Svizzera",
    codiceErasmus: "CH LAUSANN01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-ankara",
    universita: "BASKENT UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA06",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Roberto Baiocco",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-izmir",
    universita: "EGE UNIVERSITY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "031", nome: "Social and behavioural sciences" }],
    coordinatoreCf: "Renata Metastasio",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-izmir-2",
    universita: "DOKUZ EYLUL UNIVERSITESI",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR01",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-istanbu",
    universita: "UNIVERSITY OF HEALTH SCIENCES",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU60",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "031", nome: "Social and behavioural sciences" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-izmir-3",
    universita: "EGE UNIVERSITY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR02",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Concetta Pastorelli",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-psico1-istanbu-2",
    universita: "YEDITEPE UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU21",
    dipartimentoCf: "Psicologia, pedagogia e servizio sociale",
    areeDisciplinari: [{ codice: "0313", nome: "Psychology" }],
    coordinatoreCf: "Chiara Consiglio",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
