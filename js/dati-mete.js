// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Economia
// ------------------------------------------------------------
// Fonte ufficiale: "Lista destinazioni Erasmus+ per studio (Europa)
// a.a. 2026/2027", Universita' Ca' Foscari Venezia (cartella /fonti).
//
// Questo file contiene SOLO i dati, separati dal codice (js/app.js).
// Per aggiungere/modificare una meta si tocca SOLO questo file.
//
// NOTA SUI DATI:
// - I campi posti/livello/area/coordinatore/codice Erasmus sono REALI,
//   estratti dalla lista ufficiale del bando 2026/27.
// - requisitoLingua e' VUOTO ([]) per le mete generate: la lingua NON
//   e' presente nella lista ufficiale. app.js la segnala come
//   "da verificare" invece di inventare un punteggio.
// - I campi scadenzeOspitante/alloggio/prerequisiti/linkPdf vanno
//   completati dalla scheda-destinazione di ogni universita' (apps.unive.it).
//   Aix-Marseille (prima meta) e' l'esempio completo, gia' arricchito.
// ============================================================

const METE = [
  // ----- META COMPLETA DI ESEMPIO (dati validati da scheda ufficiale) -----
  {
    id: "amu-eco-0311",
    universita: "Aix-Marseille University (AMU) - Faculty of Economics and Management",
    citta: "Aix-en-Provence / Marseille",
    paese: "Francia",
    codiceErasmus: "F MARSEIL84",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Bastianello Lorenzo",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
    ],
    prerequisiti: "Corsi 3 anno triennale: min. 2 anni di studi in Economia o Management. Magistrale: min. 3 anni.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
      { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Stanza in residenza su richiesta (CROUS). Assegnata a Aix-en-Provence o Marseille in base ai corsi.",
    visto: "Cittadini UE: nessun visto. Extra-UE: visto obbligatorio.",
    crediti: "30 ECTS/semestre, 60 ECTS/anno.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254565",
    linkSito: "http://www.univ-amu.fr/en",
    notePratiche: "Devi scegliere UN solo campus (Aix o Marseille), niente pendolarismo. Almeno 80% dei corsi nello stesso programma. Corsi serali di francese (SUL) = 4 crediti extra/semestre."
  },

  // ----- METE GENERATE DALLA LISTA UFFICIALE 2026/27 (lingua e dettagli da verificare) -----

  {
    id: "ainnsbru08-0410-depinant",
    universita: "MCI - MANAGEMENT CENTER INNSBRUCK",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "A INNSBRU08",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "De Pin Antonio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "awien01-0311-rosonrob",
    universita: "UNIVERSITAET WIEN",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Roson Roberto",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. invernale)", periodo: "entro 1 maggio" },
      { cosa: "Nomination (sem. estivo)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254353",
    linkSito: "https://international.univie.ac.at/en/student-mobility/incoming-students/",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 3; mesi: 6. || Lingua: la scheda non indica un livello CEFR (corsi prevalentemente in tedesco; corsi intensivi di tedesco disponibili) - da verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "bantwerp01-0311-marenzia",
    universita: "UNIVERSITEIT ANTWERPEN",
    citta: "Anversa",
    paese: "Belgio",
    codiceErasmus: "B ANTWERP01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Marenzi Anna",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 1; mesi: 5."
  },
  {
    id: "bleuven01-1015-colombin",
    universita: "KATHOLIEKE UNIVERSITEIT LEUVEN",
    citta: "Lovanio",
    paese: "Belgio",
    codiceErasmus: "B LEUVEN01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Colombino Annalisa",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6."
  },
  {
    id: "blouvain01-0311-micheluc",
    universita: "UCL - UNIVERSITE CATHOLIQUE DE LOUVAIN",
    citta: "Louvain-la-Neuve",
    paese: "Belgio",
    codiceErasmus: "B LOUVAIN01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Michelucci Fabio",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "PhD", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254372",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 3; mesi: 5. || Lingua: la scheda Ca' Foscari e un PDF scansionato non leggibile automaticamente - aprire il link scheda e verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "bgent01-0410-gautamsa",
    universita: "UNIVERSITEIT GENT",
    citta: "Gand",
    paese: "Belgio",
    codiceErasmus: "B GENT01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Gautam Sanghmitra",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Mobilita solo al 3° anno di triennale, con 120 ECTS registrati nel piano di studi al momento dell'application.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 15 ottobre" },
      { cosa: "Application (1 semestre)", periodo: "entro 15 maggio" },
      { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/19576803",
    linkSito: "",
    notePratiche: "Mobilities must be carried out during the third year of Bachelor's degree and 120 ECTS must be registered in the study plan at the time of Application - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L 3° anno (vedi colonna Note); studenti: 4; mesi: 5. || Lingua: la scheda chiede una 'buona conoscenza di olandese e/o inglese' senza livello CEFR - vedi pagina requisiti UGent (ugent.be) - da verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "cynicosia01-0311-pappadaf",
    universita: "UNIVERSITY OF CYPRUS",
    citta: "Nicosia",
    paese: "Cipro",
    codiceErasmus: "CY NICOSIA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Pappadà Francesco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "cypafos01-0540-casarinr",
    universita: "Neapolis University Pafos",
    citta: "Pafo",
    paese: "Cipro",
    codiceErasmus: "CY PAFOS01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0540", nome: "Mathematics and statistics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Casarin Roberto",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28244638",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 4; mesi: 5. || Lingua: la guida per incoming non indica un livello CEFR - da verificare con l'ateneo (corsi in inglese/greco). [Fonte: scheda destinazione]"
  },
  {
    id: "czostrava01-0311-nardonma",
    universita: "Technical University of Ostrava",
    citta: "Ostrava",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OSTRAVA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0412", nome: "Finance and banking" }],
    coordinatoreCf: "Nardon Martina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984410",
    linkSito: "",
    notePratiche: "Info for incoming students at https://www.ekf.vsb.cz/en/study/incoming-students/exchange-students/erasmus-students/index.html - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: 2x5 L 2x10 LM, PhD; studenti: 4; mesi: 5 o 10."
  },
  {
    id: "ddresden02-0410-pappadaf",
    universita: "TECHNISCHE UNIVERSITAET DRESDEN",
    citta: "Dresda",
    paese: "Germania",
    codiceErasmus: "D DRESDEN02",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Pappadà Francesco",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254407",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 6; mesi: 5."
  },
  {
    id: "dfrankfu01-0311-dicatald",
    universita: "JOHANN WOLFGANG GOETHE UNIVERSITAET FRANKFURT AM MAIN",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Di Cataldo Marco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "dfrankfu01-0410-dicatald",
    universita: "JOHANN WOLFGANG GOETHE UNIVERSITAET FRANKFURT AM MAIN",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Di Cataldo Marco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 1; mesi: 5."
  },
  {
    id: "dmannhei01-0311-dottival",
    universita: "University of Mannheim",
    citta: "Mannheim",
    paese: "Germania",
    codiceErasmus: "D MANNHEI01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Dotti Valerio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Bachelor's program: https://www.vwl.uni-mannheim.de/en/academics/prospective-students-bsc/about-the-bachelors-programCourse offer: https://www.uni-mannheim.de/courses (Course catalogues from previous semesters are linked at the end of the page.)Courses in Economics: https://www.uni-mannheim.de/en/academics/coming-to-mannheim/exchange-students/courses/course-catalog/economics-all/Exchange students are allowed to take up to half of their courses outside the school of their exchange program. Since the Business School here in Mannheim doesn't belong to the same school than the Department of Economics, this would also apply to students for business courses. If students want to take courses outside of the school of their exchange program, they can take them from the university-wide electives, which do not require any prior knowledge of the subject. As far as business courses are concerned, this rule does not apply so strictly to economic's exchange students. They are allowed to choose from all business courses at undergraduate level that do not have capacity restrictions. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "dkkobenha01-0311-bertarel",
    universita: "KØBENHAVNS UNIVERSITET",
    citta: "Copenaghen",
    paese: "Danimarca",
    codiceErasmus: "DK KOBENHA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Bertarelli Gaia",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254454",
    linkSito: "https://studies.ku.dk/study-abroad/erasmus/",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Incoming students within the economics-agreement are welcome to register for all Economics-courses and seminars on BSc/MSc-level regardless of which level they are studying. They can also register for courses at other Social Science-departments, if they are admitted to the departments in question. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 5. || Lingua: la scheda rimanda al sito UCPH (studies.ku.dk) senza indicare un livello CEFR - da verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "dkodense01-0311-mintoand",
    universita: "SYDDANSK UNIVERSITET",
    citta: "Odense",
    paese: "Danimarca",
    codiceErasmus: "DK ODENSE01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Minto Andrea",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282418",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD (solo 3 mesi); studenti: 4; mesi: 5."
  },
  {
    id: "ealicant01-0311-lugosala",
    universita: "UNIVERSIDAD DE ALICANTE",
    citta: "Alicante",
    paese: "Spagna",
    codiceErasmus: "E ALICANT01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Lugo Salamanca Andrés Eduardo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "ebarcelo02-0311-camattin",
    universita: "UNIVERSITAT AUTONOMA DE BARCELONA",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "15 febbraio - 1 maggio" },
      { cosa: "Nomination (2 semestre)", periodo: "15 settembre - 1 novembre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "15 febbraio - 15 maggio" },
      { cosa: "Application (2 semestre)", periodo: "15 settembre - 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254477",
    linkSito: "",
    notePratiche: "Few courses in Economics available in the first semester - Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 3; mesi: 5. || Lingua: corsi soprattutto in catalano/spagnolo, alcuni in inglese; requisiti specifici per facolta (vedi factsheet UAB) - da verificare. [Fonte: factsheet UAB 2026/27]"
  },
  {
    id: "ebarcelo02-0311-lugosala",
    universita: "UNIVERSITAT AUTONOMA DE BARCELONA",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Lugo Salamanca Andrés Eduardo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "15 febbraio - 1 maggio" },
      { cosa: "Nomination (2 semestre)", periodo: "15 settembre - 1 novembre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "15 febbraio - 15 maggio" },
      { cosa: "Application (2 semestre)", periodo: "15 settembre - 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254471",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Lingua: corsi soprattutto in catalano/spagnolo, alcuni in inglese; requisiti specifici per facolta (vedi factsheet UAB) - da verificare. [Fonte: factsheet UAB 2026/27]"
  },
  {
    id: "ecordoba23-0311-rosonrob",
    universita: "UNIVERSIDAD LOYOLA ANDALUCIA",
    citta: "Cordova",
    paese: "Spagna",
    codiceErasmus: "E CORDOBA23",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Roson Roberto",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B1", condizione: "certificato obbligatorio per corsi in inglese (non serve un esame ufficiale; da caricare nell'application)" },
      { lingua: "Spagnolo", livello: "B1", condizione: "certificato obbligatorio per corsi in spagnolo; alcuni corsi richiedono B2-C1" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "15 febbraio - 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 novembre" },
      { cosa: "Application (autunno/anno intero)", periodo: "1 marzo - 1 giugno" },
      { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23270906",
    linkSito: "",
    notePratiche: "Due campus (Cordova e Siviglia/Dos Hermanas): gli studenti vengono divisi tra i campus quando il corso e disponibile in entrambi. Tassa di 80 euro a fine enrollment. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 6."
  },
  {
    id: "ejaen01-0410-teglioan",
    universita: "UNIVERSIDAD DE JAEN",
    citta: "Jaen",
    paese: "Spagna",
    codiceErasmus: "E JAEN01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Teglio Andrea",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "PhD", note: "su 5 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254496",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 5; mesi: 5."
  },
  {
    id: "emadrid14-0410-raggidav",
    universita: "UNIVERSIDAD CARLOS III DE MADRID",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID14",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Raggi Davide",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L (2 stud.), LM (2 stud., solo IV anno di Madrid); studenti: 4; mesi: 5."
  },
  {
    id: "emadrid26-0311-teglioan",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID26",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Teglio Andrea",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254513",
    linkSito: "",
    notePratiche: "Senza certificato di lingua (o con livello inferiore) l'application non viene accettata. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5."
  },
  {
    id: "emataro01-1015-colombin",
    universita: "ESCOLA UNIVERSITARIA DEL MARESME (TECNOCAMPUS MATARO MARESME)",
    citta: "Mataro",
    paese: "Spagna",
    codiceErasmus: "E MATARO01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Colombino Annalisa",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 6."
  },
  {
    id: "epalma01-0413-dottival",
    universita: "UNIVERSITAT DE LES ILLES BALEARS",
    citta: "Palma di Maiorca",
    paese: "Spagna",
    codiceErasmus: "E PALMA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0413", nome: "Management and administration" }],
    coordinatoreCf: "Dotti Valerio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "epalma01-1015-dottival",
    universita: "UNIVERSITAT DE LES ILLES BALEARS",
    citta: "Palma di Maiorca",
    paese: "Spagna",
    codiceErasmus: "E PALMA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Dotti Valerio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "epamplon02-0421-devidosa",
    universita: "UNIVERSIDAD PUBLICA DE NAVARRA",
    citta: "Pamplona",
    paese: "Spagna",
    codiceErasmus: "E PAMPLON02",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "De Vido Sara",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "PhD", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "certificato o attestazione richiesti per i corsi in inglese" },
      { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per i corsi in spagnolo" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 24 ottobre" },
      { cosa: "Application (autunno/anno intero)", periodo: "entro 15 maggio" },
      { cosa: "Application (primavera)", periodo: "entro 14 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254523",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L (3 stud. x 9 mesi), PhD (2 stud. x 5 mesi); studenti: 5; mesi: 9."
  },
  {
    id: "esevilla01-0311-astagabr",
    universita: "UNIVERSIDAD DE SEVILLA",
    citta: "Siviglia",
    paese: "Spagna",
    codiceErasmus: "E SEVILLA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Asta Gabriele",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6."
  },
  {
    id: "etarrago01-0311-lucchett",
    universita: "Universitat Rovira i Virgili",
    citta: "Tarragona",
    paese: "Spagna",
    codiceErasmus: "E TARRAGO01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Lucchetta Marcella",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "1 aprile - 20 maggio 2026" },
      { cosa: "Nomination (primavera)", periodo: "1 aprile - 20 ottobre 2026" },
      { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno 2026" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29138130",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 9. || Aperta a: Laurea Magistrale in Global Development and Entrepreneurship - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 9. || Lingua: requisiti specifici per facolta (vedi pagina Academic Plans and Language Requirements URV) - da verificare. [Fonte: factsheet URV]"
  },
  {
    id: "etenerif28-1015-colombin",
    universita: "IRIARTE Centro Universitario Internacional",
    citta: "Tenerife",
    paese: "Spagna",
    codiceErasmus: "E TENERIF28",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Colombino Annalisa",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 6."
  },
  {
    id: "fbordeau58-0311-pappadaf",
    universita: "Universitè de Bordeaux",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU58",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0412", nome: "Finance and banking" }],
    coordinatoreCf: "Pappadà Francesco",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23270873",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 6; mesi: 5."
  },
  {
    id: "fchamber01-1015-camattin",
    universita: "Université Savoie Mont Blanc",
    citta: "Chambery",
    paese: "Francia",
    codiceErasmus: "F CHAMBER01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 5."
  },
  {
    id: "fmontpel54-0311-pappadaf",
    universita: "Université de Montpellier",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "F MONTPEL54",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0540", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Pappadà Francesco",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 10, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B1", condizione: "atteso B1 - non e piu richiesto un certificato" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 semestre)", periodo: "entro 29 maggio 2026" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 30 ottobre 2026" },
      { cosa: "Application (1 semestre)", periodo: "entro 12 giugno 2026" },
      { cosa: "Application (2 semestre)", periodo: "entro 13 novembre 2026" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26927323",
    linkSito: "",
    notePratiche: "Students cannot choose modules outside the Dept. of Economics - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 3; mesi: 10."
  },
  {
    id: "fnice42-0311-casarinr",
    universita: "Université Côte d'Azur",
    citta: "Nizza",
    paese: "Francia",
    codiceErasmus: "F NICE42",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Casarin Roberto",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "MSc programs are fully taught in English . There is just one Bachelor's programme in English: License3 in \"International Economics and Management Studies\". - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "fparis001-0421-astagabr",
    universita: "UNIVERSITE PARIS 1 - PANTHEON-SORBONNE",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Asta Gabriele",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254580",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 10."
  },
  {
    id: "fparis001-0311-barbatim",
    universita: "UNIVERSITE PARIS 1 - PANTHEON-SORBONNE",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Barbati Maria",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254586",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 5."
  },
  {
    id: "fparis001-0311-micheluc",
    universita: "UNIVERSITE PARIS 1 - PANTHEON-SORBONNE",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Michelucci Fabio",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254586",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 5."
  },
  {
    id: "fparis002-0311-bastiane",
    universita: "UNIVERSITE PANTHEON-ASSAS (PARIS 2)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS002",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Bastianello Lorenzo",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 6, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 6, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B2", condizione: "consigliato - la maggior parte dei corsi e in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "consigliato - corsi di Economia e Diritto anche in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "15 marzo - 15 maggio" },
      { cosa: "Nomination (2 semestre)", periodo: "1 - 31 ottobre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "entro 31 maggio" },
      { cosa: "Application (2 semestre)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/24655186",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e della Venice School of Management - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 4; mesi: 6."
  },
  {
    id: "fparis009-0410-casarinr",
    universita: "UNIVERSITE PARIS-DAUPHINE",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS009",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }, { codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Casarin Roberto",
    posti: [
      { numero: 5, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B2", condizione: "DELF/TCF obbligatorio per corsi in francese (non per i corsi di francese per stranieri)" },
      { lingua: "Inglese", livello: "B2", condizione: "test obbligatorio per corsi in inglese: TOEFL iBT 92 / IELTS 6.5 / Cambridge 160 (non piu vecchio di 2 anni)" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 24 aprile" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 2 ottobre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "28 aprile - 15 maggio" },
      { cosa: "Application (2 semestre)", periodo: "5 - 16 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254608",
    linkSito: "",
    notePratiche: "Non accettano lettere della home university come certificato di lingua. - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 5; mesi: 5."
  },
  {
    id: "gathine04-0311-casarinr",
    universita: "Athens University of Economics and Business(AUEB)",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G ATHINE04",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0540", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Casarin Roberto",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, PhD; studenti: 2; mesi: 5. || Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "gkritis01-0310-dicorato",
    universita: "University of Crete",
    citta: "Creta",
    paese: "Grecia",
    codiceErasmus: "G KRITIS01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0310", nome: "Social and behavioural sciences" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Di Corato Luca",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "requisito standard UoC; lingua principale dei corsi: greco, alcuni corsi/valutazioni alternative in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Application (anno intero/sem. invernale)", periodo: "entro 15 giugno" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28264979",
    linkSito: "",
    notePratiche: "more info at: www.uoc.gr/intrel/en/students-en/information-and-advicefacebook page \"Accommodation Erasmus in Rethymno\" - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 3; mesi: 5."
  },
  {
    id: "gthessal02-0311-dicorato",
    universita: "UNIVERSITY OF MACEDONIA",
    citta: "Salonicco",
    paese: "Grecia",
    codiceErasmus: "G THESSAL02",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Di Corato Luca",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "consigliato B1/B2 - corsi in greco/inglese" },
      { lingua: "Greco", livello: "B2", condizione: "consigliato B1/B2 - corsi in greco/inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
      { cosa: "Application (autunno)", periodo: "entro 20 giugno" },
      { cosa: "Application (primavera)", periodo: "entro 20 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29537238",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 4; mesi: 5."
  },
  {
    id: "hrpula01-1015-camattin",
    universita: "Juraj Dobrila University Pula",
    citta: "Pola",
    paese: "Croazia",
    codiceErasmus: "HR PULA01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, tourism and leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6."
  },
  {
    id: "hrsplit01-0311-camattin",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Spalato",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Students can select up to 50% of their modules from other departments (modules from the University department of professional studies excluded) - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "hubudapes01-0421-zanchigi",
    universita: "EÖTVÖS LORÁND UNIVERSITY - ELTE -",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Zanchi Giuliano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni Internazionali Comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "hubudapes01-0312-zanchigi",
    universita: "EÖTVÖS LORÁND UNIVERSITY - ELTE -",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences" }],
    coordinatoreCf: "Zanchi Giuliano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni Internazionali Comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "huszfvar01-0311-depinant",
    universita: "Kodolányi János University",
    citta: "Szekesfehervar",
    paese: "Ungheria",
    codiceErasmus: "HU SZFVAR01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "De Pin Antonio",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 9, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento: inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
      { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25783045",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 9."
  },
  {
    id: "irllimeric01-0311-baldinan",
    universita: "UL - UNIVERSITY OF LIMERICK",
    citta: "Limerick",
    paese: "Irlanda",
    codiceErasmus: "IRLLIMERIC01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Baldin Andrea",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "ltkaunas01-0421-astagabr",
    universita: "VYTAUTAS MAGNUS UNIVERSITY",
    citta: "Kaunas",
    paese: "Lituania",
    codiceErasmus: "LT KAUNAS01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }, { codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Asta Gabriele",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254671",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 6; mesi: 5. || Lingua: la scheda Ca' Foscari rimanda al factsheet VMU (vdu.lt) - livello da verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "ntrondhe01-0311-bertarel",
    universita: "NTNU - NORGES TEKNISK-NATURVITENSKAPELIGE UNIVERSITET",
    citta: "Trondheim",
    paese: "Norvegia",
    codiceErasmus: "N TRONDHE01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Bertarelli Gaia",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 10, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23271913",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 10. || Lingua: la scheda Ca' Foscari e solo un rimando - requisiti sul sito NTNU, da verificare. [Fonte: scheda destinazione]"
  },
  {
    id: "nlamsterd01-0311-dicatald",
    universita: "UVA - UNIVERSITEIT VAN AMSTERDAM",
    citta: "Amsterdam",
    paese: "Olanda",
    codiceErasmus: "NL AMSTERD01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Di Cataldo Marco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "test obbligatorio: TOEFL iBT 92 (min 22/sezione) / IELTS 6.5 (min 6.0/sezione) / Cambridge 180" }
    ],
    prerequisiti: "Triennale: almeno 2 anni completi di corsi in economia/business (incl. matematica e statistica) e almeno 90 ECTS all'inizio dello scambio.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 semestre)", periodo: "entro 15 aprile 2026" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 1 ottobre 2026" },
      { cosa: "Application (1 semestre)", periodo: "entro 22 aprile 2026" },
      { cosa: "Application (2 semestre)", periodo: "entro 8 ottobre 2026" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23270747",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "nlgroning01-0311-brilliyl",
    universita: "RIJKSUNIVERSITEIT GRONINGEN",
    citta: "Groninga",
    paese: "Olanda",
    codiceErasmus: "NL GRONING01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Brilli Ylenia",
    posti: [
      { numero: 6, mesi: 6, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 6, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 6, livello: "PhD", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (primavera, studenti UE)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13945919",
    linkSito: "",
    notePratiche: "Periodo vincolato: SI - 3 studenti nel 1° semestre e 3 studenti nel 2° semestre/YES - 3 students in the fall semester and 3 students in the spring semester - English language proficency test needed at the time of registration - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 6; mesi: 6. || Lingua: corsi in INGLESE; serve una prova di conoscenza (test riconosciuti, dettagli sulla pagina RuG/FEB english-proficiency) - livello esatto da verificare. [Fonte: factsheet FEB 2026-27]"
  },
  {
    id: "plisboa03-0413-rosonrob",
    universita: "UNIVERSIDADE NOVA DE LISBOA",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA03",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0413", nome: "Management and administration" }],
    coordinatoreCf: "Roson Roberto",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254708",
    linkSito: "",
    notePratiche: "Nomination solo tramite piattaforma online Nova SBE (no email). Corsi interamente in inglese (alcuni del 1° anno anche in portoghese). - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "plisboa03-0311-rosonrob",
    universita: "UNIVERSIDADE NOVA DE LISBOA",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA03",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Roson Roberto",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29572326",
    linkSito: "",
    notePratiche: "Nomination solo tramite piattaforma online Nova SBE (no email). Corsi interamente in inglese (alcuni del 1° anno anche in portoghese). - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L (5 mesi), PhD (10 mesi); studenti: 4; mesi: 5."
  },
  {
    id: "plkrakow04-0410-bastiane",
    universita: "AKADEMIA EKONOMICZNA - Krakow University of Economics",
    citta: "Cracovia",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW04",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0410", nome: "Business and administration" }],
    coordinatoreCf: "Bastianello Lorenzo",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e della Venice School of Management - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 6."
  },
  {
    id: "pltorun01-0421-devidosa",
    universita: "UNIWERSYTET MIKOLAJA KOPERNIKA",
    citta: "Torun",
    paese: "Polonia",
    codiceErasmus: "PL TORUN01",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "De Vido Sara",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
  },
  {
    id: "sinovago07-0421-devidosa",
    universita: "New University",
    citta: "Nova Gorica",
    paese: "Slovenia",
    codiceErasmus: "SI NOVA-GO07",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "De Vido Sara",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Students are assigned to the Ljubljana Campus. Guide: https://epf.nova-uni.si/wp-content/uploads/2020/05/Study-info-Course-catalogue-with-eUniversity-2020.pdf - Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 2; mesi: 5."
  },
  {
    id: "trankara07-0311-nardonma",
    universita: "Bilkent University",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA07",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0540", nome: "Mathematics and statistics" }],
    coordinatoreCf: "Nardon Martina",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 2; mesi: 6."
  }
];
