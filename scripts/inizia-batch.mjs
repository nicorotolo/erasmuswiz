#!/usr/bin/env node
// Guardrail di ingresso per i run automatici.
// Verifica il lock remoto, aggiorna i riferimenti e prepara il batch partendo
// esattamente da origin/main, anche se la worktree locale e' rimasta indietro.

import { spawnSync } from "node:child_process";

function git(args, { inherit = false } = {}) {
  const result = spawnSync("git", args, {
    encoding: "utf8",
    stdio: inherit ? "inherit" : ["ignore", "pipe", "pipe"],
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    if (!inherit) process.stderr.write(result.stderr || result.stdout || "");
    process.exit(result.status ?? 1);
  }
  return (result.stdout || "").trim();
}

const modificheTracciate = git(["status", "--porcelain", "--untracked-files=no"]);
if (modificheTracciate) {
  console.error("ERRORE: la worktree contiene modifiche tracciate non committate; run interrotto.");
  process.exit(1);
}

const lock = git(["ls-remote", "--heads", "origin", "refs/heads/mappatura/*"]);
if (lock) {
  console.log("Un altro lotto mappatura e' in volo; run rinviato.");
  process.exit(3);
}

git(["fetch", "--prune", "origin", "main"], { inherit: true });
git(["switch", "--detach", "origin/main"], { inherit: true });

const head = git(["rev-parse", "HEAD"]);
const main = git(["rev-parse", "origin/main"]);
if (head !== main) {
  console.error(`ERRORE: HEAD (${head}) non coincide con origin/main (${main}).`);
  process.exit(1);
}

console.log(`Base sincronizzata con origin/main (${head.slice(0, 7)}).`);
const prepara = spawnSync(process.execPath, ["scripts/prepara-batch.mjs"], {
  stdio: "inherit",
});
if (prepara.error) throw prepara.error;
process.exit(prepara.status ?? 1);
