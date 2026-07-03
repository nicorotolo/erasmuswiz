// ============================================================
// METE ERASMUS — SAPIENZA · Facoltà di ARCHITETTURA
// ------------------------------------------------------------
// Fonte: database ufficiale "Go Erasmus+" Sapienza, filtro Facoltà =
//   Architettura (ambito=ARCHI). Bando Erasmus+ 2026/27.
//   https://accordi-didattica.web.uniroma1.it/goerasmus?ambito=ARCHI
//
// 2026-07-02: seed iniziale, 113 destinazioni su 118 righe reali del DB
// (12 pagine). 5 righe erano riservate esclusivamente a PhD/Specializzandi
// (nessun posto Laurea o Laurea Magistrale) e NON sono state modellate come
// mete separate, seguendo lo stesso criterio già usato per Giurisprudenza
// (il sito gestisce solo i livelli L e LM).
//
// Come in Medicina/Psicologia, il promotore NON è unico per tutta la Facoltà:
// ogni accordo ha il suo docente referente (coordinatoreCf).
//
// NOTA duplicati: alcuni atenei partner compaiono più volte come accordi
// SEPARATI (stesso ateneo, promotore/posti/livelli diversi). Modellati come
// mete distinte con suffisso -a/-b/-c su id e codiceErasmus.
//
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (tutti vuoti).
//
// ⚠️ codiceErasmus: chiave-join PROVVISORIA e sintetica (prefisso
//   "SAP-ARCHI-"). Il DB lista non espone il codice Erasmus ufficiale.
// ⚠️ città: per alcuni atenei multi-campus (es. Universidad de Castilla-La
//   Mancha, HES-SO) la città indicata è quella della sede principale/rete;
//   da verificare sulla scheda ufficiale se rilevante per lo studente.
// ============================================================

var METE = [
  {
    id: "sap-archi-innsbruck",
    universita: "Leopold-Franzens-Universität Innsbruck",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "SAP-ARCHI-INNSBRUCK",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "consigliato per seguire corsi in tedesco; il certificato non e' normalmente richiesto per incoming exchange" },
        { lingua: "Inglese", livello: "B2", condizione: "consigliato per seguire corsi in inglese; il certificato non e' normalmente richiesto per incoming exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-ulb-bxl",
    universita: "Université Libre de Bruxelles",
    citta: "Bruxelles",
    paese: "Belgio",
    codiceErasmus: "SAP-ARCHI-ULB-BXL",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 8, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 8. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-mons",
    universita: "University of Mons",
    citta: "Mons",
    paese: "Belgio",
    codiceErasmus: "SAP-ARCHI-MONS",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "conoscenza operativa della lingua di studio; la fonte indica minimo B1/B2 CEFR" },
        { lingua: "Inglese", livello: "B1", condizione: "conoscenza operativa della lingua di studio; la fonte indica minimo B1/B2 CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-uclouvain",
    universita: "Université Catholique de Louvain",
    citta: "Louvain-la-Neuve",
    paese: "Belgio",
    codiceErasmus: "SAP-ARCHI-UCLOUVAIN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Pisana Posocco",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi di Master in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre per studenti europei; entro 15 ottobre per non europei" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale."
  },
  {
    id: "sap-archi-liege",
    universita: "Université de Liège",
    citta: "Liegi",
    paese: "Belgio",
    codiceErasmus: "SAP-ARCHI-LIEGE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
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
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-kuleuven",
    universita: "Katholieke Universiteit Leuven",
    citta: "Lovanio",
    paese: "Belgio",
    codiceErasmus: "SAP-ARCHI-KULEUVEN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per Erasmus+; confermato dal coordinatore locale in nomination" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 1 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale."
  },
  {
    id: "sap-archi-uaceg-sofia",
    universita: "Universitet po Architectura, Stroitelstvo i Geodesia",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "SAP-ARCHI-UACEG-SOFIA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-archi-nicosia",
    universita: "Panepistimio Kyprou",
    citta: "Nicosia",
    paese: "Cipro",
    codiceErasmus: "SAP-ARCHI-NICOSIA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 20 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 20 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-zagabria-a",
    universita: "Sveučilište u Zagrebu",
    citta: "Zagabria",
    paese: "Croazia",
    codiceErasmus: "SAP-ARCHI-ZAGABRIA-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "alternativa per corsi in croato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Ulteriore accordo distinto con lo stesso ateneo (promotore Francesca Giofrè)."
  },
  {
    id: "sap-archi-zagabria-b",
    universita: "Sveučilište u Zagrebu",
    citta: "Zagabria",
    paese: "Croazia",
    codiceErasmus: "SAP-ARCHI-ZAGABRIA-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carlo Martino",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "alternativa per corsi in croato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Carlo Martino)."
  },
  {
    id: "sap-archi-taltech",
    universita: "Tallinna Tehnikaülikool",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "SAP-ARCHI-TALTECH",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-eka-tallinn",
    universita: "Eesti Kunstiakadeemia",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "SAP-ARCHI-EKA-TALLINN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination/Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-lille",
    universita: "Ecole d'Architecture de Lille et Régions Nord",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-LILLE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-montpellier",
    universita: "Ecole Nationale Supérieure d'Architecture de Montpellier",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-MONTPELLIER",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per seguire i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-saint-etienne",
    universita: "Ecole d'Architecture de Saint-Étienne",
    citta: "Saint-Étienne",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-SAINT-ETIENNE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto; corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-nantes-design",
    universita: "L'Ecole de Design Nantes Atlantique",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-NANTES-DESIGN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per international class e programmi Master internazionali insegnati in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-paris8",
    universita: "Université de Vincennes Saint-Denis (Paris VIII)",
    citta: "Saint-Denis (Parigi)",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-PARIS8",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/enrolment (autunno o anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application/enrolment (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-grenoble-a",
    universita: "Ecole d'Architecture de Grenoble",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-GRENOBLE-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "A2-B1", condizione: "raccomandato per studenti non francofoni" },
        { lingua: "Inglese", livello: "B2", condizione: "per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 1 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-gustave-eiffel",
    universita: "Université Gustave Eiffel",
    citta: "Champs-sur-Marne (Parigi)",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-GUSTAVE-EIFFEL",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo nella lingua di insegnamento per la maggior parte dei programmi" },
        { lingua: "Francese", livello: "B2", condizione: "per alcuni programmi o master in Urban Planning" },
        { lingua: "Inglese", livello: "C1", condizione: "per master in Urban Planning se i corsi scelti sono in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-lyon",
    universita: "Ecole Nationale Supérieure d'Architecture de Lyon",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-LYON",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "altamente raccomandato; certificazione ufficiale non richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-rouen",
    universita: "Ecole Nationale Supérieure d'Architecture de Normandie",
    citta: "Rouen",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-ROUEN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "necessario per la maggior parte dei corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-archi-paris-lavillette",
    universita: "Ecole Nationale Supérieure d'Architecture de Paris-La Villette",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-PARIS-LAVILLETTE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo fortemente raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 2 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 22 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 13 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-eavt-marne",
    universita: "Ecole d'Architecture de la Ville et des Territoires à Marne-la-Vallée",
    citta: "Marne-la-Vallée (Parigi)",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-EAVT-MARNE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "raccomandato per corsi di Bachelor" },
        { lingua: "Francese", livello: "B2-C1", condizione: "raccomandato per corsi di Master" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 1 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-rennes",
    universita: "Ecole Nationale Supérieure d'Architecture de Bretagne",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-RENNES",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello fortemente raccomandato per corsi insegnati in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-nancy",
    universita: "Ecole Nationale Supérieure d'Architecture de Nancy",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-NANCY",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto per studenti in mobilita entrante" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 2 maggio 2025" },
        { cosa: "Application (primavera)", periodo: "entro 9 ottobre 2025" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-nantes-archi",
    universita: "Ecole Nationale Supérieure d'Architecture de Nantes",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-NANTES-ARCHI",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "certificazione raccomandata per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registrazione (autunno o anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application/registrazione (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-grenoble-b",
    universita: "Ecole d'Architecture de Grenoble",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-GRENOBLE-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per mobilita incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno o anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Barbara Pizzo)."
  },
  {
    id: "sap-archi-sorbonne",
    universita: "Sorbonne Université",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-SORBONNE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-versailles-paysage",
    universita: "Ecole Nationale Supérieure de Paysage de Versailles",
    citta: "Versailles",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-VERSAILLES-PAYSAGE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per Bachelor" },
        { lingua: "Francese", livello: "B1", condizione: "per Master" },
        { lingua: "Inglese", livello: "B1", condizione: "per Master e International Master MIV-TTT" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 settembre" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 26 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 27 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-toulouse",
    universita: "Ecole Nationale Supérieure d'Architecture de Toulouse",
    citta: "Tolosa",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-TOULOUSE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio 2025" },
        { cosa: "Application (autunno)", periodo: "entro 10 giugno 2025" },
        { cosa: "Application (primavera)", periodo: "entro 20 ottobre 2025" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-marseille",
    universita: "Ecole Nationale Supérieure d'Architecture de Marseille-Luminy",
    citta: "Marsiglia",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-MARSEILLE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi BA" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi MA" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 7 dicembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-versailles-archi",
    universita: "Ecole d'Architecture de Versailles",
    citta: "Versailles",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-VERSAILLES-ARCHI",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per Bachelor" },
        { lingua: "Francese", livello: "B1", condizione: "per Master" },
        { lingua: "Inglese", livello: "B1", condizione: "per Master e International master MIV-TTT" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 26 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 27 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-bordeaux-paysage",
    universita: "Ecole Nationale Supérieure d'Architecture et de Paysage de Bordeaux",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "SAP-ARCHI-BORDEAUX-PAYSAGE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "tutti i corsi sono in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-uni-stuttgart",
    universita: "Universität Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-UNI-STUTTGART",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "C1", condizione: "per corsi solo in tedesco" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi solo in tedesco; B1 o B2 accettati" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi solo in tedesco; B1 o B2 accettati" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi solo in inglese o tesi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application/registrazione Mobility-Online (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application C@MPUS (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application/registrazione Mobility-Online (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application C@MPUS (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-aachen",
    universita: "RWTH Aachen University",
    citta: "Aquisgrana",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-AACHEN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Tedesco", livello: "B2.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Inglese", livello: "B1.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Inglese", livello: "B2.1", condizione: "in base alla scelta di corsi e facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 31 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-koln-a",
    universita: "Fachhochschule Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-KOLN-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per la lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Battisti)."
  },
  {
    id: "sap-archi-weimar",
    universita: "Bauhaus-Universität Weimar",
    citta: "Weimar",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-WEIMAR",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "corso intensivo obbligatorio se sotto B1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hs-darmstadt",
    universita: "Hochschule Darmstadt",
    citta: "Darmstadt",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-HS-DARMSTADT",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-kassel-a",
    universita: "Universität Kassel",
    citta: "Kassel",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-KASSEL-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per candidatura incoming alla Faculty 06 ASL" },
        { lingua: "Inglese", livello: "B1", condizione: "se il livello di tedesco e' solo A2" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Roberto Cherubini). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-tu-darmstadt",
    universita: "Technische Universität Darmstadt",
    citta: "Darmstadt",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-TU-DARMSTADT",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A2", condizione: "per corsi in tedesco nel programma Erasmus+; corso intensivo obbligatorio se livello A2" },
        { lingua: "Inglese", livello: "B2", condizione: "per seguire solo corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-bremen",
    universita: "Hochschule Bremen",
    citta: "Brema",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-BREMEN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B1.2", condizione: "per studiare con studenti locali in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 gennaio" },
        { cosa: "Application (autunno)", periodo: "1 marzo - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 31 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-kassel-b",
    universita: "Universität Kassel",
    citta: "Kassel",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-KASSEL-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-hft-stuttgart-a",
    universita: "Hochschule für Technik Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-HFT-STUTTGART-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A1", condizione: "per corsi nei programmi di Architecture, Interior Architecture e General Management; frequenza di un corso di tedesco richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-mainz",
    universita: "Hochschule Mainz",
    citta: "Magonza",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-MAINZ",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio De Cesaris",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per incoming School of Design" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale."
  },
  {
    id: "sap-archi-freising",
    universita: "Hochschule Weihenstephan-Triesdorf",
    citta: "Freising",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-FREISING",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Lingua di insegnamento", livello: "B1", condizione: "per la lingua dei corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "15 maggio - 15 giugno per il semestre invernale" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 1 dicembre per il semestre estivo" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-cottbus",
    universita: "Brandenburgische Technische Universität Cottbus-Senftenberg",
    citta: "Cottbus",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-COTTBUS",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hildesheim",
    universita: "HAWK Hochschule Hildesheim",
    citta: "Hildesheim",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-HILDESHEIM",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-hannover",
    universita: "Gottfried Wilhelm Leibniz Universität Hannover",
    citta: "Hannover",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-HANNOVER",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi esclusivamente in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi esclusivamente in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-frankfurt",
    universita: "Frankfurt University of Applied Sciences",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-FRANKFURT",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-karlsruhe",
    universita: "Karlsruhe Institute of Technology",
    citta: "Karlsruhe",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-KARLSRUHE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per soli corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per soli corsi in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco e inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in tedesco e inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hft-stuttgart-b",
    universita: "Hochschule für Technik Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-HFT-STUTTGART-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Alfonso Ippolito). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-koln-b",
    universita: "Fachhochschule Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-KOLN-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per la maggioranza dei corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista)."
  },
  {
    id: "sap-archi-tum-a",
    universita: "Technische Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-TUM-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti, Eliana Cangelli",
    posti: [
      { numero: 4, mesi: 12, livello: "L", note: "" },
      { numero: 4, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" },
        { lingua: "Tedesco", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta marzo a 30 aprile" },
        { cosa: "Application (autunno)", periodo: "da meta marzo a 10 maggio" },
        { cosa: "Nomination (primavera)", periodo: "da meta settembre a 17 ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta settembre a 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Battisti, Eliana Cangelli)."
  },
  {
    id: "sap-archi-tum-b",
    universita: "Technische Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-TUM-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Benedetta Di Donato",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" },
        { lingua: "Tedesco", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta marzo a 30 aprile" },
        { cosa: "Application (autunno)", periodo: "da meta marzo a 10 maggio" },
        { cosa: "Nomination (primavera)", periodo: "da meta settembre a 17 ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta settembre a 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Benedetta Di Donato)."
  },
  {
    id: "sap-archi-braunschweig",
    universita: "Technische Universität Braunschweig",
    citta: "Braunschweig",
    paese: "Germania",
    codiceErasmus: "SAP-ARCHI-BRAUNSCHWEIG",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Balducci",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-hvanneyri",
    universita: "Landbúnaðarháskóli Íslands",
    citta: "Hvanneyri",
    paese: "Islanda",
    codiceErasmus: "SAP-ARCHI-HVANNEYRI",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-riga",
    universita: "Rīgas Tehniskā Universitāte",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "SAP-ARCHI-RIGA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-vilnius",
    universita: "Vilniaus Gedimino Technikos Universitetas",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "SAP-ARCHI-VILNIUS",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Donatella Scatena",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-malta",
    universita: "University of Malta",
    citta: "Msida",
    paese: "Malta",
    codiceErasmus: "SAP-ARCHI-MALTA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi del Department of English" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale."
  },
  {
    id: "sap-archi-zwolle",
    universita: "Christelijke Hogeschool Windesheim",
    citta: "Zwolle",
    paese: "Olanda",
    codiceErasmus: "SAP-ARCHI-ZWOLLE",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi exchange in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-wageningen",
    universita: "Landbouwuniversiteit Wageningen",
    citta: "Wageningen",
    paese: "Olanda",
    codiceErasmus: "SAP-ARCHI-WAGENINGEN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, studenti non-UE)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno, studenti non-UE)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (autunno, studenti UE/EFTA)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno, studenti UE/EFTA)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera, studenti non-UE)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera, studenti non-UE)", periodo: "entro 1 ottobre" },
        { cosa: "Nomination (primavera, studenti UE/EFTA)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera, studenti UE/EFTA)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-poznan",
    universita: "Politechnika Poznańska",
    citta: "Poznań",
    paese: "Polonia",
    codiceErasmus: "SAP-ARCHI-POZNAN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per mobilita exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-pw-warszawa",
    universita: "Politechnika Warszawska",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "SAP-ARCHI-PW-WARSZAWA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "con certificato internazionale o dell'universita di origine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "4-31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "2-30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-lublin",
    universita: "Politechnika Lubelska",
    citta: "Lublino",
    paese: "Polonia",
    codiceErasmus: "SAP-ARCHI-LUBLIN",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Davide Benarnardini",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "minimo per studenti Erasmus+ exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-covilha",
    universita: "Universidade da Beira Interior",
    citta: "Covilhã",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-COVILHA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto dall'Universidade da Beira Interior" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-viana-castelo",
    universita: "Instituto Politécnico de Viana do Castelo",
    citta: "Viana do Castelo",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-VIANA-CASTELO",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-archi-madeira",
    universita: "Universidade da Madeira",
    citta: "Funchal",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-MADEIRA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-porto-a",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-PORTO-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Fabio Quici). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-evora",
    universita: "Universidade de Évora",
    citta: "Évora",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-EVORA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-porto-b",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-PORTO-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Romeo Di Pietro). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-lusiada-lisboa",
    universita: "Universidade Lusíada",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-LUSIADA-LISBOA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Massimo Zammerini",
    posti: [
      { numero: 5, mesi: 12, livello: "L", note: "" },
      { numero: 5, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "raccomandato per lezioni e valutazioni in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "31 maggio - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "31 ottobre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-aveiro",
    universita: "Universidade de Aveiro",
    citta: "Aveiro",
    paese: "Portogallo",
    codiceErasmus: "SAP-ARCHI-AVEIRO",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-timisoara-a",
    universita: "Universitatea Politehnica din Timișoara",
    citta: "Timișoara",
    paese: "Romania",
    codiceErasmus: "SAP-ARCHI-TIMISOARA-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per programmi/corsi disponibili in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per programmi disponibili in tedesco" },
        { lingua: "Rumeno", livello: "B1", condizione: "per corsi in rumeno" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 dicembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 10 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-timisoara-b",
    universita: "Universitatea Politehnica din Timișoara",
    citta: "Timișoara",
    paese: "Romania",
    codiceErasmus: "SAP-ARCHI-TIMISOARA-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Daniela Esposito",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per programmi/corsi disponibili in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per programmi disponibili in tedesco" },
        { lingua: "Rumeno", livello: "B1", condizione: "per corsi in rumeno" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 dicembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 10 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Daniela Esposito). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-ion-mincu-bucarest",
    universita: "Universitatea de Arhitectură și Urbanism \"Ion Mincu\"",
    citta: "Bucarest",
    paese: "Romania",
    codiceErasmus: "SAP-ARCHI-ION-MINCU-BUCAREST",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi/esami in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-cluj-napoca",
    universita: "Universitatea Tehnică din Cluj-Napoca",
    citta: "Cluj-Napoca",
    paese: "Romania",
    codiceErasmus: "SAP-ARCHI-CLUJ-NAPOCA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Augusto Roca De Amicis",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-stu-bratislava-a",
    universita: "Slovenská Technická Univerzita v Bratislave",
    citta: "Bratislava",
    paese: "Slovacchia",
    codiceErasmus: "SAP-ARCHI-STU-BRATISLAVA-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Capanna). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-stu-bratislava-b",
    universita: "Slovenská Technická Univerzita v Bratislave",
    citta: "Bratislava",
    paese: "Slovacchia",
    codiceErasmus: "SAP-ARCHI-STU-BRATISLAVA-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carmela Mariano",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Carmela Mariano). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-ljubljana",
    universita: "Univerza v Ljubljani",
    citta: "Lubiana",
    paese: "Slovenia",
    codiceErasmus: "SAP-ARCHI-LJUBLJANA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Sloveno o inglese", livello: "B2", condizione: "per studiare presso l'ateneo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-alcala",
    universita: "Universidad de Alcalá",
    citta: "Alcalá de Henares",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-ALCALA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "requisito standard per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-ucam-murcia",
    universita: "Universidad Católica San Antonio de Murcia",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UCAM-MURCIA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "A2", condizione: "raccomandato per corsi teorici, corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 12 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-uc-valencia",
    universita: "Universidad Católica de Valencia \"San Vicente Mártir\"",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UC-VALENCIA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile-15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre-31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-ucjc-madrid",
    universita: "Universidad Camilo José Cela",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UCJC-MADRID",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-upv-valencia-a",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UPV-VALENCIA-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi della laurea in Technical Architecture" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi dei master in Building Constructions e Building Rehabilitation and Sustainability" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-upv-valencia-b",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UPV-VALENCIA-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi della laurea in Technical Architecture" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi dei master in Building Constructions e Building Rehabilitation and Sustainability" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-ufv-madrid",
    universita: "Universidad Francisco de Vitoria",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UFV-MADRID",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio De Cesaris",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "lingua di insegnamento principale; B2 consigliato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "20 aprile - 22 maggio 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "22 aprile - 29 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "21 settembre - 24 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "21 settembre - 30 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-unav-pamplona",
    universita: "Universidad de Navarra",
    citta: "Pamplona",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UNAV-PAMPLONA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo 2026" },
        { cosa: "Application (autunno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-upct-cartagena",
    universita: "Universidad Politécnica de Cartagena",
    citta: "Cartagena",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UPCT-CARTAGENA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per seguire corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per seguire corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-coruna",
    universita: "Universidad de La Coruña",
    citta: "La Coruña",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-CORUNA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; il certificato non e' richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-upv-valencia-c",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UPV-VALENCIA-C",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Emanuela Chiavoni",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "nella maggior parte dei casi per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "nella maggior parte dei casi per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 giugno - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Emanuela Chiavoni)."
  },
  {
    id: "sap-archi-girona",
    universita: "Universitat de Girona",
    citta: "Girona",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-GIRONA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Pisana Posocco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-zaragoza",
    universita: "Universidad de Zaragoza",
    citta: "Saragozza",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-ZARAGOZA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Simona Salvo",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 29 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 23 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "16 febbraio - 19 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 6 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-valladolid",
    universita: "Universidad de Valladolid",
    citta: "Valladolid",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-VALLADOLID",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 9, livello: "L", note: "" },
      { numero: 5, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "se la lingua di insegnamento scelta non e' lingua madre" },
        { lingua: "Inglese", livello: "B1", condizione: "se la lingua di insegnamento scelta non e' lingua madre" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi inclusi negli International Semester Programmes" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-nebrija-madrid",
    universita: "Universitas Nebrissensis (Universidad Nebrija)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-NEBRIJA-MADRID",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per seguire insegnamenti in spagnolo; richiesta per non madrelingua" },
        { lingua: "Inglese", livello: "B2", condizione: "per seguire insegnamenti in inglese; richiesta per non madrelingua" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "16 marzo - 20 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 giugno - 15 luglio 2026" },
        { cosa: "Application (autunno)", periodo: "documentazione entro 15 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "documentazione entro 1 settembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-malaga",
    universita: "Universidad de Málaga",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-MALAGA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello consigliato, necessario per seguire le lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-uclm-ciudadreal",
    universita: "Universidad de Castilla-La Mancha",
    citta: "Ciudad Real (sede principale)",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UCLM-CIUDADREAL",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Laura Ricci",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-uax-madrid",
    universita: "Universidad Alfonso X el Sabio",
    citta: "Villanueva de la Cañada (Madrid)",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-UAX-MADRID",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Luca Ribichini",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "lingua di insegnamento 1" },
        { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento 2, soggetta a disponibilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 aprile al 30 aprile" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 18 settembre al 30 settembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-vic-a",
    universita: "Universitat de Vic",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-VIC-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 28 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-vic-b",
    universita: "Universitat de Vic",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "SAP-ARCHI-VIC-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 28 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-vaxjo",
    universita: "Linnéuniversitetet",
    citta: "Växjö",
    paese: "Svezia",
    codiceErasmus: "SAP-ARCHI-VAXJO",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Lorenzo Imbesi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-umea",
    universita: "Umeå University",
    citta: "Umeå",
    paese: "Svezia",
    codiceErasmus: "SAP-ARCHI-UMEA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Svedese", livello: "B2/C1", condizione: "per corsi impartiti in svedese, secondo il corso scelto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-hesso",
    universita: "Haute Ecole Spécialisée de Suisse Occidentale (HES-SO)",
    citta: "Losanna (rete multi-sede)",
    paese: "Svizzera",
    codiceErasmus: "SAP-ARCHI-HESSO",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Marc'Antonio Liotta",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-ozyegin-istanbul",
    universita: "Özyeğin Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-OZYEGIN-ISTANBUL",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giorni prima della deadline application" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 giorni prima della deadline application" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-tobb-ankara",
    universita: "TOBB Ekonomi ve Teknoloji Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-TOBB-ANKARA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "a seconda del programma di studio" },
        { lingua: "Turco", livello: "B1", condizione: "a seconda del programma di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  },
  {
    id: "sap-archi-aybu-ankara",
    universita: "Ankara Yıldırım Beyazıt Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-AYBU-ANKARA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti in mobilita Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-gazi-ankara",
    universita: "Gazi Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-GAZI-ANKARA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 maggio - 20 giugno" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 20 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-msgsu-istanbul-a",
    universita: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-MSGSU-ISTANBUL-A",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Romeo Di Pietro). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-itu-istanbul",
    universita: "Istanbul Teknik Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-ITU-ISTANBUL",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 22 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-msgsu-istanbul-b",
    universita: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-MSGSU-ISTANBUL-B",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Loredana Di Lucchio). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-izmir-ekonomi",
    universita: "İzmir Ekonomi Üniversitesi",
    citta: "Smirne (Izmir)",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-IZMIR-EKONOMI",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Lorenzo Imbesi",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination/Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-bursa",
    universita: "Uludağ Üniversitesi",
    citta: "Bursa",
    paese: "Turchia",
    codiceErasmus: "SAP-ARCHI-BURSA",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 aprile - 15 giugno" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 novembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-pecs",
    universita: "Pécsi Tudományegyetem",
    citta: "Pécs",
    paese: "Ungheria",
    codiceErasmus: "SAP-ARCHI-PECS",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato equivalente B2 richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 30 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-bme-budapest",
    universita: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "SAP-ARCHI-BME-BUDAPEST",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Donatella Scatena",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se l'inglese non e' lingua madre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
