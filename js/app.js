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
    if (!z.fase) z.fase = "domanda";
    if (!z.checklistPost || typeof z.checklistPost !== "object") z.checklistPost = {};
    if (typeof z.onboardingFatto !== "boolean") z.onboardingFatto = !!z.profilo;
    if (!z.autoverifica || typeof z.autoverifica !== "object") z.autoverifica = {};
    return z;
  } catch (e) {
    return { profilo: null, checklist: {}, metePreferite: [], fase: "domanda", checklistPost: {}, onboardingFatto: false, autoverifica: {} };
  }
}

function salvaZaino(zaino) {
  localStorage.setItem(CHIAVE_ZAINO, JSON.stringify(zaino));
}

let ZAINO = caricaZaino();

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
  return `Mancano ${c.giorni}g ${c.ore}h ${c.minuti}m ${c.secondi}s`;
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
  const TAB_VALIDI = ["oggi", "timeline", "checklist", "mete", "idoneita", "profilo"];
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
  const dataEl = document.getElementById("home-data");
  if (dataEl) {
    const oggi = new Date();
    dataEl.textContent = oggi.toLocaleDateString("it-IT", {
      weekday: "long", day: "numeric", month: "short", year: "numeric"
    });
  }
  const nomeEl = document.getElementById("home-nome");
  if (nomeEl) nomeEl.textContent = ZAINO.profilo?.nome || "Studente";
}

// ============================================================
// PERCORSO A 4 FASI (DISEGNO_UX.md §2.1) — home-percorso UX2
// ============================================================
function calcolaFasi() {
  const profiloOk    = !!ZAINO.profilo;
  const nPreferite    = (ZAINO.metePreferite || []).length;
  const meteOk        = nPreferite >= 1;
  const checklistTot   = (CHECKLIST || []).length;
  const checklistFatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const checklistOk    = checklistTot > 0 && checklistFatti === checklistTot;
  const selezionato    = ZAINO.fase === "selezionato";

  const fasi = [
    {
      id: 1, tab: "idoneita", domanda: "Posso partire?", fatto: profiloOk,
      riassunto: profiloOk
        ? "Profilo compilato — rivedi i requisiti quando vuoi."
        : "Verifica i requisiti del bando prima di iniziare.",
      cta: profiloOk ? "Rivedi i requisiti" : "Controlla se sei idoneo",
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
  label.textContent = selezionato ? "Partenza" : "Candidatura";
}

// ============================================================
// COUNTDOWN PILL
// ============================================================
function initCountdownPill() {
  const ora    = new Date();
  const future = (SCADENZE_CAFOSCARI || [])
    .filter(s => new Date(s.data) > ora)
    .sort((a, b) => new Date(a.data) - new Date(b.data));
  const prossima = future[0];

  const titoloEl = document.getElementById("countdown-titolo");
  const subEl    = document.getElementById("countdown-sub");
  const timerEl  = document.getElementById("countdown-timer");

  if (!prossima || !timerEl) return;

  if (titoloEl) titoloEl.textContent = prossima.cosa;
  if (subEl) {
    const d = new Date(prossima.data);
    const dataFmt = d.toLocaleDateString("it-IT", { day: "numeric", month: "short" });
    const oraFmt  = d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
    subEl.textContent = `${dataFmt}, ${oraFmt} · niente proroghe`;
  }

  function aggiorna() {
    const diff = new Date(prossima.data) - new Date();
    if (diff <= 0) { timerEl.textContent = "Scaduto"; return; }
    const g = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    timerEl.textContent = `${g}g ${h}h ${m}m ${s}s`;
  }

  aggiorna();
  setInterval(aggiorna, 1000);
}

// ============================================================
// CARD PREPARAZIONE
// ============================================================
function renderPreparazione() {
  const tot   = (CHECKLIST || []).length;
  const fatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const perc  = tot === 0 ? 0 : Math.round((fatti / tot) * 100);

  const countEl = document.getElementById("prep-count");
  const fillEl  = document.getElementById("prep-fill");
  const stepsEl = document.getElementById("prep-steps");

  if (countEl) countEl.textContent = `${fatti}/${tot}`;
  if (fillEl)  fillEl.style.width  = perc + "%";
  if (!stepsEl) return;

  stepsEl.innerHTML = "";

  const done   = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]);
  const undone = (CHECKLIST || []).filter(v => !(ZAINO.checklist && ZAINO.checklist[v.id]));

  const toShow = [
    ...done.slice(-2).map(v => ({ voce: v, tipo: "fatto" })),
    ...undone.slice(0, 3).map((v, i) => ({ voce: v, tipo: i === 0 ? "attivo" : "todo" })),
  ];

  if (toShow.length === 0) {
    const p = crea("p", "prep-step attivo");
    p.textContent = "🎉 Checklist completata!";
    stepsEl.appendChild(p);
    return;
  }

  toShow.forEach(({ voce, tipo }) => {
    const step  = crea("div", `prep-step ${tipo}`);
    const check = crea("span", `prep-step-check${tipo === "todo" ? " todo" : ""}`);
    if (tipo === "fatto") check.textContent = "✓";
    step.appendChild(check);
    step.appendChild(document.createTextNode(voce.testo));
    stepsEl.appendChild(step);
  });
}

// ============================================================
// "MISSIONE DI OGGI"
// ============================================================
function calcolaMissione() {
  const ora    = new Date();
  const future = (SCADENZE_CAFOSCARI || [])
    .filter(s => new Date(s.data) > ora)
    .sort((a, b) => new Date(a.data) - new Date(b.data));
  const prossima   = future[0] || null;
  const giorniAlla = prossima
    ? Math.ceil((new Date(prossima.data) - ora) / 86400000)
    : Infinity;

  const checklist   = CHECKLIST || [];
  const totale      = checklist.length;
  const fatti       = checklist.filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  const prossimaVoce = checklist.find(v => !(ZAINO.checklist && ZAINO.checklist[v.id]));
  const haProfilo   = !!ZAINO.profilo;

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
      scad.textContent  = `scade tra ${m.giorni}g`;
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
    case "urgente":
      card.classList.add("missione-urgente");
      if (titolo) titolo.textContent = `⚠️ Scadenza tra ${m.giorni} ${m.giorni === 1 ? "giorno" : "giorni"}!`;
      if (dett)   dett.textContent   = `${m.prossima.cosa} — ${formattaData(m.prossima.data)}. ${m.prossima.descrizione}`;
      setBtn(btnFatto, "Vedi scadenze ⏳", "timeline");
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
      setBtn(btnFatto, "Vedi scadenze ✨", "timeline");
      setBtn(btnCome,  "Esplora mete",     "mete");
      break;
    default:
      if (titolo) titolo.textContent = "Sei in ottima posizione! 🎉";
      if (dett)   dett.textContent   = "Checklist completata e nessuna scadenza imminente. Tieni d'occhio le mete disponibili.";
      setBtn(btnFatto, "Esplora le mete ✨", "mete");
      setBtn(btnCome,  "La tua timeline",    "timeline");
  }

  renderPreparazione();
  renderFaseStepper();
}

// ============================================================
// TIMELINE v2
// ============================================================
function renderTimeline() {
  const cont = document.getElementById("timeline-v2");
  if (!cont) return;

  const sorted = (SCADENZE_CAFOSCARI || [])
    .slice()
    .sort((a, b) => new Date(a.data) - new Date(b.data));

  sorted.forEach((scad, i) => {
    const c   = calcolaCountdown(scad.data);
    const div = crea("div", `tappa-v2${c.passata ? " passata" : ""}`);
    div.setAttribute("data-scadenza", scad.data);

    const pallino   = crea("div", "tappa-v2-pallino", String(i + 1));
    const contenuto = crea("div", "tappa-v2-contenuto");
    contenuto.appendChild(crea("div", "tappa-v2-titolo",      scad.cosa));
    contenuto.appendChild(crea("div", "tappa-v2-data",        formattaData(scad.data)));
    contenuto.appendChild(crea("div", "tappa-v2-descrizione", scad.descrizione));
    contenuto.appendChild(crea("div", "tappa-v2-countdown",   countdownInParole(c)));

    div.appendChild(pallino);
    div.appendChild(contenuto);
    cont.appendChild(div);
  });
}

function aggiornaCountdownV2() {
  document.querySelectorAll(".tappa-v2").forEach(el => {
    const c  = calcolaCountdown(el.getAttribute("data-scadenza"));
    const cd = el.querySelector(".tappa-v2-countdown");
    if (cd) cd.textContent = countdownInParole(c);
    if (c.passata) el.classList.add("passata");
  });
  document.querySelectorAll(".cand-scadenza-card").forEach(el => {
    const c  = calcolaCountdown(el.getAttribute("data-scadenza"));
    const cd = el.querySelector(".cand-scadenza-countdown");
    if (cd) cd.textContent = countdownInParole(c);
    if (c.passata) el.closest(".cand-capitolo")?.classList.add("passata");
  });
}

// ============================================================
// BANNER WIZ (nota Wiz inline dopo spunta)
// ============================================================
function mostraBannerWiz() {
  const banner = document.getElementById("banner-wiz");
  if (!banner) return;
  banner.innerHTML = '<img src="img/wiz-hero.png" alt="Wiz"><span class="banner-testo">Ottimo lavoro! Un passo in meno 🎉</span>';
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

// ============================================================
// CANDIDATURA — vista cronologica fusa Scadenze+Checklist (UX3)
// Ogni scadenza è un "capitolo": card con data/countdown/export
// calendario, sotto le voci di checklist collegate (scadenzaId).
// Le voci senza scadenzaId (o con uno sconosciuto) finiscono nel
// capitolo finale "Quando puoi". DISEGNO_UX.md §6.
// ============================================================
function renderChecklist() {
  const cont = document.getElementById("lista-checklist-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklist) ZAINO.checklist = {};

  const checklist = CHECKLIST || [];
  const scadenze  = (SCADENZE_CAFOSCARI || []).slice().sort((a, b) => new Date(a.data) - new Date(b.data));
  const idScadenzeNote = scadenze.map(s => s.id);

  const prossimaVoceId = checklist.find(v => !ZAINO.checklist[v.id])?.id;

  scadenze.forEach(scad => {
    const vociCollegate = checklist.filter(v => v.scadenzaId === scad.id);
    if (!vociCollegate.length) return; // niente da fare per questa scadenza: capitolo saltato

    const c = calcolaCountdown(scad.data);
    const capitolo = crea("div", `cand-capitolo${c.passata ? " passata" : ""}`);

    const card = crea("div", "cand-scadenza-card");
    card.setAttribute("data-scadenza", scad.data);
    card.appendChild(crea("div", "cand-scadenza-titolo", scad.cosa));
    card.appendChild(crea("div", "cand-scadenza-data", formattaData(scad.data)));
    card.appendChild(crea("div", "cand-scadenza-countdown", countdownInParole(c)));

    const btnIcs = crea("button", "cand-btn-ics", "🗓 Aggiungi al calendario");
    btnIcs.type = "button";
    btnIcs.addEventListener("click", () => scaricaICSScadenza(scad));
    card.appendChild(btnIcs);

    capitolo.appendChild(card);

    const listaVoci = crea("div", "cand-checklist-sotto");
    vociCollegate.forEach(voce => listaVoci.appendChild(creaVoceChecklist(voce, prossimaVoceId)));
    capitolo.appendChild(listaVoci);

    cont.appendChild(capitolo);
  });

  const vociSenzaScadenza = checklist.filter(v => !v.scadenzaId || !idScadenzeNote.includes(v.scadenzaId));
  if (vociSenzaScadenza.length) {
    const capitolo = crea("div", "cand-capitolo cand-capitolo-quando-puoi");
    capitolo.appendChild(crea("div", "cand-capitolo-titolo", "Quando puoi"));
    const listaVoci = crea("div", "cand-checklist-sotto");
    vociSenzaScadenza.forEach(voce => listaVoci.appendChild(creaVoceChecklist(voce, prossimaVoceId)));
    capitolo.appendChild(listaVoci);
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
        `Area: ${profilo.area} · ${livelloInParole(profilo.livello)}${linguaTesto}  `));
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

  elenco.forEach(({ meta, comp }) => {
    const card = crea("article", "card-meta-v2");

    if (comp) {
      let cls = "badge-v2 badge-basso-v2";
      if (comp.totale === null) { if (comp.ordine >= 60) cls = "badge-v2 badge-medio-v2"; }
      else if (comp.totale >= 80) cls = "badge-v2 badge-ok-v2";
      else if (comp.totale >= 40) cls = "badge-v2 badge-medio-v2";

      const etichetta = comp.totale === null
        ? `${comp.icona} ${comp.stato}`
        : `${comp.icona} ${comp.totale}% — ${comp.stato}`;

      const badge = crea("div", cls);
      badge.appendChild(crea("span", "badge-v2-label",  etichetta));
      badge.appendChild(crea("span", "badge-v2-detail", comp.dettaglio));
      card.appendChild(badge);
    }

    card.appendChild(crea("h3", null, meta.universita));
    card.appendChild(crea("div", "card-luogo-v2",
      meta.citta ? `${meta.citta} (${meta.paese})` : meta.paese));

    function campoV2(etichetta, contenuto) {
      const d = crea("div", "campo-v2");
      d.appendChild(crea("span", "campo-v2-label", etichetta));
      if (typeof contenuto === "string") d.appendChild(document.createTextNode(contenuto));
      else d.appendChild(contenuto);
      return d;
    }

    const listaPosti = document.createElement("ul");
    meta.posti.forEach(p => listaPosti.appendChild(crea("li", null, postiInParole(p))));

    const listaLingue = document.createElement("ul");
    if (meta.requisitoLingua && meta.requisitoLingua.length) {
      meta.requisitoLingua.forEach(l =>
        listaLingue.appendChild(crea("li", null, `${l.lingua} ${l.livello} — ${l.condizione}`)));
    } else {
      listaLingue.appendChild(crea("li", null, "Da verificare — non indicata nella lista ufficiale."));
    }

    card.appendChild(campoV2("Dipartimento / Facoltà", meta.dipartimentoCf));
    card.appendChild(campoV2("Posti disponibili",         listaPosti));
    card.appendChild(campoV2("Requisiti linguistici",     listaLingue));

    const link = crea("a", "link-scheda-v2",
      meta.linkPdf ? "Scheda ufficiale (PDF)" : `Portale ${window.ATENEO_LABEL || "Ca' Foscari"}`);
    link.href   = meta.linkPdf || window.ATENEO_PORTALE_URL || "https://www.unive.it/data/11631/";
    link.target = "_blank";
    link.rel    = "noopener";
    link.addEventListener("click", e => e.stopPropagation());
    card.appendChild(link);

    const ePreferita = ZAINO.metePreferite.includes(meta.id);
    const btnPref = crea("button",
      "btn-preferita" + (ePreferita ? " preferita" : ""),
      ePreferita ? "⭐ Preferita" : "☆ Aggiungi ai preferiti");
    btnPref.type  = "button";
    btnPref.title = ePreferita ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti";
    btnPref.addEventListener("click", e => { e.stopPropagation(); togglePreferita(meta.id); });
    card.appendChild(btnPref);

    // Tutta la card è cliccabile: apre il pannello di dettaglio.
    card.classList.add("card-cliccabile");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.appendChild(crea("span", "card-dettagli-hint", "Tocca per i dettagli →"));
    card.addEventListener("click", () => apriDettaglioMeta(meta));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); apriDettaglioMeta(meta); }
    });

    cont.appendChild(card);
  });
}

// ============================================================
// METE PREFERITE
// ============================================================
function renderPreferite(msg) {
  const cont = document.getElementById("sezione-preferite");
  if (!cont) return;
  cont.innerHTML = "";

  const n = ZAINO.metePreferite.length;
  if (n === 0 && !msg) return;

  const header = crea("div", "preferite-header");
  header.appendChild(crea("span", "preferite-label", `Le tue mete preferite (${n}/5)`));
  cont.appendChild(header);

  if (msg) cont.appendChild(crea("p", "msg-preferite", msg));

  if (n > 0) {
    const lista = crea("div", "preferite-lista");
    ZAINO.metePreferite.forEach(id => {
      const meta = (METE || []).find(m => m.id === id);
      if (!meta) return;
      const item = crea("div", "preferita-item");
      item.appendChild(crea("span", "preferita-nome", meta.universita));
      const btnRim = crea("button", "preferita-rimuovi", "✕");
      btnRim.type = "button";
      btnRim.title = "Rimuovi dai preferiti";
      btnRim.addEventListener("click", () => togglePreferita(id));
      item.appendChild(btnRim);
      lista.appendChild(item);
    });
    cont.appendChild(lista);
  }
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
  corpo.appendChild(crea("h2", "dett-titolo", meta.universita));
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
  if (meta.codiceErasmus) corpo.appendChild(rigaDettaglio("Codice Erasmus", meta.codiceErasmus));

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
// CHECKLIST POST-SELEZIONE
// ============================================================
function renderChecklistPost() {
  const cont = document.getElementById("lista-checklist-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklistPost) ZAINO.checklistPost = {};

  const lista  = CHECKLIST_POST || [];
  const spunte = ZAINO.checklistPost;

  const fasi = [];
  lista.forEach(voce => {
    if (!fasi.includes(voce.fase)) fasi.push(voce.fase);
  });

  fasi.forEach(fase => {
    const voci = lista.filter(v => v.fase === fase);
    const gruppo = crea("div", "gruppo-post");
    gruppo.appendChild(crea("h3", "gruppo-post-titolo", fase));

    voci.forEach(voce => {
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
      gruppo.appendChild(label);
    });

    cont.appendChild(gruppo);
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
    renderFaseStepper();
  });

  btnSelezionato.addEventListener("click", () => {
    ZAINO.fase = "selezionato";
    salvaZaino(ZAINO);
    aggiornaBottoniFase();
    renderChecklistAttiva();
    aggiornaNavCandidatura();
    renderFaseStepper();
  });

  aggiornaBottoniFase();
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
    const card = crea("div", "requisito-v2");
    card.appendChild(crea("div", "requisito-v2-titolo", req.titolo));
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
  const ora    = new Date();
  const future = (SCADENZE_CAFOSCARI || [])
    .filter(s => new Date(s.data) > ora)
    .sort((a, b) => new Date(a.data) - new Date(b.data));
  return future[0] || null;
}

function mostraPassoOnboarding(id) {
  ["onboarding-passo-1", "onboarding-passo-2", "onboarding-passo-3", "onboarding-passo-landing"]
    .forEach(pid => {
      const el = document.getElementById(pid);
      if (el) el.style.display = pid === id ? "" : "none";
    });
}

function popolaPassoAteneo() {
  const cont = document.getElementById("onboarding-opzioni-ateneo");
  if (!cont) return;
  cont.innerHTML = "";
  Object.keys(ATENEI).forEach(k => {
    const a = ATENEI[k];
    if (!a.disponibile) return;
    const btn = crea("button", "onboarding-opzione", a.label);
    btn.type = "button";
    btn.addEventListener("click", () => {
      if (k !== window.ATENEO_ATTIVO) {
        try {
          localStorage.setItem("erasmuswiz_ateneo", k);
          sessionStorage.setItem(CHIAVE_ONBOARDING_STEP, "2");
        } catch (e) {}
        location.reload();
        return;
      }
      popolaPassoDipartimento();
      mostraPassoOnboarding("onboarding-passo-2");
    });
    cont.appendChild(btn);
  });
}

function popolaPassoDipartimento() {
  const cont = document.getElementById("onboarding-opzioni-dipartimento");
  if (!cont) return;
  cont.innerHTML = "";
  const visti = [];
  (METE || []).forEach(m => {
    if (m.dipartimentoCf && !visti.includes(m.dipartimentoCf)) visti.push(m.dipartimentoCf);
  });
  visti.forEach(dip => {
    const btn = crea("button", "onboarding-opzione", dip);
    btn.type = "button";
    btn.addEventListener("click", () => {
      window._onboardingDipartimento = dip;
      window._onboardingArea = areaDominanteDipartimento(dip);
      mostraPassoOnboarding("onboarding-passo-3");
    });
    cont.appendChild(btn);
  });
}

function completaOnboarding(livello) {
  const area = window._onboardingArea;
  const dip  = window._onboardingDipartimento;
  ZAINO.profilo = { area, livello, lingue: [] };
  ZAINO.onboardingFatto = true;
  salvaZaino(ZAINO);

  const nMete = (METE || []).filter(m => m.areeDisciplinari.some(a => a.codice === area)).length;
  const prossima = prossimaScadenzaInfo();
  const titolo = document.getElementById("onboarding-landing-titolo");
  const dett   = document.getElementById("onboarding-landing-dettaglio");
  if (titolo) titolo.textContent = `Per te ci sono ${nMete} ${nMete === 1 ? "meta" : "mete"} a ${dip}`;
  if (dett) {
    if (prossima) {
      const giorni = Math.ceil((new Date(prossima.data) - new Date()) / 86400000);
      dett.textContent = `La prossima scadenza è ${prossima.cosa}, tra ${giorni} ${giorni === 1 ? "giorno" : "giorni"}.`;
    } else {
      dett.textContent = "";
    }
  }
  mostraPassoOnboarding("onboarding-passo-landing");
}

function initOnboarding() {
  const overlay = document.getElementById("onboarding-overlay");
  if (!overlay) return;
  if (ZAINO.onboardingFatto) { overlay.style.display = "none"; return; }

  overlay.style.display = "flex";

  let stepRipresa = null;
  try { stepRipresa = sessionStorage.getItem(CHIAVE_ONBOARDING_STEP); sessionStorage.removeItem(CHIAVE_ONBOARDING_STEP); } catch (e) {}

  popolaPassoAteneo();
  if (stepRipresa === "2") {
    popolaPassoDipartimento();
    mostraPassoOnboarding("onboarding-passo-2");
  } else {
    mostraPassoOnboarding("onboarding-passo-1");
  }

  document.querySelectorAll("#onboarding-opzioni-livello .onboarding-opzione").forEach(btn => {
    btn.addEventListener("click", () => completaOnboarding(btn.dataset.livello));
  });

  const btnInizia = document.getElementById("onboarding-btn-inizia");
  if (btnInizia) {
    btnInizia.addEventListener("click", () => {
      overlay.style.display = "none";
      renderHome();
      renderMete();
      renderMissione();
    });
  }
}

// ============================================================
// PROFILO v2
// ============================================================
function popolaAreeV2() {
  const sel = document.getElementById("area-v2");
  if (!sel) return;
  const viste = {};
  (METE || []).forEach(m => {
    m.areeDisciplinari.forEach(a => {
      if (!viste[a.codice]) {
        viste[a.codice] = true;
        const opt = document.createElement("option");
        opt.value       = a.codice;
        opt.textContent = `${a.codice} — ${a.nome}`;
        sel.appendChild(opt);
      }
    });
  });
}

function precompilaFormV2() {
  const p = ZAINO.profilo;
  if (!p) return;
  const nomeInput = document.getElementById("nome-v2");
  if (nomeInput && p.nome) nomeInput.value = p.nome;
  const area    = document.getElementById("area-v2");
  const livello = document.getElementById("livello-v2");
  if (area)    area.value    = p.area;
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
    const nomeDigitato = (document.getElementById("nome-v2")?.value || "").trim();
    ZAINO.profilo = {
      nome:    nomeDigitato || undefined,
      area:    document.getElementById("area-v2").value,
      livello: document.getElementById("livello-v2").value,
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
  renderTimeline();
  initToggleFase();
  if (ZAINO.fase === "selezionato") {
    renderChecklistPost();
  } else {
    renderChecklist();
  }
  renderPreferite();
  renderMete();
  initDettaglioMeta();
  const inputCerca = document.getElementById("cerca-mete");
  if (inputCerca) inputCerca.addEventListener("input", renderMete);
  renderIdoneita();
  renderBannerVerifica();
  initProfilo();
  initCountdownPill();
  aggiornaNavCandidatura();
  renderMissione();
  initOnboarding();
  setInterval(aggiornaCountdownV2, 1000);
}

document.addEventListener("DOMContentLoaded", init);
