#!/usr/bin/env node
// Attende la conclusione dell'Action e conferma che il relativo commit squash
// sia davvero presente su origin/main. Non richiede gh o API GitHub.

import { spawnSync } from "node:child_process";

const branch = process.argv[2];
if (!branch || !/^mappatura\/[A-Za-z0-9._/-]+$/.test(branch)) {
  console.error("Uso: node scripts/verifica-pubblicazione.mjs mappatura/<branch>");
  process.exit(2);
}

const timeoutMs = Number(process.env.MAPPATURA_VERIFY_TIMEOUT_MS || 180_000);
const intervalloMs = Number(process.env.MAPPATURA_VERIFY_INTERVAL_MS || 5_000);
if (!Number.isFinite(timeoutMs) || timeoutMs < 0 ||
    !Number.isFinite(intervalloMs) || intervalloMs < 100) {
  console.error("ERRORE: timeout o intervallo di verifica non valido.");
  process.exit(2);
}

function git(args, { check = true } = {}) {
  const result = spawnSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (result.error) throw result.error;
  if (check && result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout || "");
    process.exit(result.status ?? 1);
  }
  return { status: result.status, stdout: (result.stdout || "").trim() };
}

const atteso = `mappatura: auto-merge ${branch}`;
const scadenza = Date.now() + timeoutMs;

while (true) {
  const remoto = git(["ls-remote", "--heads", "origin", `refs/heads/${branch}`]);
  if (!remoto.stdout) break;
  if (Date.now() >= scadenza) {
    console.error(`ERRORE: timeout; il branch ${branch} e' ancora remoto.`);
    process.exit(1);
  }
  await new Promise((resolve) => setTimeout(resolve, intervalloMs));
}

git(["fetch", "--prune", "origin", "main"]);
const log = git(["log", "origin/main", "--format=%s", "-n", "100"]).stdout.split(/\r?\n/);
if (!log.includes(atteso)) {
  console.error(
    `ERRORE: ${branch} e' stato rimosso ma il commit di auto-merge non e' su origin/main. ` +
    "Controllare la GitHub Action e l'Issue di intervento manuale."
  );
  process.exit(1);
}

console.log(`${branch} pubblicato e verificato su origin/main.`);
