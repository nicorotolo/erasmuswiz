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
//   { v: 3, zaini: { cafoscari: {…}, sapienza: {…} }, pendente: {…} }
// L'ateneo attivo NON sta qui: resta in "erasmuswiz_ateneo", che index.html
// legge prima di app.js — una sola fonte di verità, nessun disallineamento.
// Il cambio ateneo diventa così una lettura di un'altra casella: niente da
// migrare al volo, niente da perdere.
// ============================================================
const CHIAVE_ZAINO   = "erasmuswiz-zaino";
const VERSIONE_ZAINO = ErasmusWizPuro.VERSIONE_CONTENITORE_ZAINO;
// Bandierina letta da js/carica-atenei.js: "al prossimo avvio caricali tutti".
// Il nome e' condiviso con il caricatore: cambiarlo qui vuol dire cambiarlo li'.
const CHIAVE_CARICA_TUTTI = "erasmuswiz_carica_tutti";
// L'installazione riguarda il dispositivo, non l'ateneo: per questo il rinvio
// vive accanto alla scelta d'ateneo e non dentro lo zaino per-ateneo.
const CHIAVE_INSTALLAZIONE_RINVIATA = "erasmuswiz_installazione_rinviata_fino";
let _promptInstallazione = null;

window.addEventListener("beforeinstallprompt", evento => {
  evento.preventDefault();
  _promptInstallazione = evento;
});
window.addEventListener("appinstalled", () => {
  _promptInstallazione = null;
  try { localStorage.removeItem(CHIAVE_INSTALLAZIONE_RINVIATA); } catch (e) {}
});

function cicloDatiAttivo() {
  return String(window.BANDO_INFO?.annoAccademico || "");
}

function configurazioneZaino() {
  const cicloDati = cicloDatiAttivo();
  return {
    cicloDati,
    cicloPercorsoLegacy: cicloDati,
    cicloPercorsoNuovo: ErasmusWizPuro.cicloSuccessivo(cicloDati) || cicloDati,
  };
}

function zainoVuoto() {
  return ErasmusWizPuro.creaZainoV3(configurazioneZaino());
}

// Fallback per zaini vecchi su ogni estensione di ZAINO (regola del progetto).
function normalizzaZaino(z) {
  return ErasmusWizPuro.normalizzaZainoV3(z, configurazioneZaino());
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
  return !!(
    p.profilo ||
    (p.fase && p.fase !== "domanda" && p.fase !== "esplorando") ||
    p.onboardingFatto ||
    p.zainoCelebrato
  );
}

function applicaPercorso(z, p) {
  z.profilo = p.profilo || null;
  z.fase    = ErasmusWizPuro.faseViaggioV3(p.fase);
  z.cicloDati = p.cicloDati || cicloDatiAttivo();
  // Un percorso legacy appartiene al ciclo dei dati che lo ha prodotto.
  // Trattarlo come nuovo 2027/28 conserverebbe spunte del 2026/27 come vere.
  z.cicloPercorso = p.cicloPercorso || z.cicloDati;
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

  const assegna = (k, fn) => {
    if (!zaini[k]) return;
    fn(zaini[k]);
    // Anche una sola spunta attribuita e' contenuto del vecchio ciclo: la
    // doppia identita' impedisce che sembri confermata per quello successivo.
    zaini[k].cicloDati = cicloDatiAttivo();
    zaini[k].cicloPercorso = cicloDatiAttivo();
    toccati[k] = true;
  };

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
    zainoCelebrato:  legacy.zainoCelebrato,
    cicloDati:       legacy.cicloDati,
    cicloPercorso:   legacy.cicloPercorso
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

  Object.keys(zaini).forEach(k => { zaini[k] = normalizzaZaino(zaini[k]); });
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
  const eContenitore = !!(
    dato && typeof dato === "object" &&
    (Object.prototype.hasOwnProperty.call(dato, "zaini") ||
     Object.prototype.hasOwnProperty.call(dato, "v"))
  );
  // Soltanto lo zaino PIATTO richiede tutti gli atenei per attribuire gli id.
  // Il contenitore v2 ha gia' una casella per ateneo: ricaricare 2 MB di mete
  // non rende la sua migrazione piu' sicura.
  if (!eContenitore && !ateneiTuttiCaricati() && rinviaMigrazioneERicarica()) {
    return { v: VERSIONE_ZAINO, zaini: {} };
  }
  const migrato = ErasmusWizPuro.migraContenitoreZainoV3(dato, {
    ...configurazioneZaino(),
    atenei: Object.keys(window.ATENEI_REGISTRO || {}),
    migraPiatto: migraZainoLegacy,
  });
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

// V4 — un solo lettore del modo pre-bando. `statoBando()` resta
// deliberatamente dati-only; qui si aggiunge la prospettiva dello studente.
function inPreBando() {
  return ErasmusWizPuro.modoCiclo({
    stato: statoBando(),
    cicloDati: ZAINO.cicloDati,
    cicloPercorso: ZAINO.cicloPercorso,
  }) === "pre-bando";
}

function cicloBreve(ciclo) {
  const parti = String(ciclo || "").split("/");
  return parti.length === 2 && parti[1].length === 4
    ? `${parti[0]}/${parti[1].slice(-2)}`
    : String(ciclo || "");
}

// Una formulazione sola, riusata ovunque un contenuto del vecchio ciclo
// resta visibile. Cambiarla qui cambia insieme badge, calendario, requisiti
// e scadenze delle università ospitanti.
function cartellinoCicloDati() {
  const ciclo = cicloBreve(ZAINO.cicloDati || window.BANDO_INFO?.annoAccademico);
  return ciclo || "ciclo precedente";
}

function cicloPercorsoBreve() {
  return cicloBreve(ZAINO.cicloPercorso);
}

function titoloPreBando() {
  const ciclo = cicloPercorsoBreve();
  return ciclo
    ? `Il bando ${ciclo} non è ancora uscito`
    : "Il prossimo bando non è ancora uscito";
}

// È il testo canonico della finestra attesa: missione, prossima data e
// conclusione dell'onboarding non ne mantengono tre copie divergenti.
function finestraAttesaBando() {
  return ErasmusWizPuro.fraseFinestraAttesaBando(window.BANDO_INFO);
}

function finestraAttesaDisponibile() {
  return ErasmusWizPuro.finestraAttesaValida(window.BANDO_INFO);
}

function countdownConCiclo(data) {
  const testo = countdownInParole(calcolaCountdown(data));
  return inPreBando() ? `${testo} · bando ${cartellinoCicloDati()}` : testo;
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
const ROTTE_PROFONDE = {
  "mete/scelte": { tab: "mete", fuoco: "sezione-preferite" }
};

// Alias realmente supportati (PLAN.md §5.6: si dichiarano e si testano, non si
// promettono "per sempre"). Tutti e tre hanno una prova alle spalle:
//   `#checklist` e `#idoneita` sono stati tab veri fino a R3, che li ha fusi
//   nella schermata Percorso a stazioni (le stazioni "Candidatura e scadenze"
//   e "Prepara la candidatura");
//   `#timeline` è stato un hash vero fino a OP2 (pagina Timeline rimossa,
//   contenuti fusi in scadenze+checklist, oggi nella stessa stazione).
// Chi ha ancora quei link atterra dove il contenuto è finito davvero.
const ALIAS_HASH = { timeline: "percorso", checklist: "percorso", idoneita: "percorso" };

// Unico punto che interpreta una destinazione, da qualunque parte arrivi.
// La forma vive in puro.js ed e' gia' capace di leggere uno o due livelli
// con un ateneo finale; qui registriamo ancora soltanto i quattro tab V1.
function destDaHash(grezzo) {
  const analizzata = ErasmusWizPuro.destDaHash(grezzo, {
    destinazioniValide: [...TAB_VALIDI, ...Object.keys(ROTTE_PROFONDE)],
    aliasHash: ALIAS_HASH,
    ateneiValidi: Object.keys(window.ATENEI_REGISTRO || {})
  });
  return analizzata ? analizzata.destinazione : null;
}

function analizzaDestinazione(grezzo) {
  return ErasmusWizPuro.destDaHash(grezzo, {
    destinazioniValide: [...TAB_VALIDI, ...Object.keys(ROTTE_PROFONDE)],
    aliasHash: ALIAS_HASH,
    ateneiValidi: Object.keys(window.ATENEI_REGISTRO || {})
  });
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

// UN SOLO scrittore per `modo-entrata`. Quella classe rimodella l'INTERA
// pagina (nasconde nav e footer, azzera il gutter di `.main-content` e forza
// `#tab-oggi` a `display:block` con specificità superiore a `.tab-pane`
// nascosto). Vale quindi solo quando l'entrata è davvero la schermata a
// video: primo contatto E tab Oggi attivo.
// ⛔ Senza la seconda condizione uno studente nuovo che arriva da un LINK
// PROFONDO (`#mete` — la via di distribuzione per cui esiste V1) si trovava
// l'entrata impilata sopra le Mete, con la pagina alta 7521px invece di 800.
// Misurato a schermo il 2026-07-29; nessuna delle due suite lo vedeva.
// Anche `modo-scena-entrata` si DERIVA da qui, invece di essere aggiunta e
// tolta a mano da `benvScena()`: altrimenti sopravviveva alla navigazione e su
// telefono nascondeva la nav mentre lo studente era già sulle Mete.
// La sorgente di verità della scena resta `#home-benvenuto.modo-scena`.
let _codaEntrata = false;
let _esitoMetePendente = null;

function codaEntrataAttiva() {
  return _codaEntrata;
}

function preparaUscitaCodaEntrata() {
  if (!_codaEntrata) return;
  _codaEntrata = false;
  const zona = document.getElementById("benvenuto-scelte");
  if (zona) delete zona.dataset.codaSveglia;
  renderHome();
  renderMete();
  renderMissione();
}

function aggiornaModoEntrata() {
  const benv = document.getElementById("home-benvenuto");
  const entrata =
    (!ZAINO.onboardingFatto || codaEntrataAttiva()) &&
    tabCorrente() === "oggi";
  document.body.classList.toggle("modo-entrata", entrata);
  document.body.classList.toggle(
    "modo-scena-entrata",
    entrata && !!benv && benv.classList.contains("modo-scena")
  );
}

function scriviHash(rotta, storia, ateneoHash = null) {
  if (storia === "nessuna") return;
  const nuovo = ErasmusWizPuro.componiHash(rotta, ateneoHash);
  if (location.hash === nuovo) return; // già giusto: non si sporca la cronologia
  if (storia === "push") history.pushState(null, "", nuovo);
  else                   history.replaceState(null, "", nuovo);
}

// Le quattro section ricevono aria-labelledby in index.html, ma i titoli
// esistenti non avevano un id. Li nominiamo qui senza aggiungere markup e,
// per Oggi, scegliamo il titolo realmente mostrato nel primo contatto o nella
// home di ritorno: lo screen reader annuncia la stessa schermata che si vede.
function preparaNomiTab() {
  const titoli = [
    ["#home-benvenuto .benvenuto-titolo", "titolo-tab-oggi-benvenuto"],
    ["#tab-oggi .home-saluto", "titolo-tab-oggi-home"],
    ["#tab-mete .sezione-titolo", "titolo-tab-mete"],
    ["#tab-percorso .sezione-titolo", "titolo-tab-percorso"],
    ["#tab-profilo .sezione-titolo", "titolo-tab-profilo"]
  ];
  titoli.forEach(([selettore, id]) => {
    const titolo = document.querySelector(selettore);
    if (titolo) titolo.id = id;
  });
  aggiornaNomeTabOggi();
}

function aggiornaNomeTabOggi() {
  const sezione = document.getElementById("tab-oggi");
  if (!sezione) return;
  sezione.setAttribute(
    "aria-labelledby",
    ZAINO.onboardingFatto ? "titolo-tab-oggi-home" : "titolo-tab-oggi-benvenuto"
  );
}

function portaFuocoAllaSezione(tab, rotta = tab) {
  if (tab === "oggi") aggiornaNomeTabOggi();
  const profonda = ROTTE_PROFONDE[rotta];
  const bersaglio = profonda
    ? document.getElementById(profonda.fuoco)
    : document.getElementById(`tab-${tab}`);
  if (!bersaglio) return;
  // preventScroll separa le due responsabilita': prima si annuncia la nuova
  // sezione, poi un solo comando decide se e come muovere la pagina.
  bersaglio.focus({ preventScroll: true });
}

function comportamentoScrollRotta() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
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
 *   forzaFuoco: inizializza il contratto anche quando il tab Oggi era gia'
 *               marcato attivo nell'HTML. Non si usa sui riclic della nav.
 * @returns {boolean} false se la destinazione non è nel contratto.
 */
function vaiA(dest, opzioni = {}) {
  const analizzata = analizzaDestinazione(dest);
  const rotta = analizzata && analizzata.destinazione;
  if (!rotta) return false;
  const tab = ROTTE_PROFONDE[rotta]?.tab || rotta;
  const { storia = "push", scroll = true, forzaFuoco = false } = opzioni;

  // La coda e' deliberatamente solo in memoria: qualunque navigazione la
  // chiude e ripristina le viste normali prima di cambiare schermata.
  preparaUscitaCodaEntrata();
  chiudiAnnullamentoPreferita();
  const corrente = analizzaDestinazione(location.hash);
  const cambia = tab !== tabCorrente() ||
    rotta !== (corrente && corrente.destinazione);
  dipingiTab(tab);
  // La schermata è cambiata: `modo-entrata` va ricalcolato qui, perché
  // `renderHome()` non gira a ogni navigazione (vedi aggiornaModoEntrata).
  aggiornaModoEntrata();
  // Un push per un tab che non cambia sarebbe un Indietro che non fa niente:
  // il tasto Indietro deve sempre spostare qualcosa.
  scriviHash(
    rotta,
    storia === "push" && !cambia ? "replace" : storia,
    analizzata.ateneo
  );
  // Un riclic sulla schermata attiva non sposta ne' fuoco ne' pagina. Il
  // primo avvio e' diverso: l'HTML parte gia' su Oggi, ma il fuoco non puo'
  // restare sul body, quindi sincronizzaDaUrl chiede esplicitamente l'avvio.
  if (cambia || forzaFuoco) {
    portaFuocoAllaSezione(tab, rotta);
    if (scroll) {
      const profonda = ROTTE_PROFONDE[rotta];
      if (profonda) {
        document.getElementById(profonda.fuoco)?.scrollIntoView({
          block: "start",
          behavior: comportamentoScrollRotta()
        });
      } else {
        window.scrollTo({ top: 0, behavior: comportamentoScrollRotta() });
      }
    }
  }
  if (tab === "mete" && _esitoMetePendente) {
    const esito = _esitoMetePendente;
    _esitoMetePendente = null;
    applicaEsitoWizardMete(esito);
  }
  return true;
}

// L'URL comanda: primo avvio, Indietro/Avanti, hash scritto a mano.
function sincronizzaDaUrl({ primoAvvio = false } = {}) {
  const grezzo = location.hash.replace(/^#/, "");
  const rotta  = destDaHash(grezzo);

  if (rotta) {
    // storia "replace": se era un alias (`#timeline`) l'URL si normalizza sul
    // nome canonico; se era già canonico, scriviHash esce subito.
    vaiA(grezzo, {
      storia: "replace",
      scroll: !primoAvvio || !!ROTTE_PROFONDE[rotta],
      forzaFuoco: primoAvvio
    });
    return;
  }
  // Hash vuoto: si dipinge il predefinito ma NON si scrive niente nell'URL —
  // l'indirizzo pubblico della home resta pulito (vincolo §10.8: gli URL
  // indicizzati non cambiano per effetto collaterale di un refactor).
  // Si dipinge lo stesso, non si "lascia com'è": l'HTML marca `attivo` a mano
  // ma non ha `aria-current`, quindi senza questo passaggio il primo avvio
  // restava senza la voce corrente annunciata (PLAN.md §5.6).
  if (!grezzo) {
    vaiA(TAB_PREDEFINITO, {
      storia: "nessuna",
      scroll: false,
      forzaFuoco: primoAvvio
    });
    return;
  }
  // Hash sconosciuto: si mostra il predefinito e si toglie dall'URL, invece di
  // lasciare `#pippo` a raccontare una schermata che non esiste.
  vaiA(TAB_PREDEFINITO, {
    storia: "replace",
    scroll: false,
    forzaFuoco: primoAvvio
  });
}

function initNav() {
  preparaNomiTab();
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

  // Censimento F9 (V1): queste voci e "Cambia ateneo" sono i soli punti del
  // drawer che avviano una rotta. L'altro proprietario del fuoco che naviga e'
  // la celebrazione dello zaino (piu' sotto). In entrambi i casi l'ordine e':
  // chiusura/restituzione del fuoco, poi vaiA(); un eventuale controllo
  // specifico della destinazione riceve il fuoco per ultimo.
  drawer.querySelectorAll("[data-drawer-goto]").forEach(voce => {
    voce.addEventListener("click", () => {
      chiudiDrawer();
      vaiA(voce.dataset.drawerGoto);
    });
  });

  document.getElementById("drawer-cambia-ateneo")?.addEventListener("click", () => {
    chiudiDrawer();
    vaiA("profilo");
    // "Cambia ateneo" non e' una semplice rotta Profilo: e' la scorciatoia
    // decisa nella sessione 53. Dopo i due ripristini generici qui sopra, la
    // tendina vince per ultima e porta lo studente direttamente alla scelta.
    const sel = document.getElementById("select-ateneo");
    if (sel) {
      sel.focus({ preventScroll: true });
      sel.scrollIntoView({
        block: "center",
        behavior: comportamentoScrollRotta()
      });
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
    aggiornaModoEntrata();
    aggiornaNomeTabOggi();
  }

  const dataEl = document.getElementById("home-data");
  if (dataEl) {
    const oggi = new Date();
    dataEl.textContent = oggi.toLocaleDateString("it-IT", {
      weekday: "long", day: "numeric", month: "short", year: "numeric"
    });
  }
  // L'id di questo titolo viene assegnato da preparaNomiTab() per il
  // contratto ARIA: la classe è il suo riferimento stabile nel render.
  const salutoEl = document.querySelector("#tab-oggi .home-saluto");
  if (salutoEl) {
    salutoEl.textContent = ZAINO.profilo?.nome
      ? `Ciao, ${ZAINO.profilo.nome}`
      : "Il tuo percorso Erasmus";
  }

  // Badge del bando — dice sempre la verità sui QUATTRO stati (R2.5):
  // aperto / candidature chiuse ma ciclo attivo / dati scaduti / non
  // pubblicato. Sparisce solo per lo studente selezionato (per lui non
  // è più la notizia rilevante).
  const badge = document.getElementById("badge-bando");
  if (badge) {
    const stato = statoBando();
    const annoBreve = cicloBreve(window.BANDO_INFO?.annoAccademico);
    const testi = {
      "aperto":              annoBreve ? `Bando ${annoBreve} aperto` : "",
      "chiuso-ciclo-attivo": annoBreve ? `Bando ${annoBreve}: candidature chiuse` : "",
      "dati-scaduti":        annoBreve ? `Bando ${annoBreve} concluso` : "",
      "non-pubblicato":      "Nuovo bando non ancora pubblicato",
    };
    const testo = inPreBando()
      ? `Bando ${cicloPercorsoBreve()} non ancora uscito · dati ${cartellinoCicloDati()}`
      : (testi[stato] || "");
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
//      (ZAINO.fase, l'unico gate auto-dichiarato): la prima azione incompleta
//      della checklist reale, qualunque cosa dicano date e checklist.
//   2. STATO DEL BANDO PER DATA — fuori dal pre-bando, candidature chiuse
//      (flag chiusuraCandidature nei dati scadenze, mai hardcoded) senza
//      selezione dichiarata: nessuna tappa di lavoro può essere corrente,
//      si è in attesa dell'esito → tappa "esiti" (il bivio onesto). Nel
//      pre-bando quella chiusura appartiene al ciclo storico dei dati e non
//      sposta agli esiti il percorso rivolto al bando nuovo.
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
// La checklist reale decide dove comincia il dopo-selezione: accettazione,
// nomination e application vengono prima del Learning Agreement.
// Questa etichetta e' accoppiata al campo `fase` dei dati-postselezione.js:
// se cambia nei file dati, va cambiata qui nello stesso intervento.
const FASE_CHECKLIST_LEARNING_AGREEMENT = "Learning Agreement";

// Le sole condizioni personali previste da V4. Il campo `tipo` distingue
// condizioni, opzioni e avvertenze; questa mappa collega le tre condizioni
// alle due risposte del profilo, senza dedurre nulla dal testo validato.
const CONDIZIONI_POST_PROFILO = Object.freeze({
  "post-la-4": "ricercaTesi",
  "post-doc-8": "extraUE",
  "sap-post-doc-7": "extraUE",
});

function vociPostApplicabili() {
  const profilo = ZAINO.profilo || {};
  return (CHECKLIST_POST || []).filter(voce => {
    if (!voce.tipo) return true;
    if (voce.tipo !== "condizione") return false;
    const campo = CONDIZIONI_POST_PROFILO[voce.id];
    return !!campo && profilo[campo] === true;
  });
}

function vociPostPromuovibili() {
  return vociPostApplicabili().filter(voce =>
    voce.tipo !== "opzione" && voce.tipo !== "avvertenza"
  );
}

function risposteProfiloPostMancanti() {
  const profilo = ZAINO.profilo || {};
  return ["extraUE", "ricercaTesi"].filter(campo =>
    profilo[campo] !== true && profilo[campo] !== false
  );
}

function primaVocePostIncompleta() {
  return vociPostPromuovibili().find(voce =>
    !(ZAINO.checklistPost && ZAINO.checklistPost[voce.id])
  ) || null;
}

function tappaPerVocePost(voce) {
  return voce && voce.fase === FASE_CHECKLIST_LEARNING_AGREEMENT ? "la" : "partenza";
}

function primaTappaPostSelezione() {
  return tappaPerVocePost(primaVocePostIncompleta());
}

// Ritorna una delle sei tappe del viaggio.
function tappaCorrente() {
  if (ZAINO.fase === "selezionato") return primaTappaPostSelezione();
  if (ZAINO.fase === "in-attesa") return "esiti";
  // In pre-bando la chiusura appartiene al ciclo dei dati, non al percorso
  // nuovo dello studente: non può spedirlo artificialmente agli esiti.
  if (!inPreBando() && candidatureChiuse()) return "esiti";

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
// STEPPER A 6 TAPPE — lo stesso viaggio riassunto nella home.
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
  const selezionato    = ZAINO.fase === "selezionato";
  const inAttesa       = ZAINO.fase === "in-attesa";
  const attesaEsiti    = tappa === "esiti";
  const post           = vociPostApplicabili();
  const postFatti      = post.filter(v => ZAINO.checklistPost && ZAINO.checklistPost[v.id]).length;
  const vociLA         = post.filter(v => v.fase === FASE_CHECKLIST_LEARNING_AGREEMENT);
  const laFatto        = vociLA.length > 0 &&
    vociLA.every(v => ZAINO.checklistPost && ZAINO.checklistPost[v.id]);
  const postFatto      = post.length > 0 && postFatti === post.length;
  const notaRequisitiCiclo = inPreBando()
    ? ` Requisiti del bando ${cartellinoCicloDati()}.`
    : "";

  const fasi = [
    {
      id: 1, tappa: "requisiti", tab: "percorso", stazione: "requisiti",
      domanda: "Requisiti", fatto: requisitiOk,
      riassunto: requisitiOk
        ? `Profilo compilato — hai verificato tutti i requisiti.${notaRequisitiCiclo}`
        : `Verifica i requisiti del bando prima di iniziare.${notaRequisitiCiclo}`,
      cta: requisitiOk ? "Rivedi i requisiti" : "Controlla se sei idoneo",
    },
    {
      id: 2, tappa: "mete", tab: "mete",
      domanda: "Mete e le 5 scelte", fatto: meteOk,
      riassunto: meteOk
        ? `${nPreferite} ${nPreferite === 1 ? "meta salvata" : "mete salvate"} tra i preferiti.`
        : "Esplora le mete compatibili con il tuo profilo.",
      cta: meteOk ? "Vedi le tue mete" : "Esplora le mete",
    },
    {
      id: 3, tappa: "candidatura", tab: "percorso", stazione: "candidatura",
      domanda: "Candidatura e scadenze", fatto: checklistOk,
      riassunto: checklistTot === 0
        ? "Nessun passo ancora disponibile."
        : `${checklistFatti}/${checklistTot} passi completati.`,
      cta: checklistOk ? "Rivedi la checklist" : "Vai alla checklist",
    },
    {
      id: 4, tappa: "esito", tab: "percorso", stazione: "esito",
      domanda: "Esito", fatto: selezionato,
      riassunto: selezionato
        ? "Selezione dichiarata: il percorso continua dalle azioni ancora da fare."
        : inAttesa
          ? "Domanda inviata: qui trovi cosa succede e cosa fare nell'attesa."
        : attesaEsiti
          ? (candidatureChiuse()
              ? "Le candidature sono chiuse: quando conosci l'esito, dichiaralo qui."
              : "Candidatura completata: quando arriva l'esito, dichiaralo qui.")
          : "Quando sarai selezionato, qui trovi la preparazione alla partenza.",
      cta: inAttesa ? "Vedi cosa succede"
        : selezionato ? "Rivedi l'esito"
          : attesaEsiti ? "Dichiara l'esito" : "Vai alla candidatura",
    },
    {
      id: 5, tappa: "la", tab: "percorso", stazione: "la",
      domanda: "Learning Agreement", fatto: laFatto,
      riassunto: laFatto
        ? "Le azioni del Learning Agreement risultano completate."
        : "Prepara la bozza dopo accettazione, nomination e application.",
      cta: "Apri il Learning Agreement",
    },
    {
      id: 6, tappa: "partenza", tab: "percorso", stazione: "partenza",
      domanda: "Zaino e partenza", fatto: postFatto,
      riassunto: selezionato
        ? `${postFatti}/${post.length} azioni post-selezione completate.`
        : "Si apre dopo la selezione e parte dalla prima azione incompleta.",
      cta: selezionato ? "Continua dallo zaino" : "Vedi cosa ti aspetta",
    },
  ];

  const correnteId = tappa === "esiti" ? "esito" : tappa;
  fasi.forEach(f => {
    if (f.tappa === correnteId) { f.stato = "attivo"; return; }
    if (f.fatto) { f.stato = "fatto"; return; }

    // Superata per DICHIARAZIONE, non perche' misurata: chi ha gia' inviato la
    // domanda si e' lasciato indietro le prime tappe anche con la checklist a
    // zero. Il riassunto va riscritto, altrimenti la scheda dice "fatto" e
    // sotto "0/9 passi completati" — la stessa spunta falsa che questo
    // progetto rifiuta sulle checklist. Meglio dichiarare l'inferenza.
    const superataPerDichiarazione =
      (inAttesa && f.id <= 3) || (selezionato && f.id <= 4);
    if (superataPerDichiarazione) {
      f.stato = "fatto";
      f.riassunto = inAttesa
        ? "Alle spalle: hai dichiarato di aver inviato la domanda."
        : "Alle spalle: hai dichiarato di essere stato selezionato.";
      return;
    }
    f.stato = "futuro";
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
// L'itinerario burocratico unico: 6 tappe in una schermata verticale.
// QUALE tappa è corrente lo decide tappaCorrente() (R1.6): qui si dipingono
// solo gli stati (fatto/attivo/futuro), i conteggi e il gate dell'esito.
// La tappa Learning Agreement usa le sole azioni omonime della checklist
// post-selezione; il Workspace non finge invece un'approvazione dell'ateneo.
// Con `apri: true` (avvio e cambio di fase) si allinea anche l'apertura dei
// <details>: la stazione corrente aperta, le altre chiuse. Le ripitture
// leggere (la spunta di una voce) NON toccano ciò che lo studente ha aperto.
// ============================================================

// Porta diretta a UNA stazione: naviga al tab Percorso e apre la tappa.
// Lo scroll al top di vaiA si salta: si scorre alla stazione richiesta.
function vaiAStazione(nome, opzioni = {}) {
  if (!vaiA("percorso", { scroll: false })) return;
  const li = document.getElementById("stazione-" + nome);
  if (!li) return;
  if (opzioni.esclusiva) {
    document.querySelectorAll(".stazioni > .stazione > details").forEach(dettagli => {
      dettagli.open = false;
    });
  }
  const det = li.querySelector("details");
  if (det) det.open = true;
  requestAnimationFrame(() => li.scrollIntoView({
    behavior: comportamentoScrollRotta(),
    block: "start"
  }));
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

  const post      = vociPostApplicabili();
  const postFatti = post.filter(v => ZAINO.checklistPost && ZAINO.checklistPost[v.id]).length;

  const selezionato = ZAINO.fase === "selezionato";
  const inAttesa    = ZAINO.fase === "in-attesa";
  const nPreferite  = (ZAINO.metePreferite || []).length;
  const vociLA      = post.filter(v => v.fase === FASE_CHECKLIST_LEARNING_AGREEMENT);
  const laFatto     = vociLA.length > 0 &&
    vociLA.every(v => ZAINO.checklistPost && ZAINO.checklistPost[v.id]);
  const postFatto   = post.length > 0 && postFatti === post.length;

  // La tappa Mete resta un rimando alla sua schermata, ma non sparisce: uno
  // stepper di sei tappe non puo' cambiare lunghezza mentre lo si percorre.
  const ponte = document.getElementById("stazione-mete-ponte");
  if (ponte) ponte.hidden = false;

  const stazioni = {
    requisiti: {
      numero: "1",
      stato: tappa === "requisiti" ? "attivo" : (selezionato || requisitiOk) ? "fatto" : "futuro",
      conta: requisiti.length ? `${reqFatti}/${requisiti.length}` : "non pubblicati",
    },
    "mete-ponte": {
      numero: "2",
      stato: tappa === "mete" ? "attivo" : (selezionato || inAttesa || nPreferite > 0) ? "fatto" : "futuro",
      conta: nPreferite ? `${nPreferite} salvate` : "",
    },
    candidatura: {
      numero: "3",
      stato: tappa === "candidatura" ? "attivo" : (selezionato || inAttesa || checklistOk) ? "fatto" : "futuro",
      conta: checklist.length ? `${chkFatti}/${checklist.length}` : "non pubblicata",
    },
    esito: {
      numero: "4",
      stato: selezionato ? "fatto" : tappa === "esiti" ? "attivo" : "futuro",
      conta: selezionato ? "selezionato" : inAttesa ? "in attesa" : "",
    },
    // La stazione LA non ha un "fatto" misurabile (nessuno può approvare la
    // bozza al posto dell'ateneo): mostra solo quante bozze esistono (R4).
    la: {
      numero: "5",
      stato: tappa === "la" ? "attivo" : laFatto ? "fatto" : selezionato ? "futuro" : "info",
      conta: (() => {
        const n = Object.keys((ZAINO.la && ZAINO.la.bozzePerMeta) || {}).length;
        return n ? `${n} ${n === 1 ? "bozza" : "bozze"}` : "";
      })(),
    },
    partenza: {
      numero: "6",
      stato: tappa === "partenza" ? "attivo" : postFatto ? "fatto" : "futuro",
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
      : inAttesa
        ? "Hai inviato la domanda e stai aspettando l'esito."
      : (tappa === "esiti" && !inPreBando() && candidatureChiuse())
        ? "Le candidature sono chiuse: quando conosci l'esito, dichiaralo qui."
        : "Quando conosci l'esito della selezione, dichiaralo qui.";
  }
  renderAttesaInfo();
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
  if (ZAINO.fase === "selezionato") {
    voci = vociPostPromuovibili().filter(v => !spuntata(v, ZAINO.checklistPost));
  } else if (!inPreBando() && statoBando() === "aperto") {
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
      item.appendChild(crea("span", "settimana-item-scadenza", countdownConCiclo(scad.data)));
    }
    item.addEventListener("click", () => vaiAStazione(
      ZAINO.fase === "selezionato" ? tappaPerVocePost(voce) : "candidatura"
    ));
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

  if (ZAINO.fase === "in-attesa") {
    return { tipo: "in-attesa", fatti, totale };
  }

  // Studente selezionato: la missione viene dalla checklist di partenza.
  if (ZAINO.fase === "selezionato") {
    const post     = vociPostPromuovibili();
    const vocePost = post.find(v => !(ZAINO.checklistPost && ZAINO.checklistPost[v.id]));
    const ora      = new Date();
    const evento   = (SCADENZE_CAFOSCARI || [])
      .filter(s => new Date(s.data) > ora)
      .sort((a, b) => new Date(a.data) - new Date(b.data))[0] || null;
    if (vocePost) return {
      tipo: "partenza",
      voce: vocePost,
      stazione: tappaPerVocePost(vocePost),
      prossima: evento,
      giorni: evento ? giorniA(evento.data) : Infinity,
      fatti,
      totale
    };
    return { tipo: "completo", fatti, totale };
  }

  // Il pre-bando resta la cornice onesta anche per un nuovo visitatore, ma
  // senza profilo la sua azione utile viene prima dell'esplorazione delle mete.
  if (inPreBando()) return {
    tipo: "pre-bando",
    profiloMancante: !haProfilo,
    fatti,
    totale
  };

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

function apriOffertaSvegliaHome() {
  const card = document.getElementById("missione-card");
  if (!card || !finestraAttesaDisponibile()) return;
  card.querySelector("[data-offerta-sveglia-home]")?.remove();

  const offerta = crea("div", "banner-stato stato-riserve");
  offerta.dataset.offertaSvegliaHome = "true";
  offerta.setAttribute("role", "region");
  offerta.setAttribute("aria-label", "Promemoria per il nuovo bando");
  offerta.appendChild(crea("span", "banner-stato-icona", "⏰"));
  const contenuto = crea("div");
  contenuto.appendChild(crea("strong", "banner-stato-titolo", "Ti avviso quando esce il bando?"));
  contenuto.appendChild(crea(
    "p",
    null,
    "Il tuo telefono ti avvisa da solo: noi non ti chiediamo né mail né iscrizione."
  ));
  const riga = crea("div", "benvenuto-scelte-riga");
  const si = crea("button", "benvenuto-scelta", "Sì, mettimelo in calendario");
  si.type = "button";
  si.addEventListener("click", () => {
    scaricaCalendarioCompleto(card);
    offerta.remove();
  });
  const no = crea("button", "benvenuto-scelta", "No, grazie");
  no.type = "button";
  no.addEventListener("click", () => offerta.remove());
  riga.appendChild(si);
  riga.appendChild(no);
  contenuto.appendChild(riga);
  offerta.appendChild(contenuto);
  card.appendChild(offerta);
  si.focus();
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

  card.querySelector("[data-offerta-sveglia-home]")?.remove();
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
    btn.style.display = "";
    btn.textContent = testo;
    btn.onclick = e => { e.preventDefault(); stazione ? vaiAStazione(stazione) : vaiA(tab); };
  }

  switch (m.tipo) {
    case "pre-bando": {
      const quando = dataChiusuraCandidature();
      if (titolo) titolo.textContent = titoloPreBando();
      if (dett) dett.textContent =
        `${finestraAttesaBando()} ` +
        `Le candidature del ${cartellinoCicloDati()} si sono chiuse${quando ? ` il ${quando}` : ""}; ` +
        "quelle date restano qui come riferimento storico." +
        (m.profiloMancante
          ? " Completa il profilo per filtrare le mete compatibili con il tuo percorso."
          : "");
      if (m.profiloMancante) {
        setBtn(btnFatto, "Completa il profilo", "profilo");
      } else {
        setBtn(btnFatto, "Esplora le mete", "mete");
      }
      if (btnCome) {
        if (finestraAttesaDisponibile()) {
          btnCome.style.display = "";
          btnCome.textContent = "Avvisami quando esce";
          btnCome.onclick = e => {
            e.preventDefault();
            apriOffertaSvegliaHome();
          };
        } else {
          btnCome.style.display = "none";
          btnCome.onclick = null;
        }
      }
      break;
    }
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
          impostaFaseViaggio("selezionato");
        };
      }
      setBtn(btnCome, "Vedi le date del ciclo", "percorso", "candidatura");
      break;
    }
    case "in-attesa":
      if (titolo) titolo.textContent =
        window.ATTESA_INFO?.titolo || "Hai inviato la domanda. Adesso si aspetta.";
      if (dett) dett.textContent =
        window.ATTESA_INFO?.quantoDura ||
        "Controlla la posta istituzionale e preparati ai passaggi successivi.";
      setBtn(btnFatto, "Vedi cosa succede", "percorso", "esito");
      setBtn(btnCome, "Cosa posso fare intanto?", "percorso", "esito");
      break;
    case "partenza":
      if (titolo) titolo.textContent = m.voce.testo;
      if (dett)   dett.textContent   = m.prossima
        ? `Preparazione alla partenza — ${m.prossima.cosa} tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}.`
        : "Preparazione alla partenza: spunta i passi man mano che li completi.";
      setBtn(btnFatto, "Fatto 🎒",           "percorso", m.stazione);
      setBtn(btnCome,  "Vedi tutti i passi", "percorso", m.stazione);
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
    const data = el.getAttribute("data-scadenza");
    const c  = calcolaCountdown(data);
    const cd = el.querySelector(".cand-scadenza-countdown");
    if (cd) cd.textContent = countdownConCiclo(data);
    if (c.passata) el.closest(".cand-capitolo")?.classList.add("passata");
  });
  document.querySelectorAll(".prossimo-passo-scadenza[data-scadenza-id]").forEach(el => {
    const scad = scadenzaPerId(el.getAttribute("data-scadenza-id"));
    if (!scad) return;
    el.textContent = `📅 ${scad.cosa} — ${countdownConCiclo(scad.data)}`;
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
function rinvioInstallazioneAttivo() {
  try {
    const valore = localStorage.getItem(CHIAVE_INSTALLAZIONE_RINVIATA);
    if (!valore) return null;
    if (new Date(valore) > new Date()) return valore;
    localStorage.removeItem(CHIAVE_INSTALLAZIONE_RINVIATA);
  } catch (e) {}
  return null;
}

function rinviaInstallazione() {
  const ripresa = new Date();
  ripresa.setDate(ripresa.getDate() + 30);
  try {
    localStorage.setItem(CHIAVE_INSTALLAZIONE_RINVIATA, ripresa.toISOString());
  } catch (e) {}
}

function ambienteInstallazione() {
  const ua = navigator.userAgent || "";
  const iOS = /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const mobile = iOS || /Android|Mobile/i.test(ua);
  return {
    promptDisponibile: !!_promptInstallazione,
    standalone: !!(
      window.matchMedia?.("(display-mode: standalone)").matches ||
      navigator.standalone
    ),
    iOS,
    safari: iOS && /Safari/i.test(ua) && !/CriOS|FxiOS|EdgiOS/i.test(ua),
    desktop: !mobile,
    rinviatoFino: rinvioInstallazioneAttivo(),
  };
}

function offriInstallazione(contenitore, alTermine) {
  // Le istruzioni iOS devono restare leggibili mentre lo studente usa il
  // menu Condividi. Per questo l'invito vive nel punto da cui e' partito il
  // download: senza un contenitore reale non mostriamo un ripiego globale.
  if (!contenitore) return false;
  const invito = ErasmusWizPuro.invitoInstallazione(ambienteInstallazione());
  if (invito.tipo === "niente") return false;

  contenitore.querySelector("[data-invito-installazione]")?.remove();
  const banner = crea("div", "banner-stato stato-riserve");
  banner.dataset.invitoInstallazione = invito.tipo;
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Installa ErasmusWiz");
  banner.appendChild(crea("span", "banner-stato-icona", "📲"));
  const contenuto = crea("div");
  contenuto.appendChild(crea(
    "strong",
    "banner-stato-titolo",
    invito.tipo === "prompt"
      ? "Aggiungi ErasmusWiz al telefono"
      : "Aggiungi ErasmusWiz da Safari"
  ));
  contenuto.appendChild(crea("p", null, invito.testo));
  const riga = crea("div", "benvenuto-scelte-riga");
  let concluso = false;
  function chiudiInvito(daRinviare) {
    if (concluso) return;
    concluso = true;
    if (daRinviare) rinviaInstallazione();
    banner.remove();
    if (typeof alTermine === "function") alTermine();
  }

  if (invito.tipo === "prompt") {
    const installa = crea(
      "button",
      "benvenuto-scelta",
      "Aggiungi alla schermata Home"
    );
    installa.type = "button";
    installa.addEventListener("click", () => {
      const evento = _promptInstallazione;
      if (!evento) {
        chiudiInvito(true);
        return;
      }
      _promptInstallazione = null;
      installa.disabled = true;
      evento.prompt();
      Promise.resolve(evento.userChoice).then(esito => {
        chiudiInvito(!esito || esito.outcome !== "accepted");
      });
    });
    const nonOra = crea("button", "benvenuto-scelta", "Non ora");
    nonOra.type = "button";
    nonOra.addEventListener("click", () => chiudiInvito(true));
    riga.appendChild(installa);
    riga.appendChild(nonOra);
  } else {
    const capito = crea("button", "benvenuto-scelta", "Ho capito");
    capito.type = "button";
    capito.addEventListener("click", () => chiudiInvito(true));
    riga.appendChild(capito);
  }
  contenuto.appendChild(riga);
  banner.appendChild(contenuto);
  contenitore.appendChild(banner);
  riga.querySelector("button")?.focus();
  return true;
}

function testoCalendario(scadenze, includiFinestra = true) {
  return ErasmusWizPuro.creaCalendarioICS({
    ateneo: ateneoAttivo(),
    etichettaAteneo: window.ATENEO_LABEL,
    bandoInfo: window.BANDO_INFO,
    scadenze,
    includiFinestra,
    ora: new Date(),
  });
}

function scaricaTestoICS(ics, nomeFile, contenitoreInstallazione, alTermine) {
  if (!ics) return false;
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = nomeFile;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  const invitoMostrato = offriInstallazione(
    contenitoreInstallazione,
    alTermine
  );
  if (!invitoMostrato && typeof alTermine === "function") alTermine();
  return true;
}

function scaricaICSScadenza(scad, contenitoreInstallazione) {
  // Guardia V4: anche una chiamata programmatica non può esportare nel
  // calendario una scadenza storica del ciclo precedente.
  if (inPreBando() && scadenzaPassata(scad)) return false;
  return scaricaTestoICS(
    testoCalendario([scad], false),
    `erasmuswiz-${(scad.id || "scadenza")}.ics`,
    contenitoreInstallazione
  );
}

function scaricaCalendarioCompleto(contenitoreInstallazione, alTermine) {
  return scaricaTestoICS(
    testoCalendario(SCADENZE_CAFOSCARI || [], true),
    "erasmuswiz-date.ics",
    contenitoreInstallazione,
    alTermine
  );
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
      const badge = crea("div", "prossimo-passo-scadenza", `📅 ${scad.cosa} — ${countdownConCiclo(scad.data)}`);
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
  const preBando = inPreBando();

  if (preBando) {
    cont.appendChild(crea(
      "div",
      "cartellino-ciclo cartellino-ciclo-sezione",
      `Calendario del bando ${cartellinoCicloDati()} (concluso)`
    ));
  }

  // Il file unico contiene soltanto eventi futuri: oggi e' la sveglia del
  // nuovo bando; quando G2 aggiungera' le nuove scadenze entreranno da sole.
  if (testoCalendario(SCADENZE_CAFOSCARI || [], true)) {
    const btnTutte = crea(
      "button",
      "cand-btn-ics cand-btn-ics-tutte",
      "🗓 Aggiungi tutte le date"
    );
    btnTutte.type = "button";
    btnTutte.addEventListener("click", () => scaricaCalendarioCompleto(cont));
    cont.appendChild(btnTutte);
  }

  // R2.6: fonte raggiungibile e data di verifica per le date mostrate.
  // Tutte le scadenze di questa vista vengono dal bando in BANDO_INFO:
  // qui si dichiara QUANDO sono state controllate e DOVE verificarle.
  // Se lo stato del bando non è "aperto" (R2.5) lo si dice, prima delle date.
  const infoBando = window.BANDO_INFO || {};
  if (infoBando.linkUfficiale) {
    const riga  = crea("div", "cand-fonte-riga");
    const stato = statoBando();
    const prefisso =
      preBando                  ? `⚠️ Date del bando ${cartellinoCicloDati()}: sono dati storici, non scadenze per candidarti al ${cicloPercorsoBreve()}. ` :
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
  const prossimaVoceId = preBando
    ? undefined
    : checklist.find(v => !ZAINO.checklist[v.id] && !voceScaduta(v))?.id;

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
    card.appendChild(crea("div", "cand-scadenza-countdown", countdownConCiclo(scad.data)));

    // In pre-bando l'export storico resta visibile ma non produce un evento
    // inutile: la disattivazione spiega il perché. Fuori dal pre-bando resta
    // il comportamento precedente.
    if (!c.passata || preBando) {
      const btnIcs = crea("button", "cand-btn-ics", "🗓 Aggiungi al calendario");
      btnIcs.type = "button";
      if (c.passata && preBando) {
        btnIcs.disabled = true;
        const motivoId = `ics-motivo-${scad.id}`;
        btnIcs.setAttribute("aria-describedby", motivoId);
        card.appendChild(btnIcs);
        const motivo = crea(
          "span",
          "cand-ics-motivo",
          `Scadenza del bando ${cartellinoCicloDati()}, già passata`
        );
        motivo.id = motivoId;
        card.appendChild(motivo);
      } else {
        btnIcs.addEventListener("click", () => scaricaICSScadenza(scad, card));
        card.appendChild(btnIcs);
      }
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
// V0: tutta la semantica di lingua e livello vive in js/puro.js, caricato per
// primo da carica-atenei.js. app.js si occupa soltanto di presentare l'esito.
// Il lookup è pigro per tollerare anche jsdom, che scarica in parallelo gli
// script creati da document.write pur rispettando poi l'avvio della pagina.
function motorePuro() {
  if (!window.ErasmusWizPuro) throw new Error("js/puro.js non disponibile");
  return window.ErasmusWizPuro;
}
function requisitiLinguaNormalizzati(meta) {
  return motorePuro().requisitiLinguaNormalizzati(meta);
}
function foglieRequisitoLingua(requisito) {
  return motorePuro().foglieRequisitoLingua(requisito);
}
function valutaRequisitoLingua(meta, profilo) {
  return motorePuro().valutaRequisitoLingua(meta, profilo);
}

// Le lingue proposte all'utente (onboarding e profilo) derivano dai DATI
// delle mete (requisitoLingua), mai da una lista scritta nel codice
// (PLAN.md §5.2): un ateneo con mete in portoghese proporrà il portoghese
// senza toccare l'app. Ordinate per frequenza, poi alfabetico.
function lingueDaiDati() {
  const conta = {};
  (METE || []).forEach(meta => {
    const requisito = requisitiLinguaNormalizzati(meta);
    motorePuro().lingueDaRequisito(requisito).forEach(lingua => {
      conta[lingua] = (conta[lingua] || 0) + 1;
    });
  });
  return Object.keys(conta).sort((a, b) => (conta[b] - conta[a]) || a.localeCompare(b, "it"));
}

function fogliaLinguaInParole(foglia) {
  const base = foglia.testoOriginale || [foglia.lingua, foglia.livello].filter(Boolean).join(" ");
  const condizione = foglia.condizione ? ` — ${foglia.condizione}` : "";
  const verifica = (foglia.daVerificare || foglia.livelloAmbiguo) ? " — da verificare" : "";
  return base + condizione + verifica;
}

function lingueInFrase(lingue) {
  if (lingue.length <= 1) return lingue[0] || "";
  return `${lingue.slice(0, -1).join(", ")} o ${lingue[lingue.length - 1]}`;
}

function avvisiRequisitoLingua(requisito, meta, profilo) {
  const avvisi = [];
  const foglie = foglieRequisitoLingua(requisito);
  const lingueCondizionate = [...new Set(foglie
    .filter(f => f.condizionatoCorsi && f.lingua && !f.daVerificare)
    .map(f => f.lingua.toLocaleLowerCase("it")))];
  if (lingueCondizionate.length) {
    const elenco = lingueInFrase(lingueCondizionate);
    const apertura = lingueCondizionate.length === 1
      ? `Il requisito di lingua vale per i corsi tenuti in ${elenco}.`
      : `I requisiti di lingua valgono per i corsi tenuti in ${elenco}.`;
    avvisi.push({
      classe: "banner-stato stato-riserve",
      testo: `${apertura} Controlla che l'offerta di corsi in ${elenco} sia sufficiente per il tuo piano di studi.`
    });
  }
  if (requisito.rootPresunta) {
    avvisi.push({
      classe: "banner-stato stato-verifica",
      testo: "Questa meta indica più lingue senza dichiarare se ne basti una o se servano tutte: verifica la scheda ufficiale."
    });
  }
  if (motorePuro().certificatoDaRicordare(meta, profilo)) {
    avvisi.push({
      classe: "banner-stato stato-riserve",
      testo: "Questa destinazione parla di un certificato: leggi la condizione qui sopra. Per candidarti basta dichiarare il livello; la prova, se richiesta, arriva dopo la selezione."
    });
  }
  return avvisi;
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

function calcolaCompatibilita(meta, profilo) {
  const pLiv = punteggioLivello(meta, profilo);
  const pPos = punteggioPosti(meta, profilo);
  const valutazioneLingua = valutaRequisitoLingua(meta, profilo);
  // V0: anche la decisione visibile (✅/⚠️/🔒/🟡) è pura e testata.
  // Qui restano soltanto i due punteggi legati alla struttura della meta.
  return motorePuro().presentaCompatibilita(valutazioneLingua, {
    livello: pLiv,
    posti: pPos,
    livelloTesto: livelloInParole(profilo.livello)
  });
}

// Categoria sintetica per badge e filtri a chip (BR4): stessa soglia di calcolaCompatibilita.
function categoriaCompat(comp) {
  if (comp.totale === null) return comp.ordine >= 60 ? "medio" : "basso";
  if (comp.verificaLingua) return "medio";
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
  const requisito = requisitiLinguaNormalizzati(meta);
  if (requisito.assente) return "Lingua da verificare";
  const foglie = foglieRequisitoLingua(requisito);
  if (!foglie.length || foglie.some(f => f.daVerificare || f.livelloAmbiguo)) {
    return "Lingua da verificare";
  }
  const prima = foglie[0];
  const suffisso = requisito.rootPresunta ? " · verifica" : (foglie.length > 1 ? ` +${foglie.length - 1}` : "");
  return `${prima.lingua} ${prima.livello}${suffisso}`;
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

function chiudiWizardMete() {
  ZAINO.wizardMete = true;
  salvaZaino(ZAINO);
}

// Il riquadro nel tab Mete non esiste più, ma l'entrata continua a passare da
// questo contratto: ricerca e mappa devono conservare il loro smistamento.
function applicaEsitoWizardMete(esito) {
  chiudiWizardMete();
  if (esito === "si") {
    const cerca = document.getElementById("cerca-mete");
    if (cerca) {
      cerca.focus();
      cerca.scrollIntoView({ block: "center", behavior: comportamentoScrollRotta() });
    }
    return;
  }
  if (esito === "no") {
    const mappa = document.getElementById("card-mappa-mete");
    const dest = (mappa && mappa.style.display !== "none")
      ? mappa
      : document.getElementById("filtri-mete-chip");
    dest?.scrollIntoView({ block: "center", behavior: comportamentoScrollRotta() });
  }
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
// Stato vuoto ricco (redesign v2 §5.1). `azione` è opzionale: {testo, onClick}.
// role="status" (R22): il nodo NASCE a runtime dopo un'interazione — una
// ricerca o un filtro — e senza regione live chi usa uno screen reader non
// ha modo di accorgersi che la lista si è svuotata.
function creaStatoVuoto(titolo, spiegazione, azione) {
  const box = crea("div", "stato-vuoto");
  box.setAttribute("role", "status");
  const img = document.createElement("img");
  img.src = "img/mascotte/wiz-pensieroso.webp";
  img.alt = "";                 // decorativa: il testo dice già tutto
  img.width = 110; img.height = 150;  // riserva lo spazio: niente salto di layout
  img.loading = "lazy";
  img.className = "stato-vuoto-wiz";
  box.appendChild(img);
  box.appendChild(crea("p", "stato-vuoto-titolo", titolo));
  box.appendChild(crea("p", "stato-vuoto-testo", spiegazione));
  if (azione) {
    const btn = crea("button", "btn-secondary", azione.testo);
    btn.type = "button";
    btn.addEventListener("click", azione.onClick);
    box.appendChild(btn);
  }
  return box;
}

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
    // A11y — questo re-render distrugge il chip che aveva il fuoco, che così
    // cade su <body>: chi naviga da tastiera, dopo aver scelto un filtro,
    // ripartirebbe col Tab dall'inizio della pagina. Si ricorda la POSIZIONE
    // del chip a fuoco e la si ridà al nodo nuovo corrispondente (la lista dei
    // chip è fissa, l'indice è un'identità stabile).
    const fuocoChip = document.activeElement;
    const indiceFuoco = (fuocoChip && filtriChip.contains(fuocoChip) &&
      fuocoChip.classList.contains("chip-filtro"))
      ? Array.prototype.indexOf.call(filtriChip.children, fuocoChip)
      : -1;
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
    // `preventScroll`: il fuoco torna dov'era, la pagina non deve muoversi.
    // Il ripristino scatta solo se il fuoco era GIÀ su un chip, quindi non
    // ruba nulla; dopo un click di mouse l'anello resta invisibile perché il
    // tema usa `:focus-visible`, non `:focus`.
    if (indiceFuoco > -1 && filtriChip.children[indiceFuoco]) {
      filtriChip.children[indiceFuoco].focus({ preventScroll: true });
    }
  }
  if (profilo && filtroMeteAttivo === "lingua") {
    // Il filtro usa lo stesso esito a tre valori del punteggio. Un requisito
    // sconosciuto resta visibile: l'ambiguità non deve diventare un'esclusione.
    elenco = elenco.filter(({ meta }) => motorePuro().linguaCopertaPerFiltro(meta, profilo));
    if (intro) intro.textContent = "Queste sono le mete che le tue lingue coprono davvero.";
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

  // La mappa resta sincronizzata con l'ELENCO FILTRATO: una sola fonte per
  // lista e mappa, mai due filtri diversi.
  renderMappaMete(elenco.map(e => e.meta));

  // ⚠️ I due `return` sono obbligatori: senza, la lista vuota e lo stato
  // vuoto verrebbero renderizzati insieme.
  if (elenco.length === 0 && testo) {
    cont.appendChild(creaStatoVuoto(
      `Nessuna meta trovata per «${testo}»`,
      "Può essere scritto in un altro modo, oppure quella sede non è nel bando del tuo dipartimento.",
      { testo: "Svuota la ricerca", onClick: () => {
        // renderMete() diretta, non un Event("input") simulato: il campo ha
        // un debounce di 150ms (init, in fondo al file) e un bottone premuto
        // non deve aspettarlo.
        const campo = document.getElementById("cerca-mete");
        if (campo) { campo.value = ""; campo.focus(); }
        renderMete();
      } }
    ));
    return;
  }
  if (elenco.length === 0 && profilo && filtroMeteAttivo !== "tutte") {
    // "lingua" non è una categoria di compatibilità: se il filtro vuoto è
    // quello, la spiegazione generica direbbe la cosa sbagliata.
    const perLingua = filtroMeteAttivo === "lingua";
    cont.appendChild(creaStatoVuoto(
      perLingua ? "Nessuna meta coperta dalle tue lingue" : "Nessuna meta con questo filtro",
      perLingua
        ? "Nessuna meta di quest'area chiede una lingua che hai già certificato. Le altre restano visibili: il requisito lo verifichi meta per meta."
        : "Con i tuoi dati attuali questa categoria è vuota. Le altre categorie restano piene.",
      // R21 — il bottone del canvas cercava `.chip-filtro[data-filtro="tutte"]`,
      // ma quell'attributo non esiste: si agisce sullo stato, come fanno i chip.
      { testo: "Mostra tutte le mete", onClick: () => { filtroMeteAttivo = "tutte"; renderMete(); } }
    ));
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
// ELENCO DELLE METE SALVATE (V6a)
// ============================================================
// Il copy che descrive raccolta e priorità vive qui soltanto: tenerlo in un
// oggetto impedisce che un futuro ritocco riintroduca quote o promesse in un
// punto secondario della stessa sezione.
const COPY_SCELTE = Object.freeze({
  titoloElenco: "Le tue preferite, in ordine di priorità",
  rigaSottile: n => `${n} ${n === 1 ? "preferita" : "preferite"}, in ordine di priorità`,
  vuoto: "☆ Tocca la stellina su una meta per aggiungerla qui. L'ordine è tuo: lo cambi quando vuoi.",
  rimuovi: "Rimuovi dalle tue preferite",
  rimossa: nome => `${nome} — rimossa dalle tue preferite`,
  annulla: "Annulla",
  annuncioRimozione: nome => `${nome} rimossa dalle tue preferite.`,
  ripristinata: nome => `${nome} ripristinata nella posizione precedente.`,
  orfanaNome: id => `Destinazione salvata (${id})`,
  orfanaNota: "Questa destinazione non è più disponibile nell’elenco corrente.",
  spostata: (nome, posizione, totale) =>
    `${nome} spostata in posizione ${posizione} di ${totale}.`
});

let _rimozionePreferita = null;

function chiudiAnnullamentoPreferita() {
  if (!_rimozionePreferita) return;
  _rimozionePreferita = null;
  renderPreferite();
}

function annunciaScelte(testoAnnuncio) {
  const annunci = document.getElementById("annunci-scelte");
  if (!annunci) return;
  // La regione esiste già nel DOM: si cambia il suo contenuto in un frame
  // successivo, così anche due messaggi uguali consecutivi sono annunciati.
  annunci.textContent = "";
  if (!testoAnnuncio) return;
  requestAnimationFrame(() => {
    if (annunci.isConnected) annunci.textContent = testoAnnuncio;
  });
}

// Ordine persistito in ZAINO.schedina; la normalizzazione pura mantiene
// l'ordine salvato, aggiunge le nuove in coda e rimuove solo riferimenti che
// non appartengono più alla raccolta.
function schedinaIds() {
  const stato = ErasmusWizPuro.normalizzaListeScelte(
    ZAINO.metePreferite,
    ZAINO.schedina
  );
  ZAINO.metePreferite = stato.metePreferite;
  ZAINO.schedina = stato.schedina;
  return ZAINO.schedina;
}

function renderPreferite(msg) {
  const cont = document.getElementById("sezione-preferite");
  if (!cont) return;
  if (!msg?.mantieniRimozione) _rimozionePreferita = null;
  cont.innerHTML = "";

  const ids = schedinaIds();
  salvaZaino(ZAINO);

  const header = crea("div", "preferite-header");
  const titolo = crea("h3", "solo-lettori", COPY_SCELTE.titoloElenco);
  titolo.id = "titolo-elenco-preferite";
  header.appendChild(titolo);
  const etichetta = crea("span", "preferite-label", COPY_SCELTE.rigaSottile(ids.length));
  etichetta.setAttribute("aria-hidden", "true");
  header.appendChild(etichetta);
  cont.appendChild(header);

  annunciaScelte(msg?.annuncio || "");

  const fattoStorico = ErasmusWizPuro.frasePassatoMassimo(
    ErasmusWizPuro.massimoDestinazioniBando(window.BANDO_INFO)
  );
  if (fattoStorico) {
    cont.appendChild(crea("p", "preferite-fatto-storico", fattoStorico));
  }

  if (ids.length === 0 && !_rimozionePreferita) {
    cont.appendChild(crea("p", "schedina-invito-vuota", COPY_SCELTE.vuoto));
    return;
  }

  const lista = crea("div", "schedina-lista");
  const righe = ErasmusWizPuro.righeScelteConOrfane(ids, METE || []);
  if (_rimozionePreferita) {
    righe.splice(
      Math.min(_rimozionePreferita.indice, righe.length),
      0,
      { rimozione: _rimozionePreferita }
    );
  }

  righe.forEach((riga, i) => {
    const slot = crea("div", "schedina-slot");
    slot.appendChild(crea("span", "schedina-numero", String(i + 1)));

    if (riga.rimozione) {
      slot.classList.add("schedina-slot-rimosso");
      slot.appendChild(crea(
        "div",
        "schedina-corpo schedina-rimossa",
        COPY_SCELTE.rimossa(riga.rimozione.nome)
      ));
      const annulla = crea("button", "schedina-annulla", COPY_SCELTE.annulla);
      annulla.type = "button";
      annulla.addEventListener("click", () => {
        const rimossa = _rimozionePreferita;
        if (!rimossa) return;
        const stato = ErasmusWizPuro.applicaStellaScelte(
          ZAINO.metePreferite,
          ZAINO.schedina,
          rimossa.id,
          true
        );
        stato.schedina = stato.schedina.filter(id => id !== rimossa.id);
        stato.schedina.splice(
          Math.min(rimossa.indice, stato.schedina.length),
          0,
          rimossa.id
        );
        ZAINO.metePreferite = stato.metePreferite;
        ZAINO.schedina = stato.schedina;
        _rimozionePreferita = null;
        salvaZaino(ZAINO);
        renderPreferite({
          annuncio: COPY_SCELTE.ripristinata(rimossa.nome),
          indiceFuoco: rimossa.indice,
          controlloFuoco: 2
        });
        renderMete();
        renderMissione();
      });
      slot.appendChild(annulla);
      lista.appendChild(slot);
      return;
    }

    const { id, meta } = riga;
    const corpo = crea("div", "schedina-corpo");
    const nome = meta
      ? nomeUniversita(meta.universita)
      : COPY_SCELTE.orfanaNome(id);
    corpo.appendChild(crea("span", "schedina-nome", nome));
    if (riga.orfana) {
      slot.classList.add("schedina-slot-orfano");
      corpo.appendChild(crea("span", "schedina-stato", COPY_SCELTE.orfanaNota));
    } else if (ZAINO.profilo) {
      const comp = calcolaCompatibilita(meta, ZAINO.profilo);
      corpo.appendChild(crea("span", "schedina-stato",
        `${comp.icona} ${comp.totale !== null ? comp.totale + "%" : comp.stato}`));
    }
    slot.appendChild(corpo);

    const azioni = crea("div", "schedina-azioni");
    const su = crea("button", "schedina-freccia", "▲");
    su.type = "button"; su.title = "Sposta su";
    su.setAttribute("aria-disabled", riga.indice === 0 ? "true" : "false");
    su.addEventListener("click", () => spostaSchedina(riga.indice, -1));
    const giu = crea("button", "schedina-freccia", "▼");
    giu.type = "button"; giu.title = "Sposta giù";
    giu.setAttribute("aria-disabled", riga.indice === ids.length - 1 ? "true" : "false");
    giu.addEventListener("click", () => spostaSchedina(riga.indice, 1));
    const rimuovi = crea("button", "schedina-rimuovi", "✕");
    rimuovi.type = "button"; rimuovi.title = COPY_SCELTE.rimuovi;
    rimuovi.addEventListener("click", () => togglePreferita(id));
    azioni.appendChild(su); azioni.appendChild(giu); azioni.appendChild(rimuovi);
    slot.appendChild(azioni);

    lista.appendChild(slot);
  });
  cont.appendChild(lista);

  if (msg?.fuocoAnnulla) {
    lista.querySelector(".schedina-annulla")?.focus({ preventScroll: true });
  } else if (Number.isInteger(msg?.indiceFuoco)) {
    const slotFuoco = lista.children[msg.indiceFuoco];
    const controlli = slotFuoco?.querySelectorAll(".schedina-azioni button");
    const controllo = controlli?.[msg.controlloFuoco];
    controllo?.focus({ preventScroll: true });
  }
}

function spostaSchedina(indice, direzione) {
  const ids   = ZAINO.schedina;
  const nuovo = indice + direzione;
  if (nuovo < 0 || nuovo >= ids.length) return;
  const attivo = document.activeElement;
  const azioni = attivo?.closest(".schedina-azioni");
  const controlloFuoco = azioni
    ? Array.prototype.indexOf.call(azioni.children, attivo)
    : 0;
  [ids[indice], ids[nuovo]] = [ids[nuovo], ids[indice]];
  salvaZaino(ZAINO);
  const meta = (METE || []).find(m => m.id === ids[nuovo]);
  const nome = meta
    ? nomeUniversita(meta.universita)
    : COPY_SCELTE.orfanaNome(ids[nuovo]);
  renderPreferite({
    indiceFuoco: nuovo,
    controlloFuoco,
    annuncio: COPY_SCELTE.spostata(nome, nuovo + 1, ids.length)
  });
}

function togglePreferita(id) {
  const idx = ZAINO.metePreferite.indexOf(id);
  if (idx !== -1) {
    const ordine = schedinaIds().slice();
    const indiceOrdine = ordine.indexOf(id);
    const meta = (METE || []).find(m => m.id === id);
    const nome = meta
      ? nomeUniversita(meta.universita)
      : COPY_SCELTE.orfanaNome(id);
    _rimozionePreferita = {
      id,
      indice: indiceOrdine < 0 ? idx : indiceOrdine,
      nome
    };
    const stato = ErasmusWizPuro.applicaStellaScelte(
      ZAINO.metePreferite,
      ZAINO.schedina,
      id,
      false
    );
    ZAINO.metePreferite = stato.metePreferite;
    ZAINO.schedina = stato.schedina;
    salvaZaino(ZAINO);
    renderPreferite({
      mantieniRimozione: true,
      fuocoAnnulla: true,
      annuncio: COPY_SCELTE.annuncioRimozione(nome)
    });
    renderMete();
    renderMissione(); // le preferite spostano la tappa corrente: si riallinea tutto
  } else {
    const stato = ErasmusWizPuro.applicaStellaScelte(
      ZAINO.metePreferite,
      ZAINO.schedina,
      id,
      true
    );
    ZAINO.metePreferite = stato.metePreferite;
    ZAINO.schedina = stato.schedina;
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
  const requisitoLingua = requisitiLinguaNormalizzati(meta);
  const foglieLingua = foglieRequisitoLingua(requisitoLingua);
  const contenutoLingua = document.createElement("div");
  if (!requisitoLingua.assente && foglieLingua.length) {
    foglieLingua.forEach(foglia =>
      ulL.appendChild(crea("li", null, fogliaLinguaInParole(foglia))));
  } else {
    ulL.appendChild(crea("li", "dett-vuoto", "Non indicato nella lista ufficiale: controlla la scheda PDF."));
  }
  contenutoLingua.appendChild(ulL);
  avvisiRequisitoLingua(requisitoLingua, meta, ZAINO.profilo).forEach(avviso => {
    const banner = crea("div", avviso.classe);
    banner.setAttribute("role", "note");
    banner.appendChild(crea("span", "banner-stato-icona", "⚠️"));
    banner.appendChild(crea("span", null, avviso.testo));
    contenutoLingua.appendChild(banner);
  });
  corpo.appendChild(rigaDettaglio("Requisiti linguistici", contenutoLingua));

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
    const boxScadenze = crea("div", "dett-scadenze-ospitante");
    if (inPreBando()) {
      boxScadenze.appendChild(crea(
        "p",
        "cartellino-ciclo",
        `Date del ciclo ${cartellinoCicloDati()} — l’università ospitante le ripubblica ogni anno.`
      ));
    }
    const ulS = document.createElement("ul");
    meta.scadenzeOspitante.forEach(s =>
      ulS.appendChild(crea("li", null, `${s.cosa}: ${s.periodo}`)));
    boxScadenze.appendChild(ulS);
    corpo.appendChild(rigaDettaglio("Scadenze dell'università ospitante", boxScadenze));
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
  const applicabili = vociPostApplicabili();
  const idApplicabili = new Set(applicabili.map(voce => voce.id));

  if (ZAINO.fase === "selezionato" && risposteProfiloPostMancanti().length) {
    const invito = crea("div", "profilo-post-invito");
    const testi = crea("div");
    testi.appendChild(crea("strong", null, "Completa due risposte per personalizzare lo zaino"));
    testi.appendChild(crea(
      "p",
      null,
      "Cittadinanza extra-UE e ricerca tesi decidono quali passaggi riguardano davvero te."
    ));
    invito.appendChild(testi);
    const btn = crea("button", "btn-secondary btn-primary-sm", "Completa il profilo");
    btn.type = "button";
    btn.addEventListener("click", () => vaiA("profilo"));
    invito.appendChild(btn);
    cont.appendChild(invito);
  }

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
    const compitiCapitolo = vociCapitolo.filter(voce => idApplicabili.has(voce.id));
    const opzioniCapitolo = vociCapitolo.filter(voce => voce.tipo === "opzione");
    const avvertenzeCapitolo = vociCapitolo.filter(voce => voce.tipo === "avvertenza");

    const capitoloEl = crea("div", "zaino-capitolo");
    // Testa-capitolo come blocco distinto (Fase C4): stesso linguaggio dei
    // capitoli-scadenza della candidatura, con il conteggio del capitolo al
    // posto del countdown (qui non c'è urgenza: è un percorso, non una corsa).
    const testa = crea("div", "zaino-capitolo-testa");
    testa.appendChild(crea("h2", "zaino-capitolo-titolo", capitolo));
    const fattiCapitolo = compitiCapitolo.filter(v => spunte[v.id]).length;
    testa.appendChild(crea("span", "zaino-capitolo-count", `${fattiCapitolo} di ${compitiCapitolo.length}`));
    capitoloEl.appendChild(testa);

    const fasi = [];
    compitiCapitolo.forEach(voce => {
      if (!fasi.includes(voce.fase)) fasi.push(voce.fase);
    });

    const corpo = crea("div", "zaino-capitolo-corpo");
    if (avvertenzeCapitolo.length) {
      const avvertenze = crea("section", "zaino-da-sapere");
      avvertenze.appendChild(crea("h3", "gruppo-post-titolo", "Da sapere prima"));
      avvertenzeCapitolo.forEach(voce =>
        avvertenze.appendChild(crea("p", "zaino-avvertenza", voce.testo))
      );
      corpo.appendChild(avvertenze);
    }

    fasi.forEach(fase => {
      const voci = compitiCapitolo.filter(v => v.fase === fase);
      const gruppo = crea("div", "gruppo-post");
      gruppo.appendChild(crea("h3", "gruppo-post-titolo", fase));
      voci.forEach(voce => gruppo.appendChild(creaVocePost(voce)));
      corpo.appendChild(gruppo);
    });

    if (opzioniCapitolo.length) {
      const opzioni = crea("section", "zaino-opzioni");
      opzioni.appendChild(crea("h3", "gruppo-post-titolo", "Se ti riguarda"));
      opzioniCapitolo.forEach(voce => opzioni.appendChild(creaVocePost(voce)));
      corpo.appendChild(opzioni);
    }
    capitoloEl.appendChild(corpo);

    cont.appendChild(capitoloEl);
  });

  // Il conteggio dello zaino vive nella testa della SUA stazione
  // (renderPercorso), non nella barra della candidatura (R3.5).
}

// La porta "in attesa" consuma il contenuto dell'ateneo attivo. Le date
// assolute restano volutamente fuori: esempioCiclo misura il passato e il
// gate G1 vieta di presentarlo come calendario corrente.
function renderAttesaInfo() {
  const cont = document.getElementById("attesa-info");
  if (!cont) return;
  const visibile = ZAINO.fase === "in-attesa";
  cont.hidden = !visibile;
  if (!visibile) return;

  const info = window.ATTESA_INFO || {};
  cont.innerHTML = "";

  const introduzione = crea("div", "banner-stato stato-verifica");
  const corpoIntroduzione = crea("div");
  corpoIntroduzione.appendChild(crea("h3", "stazione-titolo", info.titolo || "In attesa dell'esito"));
  if (info.sottotitolo) corpoIntroduzione.appendChild(crea("p", "stazione-testo", info.sottotitolo));
  if (info.quantoDura) {
    corpoIntroduzione.appendChild(crea("p", "stazione-testo", "Quanto dura: " + info.quantoDura));
  }
  introduzione.appendChild(corpoIntroduzione);
  cont.appendChild(introduzione);

  [
    ["Cosa succede adesso", info.tappe],
    ["Cosa puoi fare intanto", info.intanto],
    ["A cosa fare attenzione", info.attenzione],
  ].forEach(([titolo, voci]) => {
    if (!Array.isArray(voci) || voci.length === 0) return;
    const capitolo = crea("div", "zaino-capitolo");
    const testa = crea("div", "zaino-capitolo-testa");
    testa.appendChild(crea("h4", "zaino-capitolo-titolo", titolo));
    capitolo.appendChild(testa);
    const corpo = crea("div", "zaino-capitolo-corpo");
    voci.forEach(voce => {
      const gruppo = crea("div", "gruppo-post");
      gruppo.appendChild(crea("h5", "gruppo-post-titolo", voce.titolo));
      gruppo.appendChild(crea("p", "stazione-testo", voce.testo));
      corpo.appendChild(gruppo);
    });
    capitolo.appendChild(corpo);
    cont.appendChild(capitolo);
  });

  if (info.inVerifica) {
    cont.appendChild(crea(
      "div",
      "banner-stato stato-riserve",
      "La procedura generale è verificata; i dettagli di assegnazione della sede possono cambiare fra le Facoltà."
    ));
  }
  if (info.fonteUrl) {
    const fonte = crea("a", "dett-link", "Consulta la fonte ufficiale ↗");
    fonte.href = info.fonteUrl;
    fonte.target = "_blank";
    fonte.rel = "noopener";
    cont.appendChild(fonte);
  }
}

// Il gate dell'esito (tappa 4 del Percorso): auto-dichiarato,
// il sito non conosce le graduatorie. Da R3 le due checklist vivono in
// stazioni separate e sono SEMPRE renderizzate: il gate cambia solo lo
// stato del viaggio (ZAINO.fase) e la stazione corrente.
function aggiornaBottoniFase() {
  document.querySelectorAll(".toggle-fase-btn[data-fase]").forEach(btn => {
    const attivo = ZAINO.fase === btn.dataset.fase;
    btn.classList.toggle("fase-attiva", attivo);
    btn.setAttribute("aria-pressed", attivo ? "true" : "false");
  });
}

function destinazionePerFase(fase) {
  if (fase === "esplorando") return "requisiti";
  if (fase === "in-attesa") return "esito";
  return primaTappaPostSelezione();
}

function impostaFaseViaggio(fase, opzioni = {}) {
  if (!ErasmusWizPuro.FASI_VIAGGIO.includes(fase)) return false;
  const primaSelezione = fase === "selezionato" && !ZAINO.zainoCelebrato;
  ZAINO.fase = fase;
  if (primaSelezione) ZAINO.zainoCelebrato = true;
  salvaZaino(ZAINO);
  aggiornaBottoniFase();
  renderHome();
  renderChecklistPost();
  renderMissione();
  if (opzioni.naviga !== false) {
    vaiAStazione(destinazionePerFase(fase), { esclusiva: true });
  }
  if (primaSelezione && opzioni.celebra !== false) mostraCelebrazioneZaino();
  return true;
}

function initToggleFase() {
  const btnEsplorando = document.getElementById("fase-esplorando");
  const btnAttesa     = document.getElementById("fase-in-attesa");
  const btnSelezionato = document.getElementById("fase-selezionato");
  if (!btnEsplorando || !btnAttesa || !btnSelezionato) return;

  btnEsplorando.addEventListener("click", () => impostaFaseViaggio("esplorando"));
  btnAttesa.addEventListener("click", () => impostaFaseViaggio("in-attesa"));
  btnSelezionato.addEventListener("click", () => impostaFaseViaggio("selezionato"));

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
  // Censimento F9: anche qui la modale restituisce il fuoco PRIMA della rotta;
  // invertire le due chiamate permetterebbe alla chiusura di rubarlo a vaiA().
  if (btn) btn.addEventListener("click", () => {
    chiudiCelebrazioneZaino();
    vaiAStazione(primaTappaPostSelezione());
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
//         ciclo, ateneo,                   // mobilita' a cui appartiene
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
    ciclo: ZAINO.cicloPercorso,
    ateneo: ateneoAttivo(),
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
  aggiungiGruppo("Mete salvate", inSchedina);
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
  if (inPreBando() && requisiti.length) {
    cont.appendChild(crea(
      "div",
      "cartellino-ciclo cartellino-ciclo-sezione",
      `Requisiti del bando ${cartellinoCicloDati()}. ` +
      `Il bando ${cicloPercorsoBreve()} può cambiarli: qui per farti un’idea, non per candidarti.`
    ));
  }

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
// ONBOARDING — 4 passi + valore immediato (V3)
// ============================================================
// La ripresa vive nella sessione, non nello zaino per-ateneo: P1 viene
// risposto prima di sapere in quale zaino andrebbe scritto.
const CHIAVE_ONBOARDING_RIPRESA = "ew-onboarding-ripresa";

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

// V3/ottimizzazione 1 — la prima metà del raggruppamento dipende solo
// dall'identità dell'array e dalla sua lunghezza, non dalla larghezza resa.
// WeakMap evita sia una chiave globale per-ateneo (sbagliata con i filtri)
// sia di trattenere in memoria array che l'interfaccia non usa più.
const _mappaCachePerCitta = new WeakMap();
function mappaGruppiPerCitta(mete) {
  const precedente = _mappaCachePerCitta.get(mete);
  if (precedente && precedente.lunghezza === mete.length) return precedente.gruppi;

  const gruppi = new Map();
  mete.forEach(m => {
    const c = coordDiMeta(m);
    if (!c || c.fuori || c.x === undefined) return;
    const k = m.citta + "|" + m.paese;
    if (!gruppi.has(k)) {
      gruppi.set(k, {
        x: c.x, y: c.y, citta: m.citta, paese: m.paese, items: []
      });
    }
    gruppi.get(k).items.push(m);
  });
  _mappaCachePerCitta.set(mete, { lunghezza: mete.length, gruppi });
  return gruppi;
}

function mappaClusterizza(mete, cont) {
  // 1) stessa coppia città+paese = coordinate identiche → un gruppo
  const perCitta = mappaGruppiPerCitta(mete);
  // 2) fusione dei gruppi sotto soglia di distanza (unità viewBox,
  //    scalate sulla larghezza resa: su schermi stretti si fonde di più)
  const P = COORDINATE_CITTA.PROIEZIONE;
  const soglia = 30 * (P.viewBoxW / Math.max(cont.clientWidth || 320, 280));
  const out = [];
  // V3/ottimizzazione 2 — ogni centro viene cercato solo nella sua cella e
  // nelle otto adiacenti. Fra più candidati vince comunque quello inserito
  // per primo: è esattamente l'ordine del vecchio `out.find()`.
  const celle = new Map();
  const chiaveCella = (x, y) => `${Math.floor(x / soglia)}|${Math.floor(y / soglia)}`;
  perCitta.forEach(g => {
    const cx = Math.floor(g.x / soglia);
    const cy = Math.floor(g.y / soglia);
    let vicino = null;
    let indiceVicino = Infinity;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const candidati = celle.get(`${cx + dx}|${cy + dy}`) || [];
        candidati.forEach(candidato => {
          if (
            candidato.indice < indiceVicino &&
            Math.hypot(candidato.gruppo.x - g.x, candidato.gruppo.y - g.y) < soglia
          ) {
            vicino = candidato.gruppo;
            indiceVicino = candidato.indice;
          }
        });
      }
    }
    if (vicino) vicino.items = vicino.items.concat(g.items);
    else {
      const nuovo = {
        x: g.x, y: g.y, citta: g.citta, paese: g.paese, items: g.items.slice()
      };
      const indice = out.length;
      out.push(nuovo);
      const chiave = chiaveCella(nuovo.x, nuovo.y);
      if (!celle.has(chiave)) celle.set(chiave, []);
      celle.get(chiave).push({ gruppo: nuovo, indice });
    }
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
    const requisito = requisitiLinguaNormalizzati(m);
    const foglie = foglieRequisitoLingua(requisito);
    if (!requisito.assente && foglie.length && !foglie.some(f => f.daVerificare || f.livelloAmbiguo)) {
      pezzi.push(foglie.map(f => `${f.lingua} ${f.livello}`).join(requisito.op === "ALL" ? " + " : " / "));
      if (requisito.rootPresunta) pezzi.push("combinazione da verificare");
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

function mappaClasseCompatibilita(cl, opts) {
  if (typeof opts.compatibilita !== "function") return "";
  const categorie = cl.items.map(opts.compatibilita);
  if (categorie.includes("ok")) return " mappa-pin-compatibile";
  if (categorie.includes("medio")) return " mappa-pin-da-verificare";
  return " mappa-pin-non-accessibile";
}

function mappaRenderPins(layer, mete, opts) {
  if (!layer) return;
  opts = opts || {};
  if (opts.fuoriTab) layer.setAttribute("aria-hidden", "true");
  else layer.removeAttribute("aria-hidden");

  const P = COORDINATE_CITTA.PROIEZIONE;
  const cont = layer.parentElement;
  const esistenti = new Map();
  Array.from(layer.children).forEach(pin => {
    if (pin.dataset && pin.dataset.mappaChiave) {
      esistenti.set(pin.dataset.mappaChiave, pin);
    }
  });
  const usati = new Set();

  mappaClusterizza(mete, cont).forEach((cl, i) => {
    const n = cl.items.length;
    // V3/ottimizzazione 3 — il capofila è la stessa chiave stabile che
    // governa l'ordine del cluster. Se esiste, si aggiorna quel pulsante.
    const chiave = `${cl.citta}|${cl.paese}`;
    let b = esistenti.get(chiave);
    if (!b) {
      b = crea("button", "mappa-pin");
      b.type = "button";
      b.dataset.mappaChiave = chiave;
      b.appendChild(crea("span", "punto"));
      b.addEventListener("mouseenter", () => {
        if (b._mappaCluster) mappaMostraTooltip(b._mappaCluster, b);
      });
      b.addEventListener("mouseleave", mappaNascondiTooltip);
      b.addEventListener("focus", () => {
        if (b._mappaCluster) mappaMostraTooltip(b._mappaCluster, b);
      });
      b.addEventListener("blur", mappaNascondiTooltip);
      b.addEventListener("click", () => {
        const gruppo = b._mappaCluster;
        if (!gruppo) return;
        mappaNascondiTooltip();
        if (gruppo.items.length === 1) apriDettaglioMeta(gruppo.items[0]);
        else apriListaCluster(gruppo);
      });
    }
    b._mappaCluster = cl;
    b.className =
      "mappa-pin" + (n > 1 ? " mappa-pin-cluster" : "") +
      (opts.evidenzia ? " evidenzia" : "") +
      (opts.stellate && n === 1 && opts.stellate.includes(cl.items[0].id)
        ? " mappa-pin-stella"
        : "") +
      mappaClasseCompatibilita(cl, opts);
    b.style.left = (cl.x / P.viewBoxW * 100) + "%";
    b.style.top  = (cl.y / P.viewBoxH * 100) + "%";
    const dot = b.querySelector(".punto");
    dot.textContent = n > 1 ? String(n) : "";
    dot.style.animationDelay = opts.evidenzia ? Math.min(i, 25) * 30 + "ms" : "";
    if (opts.fuoriTab) b.setAttribute("tabindex", "-1");
    else b.removeAttribute("tabindex");
    b.setAttribute("aria-label", n === 1
      ? `${nomeUniversita(cl.items[0].universita)}, ${cl.citta} (${cl.paese}) — apri il dettaglio`
      : `${n} mete vicino a ${cl.citta} — apri l'elenco`);
    layer.appendChild(b);
    usati.add(b);
  });
  Array.from(layer.children).forEach(pin => {
    if (!usati.has(pin)) pin.remove();
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
let _mappaBenv = null;
let _mappaResizeRaf = null;
window.addEventListener("resize", () => {
  if (_mappaResizeRaf) cancelAnimationFrame(_mappaResizeRaf);
  _mappaResizeRaf = requestAnimationFrame(() => {
    if (_mappaBenv && _mappaBenv.mete) mappaRenderPins(_mappaBenv.layer, _mappaBenv.mete, _mappaBenv.opts);
    if (_mappaMete && _mappaMete.mete) mappaRenderPins(_mappaMete.layer, _mappaMete.mete, _mappaMete.opts);
  });
});

// ============================================================
// BENVENUTO (primo contatto) — quattro passi e un esito, sulla mappa.
// Sostituisce l'overlay onboarding (bug P0.1: su mobile le prime
// opzioni erano irraggiungibili). Stesse domande, stessa uscita.
// ============================================================
function benvSetPasso(n) {
  document.querySelectorAll("#home-benvenuto .benvenuto-passo").forEach(p => {
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

function benvMostraLegenda(mostra) {
  const legenda = document.querySelector(
    "#home-benvenuto .benvenuto-mappa-legenda"
  );
  if (legenda) legenda.hidden = !mostra;
}

// Revisione V5 (Nicola, 2026-07-29). Misurato a 375×812: nelle due schermate
// finali dell'entrata la domanda cadeva a fondo schermo e i bottoni di
// risposta FINIVANO SOTTO IL BORDO — si leggeva la domanda e non le risposte.
// Nessuna prova lo vedeva, perché il `click()` di Playwright scorre da solo.
// Si porta a schermo il blocco delle scelte SOLO se serve davvero (su desktop
// ci sta già) e con il comportamento di scorrimento della rotta, che rispetta
// `prefers-reduced-motion` (contratto F5 di V1).
function portaAVistaScelte() {
  const zona = document.getElementById("benvenuto-scelte");
  if (!zona) return;
  const riquadro = zona.getBoundingClientRect();
  if (riquadro.top >= 0 && riquadro.bottom <= window.innerHeight) return;
  zona.scrollIntoView({
    // Se il blocco ci sta tutto si allinea in basso, così restano visibili
    // insieme domanda e bottoni; se è più alto dello schermo vince la domanda.
    block: riquadro.height <= window.innerHeight ? "end" : "start",
    behavior: comportamentoScrollRotta(),
  });
}

function benvTestoPorta(fase) {
  return document.querySelector(`.toggle-fase-btn[data-fase="${fase}"]`)
    ?.textContent.trim() || "";
}

// P1 — i testi vengono letti dalle tre porte già esistenti nel Percorso.
// Non nasce una quarta copia della stessa domanda.
function benvPassoPorta() {
  benvSetPasso(1);
  benvMostraLegenda(false);
  benvFumetto("Prima di partire: a che punto sei?", "pensieroso");
  if (_mappaBenv && _mappaBenv.layer) {
    _mappaBenv.layer.innerHTML = "";
    _mappaBenv.layer.setAttribute("aria-hidden", "true");
    _mappaBenv.mete = null;
  }
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea(
    "p",
    "benvenuto-sotto-domanda",
    "Scegli il momento che descrive il tuo percorso."
  ));
  const riga = crea("div", "benvenuto-scelte-riga");
  ErasmusWizPuro.FASI_VIAGGIO.forEach(fase => {
    const testo = benvTestoPorta(fase);
    if (!testo) return;
    const btn = crea("button", "benvenuto-scelta", testo);
    btn.type = "button";
    btn.dataset.fase = fase;
    btn.addEventListener("click", () => {
      window._onboardingPorta = fase;
      benvPassoAteneo();
    });
    riga.appendChild(btn);
  });
  zona.appendChild(riga);
}

function benvDisegnaAtenei(soloAteneo) {
  const layer = _mappaBenv && _mappaBenv.layer;
  if (!layer) return;
  layer.innerHTML = "";
  layer.setAttribute("aria-hidden", "true");
  const P = COORDINATE_CITTA.PROIEZIONE;
  Object.keys(ATENEI_REGISTRO).forEach(k => {
    if (soloAteneo && k !== soloAteneo) return;
    const a = ATENEI_REGISTRO[k];
    if (!a.disponibile || !CITTA_ATENEO[k]) return;
    const c = CITTA_ATENEO[k];
    const [x, y] = proiettaXY(c.lat, c.lon);
    const b = crea("button", "mappa-pin mappa-pin-ateneo");
    b.type = "button";
    b.tabIndex = -1;
    b.style.left = (x / P.viewBoxW * 100) + "%";
    b.style.top  = (y / P.viewBoxH * 100) + "%";
    b.setAttribute("aria-label", `${a.label} (${c.citta}) — scegli`);
    b.appendChild(crea("span", "anello"));
    b.appendChild(crea("span", "punto"));
    b.appendChild(crea("span", "mappa-pin-etichetta", c.citta));
    b.addEventListener("click", () => benvScegliAteneo(k));
    layer.appendChild(b);
  });
  _mappaBenv.mete = null;
}

function benvPassoAteneo() {
  benvSetPasso(2);
  benvMostraLegenda(false);
  benvFumetto("Ciao! Sono Wiz. Dove studi?", "saluto");
  // Dal REGISTRO, non da ATENEI: qui si sceglie DOVE si studia, quindi vanno
  // mostrati anche gli atenei che R1.5 non ha caricato.
  benvDisegnaAtenei(null);
  // Scelte ridondanti sotto la mappa (accessibilità e chiarezza)
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  const disponibili = Object.keys(ATENEI_REGISTRO)
    .filter(k => ATENEI_REGISTRO[k].disponibile);
  zona.appendChild(crea(
    "p",
    "benvenuto-sotto-domanda",
    `${disponibili.length} atenei disponibili. Scegli dove studi.`
  ));
  const riga = crea("div", "benvenuto-scelte-riga");
  disponibili.forEach(k => {
    const a = ATENEI_REGISTRO[k];
    const btn = crea("button", "benvenuto-scelta", a.label);
    btn.type = "button";
    btn.addEventListener("click", () => benvScegliAteneo(k));
    riga.appendChild(btn);
  });
  zona.appendChild(riga);
}

function benvScegliAteneo(k) {
  if (k !== window.ATENEO_ATTIVO) {
    // I dati sono per-ateneo: si salva la scelta e si ricarica al P3. Porta,
    // dipartimento e livello sono ancora transitori, fuori dallo zaino.
    let ateneoSalvato = false;
    try {
      localStorage.setItem("erasmuswiz_ateneo", k);
      ateneoSalvato = true;
    } catch (e) {}
    if (ateneoSalvato) {
      try {
        sessionStorage.setItem(CHIAVE_ONBOARDING_RIPRESA, JSON.stringify({
          passo: 3,
          porta: window._onboardingPorta,
          dipartimento: null,
          livello: null,
        }));
      } catch (e) {}
    }
    location.reload();
    return;
  }
  benvPassoFacolta();
}

function benvPassoFacolta() {
  benvSetPasso(3);
  benvMostraLegenda(false);
  benvFumetto("Bene! E cosa studi?", "pensieroso");
  // Dopo la risposta P2 resta acceso il solo ateneo scelto: la mappa ha
  // reagito alla risposta senza fingere di conoscere già il dipartimento.
  benvDisegnaAtenei(window.ATENEO_ATTIVO);
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  const visti = [];
  (METE || []).forEach(m => {
    if (m.dipartimentoCf && !visti.includes(m.dipartimentoCf)) visti.push(m.dipartimentoCf);
  });
  zona.appendChild(crea(
    "p",
    "benvenuto-sotto-domanda",
    `${visti.length} dipartimenti disponibili: scegli il tuo.`
  ));
  const riga = crea("div", "benvenuto-scelte-riga");
  visti.forEach(dip => {
    const btn = crea("button", "benvenuto-scelta", dip);
    btn.type = "button";
    btn.addEventListener("click", () => {
      window._onboardingDipartimento = dip;
      window._onboardingArea = areaDominanteDipartimento(dip);
      benvPassoLivello(dip);
    });
    riga.appendChild(btn);
  });
  zona.appendChild(riga);
}

function benvPassoLivello(dip) {
  // Facoltà e livello sono lo stesso P3 ("Cosa studi").
  benvSetPasso(3);
  benvMostraLegenda(false);
  window._onboardingDipartimento = dip;
  window._onboardingArea = areaDominanteDipartimento(dip);
  // Le mete della facoltà si ACCENDONO sulla mappa (il momento-firma).
  const mete = (METE || []).filter(m => m.dipartimentoCf === dip);
  benvFumetto(`${mete.length} mete ti aspettano. Guarda la mappa!`, "esulta");
  if (_mappaBenv && _mappaBenv.layer) {
    _mappaBenv.mete = mete;
    _mappaBenv.opts = { evidenzia: true, fuoriTab: true };
    mappaRenderPins(_mappaBenv.layer, mete, _mappaBenv.opts);
  }
  mappaNotaCopertura(document.getElementById("mappa-nota-benvenuto"), mete);
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea("p", "benvenuto-sotto-domanda",
    `${mete.length} mete accese per ${dip}. Tocca un puntino per l’anteprima, poi scegli il livello.`));
  const wrap = crea("div", "benvenuto-scelte-riga");
  [["L", "Triennale"], ["LM", "Magistrale"]].forEach(([liv, label]) => {
    const btn = crea("button", "benvenuto-scelta", label);
    btn.type = "button";
    btn.addEventListener("click", () => {
      window._onboardingLivello = liv;
      benvPassoLingue(liv);
    });
    wrap.appendChild(btn);
  });
  zona.appendChild(wrap);
}

// P4 — lingue e livello CEFR, SALTABILE. Le lingue
// proposte vengono dai dati delle mete (lingueDaiDati), mai hardcoded;
// senza lingue il percorso parte comunque e si aggiungono dal Profilo.
function benvPassoLingue(livello) {
  benvSetPasso(4);
  benvMostraLegenda(true);
  window._onboardingLivello = livello;
  benvFumetto("Ultima cosa: che lingue parli? Puoi anche saltare.", "pensieroso");
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  const stato = crea(
    "p",
    "benvenuto-sotto-domanda",
    "Con le lingue la mappa mostra la compatibilità."
  );
  zona.appendChild(stato);

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
    // D9/V0 (decisione completa nel LOG): Italiano C2 è soltanto proposto
    // nella prima riga. Entra nello zaino e nel calcolo esclusivamente quando
    // lo studente preme "Fatto"; "Salta per ora" salva ancora un array vuoto.
    if (i === 0 && lingue.includes("Italiano")) selLingua.value = "Italiano";
    const selLivello = document.createElement("select");
    selLivello.setAttribute("aria-label", `Livello lingua ${i + 1}`);
    motorePuro().SCALA_CEFR.forEach(liv => {
      const o = document.createElement("option");
      o.value = o.textContent = liv;
      selLivello.appendChild(o);
    });
    selLivello.value = selLingua.value === "Italiano" ? "C2" : "B1";
    let italianoPrecedente = selLingua.value === "Italiano";
    selLingua.addEventListener("change", () => {
      const italianoOra = selLingua.value === "Italiano";
      if (italianoOra) selLivello.value = "C2";
      else if (italianoPrecedente && selLivello.value === "C2") selLivello.value = "B1";
      italianoPrecedente = italianoOra;
      aggiornaCompatibilita();
    });
    selLivello.addEventListener("change", () => aggiornaCompatibilita());
    const rimuovi = crea("button", "schedina-rimuovi", "✕");
    rimuovi.type = "button";
    rimuovi.setAttribute("aria-label", `Rimuovi lingua ${i + 1}`);
    rimuovi.addEventListener("click", () => {
      selLingua.value = "";
      selLivello.value = "B1";
      italianoPrecedente = false;
      aggiornaCompatibilita();
      selLingua.focus();
    });
    riga.appendChild(selLingua);
    riga.appendChild(selLivello);
    riga.appendChild(rimuovi);
    wrap.appendChild(riga);
    righe.push({ selLingua, selLivello });
  }
  zona.appendChild(wrap);
  zona.appendChild(crea(
    "p",
    "benvenuto-conseguenza-salto",
    "Se salti, le mete non si ordinano per compatibilità: puoi aggiungere le lingue quando vuoi dal Profilo."
  ));

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
  btnSalta.addEventListener("click", () => {
    aggiornaCompatibilita([]);
    completaOnboarding(livello, []);
  });
  bottoni.appendChild(btnOk);
  bottoni.appendChild(btnSalta);
  zona.appendChild(bottoni);

  function lingueCorrenti() {
    return righe
      .filter(r => r.selLingua.value)
      .map(r => ({
        lingua: r.selLingua.value,
        livello: r.selLivello.value,
        certificata: false,
      }));
  }

  function aggiornaCompatibilita(forzate) {
    const scelte = Array.isArray(forzate) ? forzate : lingueCorrenti();
    const dip = window._onboardingDipartimento;
    const mete = (METE || []).filter(m => m.dipartimentoCf === dip);
    const profilo = {
      area: window._onboardingArea,
      dipartimento: dip,
      livello,
      lingue: scelte,
    };
    const categorie = mete.map(meta => categoriaCompat(
      calcolaCompatibilita(meta, profilo)
    ));
    const quanti = categoria => categorie.filter(c => c === categoria).length;
    stato.textContent =
      `${mete.length} mete per ${dip}: ${quanti("ok")} compatibili, ` +
      `${quanti("medio")} da verificare, ${quanti("basso")} non accessibili ora.`;
    if (_mappaBenv && _mappaBenv.layer) {
      _mappaBenv.mete = mete;
      _mappaBenv.opts = {
        fuoriTab: true,
        compatibilita: meta => categoriaCompat(calcolaCompatibilita(meta, profilo)),
      };
      mappaRenderPins(_mappaBenv.layer, mete, _mappaBenv.opts);
    }
  }

  aggiornaCompatibilita();
}

function completaOnboarding(livello, lingue) {
  const area = window._onboardingArea;
  const dip  = window._onboardingDipartimento;
  const profiloPrecedente = ZAINO.profilo || {};
  // La facoltà scelta si salva nel profilo (P1.5): lo strip del tab Mete la
  // mostra al posto del codice ISCED grezzo. Zaini vecchi senza questo campo
  // hanno il fallback sul nome dell'area (nomeAreaProfilo).
  ZAINO.profilo = {
    nome: profiloPrecedente.nome,
    area,
    dipartimento: dip,
    livello,
    lingue: lingue || [],
    extraUE: profiloPrecedente.extraUE === true
      ? true
      : profiloPrecedente.extraUE === false ? false : null,
    ricercaTesi: profiloPrecedente.ricercaTesi === true
      ? true
      : profiloPrecedente.ricercaTesi === false ? false : null,
  };
  // Un chiamante storico può completare il profilo senza passare da P1:
  // in quel caso la fase già dichiarata non va retrocessa in silenzio.
  if (ErasmusWizPuro.FASI_VIAGGIO.includes(window._onboardingPorta)) {
    ZAINO.fase = window._onboardingPorta;
  }
  ZAINO.onboardingFatto = true;
  // La domanda sulle mete viene posta qui, una volta sola: il vecchio
  // riquadro del tab Mete resta cablato per il rilancio deliberato.
  ZAINO.wizardMete = true;
  salvaZaino(ZAINO);
  // Il form del Profilo si precompila all'avvio: dopo l'onboarding va
  // riallineato, o mostrerebbe campi vuoti fino al prossimo reload.
  precompilaFormV2();
  const nMete = (METE || []).filter(m => m.dipartimentoCf === dip).length;
  const prossima = prossimaScadenzaInfo();
  benvSetPasso(5); // E non è un quinto passo: i quattro risultano conclusi.
  benvFumetto("Fatto! Il tuo percorso è pronto.", "saluto");
  const zona = document.getElementById("benvenuto-scelte");
  zona.innerHTML = "";
  zona.appendChild(crea("h2", "benvenuto-landing-titolo",
    `Per te ci sono ${nMete} ${nMete === 1 ? "meta" : "mete"} a ${dip}`));
  let dett = "";
  if (prossima) {
    const giorni = Math.ceil((new Date(prossima.data) - new Date()) / 86400000);
    dett = `La prossima scadenza è ${prossima.cosa}, tra ${giorni} ${giorni === 1 ? "giorno" : "giorni"}.`;
  } else if (inPreBando()) {
    dett = `${titoloPreBando()}. ${finestraAttesaBando()} Intanto puoi esplorare le mete con calma.`;
  } else if (candidatureChiuse()) {
    const anno = (window.BANDO_INFO && BANDO_INFO.annoAccademico) || "";
    dett = `Il bando ${anno} è chiuso. Il prossimo esce in genere tra dicembre e gennaio. Intanto puoi esplorare le mete con calma.`;
  }
  if (dett) zona.appendChild(crea("p", "benvenuto-landing-dettaglio", dett));
  zona.appendChild(crea(
    "h2",
    "benvenuto-landing-titolo",
    "Hai già in mente le tue destinazioni?"
  ));
  const riga = crea("div", "benvenuto-scelte-riga benvenuto-esiti");
  [
    ["si", "Sì: le cerco e le metto in ordine"],
    ["no", "No: aiutami a esplorare"],
    ["salta", "Salta per ora"],
  ].forEach(([esito, testoBottone]) => {
    const btn = crea("button", "benvenuto-scelta", testoBottone);
    btn.type = "button";
    btn.dataset.esitoMete = esito;
    btn.addEventListener("click", () => benvConcludiConEsito(esito));
    riga.appendChild(btn);
  });
  zona.appendChild(riga);
  portaAVistaScelte();
}

function terminaCodaEntrata() {
  _codaEntrata = false;
  const zona = document.getElementById("benvenuto-scelte");
  if (zona) delete zona.dataset.codaSveglia;
  renderHome();
  renderMete();
  renderMissione();
  // La coda non sostituisce lo smistamento V3: ricerca e mappa devono
  // arrivare alle Mete, dove vaiA() consuma l'esito e porta il fuoco nel
  // punto scelto. Solo "salta" conserva il comportamento storico sulla Home.
  if (_esitoMetePendente && _esitoMetePendente !== "salta") {
    vaiA("mete");
    return;
  }
  if (_esitoMetePendente) {
    const pendente = _esitoMetePendente;
    _esitoMetePendente = null;
    applicaEsitoWizardMete(pendente);
  }
  aggiornaModoEntrata();
  window.scrollTo(0, 0);
}

function benvMostraOffertaSveglia() {
  benvSetPasso(5);
  benvFumetto("Il percorso è pronto. Manca solo una sveglia.", "clessidra");
  benvMostraLegenda(false);
  const zona = document.getElementById("benvenuto-scelte");
  if (!zona) {
    terminaCodaEntrata();
    return;
  }
  zona.innerHTML = "";
  zona.dataset.codaSveglia = "true";
  zona.appendChild(crea(
    "h2",
    "benvenuto-landing-titolo",
    "Ti avviso quando esce il bando?"
  ));
  zona.appendChild(crea(
    "p",
    "benvenuto-landing-dettaglio",
    finestraAttesaBando()
  ));
  const riga = crea("div", "benvenuto-scelte-riga");
  const si = crea("button", "benvenuto-scelta", "Sì, mettimelo in calendario");
  si.type = "button";
  si.dataset.sveglia = "si";
  si.addEventListener("click", () => {
    // Il download parte mentre il gesto dell'utente e' ancora attivo. Su
    // telefono l'eventuale banner installazione resta qui; la navigazione
    // riprende quando lo studente lo chiude. Su desktop prosegue subito.
    if (!scaricaCalendarioCompleto(zona, terminaCodaEntrata)) {
      terminaCodaEntrata();
    }
  });
  const no = crea("button", "benvenuto-scelta", "No, grazie");
  no.type = "button";
  no.dataset.sveglia = "no";
  no.addEventListener("click", terminaCodaEntrata);
  riga.appendChild(si);
  riga.appendChild(no);
  zona.appendChild(riga);
  zona.appendChild(crea(
    "p",
    "benvenuto-sotto-domanda",
    "Il tuo telefono ti avvisa da solo: noi non ti chiediamo né mail né iscrizione."
  ));
  si.focus();
}

function benvConcludiConEsito(esito) {
  chiudiWizardMete();
  _esitoMetePendente = esito;
  if (inPreBando() && finestraAttesaDisponibile()) {
    _codaEntrata = true;
    benvMostraOffertaSveglia();
    aggiornaModoEntrata();
    // Non `scrollTo(0, 0)`: rimandava in cima e i due bottoni finivano sotto
    // il bordo dello schermo — annullando anche lo scorrimento che `focus()`
    // aveva appena fatto sul primo bottone.
    portaAVistaScelte();
    return;
  }
  renderHome();
  renderMete();
  renderMissione();
  window.scrollTo(0, 0);
  if (esito !== "salta") vaiA("mete");
  if (_esitoMetePendente) {
    const pendente = _esitoMetePendente;
    _esitoMetePendente = null;
    applicaEsitoWizardMete(pendente);
  }
}

// ============================================================
// SCENA D'INGRESSO (R2.1, PLAN.md §5.1 — decisione di Nicola 16/07:
// CTA "Inizia il tuo percorso"). Promessa concreta dentro una scena
// emozionale: inchiostro profondo, rotte d'oro LENTE, zero pin nel primo
// viewport. Il flusso a 4 passi parte al clic sul CTA. Le rotte sono
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
  if (!benv || !wrap || !btn) { benvPassoPorta(); return; }
  benv.classList.add("modo-scena");
  aggiornaModoEntrata();
  wrap.hidden = false;
  mappaRotteScena();
  document.addEventListener("visibilitychange", aggiornaPausaScena);
  aggiornaPausaScena();
  btn.addEventListener("click", () => {
    benv.classList.remove("modo-scena");
    aggiornaModoEntrata();
    wrap.hidden = true;
    mappaRimuoviRotte();
    document.removeEventListener("visibilitychange", aggiornaPausaScena);
    benvPassoPorta();
    // Il focus segue l'azione: dritto sulla prima scelta (accessibilità).
    document.querySelector("#benvenuto-scelte .benvenuto-scelta")?.focus();
  }, { once: true });
}

function leggiRipresaOnboarding() {
  let grezzo = null;
  try {
    grezzo = sessionStorage.getItem(CHIAVE_ONBOARDING_RIPRESA);
    sessionStorage.removeItem(CHIAVE_ONBOARDING_RIPRESA);
  } catch (e) {
    return null;
  }
  if (!grezzo) return null;
  try {
    const ripresa = JSON.parse(grezzo);
    const passiValidi = [2, 3, 4];
    if (
      !ripresa ||
      !passiValidi.includes(ripresa.passo) ||
      !ErasmusWizPuro.FASI_VIAGGIO.includes(ripresa.porta)
    ) return null;
    if (
      ripresa.passo === 4 &&
      (
        typeof ripresa.dipartimento !== "string" ||
        !["L", "LM"].includes(ripresa.livello)
      )
    ) return null;
    return ripresa;
  } catch (e) {
    return null;
  }
}

function initOnboarding() {
  const benv = document.getElementById("home-benvenuto");
  if (!benv || ZAINO.onboardingFatto) return;
  const layer = mappaCostruisci(document.getElementById("mappa-benvenuto"));
  if (!layer) return; // dati mappa assenti: restano le scelte testuali
  _mappaBenv = { layer };

  const ripresa = leggiRipresaOnboarding();
  // Chi torna dal cambio ateneo stava GIÀ rispondendo: niente scena, si
  // riprende dal passo dichiarato con le risposte transitorie già in memoria.
  if (!ripresa) {
    benvScena();
    return;
  }
  window._onboardingPorta = ripresa.porta;
  if (ripresa.passo === 2) {
    benvPassoAteneo();
    return;
  }
  if (ripresa.passo === 3) {
    benvPassoFacolta();
    return;
  }
  window._onboardingDipartimento = ripresa.dipartimento;
  window._onboardingArea = areaDominanteDipartimento(ripresa.dipartimento);
  window._onboardingLivello = ripresa.livello;
  benvPassoLingue(ripresa.livello);
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
  const extraUE = document.getElementById("extra-ue-v2");
  const ricercaTesi = document.getElementById("ricerca-tesi-v2");
  if (extraUE) extraUE.value = p.extraUE === true ? "true" : p.extraUE === false ? "false" : "";
  if (ricercaTesi) ricercaTesi.value =
    p.ricercaTesi === true ? "true" : p.ricercaTesi === false ? "false" : "";
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
    const leggiRisposta = id => {
      const valore = document.getElementById(id)?.value;
      return valore === "true" ? true : valore === "false" ? false : null;
    };
    ZAINO.profilo = {
      nome:         nomeDigitato || undefined,
      area:         areaDominanteDipartimento(dipartimento),
      dipartimento: dipartimento,
      livello:      document.getElementById("livello-v2").value,
      lingue,
      extraUE:      leggiRisposta("extra-ue-v2"),
      ricercaTesi:  leggiRisposta("ricerca-tesi-v2"),
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
  // Il router parte dopo i render iniziali: una rotta profonda deve misurare
  // e raggiungere il blocco nella sua posizione finale, con mappa ed elenco
  // già dipinti sopra di lui.
  sincronizzaDaUrl({ primoAvvio: true });
  setInterval(aggiornaCountdownV2, 30000); // i countdown non mostrano più i secondi
}

document.addEventListener("DOMContentLoaded", init);
