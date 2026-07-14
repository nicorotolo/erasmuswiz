/* ============================================================
   MOTORE CONDIVISO — mockup PERCORSO (P0, ondata 2026-07)
   Un solo motore per le due direzioni (Notte cartografica /
   Orizzonte chiaro): l'identità cambia solo nei token CSS del
   file-tema. Nessun fetch, nessun modulo ES: funziona via file://.

   Tre schermate collegate: INGRESSO (mappa + archi di volo animati +
   onboarding a 3 domande) · DASHBOARD (linea di viaggio + moduli
   planner) · CANDIDATURA (itinerario a stazioni).

   Regole del PLAN rispettate nel mockup:
   - pin/cluster = <button> HTML in overlay sopra l'SVG (mai figli di <svg>);
   - archi = elementi SVG nativi; disegno progressivo via stroke-dashoffset;
   - prefers-reduced-motion + tab nascosta fermano l'animazione;
   - rendering dati solo con textContent/createElement (mai innerHTML);
   - date del bando lette come orari civili italiani da UN solo parser;
   - piano settimanale = funzione pura da scadenze + checklist aperte;
   - "Sei in linea?" onesto: "in ritardo" solo per voci azionabili oltre
     la propria scadenza; altrimenti messaggio prudente, mai un voto;
   - ogni scadenza espone fonte apribile + data ultima verifica.
   ============================================================ */
(function(){
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var P = EUROPA_MAPPA.proiezione;
  var D = PERCORSO_DEMO;
  var $ = function(s, r){ return (r || document).querySelector(s); };

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;

  var ATENEO = DEMO.atenei.find(function(a){ return a.key === D.ateneoDemo; });
  var METE = DEMO.mete.filter(function(m){ return m.ateneo === D.ateneoDemo; });
  var PREF = D.preferite.map(function(id){ return DEMO.mete.find(function(m){ return m.id === id; }); }).filter(Boolean);

  /* ---------- date: parser unico "Europe/Rome" ----------
     Nel mockup non abbiamo Intl affidabile via file://; interpretiamo
     la stringa come data civile italiana e confrontiamo per giorni
     interi (Date.UTC dei componenti), così il risultato non dipende
     dal fuso del dispositivo. È il pattern che P3 formalizza. */
  function parti(str){
    var m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(str);
    if (!m) return null;
    return { y:+m[1], mo:+m[2], d:+m[3], h:+(m[4]||12), mi:+(m[5]||0) };
  }
  function giornoUTC(o){ return Date.UTC(o.y, o.mo - 1, o.d); }
  var OGGI = parti(D.oggi);
  function giorniDaOggi(str){
    var o = parti(str); if (!o) return null;
    return Math.round((giornoUTC(o) - giornoUTC(OGGI)) / 86400000);
  }
  var MESI = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  var MESI_BR = ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
  function dataBreve(str){ var o = parti(str); return o ? (o.d + ' ' + MESI_BR[o.mo-1]) : ''; }
  function dataLunga(str){ var o = parti(str); return o ? (o.d + ' ' + MESI[o.mo-1] + ' ' + o.y) : ''; }

  /* ---------- tema ---------- */
  var temaIniziale = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', temaIniziale);
  var temaBtn = $('#tema-btn');
  if (temaBtn) temaBtn.addEventListener('click', function(){
    var h = document.documentElement;
    h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    stopArchi(); avviaArchi();
    renderRotte();
  });

  /* ---------- navigazione a schermate ---------- */
  var SCHERMATE = ['ingresso','dashboard','candidatura'];
  function mostraVista(v){
    SCHERMATE.forEach(function(k){
      var sec = $('#vista-' + k); if (sec) sec.hidden = (k !== v);
      var b = $('.viste button[data-vista="' + k + '"]');
      if (b) b.setAttribute('aria-pressed', String(k === v));
    });
    chiudiScheda();
    // la linea-nav è la nav vera di dashboard/candidatura
    var lineaTappa = v === 'candidatura' ? 'candidati' : (v === 'dashboard' ? 'dashboard' : null);
    aggiornaLinea(lineaTappa);
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('.viste button').forEach(function(b){
    b.addEventListener('click', function(){ mostraVista(b.dataset.vista); });
  });

  /* ---------- linea di viaggio (nav) ----------
     Tappe: Dashboard · Scegli la meta · Candidati · Parti.
     Nel mockup "Scegli la meta" e "Parti" mandano un avviso demo;
     Dashboard e Candidati sono le schermate implementate. */
  var TAPPE = [
    { id:'dashboard', label:'Dashboard', vista:'dashboard' },
    { id:'meta',      label:'Scegli la meta', demo:'Nel sito reale: la mappa delle mete come tappa. In questo mockup vedi l’anteprima nella Dashboard e nell’Ingresso.' },
    { id:'candidati', label:'Candidati', vista:'candidatura' },
    { id:'parti',     label:'Parti', demo:'Tappa conclusiva (zaino/partenza). Nel mockup è bloccata: si sblocca dopo la selezione.' }
  ];
  function costruisciLinea(cont){
    if (!cont) return;
    cont.replaceChildren();
    var nav = document.createElement('nav');
    nav.className = 'linea';
    nav.setAttribute('aria-label', 'Linea di viaggio');
    var ol = document.createElement('ol');
    TAPPE.forEach(function(t){
      var li = document.createElement('li');
      li.className = 'tappa'; li.dataset.tappa = t.id;
      var b = document.createElement('button');
      b.type = 'button';
      var punto = document.createElement('span'); punto.className = 'nodo'; punto.setAttribute('aria-hidden','true');
      var lab = document.createElement('span'); lab.className = 'et'; lab.textContent = t.label;
      b.appendChild(punto); b.appendChild(lab);
      b.addEventListener('click', function(){
        if (t.vista) mostraVista(t.vista);
        else avviso(t.demo);
      });
      li.appendChild(b); ol.appendChild(li);
    });
    nav.appendChild(ol);
    cont.appendChild(nav);
  }
  function aggiornaLinea(tappaAttiva){
    document.querySelectorAll('#linea-nav, #linea-nav-c').forEach(function(c){ c.hidden = !tappaAttiva; });
    document.querySelectorAll('.linea .tappa').forEach(function(li){
      var on = li.dataset.tappa === tappaAttiva;
      li.classList.toggle('corrente', on);
      var b = li.querySelector('button');
      if (on) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    });
  }
  function avviso(msg){
    var box = $('#avviso');
    if (!box) { window.alert(msg); return; }
    box.textContent = msg; box.hidden = false;
    clearTimeout(avviso._t);
    avviso._t = setTimeout(function(){ box.hidden = true; }, 4200);
  }

  /* ---------- mappa base (SVG paesi + gruppo archi) ---------- */
  function costruisciMappa(cont, opt){
    opt = opt || {};
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', EUROPA_MAPPA.viewBox);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', opt.aria || 'Mappa d’Europa con le destinazioni Erasmus');
    var gTerra = document.createElementNS(NS, 'g');
    EUROPA_MAPPA.paesi.forEach(function(p){
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('d', p.d);
      path.setAttribute('class', p.iso === 'ITA' ? 'terra terra-casa' : 'terra');
      gTerra.appendChild(path);
    });
    svg.appendChild(gTerra);
    var gArchi = document.createElementNS(NS, 'g'); gArchi.setAttribute('class', 'archi');
    svg.appendChild(gArchi);
    cont.appendChild(svg);
    var layer = document.createElement('div'); layer.className = 'pin-layer';
    cont.appendChild(layer);
    return { svg: svg, archi: gArchi, layer: layer };
  }

  /* ---------- archi di volo ---------- */
  function arcoPath(a, b){
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    var dx = b.x - a.x, dy = b.y - a.y;
    var dist = Math.hypot(dx, dy);
    // control point sollevato in perpendicolare (curva verso l'alto)
    var lift = Math.min(dist * 0.28, 150);
    var nx = -dy / (dist || 1), ny = dx / (dist || 1);
    if (ny > 0) { nx = -nx; ny = -ny; } // sempre verso l'alto
    var cx = mx + nx * lift, cy = my + ny * lift;
    return 'M' + a.x + ' ' + a.y + ' Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + b.x + ' ' + b.y;
  }
  var archiStato = { g: null, timer: null, idx: 0 };
  function disegnaArco(g, from, to, ritardo, id){
    var d = arcoPath(from, to);
    var path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d); path.setAttribute('class', 'arco');
    path.setAttribute('pathLength', '100');
    path.setAttribute('id', id);
    g.appendChild(path);
    if (!reduce) {
      path.style.strokeDasharray = '100';
      path.style.strokeDashoffset = '100';
      path.style.animation = 'arco-disegna 2.4s ease-out ' + ritardo + 's forwards';
      // punto luminoso che percorre la rotta
      var dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('r', '5'); dot.setAttribute('class', 'arco-luce');
      var mo = document.createElementNS(NS, 'animateMotion');
      mo.setAttribute('dur', '2.4s'); mo.setAttribute('begin', ritardo + 's');
      mo.setAttribute('fill', 'freeze'); mo.setAttribute('rotate', 'auto');
      var mpath = document.createElementNS(NS, 'mpath');
      mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + id);
      mpath.setAttribute('href', '#' + id);
      mo.appendChild(mpath); dot.appendChild(mo);
      g.appendChild(dot);
    }
  }
  function avviaArchi(){
    var g = archiStato.g; if (!g) return;
    g.replaceChildren();
    var rotte = PREF.filter(function(m){ return m.coord; }).slice(0, 6);
    rotte.forEach(function(m, i){
      disegnaArco(g, ATENEO.coord, m.coord, reduce ? 0 : i * 0.55, 'rt-' + i + '-' + (archiStato.idx));
    });
    if (!reduce) {
      // loop lento: ridisegna la scena ogni ~9s (rotazione gentile)
      archiStato.timer = setTimeout(function(){
        archiStato.idx++;
        if (!document.hidden) avviaArchi();
      }, 9000);
    }
  }
  function stopArchi(){ if (archiStato.timer) { clearTimeout(archiStato.timer); archiStato.timer = null; } }
  document.addEventListener('visibilitychange', function(){
    if (document.hidden) stopArchi();
    else if (!reduce && archiStato.g && !$('#vista-ingresso').hidden) avviaArchi();
  });

  /* ---------- clustering + pin (riuso pattern Fase B) ---------- */
  function clusterizza(mete, cont){
    var perCitta = new Map();
    mete.forEach(function(m){
      if (!m.coord) return;
      var k = m.citta + '|' + m.paese;
      if (!perCitta.has(k)) perCitta.set(k, { x:m.coord.x, y:m.coord.y, citta:m.citta, paese:m.paese, items:[] });
      perCitta.get(k).items.push(m);
    });
    var soglia = 30 * (P.viewBoxW / Math.max(cont.clientWidth, 280));
    var out = [];
    Array.from(perCitta.values()).forEach(function(g){
      var vicino = out.find(function(o){ return Math.hypot(o.x - g.x, o.y - g.y) < soglia; });
      if (vicino) vicino.items = vicino.items.concat(g.items);
      else out.push({ x:g.x, y:g.y, citta:g.citta, paese:g.paese, items:g.items.slice() });
    });
    return out;
  }
  function creaPin(cl, opts){
    opts = opts || {};
    var b = document.createElement('button');
    b.type = 'button';
    var n = cl.items.length;
    var stella = opts.stellate && n === 1 && opts.stellate.indexOf(cl.items[0].id) !== -1;
    b.className = 'pin' + (n > 1 ? ' pin-cluster' : '') + (stella ? ' pin-stella' : '');
    b.style.left = (cl.x / P.viewBoxW * 100) + '%';
    b.style.top = (cl.y / P.viewBoxH * 100) + '%';
    var dot = document.createElement('span'); dot.className = 'punto';
    if (n > 1) dot.textContent = String(n);
    b.appendChild(dot);
    b.setAttribute('aria-label', n === 1
      ? cl.items[0].universita + ', ' + cl.citta + ' (' + cl.paese + ') — apri anteprima'
      : n + ' destinazioni vicino a ' + cl.citta + ' — apri elenco');
    if (!isTouch) {
      b.addEventListener('mouseenter', function(){ mostraTooltip(cl, b); });
      b.addEventListener('mouseleave', nascondiTooltip);
      b.addEventListener('focus', function(){ mostraTooltip(cl, b); });
      b.addEventListener('blur', nascondiTooltip);
    }
    b.addEventListener('click', function(){
      nascondiTooltip();
      if (n === 1) apriSchedaMeta(cl.items[0], b); else apriSchedaCluster(cl, b);
    });
    return b;
  }
  function renderPins(layer, mete, opts){
    layer.replaceChildren();
    clusterizza(mete, layer.parentElement).forEach(function(cl){ layer.appendChild(creaPin(cl, opts)); });
  }

  /* ---------- tooltip (desktop) ---------- */
  var tooltip = $('#tooltip');
  function chipEl(etichetta, valore){
    var c = document.createElement('span'); c.className = 'chip';
    var b = document.createElement('b'); b.textContent = valore;
    c.textContent = etichetta + ' '; c.appendChild(b); return c;
  }
  function chipsMeta(m){
    var wrap = document.createElement('div'); wrap.className = 'chips';
    wrap.appendChild(chipEl('Lingua', m.requisitoLingua.length
      ? m.requisitoLingua.map(function(r){ return r.lingua + ' ' + r.livello; }).join(' / ') : 'da verificare'));
    if (m.posti) wrap.appendChild(chipEl('Posti', m.posti + (m.mesi ? ' · ' + m.mesi + ' mesi' : '')));
    if (m.borsaStimata) wrap.appendChild(chipEl('Borsa', '~€' + m.borsaStimata.importoMensile + '/mese (stima)'));
    return wrap;
  }
  function mostraTooltip(cl, pin){
    if (!tooltip || !window.matchMedia('(hover:hover) and (min-width:760px)').matches) return;
    tooltip.replaceChildren();
    var h = document.createElement('h3'), dove = document.createElement('p'); dove.className = 'dove';
    if (cl.items.length === 1) {
      var m = cl.items[0];
      h.textContent = m.universita; dove.textContent = m.citta + ' · ' + m.paese;
      tooltip.appendChild(h); tooltip.appendChild(dove); tooltip.appendChild(chipsMeta(m));
    } else {
      h.textContent = cl.items.length + ' destinazioni vicino a ' + cl.citta;
      dove.textContent = 'Clicca per vederle tutte';
      tooltip.appendChild(h); tooltip.appendChild(dove);
    }
    var lx = parseFloat(pin.style.left), ty = parseFloat(pin.style.top);
    tooltip.style.left = Math.min(Math.max(lx, 16), 84) + '%';
    tooltip.style.top = ty + '%';
    tooltip.classList.toggle('sotto', ty < 28);
    tooltip.hidden = false;
  }
  function nascondiTooltip(){ if (tooltip) tooltip.hidden = true; }

  /* ---------- scheda (sheet/dialog) ---------- */
  var scheda = $('#scheda');
  var apertoDa = null;
  function apriScheda(ap){ apertoDa = ap || apertoDa; scheda.hidden = false; }
  function chiudiScheda(){
    if (!scheda || scheda.hidden) return;
    scheda.hidden = true;
    if (apertoDa && document.contains(apertoDa)) apertoDa.focus();
    apertoDa = null;
  }
  function bottoneChiudi(){
    var x = document.createElement('button'); x.type = 'button'; x.className = 'chiudi';
    x.setAttribute('aria-label', 'Chiudi'); x.textContent = '✕';
    x.addEventListener('click', chiudiScheda); return x;
  }
  function linkFonte(fonte, verificataIl){
    var wrap = document.createElement('p'); wrap.className = 'fonte';
    var a = document.createElement('a');
    a.href = fonte.url; a.target = '_blank'; a.rel = 'noopener';
    a.textContent = fonte.etichetta;
    wrap.appendChild(document.createTextNode('Fonte: '));
    wrap.appendChild(a);
    if (verificataIl) wrap.appendChild(document.createTextNode(' · verificata il ' + dataLunga(verificataIl)));
    return wrap;
  }
  function apriSchedaMeta(m, ap, listaCluster){
    scheda.replaceChildren(); scheda.appendChild(bottoneChiudi());
    if (listaCluster) {
      var back = document.createElement('button'); back.type = 'button'; back.className = 'indietro';
      back.textContent = '← Torna all’elenco';
      back.addEventListener('click', function(){ apriSchedaCluster(listaCluster, apertoDa); });
      scheda.appendChild(back);
    }
    var h = document.createElement('h3'); h.textContent = m.universita;
    var dove = document.createElement('p'); dove.className = 'dove';
    dove.textContent = m.citta + ' · ' + m.paese + ' — ' + m.facolta + (m.livelli ? ' (' + m.livelli + ')' : '');
    scheda.appendChild(h); scheda.appendChild(dove); scheda.appendChild(chipsMeta(m));
    var fonte = document.createElement('p'); fonte.className = 'fonte';
    fonte.textContent = m.borsaStimata
      ? 'Borsa: stima per gruppo-paese, non una promessa. ' + m.borsaStimata.fonte + ' (aggiornato al ' + m.borsaStimata.aggiornatoAl + ').'
      : 'Dati dal bando ufficiale 2026/27.';
    scheda.appendChild(fonte);
    apriScheda(ap);
  }
  function apriSchedaCluster(cl, ap){
    scheda.replaceChildren(); scheda.appendChild(bottoneChiudi());
    var h = document.createElement('h3');
    h.textContent = cl.items.length + ' destinazioni vicino a ' + cl.citta + ' (' + cl.paese + ')';
    scheda.appendChild(h);
    var ul = document.createElement('ul');
    cl.items.forEach(function(m){
      var li = document.createElement('li');
      var b = document.createElement('button'); b.type = 'button';
      b.textContent = m.universita + ' — ' + m.citta;
      b.addEventListener('click', function(){ apriSchedaMeta(m, apertoDa, cl); });
      li.appendChild(b); ul.appendChild(li);
    });
    scheda.appendChild(ul); apriScheda(ap);
  }
  function apriSchedaScadenza(s, ap){
    scheda.replaceChildren(); scheda.appendChild(bottoneChiudi());
    var h = document.createElement('h3'); h.textContent = s.titolo;
    var dove = document.createElement('p'); dove.className = 'dove'; dove.textContent = dataLunga(s.data);
    scheda.appendChild(h); scheda.appendChild(dove);
    var t = document.createElement('p'); t.textContent = s.testo; scheda.appendChild(t);
    var voci = D.checklist.filter(function(v){ return v.scadenzaId === s.id; });
    if (voci.length) {
      var ul = document.createElement('ul'); ul.className = 'scheda-check';
      voci.forEach(function(v){
        var li = document.createElement('li');
        li.textContent = (v.fatta ? '✓ ' : '○ ') + v.testo;
        li.className = v.fatta ? 'fatta' : '';
        ul.appendChild(li);
      });
      scheda.appendChild(ul);
    }
    scheda.appendChild(linkFonte(s.fonte, s.verificataIl));
    apriScheda(ap);
  }
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') { chiudiScheda(); nascondiTooltip(); } });

  /* ====================================================
     PLANNER — funzioni (quasi) pure di derivazione
     ==================================================== */
  function scadenzaDi(id){ return D.scadenze.find(function(s){ return s.id === id; }); }
  function apertaAzionabile(v){ return !v.fatta && v.azionabile; }

  // piano della settimana: voci aperte con scadenza del ciclo attivo,
  // ordinate per data scadenza poi per ordine di checklist; voce senza
  // scadenza mostrata senza data (mai inventata).
  function pianoSettimana(){
    var aperte = D.checklist.filter(function(v){ return !v.fatta; });
    if (!aperte.length) return { stato:'completo', voci:[] };
    var voci = aperte.map(function(v, i){
      var s = v.scadenzaId ? scadenzaDi(v.scadenzaId) : null;
      return { voce:v, scad:s, giorni: s ? giorniDaOggi(s.data) : null, ord:i };
    });
    voci.sort(function(a, b){
      if (a.scad && b.scad) return giornoUTC(parti(a.scad.data)) - giornoUTC(parti(b.scad.data)) || a.ord - b.ord;
      if (a.scad) return -1; if (b.scad) return 1; return a.ord - b.ord;
    });
    return { stato:'attivo', voci: voci.slice(0, 4) };
  }

  // "Sei in linea?": in ritardo SOLO per voci azionabili non spuntate
  // oltre la propria scadenza; altrimenti prudente. Mai un voto.
  function seiInLinea(){
    if (D.bando.stato !== 'aperto' && D.bando.stato !== 'ciclo-attivo')
      return { livello:'na', testo:'Non disponibile', perche:'Nessun ciclo pubblicato e verificato in questo momento.' };
    var inRitardo = D.checklist.filter(function(v){
      if (!apertaAzionabile(v) || !v.scadenzaId) return false;
      var s = scadenzaDi(v.scadenzaId); var g = giorniDaOggi(s.data);
      return g !== null && g < 0;
    });
    if (inRitardo.length)
      return { livello:'ritardo', testo:'In ritardo su ' + inRitardo.length + (inRitardo.length === 1 ? ' azione' : ' azioni'),
               perche:'Alcune azioni non spuntate hanno superato la loro scadenza. Non pesano tutte uguale: aprile la voce per capire.' };
    var prossima = prossimaScadenza();
    if (prossima && giorniDaOggi(prossima.data) <= 7)
      return { livello:'linea', testo:'In linea, ma la scadenza è vicina',
               perche:'Hai spuntato le voci già scadute; la prossima scadenza è entro 7 giorni.' };
    return { livello:'anticipo', testo:'In anticipo',
             perche:'Nessuna azione scaduta e la prossima scadenza non è imminente.' };
  }

  function prossimaScadenza(){
    var fut = D.scadenze.filter(function(s){ var g = giorniDaOggi(s.data); return g !== null && g >= 0; });
    fut.sort(function(a, b){ return giornoUTC(parti(a.data)) - giornoUTC(parti(b.data)); });
    return fut[0] || null;
  }

  /* ====================================================
     INGRESSO
     ==================================================== */
  var ingMap = null, ingLayer = null;
  function costruisciIngresso(){
    var cont = $('#mappa-ingresso'); if (!cont || ingMap) return;
    ingMap = costruisciMappa(cont, { aria:'Mappa d’Europa: da Roma partono le rotte verso le destinazioni Erasmus' });
    archiStato.g = ingMap.archi; ingLayer = ingMap.layer;
    // pin ateneo (casa) + mete
    var casa = document.createElement('button');
    casa.type = 'button'; casa.className = 'pin pin-ateneo';
    casa.style.left = (ATENEO.coord.x / P.viewBoxW * 100) + '%';
    casa.style.top = (ATENEO.coord.y / P.viewBoxH * 100) + '%';
    casa.setAttribute('aria-label', ATENEO.nome + ' — il tuo punto di partenza');
    var an = document.createElement('span'); an.className = 'anello';
    var dp = document.createElement('span'); dp.className = 'punto';
    var lb = document.createElement('span'); lb.className = 'pin-etichetta'; lb.textContent = ATENEO.citta;
    casa.appendChild(an); casa.appendChild(dp); casa.appendChild(lb);
    casa.addEventListener('click', function(){ avviso('Da ' + ATENEO.citta + ' partono le tue rotte Erasmus.'); });
    renderPins(ingLayer, METE, { stellate: D.preferite });
    ingLayer.appendChild(casa);
    avviaArchi();
    aggiornaContoIngresso();
  }
  function aggiornaContoIngresso(){
    var el = $('#conto-mete');
    if (el) el.textContent = String(METE.length);
    var live = $('#ingresso-live');
    if (live) live.textContent = METE.length + ' destinazioni per ' + ATENEO.facolta + ' · ' + ATENEO.breve;
  }

  // onboarding a 3 domande ambientato sul viaggio
  var onbStep = 0;
  function renderOnboarding(){
    var cont = $('#onboarding'); if (!cont) return;
    cont.replaceChildren();
    var domande = [
      { q:'Da dove parti?', opzioni: DEMO.atenei.map(function(a){ return { txt:a.nome, sub:a.citta, key:a.key, on: a.key === D.ateneoDemo }; }) },
      { q:'Con quale facoltà?', opzioni: [{ txt:ATENEO.facolta, sub:'attiva nella demo', on:true },
          { txt:'Economia', sub:'demo', off:true }, { txt:'Medicina', sub:'demo', off:true }] },
      { q:'A che punto sei?', opzioni: [{ txt:'Sto ancora scegliendo le mete', sub:'la maggior parte parte da qui', on:true },
          { txt:'Ho già le idee chiare', sub:'' }] }
    ];
    var dq = domande[onbStep];
    var prog = document.createElement('p'); prog.className = 'onb-prog';
    prog.textContent = 'Domanda ' + (onbStep + 1) + ' di 3';
    var h = document.createElement('h2'); h.textContent = dq.q;
    cont.appendChild(prog); cont.appendChild(h);
    var wrap = document.createElement('div'); wrap.className = 'onb-opz';
    dq.opzioni.forEach(function(o){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'onb-scelta' + (o.on ? ' consigliata' : '');
      var t = document.createElement('span'); t.textContent = o.txt;
      if (o.sub) { var s = document.createElement('span'); s.className = 'sub'; s.textContent = o.sub; t.appendChild(s); }
      b.appendChild(t);
      if (o.off) b.disabled = true;
      b.addEventListener('click', function(){
        if (onbStep < 2) { onbStep++; renderOnboarding(); }
        else mostraVista('dashboard');
      });
      wrap.appendChild(b);
    });
    cont.appendChild(wrap);
    if (onbStep === 2) {
      var nota = document.createElement('p'); nota.className = 'onb-nota';
      nota.textContent = 'Alla fine ti aspetta la tua dashboard, già con la prossima scadenza e le prime azioni.';
      cont.appendChild(nota);
    }
  }

  /* ====================================================
     DASHBOARD (moduli planner)
     ==================================================== */
  var rotteMap = null;
  function costruisciDashboard(){
    renderSaluto();
    renderMissione();
    renderScadenzaModulo();
    renderSeiInLinea();
    renderPianoModulo();
    renderCalendario();
    renderRotteModulo();
    renderCheckin();
  }
  function renderSaluto(){
    var el = $('#dash-saluto'); if (!el) return;
    el.replaceChildren();
    var h = document.createElement('h1'); h.textContent = 'Il tuo viaggio, ' + 'Nicola';
    var p = document.createElement('p');
    p.textContent = ATENEO.breve + ' · ' + ATENEO.facolta + ' — profilo demo';
    el.appendChild(h); el.appendChild(p);
  }
  function iconaSvg(d){
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.setAttribute('class','ic');
    d.split('|').forEach(function(seg){ var p = document.createElementNS(NS,'path'); p.setAttribute('d', seg); svg.appendChild(p); });
    return svg;
  }
  function titoloCard(cont, testo, iconaD){
    var h = document.createElement('h2');
    if (iconaD) h.appendChild(iconaSvg(iconaD));
    h.appendChild(document.createTextNode(testo));
    cont.appendChild(h);
  }
  // hero "oggi" = missione del giorno (prima voce del piano)
  function renderMissione(){
    var card = $('#mod-missione'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'La missione di oggi', 'M9 11l3 3L22 4|M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11');
    var piano = pianoSettimana();
    if (piano.stato !== 'attivo' || !piano.voci.length) {
      var vuoto = document.createElement('p'); vuoto.className = 'neutro';
      vuoto.textContent = 'Nessuna azione in sospeso: sei a posto. Ottimo lavoro.';
      card.appendChild(vuoto); return;
    }
    var top = piano.voci[0];
    var riga = document.createElement('div'); riga.className = 'compito';
    var chk = document.createElement('input'); chk.type = 'checkbox'; chk.id = 'miss-oggi';
    var lab = document.createElement('label'); lab.htmlFor = 'miss-oggi';
    lab.appendChild(document.createTextNode(top.voce.testo));
    var small = document.createElement('small');
    small.textContent = top.voce.minuti + ' min' + (top.scad ? ' · per la scadenza del ' + dataBreve(top.scad.data) : '');
    lab.appendChild(small);
    riga.appendChild(chk); riga.appendChild(lab);
    card.appendChild(riga);
    if (top.scad) card.appendChild(bottoneFonte(top.scad));
  }
  function bottoneFonte(s){
    var b = document.createElement('button'); b.type = 'button'; b.className = 'link-fonte';
    b.textContent = 'Fonte e data di verifica';
    b.addEventListener('click', function(){ apriSchedaScadenza(s, b); });
    return b;
  }
  function renderScadenzaModulo(){
    var card = $('#mod-scadenza'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'Prossima scadenza', 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20|M12 6v6l4 2');
    var s = prossimaScadenza();
    if (!s) { var p = document.createElement('p'); p.className='neutro'; p.textContent='Nessuna scadenza in programma.'; card.appendChild(p); return; }
    var g = giorniDaOggi(s.data);
    var tit = document.createElement('p'); tit.className = 'scad-tit'; tit.textContent = s.titolo;
    card.appendChild(tit);
    var cd = document.createElement('div'); cd.className = 'countdown';
    var box1 = document.createElement('div'); box1.className='box';
    var b1 = document.createElement('b'); b1.textContent = String(g); var s1 = document.createElement('span'); s1.textContent = g === 1 ? 'giorno' : 'giorni';
    box1.appendChild(b1); box1.appendChild(s1);
    var box2 = document.createElement('div'); box2.className='box';
    var b2 = document.createElement('b'); b2.textContent = dataBreve(s.data); var s2 = document.createElement('span'); s2.textContent = 'scadenza';
    box2.appendChild(b2); box2.appendChild(s2);
    cd.appendChild(box1); cd.appendChild(box2);
    card.appendChild(cd);
    card.appendChild(bottoneFonte(s));
  }
  function renderSeiInLinea(){
    var card = $('#mod-linea'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'Sei in linea?', 'M22 12h-4l-3 9L9 3l-3 9H2');
    var r = seiInLinea();
    var pill = document.createElement('div'); pill.className = 'semaforo ' + r.livello;
    var dot = document.createElement('span'); dot.className = 'sem-dot';
    var t = document.createElement('strong'); t.textContent = r.testo;
    pill.appendChild(dot); pill.appendChild(t);
    var perche = document.createElement('p'); perche.className = 'sem-perche'; perche.textContent = r.perche;
    card.appendChild(pill); card.appendChild(perche);
  }
  function renderPianoModulo(){
    var card = $('#mod-piano'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'Questa settimana', 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z');
    var sub = document.createElement('p'); sub.className = 'card-sub';
    sub.textContent = 'Proposto automaticamente dalle scadenze del bando e dalle voci ancora aperte. Tu spunti, non crei nulla.';
    card.appendChild(sub);
    var piano = pianoSettimana();
    if (piano.stato === 'completo') {
      var ok = document.createElement('p'); ok.className='neutro'; ok.textContent='Hai spuntato tutto per ora. Nessuna urgenza inventata.'; card.appendChild(ok); return;
    }
    var ul = document.createElement('ul'); ul.className = 'piano';
    piano.voci.forEach(function(v){
      var li = document.createElement('li');
      var chk = document.createElement('input'); chk.type='checkbox';
      var lab = document.createElement('span'); lab.className='piano-txt'; lab.textContent = v.voce.testo;
      li.appendChild(chk); li.appendChild(lab);
      if (v.scad) {
        var data = document.createElement('button'); data.type='button'; data.className='piano-data';
        var g = v.giorni;
        data.textContent = (g === 0 ? 'oggi' : g === 1 ? 'domani' : 'tra ' + g + ' gg') + ' · ' + dataBreve(v.scad.data);
        data.addEventListener('click', function(){ apriSchedaScadenza(v.scad, data); });
        li.appendChild(data);
      } else {
        var nd = document.createElement('span'); nd.className='piano-data nodata'; nd.textContent='senza data'; li.appendChild(nd);
      }
      ul.appendChild(li);
    });
    card.appendChild(ul);
  }
  function renderCalendario(){
    var card = $('#mod-calendario'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'Calendario delle scadenze', 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z');
    // mese di OGGI
    var y = OGGI.y, mo = OGGI.mo;
    var intest = document.createElement('p'); intest.className='cal-mese'; intest.textContent = MESI[mo-1] + ' ' + y;
    card.appendChild(intest);
    var scadMese = {};
    D.scadenze.forEach(function(s){ var o = parti(s.data); if (o.y === y && o.mo === mo) (scadMese[o.d] = scadMese[o.d] || []).push(s); });
    var primo = new Date(Date.UTC(y, mo-1, 1)).getUTCDay(); // 0=dom
    var offset = (primo + 6) % 7; // lun=0
    var giorniMese = new Date(Date.UTC(y, mo, 0)).getUTCDate();
    var grid = document.createElement('div'); grid.className='cal-grid';
    ['L','M','M','G','V','S','D'].forEach(function(d){ var c=document.createElement('span'); c.className='cal-h'; c.textContent=d; grid.appendChild(c); });
    for (var i=0;i<offset;i++){ var vuoto=document.createElement('span'); vuoto.className='cal-c vuoto'; grid.appendChild(vuoto); }
    for (var d=1; d<=giorniMese; d++){
      var cel;
      if (scadMese[d]) {
        cel = document.createElement('button'); cel.type='button'; cel.className='cal-c scad';
        cel.setAttribute('aria-label', d + ' ' + MESI[mo-1] + ': ' + scadMese[d].map(function(s){return s.titolo;}).join(', '));
        (function(s){ cel.addEventListener('click', function(){ apriSchedaScadenza(s, cel); }); })(scadMese[d][0]);
      } else {
        cel = document.createElement('span'); cel.className='cal-c';
      }
      if (d === OGGI.d) cel.classList.add('oggi');
      var num = document.createElement('span'); num.textContent = String(d); cel.appendChild(num);
      grid.appendChild(cel);
    }
    card.appendChild(grid);
    var leg = document.createElement('p'); leg.className='cal-leg'; leg.textContent='I giorni evidenziati hanno una scadenza: toccali per fonte e dettaglio.';
    card.appendChild(leg);
  }
  function renderRotteModulo(){
    var card = $('#mod-rotte'); if (!card) return;
    card.replaceChildren();
    titoloCard(card, 'Le tue rotte', 'M9 20l-6-2V4l6 2 6-2 6 2v14l-6-2-6 2z|M9 6v14M15 4v14');
    var contMap = document.createElement('div'); contMap.className='mappa mappa-mini'; contMap.id='mappa-rotte';
    card.appendChild(contMap);
    rotteMap = costruisciMappa(contMap, { aria:'Le tue 3 rotte preferite disegnate sulla mappa' });
    renderRotte();
    var ol = document.createElement('ol'); ol.className='rotte-lista';
    PREF.forEach(function(m, i){
      var li = document.createElement('li');
      var b = document.createElement('button'); b.type='button';
      b.textContent = (i+1) + '. ' + m.universita + ' — ' + m.citta;
      b.addEventListener('click', function(){ apriSchedaMeta(m, b); });
      li.appendChild(b); ol.appendChild(li);
    });
    card.appendChild(ol);
  }
  function renderRotte(){
    if (!rotteMap) return;
    rotteMap.archi.replaceChildren();
    PREF.filter(function(m){return m.coord;}).forEach(function(m, i){
      var path = document.createElementNS(NS,'path');
      path.setAttribute('d', arcoPath(ATENEO.coord, m.coord));
      path.setAttribute('class','arco statico prio'+(i+1));
      rotteMap.archi.appendChild(path);
    });
    rotteMap.layer.replaceChildren();
    // casa + preferite
    [ATENEO.coord].forEach(function(){});
    var casa = document.createElement('span'); casa.className='pin-mini casa';
    casa.style.left=(ATENEO.coord.x/P.viewBoxW*100)+'%'; casa.style.top=(ATENEO.coord.y/P.viewBoxH*100)+'%';
    rotteMap.layer.appendChild(casa);
    PREF.forEach(function(m){
      if (!m.coord) return;
      var p = document.createElement('span'); p.className='pin-mini stella';
      p.style.left=(m.coord.x/P.viewBoxW*100)+'%'; p.style.top=(m.coord.y/P.viewBoxH*100)+'%';
      rotteMap.layer.appendChild(p);
    });
  }
  function renderCheckin(){
    var card = $('#mod-checkin'); if (!card) return;
    card.replaceChildren();
    var fatte = D.checklist.filter(function(v){return v.fatta;}).length;
    var tot = D.checklist.length;
    var aperte = tot - fatte;
    titoloCard(card, 'Check-in della settimana', 'M9 12l2 2 4-4|M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20');
    var p1 = document.createElement('p'); p1.className='checkin-riga';
    p1.appendChild(etichettaForte('Fatto', fatte + ' di ' + tot + ' passi'));
    var p2 = document.createElement('p'); p2.className='checkin-riga';
    p2.appendChild(etichettaForte('Proposto', pianoSettimana().voci.length + ' azioni per questa settimana'));
    var p3 = document.createElement('p'); p3.className='checkin-riga';
    var prox = prossimaScadenza();
    p3.appendChild(etichettaForte('Quanto manca', prox ? giorniDaOggi(prox.data) + ' giorni alla prossima scadenza' : 'nessuna scadenza'));
    card.appendChild(p1); card.appendChild(p2); card.appendChild(p3);
    var nota = document.createElement('p'); nota.className='card-sub';
    nota.textContent = 'Appare all’inizio di ogni settimana. Nessuna notifica, nessuna serie da non spezzare.';
    card.appendChild(nota);
  }
  function etichettaForte(et, val){
    var s = document.createElement('span');
    var b = document.createElement('b'); b.textContent = et + ': ';
    s.appendChild(b); s.appendChild(document.createTextNode(val));
    return s;
  }

  /* ====================================================
     CANDIDATURA — itinerario a stazioni
     ==================================================== */
  function costruisciCandidatura(){
    var cont = $('#itinerario'); if (!cont) return;
    cont.replaceChildren();
    var ol = document.createElement('ol'); ol.className='stazioni';
    D.scadenze.forEach(function(s){
      var g = giorniDaOggi(s.data);
      var stato = s.passata ? 'passata' : (s.corrente || (g !== null && g >= 0 && g <= 14 && !s.futura) ? 'corrente' : 'futura');
      // determina corrente in modo deterministico: prima scadenza non passata
      var li = document.createElement('li'); li.className = 'stazione ' + stato;
      var nodo = document.createElement('span'); nodo.className='st-nodo'; nodo.setAttribute('aria-hidden','true');
      li.appendChild(nodo);
      var body = document.createElement('div'); body.className='st-body';
      if (stato === 'corrente') {
        var ora = document.createElement('span'); ora.className='st-ora'; ora.textContent='Ora tocca a te';
        body.appendChild(ora);
      }
      var h = document.createElement('h3'); h.textContent = s.titolo; body.appendChild(h);
      var meta = document.createElement('p'); meta.className='st-meta';
      if (stato === 'passata') meta.textContent = 'Completata · ' + dataLunga(s.data);
      else if (stato === 'corrente') meta.textContent = (g === 0 ? 'scade oggi' : g === 1 ? 'scade domani' : 'tra ' + g + ' giorni') + ' · ' + dataLunga(s.data);
      else meta.textContent = dataLunga(s.data);
      body.appendChild(meta);
      var t = document.createElement('p'); t.className='st-testo'; t.textContent = s.testo; body.appendChild(t);
      var voci = D.checklist.filter(function(v){ return v.scadenzaId === s.id; });
      if (voci.length && stato !== 'futura') {
        var ul = document.createElement('ul'); ul.className='st-check';
        voci.forEach(function(v){
          var vi = document.createElement('li'); vi.className = v.fatta ? 'fatta' : '';
          var chk = document.createElement('input'); chk.type='checkbox'; chk.checked = v.fatta; chk.disabled = stato==='passata';
          var lab = document.createElement('span'); lab.textContent = v.testo;
          vi.appendChild(chk); vi.appendChild(lab); ul.appendChild(vi);
        });
        body.appendChild(ul);
      }
      var f = document.createElement('button'); f.type='button'; f.className='link-fonte';
      f.textContent = 'Fonte · verificata il ' + dataLunga(s.verificataIl);
      (function(sc){ f.addEventListener('click', function(){ apriSchedaScadenza(sc, f); }); })(s);
      body.appendChild(f);
      li.appendChild(body);
      ol.appendChild(li);
    });
    cont.appendChild(ol);
  }

  /* ---------- resize (coalizzato) ---------- */
  var rafId = null;
  window.addEventListener('resize', function(){
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(function(){
      if (ingLayer) renderPins(ingLayer, METE, { stellate: D.preferite });
      renderRotte();
    });
  });

  /* ---------- avvio ---------- */
  costruisciLinea($('#linea-nav'));
  costruisciLinea($('#linea-nav-c'));
  costruisciIngresso();
  renderOnboarding();
  costruisciDashboard();
  costruisciCandidatura();
  mostraVista('ingresso');
})();
