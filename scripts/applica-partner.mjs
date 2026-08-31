// applica-partner.mjs — applica nei dati le proposte gia' passate dai cancelli.
// Uso: node scripts/applica-partner.mjs [--prova]

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { fileMete } from "./cancelli.mjs";
import { campoVuoto, caricaMete, impostaCampo, serializza, spanTutteMete, statoCampo, valoreCampo } from "./lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const normCodice = (codice) => String(codice || "").replace(/\s+/g, " ").trim().toUpperCase();
const leggiJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const dataLettura = (lettura) => String(lettura?.lettoIl || new Date().toISOString()).slice(0, 10);

function cancelliDiSistemaVeri(radice) {
  // Le prove usano una radice finta senza gli altri script del progetto.
  if (radice !== RADICE) return;
  execFileSync(process.execPath, ["scripts/verifica-completezza.mjs"], { cwd: radice, stdio: "inherit" });
  execFileSync(process.execPath, ["scripts/valida-stato.mjs"], { cwd: radice, stdio: "inherit" });
}

function valoreUguale(grezzo, proposto) {
  try { return isDeepStrictEqual(Function(`"use strict"; return (${grezzo});`)(), proposto); }
  catch { return grezzo === serializza(proposto); }
}

function lettureDaCartella(radice) {
  const cartella = path.join(radice, "raccolta", "letture");
  if (!fs.existsSync(cartella)) return [];
  return fs.readdirSync(cartella)
    .filter((file) => file.endsWith(".json"))
    .map((file) => leggiJson(path.join(cartella, file)));
}

function sostituisciBlocchi(testo, codice, modifica) {
  const spans = spanTutteMete(testo, codice).sort((a, b) => b.start - a.start);
  let nuovo = testo;
  for (const { start, end } of spans) {
    const esito = modifica(nuovo.slice(start, end));
    nuovo = nuovo.slice(0, start) + esito + nuovo.slice(end);
  }
  return nuovo;
}

function codiciNelFile(testo, codiceNorm) {
  return [...new Set(caricaMete(testo)
    .filter((meta) => normCodice(meta.codiceErasmus) === codiceNorm)
    .map((meta) => meta.codiceErasmus))];
}

function aggiungiNonTrovabile(blocco, campo, lettura) {
  let meta;
  try { meta = Function(`"use strict"; return (${blocco});`)(); }
  catch { throw new Error("Blocco meta non leggibile"); }
  // Rete di sicurezza, non la decisione: chi chiama entra qui solo quando
  // statoCampo dice "vuoto", e con una voce nonTrovabile presente statoCampo
  // non dice mai "vuoto". Oggi questa riga non scatta mai; resta perche' se un
  // giorno la guardia del chiamante cambia, il dato esistente e' comunque
  // protetto. Chi cerca la regola vera la trova nel secondo ciclo, non qui.
  if (meta?.nonTrovabile?.[campo]) return { blocco, modificato: false };
  const pagina = new Map((lettura.pagineInviate || []).map((p) => [p.n, p])).get(lettura.nonTrovati?.[campo]);
  if (!pagina?.url) return { blocco, modificato: false, saltato: true };
  const nonTrovabile = { ...(meta.nonTrovabile || {}), [campo]: { cercatoIl: dataLettura(lettura), fonte: pagina.url } };
  return impostaCampo(blocco, "nonTrovabile", nonTrovabile);
}

// `campi` limita l'applicazione ad alcuni campi soltanto, e non e' un dettaglio
// tecnico: il 31/08 l'arbitrato umano dei 30 campi ha promosso linkSito,
// scadenzeOspitante e notaDisponibilita (16 su 16) e bocciato linkCatalogo
// (7 su 10) e requisitoLingua. Si applica cio' di cui ci si fida, il resto
// resta in cache e aspetta una lettura migliore: non si butta niente.
export async function applicaPartner({ radice = RADICE, approvati, letture, campi, prova = false, cancelliDiSistema = cancelliDiSistemaVeri } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const ammessi = campi && campi.length ? new Set(campi) : null;
  const tutteProposte = approvati || leggiJson(path.join(raccolta, "approvati.json"));
  const proposte = ammessi ? tutteProposte.filter((p) => ammessi.has(p.campo)) : tutteProposte;
  const tutteLetture = letture || lettureDaCartella(radice);
  const originali = new Map(fileMete(radice).map((file) => [file, fs.readFileSync(file, "utf8")]));
  const pronti = new Map(originali);
  const disaccordi = [];
  const fonti = {};
  let scritti = 0, uguali = 0, nonTrovabili = 0, nonTrovatiSaltati = 0, nonTrovabileSaltatiPieni = 0;

  for (const proposta of proposte) {
    const codiceNorm = normCodice(proposta.codiceNorm);
    for (const [file, iniziale] of originali) {
      const codici = codiciNelFile(pronti.get(file), codiceNorm);
      for (const codice of codici) {
        pronti.set(file, sostituisciBlocchi(pronti.get(file), codice, (blocco) => {
          const grezzo = valoreCampo(blocco, proposta.campo);
          if (!campoVuoto(grezzo)) {
            if (valoreUguale(grezzo, proposta.valore)) uguali++;
            else disaccordi.push({ codiceNorm: proposta.codiceNorm, campo: proposta.campo, file,
              valoreEsistente: grezzo, valoreProposto: proposta.valore, fonte: proposta.fonte });
            return blocco;
          }
          const esito = impostaCampo(blocco, proposta.campo, proposta.valore, { soloSeVuoto: true });
          if (esito.modificato) {
            scritti++;
            ((fonti[proposta.codiceNorm] ||= {})[proposta.campo] = proposta.fonte?.url);
          }
          return esito.blocco;
        }));
      }
    }
  }

  for (const lettura of tutteLetture) {
    const codiceNorm = normCodice(lettura.codiceNorm);
    for (const campo of Object.keys(lettura.nonTrovati || {})) {
      for (const [file] of originali) {
        const codici = codiciNelFile(pronti.get(file), codiceNorm);
        for (const codice of codici) {
          pronti.set(file, sostituisciBlocchi(pronti.get(file), codice, (blocco) => {
            // statoCampo e' la definizione condivisa: una voce gia' registrata non si tocca.
            let meta;
            try { meta = Function(`"use strict"; return (${blocco});`)(); } catch { meta = null; }
            const stato = statoCampo(meta, campo);
            if (stato !== "vuoto") {
              if (stato === "dato") nonTrovabileSaltatiPieni++;
              return blocco;
            }
            const esito = aggiungiNonTrovabile(blocco, campo, lettura);
            if (esito.modificato) nonTrovabili++;
            if (esito.saltato) nonTrovatiSaltati++;
            return esito.blocco;
          }));
        }
      }
    }
  }

  const modificati = [...pronti].filter(([file, testo]) => testo !== originali.get(file));
  const risultato = { scritti, uguali, nonTrovabili, nonTrovatiSaltati, nonTrovabileSaltatiPieni, disaccordi, fonti, fileToccati: modificati.map(([file]) => file) };
  if (prova) {
    fs.mkdirSync(raccolta, { recursive: true });
    fs.writeFileSync(path.join(raccolta, "anteprima-partner.json"), JSON.stringify(risultato, null, 2) + "\n");
    return risultato;
  }

  try {
    for (const [file, testo] of modificati) fs.writeFileSync(file, testo);
    for (const [file] of modificati) execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    await cancelliDiSistema(radice);
  } catch (errore) {
    for (const [file] of modificati) fs.writeFileSync(file, originali.get(file));
    throw new Error(`Applicazione non valida: tutto annullato. ${errore.stderr?.toString() || errore.message}`);
  }

  fs.mkdirSync(path.join(raccolta, "riconciliazione"), { recursive: true });
  fs.writeFileSync(path.join(raccolta, "riconciliazione", "disaccordi.json"), JSON.stringify(disaccordi, null, 2) + "\n");
  fs.writeFileSync(path.join(raccolta, "FONTI-partner.json"), JSON.stringify(fonti, null, 2) + "\n");

  return risultato;
}

async function main() {
  const prova = process.argv.includes("--prova");
  const campi = (process.argv.find((a) => a.startsWith("--campi=")) || "").slice(8).split(",").filter(Boolean);
  // Senza letture non si scrive nessun nonTrovabile: e' una scelta a parte
  // rispetto all'applicare i valori, e va poterla fare separatamente.
  const letture = process.argv.includes("--niente-non-trovabile") ? [] : undefined;
  const esito = await applicaPartner({ prova, campi, letture });
  console.log(`${prova ? "Anteprima" : "Applicazione"}: ${esito.scritti} campi scritti, ${esito.nonTrovabili} nonTrovabile, ${esito.nonTrovabileSaltatiPieni} nonTrovabile saltati per campo pieno, ${esito.disaccordi.length} disaccordi.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((errore) => { console.error(errore.message); process.exitCode = 1; });
