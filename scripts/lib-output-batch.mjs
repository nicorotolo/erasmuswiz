import fs from "node:fs";
import { CAMPI_RIEMPIBILI } from "./lib-mete.mjs";

const CAMPI_EXTRA = new Set(["notePraticheAppend", "fonti"]);
const DATA_ISO = /^\d{4}-\d{2}-\d{2}$/;

function assert(condizione, messaggio) {
  if (!condizione) throw new Error(messaggio);
}

export function validaFonte(fonte, contesto = "fonte") {
  assert(fonte && typeof fonte === "object" && !Array.isArray(fonte), `${contesto}: deve essere un oggetto`);
  assert(typeof fonte.url === "string" && /^https?:\/\//i.test(fonte.url), `${contesto}.url: URL http(s) mancante o non valido`);
  assert(typeof fonte.citazione === "string" && fonte.citazione.trim().length >= 8, `${contesto}.citazione: citazione testuale mancante o troppo breve`);
  assert(fonte.citazione.length <= 2000, `${contesto}.citazione: massimo 2000 caratteri`);
  assert(typeof fonte.verificataIl === "string" && DATA_ISO.test(fonte.verificataIl), `${contesto}.verificataIl: usare AAAA-MM-GG`);
  return {
    url: fonte.url.trim(),
    citazione: fonte.citazione.trim(),
    verificataIl: fonte.verificataIl,
  };
}

function validaValore(campo, valore, contesto) {
  if (campo === "requisitoLingua") {
    assert(Array.isArray(valore) && valore.length > 0, `${contesto}: deve essere un array non vuoto`);
    for (const [i, r] of valore.entries()) {
      assert(r && typeof r === "object", `${contesto}[${i}]: oggetto atteso`);
      assert(typeof r.lingua === "string" && r.lingua.trim(), `${contesto}[${i}].lingua mancante`);
      assert(typeof r.livello === "string" && /^(A1|A2|B1|B2|C1|C2)([-/]?(A1|A2|B1|B2|C1|C2))?$/i.test(r.livello.trim()), `${contesto}[${i}].livello CEFR non valido`);
    }
    return;
  }
  if (campo === "scadenzeOspitante") {
    assert(Array.isArray(valore) && valore.length > 0, `${contesto}: deve essere un array non vuoto`);
    for (const [i, r] of valore.entries()) {
      assert(r && typeof r.cosa === "string" && r.cosa.trim(), `${contesto}[${i}].cosa mancante`);
      assert(typeof r.periodo === "string" && r.periodo.trim(), `${contesto}[${i}].periodo mancante`);
    }
    return;
  }
  assert(typeof valore === "string" && valore.trim(), `${contesto}: stringa non vuota attesa`);
  if (campo === "linkSito" || campo === "linkCatalogo") {
    assert(/^https?:\/\//i.test(valore), `${contesto}: URL http(s) non valido`);
  }
}

export function validaContenitoreOutput(contenitore, input, { etichetta = "OUTPUT" } = {}) {
  assert(contenitore && typeof contenitore === "object" && !Array.isArray(contenitore), `${etichetta}: oggetto radice atteso`);
  assert(contenitore.batchId === input.batchId, `${etichetta}: batchId non corrispondente (atteso ${input.batchId})`);
  assert(contenitore.dati && typeof contenitore.dati === "object" && !Array.isArray(contenitore.dati), `${etichetta}.dati: oggetto atteso`);

  const meteInput = new Map((input.mete || []).map((m) => [m.codiceErasmus, new Set(m.campiDaRiempire || [])]));
  const pulito = {};

  for (const [codice, patch] of Object.entries(contenitore.dati)) {
    assert(meteInput.has(codice), `${etichetta}.${codice}: codice non presente nel batch`);
    assert(patch && typeof patch === "object" && !Array.isArray(patch), `${etichetta}.${codice}: oggetto atteso`);
    const consentiti = meteInput.get(codice);
    const campiDati = Object.keys(patch).filter((k) => CAMPI_RIEMPIBILI.includes(k));
    assert(campiDati.length > 0, `${etichetta}.${codice}: nessun campo dati trovato`);

    for (const chiave of Object.keys(patch)) {
      assert(CAMPI_RIEMPIBILI.includes(chiave) || CAMPI_EXTRA.has(chiave), `${etichetta}.${codice}.${chiave}: campo non consentito`);
    }

    const fonti = patch.fonti;
    assert(fonti && typeof fonti === "object" && !Array.isArray(fonti), `${etichetta}.${codice}.fonti: mappa obbligatoria`);
    const patchPulita = { fonti: {} };

    for (const campo of campiDati) {
      assert(consentiti.has(campo), `${etichetta}.${codice}.${campo}: non richiesto da campiDaRiempire`);
      validaValore(campo, patch[campo], `${etichetta}.${codice}.${campo}`);
      patchPulita[campo] = patch[campo];
      patchPulita.fonti[campo] = validaFonte(fonti[campo], `${etichetta}.${codice}.fonti.${campo}`);
    }

    if (patch.notePraticheAppend != null) {
      assert(typeof patch.notePraticheAppend === "string" && patch.notePraticheAppend.trim(), `${etichetta}.${codice}.notePraticheAppend: stringa non vuota attesa`);
      patchPulita.notePraticheAppend = patch.notePraticheAppend.trim();
    }
    pulito[codice] = patchPulita;
  }

  return { batchId: input.batchId, dati: pulito };
}

export function leggiEValidaOutput(outputPath = "batch/OUTPUT.json", inputPath = "batch/INPUT.json") {
  const input = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const output = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  return validaContenitoreOutput(output, input);
}
