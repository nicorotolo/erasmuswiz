// Versa nel registro i verdetti umani, e applica ai dati i soli "si".
//
// Il registro e' la prova che autorizza i due campi d'arbitrato: dal 02/09 non
// puo' piu' restare su un disco solo. Per questo viene pubblicato PRIMA dei dati
// e di nuovo dopo l'evento `applicato`. Ogni riavvio completa prima le scritture
// rimaste locali e i si' rimasti senza chiusura.
//
// Uso: node scripts/applica-arbitrato.mjs <file-verdetti.json> [--prova]
//      node scripts/applica-arbitrato.mjs --solo-recupero

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { codiceCanonico } from "./lib-mete.mjs";
import { applicaPartner, statoApplicazioneProposta } from "./applica-partner.mjs";
import {
  CAMPI_ARBITRATO, appendiEventi, applicaEControlla, apriLock, chiaveGiudizio,
  costruisciCode, gitVero, improntaValore, leggiRegistro, rilasciaLock, statoGiudizio,
} from "./esegui-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ESITI = new Set(["si", "no", "nonSo"]);
const REL_REGISTRO = "raccolta/giudizi.jsonl";

const leggiApprovati = (radice, approvati) => approvati
  || JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "approvati.json"), "utf8"));

// Un verdetto vale solo se punta a UNA proposta che esiste ancora con quel
// valore. Una Map con set() faceva vincere in silenzio l'ultima proposta uguale.
export function abbinaVerdetti({ radice = RADICE, verdetti = [], approvati } = {}) {
  const proposte = leggiApprovati(radice, approvati);
  const perImpronta = new Map();
  for (const p of proposte) {
    if (!CAMPI_ARBITRATO.includes(p.campo)) continue;
    const chiave = chiaveGiudizio(p.codiceNorm, p.campo, improntaValore(p.valore));
    (perImpronta.get(chiave) || perImpronta.set(chiave, []).get(chiave)).push(p);
  }
  const abbinati = [], orfani = [];
  for (const v of verdetti) {
    if (!ESITI.has(v.esito)) { orfani.push({ ...v, causa: "esitoSconosciuto" }); continue; }
    const trovate = perImpronta.get(chiaveGiudizio(v.codiceCanonico, v.campo, v.improntaProposta)) || [];
    if (!trovate.length) { orfani.push({ ...v, causa: "improntaSenzaProposta" }); continue; }
    if (trovate.length > 1) { orfani.push({ ...v, causa: "propostaAmbigua" }); continue; }
    abbinati.push({ verdetto: v, proposta: trovate[0] });
  }
  return { abbinati, orfani };
}

// Commit separato e percorso esplicito: la difesa di applicaEControlla resta
// intatta e non puo' trascinare nel commit file locali della raccolta.
export function pubblicaRegistro({ radice = RADICE, git = gitVero, forzaCommit = false,
  messaggio = "arbitrato: aggiorna registro giudizi" } = {}) {
  const sporco = forzaCommit || !!git.esegui(radice, ["status", "--porcelain", "--", REL_REGISTRO]).trim();
  let commit = null;
  if (sporco) {
    git.esegui(radice, ["add", "--", REL_REGISTRO]);
    git.esegui(radice, ["commit", "-m", messaggio]);
    commit = git.esegui(radice, ["rev-parse", "HEAD"]);
  }
  const locali = git.esegui(radice, ["log", "@{u}..HEAD", "--format=%H", "--", REL_REGISTRO]).trim();
  if (commit || locali) {
    git.esegui(radice, ["fetch", "origin"]);
    git.esegui(radice, ["push", "origin", "HEAD:main"]);
  }
  return { commit, push: commit || locali ? "fatto" : null };
}

// Prima di leggere lo stato, una riga locale o un commit non spinto devono
// arrivare al remoto. Altrimenti l'ultimo `applicato` potrebbe sparire proprio
// perche' localmente sembra gia' terminale.
export function preflightRegistro({ radice = RADICE, git = gitVero } = {}) {
  const registro = leggiRegistro(radice);
  const sporco = git.esegui(radice, ["status", "--porcelain", "--", REL_REGISTRO]).trim();
  if (sporco) pubblicaRegistro({ radice, git, forzaCommit: true,
    messaggio: "arbitrato: completa registro interrotto" });
  else {
    const locali = git.esegui(radice, ["log", "@{u}..HEAD", "--format=%H", "--", REL_REGISTRO]).trim();
    if (locali) {
      git.esegui(radice, ["fetch", "origin"]);
      git.esegui(radice, ["push", "origin", "HEAD:main"]);
    }
  }
  return registro;
}

function indiceProposte(proposte) {
  const indice = new Map();
  for (const p of proposte) {
    if (!CAMPI_ARBITRATO.includes(p.campo)) continue;
    const chiave = chiaveGiudizio(p.codiceNorm, p.campo, improntaValore(p.valore));
    (indice.get(chiave) || indice.set(chiave, []).get(chiave)).push(p);
  }
  return indice;
}

const eventoApplicato = (evento, quando, fonte) => ({
  codiceCanonico: codiceCanonico(evento.codiceCanonico), campo: evento.campo,
  improntaProposta: evento.improntaProposta, esito: "applicato", quando, fonte,
});

// Esecutore della coda tecnica. Usa statoApplicazioneProposta, che a sua volta
// passa dalla stessa preparaApplicazione dell'applicatore: tutte le occorrenze,
// la stessa uguaglianza e la stessa regola "mai sovrascrivere".
export async function recuperaArbitrati({ radice = RADICE, approvati, git = gitVero,
  applica = applicaPartner, quando = "" } = {}) {
  const proposte = leggiApprovati(radice, approvati);
  const perChiave = indiceProposte(proposte);
  const registro = leggiRegistro(radice);
  const motivi = new Map();
  let applicati = 0, chiusiSenzaDati = 0, falliti = 0;
  for (const [chiave, evento] of registro) {
    const stato = statoGiudizio(evento);
    if (stato === "statoSconosciuto") throw new Error(`stato giudizio sconosciuto: ${chiave}`);
    if (stato !== "siNonApplicato") continue;
    const trovate = perChiave.get(chiave) || [];
    if (!trovate.length) { motivi.set(chiave, "propostaAssente"); continue; }
    if (trovate.length > 1) throw new Error(`propostaAmbigua: ${chiave}`);
    const proposta = trovate[0];
    const dati = statoApplicazioneProposta({ radice, proposta });
    if (dati.stato === "metaAssente") { motivi.set(chiave, "metaAssente"); continue; }
    if (dati.stato === "conflitto") { motivi.set(chiave, "conflittoValoreDiverso"); continue; }
    if (dati.stato === "uguale") {
      const fonte = git.esegui(radice, ["rev-parse", "HEAD"]);
      appendiEventi(radice, [eventoApplicato(evento, quando, fonte)]);
      pubblicaRegistro({ radice, git, forzaCommit: true,
        messaggio: "arbitrato: chiude valore gia' applicato" });
      chiusiSenzaDati++;
      continue;
    }
    try {
      const esito = await applicaEControlla({
        radice, proposte: [proposta], campi: [proposta.campo],
        etichetta: `recupero arbitrato: ${proposta.campo}`,
        idTransazione: `rec-arb-${improntaValore([chiave]).slice(0, 12)}`,
        prova: false, git, applica, spingi: true,
      });
      if (esito.annullato || esito.fermato) {
        motivi.set(chiave, "applicazioneNonRiuscita"); falliti++; continue;
      }
      appendiEventi(radice, [eventoApplicato(evento, quando,
        esito.commit || git.esegui(radice, ["rev-parse", "HEAD"]))]);
      pubblicaRegistro({ radice, git, forzaCommit: true,
        messaggio: "arbitrato: registra recupero applicato" });
      applicati++;
    } catch {
      motivi.set(chiave, "applicazioneNonRiuscita");
      falliti++;
    }
  }
  costruisciCode({ radice, approvati: proposte });
  if (motivi.size) {
    const file = path.join(radice, "raccolta", "da-recuperare.json");
    const voci = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const voce of voci) {
      const chiave = chiaveGiudizio(voce.codiceCanonico, voce.campo, voce.improntaProposta);
      if (motivi.has(chiave)) voce.causa = motivi.get(chiave);
    }
    fs.writeFileSync(file, JSON.stringify(voci, null, 2) + "\n");
  }
  return { applicati, chiusiSenzaDati, falliti };
}

function classificaVerdetti(abbinati, registro) {
  const nuovi = [], orfani = [];
  for (const abbinato of abbinati) {
    const { verdetto } = abbinato;
    const chiave = chiaveGiudizio(verdetto.codiceCanonico, verdetto.campo, verdetto.improntaProposta);
    const stato = statoGiudizio(registro.get(chiave));
    if (stato === "statoSconosciuto") { orfani.push({ ...verdetto, causa: "statoSconosciuto" }); continue; }
    if (stato === "daGiudicare") { nuovi.push(abbinato); continue; }
    if (stato === "nonSo") {
      if (verdetto.esito === "nonSo") continue;
      if (verdetto.esito === "si" || verdetto.esito === "no") { nuovi.push(abbinato); continue; }
    }
    if (stato === "siNonApplicato" && verdetto.esito === "si") continue;
    if (stato === "applicato" && verdetto.esito === "si") continue;
    if (stato === "no" && verdetto.esito === "no") continue;
    orfani.push({ ...verdetto, causa: "giaChiuso" });
  }
  return { nuovi, orfani };
}

export async function applicaArbitrato({
  radice = RADICE, verdetti = [], approvati, prova = false, git = gitVero,
  applica = applicaPartner, quando = "", soloRecupero = false,
} = {}) {
  const lock = apriLock(radice, { quando });
  if (!lock.preso) throw new Error(`arbitrato fermato: ${lock.motivo}`);
  try {
    preflightRegistro({ radice, git });
    const proposte = leggiApprovati(radice, approvati);
    const recupero = await recuperaArbitrati({ radice, approvati: proposte, git, applica, quando });
    if (soloRecupero) return { verdetti: 0, eventiNuovi: 0, si: 0, no: 0, nonSo: 0,
      scritti: recupero.applicati, confronto: null, commit: null, recupero };

    const { abbinati, orfani: nonAbbinati } = abbinaVerdetti({ radice, verdetti, approvati: proposte });
    const registro = leggiRegistro(radice);
    const classificati = classificaVerdetti(abbinati, registro);
    const orfani = [...nonAbbinati, ...classificati.orfani];
    if (orfani.length) {
      throw new Error(`${orfani.length} verdetti non abbinati o non applicabili: `
        + orfani.map((o) => `${o.codiceCanonico}/${o.campo} (${o.causa})`).join(", "));
    }

    const eventi = classificati.nuovi.map(({ verdetto }) => ({
      codiceCanonico: codiceCanonico(verdetto.codiceCanonico), campo: verdetto.campo,
      improntaProposta: verdetto.improntaProposta, esito: verdetto.esito, quando,
      fonte: "arbitrato umano",
    }));
    appendiEventi(radice, eventi);
    if (eventi.length) pubblicaRegistro({ radice, git, forzaCommit: true,
      messaggio: `arbitrato: registra ${eventi.length} verdetti` });

    const daApplicare = classificati.nuovi.filter(({ verdetto }) => verdetto.esito === "si");
    const conti = { verdetti: verdetti.length, eventiNuovi: eventi.length,
      si: abbinati.filter((a) => a.verdetto.esito === "si").length,
      no: abbinati.filter((a) => a.verdetto.esito === "no").length,
      nonSo: abbinati.filter((a) => a.verdetto.esito === "nonSo").length, recupero };
    if (!daApplicare.length) {
      costruisciCode({ radice, approvati: proposte });
      return { ...conti, scritti: 0, confronto: null, commit: null };
    }

    const proposteDaApplicare = daApplicare.map(({ proposta }) => proposta);
    const campi = [...new Set(proposteDaApplicare.map((p) => p.campo))];
    let esito;
    try {
      esito = await applicaEControlla({
        radice, proposte: proposteDaApplicare, campi,
        etichetta: `arbitrato: ${campi.join(", ")}`,
        idTransazione: `arb-${improntaValore(verdetti).slice(0, 12)}`,
        prova, git, applica, spingi: true,
      });
    } catch (errore) {
      costruisciCode({ radice, approvati: proposte });
      const file = path.join(radice, "raccolta", "da-recuperare.json");
      const voci = JSON.parse(fs.readFileSync(file, "utf8"));
      for (const voce of voci) if (daApplicare.some(({ verdetto }) =>
        chiaveGiudizio(verdetto.codiceCanonico, verdetto.campo, verdetto.improntaProposta)
          === chiaveGiudizio(voce.codiceCanonico, voce.campo, voce.improntaProposta))) {
        voce.causa = "applicazioneNonRiuscita";
      }
      fs.writeFileSync(file, JSON.stringify(voci, null, 2) + "\n");
      throw errore;
    }

    if (!prova && !esito.annullato && !esito.fermato) {
      const fonte = esito.commit || git.esegui(radice, ["rev-parse", "HEAD"]);
      appendiEventi(radice, daApplicare.map(({ verdetto }) => eventoApplicato(verdetto, quando, fonte)));
      pubblicaRegistro({ radice, git, forzaCommit: true,
        messaggio: "arbitrato: registra valori applicati" });
    }
    costruisciCode({ radice, approvati: proposte });
    return { ...conti, ...esito };
  } finally {
    rilasciaLock(radice);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const soloRecupero = process.argv.includes("--solo-recupero");
  const file = process.argv.slice(2).find((a) => !a.startsWith("--"));
  if (!file && !soloRecupero) {
    console.error("Uso: node scripts/applica-arbitrato.mjs <file-verdetti.json> [--prova] | --solo-recupero");
    process.exitCode = 1;
  } else {
    const prova = process.argv.includes("--prova");
    const verdetti = file ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
    applicaArbitrato({ verdetti, prova, soloRecupero, quando: new Date().toISOString().slice(0, 10) }).then((e) => {
      console.log(`${prova ? "Anteprima (il giudizio viene pubblicato e resta da recuperare)" : "Arbitrato"}: ${e.verdetti} verdetti - ${e.si} si, ${e.nonSo} non so, ${e.no} no; ${e.eventiNuovi} eventi nuovi.`);
      console.log(`Campi-meta scritti: ${e.scritti}. Commit: ${e.commit || "nessuno"}.`);
    }).catch((errore) => { console.error(errore.message); process.exitCode = 1; });
  }
}
