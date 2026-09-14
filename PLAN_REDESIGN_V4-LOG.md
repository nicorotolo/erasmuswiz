# Plan Review Log: Redesign v4
Act 1 (grill) complete — plan locked with Nicola. MAX_ROUNDS=5.

_Nota: il sandbox read-only di Codex su Windows non avvia processi (CreateProcessAsUserW 5); piano ed estratti del repo passati nel prompt._

## Round 1 — Codex
Il piano non è ancora implementabile in sicurezza. Le criticità principali sono queste:

- **Contraddizione bloccante sul tema notte:** il piano lo considera “di prima classe”, ma `style.css` dichiara esplicitamente che è stato rimosso e non documenta alcun `body.tema-notte`; **fix:** decidere formalmente se reintrodurlo in v4 oppure rimuoverlo da obiettivi, canvas e verifiche.
- **Due fonti di verità incompatibili:** `colors.css` si proclama fonte dei valori, ma il sito carica soltanto `style.css`, dove colori equivalenti hanno nomi e valori diversi (`--bg-page` contro `--bg-app`); **fix:** scegliere una sola fonte runtime, importarla realmente e definire una mappatura esplicita per gli alias storici.
- **Il canvas potrebbe usare CSS diverso dal prodotto:** non è spiegato se `/design` carichi `css/style.css`, `design/styles.css` o regole proprie; **fix:** fare caricare al canvas gli stessi token e componenti CSS del sito, isolando soltanto il layout degli artboard.
- **Manca un deliverable tecnico tra canvas e implementazione:** “confronto fianco a fianco” lascia a interpretazione misure, stati e comportamento responsive; **fix:** produrre per ogni componente una scheda con token, dimensioni, wrapping, stati, breakpoint e regole giorno/notte.
- **Desktop escluso proprio mentre deve essere verificato:** derivarlo solo dopo la scelta può rivelare troppo tardi che una variante mobile non scala; **fix:** aggiungere almeno un artboard desktop rappresentativo per variante, preferibilmente della schermata più densa.
- **Copertura delle due università insufficiente:** due esempi nella canvas non garantiscono che ogni ondata venga testata con entrambe, né coprono nomi lunghi e dati mancanti; **fix:** creare una matrice obbligatoria schermata × ateneo × viewport × tema, con fixture limite.
- **La verifica “entrambi gli atenei” non definisce i dati:** Sapienza Giurisprudenza e Ca’ Foscari possono non rappresentare corsi, destinazioni o testi più problematici; **fix:** includere fixture con denominazioni massime, zero risultati, campi assenti, molte mete e incompatibilità linguistiche.
- **Preservare classi e ID non basta:** modifiche a gerarchia DOM, visibilità, ordine, testo accessibile o tipo di elemento possono rompere i locator e i `getByRole`; **fix:** inventariare per ogni test selettore, ruolo, nome accessibile, stato e relazione DOM da mantenere.
- **I test usano classi di presentazione come API:** `.schedina-slot`, `.schedina-nome`, `.benvenuto-scelta` e `.la-recognition` vincolano il redesign al CSS storico; **fix:** migrare prima i test verso `data-testid` o ruoli accessibili stabili, lasciando alle classi una funzione esclusivamente visiva.
- **Nessuna baseline visuale reale:** la ricerca riporta un solo file associato agli screenshot, senza una suite sistematica di regressione visiva; **fix:** aggiungere snapshot Playwright per schermate e componenti critici, con viewport, tema e fixture deterministici.
- **Il numero “102 Playwright” è fragile:** il piano assume un conteggio fisso, che può cambiare e non misura la copertura; **fix:** richiedere l’intera suite verde e una matrice di scenari esplicita, non un numero prestabilito.
- **“508 unit” soffre dello stesso problema:** quantità e qualità non sono equivalenti e non è indicato quali test proteggano il rendering; **fix:** associare a ogni ondata i test funzionali interessati e aggiungere casi per gli stati modificati.
- **Accessibilità ridotta al contrasto implicito:** mancano focus visibile, navigazione da tastiera, zoom 200/400%, reflow, touch target, screen reader e `prefers-reduced-motion`; **fix:** introdurre una checklist WCAG 2.2 AA automatica e manuale per ogni componente e schermata.
- **Il contrasto non è verificato per coppie reali:** commenti come “≥4.5:1” non coprono hover, disabled, testo su ambra, chip, semafori e superfici profonde; **fix:** calcolare e registrare il rapporto di ogni coppia foreground/background in tutti gli stati.
- **Il semaforo rischia di comunicare soltanto tramite colore:** definirlo “già accessibile” senza verificarne etichette e icone è un’assunzione; **fix:** garantire testo o simbolo ridondante, nome accessibile e contrasto anche in modalità forced-colors.
- **Tre varianti moltiplicate per circa 12 artboard è ambiguo:** la descrizione può significare 12 totali o 12 per variante; **fix:** elencare esattamente quantità e contenuto degli artboard prima di iniziare.
- **La scelta “anche ibridi” annulla il controllo progettuale:** combinare liberamente varianti può produrre un quarto sistema incoerente e non validato; **fix:** consentire ibridi solo tramite decisioni per assi predefiniti e ricomporre un nuovo foglio componenti completo.
- **Mancano stati essenziali nel canvas:** hover, focus, active, disabled, loading, errore, successo, overflow e contenuto vuoto non sono inclusi esplicitamente; **fix:** rappresentare tutti gli stati interattivi e di dati nel foglio componenti definitivo.
- **74 colori hardcoded impediscono un redesign realmente sistemico:** aggiornare solo token lascerà ampie porzioni incoerenti, soprattutto su superfici e stati; **fix:** censire e sostituire gli hex con token semantici prima dell’ondata schermate, con eccezioni motivate.
- **I token nuovi vengono duplicati nuovamente:** inserirli sia in `design/tokens/*.css` sia in `:root` perpetua la divergenza; **fix:** definire i valori una sola volta e usare import o alias, senza copie manuali.
- **La tipografia remota non ha una strategia di resilienza:** tre famiglie Google, numerosi pesi e `display=swap` possono consumare il budget e produrre layout shift o dipendere dalla rete; **fix:** misurare byte e CLS, ridurre pesi/famiglie oppure usare asset locali/subset con metriche fallback.
- **Budget “≤100 KB” indefinito:** non chiarisce se sia compresso, per pagina, totale, solo nuovi asset o esclusi i font CDN; **fix:** fissare budget separati per CSS, JS, immagini, font e trasferimento iniziale, con condizioni di rete e cache.
- **“Performance VERDE” non è un criterio verificabile:** manca lo strumento, la configurazione e la soglia per LCP, CLS, INP/TBT e peso; **fix:** stabilire Lighthouse CI o equivalente con soglie numeriche, dispositivo, throttling e numero di esecuzioni.
- **Nessuna osservabilità delle regressioni runtime:** test verdi non intercettano necessariamente errori console, risorse fallite o font non caricati; **fix:** far fallire Playwright su `pageerror`, errori console inattesi, risposte 4xx/5xx e asset mancanti.
- **Ordine delle ondate rischioso:** LA Workspace, dichiarato il più denso, viene affrontato per ultimo e potrebbe invalidare token e densità scelti prima; **fix:** usarlo come stress test già durante l’esplorazione e implementarne un componente pilota prima di consolidare il sistema.
- **Il percorso Bruno viene protetto troppo tardi:** “eventualmente test prima” non è un gate; **fix:** eseguire e registrare la baseline Bruno prima di qualsiasi modifica e ripeterla dopo Mete e dopo il completamento.
- **Branch separato non risolve una working tree sporca:** senza punto di partenza pulito è facile incorporare o sovrascrivere modifiche del cantiere dati; **fix:** creare commit o stash concordato, annotare l’hash di base e definire come integrare i due cantieri.
- **Manca una strategia di rollback per ondata:** una regressione tardiva può rendere difficile isolare modifiche in 3.000 righe di CSS; **fix:** usare commit atomici per sistema e singola schermata, ciascuno verificato prima del successivo.
- **Nessuna regola per la specificità CSS:** aggiungere rifiniture a un foglio di 3.000 righe può generare override e `!important`; **fix:** definire layering, ordine delle sezioni, limite di specificità e divieto controllato di nuovi `!important`.
- **Non è previsto un controllo browser:** Safari/iOS è particolarmente rilevante a 390 px e può differire su viewport, font, select e sticky/fixed; **fix:** testare almeno Chromium, WebKit e Firefox, includendo una verifica su dispositivo mobile reale.
- **Viewport troppo ristretto:** 390 e 1280 non coprono 320 px, tablet, altezza ridotta, landscape e breakpoint intermedi; **fix:** aggiungere test a 320, 768 e un valore immediatamente prima/dopo ogni breakpoint.
- **Manca la verifica con zoom e testo ingrandito:** una composizione corretta a 390 px può rompersi con font al 200%; **fix:** verificare reflow senza scroll orizzontale e contenuti completi con zoom/testo ingrandito.
- **Wiz e ambra non hanno limiti operativi:** espressioni come “generosa” e “momenti chiave” non sono traducibili in CSS verificabile; **fix:** specificare frequenza, dimensioni, contesti ammessi e divieti d’uso per mascotte e accento.
- **L’alternativa più semplice non viene valutata:** prima di costruire tre sistemi completi si potrebbe validare il maggior guadagno con pochi componenti rappresentativi; **fix:** realizzare tre “style tiles” più una sola schermata stressante per variante, poi produrre gli altri artboard solo per la direzione scelta.

VERDICT: REVISE
### Claude's response
Accettati: tema notte (verificato: rimosso in R1.1) → fuori da v4 per decisione di Nicola; fonte token unica; canvas su valori reali; scheda componente con stati; artboard desktop; fixture limite; censimento hex; contratto selettori; baseline visiva; hook errori console; a11y checklist; commit atomici e base annotata; viewport 320/768; esplorazione alleggerita (9 artboard, approvata da Nicola); ibridi solo per asse; regole Wiz/ambra; LA come stress test. Respinti (motivi nel piano): migrazione globale a data-testid, Lighthouse CI, Firefox/forced-colors come gate, snapshot bloccanti.

## Round 2 — Codex
Le osservazioni precedenti sono in larga parte affrontate o respinte con motivazioni ragionevoli. Restano tre problemi materiali:

- **Branch non realmente isolato:** creare `redesign-v4` mentre le modifiche dati restano non committate le trascina nel nuovo branch; **fix:** commit, stash o worktree pulito devono essere un gate obbligatorio, non una decisione aperta.
- **Fonte unica contraddetta dalla canvas:** il piano ammette che `/design` non carica `style.css` e ne copia i valori, reintroducendo divergenze manuali; **fix:** fare importare direttamente i token runtime alla canvas oppure sottoporre anche la canvas a `confronta-token.mjs`.
- **Stress test LA non garantito:** Fase 1 dice “Mete o LA”, mentre Fase 4 afferma che LA è già stato verificato; **fix:** rendere obbligatorio LA a 1280px in tutte le varianti, oppure correggere la successiva assunzione.

VERDICT: REVISE
### Claude's response
Accettati tutti e tre: git worktree separato come gate obbligatorio; blocco token estratto da script e verificato anche nella canvas; artboard LA a 1280px obbligatorio per ogni variante.

## Round 3 — Codex
I tre rilievi del round 2 sono risolti:

- Isolamento: il worktree da commit pulito impedisce alle modifiche del cantiere dati di contaminare il redesign.
- Token della canvas: estrazione automatica e confronto bloccante eliminano il rischio concreto di divergenza.
- Stress test LA: ora è obbligatorio a 1280 px per tutte e tre le varianti.

Solo una correzione editoriale non bloccante: nei rischi resta il riferimento alla “decisione di Nicola su commit/stash”, ormai superato dalla scelta obbligatoria del worktree.

VERDICT: APPROVED
### Claude's response
Correzione editoriale applicata alla sezione rischi. Convergenza al round 3.
