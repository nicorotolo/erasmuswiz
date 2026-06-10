// ============================================================
// LOGICA DI ERASMUSWIZ (Fase 1)
// ------------------------------------------------------------
// Questo file NON contiene dati. Legge le variabili METE e
// SCADENZE_CAFOSCARI (definite nei file dati) e costruisce la
// pagina inserendo il contenuto nei due contenitori vuoti
// dell'index.html.
//
// Regola d'oro: per cambiare una meta o una scadenza si modifica
// il FILE DATI, mai questo file.
// ============================================================


// --- Piccolo aiutante: trasforma una data tecnica in italiano leggibile ---
// Riceve "2026-02-25T12:00" e restituisce "25 febbraio 2026, 12:00".
function formattaData(dataTecnica) {
  const data = new Date(dataTecnica);
  // toLocaleString con "it-IT" scrive la data in italiano
  return data.toLocaleString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}


// --- Piccolo aiutante: traduce un livello tecnico in parola umana ---
// "L" = triennale, "LM" = magistrale.
function livelloInParole(codice) {
  if (codice === "L") return "triennale";
  if (codice === "LM") return "magistrale";
  return codice; // se è un codice che non conosciamo, lo mostriamo com'è
}


// --- Piccolo aiutante: traduce i posti in linguaggio umano ---
// Da { numero: 3, mesi: 10, livello: "L" } a "3 posti da 10 mesi - triennale".
function postiInParole(posto) {
  const parolaPosti = posto.numero === 1 ? "posto" : "posti";
  let testo = posto.numero + " " + parolaPosti + " da " + posto.mesi +
              " mesi - " + livelloInParole(posto.livello);
  if (posto.note) {
    testo += " (" + posto.note + ")";
  }
  return testo;
}


// --- Piccolo aiutante: calcola il conto alla rovescia verso una data ---
// Riceve la data della scadenza e restituisce un oggetto che descrive
// quanto manca (o quanto è passata), già pronto per essere mostrato.
function calcolaCountdown(dataTecnica) {
  const adesso = new Date();
  const scadenza = new Date(dataTecnica);
  // Differenza in millisecondi: positiva = nel futuro, negativa = già passata
  const differenza = scadenza - adesso;
  const passata = differenza < 0;

  // Lavoriamo sul valore assoluto (quanti millisecondi di distanza)
  let resto = Math.abs(differenza);
  const msInGiorno = 1000 * 60 * 60 * 24;
  const msInOra = 1000 * 60 * 60;
  const msInMinuto = 1000 * 60;

  const giorni = Math.floor(resto / msInGiorno);
  resto = resto % msInGiorno;
  const ore = Math.floor(resto / msInOra);
  resto = resto % msInOra;
  const minuti = Math.floor(resto / msInMinuto);
  resto = resto % msInMinuto;
  const secondi = Math.floor(resto / 1000);

  return { passata: passata, giorni: giorni, ore: ore, minuti: minuti, secondi: secondi };
}


// --- Piccolo aiutante: trasforma il countdown in una frase leggibile ---
function countdownInParole(c) {
  if (c.passata) {
    // Per le scadenze passate basta dire da quanti giorni
    if (c.giorni > 0) return "Scaduta da " + c.giorni + (c.giorni === 1 ? " giorno" : " giorni");
    return "Scaduta oggi";
  }
  // Per le scadenze future mostriamo giorni, ore, minuti e secondi
  return "Mancano " + c.giorni + "g " + c.ore + "h " + c.minuti + "m " + c.secondi + "s";
}


// --- Piccolo aiutante: crea un elemento con classe e testo ---
// Usiamo sempre textContent (mai innerHTML) quando inseriamo DATI:
// così qualunque carattere nei dati viene mostrato come testo e
// non può essere interpretato come codice (prevenzione XSS).
function crea(tag, classe, testo) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (testo !== undefined && testo !== null) el.textContent = testo;
  return el;
}


// ============================================================
// BANNER ANNO ACCADEMICO (in cima alla pagina)
// Legge BANDO_INFO da js/dati-bando.js.
// ============================================================
function mostraBannerAnno() {
  const banner = document.getElementById("banner-anno");
  if (!banner || typeof BANDO_INFO === "undefined") return;
  banner.textContent = "Dati del bando " + BANDO_INFO.annoAccademico +
    " — ultima verifica: " + new Date(BANDO_INFO.dataVerificaDati)
      .toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
}


// ============================================================
// 0) COSTRUISCE LA SEZIONE IDONEITÀ (requisiti del bando)
// ============================================================
function mostraRequisiti() {
  const contenitore = document.getElementById("lista-requisiti");

  REQUISITI_BANDO.forEach(function (req) {
    const scheda = crea("div", "requisito");
    scheda.appendChild(crea("div", "requisito-titolo", req.titolo));
    scheda.appendChild(crea("div", "requisito-valore", req.valore));
    scheda.appendChild(crea("div", "requisito-descrizione", req.descrizione));
    contenitore.appendChild(scheda);
  });
}


// ============================================================
// 0-bis) CHECKLIST con spunte salvate nello ZAINO UNICO
// ------------------------------------------------------------
// Lo stato delle spunte vive in ZAINO.checklist, un oggetto del
// tipo { "chk-mete": true, "chk-pdf": false, ... }.
// ============================================================
function mostraChecklist() {
  const contenitore = document.getElementById("lista-checklist");
  contenitore.innerHTML = "";

  // Se lo zaino non ha ancora la sezione checklist, la creiamo vuota
  if (!ZAINO.checklist) ZAINO.checklist = {};

  CHECKLIST.forEach(function (voce) {
    const spuntato = ZAINO.checklist[voce.id] === true;

    const riga = document.createElement("label");
    riga.className = "voce-checklist" + (spuntato ? " voce-fatta" : "");

    const casella = document.createElement("input");
    casella.type = "checkbox";
    casella.checked = spuntato;

    // Quando si clicca: aggiorna lo zaino, salva, ridisegna progresso
    casella.addEventListener("change", function () {
      ZAINO.checklist[voce.id] = casella.checked;
      salvaZaino(ZAINO);
      riga.classList.toggle("voce-fatta", casella.checked);
      aggiornaProgresso();
    });

    const testo = document.createElement("span");
    testo.textContent = voce.testo;

    riga.appendChild(casella);
    riga.appendChild(testo);
    contenitore.appendChild(riga);
  });

  aggiornaProgresso();
}

// Aggiorna la barra di avanzamento "X di Y completati".
function aggiornaProgresso() {
  const totale = CHECKLIST.length;
  let fatti = 0;
  CHECKLIST.forEach(function (voce) {
    if (ZAINO.checklist && ZAINO.checklist[voce.id]) fatti++;
  });
  const percentuale = totale === 0 ? 0 : Math.round((fatti / totale) * 100);
  const barra = document.getElementById("barra-riempimento");
  barra.style.width = percentuale + "%";
  barra.textContent = fatti + " di " + totale;
}


// ============================================================
// 1) COSTRUISCE LA TIMELINE DELLA DOMANDA (con countdown dal vivo)
// ============================================================
function mostraTimeline() {
  const contenitore = document.getElementById("timeline");

  // Mettiamo le scadenze in ordine di tempo (dalla più vicina alla più lontana)
  const scadenzeOrdinate = SCADENZE_CAFOSCARI.slice().sort(function (a, b) {
    return new Date(a.data) - new Date(b.data);
  });

  scadenzeOrdinate.forEach(function (scadenza, indice) {
    const c = calcolaCountdown(scadenza.data);

    const tappa = document.createElement("div");
    // Aggiungiamo la classe "passata" se la scadenza è già trascorsa,
    // così lo stile la mostra in modo diverso (più spenta).
    tappa.className = "tappa" + (c.passata ? " tappa-passata" : "");
    // Salviamo la data sull'elemento: serve al countdown per aggiornarsi ogni secondo
    tappa.setAttribute("data-scadenza", scadenza.data);

    tappa.appendChild(crea("div", "tappa-pallino", String(indice + 1)));
    const contenuto = crea("div", "tappa-contenuto");
    contenuto.appendChild(crea("div", "tappa-titolo", scadenza.cosa));
    contenuto.appendChild(crea("div", "tappa-data", formattaData(scadenza.data)));
    contenuto.appendChild(crea("div", "tappa-descrizione", scadenza.descrizione));
    contenuto.appendChild(crea("div", "tappa-countdown", countdownInParole(c)));
    tappa.appendChild(contenuto);

    contenitore.appendChild(tappa);
  });
}


// --- Aggiorna TUTTI i countdown della timeline. Viene chiamata ogni secondo. ---
function aggiornaCountdown() {
  const tappe = document.querySelectorAll(".tappa");
  tappe.forEach(function (tappa) {
    const dataScadenza = tappa.getAttribute("data-scadenza");
    const c = calcolaCountdown(dataScadenza);
    const elementoCountdown = tappa.querySelector(".tappa-countdown");
    if (elementoCountdown) {
      elementoCountdown.textContent = countdownInParole(c);
    }
    // Se nel frattempo la scadenza è passata, aggiorniamo anche lo stile
    if (c.passata) tappa.classList.add("tappa-passata");
  });
}


// ============================================================
// LO "ZAINO UNICO" (account-ready)
// ------------------------------------------------------------
// Tutti i dati dello studente vivono in UN SOLO oggetto, salvato
// in localStorage. Domani lo stesso oggetto potrà finire su un
// server: cambia DOVE si salva, non COSA. Per ora: solo dispositivo.
// ============================================================
const CHIAVE_ZAINO = "erasmuswiz-zaino";

function caricaZaino() {
  const grezzo = localStorage.getItem(CHIAVE_ZAINO);
  if (grezzo) {
    try { return JSON.parse(grezzo); } catch (e) { /* dato rovinato: riparti pulito */ }
  }
  // Struttura di partenza (verrà ampliata nelle fasi successive)
  return { profilo: null };
}

function salvaZaino(zaino) {
  localStorage.setItem(CHIAVE_ZAINO, JSON.stringify(zaino));
}

let ZAINO = caricaZaino();


// ============================================================
// LOGICA DI COMPATIBILITÀ (pesi: lingua 50 / livello 30 / posti 20)
// ============================================================

// Scala dei livelli linguistici, dal più basso al più alto.
const SCALA_LINGUE = ["A1", "A2", "B1", "B2", "C1", "C2"];

// Punteggio LINGUA (max 50) per UNA singola lingua richiesta.
// Confronta il livello richiesto con quello posseduto dallo studente.
function punteggioLinguaSingola(richiesta, lingueStudente) {
  // Cerchiamo se lo studente possiede la lingua richiesta
  const posseduta = lingueStudente.find(function (l) {
    return l.lingua === richiesta.lingua;
  });
  if (!posseduta) return 0; // non la possiede affatto

  const idxRichiesto = SCALA_LINGUE.indexOf(richiesta.livello);
  const idxPosseduto = SCALA_LINGUE.indexOf(posseduta.livello);
  const differenza = idxPosseduto - idxRichiesto; // >=0 = uguale o superiore

  if (differenza >= 0) {
    return posseduta.certificata ? 50 : 25; // posseduto: certificato 50, non certificato 25
  }
  if (differenza === -1) return 12; // un livello sotto
  return 0;                          // più di un livello sotto
}

// Punteggio LINGUA complessivo della meta: prendiamo il MIGLIORE tra le
// lingue richieste (di solito basta soddisfarne una, es. francese O inglese).
function punteggioLingua(meta, profilo) {
  if (!meta.requisitoLingua || meta.requisitoLingua.length === 0) return 50;
  let migliore = 0;
  meta.requisitoLingua.forEach(function (r) {
    const p = punteggioLinguaSingola(r, profilo.lingue);
    if (p > migliore) migliore = p;
  });
  return migliore;
}

// Punteggio LIVELLO accademico (max 30): il livello dello studente è tra i posti?
function punteggioLivello(meta, profilo) {
  const presente = meta.posti.some(function (p) { return p.livello === profilo.livello; });
  return presente ? 30 : 0;
}

// Punteggio POSTI (max 20): più posti per il livello dello studente = più chance.
// 1 posto -> ~5, 6+ posti -> 20.
function punteggioPosti(meta, profilo) {
  let numero = 0;
  meta.posti.forEach(function (p) {
    if (p.livello === profilo.livello) numero += p.numero;
  });
  if (numero <= 0) return 0;
  return Math.min(20, 5 + (numero - 1) * 3);
}

// Calcola il punteggio totale + un'etichetta onesta (icona + spiegazione).
// IMPORTANTE: molte mete dalla lista ufficiale NON hanno il requisito di
// lingua (requisitoLingua vuoto). In quel caso NON inventiamo un punteggio:
// segnaliamo "verifica la lingua" e ordiniamo con un valore intermedio.
// Il campo "ordine" serve solo per ordinare le card; "totale" è la % (o null).
function calcolaCompatibilita(meta, profilo) {
  const pLivello = punteggioLivello(meta, profilo);
  const pPosti = punteggioPosti(meta, profilo);
  const linguaNota = meta.requisitoLingua && meta.requisitoLingua.length > 0;

  // CASO A — lingua non nota (da verificare): niente percentuale finta.
  if (!linguaNota) {
    if (pLivello === 0) {
      return {
        totale: null, ordine: 10, icona: "🔒", stato: "Non accessibile ora",
        dettaglio: "Questa meta non ha posti per il tuo livello (" + livelloInParole(profilo.livello) + ")."
      };
    }
    return {
      totale: null, ordine: 60, icona: "🟡", stato: "Idoneo — verifica la lingua",
      dettaglio: "Hai il livello giusto e ci sono posti per te. Manca solo il requisito " +
                 "linguistico, che non è presente nella lista ufficiale: controllalo sulla scheda della destinazione."
    };
  }

  // CASO B — lingua nota (es. Aix-Marseille): punteggio pieno 0-100.
  const pLingua = punteggioLingua(meta, profilo);
  const totale = Math.round(pLingua + pLivello + pPosti);
  let icona, stato, dettaglio;
  if (totale >= 80) {
    icona = "✅"; stato = "Compatibile"; dettaglio = "Hai i requisiti principali.";
  } else if (totale >= 40) {
    icona = "⚠️"; stato = "Possibile, con riserve"; dettaglio = motivoMancanza(meta, profilo, pLingua, pLivello);
  } else {
    icona = "🔒"; stato = "Non accessibile ora"; dettaglio = motivoMancanza(meta, profilo, pLingua, pLivello);
  }

  return { totale: totale, ordine: totale, icona: icona, stato: stato, dettaglio: dettaglio };
}

// Spiega COSA manca, in linguaggio umano.
function motivoMancanza(meta, profilo, pLingua, pLivello) {
  const motivi = [];
  if (pLivello === 0) {
    motivi.push("questa meta non ha posti per il tuo livello (" + livelloInParole(profilo.livello) + ")");
  }
  if (pLingua < 50) {
    if (pLingua === 25) motivi.push("hai il livello di lingua ma non è certificato");
    else if (pLingua === 12) motivi.push("ti manca un livello di lingua rispetto al richiesto");
    else if (pLingua === 0) motivi.push("non raggiungi il requisito linguistico");
  }
  if (motivi.length === 0) return "Mancano solo dettagli minori.";
  return "Attenzione: " + motivi.join("; ") + ".";
}


// ============================================================
// 2) COSTRUISCE LA SEZIONE METE (una card per meta)
// ------------------------------------------------------------
// Se esiste un profilo: filtra per area, calcola la compatibilità,
// ordina dalla più alla meno compatibile e mostra icona + spiegazione.
// Se NON esiste profilo: mostra tutte le mete senza punteggio.
// ============================================================
function mostraMete() {
  const contenitore = document.getElementById("lista-mete");
  const intro = document.getElementById("intro-mete");
  contenitore.innerHTML = ""; // puliamo: la funzione può essere richiamata più volte

  const profilo = ZAINO.profilo;
  let elenco;

  if (profilo) {
    // PASSO 0 — FILTRO NETTO: tengo solo le mete della stessa area disciplinare
    elenco = METE.filter(function (meta) {
      return meta.areeDisciplinari.some(function (a) { return a.codice === profilo.area; });
    });

    // Calcolo la compatibilità e ordino dalla più alta alla più bassa
    elenco = elenco.map(function (meta) {
      return { meta: meta, comp: calcolaCompatibilita(meta, profilo) };
    });
    elenco.sort(function (a, b) { return b.comp.ordine - a.comp.ordine; });

    if (elenco.length === 0) {
      intro.textContent = "Nessuna meta trovata per la tua area disciplinare. Prova a cambiare area nel profilo.";
    } else {
      intro.textContent = "Mete della tua area, ordinate dalla più compatibile con il tuo profilo.";
    }
  } else {
    // Nessun profilo: mostro tutte le mete, senza punteggio
    elenco = METE.map(function (meta) { return { meta: meta, comp: null }; });
  }

  elenco.forEach(function (voce) {
    const meta = voce.meta;
    const comp = voce.comp;

    const card = document.createElement("article");
    card.className = "card-meta";

    // -- Aree disciplinari: le uniamo in una sola stringa, es. "0311 Economics" --
    const aree = meta.areeDisciplinari
      .map(function (a) { return a.codice + " " + a.nome; })
      .join(", ");

    // -- Piccolo aiutante locale: un blocco "etichetta + contenuto" --
    // Il contenuto può essere una stringa (testo) o un elemento (es. una lista).
    function campo(etichetta, contenuto) {
      const div = crea("div", "campo");
      div.appendChild(crea("span", "campo-etichetta", etichetta));
      if (typeof contenuto === "string") {
        div.appendChild(document.createTextNode(contenuto));
      } else {
        div.appendChild(contenuto);
      }
      return div;
    }

    // -- Posti: una riga di lista per ogni opzione di posto --
    const listaPosti = document.createElement("ul");
    meta.posti.forEach(function (p) {
      listaPosti.appendChild(crea("li", null, postiInParole(p)));
    });

    // -- Requisiti linguistici: una riga per ogni lingua richiesta --
    // Se la lista non indica la lingua (requisitoLingua vuoto) lo diciamo
    // chiaramente, invece di lasciare il campo vuoto.
    const listaLingue = document.createElement("ul");
    if (meta.requisitoLingua && meta.requisitoLingua.length) {
      meta.requisitoLingua.forEach(function (l) {
        listaLingue.appendChild(crea("li", null, l.lingua + " " + l.livello + " — " + l.condizione));
      });
    } else {
      listaLingue.appendChild(crea("li", null, "Da verificare — non indicata nella lista ufficiale del bando."));
    }

    // -- Intestazione della card --
    card.appendChild(crea("h3", null, meta.universita));
    card.appendChild(crea("div", "card-luogo",
      meta.citta ? (meta.citta + " (" + meta.paese + ")") : meta.paese));

    // -- Badge di compatibilità (solo se c'è un profilo) --
    if (comp) {
      // Classe colore in base alla fascia: ok / medio / basso.
      // Quando totale è null (lingua da verificare) usiamo "ordine" per il colore
      // e mostriamo testo senza percentuale.
      let classe = "badge-basso";
      if (comp.totale === null) {
        if (comp.ordine >= 60) classe = "badge-medio";
      } else if (comp.totale >= 80) classe = "badge-ok";
      else if (comp.totale >= 40) classe = "badge-medio";

      const testoBadge = (comp.totale === null)
        ? comp.icona + " " + comp.stato
        : comp.icona + " " + comp.totale + "% — " + comp.stato;

      const badge = crea("div", "badge-comp " + classe);
      badge.appendChild(crea("span", "badge-percentuale", testoBadge));
      badge.appendChild(crea("span", "badge-dettaglio", comp.dettaglio));
      card.appendChild(badge);
    }

    card.appendChild(campo("Dipartimento Ca' Foscari", meta.dipartimentoCf));
    card.appendChild(campo("Area disciplinare", aree));
    card.appendChild(campo("Coordinatore", meta.coordinatoreCf));
    card.appendChild(campo("Posti disponibili", listaPosti));
    card.appendChild(campo("Requisiti linguistici", listaLingue));

    // -- Link: scheda PDF se presente, altrimenti rimando al portale destinazioni --
    const link = crea("a", "card-link",
      meta.linkPdf ? "Scheda ufficiale (PDF)" : "Cerca la scheda sul portale Ca' Foscari");
    link.href = meta.linkPdf || "https://www.unive.it/data/11631/";
    link.target = "_blank";
    link.rel = "noopener";
    card.appendChild(link);

    contenitore.appendChild(card);
  });
}


// ============================================================
// 3) GESTIONE DEL FORM PROFILO
// ============================================================

// Riempie il menu "Area disciplinare" con le aree presenti nelle mete
// (così non scriviamo a mano un elenco: lo deduciamo dai dati).
function popolaAree() {
  const select = document.getElementById("area");
  const viste = {}; // per evitare doppioni
  METE.forEach(function (meta) {
    meta.areeDisciplinari.forEach(function (a) {
      if (!viste[a.codice]) {
        viste[a.codice] = true;
        const opzione = document.createElement("option");
        opzione.value = a.codice;
        opzione.textContent = a.codice + " — " + a.nome;
        select.appendChild(opzione);
      }
    });
  });
}

// Se c'è già un profilo salvato, lo rimette nei campi del form.
function precompilaForm() {
  const p = ZAINO.profilo;
  if (!p) return;
  document.getElementById("area").value = p.area;
  document.getElementById("livello").value = p.livello;

  const righe = document.querySelectorAll(".riga-lingua");
  p.lingue.forEach(function (lingua, i) {
    if (!righe[i]) return;
    righe[i].querySelector(".lingua-nome").value = lingua.lingua;
    righe[i].querySelector(".lingua-livello").value = lingua.livello;
    righe[i].querySelector(".lingua-certificata").checked = lingua.certificata;
  });
}

// Legge i campi del form e costruisce l'oggetto profilo.
function leggiProfiloDalForm() {
  const lingue = [];
  document.querySelectorAll(".riga-lingua").forEach(function (riga) {
    const nome = riga.querySelector(".lingua-nome").value;
    if (nome) { // solo le righe dove è stata scelta una lingua
      lingue.push({
        lingua: nome,
        livello: riga.querySelector(".lingua-livello").value,
        certificata: riga.querySelector(".lingua-certificata").checked
      });
    }
  });

  return {
    area: document.getElementById("area").value,
    livello: document.getElementById("livello").value,
    lingue: lingue
  };
}

// Quando si invia il form: salva il profilo nello zaino e ricostruisce le mete.
document.getElementById("form-profilo").addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita che la pagina si ricarichi
  ZAINO.profilo = leggiProfiloDalForm();
  salvaZaino(ZAINO);
  mostraMete(); // ridisegna le mete con il nuovo punteggio
});


// ============================================================
// AVVIO: quando la pagina è pronta, costruiamo le sezioni
// ============================================================
mostraBannerAnno();
mostraRequisiti();
mostraChecklist();
popolaAree();
precompilaForm();
mostraTimeline();
mostraMete();

// Avviamo il conto alla rovescia dal vivo: la funzione aggiornaCountdown
// viene richiamata automaticamente ogni secondo (1000 millisecondi).
setInterval(aggiornaCountdown, 1000);
