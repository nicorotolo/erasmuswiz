// ============================================================
// ErasmusWiz v2 — Logica principale
// Legge i dati dai file js/dati-*.js (condivisi con v1).
// METE = array combinato Economia + Management (vedi index.html)
// ============================================================

const CHIAVE_ZAINO = "erasmuswiz-zaino";

function caricaZaino() {
  try {
    const g = localStorage.getItem(CHIAVE_ZAINO);
    const z = g ? JSON.parse(g) : { profilo: null, checklist: {}, metePreferite: [], fase: "domanda", checklistPost: {} };
    if (!Array.isArray(z.metePreferite)) z.metePreferite = [];
    if (!Array.isArray(z.schedina)) z.schedina = [];
    if (!z.fase) z.fase = "domanda";
    if (!z.checklistPost || typeof z.checklistPost !== "object") z.checklistPost = {};
    if (typeof z.onboardingFatto !== "boolean") z.onboardingFatto = !!z.profilo;
    if (!z.autoverifica || typeof z.autoverifica !== "object") z.autoverifica = {};
    // "Lo zaino" (BR6): celebrazione all'ingresso in fase 4, una sola volta.
    // Zaino vecchio senza il campo → non ancora celebrato.
    if (typeof z.zainoCelebrato !== "boolean") z.zainoCelebrato = (z.fase === "selezionato");
    return z;
  } catch (e) {
    return { profilo: null, checklist: {}, metePreferite: [], schedina: [], fase: "domanda", checklistPost: {}, onboardingFatto: false, autoverifica: {}, zainoCelebrato: false };
  }
}

function salvaZaino(zaino) {
  localStorage.setItem(CHIAVE_ZAINO, JSON.stringify(zaino));
}

let ZAINO = caricaZaino();
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
// NAVIGAZIONE A TAB
// ============================================================
function mostraTab(nome) {
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNav() {
  document.querySelectorAll(".nav-item[data-tab]").forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      mostraTab(tab.dataset.tab);
      history.replaceState(null, "", `#${tab.dataset.tab}`);
    });
  });

  document.addEventListener("click", e => {
    const el = e.target.closest("[data-goto]");
    if (el) {
      e.preventDefault();
      mostraTab(el.dataset.goto);
      history.replaceState(null, "", `#${el.dataset.goto}`);
    }
  });

  const hash = location.hash.replace("#", "");
  const TAB_VALIDI = ["oggi", "checklist", "mete", "idoneita", "profilo"];
  if (TAB_VALIDI.includes(hash)) mostraTab(hash);
}

// ============================================================
// TEMA NOTTE
// ============================================================
function initTema() {
  const btn = document.getElementById("toggle-tema");
  if (!btn) return;

  if (localStorage.getItem("ew-tema") === "notte") {
    document.body.classList.add("tema-notte");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("tema-notte");
    const notte = document.body.classList.contains("tema-notte");
    btn.textContent = notte ? "☀️" : "🌙";
    btn.setAttribute("aria-label", notte ? "Passa al tema giorno" : "Passa al tema notte");
    localStorage.setItem("ew-tema", notte ? "notte" : "giorno");
  });
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

  // Badge "Bando AAAA/AA aperto" — onesto: sparisce se il bando è chiuso o
  // se lo studente è già stato selezionato (non è più la notizia rilevante).
  const badge = document.getElementById("badge-bando");
  if (badge) {
    const anno = (window.BANDO_INFO && BANDO_INFO.annoAccademico) || "";
    const parti = anno.split("/");
    const annoBreve = parti.length === 2 ? `${parti[0]}/${parti[1].slice(-2)}` : anno;
    const mostraBadge = annoBreve && ZAINO.fase !== "selezionato" && !candidatureChiuse();
    badge.style.display = mostraBadge ? "" : "none";
    if (mostraBadge) badge.textContent = `Bando ${annoBreve} aperto`;
  }
}

// ============================================================
// PERCORSO A 4 FASI (DISEGNO_UX.md §2.1) — home-percorso UX2
// ============================================================
function calcolaFasi() {
  const profiloOk    = !!ZAINO.profilo;
  const requisiti     = REQUISITI_BANDO || [];
  // Fase 1 è "fatta" quando TUTTE le auto-verifiche sono spuntate, non col
  // solo profilo compilato (fix da assessment 04/07, DISEGNO_BRAND.md BR3).
  const requisitiOk   = profiloOk && requisiti.length > 0 &&
    requisiti.every(r => ZAINO.autoverifica && ZAINO.autoverifica[r.id]);
  const nPreferite    = (ZAINO.metePreferite || []).length;
  const meteOk        = nPreferite >= 1;
  const checklistTot   = (CHECKLIST || []).length;
  const checklistFatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const checklistOk    = checklistTot > 0 && checklistFatti === checklistTot;
  const selezionato    = ZAINO.fase === "selezionato";

  const fasi = [
    {
      id: 1, tab: "idoneita", domanda: "Posso partire?", fatto: requisitiOk,
      riassunto: requisitiOk
        ? "Profilo compilato — hai verificato tutti i requisiti."
        : "Verifica i requisiti del bando prima di iniziare.",
      cta: requisitiOk ? "Rivedi i requisiti" : "Controlla se sei idoneo",
    },
    {
      id: 2, tab: "mete", domanda: "Dove posso andare?", fatto: meteOk,
      riassunto: meteOk
        ? `${nPreferite} ${nPreferite === 1 ? "meta salvata" : "mete salvate"} tra i preferiti.`
        : "Esplora le mete compatibili con il tuo profilo.",
      cta: meteOk ? "Vedi le tue mete" : "Esplora le mete",
    },
    {
      id: 3, tab: "checklist", domanda: "La candidatura", fatto: checklistOk,
      riassunto: checklistTot === 0
        ? "Nessun passo ancora disponibile."
        : `${checklistFatti}/${checklistTot} passi completati.`,
      cta: checklistOk ? "Rivedi la checklist" : "Vai alla checklist",
    },
    {
      id: 4, tab: "checklist", domanda: "Sono stato preso!", fatto: false,
      riassunto: selezionato
        ? "In preparazione alla partenza 🎒"
        : "Quando sarai selezionato, qui trovi la preparazione alla partenza.",
      cta: selezionato ? "Continua la preparazione" : "Vai alla candidatura",
    },
  ];

  if (selezionato) {
    fasi[0].stato = fasi[1].stato = fasi[2].stato = "fatto";
    fasi[3].stato = "attivo";
  } else {
    let attivoAssegnato = false;
    fasi.slice(0, 3).forEach(f => {
      if (f.fatto) { f.stato = "fatto"; }
      else if (!attivoAssegnato) { f.stato = "attivo"; attivoAssegnato = true; }
      else { f.stato = "futuro"; }
    });
    fasi[3].stato = "futuro";
  }
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
    btn.addEventListener("click", () => mostraTab(f.tab));
    card.appendChild(btn);

    wrap.appendChild(card);
  });
}

// Etichetta del 3° tab in nav: "Candidatura" (in corso) oppure "Partenza" (selezionato)
function aggiornaNavCandidatura() {
  const icona = document.getElementById("nav-candidatura-icona");
  const label = document.getElementById("nav-candidatura-label");
  if (!icona || !label) return;
  const selezionato = ZAINO.fase === "selezionato";
  icona.textContent = selezionato ? "🎒" : "📋";
  label.textContent = selezionato ? "Zaino" : "Candidatura";
}

// Titolo/sottotitolo del tab Candidatura: "Lo zaino" (BR6) in fase 4.
function aggiornaIntestazioneZaino() {
  const titolo     = document.getElementById("checklist-titolo");
  const sottotitolo = document.getElementById("checklist-sottotitolo");
  if (!titolo || !sottotitolo) return;
  const selezionato = ZAINO.fase === "selezionato";
  titolo.textContent = selezionato ? "🎒 Lo zaino" : "📋 La tua checklist";
  sottotitolo.textContent = selezionato
    ? "Prima, durante e dopo la partenza: spunta i passi man mano che li completi."
    : "Spunta i passi man mano che li completi. Restano salvati sul tuo dispositivo.";
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
// "MISSIONE DI OGGI"
// ============================================================
function calcolaMissione() {
  // Solo scadenze future e AZIONABILI guidano la missione.
  const prossima   = prossimaScadenzaAzionabile();
  const giorniAlla = prossima ? giorniA(prossima.data) : Infinity;

  const checklist = CHECKLIST || [];
  const totale    = checklist.length;
  const fatti     = checklist.filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const haProfilo = !!ZAINO.profilo;

  // Studente selezionato: la missione viene dalla checklist di partenza.
  if (ZAINO.fase === "selezionato") {
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
  if (candidatureChiuse()) return { tipo: "bando-chiuso", fatti, totale };

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

  function setBtn(btn, testo, tab) {
    if (!btn) return;
    btn.textContent = testo;
    btn.onclick = e => { e.preventDefault(); mostraTab(tab); };
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
          // Riusa la logica del toggle di fase esistente.
          document.getElementById("fase-selezionato")?.click();
          renderMissione();
        };
      }
      setBtn(btnCome, "Vedi le date del ciclo", "checklist");
      break;
    }
    case "partenza":
      if (titolo) titolo.textContent = m.voce.testo;
      if (dett)   dett.textContent   = m.prossima
        ? `Preparazione alla partenza — ${m.prossima.cosa} tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}.`
        : "Preparazione alla partenza: spunta i passi man mano che li completi.";
      setBtn(btnFatto, "Fatto 🎒",           "checklist");
      setBtn(btnCome,  "Vedi tutti i passi", "checklist");
      break;
    case "urgente":
      card.classList.add("missione-urgente");
      if (titolo) titolo.textContent = `⚠️ Scadenza tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}!`;
      if (dett)   dett.textContent   = `${m.prossima.cosa} — ${formattaData(m.prossima.data)}. ${m.prossima.descrizione}`;
      setBtn(btnFatto, "Vedi scadenze ⏳", "checklist");
      setBtn(btnCome,  "Cosa devo fare?", "checklist");
      break;
    case "profilo":
      if (titolo) titolo.textContent = "Compila il tuo profilo";
      if (dett)   dett.textContent   = "Inserisci area disciplinare, livello e lingue per scoprire le mete compatibili e ricevere una guida personalizzata.";
      setBtn(btnFatto, "Vai al profilo ✨", "profilo");
      setBtn(btnCome,  "Vedi i requisiti",  "idoneita");
      break;
    case "checklist":
      if (titolo) titolo.textContent = m.voce.testo;
      if (dett)   dett.textContent   = m.prossima
        ? `Prossima scadenza: ${m.prossima.cosa} tra ${m.giorni} giorni.`
        : "Completa i passi della checklist per essere pronto in tempo.";
      setBtn(btnFatto, "Fatto ✨",     "checklist");
      setBtn(btnCome,  "Come si fa?", "checklist");
      break;
    case "attendi":
      if (titolo) titolo.textContent = m.prossima.cosa;
      if (dett)   dett.textContent   = `Prossima scadenza tra ${m.giorni} giorni. ${m.prossima.descrizione}`;
      setBtn(btnFatto, "Vedi scadenze ✨", "checklist");
      setBtn(btnCome,  "Esplora mete",     "mete");
      break;
    default:
      if (titolo) titolo.textContent = "Sei in ottima posizione! 🎉";
      if (dett)   dett.textContent   = "Checklist completata e nessuna scadenza imminente. Tieni d'occhio le mete disponibili.";
      setBtn(btnFatto, "Esplora le mete ✨", "mete");
      setBtn(btnCome,  "La tua candidatura", "checklist");
  }

  renderPreparazione();
  renderFaseStepper();
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
      lnk.addEventListener("click", e => { e.preventDefault(); mostraTab("profilo"); });
      strip.appendChild(lnk);
    } else {
      const lnk = crea("a", "profilo-strip-link", "Compila il profilo per vedere le mete compatibili →");
      lnk.href = "#";
      lnk.addEventListener("click", e => { e.preventDefault(); mostraTab("profilo"); });
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
      lnk.addEventListener("click", e => { e.preventDefault(); mostraTab("profilo"); });
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
          if (opz.valore === "lingua" && lingueMancanti) { mostraTab("profilo"); return; }
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

  if (elenco.length === 0 && testo) {
    cont.appendChild(crea("p", "stato-vuoto-v2", `Nessuna meta trovata per «${testo}».`));
    return;
  }
  if (elenco.length === 0 && profilo && filtroMeteAttivo !== "tutte") {
    cont.appendChild(crea("p", "stato-vuoto-v2", "Nessuna meta con questo filtro. Prova un'altra categoria."));
    return;
  }

  elenco.forEach(({ meta, comp }) => {
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

    cont.appendChild(card);
  });
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
    renderFaseStepper();
  } else if (ZAINO.metePreferite.length >= 5) {
    renderPreferite("Il bando ne ammette al massimo 5. Rimuovi una meta per aggiungerne un'altra.");
  } else {
    ZAINO.metePreferite.push(id);
    salvaZaino(ZAINO);
    renderPreferite();
    renderMete();
    renderFaseStepper();
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
// ============================================================
const CAPITOLI_ZAINO = ["Prima", "Durante", "Dopo"];

function renderChecklistPost() {
  const cont = document.getElementById("lista-checklist-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklistPost) ZAINO.checklistPost = {};

  // "Ora tocca a te" (BR5) appartiene alla vista candidatura (fase "domanda"):
  // qui si nasconde per non lasciare contenuto vecchio quando si passa allo
  // zaino (renderChecklistPost non lo ripopola mai, a differenza di
  // renderChecklist).
  const prossimiPassi = document.getElementById("prossimi-passi-v2");
  if (prossimiPassi) prossimiPassi.style.display = "none";

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
      aggiornaProgressoV2(lista, spunte);
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

  aggiornaProgressoV2(lista, spunte);
}

function initToggleFase() {
  const btnDomanda    = document.getElementById("fase-domanda");
  const btnSelezionato = document.getElementById("fase-selezionato");
  if (!btnDomanda || !btnSelezionato) return;

  function aggiornaBottoniFase() {
    const selezionato = ZAINO.fase === "selezionato";
    btnDomanda.classList.toggle("fase-attiva", !selezionato);
    btnSelezionato.classList.toggle("fase-attiva", selezionato);
  }

  function renderChecklistAttiva() {
    if (ZAINO.fase === "selezionato") {
      renderChecklistPost();
    } else {
      renderChecklist();
    }
  }

  btnDomanda.addEventListener("click", () => {
    ZAINO.fase = "domanda";
    salvaZaino(ZAINO);
    aggiornaBottoniFase();
    renderChecklistAttiva();
    aggiornaNavCandidatura();
    aggiornaIntestazioneZaino();
    renderFaseStepper();
  });

  btnSelezionato.addEventListener("click", () => {
    const primaVolta = !ZAINO.zainoCelebrato;
    ZAINO.fase = "selezionato";
    if (primaVolta) ZAINO.zainoCelebrato = true;
    salvaZaino(ZAINO);
    aggiornaBottoniFase();
    renderChecklistAttiva();
    aggiornaNavCandidatura();
    aggiornaIntestazioneZaino();
    renderFaseStepper();
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
  if (btn) btn.addEventListener("click", chiudiCelebrazioneZaino);
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const overlay = document.getElementById("celebrazione-overlay");
    if (overlay && overlay.style.display !== "none") chiudiCelebrazioneZaino();
  });
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
        renderFaseStepper();
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
    if (vai) vai.addEventListener("click", e => { e.preventDefault(); mostraTab("mete"); });
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
    Object.keys(ATENEI).forEach(k => {
      const a = ATENEI[k];
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
  Object.keys(ATENEI).forEach(k => {
    const a = ATENEI[k];
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
  benvSetPasso(3);
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
    "Tocca un puntino per l'anteprima. Ultima domanda: a che punto sei?"));
  const wrap = crea("div", "benvenuto-scelte-riga");
  [["L", "Triennale"], ["LM", "Magistrale"]].forEach(([liv, label]) => {
    const btn = crea("button", "benvenuto-scelta", label);
    btn.type = "button";
    btn.addEventListener("click", () => completaOnboarding(liv));
    wrap.appendChild(btn);
  });
  zona.appendChild(wrap);
}

function completaOnboarding(livello) {
  const area = window._onboardingArea;
  const dip  = window._onboardingDipartimento;
  // La facoltà scelta si salva nel profilo (P1.5): lo strip del tab Mete la
  // mostra al posto del codice ISCED grezzo. Zaini vecchi senza questo campo
  // hanno il fallback sul nome dell'area (nomeAreaProfilo).
  ZAINO.profilo = { area, dipartimento: dip, livello, lingue: [] };
  ZAINO.onboardingFatto = true;
  salvaZaino(ZAINO);

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

function initOnboarding() {
  const benv = document.getElementById("home-benvenuto");
  if (!benv || ZAINO.onboardingFatto) return;
  const layer = mappaCostruisci(document.getElementById("mappa-benvenuto"));
  if (!layer) return; // dati mappa assenti: restano le scelte testuali
  _mappaBenv = { layer };

  let stepRipresa = null;
  try { stepRipresa = sessionStorage.getItem(CHIAVE_ONBOARDING_STEP); sessionStorage.removeItem(CHIAVE_ONBOARDING_STEP); } catch (e) {}
  if (stepRipresa === "2") benvPassoFacolta();
  else benvPassoAteneo();
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
    righe[i].querySelector(".lingua-nome").value          = l.lingua;
    righe[i].querySelector(".lingua-livello").value       = l.livello;
    righe[i].querySelector(".lingua-certificata").checked = l.certificata;
  });
}

function initProfilo() {
  popolaAreeV2();
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
  initNav();
  initTema();
  applicaBrandingAteneo();
  renderHome();
  initToggleFase();
  if (ZAINO.fase === "selezionato") {
    renderChecklistPost();
  } else {
    renderChecklist();
  }
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
  aggiornaNavCandidatura();
  aggiornaIntestazioneZaino();
  initCelebrazioneZaino();
  renderMissione();
  initOnboarding();
  renderMappaHome();
  setInterval(aggiornaCountdownV2, 30000); // i countdown non mostrano più i secondi
}

document.addEventListener("DOMContentLoaded", init);
