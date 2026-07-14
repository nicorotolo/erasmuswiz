# Plan Review Log: Revisione completa e ristrutturazione di ErasmusWiz per il lancio

Act 1 (grill) complete — plan locked with the user. MAX_ROUNDS=5.

Decisioni del grill (2026-07-10):
1. Metodo: audit completo prima, ristrutturazione di ciò che l'audit condanna.
2. Traguardo: sito attuale a qualità pro + UI/flusso LA Generator (logica in MERCATO-2).
3. Brand: in discussione — 2-3 direzioni come mockup HTML, sceglie Nicola.
4. Stack: vanilla HTML/CSS/JS, nessun build step.
5. Mercato: lancio gratuito agli studenti, zero monetizzazione.
6. Tempi: ondata chiusa entro settembre 2026.

## Round 1 — Codex

**Findings**

1. [PLAN.md](/mnt/data/PLAN.md:47) duplica lavoro già completato: C2-C4 ripianificano home/onboarding, Mete, Candidatura e Zaino, mentre [ROADMAP.md](/mnt/data/ROADMAP.md:74) marca OP1-OP4 già chiusi. Questo rischia regressioni su fix validati con Bruno.  
Fix: dichiarare esplicitamente “non si rifanno OP1-OP4 salvo bug dimostrati dall’audit”, con lista dei punti intoccabili.

2. [PLAN.md](/mnt/data/PLAN.md:91) dice che l’ondata occupa i residui MERCATO-1, ma include la UI del LA Generator, che la roadmap colloca in MERCATO-2 come OP8/OP9 ([ROADMAP.md](/mnt/data/ROADMAP.md:111)). È uno spostamento di scope mascherato.  
Fix: separare “teaser/link in arrivo” da “flusso UI salvato nello zaino”; il secondo deve entrare in OP8, non in questa ondata.

3. [PLAN.md](/mnt/data/PLAN.md:55) assume scenario A del LA Generator, ma OP8 mantiene vincoli più specifici: molti-a-molti, niente codici host, totali CFU/ECTS, lingua, semestre, link catalogo ([DISEGNO_OPERATIONS.md](/mnt/data/DISEGNO_OPERATIONS.md:241)). Una UI costruita ora rischia di nascere sbagliata.  
Fix: se si fa una UI anticipata, deve usare lo schema OP8 completo o limitarsi a una pagina “in arrivo” non interattiva.

4. [PLAN.md](/mnt/data/PLAN.md:102) cita retrocompatibilità zaino ma non definisce schema, migrazione o test per `ZAINO.laGenerator`; oggi `caricaZaino()` fa migrazioni manuali campo per campo ([js/app.js](/mnt/data/js/app.js:9)).  
Fix: aggiungere una mini-specifica dello schema `ZAINO.laGenerator`, valori di default in `caricaZaino()`, e test con zaini vecchi/corrotti.

5. [PLAN.md](/mnt/data/PLAN.md:79) riapre brand, palette e mascotte, ma [DISEGNO_BRAND.md](/mnt/data/DISEGNO_BRAND.md:1) era una specifica già eseguita e [ROADMAP.md](/mnt/data/ROADMAP.md:1) la registra come ondata completata. Non è solo design: rompe asset, OG, guide, manifest e continuità visiva.  
Fix: richiedere una decisione esplicita che “annulla/sostituisce BRAND BR0-BR7”, oppure limitare l’audit a refinement dell’identità esistente.

6. [PLAN.md](/mnt/data/PLAN.md:53) prevede nuove pagine di fiducia, ma non aggiunge requisiti privacy/consenso per caso-Bruno e dati di terzi, già evidenziati in roadmap e stato.  
Fix: ogni nuova pagina deve avere gate “nessun dato personale, consenso Bruno se racconto reale, controllo nomi/date/matricole/email”.

7. [PLAN.md](/mnt/data/PLAN.md:110) dice di non peggiorare SEO, ma non protegge le due guide già online né la Search Console/analytics. GoatCounter è già presente in home e guide; eventi esistono già per checklist ([js/app.js](/mnt/data/js/app.js:552)).  
Fix: aggiungere test obbligatorio: URL invariati, canonical invariati, sitemap aggiornata, GoatCounter presente, eventi nuovi solo anonimi.

8. [PLAN.md](/mnt/data/PLAN.md:60) parla di rimozione file spazzatura, ma non distingue file non tracciati, file tracciati e cartelle legacy su OneDrive; in questo repo c’è già stato un incidente git.  
Fix: rendere l’igiene repo un blocco separato con `PULISCI-SPAZZATURA.bat`/procedura Windows, dry-run e conferma esplicita prima di cancellare cartelle.

9. [PLAN.md](/mnt/data/PLAN.md:20) prevede audit completo ma non include la pipeline dati G5, che la roadmap mette come priorità attuale per `linkCatalogo` e `notaDisponibilita` ([ROADMAP.md](/mnt/data/ROADMAP.md:51)).  
Fix: aggiungere G5 come dipendenza/filo parallelo, perché senza `linkCatalogo` la UI LA Generator è monca.

10. [PLAN.md](/mnt/data/PLAN.md:63) QA è troppo tardi: se C1 cambia token e layout, regressioni mobile/dark/accessibilità possono accumularsi per 5 sessioni.  
Fix: mettere mini-QA obbligatorio a fine di ogni blocco C, non solo in Fase D.

11. [PLAN.md](/mnt/data/PLAN.md:119) mette fuori scope la logica LA Generator ma [PLAN.md](/mnt/data/PLAN.md:15) usa “LA generati” come KPI della fase. Contraddizione: se non genera nulla, non puoi misurare LA generati.  
Fix: per questa ondata misurare click/interesse sul LA Generator; “LA generati” resta KPI OP8.

12. [PLAN.md](/mnt/data/PLAN.md:68) rende il test Bruno condizione di chiusura ma subito dopo accetta QA interno se Bruno slitta. Questo indebolisce il gate più importante.  
Fix: definire due stati distinti: “ondata implementata” senza Bruno e “validata” solo dopo test reale.

**Open Questions**

- Il piano sostituisce ufficialmente ROADMAP/DISEGNO_OPERATIONS o è solo un sotto-piano? Oggi le fonti si contraddicono.
- Nicola vuole davvero riaprire BRAND BR0-BR7, o vuole solo un audit severo dell’esecuzione attuale?
- La UI anticipata del LA Generator deve salvare dati reali nello zaino o solo mostrare il futuro flusso?

VERDICT: REVISE
### Claude's response (Round 1)

Accolti e integrati in PLAN.md:
- (1) OP1–OP4 = baseline intoccabile salvo difetto dimostrato dall'audit.
- (3)+(4) La UI LA Generator è demo READ-ONLY: nessuna scrittura zaino, niente
  ZAINO.laGenerator (schema lo definisce OP8); la UI riflette i vincoli della
  ground truth OP8 (molti-a-molti, totali ECTS/CFU, niente codici host,
  semestre/disponibilità). Risponde anche alla open question 3.
- (6) Gate privacy su ogni pagina nuova/toccata (consenso Bruno, zero PII).
- (7) Checklist SEO obbligatoria per ogni blocco C (URL/canonical invariati,
  GoatCounter ovunque, sitemap coerente, eventi solo anonimi).
- (8) Igiene repo = blocco separato, dry-run, conferma esplicita per cartelle
  legacy, SOLO procedura Windows/.bat, mai git da bash.
- (9) G5 dichiarato filo parallelo non bloccante: la demo mostra placeholder
  onesto dove linkCatalogo manca.
- (10) Mini-QA a fine di OGNI blocco C (regola trasversale, non solo Fase D).
- (11) KPI chiarito: metrica dell'ondata = prontezza al lancio; "LA generati"
  resta KPI di OP8/bando.
- (12) Chiusura a due stati: "implementata" (QA interno) vs "validata" (test
  Bruno); se Bruno slitta il gate si rinomina, non si annacqua.
- Open question 1 risolta: l'ondata entra in ROADMAP.md come "MERCATO-UI" al
  posto dei residui MERCATO-1; ROADMAP resta la fonte unica.

Respinti con motivo:
- (2) "Spostamento di scope mascherato": la UI anticipata del LA Generator è
  una decisione ESPLICITA di Nicola nel grill (opzione scelta: "Sito pro +
  fondamenta LA Generator"), non una svista del piano. La sostanza del
  rilievo è però recepita: la demo è read-only e lo schema resta a OP8.
- (5) "Limitare l'audit a refinement dell'identità esistente": il brand in
  discussione è anch'esso una decisione esplicita di Nicola (grill, domanda 3,
  con processo chiuso: 2-3 mockup → scelta → binario vincolante). Accolta
  invece la parte procedurale: clausola di supersede formale su BR0–BR7 e
  costo di riallineamento asset/OG/guide dentro il preventivo della direzione
  scelta. Risponde anche alla open question 2.

## Round 2 — Codex

Prior findings are mostly addressed. The two rejected items are now documented as explicit product decisions, and the plan tightened the dangerous parts: read-only LA demo, no `ZAINO.laGenerator`, formal BRAND supersede, SEO/privacy gates, repo cleanup dry-run, and per-block QA.

Remaining issues:

1. `PLAN.md:55` says Fase C is “3-5 sessioni” and “una sessione = un blocco”, but then lists C1-C6 plus repo hygiene. That is at least 6-7 blocks, before QA.  
Fix: change estimate to “6-8 sessioni” or explicitly merge named blocks.

2. `PLAN.md:101-102` says MERCATO-UI replaces “residui MERCATO-1”, but OP5 is still partial and G4/G5/OP6 remain open in ROADMAP. This can accidentally bury time-sensitive SEO and pipeline work.  
Fix: say exactly which pending items survive in parallel: OP5 remaining article/Search Console, G4, G5, OP6 go/no-go.

3. `PLAN.md:15` still says this phase’s KPI includes “LA generati”, while `PLAN.md:124-125` correctly moves that KPI to OP8/bando. The later clarification is good, but the goal still misleads.  
Fix: replace line 15 with “traffico + interesse/click sul LA Generator”; keep “LA generati” only for OP8.

These are planning precision issues, not blockers to implementation if fixed in the handoff before execution.

VERDICT: APPROVED
### Claude's response (Round 2)

APPROVED. Le 3 rifiniture di precisione sono state comunque applicate a
PLAN.md prima della chiusura:
1. Fase C ristimata "5-7 sessioni" (C1-C6 + igiene repo, blocchi piccoli
   accorpabili).
2. Elencati esplicitamente i lavori che sopravvivono in parallelo: residuo
   OP5 (3° articolo + Search Console), G4, G5/pipeline dati, go/no-go OP6.
3. Goal corretto: metrica dell'ondata = prontezza al lancio + interesse sul
   LA Generator; "traffico e LA generati" restano KPI della finestra bando
   (OP8).

Convergenza raggiunta in 2 round su 5.

---

# Plan Review Log: Fase B — mockup direzioni visive con mappa-hero (2026-07-10)

Act 1 (grill) complete — plan locked with the user in `design/PLAN-FASE-B.md`.
MAX_ROUNDS=5. Reviewer model: gpt-5.5 (config default), codex-cli 0.144.1 via npx.

Decisioni del grill (2026-07-10, sessione 40):
1. La mappa d'Europa interattiva è l'HERO della home (scelta di Nicola, opzione A).
2. La mappa è strutturale in TUTTI e tre i mockup — si sceglie l'identità, non la struttura.
3. Due condizioni vincolanti (accettate dopo avvocato del diavolo): mobile = tap+scheda
   in basso con clustering (mai hover); utente profilato = mappa compattata,
   missione/countdown padroni della home.
4. Tre direzioni: (a) giocosa-premium con Wiz protagonista, (b) professionale/sobria,
   (c) ibrida.
5. Tecnica: SVG inline zero librerie; dati demo reali Giurisprudenza Sapienza con
   coordinate hardcodate nei mockup (i dati veri NON hanno lat/lon — lookup rinviato
   a Fase C/pipeline).

## Round 1 — Codex (Fase B)

Ho letto piano, audit e file reali. Il piano non è ancora abbastanza solido: la mappa è trattata come scelta già vinta, ma i rischi principali non sono chiusi.

- La mappa passa da “dessert/parcheggiata” in `PROGETTO_ERASMUS.md` a hero strutturale senza un nuovo gate di valore: rischia di spostare il sito verso la parte meno dolorosa per l’utente, cioè scegliere mete. Fix: rendere la mappa un esperimento con fallback griglia/lista visibile e criterio esplicito “non deve rubare priorità a missione/countdown/LA”.
- Contraddizione numerica: il piano dice demo con “~15-20 mete”, poi sostiene che Giurisprudenza con 55 mete valida la densità. Fix: testare davvero le 55 mete oppure rimuovere la pretesa “se regge lì, regge ovunque”.
- “Se regge Giurisprudenza, regge ovunque” è falso: il sito reale carica molti più dipartimenti e Ca’ Foscari ha centinaia di mete. Fix: includere almeno un caso worst-case o limitare formalmente la conclusione a Sapienza Giurisprudenza.
- La home dice scelta ateneo + facoltà, ma i dati demo sono solo Giurisprudenza Sapienza. Fix: includere almeno una facoltà per ciascun ateneo o non mostrare scelte non dimostrate.
- Coordinate hardcoded senza fonte creano debito nascosto: in Fase C servirà un lookup città→coordinate, ma non è definito schema, fonte, normalizzazione, duplicati o fallback. Fix: aggiungere già in Fase B uno schema minimo `{citta, paese, lat, lon, fonte, precisione}` e casi “coordinate mancanti”.
- Cluster mobile sottospecificato: città con più università condividono la stessa coordinata, quindi non basta “pin ravvicinati”; servono cluster anche per pin identici. Fix: cluster per distanza e per stessa coppia `citta+paese`, con lista espandibile.
- Accessibilità assente: hover/tap non coprono tastiera, screen reader, focus visibile, target da 44px e descrizione alternativa della mappa. Fix: ogni pin/cluster deve essere un `<button>` con `aria-label`, focus, Enter/Escape, e lista testuale equivalente.
- “Nessuna dipendenza dal sito” rende il mockup troppo isolato: non prova vincoli reali come `localStorage`, zaino, tema, nav, dati globali e service worker. Fix: mantenere i mockup autonomi, ma aggiungere una mini-prova di integrazione o un adapter che legge lo stesso shape dei dati reali.
- Rischio XSS non dichiarato: i dati mete sono trattati come dati fidati, ma università/città/note non devono mai finire in `innerHTML`. Fix: imporre rendering DOM con `textContent` per ogni campo dati.
- Osservabilità debole: “nessun errore console” non basta per una hero interattiva. Fix: aggiungere budget misurabili: peso totale, tempo primo render, numero nodi SVG/DOM, FPS/interazione accettabile su 375px.
- Stato “bando chiuso” richiede fonte/data, ma il mockup potrebbe mostrarlo statico senza verificare la logica reale di `SCADENZE_CAFOSCARI`. Fix: derivare il testo demo dallo stesso modello dati o indicare chiaramente fonte e data hardcoded.
- La stima borsa nel tooltip è delicata: in Sapienza `dati-borse.js` usa fonte 2025/2026, mentre il sito parla di bando 2026/2027. Fix: nel mockup mostrare sempre “stima”, `aggiornatoAl` e fonte, o non mostrarla nel tooltip.
- Il piano pubblica mockup sotto `/design/` e liquida il rischio perché “URL non linkato”. Non basta: GitHub Pages può comunque renderli accessibili e condivisibili fuori contesto. Fix: aggiungere `<meta name="robots" content="noindex,nofollow">` e disclaimer “mockup non sito operativo”.
- La verifica mobile parla di 375px ma non include orientamento, resize, sheet aperta, cluster aperto, tema cambiato mentre c’è una selezione. Fix: aggiungere casi QA per resize/orientamento e reset dello stato UI.
- “Zero librerie” va bene, ma clustering/proiezione SVG fatti a mano sono facili da sbagliare. Fix: o semplificare la mappa a dimostrazione visuale con lista come controllo primario, oppure definire chiaramente proiezione e algoritmo di clustering.
- La Fase B cresce oltre il `PLAN.md`: da “home + una schermata interna” diventa tre mockup con 4 viste, tema doppio, mappa interattiva, mobile, clustering. Fix: ridurre scope o aggiornare stima/criteri di accettazione nel piano d’ondata.

VERDICT: REVISE
### Claude's response (Round 1)

Accolti (14/16):
1. (finding 2) Contraddizione 15-20 vs 55 mete → la demo usa TUTTE le 55 mete
   di Giurisprudenza: la densità si valuta al vero.
2. (3) Pretesa "regge ovunque" ritirata → validazione limitata alle facoltà
   demo + check formale sulla facoltà più numerosa registrato per la Fase C2.
3. (4) Solo Giurisprudenza vs scelta a 2 atenei → aggiunta Economia Ca' Foscari
   completa; le altre facoltà disabilitate con etichetta onesta "demo".
4. (5) Schema coordinate definito ORA: coord {lat, lon, x, y, fonte, precisione}
   + caso dimostrativo "coord mancante" → fallback lista testuale.
5. (6) Clustering specificato: raggruppa per coppia citta+paese identica (caso
   obbligato: più università nella stessa città) E per distanza pixel sotto
   soglia; tap = lista espandibile.
6. (7) Accessibilità: pin/cluster = <button> con aria-label, focus visibile,
   Tab/Enter/Escape, target ≥44px, lista testuale equivalente sotto la mappa.
7. (9) Regola anti-XSS: campi dati solo via textContent/createElement, mai
   innerHTML.
8. (10) Budget misurabili: pagina+asset ≤600 KB, SVG ≤80 KB, Wiz ≤100 KB,
   niente re-render integrale su hover/tap, pin nel DOM ≤~100.
9. (11) Bando chiuso: testo hardcoded ma con data e fonte esplicite nel testo.
10. (12) Borsa nel tooltip: sempre etichettata "stima", fonte e data nella
    scheda; mai un numero nudo.
11. (13) Aggiunti meta robots noindex,nofollow + disclaimer "mockup non sito
    operativo" su ogni pagina.
12. (14) QA esteso: resize con scheda aperta, cambio tema con selezione,
    apertura/chiusura cluster, landscape.
13. (15) Proiezione a runtime eliminata: x/y SVG precalcolate offline nei dati
    demo (equirettangolare sui bounds dell'SVG), zero matematica nel browser.
14. (16) Scope creep dichiarato: il piano ora dice esplicitamente che estende
    la Fase B del piano d'ondata per decisione di Nicola, stima 1-2 sessioni.

Respinti (2/16), con motivo:
1. (finding 1) "La mappa-hero riapre la strategia, renderla esperimento con
   fallback visibile" — RESPINTO nella forma, accolto nella sostanza: la
   decisione mappa-hero è stata presa esplicitamente da Nicola DOPO un
   avvocato del diavolo che sollevava esattamente questa obiezione (gerarchia
   bussola LA > scadenze > lingua > mete). Non si riapre. La sostanza è
   recepita come GATE formale nel §Goal: la mappa entra in Fase C solo se i
   mockup a 375px convincono Nicola su leggibilità e non-ritardo del valore;
   in caso contrario, hero classico con la direzione visiva scelta.
2. (finding 8) "Mockup troppo isolato, aggiungere mini-prova di integrazione/
   adapter" — RESPINTO: i mockup sono strumenti di scelta visiva, non
   prototipi di integrazione; provare localStorage/zaino/sw in un mockup
   statico è lavoro di Fase C anticipato senza valore decisionale per la
   scelta dell'identità. Il ponte con la realtà c'è già: i dati demo usano lo
   schema REALE delle mete + il blocco coord che sarà il contratto di Fase C.

## Round 2 — Codex (Fase B)

La rev. 2 chiude quasi tutti i rilievi materiali: scope esteso dichiarato, gate mobile a 375px, dati demo completi invece del sottoinsieme, schema coordinate, fallback coordinate mancanti, noindex, accessibilità, `textContent`, budget, QA di stato e distinzione Fase B/Fase C. I due rigetti indicati sono ora tracciati e non li considero bloccanti.

Rilievi residui, non bloccanti:

- `coord.x/y` sono “precalcolate offline”, ma il piano non dice dove restano i bounds/proiezione usati per riprodurle in Fase C. Fix: salvare in `dati-demo.js` anche `projection: { type, bounds, svgViewBox }` o un commento tecnico equivalente.
- “Pin/cluster è un `<button>`” dentro una mappa SVG può essere implementato male: un `<button>` HTML non è valido come figlio diretto di `<svg>`. Fix: specificare pin come overlay HTML assoluto sopra l’SVG, oppure SVG element con `role="button"` + gestione tastiera.
- Accessibilità: manca il ritorno del focus quando Escape chiude la scheda. Fix: dopo chiusura tooltip/scheda, riportare il focus al pin/cluster che l’ha aperta.
- `_assets/dati-demo.js` dice “stesso schema di `js/atenei/**`” ma aggiunge “borsa risolta”, che oggi nel sito è calcolata da `BORSE_INFO`, non campo della meta. Fix: o includere un mini `BORSE_INFO` e calcolare la borsa, oppure marcare `borsaStimata` come campo solo-demo.
- “CSS e JS inline propri” coesiste con JS condivisi in `_assets/`. Fix: chiarire che “inline propri” vale per l’identità, mentre dati/SVG sono script locali condivisi, senza `fetch` e senza moduli, così il doppio click via `file://` resta affidabile.
- Il gate “non ritarda il valore quotidiano” è ancora soggettivo. Fix: aggiungere un criterio visivo semplice, per esempio missione/countdown visibili nel primo viewport mobile della home profilata.

Nessuno di questi richiede una nuova revisione del piano prima di implementare i mockup.

VERDICT: APPROVED
### Claude's response (Round 2)

APPROVED. I 6 rilievi residui non bloccanti sono stati comunque integrati nel
piano prima della consegna (costo nullo, valore reale):
1. Parametri di proiezione salvati in dati-demo.js (PROIEZIONE = {tipo,
   bounds, svgViewBox}) per riprodurre il calcolo in Fase C.
2. Pin/cluster come <button> HTML in overlay sopra l'SVG (non figli di <svg>).
3. Escape riporta il focus al pin/cluster che aveva aperto la scheda.
4. borsaStimata marcato campo solo-demo (nel sito reale deriva da BORSE_INFO).
5. Chiarito: JS/CSS inline = identità; dati/SVG condivisi via <script src>
   locali, nessun fetch/modulo ES, tutto funziona via file://.
6. Gate "non ritarda il valore" reso oggettivo: missione+countdown interi nel
   primo viewport 375×667 della home profilata, senza scroll.

Convergenza: Round 2 su MAX_ROUNDS=5. Il piano è pronto per il sign-off di
Nicola.

---

# Plan Review Log: Ondata PERCORSO — redesign a viaggio (2026-07-14)
Act 1 (grill) complete — plan locked with the user (10 decisioni, vedi PLAN.md). MAX_ROUNDS=5.

## Round 1 — Codex (gpt-5.6-terra, codex-cli 0.144.1, sandbox read-only)

Il piano ha problemi materiali: lo rivedrei prima di iniziare.

1. La nuova navigazione non ha un contratto di collegamenti: oggi esistono solo `#oggi`, `#mete`, `#checklist`, `#idoneita`, `#profilo`, mentre il piano introduce quattro tappe e “Parti” condivide di fatto la stessa sezione di “Candidati”.  
   Fix: definire in P1 una tabella stabile tappa→hash→sezione, includendo alias per i vecchi hash e una sola funzione di navigazione che gestisca anche Indietro/Avanti del browser.

2. La “tappa corrente” viene rimandata a P3, ma P1 rende già la linea il controllo principale; inoltre lo stato salvato oggi distingue solo `domanda` e `selezionato`.  
   Fix: inserire prima di P1 una tabella deterministica con priorità, fallback e casi limite per ogni combinazione di date, checklist, zaino vecchio e selezione manuale.

3. Lo zaino è unico ma non è legato all’ateneo: cambiando Ca’ Foscari/Sapienza resta il profilo precedente, che può produrre mete vuote o una dashboard apparentemente valida ma sbagliata.  
   Fix: aggiungere una migrazione con `ateneo` nello zaino e, al cambio ateneo, chiedere esplicitamente se conservare o ricreare il profilo.

4. P4 rischia rallentamenti concreti: la pagina carica già tutti i dati dei due atenei (circa 2,1 MB solo sotto `js/atenei`), `renderMete()` ricrea tutte le card e il clustering cerca gruppi uno per uno; sincronizzare mappa e lista amplifica il costo.  
   Fix: fissare un budget e un test con il dataset completo a CPU 4×, aggiornare mappa/lista una sola volta dopo debounce/`requestAnimationFrame` e disegnare solo cluster/città uniche.

5. L’accessibilità della mappa non è specificata abbastanza: “pin come button” non evita decine di fermate di tastiera, né definisce cosa succede a focus, selezione card↔pin, filtri o ritorno dal modal.  
   Fix: rendere l’elenco la controparte completa della mappa, aggiungere “Salta ai risultati”, annuncio `aria-live` del numero filtrato, stato selezionato e gestione esplicita di focus/modal.

6. C’è una contraddizione SEO: l’out-of-scope vieta di cambiare il testo della home indicizzata, ma P2 trasforma proprio la home non profilata e il suo onboarding, compresi titoli e messaggi.  
   Fix: decidere ora quali testi e gerarchie HTML della home sono invarianti per i crawler, oppure autorizzare il cambiamento SEO e aggiungere una verifica con JavaScript disattivato.

7. Il piano cita solo il “cache bump”, ma P7 non prova installazione, aggiornamento e uso offline della PWA; l’attuale cache iniziale non elenca i file dati e mappa necessari all’app.  
   Fix: definire l’elenco preciso della shell offline e testare upgrade da una cache precedente, primo avvio offline e riapertura dopo deploy.

8. La fonte dei colori è ambigua: `design/tokens/colors.css` dichiara che i valori applicati sono in `css/style.css`, ma P0 riscrive il primo file e P1 il secondo.  
   Fix: scegliere un solo file come fonte operativa e inserire una verifica che segnali divergenze prima del deploy.

VERDICT: REVISE
### Claude's response (Round 1)
Accolti 8/8 rilievi (uno parzialmente):
1. ACCOLTO — P1 ora definisce il contratto di navigazione: ricognizione hash reali, tabella tappa→hash→sezione, decisione esplicita su "Parti", alias permanenti per i vecchi hash, una sola funzione di navigazione con gestione history.
2. ACCOLTO — la regola deterministica della "tappa corrente" è spostata in P1 (priorità: stato bando per data → selezione → checklist; fallback "Scegli la meta").
3. PARZIALE — il cambio ateneo ha già un meccanismo salva+ricarica verificato in C2; anziché una migrazione speculativa dello schema ZAINO (vincolo retrocompatibilità), P3 ha ora uno scenario di QA obbligatorio "cambio ateneo"; la migrazione (campo ateneo + scelta conserva/ricomincia) si fa SOLO se il difetto si conferma.
4. ACCOLTO — P4: budget con dataset completo, aggiornamento mappa+lista coalizzato (debounce+rAF), solo cluster/città uniche, test CPU 4x.
5. ACCOLTO — regola di accessibilità mappa (skip-link, elenco controparte completa, aria-live sul conteggio, stato selezionato, focus esplicito) in P2, valida per ogni uso della mappa.
6. ACCOLTO — P2 fissa gli invarianti SEO della home (title/description/canonical/H1/testo statico identici; onboarding è già solo-JS) con verifica a JavaScript disattivato.
7. ACCOLTO — P6 definisce la shell offline esplicita nella precache; P7 testa upgrade cache, primo avvio offline, riapertura post-deploy.
8. ACCOLTO — fonte operativa unica = css/style.css; design/tokens/colors.css è documentazione, riscritto in P1 con controllo di coerenza pre-deploy.

## Round 2 — Codex

La revisione ha risolto bene quasi tutti i rilievi precedenti: accessibilità della mappa, test SEO senza JavaScript, prestazioni, PWA, token colore e regola della tappa corrente sono ora pianificati in modo molto più solido.

Restano però problemi materiali:

1. Il difetto dello zaino tra atenei è già dimostrato dal codice: esiste una sola chiave `erasmuswiz-zaino`, senza campo ateneo, mentre il cambio ateneo conserva lo zaino e ricarica la pagina; non va lasciato a un futuro “se emerge”.  
   Fix: rendere obbligatoria la migrazione `zaino.ateneo` e la scelta “conserva/riparti” prima di P3.

2. La decisione tecnica su “Parti” è ancora aperta: P1 dice “o hash dedicato nuovo o area interna a Candidati”, ma da quella scelta dipendono URL, comportamento di Indietro/Avanti e stato della linea-nav.  
   Fix: scegliere nel piano una sola soluzione e riportarla nella tabella tappa→hash→sezione prima di scrivere la nuova nav.

3. Il piano promette fluidità, ma non definisce un risultato misurabile: l’attuale `renderMete()` ricrea tutte le card e P4 non impone un limite al tempo di aggiornamento lista+mappa con dataset completo.  
   Fix: aggiungere un criterio verificabile, per esempio nessun task oltre 50 ms e aggiornamento completo entro una soglia definita sul telefono simulato 375 px/CPU 4×.

4. La protezione SEO migliorata contiene un’assunzione non corretta: l’onboarding attuale è già nel file HTML, solo nascosto con CSS, quindi il suo testo non è semplicemente “renderizzato via JS e invisibile” senza JavaScript.  
   Fix: nel test SEO confrontare anche il DOM statico completo, inclusi blocchi nascosti e titoli, non solo ciò che appare dopo l’avvio JavaScript.

VERDICT: REVISE
### Claude's response (Round 2)
Accolti 4/4:
1. ACCOLTO — la migrazione zaino.ateneo + scelta "conserva/riparti" diventa OBBLIGATORIA in P3 (il difetto è dimostrato dal codice, non più condizionale); zaini vecchi migrati assumendo l'ateneo selezionato.
2. ACCOLTO — decisione presa nel piano: "Parti" = hash dedicato nuovo `#parti` con la sezione zaino estratta; `#checklist` resta la tappa Candidati; alias permanenti.
3. ACCOLTO — criterio misurabile in P4: nessun long task >50 ms, aggiornamento completo lista+mappa ≤250 ms post-debounce (375px, CPU 4x, dataset completo); se fallisce si interviene su renderMete() finché passa.
4. ACCOLTO — corretta l'assunzione: il test SEO confronta il DOM STATICO COMPLETO di index.html (inclusi blocchi nascosti via CSS), non solo il rendering con JS attivo.

## Round 3 — Codex

I quattro rilievi precedenti sono stati affrontati: `#parti` è definito, i limiti prestazionali sono misurabili, il controllo SEO guarda l’HTML completo e la migrazione ateneo è diventata obbligatoria.

Resta però un problema serio nella migrazione dello zaino: per gli zaini vecchi non esiste alcun dato che dica a quale ateneo appartenessero; assegnare automaticamente l’ateneo attualmente selezionato può rendere “valido” un profilo Ca’ Foscari dentro Sapienza, proprio l’errore che la migrazione deve evitare. Inoltre “conserva il profilo” non è definito: conservarlo nell’ateneo nuovo sarebbe incoerente, mentre conservarlo separatamente richiede uno schema diverso.

Fix: per uno zaino legacy chiedere esplicitamente a quale ateneo appartiene oppure avviarlo come profilo da rifare; per i cambi futuri usare un contenitore unico con dati separati per ateneo, o archiviare chiaramente lo zaino precedente senza applicarlo al nuovo ateneo.

C’è anche una regressione di compatibilità dei bookmark: oggi `#checklist`, per chi è selezionato, apre lo zaino; il piano lo trasforma sempre in “Candidati”, quindi il vecchio hash resta tecnicamente esistente ma cambia significato per gli utenti già selezionati.

Fix: definire l’alias legacy `#checklist` in modo dipendente dallo stato (zaino per selezionati, candidatura altrimenti), con `#parti` come nuovo URL canonico dello zaino.

VERDICT: REVISE
### Claude's response (Round 3)
Accolti 2/2:
1. ACCOLTO — schema per-ateneo: contenitore unico con zaino separato per ciascun ateneo + ateneo attivo; al cambio si archivia (mai applicato al nuovo); migrazione legacy con controllo di coerenza (facoltà/area presente nei dati dell'ateneo attivo), altrimenti domanda esplicita allo studente. "Conserva" ora ha semantica definita (= archivia e ripristina al ritorno).
2. ACCOLTO — alias `#checklist` dipendente dallo stato (selezionato → zaino/#parti, altrimenti candidatura), `#parti` canonico.

## Round 4 — Codex

I rilievi precedenti sono ora sostanzialmente risolti: zaini separati per ateneo, vecchio `#checklist` compatibile, SEO statico e limiti di prestazione sono definiti.

Restano due casi limite non definiti:

1. La nuova tappa `#parti` è sempre raggiungibile dalla linea-nav e tramite URL, ma il piano non dice cosa mostrare a chi non è ancora selezionato; oggi lo zaino esiste solo dopo `fase === "selezionato"`.  
   Fix: definire `#parti` pre-selezione come tappa bloccata ma informativa, con messaggio chiaro e pulsante verso Candidati, senza checklist post-selezione vuota o possibilità di dichiararsi selezionato per errore.

2. Per uno zaino legacy, il controllo “facoltà/area esiste nell’ateneo” non prova l’origine: aree disciplinari possono essere condivise da più atenei, quindi un profilo può passare il controllo pur appartenendo all’altro.  
   Fix: migrare automaticamente solo con una corrispondenza univoca di dipartimento e area; in ogni caso ambiguo chiedere allo studente di scegliere l’ateneo d’origine e archiviare il risultato scelto.

VERDICT: REVISE
### Claude's response (Round 4)
Accolti 2/2:
1. ACCOLTO — `#parti` pre-selezione = tappa bloccata ma informativa, CTA verso Candidati, niente checklist vuota né toggle "selezionato" raggiungibile da lì.
2. ACCOLTO — migrazione automatica del legacy solo con corrispondenza UNIVOCA dipartimento+area (presente in un solo ateneo); ogni ambiguità → domanda esplicita e archiviazione della scelta.

## Round 5 — Codex

Le correzioni chiudono i rilievi precedenti:

- `#parti` ha ora un comportamento sicuro prima della selezione.
- `#checklist` conserva il vecchio significato per gli utenti selezionati.
- Lo zaino è separato per ateneo, con migrazione prudente degli zaini vecchi solo quando l’origine è identificabile senza ambiguità.
- Prestazioni, SEO statico, accessibilità e PWA hanno criteri verificabili.

Non vedo nuovi problemi materiali nel piano: è abbastanza preciso per passare all’implementazione.

VERDICT: APPROVED
**Convergenza: APPROVED al Round 5 di 5. 16 rilievi totali, 16 accolti (1 parziale al R1 poi rafforzato al R2-R4). Piano finale in PLAN.md.**

---

# Plan Review Log — Addendum PLANNER all'ondata PERCORSO (2026-07-14)
Act 1 (grill) complete — 3 decisioni: planner = il percorso stesso; piano settimanale auto-generato dai dati bando+checklist (no task manuali); adottati indicatore 'Sei in linea?', calendario scadenze, check-in settimanale (streak esclusi). MAX_ROUNDS=5.

## Round 1 (addendum planner) — Codex (gpt-5.6-terra, codex-cli 0.144.1, sandbox read-only)

Il planner non è ancora abbastanza definito per dare indicazioni affidabili agli studenti.

- Il piano dice di riusare “dati con fonte esistenti”, ma le scadenze non hanno una fonte per singola data né uno stato di pubblicazione/validità; Sapienza è inoltre marcata provvisoria. — Fix: autorizzare una piccola estensione dello schema dati con `fonte`, `verificataIl`, `pubblicato`, `ciclo` e stato del bando, senza alterare i contenuti.
- “Candidature chiuse” viene trattato nel codice come “bando chiuso”, pur restando scadenze importanti (graduatoria, accettazione, ISEE); il testo “il bando 2027/28 non è ancora uscito” potrebbe quindi comparire falsamente. — Fix: distinguere formalmente candidatura chiusa, ciclo ancora attivo, dati scaduti e prossimo bando non pubblicato.
- Le date attuali sono orari locali senza fuso (`2026-…T12:00`) e vengono lette nel fuso del dispositivo: calendario, countdown e settimana possono cambiare per chi è fuori Italia o nei cambi d’ora. — Fix: definire `Europe/Rome` come fuso canonico e testare mezzanotte, ora legale e visualizzazione in altri fusi.
- La “funzione pura” non ha una regola deterministica per distribuire sei attività con la stessa scadenza, attività senza `scadenzaId`, settimana già iniziata, checklist vuota o tutte le attività completate. — Fix: specificare input, output e ordinamento, includendo un risultato neutro esplicito per ogni caso senza azioni pianificabili.
- “Giorni alla scadenza contro numero di voci aperte” non misura il reale avanzamento: una voce può richiedere due minuti o giorni, e una spunta non registra quando è stata fatta. — Fix: usare “in ritardo” solo per attività azionabili non spuntate oltre la propria scadenza; negli altri casi mostrare un messaggio prudente, non una valutazione di performance.
- Per gli studenti selezionati il piano non definisce quale checklist alimenti il planner: le voci post-selezione non hanno `scadenzaId` e molte dipendono dalla meta o da date comunicate dopo. — Fix: separare il ramo “selezionato”, senza semaforo né piano datato finché mancano date verificate, e mostrare solo i passi post-selezione pertinenti.
- Lo stato “selezionato” è una dichiarazione volontaria nello zaino, non una verifica ufficiale: un planner non deve trasformarla in una certezza o usare scadenze candidature ormai irrilevanti. — Fix: chiamarlo esplicitamente “Hai indicato di essere stato selezionato” e isolare completamente checklist e stato temporale pre/post selezione.
- Il nuovo campo della settimana non è collocato nello schema dopo la migrazione per-ateneo: se fosse globale, visitare un ateneo nasconderebbe il check-in dell’altro. — Fix: salvarlo dentro ogni singolo zaino di ateneo, nel formato completo `YYYY-Www`, con fallback per valore mancante o corrotto.
- L’eccezione “bando non pubblicato” non è rappresentabile coi dati attuali, che contengono solo cicli 2026/27 ormai passati; il calendario mensile rischia quindi di mostrare date storiche come se fossero operative. — Fix: quando non esiste un ciclo pubblicato e verificato, nascondere piano e calendario operativo e mostrare soltanto la data dell’ultimo controllo con link ufficiale.
- Il QA previsto non copre il comportamento nuovo del planner, quindi una funzione apparentemente pura può fallire proprio nei casi delicati. — Fix: aggiungere casi di prova ripetibili per checklist vuota, voce senza scadenza, bando provvisorio/non pubblicato/chiuso, selezionato, cambio ateneo, ISO week a Capodanno e fuso Europe/Rome.

VERDICT: REVISE
### Claude's response (Round 1 addendum)
Accolti 10/10:
1. ACCOLTO — autorizzata l'estensione ADDITIVA dei metadati scadenze/bando (fonte, verificataIl, pubblicato, ciclo) come unica eccezione all'intoccabilità dei dati; valori dai documenti in fonti/, nessun valore esistente alterato.
2. ACCOLTO — stato formale del bando a 4 valori: aperto / chiuso ma ciclo attivo / dati scaduti / non pubblicato; il messaggio "bando non uscito" appare solo nello stato giusto.
3. ACCOLTO — Europe/Rome fuso canonico per tutte le date del bando; test mezzanotte/ora legale/altri fusi in P7.
4. ACCOLTO — specifica completa della funzione di derivazione: input, ordinamento deterministico, casi limite, risultato neutro esplicito.
5. ACCOLTO — semantica onesta del "Sei in linea?": "in ritardo" solo per voci azionabili oltre la propria scadenza; mai valutazione di performance.
6. ACCOLTO — ramo "selezionato" separato: niente semaforo né piano datato senza date verificate, solo passi pertinenti.
7. ACCOLTO — stato auto-dichiarato presentato come tale ("Hai indicato di…"), isolamento pre/post selezione.
8. ACCOLTO — campo settimana dentro lo zaino per-ateneo, formato YYYY-Www, fallback su valore mancante/corrotto.
9. ACCOLTO — senza ciclo pubblicato e verificato: piano e calendario nascosti, al loro posto ultima data di controllo + link ufficiale.
10. ACCOLTO — P7 estesa con i casi di prova ripetibili del planner (checklist vuota, 4 stati bando, selezionato, cambio ateneo, ISO week a Capodanno, fusi).

## Round 2 (addendum planner) — Codex

Le principali correzioni ci sono: dati con stato formale, casi limite del piano, studenti selezionati, check-in per ateneo e QA mirato sono ora coperti.

Restano tre punti da chiudere:

- “Interpretare in Europe/Rome” non dice come evitare concretamente `new Date("…T12:00")`, che oggi usa il fuso del dispositivo: senza una regola tecnica esplicita, il difetto può essere reintrodotto. — Fix: prescrivere un’unica funzione che legga le date come orari civili italiani, vietando il parsing diretto delle stringhe nei moduli planner/countdown/calendario.
- Se non c’è un ciclo pubblicato e verificato, il piano nasconde calendario e piano settimanale, ma non definisce cosa facciano il semaforo “Sei in linea?” e il check-in: resterebbero visibili senza dati su cui basarsi. — Fix: in quello stato mostrare un indicatore neutro “non disponibile” e non creare né salvare il check-in.
- Sono stati aggiunti `fonte` e `verificataIl`, ma il piano non obbliga planner e calendario a rendere raggiungibile la fonte della singola scadenza; sarebbe incoerente con la promessa del sito di link e data per ogni informazione derivata. — Fix: prevedere nel modulo una fonte apribile per ogni scadenza e la data dell’ultima verifica, anche nel dettaglio del giorno del calendario.

VERDICT: REVISE
### Claude's response (Round 2 addendum)
Accolti 3/3:
1. ACCOLTO — regola tecnica vincolante: unica funzione di parsing (orari civili italiani), divieto di new Date(stringa) nei moduli planner/countdown/calendario.
2. ACCOLTO — senza ciclo pubblicato: "Sei in linea?" = neutro "non disponibile", check-in né creato né salvato.
3. ACCOLTO — fonte apribile + data ultima verifica per ogni scadenza in piano settimanale, calendario e dettaglio del giorno.

## Round 3 (addendum planner) — Codex

Le tre rilievi precedenti sono stati affrontati: parsing unico in fuso italiano, stato neutro senza bando disponibile, check-in soppresso, e fonte/data di verifica esposte in ogni modulo.

Nuovo problema: le fonti locali sono escluse dalla pubblicazione su GitHub Pages (`fonti/` è in `.gitignore`), ma il piano dice solo che i metadati derivano da quei documenti; se `fonte` punta a un file locale, il link del planner sarà rotto sul sito pubblico. — Fix: definire `fonte` come oggetto con etichetta e URL HTTPS pubblico ufficiale, vietando percorsi `fonti/` e verificando i link nella QA su GitHub Pages.

VERDICT: REVISE
### Claude's response (Round 3 addendum)
Accolto 1/1 — `fonte` = oggetto {etichetta, url} con url HTTPS pubblico ufficiale; vietati i percorsi verso fonti/ (in .gitignore); verifica link nella QA P7 sul sito pubblicato.

## Round 4 (addendum planner) — Codex

Tutti i rilievi precedenti risultano risolti. Il piano ora impone fonti HTTPS ufficiali verificabili sul sito pubblicato, vieta i percorsi locali esclusi da GitHub Pages e include il controllo dei link nella QA.

Non emergono nuovi conflitti sostanziali nel planner o con i dati esistenti.

VERDICT: APPROVED
**Convergenza addendum PLANNER: APPROVED al Round 4 di 5. 14 rilievi totali (10+3+1), 14 accolti. Piano finale in PLAN.md.**
