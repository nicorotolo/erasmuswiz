// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Filosofia e Beni Culturali
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e lista destinazioni Erasmus+ per studio a.a. 2026/2027.
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

const METE = [
  {
    id: "00-cz-brno05-0210-arts",
    universita: "Masarykova Univerzita - Department of the History of Art",
    citta: "Brno",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ BRNO05",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Agazzi Michela",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno, studenti UE)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera, studenti UE)", periodo: "entro 1 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254382",
    linkSito: "http://www.cic.muni.cz/erasmus",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "01-cz-praha07-0210-arts",
    universita: "Charles University - Catholic Theological Faculty",
    citta: "Praga",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ PRAHA07",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Agazzi Michela",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 settembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254385",
    linkSito: "http://www.cuni.cz",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "02-d-berlin02-0210-arts",
    universita: "TU Berlin: Technische Universitaet Berlin - Faculty I - Humanities and Educational Sciences",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D BERLIN02",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Bertelè Matteo",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254399",
    linkSito: "https://www.tu.berlin/en/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4x5 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-d-kassel01-0210-arts",
    universita: "Universität Kassel - Faculty 02, Geistes- und Kulturwissenschaften",
    citta: "Kassel",
    paese: "Germania",
    codiceErasmus: "D KASSEL01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Bertelè Matteo",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28265804",
    linkSito: "https://www.uni-kassel.de/uni/en/study/before-the-application/study-guide-for-international-students/exchange-studies-at-the-university-of-kassel.html",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4x5 LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "04-d-gotting01-0210-arts",
    universita: "Georg-August-Universität Göttingen - Faculty of Humanities - Seminar for the History of Art / Art Collection",
    citta: "Gottinga",
    paese: "Germania",
    codiceErasmus: "D GOTTING01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Bertelè Matteo",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254416",
    linkSito: "https://www.uni-goettingen.de/en/650417.html",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "05-d-frankfu01-0310-social-and-behavioural-sciences",
    universita: "Goethe-Universität Frankfurt am Main - Faculty of Social Sciences",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Calosi Claudio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23268589",
    linkSito: "https://www.goethe-university-frankfurt.de/en?locale=en",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "06-e-sevilla03-0314-sociology-and-cultural-studies",
    universita: "Universidad Pablo de Olavide - Department of Social Sciences",
    citta: "Siviglia",
    paese: "Spagna",
    codiceErasmus: "E SEVILLA03",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and Cultural Studies" }],
    coordinatoreCf: "Calosi Claudio",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 29 maggio 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13944973",
    linkSito: "http://www.upo.es",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "07-d-frankfu01-0223-philosophy-and-ethics",
    universita: "Goethe-Universität Frankfurt am Main - Institute of Philosophy (Faculty of Philosophy and History)",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Cesarale Giorgio",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254410",
    linkSito: "http://www.uni-frankfurt.de",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "08-f-paris003-0211-audio-visual-techniques-and-media-production",
    universita: "Université Sorbonne Nouvelle Paris 3 - UFR Arts & médias- Département : Cinéma et audiovisuel (CAV)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS003",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "Dalla Gassa Marco",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono esclusivamente corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29136180",
    linkSito: "http://www.univ-paris3.fr/why-choose-sorbonne-nouvelle-university--588237.kjsp?RH=1209061830093",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM IMACS. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "09-f-paris003-0211-audio-visual-techniques-and-media-production",
    universita: "Université Sorbonne Nouvelle Paris 3 - UFR Arts & médias- Département : Cinéma et audiovisuel (CAV)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS003",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "Dalla Gassa Marco",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono esclusivamente corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26998959",
    linkSito: "http://www.univ-paris3.fr/why-choose-sorbonne-nouvelle-university--588237.kjsp?RH=1209061830093",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "10-b-liege01-0211-audio-visual-techniques-and-media-production",
    universita: "Liege Université - Faculté de Philosophie et Lettres - Département Médias, Culture et Communication",
    citta: "Liegi",
    paese: "Belgio",
    codiceErasmus: "B LIEGE01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29533977",
    linkSito: "https://www.infocom.uliege.be/cms/c_4577304/fr/infocom-accueil-erasmus-in",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "11-f-lille103-0210-arts",
    universita: "Université de Lille - Faculté des Humanités - Département Arts",
    citta: "Lilla",
    paese: "Francia",
    codiceErasmus: "F LILLE103",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29533969",
    linkSito: "https://humanites.univ-lille.fr/arts/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "12-f-lille103-0222-history-and-archaeology",
    universita: "Université de Lille - Faculté des Humanités - Département Histoire de l'art et Archéologie et Département Arts",
    citta: "Lilla",
    paese: "Francia",
    codiceErasmus: "F LILLE103",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282437",
    linkSito: "https://international.univ-lille.fr/en/come-to-the-university-of-lille/students/as-part-of-an-international-programme/exchange-programme-erasmus-isep/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "13-d-frankfu01-0211-audio-visual-techniques-and-media-production",
    universita: "Goethe-Universität Frankfurt am Main - Faculty of Linguistics, Cultures, and Arts - Institute of Art History (Kunstgeschichtliches Institut) + Faculty of Modern Languages - Institut fur Theater, Film und Medienwisshenschaft",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29573410",
    linkSito: "http://www.uni-frankfurt.de",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3x5 LM IMACS, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "14-nl-amsterd01-0211-audio-visual-techniques-and-media-production",
    universita: "UVA - Universiteit Van Amsterdam - Faculty of Humanities",
    citta: "Amsterdam",
    paese: "Olanda",
    codiceErasmus: "NL AMSTERD01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi BA in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28266203",
    linkSito: "https://www.uva.nl/en/programmes/exchange/humanities/humanities-exchange.html?origin=cQrBgcZsRZO%2F6Pm0Q%2F1d8w",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "15-d-frankfu01-0211-audio-visual-techniques-and-media-production",
    universita: "Goethe-Universität Frankfurt am Main - Faculty of Linguistics, Cultures, and Arts - Institute of Art History (Kunstgeschichtliches Institut) + Faculty of Modern Languages - Institut fur Theater, Film und Medienwisshenschaft",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "De Rosa Miriam",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254411",
    linkSito: "http://www.uni-frankfurt.de",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L,LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "16-d-wiesbad01-0923-social-work-and-counselling",
    universita: "Hochschule RheinMain",
    citta: "Wiesbaden",
    paese: "Germania",
    codiceErasmus: "D WIESBAD01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0923", nome: "Social Work and Counselling" }],
    coordinatoreCf: "Della Puppa Francesco",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29534005",
    linkSito: "https://www.hs-rm.de/en/international/wege-an-die-hsrm/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "17-f-paris008-0223-philosophy-and-ethics",
    universita: "Université Paris 8 - Vincennes-Saint Denis - UFR Art, Philosophy, Aesthetics",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS008",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Dreon Roberta",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254604",
    linkSito: "https://www.univ-paris8.fr/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "18-f-montpel03-0210-arts",
    universita: "Université Paul-Valéry Montpellier 3 - Aesthetic Department",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "F MONTPEL03",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Dreon Roberta",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254569",
    linkSito: "https://www.univ-montp3.fr/fr/erasmus",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "19-f-paris001-0223-philosophy-and-ethics",
    universita: "Université Paris 1 Panthéon-Sorbonne - UFR10 Philosophie",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Dreon Roberta",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254581",
    linkSito: "http://www.pantheonsorbonne.fr/international/foreign-students/exchange-student-application-bachelor-master/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "20-nl-amsterd01-0223-philosophy-and-ethics",
    universita: "UVA - Universiteit Van Amsterdam - Faculty of Humanities - Department of Philosophy",
    citta: "Amsterdam",
    paese: "Olanda",
    codiceErasmus: "NL AMSTERD01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Favaretti Camposampiero Matteo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi BA in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254684",
    linkSito: "http://www.uva.nl/en/programmes/exchange/humanities/humanities-exchange.html?origin=cQrBgcZsRZO%2F6Pm0Q%2F1d8w",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "21-b-liege01-0223-philosophy-and-ethics",
    universita: "Université de Liège - Faculté de Philosophie et Lettres (Philosophie des Sciences et Histoire de la Philosophie)",
    citta: "Liegi",
    paese: "Belgio",
    codiceErasmus: "B LIEGE01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Favaretti Camposampiero Matteo",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "PhD", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "nessuna scadenza specifica pubblicata" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254368",
    linkSito: "http://www.ulg.ac.be/en/erasmus/in",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "22-b-gent01-0223-philosophy-and-ethics",
    universita: "Universiteit Gent - Faculty of Arts and Philosophy",
    citta: "Gand",
    paese: "Belgio",
    codiceErasmus: "B GENT01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Favaretti Camposampiero Matteo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282395",
    linkSito: "http://www.ugent.be/en",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "23-f-paris003-0215-music-and-performing-arts",
    universita: "Université Sorbonne Nouvelle - Paris 3 - Institute for Theatre Studies (IET)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS003",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0215", nome: "Music and Performing Arts" }],
    coordinatoreCf: "Franco Susanne",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono esclusivamente corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 15 marzo al 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/20084956",
    linkSito: "http://www.univ-paris3.fr/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "24-s-lund01-0310-social-and-behavioural-sciences",
    universita: "Lund Universitet - Centre for Middle Eastern Studies (Faculty of Social Sciences)",
    citta: "Lund",
    paese: "Svezia",
    codiceErasmus: "S LUND01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 15 al 31 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 al 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 al 30 settembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 al 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254739",
    linkSito: "http://www.lunduniversity.lu.se",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "25-n-oslo72-0312-political-sciences-and-civics",
    universita: "Oslo New University College - Department of Political Science",
    citta: "Oslo",
    paese: "Norvegia",
    codiceErasmus: "N OSLO72",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26910267",
    linkSito: "https://oslonyehoyskole.no/english",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L solo 1°sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "26-nl-groning01-0310-social-and-behavioural-sciences",
    universita: "University of Groningen - University College Groningen",
    citta: "Groninga",
    paese: "Olanda",
    codiceErasmus: "NL GRONING01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16144709",
    linkSito: "https://www.rug.nl/education/exchange/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "27-nl-groning01-0223-philosophy-and-ethics",
    universita: "University of Groningen - Faculty of Philosophy",
    citta: "Groninga",
    paese: "Olanda",
    codiceErasmus: "NL GRONING01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16144750",
    linkSito: "https://www.rug.nl/education/exchange/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "28-tr-ankara07-0312-political-sciences-and-civics",
    universita: "Bilkent University - Faculty of Economics, Administrative and Social Sciences - Department of Political Science and Public Administration",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA07",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16629371",
    linkSito: "http://exchange.bilkent.edu.tr/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "29-p-lisboa01-0312-political-sciences-and-civics",
    universita: "Universidade Católica Portuguesa - Faculty of Human Sciences | FCH",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "per corsi in portoghese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984383",
    linkSito: "https://fch.lisboa.ucp.pt/about-fch/services/exchange-programs/incoming-students",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "30-dk-roskild01-0310-social-and-behavioural-sciences",
    universita: "Roskilde University - Department of Social Sciences and Business",
    citta: "Roskilde",
    paese: "Danimarca",
    codiceErasmus: "DK ROSKILD01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254456",
    linkSito: "http://www.ruc.dk",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "31-e-salaman02-0310-social-and-behavioural-sciences-e-0420-law",
    universita: "Universidad de Salamanca - Facultad de Derecho (BA in Global Studies)",
    citta: "Salamanca",
    paese: "Spagna",
    codiceErasmus: "E SALAMAN02",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences e 0420 - Law" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23267542",
    linkSito: "http://rel-int.usal.es/en/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "32-nl-utrecht01-0200-arts-and-humanities",
    universita: "Universiteit Utrecht - Faculty of Humanities",
    citta: "Utrecht",
    paese: "Olanda",
    codiceErasmus: "NL UTRECHT01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0200", nome: "Arts and Humanities" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi Bachelor in inglese" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi Master in inglese" },
        { lingua: "Olandese", livello: "B2", condizione: "per corsi in olandese di livello 1 o 2" },
        { lingua: "Olandese", livello: "C1", condizione: "per corsi in olandese di livello 3" },
        { lingua: "Olandese", livello: "C2", condizione: "per corsi Master in olandese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254698",
    linkSito: "https://www.uu.nl/en/education/exchange-and-visiting-students",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "33-f-paris014-0310-social-and-behavioural-sciences",
    universita: "Sciences Po",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS014",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 6, mesi: 4, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per studi undergraduate in francese" },
        { lingua: "Francese", livello: "C1", condizione: "per studi graduate in francese" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 3 al 24 marzo 2026" },
        { cosa: "Application (autunno)", periodo: "entro 7 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 22 settembre al 6 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 8 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254616",
    linkSito: "http://www.sciencespo.fr/international/en/content/exchange-programme",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 4 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "34-e-barcelo15-0312-political-sciences-and-civics",
    universita: "Universitat Pompeu Fabra - Faculty of Humanities",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO15",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 7, mesi: 4, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23268537",
    linkSito: "http://www.upf.edu/international/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 7 x 4 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "35-nl-nijmege01-0223-philosophy-and-ethics",
    universita: "Radboud University Nijmegen - Faculty of Philosophy, Theology and Religious Studies",
    citta: "Nijmegen",
    paese: "Olanda",
    codiceErasmus: "NL NIJMEGE01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26910698",
    linkSito: "https://www.ru.nl/en/education/more-education-and-training/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "36-dk-kobenha01-0312-political-sciences-and-civics",
    universita: "KOBENHAVNS UNIVERSITET - Faculty of Humanities",
    citta: "Copenaghen",
    paese: "Danimarca",
    codiceErasmus: "DK KOBENHA01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political sciences and civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 5, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29137244",
    linkSito: "https://humanities.ku.dk/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "37-e-madrid04-0312-political-sciences-and-civics",
    universita: "Universidad Autónoma de Madrid - Faculty of Philosophy and Arts",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID04",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/19831990",
    linkSito: "https://www.uam.es/uam/en/internacional/movilidad",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "38-n-tromso01-0312-political-sciences-and-civics",
    universita: "UiT The Arctic University of Norway - Faculty of Humanities, Social Sciences and Education",
    citta: "Tromso",
    paese: "Norvegia",
    codiceErasmus: "N TROMSO01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16858611",
    linkSito: "https://en.uit.no/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "39-dk-kobenha01-0220-humanities",
    universita: "KOBENHAVNS UNIVERSITET - Faculty of Humanities",
    citta: "Copenaghen",
    paese: "Danimarca",
    codiceErasmus: "DK KOBENHA01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Garofalo Giulia",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29137245",
    linkSito: "https://humanities.ku.dk/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "40-e-madrid03-0210-arts",
    universita: "Universidad Complutense de Madrid - Faculty of Geography and History",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID03",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Gazit Ofer",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 9, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254503",
    linkSito: "https://geografiaehistoria.ucm.es/estudiar",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 9 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "41-e-barcelo02-0210-arts",
    universita: "Universitat Autònoma de Barcelona - Facultat de Filosofia i Llettres - Department d'Art i Musicologia",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Gazit Ofer",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "dal 15 febbraio al 1 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "dal 15 febbraio al 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282427",
    linkSito: "https://www.uab.cat/web/mobilitat-i-intercanvi-internacional-1345680108534.html",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "42-e-oviedo01-0210-arts",
    universita: "Universidad de Oviedo - Department of History of Art and Musicology",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E OVIEDO01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Gazit Ofer",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254520",
    linkSito: "http://www.uniovi.es",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "43-nl-wagenin01-0310-social-and-behavioural-sciences",
    universita: "Wageningen University - Department of Social Sciences",
    citta: "Wageningen",
    paese: "Olanda",
    codiceErasmus: "NL WAGENIN01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Marchetti Sabrina",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo per studenti exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, studenti UE/EFTA)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno, studenti UE/EFTA)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera, studenti UE/EFTA)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera, studenti UE/EFTA)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25783422",
    linkSito: "https://www.wur.nl/en/Education-Programmes/Study-Abroad-and-Exchange-Students.htm",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2x5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "44-n-stavang-01-0310-social-and-behavioural-sciences",
    universita: "University of Stavanger - Faculty of Social Sciences - Department of Media and Social Sciences",
    citta: "Stavanger",
    paese: "Norvegia",
    codiceErasmus: "N-STAVANG-01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Marchetti Sabrina",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29136964",
    linkSito: "https://www.uis.no/en/studies/collaboration/inbound-exchange",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM EH. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "45-d-munchen01-0310-social-and-behavioural-sciences",
    universita: "Ludwig-Maximilians-Universität München - Rachel Carson Center for Environment and Society",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Marchetti Sabrina",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25783377",
    linkSito: "https://www.carsoncenter.uni-muenchen.de/index.html",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "46-n-stavang-01-0310-social-and-behavioural-sciences",
    universita: "University of Stavanger - Faculty of Social Sciences - Department of Media and Social Sciences",
    citta: "Stavanger",
    paese: "Norvegia",
    codiceErasmus: "N-STAVANG-01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Marchetti Sabrina",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984423",
    linkSito: "https://www.uis.no/en/studies/collaboration/inbound-exchange",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "47-nl-wagenin01-0310-social-and-behavioural-sciences",
    universita: "Wageningen University - Department of Social Sciences",
    citta: "Wageningen",
    paese: "Olanda",
    codiceErasmus: "NL WAGENIN01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Marchetti Sabrina",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo per studenti exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, studenti UE/EFTA)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno, studenti UE/EFTA)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera, studenti UE/EFTA)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera, studenti UE/EFTA)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29136969",
    linkSito: "https://www.wur.nl/en/Education-Programmes/Study-Abroad-and-Exchange-Students.htm",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM EH. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "48-b-gent01-0210-arts",
    universita: "Universiteit Gent - Faculty of Arts and Philosophy",
    citta: "Gand",
    paese: "Belgio",
    codiceErasmus: "B GENT01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Ottomano Vincenzina Caterina",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282396",
    linkSito: "http://www.ugent.be/en",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "49-f-paris008-0215-music-and-performing-arts",
    universita: "Université Paris 8 - Vincennes-Saint Denis - UFR Art, Philosophy, Aesthetics",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS008",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0215", nome: "Music and Performing Arts" }],
    coordinatoreCf: "Ottomano Vincenzina Caterina",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 9, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 9, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254605",
    linkSito: "https://www.univ-paris8.fr/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 9. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "50-hu-budapes01-0210-arts",
    universita: "Eötvös Loránd University - Elte - Faculty of Humanities",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Ottomano Vincenzina Caterina",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese o lingua degli studi", livello: "B2", condizione: "livello minimo raccomandato per seguire e completare i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254660",
    linkSito: "https://www.btk.elte.hu/en/incoming-mobility",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "51-f-strasbo48-0223-philosophy-and-ethics",
    universita: "Université de Strasbourg -Faculté de Philosophie",
    citta: "Strasburgo",
    paese: "Francia",
    codiceErasmus: "F STRASBO48",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Paltrinieri Gian Luigi",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Filosofia; certificato DELF B2 richiesto ai non francofoni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254630",
    linkSito: "http://www.unistra.fr",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L ,LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "52-e-madrid03-0223-philosophy-and-ethics",
    universita: "Universidad Complutense de Madrid - Faculty of Philosophy",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID03",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Paltrinieri Gian Luigi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 9, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 9, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254501",
    linkSito: "http://www.ucm.es",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 9. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "53-d-freibur01-0223-philosophy-and-ethics",
    universita: "Albert-Ludwigs-Universität Freiburg - Philosophisches Seminar",
    citta: "Friburgo",
    paese: "Germania",
    codiceErasmus: "D FREIBUR01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Paltrinieri Gian Luigi",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 10 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254414",
    linkSito: "http://www.uni-freiburg.de",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 , solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "54-d-berlin02-0223-philosophy-and-ethics",
    universita: "TU Berlin: Technische Universitaet Berlin - Institut fur Philosophie, Literatur, Wissenschafts und Technikgeschichte",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D BERLIN02",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Paltrinieri Gian Luigi",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254398",
    linkSito: "https://www.tu.berlin/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4x5 L,LM , solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "55-p-coimbra01-0222-history-and-archaeology",
    universita: "Universidade de Coimbra - FLUC – Faculty of Arts and Humanities",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P COIMBRA01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Passignat Émilie",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno e primavera)", periodo: "dal 1 gennaio al 30 giugno" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 luglio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254703",
    linkSito: "http://www.uc.pt/en/driic",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 9 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "56-a-wien01-0210-arts",
    universita: "Universität Wien - Department of History of Arts",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Passignat Émilie",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "se il settore offre corsi sufficienti in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254349",
    linkSito: "https://international.univie.ac.at/en/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "57-d-koblenz01-0923-social-work-and-counselling",
    universita: "Hochschule Koblenz University of Applied Sciences - Faculty of Social Sciences",
    citta: "Koblenz",
    paese: "Germania",
    codiceErasmus: "D KOBLENZ01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0923", nome: "Social Work and Counselling" }],
    coordinatoreCf: "Perocco Fabio",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984392",
    linkSito: "https://www.hs-koblenz.de/en/rmc/international-office/study-in-koblenz/exchange-program",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 L, LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "58-f-paris468-0210-arts",
    universita: "Sorbonne University - UFR Histoire de l'Art",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS468",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0210", nome: "Arts" }],
    coordinatoreCf: "Piazza Simone",
    posti: [
      { numero: 4, mesi: 6, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 6, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254594",
    linkSito: "https://lettres.sorbonne-universite.fr/international/venir-etudier-a-la-faculte-des-lettres",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "59-f-tours01-0213-fine-arts",
    universita: "Université François-Rabelais - UFR Arts et Sciences Humaines",
    citta: "Tours",
    paese: "Francia",
    codiceErasmus: "F TOURS01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0213", nome: "Fine Arts" }],
    coordinatoreCf: "Piazza Simone",
    posti: [
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 24 marzo al 30 maggio 2025" },
        { cosa: "Application (autunno)", periodo: "dal 31 marzo al 6 giugno 2025" },
        { cosa: "Nomination (primavera)", periodo: "dal 6 ottobre al 14 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "dal 6 ottobre al 21 novembre 2025" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254636",
    linkSito: "https://international.univ-tours.fr/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "60-g-egaleo02-0314-sociology-and-cultural-studies",
    universita: "University of West Attica - Faculty of Administrative, Economics and Social Sciences - Department of Archival, Library and Information Studies",
    citta: "Egaleo",
    paese: "Grecia",
    codiceErasmus: "G EGALEO02",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0314", nome: "Sociology and Cultural Studies" }],
    coordinatoreCf: "Soliani Gian Pietro",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per la mobilita Erasmus+ incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254644",
    linkSito: "https://www.uniwa.gr/en/studies/xenoglossa-programmata-spoydon/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "61-d-stuttga01-0220-humanities",
    universita: "University of Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "D STUTTGA01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Trizio Emiliano",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25783083",
    linkSito: "https://www.student.uni-stuttgart.de/",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2x6 solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "62-d-tubinge01-0310-social-and-behavioural-sciences",
    universita: "EBERHARD-KARLS-UNIVERSITAET TUEBINGEN- Institute of Political Sciences",
    citta: "Tubinga",
    paese: "Germania",
    codiceErasmus: "D TUBINGE01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Trizio Emiliano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29137172",
    linkSito: "https://uni-tuebingen.de/en/113870",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "63-d-tubinge01-0223-philosophy-and-ethics",
    universita: "Eberhard Karls Universität Tübingen - Department of Philosophy",
    citta: "Tubinga",
    paese: "Germania",
    codiceErasmus: "D TUBINGE01",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Trizio Emiliano",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254452",
    linkSito: "http://www.uni-tuebingen.de/en/113870",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "64-f-bordeau03-0223-philosophy-and-ethics",
    universita: "UNIVERSITE MICHEL DE MONTAIGNE- BORDEAUX 3 - Dept. of Philosophy (UFR Humanités)",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU03",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Trizio Emiliano",
    posti: [
      { numero: 6, mesi: 5, livello: "L", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 5, livello: "PhD", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/24628339",
    linkSito: "https://www.u-bordeaux-montaigne.fr/en/preparing-for-your-stay/international-welcome-desk.html",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 5. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "65-f-grenobl55-0223-philosophy-and-ethics",
    universita: "Université Grenoble Alpes - UFR Arts et Sciences Humaines",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F GRENOBL55",
    dipartimentoCf: "Filosofia e Beni Culturali",
    areeDisciplinari: [{ codice: "0223", nome: "Philosophy and Ethics" }],
    coordinatoreCf: "Trizio Emiliano",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1/B2", condizione: "per mobilita di scambio presso UFR Arts et Sciences Humaines" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254558",
    linkSito: "http://www.univ-grenoble-alpes.fr",
    notePratiche: "Aperta a: Dipartimento di Filosofia e Beni Culturali [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];
