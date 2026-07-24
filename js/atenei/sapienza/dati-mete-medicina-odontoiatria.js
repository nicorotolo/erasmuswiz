// ==========================================================
// METE ERASMUS - SAPIENZA - MEDICINA E ODONTOIATRIA / FARMACIA E MEDICINA (area medica)
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=MEDPROFSANIT).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 91 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (5).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-med-bruxel",
    universita: "HAUTE ECOLE LÉONARD DE VINCI",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL87",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "MARIA GRAZIA PICCIONI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.vinci.be/fr",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69347."
  },
  {
    id: "sap-med-bruxel-2",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69345. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-med-sofia",
    universita: "MEDITSINSKI UNIVERSITET - SOFIA (MEDICAL UNIVERSITY - SOFIA)",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA11",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "LIVIA OTTOLENGHI",
    posti: [
      { numero: 1, mesi: 11, livello: "L", note: "" },
      { numero: 1, mesi: 11, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://mu-sofia.bg/en/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69350. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-med-plovdiv",
    universita: "MEDICAL UNIVERSITY PLOVDIV",
    citta: "Plovdiv",
    paese: "Bulgaria",
    codiceErasmus: "BG PLOVDIV02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.mu-plovdiv.bg",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69348."
  },
  {
    id: "sap-med-osijek",
    universita: "SVEUCILISTE JOSIPA JURJA STROSSMAYERA U OSIJEKU",
    citta: "Osijek",
    paese: "Croazia",
    codiceErasmus: "HR OSIJEK01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "per corsi in croato" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Ungherese", livello: "B2", condizione: "per corsi in ungherese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre; possibile estensione al 22 novembre" }
      ],
    linkSito: "https://www.unios.hr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69406. || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-med-oulu",
    universita: "OULUN AMMATTIKORKEAKOULU OY - OULU UNIVERSITY OF APPLIED SCIENCES",
    citta: "Oulu",
    paese: "Finlandia",
    codiceErasmus: "SF OULU11",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "IOLE VOZZA",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://oamk.fi/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69435."
  },
  {
    id: "sap-med-lisieux",
    universita: "CENTRE DE FORMATION - CENTRE HOSPITALIER ROBERT BISSON",
    citta: "Lisieux",
    paese: "Francia",
    codiceErasmus: "F  LISIEUX01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ch-lisieux.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69395."
  },
  {
    id: "sap-med-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68458."
  },
  {
    id: "sap-med-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68457."
  },
  {
    id: "sap-med-paris",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68461."
  },
  {
    id: "sap-med-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69396."
  },
  {
    id: "sap-med-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 1, mesi: 11, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70468. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-sarcell",
    universita: "INSTITUT FORMATION SOINS INFIRMIERS / CENTRE HOSPITALIER GÉNÉRAL",
    citta: "Sarcell",
    paese: "Francia",
    codiceErasmus: "F  SARCELL01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Giuseppe La Torre",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ifas-ifsi-gonesse.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68462."
  },
  {
    id: "sap-med-paris-2",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
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
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.univ-paris5.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69401."
  },
  {
    id: "sap-med-paris-3",
    universita: "UNIVERSITÉ DE PARIS-SACLAY [former UNIVERSITÉ DE PARIS-SUD (PARIS XI), F  PARIS011]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS481",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Non specificata", livello: "B2", condizione: "fortemente raccomandato; certificato obbligatorio solo per la Facoltà di Giurisprudenza, Economia e Management" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (primo semestre/anno accademico)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (secondo semestre)", periodo: "entro 30 ottobre 2026" }
      ],
    linkSito: "https://www.universite-paris-saclay.fr/",
    linkCatalogo: "https://www.universite-paris-saclay.fr/en/study/masters-programmes-taught-english",

    notaDisponibilita: "Non si possono scegliere corsi di facoltà o dipartimenti diversi. Per Polytech Paris-Saclay e gli IUT occorre scegliere corsi di una singola annualità e di un singolo programma; per Giurisprudenza, Economia e Management si sceglie tra Giurisprudenza oppure Economia/Management.",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69400."
  },
  {
    id: "sap-med-marburg",
    universita: "PHILIPPS-UNIVERSITÄT MARBURG",
    citta: "Marburg",
    paese: "Germania",
    codiceErasmus: "D  MARBURG01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Rita BUSINARO",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-marburg.de/en",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68433."
  },
  {
    id: "sap-med-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68436."
  },
  {
    id: "sap-med-freibur",
    universita: "ALBERT- LUDWIGS UNIVERSITÄT FREIBURG",
    citta: "Freibur",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68431. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-wurzbur",
    universita: "BAYERISCHE JULIUS-MAXIMILIANS-SCHWEINFURT-ABT WURZBURG",
    citta: "Wurzbur",
    paese: "Germania",
    codiceErasmus: "D  WURZBUR01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68437."
  },
  {
    id: "sap-med-koln",
    universita: "UNIVERSITÄT ZU KÖLN",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68432. || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
  },
  {
    id: "sap-med-berlin",
    universita: "FREIE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69356."
  },
  {
    id: "sap-med-bonn",
    universita: "RHEINISCHE FRIEDRICH-WILHELMS- UNIVERSITÄT BONN",
    citta: "Bonn",
    paese: "Germania",
    codiceErasmus: "D  BONN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bonn.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69358."
  },
  {
    id: "sap-med-berlin-2",
    universita: "FREIE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69357."
  },
  {
    id: "sap-med-gotting",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69359. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA69403."
  },
  {
    id: "sap-med-jurmala",
    universita: "P. STRADINS MEDICAL COLLEGE OF THE UNIVERSITY OF LATVIA",
    citta: "Jurmala",
    paese: "Lettonia",
    codiceErasmus: "LV JURMALA03",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0914", nome: "Medical diagnostic and treatment technology" }],
    coordinatoreCf: "GIUSEPPE DE VINCENTIS",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.psk.lu.lv/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69412."
  },
  {
    id: "sap-med-vilnius",
    universita: "VILNIUS UNIVERSITY",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69411. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-szczeci",
    universita: "POMORSKI UNIWERSYTET MEDYCZNY W SZCZECINIE",
    citta: "Szczeci",
    paese: "Polonia",
    codiceErasmus: "PL SZCZECI05",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.pum.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69429."
  },
  {
    id: "sap-med-lublin",
    universita: "AKADEMIA NAUK STOSOWANYCH WINCENTEGO POLA W LUBLINIE [Former WYZSZA SZKOLA SPOLECZNO – PRZYRODNICZA IM. WINCENTEGO POLA W LUBLINIE]",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN08",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ROBERTA GONNELLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.akademia-pol.edu.pl/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69428."
  },
  {
    id: "sap-med-poznan",
    universita: "UNIWERSYTET MEDYCZNY IM KAROLA MARCINKOWSKIEGO W POZNANIU",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN05",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "FABRIZIO GUERRA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "Https://www.ump.edu.pl",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71516."
  },
  {
    id: "sap-med-porto",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniela DE BIASE",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Portoghese", livello: "B2", condizione: "per corsi in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 agosto" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    linkSito: "http://www.up.pt",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68475. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-monted",
    universita: "EGAS MONIZ - COOPERATIVA DE ENSINO SUPERIOR [INSTITUTO SUPERIOR DE CIENCIAS DA SAUDE EGAS MONIZ]",
    citta: "Monte-d",
    paese: "Portogallo",
    codiceErasmus: "P  MONTE-D02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.egasmoniz.com.pt/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69421."
  },
  {
    id: "sap-med-leiria",
    universita: "INSTITUTO POLITECNICO DE LEIRA",
    citta: "Leiria",
    paese: "Portogallo",
    codiceErasmus: "P  LEIRIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "DONATELLA VALENTE",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipleiria.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69418."
  },
  {
    id: "sap-med-monted-2",
    universita: "EGAS MONIZ - COOPERATIVA DE ENSINO SUPERIOR [INSTITUTO SUPERIOR DE CIENCIAS DA SAUDE EGAS MONIZ]",
    citta: "Monte-d",
    paese: "Portogallo",
    codiceErasmus: "P  MONTE-D02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "DONATELLA VALENTE",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.egasmoniz.com.pt/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69423."
  },
  {
    id: "sap-med-leiria-2",
    universita: "INSTITUTO POLITECNICO DE LEIRA",
    citta: "Leiria",
    paese: "Portogallo",
    codiceErasmus: "P  LEIRIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "PANKAJ TRIVEDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipleiria.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69417."
  },
  {
    id: "sap-med-leiria-3",
    universita: "INSTITUTO POLITECNICO DE LEIRA",
    citta: "Leiria",
    paese: "Portogallo",
    codiceErasmus: "P  LEIRIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "GIOVANNI FABBRINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipleiria.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69416."
  },
  {
    id: "sap-med-monted-3",
    universita: "EGAS MONIZ - COOPERATIVA DE ENSINO SUPERIOR [INSTITUTO SUPERIOR DE CIENCIAS DA SAUDE EGAS MONIZ]",
    citta: "Monte-d",
    paese: "Portogallo",
    codiceErasmus: "P  MONTE-D02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA MARIA GIUSTI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.egasmoniz.com.pt/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69422."
  },
  {
    id: "sap-med-porto-2",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "DANIELE GIANFRILLI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Portoghese", livello: "B2", condizione: "per corsi in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 agosto" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    linkSito: "http://www.up.pt",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69424. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-leiria-4",
    universita: "INSTITUTO POLITECNICO DE LEIRA",
    citta: "Leiria",
    paese: "Portogallo",
    codiceErasmus: "P  LEIRIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "GIANLUCA RUSSO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipleiria.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68471."
  },
  {
    id: "sap-med-monted-4",
    universita: "EGAS MONIZ - COOPERATIVA DE ENSINO SUPERIOR [INSTITUTO SUPERIOR DE CIENCIAS DA SAUDE EGAS MONIZ]",
    citta: "Monte-d",
    paese: "Portogallo",
    codiceErasmus: "P  MONTE-D02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "GIANLUCA RUSSO",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.egasmoniz.com.pt/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68474."
  },
  {
    id: "sap-med-leiria-5",
    universita: "INSTITUTO POLITECNICO DE LEIRA",
    citta: "Leiria",
    paese: "Portogallo",
    codiceErasmus: "P  LEIRIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "Silvia Migliaccio",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipleiria.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69415."
  },
  {
    id: "sap-med-lisboa",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "Silvia Migliaccio",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 al 30 aprile" },
        { cosa: "Application (autunno)", periodo: "dal 1 al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 al 30 settembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 al 30 settembre" }
      ],
    linkSito: "https://www.ulisboa.pt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69420. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-notting",
    universita: "UNIVERSITY OF NOTTINGHAM",
    citta: "Notting",
    paese: "Regno Unito",
    codiceErasmus: "UK NOTTING01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "MARIA GRAZIA PICCIONI",
    posti: [
      { numero: 2, mesi: 2, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.nottingham.ac.uk/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69443."
  },
  {
    id: "sap-med-notting-2",
    universita: "UNIVERSITY OF NOTTINGHAM",
    citta: "Notting",
    paese: "Regno Unito",
    codiceErasmus: "UK NOTTING01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "MARIA GRAZIA PICCIONI",
    posti: [
      { numero: 2, mesi: 2, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.nottingham.ac.uk/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69444."
  },
  {
    id: "sap-med-skopje",
    universita: "UNIVERZITET SV. KIRIL I METODIJ",
    citta: "Skopje",
    paese: "Macedonia del Nord",
    codiceErasmus: "MK SKOPJE01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "IOLE VOZZA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ukim.edu.mk/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70498."
  },
  {
    id: "sap-med-skopje-2",
    universita: "UNIVERZITET SV. KIRIL I METODIJ",
    citta: "Skopje",
    paese: "Macedonia del Nord",
    codiceErasmus: "MK SKOPJE01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "IOLE VOZZA",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ukim.edu.mk/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71515."
  },
  {
    id: "sap-med-bucures",
    universita: "UNIVERSITATEA \"TITU MAIORESCU\"",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES16",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "LIVIA OTTOLENGHI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.utm.ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69431."
  },
  {
    id: "sap-med-medvod",
    universita: "VISOKOSOLSKI ZAVOD FIZIOTERAPEVTIKA",
    citta: "Medvod",
    paese: "Slovenia",
    codiceErasmus: "SI MEDVOD01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ROBERTA GONNELLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://fizioterapevtika.si/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69438."
  },
  {
    id: "sap-med-celje",
    universita: "VISOKA ZDRAVSTVENA SOLA V CELJU",
    citta: "Celje",
    paese: "Slovenia",
    codiceErasmus: "SI CELJE08",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Giuseppe La Torre",
    posti: [
      { numero: 2, mesi: 3, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.fzvce.si/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68482."
  },
  {
    id: "sap-med-valenci",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "MARCO DE VINCENTIIS",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69391. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-med-jaen",
    universita: "UNIVERSIDAD DE JAÉN",
    citta: "Jaen",
    paese: "Spagna",
    codiceErasmus: "E  JAEN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71641."
  },
  {
    id: "sap-med-cordoba",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69368. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-med-barcelo",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69362. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-valenci-2",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69389. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-med-valenci-3",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69390. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-med-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69382. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69383. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-murcia-2",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69381. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-valenci-4",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69388. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-med-barcelo-2",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69361. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-madrid",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "UMBERTO ROMEO",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69377. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-madrid-2",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "UMBERTO ROMEO",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69376. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-zaragoz",
    universita: "FUNDACION UNIVERSIDAD SAN JORGE",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ07",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0914", nome: "Medical diagnostic and treatment technology" }],
    coordinatoreCf: "Francesco Fazi Prof.",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello raccomandato generale" },
        { lingua: "Inglese", livello: "B1", condizione: "livello raccomandato per corsi in inglese" },
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per studenti di Scienze della salute con tirocinio clinico" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.usj.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68454."
  },
  {
    id: "sap-med-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ALESSANDRO PINTO",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69386. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-barcelo-3",
    universita: "UNIVERSIDAD RAMON LLULL DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO16",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "PANKAJ TRIVEDI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "se si frequentano corsi in spagnolo; esenti gli studenti provenienti dall'America Latina" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "marzo-giugno" },
        { cosa: "Application (primavera)", periodo: "settembre-ottobre" }
      ],
    linkSito: "http://www.url.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69364. || Lingua: CEFR non pubblicato ufficialmente per l'inglese"
  },
  {
    id: "sap-med-barcelo-4",
    universita: "UNIVERSITAT INTERNACIONAL DE CATALUNYA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO24",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "ANDREA PILLONI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uic.es/ca",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69365."
  },
  {
    id: "sap-med-laspal",
    universita: "UNIVERSIDAD FERNANDO PESSOA CANARIAS [MASTER DEL CONOCIMIENTO S.L.  ]",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL43",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA MARIA GIUSTI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ufpcanarias.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69374."
  },
  {
    id: "sap-med-burgos",
    universita: "UNIVERSIDAD DE BURGOS",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E  BURGOS01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Giuseppe La Torre",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68442. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-madrid-3",
    universita: "UNIVERSIDAD FRANCISCO DE VITORIA",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID28",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Giuseppe La Torre",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ufvinternational.com/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68447."
  },
  {
    id: "sap-med-badajoz",
    universita: "UNIVERSIDAD DE EXTREMADURA",
    citta: "Badajoz",
    paese: "Spagna",
    codiceErasmus: "E  BADAJOZ01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "Giuseppe La Torre",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per la maggior parte degli insegnamenti" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato da alcune facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 7 aprile al 22 giugno 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 maggio al 30 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 ottobre al 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 30 novembre 2026" }
      ],
    linkSito: "http://www.unex.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68438."
  },
  {
    id: "sap-med-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "Mariano Serrao",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70488. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-laspal-2",
    universita: "UNIVERSIDAD FERNANDO PESSOA CANARIAS [MASTER DEL CONOCIMIENTO S.L.  ]",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL43",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "GIOVANNI GALEOTO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ufpcanarias.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69372."
  },
  {
    id: "sap-med-valenci-5",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "GIOVANNI GALEOTO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69392. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-med-almeria",
    universita: "UNIVERSIDAD DE ALMERIA",
    citta: "Almeria",
    paese: "Spagna",
    codiceErasmus: "E  ALMERIA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "GIOVANNI GALEOTO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UAL.ES",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69360."
  },
  {
    id: "sap-med-burgos-2",
    universita: "UNIVERSIDAD DE BURGOS",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E  BURGOS01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA BERARDI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69367. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-med-laspal-3",
    universita: "UNIVERSIDAD FERNANDO PESSOA CANARIAS [MASTER DEL CONOCIMIENTO S.L.  ]",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL43",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA BERARDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ufpcanarias.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69373."
  },
  {
    id: "sap-med-madrid-4",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA BERARDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69378."
  },
  {
    id: "sap-med-laspal-4",
    universita: "UNIVERSIDAD FERNANDO PESSOA CANARIAS [MASTER DEL CONOCIMIENTO S.L.  ]",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL43",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "TERESA COLACCI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ufpcanarias.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69371."
  },
  {
    id: "sap-med-sevilla-2",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0914", nome: "Medical diagnostic and treatment technology" }],
    coordinatoreCf: "CECCARELLI SIMONA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69387. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-jaen-2",
    universita: "UNIVERSIDAD DE JAÉN",
    citta: "Jaen",
    paese: "Spagna",
    codiceErasmus: "E  JAEN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA IRENE BELLINI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71640."
  },
  {
    id: "sap-med-jaen-3",
    universita: "UNIVERSIDAD DE JAÉN",
    citta: "Jaen",
    paese: "Spagna",
    codiceErasmus: "E  JAEN01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ROBERTA MOLLICA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71642."
  },
  {
    id: "sap-med-bilbao",
    universita: "CIFP TARTANGA LHII",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO26",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "Simonetta Mattiucci",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tartanga.eus/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69366."
  },
  {
    id: "sap-med-sevilla-3",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "GIANLUCA RUSSO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70489. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-med-barcelo-5",
    universita: "UNIVERSIDAD RAMON LLULL DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO16",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "Silvia Migliaccio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "se si frequentano corsi in spagnolo; esenti gli studenti provenienti dall'America Latina" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "marzo-giugno" },
        { cosa: "Application (primavera)", periodo: "settembre-ottobre" }
      ],
    linkSito: "http://www.url.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69363. || Lingua: CEFR non pubblicato ufficialmente per l'inglese"
  },
  {
    id: "sap-med-lugano",
    universita: "SCUOLA UNIVERSITARIA PROFESSIONALE DELLA SVIZZERA ITALIANA",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0913", nome: "Nursing and midwifery" }],
    coordinatoreCf: "ALESSANDRO DELLI POGGI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (semestre autunnale)", periodo: "entro il 30 aprile" },
        { cosa: "Application (semestre autunnale)", periodo: "entro il 15 maggio" },
        { cosa: "Nomination (semestre primaverile)", periodo: "entro il 31 ottobre" },
        { cosa: "Application (semestre primaverile)", periodo: "entro il 15 novembre" }
      ],
    linkSito: "http://www.supsi.ch/international/",
    linkCatalogo: "https://exchange.supsi.ch/en/incoming-students",

    notePratiche: "Posti dell'accordo: 1. Accordo ERA69351."
  },
  {
    id: "sap-med-lugano-2",
    universita: "UNIVERSITA DELLA SVIZZERA ITALIANA (USI)",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and information, not further defined" }],
    coordinatoreCf: "Michaela Liuccio",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68427."
  },
  {
    id: "sap-med-lugano-3",
    universita: "SCUOLA UNIVERSITARIA PROFESSIONALE DELLA SVIZZERA ITALIANA",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ANNA BERARDI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (semestre autunnale)", periodo: "entro il 30 aprile" },
        { cosa: "Application (semestre autunnale)", periodo: "entro il 15 maggio" },
        { cosa: "Nomination (semestre primaverile)", periodo: "entro il 31 ottobre" },
        { cosa: "Application (semestre primaverile)", periodo: "entro il 15 novembre" }
      ],
    linkSito: "http://www.supsi.ch/international/",
    linkCatalogo: "https://exchange.supsi.ch/en/incoming-students",

    notePratiche: "Posti dell'accordo: 1. Accordo ERA69352."
  },
  {
    id: "sap-med-lugano-4",
    universita: "SCUOLA UNIVERSITARIA PROFESSIONALE DELLA SVIZZERA ITALIANA",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0915", nome: "Therapy and rehabilitation" }],
    coordinatoreCf: "ROBERTA MOLLICA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (semestre autunnale)", periodo: "entro il 30 aprile" },
        { cosa: "Application (semestre autunnale)", periodo: "entro il 15 maggio" },
        { cosa: "Nomination (semestre primaverile)", periodo: "entro il 31 ottobre" },
        { cosa: "Application (semestre primaverile)", periodo: "entro il 15 novembre" }
      ],
    linkSito: "http://www.supsi.ch/international/",
    linkCatalogo: "https://exchange.supsi.ch/en/incoming-students",

    notePratiche: "Posti dell'accordo: 2. Accordo ERA69353."
  },
  {
    id: "sap-med-ankara",
    universita: "GAZI UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "LIVIA OTTOLENGHI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.gazi.edu.tr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69439."
  },
  {
    id: "sap-med-izmir",
    universita: "EGE UNIVERSITY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR02",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69441. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-med-pecs",
    universita: "PÉCSI TUDOMÁNYEGYETEM",
    citta: "Pecs",
    paese: "Ungheria",
    codiceErasmus: "HU PECS01",
    dipartimentoCf: "Medicina e Odontoiatria (area medica)",
    areeDisciplinari: [{ codice: "0911", nome: "Dental studies" }],
    coordinatoreCf: "UMBERTO ROMEO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.pte.hu",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69408."
  }
];
