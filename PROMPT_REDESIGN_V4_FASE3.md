Redesign v4 di ErasmusWiz — Fase 3 (ondata sistema). Lavora SOLO nel worktree
C:\erasmuswiz-redesign-v4 (branch redesign-v4). Non toccare C:\erasmuswiz:
contiene lavoro non committato del cantiere dati.

Leggi prima, in quest'ordine:
1. PLAN_REDESIGN_V4.md (Fase 3 e sezione «Verifica»)
2. DISEGNO_BRAND.md, «★ REDESIGN V4 — SCHEDA COMPONENTI» (riferimento visivo)
3. design/redesign-v4/censimento-colori.md (tabella hex → token)
4. design/redesign-v4/contratto-selettori.md (cosa non si può rompere,
   soprattutto le voci ⚠ CSS e i «Rischi principali»)
5. STATO_DEL_SITO.md in C:\erasmuswiz, solo la prima voce (Fase 0, 2026-09-14)

Stato di partenza: Fase 0 chiusa, HEAD aaa99f9. 469 unit + 107 Playwright
verdi (6 saltati: baseline opzionale). Nel worktree non c'è node_modules:
esegui con NODE_PATH=C:/erasmuswiz/node_modules
  node --test "test/*.test.*"
  node C:/erasmuswiz/node_modules/@playwright/test/cli.js test
Se questo non basta, chiedimi prima di installare.

Obiettivo della Fase 3, in commit atomici:
1. Token nuovi: aggiungili UNA volta in :root di css/style.css (dal riepilogo
   del censimento: --text-on-fill, --primary-soft, --primary-light,
   --primary-tint, --red-hover, --red-bg-hover, --gold-hover, --night-bg-glow,
   --night-text-soft, --night-kicker). Prima chiedimi le due decisioni aperte:
   --night-text-soft (#C7C3E0 o #E9E7F4) e --night-kicker (#E8D992 o riuso
   --gold-border). Poi riallinea design/tokens con
   scripts/confronta-token.mjs --design-tokens (deve uscire 0).
2. Sostituzione hex → token secondo il censimento. Primo commit: solo le
   sostituzioni a valore identico (nessuna differenza visiva). Commit separati
   per le «≈», e per --warning-text → var(--amber), con confronto baseline.
3. Rifinitura dei componenti condivisi secondo la scheda V4: nessun nuovo
   !important, specificità ≤ una classe + stato, DOM, ruoli, aria e classi del
   contratto invariati. Se una classe deve cambiare: prima data-testid, e il
   test si migra nello stesso commit.

Verifica a ogni commit: node --check sui JS toccati; intera suite verde (la
guardia su errori è già attiva); confronto con la baseline rigenerando in
un'altra cartella:
  BASELINE_V4=1 BASELINE_V4_CARTELLA=fase3-<n> npx playwright test test/ui/baseline-v4.spec.cjs
(le cartelle di confronto non si committano, salvo la finale); contrasto
calcolato per ogni coppia testo/sfondo nuova; target ≥44px; focus visibile.

Regole: niente dati delle mete, niente push, nessun cambio di architettura o
di flussi. Riporta i numeri reali delle prove. A fine sessione aggiorna
STATO_DEL_SITO.md in C:\erasmuswiz (solo una nuova voce in cima) e proponi il
passo successivo: Fase 4, ondata schermate (onboarding → Home → Mete →
Percorso → Profilo → LA).
