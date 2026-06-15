// ============================================================
// DATI DELLE METE ERASMUS - Venice School of Management
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e file ODS "Lista destinazioni Erasmus+ per studio a.a. 2026/2027".
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

const METE = [
  {
    id: "00-a-klagenf01-0410-business-and-administr",
    universita: "UNIVERSITY OF KLAGENFURT - FACULTY OF MANAGEMENT, ECONOMICS AND LAW",
    citta: "Klagenfurt",
    paese: "Austria",
    codiceErasmus: "A KLAGENF01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 31 gennaio" },
      { cosa: "Application (autunno)", periodo: "entro 15 febbraio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 luglio" },
      { cosa: "Application (primavera)", periodo: "entro 31 luglio" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254346",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 3; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: fact sheet AAU 2026/27 || Lingua: CEFR generale non pubblicato ufficialmente per exchange; verificare requisiti dei singoli corsi"
  },
  {
    id: "01-a-wien01-0410-business-and-administrati",
    universita: "UNIVERSITAET WIEN - Faculty of Business, Economics and Statistics",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "dopo nomination, secondo istruzioni dell'International Office" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
      { cosa: "Application (primavera)", periodo: "dopo nomination, secondo istruzioni dell'International Office" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13945968",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 6. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: nomination ufficiale entro 1 maggio/1 novembre; application inviata via email dopo la nomination || Lingua: CEFR non pubblicato ufficialmente; l'ateneo richiede conferma delle competenze linguistiche nella nomination"
  },
  {
    id: "02-b-bruxel04-0413-management-and-administ",
    universita: "UNIVERSITE' LIBRE DE BRUXELLES - Faculty of Philosophy and Social Sciences",
    citta: "Bruxelles",
    paese: "Belgio",
    codiceErasmus: "B BRUXEL04",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 5, mesi: 5, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254358",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Economia e gestione delle arti e delle attività culturali [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 5; mesi: 5. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "03-b-louvain01-0410-business-and-administr",
    universita: "Université catholique de Louvain - Louvain School of Management",
    citta: "Louvain-la-Neuve",
    paese: "Belgio",
    codiceErasmus: "B LOUVAIN01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 20 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516559",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 4; mesi: 5. || Scadenze: LSM fact sheet 2025/26, da confermare per 2026/27 || Lingua: LSM indica CEFR B2 raccomandato in francese o inglese"
  },
  {
    id: "04-d-bamberg01-0410-business-and-administr",
    universita: "OTTO-FRIEDRICH-UNIVERSITAET BAMBERG - Faculty of Social Sciences, Economics, and Business Administration",
    citta: "Bamberg",
    paese: "Germania",
    codiceErasmus: "D BAMBERG01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "PhD", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254388",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 6; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: information sheet Bamberg 2024/25 e pagina ufficiale How do I apply || Lingua: richiesto almeno B1 tedesco e/o almeno B2 inglese"
  },
  {
    id: "05-d-deggend01-0410-business-and-administr",
    universita: "DEGGENDORF INSTITUTE OF TECHNOLOGY - TECNISCHE HOCHSCHULE DEGGENDORF - Faculty of Applied Economics (School of Management)",
    citta: "Deggendorf",
    paese: "Germania",
    codiceErasmus: "D DEGGEND01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" },
      { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "1 aprile - 1 giugno" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
      { cosa: "Application (primavera)", periodo: "1 ottobre - 1 dicembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254406",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze e lingua: fact sheet DIT; B1 nella lingua di insegnamento, senza test obbligatorio prima dell'arrivo"
  },
  {
    id: "06-d-erlange01-0410-business-and-administr",
    universita: "FRIEDRICH-ALEXANDER-UNIVERSITAET ERLANGEN-NUERNBERG - School of Business, Economics and Society",
    citta: "Erlangen/Nuernberg",
    paese: "Germania",
    codiceErasmus: "D ERLANGE01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254409",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: fact sheet FAU per studenti UE/SEE/Svizzera || Lingua: WiSo richiede/recomanda B1 in tedesco o inglese"
  },
  {
    id: "07-d-frankfu07-0410-business-and-administr",
    universita: "Frankfurt School of Finance & Management",
    citta: "Francoforte",
    paese: "Germania",
    codiceErasmus: "D FRANKFU07",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "C1", condizione: "per moduli in inglese" },
      { lingua: "Tedesco", livello: "C1", condizione: "per moduli in tedesco" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29532998",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 6; mesi: 5. Specifiche: Courses are entirely taught in English. Host university offers 3 Master’s programs: Master’s students (LM) must choose a specific program, while Bachelor’s students (L) can mix courses from different programs. Accommodation support is provided. || Scadenze e lingua: fact sheet Frankfurt School 2026/27; inglese TOEFL iBT 90/IELTS 7.0/Cambridge C1, tedesco C1 per moduli in tedesco"
  },
  {
    id: "08-d-hamburg01-0410-business-and-administr",
    universita: "University of Hamburg - Business School + Faculty of Business, Economics and Social Sciences",
    citta: "Amburgo",
    paese: "Germania",
    codiceErasmus: "D HAMBURG01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29533799",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 3; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only Specifiche: The cross-over course choice is possible for Bachelor students, so they have a wider offer of English taught courses. In this case they should choose at least 50% (usually 3 courses) from their Faculty of enrollment and 2 from the other Faculty. On the Master level at the moment it is not possible. For modules where the language of instruction is “German/English.” , it means that professors ask during the first week of semester if there are any participants who are not fluent in German and in case students prefer the course in English – they talk in English. The literature is also in English. Following the link you will find the list of courses for both faculties, available in both English and German: https://www.wiso.uni-hamburg.de/internationales/international-office/study-with-us/studying-at-uhh/course-choice.html || Scadenze e lingua: fact sheet WiSo/UHH; certificato B2 in tedesco e/o inglese"
  },
  {
    id: "09-d-hamburg13-0410-business-and-administr",
    universita: "Hamburg School of Business Administration(HSBA)",
    citta: "Amburgo",
    paese: "Germania",
    codiceErasmus: "D HAMBURG13",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "4 mesi prima dell'inizio del term" },
      { cosa: "Application (autunno)", periodo: "3 mesi prima dell'inizio del term" },
      { cosa: "Nomination (primavera)", periodo: "4 mesi prima dell'inizio del term" },
      { cosa: "Application (primavera)", periodo: "3 mesi prima dell'inizio del term" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28286275",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. Periodo vincolato: SI - 1 studente nel 1° semestre e 1 studente nel 2° semestre; No term 4 (luglio-settembre)/YES - 1 student in the Fall semester and 1 student in the Spring semester; No term 4 (july-september) || Scadenze: sito/fact sheet HSBA, nomination 4 mesi e application 3 mesi prima del term || Lingua: B2 inglese e/o tedesco richiesto a tutti tranne madrelingua"
  },
  {
    id: "10-d-heilbro01-0410-business-and-administr",
    universita: "HOCHSCHULE HEILBRONN - Faculty of Business and Transport Management",
    citta: "Heilbronn",
    paese: "Germania",
    codiceErasmus: "D HEILBRO01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }, { codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi bachelor in inglese; requisiti master da verificare sul portale HHN" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
      { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254425",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: HHN Information Sheet, nomination 1/5 e 15/11, application 15/5 e 1/12 || Lingua: B2 inglese CEFR pubblicato per bachelor; per master HHN rimanda a requisiti specifici"
  },
  {
    id: "11-d-koblenz03-0410-business-and-administr",
    universita: "WHU – Otto Beisheim School of Management",
    citta: "Vallendar",
    paese: "Germania",
    codiceErasmus: "D KOBLENZ03",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange BSc/MSc nominati da partner" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
      { cosa: "Application (autunno)", periodo: "istruzioni dopo nomination; scadenza indicata da WHU" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "istruzioni dopo nomination; scadenza indicata da WHU" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28285711",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5. || Scadenze: WHU BSc/MSc Exchange 2026/27, nomination 1/6 e 1/10; application online inviata dopo nomination || Lingua: nomination partner considerata prova di inglese almeno B2"
  },
  {
    id: "12-d-koln01-0410-business-and-administrati",
    universita: "UNIVERSITAET ZU KOELN - Faculty of Management, Economics and Social Sciences",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "D KOLN01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "PhD", note: "su 5 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254429",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD (vedi colonna Note); studenti: 5; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: Cologne WiSo Fact Sheet 2026/27, nomination 1/5 e 1/11, application 5/6 e 1/12 || Lingua: B2 CEFR in inglese o tedesco"
  },
  {
    id: "13-d-lunebur01-0410-business-and-administr",
    universita: "LEUPHANA UNIVERSITAT LUNEBURG - School of Management & Technology (M&T)",
    citta: "Lueneburg",
    paese: "Germania",
    codiceErasmus: "D LUNEBUR01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984854",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 3; mesi: 6. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: Leuphana Fact Sheet 2025/26, nomination 15/5 e 15/11, application 15/7 e 15/1 || Lingua: B2 inglese per corsi in inglese, B1 tedesco per corsi in tedesco"
  },
  {
    id: "14-d-munchen12-0410-business-and-administr",
    universita: "MUNICH BUSINESS SCHOOL - Business School",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN12",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 4, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per Undergraduate Exchange Semester" },
      { lingua: "Inglese", livello: "B2", condizione: "per Graduate Exchange Semester; IELTS 6.5/TOEFL iBT 85 equivalenti" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
      { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13945952",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 4. Periodo vincolato: SI - 1 studente nel 1° semestre e 1 studente nel 2° semestre/YES - 1 student in the Fall semester and 1 student in the Spring semester || Scadenze: MBS incoming exchange/fact sheet, nomination 31/3 e 15/9, application 30/4 e 15/10 || Lingua: inglese richiesto; TOEFL/IELTS equivalenti almeno B2"
  },
  {
    id: "15-d-regensb01-0410-business-and-administr",
    universita: "Universität Regensburg - Faculty of Business, Economics, and Management Information Systems",
    citta: "Regensburg",
    paese: "Germania",
    codiceErasmus: "D REGENSB01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Fava Valentina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26908440",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L (3° anno),LM; studenti: 4; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: Universität Regensburg exchange application, nomination 1/5 e 1/11, application 1/4-15/5 e 1/9-15/11 || Lingua: B2 tedesco per corsi in tedesco; B2 inglese per corsi in inglese, B2/C1 indicato per la Faculty of Business, Economics and Management Information Systems"
  },
  {
    id: "16-d-lunebur01-0410-business-and-administr",
    universita: "LEUPHANA UNIVERSITAT LUNEBURG - School of Culture and Society",
    citta: "Lueneburg",
    paese: "Germania",
    codiceErasmus: "D LUNEBUR01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984854",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Innovation and Management for Culture and Creativity [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 3; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: Leuphana Fact Sheet 2025/26, nomination 15/5 e 15/11, application 15/7 e 15/1 || Lingua: B2 inglese per corsi in inglese, B1 tedesco per corsi in tedesco"
  },
  {
    id: "17-dk-arhus01-0410-business-and-administra",
    universita: "AARHUS UNIVERSITET - BBS: Department of Management and Department of Economics and Business Economics",
    citta: "Aarhus",
    paese: "Danimarca",
    codiceErasmus: "DK ARHUS01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per seguire corsi in inglese; Aarhus richiede documentazione/competenza equivalente per gli exchange" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "15 febbraio - 25 marzo" },
      { cosa: "Application (autunno)", periodo: "entro 1 aprile" },
      { cosa: "Nomination (primavera)", periodo: "15 agosto - 25 settembre" },
      { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282417",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 5; mesi: 5. || Scadenze: Aarhus University exchange admission 2026, nomination 15/2-25/3 e 15/8-25/9, application 1/4 e 1/10 || Lingua: inglese B2 per corsi in inglese secondo requisiti exchange"
  },
  {
    id: "18-dk-kobenha05-0410-business-and-administ",
    universita: "Copenhagen business school",
    citta: "Copenhagen",
    paese: "Danimarca",
    codiceErasmus: "DK KOBENHA05",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }, { codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "C1", condizione: "per application exchange se serve prova linguistica; CAE C1/IELTS 7.0/TOEFL iBT 94 equivalenti" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "secondo procedura partner CBS" },
      { cosa: "Application (autunno)", periodo: "entro ultima settimana di aprile" },
      { cosa: "Nomination (primavera)", periodo: "secondo procedura partner CBS" },
      { cosa: "Application (primavera)", periodo: "entro ultima settimana di ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28285753",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 4; mesi: 5. Specifiche: Info for incoming students at https://www.cbs.dk/en/study/internationals/exchange-students || Scadenze: CBS exchange students, application entro ultima settimana di aprile/ottobre; nomination gestita dalla home university con form CBS || Lingua: test riconosciuti CBS per exchange equivalenti almeno C1; singoli corsi business spesso indicano B2 CEFR raccomandato"
  },
  {
    id: "19-dk-odense01-0410-business-and-administr",
    universita: "SYDDANSK UNIVERSITET - Faculty of Business and Social Science",
    citta: "Odense",
    paese: "Danimarca",
    codiceErasmus: "DK ODENSE01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "documentazione di competenza inglese equivalente almeno al Danish B2 standard" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282419",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L , LM, PhD (PhD solo 3 mesi); studenti: 4; mesi: 5. || Scadenze: SDU exchange application, nomination 1/5 e 1/11, application 15/5 e 15/11 || Lingua: inglese equivalente almeno al Danish B2 standard"
  },
  {
    id: "20-e-alcal-h01-0410-business-and-administr",
    universita: "UNIVERSIDAD DE ALCALA (UAH) - Facultad de Ciencias Económicas, Empresariales y Turismo - Departamento de Economía y Dirección de Empresas",
    citta: "Alcala de Henares",
    paese: "Spagna",
    codiceErasmus: "E ALCAL-H01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254457",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5. Specifiche: Master programs we teach are fully in Spanish, and require a B2 level of Spanish. With regards to the undergraduate modules, we require a mandatory B1 level of Spanish. We do accept a letter of confirmation from the home university or an official certificate. || Scadenze: UAH fact sheet/procedura Erasmus, nomination 1/3-30/4 e 15/9-15/10, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 standard; Faculty of Economics richiede minimo B1 spagnolo, inglese B2 per corsi in inglese"
  },
  {
    id: "21-e-barcelo258-0410-business-and-administ",
    universita: "ESCI-UPF",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO258",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo/catalano" },
      { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 12 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 29 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 16 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28285679",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 6. || Scadenze: ESCI-UPF exchange students 2026/27, nomination 12/5 e 1/10, application 29/5 e 16/10 || Lingua: ESCI-UPF non impone un requisito specifico, ma raccomanda spagnolo B1 o inglese B2 secondo lingua dei corsi"
  },
  {
    id: "22-e-granada01-0413-management-and-adminis",
    universita: "UNIVERSIDAD DE GRANADA - Faculty of Economics and Business",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E GRANADA01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254489",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese"
  },
  {
    id: "23-e-madrid04-0410-business-and-administra",
    universita: "UNIVERSIDAD AUTONOMA DE MADRID - Faculty of Business",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID04",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254507",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. || Scadenze: UAM fact sheet 2026/27, nomination 1/4-30/4 e 1/9-30/9, application 1/5-31/5 e 1/10-31/10 || Lingua: spagnolo B2 obbligatorio per Faculty of Economics and Business; inglese B2 per corsi in inglese"
  },
  {
    id: "24-e-madrid114-0410-business-and-administr",
    universita: "ESIC BUSINESS & MARKETING SCHOOL - 2nd year MA students Campus Madrid, BA students and 1st year MA students Campus Barcelona or Campus Valencia",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID114",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B2 o superiore per graduate" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 16 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254510",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: 2 L; 2 LM; studenti: 4; mesi: 5. Specifiche: BA students and 1st year MA students can choose between VALENCIA or BARCELONA campus. MA students will be assigned to the MADRID campus but they should be enrolled in their final year of Master during mobility. Incoming students will be admitted either in the Business or Marketing degrees || Scadenze: ESIC fact sheet 2026/27, nomination 15/4 e 16/10, application 15/5 e 1/11 || Lingua: accreditamento inglese o spagnolo B2; B2 o superiore per graduate"
  },
  {
    id: "25-e-madrid232-0410-business-and-administr",
    universita: "ESIC UNIVERSITY - Campus Madrid",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID232",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26953719",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. Specifiche: Campus Madrid || Scadenze: ESIC University Madrid fact sheet 2026/27, nomination 15/4 e 15/10, application 15/5 e 15/11 || Lingua: accreditamento spagnolo B2 o inglese B2"
  },
  {
    id: "26-e-malaga01-0410-business-and-administra",
    universita: "UNIVERSIDAD DE MALAGA - Faculty of Economics and Business",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E MALAGA01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254514",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 6; mesi: 5. || Scadenze: UMA fact sheet 2025/26, nomination via Algoria; application operativa tramite selezione insegnamenti in Algoria || Lingua: spagnolo B1 raccomandato, certificato non richiesto"
  },
  {
    id: "27-e-valenci01-0410-business-and-administr",
    universita: "UNIVERSITAT DE VALENCIA - Faculty of Economics",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E VALENCI01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23280406",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only || Scadenze: UV incoming Erasmus, nomination 1/3-31/5 per autunno e 1/9-31/10 per primavera; application entro 30 giorni dalla email || Lingua: certificato non richiesto, spagnolo B1 raccomandato"
  },
  {
    id: "28-e-zaragoz01-0410-business-and-administr",
    universita: "UNIVERSIDAD DE ZARAGOZA - Facultad de Economia y Empresa - Departamento de Contabilidad y Finanzas",
    citta: "Saragozza",
    paese: "Spagna",
    codiceErasmus: "E ZARAGOZ01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254542",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 8; mesi: 5. Periodo vincolato: SI - 4 studenti nel 1° semestre e 4 studenti nel 2° semestre/YES - 4 students in the fall semester and 4 students in the spring semester || Scadenze: UNIZAR Erasmus incoming 2025/26, nomination 30/5 e 20/10, application 16/6 e 7/11 || Lingua: Facolta di Economia e Impresa indica spagnolo non inferiore a B1 CEFR"
  },
  {
    id: "29-f-angers10-0410-business-and-administra",
    universita: "Groupe ESSCA",
    citta: "Angers",
    paese: "Francia",
    codiceErasmus: "F ANGERS10",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "su 8 posti totali condivisi tra i livelli" },
      { numero: 8, mesi: 5, livello: "LM", note: "su 8 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi insegnati in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139555",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 8; mesi: 5. Periodo vincolato: SI - 4 studenti nel 1° semestre e 4 studenti nel 2° semestre/YES - 4 students in the fall semester and 4 students in the spring semester Specifiche: ESSCA has got many campuses,both in France and abroad (Aix-en-Provence,Angers,Bordeaux,Budapest,Luxembourg,Lyon,Malaga,Paris,Shanghai,Strasbourg); with only exception of Shanghai, students can go to any campus; students are required to choose 2 options in terms of campuses, and then they will see which one can be accommodated (Paris is quite crowded, so it is recommended t to consider the other campuses); core modules are the same in each campus, only electives change from campus to campus. Regardless of the chosen campus, students will receive the Erasmus grant as if the mobility is carried out in France || Scadenze: ESSCA fall/spring semester pages, nomination 1/5 e 1/10, application 15/5 e 15/10 || Lingua: inglese B2 per corsi in inglese"
  },
  {
    id: "30-f-bordeau57-0410-business-and-administr",
    universita: "Kedge Business School",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU57",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }, { codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 12, mesi: 5, livello: "L", note: "su 12 posti totali condivisi tra i livelli" },
      { numero: 12, mesi: 5, livello: "LM", note: "su 12 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi insegnati in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi insegnati in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29532980",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 12; mesi: 5. Specifiche: 2 campuses open to exchange students: Marseille and Bordeaux || Scadenze: KEDGE fact sheet 2025/26, nomination 15/4 e 30/9, application 15/5 e 15/10 || Lingua: inglese B2 per corsi in inglese; francese B2 per corsi in francese"
  },
  {
    id: "31-f-cergy03-0410-business-and-administrat",
    universita: "ESSEC Business School - Business School - Global BBA",
    citta: "Cergy",
    paese: "Francia",
    codiceErasmus: "F CERGY03",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 9, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi business in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "5 aprile - 30 aprile" },
      { cosa: "Application (autunno)", periodo: "5 maggio - 30 maggio" },
      { cosa: "Nomination (primavera)", periodo: "5 ottobre - 30 ottobre" },
      { cosa: "Application (primavera)", periodo: "5 novembre - 30 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13945949",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 9; mesi: 5. || Scadenze e lingua: ESSEC Global BBA factsheet 2026/27"
  },
  {
    id: "32-f-chamber01-0410-business-and-administr",
    universita: "Université Savoie Mont Blanc - IAE Annecy",
    citta: "Annecy",
    paese: "Francia",
    codiceErasmus: "F CHAMBER01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "richiesto per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro fine marzo" },
      { cosa: "Application (autunno)", periodo: "da meta marzo a fine aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro fine ottobre" },
      { cosa: "Application (primavera)", periodo: "da meta ottobre a meta novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254555",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 6. || Scadenze e lingua: information sheet USMB 2026/27"
  },
  {
    id: "33-f-courbev04-0410-business-and-administr",
    universita: "ECOLE SUPERIEURE DE COMMERCE (EDC) DE PARIS",
    citta: "Courbevoie",
    paese: "Francia",
    codiceErasmus: "F COURBEV04",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254556",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5. || Scadenze e lingua: EDC Paris fact sheet 2025/26"
  },
  {
    id: "34-f-dijon01-0413-management-and-administr",
    universita: "Université Bourgogne Europe - Institut Diderot",
    citta: "Dijon",
    paese: "Francia",
    codiceErasmus: "F DIJON01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 6, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282436",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Economia e gestione delle arti e delle attività culturali [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 6; mesi: 6. || Scadenze e lingua: UBE/Ca' Foscari factsheet 2025/26"
  },
  {
    id: "35-f-dijon11-0410-business-and-administrat",
    universita: "ESC Dijon Bourgogne - Burgundy School of Business",
    citta: "Dijon",
    paese: "Francia",
    codiceErasmus: "F DIJON11",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B1", condizione: "Bachelor/Pre-Master/Master in Management year 1" },
      { lingua: "Inglese", livello: "B2", condizione: "Master in Management year 2/MSc" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "27 aprile - 4 maggio" },
      { cosa: "Application (autunno)", periodo: "4 maggio - 18 maggio" },
      { cosa: "Nomination (primavera)", periodo: "12 ottobre - 26 ottobre" },
      { cosa: "Application (primavera)", periodo: "26 ottobre - 9 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139290",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM,PhD; studenti: 4; mesi: 5. Specifiche: 2 campuses: Dijon and Lyon. Students must choose modules only from one programme, they cannot mix modules from different programmes. For all MSc, there is a limited number of 24 ECTS. Students going to Dijon can add 6 ECTS credits (French course worth 2 ECTS + Intercultural and Communication Management worth 4 ECTS) || Scadenze e lingua: BSB factsheet 2026/27"
  },
  {
    id: "36-f-dijon11-0413-management-and-administr",
    universita: "ESC Dijon Bourgogne - Burgundy School of Business",
    citta: "Dijon",
    paese: "Francia",
    codiceErasmus: "F DIJON11",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B1", condizione: "Bachelor/Pre-Master/Master in Management year 1" },
      { lingua: "Inglese", livello: "B2", condizione: "Master in Management year 2/MSc" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "27 aprile - 4 maggio" },
      { cosa: "Application (autunno)", periodo: "4 maggio - 18 maggio" },
      { cosa: "Nomination (primavera)", periodo: "12 ottobre - 26 ottobre" },
      { cosa: "Application (primavera)", periodo: "26 ottobre - 9 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139290",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Economia e gestione delle arti e delle attività culturali [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 5. Periodo vincolato: SI - Solo 1° semestre/YES - First semester only Specifiche: Campus Dijon, Master of Arts and Cultural Management. Students must take all the courses of the Master of Arts and Cultural Management (24 ECTS). If needed, it is possible to add 2 pre-determined modules. Maximum: 30 ECTS || Scadenze e lingua: BSB factsheet 2026/27"
  },
  {
    id: "37-f-lehavre04-0410-business-and-administr",
    universita: "EM-Normandie Business School",
    citta: "Le Havre",
    paese: "Francia",
    codiceErasmus: "F LEHAVRE04",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516590",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 4; mesi: 5. || Scadenze e lingua: pagina Exchange Programmes EM Normandie 2026/27"
  },
  {
    id: "38-f-lille11-0410-business-and-administrat",
    universita: "Université Catholique de Lille - IESEG School of Management",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F LILLE11",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 20 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 20 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516647",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 6; mesi: 5. || Scadenze: IÉSEG Exchange Program Factsheet 2025/2026 || Lingua: CEFR non pubblicato ufficialmente; richiesto working level of English, nessun test ufficiale"
  },
  {
    id: "39-f-lyon23-0410-business-and-administrati",
    universita: "EMLYON BUSINESS SCHOOL - Emlyon Business School",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "F LYON23",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 12, mesi: 5, livello: "L", note: "su 12 posti totali condivisi tra i livelli" },
      { numero: 12, mesi: 5, livello: "LM", note: "su 12 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16148038",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L (6 stud.), LM (6 stud.); studenti: 12; mesi: 5. || Scadenze e lingua: pagine emlyon Global BBA/Master in Management exchange students 2025/2026"
  },
  {
    id: "40-f-montpel54-0410-business-and-administr",
    universita: "IAE MONTPELLIER - IAE MONTPELLIER",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "F MONTPEL54",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28285692",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5. Specifiche: It is not possible to select modules offederd by a different department || Scadenze e lingua: pagina IAE Montpellier incoming/exchange students 2025/2026"
  },
  {
    id: "41-f-nancy43-0410-business-and-administrat",
    universita: "Université de Lorraine - IAE Metz",
    citta: "Metz",
    paese: "Francia",
    codiceErasmus: "F NANCY43",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "PhD", note: "su 5 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26909325",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM,PhD; studenti: 5; mesi: 5. || Scadenze: Université de Lorraine Student Mobility Fact Sheet 2025/2026 || Lingua: CEFR non pubblicato ufficialmente nella scheda IAE Metz; corsi offerti in inglese"
  },
  {
    id: "42-f-nantes12-0410-business-and-administra",
    universita: "Audencia Business School",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F NANTES12",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 10, mesi: 6, livello: "L", note: "su 10 posti totali condivisi tra i livelli" },
      { numero: 10, mesi: 6, livello: "LM", note: "su 10 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "dal 1 febbraio al 10 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 13 maggio" },
      { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 30 settembre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139585",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 10; mesi: 6. Specifiche: Students cannot mix BA and MA modules. MA modules migh have a limited number of spots available. Student must choose a track and cannot mix modules of different tracks. Students can also choose modules offered in the frame of summer and winter programmes. Master's students have the following two options: • attend the 4th year of undergraduate courses (pick and choose, 2 tracks and one main course) • attend the Grande Ecole. Please be aware that the academic offer is more limited in the Spring Semester || Scadenze: Audencia fact sheet 2026/27 || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "43-f-paris256-0410-business-and-administra",
    universita: "Paris School of Business",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS256",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 10, mesi: 5, livello: "L", note: "su 10 posti totali condivisi tra i livelli" },
      { numero: 10, mesi: 5, livello: "LM", note: "su 10 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per programmi/corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per programmi/corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
      { cosa: "Application (autunno)", periodo: "dopo nomination, tramite application form online" },
      { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
      { cosa: "Application (primavera)", periodo: "dopo nomination, tramite application form online" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516577",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 10; mesi: 5. || Scadenze: nomination da fact sheet PSB precedente; application corrente online dopo nomination, verificare date aggiornate || Lingua: pagina exchange PSB, B2 per inglese/francese"
  },
  {
    id: "44-f-paris270-0410-business-and-administra",
    universita: "De Vinci Higher Education group - EMLV Business School",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS270",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 12, mesi: 5, livello: "L", note: "su 12 posti totali condivisi tra i livelli" },
      { numero: 12, mesi: 5, livello: "LM", note: "su 12 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "prima della registrazione online" },
      { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
      { cosa: "Nomination (primavera)", periodo: "prima della registrazione online" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139474",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L(6), LM (6); studenti: 12; mesi: 5. || Scadenze: pagina EMLV exchange students || Lingua: B2 nella lingua di insegnamento"
  },
  {
    id: "45-f-poitier01-0410-business-and-administr",
    universita: "UNIVERSITE DE POITIERS - Institut d’Administration des Entreprises",
    citta: "Poitiers",
    paese: "Francia",
    codiceErasmus: "F POITIER01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23331167",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 3; mesi: 6. || Scadenze: IAE Poitiers fact sheet 2025/26 || Lingua: B2 CEFR in francese e/o inglese"
  },
  {
    id: "46-f-reims25-0410-business-and-administrat",
    universita: "NEOMA Business School",
    citta: "Reims",
    paese: "Francia",
    codiceErasmus: "F REIMS25",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 12, mesi: 5, livello: "L", note: "su 12 posti totali condivisi tra i livelli" },
      { numero: 12, mesi: 5, livello: "LM", note: "su 12 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato per exchange students" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 15 aprile" },
      { cosa: "Application (autunno)", periodo: "entro fine aprile" },
      { cosa: "Nomination (primavera)", periodo: "dal 1 settembre al 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro inizio novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139491",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L(6), LM(6); studenti: 12; mesi: 5. Specifiche: 3 campuses: Reims, Rouen and Paris. In Paris the course offer is limited. It is recommended to choose Reims or Rouen campuses || Scadenze: NEOMA fact sheet 2025/26 || Lingua: inglese B2/CECRL raccomandato per exchange students; certificato non richiesto"
  },
  {
    id: "47-f-rennes01-0410-business-and-administra",
    universita: "UNIVERSITE DE RENNES 1 - Faculty of Economics",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F RENNES01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254546",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L (3°anno), LM; studenti: 3; mesi: 5. Specifiche: For Bachelor's students the mobility is allowed at the third year only since two years of undergraduate studies are required for admission to Rennes Exchange Programme in Economics || Scadenze: fact sheet Universite de Rennes 2025/26 || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "48-f-strasbo48-0410-business-and-administr",
    universita: "UNIVERSITE DE STRASBOURG - EM Strasbourg Business School",
    citta: "Strasburgo",
    paese: "Francia",
    codiceErasmus: "F STRASBO48",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29573593",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 2; mesi: 6. || Scadenze: EM Strasbourg fact sheet 2025/26 || Lingua: B2 nella lingua di insegnamento fortemente raccomandato; certificato non richiesto"
  },
  {
    id: "49-f-toulous01-0410-business-and-administr",
    universita: "Universite Toulouse Capitole - Toulouse School of Management",
    citta: "Tolosa",
    paese: "Francia",
    codiceErasmus: "F TOULOUS01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Khan Ashraf",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 20 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 20 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 20 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139504",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 6; mesi: 5. || Scadenze: TSM incoming 2026/27 || Lingua: certificato B2 richiesto nella lingua dei corsi scelti"
  },
  {
    id: "50-f-toulous03-0410-business-and-administr",
    universita: "Toulouse University - University Tecnhology Institute",
    citta: "Tolosa",
    paese: "Francia",
    codiceErasmus: "F TOULOUS03",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 10, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516638",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 10; mesi: 5. || Scadenze: Universite Toulouse III Erasmus incoming || Lingua: B2 indicato per inglese/francese da lista partner; verificare con IUT prima della candidatura"
  },
  {
    id: "51-f-paris525-0410-business-and-administra",
    universita: "ESLSCA Business School Paris (=Ecole Supérieure Libre des Sciences Commerciales Appliquées)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS525",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
      { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516610",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. || Scadenze: ESLSCA fact sheet 2025/26 || Lingua: B2 per corsi in inglese/francese secondo fact sheet"
  },
  {
    id: "52-g-athine04-0410-business-and-administra",
    universita: "ATHENS UNIVERSITY OF ECONOMICS AND BUSINESS",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G ATHINE04",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
      { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254640",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. || Scadenze e lingua: AUEB fact sheet 2025/26; corsi disponibili in inglese"
  },
  {
    id: "53-hu-budapes03-0311-economics-e-0413-mana",
    universita: "CORVINUS UNIVERSITY OF BUDAPEST - Faculty of Economics",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES03",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }, { codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per exchange students" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "1 aprile - 20 aprile" },
      { cosa: "Application (autunno)", periodo: "entro 5 maggio" },
      { cosa: "Nomination (primavera)", periodo: "1 ottobre - 20 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 5 novembre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13972946",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 4; mesi: 5. || Scadenze e lingua: Corvinus incoming exchange 2025/26-2026/27; inglese CEFR B2 minimo"
  },
  {
    id: "54-irl-dublin01-0410-business-and-administ",
    universita: "Trinity College Dublin - Trinity Business School",
    citta: "Dublino",
    paese: "Irlanda",
    codiceErasmus: "IRL DUBLIN01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato per Trinity Business School" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 30 marzo" },
      { cosa: "Application (autunno)", periodo: "entro 19 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139263",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. Specifiche: TBS modules are available here: https://www.tcd.ie/business/programmes/undergraduate/study-abroad/module-outlines/ Student will take 50% in TBS. They may take modules in other school pending acceptance by the other school at time of application. See here: https://www.tcd.ie/students/orientation/visiting-exchange/module-enrolment.php || Scadenze: Trinity Erasmus exchange 2026/27 e fact sheet 2026/27 || Lingua: Trinity Business School raccomanda inglese B2"
  },
  {
    id: "55-irlgalway01-0410-business-and-administr",
    universita: "University of Galway - School of Business and Economics (College of Business, Public Policy and Law)",
    citta: "Galway",
    paese: "Irlanda",
    codiceErasmus: "IRLGALWAY01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "richiesto per completare l'application Erasmus" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "entro 15 marzo" },
      { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29470349",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5. || Scadenze e lingua: University of Galway Erasmus factsheet 2025/26 e pagina incoming; inglese CEFR B2 richiesto"
  },
  {
    id: "56-is-reykjav05-0410-business-and-administ",
    universita: "Reykjavík University - Department of Business Administration",
    citta: "Reykjavik",
    paese: "Islanda",
    codiceErasmus: "IS REYKJAV05",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per studenti non madrelingua inglese" }
    ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno)", periodo: "prima dell'application, secondo istruzioni incoming@ru.is" },
      { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
      { cosa: "Nomination (primavera)", periodo: "prima dell'application, secondo istruzioni incoming@ru.is" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26910247",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 2; mesi: 5. || Scadenze: pagina ufficiale RU application dates; nomination gestita prima dell'application || Lingua: fact sheet RU, Cambridge/DAAD B2 accettato"
  },
  {
    id: "57-lt-vilnius01-0410-business-and-administ",
    universita: "VILNIUS UNIVERSITY - Faculty of Economics",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254674",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L e LM; studenti: 2; mesi: 5."
  },
  {
    id: "58-mt-malta01-0410-business-and-administra",
    universita: "University of Malta - Faculty of Economics, Management and Accountancy",
    citta: "Msida",
    paese: "Malta",
    codiceErasmus: "MT MALTA01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516624",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "59-n-kristia01-0410-business-and-administr",
    universita: "UNIVERSITY OF AGDER - School of Business and Law",
    citta: "Kristiansand",
    paese: "Norvegia",
    codiceErasmus: "N KRISTIA01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23280414",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 4; mesi: 5."
  },
  {
    id: "60-n-stavang01-0420-law-0410-business-and",
    universita: "University of Stavanger - School of Business and Law",
    citta: "Stavanger",
    paese: "Norvegia",
    codiceErasmus: "N STAVANG01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0420", nome: "Law" }, { codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139603",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5."
  },
  {
    id: "61-nl-amsterd01-0410-business-and-administ",
    universita: "UVA - UNIVERSITEIT VAN AMSTERDAM - Faculty of Economics and Business",
    citta: "Amsterdam",
    paese: "Olanda",
    codiceErasmus: "NL AMSTERD01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23270754",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5."
  },
  {
    id: "62-nl-groning01-0410-business-and-administ",
    universita: "University of Groningen - Faculty of Economics and Business",
    citta: "Groningen",
    paese: "Olanda",
    codiceErasmus: "NL GRONING01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26988821",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 4; mesi: 5."
  },
  {
    id: "63-nl-tilburg01-0410-business-and-administ",
    universita: "Tilburg University - School of economics and management (TISEM)",
    citta: "Tilburg",
    paese: "Olanda",
    codiceErasmus: "NL TILBURG01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }, { codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Scarpa Francesco",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29516653",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L,LM; studenti: 5; mesi: 5."
  },
  {
    id: "64-p-coimbra01-0413-management-and-adminis",
    universita: "UNIVERSIDADE DE COIMBRA - Faculdade de Economia",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P COIMBRA01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0413", nome: "Management and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254701",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 6."
  },
  {
    id: "65-p-lisboa07-0410-business-and-administra",
    universita: "Iscte - Instituto Universitário de Lisboa - Business School",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA07",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28286278",
    linkSito: "",
    notePratiche: "Aperta a: Laurea Magistrale in Global Accounting and Finance [Dati ufficiali bando 2026/27] ciclo: LM; studenti: 6; mesi: 5. Specifiche: Students are allowed to select modules from the Master in Accounting and Management Control only"
  },
  {
    id: "66-p-lisboa109-0410-business-and-administr",
    universita: "INSTITUTO SUPERIOR DE ECONOMI E GESTAO UNIVERSIDADE TECNICA LISBOA - Lisboa School of Economics and Management",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA109",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254709",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5."
  },
  {
    id: "67-p-porto02-0410-business-and-administrat",
    universita: "UNIVERSIDADE DO PORTO - FEP-Faculdade de Economia do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P PORTO02",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Cancellieri Giulia",
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23280419",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 2; mesi: 5."
  },
  {
    id: "68-pl-lodz01-0410-business-and-administrat",
    universita: "University of Lodz - Faculty of Management",
    citta: "Lodz",
    paese: "Polonia",
    codiceErasmus: "PL LODZ01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
    posti: [
      { numero: 5, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984428",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 5; mesi: 6. Specifiche: Faculty of Management offers three BA study programmes Business Management http://zarzadzanie.uni.lodz.pl/tabid/1613/Default.aspx Management and Finance http://zarzadzanie.uni.lodz.pl/tabid/2537/Default.aspx Digital Communication and Social Media for Management http://zarzadzanie.uni.lodz.pl/tabid/3076/Default.aspx"
  },
  {
    id: "69-pl-rzeszow01-0410-business-and-administ",
    universita: "RZESZOW UNIVERSITY OF TECHNOLOGY - Faculty of Management",
    citta: "Rzeszow",
    paese: "Polonia",
    codiceErasmus: "PL RZESZOW01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254719",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 3; mesi: 5."
  },
  {
    id: "70-pl-warszaw21-0410-business-and-administ",
    universita: "Kozminski University - College of Management",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW21",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Dal Mas Francesca",
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29139624",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM, PhD; studenti: 3; mesi: 5."
  },
  {
    id: "71-s-hudding01-0410-business-and-administr",
    universita: "SODERTORNS HOGSKOLA - Social Sciences",
    citta: "Huddinge",
    paese: "Svezia",
    codiceErasmus: "S HUDDING01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254735",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L, LM; studenti: 4; mesi: 5. Specifiche: Students must check very carefully the entry requirements for EACH module they wish to attend. 60 ECTS registered in business studies (management) are required when submitted the application to the host university"
  },
  {
    id: "72-s-linkopi01-0410-business-and-administr",
    universita: "LINKOPINGS UNIVERSITET - Faculty of Arts and Sciences",
    citta: "Linkoping",
    paese: "Svezia",
    codiceErasmus: "S LINKOPI01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Gianfelici Cristina",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254737",
    linkSito: "",
    notePratiche: "Aperta a: Cds della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "73-s-stockho01-0410-business-and-administr",
    universita: "STOCKHOLMS UNIVERSITET - Business School",
    citta: "Stoccolma",
    paese: "Svezia",
    codiceErasmus: "S STOCKHO01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 8, mesi: 5, livello: "L", note: "su 8 posti totali condivisi tra i livelli" },
      { numero: 8, mesi: 5, livello: "LM", note: "su 8 posti totali condivisi tra i livelli" },
      { numero: 8, mesi: 5, livello: "PhD", note: "su 8 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254742",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L(3°anno) , LM, PhD; studenti: 8; mesi: 5."
  },
  {
    id: "74-sf-helsink39-0410-business-and-administ",
    universita: "ARCADA UNIVERSITY OF APPLIED SCIENCES - Department of Business Management and Analytics",
    citta: "Helsinki",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK39",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254749",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L; studenti: 2; mesi: 5."
  },
  {
    id: "75-tr-istanbu01-0410-business-and-administ",
    universita: "BOGAZICI UNIVERSITESI - Department of Management",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU01",
    dipartimentoCf: "Management",
    areeDisciplinari: [{ codice: "0410", nome: "Business and Administration" }],
    coordinatoreCf: "Costantini Antonio",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "LM", note: "su 5 posti totali condivisi tra i livelli" },
      { numero: 5, mesi: 5, livello: "PhD", note: "su 5 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16634521",
    linkSito: "",
    notePratiche: "Aperta a: CdS della Venice School of Management [Dati ufficiali bando 2026/27] ciclo: L (2 stud. per 5 mesi), LM (2 stud. per 5 mesi), PhD (1 stud. per 3 mesi); studenti: 5; mesi: 5."
  }
];
