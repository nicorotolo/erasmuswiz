/* Baseline invarianti + inventario touch — redesign v2 (F0.4 / F0.5)
 *
 * Uso: aprire il sito servito (es. http://localhost:8001/index.html), incollare
 * questo file nella console, poi:
 *
 *     await __run()            // misura i 4 tab al viewport corrente
 *     __confronta(prima, dopo) // diff fra due esiti di __run()
 *
 * Il viewport va impostato PRIMA (DevTools device toolbar o finestra reale) ai
 * tre valori del piano: 390 / 768 / 1280.
 *
 * Perche' misure e non screenshot (R29): senza criteri espliciti ogni differenza
 * e' "intenzionale" e il confronto non dice nulla. Le invarianti del piano sono
 * tutte leggibili dal DOM, quindi il confronto e' esatto e diffabile in git.
 *
 * Criterio di uscita F4 (R30): `touchSotto44` dev'essere VUOTO, salvo le
 * eccezioni motivate elencate in README.md. Non "un sottoinsieme".
 */

window.__baseline = function () {
  const vw = window.innerWidth;
  const de = document.documentElement;
  const vis = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden';
  };
  const round = (n) => Math.round(n * 10) / 10;
  const sel = (el) => {
    const c = (el.className && typeof el.className === 'string')
      ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.')
      : '';
    return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + c;
  };

  // invariante: nessun overflow orizzontale.
  // Gli elementi interni a un <svg> sono esclusi: le <path> della mappa d'Europa
  // sporgono dal viewBox senza produrre overflow di pagina (falsi positivi).
  const overflowX = round(de.scrollWidth - de.clientWidth);
  const sporgenti = [...document.querySelectorAll('body *')]
    .filter((el) => !el.closest('svg'))
    .filter(vis)
    .filter((el) => {
      const r = el.getBoundingClientRect();
      return r.right > vw + 1 || r.left < -1;
    })
    .slice(0, 15)
    .map((el) => {
      const r = el.getBoundingClientRect();
      return { sel: sel(el), left: round(r.left), right: round(r.right) };
    });

  // invariante: ordine dei blocchi invariato
  const pane = document.querySelector('.tab-pane.attivo');
  const blocchi = pane
    ? [...pane.children].filter(vis).map((el, i) => {
        const r = el.getBoundingClientRect();
        return { i, sel: sel(el), top: round(r.top + window.scrollY), h: round(r.height) };
      })
    : [];

  // invariante: nav visibile e non sovrapposta
  const nav = document.querySelector('.nav-bottom');
  const navR = nav ? nav.getBoundingClientRect() : null;
  const navInfo = navR
    ? { presente: true, visibile: vis(nav), top: round(navR.top), h: round(navR.height), pos: getComputedStyle(nav).position }
    : { presente: false };

  // invariante: card non sovrapposte.
  // Le coppie annidate sono escluse: il contenimento non e' una sovrapposizione.
  const cards = [...document.querySelectorAll('[class*="card"], .missione-card, .settimana-card, .percorso-wrap')].filter(vis);
  const sovrapposte = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const a = cards[i], b = cards[j];
      if (a.contains(b) || b.contains(a)) continue;
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      const ox = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
      const oy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      if (ox > 1 && oy > 1) sovrapposte.push({ a: sel(a), b: sel(b), ox: round(ox), oy: round(oy) });
    }
  }

  // invariante: nessun testo tagliato
  const tagliati = [...document.querySelectorAll('h1,h2,h3,h4,p,span,a,button,li,label,td,th')]
    .filter(vis)
    .filter((el) => el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow !== 'visible')
    .slice(0, 15)
    .map((el) => ({ sel: sel(el), scrollW: el.scrollWidth, clientW: el.clientWidth, txt: el.textContent.trim().slice(0, 40) }));

  // inventario touch (R12): si misura il vero bersaglio cliccabile — il
  // label/button/a contenitore, non l'<input> interno — per non produrre falsi positivi.
  const touchMap = new Map();
  [...document.querySelectorAll('a,button,summary,input,select,[tabindex]')].filter(vis).forEach((el) => {
    const t = el.closest('label,button,a,summary') || el;
    const r = t.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (r.width < 44 || r.height < 44) {
      const k = sel(t) + '@' + round(r.top) + ',' + round(r.left);
      if (!touchMap.has(k)) touchMap.set(k, { sel: sel(t), w: round(r.width), h: round(r.height), txt: t.textContent.trim().slice(0, 30) });
    }
  });
  const touchPerSelettore = {};
  [...touchMap.values()].forEach((o) => {
    if (!touchPerSelettore[o.sel]) touchPerSelettore[o.sel] = { n: 0, minW: Infinity, minH: Infinity, es: o.txt };
    const p = touchPerSelettore[o.sel];
    p.n++; p.minW = Math.min(p.minW, o.w); p.minH = Math.min(p.minH, o.h);
  });

  return {
    viewport: vw,
    overflowX,
    sporgenti,
    blocchi,
    nav: navInfo,
    cardSovrapposte: sovrapposte,
    testoTagliato: tagliati,
    touchSotto44: [...touchMap.values()],
    touchPerSelettore,
    contaBlocchi: blocchi.length,
    contaTouchSotto44: touchMap.size,
  };
};

// Gira i 4 tab del contratto hash. Si naviga solo con vaiA (vedi STATO_DEL_SITO §2).
window.__run = async function () {
  const out = {};
  for (const t of ['oggi', 'mete', 'percorso', 'profilo']) {
    vaiA(t, { storia: false, scroll: false });
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 900));
    out[t] = window.__baseline();
  }
  return out;
};

// Diff fra due esiti di __run(): segnala solo cio' che e' peggiorato o cambiato.
window.__confronta = function (prima, dopo) {
  const diff = {};
  for (const tab of Object.keys(prima)) {
    const a = prima[tab], b = dopo[tab], d = {};
    if (a.overflowX !== b.overflowX) d.overflowX = [a.overflowX, b.overflowX];
    if (a.sporgenti.length !== b.sporgenti.length) d.sporgenti = [a.sporgenti.length, b.sporgenti.length];
    if (a.testoTagliato.length !== b.testoTagliato.length) d.testoTagliato = [a.testoTagliato.length, b.testoTagliato.length];
    if (a.cardSovrapposte.length !== b.cardSovrapposte.length) d.cardSovrapposte = [a.cardSovrapposte.length, b.cardSovrapposte.length];
    if (a.contaTouchSotto44 !== b.contaTouchSotto44) d.touch = [a.contaTouchSotto44, b.contaTouchSotto44];
    const oa = a.blocchi.map((x) => x.sel).join('|'), ob = b.blocchi.map((x) => x.sel).join('|');
    if (oa !== ob) d.ordineBlocchi = [oa, ob];
    if (a.nav.pos !== b.nav.pos) d.navPos = [a.nav.pos, b.nav.pos];
    if (Object.keys(d).length) diff[tab] = d;
  }
  return diff;
};

'probe pronto — usa: await __run()';
