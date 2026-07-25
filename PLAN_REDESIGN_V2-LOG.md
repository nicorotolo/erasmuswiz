# Plan Review Log: implementare il redesign v2 di ErasmusWiz

Atto 1 (grill) completo — piano bloccato con Nicola il 2026-07-24.
Decisioni prese nel grill: (D1) commit diretti su `main`; (D2) 4 fasi con 2 gate umani;
(D3) contraddizione `modo-benvenuto` differita al GATE 1; (D4) metà e metà — Codex costruisce F2,
Claude fa F1/F3/F4.

PLAN_FILE = `PLAN_REDESIGN_V2.md` · LOG_FILE = `PLAN_REDESIGN_V2-LOG.md` · MAX_ROUNDS = 5.

---

## Round 1 — Codex (gpt-5.6-sol, reasoning high, codex-cli 0.144.5)

thread_id: 019f9563-cc31-7b12-beb4-811f0331d704

Ho potuto leggere piano, sorgenti e specifica temporanea tramite un canale alternativo di sola lettura. Non ho modificato alcun file. Il piano contiene ancora diversi problemi materiali.

1. **F0 non può partire nell’ordine descritto.** Il piano impone `pull --rebase` prima di committare `STATO_DEL_SITO.md`, già modificato: Git normalmente rifiuta il rebase con modifiche tracciate non salvate ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:37)). **Correzione — verificare `git status`, salvare/committare separatamente il lavoro preesistente e solo dopo eseguire il pull.**

2. **La copia della specifica è incompleta.** `Redesign ErasmusWiz.dc.html` carica `./support.js`, ma F0 copia HTML, immagini e `uploads/` omettendo proprio `support.js`. **Correzione — versionare anche `support.js` e verificare che il canvas si apra correttamente dalla nuova cartella.**

3. **`--ease-out` non è un token nuovo.** Esiste già con un valore diverso in [style.css](/C:/erasmuswiz/css/style.css:65) ed è usato da oltre trenta animazioni/transizioni; ridefinirlo in fondo al `:root` cambierebbe il movimento dell’intero sito, non solo del redesign. **Correzione — mantenere il token esistente oppure introdurre un token nuovo e circoscritto, senza ridefinizione globale silenziosa.**

4. **GATE 1 è collocato troppo presto.** F1 crea i token tipografici, ma quasi tutti vengono applicati solo in F2; quindi al gate non si può realmente giudicare la “scala tipografica” finale. Inoltre `--fs-hero` non viene applicato alla home nonostante il commento della specifica lo prometta. **Correzione — spostare il gate visivo dopo F2 oppure portare in F1 anche tutte le regole che consumano i token.**

5. **Il nuovo gutter si somma a quello esistente.** `.main-content` possiede già spazio sotto la nav mobile, padding laterale/tablet e un contenitore desktop ([style.css](/C:/erasmuswiz/css/style.css:270)); molti figli hanno inoltre margini o padding di 20/14px, compresi gli override finali a 480px. Aggiungere padding a `.tab-pane` produce doppi margini e, a mobile, fino a circa 30–36px per lato. **Correzione — scegliere un solo proprietario del gutter (`.main-content` oppure `.tab-pane`) e rimuovere/reset­tare nello stesso diff tutti gli offset legacy coinvolti.**

6. **Anche lo spazio verticale viene duplicato.** `.main-content` protegge già la nav mobile con circa 80px, mentre F1 aggiunge altri 96px a ogni `.tab-pane`; a desktop restano 64/104px di padding superiore mentre F2 cambia il modello della nav. **Correzione — definire una matrice esplicita nav/main/tab per ogni banda e lasciare la compensazione della nav in un solo contenitore.**

7. **La nav desktop `position: sticky` è incompatibile con il DOM attuale.** La nav si trova dopo `main` e perfino dopo il footer ([index.html](/C:/erasmuswiz/index.html:441)); togliendo `fixed`, apparirà in fondo alla pagina e diventerà sticky solo quando l’utente ci arriva. **Correzione — poiché `index.html` è fuori scope, mantenere la nav `fixed` a desktop; in alternativa autorizzare lo spostamento della nav prima di `main`.**

8. **Lo sticky della sidebar usa un offset falso.** F1 imposta `top:24px` sostenendo che la nav sia “in header”, ma durante F1 la nav è ancora fissa e alta 64px: `.percorso-wrap` finirà sotto di essa. **Correzione — con nav fissa usare `top: calc(64px + var(--space-6))`; ricalcolarlo solo se cambia davvero la struttura DOM.**

9. **La sostituzione delle superfici può rompere la mascotte della missione.** Il blocco originale di `.missione-card` contiene `position:relative` e `overflow:hidden` ([style.css](/C:/erasmuswiz/css/style.css:414)); il blocco condiviso §4.2 non li contiene. Se Codex obbedisce alla regola “sostituisci il blocco”, la mascotte assoluta non sarà più ancorata alla card e potrà debordare. **Correzione — elencare esplicitamente nel patch le proprietà funzionali da preservare: almeno `position:relative`, `overflow:hidden` e il `padding-right` desktop.**

10. **La consegna F2 si contraddice.** Dice contemporaneamente “CSS incollabile così com’è”, “tutti font-size/padding/gap/margin devono usare token” e “non migliorare i valori”; la specifica contiene invece numerosi valori letterali come `11.5px`, `17px`, `19px`, `4px 10px`. **Correzione — preparare blocchi finali già normalizzati e dichiarare quali pixel geometrici sono ammessi, eliminando ogni decisione interpretativa dalla consegna.**

11. **Non esiste un punto d’inserimento sicuro per i blocchi raggruppati.** Il selettore comune §4.2 non esiste oggi, mentre varie regole desktop e mobile successive hanno la stessa specificità e possono riapplicare padding e margini vecchi. **Correzione — per ogni blocco F2 indicare esattamente quali regole eliminare, dove inserire quella nuova e quali override media aggiornare.**

12. **La contingenza “passare il canvas inline” è pericolosa.** Senza leggere il CSS reale Codex non può verificare cosa preservare, quali blocchi duplicarebbe o quali regole successive vincerebbero; è proprio il caso che rompe `.missione-card` e i gutter. **Correzione — se Codex non può leggere il repository, passargli old-block/new-block completi contro un commit SHA preciso oppure restituire F2 a Claude, senza modalità inline parziale.**

13. **Il focus non sarà un “unico anello”.** Esistono già il `:focus-visible` globale, regole più specifiche per ricerca, select e card cliccabili; il nuovo blocco si sommerà producendo outline e box-shadow doppi o stili diversi. Inoltre l’outline `--night-bg` è quasi invisibile sulla nav dello stesso colore. **Correzione — sostituire consapevolmente il sistema focus esistente e aggiungere un focus chiaro/oro specifico per le superfici scure.**

14. **L’animazione urgente del countdown non può funzionare come specificato.** Il JS aggiunge `missione-urgente` alla card ([app.js](/C:/erasmuswiz/js/app.js:1202)), non `urgente` alla pill; inoltre esiste `@keyframes pulsa-dot`, non `@keyframes pulsa`. A seconda del tipo di sostituzione, il pallino resterà sempre animato oppure non si animerà mai. **Correzione — impostare `animation:none` sul pallino base e usare `.missione-urgente .countdown-dot { animation: pulsa-dot … }`.**

15. **Il bottone “Mostra tutte le mete” dello stato vuoto non funziona.** La specifica cerca `.chip-filtro[data-filtro="tutte"]`, ma `renderMete()` non assegna alcun `data-filtro` ai chip ([app.js](/C:/erasmuswiz/js/app.js:1842)). **Correzione — nell’azione impostare direttamente `filtroMeteAttivo = "tutte"; renderMete();`, evitando una query DOM fondata su un attributo inesistente.**

16. **Il piano dichiara una compatibilità CSS che non esiste.** `.stato-vuoto-v2` è emessa oggi dal JS, ma non compare affatto in `style.css`; quindi non può “restare nel foglio” per coprire chiamate residue. **Correzione — aggiungere davvero uno stile fallback per `.stato-vuoto-v2` oppure rimuovere dal piano la falsa garanzia.**

17. **La decisione `modo-benvenuto` non ha un ramo implementativo.** Il gate può decidere di mostrare onboarding e griglia insieme, ma nessuna fase successiva è incaricata di rimuovere `display:block` e la regola che nasconde tutti gli altri figli ([style.css](/C:/erasmuswiz/css/style.css:1160)). **Correzione — descrivere due patch alternative complete e assegnare l’esecuzione della scelta a F1 prima della sua chiusura.**

18. **`_smoke.js` non è un test di regressione.** Il commento dice che simula un profilo, ma non lo fa; stampa valori senza asserzioni, conta qualunque figlio della griglia e non intercetta affidabilmente errori runtime, interazioni o stato `localStorage`. JSDOM non verifica layout, CSS, media query, sticky, overflow, touch o focus. **Correzione — trasformarlo in test con asserzioni e scenari deterministici, affiancandogli prove browser reali a 390/768/1280 con screenshot e raccolta degli errori console.**

19. **Il confronto “stessi numeri” è incompatibile con i pull fra fasi.** Il PC aziendale modifica proprio i dati delle mete, quindi conteggi e card possono cambiare legittimamente fra F0 e F3 pur senza regressioni. **Correzione — eseguire il confronto sullo stesso commit/fixture oppure verificare invarianti funzionali, non l’uguaglianza dei conteggi grezzi.**

20. **L’audit touch è incompleto.** Il piano nomina quattro controlli, ma restano bersagli piccoli come `.fase-cta`, `.percorso-modifica-profilo`, il selettore d’ateneo e `.mappa-vai-elenco`; la checklist finale “nessun target sotto 44px” non è sostenuta da una procedura. **Correzione — inventariare tutti gli elementi interattivi del DOM e misurare programmaticamente il loro rettangolo a 390px.**

21. **Mancano due verifiche accessibili importanti.** Lo stato vuoto dinamico non è una live region, mentre il modal riceve il focus iniziale ma non intrappola Tab né restituisce il focus alla card di origine quando si chiude. **Correzione — aggiungere `role="status"`/`aria-live="polite"` allo stato vuoto e includere nel test del modal focus trap e ripristino del focus.**

22. **Le quattro classi `.banner-stato` sono in gran parte codice morto.** Due varianti non hanno dati né DOM che possano attivarle, mentre i due casi reali vengono comunque stilizzati tramite selettori diversi. **Correzione — implementare soltanto `#idoneita-esito` e `.banner-in-verifica`, rinviando le varianti senza dati a quando esisterà un caso reale.**

VERDICT: REVISE
### Claude's response — Round 1

**Verificate in prima persona prima di accettare** (grep/read su `C:\erasmuswiz`, 2026-07-24). Sei
affermazioni su sei confermate: `--ease-out` esiste (style.css:65) ed e' usato da 30+ transizioni;
`.main-content` possiede gutter/container/spazio-nav (265-279, 1338); `.missione-card` ha
`position:relative`+`overflow:hidden`+`margin:12px 20px 0` (414-422); la nav sta dopo `</main>`
(423) e dopo `</footer>` (435), a index.html:441, ed e' `fixed; top:0; height:64px` a >=768
(174-183); `missione-urgente` sta sulla card (app.js:1203) e il keyframes e' `pulsa-dot`
(style.css:485); i chip non hanno `data-filtro` (app.js:1842).

**Accettate e incorporate (18):** 1 (ordine di F0), 2 (`support.js`), 3 (`--ease-out` -> D5 ritirata),
5+6 (proprietario unico del gutter -> D9, F1.13), 7 (nav resta `fixed` -> R20), 8 (offset sticky
`calc(64px + var(--space-6))` -> R13), 9+11 (promossi a **regola di preservazione**, in testa al
piano, con tabella delle proprieta' a rischio), 10+16 (Claude prepara la tabella blocco-vecchio ->
blocco-nuovo: Codex applica, non interpreta -> F2.17), 12 (niente "canvas inline parziale": o coppie
complete contro SHA, o F2 torna a Claude), 13 (sistema focus da sostituire + variante su superfici
notte), 14 (`.missione-urgente .countdown-dot` + `pulsa-dot`), 15 (`filtroMeteAttivo="tutte"`),
17 (due patch pre-scritte per `modo-benvenuto`, eseguite prima di chiudere F1), 19 (confronto smoke
sullo stesso commit), 20 (misura touch programmatica in F0.5), 21-parziale (`role="status"` sullo
stato vuoto).

**Accettata parzialmente - 4 (GATE 1 troppo presto):** non sposto il gate dopo F2 ne' porto in F1
tutte le regole che consumano i token: annullerebbe il valore del gate, che e' *fermarsi prima* di
aver fatto F2. Accolto invece il merito dell'osservazione: il piano ora **dichiara** (R15) che al
GATE 1 si giudica il ritmo, non la tipografia compiuta.

**Accettata parzialmente - 18 (`_smoke.js` non e' un test):** vero, ed e' ora scritto nel piano (D11).
Ma trasformarlo in suite con asserzioni e scenari deterministici e' un progetto a se': F3 tocca 3 righe
di `app.js`, e la prova proporzionata e' "non esplode + gli stessi numeri sullo stesso commit". Aggiunte
invece le prove che mancavano davvero e costano poco: screenshot di riferimento (F0.6), raccolta
errori console, misura touch programmatica (F0.5).

**Respinte, con motivo:**
- **21-parziale (focus trap del modal):** difetto **pre-esistente**, non introdotto dal redesign.
  Metterlo qui allarga lo scope di un lavoro di restyling a un fix di accessibilita' non richiesto.
  Registrato come R25 e dichiarato fuori scope, non ignorato.
- **22 (le 4 varianti `.banner-stato` sono codice morto -> implementarne 2):** Nicola ha bloccato B.5
  nel grill precedente proprio per avere un catalogo riusabile. Compromesso adottato (D10): le due
  varianti cablate vanno **sopra** `__PROD_END__`, le due senza dato **sotto** - vocabolario
  disponibile, zero peso in produzione. E' il meccanismo che il canvas stesso fornisce.

**Trovato da Claude, non da Codex:** `--container: 1120px` (canvas) contro `max-width: 1140px` reale
di `.main-content` -> restringimento silenzioso della pagina a desktop. Aperto come sotto-rischio di R14.

---

## Round 2 — Codex (stessa sessione)

La rev. 2 ha risolto correttamente gran parte dei problemi precedenti, ma restano alcune contraddizioni operative che possono produrre un layout sbagliato. Non la approverei ancora.

Le esclusioni motivate sono in parte accettabili:

- Focus trap del modal: accetto il fuori scope, perché è preesistente e il redesign non cambia la sua logica.

- `_smoke.js`: accetto che non diventi una suite completa, purché sia presentato solo come controllo di “non-esplosione” e restino obbligatorie le prove manuali.

- Varianti banner: contesto la motivazione tecnica. Essere sotto `__PROD_END__` non le esclude dalla produzione: il marcatore è solo un commento e il sito non ha una build che tagli quella parte. Non è però, da solo, un blocco funzionale.

Difetti ancora materiali:

1. **Il confronto sullo “stesso commit” è impossibile.** Il baseline F0 appartiene a un commit precedente a F1–F3, mentre il piano impone anche un pull all’inizio di ogni fase ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:69)); F3 non può quindi girare “sullo stesso commit del baseline F0” ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:193)). **Correzione — fare un nuovo baseline immediatamente prima di F3, dopo il pull di F3, e rieseguirlo dopo le modifiche senza altri pull; confrontare anche gli hash dei file dati.**

2. **`gap` su `.tab-pane` non produce alcun effetto.** Il piano assegna lì il ritmo verticale, ma `.tab-pane.attivo` è `display:block` ([style.css](/C:/erasmuswiz/css/style.css:283)); su un normale contenitore block la proprietà `gap` è inerte. **Correzione — rendere esplicitamente `.tab-pane.attivo` un flex container verticale oppure gestire lo stack mediante margini normalizzati sui figli.**

3. **La nuova regola del gutter non contiene un inventario completo.** Non basta azzerare “es. `.missione-card`”: esistono oltre venti offset orizzontali legacy su percorso, settimana, header di sezione, checklist, timeline, filtri, griglie, form, preferite, wizard, mappa e sugli override finali ≤480px. Al GATE 1 molti doppi gutter possono quindi sopravvivere. **Correzione — aggiungere a F1 la lista esaustiva dei selettori da normalizzare, inclusi gli override alle righe 1657–1663.**

4. **La regola di preservazione contraddice il trasferimento del gutter.** In testa al piano `margin:12px 20px 0` di `.missione-card` è elencato fra le proprietà da preservare ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:27)); F1 ordina invece di azzerarlo ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:120)). **Correzione — dichiarare esplicitamente che i margini orizzontali legacy sono un’eccezione alla preservazione perché sostituiti dal padding di `.main-content`, preservando solo il margine verticale necessario.**

5. **La matrice di `.main-content` è incompleta.** A 768 il piano specifica `padding-top:64px`, cioè esattamente l’altezza della nav, senza alcun respiro superiore; a 1024 non dice con cosa sostituire il vecchio shorthand `padding:104px 40px 48px`, che altrimenti continuerà a vincere ([style.css](/C:/erasmuswiz/css/style.css:1338)). **Correzione — scrivere il blocco completo di `padding`, `max-width` e `margin` per mobile, tablet e desktop, senza affidarsi a proprietà ereditate dai vecchi blocchi.**

6. **Il valore del container è ancora una decisione aperta.** Il piano permette sia 1120 sia 1140px e chiede soltanto di “dichiararlo”, ma si presenta come piano bloccato e pronto da implementare. **Correzione — scegliere ora un solo valore e riportarlo sia nel token sia nella regola desktop di `.main-content`.**

7. **Nessun gate umano approva il cuore del redesign.** GATE 1 esclude espressamente la tipografia e precede tutti i componenti; GATE 2 controlla soltanto timeline e stati vuoti. Si può quindi arrivare al push senza che Nicola abbia approvato tipografia, card, nav, form e modal ridisegnati. **Correzione — spostare GATE 1 dopo F2 oppure ampliare GATE 2 includendo esplicitamente l’intero redesign a 390/768/1280 prima di F4 e del push.**

8. **Il test touch accetta ancora risultati insufficienti.** Richiedere che la lista finale sia solo “un sottoinsieme” di quella iniziale ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:88)) consente di lasciare quasi tutti i target piccoli; inoltre lo snippet segnala checkbox dentro label grandi e link inline, producendo falsi positivi. **Correzione — richiedere lista finale vuota salvo eccezioni documentate e misurare il vero contenitore cliccabile, per esempio la `label`, non soltanto il rettangolo dell’elemento interno.**

9. **L’inventario touch non genera attività correttive.** F0 misura i problemi e F4 li rimisura, ma nessuna fase assegna esplicitamente la correzione dei controlli aggiuntivi trovati, come `.fase-cta` o il selettore d’ateneo. **Correzione — aggiungere all’inizio di F2 una sottofase che trasforma l’inventario F0 in patch CSS e registra eventuali eccezioni motivate.**

10. **F2 richiede di mettere CSS sotto un marcatore che non esiste ancora.** Le varianti banner dovrebbero andare sotto `__PROD_END__` in F2, ma il marcatore viene creato soltanto in F4. **Correzione — non aggiungere le due varianti in F2 e inserirle insieme al marcatore in F4, oppure creare il marcatore già in F0.**

11. **Spostare le varianti sotto il marcatore non elimina il CSS morto dalla produzione.** In un sito statico il browser legge comunque tutto `style.css`; la separazione è soltanto organizzativa. **Correzione — descriverle onestamente come CSS non cablato ma ancora distribuito, oppure conservarle soltanto nel canvas finché non esiste un caso reale.**

12. **Gli screenshot “prima/dopo” non hanno criteri di confronto.** Quasi ogni differenza visiva sarà intenzionale, quindi un semplice confronto non distingue redesign corretto da regressione. **Correzione — associare agli screenshot una breve checklist di invarianti: contenuti presenti, nessun taglio, nessun overflow, ordine corretto, nav visibile e card non sovrapposte.**

VERDICT: REVISE
### Claude's response — Round 2

**Accettate quasi tutte, e due hanno cambiato la forma del piano.**

- **2 (`gap` inerte su `.tab-pane`):** verificato — `.tab-pane.attivo` e' `display:block`
  (style.css:283). Il ritmo verticale passa a `> * + * { margin-top: var(--stack) }` con reset dentro
  la griglia a >=1024, che ha gia' il suo `gap` (D11 / R27).
- **3 (inventario gutter incompleto):** verificato, ed **e' peggio di come Codex lo descrive**. Il
  gutter mobile del sito non e' padding di un contenitore: e' `margin: ... 20px` su **16 selettori**
  (359, 415, 497, 532, 539, 574, 596, 668, 910, 914, 928, 953, 1144, 1162, 1381, 1444, 1463) piu' il
  blocco `@media (max-width:480px)` 1655-1663 che li riporta a 14px su altri 8 gruppi, piu'
  `padding-left/right` su tre griglie. La migrazione a `.main-content` e' ora **il pezzo di lavoro
  piu' grosso del piano** (D9), con un **criterio di completezza a grep**: se dopo il diff restano
  `margin: ... 20px`, F1 non e' chiusa.
- **4 (contraddizione preservazione ↔ gutter):** era una contraddizione reale del mio documento.
  I margini orizzontali legacy sono ora l'**eccezione dichiarata** alla Regola 1 (R26): si preserva
  la sola componente verticale.
- **5 (matrice `.main-content` incompleta):** accettata — i tre blocchi sono scritti per intero, e il
  `padding-top: 64px` a >=768 e' l'altezza della nav, non uno spazio: va sommato un respiro (R32).
- **6 (container ancora aperto):** accettata. **Deciso: 1140px** (D10) — conserva la larghezza
  desktop attuale invece di restringerla di 20px in silenzio. Non e' piu' una domanda.
- **7 (nessun gate approva il cuore del redesign):** la piu' importante. Il GATE 1 esclude tipografia
  e componenti, il GATE 2 guardava solo F3: card, nav, form, modal e scala tipografica sarebbero
  arrivati al push **senza approvazione umana**. Il GATE 2 diventa la **revisione dell'intero
  redesign** a 390/768/1280 prima di F4 e del push (R37). Non sposto il GATE 1 dopo F2: il suo valore
  e' fermarsi *prima* di aver fatto F2, e ora e' scritto cosa puo' e non puo' giudicare.
- **1 (baseline "stesso commit" impossibile):** accettata — il baseline smoke si prende **all'inizio
  di F3**, dopo il pull di F3, e si riesegue senza pull in mezzo (R36). In F0 restano gli screenshot.
- **8 (criterio touch che si autoassolve):** accettata — criterio **lista vuota** salvo eccezioni
  scritte, e misura del **vero contenitore cliccabile** (`closest('label,button,a,summary')`) per non
  contare falsi positivi (R30).
- **9 (inventario touch senza attivita' correttive):** accettata — nuova sottofase **F2.0** che
  trasforma l'inventario in patch CSS (R34).
- **10 (`__PROD_END__` creato dopo che F2 ci scrive sotto):** accettata, errore di ordinamento mio.
  Il marcatore nasce in **F1** (R33).
- **11 (sotto il marcatore il CSS e' comunque distribuito):** accettata come **correzione di
  onestà**. La rev.2 diceva "zero peso in produzione": falso, il marcatore e' un commento e non
  esiste build che tagli. Ora e' scritto che sono ~8 righe non cablate ma comunque servite, tenute
  perche' B.5 le vuole (D13). Le varianti restano: la motivazione cambia.
- **12 (screenshot senza criteri di confronto):** accettata — checklist di invarianti in F0.4.

**Nessuna respinta in questo round.** Le tre esclusioni del Round 1 sono state confermate da Codex
stesso (focus trap, `_smoke.js`), tranne la motivazione sulle varianti banner — e su quella Codex
aveva ragione: motivazione corretta, decisione invariata.

---

## Round 3 — Codex (stessa sessione)

La rev. 3 affronta davvero quasi tutte le osservazioni precedenti. Ordine Git, `support.js`, easing, nav fissa, matrice completa di `.main-content`, container 1140px, touch, baseline F3, gate finale, consegna F2 e correzioni JS risultano ora coerenti.

Restano però due difetti materiali, entrambi nel nuovo sistema di ritmo/gutter.

1. **L’inventario del gutter è ancora incompleto.** Le righe elencate come “16 margini” sono in realtà 17; inoltre mancano due padding orizzontali che svolgono chiaramente la funzione di gutter: `.cerca-mete-barra { padding:10px 20px 4px }` ([style.css](/C:/erasmuswiz/css/style.css:801)) e `.filtri-mete-chip { padding:0 20px 10px }` ([style.css](/C:/erasmuswiz/css/style.css:830)). Con il nuovo padding di `.main-content`, ricerca e filtri resterebbero rientrati di altri 20px. **Correzione — aggiungere questi due selettori alla migrazione, preservando solo il padding verticale.**

2. **Esiste un gutter inline che il grep sul CSS non può trovare.** `#banner-wiz` contiene `style="display:none; margin:0 20px 14px"` in [index.html](/C:/erasmuswiz/index.html:236); quando `mostraBannerWiz()` lo rende visibile, l’inline style vince sulla normale cascata e produce ancora il doppio gutter. **Correzione — rimuovere quell’inline margin autorizzando questa modifica puntuale a `index.html`, oppure sovrascriverlo con una regola CSS mirata `#banner-wiz { margin-inline:0 !important; }`.**

3. **Il controllo di completezza verifica solo una parte del problema.** Il grep proposto ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:141)) cerca soltanto shorthand `margin` nel CSS: non rileva padding-gutter, `margin-left/right`, valori inline nell’HTML o eventuali dichiarazioni a 14px sopravvissute. **Correzione — affiancare al grep una verifica browser che confronti il bordo sinistro dei figli di ciascun tab con il content-box di `.main-content`, più una ricerca mirata in `css/style.css` e `index.html`.**

4. **`> * + *` aggiunge spazio anche quando il primo figlio è nascosto.** Nella home `#home-benvenuto` è il primo figlio ma normalmente ha `display:none`; `.home-header`, essendo comunque il secondo nodo, corrisponde a `.tab-pane.attivo > * + *` ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:115)) e riceve `margin-top:var(--stack)` oltre al padding superiore di `.main-content`. **Correzione — aggiungere `#tab-oggi:not(.modo-benvenuto) > .home-header { margin-top:0; }`.**

5. **Il primo figlio degli altri tab conserva ancora il vecchio spazio superiore.** `.sezione-header` è il primo figlio di Mete, Percorso e Profilo e conserva `margin-top:20px` ([style.css](/C:/erasmuswiz/css/style.css:532)); non corrisponde a `> * + *`, quindi si somma al nuovo padding superiore di `.main-content`. **Correzione — aggiungere `.tab-pane.attivo > :first-child { margin-top:0; }` oppure azzerare esplicitamente il margine superiore dei tre header.**

6. **I contenitori condizionali vuoti partecipano al ritmo generico.** Nel tab Mete esistono figli diretti come `#banner-lingue-mete`, `#filtri-mete-chip` e `#sezione-preferite` che possono essere vuoti ma non necessariamente `display:none`; il selettore fratello assegna loro comunque margine, e i filtri conservano anche padding-bottom. Questo può creare spazi fantasma. **Correzione — aggiungere regole `:empty { display:none; }` per i contenitori condizionali noti oppure escluderli esplicitamente dal selettore di ritmo.**

Questioni soltanto di rifinitura, non bloccanti:

- La prova F3 avviene senza pull intermedio, quindi è valida; chiamarla “stesso commit” resta impreciso se i due commit F3 vengono creati prima del secondo smoke. “Stesso snapshot dei dati” sarebbe più corretto.

- F3 dovrebbe specificare che il CSS dello stato vuoto va inserito sopra `__PROD_END__`; altrimenti la separazione organizzativa può diventare incoerente, pur senza effetti runtime.

- D12 afferma che F3 tocca tre righe di JavaScript, ma l’helper nuovo aggiunge molte più righe. Il rischio resta comunque limitato grazie alle prove manuali previste.

Sistemati i punti 1–6, il piano sarebbe abbastanza deterministico e verificabile da meritare approvazione; allo stato attuale il rischio di doppio gutter e spazi fantasma riguarda però proprio il fulcro del redesign.

VERDICT: REVISE
### Claude's response — Round 3

**Tutte accettate. Due verifiche hanno aggiunto qualcosa che Codex non aveva visto.**

- **1 (inventario gutter incompleto):** confermato. I margini sono **17**, non 16 (avevo contato
  male). Sui padding-gutter Codex ne segnala 2 (`.cerca-mete-barra` 801, `.filtri-mete-chip` 830):
  a grep sono **5** — mancavano `.lista-checklist-v2` (547), `.griglia-mete-v2` (805) e
  `.griglia-requisiti-v2` (894). Tutti e 5 nella migrazione, con la sola componente verticale preservata.
  Aggiunto anche l'elenco esplicito di cosa **non** e' gutter e non va toccato (footer riga 257 —
  sta fuori da `<main>`, index.html:425 —, i padding interni 294/998/1292, la famiglia `.guida-*`):
  serve a evitare rimozioni a strascico tanto quanto l'inventario serve a evitare omissioni.
- **2 (gutter inline invisibile al grep):** confermato, `#banner-wiz` a index.html:236 —
  ed e' l'**unico** `style=` con margin di tutto il file (verificato). Default: override
  `#banner-wiz { margin-inline: 0 !important }`, che rispetta il vincolo "zero modifiche a
  index.html". L'alternativa piu' pulita (rimuovere l'attributo) tocca `index.html` e quindi va
  autorizzata: **decisione al GATE 1**, accanto a R3 (R38).
- **3 (criterio di completezza troppo stretto):** accettata. Non e' piu' un grep ma **quattro
  controlli**, l'ultimo dei quali nel browser: confronta il bordo sinistro di ogni figlio diretto
  visibile con il content-box di `.main-content` e deve restituire array vuoto. E' l'unico che
  intercetta padding-gutter, inline e casi che il grep non vede (R40).
- **4, 5, 6 (effetti collaterali di `> * + *`):** tutti confermati e neutralizzati nello stesso
  blocco (R39): `> :first-child { margin-top: 0 }` per `.sezione-header` (532);
  `#tab-oggi:not(.modo-benvenuto) > .home-header { margin-top: 0 }` perche' il combinatore `+` non
  sa nulla di `display:none`; `:empty { display: none }` per i tre contenitori condizionali.
  **Verificato che `:empty` funziona davvero** in questo caso: i tre nodi sono `<div id="..."></div>`
  senza whitespace interno (index.html:185, 200, 213) — se ne avessero avuto, `:empty` non avrebbe
  fatto match e sarebbe servita l'esclusione esplicita dal selettore di ritmo.

**Rifiniture, tutte accolte:** "stesso commit" -> "stesso snapshot dei dati" (F3 crea comunque due
commit propri: cio' che deve restare fermo e' `js/atenei/*`); il CSS dello stato vuoto va
esplicitamente **sopra** `__PROD_END__`; D12 non dice piu' "3 righe di JS" ma "2 `appendChild`
sostituiti + un helper di ~20 righe".

---

## Round 4 — Codex (stessa sessione)

La rev. 4 recepisce correttamente tutti e sei i punti del round precedente. La migrazione ora inventaria 17 margini, 5 padding, il blocco ≤480px e il gutter inline; anche ritmo, baseline, touch, gate e marcatore sono sostanzialmente ben definiti.

Restano però tre problemi concreti nei controlli e nel ramo alternativo di F1.

1. **Il controllo browser a 1280 non può restituire un array vuoto nemmeno con il layout corretto.** Confronta ogni figlio con il content-box di `.main-content` ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:183)), ma `.percorso-wrap` occupa intenzionalmente la seconda colonna della home, `#tab-percorso` è centrato e largo al massimo 820px ([style.css](/C:/erasmuswiz/css/style.css:1373), e `.benvenuto` può essere centrato a 900px. Tutti questi elementi avranno legittimamente un `delta` diverso da zero. **Correzione — a 390 usare il confronto globale; a 1280 confrontare i figli con il bordo del rispettivo tab o della relativa colonna di griglia, con aspettative separate per colonna principale, sidebar e contenitori centrati.**

2. **La whitelist del grep sui padding è ancora incompleta.** Il comando del piano ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:180)) restituisce anche due padding interni legittimi non dichiarati: `.drawer-testa { padding:16px 16px 16px 20px }` ([style.css](/C:/erasmuswiz/css/style.css:224)) e `.scelta-percorso-overlay { padding:20px }` ([style.css](/C:/erasmuswiz/css/style.css:1049)). Il controllo quindi fallisce oppure induce a rimuovere padding corretti. **Correzione — aggiungere esplicitamente questi due selettori alla whitelist dei “non gutter”.**

3. **L’alternativa “rimuovere l’attributo `style`” da `#banner-wiz` rompe lo stato iniziale.** L’attributo contiene sia il margine sia `display:none`; rimuovendolo interamente, `.banner-celebrazione { display:flex }` ([style.css](/C:/erasmuswiz/css/style.css:980)) rende visibile da subito un banner vuoto. **Correzione — mantenere il default CSS con `margin-inline:0 !important`, oppure rimuovere soltanto la dichiarazione `margin` dall’attributo lasciando `display:none`.**

Il resto è ormai rifinitura editoriale, non correttezza:

- L’intestazione dichiara ancora “rev. 3” ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:2)).

- La tabella iniziale parla ancora di 16 selettori invece di 17 ([piano](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:61)).

- Il punto F3.29 usa ancora “stesso commit”, mentre F3.25 ha correttamente ridefinito il criterio come “stesso snapshot dei dati”.

- La numerazione dei rischi riparte da 10 dopo R40.

Il piano è molto vicino alla convergenza, ma il controllo browser impossibile e l’alternativa che mostra il banner vuoto sono ancora problemi di correttezza, non semplici dettagli cosmetici.

VERDICT: REVISE
### Claude's response — Round 4

**Tutti e tre i punti di correttezza accettati; verificati prima di accettare.**

- **1 (il controllo browser non puo' passare a 1280):** confermato. `#tab-percorso` e' centrato a
  `max-width:820px` (style.css:1373), `.benvenuto` a 900px (1264), `.percorso-wrap` sta in colonna 2:
  con `.main-content` come riferimento avrebbero tutti un delta legittimo. Il riferimento diventa il
  **content-box del tab attivo**, con esclusione degli item in colonna 2 e di `.benvenuto` (R42).
- **2 (whitelist padding incompleta):** confermato, aggiunti `.drawer-testa` (224) e
  `.scelta-percorso-overlay` (1049) fra i "non gutter".
- **3 (l'alternativa su `#banner-wiz` rompe lo stato iniziale):** **la piu' importante del round, ed
  era una trappola mia.** Verificato: `.banner-celebrazione` e' `display:flex` (980), e l'attributo
  inline porta *anche* `display:none` — togliere l'attributo intero mostrerebbe un banner verde vuoto
  all'avvio. L'alternativa e' ora "rimuovere **solo** la dichiarazione `margin`" (R41).

**Rifiniture accolte:** intestazione a rev. 4; "16 selettori" -> 17 nella tabella di verifica; F3.29
allineato a "stesso snapshot dei dati". Sulla numerazione dei rischi: i codici `Rn` sono stabili fra
le revisioni, la posizione nell'elenco no — aggiunta una nota che lo dice, invece di rinumerare.

---

## Round 5 — Codex (stessa sessione) — ULTIMO ROUND (cap MAX_ROUNDS=5)

Ho verificato la rev. 5: i tre correttivi dichiarati sono presenti, così come le rifiniture. Restano però due problemi materiali e una contraddizione operativa.

- Il controllo esclude `.benvenuto` anche a 390px, non soltanto quando è centrato a desktop. Così non rileva che la regola mobile [style.css](/C:/erasmuswiz/css/style.css:1268) reintroduce `margin: 12px 12px 0` dopo la migrazione del gutter, sommandolo al nuovo padding di `.main-content`; inoltre l’affermazione “le esclusioni non mordono” a [PLAN_REDESIGN_V2.md](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:202) è falsa.  
  Correzione: neutralizzare anche quel `margin-inline:12px`, testare lo stato onboarding a 390px e applicare l’esclusione `.benvenuto` soltanto a desktop.

- Lo snippet opera sul solo “tab attivo”, ma il criterio non prescrive di ripeterlo sui quattro tab: eseguirlo una volta a ogni larghezza controllerebbe probabilmente soltanto Oggi, lasciando scoperti quasi tutti i gutter di Mete, Percorso e Profilo.  
  Correzione: imporre esplicitamente otto esecuzioni — quattro tab × 390/1280 — includendo per Oggi sia onboarding sia utente di ritorno.

- R41 è corretto nel blocco operativo, ma R38 continua a proporre “rimuovere l’attributo” a [PLAN_REDESIGN_V2.md](/C:/erasmuswiz/PLAN_REDESIGN_V2.md:381), contraddicendo l’istruzione di conservare `display:none` e rischiando ancora il banner vuoto.  
  Correzione: sostituire in R38 “rimuovere l’attributo” con “rimuovere esclusivamente la dichiarazione `margin`”.

Il primo punto è una regressione visiva reale proprio alla larghezza mobile obbligatoria, quindi non è semplice rifinitura.

VERDICT: REVISE
### Claude's response — Round 5 (e chiusura del ciclo)

**Tutti e tre i punti accettati e applicati. Il primo era una regressione vera.**

- **`.benvenuto` a 390:** verificato — `margin: 12px 12px 0` a **style.css:1268**, dentro
  `@media (max-width:759px)`. **Nessuno dei miei grep lo avrebbe trovato** (cercavano 20px e 14px):
  il gutter legacy usa **tre** misure diverse. Ed escludendo `.benvenuto` dal controllo browser anche
  a mobile lo avrei reso invisibile due volte. Ora: il selettore entra nell'inventario (R43), il grep
  copre 20/14/12, e le due esclusioni del controllo valgono **solo a desktop**.
- **Una sola esecuzione del controllo copre solo Oggi:** accettata. Il criterio impone **9
  esecuzioni** — 4 tab x 390/1280, piu' Oggi a 390 in stato onboarding, l'unico in cui `.benvenuto`
  e' visibile (R44).
- **R38 contraddiceva R41:** accettata, era una contraddizione mia. R38 ora dice "rimuovere
  esclusivamente la dichiarazione `margin`".

---

## Esito del ciclo — cap raggiunto senza APPROVED

5 round su 5. **Non dichiaro convergenza**: l'ultimo verdetto formale di Codex e' REVISE, e i tre
correttivi del Round 5 sono stati applicati **senza che Codex li abbia ri-verificati**.

Stato reale dell'argomento, per onesta':
- **Nessun disaccordo aperto.** Non resta un solo punto su cui Claude e Codex la pensino diversamente.
  Le uniche tre osservazioni respinte in tutto il ciclo (focus trap del modal, riscrittura di
  `_smoke.js`, eliminazione delle varianti banner) sono state **accettate da Codex stesso** ai round
  successivi, tranne la motivazione sulle varianti banner — dove Codex aveva ragione sulla
  motivazione e il piano l'ha corretta, tenendo la decisione.
- **La traiettoria e' quella giusta:** 22 rilievi al Round 1, 12 al Round 2, 6 al Round 3, 3 al
  Round 4, 3 al Round 5 — e negli ultimi due round i rilievi non riguardavano piu' il piano ma i
  *criteri di verifica del piano*.
- **Cosa resta non ri-verificato:** i tre correttivi del Round 5 (inventario a tre misure, 9
  esecuzioni del controllo browser, coerenza R38/R41). Sono modifiche circoscritte e verificate da
  Claude sul sorgente, ma non hanno passato un round avversariale.

Decisione a Nicola: firmare cosi', oppure spendere un round extra oltre il cap per far ri-verificare
solo quei tre punti.
