// ============================================================
// ErasmusWiz v2 — Logica principale
// Legge i dati dai file js/dati-*.js (condivisi con v1).
// METE = array combinato Economia + Management (vedi index.html)
// ============================================================

// ============================================================
// LO ZAINO — un contenitore, uno zaino per ateneo (R1.3, PLAN.md §7/R1.3)
// ------------------------------------------------------------
// Fino alla sessione 53 lo zaino era UNO SOLO, condiviso fra gli atenei:
// cambiando ateneo restavano dentro profilo, stelline e spunte dell'altro.
// Ora in localStorage c'è un CONTENITORE con uno zaino separato per ateneo:
//   { v: 2, zaini: { cafoscari: {…}, sapienza: {…} }, pendente: {…} }
// L'ateneo attivo NON sta qui: resta in "erasmuswiz_ateneo", che index.html
// legge prima di app.js — una sola fonte di verità, nessun disallineamento.
// Il cambio ateneo diventa così una lettura di un'altra casella: niente da
// migrare al volo, niente da perdere.
// ============================================================
const CHIAVE_ZAINO   = "erasmuswiz-zaino";
const VERSIONE_ZAINO = 2;
// Bandierina letta da js/carica-atenei.js: "al prossimo avvio caricali tutti".
// Il nome e' condiviso con il caricatore: cambiarlo qui vuol dire cambiarlo li'.
const CHIAVE_CARICA_TUTTI = "erasmuswiz_carica_tutti";

function zainoVuoto() {
  return {
    profilo: null, checklist: {}, metePreferite: [], schedina: [],
    fase: "domanda", checklistPost: {}, onboardingFatto: false,
    autoverifica: {}, zainoCelebrato: false, wizardMete: false,
    la: { metaAperta: null, bozzePerMeta: {} }
  };
}

// Fallback per zaini vecchi su ogni estensione di ZAINO (regola del progetto).
function normalizzaZaino(z) {
  if (!z || typeof z !== "object") return zainoVuoto();
  if (!Array.isArray(z.metePreferite)) z.metePreferite = [];
  if (!Array.isArray(z.schedina)) z.schedina = [];
  if (!z.checklist || typeof z.checklist !== "object") z.checklist = {};
  if (!z.fase) z.fase = "domanda";
  if (!z.checklistPost || typeof z.checklistPost !== "object") z.checklistPost = {};
  if (typeof z.onboardingFatto !== "boolean") z.onboardingFatto = !!z.profilo;
  if (!z.autoverifica || typeof z.autoverifica !== "object") z.autoverifica = {};
  // "Lo zaino" (BR6): celebrazione all'ingresso in fase 4, una sola volta.
  // Zaino vecchio senza il campo → non ancora celebrato.
  if (typeof z.zainoCelebrato !== "boolean") z.zainoCelebrato = (z.fase === "selezionato");
  // Wizard prima visita delle Mete (R3.1): zaino vecchio senza il campo →
  // il wizard non è mai stato visto (comparirà solo senza rotte salvate).
  if (typeof z.wizardMete !== "boolean") z.wizardMete = false;
  // LA Workspace (R4.1, PLAN.md §6.4): ramo ADDITIVO. Zaino senza `la` =
  // "nessuna bozza", mai una perdita; lo schema vive nella sezione LA.
  if (!z.la || typeof z.la !== "object") z.la = {};
  if (!z.la.bozzePerMeta || typeof z.la.bozzePerMeta !== "object") z.la.bozzePerMeta = {};
  if (z.la.metaAperta === undefined) z.la.metaAperta = null;
  return z;
}

function ateneoAttivo() {
  return window.ATENEO_ATTIVO || "cafoscari";
}

// ---- Attribuzione: di quale ateneo è questa chiave? ----
// Ogni chiave dello zaino porta con sé il suo ateneo, e non per fortuna:
// gli id delle mete non si sovrappongono fra i due atenei (392 Ca' Foscari
// contro 1595 Sapienza, zero collisioni), i nomi dei dipartimenti nemmeno,
// e checklist/requisiti sono prefissati ("chk-", "cf-", "post-" contro
// "sap-"). Quindi non si indovina: si legge dai dati.
let _indiceAtenei = null;
function indiceAtenei() {
  if (_indiceAtenei) return _indiceAtenei;
  _indiceAtenei = {};
  const tutti = window.ATENEI || {};
  Object.keys(tutti).forEach(k => {
    const a = tutti[k] || {};
    const idx = {
      mete: new Set(), dipartimenti: new Set(),
      checklist: new Set(), checklistPost: new Set(), requisiti: new Set()
    };
    (a.mete || []).forEach(m => {
      if (m && m.id) idx.mete.add(m.id);
      if (m && m.dipartimentoCf) idx.dipartimenti.add(m.dipartimentoCf);
    });
    (a.checklist     || []).forEach(c => { if (c && c.id) idx.checklist.add(c.id); });
    (a.checklistPost || []).forEach(c => { if (c && c.id) idx.checklistPost.add(c.id); });
    (a.requisiti     || []).forEach(r => { if (r && r.id) idx.requisiti.add(r.id); });
    _indiceAtenei[k] = idx;
  });
  return _indiceAtenei;
}

// Gli atenei che riconoscono una chiave. Esattamente 1 = attribuzione certa.
function ateneiCon(campo, chiave) {
  const idx = indiceAtenei();
  return Object.keys(idx).filter(k => idx[k][campo].has(chiave));
}

// Il "percorso" = le parti dello zaino SENZA marca d'ateneo. Vanno tutte
// insieme all'ateneo principale: uno studente ha un profilo solo.
// C'è qualcosa da collocare davvero? Un percorso senza profilo e fermo ai
// valori di partenza non vale una domanda: qualsiasi risposta darebbe lo
// stesso risultato.
function percorsoDaCollocare(p) {
  return !!(p.profilo || (p.fase && p.fase !== "domanda") || p.onboardingFatto || p.zainoCelebrato);
}

function applicaPercorso(z, p) {
  z.profilo = p.profilo || null;
  z.fase    = p.fase || "domanda";
  if (typeof p.onboardingFatto === "boolean") z.onboardingFatto = p.onboardingFatto;
  if (typeof p.zainoCelebrato  === "boolean") z.zainoCelebrato  = p.zainoCelebrato;
  return normalizzaZaino(z);
}

// ---- Migrazione degli zaini vecchi (formato piatto) ----
// Si SPACCA per evidenza: ogni campo va all'ateneo che le sue chiavi
// indicano. Così anche uno zaino contaminato dal bug (profilo Ca' Foscari
// + stelline su mete Sapienza) si ricompone senza perdere niente.
// Restano senza marca i tre scalari (fase, onboardingFatto, zainoCelebrato)
// e il profilo: seguono l'ateneo del dipartimento nel profilo. Solo se il
// profilo non è attribuibile E c'è contenuto di DUE atenei la scelta è
// impossibile: allora si chiede allo studente (vedi initSceltaPercorso).
function migraZainoLegacy(legacy) {
  const zaini  = {};
  const toccati = {};
  Object.keys(indiceAtenei()).forEach(k => { zaini[k] = zainoVuoto(); });

  const assegna = (k, fn) => { if (zaini[k]) { fn(zaini[k]); toccati[k] = true; } };

  // Stelline e schedina: l'id della meta dice l'ateneo, senza ambiguità.
  (legacy.metePreferite || []).forEach(id => {
    const c = ateneiCon("mete", id);
    if (c.length === 1) assegna(c[0], z => z.metePreferite.push(id));
  });
  (legacy.schedina || []).forEach(id => {
    const c = ateneiCon("mete", id);
    if (c.length === 1) assegna(c[0], z => z.schedina.push(id));
  });

  // Spunte: checklist, checklist post-selezione, auto-verifica dei requisiti.
  [["checklist", "checklist"], ["checklistPost", "checklistPost"], ["autoverifica", "requisiti"]]
    .forEach(([campo, indice]) => {
      const orig = legacy[campo] || {};
      Object.keys(orig).forEach(id => {
        const c = ateneiCon(indice, id);
        if (c.length === 1) assegna(c[0], z => { z[campo][id] = orig[id]; });
      });
    });

  const percorso = {
    profilo:         legacy.profilo || null,
    fase:            legacy.fase,
    onboardingFatto: legacy.onboardingFatto,
    zainoCelebrato:  legacy.zainoCelebrato
  };

  // Chi è l'ateneo principale? Prima il dipartimento del profilo (il segnale
  // più forte), poi l'unico ateneo con contenuto attribuito.
  const dip  = legacy.profilo && legacy.profilo.dipartimento;
  const cand = dip ? ateneiCon("dipartimenti", dip) : [];
  let principale = cand.length === 1 ? cand[0] : null;
  const conContenuto = Object.keys(toccati);
  if (!principale) {
    if (conContenuto.length === 1) principale = conContenuto[0];
    // Nessun contenuto marcato: non c'è niente da attribuire male, e
    // l'ateneo in uso è il posto giusto. Chiedere sarebbe una domanda
    // senza posta in gioco.
    else if (conContenuto.length === 0) principale = ateneoAttivo();
    // Contenuto di due atenei, ma niente da collocare: le stelline si sono
    // già divise da sole e la domanda non deciderebbe nulla. Non si disturba
    // lo studente per un'ambiguità che non ha conseguenze.
    else if (!percorsoDaCollocare(percorso)) principale = ateneoAttivo();
  }

  const cont = { v: VERSIONE_ZAINO, zaini };
  if (principale) applicaPercorso(zaini[principale] || (zaini[principale] = zainoVuoto()), percorso);
  else cont.pendente = Object.assign({ candidati: conContenuto }, percorso);

  Object.keys(zaini).forEach(k => normalizzaZaino(zaini[k]));
  return cont;
}

// ---- R1.5: non migrare mai con mezzi dati in memoria --------------------
// `migraZainoLegacy` attribuisce ogni chiave leggendo gli id delle mete di
// TUTTI gli atenei. Dopo R1.5 il caricatore (js/carica-atenei.js) ne porta uno
// solo, salvo quando riconosce che c'e' una migrazione da fare. Se quella
// euristica sbagliasse, migrare qui vorrebbe dire buttare in silenzio le
// stelline dell'altro ateneo: la perdita esatta che R1.3 esiste per impedire.
// Quindi non si indovina: si chiede il carico completo e si riavvia.
// Fino al riavvio lo zaino su disco NON si tocca — `location.reload()` non
// ferma l'esecuzione all'istante, e un salvataggio nel frattempo
// sovrascriverebbe il vecchio zaino con uno vuoto.
let CARICO_INCOMPLETO = false;

function ateneiTuttiCaricati() {
  const registro = window.ATENEI_REGISTRO || {};
  const attesi   = Object.keys(registro).filter(k => registro[k].disponibile);
  const caricati = window.ATENEI_CARICATI || [];
  return attesi.every(k => caricati.includes(k));
}

// true se il riavvio e' stato chiesto davvero. Se la bandierina non si riesce a
// scrivere, NON si ricarica: un riavvio che non cambia nulla sarebbe un ciclo
// infinito, e chi non ha sessionStorage non ha nemmeno un vecchio zaino da
// salvare (senza localStorage non ci sarebbe niente da migrare).
function rinviaMigrazioneERicarica() {
  let chiesto = false;
  try {
    sessionStorage.setItem(CHIAVE_CARICA_TUTTI, "1");
    chiesto = sessionStorage.getItem(CHIAVE_CARICA_TUTTI) === "1";
  } catch (e) { chiesto = false; }
  if (!chiesto) return false;
  CARICO_INCOMPLETO = true;
  location.reload();
  return true;
}

function salvaContenitore(c) {
  if (CARICO_INCOMPLETO) return;
  try { localStorage.setItem(CHIAVE_ZAINO, JSON.stringify(c)); } catch (e) {}
}

function caricaContenitore() {
  let grezzo = null;
  try { grezzo = localStorage.getItem(CHIAVE_ZAINO); } catch (e) {}
  if (!grezzo) return { v: VERSIONE_ZAINO, zaini: {} };
  let dato;
  try { dato = JSON.parse(grezzo); } catch (e) { return { v: VERSIONE_ZAINO, zaini: {} }; }
  if (dato && dato.v === VERSIONE_ZAINO && dato.zaini && typeof dato.zaini === "object") return dato;
  // C'è da migrare: servono TUTTI gli atenei, altrimenti si perde in silenzio
  // (vedi rinviaMigrazioneERicarica). Lo zaino vecchio resta intatto su disco e
  // la migrazione la fa il prossimo avvio, con i dati completi.
  if (!ateneiTuttiCaricati() && rinviaMigrazioneERicarica()) {
    return { v: VERSIONE_ZAINO, zaini: {} };
  }
  // Formato piatto (fino alla sessione 53): si migra e si riscrive subito,
  // così il vecchio blob non resta lì a farsi rileggere a ogni avvio.
  const migrato = migraZainoLegacy(normalizzaZaino(dato));
  salvaContenitore(migrato);
  return migrato;
}

let CONTENITORE = caricaContenitore();

function caricaZaino() {
  const k = ateneoAttivo();
  if (!CONTENITORE.zaini[k]) CONTENITORE.zaini[k] = zainoVuoto();
  return normalizzaZaino(CONTENITORE.zaini[k]);
}

function salvaZaino(zaino) {
  CONTENITORE.zaini[ateneoAttivo()] = zaino;
  salvaContenitore(CONTENITORE);
}

let ZAINO = caricaZaino();

// La domanda dell'ultima spiaggia: si arriva qui solo se la migrazione non ha
// potuto attribuire il profilo con certezza. Finché non risponde, il pendente
// resta in localStorage: chiudere la pagina non perde niente, la domanda
// ritorna al prossimo avvio.
function initSceltaPercorso() {
  const p = CONTENITORE.pendente;
  if (!p) return;
  const overlay = document.getElementById("scelta-percorso");
  const zona    = document.getElementById("scelta-percorso-scelte");
  if (!overlay || !zona) return;

  // Il REGISTRO, non ATENEI: qui servono solo l'esistenza e il nome dell'ateneo,
  // mai le sue mete. Dopo R1.5 in ATENEI c'e' il solo ateneo caricato, e un
  // candidato valido ma non caricato sparirebbe dalla domanda — facendola
  // "decidere da sola" proprio nel caso in cui non deve.
  const tutti = window.ATENEI_REGISTRO || {};
  const candidati = (p.candidati || []).filter(k => tutti[k]);
  // Meno di due candidati validi (dati cambiati sotto i piedi da quando il
  // pendente è stato scritto): la domanda non ha più due risposte possibili,
  // e non si tiene lo studente in ostaggio. Decide l'unico candidato rimasto,
  // o l'ateneo in uso.
  if (candidati.length < 2) {
    const k = candidati[0] || ateneoAttivo();
    if (!CONTENITORE.zaini[k]) CONTENITORE.zaini[k] = zainoVuoto();
    applicaPercorso(CONTENITORE.zaini[k], p);
    delete CONTENITORE.pendente;
    salvaContenitore(CONTENITORE);
    ZAINO = caricaZaino();
    return;
  }

  const testo = document.getElementById("scelta-percorso-testo");
  if (testo) {
    testo.textContent = "Nel percorso che avevi salvato ci sono dati di più atenei: " +
      candidati.map(k => tutti[k].label).join(" e ") +
      ". Non riesco a capire da solo dove ti eri candidato, e non voglio indovinare.";
  }

  zona.innerHTML = "";
  candidati.forEach(k => {
    const btn = crea("button", "scelta-percorso-btn", tutti[k].label);
    btn.type = "button";
    btn.addEventListener("click", () => {
      if (!CONTENITORE.zaini[k]) CONTENITORE.zaini[k] = zainoVuoto();
      applicaPercorso(CONTENITORE.zaini[k], p);
      delete CONTENITORE.pendente;
      salvaContenitore(CONTENITORE);
      // L'ateneo scelto diventa quello attivo: è lì che lo studente si era
      // fermato. Il reload rifà l'avvio con i dati giusti, come il cambio
      // ateneo — nessuno stato a metà.
      try { localStorage.setItem("erasmuswiz_ateneo", k); } catch (e) {}
      location.reload();
    });
    zona.appendChild(btn);
  });

  overlay.hidden = false;
  document.body.classList.add("no-scroll");
  zona.querySelector("button")?.focus();
}

let filtroMeteAttivo = "tutte"; // "tutte" | "ok" | "medio" | "basso" — stato UI, non salvato nello zaino

// ---- Utilità DOM ----
function crea(tag, cls, txt) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (txt !== undefined && txt !== null) el.textContent = txt;
  return el;
}

// ---- Utilità date ----
function formattaData(dataTecnica) {
  return new Date(dataTecnica).toLocaleString("it-IT", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
}

function calcolaCountdown(dataTecnica) {
  const diff = new Date(dataTecnica) - new Date();
  const passata = diff < 0;
  let resto = Math.abs(diff);
  const giorni  = Math.floor(resto / 86400000); resto %= 86400000;
  const ore     = Math.floor(resto / 3600000);  resto %= 3600000;
  const minuti  = Math.floor(resto / 60000);    resto %= 60000;
  const secondi = Math.floor(resto / 1000);
  return { passata, giorni, ore, minuti, secondi };
}

function countdownInParole(c) {
  if (c.passata) {
    return c.giorni > 0
      ? `Scaduta da ${c.giorni} ${c.giorni === 1 ? "giorno" : "giorni"}`
      : "Scaduta oggi";
  }
  if (c.giorni >= 2)  return `Mancano ${c.giorni} giorni`;
  if (c.giorni === 1) return `Manca 1 giorno`;
  if (c.ore >= 1)     return `Mancano ${c.ore} ${c.ore === 1 ? "ora" : "ore"} e ${c.minuti} min`;
  return `Mancano ${c.minuti} minuti`;
}

// ---- Consapevolezza del tempo (blocco B) ----
// Il motore distingue tra scadenze passate/future e tra eventi
// azionabili (lo studente può fare qualcosa) e solo informativi.
// I flag `azionabile` e `chiusuraCandidature` vivono nei dati
// (dati-scadenze.js), mai nel codice.
function scadenzaPerId(id) {
  return (SCADENZE_CAFOSCARI || []).find(s => s.id === id) || null;
}

function scadenzaPassata(s) {
  return new Date(s.data) <= new Date();
}

// La prossima scadenza futura su cui si può ancora agire (o null).
function prossimaScadenzaAzionabile() {
  const ora = new Date();
  return (SCADENZE_CAFOSCARI || [])
    .filter(s => s.azionabile && new Date(s.data) > ora)
    .sort((a, b) => new Date(a.data) - new Date(b.data))[0] || null;
}

// true quando TUTTE le finestre di candidatura del bando sono chiuse.
function candidatureChiuse() {
  const chiusure = (SCADENZE_CAFOSCARI || []).filter(s => s.chiusuraCandidature);
  return chiusure.length > 0 && chiusure.every(scadenzaPassata);
}

// Data (formattata) dell'ultima chiusura candidature, per il messaggio onesto.
function dataChiusuraCandidature() {
  const chiusure = (SCADENZE_CAFOSCARI || [])
    .filter(s => s.chiusuraCandidature)
    .sort((a, b) => new Date(b.data) - new Date(a.data));
  return chiusure[0] ? new Date(chiusure[0].data).toLocaleDateString("it-IT", { day: "numeric", month: "long" }) : "";
}

// ---- Stato del bando a QUATTRO valori (R2, PLAN.md §R2.5) ----
// Deciso SOLO dai dati e dalla data di oggi, mai hardcoded:
//   "aperto"              — ci si può ancora candidare (candidatureChiuse()
//                           è false e ci sono scadenze pubblicate);
//   "chiuso-ciclo-attivo" — candidature chiuse per data, ma il ciclo del
//                           bando è ancora in corso (fineCiclo futura o
//                           non dichiarata: non si inventa una fine);
//   "dati-scaduti"        — fineCiclo (dai dati scadenze) è passata: le
//                           date mostrate appartengono a un ciclo concluso
//                           e il sito lo dichiara invece di fingersi vivo;
//   "non-pubblicato"      — nessuna scadenza nei dati: il bando non è
//                           ancora stato pubblicato/caricato.
function statoBando() {
  const scadenze = SCADENZE_CAFOSCARI || [];
  if (scadenze.length === 0) return "non-pubblicato";
  const fine = (window.SCADENZE_INFO && SCADENZE_INFO.fineCiclo) || null;
  if (fine && scadenzaPassata({ data: fine })) return "dati-scaduti";
  if (candidatureChiuse()) return "chiuso-ciclo-attivo";
  return "aperto";
}

// Una voce di checklist è "morta" se la sua scadenza è già passata:
// non ha senso proporla come missione.
function voceScaduta(voce) {
  if (!voce.scadenzaId) return false;
  const s = scadenzaPerId(voce.scadenzaId);
  return !!s && scadenzaPassata(s);
}

function giorniA(dataTecnica) {
  return Math.ceil((new Date(dataTecnica) - new Date()) / 86400000);
}

function livelloInParole(codice) {
  return codice === "L" ? "triennale" : codice === "LM" ? "magistrale" : codice;
}

function postiInParole(posto) {
  let t = `${posto.numero} ${posto.numero === 1 ? "posto" : "posti"} da ${posto.mesi} mesi - ${livelloInParole(posto.livello)}`;
  if (posto.note) t += ` (${posto.note})`;
  return t;
}

// ============================================================
// NAVIGAZIONE — CONTRATTO HASH E FUNZIONE UNICA (R1.4, PLAN.md §7/R1.4)
//
// Prima di R1.4 la navigazione era sparsa: quattro punti mettevano in fila
// a mano `mostraTab()` + `history.replaceState()`, e altri sei cambiavano
// tab SENZA toccare l'hash — l'URL diceva `#oggi` mentre eri sulle mete.
// Qui c'è una sola porta d'ingresso, `vaiA()`: chiunque debba cambiare
// schermata passa di lì, e l'URL non può più mentire.
// ============================================================

// IL CONTRATTO. Questi sono gli hash supportati: l'interfaccia pubblica del
// sito, non un dettaglio interno. Chi aggiunge o rinomina un tab aggiorna
// QUI (e in ALIAS_HASH se il vecchio nome era già in giro).
// Da R3 le voci di nav sono TRE (Mete · Home · Percorso, PLAN.md §5.6);
// "profilo" resta un tab raggiungibile dal drawer, non dalla nav.
const TAB_VALIDI      = ["oggi", "mete", "percorso", "profilo"];
const TAB_PREDEFINITO = "oggi";

// Alias realmente supportati (PLAN.md §5.6: si dichiarano e si testano, non si
// promettono "per sempre"). Tutti e tre hanno una prova alle spalle:
//   `#checklist` e `#idoneita` sono stati tab veri fino a R3, che li ha fusi
//   nella schermata Percorso a stazioni (le stazioni "Candidatura e scadenze"
//   e "Prepara la candidatura");
//   `#timeline` è stato un hash vero fino a OP2 (pagina Timeline rimossa,
//   contenuti fusi in scadenze+checklist, oggi nella stessa stazione).
// Chi ha ancora quei link atterra dove il contenuto è finito davvero.
const ALIAS_HASH = { timeline: "percorso", checklist: "percorso", idoneita: "percorso" };

// Unico punto che interpreta una destinazione, da qualunque parte arrivi
// (hash, data-tab, data-goto, chiamata interna). Restituisce un tab valido
// oppure null: chi chiama non deve validare niente per conto suo.
function destDaHash(grezzo) {
  const h = String(grezzo || "").replace(/^#/, "").trim().toLowerCase();
  if (!h) return null;
  const dest = ALIAS_HASH[h] || h;
  return TAB_VALIDI.includes(dest) ? dest : null;
}

// La verità su dove siamo la tiene il DOM, non una variabile parallela che
// può disallinearsi (stessa scelta dell'ateneo attivo in R1.3).
function tabCorrente() {
  const attivo = document.querySelector(".tab-pane.attivo");
  return attivo ? attivo.id.replace(/^tab-/, "") : null;
}

// Solo pittura: nessuno la chiama da fuori, si passa da vaiA().
function dipingiTab(nome) {
  document.querySelectorAll(".nav-item[data-tab]").forEach(t => {
    const isAttivo = t.dataset.tab === nome;
    t.classList.toggle("attivo", isAttivo);
    t.setAttribute("aria-current", isAttivo ? "page" : "false");
  });
  document.querySelectorAll(".tab-pane").forEach(p => {
    const attivo = p.id === `tab-${nome}`;
    p.classList.toggle("attivo", attivo);
    p.classList.toggle("nascosto", !attivo);
  });
}

function scriviHash(tab, storia) {
  if (storia === "nessuna") return;
  const nuovo = `#${tab}`;
  if (location.hash === nuovo) return; // già giusto: non si sporca la cronologia
  if (storia === "push") history.pushState(null, "", nuovo);
  else                   history.replaceState(null, "", nuovo);
}

/**
 * L'UNICA funzione di navigazione. Dipinge il tab e allinea l'URL.
 *
 * @param {string} dest      nome del tab o hash (accetta anche gli alias)
 * @param {object} opzioni
 *   storia: "push"    voce nuova in cronologia — Indietro torna al tab
 *                     precedente. Solo per navigazione VOLUTA dallo studente,
 *                     e solo se il tab cambia davvero (decisione di Nicola,
 *                     15/07): ri-cliccare il tab attivo non sporca la
 *                     cronologia.
 *           "replace" allinea l'URL senza aggiungere voci: primo avvio,
 *                     normalizzazione di un alias, sincronizzazioni.
 *           "nessuna" non tocca l'URL (rientro da Indietro/Avanti: la
 *                     cronologia l'ha già spostata il browser).
 *   scroll: torna in cima (default true, comportamento storico).
 * @returns {boolean} false se la destinazione non è nel contratto.
 */
function vaiA(dest, opzioni = {}) {
  const tab = destDaHash(dest);
  if (!tab) return false;
  const { storia = "push", scroll = true } = opzioni;

  const cambia = tab !== tabCorrente();
  dipingiTab(tab);
  // Un push per un tab che non cambia sarebbe un Indietro che non fa niente:
  // il tasto Indietro deve sempre spostare qualcosa.
  scriviHash(tab, storia === "push" && !cambia ? "replace" : storia);
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

// L'URL comanda: primo avvio, Indietro/Avanti, hash scritto a mano.
function sincronizzaDaUrl({ primoAvvio = false } = {}) {
  const grezzo = location.hash.replace(/^#/, "");
  const tab    = destDaHash(grezzo);

  if (tab) {
    // storia "replace": se era un alias (`#timeline`) l'URL si normalizza sul
    // nome canonico; se era già canonico, scriviHash esce subito.
    vaiA(tab, { storia: "replace", scroll: !primoAvvio });
    return;
  }
  // Hash vuoto: si dipinge il predefinito ma NON si scrive niente nell'URL —
  // l'indirizzo pubblico della home resta pulito (vincolo §10.8: gli URL
  // indicizzati non cambiano per effetto collaterale di un refactor).
  // Si dipinge lo stesso, non si "lascia com'è": l'HTML marca `attivo` a mano
  // ma non ha `aria-current`, quindi senza questo passaggio il primo avvio
  // restava senza la voce corrente annunciata (PLAN.md §5.6).
  if (!grezzo) {
    vaiA(TAB_PREDEFINITO, { storia: "nessuna", scroll: false });
    return;
  }
  // Hash sconosciuto: si mostra il predefinito e si toglie dall'URL, invece di
  // lasciare `#pippo` a raccontare una schermata che non esiste.
  vaiA(TAB_PREDEFINITO, { storia: "replace", scroll: false });
}

function initNav() {
  document.querySelectorAll(".nav-item[data-tab]").forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      vaiA(tab.dataset.tab);
    });
  });

  document.addEventListener("click", e => {
    const el = e.target.closest("[data-goto]");
    if (!el) return;
    e.preventDefault();
    vaiA(el.dataset.goto);
  });

  // Indietro/Avanti del browser. `pushState` non emette hashchange, quindi
  // servono entrambi: popstate per i tasti, hashchange per l'hash scritto a
  // mano nella barra degli indirizzi.
  window.addEventListener("popstate",   () => sincronizzaDaUrl());
  window.addEventListener("hashchange", () => sincronizzaDaUrl());

  sincronizzaDaUrl({ primoAvvio: true });
}

// ============================================================
// DRAWER — menu secondario da destra (R1.2, PLAN.md §5.6)
// Voci: Profilo, Cambia ateneo, Guide, Come funziona. Si chiude con
// ✕, Escape o click sul velo, e il focus torna sempre al bottone che
// l'ha aperto. È aria-modal, quindi il Tab resta dentro al drawer.
// "Cambia ateneo" porta alla tendina già esistente nel Profilo: il
// cambio ateneo con zaino separato (e migrazione dei dati legacy) sta
// tutto nel contenitore per-ateneo in cima al file (R1.3), e qui NON si
// duplica quella logica.
// ============================================================
let drawerApertoDa = null;

function drawerFocusabili(drawer) {
  return Array.from(drawer.querySelectorAll("button, a[href]"))
    .filter(el => !el.disabled && el.offsetParent !== null);
}

function apriDrawer() {
  const drawer  = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (!drawer || drawer.hidden === false) return;
  drawerApertoDa = document.activeElement;
  drawer.hidden = false;
  if (overlay) overlay.hidden = false;
  document.body.classList.add("no-scroll");
  document.getElementById("btn-drawer")?.setAttribute("aria-expanded", "true");
  document.getElementById("drawer-chiudi")?.focus();
}

function chiudiDrawer() {
  const drawer  = document.getElementById("drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (!drawer || drawer.hidden) return;
  drawer.hidden = true;
  if (overlay) overlay.hidden = true;
  document.body.classList.remove("no-scroll");
  document.getElementById("btn-drawer")?.setAttribute("aria-expanded", "false");
  const daRiattivare = drawerApertoDa || document.getElementById("btn-drawer");
  drawerApertoDa = null;
  daRiattivare?.focus();
}

// Etichetta dell'ateneo attivo sotto "Cambia ateneo": mai un'etichetta
// generica, lo studente deve vedere su quale ateneo sta lavorando.
function aggiornaDrawerAteneo() {
  const sub = document.getElementById("drawer-ateneo-sub");
  if (sub) sub.textContent = `Ora: ${window.ATENEO_LABEL || "—"}`;
}

function initDrawer() {
  const drawer = document.getElementById("drawer");
  const btn    = document.getElementById("btn-drawer");
  if (!drawer || !btn) return;

  btn.addEventListener("click", apriDrawer);
  document.getElementById("drawer-chiudi")?.addEventListener("click", chiudiDrawer);
  document.getElementById("drawer-overlay")?.addEventListener("click", chiudiDrawer);

  drawer.querySelectorAll("[data-drawer-goto]").forEach(voce => {
    voce.addEventListener("click", () => {
      chiudiDrawer();
      vaiA(voce.dataset.drawerGoto);
    });
  });

  document.getElementById("drawer-cambia-ateneo")?.addEventListener("click", () => {
    chiudiDrawer();
    vaiA("profilo");
    // Il focus sulla tendina vince su quello che chiudiDrawer ha appena
    // restituito al bottone: lo studente arriva dritto sulla scelta.
    const sel = document.getElementById("select-ateneo");
    if (sel) {
      sel.focus();
      sel.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });

  document.addEventListener("keydown", e => {
    if (drawer.hidden) return;
    if (e.key === "Escape") { chiudiDrawer(); return; }
    if (e.key !== "Tab") return;
    const voci = drawerFocusabili(drawer);
    if (!voci.length) return;
    const primo = voci[0], ultimo = voci[voci.length - 1];
    if (e.shiftKey && document.activeElement === primo) {
      e.preventDefault(); ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault(); primo.focus();
    }
  });

  aggiornaDrawerAteneo();
}

// ============================================================
// HOME — saluto + data
// ============================================================
function renderHome() {
  // Fase C2: primo contatto = benvenuto con mappa-hero al posto della home;
  // dopo l'onboarding la home normale torna padrona (mappa compattata sotto).
  const benv = document.getElementById("home-benvenuto");
  const tabOggi = document.getElementById("tab-oggi");
  if (benv && tabOggi) {
    const primoContatto = !ZAINO.onboardingFatto;
    benv.style.display = primoContatto ? "" : "none";
    tabOggi.classList.toggle("modo-benvenuto", primoContatto);
  }

  const dataEl = document.getElementById("home-data");
  if (dataEl) {
    const oggi = new Date();
    dataEl.textContent = oggi.toLocaleDateString("it-IT", {
      weekday: "long", day: "numeric", month: "short", year: "numeric"
    });
  }
  const nomeEl = document.getElementById("home-nome");
  if (nomeEl) nomeEl.textContent = ZAINO.profilo?.nome || "Studente";

  // Badge del bando — dice sempre la verità sui QUATTRO stati (R2.5):
  // aperto / candidature chiuse ma ciclo attivo / dati scaduti / non
  // pubblicato. Sparisce solo per lo studente selezionato (per lui non
  // è più la notizia rilevante).
  const badge = document.getElementById("badge-bando");
  if (badge) {
    const anno = (window.BANDO_INFO && BANDO_INFO.annoAccademico) || "";
    const parti = anno.split("/");
    const annoBreve = parti.length === 2 ? `${parti[0]}/${parti[1].slice(-2)}` : anno;
    const stato = statoBando();
    const testi = {
      "aperto":              annoBreve ? `Bando ${annoBreve} aperto` : "",
      "chiuso-ciclo-attivo": annoBreve ? `Bando ${annoBreve}: candidature chiuse` : "",
      "dati-scaduti":        annoBreve ? `Bando ${annoBreve} concluso` : "",
      "non-pubblicato":      "Nuovo bando non ancora pubblicato",
    };
    const testo = testi[stato] || "";
    const mostraBadge = !!testo && ZAINO.fase !== "selezionato";
    badge.style.display = mostraBadge ? "" : "none";
    badge.classList.toggle("badge-neutro", stato !== "aperto");
    if (mostraBadge) badge.textContent = testo;
  }
}

// ============================================================
// TAPPA CORRENTE — REGOLA DETERMINISTICA (R1.6, PLAN.md §7/R1.6)
// ------------------------------------------------------------
// UNA sola tappa è corrente, sempre, e la decide QUESTA funzione — i render
// (stepper, missione, la Home di R2 e il Percorso di R3) la leggono, non la
// ricalcolano ognuno a modo suo. Priorità dichiarate, dalla più forte:
//   1. SELEZIONE DICHIARATA — lo studente ha detto "sono stato selezionato"
//      (ZAINO.fase, l'unico gate auto-dichiarato): tappa "partenza",
//      qualunque cosa dicano date e checklist.
//   2. STATO DEL BANDO PER DATA — candidature chiuse (flag
//      chiusuraCandidature nei dati scadenze, mai hardcoded) senza selezione
//      dichiarata: nessuna tappa di lavoro può essere corrente, si è in
//      attesa dell'esito → tappa "esiti" (il bivio onesto).
//   3. IL VIAGGIO IN ORDINE — la prima tappa non completata sui dati
//      disponibili: requisiti → mete → candidatura.
//   4. TUTTO COMPLETATO, bando ancora aperto → "esiti": la tappa corrente
//      non sparisce mai (prima di R1.6 questo caso lasciava lo stepper
//      senza fase attiva).
// Casi limite, decisi qui e non nei render:
//   - zaino vuoto o legacy: normalizzaZaino garantisce i campi → si parte
//     dai requisiti, come a un primo avvio;
//   - REQUISITI_BANDO assente/vuoto: la tappa requisiti non è misurabile e
//     si salta — non si chiede di verificare requisiti non pubblicati;
//   - CHECKLIST assente/vuota: idem per la candidatura;
//   - né requisiti né checklist pubblicati: non c'è viaggio misurabile →
//     fallback "mete" ("Scegli la meta"), l'unica tappa sempre possibile;
//   - scadenze senza flag chiusuraCandidature: bando considerato aperto
//     (candidatureChiuse() torna false) — nessuna chiusura inventata.
// Ritorna: "requisiti" | "mete" | "candidatura" | "esiti" | "partenza".
function tappaCorrente() {
  if (ZAINO.fase === "selezionato") return "partenza";
  if (candidatureChiuse()) return "esiti";

  const requisiti = REQUISITI_BANDO || [];
  const checklist = CHECKLIST || [];
  if (requisiti.length === 0 && checklist.length === 0) return "mete";

  // La tappa requisiti è "fatta" con profilo compilato E tutte le
  // auto-verifiche spuntate (fix da assessment 04/07, DISEGNO_BRAND.md BR3).
  const requisitiOk = !!ZAINO.profilo && requisiti.length > 0 &&
    requisiti.every(r => ZAINO.autoverifica && ZAINO.autoverifica[r.id]);
  if (requisiti.length > 0 && !requisitiOk) return "requisiti";
  if ((ZAINO.metePreferite || []).length === 0) return "mete";
  const checklistOk = checklist.length > 0 &&
    checklist.every(v => ZAINO.checklist && ZAINO.checklist[v.id]);
  if (checklist.length > 0 && !checklistOk) return "candidatura";
  return "esiti";
}

// ============================================================
// PERCORSO A 4 FASI (DISEGNO_UX.md §2.1) — home-percorso UX2
// Gli stati derivano da tappaCorrente() (R1.6): qui si decide solo COME
// raccontare le fasi, mai QUALE sia quella corrente.
// ============================================================
function calcolaFasi() {
  const tappa = tappaCorrente();

  const requisiti     = REQUISITI_BANDO || [];
  const requisitiOk   = !!ZAINO.profilo && requisiti.length > 0 &&
    requisiti.every(r => ZAINO.autoverifica && ZAINO.autoverifica[r.id]);
  const nPreferite    = (ZAINO.metePreferite || []).length;
  const meteOk        = nPreferite >= 1;
  const checklistTot   = (CHECKLIST || []).length;
  const checklistFatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const checklistOk    = checklistTot > 0 && checklistFatti === checklistTot;
  const selezionato    = tappa === "partenza";
  const attesaEsiti    = tappa === "esiti";

  const fasi = [
    {
      id: 1, tappa: "requisiti", tab: "percorso", stazione: "requisiti",
      domanda: "Posso partire?", fatto: requisitiOk,
      riassunto: requisitiOk
        ? "Profilo compilato — hai verificato tutti i requisiti."
        : "Verifica i requisiti del bando prima di iniziare.",
      cta: requisitiOk ? "Rivedi i requisiti" : "Controlla se sei idoneo",
    },
    {
      id: 2, tappa: "mete", tab: "mete",
      domanda: "Dove posso andare?", fatto: meteOk,
      riassunto: meteOk
        ? `${nPreferite} ${nPreferite === 1 ? "meta salvata" : "mete salvate"} tra i preferiti.`
        : "Esplora le mete compatibili con il tuo profilo.",
      cta: meteOk ? "Vedi le tue mete" : "Esplora le mete",
    },
    {
      id: 3, tappa: "candidatura", tab: "percorso", stazione: "candidatura",
      domanda: "La candidatura", fatto: checklistOk,
      riassunto: checklistTot === 0
        ? "Nessun passo ancora disponibile."
        : `${checklistFatti}/${checklistTot} passi completati.`,
      cta: checklistOk ? "Rivedi la checklist" : "Vai alla checklist",
    },
    {
      id: 4, tappa: "finale", tab: "percorso",
      stazione: selezionato ? "partenza" : "esito",
      domanda: "Sono stato preso!", fatto: false,
      riassunto: selezionato
        ? "In preparazione alla partenza 🎒"
        : attesaEsiti
          ? (candidatureChiuse()
              ? "Le candidature sono chiuse: quando conosci l'esito, dichiaralo qui."
              : "Candidatura completata: quando arriva l'esito, dichiaralo qui.")
          : "Quando sarai selezionato, qui trovi la preparazione alla partenza.",
      cta: selezionato ? "Continua la preparazione"
        : attesaEsiti ? "Dichiara l'esito" : "Vai alla candidatura",
    },
  ];

  // La fase 4 racconta sia "partenza" sia "esiti": la tappa corrente
  // "esiti"/"partenza" mappa sulla fase "finale".
  const correnteId = (tappa === "esiti" || tappa === "partenza") ? "finale" : tappa;
  fasi.forEach(f => {
    if (f.tappa === correnteId) f.stato = "attivo";
    // Selezione dichiarata: il viaggio è andato oltre, le fasi di lavoro
    // sono superate anche se qualche spunta manca (comportamento storico).
    else if (selezionato || f.fatto) f.stato = "fatto";
    else f.stato = "futuro";
  });
  return fasi;
}

function renderFaseStepper() {
  const wrap = document.getElementById("fase-stepper");
  if (!wrap) return;
  wrap.innerHTML = "";

  calcolaFasi().forEach(f => {
    const card   = crea("div", `fase-card fase-${f.stato}`);
    const icona  = f.stato === "fatto" ? "✅" : f.stato === "attivo" ? "▶" : "🔒";
    card.appendChild(crea("div", "fase-stato-icona", icona));

    const testi = crea("div", "fase-testi");
    testi.appendChild(crea("div", "fase-domanda", f.domanda));
    testi.appendChild(crea("div", "fase-riassunto", f.riassunto));
    card.appendChild(testi);

    const btn = crea("button", "fase-cta", f.cta);
    btn.type = "button";
    btn.addEventListener("click", () => f.stazione ? vaiAStazione(f.stazione) : vaiA(f.tab));
    card.appendChild(btn);

    wrap.appendChild(card);
  });
}

// ============================================================
// PERCORSO A STAZIONI (R3, PLAN.md §5.5)
// ------------------------------------------------------------
// L'itinerario burocratico unico: 5 stazioni in una schermata verticale.
// QUALE tappa è corrente lo decide tappaCorrente() (R1.6): qui si dipingono
// solo gli stati (fatto/attivo/futuro), i conteggi e il gate dell'esito.
// La stazione Learning Agreement è informativa: non ha uno stato misurabile
// finché non esiste il Workspace (R4) — resta neutra, senza fingere progressi.
// Con `apri: true` (avvio e cambio di fase) si allinea anche l'apertura dei
// <details>: la stazione corrente aperta, le altre chiuse. Le ripitture
// leggere (la spunta di una voce) NON toccano ciò che lo studente ha aperto.
// ============================================================

// Porta diretta a UNA stazione: naviga al tab Percorso e apre la tappa.
// Lo scroll al top di vaiA si salta: si scorre alla stazione richiesta.
function vaiAStazione(nome) {
  if (!vaiA("percorso", { scroll: false })) return;
  const li = document.getElementById("stazione-" + nome);
  if (!li) return;
  const det = li.querySelector("details");
  if (det) det.open = true;
  requestAnimationFrame(() => li.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function renderPercorso(opzioni = {}) {
  if (!document.getElementById("tab-percorso")) return;
  const apri  = !!opzioni.apri;
  const tappa = tappaCorrente();

  const requisiti   = REQUISITI_BANDO || [];
  const reqFatti    = requisiti.filter(r => ZAINO.autoverifica && ZAINO.autoverifica[r.id]).length;
  const requisitiOk = !!ZAINO.profilo && requisiti.length > 0 && reqFatti === requisiti.length;

  const checklist   = CHECKLIST || [];
  const chkFatti    = checklist.filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const checklistOk = checklist.length > 0 && chkFatti === checklist.length;

  const post      = CHECKLIST_POST || [];
  const postFatti = post.filter(v => ZAINO.checklistPost && ZAINO.checklistPost[v.id]).length;

  const selezionato = tappa === "partenza";

  // Il ponte verso le Mete: la tappa "mete" vive nella schermata Mete,
  // qui compare solo il rimando (la linea non salta una tappa in silenzio).
  const ponte = document.getElementById("stazione-mete-ponte");
  if (ponte) ponte.hidden = tappa !== "mete";

  const stazioni = {
    requisiti: {
      numero: "1",
      stato: tappa === "requisiti" ? "attivo" : (selezionato || requisitiOk) ? "fatto" : "futuro",
      conta: requisiti.length ? `${reqFatti}/${requisiti.length}` : "non pubblicati",
    },
    candidatura: {
      numero: "2",
      stato: tappa === "candidatura" ? "attivo" : (selezionato || checklistOk) ? "fatto" : "futuro",
      conta: checklist.length ? `${chkFatti}/${checklist.length}` : "non pubblicata",
    },
    esito: {
      numero: "3",
      stato: selezionato ? "fatto" : tappa === "esiti" ? "attivo" : "futuro",
      conta: selezionato ? "dichiarato" : "",
    },
    // La stazione LA non ha un "fatto" misurabile (nessuno può approvare la
    // bozza al posto dell'ateneo): mostra solo quante bozze esistono (R4).
    la: {
      numero: "4", stato: "info",
      conta: (() => {
        const n = Object.keys((ZAINO.la && ZAINO.la.bozzePerMeta) || {}).length;
        return n ? `${n} ${n === 1 ? "bozza" : "bozze"}` : "";
      })(),
    },
    partenza: {
      numero: "5",
      stato: selezionato ? (post.length && postFatti === post.length ? "fatto" : "attivo") : "futuro",
      conta: selezionato && post.length ? `${postFatti}/${post.length}` : "",
    },
  };

  Object.keys(stazioni).forEach(nome => {
    const li = document.getElementById("stazione-" + nome);
    if (!li) return;
    const s = stazioni[nome];
    li.classList.toggle("stazione-fatta",  s.stato === "fatto");
    li.classList.toggle("stazione-attiva", s.stato === "attivo");
    li.classList.toggle("stazione-futura", s.stato === "futuro");
    const punto = li.querySelector(".stazione-punto");
    if (punto) punto.textContent = s.stato === "fatto" ? "✓" : s.numero;
    const statoEl = li.querySelector(".stazione-stato");
    if (statoEl) statoEl.textContent = (s.stato === "attivo" && !s.conta) ? "tappa corrente" : s.conta;
    if (apri) {
      const det = li.querySelector("details");
      if (det) det.open = s.stato === "attivo";
    }
  });

  // Il sottotitolo del gate racconta lo stato vero, con le parole del §5.5.
  const sub = document.getElementById("stazione-esito-sub");
  if (sub) {
    sub.textContent = selezionato
      ? "Hai indicato di essere stato selezionato 🎉"
      : (tappa === "esiti" && candidatureChiuse())
        ? "Le candidature sono chiuse: quando conosci l'esito, dichiaralo qui."
        : "Quando conosci l'esito della selezione, dichiaralo qui.";
  }
}

// ============================================================
// COUNTDOWN PILL
// ============================================================
function initCountdownPill() {
  // Solo il prossimo evento su cui si può AGIRE: niente countdown
  // verso eventi informativi o già passati (urgenza finta).
  const prossima = prossimaScadenzaAzionabile();

  const pillEl   = document.getElementById("countdown-pill");
  const titoloEl = document.getElementById("countdown-titolo");
  const subEl    = document.getElementById("countdown-sub");
  const timerEl  = document.getElementById("countdown-timer");

  if (!prossima || !timerEl) {
    if (pillEl) pillEl.style.display = "none";
    return;
  }

  if (titoloEl) titoloEl.textContent = prossima.cosa;
  if (subEl) {
    const d = new Date(prossima.data);
    const dataFmt = d.toLocaleDateString("it-IT", { day: "numeric", month: "short" });
    const oraFmt  = d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    subEl.textContent = `${dataFmt}, ore ${oraFmt}`;
  }

  function aggiorna() {
    const diff = new Date(prossima.data) - new Date();
    if (diff <= 0) { timerEl.textContent = "Scaduto"; return; }
    const g = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    if (g >= 2)       timerEl.textContent = `${g} giorni`;
    else if (g === 1) timerEl.textContent = `1g ${h}h`;
    else if (h >= 1)  timerEl.textContent = `${h}h ${m}m`;
    else              timerEl.textContent = `${m} min`;
  }

  aggiorna();
  setInterval(aggiorna, 30000);
}

// ============================================================
// CARD PREPARAZIONE
// ============================================================
function renderPreparazione() {
  // Solo la barra di progresso: i singoli passi sono già visibili nella
  // missione e nella checklist, ripeterli qui era ridondanza senza
  // gerarchia (DISEGNO_UX.md §2.1, blocco D).
  const tot   = (CHECKLIST || []).length;
  const fatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const perc  = tot === 0 ? 0 : Math.round((fatti / tot) * 100);

  const countEl = document.getElementById("prep-count");
  const fillEl  = document.getElementById("prep-fill");

  if (countEl) countEl.textContent = `${fatti}/${tot}`;
  if (fillEl)  fillEl.style.width  = perc + "%";
}

// ============================================================
// "QUESTA SETTIMANA" (R2, PLAN.md §5.3 modulo 2)
// ------------------------------------------------------------
// Massimo 2-3 azioni pertinenti, derivate SOLO dai dati verificati:
// le prossime voci di checklist non spuntate e non scadute, in ordine
// di scadenza. Con la selezione dichiarata le azioni vengono dalla
// checklist di partenza. Senza un ciclo di bando su cui agire il
// modulo SI NASCONDE: non si simula un planner vivo (PLAN §5.3).
// "Sei in linea?" prudente: "in ritardo" SOLO per una voce azionabile
// non spuntata oltre la sua scadenza, mai giudizi generici.
// ============================================================
function renderSettimana() {
  const card  = document.getElementById("settimana-card");
  const lista = document.getElementById("settimana-lista");
  if (!card || !lista) return;
  lista.innerHTML = "";

  const tappa = tappaCorrente();
  const spuntata = (v, spunte) => !!(spunte && spunte[v.id]);

  // Le voci nell'ordine della vista Candidatura: per scadenza, poi "quando puoi".
  function vociInOrdine(checklist) {
    const scadenze = (SCADENZE_CAFOSCARI || []).slice().sort((a, b) => new Date(a.data) - new Date(b.data));
    const idNoti = scadenze.map(s => s.id);
    const ordinate = [];
    scadenze.forEach(s => ordinate.push(...checklist.filter(v => v.scadenzaId === s.id)));
    ordinate.push(...checklist.filter(v => !v.scadenzaId || !idNoti.includes(v.scadenzaId)));
    return ordinate;
  }

  let voci = [];
  let inRitardo = null;
  if (tappa === "partenza") {
    voci = (CHECKLIST_POST || []).filter(v => !spuntata(v, ZAINO.checklistPost));
  } else if (statoBando() === "aperto") {
    const tutte = vociInOrdine(CHECKLIST || []);
    voci = tutte.filter(v => !spuntata(v, ZAINO.checklist) && !voceScaduta(v));
    inRitardo = tutte.find(v => !spuntata(v, ZAINO.checklist) && voceScaduta(v)) || null;
  }

  if (!voci.length && !inRitardo) { card.style.display = "none"; return; }
  card.style.display = "";

  function aggiungi(voce, ritardo) {
    const item = crea("button", "settimana-item" + (ritardo ? " settimana-ritardo" : ""));
    item.type = "button";
    item.appendChild(crea("span", "settimana-item-testo", (ritardo ? "In ritardo: " : "") + voce.testo));
    const scad = voce.scadenzaId ? scadenzaPerId(voce.scadenzaId) : null;
    if (scad) {
      const c = calcolaCountdown(scad.data);
      item.appendChild(crea("span", "settimana-item-scadenza", countdownInParole(c)));
    }
    item.addEventListener("click", () => vaiAStazione(tappa === "partenza" ? "partenza" : "candidatura"));
    lista.appendChild(item);
  }

  if (inRitardo) aggiungi(inRitardo, true);
  voci.slice(0, inRitardo ? 2 : 3).forEach(v => aggiungi(v, false));
}

// ============================================================
// "PROSSIMA MOSSA" (ex missione di oggi)
// ============================================================
function calcolaMissione() {
  // Solo scadenze future e AZIONABILI guidano la missione.
  const prossima   = prossimaScadenzaAzionabile();
  const giorniAlla = prossima ? giorniA(prossima.data) : Infinity;

  const checklist = CHECKLIST || [];
  const totale    = checklist.length;
  const fatti     = checklist.filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const haProfilo = !!ZAINO.profilo;

  // Le due priorità forti (selezione dichiarata, bando chiuso per data)
  // vengono dalla regola unica della tappa corrente (R1.6), non ricalcolate.
  const tappa = tappaCorrente();

  // Studente selezionato: la missione viene dalla checklist di partenza.
  if (tappa === "partenza") {
    const post     = CHECKLIST_POST || [];
    const vocePost = post.find(v => !(ZAINO.checklistPost && ZAINO.checklistPost[v.id]));
    const ora      = new Date();
    const evento   = (SCADENZE_CAFOSCARI || [])
      .filter(s => new Date(s.data) > ora)
      .sort((a, b) => new Date(a.data) - new Date(b.data))[0] || null;
    if (vocePost) return { tipo: "partenza", voce: vocePost, prossima: evento, giorni: evento ? giorniA(evento.data) : Infinity, fatti, totale };
    return { tipo: "completo", fatti, totale };
  }

  // Bando chiuso e non selezionato: il sito lo dice, onestamente,
  // e propone il bivio (selezionato → partenza / no → prossimo bando).
  if (tappa === "esiti" && candidatureChiuse()) return { tipo: "bando-chiuso", fatti, totale };

  // Le voci la cui scadenza è già passata non possono essere la missione.
  const prossimaVoce = checklist.find(v =>
    !(ZAINO.checklist && ZAINO.checklist[v.id]) && !voceScaduta(v));

  if (giorniAlla <= 7 && prossima)  return { tipo: "urgente",   prossima, giorni: giorniAlla, fatti, totale };
  if (!haProfilo)                    return { tipo: "profilo",   fatti, totale };
  if (prossimaVoce)                  return { tipo: "checklist", voce: prossimaVoce, prossima, giorni: giorniAlla, fatti, totale };
  if (prossima)                      return { tipo: "attendi",   prossima, giorni: giorniAlla, fatti, totale };
  return                                    { tipo: "completo",  fatti, totale };
}

function renderMissione() {
  const m        = calcolaMissione();
  const card     = document.getElementById("missione-card");
  const titolo   = document.getElementById("missione-titolo");
  const dett     = document.getElementById("missione-dettaglio");
  const scad     = document.getElementById("missione-scadenza");
  const btnFatto = document.getElementById("btn-fatto");
  const btnCome  = document.getElementById("btn-come");
  if (!card) return;

  card.classList.remove("missione-urgente");

  if (scad) {
    if (m.prossima && m.giorni !== Infinity) {
      scad.textContent  = m.tipo === "partenza" ? `tra ${m.giorni}g` : `scade tra ${m.giorni}g`;
      scad.style.display = "";
    } else {
      scad.style.display = "none";
    }
  }

  // Con `stazione` la destinazione è UNA tappa del Percorso (R3): si apre
  // e si scorre lì, non in cima al tab.
  function setBtn(btn, testo, tab, stazione) {
    if (!btn) return;
    btn.textContent = testo;
    btn.onclick = e => { e.preventDefault(); stazione ? vaiAStazione(stazione) : vaiA(tab); };
  }

  switch (m.tipo) {
    case "bando-chiuso": {
      const quando = dataChiusuraCandidature();
      const anno   = (window.BANDO_INFO && BANDO_INFO.annoAccademico) || "";
      if (titolo) titolo.textContent = `Il bando ${anno} è chiuso`;
      if (dett)   dett.textContent   =
        `Le candidature si sono chiuse${quando ? ` il ${quando}` : ""}. ` +
        "Sei stato selezionato? Preparati alla partenza. " +
        "Non hai fatto domanda? Il prossimo bando esce in genere tra dicembre e gennaio: intanto puoi esplorare le mete e verificare i requisiti.";
      if (btnFatto) {
        btnFatto.textContent = "Sono stato selezionato 🎒";
        btnFatto.onclick = e => {
          e.preventDefault();
          // Riusa la logica del gate dell'esito (stazione 3 del Percorso).
          document.getElementById("fase-selezionato")?.click();
          renderMissione();
        };
      }
      setBtn(btnCome, "Vedi le date del ciclo", "percorso", "candidatura");
      break;
    }
    case "partenza":
      if (titolo) titolo.textContent = m.voce.testo;
      if (dett)   dett.textContent   = m.prossima
        ? `Preparazione alla partenza — ${m.prossima.cosa} tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}.`
        : "Preparazione alla partenza: spunta i passi man mano che li completi.";
      setBtn(btnFatto, "Fatto 🎒",           "percorso", "partenza");
      setBtn(btnCome,  "Vedi tutti i passi", "percorso", "partenza");
      break;
    case "urgente":
      card.classList.add("missione-urgente");
      if (titolo) titolo.textContent = `⚠️ Scadenza tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}!`;
      if (dett)   dett.textContent   = `${m.prossima.cosa} — ${formattaData(m.prossima.data)}. ${m.prossima.descrizione}`;
      setBtn(btnFatto, "Vedi scadenze ⏳", "percorso", "candidatura");
      setBtn(btnCome,  "Cosa devo fare?", "percorso", "candidatura");
      break;
    case "profilo":
      if (titolo) titolo.textContent = "Compila il tuo profilo";
      if (dett)   dett.textContent   = "Inserisci area disciplinare, livello e lingue per scoprire le mete compatibili e ricevere una guida personalizzata.";
      setBtn(btnFatto, "Vai al profilo ✨", "profilo");
      setBtn(btnCome,  "Vedi i requisiti",  "percorso", "requisiti");
      break;
    case "checklist":
      if (titolo) titolo.textContent = m.voce.testo;
      if (dett)   dett.textContent   = m.prossima
        ? `Prossima scadenza: ${m.prossima.cosa} tra ${m.giorni} giorni.`
        : "Completa i passi della checklist per essere pronto in tempo.";
      setBtn(btnFatto, "Fatto ✨",     "percorso", "candidatura");
      setBtn(btnCome,  "Come si fa?", "percorso", "candidatura");
      break;
    case "attendi":
      if (titolo) titolo.textContent = m.prossima.cosa;
      if (dett)   dett.textContent   = `Prossima scadenza tra ${m.giorni} giorni. ${m.prossima.descrizione}`;
      setBtn(btnFatto, "Vedi scadenze ✨", "percorso", "candidatura");
      setBtn(btnCome,  "Esplora mete",     "mete");
      break;
    default:
      if (titolo) titolo.textContent = "Sei in ottima posizione! 🎉";
      if (dett)   dett.textContent   = "Checklist completata e nessuna scadenza imminente. Tieni d'occhio le mete disponibili.";
      setBtn(btnFatto, "Esplora le mete ✨", "mete");
      setBtn(btnCome,  "La tua candidatura", "percorso", "candidatura");
  }

  renderPreparazione();
  renderFaseStepper();
  renderSettimana();
  renderPercorso();
}

function aggiornaCountdownV2() {
  document.querySelectorAll(".cand-scadenza-card").forEach(el => {
    const c  = calcolaCountdown(el.getAttribute("data-scadenza"));
    const cd = el.querySelector(".cand-scadenza-countdown");
    if (cd) cd.textContent = countdownInParole(c);
    if (c.passata) el.closest(".cand-capitolo")?.classList.add("passata");
  });
  document.querySelectorAll(".prossimo-passo-scadenza[data-scadenza-id]").forEach(el => {
    const scad = scadenzaPerId(el.getAttribute("data-scadenza-id"));
    if (!scad) return;
    const c = calcolaCountdown(scad.data);
    el.textContent = `📅 ${scad.cosa} — ${countdownInParole(c)}`;
  });
}

// ============================================================
// BANNER WIZ (nota Wiz inline dopo spunta)
// ============================================================
function mostraBannerWiz() {
  const banner = document.getElementById("banner-wiz");
  if (!banner) return;
  banner.innerHTML = '<img src="img/mascotte/wiz-esulta.webp" alt="Wiz"><span class="banner-testo">Ottimo lavoro! Un passo in meno 🎉</span>';
  banner.style.display = "flex";
  clearTimeout(banner._t);
  banner._t = setTimeout(() => { banner.style.display = "none"; }, 3500);
}

// ============================================================
// CHECKLIST v2
// ============================================================
let analyticsChecklistInviato = false;
function segnalaChecklistUsata() {
  if (analyticsChecklistInviato) return;
  analyticsChecklistInviato = true;
  window.goatcounter?.count({ path: "checklist-usata", event: true });
}

// ---- Voce checklist singola (checkbox + testo), riusata sia nei capitoli
// per scadenza sia nel capitolo "Quando puoi" ----
function creaVoceChecklist(voce, prossimaVoceId) {
  const spuntato = !!ZAINO.checklist[voce.id];
  const label    = document.createElement("label");
  const cls = ["voce-checklist-v2"];
  if (spuntato) cls.push("fatta");
  if (!spuntato && voce.id === prossimaVoceId) cls.push("attiva");
  label.className = cls.join(" ");

  const cb = document.createElement("input");
  cb.type    = "checkbox";
  cb.checked = spuntato;
  cb.addEventListener("change", () => {
    if (cb.checked) { mostraBannerWiz(); segnalaChecklistUsata(); }
    ZAINO.checklist[voce.id] = cb.checked;
    salvaZaino(ZAINO);
    renderChecklist();
    aggiornaProgressoV2();
    renderMissione();
  });

  label.appendChild(cb);
  label.appendChild(crea("span", null, voce.testo));

  // Traduttore a 3 registri (DISEGNO_UX.md §6): mostrato solo se la voce ha
  // i campi nuovi (spiegazione/azione/citazione/fonte). Senza di essi la voce
  // resta identica a prima (retrocompatibile). Il blocco sta FUORI dal <label>
  // così cliccare "Cosa dice il bando" non spunta la checkbox.
  if (voce.spiegazione || voce.azione || voce.citazione || voce.fonte) {
    const wrap = crea("div", "voce-checklist-wrap");
    wrap.appendChild(label);
    const trad = crea("div", "voce-checklist-trad");
    if (voce.spiegazione) trad.appendChild(crea("div", "requisito-v2-desc", voce.spiegazione));
    if (voce.azione)      trad.appendChild(crea("div", "requisito-v2-azione", `→ ${voce.azione}`));
    if (voce.citazione || voce.fonte) {
      const dettagli = document.createElement("details");
      dettagli.className = "requisito-v2-bando";
      const sommario = document.createElement("summary");
      sommario.textContent = "Cosa dice il bando ▸";
      dettagli.appendChild(sommario);
      if (voce.citazione) dettagli.appendChild(crea("blockquote", "requisito-v2-citazione", voce.citazione));
      if (voce.fonte)     dettagli.appendChild(crea("div", "requisito-v2-fonte", voce.fonte));
      trad.appendChild(dettagli);
    }
    wrap.appendChild(trad);
    return wrap;
  }
  return label;
}

// ---- Export .ics lato client (DISEGNO_UX.md §6, gancio di retention) ----
function formattaDataICS(dataTecnica) {
  const d = new Date(dataTecnica);
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

function escapaTestoICS(testo) {
  return String(testo || "").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
}

function scaricaICSScadenza(scad) {
  const dtStamp = formattaDataICS(new Date().toISOString());
  const dtStart = formattaDataICS(scad.data);
  const uid = `${scad.id || "ew-scadenza"}-${dtStart}@erasmuswiz`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ErasmusWiz//Candidatura//IT",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `SUMMARY:${escapaTestoICS(scad.cosa)}`,
    `DESCRIPTION:${escapaTestoICS(scad.descrizione)}\\n\\nErasmusWiz: https://nicorotolo.github.io/erasmuswiz/`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `erasmuswiz-${(scad.id || "scadenza")}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ---- "Ora tocca a te" (BR5, 5b): le prime 3 voci non spuntate in
// ordine cronologico, grandi e spuntabili direttamente. Nessun dato
// nuovo: è una presentazione derivata dallo stesso ordine dei capitoli
// sotto (scadenze in ordine, poi "Quando puoi"). ----
function renderProssimiPassi(vociInOrdine, prossimaVoceId) {
  const cont = document.getElementById("prossimi-passi-v2");
  if (!cont) return;
  cont.innerHTML = "";

  const daFare = vociInOrdine
    .filter(v => !ZAINO.checklist[v.id] && !voceScaduta(v))
    .slice(0, 3);

  if (!daFare.length) { cont.style.display = "none"; return; }

  cont.style.display = "";
  cont.appendChild(crea("div", "prossimi-passi-titolo", "✨ Ora tocca a te"));
  const lista = crea("div", "prossimi-passi-lista");
  daFare.forEach(voce => {
    const item = crea("div", "prossimo-passo-item");
    item.appendChild(creaVoceChecklist(voce, prossimaVoceId));
    const scad = voce.scadenzaId ? scadenzaPerId(voce.scadenzaId) : null;
    if (scad) {
      const c = calcolaCountdown(scad.data);
      const badge = crea("div", "prossimo-passo-scadenza", `📅 ${scad.cosa} — ${countdownInParole(c)}`);
      badge.setAttribute("data-scadenza-id", scad.id);
      item.appendChild(badge);
    }
    lista.appendChild(item);
  });
  cont.appendChild(lista);
}

// ============================================================
// CANDIDATURA — vista cronologica fusa Scadenze+Checklist (UX3)
// Ogni scadenza è un "capitolo": card con data/countdown/export
// calendario, sotto le voci di checklist collegate (scadenzaId).
// Le voci senza scadenzaId (o con uno sconosciuto) finiscono nel
// capitolo finale "Quando puoi". DISEGNO_UX.md §6.
// BR5 (5b): sopra i capitoli, il blocco "Ora tocca a te"; i capitoli
// non imminenti (che non contengono il prossimo passo attivo) partono
// ripiegati in <details>.
// ============================================================
function renderChecklist() {
  const cont = document.getElementById("lista-checklist-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklist) ZAINO.checklist = {};

  // R2.6: fonte raggiungibile e data di verifica per le date mostrate.
  // Tutte le scadenze di questa vista vengono dal bando in BANDO_INFO:
  // qui si dichiara QUANDO sono state controllate e DOVE verificarle.
  // Se lo stato del bando non è "aperto" (R2.5) lo si dice, prima delle date.
  const infoBando = window.BANDO_INFO || {};
  if (infoBando.linkUfficiale) {
    const riga  = crea("div", "cand-fonte-riga");
    const stato = statoBando();
    const prefisso =
      stato === "dati-scaduti"   ? "⚠️ Queste date appartengono a un ciclo concluso: il nuovo bando potrebbe essere già uscito. " :
      stato === "non-pubblicato" ? "Il nuovo bando non è ancora stato pubblicato: nessuna data da mostrare. " : "";
    const verificata = infoBando.dataVerificaDati
      ? `Dati verificati il ${new Date(infoBando.dataVerificaDati).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}. `
      : "";
    riga.appendChild(document.createTextNode(`${prefisso}${verificata}Fa sempre fede la `));
    const link = document.createElement("a");
    link.href = infoBando.linkUfficiale;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "fonte ufficiale ↗";
    riga.appendChild(link);
    cont.appendChild(riga);
  }

  const checklist = CHECKLIST || [];
  const scadenze  = (SCADENZE_CAFOSCARI || []).slice().sort((a, b) => new Date(a.data) - new Date(b.data));
  const idScadenzeNote = scadenze.map(s => s.id);

  // La voce "attiva" (evidenziata) è la prima non spuntata la cui
  // scadenza NON è già passata: mai indicare come prossimo passo
  // qualcosa su cui non si può più agire.
  const prossimaVoceId = checklist.find(v => !ZAINO.checklist[v.id] && !voceScaduta(v))?.id;

  const vociSenzaScadenza = checklist.filter(v => !v.scadenzaId || !idScadenzeNote.includes(v.scadenzaId));

  const vociInOrdine = [];
  scadenze.forEach(scad => vociInOrdine.push(...checklist.filter(v => v.scadenzaId === scad.id)));
  vociInOrdine.push(...vociSenzaScadenza);
  renderProssimiPassi(vociInOrdine, prossimaVoceId);

  scadenze.forEach(scad => {
    const vociCollegate = checklist.filter(v => v.scadenzaId === scad.id);
    if (!vociCollegate.length) return; // niente da fare per questa scadenza: capitolo saltato

    const c = calcolaCountdown(scad.data);
    const imminente = vociCollegate.some(v => v.id === prossimaVoceId);
    const capitolo = crea("div", `cand-capitolo${c.passata ? " passata" : ""}`);

    const card = crea("div", "cand-scadenza-card");
    card.setAttribute("data-scadenza", scad.data);
    card.appendChild(crea("div", "cand-scadenza-titolo", scad.cosa));
    card.appendChild(crea("div", "cand-scadenza-data", formattaData(scad.data)));
    card.appendChild(crea("div", "cand-scadenza-countdown", countdownInParole(c)));

    // Niente export calendario per una scadenza già passata
    if (!c.passata) {
      const btnIcs = crea("button", "cand-btn-ics", "🗓 Aggiungi al calendario");
      btnIcs.type = "button";
      btnIcs.addEventListener("click", () => scaricaICSScadenza(scad));
      card.appendChild(btnIcs);
    }

    capitolo.appendChild(card);

    const dettagli = document.createElement("details");
    dettagli.className = "cand-checklist-dettagli";
    dettagli.open = imminente;
    const sommario = document.createElement("summary");
    sommario.className = "cand-checklist-toggle";
    sommario.textContent = imminente ? "I tuoi passi ▾" : "Mostra i passi ▸";
    dettagli.appendChild(sommario);

    const listaVoci = crea("div", "cand-checklist-sotto");
    vociCollegate.forEach(voce => listaVoci.appendChild(creaVoceChecklist(voce, prossimaVoceId)));
    dettagli.appendChild(listaVoci);
    capitolo.appendChild(dettagli);

    cont.appendChild(capitolo);
  });

  if (vociSenzaScadenza.length) {
    const imminenteQuandoPuoi = vociSenzaScadenza.some(v => v.id === prossimaVoceId);
    const capitolo = crea("div", "cand-capitolo cand-capitolo-quando-puoi");
    capitolo.appendChild(crea("div", "cand-capitolo-titolo", "Quando puoi"));

    const dettagli = document.createElement("details");
    dettagli.className = "cand-checklist-dettagli";
    dettagli.open = imminenteQuandoPuoi;
    const sommario = document.createElement("summary");
    sommario.className = "cand-checklist-toggle";
    sommario.textContent = imminenteQuandoPuoi ? "I tuoi passi ▾" : "Mostra i passi ▸";
    dettagli.appendChild(sommario);

    const listaVoci = crea("div", "cand-checklist-sotto");
    vociSenzaScadenza.forEach(voce => listaVoci.appendChild(creaVoceChecklist(voce, prossimaVoceId)));
    dettagli.appendChild(listaVoci);
    capitolo.appendChild(dettagli);

    cont.appendChild(capitolo);
  }

  aggiornaProgressoV2();
}

function aggiornaProgressoV2(lista, spunte) {
  const _lista  = lista  || CHECKLIST || [];
  const _spunte = spunte || (ZAINO.checklist || {});
  const tot   = _lista.length;
  const fatti = _lista.filter(v => _spunte[v.id]).length;
  const perc  = tot === 0 ? 0 : Math.round((fatti / tot) * 100);
  const fill  = document.getElementById("barra-riempimento-v2");
  const lbl   = document.getElementById("barra-label-v2");
  if (fill) fill.style.width = perc + "%";
  if (lbl)  lbl.textContent  = `${fatti} di ${tot} completati`;
}

// ============================================================
// COMPATIBILITÀ METE
// ============================================================
const SCALA_LINGUE = ["A1", "A2", "B1", "B2", "C1", "C2"];

// Le lingue proposte all'utente (onboarding e profilo) derivano dai DATI
// delle mete (requisitoLingua), mai da una lista scritta nel codice
// (PLAN.md §5.2): un ateneo con mete in portoghese proporrà il portoghese
// senza toccare l'app. Ordinate per frequenza, poi alfabetico.
function lingueDaiDati() {
  const conta = {};
  (METE || []).forEach(m => (m.requisitoLingua || []).forEach(r => {
    if (r && r.lingua) conta[r.lingua] = (conta[r.lingua] || 0) + 1;
  }));
  return Object.keys(conta).sort((a, b) => (conta[b] - conta[a]) || a.localeCompare(b, "it"));
}

function punteggioLinguaSingola(richiesta, lingueStudente) {
  const posseduta = lingueStudente.find(l => l.lingua === richiesta.lingua);
  if (!posseduta) return 0;
  const diff = SCALA_LINGUE.indexOf(posseduta.livello) - SCALA_LINGUE.indexOf(richiesta.livello);
  if (diff >= 0) return posseduta.certificata ? 50 : 25;
  if (diff === -1) return 12;
  return 0;
}

function punteggioLingua(meta, profilo) {
  if (!meta.requisitoLingua || !meta.requisitoLingua.length) return 50;
  return Math.max(...meta.requisitoLingua.map(r => punteggioLinguaSingola(r, profilo.lingue)));
}

function punteggioLivello(meta, profilo) {
  return meta.posti.some(p => p.livello === profilo.livello) ? 30 : 0;
}

function punteggioPosti(meta, profilo) {
  const n = meta.posti
    .filter(p => p.livello === profilo.livello)
    .reduce((s, p) => s + p.numero, 0);
  return n <= 0 ? 0 : Math.min(20, 5 + (n - 1) * 3);
}

function motivoMancanza(meta, profilo, pLing, pLiv) {
  const m = [];
  if (pLiv === 0) m.push(`nessun posto per ${livelloInParole(profilo.livello)}`);
  if (pLing === 25) m.push("lingua non certificata");
  else if (pLing === 12) m.push("un livello sotto il richiesto");
  else if (pLing === 0) m.push("requisito linguistico non soddisfatto");
  return m.length ? "Attenzione: " + m.join("; ") + "." : "Mancano solo dettagli minori.";
}

function calcolaCompatibilita(meta, profilo) {
  const pLiv = punteggioLivello(meta, profilo);
  const pPos = punteggioPosti(meta, profilo);
  const linguaNota = !!(meta.requisitoLingua && meta.requisitoLingua.length);

  if (!linguaNota) {
    if (pLiv === 0) return {
      totale: null, ordine: 10, icona: "🔒",
      stato: "Non accessibile ora",
      dettaglio: `Nessun posto per il tuo livello (${livelloInParole(profilo.livello)}).`
    };
    return {
      totale: null, ordine: 60, icona: "🟡",
      stato: "Idoneo — verifica la lingua",
      dettaglio: "Livello e posti compatibili. Requisito linguistico assente: controlla la scheda PDF."
    };
  }

  const pLing = punteggioLingua(meta, profilo);
  const totale = Math.round(pLing + pLiv + pPos);
  if (totale >= 80) return { totale, ordine: totale, icona: "✅", stato: "Compatibile", dettaglio: "Hai i requisiti principali." };
  if (totale >= 40) return { totale, ordine: totale, icona: "⚠️", stato: "Possibile, con riserve", dettaglio: motivoMancanza(meta, profilo, pLing, pLiv) };
  return { totale, ordine: totale, icona: "🔒", stato: "Non accessibile ora", dettaglio: motivoMancanza(meta, profilo, pLing, pLiv) };
}

// Categoria sintetica per badge e filtri a chip (BR4): stessa soglia di calcolaCompatibilita.
function categoriaCompat(comp) {
  if (comp.totale === null) return comp.ordine >= 60 ? "medio" : "basso";
  if (comp.totale >= 80) return "ok";
  if (comp.totale >= 40) return "medio";
  return "basso";
}

function postiSintesi(meta) {
  const tot = (meta.posti || []).reduce((s, p) => s + (p.numero || 0), 0);
  return `${tot} ${tot === 1 ? "posto" : "posti"}`;
}

// Presentazione dei nomi università (P1.7): i dati grezzi arrivano a volte
// tutti in maiuscolo ("PARIS LODRON UNIVERSITÄT SALZBURG"). Qui si normalizza
// SOLO la presentazione — i dati non si toccano (i typo restano segnalati
// alla pipeline) e i nomi già scritti bene passano invariati: si trasforma
// una parola solo se è TUTTA maiuscola. Le sigle corte (KU, UCL, III) restano
// com'erano; le preposizioni/articoli vanno in minuscolo se non iniziali.
const PAROLE_MINORI_NOME = new Set([
  "di", "de", "del", "della", "delle", "dei", "degli", "da", "d",
  "la", "le", "li", "lo", "el", "les", "los", "las", "do", "dos", "das",
  "der", "den", "des", "du", "dem", "van", "von", "und", "zu", "zur", "im",
  "and", "of", "the", "for", "für", "in", "a", "à", "y", "e", "i",
  "aan", "op", "het", "ten", "ter", "på", "ved",
]);
function nomeUniversita(nome) {
  if (!nome) return "";
  let primaParola = true;
  return String(nome).split(" ").map(parola => {
    const trasformata = parola.split(/([-'’])/).map(pezzo => {
      if (!/\p{L}/u.test(pezzo)) return pezzo;
      if (pezzo !== pezzo.toUpperCase()) return pezzo;         // già mixed-case
      // La punteggiatura intorno (es. "(AMU)") non fa parte della parola.
      const [, prima, core, dopo] = pezzo.match(/^(\P{L}*)(.*?)(\P{L}*)$/u);
      const minuscolo = core.toLowerCase();
      if (PAROLE_MINORI_NOME.has(minuscolo)) return prima + minuscolo + dopo;
      if (core.length <= 3) return pezzo;                      // sigla, si lascia
      if (prima.includes("(") || dopo.includes(")")) return pezzo; // "(TISEM)": sigla tra parentesi
      return prima + core.charAt(0) + minuscolo.slice(1) + dopo;
    }).join("");
    // La prima parola del nome resta sempre maiuscola, anche se "minore".
    if (primaParola && /\p{L}/u.test(trasformata)) {
      primaParola = false;
      return trasformata.charAt(0).toUpperCase() + trasformata.slice(1);
    }
    return trasformata;
  }).join(" ");
}

// Nome leggibile dell'area per lo strip profilo (P1.5): mai il codice ISCED
// grezzo in faccia all'utente. Preferisce la facoltà/dipartimento scelta;
// in mancanza (zaini vecchi) risale al nome dell'area dai dati mete.
function nomeAreaProfilo(profilo) {
  if (profilo.dipartimento) return profilo.dipartimento;
  for (const m of (METE || [])) {
    const a = (m.areeDisciplinari || []).find(x => x.codice === profilo.area);
    if (a && a.nome) return a.nome;
  }
  return "Area " + profilo.area;
}

function linguaSintesi(meta) {
  if (!meta.requisitoLingua || !meta.requisitoLingua.length) return "Lingua da verificare";
  const [prima, ...altre] = meta.requisitoLingua;
  return `${prima.lingua} ${prima.livello}` + (altre.length ? ` +${altre.length}` : "");
}

// Stima borsa per gruppo-paese (OP4): mappa meta.paese al gruppo dell'ateneo
// attivo (BORSE_INFO, in js/atenei/<ateneo>/dati-borse.js). Nessuna soglia
// hardcoded qui: il dato vive nel file dati, il codice legge soltanto.
function trovaGruppoBorsa(meta) {
  if (!meta.paese || !BORSE_INFO || !Array.isArray(BORSE_INFO.gruppiPaese)) return null;
  return BORSE_INFO.gruppiPaese.find(g => g.paesi.includes(meta.paese)) || null;
}

// Chip compatta per la card (bussola §3: "stima", mai una promessa).
function borsaSintesi(meta) {
  const gruppo = trovaGruppoBorsa(meta);
  return gruppo ? `💶 ~€${gruppo.importoMensile}/mese` : null;
}

// ============================================================
// WIZARD PRIMA VISITA DELLE METE (R3.1, PLAN.md §5.4)
// ------------------------------------------------------------
// "Hai già in mente le tue destinazioni?" — compare SOLO senza rotte
// salvate e finché non ha avuto risposta (ZAINO.wizardMete). Sempre
// saltabile; rilanciabile con "Ripensa le rotte" dalla schedina (il
// rilancio forza la comparsa anche con rotte già salvate).
// ============================================================
let _wizardMeteForzato = false;

function renderWizardMete() {
  const box = document.getElementById("wizard-mete");
  if (!box) return;
  const mostra = !ZAINO.wizardMete &&
    (((ZAINO.metePreferite || []).length === 0) || _wizardMeteForzato);
  box.style.display = mostra ? "" : "none";
}

function chiudiWizardMete() {
  ZAINO.wizardMete = true;
  _wizardMeteForzato = false;
  salvaZaino(ZAINO);
  renderWizardMete();
}

function initWizardMete() {
  const si    = document.getElementById("wizard-mete-si");
  const no    = document.getElementById("wizard-mete-no");
  const salta = document.getElementById("wizard-mete-salta");
  if (si) si.addEventListener("click", () => {
    // "Sì" = cerca e ordina fino a 5 mete: dritto sulla ricerca.
    chiudiWizardMete();
    const cerca = document.getElementById("cerca-mete");
    if (cerca) { cerca.focus(); cerca.scrollIntoView({ block: "center", behavior: "smooth" }); }
  });
  if (no) no.addEventListener("click", () => {
    // "No" = esplora: mappa, affinità e filtri (l'elenco è già ordinato
    // per compatibilità quando c'è un profilo).
    chiudiWizardMete();
    const mappa = document.getElementById("card-mappa-mete");
    const dest = (mappa && mappa.style.display !== "none") ? mappa : document.getElementById("filtri-mete-chip");
    dest?.scrollIntoView({ block: "center", behavior: "smooth" });
  });
  if (salta) salta.addEventListener("click", chiudiWizardMete);
}

// ============================================================
// MAPPA DEL TAB METE (R3.2) — sincronizzata con ricerca e filtri.
// Riceve le stesse mete dell'elenco reso sotto (MAI un filtro suo):
// una sola fonte, nessun doppio render — l'SVG si costruisce una
// volta, a ogni sincronizzazione si ridisegnano solo i pin.
// ============================================================
let _mappaMete = null;
function renderMappaMete(mete) {
  const card = document.getElementById("card-mappa-mete");
  if (!card) return;
  if (!window.EUROPA_MAPPA || !window.COORDINATE_CITTA || !mete.length) {
    card.style.display = "none";
    if (_mappaMete) _mappaMete.mete = null; // niente ri-cluster al resize
    return;
  }
  card.style.display = "";
  if (!_mappaMete) {
    const layer = mappaCostruisci(document.getElementById("mappa-mete"));
    if (!layer) { card.style.display = "none"; return; }
    _mappaMete = { layer };
  }
  _mappaMete.mete = mete;
  _mappaMete.opts = { stellate: ZAINO.metePreferite || [] };
  mappaRenderPins(_mappaMete.layer, mete, _mappaMete.opts);
  mappaNotaCopertura(document.getElementById("mappa-nota-mete"), mete);
}

// ============================================================
// METE v2
// ============================================================
function renderMete() {
  const cont  = document.getElementById("griglia-mete-v2");
  const intro = document.getElementById("intro-mete-v2");
  if (!cont) return;
  cont.innerHTML = "";

  const profilo = ZAINO.profilo;

  const strip = document.getElementById("profilo-strip");
  if (strip) {
    strip.innerHTML = "";
    if (profilo) {
      const lingua1 = (profilo.lingue || [])[0];
      const linguaTesto = lingua1 ? ` · ${lingua1.lingua} ${lingua1.livello}` : "";
      strip.appendChild(crea("span", "profilo-strip-testo",
        `${nomeAreaProfilo(profilo)} · ${livelloInParole(profilo.livello)}${linguaTesto}  `));
      const lnk = crea("a", "profilo-strip-link", "Modifica profilo →");
      lnk.href = "#";
      lnk.addEventListener("click", e => { e.preventDefault(); vaiA("profilo"); });
      strip.appendChild(lnk);
    } else {
      const lnk = crea("a", "profilo-strip-link", "Compila il profilo per vedere le mete compatibili →");
      lnk.href = "#";
      lnk.addEventListener("click", e => { e.preventDefault(); vaiA("profilo"); });
      strip.appendChild(lnk);
    }
  }

  const bannerLingue = document.getElementById("banner-lingue-mete");
  if (bannerLingue) {
    bannerLingue.innerHTML = "";
    if (profilo && (!profilo.lingue || profilo.lingue.length === 0)) {
      const banner = crea("p", "banner-in-verifica",
        "Aggiungi le tue lingue per vedere quali mete sono davvero compatibili. ");
      const lnk = crea("a", "profilo-strip-link", "Vai al profilo →");
      lnk.href = "#";
      lnk.addEventListener("click", e => { e.preventDefault(); vaiA("profilo"); });
      banner.appendChild(lnk);
      bannerLingue.appendChild(banner);
    }
  }

  let elenco;

  if (profilo) {
    elenco = (METE || [])
      .filter(m => m.areeDisciplinari.some(a => a.codice === profilo.area))
      .map(m => ({ meta: m, comp: calcolaCompatibilita(m, profilo) }))
      .sort((a, b) => b.comp.ordine - a.comp.ordine);
    if (intro) intro.textContent = elenco.length
      ? "Mete della tua area, ordinate per compatibilità con il tuo profilo."
      : "Nessuna meta per la tua area. Prova a cambiare area nel profilo.";
  } else {
    elenco = (METE || []).map(m => ({ meta: m, comp: null }));
    if (intro) intro.textContent = "Compila il profilo per vedere le mete ordinate per compatibilità.";
  }

  const filtriChip = document.getElementById("filtri-mete-chip");
  if (filtriChip) {
    filtriChip.innerHTML = "";
    if (profilo) {
      const lingueMancanti = !profilo.lingue || profilo.lingue.length === 0;
      if (!["tutte", "ok", "medio", "basso", "lingua"].includes(filtroMeteAttivo)) filtroMeteAttivo = "tutte";
      // Se le lingue sono state svuotate dal profilo mentre il filtro "lingua"
      // era attivo, non restare su un filtro che non può più funzionare.
      if (filtroMeteAttivo === "lingua" && lingueMancanti) filtroMeteAttivo = "tutte";
      [
        { valore: "tutte", testo: "Tutte" },
        { valore: "ok",    testo: "✅ Compatibili" },
        { valore: "medio", testo: "⚠️ Con riserve" },
        { valore: "basso", testo: "🔒 Non accessibili" },
        { valore: "lingua", testo: "🗣️ Per la mia lingua" },
      ].forEach(opz => {
        const chip = crea("button", "chip-filtro" + (filtroMeteAttivo === opz.valore ? " attivo" : ""), opz.testo);
        chip.type = "button";
        chip.addEventListener("click", () => {
          // Use case riunione d'asta (dossier §1-ter A): senza lingue in
          // profilo il filtro non ha nulla da confrontare — non un filtro
          // che finge di funzionare, si porta l'utente a compilarle.
          if (opz.valore === "lingua" && lingueMancanti) { vaiA("profilo"); return; }
          filtroMeteAttivo = opz.valore;
          renderMete();
        });
        filtriChip.appendChild(chip);
      });
    } else {
      filtroMeteAttivo = "tutte";
    }
  }
  if (profilo && filtroMeteAttivo === "lingua") {
    // Riusa punteggioLingua (motore di compatibilità, NON duplicato): 50 =
    // lingua richiesta coperta dal profilo E certificata. Le mete con
    // requisito lingua non verificabile restano visibili (mai nascoste in
    // silenzio), la card le marca già "Lingua da verificare" (linguaSintesi).
    elenco = elenco.filter(({ meta }) => {
      if (!meta.requisitoLingua || !meta.requisitoLingua.length) return true;
      return punteggioLingua(meta, profilo) === 50;
    });
    if (intro) intro.textContent = "Preparati alla riunione di assegnazione: queste sono le mete che le tue lingue coprono davvero.";
  } else if (profilo && filtroMeteAttivo !== "tutte") {
    elenco = elenco.filter(({ comp }) => categoriaCompat(comp) === filtroMeteAttivo);
  }

  const testo = (document.getElementById("cerca-mete")?.value || "").trim().toLowerCase();
  if (testo) {
    elenco = elenco.filter(({ meta }) =>
      (meta.universita || "").toLowerCase().includes(testo) ||
      (meta.citta     || "").toLowerCase().includes(testo) ||
      (meta.paese     || "").toLowerCase().includes(testo)
    );
  }

  const conta = document.getElementById("conta-mete");
  if (conta) conta.textContent = elenco.length + (elenco.length === 1 ? " meta" : " mete");

  // R3.1 + R3.2: wizard prima visita, e mappa sincronizzata con l'ELENCO
  // FILTRATO — una sola fonte per lista e mappa, mai due filtri diversi.
  renderWizardMete();
  renderMappaMete(elenco.map(e => e.meta));

  if (elenco.length === 0 && testo) {
    cont.appendChild(crea("p", "stato-vuoto-v2", `Nessuna meta trovata per «${testo}».`));
    return;
  }
  if (elenco.length === 0 && profilo && filtroMeteAttivo !== "tutte") {
    cont.appendChild(crea("p", "stato-vuoto-v2", "Nessuna meta con questo filtro. Prova un'altra categoria."));
    return;
  }

  // R3.7 — prestazioni col dataset completo: senza profilo la Sapienza
  // mette in lista 1.595 mete e il render integrale sfora il budget dei
  // 250 ms percepiti. Le card si rendono A LOTTI; conteggio e mappa qui
  // sopra restano sull'elenco COMPLETO, il bottone dichiara quante
  // restano — niente mete nascoste in silenzio.
  const LOTTO_METE = 80;
  let resi = 0;
  function rendiLotto() {
    const frag = document.createDocumentFragment();
    elenco.slice(resi, resi + LOTTO_METE).forEach(({ meta, comp }) => frag.appendChild(creaCardMeta(meta, comp)));
    resi = Math.min(resi + LOTTO_METE, elenco.length);
    cont.appendChild(frag);
    if (resi < elenco.length) {
      const rimaste = elenco.length - resi;
      const btn = crea("button", "btn-mostra-altre",
        `Mostra altre ${Math.min(LOTTO_METE, rimaste)} mete — ne restano ${rimaste}`);
      btn.type = "button";
      btn.addEventListener("click", () => { btn.remove(); rendiLotto(); });
      cont.appendChild(btn);
    }
  }
  rendiLotto();
}

// Una card meta dell'elenco (estratta da renderMete per il render a lotti).
function creaCardMeta(meta, comp) {
    const card = crea("article", "card-meta-v2");

    // Stellina preferiti: in alto a destra della card (feedback UX6 — prima
    // era in fondo, poco visibile). Icona sola + aria-label, posizionata
    // via CSS (position:absolute su .btn-preferita).
    const ePreferita = ZAINO.metePreferite.includes(meta.id);
    const btnPref = crea("button",
      "btn-preferita" + (ePreferita ? " preferita" : ""),
      ePreferita ? "⭐" : "☆");
    btnPref.type = "button";
    btnPref.title = ePreferita ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti";
    btnPref.setAttribute("aria-label", btnPref.title);
    btnPref.addEventListener("click", e => { e.stopPropagation(); togglePreferita(meta.id); });
    card.appendChild(btnPref);

    if (comp) {
      const categoria = categoriaCompat(comp);
      const classeMono = categoria === "ok" ? "verde" : categoria === "medio" ? "amber" : "locked";

      // Un'icona di stato sola (P1.6): il punteggio è solo il numero, l'icona
      // vive nel badge di stato — prima, senza punteggio, l'emoji compariva
      // due volte sulla stessa card.
      const riga = crea("div", "card-meta-v2-punteggio");
      if (comp.totale !== null) {
        riga.appendChild(crea("span", "meta-punteggio " + classeMono, `${comp.totale}%`));
      }
      riga.appendChild(crea("span", "card-meta-v2-stato stato-" + categoria,
        `${comp.icona} ${comp.stato}`));
      card.appendChild(riga);
    }

    card.appendChild(crea("h3", null, nomeUniversita(meta.universita)));
    card.appendChild(crea("div", "card-luogo-v2",
      meta.citta ? `${meta.citta} (${meta.paese})` : meta.paese));

    const chipRiga = crea("div", "chip-meta-riga");
    chipRiga.appendChild(crea("span", "chip-meta", postiSintesi(meta)));
    chipRiga.appendChild(crea("span", "chip-meta", linguaSintesi(meta)));
    const borsaChip = borsaSintesi(meta);
    if (borsaChip) chipRiga.appendChild(crea("span", "chip-meta", borsaChip));
    card.appendChild(chipRiga);

    // Niente testi ripetuti su ogni card (P1.8): il link al portale vive nel
    // pannello di dettaglio, e l'affordance di tap la dà il design della card
    // (hover-lift + freccia), non una label ripetuta 60 volte.
    card.classList.add("card-cliccabile");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", nomeUniversita(meta.universita) + " — apri il dettaglio");
    const freccia = crea("span", "card-freccia", "→");
    freccia.setAttribute("aria-hidden", "true");
    card.appendChild(freccia);
    card.addEventListener("click", () => apriDettaglioMeta(meta));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); apriDettaglioMeta(meta); }
    });

    return card;
}

// ============================================================
// SCHEDINA — "Le tue 5 scelte" (BR4)
// ============================================================
// Ordine persistito in ZAINO.schedina; le preferite restano il meccanismo di
// raccolta (togglePreferita) — questa funzione sincronizza le due liste:
// mantiene l'ordine salvato per le mete ancora preferite, aggiunge in coda
// le preferite non ancora ordinate, scarta chi non è più tra le preferite.
function schedinaIds() {
  const preferite = ZAINO.metePreferite || [];
  const salvata    = Array.isArray(ZAINO.schedina) ? ZAINO.schedina : [];
  const esistenti  = salvata.filter(id => preferite.includes(id));
  const nuove      = preferite.filter(id => !esistenti.includes(id));
  ZAINO.schedina = [...esistenti, ...nuove];
  return ZAINO.schedina;
}

function renderPreferite(msg) {
  const cont = document.getElementById("sezione-preferite");
  if (!cont) return;
  cont.innerHTML = "";

  const ids = schedinaIds();
  salvaZaino(ZAINO);

  // Fase C2: le stelle sulla mappa compatta seguono la schedina.
  if (typeof renderMappaHome === "function") renderMappaHome();

  const header = crea("div", "preferite-header");
  header.appendChild(crea("span", "preferite-label", `Le tue 5 scelte (${ids.length}/5)`));
  // R3.1: il wizard della prima visita si può sempre rilanciare da qui.
  const rilancia = crea("button", "preferite-rilancia", "✨ Ripensa le rotte");
  rilancia.type = "button";
  rilancia.addEventListener("click", () => {
    ZAINO.wizardMete = false;
    _wizardMeteForzato = true;
    salvaZaino(ZAINO);
    renderWizardMete();
    document.getElementById("wizard-mete")?.scrollIntoView({ block: "center", behavior: "smooth" });
  });
  header.appendChild(rilancia);
  cont.appendChild(header);

  if (msg) cont.appendChild(crea("p", "msg-preferite", msg));

  // Schedina vuota = invito compatto di UNA riga (P1.4): prima 5 slot vuoti
  // a piena larghezza occupavano ~1,5 schermate mobile PRIMA della lista mete.
  if (ids.length === 0) {
    cont.appendChild(crea("p", "schedina-invito-vuota",
      "☆ Tocca la stellina su una meta per aggiungerla. Massimo 5: l'ordine conta, sono le mete che porterai alla riunione di assegnazione."));
    return;
  }

  // Si mostrano solo gli slot pieni; i posti rimanenti diventano una riga
  // compatta sotto, non slot vuoti a scaffale.
  const lista = crea("div", "schedina-lista");
  ids.forEach((id, i) => {
    const meta = (METE || []).find(m => m.id === id);
    if (!meta) return;
    const slot = crea("div", "schedina-slot");
    slot.appendChild(crea("span", "schedina-numero", String(i + 1)));

    const corpo = crea("div", "schedina-corpo");
    corpo.appendChild(crea("span", "schedina-nome", nomeUniversita(meta.universita)));
    if (ZAINO.profilo) {
      const comp = calcolaCompatibilita(meta, ZAINO.profilo);
      corpo.appendChild(crea("span", "schedina-stato",
        `${comp.icona} ${comp.totale !== null ? comp.totale + "%" : comp.stato}`));
    }
    slot.appendChild(corpo);

    const azioni = crea("div", "schedina-azioni");
    const su = crea("button", "schedina-freccia", "▲");
    su.type = "button"; su.title = "Sposta su"; su.disabled = i === 0;
    su.addEventListener("click", () => spostaSchedina(i, -1));
    const giu = crea("button", "schedina-freccia", "▼");
    giu.type = "button"; giu.title = "Sposta giù"; giu.disabled = i === ids.length - 1;
    giu.addEventListener("click", () => spostaSchedina(i, 1));
    const rimuovi = crea("button", "schedina-rimuovi", "✕");
    rimuovi.type = "button"; rimuovi.title = "Rimuovi dalla schedina";
    rimuovi.addEventListener("click", () => togglePreferita(id));
    azioni.appendChild(su); azioni.appendChild(giu); azioni.appendChild(rimuovi);
    slot.appendChild(azioni);

    lista.appendChild(slot);
  });
  cont.appendChild(lista);

  if (ids.length < 5) {
    const restanti = 5 - ids.length;
    cont.appendChild(crea("p", "preferite-hint",
      restanti === 1
        ? "Puoi aggiungerne ancora una dalla lista qui sotto — l'ordine conta per la riunione di assegnazione."
        : `Puoi aggiungerne altre ${restanti} dalla lista qui sotto — l'ordine conta per la riunione di assegnazione.`));
  }
}

function spostaSchedina(indice, direzione) {
  const ids   = ZAINO.schedina;
  const nuovo = indice + direzione;
  if (nuovo < 0 || nuovo >= ids.length) return;
  [ids[indice], ids[nuovo]] = [ids[nuovo], ids[indice]];
  salvaZaino(ZAINO);
  renderPreferite();
}

function togglePreferita(id) {
  const idx = ZAINO.metePreferite.indexOf(id);
  if (idx !== -1) {
    ZAINO.metePreferite.splice(idx, 1);
    salvaZaino(ZAINO);
    renderPreferite();
    renderMete();
    renderMissione(); // le preferite spostano la tappa corrente: si riallinea tutto
  } else if (ZAINO.metePreferite.length >= 5) {
    renderPreferite("Il bando ne ammette al massimo 5. Rimuovi una meta per aggiungerne un'altra.");
  } else {
    ZAINO.metePreferite.push(id);
    salvaZaino(ZAINO);
    renderPreferite();
    renderMete();
    renderMissione();
  }
}

// ============================================================
// DETTAGLIO META (pannello a comparsa)
// ============================================================

// Un valore è "reale" solo se non è vuoto e non è un segnaposto
// ("Da verificare…"). Serve per NON mostrare campi-placeholder.
function valoreReale(str) {
  if (!str) return false;
  const s = String(str).trim();
  if (!s) return false;
  if (/^da verificare/i.test(s)) return false;
  return true;
}

// Costruisce una riga "etichetta + contenuto" nel pannello dettaglio.
function rigaDettaglio(etichetta, contenuto) {
  const blocco = crea("div", "dett-riga");
  blocco.appendChild(crea("span", "dett-label", etichetta));
  if (typeof contenuto === "string") {
    blocco.appendChild(crea("div", "dett-valore", contenuto));
  } else {
    const wrap = crea("div", "dett-valore");
    wrap.appendChild(contenuto);
    blocco.appendChild(wrap);
  }
  return blocco;
}

function apriDettaglioMeta(meta) {
  const overlay = document.getElementById("meta-overlay");
  const corpo   = document.getElementById("meta-modal-corpo");
  if (!overlay || !corpo) return;
  corpo.innerHTML = "";

  // --- Intestazione: università, luogo, codice ---
  corpo.appendChild(crea("h2", "dett-titolo", nomeUniversita(meta.universita)));
  corpo.appendChild(crea("p", "dett-luogo",
    meta.citta ? `${meta.citta} (${meta.paese})` : (meta.paese || "")));

  // --- Compatibilità (solo se ho un profilo) ---
  if (ZAINO.profilo) {
    const comp = calcolaCompatibilita(meta, ZAINO.profilo);
    const etichetta = comp.totale === null
      ? `${comp.icona} ${comp.stato}`
      : `${comp.icona} ${comp.totale}% — ${comp.stato}`;
    const box = crea("div", "dett-compat");
    box.appendChild(crea("span", "dett-compat-stato", etichetta));
    if (comp.dettaglio) box.appendChild(crea("span", "dett-compat-detail", comp.dettaglio));
    corpo.appendChild(box);
  }

  // --- Area disciplinare + dipartimento + coordinatore + codice ---
  const aree = (meta.areeDisciplinari || []).map(a => `${a.nome} (${a.codice})`).join(", ");
  if (aree) corpo.appendChild(rigaDettaglio("Area disciplinare", aree));
  if (meta.dipartimentoCf) corpo.appendChild(rigaDettaglio("Dipartimento / Facoltà", meta.dipartimentoCf));
  if (valoreReale(meta.coordinatoreCf)) corpo.appendChild(rigaDettaglio("Coordinatore / Docente referente", meta.coordinatoreCf));
  // P0.2: i codici SINTETICI della pipeline (SAP-*/CF-*) non sono i veri
  // codici Erasmus — mostrarli come dato ufficiale mina la fiducia. Nascosti
  // finché la pipeline non li sana; i codici reali (es. "E ZARAGOZ01") passano.
  if (meta.codiceErasmus && !/^(SAP|CF)-/i.test(meta.codiceErasmus)) {
    corpo.appendChild(rigaDettaglio("Codice Erasmus", meta.codiceErasmus));
  }

  // --- Posti ---
  if (meta.posti && meta.posti.length) {
    const ul = document.createElement("ul");
    meta.posti.forEach(p => ul.appendChild(crea("li", null, postiInParole(p))));
    corpo.appendChild(rigaDettaglio("Posti disponibili", ul));
  }

  // --- Requisiti linguistici ---
  const ulL = document.createElement("ul");
  if (meta.requisitoLingua && meta.requisitoLingua.length) {
    meta.requisitoLingua.forEach(l =>
      ulL.appendChild(crea("li", null, `${l.lingua} ${l.livello} — ${l.condizione}`)));
  } else {
    ulL.appendChild(crea("li", "dett-vuoto", "Non indicato nella lista ufficiale: controlla la scheda PDF."));
  }
  corpo.appendChild(rigaDettaglio("Requisiti linguistici", ulL));

  // --- Borsa Erasmus stimata per gruppo-paese (OP4) ---
  const gruppoBorsa = trovaGruppoBorsa(meta);
  if (gruppoBorsa && BORSE_INFO) {
    const box = crea("div", null);
    box.appendChild(crea("div", null,
      `Borsa UE stimata: ~€${gruppoBorsa.importoMensile}/mese (${gruppoBorsa.nome}).`));
    if (BORSE_INFO.integrazioneMinoriOpportunita) {
      const integ = BORSE_INFO.integrazioneMinoriOpportunita;
      const testoInteg = integ.tipo === "isee_a_fasce"
        ? `${integ.etichetta}: da €${integ.fasce[integ.fasce.length - 1].importoMensile} a €${integ.fasce[0].importoMensile}/mese in base all'ISEE.`
        : `${integ.etichetta}: +€${integ.importoMensile}/mese per chi rientra nelle categorie del bando.`;
      box.appendChild(crea("div", null, testoInteg));
    }
    box.appendChild(crea("span", "dett-compat-detail",
      `Stima, non una promessa — verifica sempre sul bando ufficiale. Fonte: ${BORSE_INFO.fonte} (dati aggiornati al ${BORSE_INFO.aggiornatoAl}).`));
    corpo.appendChild(rigaDettaglio("Borsa Erasmus", box));
  }

  // --- Scadenze università ospitante (dato reale, prima invisibile) ---
  if (meta.scadenzeOspitante && meta.scadenzeOspitante.length) {
    const ulS = document.createElement("ul");
    meta.scadenzeOspitante.forEach(s =>
      ulS.appendChild(crea("li", null, `${s.cosa}: ${s.periodo}`)));
    corpo.appendChild(rigaDettaglio("Scadenze dell'università ospitante", ulS));
  }

  // --- Campi descrittivi: solo se REALI (niente segnaposto) ---
  if (valoreReale(meta.crediti))      corpo.appendChild(rigaDettaglio("Crediti", meta.crediti));
  if (valoreReale(meta.prerequisiti)) corpo.appendChild(rigaDettaglio("Prerequisiti", meta.prerequisiti));
  if (valoreReale(meta.alloggio))     corpo.appendChild(rigaDettaglio("Alloggio", meta.alloggio));
  if (valoreReale(meta.visto))        corpo.appendChild(rigaDettaglio("Visto", meta.visto));
  if (valoreReale(meta.notePratiche)) corpo.appendChild(rigaDettaglio("Note pratiche", meta.notePratiche));

  // --- Link ---
  const boxLink = crea("div", "dett-link-wrap");
  const lp = crea("a", "dett-link primario", "Scheda ufficiale (PDF) ↗");
  lp.href = meta.linkPdf || window.ATENEO_PORTALE_URL || "https://www.unive.it/data/11631/";
  lp.target = "_blank"; lp.rel = "noopener";
  boxLink.appendChild(lp);
  if (valoreReale(meta.linkSito)) {
    const ls = crea("a", "dett-link", "Sito dell'università ↗");
    ls.href = meta.linkSito; ls.target = "_blank"; ls.rel = "noopener";
    boxLink.appendChild(ls);
  }
  corpo.appendChild(boxLink);

  // --- Nota onestà ---
  corpo.appendChild(crea("p", "dett-nota",
    "Dati dalla lista ufficiale del bando 2026/27. Per la candidatura fa sempre fede la scheda ufficiale."));

  overlay.style.display = "flex";
  document.body.classList.add("no-scroll");
  const btnX = document.getElementById("meta-modal-chiudi");
  if (btnX) btnX.focus();
}

function chiudiDettaglioMeta() {
  const overlay = document.getElementById("meta-overlay");
  if (!overlay) return;
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
}

function initDettaglioMeta() {
  const overlay = document.getElementById("meta-overlay");
  const btnX    = document.getElementById("meta-modal-chiudi");
  if (btnX)    btnX.addEventListener("click", chiudiDettaglioMeta);
  if (overlay) overlay.addEventListener("click", e => {
    if (e.target === overlay) chiudiDettaglioMeta(); // click fuori dal modale
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") chiudiDettaglioMeta();
  });
}

// ============================================================
// CHECKLIST POST-SELEZIONE — "Lo zaino" (BR6)
// Tre capitoli Prima/Durante/Dopo la partenza, mappati dalla fase
// esistente via il campo dati `gruppoZaino` (fallback "Prima" per le
// voci che non lo hanno ancora, es. Sapienza provvisoria). Dentro
// ogni capitolo restano le sotto-intestazioni per `fase` di prima
// (nessun dato perso, solo un livello di raggruppamento in più).
// R3.5: il ramo selezionato è ISOLATO dalle scadenze candidatura —
// scrive nel SUO contenitore (stazione "Parti"), non più in quello
// condiviso con la checklist di candidatura. Le due liste convivono
// nella stessa schermata Percorso, ognuna nella propria stazione.
// ============================================================
const CAPITOLI_ZAINO = ["Prima", "Durante", "Dopo"];

function renderChecklistPost() {
  const cont = document.getElementById("lista-checklist-post");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklistPost) ZAINO.checklistPost = {};

  const lista  = CHECKLIST_POST || [];
  const spunte = ZAINO.checklistPost;

  function creaVocePost(voce) {
    const spuntato = !!spunte[voce.id];
    const label = document.createElement("label");
    label.className = ["voce-checklist-v2", spuntato ? "fatta" : ""].join(" ").trim();

    const cb = document.createElement("input");
    cb.type    = "checkbox";
    cb.checked = spuntato;
    cb.addEventListener("change", () => {
      if (cb.checked) { mostraBannerWiz(); segnalaChecklistUsata(); }
      ZAINO.checklistPost[voce.id] = cb.checked;
      salvaZaino(ZAINO);
      renderChecklistPost();
      renderMissione(); // aggiorna anche conteggio stazione e "Questa settimana"
    });

    label.appendChild(cb);
    label.appendChild(crea("span", null, voce.testo));
    return label;
  }

  CAPITOLI_ZAINO.forEach(capitolo => {
    const vociCapitolo = lista.filter(v => (v.gruppoZaino || "Prima") === capitolo);
    if (vociCapitolo.length === 0) return; // niente contenuti per questo capitolo: si nasconde

    const capitoloEl = crea("div", "zaino-capitolo");
    // Testa-capitolo come blocco distinto (Fase C4): stesso linguaggio dei
    // capitoli-scadenza della candidatura, con il conteggio del capitolo al
    // posto del countdown (qui non c'è urgenza: è un percorso, non una corsa).
    const testa = crea("div", "zaino-capitolo-testa");
    testa.appendChild(crea("h2", "zaino-capitolo-titolo", capitolo));
    const fattiCapitolo = vociCapitolo.filter(v => spunte[v.id]).length;
    testa.appendChild(crea("span", "zaino-capitolo-count", `${fattiCapitolo} di ${vociCapitolo.length}`));
    capitoloEl.appendChild(testa);

    const fasi = [];
    vociCapitolo.forEach(voce => {
      if (!fasi.includes(voce.fase)) fasi.push(voce.fase);
    });

    const corpo = crea("div", "zaino-capitolo-corpo");
    fasi.forEach(fase => {
      const voci = vociCapitolo.filter(v => v.fase === fase);
      const gruppo = crea("div", "gruppo-post");
      gruppo.appendChild(crea("h3", "gruppo-post-titolo", fase));
      voci.forEach(voce => gruppo.appendChild(creaVocePost(voce)));
      corpo.appendChild(gruppo);
    });
    capitoloEl.appendChild(corpo);

    cont.appendChild(capitoloEl);
  });

  // Il conteggio dello zaino vive nella testa della SUA stazione
  // (renderPercorso), non nella barra della candidatura (R3.5).
}

// Il gate dell'esito (stazione 3 del Percorso, §5.5): auto-dichiarato,
// il sito non conosce le graduatorie. Da R3 le due checklist vivono in
// stazioni separate e sono SEMPRE renderizzate: il gate cambia solo lo
// stato del viaggio (ZAINO.fase) e la stazione corrente.
function initToggleFase() {
  const btnDomanda    = document.getElementById("fase-domanda");
  const btnSelezionato = document.getElementById("fase-selezionato");
  if (!btnDomanda || !btnSelezionato) return;

  function aggiornaBottoniFase() {
    const selezionato = ZAINO.fase === "selezionato";
    btnDomanda.classList.toggle("fase-attiva", !selezionato);
    btnSelezionato.classList.toggle("fase-attiva", selezionato);
  }

  btnDomanda.addEventListener("click", () => {
    ZAINO.fase = "domanda";
    salvaZaino(ZAINO);
    aggiornaBottoniFase();
    renderMissione();
    renderPercorso({ apri: true });
  });

  btnSelezionato.addEventListener("click", () => {
    const primaVolta = !ZAINO.zainoCelebrato;
    ZAINO.fase = "selezionato";
    if (primaVolta) ZAINO.zainoCelebrato = true;
    salvaZaino(ZAINO);
    aggiornaBottoniFase();
    renderMissione();
    renderPercorso({ apri: true });
    if (primaVolta) mostraCelebrazioneZaino();
  });

  aggiornaBottoniFase();
}

// ============================================================
// CELEBRAZIONE INGRESSO IN FASE 4 — "Lo zaino" (BR6)
// Riusa l'overlay blu notte già presente in index.html (era markup
// morto: nessun JS lo pilotava). Mostrato una sola volta per zaino
// (ZAINO.zainoCelebrato), non ad ogni visita del tab.
// ============================================================
function mostraCelebrazioneZaino() {
  const overlay = document.getElementById("celebrazione-overlay");
  if (!overlay) return;
  overlay.style.display = "flex";
  document.body.classList.add("no-scroll");
  // Focus sull'unica azione del dialog (P2.16): da tastiera/screen reader
  // l'overlay non era raggiungibile, il focus restava sul toggle sotto.
  document.getElementById("celebrazione-btn")?.focus();
}

function chiudiCelebrazioneZaino() {
  const overlay = document.getElementById("celebrazione-overlay");
  if (!overlay) return;
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
  // Il focus torna a chi ha aperto il dialog (il toggle "Sono stato
  // selezionato"), come già fa il meta-modal con la card di partenza.
  document.getElementById("fase-selezionato")?.focus();
}

function initCelebrazioneZaino() {
  const btn = document.getElementById("celebrazione-btn");
  // "Apri lo zaino →" porta DAVVERO allo zaino: la stazione "Parti" del
  // Percorso (prima di R3 lo zaino occupava il tab in cui già ci si trovava).
  if (btn) btn.addEventListener("click", () => {
    chiudiCelebrazioneZaino();
    vaiAStazione("partenza");
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const overlay = document.getElementById("celebrazione-overlay");
    if (overlay && overlay.style.display !== "none") chiudiCelebrazioneZaino();
  });
}

// ============================================================
// LA WORKSPACE v0 — stazione 4 del Percorso (R4, PLAN.md §6)
// ------------------------------------------------------------
// Bozza di lavoro MANUAL-FIRST del Learning Agreement: il LA ufficiale
// resta nei sistemi dell'ateneo (OLA/EWP) e questo microcopy accompagna
// ogni superficie del Workspace. I dati della pipeline (linkCatalogo,
// notaDisponibilita) si PROPONGONO solo dove esistono davvero (§6.2):
// dove mancano lo si dice, senza fingere una copertura che non c'è.
//
// SCHEMA (R4.1) — ramo additivo per-ateneo ZAINO.la (PLAN.md §6.4):
//   la: {
//     metaAperta: "id-meta" | null,      // ultima bozza aperta qui
//     bozzePerMeta: {
//       [metaId]: {
//         meta: { id, universita, citta, paese },  // fotografata alla
//                // creazione: la bozza resta leggibile anche se la meta
//                // sparisse dai dati (mai un id orfano illeggibile)
//         creataIl, aggiornatoIl,        // ISO
//         versioneCorrente,              // numero dell'ULTIMA versione
//         prossimoId,                    // contatore per id stabili e/c/g
//         versioni: [{
//           numero, creataIl,            // ISO
//           motivo,                      // null (v1) | chiave di LA_MOTIVI
//           notaMotivo,                  // testo libero facoltativo
//           esamiCasa: [{ id:"e1", nome, codice, cfu, nota }],
//           corsiHost: [{ id:"c2", nome, ects, lingua, semestre, link,
//                         stato, verificataIl }],
//              // stato: "da-verificare"|"disponibile"|"non-disponibile"|
//              //        "sostituito" — niente codici corso obbligatori
//              //        (nel LA reale di Bruno erano "000", §6.3)
//           gruppi: [{ id:"g3", corsi:["c2"], esami:["e1"] }],
//              // molti-a-molti: un corso copre più esami e viceversa
//           preInvio: { linkAperti, ectsConfrontati }   // checklist §6.3
//         }]
//       }
//     }
//   }
// REGOLE: si modifica SOLO l'ultima versione (la copia di lavoro); le
// precedenti sono fotografie congelate. "Sostituisci" e "Salva nuova
// versione" creano una versione nuova con motivo dichiarato — mai una
// modifica che cancella la storia (§6.3: sostituzione senza perdere la
// versione precedente). Gli zaini senza `la` valgono "nessuna bozza"
// (normalizzaZaino, migrazione additiva).
// ============================================================
const LA_MOTIVI = [
  ["non-disponibile",    "Corso non disponibile"],
  ["lingua",             "Lingua diversa dal previsto"],
  ["richiesta-ospitante", "Richiesta dell'università ospitante"],
  ["conflitto-orario",   "Conflitto d'orario"],
  ["scelta-personale",   "Scelta personale"],
  ["altro",              "Altro"],
];

const LA_STATI_CORSO = [
  ["da-verificare",   "🟡 Da verificare"],
  ["disponibile",     "✅ Disponibile"],
  ["non-disponibile", "🚫 Non disponibile"],
  ["sostituito",      "↷ Sostituito"],
];

const LA_SEMESTRI = ["", "1º semestre", "2º semestre", "annuale"];

function laEtichettaMotivo(chiave) {
  const voce = LA_MOTIVI.find(([k]) => k === chiave);
  return voce ? voce[1] : (chiave || "");
}

function laEtichettaStato(chiave) {
  const voce = LA_STATI_CORSO.find(([k]) => k === chiave);
  return voce ? voce[1] : "🟡 Da verificare";
}

// Stato UI del Workspace (non persistito, come filtroMeteAttivo):
// il pannello-motivo in corso e i messaggi transitori tra un render e l'altro.
let _laPending = null;    // { tipo: "versione" } | { tipo: "sostituzione", corsoId }
let _laMessaggio = null;  // testo mostrato una volta al prossimo render
let _laFocusId = null;    // id DOM da rifocalizzare dopo un render strutturale
let _laStoriaAperta = false;

function laBozze() { return ZAINO.la.bozzePerMeta; }

function laBozzaAperta() {
  const id = ZAINO.la.metaAperta;
  const bozza = id ? laBozze()[id] : null;
  if (!bozza) return null;
  // Guardia leggera su bozze scritte da versioni future/imprevisti: i campi
  // strutturali devono esserci, o il render non deve fidarsi.
  if (!Array.isArray(bozza.versioni) || !bozza.versioni.length) return null;
  return bozza;
}

function laVersioneCorrente(bozza) {
  return bozza.versioni[bozza.versioni.length - 1];
}

function laId(bozza, prefisso) {
  if (typeof bozza.prossimoId !== "number") bozza.prossimoId = 1;
  return prefisso + (bozza.prossimoId++);
}

function laTocca(bozza) {
  bozza.aggiornatoIl = new Date().toISOString();
  salvaZaino(ZAINO);
}

function laNuovaBozza(meta) {
  const ora = new Date().toISOString();
  return {
    meta: { id: meta.id, universita: meta.universita, citta: meta.citta || "", paese: meta.paese || "" },
    creataIl: ora, aggiornatoIl: ora,
    versioneCorrente: 1, prossimoId: 1,
    versioni: [{
      numero: 1, creataIl: ora, motivo: null, notaMotivo: "",
      esamiCasa: [], corsiHost: [], gruppi: [],
      preInvio: { linkAperti: false, ectsConfrontati: false },
    }],
  };
}

// Nuova versione = fotografia della corrente + motivo dichiarato. La
// checklist pre-invio riparte da zero: la bozza nuova non è stata ricontrollata.
function laNuovaVersione(bozza, motivo, notaMotivo) {
  const copia = JSON.parse(JSON.stringify(laVersioneCorrente(bozza)));
  copia.numero = laVersioneCorrente(bozza).numero + 1;
  copia.creataIl = new Date().toISOString();
  copia.motivo = motivo;
  copia.notaMotivo = notaMotivo || "";
  copia.preInvio = { linkAperti: false, ectsConfrontati: false };
  bozza.versioni.push(copia);
  bozza.versioneCorrente = copia.numero;
  laTocca(bozza);
  return copia;
}

// ---- Totali ECTS/CFU (R4.4): sempre visibili, mai un'approvazione ----
// Nei totali contano solo i corsi ancora nel piano: quelli marcati
// "non disponibile" o "sostituito" restano in bozza (storia onesta) ma
// non gonfiano i numeri.
function laCorsoAttivo(c) {
  return c.stato !== "non-disponibile" && c.stato !== "sostituito";
}

function laNumeroDa(v) {
  const n = parseFloat(String(v === undefined || v === null ? "" : v).replace(",", "."));
  return isNaN(n) ? 0 : n;
}

function laFormattaNumero(n) {
  return (Math.round(n * 100) / 100).toLocaleString("it-IT");
}

function laTotali(vers, soloIds) {
  const corsi = vers.corsiHost.filter(c => (!soloIds || soloIds.corsi.includes(c.id)));
  const esami = vers.esamiCasa.filter(e => (!soloIds || soloIds.esami.includes(e.id)));
  const ects = corsi.filter(laCorsoAttivo).reduce((s, c) => s + laNumeroDa(c.ects), 0);
  const cfu  = esami.reduce((s, e) => s + laNumeroDa(e.cfu), 0);
  return { ects, cfu };
}

// Segnalazione PRUDENTE delle soglie (§6.3): si mostra la differenza e si
// ricorda chi decide. Mai "approvato", mai un semaforo verde automatico.
function laFraseSoglie(t) {
  if (t.ects === 0 && t.cfu === 0) return "";
  const diff = Math.round((t.ects - t.cfu) * 100) / 100;
  if (diff === 0) return "I totali coincidono. Non è un'approvazione: sul riconoscimento decide sempre il tuo ateneo.";
  const verso = diff > 0 ? "in più sul lato host" : "in meno sul lato host";
  return `Differenza di ${laFormattaNumero(Math.abs(diff))} tra ECTS e CFU (${verso}). Non è per forza un errore: le regole di conversione le decide il tuo ateneo — confrontala col tuo regolamento.`;
}

// La data di "oggi" per verificataIl: quella LOCALE dello studente, non
// l'UTC di toISOString — alle prime ore del mattino italiano segnerebbe
// il giorno prima (stessa disciplina Europe/Rome del vincolo §10.6).
function laOggiISO() {
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function laDataBreve(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return "";
  return d.toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" });
}

// Un link inserito a mano si rende cliccabile solo se è un URL http(s):
// qualunque altra cosa resta testo (vincolo §10.7, niente HTML arbitrario).
function laLinkSicuro(url) {
  return /^https?:\/\//i.test(String(url || "").trim()) ? String(url).trim() : null;
}

let analyticsLAInviato = false;
function segnalaLAUsato() {
  if (analyticsLAInviato) return;
  analyticsLAInviato = true;
  window.goatcounter?.count({ path: "la-workspace-usato", event: true });
}

// ---- Le mete proponibili nel selettore bozza ----
// Prima le rotte della schedina (il caso vero: la meta assegnata è quasi
// sempre lì), poi le mete del dipartimento del profilo, più le bozze già
// esistenti qualunque cosa sia successo a preferite/profilo (una bozza non
// diventa MAI irraggiungibile). Niente elenco completo dell'ateneo: 1.595
// opzioni in una tendina non aiutano nessuno — per il resto c'è il tab Mete.
function laGruppiSelettore() {
  const bozze = laBozze();
  const inSchedina = schedinaIds()
    .map(id => (METE || []).find(m => m.id === id)).filter(Boolean);
  const idsVisti = new Set(inSchedina.map(m => m.id));

  const p = ZAINO.profilo;
  const delDipartimento = !p ? [] : (METE || [])
    .filter(m => (p.dipartimento
      ? m.dipartimentoCf === p.dipartimento
      : (m.areeDisciplinari || []).some(a => a.codice === p.area)))
    .filter(m => !idsVisti.has(m.id))
    .sort((a, b) => (a.universita || "").localeCompare(b.universita || "", "it"));
  delDipartimento.forEach(m => idsVisti.add(m.id));

  // Bozze la cui meta non compare nei gruppi sopra (profilo cambiato, mete
  // tolte dalle preferite, dati mutati): si elencano col nome fotografato.
  const orfane = Object.keys(bozze)
    .filter(id => !idsVisti.has(id))
    .map(id => ({ id, universita: (bozze[id].meta && bozze[id].meta.universita) || id }));

  return { inSchedina, delDipartimento, orfane };
}

// ============================================================
// RENDER DEL WORKSPACE — tutto passa da qui. Le digitazioni aggiornano il
// modello su "change" e SOLO i totali a schermo (laAggiornaTotali): il
// render completo è per i cambi strutturali (righe, gruppi, versioni).
// ============================================================
function renderLA() {
  const cont = document.getElementById("la-workspace");
  if (!cont) return;
  cont.innerHTML = "";

  // Microcopy costante (§6.3): su OGNI superficie del Workspace.
  cont.appendChild(crea("p", "la-disclaimer",
    "🧪 Bozza di lavoro: il Learning Agreement ufficiale resta nel sistema del tuo ateneo (OLA/EWP)."));

  if (_laMessaggio) {
    cont.appendChild(crea("p", "la-messaggio", _laMessaggio));
    _laMessaggio = null;
  }

  const { inSchedina, delDipartimento, orfane } = laGruppiSelettore();

  if (!inSchedina.length && !delDipartimento.length && !orfane.length) {
    const vuoto = crea("div", "la-vuoto");
    vuoto.appendChild(crea("p", "stazione-testo",
      "Per iniziare una bozza scegli prima la meta: esplora le mete e salva le tue preferite."));
    const btn = crea("button", "btn-secondary", "🗺️ Vai alle mete");
    btn.type = "button";
    btn.setAttribute("data-goto", "mete");
    vuoto.appendChild(btn);
    cont.appendChild(vuoto);
    return;
  }

  // --- Selettore della meta ---
  const scelta = crea("div", "la-scelta-meta");
  const lbl = crea("label", "la-scelta-label", "La bozza per");
  lbl.setAttribute("for", "la-select-meta");
  scelta.appendChild(lbl);
  const sel = document.createElement("select");
  sel.id = "la-select-meta";
  const optVuota = document.createElement("option");
  optVuota.value = "";
  optVuota.textContent = "— scegli la meta —";
  sel.appendChild(optVuota);

  function aggiungiGruppo(label, mete, conBozza) {
    if (!mete.length) return;
    const og = document.createElement("optgroup");
    og.label = label;
    mete.forEach(m => {
      const o = document.createElement("option");
      o.value = m.id;
      const suffisso = laBozze()[m.id] ? " · bozza ✎" : "";
      o.textContent = nomeUniversita(m.universita) + suffisso;
      og.appendChild(o);
    });
    sel.appendChild(og);
  }
  aggiungiGruppo("Le tue 5 scelte", inSchedina);
  aggiungiGruppo(ZAINO.profilo && ZAINO.profilo.dipartimento
    ? `Mete di ${ZAINO.profilo.dipartimento}` : "Mete della tua area", delDipartimento);
  aggiungiGruppo("Altre tue bozze", orfane);

  if (ZAINO.la.metaAperta && [...sel.options].some(o => o.value === ZAINO.la.metaAperta)) {
    sel.value = ZAINO.la.metaAperta;
  }
  sel.addEventListener("change", () => {
    ZAINO.la.metaAperta = sel.value || null;
    _laPending = null;
    salvaZaino(ZAINO);
    renderLA();
  });
  scelta.appendChild(sel);
  cont.appendChild(scelta);

  const metaId = ZAINO.la.metaAperta;
  if (!metaId) return;

  const bozza = laBozzaAperta();

  // --- Meta scelta ma senza bozza: si crea qui, v1 vuota ---
  if (!bozza) {
    const meta = (METE || []).find(m => m.id === metaId);
    if (!meta) return; // id non più nei dati e senza bozza: niente da mostrare
    const box = crea("div", "la-vuoto");
    box.appendChild(crea("p", "stazione-testo",
      `Nessuna bozza per ${nomeUniversita(meta.universita)}: creala e inserisci esami di casa e corsi host. Tutto resta su questo dispositivo.`));
    const btn = crea("button", "btn-primary", "＋ Crea la bozza");
    btn.type = "button";
    btn.addEventListener("click", () => {
      laBozze()[metaId] = laNuovaBozza(meta);
      salvaZaino(ZAINO);
      segnalaLAUsato();
      window.goatcounter?.count({ path: "la-bozza-creata", event: true });
      renderPercorso();
      renderLA();
    });
    box.appendChild(btn);
    cont.appendChild(box);
    laRenderPropostaDati(cont, meta);
    return;
  }

  laRenderBozza(cont, bozza);
}

// ---- R4.3: proposte dai dati SOLO dove verificate ----
// linkCatalogo/notaDisponibilita arrivano dalla pipeline (PLAN §3, Livello B).
// Dove mancano non si finge: lo si dichiara e si offre il sito dell'ateneo.
function laRenderPropostaDati(cont, meta) {
  const box = crea("div", "la-dati-meta");
  if (!meta) {
    box.appendChild(crea("p", "la-dati-nota",
      "Questa meta non è più nei dati del sito: la bozza resta tua e continua a funzionare."));
    cont.appendChild(box);
    return;
  }
  const catalogo = laLinkSicuro(meta.linkCatalogo);
  if (catalogo) {
    const riga = crea("p", "la-dati-riga");
    riga.appendChild(document.createTextNode("📚 Catalogo corsi per studenti in scambio: "));
    const a = crea("a", "la-dati-link", "apri il catalogo ↗");
    a.href = catalogo; a.target = "_blank"; a.rel = "noopener";
    riga.appendChild(a);
    box.appendChild(riga);
  } else {
    const riga = crea("p", "la-dati-nota",
      "Il catalogo corsi di questa meta non è ancora mappato: cerca i corsi sul sito dell'ospitante e inseriscili qui a mano. ");
    const sito = laLinkSicuro(meta.linkSito);
    if (sito) {
      const a = crea("a", "la-dati-link", "Sito dell'università ↗");
      a.href = sito; a.target = "_blank"; a.rel = "noopener";
      riga.appendChild(a);
    }
    box.appendChild(riga);
  }
  if (meta.notaDisponibilita) {
    box.appendChild(crea("p", "la-dati-avviso", `⚠️ ${meta.notaDisponibilita}`));
  }
  cont.appendChild(box);
}

// ---- Il corpo della bozza: versione corrente + sezioni ----
function laRenderBozza(cont, bozza) {
  const vers = laVersioneCorrente(bozza);
  const meta = (METE || []).find(m => m.id === bozza.meta.id) || null;

  // Testa: versione, date, azioni di versione
  const testa = crea("div", "la-testa");
  const titolo = crea("div", "la-testa-testi");
  titolo.appendChild(crea("span", "la-testa-versione", `Versione ${vers.numero}`));
  const dettagli = [`creata il ${laDataBreve(vers.creataIl)}`];
  if (bozza.aggiornatoIl && bozza.aggiornatoIl !== vers.creataIl) {
    dettagli.push(`ultima modifica ${laDataBreve(bozza.aggiornatoIl)}`);
  }
  if (vers.motivo) dettagli.push(`motivo: ${laEtichettaMotivo(vers.motivo)}`);
  titolo.appendChild(crea("span", "la-testa-sub", dettagli.join(" · ")));
  testa.appendChild(titolo);

  const azioni = crea("div", "la-testa-azioni");
  const btnVersione = crea("button", "btn-secondary la-btn-piccolo", "📌 Salva nuova versione");
  btnVersione.type = "button";
  btnVersione.addEventListener("click", () => {
    _laPending = { tipo: "versione" };
    renderLA();
  });
  azioni.appendChild(btnVersione);
  const btnElimina = crea("button", "la-btn-elimina", "🗑 Elimina bozza");
  btnElimina.type = "button";
  btnElimina.addEventListener("click", () => {
    const quante = bozza.versioni.length;
    const ok = window.confirm(
      `Eliminare la bozza per ${nomeUniversita(bozza.meta.universita)}? ` +
      `Si perdono TUTTE le versioni (${quante}): questa operazione non si annulla.`);
    if (!ok) return;
    delete laBozze()[bozza.meta.id];
    ZAINO.la.metaAperta = null;
    salvaZaino(ZAINO);
    renderPercorso();
    renderLA();
  });
  azioni.appendChild(btnElimina);
  testa.appendChild(azioni);
  cont.appendChild(testa);

  // Pannello-motivo (nuova versione / sostituzione): inline, mai un prompt.
  if (_laPending) laRenderPannelloMotivo(cont, bozza, vers);

  laRenderPropostaDati(cont, meta);

  // Totali sempre visibili (§6.3) — aggiornati vivi da laAggiornaTotali.
  const totali = crea("div", "la-totali");
  totali.id = "la-totali";
  cont.appendChild(totali);

  // --- Corsi host ---
  cont.appendChild(laRenderSezioneCorsi(bozza, vers));
  // --- Esami di casa ---
  cont.appendChild(laRenderSezioneEsami(bozza, vers));
  // --- Corrispondenze molti-a-molti ---
  cont.appendChild(laRenderSezioneGruppi(bozza, vers));
  // --- Checklist pre-invio ---
  cont.appendChild(laRenderPreInvio(bozza, vers));
  // --- Export ---
  cont.appendChild(laRenderExport(bozza, vers));
  // --- Versioni precedenti ---
  laRenderStoria(cont, bozza);

  laAggiornaTotali(vers);
  laAggiornaOrfani(vers);

  // Focus richiesto da un'azione strutturale (es. riga appena aggiunta).
  if (_laFocusId) {
    document.getElementById(_laFocusId)?.focus();
    _laFocusId = null;
  }
}

function laRenderPannelloMotivo(cont, bozza, vers) {
  const box = crea("div", "la-motivo");
  const sostituzione = _laPending.tipo === "sostituzione";
  const corso = sostituzione ? vers.corsiHost.find(c => c.id === _laPending.corsoId) : null;
  box.appendChild(crea("p", "la-motivo-titolo", sostituzione
    ? `Stai sostituendo «${(corso && corso.nome) || "corso senza nome"}»: si salva una nuova versione, quella attuale resta nella storia.`
    : "Salva la bozza attuale come nuova versione: quella attuale resta nella storia, non si perde niente."));

  const riga = crea("div", "la-motivo-riga");
  const sel = document.createElement("select");
  sel.id = "la-motivo-select";
  sel.setAttribute("aria-label", "Motivo della modifica");
  LA_MOTIVI.forEach(([valore, label]) => {
    const o = document.createElement("option");
    o.value = valore; o.textContent = label;
    sel.appendChild(o);
  });
  if (sostituzione) sel.value = "non-disponibile";
  riga.appendChild(sel);
  const nota = document.createElement("input");
  nota.type = "text";
  nota.placeholder = "Nota facoltativa (es. cosa ti hanno scritto)";
  nota.maxLength = 200;
  nota.setAttribute("aria-label", "Nota sul motivo");
  riga.appendChild(nota);
  box.appendChild(riga);

  const azioni = crea("div", "la-motivo-azioni");
  const conferma = crea("button", "btn-primary la-btn-piccolo", sostituzione ? "Sostituisci e salva versione" : "Salva versione");
  conferma.type = "button";
  conferma.addEventListener("click", () => {
    const nuova = laNuovaVersione(bozza, sel.value, nota.value.trim());
    if (sostituzione) {
      const c = nuova.corsiHost.find(x => x.id === _laPending.corsoId);
      if (c) {
        c.stato = "sostituito";
        c.verificataIl = laOggiISO();
      }
      laTocca(bozza);
      _laMessaggio = `Versione ${nuova.numero} creata: il corso è marcato «sostituito». Aggiungi ora il corso sostitutivo tra i corsi host.`;
    } else {
      _laMessaggio = `Versione ${nuova.numero} creata. Da qui in poi modifichi questa; la ${nuova.numero - 1} resta nella storia.`;
    }
    _laPending = null;
    renderLA();
  });
  azioni.appendChild(conferma);
  const annulla = crea("button", "btn-secondary la-btn-piccolo", "Annulla");
  annulla.type = "button";
  annulla.addEventListener("click", () => { _laPending = null; renderLA(); });
  azioni.appendChild(annulla);
  box.appendChild(azioni);
  cont.appendChild(box);
}

// ---- Sezione corsi host (R4.2): campi del §6.2, stato + data verifica ----
function laRenderSezioneCorsi(bozza, vers) {
  const sez = crea("section", "la-sezione");
  sez.appendChild(crea("h3", "la-sezione-titolo", "Corsi che seguirai all'estero (host)"));

  if (!vers.corsiHost.length) {
    sez.appendChild(crea("p", "la-sezione-vuota",
      "Nessun corso ancora: aggiungi quelli che pensi di seguire dall'offerta dell'ospitante."));
  }

  vers.corsiHost.forEach(c => sez.appendChild(laRigaCorso(bozza, vers, c)));

  const aggiungi = crea("button", "btn-secondary la-btn-aggiungi", "＋ Aggiungi corso host");
  aggiungi.type = "button";
  aggiungi.addEventListener("click", () => {
    const nuovo = {
      id: laId(bozza, "c"), nome: "", ects: "", lingua: "", semestre: "",
      link: "", stato: "da-verificare", verificataIl: "",
    };
    vers.corsiHost.push(nuovo);
    laTocca(bozza);
    segnalaLAUsato();
    _laFocusId = `la-corso-nome-${nuovo.id}`;
    renderLA();
  });
  sez.appendChild(aggiungi);
  return sez;
}

function laRigaCorso(bozza, vers, corso) {
  const riga = crea("div", "la-riga" + (laCorsoAttivo(corso) ? "" : " la-riga-esclusa"));

  const testaRiga = crea("div", "la-riga-testa");
  const nome = document.createElement("input");
  nome.type = "text";
  nome.id = `la-corso-nome-${corso.id}`;
  nome.value = corso.nome || "";
  nome.placeholder = "Nome del corso host";
  nome.maxLength = 120;
  nome.setAttribute("aria-label", "Nome del corso host");
  nome.addEventListener("change", () => { corso.nome = nome.value.trim(); laTocca(bozza); });
  testaRiga.appendChild(nome);

  const stato = document.createElement("select");
  stato.className = "la-select-stato";
  stato.setAttribute("aria-label", "Stato del corso");
  LA_STATI_CORSO.forEach(([valore, label]) => {
    const o = document.createElement("option");
    o.value = valore; o.textContent = label;
    stato.appendChild(o);
  });
  stato.value = corso.stato || "da-verificare";
  stato.addEventListener("change", () => {
    corso.stato = stato.value;
    // Dichiarare uno stato È una verifica: la data si aggiorna a oggi se
    // manca (resta modificabile a mano qui sotto).
    if (!corso.verificataIl) corso.verificataIl = laOggiISO();
    laTocca(bozza);
    renderLA();
  });
  testaRiga.appendChild(stato);

  const sostituisci = crea("button", "la-btn-riga", "↷ Sostituisci");
  sostituisci.type = "button";
  sostituisci.title = "Sostituisci questo corso salvando una nuova versione";
  sostituisci.addEventListener("click", () => {
    _laPending = { tipo: "sostituzione", corsoId: corso.id };
    renderLA();
    document.getElementById("la-motivo-select")?.focus();
  });
  testaRiga.appendChild(sostituisci);

  const rimuovi = crea("button", "la-btn-riga la-btn-rimuovi", "✕");
  rimuovi.type = "button";
  rimuovi.title = "Rimuovi dalla bozza corrente";
  rimuovi.setAttribute("aria-label", "Rimuovi questo corso dalla bozza corrente");
  rimuovi.addEventListener("click", () => {
    if (corso.nome && !window.confirm(`Rimuovere «${corso.nome}» dalla bozza corrente? Le versioni salvate non cambiano.`)) return;
    vers.corsiHost = vers.corsiHost.filter(x => x.id !== corso.id);
    vers.gruppi.forEach(g => { g.corsi = g.corsi.filter(id => id !== corso.id); });
    laTocca(bozza);
    renderLA();
  });
  testaRiga.appendChild(rimuovi);
  riga.appendChild(testaRiga);

  const campi = crea("div", "la-riga-campi");
  campi.appendChild(laCampo("ECTS", () => {
    const inp = document.createElement("input");
    inp.type = "number"; inp.step = "0.5"; inp.min = "0"; inp.inputMode = "decimal";
    inp.value = corso.ects === "" || corso.ects === undefined ? "" : corso.ects;
    inp.addEventListener("change", () => {
      corso.ects = inp.value === "" ? "" : laNumeroDa(inp.value);
      laTocca(bozza);
      laAggiornaTotali(vers);
    });
    return inp;
  }));
  campi.appendChild(laCampo("Lingua", () => {
    const inp = document.createElement("input");
    inp.type = "text"; inp.maxLength = 40;
    inp.placeholder = "es. Inglese";
    inp.value = corso.lingua || "";
    inp.addEventListener("change", () => { corso.lingua = inp.value.trim(); laTocca(bozza); });
    return inp;
  }));
  campi.appendChild(laCampo("Semestre", () => {
    const s = document.createElement("select");
    LA_SEMESTRI.forEach(v => {
      const o = document.createElement("option");
      o.value = v; o.textContent = v || "—";
      s.appendChild(o);
    });
    s.value = LA_SEMESTRI.includes(corso.semestre) ? corso.semestre : "";
    s.addEventListener("change", () => { corso.semestre = s.value; laTocca(bozza); });
    return s;
  }));
  campi.appendChild(laCampo("Verificato il", () => {
    const inp = document.createElement("input");
    inp.type = "date";
    inp.value = corso.verificataIl || "";
    inp.addEventListener("change", () => { corso.verificataIl = inp.value; laTocca(bozza); });
    return inp;
  }));
  campi.appendChild(laCampo("Link ufficiale", () => {
    const inp = document.createElement("input");
    inp.type = "url"; inp.placeholder = "https://…";
    inp.value = corso.link || "";
    inp.addEventListener("change", () => { corso.link = inp.value.trim(); laTocca(bozza); });
    return inp;
  }, "la-campo-largo"));
  riga.appendChild(campi);

  return riga;
}

// ---- Sezione esami di casa (R4.2): nome, codice facoltativo, CFU, nota ----
function laRenderSezioneEsami(bozza, vers) {
  const sez = crea("section", "la-sezione");
  sez.appendChild(crea("h3", "la-sezione-titolo", "Esami di casa da riconoscere"));
  sez.appendChild(crea("p", "la-sezione-sub",
    "Il tuo piano di studi non è nei dati del sito: inserisci a mano gli esami che vuoi farti riconoscere."));

  if (!vers.esamiCasa.length) {
    sez.appendChild(crea("p", "la-sezione-vuota", "Nessun esame ancora."));
  }

  vers.esamiCasa.forEach(e => sez.appendChild(laRigaEsame(bozza, vers, e)));

  const aggiungi = crea("button", "btn-secondary la-btn-aggiungi", "＋ Aggiungi esame di casa");
  aggiungi.type = "button";
  aggiungi.addEventListener("click", () => {
    const nuovo = { id: laId(bozza, "e"), nome: "", codice: "", cfu: "", nota: "" };
    vers.esamiCasa.push(nuovo);
    laTocca(bozza);
    segnalaLAUsato();
    _laFocusId = `la-esame-nome-${nuovo.id}`;
    renderLA();
  });
  sez.appendChild(aggiungi);
  return sez;
}

function laRigaEsame(bozza, vers, esame) {
  const riga = crea("div", "la-riga");
  const testaRiga = crea("div", "la-riga-testa");
  const nome = document.createElement("input");
  nome.type = "text";
  nome.id = `la-esame-nome-${esame.id}`;
  nome.value = esame.nome || "";
  nome.placeholder = "Nome dell'esame di casa";
  nome.maxLength = 120;
  nome.setAttribute("aria-label", "Nome dell'esame di casa");
  nome.addEventListener("change", () => { esame.nome = nome.value.trim(); laTocca(bozza); });
  testaRiga.appendChild(nome);

  const rimuovi = crea("button", "la-btn-riga la-btn-rimuovi", "✕");
  rimuovi.type = "button";
  rimuovi.title = "Rimuovi dalla bozza corrente";
  rimuovi.setAttribute("aria-label", "Rimuovi questo esame dalla bozza corrente");
  rimuovi.addEventListener("click", () => {
    if (esame.nome && !window.confirm(`Rimuovere «${esame.nome}» dalla bozza corrente? Le versioni salvate non cambiano.`)) return;
    vers.esamiCasa = vers.esamiCasa.filter(x => x.id !== esame.id);
    vers.gruppi.forEach(g => { g.esami = g.esami.filter(id => id !== esame.id); });
    laTocca(bozza);
    renderLA();
  });
  testaRiga.appendChild(rimuovi);
  riga.appendChild(testaRiga);

  const campi = crea("div", "la-riga-campi");
  campi.appendChild(laCampo("Codice (facolt.)", () => {
    const inp = document.createElement("input");
    inp.type = "text"; inp.maxLength = 20;
    inp.value = esame.codice || "";
    inp.addEventListener("change", () => { esame.codice = inp.value.trim(); laTocca(bozza); });
    return inp;
  }));
  campi.appendChild(laCampo("CFU", () => {
    const inp = document.createElement("input");
    inp.type = "number"; inp.step = "0.5"; inp.min = "0"; inp.inputMode = "decimal";
    inp.value = esame.cfu === "" || esame.cfu === undefined ? "" : esame.cfu;
    inp.addEventListener("change", () => {
      esame.cfu = inp.value === "" ? "" : laNumeroDa(inp.value);
      laTocca(bozza);
      laAggiornaTotali(vers);
    });
    return inp;
  }));
  campi.appendChild(laCampo("Nota (facolt.)", () => {
    const inp = document.createElement("input");
    inp.type = "text"; inp.maxLength = 120;
    inp.placeholder = "es. da sostenere al 2º anno";
    inp.value = esame.nota || "";
    inp.addEventListener("change", () => { esame.nota = inp.value.trim(); laTocca(bozza); });
    return inp;
  }, "la-campo-largo"));
  riga.appendChild(campi);
  return riga;
}

// Campo etichettato compatto (label + controllo), per le righe del Workspace.
function laCampo(etichetta, costruisci, classeExtra) {
  const label = crea("label", "la-campo" + (classeExtra ? " " + classeExtra : ""));
  label.appendChild(crea("span", "la-campo-label", etichetta));
  label.appendChild(costruisci());
  return label;
}

// ---- Corrispondenze molti-a-molti (R4.4) ----
function laRenderSezioneGruppi(bozza, vers) {
  const sez = crea("section", "la-sezione");
  sez.appendChild(crea("h3", "la-sezione-titolo", "Corrispondenze: quali corsi coprono quali esami"));
  sez.appendChild(crea("p", "la-sezione-sub",
    "Un corso host può coprire più esami di casa, e un esame può richiedere più corsi. Le corrispondenze le decide il tuo ateneo: qui le prepari."));

  if (!vers.corsiHost.length || !vers.esamiCasa.length) {
    sez.appendChild(crea("p", "la-sezione-vuota",
      "Le corrispondenze si creano quando hai almeno un corso host e un esame di casa."));
    return sez;
  }

  vers.gruppi.forEach((g, i) => sez.appendChild(laRigaGruppo(bozza, vers, g, i)));

  // Onestà sui non collegati: niente sparisce in silenzio da una bozza.
  // L'elemento c'è sempre e si aggiorna VIVO al click sulle checkbox
  // (laAggiornaOrfani), come i totali: mai una nota stantia a schermo.
  // Il primo riempimento lo fa laRenderBozza DOPO l'append: qui la sezione
  // non è ancora nel documento e getElementById non la vedrebbe.
  const orfani = crea("p", "la-gruppo-orfani");
  orfani.id = "la-gruppo-orfani";
  orfani.hidden = true;
  sez.appendChild(orfani);

  const aggiungi = crea("button", "btn-secondary la-btn-aggiungi", "＋ Nuova corrispondenza");
  aggiungi.type = "button";
  aggiungi.addEventListener("click", () => {
    vers.gruppi.push({ id: laId(bozza, "g"), corsi: [], esami: [] });
    laTocca(bozza);
    renderLA();
  });
  sez.appendChild(aggiungi);
  return sez;
}

function laRigaGruppo(bozza, vers, gruppo, indice) {
  const box = crea("div", "la-gruppo");
  const testaGruppo = crea("div", "la-gruppo-testa");
  testaGruppo.appendChild(crea("span", "la-gruppo-titolo", `Corrispondenza ${indice + 1}`));
  const rimuovi = crea("button", "la-btn-riga la-btn-rimuovi", "✕");
  rimuovi.type = "button";
  rimuovi.title = "Elimina questa corrispondenza (corsi ed esami restano in bozza)";
  rimuovi.setAttribute("aria-label", `Elimina la corrispondenza ${indice + 1}`);
  rimuovi.addEventListener("click", () => {
    vers.gruppi = vers.gruppi.filter(g => g.id !== gruppo.id);
    laTocca(bozza);
    renderLA();
  });
  testaGruppo.appendChild(rimuovi);
  box.appendChild(testaGruppo);

  const cols = crea("div", "la-gruppo-cols");

  function colonna(titolo, voci, selezionati, etichettaVoce) {
    const fs = document.createElement("fieldset");
    fs.className = "la-gruppo-col";
    const leg = document.createElement("legend");
    leg.textContent = titolo;
    fs.appendChild(leg);
    voci.forEach(v => {
      const lbl = crea("label", "la-gruppo-voce");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = selezionati.includes(v.id);
      cb.addEventListener("change", () => {
        if (cb.checked) { if (!selezionati.includes(v.id)) selezionati.push(v.id); }
        else {
          const idx = selezionati.indexOf(v.id);
          if (idx !== -1) selezionati.splice(idx, 1);
        }
        laTocca(bozza);
        laAggiornaTotali(vers);
        laAggiornaTotaliGruppo(box, vers, gruppo);
        laAggiornaOrfani(vers);
      });
      lbl.appendChild(cb);
      lbl.appendChild(crea("span", null, etichettaVoce(v)));
      fs.appendChild(lbl);
    });
    return fs;
  }

  cols.appendChild(colonna("Corsi host", vers.corsiHost, gruppo.corsi,
    c => (c.nome || "corso senza nome") + (laCorsoAttivo(c) ? "" : ` (${laEtichettaStato(c.stato).replace(/^\S+\s/, "")})`)));
  cols.appendChild(colonna("Esami di casa", vers.esamiCasa, gruppo.esami,
    e => e.nome || "esame senza nome"));
  box.appendChild(cols);

  const totaliEl = crea("p", "la-gruppo-totali");
  totaliEl.className += " la-gruppo-totali-" + gruppo.id;
  box.appendChild(totaliEl);
  laAggiornaTotaliGruppo(box, vers, gruppo);
  return box;
}

// Chi non è ancora in nessuna corrispondenza, riscritto in place.
function laAggiornaOrfani(vers) {
  const el = document.getElementById("la-gruppo-orfani");
  if (!el) return;
  const inGruppi = { corsi: new Set(), esami: new Set() };
  vers.gruppi.forEach(g => {
    g.corsi.forEach(id => inGruppi.corsi.add(id));
    g.esami.forEach(id => inGruppi.esami.add(id));
  });
  const corsiSoli = vers.corsiHost.filter(c => laCorsoAttivo(c) && !inGruppi.corsi.has(c.id) && c.nome);
  const esamiSoli = vers.esamiCasa.filter(e => !inGruppi.esami.has(e.id) && e.nome);
  if (!corsiSoli.length && !esamiSoli.length) { el.hidden = true; return; }
  const pezzi = [];
  if (corsiSoli.length) pezzi.push(`corsi host: ${corsiSoli.map(c => c.nome).join(", ")}`);
  if (esamiSoli.length) pezzi.push(`esami di casa: ${esamiSoli.map(e => e.nome).join(", ")}`);
  el.textContent = `Non ancora in una corrispondenza — ${pezzi.join(" · ")}.`;
  el.hidden = false;
}

function laAggiornaTotaliGruppo(box, vers, gruppo) {
  const el = box.querySelector(".la-gruppo-totali");
  if (!el) return;
  const t = laTotali(vers, gruppo);
  if (!gruppo.corsi.length && !gruppo.esami.length) {
    el.textContent = "Seleziona almeno un corso e un esame.";
    return;
  }
  el.textContent = `${laFormattaNumero(t.ects)} ECTS ↔ ${laFormattaNumero(t.cfu)} CFU. ${laFraseSoglie(t)}`;
}

// I totali globali della versione corrente, riscritti senza rifare il DOM.
function laAggiornaTotali(vers) {
  const el = document.getElementById("la-totali");
  if (!el) return;
  el.innerHTML = "";
  const t = laTotali(vers);
  const riga = crea("div", "la-totali-riga");
  riga.appendChild(crea("span", "la-totali-numero", `${laFormattaNumero(t.ects)} ECTS`));
  riga.appendChild(crea("span", "la-totali-vs", "↔"));
  riga.appendChild(crea("span", "la-totali-numero", `${laFormattaNumero(t.cfu)} CFU`));
  el.appendChild(riga);
  const esclusi = vers.corsiHost.filter(c => !laCorsoAttivo(c)).length;
  const note = [];
  if (esclusi) note.push(`${esclusi} ${esclusi === 1 ? "corso escluso" : "corsi esclusi"} dal totale (non disponibili o sostituiti)`);
  const soglie = laFraseSoglie(t);
  if (soglie) note.push(soglie);
  if (note.length) el.appendChild(crea("p", "la-totali-nota", note.join(". ")));
}

// ---- Checklist pre-invio (R4.6) ----
function laRenderPreInvio(bozza, vers) {
  const sez = crea("section", "la-sezione");
  sez.appendChild(crea("h3", "la-sezione-titolo", "Prima di inviarla al referente"));
  if (!vers.preInvio || typeof vers.preInvio !== "object") {
    vers.preInvio = { linkAperti: false, ectsConfrontati: false };
  }
  const voci = [
    ["linkAperti", "Ho aperto i link dei corsi host: esistono ancora e dicono quello che ho scritto qui."],
    ["ectsConfrontati", "Ho confrontato gli ECTS di ogni corso con la fonte ufficiale dell'ospitante."],
  ];
  voci.forEach(([chiave, testo]) => {
    const lbl = crea("label", "voce-checklist-v2" + (vers.preInvio[chiave] ? " fatta" : ""));
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!vers.preInvio[chiave];
    cb.addEventListener("change", () => {
      vers.preInvio[chiave] = cb.checked;
      laTocca(bozza);
      lbl.classList.toggle("fatta", cb.checked);
    });
    lbl.appendChild(cb);
    lbl.appendChild(crea("span", null, testo));
    sez.appendChild(lbl);
  });
  sez.appendChild(crea("p", "la-sezione-sub",
    "Questa checklist non approva la bozza: serve a non mandare al referente link morti o numeri sbagliati."));
  return sez;
}

// ---- Export (R4.7): stampa/PDF + testo ordinato ----
function laRenderExport(bozza, vers) {
  const sez = crea("section", "la-sezione la-export");
  sez.appendChild(crea("h3", "la-sezione-titolo", "Porta la bozza fuori di qui"));
  const azioni = crea("div", "la-export-azioni");

  const stampa = crea("button", "btn-primary la-btn-piccolo", "🖨 Stampa / salva PDF");
  stampa.type = "button";
  stampa.addEventListener("click", () => {
    window.goatcounter?.count({ path: "la-export-stampa", event: true });
    laStampa(bozza, vers);
  });
  azioni.appendChild(stampa);

  const copia = crea("button", "btn-secondary la-btn-piccolo", "📋 Copia il testo per il referente");
  copia.type = "button";
  copia.addEventListener("click", () => {
    window.goatcounter?.count({ path: "la-export-testo", event: true });
    laCopiaTesto(laTestoExport(bozza, vers), copia);
  });
  azioni.appendChild(copia);
  sez.appendChild(azioni);
  sez.appendChild(crea("p", "la-sezione-sub",
    "Il testo è pensato per una mail al referente/docente (RAM). La stampa è la stessa bozza, ordinata."));
  return sez;
}

function laDescriviCorso(c, indice) {
  const pezzi = [`${indice + 1}. ${c.nome}`];
  if (c.ects !== "" && c.ects !== undefined && c.ects !== null) pezzi.push(`${laFormattaNumero(laNumeroDa(c.ects))} ECTS`);
  if (c.lingua) pezzi.push(c.lingua);
  if (c.semestre) pezzi.push(c.semestre);
  pezzi.push(laEtichettaStato(c.stato).replace(/^\S+\s/, ""));
  if (c.verificataIl) pezzi.push(`verificato il ${laDataBreve(c.verificataIl)}`);
  let testo = pezzi.join(" — ");
  if (laLinkSicuro(c.link)) testo += `\n   ${c.link.trim()}`;
  return testo;
}

function laDescriviEsame(e, indice) {
  const pezzi = [`${indice + 1}. ${e.nome}`];
  if (e.codice) pezzi.push(`cod. ${e.codice}`);
  if (e.cfu !== "" && e.cfu !== undefined && e.cfu !== null) pezzi.push(`${laFormattaNumero(laNumeroDa(e.cfu))} CFU`);
  if (e.nota) pezzi.push(e.nota);
  return pezzi.join(" — ");
}

function laTestoExport(bozza, vers) {
  const m = bozza.meta;
  const corsi = vers.corsiHost.filter(c => c.nome);
  const esami = vers.esamiCasa.filter(e => e.nome);
  const t = laTotali(vers);
  const righe = [];
  righe.push("LEARNING AGREEMENT — BOZZA DI LAVORO (non ufficiale)");
  righe.push(`Meta: ${nomeUniversita(m.universita)}${m.citta ? ` — ${m.citta} (${m.paese})` : ""}`);
  righe.push(`Ateneo di casa: ${window.ATENEO_LABEL || ""}`);
  righe.push(`Versione ${vers.numero} del ${laDataBreve(vers.creataIl)}` +
    (vers.motivo ? ` — motivo: ${laEtichettaMotivo(vers.motivo)}${vers.notaMotivo ? ` (${vers.notaMotivo})` : ""}` : ""));
  righe.push("");
  righe.push("CORSI ALL'ESTERO (host)");
  righe.push(corsi.length ? corsi.map(laDescriviCorso).join("\n") : "(nessuno)");
  righe.push("");
  righe.push("ESAMI DI CASA DA RICONOSCERE");
  righe.push(esami.length ? esami.map(laDescriviEsame).join("\n") : "(nessuno)");
  righe.push("");
  const gruppiPieni = vers.gruppi.filter(g => g.corsi.length || g.esami.length);
  if (gruppiPieni.length) {
    righe.push("CORRISPONDENZE PROPOSTE");
    gruppiPieni.forEach((g, i) => {
      const nomiCorsi = g.corsi.map(id => (vers.corsiHost.find(c => c.id === id) || {}).nome).filter(Boolean);
      const nomiEsami = g.esami.map(id => (vers.esamiCasa.find(e => e.id === id) || {}).nome).filter(Boolean);
      const tg = laTotali(vers, g);
      righe.push(`${i + 1}. ${nomiCorsi.join(" + ") || "—"}  ⇢  ${nomiEsami.join(" + ") || "—"}  (${laFormattaNumero(tg.ects)} ECTS ↔ ${laFormattaNumero(tg.cfu)} CFU)`);
    });
    righe.push("");
  }
  righe.push(`TOTALI: ${laFormattaNumero(t.ects)} ECTS ↔ ${laFormattaNumero(t.cfu)} CFU` +
    (vers.corsiHost.some(c => !laCorsoAttivo(c)) ? " (esclusi i corsi non disponibili o sostituiti)" : ""));
  righe.push("");
  righe.push("Bozza preparata con ErasmusWiz (https://nicorotolo.github.io/erasmuswiz/).");
  righe.push("Il Learning Agreement ufficiale resta nel sistema dell'ateneo (OLA/EWP).");
  righe.push("Verifica sempre corsi, ECTS e disponibilità sulle fonti ufficiali dell'ospitante.");
  return righe.join("\n");
}

function laCopiaTesto(testo, btn) {
  const fatto = () => {
    const originale = btn.textContent;
    btn.textContent = "✅ Copiato!";
    setTimeout(() => { btn.textContent = originale; }, 2200);
  };
  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = testo;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    ta.remove();
    if (ok) fatto();
    else window.prompt("Copia il testo qui sotto (Ctrl+C):", testo);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(testo).then(fatto).catch(fallback);
  } else fallback();
}

// Stampa: finestra dedicata costruita con API sicure (textContent), niente
// HTML arbitrario. Chi vuole il PDF usa "Salva come PDF" del browser.
function laStampa(bozza, vers) {
  const w = window.open("", "_blank");
  if (!w) {
    _laMessaggio = "Il browser ha bloccato la finestra di stampa: consenti i popup per questo sito e riprova.";
    renderLA();
    return;
  }
  const d = w.document;
  d.title = "Learning Agreement — bozza di lavoro (non ufficiale)";
  const metaCharset = d.createElement("meta");
  metaCharset.setAttribute("charset", "utf-8");
  d.head.appendChild(metaCharset);
  const style = d.createElement("style");
  style.textContent = [
    "body { font: 14px/1.5 'Plus Jakarta Sans', system-ui, sans-serif; color: #1E1B2E; margin: 32px; }",
    "h1 { font-size: 20px; margin: 0 0 2px; }",
    "h2 { font-size: 15px; margin: 22px 0 8px; border-bottom: 1px solid #D6D1EA; padding-bottom: 4px; }",
    ".sub { color: #4B4560; margin: 0 0 4px; }",
    ".avviso { background: #FEF3C7; border: 1px solid #FDE68A; padding: 8px 12px; border-radius: 8px; margin: 14px 0; }",
    "table { border-collapse: collapse; width: 100%; }",
    "th, td { border: 1px solid #D6D1EA; padding: 6px 8px; text-align: left; font-size: 13px; vertical-align: top; }",
    "th { background: #F3F1FA; }",
    ".fine { color: #4B4560; font-size: 12px; margin-top: 24px; }",
  ].join("\n");
  d.head.appendChild(style);

  const el = (tag, testo, cls) => {
    const e = d.createElement(tag);
    if (testo) e.textContent = testo;
    if (cls) e.className = cls;
    return e;
  };

  const m = bozza.meta;
  d.body.appendChild(el("h1", "Learning Agreement — bozza di lavoro"));
  d.body.appendChild(el("p", `${nomeUniversita(m.universita)}${m.citta ? ` — ${m.citta} (${m.paese})` : ""} · Ateneo di casa: ${window.ATENEO_LABEL || ""}`, "sub"));
  d.body.appendChild(el("p", `Versione ${vers.numero} del ${laDataBreve(vers.creataIl)}` +
    (vers.motivo ? ` — motivo: ${laEtichettaMotivo(vers.motivo)}${vers.notaMotivo ? ` (${vers.notaMotivo})` : ""}` : ""), "sub"));
  d.body.appendChild(el("p", "⚠️ Documento NON ufficiale: è una bozza di lavoro. Il Learning Agreement ufficiale resta nel sistema dell'ateneo (OLA/EWP).", "avviso"));

  function tabella(titolo, intestazioni, righe) {
    d.body.appendChild(el("h2", titolo));
    if (!righe.length) { d.body.appendChild(el("p", "(nessuna voce)", "sub")); return; }
    const t = d.createElement("table");
    const tr = d.createElement("tr");
    intestazioni.forEach(h => tr.appendChild(el("th", h)));
    t.appendChild(tr);
    righe.forEach(cells => {
      const r = d.createElement("tr");
      cells.forEach(c => r.appendChild(el("td", c)));
      t.appendChild(r);
    });
    d.body.appendChild(t);
  }

  tabella("Corsi all'estero (host)",
    ["Corso", "ECTS", "Lingua", "Semestre", "Stato", "Verificato il", "Link"],
    vers.corsiHost.filter(c => c.nome).map(c => [
      c.nome,
      c.ects === "" || c.ects === undefined ? "" : laFormattaNumero(laNumeroDa(c.ects)),
      c.lingua || "", c.semestre || "",
      laEtichettaStato(c.stato).replace(/^\S+\s/, ""),
      c.verificataIl ? laDataBreve(c.verificataIl) : "",
      laLinkSicuro(c.link) || "",
    ]));

  tabella("Esami di casa da riconoscere",
    ["Esame", "Codice", "CFU", "Nota"],
    vers.esamiCasa.filter(e => e.nome).map(e => [
      e.nome, e.codice || "",
      e.cfu === "" || e.cfu === undefined ? "" : laFormattaNumero(laNumeroDa(e.cfu)),
      e.nota || "",
    ]));

  const gruppiPieni = vers.gruppi.filter(g => g.corsi.length || g.esami.length);
  tabella("Corrispondenze proposte",
    ["Corsi host", "Esami di casa", "ECTS ↔ CFU"],
    gruppiPieni.map(g => {
      const nomiCorsi = g.corsi.map(id => (vers.corsiHost.find(c => c.id === id) || {}).nome).filter(Boolean).join(" + ");
      const nomiEsami = g.esami.map(id => (vers.esamiCasa.find(e => e.id === id) || {}).nome).filter(Boolean).join(" + ");
      const tg = laTotali(vers, g);
      return [nomiCorsi || "—", nomiEsami || "—", `${laFormattaNumero(tg.ects)} ↔ ${laFormattaNumero(tg.cfu)}`];
    }));

  const t = laTotali(vers);
  d.body.appendChild(el("h2", "Totali"));
  d.body.appendChild(el("p", `${laFormattaNumero(t.ects)} ECTS ↔ ${laFormattaNumero(t.cfu)} CFU` +
    (vers.corsiHost.some(c => !laCorsoAttivo(c)) ? " (esclusi i corsi non disponibili o sostituiti)" : "")));
  const soglie = laFraseSoglie(t);
  if (soglie) d.body.appendChild(el("p", soglie, "sub"));

  d.body.appendChild(el("p",
    `Bozza preparata con ErasmusWiz il ${laDataBreve(new Date().toISOString())}. ` +
    "Verifica sempre corsi, ECTS e disponibilità sulle fonti ufficiali dell'ospitante.", "fine"));

  w.focus();
  w.print();
}

// ---- Versioni precedenti (R4.5): fotografie congelate, in sola lettura ----
function laRenderStoria(cont, bozza) {
  const precedenti = bozza.versioni.slice(0, -1);
  if (!precedenti.length) return;
  const det = document.createElement("details");
  det.className = "la-storia";
  det.open = _laStoriaAperta;
  det.addEventListener("toggle", () => { _laStoriaAperta = det.open; });
  const sum = document.createElement("summary");
  sum.className = "la-storia-toggle";
  sum.textContent = `Versioni precedenti (${precedenti.length}) ▸`;
  det.appendChild(sum);

  precedenti.slice().reverse().forEach(v => {
    const box = crea("div", "la-storia-versione");
    const testa = crea("p", "la-storia-testa",
      `Versione ${v.numero} — ${laDataBreve(v.creataIl)}` +
      (v.motivo ? ` — ${laEtichettaMotivo(v.motivo)}${v.notaMotivo ? ` (${v.notaMotivo})` : ""}` : " — prima bozza"));
    box.appendChild(testa);
    const corsi = v.corsiHost.filter(c => c.nome);
    const esami = v.esamiCasa.filter(e => e.nome);
    if (corsi.length) box.appendChild(crea("p", "la-storia-dett",
      "Corsi host: " + corsi.map(c => `${c.nome} (${laEtichettaStato(c.stato).replace(/^\S+\s/, "")})`).join(" · ")));
    if (esami.length) box.appendChild(crea("p", "la-storia-dett",
      "Esami di casa: " + esami.map(e => e.nome).join(" · ")));
    const t = laTotali(v);
    box.appendChild(crea("p", "la-storia-dett",
      `Totali: ${laFormattaNumero(t.ects)} ECTS ↔ ${laFormattaNumero(t.cfu)} CFU`));
    det.appendChild(box);
  });
  cont.appendChild(det);
}

// ============================================================
// IDONEITÀ v2
// ============================================================
// ============================================================
// BANNER "dati in verifica" (DISEGNO_UX.md §8)
// Pilotato da BANDO_INFO.inVerifica (flag nei dati, niente hardcoding).
// ============================================================
function renderBannerVerifica() {
  const testo = "⚠️ Dati in corso di verifica sul bando ufficiale — usali come traccia, non come fonte.";
  const inVerifica = !!(window.BANDO_INFO && window.BANDO_INFO.inVerifica);
  ["banner-verifica-idoneita", "banner-verifica-checklist"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (inVerifica) {
      el.textContent = testo;
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
}

// ============================================================
// IL TRADUTTORE — requisiti a 3 registri (DISEGNO_UX.md §4)
// "in chiaro" (spiegazione+azione) / "cosa dice il bando" (citazione+fonte,
// espandibile) / auto-verifica ("✓ Lo rispetto", salvata in ZAINO.autoverifica).
// Retrocompatibile: se spiegazione/azione/citazione/fonte mancano, si mostra
// il testo attuale (descrizione) senza rompere i dati esistenti.
// ============================================================
function renderIdoneita() {
  const cont = document.getElementById("lista-requisiti-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.autoverifica) ZAINO.autoverifica = {};

  const requisiti = REQUISITI_BANDO || [];

  const esitoEl = document.getElementById("idoneita-esito");
  if (esitoEl) {
    const tuttiVerificati = requisiti.length > 0 && requisiti.every(r => ZAINO.autoverifica[r.id]);
    if (tuttiVerificati) {
      esitoEl.textContent = "Sembri idoneo ✅ — fa sempre fede il bando ufficiale.";
      esitoEl.style.display = "";
    } else {
      esitoEl.style.display = "none";
    }
  }

  requisiti.forEach(req => {
    const verificato = !!ZAINO.autoverifica[req.id];
    const card = crea("div", `requisito-v2 ${verificato ? "requisito-v2--ok" : "requisito-v2--daverificare"}`);

    const testa = crea("div", "requisito-v2-testa");
    testa.appendChild(crea("div", "requisito-v2-titolo", req.titolo));
    testa.appendChild(crea("span", "requisito-v2-semaforo", verificato ? "✅" : "🟡"));
    card.appendChild(testa);

    card.appendChild(crea("div", "requisito-v2-valore", req.valore));

    // Registro 1 — "in chiaro": spiegazione umana (fallback: descrizione attuale)
    card.appendChild(crea("div", "requisito-v2-desc", req.spiegazione || req.descrizione));
    if (req.azione) {
      card.appendChild(crea("div", "requisito-v2-azione", `→ ${req.azione}`));
    }

    // Registro 2 — "Cosa dice il bando" (espandibile), solo se c'è una citazione/fonte
    if (req.citazione || req.fonte) {
      const dettagli = document.createElement("details");
      dettagli.className = "requisito-v2-bando";
      const sommario = document.createElement("summary");
      sommario.textContent = "Cosa dice il bando ▸";
      dettagli.appendChild(sommario);
      if (req.citazione) dettagli.appendChild(crea("blockquote", "requisito-v2-citazione", req.citazione));
      if (req.fonte) dettagli.appendChild(crea("div", "requisito-v2-fonte", req.fonte));
      card.appendChild(dettagli);
    }

    // Registro 3 — auto-verifica: "✓ Lo rispetto"
    if (req.id) {
      const label = document.createElement("label");
      label.className = "requisito-v2-autoverifica";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!ZAINO.autoverifica[req.id];
      cb.addEventListener("change", () => {
        ZAINO.autoverifica[req.id] = cb.checked;
        salvaZaino(ZAINO);
        renderIdoneita();
        renderMissione(); // stepper, missione, settimana e stazioni derivano tutti da qui
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(" Lo rispetto"));
      card.appendChild(label);
    }

    cont.appendChild(card);
  });
}

// ============================================================
// ONBOARDING — 3 domande + valore immediato (UX1)
// ============================================================
const CHIAVE_ONBOARDING_STEP = "ew-onboarding-riprendi-step";

function areaDominanteDipartimento(dipartimento) {
  const conteggi = {};
  (METE || []).forEach(m => {
    if (m.dipartimentoCf !== dipartimento) return;
    m.areeDisciplinari.forEach(a => { conteggi[a.codice] = (conteggi[a.codice] || 0) + 1; });
  });
  let migliore = null, max = 0;
  Object.keys(conteggi).forEach(cod => {
    if (conteggi[cod] > max) { max = conteggi[cod]; migliore = cod; }
  });
  return migliore;
}

function prossimaScadenzaInfo() {
  // Nell'onboarding annunciamo solo scadenze su cui si può agire.
  return prossimaScadenzaAzionabile();
}

// ============================================================
// MAPPA D'EUROPA (Fase C2) — motore condiviso benvenuto + home
// Geometria in js/dati-mappa-europa.js (EUROPA_MAPPA), coordinate
// PRECALCOLATE in js/dati-coordinate.js (COORDINATE_CITTA).
// Regole (PLAN-FASE-B): pin = <button> in overlay HTML sopra l'SVG,
// cluster per città identica E per distanza, hover solo desktop,
// niente dato nascosto in silenzio (nota copertura + elenco mete).
// ============================================================
function coordDiMeta(m) {
  if (!window.COORDINATE_CITTA) return null;
  return COORDINATE_CITTA.citta[(m.citta || "") + "|" + (m.paese || "")] || null;
}

// Solo per i 2 pin ateneo (le mete usano x/y precalcolate nei dati).
function proiettaXY(lat, lon) {
  const P = COORDINATE_CITTA.PROIEZIONE;
  const cos0 = Math.cos(P.parallelo0 * Math.PI / 180);
  const sx = P.viewBoxW / ((P.lonMax - P.lonMin) * cos0);
  return [(lon - P.lonMin) * cos0 * sx, (P.latMax - lat) * sx];
}
const CITTA_ATENEO = {
  cafoscari: { citta: "Venezia", lat: 45.44, lon: 12.33 },
  sapienza:  { citta: "Roma",    lat: 41.90, lon: 12.50 },
};

function mappaCostruisci(cont) {
  if (!cont || !window.EUROPA_MAPPA) return null;
  cont.innerHTML = "";
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", EUROPA_MAPPA.viewBox);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Mappa d'Europa con le destinazioni Erasmus");
  EUROPA_MAPPA.paesi.forEach(p => {
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", p.d);
    path.setAttribute("class", p.iso === "ITA" ? "mappa-terra mappa-terra-casa" : "mappa-terra");
    svg.appendChild(path);
  });
  cont.appendChild(svg);
  const layer = crea("div", "mappa-pin-layer");
  cont.appendChild(layer);
  return layer;
}

function mappaClusterizza(mete, cont) {
  // 1) stessa coppia città+paese = coordinate identiche → un gruppo
  const perCitta = new Map();
  mete.forEach(m => {
    const c = coordDiMeta(m);
    if (!c || c.fuori || c.x === undefined) return;
    const k = m.citta + "|" + m.paese;
    if (!perCitta.has(k)) perCitta.set(k, { x: c.x, y: c.y, citta: m.citta, paese: m.paese, items: [] });
    perCitta.get(k).items.push(m);
  });
  // 2) fusione dei gruppi sotto soglia di distanza (unità viewBox,
  //    scalate sulla larghezza resa: su schermi stretti si fonde di più)
  const P = COORDINATE_CITTA.PROIEZIONE;
  const soglia = 30 * (P.viewBoxW / Math.max(cont.clientWidth || 320, 280));
  const out = [];
  perCitta.forEach(g => {
    const vicino = out.find(o => Math.hypot(o.x - g.x, o.y - g.y) < soglia);
    if (vicino) vicino.items = vicino.items.concat(g.items);
    else out.push({ x: g.x, y: g.y, citta: g.citta, paese: g.paese, items: g.items.slice() });
  });
  return out;
}

function mappaTooltip() { return document.getElementById("mappa-tooltip"); }
function mappaMostraTooltip(cl, pin) {
  const t = mappaTooltip();
  // Solo desktop con mouse: su touch il tap apre direttamente il dettaglio.
  if (!t || !window.matchMedia("(hover: hover) and (min-width: 760px)").matches) return;
  // Il tooltip vive nel benvenuto: per i pin di altre mappe non si mostra.
  if (!t.parentElement.contains(pin)) return;
  t.innerHTML = "";
  const h = crea("p", "mappa-tooltip-titolo");
  const dove = crea("p", "mappa-tooltip-dove");
  if (cl.items.length === 1) {
    const m = cl.items[0];
    h.textContent = nomeUniversita(m.universita);
    dove.textContent = `${m.citta} · ${m.paese}`;
    t.appendChild(h); t.appendChild(dove);
    const chips = crea("p", "mappa-tooltip-chips");
    const pezzi = [];
    if (m.requisitoLingua && m.requisitoLingua.length) {
      pezzi.push(m.requisitoLingua.map(r => `${r.lingua} ${r.livello}`).join(" / "));
    } else pezzi.push("Lingua da verificare");
    const gruppo = (typeof trovaGruppoBorsa === "function") ? trovaGruppoBorsa(m) : null;
    if (gruppo) pezzi.push(`~€${gruppo.importoMensile}/mese (stima)`);
    chips.textContent = pezzi.join(" · ");
    t.appendChild(chips);
  } else {
    h.textContent = `${cl.items.length} mete vicino a ${cl.citta}`;
    dove.textContent = "Clicca per vederle tutte";
    t.appendChild(h); t.appendChild(dove);
  }
  const lx = parseFloat(pin.style.left), ty = parseFloat(pin.style.top);
  t.style.left = Math.min(Math.max(lx, 18), 82) + "%";
  t.style.top = ty + "%";
  t.classList.toggle("sotto", ty < 30);
  t.hidden = false;
}
function mappaNascondiTooltip() { const t = mappaTooltip(); if (t) t.hidden = true; }

// Cluster → elenco nel modal dettaglio già esistente (stessa chiusura/Escape).
function apriListaCluster(cl) {
  const overlay = document.getElementById("meta-overlay");
  const corpo   = document.getElementById("meta-modal-corpo");
  if (!overlay || !corpo) return;
  corpo.innerHTML = "";
  corpo.appendChild(crea("h2", "dett-titolo", `${cl.items.length} mete vicino a ${cl.citta} (${cl.paese})`));
  const ul = crea("ul", "mappa-cluster-lista");
  cl.items.forEach(m => {
    const li = crea("li");
    const b = crea("button", "mappa-cluster-voce");
    b.type = "button";
    const nome = crea("span", "mappa-cluster-nome", nomeUniversita(m.universita));
    const dove = crea("span", "mappa-cluster-dove", `${m.citta} · ${m.paese}`);
    b.appendChild(nome); b.appendChild(dove);
    b.addEventListener("click", () => apriDettaglioMeta(m));
    li.appendChild(b); ul.appendChild(li);
  });
  corpo.appendChild(ul);
  overlay.style.display = "flex";
  document.body.classList.add("no-scroll");
}

function mappaRenderPins(layer, mete, opts) {
  if (!layer) return;
  opts = opts || {};
  layer.innerHTML = "";
  const P = COORDINATE_CITTA.PROIEZIONE;
  const cont = layer.parentElement;
  mappaClusterizza(mete, cont).forEach((cl, i) => {
    const n = cl.items.length;
    const b = crea("button",
      "mappa-pin" + (n > 1 ? " mappa-pin-cluster" : "") +
      (opts.evidenzia ? " evidenzia" : "") +
      (opts.stellate && n === 1 && opts.stellate.includes(cl.items[0].id) ? " mappa-pin-stella" : ""));
    b.type = "button";
    b.style.left = (cl.x / P.viewBoxW * 100) + "%";
    b.style.top  = (cl.y / P.viewBoxH * 100) + "%";
    const dot = crea("span", "punto");
    if (n > 1) dot.textContent = String(n);
    if (opts.evidenzia) dot.style.animationDelay = Math.min(i, 25) * 30 + "ms";
    b.appendChild(dot);
    b.setAttribute("aria-label", n === 1
      ? `${nomeUniversita(cl.items[0].universita)}, ${cl.citta} (${cl.paese}) — apri il dettaglio`
      : `${n} mete vicino a ${cl.citta} — apri l'elenco`);
    b.addEventListener("mouseenter", () => mappaMostraTooltip(cl, b));
    b.addEventListener("mouseleave", mappaNascondiTooltip);
    b.addEventListener("focus", () => mappaMostraTooltip(cl, b));
    b.addEventListener("blur", mappaNascondiTooltip);
    b.addEventListener("click", () => {
      mappaNascondiTooltip();
      if (n === 1) apriDettaglioMeta(cl.items[0]);
      else apriListaCluster(cl);
    });
    layer.appendChild(b);
  });
}

// Onestà: quante mete NON sono sulla mappa (fuori inquadratura o senza
// coordinate). Mai nascoste in silenzio: il riferimento è l'elenco mete.
function mappaNotaCopertura(el, mete) {
  if (!el) return;
  let fuori = 0, senza = 0;
  mete.forEach(m => {
    const c = coordDiMeta(m);
    if (!c) senza++;
    else if (c.fuori) fuori++;
  });
  const tot = fuori + senza;
  if (!tot) { el.hidden = true; return; }
  const pezzi = [];
  if (fuori) pezzi.push(`${fuori} fuori dall'inquadratura (es. Canarie)`);
  if (senza) pezzi.push(`${senza} senza posizione`);
  el.textContent = `${tot} ${tot === 1 ? "meta non è" : "mete non sono"} sulla mappa — ${pezzi.join(", ")}: le trovi tutte nell'elenco delle mete.`;
  el.hidden = false;
}

// Stato per il ri-cluster al resize (la soglia dipende dalla larghezza resa).
let _mappaBenv = null, _mappaHome = null;
let _mappaResizeRaf = null;
window.addEventListener("resize", () => {
  if (_mappaResizeRaf) cancelAnimationFrame(_mappaResizeRaf);
  _mappaResizeRaf = requestAnimationFrame(() => {
    if (_mappaBenv && _mappaBenv.mete) mappaRenderPins(_mappaBenv.layer, _mappaBenv.mete, _mappaBenv.opts);
    if (_mappaHome && _mappaHome.mete) mappaRenderPins(_mappaHome.layer, _mappaHome.mete, _mappaHome.opts);
    if (_mappaMete && _mappaMete.mete) mappaRenderPins(_mappaMete.layer, _mappaMete.mete, _mappaMete.opts);
  });
});

// Mappa compatta nella home profilata — SOTTO missione/countdown.
function renderMappaHome() {
  const card = document.getElementById("card-mappa-home");
  if (!card) return;
  if (!ZAINO.onboardingFatto || !ZAINO.profilo || !window.EUROPA_MAPPA || !window.COORDINATE_CITTA) {
    card.style.display = "none";
    return;
  }
  card.style.display = "";
  const mete = (METE || []).filter(m => m.areeDisciplinari.some(a => a.codice === ZAINO.profilo.area));
  if (!_mappaHome) {
    const layer = mappaCostruisci(document.getElementById("mappa-home"));
    if (!layer) { card.style.display = "none"; return; }
    _mappaHome = { layer };
    const vai = document.getElementById("mappa-vai-elenco");
    if (vai) vai.addEventListener("click", e => { e.preventDefault(); vaiA("mete"); });
  }
  _mappaHome.mete = mete;
  _mappaHome.opts = { stellate: ZAINO.metePreferite || [] };
  mappaRenderPins(_mappaHome.layer, mete, _mappaHome.opts);
  mappaNotaCopertura(document.getElementById("mappa-nota-home"), mete);
}

// ============================================================
// BENVENUTO (primo contatto) — il flusso a 3 domande, sulla mappa.
// Sostituisce l'overlay onboarding (bug P0.1: su mobile le prime
// opzioni erano irraggiungibili). Stesse domande, stessa uscita.
// ============================================================
function benvSetPasso(n) {
  document.querySelectorAll(".benvenuto-passo").forEach(p => {
    const k = Number(p.dataset.passo);
    p.dataset.attivo = String(k === n);
    p.dataset.fatto = String(k < n);
  });
}
function benvFumetto(testo, posa) {
  const f = document.getElementById("benvenuto-fumetto");
  if (f) f.textContent = testo;
  const wiz = document.getElementById("benvenuto-wiz");
  if (wiz && posa) wiz.src = `img/mascotte/wiz-${posa}.webp`;
}

function benvPassoAteneo() {
  benvSetPasso(1);
  benvFumetto("Ciao! Sono Wiz. Dove studi?", "saluto");
  const layer = _mappaBenv && _mappaBenv.layer;
  if (layer) {
    layer.innerHTML = "";
    const P = COORDINATE_CITTA.PROIEZIONE;
    // Dal REGISTRO, non da ATENEI: qui si sceglie DOVE si studia, quindi vanno
    // mostrati anche gli atenei che R1.5 non ha caricato. In ATENEI c'e' solo
    // quello attivo, e un pin solo non sarebbe una scelta.
    Object.keys(ATENEI_REGISTRO).forEach(k => {
      const a = ATENEI_REGISTRO[k];
      if (!a.disponibile || !CITTA_ATENEO[k]) return;
      const c = CITTA_ATENEO[k];
      const [x, y] = proiettaXY(c.lat, c.lon);
      const b = crea("button", "mappa-pin mappa-pin-ateneo");
      b.type = "button";
      b.style.left = (x / P.viewBoxW * 100) + "%";
      b.style.top  = (y / P.viewBoxH * 100) + "%";
      b.setAttribute("aria-label", `${a.label} (${c.citta}) — scegli`);
      b.appendChild(crea("span", "anello"));
      b.appendChild(crea("span", "punto"));
      b.appendChild(crea("span", "mappa-pin-etichetta", c.citta));
      b.addEventListener("click", () => benvScegliAteneo(k));
      layer.appendChild(b);
    });
  }
  _mappaBenv.mete = null; // niente ri-cluster al resize in questo passo
  // Scelte ridondanti sotto la mappa (accessibilità e chiarezza)
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  Object.keys(ATENEI_REGISTRO).forEach(k => {
    const a = ATENEI_REGISTRO[k];
    if (!a.disponibile) return;
    const btn = crea("button", "benvenuto-scelta", a.label);
    btn.type = "button";
    btn.addEventListener("click", () => benvScegliAteneo(k));
    zona.appendChild(btn);
  });
}

function benvScegliAteneo(k) {
  if (k !== window.ATENEO_ATTIVO) {
    // I dati sono per-ateneo: si salva la scelta e si ricarica al passo 2.
    try {
      localStorage.setItem("erasmuswiz_ateneo", k);
      sessionStorage.setItem(CHIAVE_ONBOARDING_STEP, "2");
    } catch (e) {}
    location.reload();
    return;
  }
  benvPassoFacolta();
}

function benvPassoFacolta() {
  benvSetPasso(2);
  benvFumetto("Bene! E cosa studi?", "pensieroso");
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  const visti = [];
  (METE || []).forEach(m => {
    if (m.dipartimentoCf && !visti.includes(m.dipartimentoCf)) visti.push(m.dipartimentoCf);
  });
  visti.forEach(dip => {
    const btn = crea("button", "benvenuto-scelta", dip);
    btn.type = "button";
    btn.addEventListener("click", () => {
      window._onboardingDipartimento = dip;
      window._onboardingArea = areaDominanteDipartimento(dip);
      benvPassoLivello(dip);
    });
    zona.appendChild(btn);
  });
}

function benvPassoLivello(dip) {
  // Facoltà e livello sono lo stesso passo 2 ("Cosa studi"): il passo 3
  // è delle lingue (PLAN.md §5.2).
  benvSetPasso(2);
  // Le mete della facoltà si ACCENDONO sulla mappa (il momento-firma).
  const mete = (METE || []).filter(m => m.dipartimentoCf === dip);
  benvFumetto(`${mete.length} mete ti aspettano. Guarda la mappa!`, "esulta");
  if (_mappaBenv && _mappaBenv.layer) {
    _mappaBenv.mete = mete;
    _mappaBenv.opts = { evidenzia: true };
    mappaRenderPins(_mappaBenv.layer, mete, _mappaBenv.opts);
  }
  mappaNotaCopertura(document.getElementById("mappa-nota-benvenuto"), mete);
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea("p", "benvenuto-sotto-domanda",
    "Tocca un puntino per l'anteprima. E tu a che punto sei?"));
  const wrap = crea("div", "benvenuto-scelte-riga");
  [["L", "Triennale"], ["LM", "Magistrale"]].forEach(([liv, label]) => {
    const btn = crea("button", "benvenuto-scelta", label);
    btn.type = "button";
    btn.addEventListener("click", () => benvPassoLingue(liv));
    wrap.appendChild(btn);
  });
  zona.appendChild(wrap);
}

// Passo 3 — lingue e livello CEFR, SALTABILE (PLAN.md §5.2). Le lingue
// proposte vengono dai dati delle mete (lingueDaiDati), mai hardcoded;
// senza lingue il percorso parte comunque e si aggiungono dal Profilo.
function benvPassoLingue(livello) {
  benvSetPasso(3);
  benvFumetto("Ultima cosa: che lingue parli? Puoi anche saltare.", "pensieroso");
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea("p", "benvenuto-sotto-domanda",
    "Con le lingue le mete si ordinano per compatibilità. Le cambi quando vuoi dal Profilo."));

  const lingue = lingueDaiDati();
  const righe  = [];
  const wrap   = crea("div", "benvenuto-lingue");
  for (let i = 0; i < 2; i++) {
    const riga = crea("div", "benvenuto-riga-lingua");
    const selLingua = document.createElement("select");
    selLingua.setAttribute("aria-label", `Lingua ${i + 1}`);
    const vuota = document.createElement("option");
    vuota.value = ""; vuota.textContent = "— lingua —";
    selLingua.appendChild(vuota);
    lingue.forEach(l => {
      const o = document.createElement("option");
      o.value = o.textContent = l;
      selLingua.appendChild(o);
    });
    const selLivello = document.createElement("select");
    selLivello.setAttribute("aria-label", `Livello lingua ${i + 1}`);
    SCALA_LINGUE.forEach(liv => {
      const o = document.createElement("option");
      o.value = o.textContent = liv;
      selLivello.appendChild(o);
    });
    selLivello.value = "B1";
    riga.appendChild(selLingua);
    riga.appendChild(selLivello);
    wrap.appendChild(riga);
    righe.push({ selLingua, selLivello });
  }
  zona.appendChild(wrap);

  const bottoni = crea("div", "benvenuto-scelte-riga");
  const btnOk = crea("button", "benvenuto-scelta", "Fatto ✓");
  btnOk.type = "button";
  btnOk.addEventListener("click", () => {
    const scelte = righe
      .filter(r => r.selLingua.value)
      .map(r => ({ lingua: r.selLingua.value, livello: r.selLivello.value, certificata: false }));
    completaOnboarding(livello, scelte);
  });
  const btnSalta = crea("button", "benvenuto-scelta", "Salta per ora");
  btnSalta.type = "button";
  btnSalta.addEventListener("click", () => completaOnboarding(livello, []));
  bottoni.appendChild(btnOk);
  bottoni.appendChild(btnSalta);
  zona.appendChild(bottoni);
}

function completaOnboarding(livello, lingue) {
  const area = window._onboardingArea;
  const dip  = window._onboardingDipartimento;
  // La facoltà scelta si salva nel profilo (P1.5): lo strip del tab Mete la
  // mostra al posto del codice ISCED grezzo. Zaini vecchi senza questo campo
  // hanno il fallback sul nome dell'area (nomeAreaProfilo).
  ZAINO.profilo = { area, dipartimento: dip, livello, lingue: lingue || [] };
  ZAINO.onboardingFatto = true;
  salvaZaino(ZAINO);
  // Il form del Profilo si precompila all'avvio: dopo l'onboarding va
  // riallineato, o mostrerebbe campi vuoti fino al prossimo reload.
  precompilaFormV2();

  const nMete = (METE || []).filter(m => m.areeDisciplinari.some(a => a.codice === area)).length;
  const prossima = prossimaScadenzaInfo();
  benvFumetto("Fatto! Il tuo percorso è pronto.", "saluto");
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea("h2", "benvenuto-landing-titolo",
    `Per te ci sono ${nMete} ${nMete === 1 ? "meta" : "mete"} a ${dip}`));
  let dett = "";
  if (prossima) {
    const giorni = Math.ceil((new Date(prossima.data) - new Date()) / 86400000);
    dett = `La prossima scadenza è ${prossima.cosa}, tra ${giorni} ${giorni === 1 ? "giorno" : "giorni"}.`;
  } else if (candidatureChiuse()) {
    const anno = (window.BANDO_INFO && BANDO_INFO.annoAccademico) || "";
    dett = `Il bando ${anno} è chiuso: il prossimo esce in genere tra dicembre e gennaio. Intanto puoi esplorare le mete con calma.`;
  }
  if (dett) zona.appendChild(crea("p", "benvenuto-landing-dettaglio", dett));
  const btn = crea("button", "btn-primary benvenuto-btn-inizia", "Inizia il percorso →");
  btn.type = "button";
  btn.addEventListener("click", () => {
    renderHome();
    renderMete();
    renderMissione();
    renderMappaHome();
    window.scrollTo(0, 0);
  });
  zona.appendChild(btn);
}

// ============================================================
// SCENA D'INGRESSO (R2.1, PLAN.md §5.1 — decisione di Nicola 16/07:
// CTA "Inizia il tuo percorso"). Promessa concreta dentro una scena
// emozionale: inchiostro profondo, rotte d'oro LENTE, zero pin nel primo
// viewport. Il flusso a 3 domande parte al clic sul CTA. Le rotte sono
// decorative: partono dalle due città-ateneo e arrivano su città già
// geocodificate nei DATI (nessuna coordinata inventata nel codice);
// `prefers-reduced-motion` le ferma (regola globale), Page Visibility
// le mette in pausa quando la scheda non si vede.
// ============================================================
const CITTA_ROTTE_SCENA = [
  "Parigi|Francia", "Madrid|Spagna", "Berlino|Germania",
  "Vienna|Austria", "Lisbona|Portogallo", "Stoccolma|Svezia",
];

function mappaRotteScena() {
  const cont = document.getElementById("mappa-benvenuto");
  const svg  = cont && cont.querySelector("svg");
  if (!svg || !window.COORDINATE_CITTA) return;
  const NS = "http://www.w3.org/2000/svg";
  const partenze = Object.keys(CITTA_ATENEO)
    .map(k => proiettaXY(CITTA_ATENEO[k].lat, CITTA_ATENEO[k].lon));
  let i = 0;
  CITTA_ROTTE_SCENA.forEach(chiave => {
    if (i >= 6) return; // massimo 4-6 rotte (PLAN §5.1)
    const c = COORDINATE_CITTA.citta[chiave];
    if (!c || c.fuori || c.x === undefined) return;
    const [x1, y1] = partenze[i % partenze.length];
    // Curva morbida: controllo a metà strada, alzato in proporzione alla
    // distanza — le rotte "volano", non tagliano dritto.
    const cx = (x1 + c.x) / 2;
    const cy = Math.min(y1, c.y) - Math.hypot(c.x - x1, c.y - y1) * 0.18;
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${c.x} ${c.y}`);
    p.setAttribute("class", "rotta-oro");
    p.style.animationDelay = (i * 1.2) + "s";
    svg.appendChild(p);
    i++;
  });
}

function mappaRimuoviRotte() {
  document.querySelectorAll("#mappa-benvenuto .rotta-oro").forEach(p => p.remove());
}

function aggiornaPausaScena() {
  document.getElementById("mappa-benvenuto")
    ?.classList.toggle("scena-pausa", document.hidden);
}

function benvScena() {
  const benv = document.getElementById("home-benvenuto");
  const wrap = document.getElementById("benvenuto-cta-wrap");
  const btn  = document.getElementById("benvenuto-inizia");
  // Markup della scena assente: dritti alle domande, nessun vicolo cieco.
  if (!benv || !wrap || !btn) { benvPassoAteneo(); return; }
  benv.classList.add("modo-scena");
  wrap.hidden = false;
  mappaRotteScena();
  document.addEventListener("visibilitychange", aggiornaPausaScena);
  aggiornaPausaScena();
  btn.addEventListener("click", () => {
    benv.classList.remove("modo-scena");
    wrap.hidden = true;
    mappaRimuoviRotte();
    document.removeEventListener("visibilitychange", aggiornaPausaScena);
    benvPassoAteneo();
    // Il focus segue l'azione: dritto sulla prima scelta (accessibilità).
    document.querySelector("#benvenuto-scelte .benvenuto-scelta")?.focus();
  }, { once: true });
}

function initOnboarding() {
  const benv = document.getElementById("home-benvenuto");
  if (!benv || ZAINO.onboardingFatto) return;
  const layer = mappaCostruisci(document.getElementById("mappa-benvenuto"));
  if (!layer) return; // dati mappa assenti: restano le scelte testuali
  _mappaBenv = { layer };

  let stepRipresa = null;
  try { stepRipresa = sessionStorage.getItem(CHIAVE_ONBOARDING_STEP); sessionStorage.removeItem(CHIAVE_ONBOARDING_STEP); } catch (e) {}
  // Chi torna dal cambio ateneo stava GIÀ rispondendo: niente scena, si
  // riprende dal passo 2. La scena è solo per il primo contatto.
  if (stepRipresa === "2") benvPassoFacolta();
  else benvScena();
}

// ============================================================
// PROFILO v2
// ============================================================
function popolaAreeV2() {
  const sel = document.getElementById("area-v2");
  if (!sel) return;
  const visti = [];
  (METE || []).forEach(m => {
    if (m.dipartimentoCf && !visti.includes(m.dipartimentoCf)) visti.push(m.dipartimentoCf);
  });
  visti.forEach(dip => {
    const opt = document.createElement("option");
    opt.value       = dip;
    opt.textContent = dip;
    sel.appendChild(opt);
  });
}

// Le tendine lingua del profilo si riempiono dai dati delle mete
// (PLAN.md §5.2: mai lista hardcoded in index.html).
function popolaLingueV2() {
  const lingue = lingueDaiDati();
  document.querySelectorAll(".riga-lingua .lingua-nome").forEach(sel => {
    lingue.forEach(l => {
      const o = document.createElement("option");
      o.value = o.textContent = l;
      sel.appendChild(o);
    });
  });
}

// Una lingua salvata nel profilo che non compare (più) nei dati delle mete
// resta selezionabile: non si butta una scelta dello studente.
function assicuraOpzioneLingua(sel, lingua) {
  if (!lingua || !sel) return;
  if ([...sel.options].some(o => o.value === lingua)) return;
  const o = document.createElement("option");
  o.value = o.textContent = lingua;
  sel.appendChild(o);
}

function precompilaFormV2() {
  const p = ZAINO.profilo;
  if (!p) return;
  const nomeInput = document.getElementById("nome-v2");
  if (nomeInput && p.nome) nomeInput.value = p.nome;
  const area    = document.getElementById("area-v2");
  const livello = document.getElementById("livello-v2");
  if (area) {
    let dip = p.dipartimento;
    if (!dip) {
      const meta = (METE || []).find(m => m.dipartimentoCf && m.areeDisciplinari.some(a => a.codice === p.area));
      dip = meta ? meta.dipartimentoCf : "";
    }
    area.value = dip || "";
  }
  if (livello) livello.value = p.livello;
  const righe = document.querySelectorAll(".riga-lingua");
  (p.lingue || []).forEach((l, i) => {
    if (!righe[i]) return;
    assicuraOpzioneLingua(righe[i].querySelector(".lingua-nome"), l.lingua);
    righe[i].querySelector(".lingua-nome").value          = l.lingua;
    righe[i].querySelector(".lingua-livello").value       = l.livello;
    righe[i].querySelector(".lingua-certificata").checked = l.certificata;
  });
}

function initProfilo() {
  popolaAreeV2();
  popolaLingueV2();
  precompilaFormV2();

  const form    = document.getElementById("form-profilo-v2");
  const salvato = document.getElementById("profilo-salvato");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const lingue = [];
    document.querySelectorAll(".riga-lingua").forEach(riga => {
      const nome = riga.querySelector(".lingua-nome").value;
      if (nome) lingue.push({
        lingua:      nome,
        livello:     riga.querySelector(".lingua-livello").value,
        certificata: riga.querySelector(".lingua-certificata").checked,
      });
    });
    const nomeDigitato   = (document.getElementById("nome-v2")?.value || "").trim();
    const dipartimento   = document.getElementById("area-v2").value;
    ZAINO.profilo = {
      nome:         nomeDigitato || undefined,
      area:         areaDominanteDipartimento(dipartimento),
      dipartimento: dipartimento,
      livello:      document.getElementById("livello-v2").value,
      lingue,
    };
    salvaZaino(ZAINO);
    renderHome();
    renderMete();
    renderMissione();
    if (salvato) salvato.hidden = false;
  });
}

// ============================================================
// AVVIO
// ============================================================
function applicaBrandingAteneo() {
  const label = window.ATENEO_LABEL || "Ca' Foscari Venezia";
  const disclaimer = document.getElementById("footer-disclaimer");
  if (disclaimer) {
    disclaimer.innerHTML = `<strong>Sito non ufficiale</strong>, non affiliato all'Università ${label}. ` +
      `Fa sempre fede il <a id="footer-link-bando" href="${window.ATENEO_BANDO_URL || "https://www.unive.it/erasmus-studio"}" target="_blank" rel="noopener">bando ufficiale</a>.`;
  }
  const sottotitoloScadenze = document.getElementById("scadenze-sottotitolo");
  if (sottotitoloScadenze) {
    sottotitoloScadenze.textContent = `Le tappe della candidatura ${label}, con conto alla rovescia dal vivo.`;
  }
}

function init() {
  // Per prima: se la migrazione R1.3 ha lasciato un profilo da attribuire,
  // qui si risolve (o si chiede) PRIMA che qualcuno renderizzi lo zaino.
  initSceltaPercorso();
  initNav();
  initDrawer();
  applicaBrandingAteneo();
  renderHome();
  initToggleFase();
  // R3.5: le due checklist vivono in stazioni separate del Percorso e si
  // renderizzano SEMPRE entrambe, ognuna nel suo contenitore.
  renderChecklist();
  renderChecklistPost();
  renderPreferite();
  initWizardMete();
  renderMete();
  initDettaglioMeta();
  // Debounce ~150ms sulla ricerca (P2.15): ogni keystroke rifaceva l'intera
  // griglia — con centinaia di card Sapienza la digitazione scattava.
  const inputCerca = document.getElementById("cerca-mete");
  if (inputCerca) {
    let cercaTimer = null;
    inputCerca.addEventListener("input", () => {
      clearTimeout(cercaTimer);
      cercaTimer = setTimeout(renderMete, 150);
    });
  }
  renderIdoneita();
  renderBannerVerifica();
  initProfilo();
  initCountdownPill();
  initCelebrazioneZaino();
  renderMissione();
  // All'avvio la stazione corrente parte aperta, le altre chiuse (R3).
  renderPercorso({ apri: true });
  renderLA();
  initOnboarding();
  renderMappaHome();
  setInterval(aggiornaCountdownV2, 30000); // i countdown non mostrano più i secondi
}

document.addEventListener("DOMContentLoaded", init);
