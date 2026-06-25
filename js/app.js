// ============================================================
// ErasmusWiz v2 — Logica principale
// Legge i dati dai file js/dati-*.js (condivisi con v1).
// METE = array combinato Economia + Management (vedi index.html)
// ============================================================

const CHIAVE_ZAINO = "erasmuswiz-zaino";

function caricaZaino() {
  try {
    const g = localStorage.getItem(CHIAVE_ZAINO);
    return g ? JSON.parse(g) : { profilo: null, checklist: {} };
  } catch (e) {
    return { profilo: null, checklist: {} };
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
    t.classList.toggle("attivo", t.dataset.tab === nome);
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
}

// ============================================================
// PERCORSO A TAPPE
// ============================================================
const TAPPE_DEF = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: "partenza", label: "🎒" },
];

const NOMI_TAPPA = {
  1: "Compila il profilo",
  2: "Esplora le mete",
  3: "Avvia la checklist",
  4: "Prepara i documenti",
  5: "Invia la candidatura",
  partenza: "Sei pronto a partire!",
};

function calcolaTappaAttiva() {
  if (!ZAINO.profilo) return 1;
  const tot   = (CHECKLIST || []).length;
  const fatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
  if (fatti === 0) return 2;
  if (fatti < Math.ceil(tot * 0.4)) return 3;
  if (fatti < Math.ceil(tot * 0.8)) return 4;
  if (fatti < tot) return 5;
  return "partenza";
}

function renderPercorso() {
  const wrap  = document.getElementById("percorso-tappe");
  const label = document.getElementById("percorso-tappa");
  if (!wrap) return;

  const tappaAttiva = calcolaTappaAttiva();
  const tappaNum = tappaAttiva === "partenza" ? 99 : tappaAttiva;

  if (label) {
    const nome = NOMI_TAPPA[tappaAttiva] || "";
    label.textContent = tappaAttiva === "partenza"
      ? "🎒 " + nome
      : `Tappa ${tappaAttiva} · ${nome}`;
  }

  const percorsoWrap = wrap.parentElement;
  const vecchioLink = percorsoWrap && percorsoWrap.querySelector(".percorso-modifica-profilo");
  if (vecchioLink) vecchioLink.remove();

  wrap.innerHTML = "";
  TAPPE_DEF.forEach((t, i) => {
    const isPartenza = t.id === "partenza";
    const idNum = isPartenza ? 99 : t.id;

    let stato;
    if (isPartenza) {
      stato = tappaNum >= 99 ? "attivo" : "partenza";
    } else if (idNum < tappaNum) {
      stato = "fatto";
    } else if (idNum === tappaNum) {
      stato = "attivo";
    } else {
      stato = "futuro";
    }

    const dot = crea("div", "percorso-dot " + stato);
    dot.textContent = stato === "fatto" ? "✓" : t.label;
    wrap.appendChild(dot);

    if (i < TAPPE_DEF.length - 1) {
      const linea = crea("div", "percorso-linea " + (idNum < tappaNum ? "fatta" : "futura"));
      wrap.appendChild(linea);
    }
  });

  if (percorsoWrap && tappaNum >= 2) {
    const lnk = crea("a", "percorso-modifica-profilo", "Modifica profilo");
    lnk.href = "#";
    lnk.addEventListener("click", e => { e.preventDefault(); mostraTab("profilo"); });
    percorsoWrap.appendChild(lnk);
  }
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
  renderPercorso();
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
function renderChecklist() {
  const cont = document.getElementById("lista-checklist-v2");
  if (!cont) return;
  cont.innerHTML = "";
  if (!ZAINO.checklist) ZAINO.checklist = {};

  const prossimaVoceId = (CHECKLIST || []).find(v => !ZAINO.checklist[v.id])?.id;

  (CHECKLIST || []).forEach(voce => {
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
      if (cb.checked) mostraBannerWiz();
      ZAINO.checklist[voce.id] = cb.checked;
      salvaZaino(ZAINO);
      renderChecklist();
      aggiornaProgressoV2();
      renderMissione();
    });

    label.appendChild(cb);
    label.appendChild(crea("span", null, voce.testo));
    cont.appendChild(label);
  });

  aggiornaProgressoV2();
}

function aggiornaProgressoV2() {
  const tot   = (CHECKLIST || []).length;
  const fatti = (CHECKLIST || []).filter(v => ZAINO.checklist && ZAINO.checklist[v.id]).length;
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

    card.appendChild(campoV2("Dipartimento Ca' Foscari", meta.dipartimentoCf));
    card.appendChild(campoV2("Posti disponibili",         listaPosti));
    card.appendChild(campoV2("Requisiti linguistici",     listaLingue));

    const link = crea("a", "link-scheda-v2",
      meta.linkPdf ? "Scheda ufficiale (PDF)" : "Portale Ca' Foscari");
    link.href   = meta.linkPdf || "https://www.unive.it/data/11631/";
    link.target = "_blank";
    link.rel    = "noopener";
    card.appendChild(link);

    cont.appendChild(card);
  });
}

// ============================================================
// IDONEITÀ v2
// ============================================================
function renderIdoneita() {
  const cont = document.getElementById("lista-requisiti-v2");
  if (!cont) return;
  (REQUISITI_BANDO || []).forEach(req => {
    const card = crea("div", "requisito-v2");
    card.appendChild(crea("div", "requisito-v2-titolo", req.titolo));
    card.appendChild(crea("div", "requisito-v2-valore", req.valore));
    card.appendChild(crea("div", "requisito-v2-desc",   req.descrizione));
    cont.appendChild(card);
  });
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
    ZAINO.profilo = {
      area:    document.getElementById("area-v2").value,
      livello: document.getElementById("livello-v2").value,
      lingue,
    };
    salvaZaino(ZAINO);
    renderMete();
    renderMissione();
    if (salvato) salvato.hidden = false;
  });
}

// ============================================================
// AVVIO
// ============================================================
function init() {
  initNav();
  initTema();
  renderHome();
  renderTimeline();
  renderChecklist();
  renderMete();
  renderIdoneita();
  initProfilo();
  initCountdownPill();
  renderMissione();
  setInterval(aggiornaCountdownV2, 1000);
}

document.addEventListener("DOMContentLoaded", init);
