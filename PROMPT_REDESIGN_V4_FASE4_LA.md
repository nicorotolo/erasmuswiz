Redesign v4 di ErasmusWiz — Fase 4, ultima schermata: Learning Agreement.
Lavora SOLO nel worktree C:\erasmuswiz-redesign-v4 (branch redesign-v4). Non
toccare C:\erasmuswiz: contiene lavoro non committato del cantiere dati (unica
eccezione: la voce in cima a STATO_DEL_SITO.md a fine sessione).

COME PARLARMI (vincolante): italiano semplice, senza gergo tecnico. Lavora in
autonomia e presentami SOLO le questioni da decidere, una alla volta, con: cosa
cambia per chi usa il sito, le opzioni, la tua raccomandazione. Dettagli tecnici
nei commit e in STATO_DEL_SITO.md.

Leggi prima, in quest'ordine:
1. PLAN_REDESIGN_V4.md (Fase 4 e «Verifica»)
2. DISEGNO_BRAND.md, «★ REDESIGN V4 — SCHEDA COMPONENTI», soprattutto V4.9
   (LA), V4.8 («i»), V4.4 (bottoni), V4.3 (superfici)
3. design/redesign-v4/contratto-selettori.md §9 (LA) e §11 rischi
4. design/redesign-v4/canvas/SceltaLA.dc.html (+ EquilibrioLA per il desktop)
5. STATO_DEL_SITO.md in C:\erasmuswiz, solo la prima voce

Stato di partenza: HEAD 8f27296. Fatte onboarding, Home, Mete, Percorso,
Profilo. 470 unit + 107 Playwright verdi (6 saltati: baseline opzionale).
Esecuzione:
  NODE_PATH=C:/erasmuswiz/node_modules node --test "test/*.test.*"
  NODE_PATH=C:/erasmuswiz/node_modules node C:/erasmuswiz/node_modules/@playwright/test/cli.js test
  BASELINE_V4=1 BASELINE_V4_CARTELLA=fase4-<n> (stessa cli) test test/ui/baseline-v4.spec.cjs
bruno-390-3 cambia anche senza modifiche (rumore). PNG confrontabili con PIL.
Con la macchina carica una prova può scadere per tempo: rilanciala prima di
cercare un difetto.

Già disponibili da riusare (non duplicare):
- icone SVG: ICONE + icona(nome) in js/app.js, classe .icona in style.css;
- «i» informativa: .info / .info-tip (bottone 44px, aria-describedby);
- variabili --btn-* / --btn2-* per ricolorare i bottoni condivisi in un
  contenitore senza alzare la specificità;
- pattern :where(...) per restare a una classe.

Obiettivo della sessione:
1. LA secondo V4.9: titolo «Costruisci il tuo Learning Agreement» + «i» (al
   posto del kicker «Dossier personale · solo su questo dispositivo»); barra
   del dossier con link «Stampa» + primario «Salva versione»; fascia «Da
   controllare» propria fra titolo e tabella; tabella con numeri/stato
   centrati, «Stato della scelta», totali ECTS/CFU nella riga finale;
   superfici senza bordo, niente pillole per stati, emoji → icone.
2. Baseline finale fase4 committata (38 schermate) e confronto con fase3-7.
3. Emoji residue fuori dal LA (nav, menu, celebrazione): proponimelo come
   blocco a sé prima di farlo.

Questioni probabili da farmi decidere: testi dei bottoni del LA che le prove
cercano per nome esatto (§9: nessun cambio senza chiedere); se «Salva
versione» corrisponde a un'azione che esiste già o sarebbe un flusso nuovo.

Regole: niente dati delle mete, niente push, nessun cambio di architettura o
flussi; nessun nuovo !important; specificità ≤ una classe + stato; DOM, ruoli,
aria e classi del contratto invariati (se una classe deve cambiare: prima
data-testid e migrazione del test nello stesso commit). Verifica a ogni
commit: node --check sui JS toccati, intera suite verde, confronto baseline,
contrasto calcolato per ogni coppia testo/sfondo nuova, target ≥44px, focus
visibile, niente scroll orizzontale a 390×844 in LA (anche con colorScheme
dark + reducedMotion, contratto la-v2). Riporta i numeri reali. A fine
sessione aggiorna STATO_DEL_SITO.md in C:\erasmuswiz (una voce in cima).
