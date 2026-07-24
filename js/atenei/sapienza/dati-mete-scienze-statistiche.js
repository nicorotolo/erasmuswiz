// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. di Scienze statistiche
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=STATIS).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 38 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-stat-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 3, mesi: 8, livello: "L", note: "" },
      { numero: 3, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68387."
  },
  {
    id: "sap-stat-klagenf",
    universita: "UNIVERSITAT KLAGENFURT",
    citta: "Klagenf",
    paese: "Austria",
    codiceErasmus: "A  KLAGENF01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 gennaio" },
        { cosa: "Application (autunno)", periodo: "entro 15 febbraio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 31 luglio" }
      ],
    linkSito: "https://www.aau.at/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68108. || Scadenze: fact sheet AAU 2026/27 || Lingua: CEFR generale non pubblicato ufficialmente per exchange; verificare requisiti dei singoli corsi || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-stat-graz",
    universita: "KARL-FRANZENS UNIVERSITÄT GRAZ",
    citta: "Graz",
    paese: "Austria",
    codiceErasmus: "A  GRAZ01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per seguire pienamente la mobilita" },
        { lingua: "Inglese", livello: "B2", condizione: "per studenti che seguono solo corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://INTERNATIONAL.UNI-GRAZ.AT/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68105."
  },
  {
    id: "sap-stat-louvain",
    universita: "UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68119. || Lingua: per i Master in Economics e' richiesta prova di capacita di seguire lezioni in inglese, con test almeno CEFR B2 oppure transcript con almeno 3 corsi di economics in inglese. [Fonti: UCLouvain ESL; pagina nomination/application UCLouvain] || Scadenze: LSM fact sheet 2025/26, da confermare per 2026/27 || Lingua: LSM indica CEFR B2 raccomandato in francese o inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-stat-leuven",
    universita: "KATHOLIEKE UNIVERSITEIT LEUVEN",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B  LEUVEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "C1", condizione: "per corsi master/graduate della Faculty of Economics and Business" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 15 settembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (2 semestre)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "https://www.kuleuven.be/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71480. || Lingua: nessun certificato di inglese richiesto, ma e attesa piena padronanza (garantita dall'universita di provenienza). ATTENZIONE: la scheda collegata da Ca' Foscari e della Faculty of Science - verificare i requisiti della facolta di destinazione. Costo vita stimato 1.000-1.350 EUR/mese. [Fonte: scheda destinazione] || Lingua: KU Leuven FEB richiede inglese B2 per corsi bachelor e C1 per corsi master; per questa meta Ca' Foscari il livello indicato e LM. [Fonti: KU Leuven FEB nomination/application; KU Leuven FEB courses]"
  },
  {
    id: "sap-stat-sofia",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/intero anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.unwe.acad.bg",
    linkCatalogo: "https://www.unwe.bg/mobility/en/pages/10639/courses-taught-in-english.html",

    notaDisponibilita: "Alcuni corsi potrebbero subire variazioni all'arrivo essendo opzionali; l'elenco definitivo dei corsi attivi viene fornito 1-2 settimane prima dell'inizio delle lezioni.",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68124."
  },
  {
    id: "sap-stat-sofia-2",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/intero anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.unwe.acad.bg",
    linkCatalogo: "https://www.unwe.bg/mobility/en/pages/10639/courses-taught-in-english.html",

    notaDisponibilita: "Alcuni corsi potrebbero subire variazioni all'arrivo essendo opzionali; l'elenco definitivo dei corsi attivi viene fornito 1-2 settimane prima dell'inizio delle lezioni.",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68121."
  },
  {
    id: "sap-stat-sofia-3",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/intero anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.unwe.acad.bg",
    linkCatalogo: "https://www.unwe.bg/mobility/en/pages/10639/courses-taught-in-english.html",

    notaDisponibilita: "Alcuni corsi potrebbero subire variazioni all'arrivo essendo opzionali; l'elenco definitivo dei corsi attivi viene fornito 1-2 settimane prima dell'inizio delle lezioni.",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68122."
  },
  {
    id: "sap-stat-sofia-4",
    universita: "UNIVERSITY OF NATIONAL AND WORLD ECONOMY",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0412", nome: "Finance, banking and insurance" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/intero anno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.unwe.acad.bg",
    linkCatalogo: "https://www.unwe.bg/mobility/en/pages/10639/courses-taught-in-english.html",

    notaDisponibilita: "Alcuni corsi potrebbero subire variazioni all'arrivo essendo opzionali; l'elenco definitivo dei corsi attivi viene fornito 1-2 settimane prima dell'inizio delle lezioni.",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68123."
  },
  {
    id: "sap-stat-limasso",
    universita: "CYPRUS UNIVERISTY OF TECHNOLOGY- TECHNOLOGIKO PANEPISTIMIO KYPROU",
    citta: "Limasso",
    paese: "Cipro",
    codiceErasmus: "CY LIMASSO02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.cut.ac.cy/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68133."
  },
  {
    id: "sap-stat-helsink",
    universita: "HELSINGIN YLIOPISTO",
    citta: "Helsink",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studi principalmente in inglese" },
        { lingua: "Finlandese", livello: "B2", condizione: "per studi principalmente in finlandese" },
        { lingua: "Svedese", livello: "B2", condizione: "per studi principalmente in svedese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Nomination (primavera)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Application non UE/SEE (autunno/anno)", periodo: "1-15 aprile" },
        { cosa: "Application UE/SEE/Svizzera (autunno/anno)", periodo: "1-15 maggio" },
        { cosa: "Application non UE/SEE (primavera)", periodo: "16-30 settembre" },
        { cosa: "Application UE/SEE/Svizzera (primavera)", periodo: "1-15 ottobre" }
      ],
    linkSito: "https://www.helsinki.fi/en",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68386."
  },
  {
    id: "sap-stat-paris",
    universita: "L‘INSTITUT AGRO Rennes Angers -INSTITUT NATIONAL D'ENSEIGNEMENT SUPERIEUR POUR L'AGRICULTURE, L'ALIMENTATION ET L'ENVIRONNEMENT - [former F RENNES47]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS487",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.institut-agro-rennes-angers.fr/ecole/decouvrir-linstitut-agro-rennes-angers",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68272."
  },
  {
    id: "sap-stat-antony",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68235."
  },
  {
    id: "sap-stat-antony-2",
    universita: "ENSAE PARIS TECH - ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ADMINISTRATION ECONOMIQUE",
    citta: "Antony",
    paese: "Francia",
    codiceErasmus: "F  ANTONY03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensae.fr/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68233."
  },
  {
    id: "sap-stat-vaulxv",
    universita: "ECOLE NATIONALE DES TRAVAUX PUBLICS DE L`ETAT",
    citta: "Vaulx-v",
    paese: "Francia",
    codiceErasmus: "F  VAULX-V02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.entpe.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68280."
  },
  {
    id: "sap-stat-paris-2",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68260. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-stat-rennes",
    universita: "ECOLE NATIONALE DE LA STATISTIQUE ET DE L'ANALYSE DE L'INFORMATION",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES32",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "AGOSTINO DI CIACCIO",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ensai.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68274."
  },
  {
    id: "sap-stat-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "GIULIA ZACCHIA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68253. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-stat-trier",
    universita: "UNIVERSITÄT TRIER",
    citta: "Trier",
    paese: "Germania",
    codiceErasmus: "D  TRIER01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://www.auslandsamt.uni-trier.de",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68168. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-stat-dortmun",
    universita: "Technische Universität Dortmund",
    citta: "Dortmun",
    paese: "Germania",
    codiceErasmus: "D  DORTMUN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tu-dortmund.de",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68147."
  },
  {
    id: "sap-stat-frankfu",
    universita: "JOHANN  WOLFGANG GOETHE UNIVERSITÄT",
    citta: "Frankfu",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68152."
  },
  {
    id: "sap-stat-essen",
    universita: "UNIVERSITÄT DUISBURG-ESSEN",
    citta: "Essen",
    paese: "Germania",
    codiceErasmus: "D  ESSEN04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duisburg-essen.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68151."
  },
  {
    id: "sap-stat-erfurt",
    universita: "UNIVERSITÄT ERFURT",
    citta: "Erfurt",
    paese: "Germania",
    codiceErasmus: "D  ERFURT05",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-erfurt.de/foreign",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68149."
  },
  {
    id: "sap-stat-essen-2",
    universita: "UNIVERSITÄT DUISBURG-ESSEN",
    citta: "Essen",
    paese: "Germania",
    codiceErasmus: "D  ESSEN04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences, not further defined" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duisburg-essen.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68150."
  },
  {
    id: "sap-stat-siegen",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68165."
  },
  {
    id: "sap-stat-bremen",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B2", condizione: "raccomandato per la lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    linkSito: "https://www.uni-bremen.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68146."
  },
  {
    id: "sap-stat-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68413."
  },
  {
    id: "sap-stat-egaleo",
    universita: "PANEPISTIMIO DYTIKIS ATTIKIS",
    citta: "Egaleo",
    paese: "Grecia",
    codiceErasmus: "G  EGALEO02",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "CARLO D'IPPOLITI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per la mobilita Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "15 maggio - 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "16 novembre 2026 - 6 gennaio 2027" }
      ],
    linkSito: "https://www.uniwa.gr/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71552."
  },
  {
    id: "sap-stat-opole",
    universita: "Uniwersitet Opolski",
    citta: "Opole",
    paese: "Polonia",
    codiceErasmus: "PL OPOLE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni.opole.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68336."
  },
  {
    id: "sap-stat-opole-2",
    universita: "Uniwersitet Opolski",
    citta: "Opole",
    paese: "Polonia",
    codiceErasmus: "PL OPOLE01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uni.opole.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68337."
  },
  {
    id: "sap-stat-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68214. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-stat-madrid",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68191."
  },
  {
    id: "sap-stat-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "MARIA BRIGIDA FERRARO",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA68208. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-stat-lugano",
    universita: "UNIVERSITA DELLA SVIZZERA ITALIANA (USI)",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO01",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68129."
  },
  {
    id: "sap-stat-istanbu",
    universita: "ISTANBUL TICARET UNIVERSITESI (ISTANBUL COMMERCE UNIVERSITY)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU10",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.iticu.edu.tr/english/eng_index.htm",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68365."
  },
  {
    id: "sap-stat-ankara",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "LUCA TARDELLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68359. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-stat-istanbu-2",
    universita: "MIMAR SINAN GUZEL SANATLAR UNIVERSITESI   [MIMAR SINAN FINE ARTS UNIVERSITY]",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU06",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "0542", nome: "Statistics" }],
    coordinatoreCf: "FIORENZA DERIU",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://msgsu.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68364."
  },
  {
    id: "sap-stat-istanbu-3",
    universita: "ISTANBUL TEKNIK ÜNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU04",
    dipartimentoCf: "Scienze statistiche",
    areeDisciplinari: [{ codice: "041", nome: "Business and administration" }],
    coordinatoreCf: "MARCELLA CORSI",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.itu.edu.tr/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68363."
  }
];
