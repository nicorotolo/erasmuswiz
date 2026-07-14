#!/usr/bin/env node
import { leggiEValidaOutput } from "./lib-output-batch.mjs";

try {
  const validato = leggiEValidaOutput();
  console.log(`OUTPUT valido per ${validato.batchId}: ${Object.keys(validato.dati).length} mete con dati verificati.`);
} catch (errore) {
  console.error(`OUTPUT NON valido: ${errore.message}`);
  process.exit(1);
}
