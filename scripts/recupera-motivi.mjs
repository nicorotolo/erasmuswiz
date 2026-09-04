// recupera-motivi.mjs — apre i link che avevamo gia' in casa e non abbiamo mai
// guardato.
//
// Non e' una riraccolta: e' un'AGGIUNTA. Le pagine esistenti non si toccano, e
// questo non e' un dettaglio di stile — una riraccolta vera azzera il testo dei
// PDF gia' estratti, e chi non lo sa legge il risultato come una regressione.
// Qui l'indice cresce, non si riscrive.
//
//   node scripts/recupera-motivi.mjs                 tutti i partner, i piu' utili prima
//   node scripts/recupera-motivi.mjs --limite=10     solo i primi 10
//   node scripts/recupera-motivi.mjs --campo=linkCatalogo
//   node scripts/recupera-motivi.mjs --prova         non scarica e non scrive

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CAMPI_MOTIVATI, forzaMotivo, motiviDelLink, unisciMotivi } from "./lib-motivi.mjs";
import {
  Limitatore, MOTIVATE_PER_CAMPO, TETTO_MOTIVATE, consentitoDaRobots,
  paginaSalvata, regoleRobots, scarica, testoVisibile,
} from "./raccogli-partner.mjs";
import { improntaMateriale, improntaPagina, migraImpronteIndice } from "./leggi-partner.mjs";
import { apriLock, invalidaLettura, rilasciaLock, scriviAtomico } from "./esegui-partner.mjs";
import { codiceCanonico } from "./lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Normalizzazione CONSERVATIVA, e la parola conta. Si uniformano schema, host,
// porta predefinita, frammento e parametri di tracciamento. La BARRA FINALE si
// conserva: `/x` e `/x/` possono essere risorse diverse, e vanno unificati solo
// quando un redirect osservato lo dimostra. Una normalizzazione allegra qui
// farebbe sembrare "gia' visitato" un indirizzo che non lo e'.
const TRACCIAMENTO = /^(utm_|fbclid$|gclid$|mc_(c|e)id$|_ga$|ref$)/i;
export function normalizzaUrl(valore) {
  let u; try { u = new URL(valore); } catch { return String(valore || ""); }
  u.hash = "";
  u.protocol = u.protocol.toLowerCase();
  u.hostname = u.hostname.toLowerCase().replace(/\.$/, "");
  if ((u.protocol === "http:" && u.port === "80") || (u.protocol === "https:" && u.port === "443")) u.port = "";
  for (const chiave of [...u.searchParams.keys()]) if (TRACCIAMENTO.test(chiave)) u.searchParams.delete(chiave);
  return u.href;
}

// Cosa abbiamo gia' in casa e cosa no. Un indirizzo vale come visitato se
// compare come `url` o come `urlFinale`: un redirect seguito e' comunque una
// visita, e ripeterla costerebbe una richiesta per non imparare niente.
export function candidatiDaRecuperare(pagine, { usiPerCampo = {}, tentativi = [] } = {}) {
  const visitati = new Set();
  for (const p of pagine) {
    visitati.add(normalizzaUrl(p.url));
    if (p.urlFinale) visitati.add(normalizzaUrl(p.urlFinale));
  }
  // Chi ha gia' detto no in modo definitivo non si richiede a ogni passata.
  const terminali = tentativiTerminali(tentativi);
  const perUrl = new Map();
  for (const p of pagine) {
    for (const l of p.link || []) {
      const chiave = normalizzaUrl(l.url);
      if (visitati.has(chiave) || terminali.has(chiave)) continue;
      const motivi = motiviDelLink(l.testo);
      if (!motivi.length) continue;
      const gia = perUrl.get(chiave);
      if (gia) {
        gia.motivi = unisciMotivi(gia.motivi, motivi);
        // Testo e provenienza sono una COPPIA: aggiornarne uno solo salverebbe
        // un abbinamento padre-etichetta mai esistito, e la prova di provenienza
        // del piano poggia esattamente su quella coppia.
        if (forzaMotivo(l.testo) > gia.forza) {
          gia.forza = forzaMotivo(l.testo); gia.testoLink = l.testo;
          gia.scopertaDa = p.urlFinale || p.url;
        }
        continue;
      }
      perUrl.set(chiave, { url: l.url, testoLink: l.testo, motivi, forza: forzaMotivo(l.testo), scopertaDa: p.urlFinale || p.url });
    }
  }
  // Prima i piu' "titolati": con quindici candidati per partner e due posti per
  // campo, a decidere e' l'ordine, non il fatto che siano candidati.
  const ordinati = [...perUrl.values()].sort((a, b) => b.forza - a.forza);
  const scelti = []; const usi = { ...usiPerCampo };
  for (const c of ordinati) {
    if (scelti.length >= TETTO_MOTIVATE) break;
    const liberi = c.motivi.filter((m) => (usi[m] || 0) < MOTIVATE_PER_CAMPO);
    if (!liberi.length) continue;
    for (const m of liberi) usi[m] = (usi[m] || 0) + 1;
    scelti.push({ ...c, campiPresi: liberi });
  }
  return scelti;
}

const leggiJson = (file, fallback = null) => {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; }
};

function paginePartner(cartella, indice) {
  const pagine = [];
  for (const riga of indice.pagine || []) {
    const p = leggiJson(path.join(cartella, riga.file));
    if (p) pagine.push(p);
  }
  return pagine;
}

// Quanti posti motivati sono gia' stati usati: le pagine gia' nell'indice che
// portano un motivo hanno gia' consumato il loro budget. Senza questo conteggio
// un partner gia' recuperato ne prenderebbe altri otto a ogni passata.
const usiGiaFatti = (indice) => {
  const usi = {};
  for (const riga of indice.pagine || []) for (const m of riga.motivi || []) usi[m] = (usi[m] || 0) + 1;
  return usi;
};

// Le cause TERMINALI non si riprovano: robots vieta, 404 e 410 non cambiano
// idea. Timeout e 5xx invece sono guasti, spesso intermittenti - www.ceu.edu
// rispondeva 200 pochi minuti dopo - e quelli si riprovano.
const TERMINALI = /^(robots|http40[0-9]|http410|http451)$/;
export function tentativiTerminali(tentativi = []) {
  const insieme = new Set();
  for (const t of tentativi) if (t?.url && TERMINALI.test(t.causa || "")) insieme.add(normalizzaUrl(t.url));
  return insieme;
}

// Un file `NNN.json` sul disco che l'indice non nomina e' un orfano di una
// caduta. Se corrisponde a una pagina vera, si adotta invece di riscaricarla.
export function adottaOrfani(indice, cartella) {
  const nellIndice = new Set((indice.pagine || []).map((r) => r.file));
  let adottate = 0;
  let nomi = []; try { nomi = fs.readdirSync(cartella); } catch { return 0; }
  for (const nome of nomi.sort()) {
    if (!/^\d{3}\.json$/.test(nome) || nellIndice.has(nome)) continue;
    const pagina = leggiJson(path.join(cartella, nome));
    if (!pagina?.url) continue;
    indice.pagine.push({ file: nome, url: pagina.url, punteggio: 0, profondita: 1,
      troncato: pagina.troncato === true, motivi: pagina.motivi || [], improntaContenuto: improntaPagina(pagina) });
    adottate++;
  }
  return adottate;
}

// Il primo nome di file DAVVERO libero. `pagine.length + 1` non basta: sei
// partner reali (ESEVILLA01, NOSLO72, PLBIALYST04, SILJUBLJA01, SLINKOPI01,
// TRANKARA15) hanno gia' sul disco il file che quel conto propone - orfani di
// interruzioni passate. Scrivere li' sopra avrebbe distrutto una pagina vera.
export function nomeLibero(cartella, indice) {
  let n = (indice.pagine || []).length + 1;
  while (fs.existsSync(path.join(cartella, `${String(n).padStart(3, "0")}.json`))) n++;
  return `${String(n).padStart(3, "0")}.json`;
}

// `scaricaFn` e `regoleFn` sono iniettabili per una ragione sola: le prove non
// devono toccare la rete, e senza iniezione l'unico modo di provare la ripresa
// dopo una caduta sarebbe farla cadere davvero.
export async function recuperaUnPartner({ radice = RADICE, codice, limitatore, prova = false, avanzamento = null,
  salvaAvanzamento = null,
  scaricaFn = scarica, regoleFn = regoleRobots, scriviIndiceFn = scriviAtomico } = {}) {
  const c = codiceCanonico(codice);
  const cartella = path.join(radice, "raccolta", "pagine", c);
  const indiceFile = path.join(cartella, "indice.json");
  const indice = leggiJson(indiceFile);
  if (!indice || indice.esito !== "raggiunto") return { codice: c, saltato: "nonRaccolto" };

  // L'ADOZIONE VIENE PRIMA del calcolo dei candidati, e l'ordine e' il punto:
  // un orfano adottato dopo entrerebbe nell'indice mentre il suo indirizzo e'
  // gia' finito fra i candidati, e verrebbe riscaricato lo stesso - cioe'
  // l'adozione non servirebbe a niente. Adottato prima, quell'indirizzo risulta
  // visitato e sparisce dai candidati.
  const adottate = adottaOrfani(indice, cartella);
  const pagine = paginePartner(cartella, indice);
  const candidati = candidatiDaRecuperare(pagine, { usiPerCampo: usiGiaFatti(indice), tentativi: indice.tentativi });
  if (prova) return { codice: c, candidati: candidati.length, aggiunte: 0, prova: true };

  // MIGRAZIONE, prima di tutto il resto. Senza, `improntaMateriale` resta `null`
  // per sempre: torna `null` se ANCHE UNA pagina e' senza impronta, e i 585
  // indici esistenti ne hanno zero su 10.442 pagine. Il versionamento delle
  // letture sarebbe codice morto, e nessuno si accorgerebbe mai che il materiale
  // e' cambiato. Migrare non fa rileggere nessuno: le letture esistenti non
  // hanno impronta, e `letturaDaRifare` su un'impronta assente risponde "non si
  // puo' dire", non "e' cambiato".
  // RICONCILIA, non solo migra: `riscarica-pdf` scrive la pagina e poi l'indice,
  // e una caduta fra le due lascia testo nuovo con impronta vecchia. Al riavvio
  // quel PDF non e' piu' pendente, quindi nessuno lo ripara. Qui le pagine sono
  // gia' state lette per trovare i candidati: ricalcolarle non costa niente.
  const migrate = migraImpronteIndice(indice, cartella, { riconcilia: true });
  const esiti = { codice: c, candidati: candidati.length, aggiunte: 0, migrate, adottate, falliti: {} };
  const salvaIndice = () => {
    indice.improntaMateriale = improntaMateriale(indice);
    indice.recuperoMotiviIl = new Date().toISOString();
    scriviIndiceFn(indiceFile, JSON.stringify(indice, null, 2) + "\n");
  };
  if (!candidati.length) { if (migrate || adottate) salvaIndice(); return esiti; }

  let letturaGiaArchiviata = false;
  for (const cand of candidati) {
    const { regole } = await regoleFn(cand.url, limitatore, indice.tentativi);
    if (!consentitoDaRobots(cand.url, regole)) {
      esiti.falliti.robots = (esiti.falliti.robots || 0) + 1; salvaIndice(); continue;
    }
    const risposta = await scaricaFn(cand.url, limitatore, indice.tentativi);
    if (!risposta.ok) {
      const causa = risposta.errore ? "nonRaggiunto" : `http${risposta.stato}`;
      // Anche i FALLIMENTI si salvano subito: restano nei `tentativi`, cosi' una
      // ripartenza non ripete le stesse richieste per riscoprire le stesse
      // porte chiuse, e il resoconto per causa e' completo anche se si cade.
      esiti.falliti[causa] = (esiti.falliti[causa] || 0) + 1; salvaIndice(); continue;
    }
    const pdf = /application\/pdf/i.test(risposta.tipo) || /\.pdf(?:$|\?)/i.test(new URL(risposta.urlFinale).pathname);
    const html = pdf ? "" : risposta.corpo.toString("utf8");
    if (!pdf && !testoVisibile(html)) {
      esiti.falliti.paginaVuota = (esiti.falliti.paginaVuota || 0) + 1; salvaIndice(); continue;
    }
    // L'ARCHIVIAZIONE VIENE PRIMA DELLA SCRITTURA DELL'INDICE, e l'ordine e' la
    // correzione piu' importante di questo giro. Al contrario, una caduta fra le
    // due lasciava un indice con pagine nuove e una lettura vecchia ancora
    // valida: al riavvio non restavano candidati, e quel materiale non sarebbe
    // stato letto MAI PIU'. Cosi' invece la caduta costa una rilettura di
    // troppo, che e' spreco, non perdita.
    if (!letturaGiaArchiviata) {
      const inv = invalidaLettura(radice, c, avanzamento);
      // E si SALVA SUBITO. Tenerla in memoria fino a fine partner lasciava una
      // finestra in cui il disco conserva ancora `campiDaApplicare` della lettura
      // vecchia, e `bloccoZero()` - che gira prima della rilettura - li
      // applicherebbe. L'invalidazione vale solo se sopravvive a una caduta.
      salvaAvanzamento?.();
      esiti.letturaArchiviata = inv.archiviata; letturaGiaArchiviata = true;
    }
    const file = nomeLibero(cartella, indice);
    const salvata = paginaSalvata(
      { url: cand.url, motivi: cand.motivi, scopertaDa: cand.scopertaDa, testoLink: cand.testoLink },
      risposta, html, pdf, new Date().toISOString(),
    );
    // `wx`: creazione esclusiva. Se fra il calcolo del nome e la scrittura quel
    // file comparisse, si fallisce invece di sovrascrivere una pagina vera.
    fs.writeFileSync(path.join(cartella, file), JSON.stringify(salvata, null, 2) + "\n", { flag: "wx" });
    indice.pagine.push({ file, url: cand.url, punteggio: 0, profondita: 1,
      troncato: risposta.troncato === true, motivi: cand.motivi, improntaContenuto: improntaPagina(salvata) });
    esiti.aggiunte++;
    salvaIndice();
  }
  return esiti;
}

export async function recuperaMotivi({ radice = RADICE, limite = Infinity, campo = null, prova = false, paralleli = 4 } = {}) {
  const lock = prova ? { preso: true } : apriLock(radice, { pid: process.pid, quando: "" });
  if (!lock.preso) return { fermato: lock.motivo };
  try {
    const partner = leggiJson(path.join(radice, "raccolta", "partner.json"), []) || [];
    const avanzFile = path.join(radice, "raccolta", "avanzamento.json");
    const avanzamento = prova ? null : (leggiJson(avanzFile, {}) || {});
    // Prima i partner a cui il campo MANCA davvero: cosi' il numero del criterio
    // d'uscita si vede presto, e se la strada non porta dove si crede ce ne
    // accorgiamo su qualche decina di partner e non su tutti.
    const utili = partner
      .filter((p) => (p.campiMancanti || []).some((x) => (campo ? x === campo : CAMPI_MOTIVATI.includes(x))))
      .sort((a, b) => (b.mete || 0) - (a.mete || 0));
    const limitatore = new Limitatore(paralleli);
    const esito = { partner: 0, aggiunte: 0, letture: 0, candidati: 0, falliti: {}, dettaglio: [] };
    for (const p of (limite === Infinity ? utili : utili.slice(0, limite))) {
      const salva = () => { if (!prova && avanzamento) scriviAtomico(avanzFile, JSON.stringify(avanzamento, null, 2) + "\n"); };
      const r = await recuperaUnPartner({ radice, codice: p.codiceNorm, limitatore, prova, avanzamento, salvaAvanzamento: salva });
      esito.partner++; esito.candidati += r.candidati || 0; esito.aggiunte += r.aggiunte || 0;
      if (r.letturaArchiviata) esito.letture++;
      for (const [k, n] of Object.entries(r.falliti || {})) esito.falliti[k] = (esito.falliti[k] || 0) + n;
      if (r.aggiunte) esito.dettaglio.push({ codice: r.codice, aggiunte: r.aggiunte });
      // Il checkpoint e' l'avanzamento stesso, scritto a ogni partner: una
      // ripartenza non riscarica cio' che ha gia' preso, perche' quelle pagine
      // risultano visitate e non sono piu' candidate.
      if (!prova && avanzamento) scriviAtomico(avanzFile, JSON.stringify(avanzamento, null, 2) + "\n");
    }
    return esito;
  } finally { if (!prova) rilasciaLock(radice); }
}

// `Number(x) || Infinity` trasformava --limite=0 in "tutti", che e' l'opposto
// di quello che chiede chi lo scrive; e un negativo arrivava a slice() con un
// significato inatteso.
export function limiteValido(valore) {
  if (valore === undefined || valore === "") return Infinity;
  const n = Number(valore);
  if (!Number.isInteger(n) || n < 0) throw new Error(`--limite dev'essere un intero >= 0 (ricevuto: ${valore})`);
  return n;
}

async function main() {
  const arg = (nome) => (process.argv.find((a) => a.startsWith(`--${nome}=`)) || "").split("=")[1];
  const esito = await recuperaMotivi({
    limite: limiteValido(arg("limite")),
    campo: arg("campo") || null,
    prova: process.argv.includes("--prova"),
  });
  if (esito.fermato) { console.error(`Fermato: ${esito.fermato}`); process.exitCode = 1; return; }
  console.log(`Partner esaminati: ${esito.partner} · candidati: ${esito.candidati} · pagine aggiunte: ${esito.aggiunte} · letture archiviate: ${esito.letture}`);
  const falliti = Object.entries(esito.falliti);
  if (falliti.length) console.log(`Falliti per causa: ${falliti.map(([k, n]) => `${k} ${n}`).join(" · ")}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
