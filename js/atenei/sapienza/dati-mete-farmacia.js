// ==========================================================
// METE ERASMUS - SAPIENZA - Facolta di FARMACIA E MEDICINA (area Farmacia)
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=FARM).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-03): 62 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (il sito gestisce L e LM).
// codiceErasmus = codice Erasmus UFFICIALE dall export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti).
// ==========================================================

var METE = [
  {
    id: "sap-farm-leuven",
    universita: "KATHOLIEKE UNIVERSITEIT LEUVEN",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B  LEUVEN01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Olandese", livello: "B2", condizione: "per programmi/corsi in olandese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-liege",
    universita: "UNIVERSITÉ DE LIÈGE",
    citta: "Liege",
    paese: "Belgio",
    codiceErasmus: "B  LIEGE01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    id: "sap-farm-brussel",
    universita: "VRIJE UNIVERSITEIT BRUSSEL",
    citta: "Brussel",
    paese: "Belgio",
    codiceErasmus: "B  BRUSSEL01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-antwerp",
    universita: "UNIVERSITEIT ANTWERPEN- University of Antwerp",
    citta: "Antwerp",
    paese: "Belgio",
    codiceErasmus: "B  ANTWERP01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Roberto Di Santo",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per exchange in Medicine and Health Sciences" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-sofia",
    universita: "MEDITSINSKI UNIVERSITET - SOFIA (MEDICAL UNIVERSITY - SOFIA)",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA11",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-varna",
    universita: "MEDICAL UNIVERSITY OF VARNA",
    citta: "Varna",
    paese: "Bulgaria",
    codiceErasmus: "BG VARNA03",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 3, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studio" },
        { lingua: "Inglese", livello: "B2", condizione: "per traineeship nella maggior parte dei dipartimenti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-zagreb",
    universita: "SVEUCILIŠTE U ZAGREBU - UNIVERSITY OF ZAGREB",
    citta: "Zagreb",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-osijek",
    universita: "SVEUCILISTE JOSIPA JURJA STROSSMAYERA U OSIJEKU",
    citta: "Osijek",
    paese: "Croazia",
    codiceErasmus: "HR OSIJEK01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-farm-rijeka",
    universita: "SVEUCILISTE U RIJECI",
    citta: "Rijeka",
    paese: "Croazia",
    codiceErasmus: "HR RIJEKA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 10 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 10 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-osijek-2",
    universita: "SVEUCILISTE JOSIPA JURJA STROSSMAYERA U OSIJEKU",
    citta: "Osijek",
    paese: "Croazia",
    codiceErasmus: "HR OSIJEK01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-farm-nancy",
    universita: "UNIVERSITE DE LORRAINE",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "F  NANCY43",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "la maggior parte dei corsi e' in francese; livello richiesto secondo i corsi scelti" },
        { lingua: "Inglese", livello: "B1/B2", condizione: "per il semestre/corsi in inglese; livello richiesto secondo i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-compieg",
    universita: "ECOLE SUPERIEURE DE CHIMIE ORGANIQUE ET MINERALE (ESCOM)",
    citta: "Compieg",
    paese: "Francia",
    codiceErasmus: "F  COMPIEG05",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-grenobl",
    universita: "Université Grenoble Alpes",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL55",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 30 agosto al 30 settembre" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 30 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 30 agosto al 18 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-montpel",
    universita: "UNIVERSITE DE MONTPELLIER",
    citta: "Montpel",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL54",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "livello minimo raccomandato per la Facolta' di Farmacia" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 1 marzo al 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 30 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "dal 1 aprile al 30 giugno" },
        { cosa: "Application (primavera)", periodo: "da ottobre al 10 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-besanco",
    universita: "UNIVERSITÉ DE FRANCHE-COMTE",
    citta: "Besanco",
    paese: "Francia",
    codiceErasmus: "F  BESANCO01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-amiens",
    universita: "UNIVERSITÉ DE PICARDIE JULES VERNE",
    citta: "Amiens",
    paese: "Francia",
    codiceErasmus: "F  AMIENS01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-poitier",
    universita: "UNIVERSITÉ DE POITIERS",
    citta: "Poitier",
    paese: "Francia",
    codiceErasmus: "F  POITIER01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per master in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-lyon",
    universita: "UNIVERSITÉ CLAUDE BERNARD LYON 1",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studenti exchange incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero, ISPB farmacia)", periodo: "entro 2 giugno" },
        { cosa: "Application (primavera, ISPB farmacia)", periodo: "entro 3 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-farm-compieg-2",
    universita: "ECOLE SUPERIEURE DE CHIMIE ORGANIQUE ET MINERALE (ESCOM)",
    citta: "Compieg",
    paese: "Francia",
    codiceErasmus: "F  COMPIEG05",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-lille",
    universita: "UNIVERSITE CATHOLIQUE DE LILLE (FUPL)",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE11",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Rodolfo Negri",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 10 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-lille-2",
    universita: "UNIVERSITE CATHOLIQUE DE LILLE (FUPL)",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE11",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Rodolfo Negri",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 10 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-rennes",
    universita: "ECOLE NATIONALE SUPERIEURE DE CHIMIE",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES09",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 21 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 21 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-lyon-2",
    universita: "UNIVERSITÉ CLAUDE BERNARD LYON 1",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studenti exchange incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero, ISPB farmacia)", periodo: "entro 2 giugno" },
        { cosa: "Application (primavera, ISPB farmacia)", periodo: "entro 3 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-farm-cy",
    universita: "CY CERGY PARIS UNIVERSITÉ [former F  CERGY07, UNIVERSITÉ DE CERGY-PONTOISE]",
    citta: "Cy",
    paese: "Francia",
    codiceErasmus: "F  CERGY-P11",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 31 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-angers",
    universita: "UNIVERSITÉ DE ANGERS",
    citta: "Angers",
    paese: "Francia",
    codiceErasmus: "F  ANGERS01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 marzo al 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 15 maggio 2026" },
        { cosa: "Application tardiva (autunno)", periodo: "dal 16 maggio al 25 giugno 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-lyon-3",
    universita: "UNIVERSITÉ CLAUDE BERNARD LYON 1",
    citta: "Lyon",
    paese: "Francia",
    codiceErasmus: "F  LYON01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "richiesto per studenti exchange incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero, ISPB farmacia)", periodo: "entro 2 giugno" },
        { cosa: "Application (primavera, ISPB farmacia)", periodo: "entro 3 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-farm-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 21 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 21 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-cy-2",
    universita: "CY CERGY PARIS UNIVERSITÉ [former F  CERGY07, UNIVERSITÉ DE CERGY-PONTOISE]",
    citta: "Cy",
    paese: "Francia",
    codiceErasmus: "F  CERGY-P11",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 31 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-saarbru",
    universita: "UNIVERSITAT DES SAARLANDES",
    citta: "Saarbru",
    paese: "Germania",
    codiceErasmus: "D  SAARBRU01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Antonello Mai",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato per corsi in tedesco; certificato richiesto in alcune aree" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 dicembre dell'anno precedente" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre dell'anno precedente" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-berlin",
    universita: "TECHNISCHE UNIVERSITÄT BERLIN",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D  BERLIN02",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Martino Luigi Di Salvo",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per la maggior parte dei programmi; possibile ammissione condizionata con A2 entro la candidatura e B1 prima dell'inizio semestre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-patra",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "per comunicare e funzionare in contesto accademico" },
        { lingua: "Inglese", livello: "B2", condizione: "per comunicare e funzionare in contesto accademico" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-patra-2",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 20 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-wroclaw",
    universita: "UNIWERSYTET MEDYCZNY IM PIASTOW SLASKICH WE WROCLAWIU - WROCLAW MEDICAL UNIVERSITY",
    citta: "Wroclaw",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW05",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2025" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2025" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-warszaw",
    universita: "WARSZAWSKI UNIWERSYTET MEDYCZNY",
    citta: "Warszaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW06",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Polacco", livello: "B1", condizione: "per corsi in polacco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 25 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-farm-braganc",
    universita: "INSTITUTO POLITÉCNICO DE BRAGANÇA",
    citta: "Braganc",
    paese: "Portogallo",
    codiceErasmus: "P  BRAGANC01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-lisboa",
    universita: "UNIVERSIDADE DE LISBOA",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA109",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese o Inglese", livello: "B1", condizione: "per studenti in mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-coimbra",
    universita: "UNIVERSIDADE DE COIMBRA",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "livello raccomandato; la maggior parte dei corsi e' in portoghese" },
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination", periodo: "dal 1 gennaio al 30 giugno" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 marzo al 15 luglio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-covilha",
    universita: "UNIVERSIDADE DA BEIRA INTERIOR",
    citta: "Covilha",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-london",
    universita: "KING`S COLLEGE - UNIVERSITY OF LONDON",
    citta: "London",
    paese: "Regno Unito",
    codiceErasmus: "UK LONDON017",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti semester-only senza IELTS/TOEFL/Pearson; devono attestare almeno B2" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "15 gennaio - 15 marzo 2026" },
        { cosa: "Application (autunno/anno)", periodo: "1 febbraio - 31 marzo 2026" },
        { cosa: "Nomination (primavera)", periodo: "15 agosto - 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 15 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-bucures",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-farm-clujnap",
    universita: "UNIVERSITATEA BABES-BOLYAI",
    citta: "Clujnap",
    paese: "Romania",
    codiceErasmus: "RO CLUJNAP01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "051", nome: "Biological and related sciences" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1-B2", condizione: "per corsi in inglese o nella lingua di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-belgrad",
    universita: "UNIVERZITET U BEOGRADU",
    citta: "Belgrad",
    paese: "Serbia",
    codiceErasmus: "RS  BELGRAD02",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-farm-ljublja",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-madrid",
    universita: "UNIVERSIDAD SAN PABLO-CEU",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID21",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0519", nome: "Biological and related sciences, not elsewhere classifed" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per lezioni in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per seguire le lezioni e vivere a Granada" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "dal 1 al 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-salaman",
    universita: "UNIVERSIDAD DE SALAMANCA",
    citta: "Salaman",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato per corsi in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application / registrazione Erasmus (autunno)", periodo: "dal 15 aprile al 1 luglio 2026" },
        { cosa: "Application / registrazione Erasmus (primavera)", periodo: "dal 15 aprile al 1 luglio 2026" },
        { cosa: "Learning Agreement (autunno)", periodo: "entro 1 luglio 2026" },
        { cosa: "Learning Agreement (primavera)", periodo: "entro 1 luglio 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-madrid-2",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo generale; ogni facolta/centro puo avere requisiti specifici" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 20 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-barcelo",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Catalano", livello: "B1", condizione: "raccomandato in base alla lingua di insegnamento degli insegnamenti scelti" },
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato in base alla lingua di insegnamento degli insegnamenti scelti" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato in base alla lingua di insegnamento degli insegnamenti scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio per alcuni centri; entro 1 giugno per gli altri centri" },
        { cosa: "Application / documentazione (autunno)", periodo: "entro 31 maggio per alcuni centri; entro 15 giugno per gli altri centri" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre per alcuni centri; entro 1 novembre per gli altri centri" },
        { cosa: "Application / documentazione (primavera)", periodo: "entro 31 ottobre per alcuni centri; entro 15 novembre per gli altri centri" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-farm-zaragoz",
    universita: "FUNDACION UNIVERSIDAD SAN JORGE",
    citta: "Zaragoz",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ07",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0688", nome: "Information and Communication Technologies (ICTs), inter-disciplinary programmes" }],
    coordinatoreCf: "Rodolfo Negri",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-santiag-2",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Rodolfo Negri",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-burgos",
    universita: "UNIVERSIDAD DE BURGOS",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E  BURGOS01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Rodolfo Negri",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato per la maggior parte dei corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi impartiti in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-cordoba",
    universita: "UNIVERSIDAD LOYOLA ANDALUCIA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA23",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "obbligatorio se lo studente segue corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "obbligatorio se lo studente segue corsi in spagnolo; alcuni corsi possono richiedere B2-C1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/annuale)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (autunno/annuale)", periodo: "1 marzo - 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 novembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-palma",
    universita: "UNIVERSIDAD DE LAS ISLAS BALEARES",
    citta: "Palma",
    paese: "Spagna",
    codiceErasmus: "E  PALMA01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/annuale)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno/annuale)", periodo: "entro 30 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-madrid-3",
    universita: "UNIVERSIDAD COMPLUTENSE DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0512", nome: "Biochemistry" }],
    coordinatoreCf: "Giorgio Giardina",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo generale; ogni facolta/centro puo avere requisiti specifici" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 20 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-istanbu",
    universita: "ISTANBUL KULTUR UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU19",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0510", nome: "Biological and related sciences, not further defined" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" },
        { lingua: "Turco", livello: "B1", condizione: "per corsi in turco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/annuale)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-farm-kayseri",
    universita: "ERCIYES ÜNIVERSITESI",
    citta: "Kayseri",
    paese: "Turchia",
    codiceErasmus: "TR KAYSERI01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/annuale)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno/annuale)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Scadenze: basate su 2022/23"
  },
  {
    id: "sap-farm-van",
    universita: "YÜZÜNCÜ YIL ÜNIVERSITESI",
    citta: "Van",
    paese: "Turchia",
    codiceErasmus: "TR VAN01",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Silvia Chichiarelli",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-farm-budapes",
    universita: "SEMMELWEIS EGYETEM",
    citta: "Budapes",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES08",
    dipartimentoCf: "Farmacia",
    areeDisciplinari: [{ codice: "0916", nome: "Pharmacy" }],
    coordinatoreCf: "Luciano Saso",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "English Language Certificate minimum B2 level" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1-20 maggio" },
        { cosa: "Application (primavera)", periodo: "1-20 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
