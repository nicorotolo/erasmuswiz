// ==========================================================
// METE ERASMUS - SAPIENZA - SCIENZE MATEMATICHE, FISICHE E NATURALI
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=MATEM).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 254 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (1).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-mfn-wien",
    universita: "TECHNISCHE UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "ANDREA GIANSANTI",
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
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "https://srv03.ai.tuwien.ac.at/international/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70673."
  },
  {
    id: "sap-mfn-graz",
    universita: "KARL-FRANZENS UNIVERSITÄT GRAZ",
    citta: "Graz",
    paese: "Austria",
    codiceErasmus: "A  GRAZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70668."
  },
  {
    id: "sap-mfn-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70155."
  },
  {
    id: "sap-mfn-salzbur-2",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70157."
  },
  {
    id: "sap-mfn-salzbur-3",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70156."
  },
  {
    id: "sap-mfn-wien-2",
    universita: "UNIVERSITÄT WIEN",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A  WIEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70672. || Lingua: l'Universita di Vienna si aspetta tedesco CEFR B2 per gli incoming; se nel campo di studio ci sono abbastanza corsi in inglese, anche il requisito per l'inglese corrisponde a B2. Di norma non serve caricare un certificato, ma l'universita di provenienza conferma le competenze in nomination. [Fonti: scheda destinazione; University of Vienna International Office] || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
  },
  {
    id: "sap-mfn-linz",
    universita: "JOHANNES KEPLER UNIVERSITÄT LINZ",
    citta: "Linz",
    paese: "Austria",
    codiceErasmus: "A  LINZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Rinaldo TROTTA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.jku.at/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70671."
  },
  {
    id: "sap-mfn-graz-2",
    universita: "TECHNISCHE UNIVERSITAT GRAZ",
    citta: "Graz",
    paese: "Austria",
    codiceErasmus: "A  GRAZ02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Lilia Boeri",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.tugraz.at",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70670."
  },
  {
    id: "sap-mfn-gent",
    universita: "UNIVERSITEIT GENT",
    citta: "Gent",
    paese: "Belgio",
    codiceErasmus: "B  GENT01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti exchange in contesto accademico; certificato con speaking, writing, listening e reading" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 15 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ugent.be/en/exchange",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70674. || Lingua: UGent richiede per gli exchange buona conoscenza dell'inglese, livello CEF/CEFR B2 o superiore, per comunicare e lavorare in contesto accademico. [Fonti: scheda destinazione; UGent Language Requirements for Exchange Students]"
  },
  {
    id: "sap-mfn-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70165. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-2",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70159. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-3",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70161. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-4",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70162. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-5",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70163. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-6",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70164. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-7",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0810", nome: "Agriculture, not further defined" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70166. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-8",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70158. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-bruxel-9",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70160. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-mfn-gent-2",
    universita: "UNIVERSITEIT GENT",
    citta: "Gent",
    paese: "Belgio",
    codiceErasmus: "B  GENT01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti exchange in contesto accademico; certificato con speaking, writing, listening e reading" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 15 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ugent.be/en/exchange",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70675. || Lingua: UGent richiede per gli exchange buona conoscenza dell'inglese, livello CEF/CEFR B2 o superiore, per comunicare e lavorare in contesto accademico. [Fonti: scheda destinazione; UGent Language Requirements for Exchange Students]"
  },
  {
    id: "sap-mfn-gent-3",
    universita: "UNIVERSITEIT GENT",
    citta: "Gent",
    paese: "Belgio",
    codiceErasmus: "B  GENT01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti exchange in contesto accademico; certificato con speaking, writing, listening e reading" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 15 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ugent.be/en/exchange",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70677. || Lingua: UGent richiede per gli exchange buona conoscenza dell'inglese, livello CEF/CEFR B2 o superiore, per comunicare e lavorare in contesto accademico. [Fonti: scheda destinazione; UGent Language Requirements for Exchange Students]"
  },
  {
    id: "sap-mfn-gent-4",
    universita: "UNIVERSITEIT GENT",
    citta: "Gent",
    paese: "Belgio",
    codiceErasmus: "B  GENT01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti exchange in contesto accademico; certificato con speaking, writing, listening e reading" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 15 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ugent.be/en/exchange",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70676. || Lingua: UGent richiede per gli exchange buona conoscenza dell'inglese, livello CEF/CEFR B2 o superiore, per comunicare e lavorare in contesto accademico. [Fonti: scheda destinazione; UGent Language Requirements for Exchange Students]"
  },
  {
    id: "sap-mfn-plovdiv",
    universita: "PAISII HILENDARSKI UNIVERSITY OF PLOVDIV",
    citta: "Plovdiv",
    paese: "Bulgaria",
    codiceErasmus: "BG PLOVDIV04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pu.acad.bg",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70681."
  },
  {
    id: "sap-mfn-plovdiv-2",
    universita: "PAISII HILENDARSKI UNIVERSITY OF PLOVDIV",
    citta: "Plovdiv",
    paese: "Bulgaria",
    codiceErasmus: "BG PLOVDIV04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pu.acad.bg",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70678."
  },
  {
    id: "sap-mfn-plovdiv-3",
    universita: "PAISII HILENDARSKI UNIVERSITY OF PLOVDIV",
    citta: "Plovdiv",
    paese: "Bulgaria",
    codiceErasmus: "BG PLOVDIV04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pu.acad.bg",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70679."
  },
  {
    id: "sap-mfn-plovdiv-4",
    universita: "PAISII HILENDARSKI UNIVERSITY OF PLOVDIV",
    citta: "Plovdiv",
    paese: "Bulgaria",
    codiceErasmus: "BG PLOVDIV04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pu.acad.bg",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70680."
  },
  {
    id: "sap-mfn-zadar",
    universita: "UNIVERSITY OF ZADAR",
    citta: "Zadar",
    paese: "Croazia",
    codiceErasmus: "HR ZADAR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0888", nome: "Agriculture, forestry, fisheries, veterinary, inter-disciplinary programmes" }],
    coordinatoreCf: "Massimo REVERBERI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unizd.hr/English/Aboutus/tabid/5199/language/hr-HR/Default.aspx",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70839."
  },
  {
    id: "sap-mfn-odense",
    universita: "UNIVERSITY OF SOUTHERN DENMARK [SYDDANSK UNIVERSITET - ODENSE UNIVERSITEIT]",
    citta: "Odense",
    paese: "Danimarca",
    codiceErasmus: "DK ODENSE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Benedetta MATTEI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "Language Requirement Form firmato (TOEFL/IELTS non richiesti)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination autunno (UE/SEE)", periodo: "entro 15 aprile" },
        { cosa: "Nomination primavera (UE/SEE)", periodo: "entro 15 ottobre" },
        { cosa: "Application autunno (UE/SEE)", periodo: "entro 1 maggio" },
        { cosa: "Application primavera (UE/SEE)", periodo: "entro 1 novembre" },
        { cosa: "Alloggio garantito se richiesto", periodo: "entro 1 maggio / 1 novembre" }
      ],
    linkSito: "http://www.sdu.dk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70732. || Scadenze: SDU exchange application, nomination 1/5 e 1/11, application 15/5 e 15/11 || Lingua: inglese equivalente almeno al Danish B2 standard"
  },
  {
    id: "sap-mfn-jyvasky",
    universita: "JYVÄSKYLÄN YLIOPISTO",
    citta: "Jyvasky",
    paese: "Finlandia",
    codiceErasmus: "SF JYVASKY01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.jyu.fi",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70884."
  },
  {
    id: "sap-mfn-paris",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70813. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-nancy",
    universita: "UNIVERSITE DE LORRAINE",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "F  NANCY43",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "BRUNO BOTTA",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70811. || Scadenze: Universit� de Lorraine Student Mobility Fact Sheet 2025/2026 || Lingua: CEFR non pubblicato ufficialmente nella scheda IAE Metz; corsi offerti in inglese"
  },
  {
    id: "sap-mfn-paris-2",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "ANDREA GIANSANTI",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70828."
  },
  {
    id: "sap-mfn-lyon",
    universita: "ECOLE NORMALE SUPERIEURE DE LYON (EX F LYON18+ F FONTENA01)",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON103",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "ANDREA GIANSANTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ens-lyon.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70808."
  },
  {
    id: "sap-mfn-paris-3",
    universita: "UNIVERSITÉ DE PARIS-SACLAY [former UNIVERSITÉ DE PARIS-SUD (PARIS XI), F  PARIS011]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS481",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "VINCENZO MARINARI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.universite-paris-saclay.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70825."
  },
  {
    id: "sap-mfn-paris-4",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "ISABELLA SAGGIO",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70827."
  },
  {
    id: "sap-mfn-nantes",
    universita: "UNIVERSITE DE NANTES",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Danilo DINI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ-nantes.fr/foreignstudents",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70812."
  },
  {
    id: "sap-mfn-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA70178."
  },
  {
    id: "sap-mfn-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70172."
  },
  {
    id: "sap-mfn-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70173."
  },
  {
    id: "sap-mfn-marseil-4",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 3, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. Accordo ERA70174."
  },
  {
    id: "sap-mfn-marseil-5",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70179."
  },
  {
    id: "sap-mfn-marseil-6",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70181."
  },
  {
    id: "sap-mfn-marseil-7",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70167."
  },
  {
    id: "sap-mfn-marseil-8",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70177."
  },
  {
    id: "sap-mfn-lyon-2",
    universita: "ECOLE NORMALE SUPERIEURE DE LYON (EX F LYON18+ F FONTENA01)",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON103",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "054", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ens-lyon.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70809."
  },
  {
    id: "sap-mfn-grenobl",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "054", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Andrea SAMBUSETTI",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70798."
  },
  {
    id: "sap-mfn-paris-5",
    universita: "UNIVERSITE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS482",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea SAMBUSETTI",
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
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.univ-paris5.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70829."
  },
  {
    id: "sap-mfn-grenobl-2",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Andrea SAMBUSETTI",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70804. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-cergyp",
    universita: "CY CERGY PARIS UNIVERSITÉ [former F  CERGY07, UNIVERSITÉ DE CERGY-PONTOISE]",
    citta: "Cergy-p",
    paese: "Francia",
    codiceErasmus: "F  CERGY-P11",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 31 ottobre 2026" }
      ],
    linkSito: "http://www.u-cergy.fr",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70797. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-mfn-caen",
    universita: "UNIVERSITÉ DE CAEN",
    citta: "Caen",
    paese: "Francia",
    codiceErasmus: "F  CAEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unicaen.fr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70796."
  },
  {
    id: "sap-mfn-lyon-3",
    universita: "INSTITUT NATIONAL DES SCIENCES APPLIQUEES DE LYON - INSA",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON12",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.insa-lyon.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70810."
  },
  {
    id: "sap-mfn-rennes",
    universita: "ECOLE NATIONALE SUPERIEURE DE CHIMIE",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" }
      ],
    linkSito: "http://www.ensc-rennes.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70831. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-mfn-grenobl-3",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70802. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-paris-6",
    universita: "ECOLE NATIONALE SUPERIEURE DE CHIMIE DE PARIS",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS063",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.chimieparistech.psl.eu/",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70816."
  },
  {
    id: "sap-mfn-lyon-4",
    universita: "ECOLE NORMALE SUPERIEURE DE LYON (EX F LYON18+ F FONTENA01)",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON103",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.ens-lyon.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70807."
  },
  {
    id: "sap-mfn-grenobl-4",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "07", nome: "Engineering, manufacturing and construction" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70799."
  },
  {
    id: "sap-mfn-grenobl-5",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "07", nome: "Engineering, manufacturing and construction" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70800."
  },
  {
    id: "sap-mfn-nice",
    universita: "UNIVERSITÉ DE CÔTE D'AZUR [former UNIVERSITE DE NICE - SOPHIA ANTIPOLIS - F NICE01]",
    citta: "Nice",
    paese: "Francia",
    codiceErasmus: "F  NICE42",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71708. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-paris-7",
    universita: "SORBONNE UNIVERSITE [former UNIVERSITÉ DE PARIS-SORBONNE PARIS IV - F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70818."
  },
  {
    id: "sap-mfn-paris-8",
    universita: "UNIVERSITÉ DE PARIS-SACLAY [former UNIVERSITÉ DE PARIS-SUD (PARIS XI), F  PARIS011]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS481",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.universite-paris-saclay.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70824."
  },
  {
    id: "sap-mfn-bordeau",
    universita: "UNIVERSITE DE BORDEAUX",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU58",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Andrea MELE",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese (Economia/Management)" },
        { lingua: "Francese", livello: "B2", condizione: "se il learning agreement ha almeno un corso in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.u-bordeaux.fr/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70795. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-paris-9",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70822."
  },
  {
    id: "sap-mfn-paris-10",
    universita: "UNIVERSITÉ PANTHEON-SORBONNE (PARIS I)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS001",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70814. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-toulous",
    universita: "UNIVERSITE PAUL SABATIER (TOULOUSE III)",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.ups-tlse.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70833. || Scadenze: Universite Toulouse III Erasmus incoming || Lingua: B2 indicato per inglese/francese da lista partner; verificare con IUT prima della candidatura"
  },
  {
    id: "sap-mfn-toulous-2",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE TOULOUSE",
    citta: "Toulous",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS28",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inp-toulouse.fr/sri",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70834."
  },
  {
    id: "sap-mfn-paris-11",
    universita: "Université Paris-Est Créteil Val de Marne (UPEC) [former UNIVERSITE DE PARIS-VAL DE MARNE PARIS XII]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS012",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Simone Diverio",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.u-pec.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70815."
  },
  {
    id: "sap-mfn-lille",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Enrico ROGORA",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70806. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-grenobl-6",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70801. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-lille-2",
    universita: "UNIVERSITE' DE LILLE",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70805. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-marseil-9",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Fiorentina Ascenzioni",
    posti: [
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70168."
  },
  {
    id: "sap-mfn-bordeau-2",
    universita: "UNIVERSITE DE BORDEAUX",
    citta: "Bordeau",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU58",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Arianna Rinaldi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese (Economia/Management)" },
        { lingua: "Francese", livello: "B2", condizione: "se il learning agreement ha almeno un corso in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.u-bordeaux.fr/en",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70794. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-rennes-2",
    universita: "ECOLE NATIONALE SUPERIEURE DE CHIMIE",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" }
      ],
    linkSito: "http://www.ensc-rennes.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70830. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-mfn-strasbo",
    universita: "THE UNIVERSITY OF STRASBOURG (UDS)",
    citta: "Strasbo",
    paese: "Francia",
    codiceErasmus: "F  STRASBO48",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Paolo Lupattelli",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70832. || Scadenze: EM Strasbourg fact sheet 2025/26 || Lingua: B2 nella lingua di insegnamento fortemente raccomandato; certificato non richiesto || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-mfn-bremen",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70696."
  },
  {
    id: "sap-mfn-bremen-2",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70697."
  },
  {
    id: "sap-mfn-osnabru",
    universita: "UNIVERSITÄT OSNABRÜCK",
    citta: "Osnabru",
    paese: "Germania",
    codiceErasmus: "D  OSNABRU01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "MARIA EGLE DE STEFANO",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 gennaio" }
      ],
    linkSito: "http://www.uni-osnabrueck.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70722."
  },
  {
    id: "sap-mfn-eichsta",
    universita: "KATHOLISCHE UNIVERSITÄT EICHSTÄTT-INGOLSTADT",
    citta: "Eichsta",
    paese: "Germania",
    codiceErasmus: "D  EICHSTA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MARTA DELLA SETA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "A2", condizione: "per corsi di lingua tedesca del Language Center" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno accademico)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno/anno accademico)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://www.ku.de/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70701."
  },
  {
    id: "sap-mfn-berlin",
    universita: "HUMBOLDT-UNIVERSITÄT ZU BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "SIMONETTA GENTILE",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70693."
  },
  {
    id: "sap-mfn-augsbur",
    universita: "UNIVERSITÄT AUGSBURG",
    citta: "Augsbur",
    paese: "Germania",
    codiceErasmus: "D  AUGSBUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.uni-augsburg.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70690."
  },
  {
    id: "sap-mfn-berlin-2",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70691."
  },
  {
    id: "sap-mfn-munchen",
    universita: "TECHNISCHE UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tum.de/international",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70720."
  },
  {
    id: "sap-mfn-mainz",
    universita: "JOHANNES-GUTENBERG-UNIVERSITÄT MAINZ",
    citta: "Mainz",
    paese: "Germania",
    codiceErasmus: "D  MAINZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-mainz.de",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70714."
  },
  {
    id: "sap-mfn-heidelb",
    universita: "RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG",
    citta: "Heidelb",
    paese: "Germania",
    codiceErasmus: "D  HEIDELB01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "054", nome: "Mathematics and statistics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70708."
  },
  {
    id: "sap-mfn-gotting",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MAURIZIO BATTAGLIA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70705. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-potsdam",
    universita: "UNIVERSITAT POTSDAM",
    citta: "Potsdam",
    paese: "Germania",
    codiceErasmus: "D  POTSDAM01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MAURIZIO BATTAGLIA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70726. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70183."
  },
  {
    id: "sap-mfn-tubinge-2",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70185."
  },
  {
    id: "sap-mfn-tubinge-3",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70186."
  },
  {
    id: "sap-mfn-munchen-2",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "052", nome: "Environment" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70716. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-tubinge-4",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 3, mesi: 8, livello: "L", note: "" },
      { numero: 3, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70187."
  },
  {
    id: "sap-mfn-tubinge-5",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70184."
  },
  {
    id: "sap-mfn-tubinge-6",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70188."
  },
  {
    id: "sap-mfn-tubinge-7",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 4, livello: "L", note: "" },
      { numero: 1, mesi: 4, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70191."
  },
  {
    id: "sap-mfn-hannove",
    universita: "GOTTFRIED WILHELM LEIBNIZ UNIVERSITAET HANNOVER",
    citta: "Hannove",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "ANNAMARIA SIANI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hannover.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70706."
  },
  {
    id: "sap-mfn-mainz-2",
    universita: "JOHANNES-GUTENBERG-UNIVERSITÄT MAINZ",
    citta: "Mainz",
    paese: "Germania",
    codiceErasmus: "D  MAINZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Claudio LUCI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-mainz.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70713."
  },
  {
    id: "sap-mfn-munster",
    universita: "UNIVERSITÄT MÜNSTER",
    citta: "Munster",
    paese: "Germania",
    codiceErasmus: "D  MUNSTER01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Paolo Piazza",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70721. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-essen",
    universita: "UNIVERSITÄT DUISBURG-ESSEN",
    citta: "Essen",
    paese: "Germania",
    codiceErasmus: "D  ESSEN04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "RICCARDO SALVATI MANNI",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-duisburg-essen.de/",
    notePratiche: "Posti dell'accordo: 3. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70702."
  },
  {
    id: "sap-mfn-berlin-3",
    universita: "HUMBOLDT-UNIVERSITÄT ZU BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "RICCARDO SALVATI MANNI",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70694."
  },
  {
    id: "sap-mfn-munchen-3",
    universita: "LUDWIG-MAXIMILIANS-UNIVERSITÄT MÜNCHEN",
    citta: "Munchen",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Riccardo Faccini",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70717. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-siegen",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70728."
  },
  {
    id: "sap-mfn-marburg",
    universita: "PHILIPPS-UNIVERSITÄT MARBURG",
    citta: "Marburg",
    paese: "Germania",
    codiceErasmus: "D  MARBURG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-marburg.de/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70715."
  },
  {
    id: "sap-mfn-berlin-4",
    universita: "HUMBOLDT-UNIVERSITÄT ZU BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70692."
  },
  {
    id: "sap-mfn-dresden",
    universita: "TECHNISCHE UNIVERSITÄT DRESDEN - TU DRESDEN",
    citta: "Dresden",
    paese: "Germania",
    codiceErasmus: "D  DRESDEN02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70700."
  },
  {
    id: "sap-mfn-karlsru",
    universita: "KARLSRUHE INSTITUTE OF TECHNOLOGY (KIT)",
    citta: "Karlsru",
    paese: "Germania",
    codiceErasmus: "D  KARLSRU01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Giuseppina FALASCA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-karlsruhe.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70709."
  },
  {
    id: "sap-mfn-aachen",
    universita: "RWTH Aachen University [RHEINISCH-WESTFÄLISCHE TECHNISCHE HOCHSCHULE AACHEN]",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D  AACHEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Andrea CRISANTI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1.1", condizione: "in base alla scelta dei corsi e alla facolta" },
        { lingua: "Inglese", livello: "B2.1", condizione: "in base alla scelta dei corsi e alla facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    linkSito: "http://www.rwth-aachen.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70689."
  },
  {
    id: "sap-mfn-potsdam-2",
    universita: "UNIVERSITAT POTSDAM",
    citta: "Potsdam",
    paese: "Germania",
    codiceErasmus: "D  POTSDAM01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70723. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-gotting-2",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70703. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-gotting-3",
    universita: "GEORG-AUGUST-UNIVERSITÄT GÖTTINGEN",
    citta: "Gotting",
    paese: "Germania",
    codiceErasmus: "D  GOTTING01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70704. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-potsdam-3",
    universita: "UNIVERSITAT POTSDAM",
    citta: "Potsdam",
    paese: "Germania",
    codiceErasmus: "D  POTSDAM01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70725. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-ulm",
    universita: "Ulm UNIVERSITAET",
    citta: "Ulm",
    paese: "Germania",
    codiceErasmus: "D  ULM01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-ulm.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70731."
  },
  {
    id: "sap-mfn-ulm-2",
    universita: "Ulm UNIVERSITAET",
    citta: "Ulm",
    paese: "Germania",
    codiceErasmus: "D  ULM01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-ulm.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70730."
  },
  {
    id: "sap-mfn-heidelb-2",
    universita: "RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG",
    citta: "Heidelb",
    paese: "Germania",
    codiceErasmus: "D  HEIDELB01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70707."
  },
  {
    id: "sap-mfn-leipzig",
    universita: "UNIVERSITÄT LEIPZIG",
    citta: "Leipzig",
    paese: "Germania",
    codiceErasmus: "D  LEIPZIG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70711."
  },
  {
    id: "sap-mfn-bremen-3",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70698."
  },
  {
    id: "sap-mfn-siegen-2",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70729."
  },
  {
    id: "sap-mfn-bremen-4",
    universita: "UNIVERSITÄT BREMEN",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "Marianna Villano",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70699."
  },
  {
    id: "sap-mfn-lunebur",
    universita: "LEUPHANA UNIVERSITÄT LÜNEBURG",
    citta: "Lunebur",
    paese: "Germania",
    codiceErasmus: "D  LUNEBUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    linkSito: "http://www.leuphana.de/en/services/io.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70712. || Scadenze: Leuphana Fact Sheet 2025/26, nomination 15/5 e 15/11, application 15/7 e 15/1 || Lingua: B2 inglese per corsi in inglese, B1 tedesco per corsi in tedesco"
  },
  {
    id: "sap-mfn-konstan",
    universita: "UNIVERSITÄT KONSTANZ",
    citta: "Konstan",
    paese: "Germania",
    codiceErasmus: "D  KONSTAN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Alessandro Alla",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70710."
  },
  {
    id: "sap-mfn-bonn",
    universita: "RHEINISCHE FRIEDRICH-WILHELMS- UNIVERSITÄT BONN",
    citta: "Bonn",
    paese: "Germania",
    codiceErasmus: "D  BONN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Giada Basile",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-bonn.de/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70695."
  },
  {
    id: "sap-mfn-siegen-3",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Chiara Mozzetta",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70727."
  },
  {
    id: "sap-mfn-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70193."
  },
  {
    id: "sap-mfn-athine-2",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70195."
  },
  {
    id: "sap-mfn-athine-3",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70194."
  },
  {
    id: "sap-mfn-athine-4",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70196."
  },
  {
    id: "sap-mfn-athine-5",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70197."
  },
  {
    id: "sap-mfn-patra",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70837. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-mfn-kritis",
    universita: "ELLINIKO MESOGEIAKO PANEPISTIMIO",
    citta: "Kritis",
    paese: "Grecia",
    codiceErasmus: "G  KRITIS05",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://hmu.gr//",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70836."
  },
  {
    id: "sap-mfn-athine-6",
    universita: "ETHNIKO METSOVIO POLYTECHNIO",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Cesare Bini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ntua.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70835."
  },
  {
    id: "sap-mfn-thessal",
    universita: "ARISTOTELIOU PANEPISTIMIO THESSALONIKIS",
    citta: "Thessal",
    paese: "Grecia",
    codiceErasmus: "G  THESSAL01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Laura Parducci",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.auth.gr/en/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70838."
  },
  {
    id: "sap-mfn-akureyr",
    universita: "HÁSKÓLINN Á AKUREYRI",
    citta: "Akureyr",
    paese: "Islanda",
    codiceErasmus: "IS AKUREYR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "08", nome: "Agriculture, forestry, fisheries and veterinary" }],
    coordinatoreCf: "Federico BORDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.unak.is/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70840."
  },
  {
    id: "sap-mfn-vilnius",
    universita: "VILNIUS UNIVERSITY",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giovanna Serino",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70842. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-kaunas",
    universita: "KAUNO KOLEGIJA",
    citta: "Kaunas",
    paese: "Lituania",
    codiceErasmus: "LT KAUNAS08",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.kaunokolegija.lt/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70841."
  },
  {
    id: "sap-mfn-bodo",
    universita: "Nord universitet- Nord University [former UNIVERSITETET I NORDLAND]",
    citta: "Bodo",
    paese: "Norvegia",
    codiceErasmus: "N  BODO04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.nord.no/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70844."
  },
  {
    id: "sap-mfn-bodo-2",
    universita: "Nord universitet- Nord University [former UNIVERSITETET I NORDLAND]",
    citta: "Bodo",
    paese: "Norvegia",
    codiceErasmus: "N  BODO04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" },
      { numero: 5, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.nord.no/en",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70845."
  },
  {
    id: "sap-mfn-trondhe",
    universita: "NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET",
    citta: "Trondhe",
    paese: "Norvegia",
    codiceErasmus: "N  TRONDHE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 (preferibilmente C1); nessun certificato richiesto per gli exchange (la nomination dell'ateneo di provenienza e sufficiente)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale, UE/SEE)", periodo: "entro 15 aprile" },
        { cosa: "Application (sem. autunnale, UE/SEE)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 15 settembre" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "http://www.ntnu.no",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70846."
  },
  {
    id: "sap-mfn-trondhe-2",
    universita: "NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET",
    citta: "Trondhe",
    paese: "Norvegia",
    codiceErasmus: "N  TRONDHE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "073", nome: "Architecture and construction" }],
    coordinatoreCf: "Anna Maria Siani",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 (preferibilmente C1); nessun certificato richiesto per gli exchange (la nomination dell'ateneo di provenienza e sufficiente)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale, UE/SEE)", periodo: "entro 15 aprile" },
        { cosa: "Application (sem. autunnale, UE/SEE)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 15 settembre" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "http://www.ntnu.no",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70851."
  },
  {
    id: "sap-mfn-trondhe-3",
    universita: "NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET",
    citta: "Trondhe",
    paese: "Norvegia",
    codiceErasmus: "N  TRONDHE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "053", nome: "Physical sciences" }],
    coordinatoreCf: "Anna Maria Siani",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 (preferibilmente C1); nessun certificato richiesto per gli exchange (la nomination dell'ateneo di provenienza e sufficiente)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale, UE/SEE)", periodo: "entro 15 aprile" },
        { cosa: "Application (sem. autunnale, UE/SEE)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 15 settembre" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "http://www.ntnu.no",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70848."
  },
  {
    id: "sap-mfn-trondhe-4",
    universita: "NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET",
    citta: "Trondhe",
    paese: "Norvegia",
    codiceErasmus: "N  TRONDHE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "071", nome: "Engineering and engineering trades" }],
    coordinatoreCf: "Anna Maria Siani",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "minimo B2 (preferibilmente C1); nessun certificato richiesto per gli exchange (la nomination dell'ateneo di provenienza e sufficiente)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. autunnale, UE/SEE)", periodo: "entro 15 aprile" },
        { cosa: "Application (sem. autunnale, UE/SEE)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (sem. primaverile)", periodo: "entro 15 settembre" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "http://www.ntnu.no",
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70849."
  },
  {
    id: "sap-mfn-breda",
    universita: "STICHTING AVANS",
    citta: "Breda",
    paese: "Olanda",
    codiceErasmus: "NL BREDA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.avans.nl/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70855."
  },
  {
    id: "sap-mfn-amsterd",
    universita: "UNIVERSITEIT VAN AMSTERDAM",
    citta: "Amsterd",
    paese: "Olanda",
    codiceErasmus: "NL AMSTERD01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "test obbligatorio: TOEFL iBT 92 (min 22/sezione) / IELTS 6.5 (min 6.0/sezione) / Cambridge 180" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile 2026" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (1 semestre)", periodo: "entro 22 aprile 2026" },
        { cosa: "Application (2 semestre)", periodo: "entro 8 ottobre 2026" }
      ],
    linkSito: "http://www.uva.nl/english/index.html",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70852."
  },
  {
    id: "sap-mfn-delft",
    universita: "TECHNISCHE UNIVERSITEIT DELFT",
    citta: "Delft",
    paese: "Olanda",
    codiceErasmus: "NL DELFT01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.TUDELFT.NL",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70856."
  },
  {
    id: "sap-mfn-breda-2",
    universita: "STICHTING AVANS",
    citta: "Breda",
    paese: "Olanda",
    codiceErasmus: "NL BREDA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.avans.nl/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70854."
  },
  {
    id: "sap-mfn-warszaw",
    universita: "POLITECHNIKA WARSZAWSKA",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0730", nome: "Architecture and construction not further defined" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.arch.pw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70881."
  },
  {
    id: "sap-mfn-warszaw-2",
    universita: "POLITECHNIKA WARSZAWSKA",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0530", nome: "Physical sciences, not further defined" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.arch.pw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70879."
  },
  {
    id: "sap-mfn-wroclaw",
    universita: "UNIWERSYTET WROCLAWSKI",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MARTA DELLA SETA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni.wroc.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70882."
  },
  {
    id: "sap-mfn-warszaw-3",
    universita: "POLITECHNIKA WARSZAWSKA",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.arch.pw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70880."
  },
  {
    id: "sap-mfn-bialyst",
    universita: "UNIWERSYTET W BIALYMSTOKU",
    citta: "Bialyst",
    paese: "Polonia",
    codiceErasmus: "PL BIALYST04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uwb.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70873."
  },
  {
    id: "sap-mfn-poznan",
    universita: "UNIWERSYTET IM. ADAMA MICKIEWICZ",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 7, mesi: 6, livello: "L", note: "" },
      { numero: 7, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 7 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70877."
  },
  {
    id: "sap-mfn-warszaw-4",
    universita: "POLITECHNIKA WARSZAWSKA",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.arch.pw.edu.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70878."
  },
  {
    id: "sap-mfn-lublin",
    universita: "Uniwersytet Przyrodniczy w Lublinie",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.up.lublin.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70875."
  },
  {
    id: "sap-mfn-krakow",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70874."
  },
  {
    id: "sap-mfn-lublin-2",
    universita: "Uniwersytet Przyrodniczy w Lublinie",
    citta: "Lublin",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.up.lublin.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70876."
  },
  {
    id: "sap-mfn-porto",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70869. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-porto-2",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70870. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-evora",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70862."
  },
  {
    id: "sap-mfn-porto-3",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "MAURIZIO FALCONE",
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70872. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-evora-2",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "05", nome: "Natural sciences, mathematics and statistics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70858."
  },
  {
    id: "sap-mfn-evora-3",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70864."
  },
  {
    id: "sap-mfn-lisboa",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "054", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70867. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-evora-4",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70863."
  },
  {
    id: "sap-mfn-evora-5",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70861."
  },
  {
    id: "sap-mfn-evora-6",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Chiara Mozzetta",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70860."
  },
  {
    id: "sap-mfn-evora-7",
    universita: "UNIVERSIDADE DE EVORA",
    citta: "Evora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Chiara Mozzetta",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UEVORA.PT",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70859."
  },
  {
    id: "sap-mfn-glasgow",
    universita: "THE UNIVERSITY OF GLASGOW",
    citta: "Glasgow",
    paese: "Regno Unito",
    codiceErasmus: "UK GLASGOW01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.gla.ac.uk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70212."
  },
  {
    id: "sap-mfn-ceske",
    universita: "JIHOCESKÁ UNIVERZITA V CESKYCH BUDEJOVICICH",
    citta: "Ceske",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ CESKE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "LAURA SADORI",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.jcu.cz",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70686."
  },
  {
    id: "sap-mfn-praha",
    universita: "UNIVERZITA KARLOVA -CHARLES UNIVERSITY",
    citta: "Praha",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ PRAHA07",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MARIO GAETA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70688. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-ostrava",
    universita: "VYSOKA SKOLA BANSKA - TECHNICKA UNIVERZITA OSTRAVA",
    citta: "Ostrava",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OSTRAVA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Vincenzo Stagno",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70687."
  },
  {
    id: "sap-mfn-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "ISABELLA PEZZINI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70202. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "ISABELLA PEZZINI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70203. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bucures-3",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "ISABELLA PEZZINI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70204. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bucures-4",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70198. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bucures-5",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 1. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70199. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bucures-6",
    universita: "UNIVERSITATEA DE STIINTE AGRONOMICE SI MEDICINA VETERINARA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES12",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.usamv.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70883."
  },
  {
    id: "sap-mfn-kosice",
    universita: "UNIVERZITA PAVLA JOZEFA SAFARIKA  V KOSICIACH",
    citta: "Kosice",
    paese: "Slovacchia",
    codiceErasmus: "SK KOSICE02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upjs.sk",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70886."
  },
  {
    id: "sap-mfn-ljublja",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70885."
  },
  {
    id: "sap-mfn-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "053", nome: "Physical sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70752. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-mfn-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70766. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-pamplon",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70770."
  },
  {
    id: "sap-mfn-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "MARIA EGLE DE STEFANO",
    posti: [
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70765. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-granada-2",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "MARTA DELLA SETA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70754. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-mfn-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical engineering and processes" }],
    coordinatoreCf: "LUCIANO GALANTINI",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70778. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-santiag-2",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "LUCIANO GALANTINI",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70772. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-santiag-3",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "LUCIANO GALANTINI",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70773. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-madrid",
    universita: "UNIVERSIDAD POLITECNICA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID05",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "GIANLUCA PANATI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.upm.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70760."
  },
  {
    id: "sap-mfn-barcelo",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "LAURA SADORI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70739. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70746."
  },
  {
    id: "sap-mfn-madrid-2",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0721", nome: "Food processing" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 5. Accordo ERA71548. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-madrid-3",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA71541. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-madrid-4",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71544. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-valenci",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70784. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-cordoba",
    universita: "UNIVERSIDAD DE CÓRDOBA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 aprile al 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 30 novembre 2026" }
      ],
    linkSito: "http://www.uco.es/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70749. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-mfn-granada-3",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70751. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-mfn-madrid-5",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA71542. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-madrid-6",
    universita: "UNIVERSIDAD AUTÓNOMA DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Donatella Magri",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71547. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-barcelo-2",
    universita: "UNIVERSIDAD POLITECNICA DE CATALUNIA BARCELONATECH",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upc.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70743."
  },
  {
    id: "sap-mfn-oviedo-2",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
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
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA70768. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-granada-4",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70755. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-mfn-almeria",
    universita: "UNIVERSIDAD DE ALMERIA",
    citta: "Almeria",
    paese: "Spagna",
    codiceErasmus: "E  ALMERIA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "HTTP://WWW.UAL.ES",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70734."
  },
  {
    id: "sap-mfn-santiag-4",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70776. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-santiag-5",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70777. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-valenci-2",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Andrea Davini",
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70788. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-santiag-6",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Federico BORDI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70774. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-santiag-7",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Federico BORDI",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70775. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-valenci-3",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70786. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-madrid-7",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70757."
  },
  {
    id: "sap-mfn-pamplon-2",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70771."
  },
  {
    id: "sap-mfn-malaga",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70763. || Scadenze: UMA fact sheet 2025/26, nomination via Algoria; application operativa tramite selezione insegnamenti in Algoria || Lingua: spagnolo B1 raccomandato, certificato non richiesto || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-valenci-4",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 5. Accordo ERA70785. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-zaragoz",
    universita: "UNIVERSIDAD DE ZARAGOZA",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "053", nome: "Physical sciences" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70792. || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
  },
  {
    id: "sap-mfn-barcelo-3",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70741. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-bilbao",
    universita: "UNIVERSIDAD DEL PAÍS VASCO",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E  BILBAO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Luca FANELLI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70744. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-oviedo-3",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Antonio Davide POLOSA",
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
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA70767. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-valenci-5",
    universita: "UNIVERSIDAD POLITECNICA DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.upv.es",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70789."
  },
  {
    id: "sap-mfn-barcelo-4",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Daniele PORRETTA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70740. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-barcelo-5",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Marco PETITTA",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70738. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-tenerif",
    universita: "UNIVERSIDAD DE LA LAGUNA",
    citta: "Tenerif",
    paese: "Spagna",
    codiceErasmus: "E  TENERIF01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Alessandra Gentili",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70780."
  },
  {
    id: "sap-mfn-malaga-2",
    universita: "UNIVERSIDAD DE MÁLAGA",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Corrado Mascia",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70764. || Scadenze: UMA fact sheet 2025/26, nomination via Algoria; application operativa tramite selezione insegnamenti in Algoria || Lingua: spagnolo B1 raccomandato, certificato non richiesto || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-valenci-6",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70783. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-valenci-7",
    universita: "UNIVERSIDAD DE VALENCIA",
    citta: "Valenci",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70782. || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "sap-mfn-pamplon-3",
    universita: "UNIVERSIDAD DE NAVARRA",
    citta: "Pamplon",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unav.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70769."
  },
  {
    id: "sap-mfn-madrid-8",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70756."
  },
  {
    id: "sap-mfn-barcelo-6",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0522", nome: "Natural environments and wildlife" }],
    coordinatoreCf: "Giovanna Serino",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70736. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-tenerif-2",
    universita: "UNIVERSIDAD DE LA LAGUNA",
    citta: "Tenerif",
    paese: "Spagna",
    codiceErasmus: "E  TENERIF01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70781."
  },
  {
    id: "sap-mfn-girona",
    universita: "UNIVERSITAT DE GIRONA",
    citta: "Girona",
    paese: "Spagna",
    codiceErasmus: "E  GIRONA02",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Marianna Villano",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.udg.edu",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70750."
  },
  {
    id: "sap-mfn-vic",
    universita: "UNIVERSITAT DE VIC - FUNDACIO UNIVERSITARIA BALMES",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "E  VIC01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uvic.cat/en",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70791."
  },
  {
    id: "sap-mfn-castell",
    universita: "UNIVERSIDAD JAUME I DE CASTELLON",
    citta: "Castell",
    paese: "Spagna",
    codiceErasmus: "E  CASTELL01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Camilla Montesano",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70747."
  },
  {
    id: "sap-mfn-barcelo-7",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Paolo Lupattelli",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70737. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-mfn-vic-2",
    universita: "UNIVERSITAT DE VIC - FUNDACIO UNIVERSITARIA BALMES",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "E  VIC01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Chiara Mozzetta",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uvic.cat/en",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70790."
  },
  {
    id: "sap-mfn-stockho",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0110", nome: "Education, not further defined" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70216. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-2",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70220. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-3",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70219. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-4",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA70223. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-5",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70224. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-6",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" },
      { numero: 5, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Accordo ERA70225. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-7",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70226. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-8",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70227. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-stockho-9",
    universita: "STOCKHOLMS UNIVERSITET",
    citta: "Stockho",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics, not further defined" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA70230. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-lausann",
    universita: "UNIVERSITÉ  DE LAUSANNE",
    citta: "Lausann",
    paese: "Svizzera",
    codiceErasmus: "CH LAUSANN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "MARCO OLIVERIO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "in base alla lingua di insegnamento del corso frequentato" },
        { lingua: "Inglese", livello: "B2", condizione: "in base alla lingua di insegnamento del corso frequentato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination SEMP (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application SEMP (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination SEMP (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application SEMP (primavera)", periodo: "entro 31 ottobre 2026" }
      ],
    linkSito: "http://www.unil.ch/ri/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70214."
  },
  {
    id: "sap-mfn-lausann-2",
    universita: "UNIVERSITÉ  DE LAUSANNE",
    citta: "Lausann",
    paese: "Svizzera",
    codiceErasmus: "CH LAUSANN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Donatella Magri",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "in base alla lingua di insegnamento del corso frequentato" },
        { lingua: "Inglese", livello: "B2", condizione: "in base alla lingua di insegnamento del corso frequentato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination SEMP (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application SEMP (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination SEMP (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application SEMP (primavera)", periodo: "entro 31 ottobre 2026" }
      ],
    linkSito: "http://www.unil.ch/ri/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70215."
  },
  {
    id: "sap-mfn-zurich",
    universita: "UNIVERSITÄT ZURICH",
    citta: "Zurich",
    paese: "Svizzera",
    codiceErasmus: "CH ZURICH01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "PATRIZIO DIMITRI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70684."
  },
  {
    id: "sap-mfn-zurich-2",
    universita: "EIDGENOSSISCHE TECHNISCHE HOCHSCHULE ZURICH",
    citta: "Zurich",
    paese: "Svizzera",
    codiceErasmus: "CH ZURICH07",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Domenico FIORENZA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://ethz.ch/de.html",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70685."
  },
  {
    id: "sap-mfn-geneve",
    universita: "UNIVERSITE' DE GENEVE",
    citta: "Geneve",
    paese: "Svizzera",
    codiceErasmus: "CH GENEVE01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "RICCARDO MAZZARELLO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registrazione (autunno)", periodo: "entro 10 aprile" },
        { cosa: "Application/registrazione (primavera)", periodo: "entro 10 settembre" }
      ],
    linkSito: "https://www.unige.ch/international/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70682."
  },
  {
    id: "sap-mfn-ankara",
    universita: "ORTA DOGU TEKNIK UNIVERSITESI (MIDDLE EAST TECHNICAL UNIVERSITY)",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA04",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "SABINA BIGI",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per seguire corsi a METU" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 31 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    linkSito: "https://www.metu.edu.tr/tr",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70888."
  },
  {
    id: "sap-mfn-ankara-2",
    universita: "HACETTEPE ÜNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0532", nome: "Earth sciences" }],
    coordinatoreCf: "Carlo Doglioni",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70887. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-istanbu",
    universita: "ISTINYE UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU61",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.istinye.edu.tr/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA71490."
  },
  {
    id: "sap-mfn-burdur",
    universita: "BURDUR MEHMET AKIF ERSOY UNIVERSITY\tISTIKLAL YERLESKESI",
    citta: "Burdur",
    paese: "Turchia",
    codiceErasmus: "TR BURDUR01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://mehmetakif.edu.tr/en",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70890."
  },
  {
    id: "sap-mfn-istanbu-2",
    universita: "Yildiz Technical University / Yildiz Teknik Üniversitesi (YTU)",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU07",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
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
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70894. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-mfn-izmir",
    universita: "IZMIR INSTITUTE OF TECHNOLOGY",
    citta: "Izmir",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR03",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Ilaria FRATODDI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.iyte.edu.tr/AnaSayfa.aspx?d=ENG",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70897."
  },
  {
    id: "sap-mfn-istanbu-3",
    universita: "MARMARA UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU05",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Corrado Mascia",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://bsy.marmara.edu.tr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70892."
  },
  {
    id: "sap-mfn-istanbu-4",
    universita: "MARMARA UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU05",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0541", nome: "Mathematics" }],
    coordinatoreCf: "Corrado Mascia",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://bsy.marmara.edu.tr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA70893."
  },
  {
    id: "sap-mfn-bingol",
    universita: "BINGÖL ÜNIVERSITESI",
    citta: "Bingol",
    paese: "Turchia",
    codiceErasmus: "TR BINGOL01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Marco Fidaleo",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.bingol.edu.tr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70889."
  },
  {
    id: "sap-mfn-istanbu-5",
    universita: "Istanbul Health and Technology University",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU70",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0511", nome: "Biology" }],
    coordinatoreCf: "Giovanna Serino",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.istun.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA70896."
  },
  {
    id: "sap-mfn-isparta",
    universita: "SULEYMAN DEMIREL UNIVERSITESI",
    citta: "Isparta",
    paese: "Turchia",
    codiceErasmus: "TR ISPARTA01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental sciences" }],
    coordinatoreCf: "Elisa Brasili",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://w3.sdu.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA70891."
  },
  {
    id: "sap-mfn-istanbu-6",
    universita: "ISTINYE UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU61",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0811", nome: "Crop and livestock production" }],
    coordinatoreCf: "Cesare Manetti",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.istinye.edu.tr/en",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70895."
  },
  {
    id: "sap-mfn-mersin",
    universita: "MERSIN UNIVERSITESI - MEU",
    citta: "Mersin",
    paese: "Turchia",
    codiceErasmus: "TR MERSIN01",
    dipartimentoCf: "Scienze matematiche, fisiche e naturali",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Alessandro Rosa",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.mersin.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA70898."
  }
];
