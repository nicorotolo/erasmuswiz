Redesign v4 di ErasmusWiz — revisione di Nicola, seconda parte.
Lavora SOLO nel worktree C:\erasmuswiz-redesign-v4 (branch redesign-v4). Non
toccare C:\erasmuswiz (lavoro dati non committato), salvo la voce in cima a
STATO_DEL_SITO.md a fine sessione. Niente push.

COME PARLARMI (vincolante): italiano semplice, senza gergo. Lavora in
autonomia; presentami SOLO le questioni da decidere, una alla volta, con cosa
cambia per chi usa il sito, le opzioni e la tua raccomandazione. Dettagli
tecnici nei commit e in STATO_DEL_SITO.md.

Leggi prima: STATO_DEL_SITO.md in C:\erasmuswiz (solo la prima voce);
DISEGNO_BRAND.md «★ REDESIGN V4 — SCHEDA COMPONENTI»;
design/redesign-v4/contratto-selettori.md §9 e §11.

Stato di partenza: HEAD 024a6aa. Fase 4 chiusa (tutte le schermate + LA,
baseline fase4). Prima tornata della mia revisione fatta nel commit 024a6aa:
onboarding senza nav/Menu, messaggi privacy e copertura tolti, niente
conteggi nelle lingue, terza lingua; Home ridotta alla stima del bando e
download diretto del calendario; requisiti a righe da spuntare con contatore;
nota «fa fede» tolta dalle schede meta; Menu solo icona.
Prove: 470 unit, Playwright 107 + 6 saltati.

Esecuzione prove (se la porta 8123 è occupata da un server già acceso,
usa una config temporanea con reuseExistingServer: true e cancellala dopo):
  NODE_PATH=C:/erasmuswiz/node_modules node --test "test/*.test.*"
  NODE_PATH=C:/erasmuswiz/node_modules node C:/erasmuswiz/node_modules/@playwright/test/cli.js test
Sito per guardarlo: node "C:/erasmuswiz-redesign-v4/test/server-statico.cjs"
→ http://127.0.0.1:8123/index.html (per ripartire da utente nuovo: svuota
localStorage, cache e service worker).

Questione aperta da chiedermi per prima: cosa intendevo con «schermata di
onboarding da aggiornare in base alle novità recenti» (ipotesi: rotte animate
dall'ateneo, nuova frase d'apertura, stile allineato alle altre schermate).

Poi mostrami il giro del sito a 375px (schermate), partendo da dove eravamo
rimasti (Mete, Percorso, Profilo, LA), e raccogli le mie nuove osservazioni.

Regole: niente dati delle mete, nessun cambio di architettura oltre a quanto
chiedo; nessun nuovo !important; specificità ≤ una classe + stato; se una
prova controlla un testo che chiedo di cambiare, migrala nello stesso commit.
A ogni commit: node --check, intera suite verde, contrasto per le coppie
nuove, bersagli ≥44px, niente scroll orizzontale a 390 (LA anche dark +
reducedMotion). Riporta i numeri reali.
