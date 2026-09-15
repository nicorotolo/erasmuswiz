# Prompt — prossima sessione ErasmusWiz (redesign v4, terza tornata: seguito)

Incolla questo messaggio in una nuova chat di Claude Code aperta su `C:\erasmuswiz`:

---

Riprendiamo ErasmusWiz, cantiere SITO, redesign v4, terza tornata di revisione.

**Dove siamo (15/09/2026, sera):** online c'è ancora `origin/main` = `5c64920`. Nel worktree
`C:\erasmuswiz-redesign-v4` (branch `redesign-v4`) ci sono 5 commit NON pubblicati
(`12cedaa`…`0326f2e`): referente LA Ca' Foscari = Departmental Coordinator, trascinamento
delle preferite, rotte animate dell'onboarding, onboarding full immersion (la pagina non
scorre), mappa del tab Mete col giallino dell'onboarding. Il `main` locale in `C:\erasmuswiz`
resta a `f953939` con il cantiere dati non committato: NON lavorare lì sul sito.

**Prima di tutto leggi:** la prima voce di `C:\erasmuswiz\STATO_DEL_SITO.md`, poi nel worktree
`REVISIONE_NICOLA_3.md` e `DISEGNO_BRAND.md` §V4.

**Cosa facciamo oggi:**
1. Stoppa eventuali server d'anteprima sulla porta 8123 (anche quello «erasmuswiz» della
   cartella principale), accendi `redesign-v4` da `.claude/launch.json`, porta a 375px,
   **svuota localStorage/sessionStorage** e fammi ripartire dall'onboarding.
2. Io guardo e detto gli appunti; tu li scrivi in `REVISIONE_NICOLA_3.md`
   ([x] fatto · [ ] da fare · [~] rimandato) e li applichi a blocchi.
3. Nella stessa lista ci sono due punti «Da guardare in revisione» (rotte poco visibili
   dietro la scheda al passo «cosa studi»; maniglia che tronca i nomi lunghi): chiedimi
   se intervenire.

**Regole di lavoro:**
- Un commit per blocco; prima di ogni commit, dal worktree: `npm run test:unit` (470),
  `npx playwright test` (109 + 6 saltati), `npm run test:perf` (verde).
  Se una prova difende una cosa che ho chiesto di togliere, aggiornala nello stesso commit e dimmelo.
- Spegni il server d'anteprima prima di Playwright (stessa porta), riaccendilo dopo.
- Parlami semplice e portami solo le decisioni da prendere.
- Pubblica (push di `redesign-v4` su `origin/main`) solo quando te lo dico; a fine sessione `/chiudi-sessione`.
