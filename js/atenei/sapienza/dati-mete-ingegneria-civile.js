// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA CIVILE E INDUSTRIALE
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=INGE).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 128 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (10).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-ing-innsbru",
    universita: "MCI - MANAGEMENT CENTER INNSBRUCK G.M.B.H",
    citta: "Innsbru",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU08",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Fabio Giulii Capponi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69131. || Lingua: MCI richiede prova di inglese per incoming exchange; per Bachelor il livello e CEFR B2 (TOEFL iBT 75, IELTS 5.5 o equivalenti/test online MCI). Corso di lingua MCI ~100 EUR. [Fonti: scheda destinazione; MCI Incoming Exchange]"
  },
  {
    id: "sap-ing-wien",
    universita: "UNIVERSITAT FUR BODENKULTUR WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Raffaella Pomi",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://boku.ac.at/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69136."
  },
  {
    id: "sap-ing-salzbur",
    universita: "FH SALZBURG  FACHHOCHSCHULGESELLSCHAFT  MBH",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR08",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.fh-salzburg.ac.at/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69132."
  },
  {
    id: "sap-ing-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 3, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69139. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-ing-varna",
    universita: "VISSHE VOENNOMORSKO UCHILISHTE N Y VAPTSAROV",
    citta: "Varna",
    paese: "Bulgaria",
    codiceErasmus: "BG VARNA05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Rodolfo Araneo",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.naval-acad.bg/",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69144."
  },
  {
    id: "sap-ing-limasso",
    universita: "CYPRUS UNIVERISTY OF TECHNOLOGY- TECHNOLOGIKO PANEPISTIMIO KYPROU",
    citta: "Limasso",
    paese: "Cipro",
    codiceErasmus: "CY LIMASSO02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.cut.ac.cy/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69149."
  },
  {
    id: "sap-ing-zagreb",
    universita: "SVEUCILIŠTE U ZAGREBU - UNIVERSITY OF ZAGREB",
    citta: "Zagreb",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 5, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 5. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69268."
  },
  {
    id: "sap-ing-split",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Split",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Leonardo Micheli",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69267."
  },
  {
    id: "sap-ing-tallinn",
    universita: "TALLINNA TEHNIKAULIKOOL",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN04",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://taltech.ee/en/tallinn-university-of-technolog",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69229."
  },
  {
    id: "sap-ing-paris",
    universita: "UNIVERSITE PARIS 13 - PARIS NORD",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS013",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.univ-spn.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69251."
  },
  {
    id: "sap-ing-ales",
    universita: "ECOLE NAT.SUP. DES TECHNIQUES INDUSTRIELLES ET DES MINES",
    citta: "Ales",
    paese: "Francia",
    codiceErasmus: "F  ALES02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.imt-mines-ales.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69230."
  },
  {
    id: "sap-ing-limoges",
    universita: "UNIVERSITÉ DE LIMOGES",
    citta: "Limoges",
    paese: "Francia",
    codiceErasmus: "F  LIMOGES01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Agostina Chiavola",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unilim.fr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69234."
  },
  {
    id: "sap-ing-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Fabio Giulii Capponi",
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
        { cosa: "Application (autunno/anno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.univ-lille.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69233. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-grenobl",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Fabio Giulii Capponi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69231."
  },
  {
    id: "sap-ing-marseil",
    universita: "ECOLE CENTRALE MARSEILLE",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL11",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Giovanni Paolo Romano",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.centrale-mediterranee.fr/en",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69237."
  },
  {
    id: "sap-ing-toulous",
    universita: "INSTITUT SUPÉRIEUR DE L'AÉRONAUTIQUE ET DE L'ESPACE [ECOLE NATIONALE SUPERIEURE DE L`AERONAUTIQUE ET DE L`ESPACE] -ISAE",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS16",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Giovanni Paolo Romano",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.supaero.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69260."
  },
  {
    id: "sap-ing-paris-2",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Stefano Vidoli",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69257."
  },
  {
    id: "sap-ing-paris-3",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Stefano Vidoli",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69255."
  },
  {
    id: "sap-ing-paris-4",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Stefano Vidoli",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69256."
  },
  {
    id: "sap-ing-tarbes",
    universita: "UNIVERSITE DE TECHNOLOGIE DE TARBES",
    citta: "Tarbes",
    paese: "Francia",
    codiceErasmus: "F  TARBES03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Francesco Massi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uttop.fr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69259."
  },
  {
    id: "sap-ing-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA69241."
  },
  {
    id: "sap-ing-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69242."
  },
  {
    id: "sap-ing-marseil-4",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0722", nome: "Materials (glass, paper, plastic and wood)" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69243."
  },
  {
    id: "sap-ing-marseil-5",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69245."
  },
  {
    id: "sap-ing-marseil-6",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69244."
  },
  {
    id: "sap-ing-marseil-7",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0914", nome: "Medical diagnostic and treatment technology" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69247."
  },
  {
    id: "sap-ing-nantes",
    universita: "Ecole Centrale de Nantes",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES07",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 5, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ec-nantes.fr",
    notePratiche: "Posti dell'accordo: 5. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69249."
  },
  {
    id: "sap-ing-marseil-8",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0788", nome: "Inter-disciplinary programmes and qualifications involving engineering, manufacturing and construction" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69246."
  },
  {
    id: "sap-ing-nancy",
    universita: "UNIVERSITE DE LORRAINE",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "F  NANCY43",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Antonio Zuorro",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69248. || Scadenze: Universit� de Lorraine Student Mobility Fact Sheet 2025/2026 || Lingua: CEFR non pubblicato ufficialmente nella scheda IAE Metz; corsi offerti in inglese"
  },
  {
    id: "sap-ing-toulous-2",
    universita: "ECOLE NATIONALE DE L AVIATION CIVILE",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS18",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Francesco Nasuti",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.enac.fr/fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69261."
  },
  {
    id: "sap-ing-paris-5",
    universita: "ECOLE DES INGENIEURS DE LA VILLE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS086",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Marichela Sepe",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.eivp-paris.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69252."
  },
  {
    id: "sap-ing-lyon",
    universita: "UNIVERSITÉ CLAUDE BERNARD LYON 1",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0914", nome: "Medical diagnostic and treatment technology" }],
    coordinatoreCf: "Pietro Aricò",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studenti exchange incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero, ISPB farmacia)", periodo: "entro 2 giugno" },
        { cosa: "Application (primavera, ISPB farmacia)", periodo: "entro 3 novembre" }
      ],
    linkSito: "https://www.univ-lyon1.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69235. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-hannove",
    universita: "GOTTFRIED WILHELM LEIBNIZ UNIVERSITAET HANNOVER",
    citta: "Hannove",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Mattia Giovanni Crespi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hannover.de",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69160."
  },
  {
    id: "sap-ing-ravensb",
    universita: "HOCHSCHULE RAVENSBURG-WEINGARTEN - UNIVERSITY OF APPLIED SCIENCES",
    citta: "Ravensb",
    paese: "Germania",
    codiceErasmus: "D  RAVENSB01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.hs-weingarten.de",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69163."
  },
  {
    id: "sap-ing-munchen",
    universita: "TECHNISCHE UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tum.de/international",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69162."
  },
  {
    id: "sap-ing-munchen-2",
    universita: "TECHNISCHE UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tum.de/international",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69161."
  },
  {
    id: "sap-ing-stuttga",
    universita: "UNIVERSITÄT STUTTGART",
    citta: "Stuttga",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ANNALISA FREGOLENT",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69165."
  },
  {
    id: "sap-ing-berlin",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69153."
  },
  {
    id: "sap-ing-dresden",
    universita: "TECHNISCHE UNIVERSITÄT DRESDEN - TU DRESDEN",
    citta: "Dresden",
    paese: "Germania",
    codiceErasmus: "D  DRESDEN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69156."
  },
  {
    id: "sap-ing-bayreut",
    universita: "UNIVERSITAT BAYREUTH",
    citta: "Bayreut",
    paese: "Germania",
    codiceErasmus: "D  BAYREUT01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69152."
  },
  {
    id: "sap-ing-bayreut-2",
    universita: "UNIVERSITAT BAYREUTH",
    citta: "Bayreut",
    paese: "Germania",
    codiceErasmus: "D  BAYREUT01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bayreuth.de/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69151."
  },
  {
    id: "sap-ing-dresden-2",
    universita: "TECHNISCHE UNIVERSITÄT DRESDEN - TU DRESDEN",
    citta: "Dresden",
    paese: "Germania",
    codiceErasmus: "D  DRESDEN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69157."
  },
  {
    id: "sap-ing-freisin",
    universita: "HOCHSCHULE WEIHENSTEPHAN-TRIESDORF",
    citta: "Freisin",
    paese: "Germania",
    codiceErasmus: "D  FREISIN01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Luigi Piga",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hswt.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69159."
  },
  {
    id: "sap-ing-stuttga-2",
    universita: "UNIVERSITÄT STUTTGART",
    citta: "Stuttga",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "MASSIMO POMPILI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69164."
  },
  {
    id: "sap-ing-clausth",
    universita: "TECHNISCHE UNIVERSITAT CLAUSTHAL",
    citta: "Clausth",
    paese: "Germania",
    codiceErasmus: "D  CLAUSTH01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0720", nome: "Manufacturing and processing, not further defined" }],
    coordinatoreCf: "MARCO ROSSI",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tu-clausthal.de/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69155."
  },
  {
    id: "sap-ing-braunsc",
    universita: "TECHNISCHE UNIVERSITÄT CAROLO-WILHELMINA ZU BRAUNSCHWEIG",
    citta: "Braunsc",
    paese: "Germania",
    codiceErasmus: "D  BRAUNSC01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Francesco Nasuti",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per seguire con profitto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.tu-braunschweig.de/",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69154."
  },
  {
    id: "sap-ing-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration, not further defined" }],
    coordinatoreCf: "Raffaella Pomi",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 8. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69262."
  },
  {
    id: "sap-ing-kritis",
    universita: "POLYTECHNIO KRITIS",
    citta: "Kritis",
    paese: "Grecia",
    codiceErasmus: "G  KRITIS09",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Raffaella Pomi",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://en.tuc.gr/erasmus-en.html",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69263."
  },
  {
    id: "sap-ing-patra",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Antonio Zuorro",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69264. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-ing-patra-2",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Antonio Zuorro",
    posti: [
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69265. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-ing-riga",
    universita: "RIGAS TEHNISKA UNIVERSITATE",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificazione o conferma ufficiale secondo CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.rtu.lv/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69276."
  },
  {
    id: "sap-ing-riga-2",
    universita: "TRANSPORT AND TELECOMMUNICATION INSTITUTE",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA31",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Guido Gentile",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://tsi.lv/",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69278."
  },
  {
    id: "sap-ing-riga-3",
    universita: "RIGAS TEHNISKA UNIVERSITATE",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "ANDREA CAPPELLI",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificazione o conferma ufficiale secondo CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.rtu.lv/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69275."
  },
  {
    id: "sap-ing-vilnius",
    universita: "VILNIAUS GEDIMINO TECHNIKOS UNIVERSITETAS (VGTU)",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.vgtu.lt",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69272."
  },
  {
    id: "sap-ing-luxluxvil",
    universita: "UNIVERSITE DU LUXEMBOURG",
    citta: "Luxlux-vil",
    paese: "Lussemburgo",
    codiceErasmus: "LUXLUX-VIL01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Guido Gentile",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Lingua principale di insegnamento del programma scelto", livello: "B2", condizione: "raccomandato per seguire lezioni ed esami" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "HTTP://WWW.UNI.LUT",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69274."
  },
  {
    id: "sap-ing-eindhov",
    universita: "TECHNISCHE UNIVERSITEIT EINDHOVEN",
    citta: "Eindhov",
    paese: "Olanda",
    codiceErasmus: "NL EINDHOV17",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tue.nl/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69285."
  },
  {
    id: "sap-ing-delft",
    universita: "TECHNISCHE UNIVERSITEIT DELFT",
    citta: "Delft",
    paese: "Olanda",
    codiceErasmus: "NL DELFT01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.TUDELFT.NL",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69283."
  },
  {
    id: "sap-ing-ensched",
    universita: "UNIVERSITEIT TWENTE",
    citta: "Ensched",
    paese: "Olanda",
    codiceErasmus: "NL ENSCHED01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Fabio Giulii Capponi",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.utwente.nl",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69288."
  },
  {
    id: "sap-ing-ensched-2",
    universita: "UNIVERSITEIT TWENTE",
    citta: "Ensched",
    paese: "Olanda",
    codiceErasmus: "NL ENSCHED01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.utwente.nl",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69291."
  },
  {
    id: "sap-ing-ensched-3",
    universita: "UNIVERSITEIT TWENTE",
    citta: "Ensched",
    paese: "Olanda",
    codiceErasmus: "NL ENSCHED01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Domenico Borello",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.utwente.nl",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69290."
  },
  {
    id: "sap-ing-opole",
    universita: "POLITECHNIKA OPOLSKA",
    citta: "Opole",
    paese: "Polonia",
    codiceErasmus: "PL OPOLE02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Agostina Chiavola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://po.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69314."
  },
  {
    id: "sap-ing-gliwice",
    universita: "POLITECHNIKA SLASKA W GLIWICACH",
    citta: "Gliwice",
    paese: "Polonia",
    codiceErasmus: "PL GLIWICE01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.polsl.gliwice.pl/english.html",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69310."
  },
  {
    id: "sap-ing-rzeszow",
    universita: "RZESZOW UNIVERSITY OF TECHNOLOGY - POLITECHNIKA RZESZOWSKA IM IGNACEGO  LUKASIEWICZA",
    citta: "Rzeszow",
    paese: "Polonia",
    codiceErasmus: "PL RZESZOW01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato linguistico richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre 2026" }
      ],
    linkSito: "https://prz.edu.pl/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69316."
  },
  {
    id: "sap-ing-poznan",
    universita: "POLITECHNIKA POZNANSKA",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Luigi Piga",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.put.poznan.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69315."
  },
  {
    id: "sap-ing-warszaw",
    universita: "POLITECHNIKA WARSZAWSKA",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "MASSIMO POMPILI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.arch.pw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69317."
  },
  {
    id: "sap-ing-wroclaw",
    universita: "Panstwowa Akademia Nauk Stosowanych we Wloclawku/POLITECHNIKA WROCLAWSKAP",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Luigi Martirano",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://pwr.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69318."
  },
  {
    id: "sap-ing-krakow",
    universita: "POLITECHNIKA KRAKOWSKA",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Antonino Favata",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://pk.edu.pl",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69312."
  },
  {
    id: "sap-ing-krakow-2",
    universita: "AKADEMIA GORNICZO-HUTNICZA IM. STANISLAWA STASZICA W KRAKOWIE",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Paolo Venturini",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Polacco", livello: "B2", condizione: "per corsi in polacco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 17 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.agh.edu.pl/en",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69311."
  },
  {
    id: "sap-ing-lisboa",
    universita: "INSTITUTO POLITECNICO DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ipl.pt",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69298."
  },
  {
    id: "sap-ing-coimbra",
    universita: "INSTITUTO POLITÉCNICO DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Fabio Giulii Capponi",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ipc.pt",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69297."
  },
  {
    id: "sap-ing-lisboa-2",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0724", nome: "Mining and extraction" }],
    coordinatoreCf: "Giuseppe BONIFAZI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69302. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-lisboa-3",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Giuseppe BONIFAZI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69299. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-porto",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Luigi Callisto",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69305. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-coimbra-2",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Luigi Piga",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69293. || Scadenze: University of Coimbra incoming/FEUC 2025/26; nomination entro 30 giugno; application 1 marzo-15 luglio e 1 settembre-15 dicembre || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-porto-2",
    universita: "INSTITUTO POLITECNICO DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "Antonio Zuorro",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ipp.pt/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69306."
  },
  {
    id: "sap-ing-coimbra-3",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "PAOLA DI MASCIO",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA69294. || Scadenze: University of Coimbra incoming/FEUC 2025/26; nomination entro 30 giugno; application 1 marzo-15 luglio e 1 settembre-15 dicembre || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-ostrava",
    universita: "VYSOKA SKOLA BANSKA - TECHNICKA UNIVERZITA OSTRAVA",
    citta: "Ostrava",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OSTRAVA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Luigi Martirano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "la scheda indica livello B1-B2 di inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 15 novembre" },
        { cosa: "Application (sem. invernale/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (sem. estivo)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69150."
  },
  {
    id: "sap-ing-bucures",
    universita: "UNIVERSITATEA NATIONALA DE STIINTA  SI TEHNOLOGIE POLITEHNICA BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES43",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ANNAMARIA PAU",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Francese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Tedesco", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Rumeno", livello: "B1", condizione: "per mobilita di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.upb.ro",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69321."
  },
  {
    id: "sap-ing-bucures-2",
    universita: "UNIVERSITATEA NATIONALA DE STIINTA  SI TEHNOLOGIE POLITEHNICA BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES43",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Francese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Tedesco", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Rumeno", livello: "B1", condizione: "per mobilita di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.upb.ro",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69323."
  },
  {
    id: "sap-ing-bucures-3",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69319. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-bucures-4",
    universita: "UNIVERSITATEA NATIONALA DE STIINTA  SI TEHNOLOGIE POLITEHNICA BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES43",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Filippo Berto",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Francese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Tedesco", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Rumeno", livello: "B1", condizione: "per mobilita di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.upb.ro",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69320."
  },
  {
    id: "sap-ing-timisoa",
    universita: "UNIVERSITATEA \"POLITEHNICA\" DIN TIMISOARA",
    citta: "Timisoa",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA04",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Filippo Berto",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upt.ro/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69325."
  },
  {
    id: "sap-ing-belgrad",
    universita: "UNIVERZITET U BEOGRADU",
    citta: "Belgrad",
    paese: "Serbia",
    codiceErasmus: "RS  BELGRAD02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 4, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69326. || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-ing-zilina",
    universita: "ZILINSKÁ UNIVERZITA V ZILINE",
    citta: "Zilina",
    paese: "Slovacchia",
    codiceErasmus: "SK ZILINA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "104", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uniza.sk/",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69337."
  },
  {
    id: "sap-ing-zilina-2",
    universita: "ZILINSKÁ UNIVERZITA V ZILINE",
    citta: "Zilina",
    paese: "Slovacchia",
    codiceErasmus: "SK ZILINA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "FRANCESCO ROMEO",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uniza.sk/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69336."
  },
  {
    id: "sap-ing-ljublja",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 4, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA69334."
  },
  {
    id: "sap-ing-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69210. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69228. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
  },
  {
    id: "sap-ing-barcelo",
    universita: "UNIVERSIDAD POLITECNICA DE CATALUNIA BARCELONATECH",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upc.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69169."
  },
  {
    id: "sap-ing-madrid",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69192."
  },
  {
    id: "sap-ing-sevilla",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69214. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-sevilla-2",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69215. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-sevilla-3",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69216. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69175."
  },
  {
    id: "sap-ing-cadiz-2",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69176."
  },
  {
    id: "sap-ing-madrid-2",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Roberto Bubbico",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69186."
  },
  {
    id: "sap-ing-sevilla-4",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "ZACCARIA DEL PRETE",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69219. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-sevilla-5",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Fabio Giulii Capponi",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69217. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-barcelo-2",
    universita: "UNIVERSIDAD POLITECNICA DE CATALUNIA BARCELONATECH",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Franco Mastroddi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upc.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69171."
  },
  {
    id: "sap-ing-madrid-3",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Franco Mastroddi",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69193."
  },
  {
    id: "sap-ing-santiag-2",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Alessandra Polettini",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69211. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-leon",
    universita: "UNIVERSIDAD DE LEÓN",
    citta: "Leon",
    paese: "Spagna",
    codiceErasmus: "E  LEON01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Giovanni Paolo Romano",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69183."
  },
  {
    id: "sap-ing-ciudar",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Ciuda-r",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "Giovanni Paolo Romano",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69179. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-valenci",
    universita: "UNIVERSIDAD POLITECNICA DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Giovanni Paolo Romano",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upv.es",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA69225."
  },
  {
    id: "sap-ing-santand",
    universita: "UNIVERSIDAD DE CANTABRIA",
    citta: "Santand",
    paese: "Spagna",
    codiceErasmus: "E  SANTAND01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "1041", nome: "Transport services" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unican.es",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69209."
  },
  {
    id: "sap-ing-madrid-4",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Stefano Ricci",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69197."
  },
  {
    id: "sap-ing-santand-2",
    universita: "UNIVERSIDAD DE CANTABRIA",
    citta: "Santand",
    paese: "Spagna",
    codiceErasmus: "E  SANTAND01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Raffaella Pomi",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unican.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69208."
  },
  {
    id: "sap-ing-madrid-5",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Jacopo Ciambella",
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
    notePratiche: "Posti dell'accordo: 5. Accordo ERA69187. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69207. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-ciudar-2",
    universita: "UNIVERSIDAD DE CASTILLA-LA MANCHA",
    citta: "Ciuda-r",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Jacopo Ciambella",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69180. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-sevilla-6",
    universita: "UNIVERSIDAD PABLO DE OLAVIDE",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA03",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Antonio Zuorro",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per seguire lezioni ed esami" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 29 maggio 2026" }
      ],
    linkSito: "https://www.upo.es",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69223. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-madrid-6",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0730", nome: "Architecture and construction not further defined" }],
    coordinatoreCf: "Edoardo Currà",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69194."
  },
  {
    id: "sap-ing-malaga",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0716", nome: "Motor vehicles, ships and aircraft" }],
    coordinatoreCf: "COPPOTELLI GIULIANO",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69203. || Scadenze: UMA fact sheet 2025/26, nomination via Algoria; application operativa tramite selezione insegnamenti in Algoria || Lingua: spagnolo B1 raccomandato, certificato non richiesto || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-sevilla-7",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "Franco Marinozzi",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69212. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-cadiz-3",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0732", nome: "Building and Civil Engineering" }],
    coordinatoreCf: "Giuseppe Loprencipe",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69177."
  },
  {
    id: "sap-ing-lleida",
    universita: "UNIVERSITAT DE LLEIDA",
    citta: "Lleida",
    paese: "Spagna",
    codiceErasmus: "E  LLEIDA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Emanuele Habib",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69184. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-madrid-7",
    universita: "UNIVERSIDAD PONTIFICIA COMILLAS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0713", nome: "Electricity and energy" }],
    coordinatoreCf: "Maria Carmen Falvo",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.comillas.edu/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69185."
  },
  {
    id: "sap-ing-madrid-8",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Maria Argenti",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69196."
  },
  {
    id: "sap-ing-sevilla-8",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Sevilla",
    paese: "Spagna",
    codiceErasmus: "E  SEVILLA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Dionisio Del Vescovo",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA69220. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ing-lacoru",
    universita: "UNIVERSIDAD DE LA CORUÑA",
    citta: "La-coru",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Michele Morganti",
    posti: [
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA69181. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-trollha",
    universita: "HÖGSKOLAN VÄST",
    citta: "Trollha",
    paese: "Svezia",
    codiceErasmus: "S  TROLLHA01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Marra Francesco",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hv.se/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA69330."
  },
  {
    id: "sap-ing-lausann",
    universita: "EPFL - ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE",
    citta: "Lausann",
    paese: "Svizzera",
    codiceErasmus: "CH LAUSANN06",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Luigi Piga",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.epfl.ch/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA69145."
  },
  {
    id: "sap-ing-istanbu",
    universita: "MEF UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU49",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ANNAMARIA PAU",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.mef.edu.tr/en",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69341."
  },
  {
    id: "sap-ing-izmir",
    universita: "EGE UNIVERSITY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR02",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Luca Di Palma",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69342. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-ing-istanbu-2",
    universita: "Yildiz Technical University / Yildiz Teknik Üniversitesi (YTU)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU07",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0712", nome: "Environmental protection technology" }],
    coordinatoreCf: "Raffaella Pomi",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA69340. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ing-istanbu-3",
    universita: "ISTANBUL TEKNIK ÜNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU04",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0715", nome: "Mechanics and metal trades" }],
    coordinatoreCf: "Giuseppe Ruta",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.itu.edu.tr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69339."
  },
  {
    id: "sap-ing-ankara",
    universita: "BILKENT ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA07",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "073", nome: "Architecture and construction" }],
    coordinatoreCf: "Anna Bruna Menghini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (sem. autunnale/anno intero)", periodo: "entro 12 giugno" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 7 novembre" },
        { cosa: "Richiesta alloggio on-campus (autunno)", periodo: "~22 giugno - 3 luglio" },
        { cosa: "Richiesta alloggio on-campus (primavera)", periodo: "~7 dicembre - 8 gennaio" }
      ],
    linkSito: "https://w3.bilkent.edu.tr/bilkent/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69338. || Lingua: serve una lettera di competenza in inglese dell'universita di provenienza, senza livello CEFR esplicito - da verificare. Navette gratuite campus-centro; corsi di turco base (5 ECTS). [Fonte: scheda destinazione] || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-ing-godollo",
    universita: "University of Agriculture and Life Sciences  [former SZENT ISTVAN UNIVERSITY]",
    citta: "Godollo",
    paese: "Ungheria",
    codiceErasmus: "HU GODOLLO01",
    dipartimentoCf: "Ingegneria civile e industriale",
    areeDisciplinari: [{ codice: "0730", nome: "Architecture and construction not further defined" }],
    coordinatoreCf: "Edoardo Currà",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://en.uni-mate.hu/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA69270."
  }
];
