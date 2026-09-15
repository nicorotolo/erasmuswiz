# Prompt — prossima sessione ErasmusWiz (redesign v4, ripensamento A: Learning Agreement)

Incolla questo messaggio in una nuova chat di Claude Code aperta su `C:\erasmuswiz`:

---

Riprendiamo ErasmusWiz, cantiere SITO, redesign v4. Oggi: **ripensamento A, il Learning Agreement.**

**Dove siamo (15/09/2026, notte):** online c'è `origin/main` = `b6e9570` più il commit di questo
prompt, uguale al branch `redesign-v4` nel worktree `C:\erasmuswiz-redesign-v4`. Lavora SOLO lì.
Il `main` locale in `C:\erasmuswiz` resta a `f953939` con il cantiere dati non committato: non toccarlo.

**Prima di tutto leggi:** la prima voce di `C:\erasmuswiz\STATO_DEL_SITO.md`, poi nel worktree
`REVISIONE_NICOLA_3.md` (sezione «Learning Agreement» e decisioni del 15/09) e `DISEGNO_BRAND.md` §V4.9.

**Il problema, con le parole di Nicola:** la sezione LA è troppo complessa e incomprensibile.
Il flusso attuale (individua la meta, confronta, prepara la proposta, modifica, convalida) non è
chiaro né guidato; l'inserimento dei corsi è strano e difficile. Obiettivo: renderlo intuitivo,
passo per passo, altrimenti nessuno lo completa.

**Cosa facciamo oggi:**
1. Stoppa eventuali server sulla porta 8123, accendi `redesign-v4` da `.claude/launch.json`,
   375px, svuota localStorage/sessionStorage. Percorri tu il LA da studente nuovo
   (Ca' Foscari e Sapienza) e fammi un riassunto semplice: cosa si vede, dove ci si perde.
2. Poi `/grill-me` sul nuovo flusso guidato: una domanda alla volta, con la tua raccomandazione.
   Punti da decidere almeno: quanti passi e quali; come si inseriscono i corsi (italiani e
   dell'ospitante); cosa resta di versioni, dossier multipli, copia di sicurezza e convalida;
   cosa succede a chi ha già dati salvati (niente perdita dati: lo zaino resta compatibile).
3. Piano scritto (in `PLAN_LA_GUIDATO.md` nel worktree), approvato da me, poi codice a blocchi.
   Non partire col codice prima del mio ok sul piano.

**Regole di lavoro:**
- Un commit per blocco; prima di ogni commit, dal worktree: `npm run test:unit` (470),
  `npx playwright test` (109 + 6 saltati), `npm run test:perf` (verde).
  Se una prova difende una cosa che ho chiesto di cambiare, aggiornala nello stesso commit e dimmelo.
- Spegni il server d'anteprima prima di Playwright (stessa porta), riaccendilo dopo.
- Parlami semplice e portami solo le decisioni da prendere.
- Pubblica (push di `redesign-v4` su `origin/main`) solo quando te lo dico; a fine sessione `/chiudi-sessione`.

**Dopo il LA, nell'ordine deciso:** Zaino (nuovo nome, 24 voci in 5 fasi, arrivo al punto giusto
da selezionato) → Percorso orizzontale (pagina a sé, anteprima e mete scelte in Home) → Mappa stile
Airbnb (con un valore vero per «aiutami a esplorare»).
