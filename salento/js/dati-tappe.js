/* ==========================================================================
   SALENTO QUEST — DATI DEL VIAGGIO
   --------------------------------------------------------------------------
   QUESTO È L'UNICO FILE CHE DEVI TOCCARE per cambiare il viaggio.
   Il codice (mappa, schede, badge) legge tutto da qui: non serve aprire
   nient'altro.

   COME AGGIUNGERE O CAMBIARE UNA TAPPA
   ------------------------------------
   Copia un blocco dentro `tappe` e cambia i campi:

     { id: 'nome-corto',        <- deve essere UNICO (serve a salvare i progressi)
       giorno: 3,               <- a che giornata appartiene (vedi `giorni`)
       nome: 'Otranto',         <- il titolo che si legge sul pin
       lat: 40.145, lon: 18.491,<- coordinate vere: decidono DOVE finisce il pin
       cosa: '...',             <- cosa si fa lì (2-3 righe, esce a macchina da scrivere)
       consiglio: '...',        <- il consiglio da gente del posto (campo 💡)
       canzone: '...' }         <- la colonna sonora della tappa (campo 🎵)

   ATTENZIONE ALLE COORDINATE: lat tra 39.74 e 40.60, lon tra 17.80 e 18.60.
   È il riquadro di mappa disegnato. Una tappa fuori da quel riquadro viene
   agganciata al bordo (e te lo segnala la console del browser).
   Per trovarle: Google Maps -> tasto destro sul posto -> clic sui numeri
   in alto (li copia). Il primo è `lat`, il secondo è `lon`.

   L'ORDINE CONTA: il sentiero puntinato collega le tappe nell'ordine in cui
   stanno scritte qui sotto.
   ========================================================================== */

window.DATI_VIAGGIO = {

  titolo: 'SALENTO QUEST',
  sottotitolo: 'Roma → Torre Pali',
  anno: '2026',

  /* Il quartier generale: viene disegnato sulla mappa con una casetta. */
  base: {
    nome: 'Torre Pali',
    lat: 39.855,
    lon: 18.147
  },

  /* Le 7 giornate. `nome` esce nel rail in alto, `titolo` dentro le schede. */
  giorni: [
    { n: 1, nome: 'G1', titolo: 'Si parte',        colore: '#e8734a' },
    { n: 2, nome: 'G2', titolo: 'Ionio',           colore: '#f0b429' },
    { n: 3, nome: 'G3', titolo: 'Adriatico',       colore: '#3aa3c9' },
    { n: 4, nome: 'G4', titolo: 'Costa a picco',   colore: '#5b8def' },
    { n: 5, nome: 'G5', titolo: 'Barocco e grotte',colore: '#a05ce0' },
    { n: 6, nome: 'G6', titolo: 'Finis Terrae',    colore: '#e0518a' },
    { n: 7, nome: 'G7', titolo: 'Ultimo bagno',    colore: '#3fb27f' }
  ],

  /* --------------------------------------------------------------------
     LE TAPPE — 20 posti veri con coordinate vere, come impalcatura.
     Cambiali tutti senza problemi: la mappa si ridisegna da sola.
     -------------------------------------------------------------------- */
  tappe: [

    /* ---------- GIORNO 1 — Si parte ---------- */
    {
      id: 'torre-pali',
      giorno: 1,
      nome: 'Torre Pali',
      lat: 39.855, lon: 18.147,
      cosa: 'Sbarco. Dopo otto ore di macchina da Roma, si scarica tutto, ' +
            'si litiga sulle stanze e si va a vedere il mare. La torre in ' +
            'mezzo all\'acqua è quella nelle foto: è lì dal Cinquecento.',
      consiglio: 'Primo bagno appena arrivati, anche se è tardi. Serve a ' +
                 'togliersi il viaggio di dosso.',
      canzone: 'Caparezza — Vieni a ballare in Puglia'
    },
    {
      id: 'pescoluse',
      giorno: 1,
      nome: 'Maldive del Salento',
      lat: 39.830, lon: 18.203,
      cosa: 'Pescoluse: sabbia bianchissima e acqua bassa per decine di metri. ' +
            'Il soprannome se lo sono meritato, la folla di agosto un po\' meno.',
      consiglio: 'Vacci verso le 17, quando il primo turno di ombrelloni ' +
                 'smonta: stessa spiaggia, metà della gente.',
      canzone: 'Boomdabash — Mambo Salentino'
    },
    {
      id: 'torre-vado',
      giorno: 1,
      nome: 'Torre Vado',
      lat: 39.821, lon: 18.243,
      cosa: 'Tramonto sugli scogli piatti e primo aperitivo del viaggio, con ' +
            'i piedi ancora sabbiosi.',
      consiglio: 'Le rocce a destra del porticciolo: nessuno ci va e il sole ' +
                 'cade esattamente lì davanti.',
      canzone: 'Alborosie — Kingston Town'
    },

    /* ---------- GIORNO 2 — Ionio ---------- */
    {
      id: 'gallipoli',
      giorno: 2,
      nome: 'Gallipoli centro storico',
      lat: 40.055, lon: 17.992,
      cosa: 'L\'isola con le mura, il ponte, il castello e i vicoli che ' +
            'sbucano sul mare. Da girare a piedi, senza mappa, sbagliando strada.',
      consiglio: 'Il mercato del pesce sotto le mura la mattina presto: ' +
                 'è il posto più vero della città.',
      canzone: 'Sud Sound System — Le radici ca tieni'
    },
    {
      id: 'baia-verde',
      giorno: 2,
      nome: 'Baia Verde',
      lat: 40.036, lon: 17.980,
      cosa: 'La spiaggia dei lidi e della musica alta. Serve una giornata ' +
            'così, prima o poi, e questa è quella.',
      consiglio: 'Se la musica è troppa, cammina 10 minuti verso sud: ' +
                 'finiscono i lidi e ricomincia la spiaggia libera.',
      canzone: 'Gabry Ponte — Che sarà'
    },
    {
      id: 'punta-suina',
      giorno: 2,
      nome: 'Punta della Suina',
      lat: 40.018, lon: 17.977,
      cosa: 'Pineta, calette tra gli scogli, acqua trasparente. L\'opposto ' +
            'esatto di Baia Verde, a due chilometri di distanza.',
      consiglio: 'Porta le scarpette da scoglio: qui la sabbia è un ricordo.',
      canzone: 'Nu Genea — Marechia\''
    },

    /* ---------- GIORNO 3 — Adriatico ---------- */
    {
      id: 'otranto',
      giorno: 3,
      nome: 'Otranto',
      lat: 40.145, lon: 18.491,
      cosa: 'Il punto più a est d\'Italia. Centro storico bianco, cattedrale ' +
            'con il mosaico dell\'Albero della Vita e il lungomare dentro le mura.',
      consiglio: 'Entra in cattedrale anche se non vi interessano le chiese: ' +
                 'il pavimento a mosaico è del 1165 ed è tutto un bestiario.',
      canzone: 'Ludovico Einaudi — Nuvole bianche'
    },
    {
      id: 'baia-turchi',
      giorno: 3,
      nome: 'Baia dei Turchi',
      lat: 40.186, lon: 18.474,
      cosa: 'Si lascia la macchina e si scende a piedi dentro la pineta per ' +
            'una ventina di minuti. Poi si apre la baia dove sbarcarono i turchi nel 1480.',
      consiglio: 'Acqua e cappello: nell\'ultimo tratto del sentiero non c\'è ' +
                 'un filo d\'ombra e non c\'è niente da comprare in spiaggia.',
      canzone: 'Fleetwood Mac — Dreams'
    },
    {
      id: 'palascia',
      giorno: 3,
      nome: 'Faro di Punta Palascia',
      lat: 40.115, lon: 18.519,
      cosa: 'Il faro sul promontorio più orientale del Paese. Nelle giornate ' +
            'limpide, all\'alba, si vedono le montagne dell\'Albania.',
      consiglio: 'È l\'unico posto del viaggio che merita la sveglia all\'alba. ' +
                 'Decidete la sera prima chi ci crede davvero.',
      canzone: 'Sigur Ros — Hoppipolla'
    },

    /* ---------- GIORNO 4 — Costa a picco ---------- */
    {
      id: 'santa-cesarea',
      giorno: 4,
      nome: 'Santa Cesarea Terme',
      lat: 40.036, lon: 18.462,
      cosa: 'Ville moresche a strapiombo sul mare e sorgenti sulfuree che ' +
            'escono dalle grotte. Si sente l\'odore di zolfo prima di vedere il paese.',
      consiglio: 'Il tuffo dalla scaletta di Villa Sticchi con la cupola rossa ' +
                 'alle spalle: è la foto della vacanza.',
      canzone: 'Nada — Amore disperato'
    },
    {
      id: 'zinzulusa',
      giorno: 4,
      nome: 'Grotta Zinzulusa',
      lat: 40.005, lon: 18.428,
      cosa: 'Castro. Una grotta carsica lunga 150 metri, con stalattiti che ' +
            'sembrano stracci appesi: "zinzuli", da cui il nome.',
      consiglio: 'Visita guidata di mezz\'ora, si prenota all\'ingresso. ' +
                 'Dentro ci sono 16 gradi: portati qualcosa da metterti.',
      canzone: 'Vinicio Capossela — Il ballo di San Vito'
    },
    {
      id: 'marina-serra',
      giorno: 4,
      nome: 'Piscina di Marina Serra',
      lat: 39.930, lon: 18.402,
      cosa: 'Una piscina naturale scavata nella roccia, protetta dal mare ' +
            'aperto da un arco di scogli. Si entra dalla scaletta e si nuota nel blu.',
      consiglio: 'Nel primo pomeriggio è piena di ragazzini che si tuffano. ' +
                 'Verso le 18 resta solo l\'acqua.',
      canzone: 'Pink Floyd — Wish You Were Here'
    },

    /* ---------- GIORNO 5 — Barocco e grotte ---------- */
    {
      id: 'lecce',
      giorno: 5,
      nome: 'Lecce',
      lat: 40.352, lon: 18.174,
      cosa: 'La capitale del barocco, tutta nella stessa pietra dorata. ' +
            'Piazza Duomo, Santa Croce, l\'anfiteatro romano in mezzo alla piazza.',
      consiglio: 'Rustico leccese in piedi al bar e pasticciotto caldo la mattina: ' +
                 'sono due pasti, non due spuntini.',
      canzone: 'Negramaro — Estate'
    },
    {
      id: 'grotta-poesia',
      giorno: 5,
      nome: 'Grotta della Poesia',
      lat: 40.290, lon: 18.418,
      cosa: 'Roca Vecchia: una voragine circolare nella roccia, collegata al ' +
            'mare, in mezzo a un sito archeologico messapico.',
      consiglio: 'Arrivate entro le 10 o dopo le 18: è minuscola e ' +
                 'a mezzogiorno d\'agosto è una vasca da bagno affollata.',
      canzone: 'Franco Battiato — La cura'
    },
    {
      id: 'torre-orso',
      giorno: 5,
      nome: 'Torre dell\'Orso',
      lat: 40.267, lon: 18.436,
      cosa: 'Baia larga di sabbia chiara chiusa tra due promontori, con i ' +
            'faraglioni delle Due Sorelle a un capo.',
      consiglio: 'La leggenda dice che le due sorelle si tuffarono e furono ' +
                 'trasformate in scogli. Raccontala male e vedi chi ci casca.',
      canzone: 'Lucio Battisti — Il mio canto libero'
    },

    /* ---------- GIORNO 6 — Finis Terrae ---------- */
    {
      id: 'leuca',
      giorno: 6,
      nome: 'Santa Maria di Leuca',
      lat: 39.798, lon: 18.358,
      cosa: 'La fine della terra: il punto dove lo Ionio e l\'Adriatico si ' +
            'toccano. Faro, santuario e la cascata monumentale dell\'acquedotto.',
      consiglio: 'I 284 gradini dal porto al faro si fanno al tramonto, non ' +
                 'a mezzogiorno. Fidati.',
      canzone: 'Ludovico Einaudi — Experience'
    },
    {
      id: 'ciolo',
      giorno: 6,
      nome: 'Il Ciolo',
      lat: 39.847, lon: 18.383,
      cosa: 'Un canyon stretto attraversato da un ponte altissimo, con una ' +
            'caletta di ciottoli sul fondo e l\'acqua profondissima.',
      consiglio: 'Dal ponte si tuffano in tanti: è alto più di 30 metri ed ' +
                 'è vietato. Guardare e basta è già uno spettacolo.',
      canzone: 'Calcutta — Del verde'
    },
    {
      id: 'torre-san-giovanni',
      giorno: 6,
      nome: 'Torre San Giovanni',
      lat: 39.888, lon: 18.109,
      cosa: 'Il porto di Ugento, con il faro a strisce bianche e rosse. ' +
            'Cena di pesce e ultimo giro tra le bancarelle.',
      consiglio: 'Chiedi il "purpu alla pignata" se lo trovi: polpo cotto ' +
                 'lentamente nel coccio, non è roba da menu turistico.',
      canzone: 'Pino Daniele — Quando'
    },

    /* ---------- GIORNO 7 — Ultimo bagno ---------- */
    {
      id: 'porto-selvaggio',
      giorno: 7,
      nome: 'Porto Selvaggio',
      lat: 40.155, lon: 17.965,
      cosa: 'Parco naturale: si cammina venti minuti nella pineta e si scende ' +
            'a una baia di ciottoli con l\'acqua gelata delle sorgenti.',
      consiglio: 'L\'acqua è davvero fredda, non è un modo di dire. ' +
                 'Entraci di colpo o non ci entri più.',
      canzone: 'Ministri — Bevo'
    },
    {
      id: 'porto-cesareo',
      giorno: 7,
      nome: 'Porto Cesareo',
      lat: 40.257, lon: 17.895,
      cosa: 'Ultimo bagno prima di rimettersi in macchina. Acqua bassa, ' +
            'trasparente e l\'Isola dei Conigli davanti al naso.',
      consiglio: 'Riempi la macchina qui: è l\'ultimo posto decente prima ' +
                 'di 300 km di superstrada.',
      canzone: 'Thegiornalisti — Riccione'
    }
  ],

  /* --------------------------------------------------------------------
     BADGE — si sbloccano da soli. Tipi disponibili:
       { tipo: 'tappe',       n: 1  }  -> completate almeno N tappe
       { tipo: 'percentuale', n: 100}  -> completata almeno N% del viaggio
       { tipo: 'giorno',      n: 3  }  -> completate TUTTE le tappe del giorno N
       { tipo: 'tappa',      id:'..'}  -> completata quella tappa precisa
       { tipo: 'foto',        n: 5  }  -> caricate almeno N foto in tutto
     -------------------------------------------------------------------- */
  badge: [
    { id: 'primo-bagno', icona: '🌊', nome: 'Primo bagno',
      desc: 'Hai completato la prima tappa.',
      condizione: { tipo: 'tappe', n: 1 } },

    { id: 'in-viaggio', icona: '🚗', nome: 'Ci siamo dentro',
      desc: 'Cinque tappe completate.',
      condizione: { tipo: 'tappe', n: 5 } },

    { id: 'mezzo-salento', icona: '🧭', nome: 'Mezzo Salento',
      desc: 'Sei a metà del viaggio.',
      condizione: { tipo: 'percentuale', n: 50 } },

    { id: 'due-mari', icona: '🐚', nome: 'Due mari',
      desc: 'Hai fatto tutta la giornata sull\'Adriatico.',
      condizione: { tipo: 'giorno', n: 3 } },

    { id: 'finis-terrae', icona: '🗼', nome: 'Finis Terrae',
      desc: 'Sei arrivato dove finisce la terra: Leuca.',
      condizione: { tipo: 'tappa', id: 'leuca' } },

    { id: 'fotografo', icona: '📸', nome: 'Fotografo del gruppo',
      desc: 'Cinque foto caricate.',
      condizione: { tipo: 'foto', n: 5 } },

    { id: 'leggenda', icona: '👑', nome: 'Leggenda del Salento',
      desc: 'Viaggio completato al 100%. Rispetto.',
      condizione: { tipo: 'percentuale', n: 100 } }
  ]
};
