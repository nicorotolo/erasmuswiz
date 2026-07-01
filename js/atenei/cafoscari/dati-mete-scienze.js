// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Scienze Ambientali, Informatica e Statistica
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e lista destinazioni Erasmus+ per studio a.a. 2026/2027.
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

var METE = [
  {
    id: "00-is-reykjav01-0521-environmental-sciences",
    universita: "University of Iceland",
    citta: "Reykjavik",
    paese: "Islanda",
    codiceErasmus: "IS REYKJAV01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental Sciences" }],
    coordinatoreCf: "Brunelli Andrea",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo secondo semestre; studenti non-UE: solo secondo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo secondo semestre; studenti non-UE: solo secondo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile per cittadini UE/SEE; entro 15 marzo per cittadini non UE/SEE" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre per cittadini UE/SEE; entro 15 agosto per cittadini non UE/SEE" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio per cittadini UE/SEE; entro 1 aprile per cittadini non UE/SEE" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre per cittadini UE/SEE; entro 1 settembre per cittadini non UE/SEE" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254670",
    linkSito: "http://english.hi.is/university/prospective_exchange_students",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2x5 L e LM, non-EU solo secondo semestre.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente. Scadenze: basate su 2025/26 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "01-d-bingen01-0521-environmental-sciences",
    universita: "Bingen Technical University of Applied Sciences (UAS)",
    citta: "Bingen",
    paese: "Germania",
    codiceErasmus: "D BINGEN01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental Sciences" }],
    coordinatoreCf: "Brunelli Andrea",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "se il programma e' erogato in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "se il programma e' erogato in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28243380",
    linkSito: "https://www.th-bingen.de/en/how-to-apply/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "02-n-bergen01-0521-environmental-sciences",
    universita: "University of Bergen",
    citta: "Bergen",
    paese: "Norvegia",
    codiceErasmus: "N BERGEN01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental Sciences" }],
    coordinatoreCf: "Brunelli Andrea",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi generali offerti agli exchange students" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi di English language and literature" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 25 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26940212",
    linkSito: "https://www.uib.no/en/exchange-courses",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-b-antwerp01-0531-chemistry",
    universita: "Universiteit Antwerpen - Faculty of Sciences - Department of Chemistry",
    citta: "Antwerp",
    paese: "Belgio",
    codiceErasmus: "B ANTWERP01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Brunelli Andrea",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254357",
    linkSito: "https://www.uantwerpen.be/en/education/international/international-students/exchange-students/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "04-d-saarbru01-0610-information-and-communication-technolog",
    universita: "Universität des Saarlandes - Department of Computer Science",
    citta: "Saarbruecken",
    paese: "Germania",
    codiceErasmus: "D SAARBRU01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Calzavara Stefano",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo consigliato per incoming students; didattica undergraduate principalmente in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 dicembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/24672667",
    linkSito: "https://www.uni-saarland.de/international/out/io.html",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "05-sf-helsink40-1015-travel-tourism-and-leisure",
    universita: "Haaga-Helia University of Applied Sciences",
    citta: "Helsinki",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK40",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, Tourism and Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per la mobilita per studio; prova richiesta agli studenti non madrelingua iscritti a un corso di laurea non impartito in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o intero anno)", periodo: "dal 20 marzo al 15 aprile 2026" },
        { cosa: "Application (autunno o intero anno)", periodo: "dal 20 marzo al 25 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 25 settembre al 20 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "dal 25 settembre al 30 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29510770",
    linkSito: "https://www.haaga-helia.fi/en/exchange-studies-haaga-helia",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "06-e-barcelo16-1015-travel-tourism-leisure",
    universita: "Universitat Ramon Lull - IQS School of Management",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO16",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel Tourism Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26967311",
    linkSito: "https://iqs.edu/es/iqs/campus-life/oficina-internacional/programas-de-movilidad/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente per l'inglese"
  },
  {
    id: "07-e-barcelo01-1015-travel-tourism-leisure",
    universita: "Universitat de Barcelona - CETT, School in Tourism, Hospitality and Gastronomy",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel Tourism Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26909268",
    linkSito: "https://www.cett.es/en/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "08-f-toulous02-1015-travel-tourism-leisure",
    universita: "Université Toulouse Jean Jaurès - ISTHIA",
    citta: "Toulouse",
    paese: "Francia",
    codiceErasmus: "F TOULOUS02",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel Tourism Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "livello minimo per corsi in inglese" },
        { lingua: "Francese", livello: "A1", condizione: "livello minimo nel secondo semestre per studenti nominati a French as a Foreign Language; nessun minimo nel primo semestre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 10 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 24 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 27 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro l'11 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984371",
    linkSito: "https://www.isthia.fr/en/en-isthia/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "09-f-chamber01-1015-travel-tourism-leisure",
    universita: "Université Savoie Mont Blanc - IAE school of Management, tourism, Hospitality and Events Management department",
    citta: "Chambery",
    paese: "Francia",
    codiceErasmus: "F CHAMBER01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel Tourism Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o intero anno)", periodo: "entro la fine di marzo" },
        { cosa: "Application (autunno o intero anno)", periodo: "da meta marzo alla fine di aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro la fine di ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta ottobre a meta novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29130906",
    linkSito: "https://www.univ-smb.fr/international/venir-a-luniversite/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "10-e-barcelo02-1015-travel-tourism-and-leisure",
    universita: "Universitat Autonoma de Barcelona - Tourism & Hotel Management (Campus di Bellaterra, Cerdanyola del Vallès)",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "1015", nome: "Travel, Tourism and Leisure" }],
    coordinatoreCf: "Camatti Nicola",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Catalano", livello: "B1.2", condizione: "raccomandato per lezioni in catalano" },
        { lingua: "Spagnolo", livello: "B1.2", condizione: "raccomandato per lezioni in spagnolo" },
        { lingua: "Inglese", livello: "B1.2", condizione: "raccomandato per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26940243",
    linkSito: "https://www.uab.cat/web/tourism-hotel-management-1345712139065.html",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "11-e-barcelo01-0711-chemical-engineering-and-processes",
    universita: "University of Barcelona - Faculty of Chemistry",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical Engineering and Processes" }],
    coordinatoreCf: "Cavinato Cristina",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/22972326",
    linkSito: "https://www.ub.edu/portal/web/chemistry",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "12-tr-ankara08-0610-information-and-communication-technolog",
    universita: "Çankaya University - Computer Engineering Department and Software Engineering Department",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA08",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Cortesi Agostino",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato; certificato non obbligatorio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 agosto" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29510748",
    linkSito: "https://erasmus.cankaya.edu.tr/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "13-p-lisboa03-0222-history-and-archaeology-conservation-an",
    universita: "Universidade NOVA de Lisboa - Faculdade de Ciências e Tecnologia",
    citta: "Lisbon",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA03",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology - conservation and restoration" }],
    coordinatoreCf: "Izzo Francesca Caterina",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "A2", condizione: "in alternativa al certificato di inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26924898",
    linkSito: "https://www.fct.unl.pt/en/international/incoming-students-mobilities/erasmus-student-mobility-studies-sms",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "14-cz-olomouc01-0531-chemistry",
    universita: "Palacky University Olomouc - Department of Analytical Chemistry",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Izzo Francesca Caterina",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo non e specificato nell'accordo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26984376",
    linkSito: "https://ach.upol.cz/en/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "15-cz-brno05-0610-information-and-communication-technolog",
    universita: "Masarykova Univerzita - Faculty of Informatics",
    citta: "Brno",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ BRNO05",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Luccio Flaminia",
    posti: [
      { numero: 2, mesi: 6, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato o documento comprovante il livello" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "tra gennaio e aprile/maggio" },
        { cosa: "Application (autunno)", periodo: "tra febbraio e aprile/maggio; documenti entro meta giugno" },
        { cosa: "Nomination (primavera)", periodo: "tra gennaio e settembre/ottobre" },
        { cosa: "Application (primavera)", periodo: "tra gennaio e settembre/ottobre; documenti entro novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254380",
    linkSito: "http://www.cic.muni.cz/erasmus",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM e PhD. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "16-a-wien02-0610-information-and-communication-technolog",
    universita: "Technische Universität Wien (TU Wien) - Faculty of Informatics",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN02",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Luccio Flaminia",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/19678844",
    linkSito: "https://www.tuwien.at/studium/international/incoming-austauschstudierende",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 1x6L, 2x6LM,1x3PhD. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "17-e-barcelo02-0610-information-and-communication-technolog",
    universita: "Universitat Autonoma de Barcelona - School of Engineering",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Catalano", livello: "B1.2", condizione: "raccomandato per lezioni in catalano" },
        { lingua: "Spagnolo", livello: "B1.2", condizione: "raccomandato per lezioni in spagnolo" },
        { lingua: "Inglese", livello: "B1.2", condizione: "raccomandato per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29532961",
    linkSito: "https://www.uab.cat/web/mobility-international-exchange/study-abroad-programmes/academic-and-administrative-procedures/school-of-engineering-academic-programme-1345747432972.html",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "18-nl-tilburg01-0610-information-and-communication-technolog",
    universita: "Tilburg University - School of humanities and digital sciences (TSHD)",
    citta: "Tilburg",
    paese: "Paesi Bassi",
    codiceErasmus: "NL TILBURG01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "studenti exchange bachelor" },
        { lingua: "Inglese", livello: "C1", condizione: "studenti exchange master" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno e anno intero)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (autunno e anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29532888",
    linkSito: "https://www.tilburguniversity.edu/about/schools/tshd",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "19-f-paris482-0611-computer-use",
    universita: "Université Paris Cité - Faculté des Sciences - UFR d'informatique",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS482",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0611", nome: "Computer use" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 6, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28243418",
    linkSito: "https://www.informatique.univ-paris-diderot.fr/formations/echanges#mobilite_entrantevenir_a_l_ufr_d_informatique_des_grands_moulins",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "20-sf-turku05-0610-information-and-communication-technolog",
    universita: "TURKU UNIVERSITY OF APPLIED SCIENCES- Faculty of Business, ICT and Chemical Engineering",
    citta: "Turku",
    paese: "Finlandia",
    codiceErasmus: "SF TURKU05",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studi exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/24626179",
    linkSito: "https://www.tuas.fi/en/study-tuas/exchange-students/about/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "21-sf-kokkola05-0610-information-and-communication-technolog",
    universita: "Centria University of Applied Sciences",
    citta: "Kokkola",
    paese: "Finlandia",
    codiceErasmus: "SF KOKKOLA05",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/19805643",
    linkSito: "https://web.centria.fi/en",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "22-ro-timisoa01-0610-information-and-communication-technolog",
    universita: "West University of Timișoara - Faculty of Mathematics and Informatics",
    citta: "Timisoara",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23027182",
    linkSito: "https://www.uvt.ro/en/",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "23-pl-krakow02-0610-information-and-communication-technolog",
    universita: "AKADEMIA GORNICZO-HUTNICZA - AGH University of Krakow - Faculty of Electrical Engineering, Automatics, Computer Science, and Biomedical Engineering",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW02",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies ICTs" }],
    coordinatoreCf: "Raffaetà Alessandra",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29510798",
    linkSito: "https://www.international.agh.edu.pl/en/exchange",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "24-d-braunsc01-0521-environmental-sciences",
    universita: "Technische Universität Braunschweig - Department of Architecture, Civil Engineering and Environmental Sciences",
    citta: "Braunschweig",
    paese: "Germania",
    codiceErasmus: "D BRAUNSC01",
    dipartimentoCf: "Scienze ambientali, informatica e statistica",
    areeDisciplinari: [{ codice: "0521", nome: "Environmental Sciences" }],
    coordinatoreCf: "Rovere Alessio",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per seguire con profitto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26927321",
    linkSito: "https://www.tu-braunschweig.de/en/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Scienze Ambientali, Informatica e Statistica [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];
