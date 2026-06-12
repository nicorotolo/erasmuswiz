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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "richiesto per i programmi triennali; accettati TOEFL iBT 75, IELTS Academic 5.5, PTE Academic 50 o attestazione del docente di lingua della home university" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. autunnale)", periodo: "entro 1 aprile" },
      { cosa: "Application (sem. autunnale)", periodo: "entro 1 maggio" },
      { cosa: "Nomination (sem. primaverile)", periodo: "entro 1 ottobre" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Info alloggi: www.mci.edu/en/accommodation",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Fino a 30 ECTS/semestre da un degree program + International Program (opzionale).",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254345",
    linkSito: "https://www.mci.edu/en/international",
    notePratiche: "Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Lingua: inglese B2 richiesto (TOEFL/IELTS/PTE o attestazione docente di lingua). Corso di lingua MCI ~100 EUR. [Fonte: sito ufficiale MCI mci4me.at, sezione exchange incoming]"
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
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 3; mesi: 6. || Lingua: il sito Univie dichiara 'you need to be proficient in German' ma non indica un livello CEFR minimo obbligatorio come soglia generale (nessun certificato richiesto; l'unico livello esplicito, C1, riguarda solo i corsi di German Studies). Corsi intensivi di tedesco disponibili. [Fonte: international.univie.ac.at]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per tutti gli exchange students; accettati TOEFL iBT 79-80, IELTS 6.5, Cambridge First, certificato OLS Erasmus+, o dichiarazione se madrelingua / se si e studiato in programma interamente in inglese. Il Duolingo Test NON e accettato" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Supporto del housing team UAntwerp: www.uantwerpen.be/housing",
    visto: "Cittadini UE: nessun visto. Permesso di soggiorno se >3 mesi. Extra-UE: visto obbligatorio (verificare).",
    crediti: "Oltre 330 ECTS di corsi per exchange alla FBE; codici 1xxx = bachelor, 2xxx = master.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254355",
    linkSito: "https://www.uantwerpen.be/internationalexchange",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 1; mesi: 5. || Obbligatorio restare fino a fine sessione d'esame (no esami online); presenza agli Orientation Days obbligatoria. [Fonte: uantwerpen.be/en/study/erasmus-and-exchange-students]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus UE/SEE (nessun certificato formale richiesto; la home university garantisce la padronanza). Per extra-UE obbligatorio IELTS min. 7.0 o equivalente" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 15 settembre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 aprile" },
      { cosa: "Application (2 semestre)", periodo: "entro 1 ottobre" }
    ],
    alloggio: "Mercato alloggi difficile: prenotare PRIMA di arrivare. ~1200 stanze in residenze universitarie riservate agli internazionali (offerta limitata); maggior parte degli exchange in stanze private.",
    visto: "Cittadini UE/SEE: nessun visto. Registrazione in comune obbligatoria all'arrivo. Extra-UE: procedure diverse per durata.",
    crediti: "30 ECTS/semestre raccomandati (60/anno).",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254365",
    linkSito: "https://www.kuleuven.be/english/life-at-ku-leuven",
    notePratiche: "Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6. || ATTENZIONE: la scheda collegata da Ca' Foscari e della Faculty of Science - verificare i requisiti della facolta di destinazione effettiva. Costo vita stimato 1.000-1.350 EUR/mese. [Fonte: kuleuven.be/english/apply/language-requirements]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per seguire corsi in inglese alla Faculty of Economics and Business Administration; certificato ufficiale richiesto (la sola dichiarazione della home university non e sufficiente)" },
      { lingua: "Olandese", livello: "B2", condizione: "solo se si vogliono frequentare corsi del programma in lingua olandese (opzionale)" }
    ],
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
    notePratiche: "Mobilities must be carried out during the third year of Bachelor's degree and 120 ECTS must be registered in the study plan at the time of Application - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L 3° anno (vedi colonna Note); studenti: 4; mesi: 5. [Fonte: Fact Sheet UGent - Faculty of Economics and Business Administration 2025-2026]"
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante. Costo vita stimato ~700-800 EUR/mese.",
    visto: "Cittadini UE: nessun visto (serve tessera sanitaria europea o assicurazione). Extra-UE: visto obbligatorio (verificare).",
    crediti: "30 ECTS/semestre (carico medio). Niente appelli di recupero per gli exchange.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254379",
    linkSito: "https://www.ucy.ac.cy",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5. || Insegnamento in inglese/greco. [Fonte: scheda destinazione]"
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
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 4; mesi: 5. || Lingua: corsi in inglese/greco; le pagine Erasmus incoming di NUP (nup.ac.cy/erasmus-program) non indicano un livello CEFR per gli studenti exchange. Da verificare contattando l'IRO. [Fonte: nup.ac.cy]"
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254410",
    linkSito: "https://www.uni-frankfurt.de/incoming/en",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. || Contributo sociale semestrale ~345 EUR (include trasporti pubblici); corso intensivo di tedesco pre-semestre (3 settimane). Per i corsi in inglese il livello non e indicato - da verificare. [Fonte: scheda destinazione]"
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254410",
    linkSito: "https://www.uni-frankfurt.de/incoming/en",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 1; mesi: 5. || Contributo sociale semestrale ~345 EUR (include trasporti pubblici); corso intensivo di tedesco pre-semestre (3 settimane). Per i corsi in inglese il livello non e indicato - da verificare. [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "TOEFL iBT 80 / IELTS 6.0 equivalente - nessun certificato da presentare, ma l'ateneo puo negare l'accesso ai corsi senza il livello richiesto (in alternativa: ottimo tedesco)" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. autunnale)", periodo: "15 marzo - 15 aprile" },
      { cosa: "Nomination (sem. primaverile)", periodo: "15 settembre - 15 ottobre" },
      { cosa: "Application (sem. autunnale)", periodo: "entro 30 aprile" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28265759",
    linkSito: "https://www.uni-mannheim.de/io",
    notePratiche: "Nomination tardive non accettate. Corso intensivo di tedesco di 4 settimane (Summer/Winter Academy, ~685 EUR, 6 ECTS). Bachelor's program: https://www.vwl.uni-mannheim.de/en/academics/prospective-students-bsc/about-the-bachelors-programCourse offer: https://www.uni-mannheim.de/courses (Course catalogues from previous semesters are linked at the end of the page.)Courses in Economics: https://www.uni-mannheim.de/en/academics/coming-to-mannheim/exchange-students/courses/course-catalog/economics-all/Exchange students are allowed to take up to half of their courses outside the school of their exchange program. Since the Business School here in Mannheim doesn't belong to the same school than the Department of Economics, this would also apply to students for business courses. If students want to take courses outside of the school of their exchange program, they can take them from the university-wide electives, which do not require any prior knowledge of the subject. As far as business courses are concerned, this rule does not apply so strictly to economic's exchange students. They are allowed to choose from all business courses at undergraduate level that do not have capacity restrictions. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
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
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Incoming students within the economics-agreement are welcome to register for all Economics-courses and seminars on BSc/MSc-level regardless of which level they are studying. They can also register for courses at other Social Science-departments, if they are admitted to the departments in question. - Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 5. || Lingua: UCPH dichiara esplicitamente 'you do not submit proof of English proficiency with your application' per studenti Erasmus/exchange in Economics - nessun requisito CEFR applicabile. [Fonte: ku.dk/studies/exchange]"
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
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo (non obbligatorio per Economics; solo per Infermieristica e requisito minimo)" },
      { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254460",
    linkSito: "https://sri.ua.es/en/movilidad/incoming-students/fact-sheet.html",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Lingua: B1 spagnolo e B2 inglese indicati come 'recommended' nel factsheet UA (non obbligatori per Economics). [Fonte: sri.ua.es/en/movilidad/incoming-students/fact-sheet.html]"
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
    requisitoLingua: [
      { lingua: "Inglese / Spagnolo / Catalano", livello: "B2", condizione: "B2 nella lingua di insegnamento dei corsi scelti (Faculty of Economics and Business Studies UAB). Per corsi in catalano e accettato anche un certificato di spagnolo" }
    ],
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
    notePratiche: "Few courses in Economics available in the first semester - Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 3; mesi: 5. [Fonte: uab.cat/web/international-exchange, Faculty of Economics and Business Studies]"
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
    requisitoLingua: [
      { lingua: "Inglese / Spagnolo / Catalano", livello: "B2", condizione: "B2 nella lingua di insegnamento dei corsi scelti (Faculty of Economics and Business Studies UAB). Per corsi in catalano e accettato anche un certificato di spagnolo" }
    ],
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
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. [Fonte: uab.cat/web/international-exchange, Faculty of Economics and Business Studies]"
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
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B2", condizione: "spagnolo O inglese a livello B2 - nessun certificato richiesto (garantisce l'universita di provenienza)" },
      { lingua: "Inglese", livello: "B2", condizione: "spagnolo O inglese a livello B2 - nessun certificato richiesto (garantisce l'universita di provenienza)" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Info: www.uc3m.es (sezione Accommodation per exchange students).",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254511",
    linkSito: "https://www.uc3m.es/studies/international-exchange-students-in-UC3M-/bachelor-degrees",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L (2 stud.), LM (2 stud., solo IV anno di Madrid); studenti: 4; mesi: 5. || Corsi di spagnolo a pagamento prima e durante il semestre. Alcuni corsi possono non essere aperti agli exchange (vedi course offer). [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "fortemente raccomandato per i corsi in inglese; certificato del livello da allegare all'application" }
    ],
    prerequisiti: "Attenzione ai prerequisiti dei singoli corsi: senza prerequisiti non ci si puo iscrivere al corso.",
    scadenzeOspitante: [
      { cosa: "Nomination (term autunnale)", periodo: "entro 15 giugno" },
      { cosa: "Nomination (term primaverile/estivo)", periodo: "entro 15 ottobre" },
      { cosa: "Application (term autunnale)", periodo: "entro 30 giugno" },
      { cosa: "Application (term primaverile/estivo)", periodo: "entro 30 ottobre" }
    ],
    alloggio: "TecnoCampus segnala opzioni di alloggio condiviso e appartamenti a Mataro e Barcellona. Costo vita stimato ~900 EUR/mese.",
    visto: "Cittadini UE: nessun visto (serve tessera sanitaria europea valida per tutto il periodo). Extra-UE: visto + assicurazione sanitaria.",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254516",
    linkSito: "https://www.tecnocampus.cat",
    notePratiche: "Aperta a: Laurea Triennale in Commercio Estero e Turismo - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 6. || Titoli ufficiali della Pompeu Fabra University; Buddy Program per l'integrazione; possibilita di cambiare corsi nelle 2 settimane dopo il Welcome Day. [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Spagnolo e/o Catalano", livello: "A2", condizione: "livello minimo richiesto per studenti visiting Erasmus+ (undergraduate); test online su piattaforma OLS. Offerta corsi di lingua: spagnolo 100 EUR, catalano 25 EUR, 6 ECTS" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 30 aprile" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 30 settembre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 giugno" },
      { cosa: "Application (2 semestre)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Nessuna residenza garantita: la scheda elenca portali privati (sageco.es, erasmusplay, idealista, spotahome, badi) e la residenza UIB.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/20173684",
    linkSito: "https://internacional.uib.cat/Mobilitat-i-intercanvi/",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. [Fonte: internacional.uib.eu, pagina Visiting Students - Undergraduate Degree Studies]"
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
    requisitoLingua: [
      { lingua: "Spagnolo e/o Catalano", livello: "A2", condizione: "livello minimo richiesto per studenti visiting Erasmus+ (undergraduate); test online su piattaforma OLS. Offerta corsi di lingua: spagnolo 100 EUR, catalano 25 EUR, 6 ECTS" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 30 aprile" },
      { cosa: "Nomination (2 semestre)", periodo: "entro 30 settembre" },
      { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 giugno" },
      { cosa: "Application (2 semestre)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Nessuna residenza garantita: la scheda elenca portali privati (sageco.es, erasmusplay, idealista, spotahome, badi) e la residenza UIB.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/20173684",
    linkSito: "https://internacional.uib.cat/Mobilitat-i-intercanvi/",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. [Fonte: internacional.uib.eu, pagina Visiting Students - Undergraduate Degree Studies]"
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
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B1", condizione: "minimo richiesto; B2 fortemente raccomandato - le lezioni sono in spagnolo" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Tramite SACU (Servicio a la Comunidad Universitaria).",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "6 ECTS per materia; 1 ECTS = 25 ore di carico di lavoro.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254529",
    linkSito: "https://fceye.us.es/",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6. [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B1", condizione: "requisito standard per i corsi di triennale (Bachelor's degrees). Per Medicina, Fisioterapia e Nutrizione richiesto B2" },
      { lingua: "Spagnolo", livello: "B2", condizione: "per corsi di laurea magistrale (Master's degrees) e per le facolta sanitarie (Medicina, Fisioterapia, Nutrizione Umana)" }
    ],
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
    notePratiche: "Aperta a: CdS del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 9. || Aperta a: Laurea Magistrale in Global Development and Entrepreneurship - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 9. || Lingua: B1 spagnolo per triennale, B2 per magistrale; variazioni per facolta sanitarie. [Fonte: urv.cat/en/international/welcome/languages-at-the-urv]"
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
    alloggio: "Alloggi propri nelle migliori zone di Puerto de la Cruz + supporto nella ricerca di appartamenti privati. Costo vita ~1.000 EUR/mese.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26909297",
    linkSito: "",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 6. || Lingua: insegnamento in inglese e spagnolo; la pagina Erasmus di Iriarte (iriarteuniversidad.es/en/iriarte/erasmus-students) non indica un livello CEFR minimo - contattare mobility@iriarteuniversidad.es per conferma. Semestri: 9/9-16/1 e 26/1-22/5. Nomination via email (nome, data di nascita, email, corso). [Fonte: iriarteuniversidad.es]"
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
    alloggio: "Stanze soggette a disponibilita; procedura specifica per exchange (campus Chambery/Bourget e Annecy).",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare. Corso di francese gratuito per 1 semestre (4 ECTS).",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29137961",
    linkSito: "https://www.univ-smb.fr",
    notePratiche: "Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 5. || Integration week a fine agosto / integration day a fine gennaio. [Fonte: scheda destinazione]"
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
    alloggio: "Tramite CROUS di Nizza-Tolone (domanda online 15/1-15/5 per tutto l'anno).",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (assistenza dall'ateneo).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28265392",
    linkSito: "https://univ-cotedazur.eu/portals/economics-management-portal",
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "richiesta padronanza dell'inglese generale e accademico: IELTS 5.5-6.0 / TOEFL iBT 72-94 / TOEIC 785-940 / Cambridge 160-179, oppure certificato ufficiale dell'universita di provenienza" }
    ],
    prerequisiti: "Frequenza obbligatoria (max 4 assenze per corso). Chi ha completato una triennale viene inserito al 4° anno AUEB con corsi avanzati in inglese.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
      { cosa: "Documenti (autunno/anno intero)", periodo: "entro 31 maggio" },
      { cosa: "Documenti (primavera)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto (serve tessera sanitaria europea). Extra-UE: visto obbligatorio (verificare).",
    crediti: "30 ECTS/semestre (carico tipico); 3 settimane dall'inizio delle lezioni per cambiare corsi.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29537248",
    linkSito: "https://www.aueb.gr",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, PhD; studenti: 2; mesi: 5. || [Fonte: scheda destinazione] || Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5."
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
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "15 aprile - 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "1 - 31 ottobre" }
    ],
    alloggio: "Dormitori studenteschi (posti limitati) o alloggi privati, ampiamente disponibili in citta.",
    visto: "Cittadini UE: registrazione del soggiorno alla questura di Pola (documenti + contratto del padrone di casa autenticato). Extra-UE: registrazione entro 48 ore dall'ingresso.",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26909796",
    linkSito: "https://www.unipu.hr",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Aperta a: Laurea Magistrale in Sviluppo interculturale dei sistemi turistici e Laurea Magistrale in Tourism Management and Sustainability - [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 6. || Lingua: la scheda non indica un livello CEFR - da verificare. Corso di croato gratuito ogni semestre; Student X-card per mense e sconti. [Fonte: scheda destinazione]"
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254655",
    linkSito: "https://www.unist.hr",
    notePratiche: "Periodo vincolato: SI - Solo 1° semestre/YES - First semester only - Students can select up to 50% of their modules from other departments (modules from the University department of professional studies excluded) - Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. || Nomination via email a erasmus@unist.hr (si riceve il link al form online). [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "almeno conoscenza intermedia (B2) della lingua di insegnamento" }
    ],
    prerequisiti: "Minimo 20 ECTS/semestre da ottenere; max 10 ECTS in altri campi di studio (max 30 ECTS totali).",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. autunnale)", periodo: "entro 10 maggio" },
      { cosa: "Nomination (sem. primaverile)", periodo: "entro 10 novembre" },
      { cosa: "Application (sem. autunnale)", periodo: "entro 30 maggio" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Contattare housing@elte.hu - vedi elte.hu/en/arrange-housing.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Min. 20 ECTS/semestre, max 30 ECTS.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254659",
    linkSito: "https://www.elte.hu/en/erasmus",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni Internazionali Comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5. || Nomination solo tramite portale Mobility-Online (non via email). [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "almeno conoscenza intermedia (B2) della lingua di insegnamento" }
    ],
    prerequisiti: "Minimo 20 ECTS/semestre da ottenere; max 10 ECTS in altri campi di studio (max 30 ECTS totali).",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. autunnale)", periodo: "entro 10 maggio" },
      { cosa: "Nomination (sem. primaverile)", periodo: "entro 10 novembre" },
      { cosa: "Application (sem. autunnale)", periodo: "entro 30 maggio" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Contattare housing@elte.hu - vedi elte.hu/en/arrange-housing.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Min. 20 ECTS/semestre, max 30 ECTS.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254659",
    linkSito: "https://www.elte.hu/en/erasmus",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni Internazionali Comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. || Nomination solo tramite portale Mobility-Online (non via email). [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "prova recente del livello B2 richiesta per completare l'application" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "entro 1 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
      { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Info dopo l'application (via email da UL Global).",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254667",
    linkSito: "https://www.ul.ie/global/incoming-students",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5. || Campus a 5 km da Limerick, 20 km dall'aeroporto di Shannon. [Fonte: scheda destinazione]"
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
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "livello minimo richiesto: certificato riconosciuto o conferma ufficiale dell'universita di provenienza" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (sem. invernale)", periodo: "entro 31 maggio" },
      { cosa: "Nomination (sem. estivo)", periodo: "entro 15 novembre" },
      { cosa: "Application online (sem. invernale)", periodo: "entro 15 giugno" },
      { cosa: "Application online (sem. estivo)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Dormitori KUE NON disponibili per exchange (salvo accordo bilaterale): ricerca autonoma (OLX, gruppi FB, Student Depot). Stanza singola ~1200-1800 PLN/mese + ~1800 PLN cibo.",
    visto: "Cittadini UE/EFTA: solo documento valido. Extra-UE: visto (verificare in ambasciata).",
    crediti: "Carico pieno 30 ECTS (max 35). Corsi inglesi: International Business, Corporate Finance and Accounting, Modern Business Management, Applied Informatics.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254714",
    linkSito: "https://bpz.uek.krakow.pl/",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e della Venice School of Management - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 6. || Corsi di polacco gratuiti (4 ECTS); Mentor program; ESN attiva. [Fonte: scheda destinazione]"
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
    alloggio: "Case dello studente disponibili (vedi regolamento sulla scheda).",
    visto: "Cittadini UE: nessun visto. Extra-UE: visto obbligatorio.",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254720",
    linkSito: "https://www.umk.pl/en/erasmus/",
    notePratiche: "Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 5. || Corso di polacco gratuito (2 lezioni/settimana); Mentor Programme con studente polacco. [Fonte: scheda destinazione]"
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
    scadenzeOspitante: [
      { cosa: "Nomination (sem. autunnale)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (sem. primaverile)", periodo: "entro 15 novembre" },
      { cosa: "Application (sem. autunnale)", periodo: "entro 15 giugno" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 15 dicembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28244595",
    linkSito: "https://www.nova-uni.si",
    notePratiche: "Lingua: la scheda non indica un livello CEFR - da verificare con international@nova-uni.si. Tutti gli incoming Erasmus studiano a Lubiana (non a Nova Gorica). [Fonte: scheda destinazione] || Students are assigned to the Ljubljana Campus. Guide: https://epf.nova-uni.si/wp-content/uploads/2020/05/Study-info-Course-catalogue-with-eUniversity-2020.pdf - Aperta a: CdS del Dipartimento di Economia e Laurea Magistrale in Relazioni internazionali comparate - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 2; mesi: 5."
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
    scadenzeOspitante: [
      { cosa: "Application (sem. autunnale/anno intero)", periodo: "entro 12 giugno" },
      { cosa: "Application (sem. primaverile)", periodo: "entro 7 novembre" },
      { cosa: "Richiesta alloggio on-campus (autunno)", periodo: "~22 giugno - 3 luglio" },
      { cosa: "Richiesta alloggio on-campus (primavera)", periodo: "~7 dicembre - 8 gennaio" }
    ],
    alloggio: "Alloggio GRATUITO on-campus per exchange (camere doppie nei dormitori Bilkent, fino a esaurimento, ordine di arrivo delle richieste).",
    visto: "Serve assicurazione sanitaria valida in Turchia (prerequisito per il permesso di soggiorno).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28265358",
    linkSito: "https://exchange.bilkent.edu.tr/",
    notePratiche: "Aperta a: Cds del Dipartimento di Economia - [Dati ufficiali bando 2026/27] ciclo: L , LM, PHD; studenti: 2; mesi: 6. || Lingua: serve una lettera di competenza in inglese dell'universita di provenienza, senza livello CEFR esplicito - da verificare. Navette gratuite campus-centro; corsi di turco base (5 ECTS). [Fonte: scheda destinazione]"
  }
];
