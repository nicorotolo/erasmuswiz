# Plan Review Log: ErasmusWiz — Fase 6

Act 1 (grill) complete — plan locked with Nicola on 2026-09-02, base `985cbd2`.
Plan file: `PLAN_FASE6.md`. MAX_ROUNDS=5.

## Act 1 — cosa ha deciso il grill

Solo due domande, perché il resto era misurabile sul disco e l'ho misurato.

1. **Portata di L4** → *«23 ora, la porta aperta ai 111»*. Il
   `DISEGNO_PIPELINE_DATI` §3 definisce L4 come «solo per i partner che L1 non
   ha saputo raggiungere (~20%)», cioè tutti e 134; il brief ne nominava 23. Non
   sono lo stesso problema: dei 111 `nonRaggiunto`, **94 hanno un indirizzo**
   nell'accordo e la raccolta è fallita lì (http4xx, http5xx, robots, dominio
   cambiato, quasi sempre con `nessunCandidato`), mentre i 23 non hanno da dove
   partire. Conseguenza sul piano: L4 filtra **per stato**, non per elenco.

2. **PDF illeggibili e la regola «zero dipendenze»** → *«aperta per la pipeline,
   decido dopo la diagnosi»*. Il sito resta a zero dipendenze; per `scripts/` la
   porta è aperta in linea di principio, ma la scelta concreta si fa sul numero
   che uscirà dalla divisione dei 708 falliti per causa vera.

## Misure fatte durante il grill (non lette: eseguite)

- `statoPartner()` su 613 partner: **479 fatto, 111 nonRaggiunto, 17
  daRaccogliere (tutti `siti: []`), 6 senzaTestoUtile**. Zero lavorabili.
- `raccolta/pagine/**`: **708** file `estrazioneFallita: "illeggibile"` — non
  ~335. Altre cause: `troppoGrande` 31, `nonPdf` 12, `robotsVieta` 4,
  `nonScaricato` 3.
- **231 partner** con almeno un PDF illeggibile, **223** con campi ancora
  mancanti, e **0** senza altro testo leggibile: E8 aggiunge un documento, non
  sblocca un partner muto.
- I 9 `requisitoLingua` in coda, letti uno per uno: 5 monolingua, 4 `ANY`
  multilingua la cui citazione contiene esplicitamente la disgiunzione. **Il
  difetto della tabella appiattita (`TR ISTANBU09`) non è presente in questi nove.**
- `partner.json` è **derivato** (`costruisciPartner()` lo riscrive dai file mete
  a ogni ricostruzione): un indirizzo trovato da L4 ci verrebbe cancellato.

## Il difetto trovato eseguendo, che ha cambiato la forma del piano

Un «non so» **non si può riesaminare**. Provato in un albero finto:

- `nonSo` → `si`: `Error: 1 proposte su campi d'arbitrato senza un "si" nel
  registro` — fallisce rumorosamente.
- `nonSo` → `no`: `{"verdetti":1,"no":1,"eventiNuovi":0}` — **zero eventi**, il
  registro resta `nonSo`, la voce ritorna in coda al giro dopo. **Fallisce in
  silenzio dicendo di aver funzionato.**

Causa: in `applicaArbitrato()` il filtro anti-doppione confronta la sola
esistenza della chiave `(codice, campo, impronta)`, che **non contiene
l'esito**. `codaRiesame` produce quindi una coda che nessuno può chiudere — una
coda senza uscita, il rovescio del capolinea mancante del 02/09. Nessun test la
copriva. È diventata l'**Atto 0** del piano, prima dell'arbitrato.

## Round 1 — Codex (`gpt-5.6-sol`, thread 01a062dd)

Il piano non è ancora sicuro da implementare. I problemi materiali sono soprattutto nella transizione `nonSo → si`, nella persistenza degli indirizzi L4 e nel percorso che dovrebbe preservare il cancello delle citazioni.

1. La correzione “di una riga” all’anti-duplicato è insufficiente

In [applica-arbitrato.mjs](C:/erasmuswiz-mappatura/scripts/applica-arbitrato.mjs), cambiare il filtro da “la chiave non esiste” a “l’esito nuovo è diverso dall’esito corrente” permette effettivamente `nonSo → si`. Ma introduce o lascia aperti diversi casi sbagliati:

- Dopo un’applicazione riuscita, lo stato corrente è `applicato`. Ripresentando lo stesso verdetto `si`, `applicato !== si`: viene quindi scritto un nuovo evento `si`, facendo regredire lo stato.
- `daApplicare` è costruito da tutti gli `abbinati` con esito `si`, non dai soli `nuovi`. Quindi anche un verdetto duplicato continua ad arrivare all’applicazione.
- Se il campo è già uguale, `applica-partner.mjs` conta `uguali` ma non modifica file: non nasce alcun commit e quindi non viene scritto il successivo evento `applicato`. Il registro può rimanere definitivamente in stato `si`.
- Se confronto o applicazione falliscono, l’evento `si` è già stato scritto. `applicaEControlla()` prepara la transazione dopo quell’append, quindi il rollback non lo elimina.

Quest’ultimo caso ha una conseguenza seria: [costruisciCode](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs) esclude una proposta se esiste qualsiasi evento, mentre `codaRiesame()` include soltanto l’ultimo evento `nonSo`. Un `si` rimasto dopo un’applicazione fallita sparisce quindi sia dalla coda ordinaria sia dal riesame, pur non essendo entrato nei dati.

La soluzione dovrebbe esplicitare una macchina a stati, per esempio:

- assente → `no`, `nonSo` o `si`;
- `nonSo` → `no` o `si`;
- `no` e `applicato` terminali, salvo un’operazione esplicita di riapertura;
- applicare soltanto i verdetti `si` che costituiscono una transizione nuova;
- dopo fallimento registrare uno stato non autorizzante e nuovamente visibile, oppure includere registro e applicazione nella stessa transazione.

2. Manca un lock condiviso con `esegui-partner.mjs`

`eseguiPartner()` usa `.esegui.lock`; `applicaArbitrato()` no. I due processi possono quindi contemporaneamente:

- modificare `approvati.json`, `giudizi.jsonl` e le code;
- usare la stessa directory `.transazione`;
- modificare gli stessi file delle mete;
- ricostruire le code da fotografie incompatibili.

Le scritture atomiche dei singoli JSON non risolvono una corsa tra più file. L’arbitrato deve acquisire lo stesso lock, mantenerlo dall’abbinamento dei verdetti fino alla ricostruzione delle code e rilasciarlo in `finally`.

3. Gli indirizzi L4 non sopravvivono alla ricostruzione di `partner.json`

[raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs) ricostruisce `raccolta/partner.json` esclusivamente da:

- CSV Sapienza;
- file `js/atenei/**/dati-mete*.js`;
- `linkSito` già pubblicati nelle mete.

Un indirizzo L4 aggiunto direttamente a `partner.siti` viene cancellato al successivo `--ricostruisci-partner`. Il piano deve definire una sorgente persistente separata, con relativo merge dentro `costruisciPartner()`. Per esempio un registro di seed L4 contenente almeno codice canonico, URL, data, provider, query e stato di verifica.

Metterlo soltanto sotto `raccolta/` è inoltre discutibile: quella directory contiene principalmente artefatti derivati e cache. Se gli indirizzi L4 devono rendere la pipeline riproducibile, serve chiarire se il registro è una fonte versionata oppure una cache rigenerabile.

4. Aggiungere l’indirizzo a `partner.siti` non basta a far ripartire il partner

[statoPartner](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs) tratta `nonRaggiunto` e `senzaTestoUtile` come stati terminali; `eseguiPartner()` li esclude da `daFare`. Inoltre `eseguiBlocco()` raccoglie soltanto partner privi di `indice.json`.

Quindi un partner può ricevere un nuovo seed L4 ma restare escluso perché possiede ancora il vecchio indice fallito. Serve una regola di invalidazione verificabile, ad esempio:

- memorizzare nell’indice l’impronta dei seed utilizzati;
- se l’impronta di `partner.siti` cambia, riportare il partner a `daRaccogliere`;
- oppure creare un passaggio L4 esplicito che richiami la raccolta con refresh selettivo.

Non basta documentare che sarà rilanciata la catena.

5. Il crawler non garantisce di conservare la pagina proposta da L4

`candidatiPartner()` visita ciascun `sito`, ma non inserisce automaticamente l’URL iniziale tra le pagine candidate. Usa invece i link trovati nella pagina, sitemap e sottodomini.

Se L4 trova esattamente la pagina del catalogo e la passa come seed, quella pagina può essere scaricata solo per ispezionarla e poi non finire in `raccolta/pagine`. Inoltre il ciclo smette di provare gli altri siti appena il primo produce qualche candidato: un vecchio sito mediocre può impedire di raggiungere il seed L4 migliore.

Il piano deve specificare priorità e semantica dei seed L4: l’URL proposto dovrebbe diventare esso stesso candidato da conservare, non soltanto una homepage dalla quale cercare altri link.

6. Il cancello SHA-256 è preservato solo sotto una condizione più stretta di quella dichiarata

Il principio “grounding propone indirizzi, non valori” è corretto, ma da solo non dimostra che il cancello resti intatto.

Il percorso sicuro è necessariamente:

`indirizzo L4 → download HTTP normale → pagina salvata → brano inviato dal lettore → impronta SHA-256 → proposta del lettore → applicaCancelli()`.

L4 non deve creare direttamente:

- proposte in `approvati.json`;
- letture sintetiche;
- pagine già considerate verificate;
- citazioni provenienti dalla risposta grounded.

In [cancelli.mjs](C:/erasmuswiz-mappatura/scripts/cancelli.mjs), lo SHA-256 dimostra che il brano oggi verificato è quello realmente inviato al modello. La presenza letterale della citazione è un controllo distinto. Un URL e una citazione restituiti dal grounding non possiedono automaticamente nessuna delle due garanzie.

Il piano deve imporre architetturalmente il percorso standard, non soltanto affermarlo nel prompt.

7. I test proposti coprono al massimo il caso felice della correzione

Un test reale `nonSo → si`, che esegua `applicaArbitrato()` due volte e richieda valore scritto più stato finale `applicato`, dovrebbe effettivamente diventare rosso ripristinando il filtro attuale: il secondo giro lascerebbe `nonSo` e il cancello rifiuterebbe l’applicazione. Questo è utile, ma non sufficiente.

Mancano almeno:

- `applicato → si` non deve aggiungere eventi né richiamare l’applicatore;
- un secondo `si` identico deve essere una vera no-op;
- fallimento dell’applicazione dopo `nonSo → si`: la proposta deve restare recuperabile;
- confronto annullato senza commit;
- verifica delle uscite di `costruisciCode()` e `codaRiesame()` dopo ogni transizione;
- concorrenza tra arbitrato ed `eseguiPartner()`;
- ricostruzione di `partner.json` senza perdita dei seed L4;
- partner con vecchio indice `nonRaggiunto` che riparte quando arriva un seed nuovo;
- URL L4 diretto che viene realmente salvato tra le pagine;
- prova d’integrazione che L4 non possa scrivere valori senza attraversare `applicaCancelli()`;
- mutazione della pagina dopo la lettura che renda rosso il test L4 tramite `paginaCambiata`.

I test esistenti in [applica-arbitrato.test.mjs](C:/erasmuswiz-mappatura/test/applica-arbitrato.test.mjs) verificano l’idempotenza di `no`, ma non quella di `si`/`applicato` e non osservano le code.

8. Mancano sicurezza e osservabilità specifiche per URL generati dal modello

Gli URL L4 sono input non fidati. Il solo controllo `http/https` non impedisce richieste a `localhost`, rete privata, indirizzi link-local o destinazioni raggiunte dopo redirect. Occorre una protezione SSRF applicata sia all’URL iniziale sia a ogni destinazione finale.

Il resoconto L4 dovrebbe inoltre distinguere almeno:

- partner sottoposti a grounding;
- partner con seed proposto;
- seed rifiutati per sicurezza o forma;
- seed raggiungibili;
- seed che producono testo utile;
- partner rientrati nella pipeline;
- proposte passate e bocciate dai cancelli, per campo;
- consumo API, retry, 429 e fallimenti;
- partner terminali e motivo terminale.

Senza questi numeri, L4 può terminare “con successo” avendo prodotto indirizzi che non vengono mai raccolti o che scompaiono alla prima ricostruzione.

La soluzione più semplice è separare nettamente tre elementi: un registro persistente dei seed L4, una regola deterministica di invalidazione della cache quando cambiano i seed e il riuso integrale della catena raccolta → lettura → cancelli. Per l’arbitrato, invece, serve una piccola macchina a stati protetta dallo stesso lock della pipeline; il filtro di una riga non è una correzione completa.

VERDICT: REVISE
### Claude's response — Round 1

**Verificate una per una prima di accettarle. Tutte e cinque le affermazioni
concrete reggono**, e la n.3 nascondeva qualcosa di più grosso.

| # | esito | verifica |
|---|---|---|
| 1 | **accettata, e allargata** | Tutti e quattro i sotto-casi confermati sul codice: `daApplicare` esce da `abbinati` e non da `nuovi`; l'evento `applicato` nasce solo `if (!prova && !esito.annullato && esito.commit)`; `appendiEventi` precede la transazione. E il quarto caso **esiste già oggi**, indipendentemente dalla mia correzione: `costruisciCode` esclude per *evento qualsiasi* (riga 149), `codaRiesame` include solo *ultimo evento `nonSo`* (riga 179). |
| 2 | **accettata** | `apriLock`/`rilasciaLock` esistono, `eseguiPartner` prende `.esegui.lock` alla riga 673, `applicaArbitrato` non prende niente. |
| 3 | **accettata, ed è peggio** | Vedi sotto. |
| 4 | **accettata** | `daFare` esclude `nonRaggiunto` e `senzaTestoUtile` (riga 684). I 17 senza indirizzo non hanno un indice e rientrerebbero; **i 6 con sito JavaScript no**. Senza invalidazione L4 aiuta 17 partner su 23. |
| 5 | **accettata** | Verificate entrambe in `candidatiPartner`: `if (candidati.size) break;` ferma gli altri siti, e i candidati escono da `linkHtml`/sitemap/sottodomini — il seed stesso non viene mai messo in `candidati`. |

**Il rilancio sulla n.3.** Codex chiede se il registro dei seed L4 sia «fonte
versionata o cache rigenerabile». La risposta misurata è che **la domanda vale
già per un file che esiste**:

```
$ git log --all -- raccolta/giudizi.jsonl   → (mai committato)
$ git check-ignore -v raccolta/giudizi.jsonl → .gitignore:12: raccolta/
$ git ls-files raccolta | wc -l              → 0
```

254 eventi — 57 `si`, 130 `applicato`, 17 `no`, 11 `nonSo`, 39 `legacyGiudicato` —
cioè tre giorni di arbitrato umano, **su un disco solo, in nessun commit**. È il
presupposto del cancello, ed è la cosa più fragile del progetto. Diventa
l'**Atto 0a**, prima di tutto il resto. In più il `.gitignore` documenta già la
trappola che renderebbe inefficace una riga di eccezione (`raccolta/` va
riscritto `raccolta/*`), quindi la correzione è nota ma va fatta bene.

**Contro-posizione sulla forma della n.1.** Codex propone una macchina a stati
dentro `applica-arbitrato`. Accetto la macchina a stati ma **non dentro
`applica-arbitrato`**: lo stato di un giudizio è oggi dedotto in **tre** posti
con tre regole che non concordano (il filtro, la riga 149, la riga 179).
Metterne una quarta risolverebbe un chiamante e lascerebbe gli altri due. Va in
`statoGiudizio()`, **una sola definizione**, come `statoCampo()` e
`codiceCanonico()` — è la forma che questo progetto ha già pagato due volte per
imparare. In più aggiungo uno stato che Codex non nomina, `siNonApplicato`, che
trasforma il buco invisibile della n.1 in **una voce di coda visibile**.

**Accettate con modifiche:** la n.6 (imposta dallo schema d'uscita senza campo
`valore` + una prova che `approvati.json`/`letture/`/`pagine/` restino invariati
dopo un run L4) e la n.7 (la lista dei test diventa il piano di prova, con in
più la richiesta di casa che *quello che non c'entra resti*).

**Accettata ridimensionata, con motivo: la n.8 (SSRF).** La difesa serve, ma
**l'esposizione non nasce con L4**: il crawler segue già oggi i link trovati
dentro pagine di terzi, per tutti e 585 i partner raccolti. Trattarla come un
problema di L4 la lascerebbe aperta ovunque e la farebbe sembrare risolta. Va in
`lib-link.mjs`, dove passa ogni scarico. Della lista di osservabilità prendo
tutto ciò che è «falliti divisi per causa» — che è già regola di casa — e
aggiungo un caso che Codex non elenca: *il modello restituisce lo stesso
indirizzo che avevamo già*, esito probabile sui 6 con sito JavaScript, da
contare come fallimento e non come successo.

**Non accettata:** la riapertura esplicita dei giudizi terminali (`--riapri`).
Non è sbagliata, ma nessuno dei 20 casi in coda ne ha bisogno; entra fra le cose
fuori portata, da scrivere quando servirà davvero.

Piano riscritto: `PLAN_FASE6.md` revisione 2. Da 3 atti a 6 (0a, 0b, 0c, 1, 2, 3).

## Round 2 — Codex

Il piano è migliorato in modo sostanziale: lock condiviso, persistenza dei seed, invalidazione tramite impronta, seed conservato come candidato e difesa SSRF centralizzata sono direzioni corrette. Rimangono però alcuni problemi materiali.

Nota di metodo: il sandbox continua a negarmi la lettura locale di `PLAN_FASE6.md`, che non risulta pubblicato su GitHub. Posso quindi verificare le modifiche descritte contro il codice attuale, ma non certificare parola per parola piano e test aggiornati.

## 1. Versionare il registro una volta non protegge i giudizi futuri

L’Atto 0a è urgente e corretto: 254 giudizi su un solo disco sono un rischio reale. Ma forzare il primo commit di `raccolta/giudizi.jsonl` non completa il lavoro.

[applica-arbitrato.mjs](C:/erasmuswiz-mappatura/scripts/applica-arbitrato.mjs) può aggiungere eventi anche quando:

- tutti i verdetti sono `no` o `nonSo`;
- si usa `--prova`;
- l’applicazione non produce modifiche;
- l’applicazione fallisce dopo l’append.

In questi casi non nasce necessariamente un commit. Inoltre `applicaEControlla()` mette in stage soltanto i file delle mete; il registro non è incluso.

Dopo il salvataggio iniziale, i giudizi successivi rischiano quindi di restare nuovamente soltanto come modifica locale non pubblicata. Il piano deve prevedere esplicitamente commit e push del registro per ogni lotto di verdetti, anche quando nessun dato del sito cambia. Non basta che il file diventi “tracked”.

Serve anche decidere la semantica di `--prova`: oggi registra davvero i giudizi. Con `siNonApplicato` ciò significa che una semplice anteprima crea intenzionalmente uno stato pendente. Può essere una scelta valida, ma deve avere un test e un messaggio CLI inequivocabile.

## 2. Cinque stati sono sufficienti soltanto se `legacyGiudicato` resta distinto

Gli stati persistenti plausibili sono:

- `legacyGiudicato`;
- `nonSo`;
- `no`;
- `siNonApplicato`, derivato dall’ultimo evento `si`;
- `applicato`.

L’assenza di eventi può essere trattata separatamente come “mai giudicato”.

I 39 `legacyGiudicato` non devono essere tradotti in `no` né in `applicato`: sappiamo soltanto che erano già stati esaminati e intenzionalmente esclusi dalla nuova coda. Attribuire loro un risultato più preciso falsificherebbe la storia.

Devono inoltre restare terminali. Il vecchio filtro `registro.has()` impediva implicitamente qualsiasi transizione successiva; il nuovo `statoGiudizio()` non deve accidentalmente riaprire quelle proposte.

## 3. La tabella deve tollerare le sequenze già prodotte dai bug storici

Il registro reale potrebbe contenere duplicati consecutivi, perché il commento nel codice documenta che in passato alcuni eventi venivano scritti due volte. Una validazione che ammettesse soltanto transizioni ideali potrebbe quindi rifiutare il registro che deve proteggere.

Vanno considerate almeno queste sequenze:

- `legacyGiudicato`;
- duplicati di `legacyGiudicato`;
- `nonSo` e duplicati;
- `nonSo → no`;
- `nonSo → si → applicato`;
- `no` e duplicati;
- `si`;
- duplicati di `si`;
- `si → applicato`;
- eventuali duplicati di `applicato`;
- eventi sconosciuti o incompleti.

I duplicati identici dovrebbero essere interpretati come idempotenti, non come transizioni illegali. Gli eventi sconosciuti non devono essere silenziosamente equiparati a “mai giudicato”, altrimenti una futura incompatibilità rimette proposte in coda. Meglio fermarsi o classificarli come `statoSconosciuto` rumoroso.

Prima dell’implementazione serve un audit che raggruppi tutte le sequenze effettive delle 254 righe per chiave e dimostri che ognuna ha una classificazione esplicita. Testare solo cinque sequenze inventate non basta.

## 4. `siNonApplicato` non può essere determinato correttamente dal solo registro

La sequenza terminante in `si` rappresenta almeno tre situazioni differenti:

1. `--prova`: il dato non è stato scritto;
2. errore prima del commit: il dato non è stato scritto;
3. crash dopo il commit ma prima dell’evento `applicato`: il dato è già presente.

Tutte diventano `siNonApplicato` guardando soltanto `giudizi.jsonl`.

Il recupero deve pertanto confrontare proposta e dati pubblicati:

- se il campo è vuoto, ritentare l’applicazione;
- se contiene esattamente il valore approvato, registrare `applicato` anche senza creare un nuovo commit di dati;
- se contiene un valore differente, produrre un conflitto visibile;
- se la proposta non esiste più, produrre un orfano visibile.

Altrimenti il nuovo stato descrive il log, non la realtà.

## 5. `codaRiesame()` può ancora perdere un `siNonApplicato`

Attualmente `codaRiesame()` parte dalle proposte presenti in `approvati.json` e poi cerca il relativo evento. Se il registro contiene `si`, ma la proposta è stata sostituita o rimossa da una successiva fusione dei cancelli, quella chiave non viene mai visitata.

La nuova funzione comune non risolve questo problema di per sé. Per trovare tutti i pendenti, bisogna anche partire dagli eventi `siNonApplicato` e fare un collegamento verso le proposte correnti. Se la proposta manca, la coda deve mostrare almeno:

- codice;
- campo;
- impronta;
- causa `propostaAssente`;
- data dell’ultimo evento.

L’impronta non permette di ricostruire il valore originale; questo è un ulteriore motivo per non nascondere il caso.

## 6. `siNonApplicato` non è propriamente un riesame umano

Un `nonSo` richiede un nuovo giudizio sul contenuto. Un `siNonApplicato` contiene invece un giudizio già positivo e richiede normalmente un recupero tecnico.

Metterli nello stesso file può andare bene come interfaccia operativa, ma non bisogna chiedere nuovamente “sì/no/non so” senza distinguere i casi. Il retry dello stesso `si` deve:

- non aggiungere un secondo evento `si`;
- poter comunque ritentare l’applicazione;
- terminare in `applicato` anche se il valore risulta già identico;
- lasciare una traccia esplicita in caso di conflitto.

Questo è il punto in cui una sola funzione di classificazione non basta: `applicaArbitrato()` deve comunque avere regole operative precise per ciascuno stato.

## 7. La difesa SSRF in `lib-link.mjs` deve coprire il crawler reale

Centralizzarla in [lib-link.mjs](C:/erasmuswiz-mappatura/scripts/lib-link.mjs) è sensato. Ma oggi il crawler di [raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs) chiama direttamente `fetch()` dentro `scaricaUnaVolta()` e usa `redirect: "follow"`.

Quindi una difesa aggiunta soltanto a `statoLink()` non protegge:

- homepage e seed L4;
- `robots.txt`;
- sitemap;
- pagine scoperte;
- sottodomini;
- destinazioni intermedie dei redirect;
- PDF riscaricati da altri moduli.

Con `redirect: "follow"` controllare solo `res.url` è troppo tardi: la richiesta alla destinazione privata è già avvenuta. La protezione deve validare ogni URL prima della richiesta e gestire i redirect manualmente, validando ogni salto. Deve coprire almeno loopback, indirizzi privati IPv4, link-local, IPv6 locali, nomi come `localhost` e risoluzioni DNS verso reti private.

Il fatto che l’esposizione preceda L4 giustifica la collocazione comune, ma allarga anche il perimetro dei chiamanti da migrare.

## 8. Impronta dei seed: attenzione alla stabilità

L’impronta deve essere calcolata su URL:

- normalizzati;
- deduplicati;
- ordinati;
- privi di frammenti e parametri di tracking.

Altrimenti un semplice cambio d’ordine prodotto dalla ricostruzione di `partner.json` invalida centinaia di cache senza che sia cambiato alcun seed.

Il test necessario non è soltanto “un seed nuovo invalida l’indice”, ma anche “gli stessi seed in ordine diverso non lo invalidano”.

## 9. Test indispensabili prima dell’approvazione

Oltre ai test già aggiunti, servono prove che diventino rosse con queste regressioni:

- `legacyGiudicato` non ricompare in nessuna coda;
- tutte le sequenze reali del registro sono classificabili;
- evento sconosciuto non diventa “mai giudicato”;
- `si` con valore già pubblicato diventa `applicato`;
- `si` con campo vuoto viene ritentato;
- `si` con valore differente diventa conflitto;
- `si` senza proposta corrente resta visibile;
- un lotto di soli `no/nonSo` produce un commit recuperabile del registro;
- `--prova` ha esattamente la semantica dichiarata;
- redirect pubblico → indirizzo privato viene bloccato prima della seconda richiesta;
- crawler, PDF e verifica-link usano davvero la difesa comune;
- permutare l’ordine dei seed non invalida la cache;
- aggiungere un seed sostanzialmente nuovo la invalida;
- il seed L4 diretto viene conservato come pagina anche senza link interni.

Il rifiuto di `--riapri` è ragionevole se `no`, `applicato` e `legacyGiudicato` restano terminali e se eventuali correzioni eccezionali richiedono un intervento manuale, deliberato e documentato. Non lo considero un difetto bloccante.

In sintesi: quasi tutte le precedenti lacune architetturali sono state riconosciute, ma la durabilità continuativa del registro, il recupero di `siNonApplicato`, il collegamento inverso registro→proposte e la copertura reale della difesa SSRF devono essere esplicitati prima di implementare.

VERDICT: REVISE
### Claude's response — Round 2

**Prima una correzione di metodo, che vale per tutto questo giro.** Codex apre
dicendo che il sandbox non gli lascia leggere `PLAN_FASE6.md`. Quindi il Round 2
è una revisione **del codice più il mio riassunto**, non del piano: le sue
osservazioni code-grounded valgono piene, quelle su «cosa dice il piano» no. Nel
Round 3 il piano va nel prompt.

**Due mie affermazioni cadono per i dati, non per l'argomento.** Codex chiedeva
se cinque stati coprissero le sequenze reali. Raggruppati i 254 eventi per
chiave:

```
196 chiavi distinte
 76   applicato               <- nessun "si" prima
 51   si -> applicato
 39   legacyGiudicato
 15   no
 11   nonSo
  3   si -> si -> applicato   <- i doppioni del 02/09 SONO nel registro
  1   no -> no
```

**115 chiavi su 196** sarebbero finite fuori dalla mia tabella o classificate
male: i 76 `applicato` nudi e i 39 `legacyGiudicato`. Vengono da
`semina-giudizi.mjs` (`pubblicato ? "applicato" : "legacyGiudicato"`): sono
**ingressi, non transizioni**. E i doppioni identici esistono davvero, quindi
una macchina a stati che ammettesse solo transizioni ideali **rifiuterebbe il
registro che deve proteggere**. Accettate in pieno le n.2 e n.3, e la tabella è
riscritta sull'audit: sette stati, `legacyGiudicato` terminale e non
autorizzante, `statoSconosciuto` rumoroso, doppioni idempotenti.

| # | esito | verifica |
|---|---|---|
| 1 | **accettata** | Confermato: `git.esegui(radice, ["add", "--", ...manifesto.fileMete])`, con accanto il commento «`raccolta/` è ignorata, `git add -A` prenderebbe cose che non c'entrano». Versionare il file una volta non lo fa committare mai più. L'arbitrato committa il registro **da sé**, e la catena non si tocca: quell'elenco esplicito è una difesa deliberata. Aggiunta anche la semantica di `--prova`, che oggi scrive davvero gli eventi. |
| 2, 3 | **accettate, dai dati** | Vedi sopra. |
| 4 | **accettata** | Una sequenza che finisce in `si` copre tre situazioni, e in una il dato è **già scritto**. Il recupero confronta la proposta col campo pubblicato: vuoto → ritenta; valore esatto → `applicato` senza commit; valore diverso → conflitto; proposta sparita → orfano visibile. |
| 5 | **accettata** | Vero: `codaRiesame` itera `approvati.json`, e `fondiEsiti` sostituisce le proposte di mestiere. Si percorre anche dagli eventi alle proposte, con causa `propostaAssente`. |
| 6 | **accettata** | `siNonApplicato` non è un riesame umano: due file distinti, `da-riesaminare.json` (umano) e `da-recuperare.json` (tecnico). |
| 7 | **accettata sulla collocazione, ridotta sull'estensione** | Vedi sotto. |
| 8 | **accettata** | Impronta su URL normalizzati, deduplicati, ordinati, senza frammento né tracking. Due prove: un seed nuovo invalida, **lo stesso in ordine diverso no**. |
| 9 | **accettata** | La lista diventa il piano di prova. |

**Sulla n.7 avevo torto sulla collocazione e Codex ha ragione**: `lib-link.mjs`
contiene solo `statoLink()`, mentre il crawler chiama `fetch` per conto suo
(`raccogli-partner.mjs:135`, `redirect: "follow"`). Metterla lì l'avrebbe fatta
*sembrare* risolta. Va prima di ogni `fetch`, e i chiamanti da migrare sono
tutti.

**Ma la validazione salto per salto resta fuori, dichiarata.** Riscrivere
`redirect: "follow"` significa toccare il ramo che il 30/08 ha recuperato
**quindici falliti su ventinove** — la causa più grossa dei «nessun candidato» —
nella stessa sessione in cui si riscrive la macchina a stati dell'arbitrato.
Contro la regola di casa: una modifica alla volta, misurata prima e dopo. E la
minaccia, su un portatile personale senza servizi di metadati cloud, è teorica.
Entra fra i rischi come **buco noto**: un buco dichiarato non è un buco
nascosto.

Piano riscritto: revisione 3.

## Round 3 — Codex

La revisione risolve quasi tutti i problemi precedenti, ma non è ancora pronta: restano due blocchi reali — recupero su codici presenti in più mete e redirect SSRF — più alcune ambiguità operative nel testo.

## 1. La tabella a sette stati copre le sette sequenze reali

Sui dati forniti, la classificazione è corretta:

| Sequenza reale | Stato |
|---|---|
| `applicato` | `applicato` |
| `si → applicato` | `applicato` |
| `legacyGiudicato` | `legacyGiudicato` |
| `no` | `no` |
| `nonSo` | `nonSo` |
| `si → si → applicato` | `applicato` |
| `no → no` | `no` |

Sono corrette anche queste decisioni:

- `applicato` e `legacyGiudicato` possono essere eventi iniziali storici;
- i duplicati identici sono idempotenti;
- `legacyGiudicato` resta distinto, terminale e non autorizzante;
- `statoSconosciuto` non riapre la proposta.

C’è però una distinzione da rendere esplicita: la grammatica degli eventi storici non coincide con le transizioni che `applica-arbitrato` può produrre oggi. “Da `daGiudicare` a qualunque cosa” è troppo largo. L’applicazione ordinaria dovrebbe poter produrre soltanto `si`, `no` o `nonSo`; gli ingressi diretti `applicato` e `legacyGiudicato` sono ammessi nella lettura dello storico/semina, non come verdetti CLI.

Inoltre `statoGiudizio()` non dovrebbe limitarsi a guardare l’ultimo evento. Deve percorrere l’intera sequenza e verificare che:

- ogni esito sia conosciuto;
- le transizioni siano valide;
- i duplicati identici siano ignorati;
- `applicato` e `legacyGiudicato` diretti siano ammessi solo come ingressi storici;
- una sequenza corrotta come `no → si` diventi `statoSconosciuto`, anche se l’ultimo evento preso isolatamente sarebbe `si`.

Altrimenti `{"esito":"boh"} → applicato` o `no → si` verrebbero nascosti dal loro ultimo evento valido.

## 2. Il recupero basato sui dati manca il caso “più mete con lo stesso codice”

La tabella parla del “campo nelle mete” al singolare, ma `applica-partner.mjs` applica una proposta a tutte le occorrenze del codice Erasmus. Lo stesso codice può comparire in più blocchi e file.

Per un `siNonApplicato` sono quindi possibili stati misti:

- tutte le occorrenze vuote;
- tutte esattamente uguali;
- alcune uguali e alcune vuote;
- almeno una differente e altre vuote/uguali;
- nessuna meta corrispondente al codice.

La regola dovrebbe essere:

- tutte uguali → registra `applicato`;
- tutte vuote → ritenta;
- miscela uguali/vuote → applica soltanto alle vuote, poi verifica che siano tutte uguali;
- almeno una differente → conflitto, senza modificare niente;
- nessuna meta corrispondente → `metaAssente`, distinto da `propostaAssente`.

Il controllo finale deve riesaminare tutte le occorrenze prima di scrivere `applicato`. Questo non è teorico: la gestione dei codici ripetuti è già stata una fonte di difetti nella pipeline.

Va inoltre riutilizzata la stessa definizione di uguaglianza usata dall’applicatore. Due implementazioni diverse — una nel recupero e una in `applica-partner` — ricreerebbero esattamente il problema che `statoGiudizio()` vuole eliminare.

## 3. Il percorso inverso deve coprire anche `nonSo`

Il cammino eventi → proposte è corretto, ma non deve essere limitato ai `siNonApplicato`.

Anche un evento `nonSo` può perdere la proposta corrente dopo `fondiEsiti`. In quel caso deve restare visibile in `da-riesaminare.json` come `propostaAssente`. Altrimenti il recupero tecnico è completo, ma la coda umana conserva lo stesso vecchio buco.

Il collegamento deve inoltre distinguere:

- zero proposte corrispondenti → `propostaAssente`;
- una proposta → collegamento normale;
- più proposte con la stessa chiave → `propostaAmbigua`, non scelta arbitraria dell’ultima.

Attualmente `abbinaVerdetti()` usa una `Map.set()` e quindi, davanti a duplicati, l’ultima proposta vincerebbe silenziosamente.

C’è anche un problema al livello precedente: `leggiRegistro()` oggi ignora righe JSON malformate o prive di campo/impronta. Per un registro ora considerato irripetibile, saltare silenziosamente una riga non è più accettabile. Una scrittura interrotta potrebbe far sparire proprio l’ultimo giudizio. Parsing e struttura devono fallire rumorosamente, oppure produrre una voce di quarantena esplicita.

## 4. Due prove si contraddicono

La prova 6 dice che un’applicazione fallita deve ricomparire in `da-riesaminare.json`. Tutto il resto del piano, correttamente, dice invece che `siNonApplicato` appartiene esclusivamente a `da-recuperare.json`.

La prova 6 deve quindi richiedere:

- stato `siNonApplicato`;
- presenza in `da-recuperare.json`;
- assenza da `da-riesaminare.json`;
- motivo `applicazioneNonRiuscita`.

La prova 7 è inoltre troppo permissiva:

> o `applicato`, o `siNonApplicato`

Per il caso “valore già esattamente uguale” il risultato previsto è ormai deterministico: deve diventare `applicato`, senza commit di dati. Accettare entrambi gli esiti renderebbe verde proprio la regressione che la prova dovrebbe trovare.

## 5. I commit separati sono difendibili, ma serve un ordine vincolante

Separare giudizio e applicazione non è peggiore della situazione attuale. È molto meglio, perché ogni stato intermedio diventa durevole e recuperabile.

L’ordine deve però essere normativo:

1. Scrivere `si`, `no` o `nonSo`.
2. Creare e spingere il commit del registro.
3. Se commit o push falliscono, fermarsi prima di applicare dati.
4. Applicare il valore e creare/spingere il commit dei dati.
5. Scrivere l’evento `applicato`, con il commit dei dati come fonte.
6. Creare e spingere un secondo commit del registro.

Le finestre di crash diventano così gestibili:

- crash dopo il primo commit → `siNonApplicato` con campo vuoto, quindi retry;
- crash dopo il commit dati → `siNonApplicato` con valore esatto, quindi chiusura senza riscrittura;
- crash dopo l’append locale di `applicato` ma prima del push → la copia remota conserva `si` e può ricostruire lo stato dai dati.

Se invece il piano intende fare un solo commit del registro alla fine, resta una finestra in cui i dati possono essere pubblicati senza che il `si` sia mai arrivato sul remoto. Va esclusa esplicitamente.

Anche il caso “valore già uguale” richiede un nuovo commit del registro, pur non avendo un commit di dati nuovo.

## 6. La validazione dei redirect per salto è un blocco per L4

La motivazione della dilazione è comprensibile, ma non sufficiente. Il piano afferma che la difesa avviene “prima di ogni `fetch`”; con `redirect: "follow"` questo non è vero. I fetch successivi sono eseguiti internamente prima che il programma possa ispezionare la destinazione.

Il rischio esisteva già, ma L4 lo aumenta qualitativamente:

- prima i seed principali provenivano dai dati universitari;
- L4 introduce indirizzi generati da un modello e da risultati di ricerca;
- un URL pubblico può reindirizzare a loopback, rete locale o indirizzi link-local;
- controllare soltanto `res.url` è troppo tardi.

Non serve mescolare questa modifica con la macchina a stati. Si può sequenziare:

1. Atto 0a–0c;
2. validazione redirect;
3. solo dopo, attivazione di L4.

La gestione manuale dei redirect può conservare il comportamento utile del 30 agosto: seguire gli stessi redirect, con un limite massimo, ma validando ciascuna destinazione prima di richiederla. I quindici casi recuperati possono diventare il campione di regressione.

L’unica alternativa difendibile per rinviare il fix sarebbe non eseguire automaticamente i seed L4 finché ogni indirizzo e catena di redirect non viene approvato manualmente. Lasciare insieme L4 automatico e `redirect: "follow"` resta un blocco di sicurezza reale.

## 7. Nota minore sulla lista dei file da versionare

`fonti-irrecuperabili.json` viene generato da `ricostruisciFonti()` confrontando proposte e dati pubblicati. Per il codice attuale è quindi un artefatto derivato, non una decisione umana irripetibile. Versionarlo può essere utile come fotografia diagnostica, ma la motivazione “è una dichiarazione, non un calcolo” non corrisponde al comportamento del programma.

Non è un blocco, ma conviene classificarlo correttamente per evitare commit rumorosi e aspettative sbagliate.

In sintesi: la macchina a sette stati ora rappresenta correttamente il registro reale e i commit separati sono una buona architettura, purché ordinati come barriera causale. Prima dell’implementazione vanno ancora corretti il recupero su occorrenze multiple, il cammino inverso per `nonSo`, le due prove contraddittorie e la finestra SSRF dei redirect.

VERDICT: REVISE
### Claude's response — Round 3

**Nota di ambiente, che vale per i round 2 e 3.** Il sandbox di Codex non riesce
più a spawnare processi figli (`CreateProcessAsUserW failed: 5`), quindi non
legge file. Nel round 3 il piano gli è stato passato **dentro il prompt** (le
sezioni riscritte, 25 KB — il tentativo con il piano intero, 42 KB, è morto con
exit 126 sul limite della riga di comando di Windows). Le sue osservazioni
code-grounded del round 1 restano valide; quelle dei round 2-3 valgono per il
testo che gli ho passato.

**Accettato tutto, e una delle sue correzioni riguarda un errore di fatto mio.**
Le tre affermazioni verificabili sono state controllate sul codice prima di
accettarle:

| # | esito | verifica |
|---|---|---|
| 1 | **accettata** | `statoGiudizio()` percorre la sequenza intera, non l'ultimo evento: `no -> si` e `{"esito":"boh"} -> applicato` sarebbero altrimenti nascosti da una fine valida. E le due grammatiche si separano: `applicato`/`legacyGiudicato` sono ingressi storici, non verdetti da riga di comando. |
| 2 | **accettata** | Verificato: `applica-partner.mjs` righe 160-166 applica `for (proposte) for (file) for (codici)` — una proposta tocca **tutte** le occorrenze del codice. Il recupero ha cinque esiti, non quattro, e l'uguaglianza si prende da chi applica invece di riscriverla. |
| 3 | **accettata** | Verificato: `leggiRegistro()` fa `catch { continue; }` e scarta le righe senza `campo`/`improntaProposta`. Per un file dichiarato irripetibile, una riga saltata in silenzio può essere l'ultimo giudizio. E `abbinaVerdetti()` usa `Map.set()`: due proposte con la stessa chiave e l'ultima vince senza dirlo. Il cammino inverso vale anche per `nonSo`. |
| 4 | **accettata, ed era mia** | Le prove 6 e 7 contraddicevano il resto del piano: la 6 era scritta prima che le due code fossero separate, la 7 accettava due esiti dove ormai ce n'è uno solo — sarebbe stata verde proprio sulla regressione da trovare. |
| 5 | **accettata** | L'ordine dei due commit diventa una **barriera causale** in sei passi, così ogni interruzione lascia uno stato leggibile. |
| 7 | **accettata, correzione di fatto** | Avevo scritto che `fonti-irrecuperabili.json` è «una dichiarazione, non un calcolo». È falso: lo scrive `ricostruisciFonti()` confrontando proposte e dati pubblicati. È derivato, ed esce dalla lista dei file da versionare. |

**Sulla n.6 avevo torto, e il modo in cui avevo torto è istruttivo.** Avevo
rinviato la validazione dei redirect invocando «una modifica alla volta». Ma la
regola di casa non dice di rinviare: dice di **non mescolare** — e non serve
mescolare, basta ordinare. Codex propone la sequenza giusta (Atti 0 →
validazione redirect → poi L4) e nota che il campione di regressione **esiste
già ed è quello giusto**: i quindici casi che il ramo «dominio cambiato» ha
recuperato il 30/08. Con `redirect: "follow"` la mia frase «controllo prima di
ogni fetch» era **falsa per i salti dopo il primo**. Il rinvio è tolto; entra
come passo suo, con la sua misura.

Piano riscritto: revisione 4.

## Round 4 — Codex

Il piano è ormai vicino all’approvazione. La tabella a sette stati è coerente con tutte le sette sequenze reali, e le precedenti lacune architetturali sono state risolte. Restano però due ambiguità operative che possono ancora produrre perdita di durabilità, più alcuni test mancanti su casi esplicitamente accettati.

## 1. La classificazione delle sette sequenze ora è corretta

La nuova grammatica produce correttamente:

- `applicato` nudo → `applicato`;
- `si → applicato` → `applicato`;
- `legacyGiudicato` → stato terminale non autorizzante;
- `no` → terminale;
- `nonSo` → riesame umano;
- `si → si → applicato` → `applicato`, ignorando il duplicato;
- `no → no` → `no`, ignorando il duplicato.

È corretta anche la separazione tra:

- grammatica storica, che ammette `applicato` e `legacyGiudicato` come ingressi;
- grammatica CLI, che accetta soltanto `si`, `no`, `nonSo`;
- transizione di sistema `siNonApplicato → applicato`.

Non vedo più un problema sostanziale nel modello degli stati.

## 2. Non è specificato chi esegue concretamente il recupero tecnico

Il piano definisce bene `da-recuperare.json` e dice che:

- campo vuoto → “si ritenta”;
- valore già uguale → si chiude come `applicato`;
- valori misti vuoti/uguali → si completano i vuoti;
- conflitto → stop.

Ma non identifica il consumatore della coda tecnica.

Questo entra in tensione con la prova 3:

> `si → si` identico: zero chiamate all’applicatore.

Se ripresentare lo stesso `si` non avvia il recupero, allora serve un’altra operazione esplicita. Per esempio:

- `recuperaArbitrati()` eseguito automaticamente all’avvio;
- un comando dedicato;
- un passo esplicito di `esegui-partner`;
- un’opzione specifica dell’arbitrato.

`da-recuperare.json` da solo è osservabilità, non recupero. Un implementatore potrebbe correttamente produrre la coda ma non realizzare alcun percorso che la consumi.

Il piano deve dire:

- chi invoca il recupero;
- quando viene invocato;
- se è automatico o manuale;
- se opera anche sui pendenti creati da `--prova`;
- come conclude il caso “già uguale” senza un commit di dati.

## 3. La barriera a sei passi non copre il riavvio sullo stesso disco

L’ordine dei commit è corretto. Rimane una finestra non descritta:

1. viene scritto `applicato`;
2. il processo muore prima del commit/push del passo 6;
3. sul disco locale il registro termina in `applicato`, ma sul remoto termina ancora in `si`.

Riavviando sulla stessa macchina, `statoGiudizio()` legge il file locale e vede uno stato terminale `applicato`. Di conseguenza potrebbe non avviare nessun recupero e non committare la modifica pendente. Il giudizio finale resterebbe nuovamente soltanto sul disco.

Lo stesso problema esiste se il processo muore:

- dopo aver scritto `si`, prima del primo commit;
- dopo il commit locale del registro, prima del push.

Serve un preflight sotto lock, prima di classificare nuovi verdetti:

- validare integralmente il registro locale;
- rilevare modifiche non committate a `giudizi.jsonl`;
- committarle e spingerle, oppure fermarsi;
- rilevare eventuali commit locali del registro non ancora pubblicati;
- completarli o fermarsi prima di applicare dati nuovi.

Senza questo preflight, la barriera è sicura durante un’esecuzione completa ma non necessariamente al riavvio, che è proprio il caso per cui è stata progettata.

## 4. La quarantena non può consentire alla pipeline di continuare

Il testo lascia due alternative per una riga non leggibile:

> fermarsi rumorosamente, oppure metterla in quarantena visibile.

La seconda è sicura soltanto se la quarantena blocca comunque arbitrato, autorizzazione e costruzione delle code. Da una riga JSON non parsabile non si può nemmeno sapere a quale chiave appartenesse: continuare potrebbe classificare quella proposta come `daGiudicare`.

Quindi la regola dovrebbe essere:

- conservare la riga in quarantena per l’ispezione;
- fermare comunque ogni uso del registro finché la quarantena non viene risolta.

“Visibile ma non bloccante” non è sufficiente per un file che funge da autorizzazione.

## 5. Alcuni casi ora descritti non sono ancora coperti dalle prove elencate

La tabella di recupero è corretta, ma i test elencati non coprono esplicitamente:

- occorrenze miste: alcune vuote e alcune uguali;
- codice assente da tutte le mete → `metaAssente`;
- più proposte corrispondenti → `propostaAmbigua`;
- `nonSo` con proposta rimossa nel percorso inverso;
- riga JSON non parsabile;
- riga valida ma priva di `campo` o `improntaProposta`;
- sequenza registrata `no → si` → `statoSconosciuto`;
- sequenza `boh → applicato` → `statoSconosciuto`;
- fallimento del push del primo commit del registro → applicatore mai chiamato;
- crash simulato dopo l’append di `applicato` → il riavvio pubblica la modifica pendente.

Dato che codici ripetuti, righe ignorate e finestre tra commit sono precisamente i rischi principali di questa revisione, almeno questi casi devono essere fissati come regressioni.

## Giudizio complessivo

Il disegno degli stati è ora solido. Anche persistenza, percorso inverso, uguaglianza condivisa, redirect per salto e sequenza L4 sono sufficientemente specificati per l’implementazione.

Non approvo ancora soltanto perché:

1. la coda tecnica non ha un esecutore dichiarato;
2. il protocollo dei commit non specifica il recupero di registro/commit già pendenti sullo stesso disco;
3. la quarantena potrebbe essere interpretata come non bloccante.

Sono problemi circoscritti: non richiedono un nuovo ridisegno, ma devono essere risolti nel piano perché riguardano esattamente il recupero dopo un’interruzione.

VERDICT: REVISE
### Claude's response — Round 4

Tre punti stretti, tutti fondati, tutti accettati. Nessuno richiedeva un
ridisegno, e Codex lo dice per primo.

1. **La coda tecnica non aveva un esecutore, ed è il difetto che questo piano è
   nato per chiudere, ricreato un livello più in là.** `da-recuperare.json` era
   osservabilità travestita da soluzione — e la prova 3 (un `si` ripetuto non
   chiama l'applicatore) chiudeva l'unica strada che avrebbe potuto consumarla.
   Ora è `recuperaArbitrati()`, primo passo di `applica-arbitrato.mjs` sotto il
   lock, invocabile anche da sola, e opera anche sui pendenti nati da `--prova`.
2. **La barriera a sei passi non copriva il riavvio sullo stesso disco.** Se il
   processo muore fra il passo 5 e il 6, il registro locale finisce in
   `applicato` e il remoto in `si`: al riavvio `statoGiudizio()` vede uno stato
   terminale e non recupera niente — cioè il difetto dell'Atto 0a rientrato
   dalla finestra. Aggiunto un preflight sotto lock che mette in pari registro
   locale e remoto **prima** di classificare qualunque cosa, e che non applica
   dati.
3. **La quarantena diventa bloccante.** Argomento decisivo di Codex: da una riga
   JSON rotta non si può nemmeno sapere a quale chiave apparteneva, quindi
   proseguire potrebbe classificare come `daGiudicare` una proposta già
   giudicata, e rimetterla sotto gli occhi di Nicola come se fosse nuova.

Accettata anche la lista di prove: otto casi nuovi (15-22), fra cui la rottura
di controllo sul `Map.set()` e l'interruzione simulata dopo l'append di
`applicato`.

Piano riscritto: revisione 5.

## Round 5 — Codex — **APPROVED**

Il piano è ora sufficientemente solido per essere implementato in sicurezza.

I problemi materiali delle revisioni precedenti risultano chiusi:

- le sette sequenze reali del registro sono classificate correttamente;
- storico e verdetti CLI hanno grammatiche separate;
- sequenze corrotte e righe malformate bloccano la pipeline;
- `siNonApplicato` ha un esecutore concreto e un comando autonomo;
- il recupero considera tutte le occorrenze dello stesso codice;
- il percorso inverso copre sia `si` sia `nonSo`;
- ambiguità, proposta assente e meta assente restano visibili;
- il registro viene pubblicato prima dei dati attraverso una barriera causale;
- il preflight recupera modifiche e commit rimasti soltanto in locale;
- un push del registro fallito impedisce qualsiasi applicazione;
- lock e quarantena impediscono avanzamenti concorrenti o non autorizzati;
- la validazione dei redirect per ogni salto precede l’attivazione di L4;
- i test 15–22 colpiscono direttamente i rischi che erano ancora scoperti.

Un’unica attenzione non bloccante durante l’implementazione: nella prova 3, “zero chiamate all’applicatore” deve riferirsi alla gestione del verdetto duplicato dopo che l’eventuale recupero iniziale è terminato. Un vero `siNonApplicato` con campo vuoto deve invece chiamare l’applicatore attraverso `recuperaArbitrati()`, come ora stabilisce il piano.

Non vedo più una lacuna che possa ragionevolmente causare ingresso di dati non autorizzati, perdita silenziosa dei giudizi o uno stato irrecuperabile.

VERDICT: APPROVED
### Claude's response — Round 5

Approvato al quinto giro su cinque. L'unica nota non bloccante è stata fissata
nel piano invece che lasciata al buon senso di chi implementa, perché è
esattamente il tipo di trappola che questo progetto paga: «zero chiamate
all'applicatore» nella prova 3 vale **solo** per il verdetto duplicato, dopo che
il recupero iniziale è finito. Scritta sull'intero run, quella prova sarebbe
verde proprio mentre impedisce il recupero — il difetto rimesso dentro dalla
porta della sua stessa prova.

---

## Bilancio dei due atti

**Cosa ha aggiunto l'Atto 1 (il grill).** Due sole domande a Nicola, perché il
resto era misurabile e l'ho misurato. Le risposte hanno cambiato la forma del
lavoro: L4 filtra per stato invece che per elenco, e la diagnosi dei PDF precede
la decisione sulla dipendenza invece di seguirla.

**Cosa ha aggiunto l'Atto 2 (Codex).** Il piano è passato da 3 atti a 7 e da
~200 a ~830 righe. I contributi che nessuna rilettura da sola avrebbe prodotto:

- la macchina a stati contro le **sequenze reali** del registro — la mia prima
  tabella ne classificava male 115 su 196;
- `applica-partner` applica a **tutte** le occorrenze di un codice, quindi il
  recupero ha cinque esiti e non quattro;
- `leggiRegistro` salta righe in silenzio, `abbinaVerdetti` fa vincere l'ultima
  proposta in silenzio;
- l'ordine dei commit come **barriera causale**, e il preflight che chiude la
  finestra al riavvio;
- la coda tecnica senza esecutore — il difetto del piano ricreato un livello più
  in là;
- la validazione dei redirect **prima** di L4, dove io avevo rinviato con un
  argomento debole.

**Quante volte Claude ha detto di no:** una sola volta in modo definitivo
(`--riapri`, che Codex ha poi riconosciuto non bloccante) e una volta in modo
temporaneo poi ritirato (il rinvio dei redirect, dove Codex aveva ragione).
Tutte le altre trentadue osservazioni sono state verificate sul codice o sui
dati **prima** di essere accettate; tre sono state accettate ridimensionate o
ricollocate con motivo scritto.

**Nessuna riga di codice scritta.** Il piano è pronto per l'Atto 3.

---

## Act 3 — Build (Codex costruisce, Claude verifica)

**Portata:** solo l'Atto 0 (0a + 0b + 0c), come il piano stesso ordina. Atti 1, 2
e 3 restano fuori, e nessuno stub e' stato creato per loro.
**Builder:** `gpt-5.6-sol`, codex-cli 0.144.5, `-s workspace-write`.
**Baseline misurato prima di toccare niente:** 369 pass, 0 fail.

### Due tentativi a vuoto, e la causa vera

Il primo e il secondo lancio si sono fermati con
`CreateProcessAsUserW failed: 5 (Accesso negato)`. Causa: `~/.codex/config.toml`
ha `[windows] sandbox = "elevated"` e `sandbox_mode = "danger-full-access"`.
Finche' Codex gira sul default non usa il sandbox; appena riceve `-s read-only`
o `-s workspace-write` attiva il sandbox Windows "elevated", che su questa
macchina non riesce a lanciare processi. Spiega retroattivamente perche' dal
round 2 della revisione Codex diceva di non poter leggere `PLAN_FASE6.md`.

**Un controllo passato per la ragione sbagliata, e vale la pena annotarlo.** Il
probe di verifica ("scrivi un file") era passato, e mi aveva convinto che il
sandbox funzionasse. Codex l'aveva fatto con uno strumento interno, senza shell.
Il build invece la shell la usa. La lezione e' quella gia' scritta il 02/09:
*una prova puo' passare per la ragione sbagliata* — un probe che scrive un file
non dimostra che si possano eseguire comandi.

**Rimedio:** `-c windows.sandbox="unelevated"` insieme a `-s workspace-write`.
Si resta DENTRO il sandbox: Codex scrive solo nel workspace. Il `--yolo` che la
skill prevedeva e' stato bloccato dal classificatore di auto mode, e non e'
stato aggirato — si e' trovato il modo di usare meno permessi, non di piu'.

### Round 1 — Codex build

Terzo lancio: exit 4 a meta', ma il lavoro e' rimasto sul disco. Quattro file,
371 righe: `.gitignore` (allowlist), `statoGiudizio()` + quarantena +
`codaRecupero()` in `esegui-partner.mjs`, `preflightRegistro` +
`recuperaArbitrati` + `--solo-recupero` + lock + commit del registro come atto
proprio in `applica-arbitrato.mjs`, `statoApplicazioneProposta` in
`applica-partner.mjs`. **Zero test.** Suite ferma a 369: codice senza prova.

### Claude's verdict — round 1

Codice buono, proof mancante. La verifica che valeva di piu' l'ho fatta sui dati
veri invece che sulle fixture: `statoGiudizio()` sul registro reale — 254
eventi, 196 chiavi — restituisce **zero `statoSconosciuto`**, con 130
`applicato`, 39 `legacyGiudicato`, 16 `no`, 11 `nonSo`. E' esattamente il quadro
del §6. La macchina a stati che nella revisione 4 sbagliava 115 chiavi su 196
adesso le prende tutte. Resume della STESSA sessione per le sole prove.

### Round 2 — Codex, le 22 prove

24 prove nuove: **393 pass, 0 fail** (da 369). Le 22 dell'Atto 0b piu' quella
del `.gitignore` (0a) e quella del lock (0c). Codex dichiara sei rotture di
controllo verificate.

### Claude's verdict — round 2: verificato di persona

Le affermazioni di Codex valgono come indizio. Ho rifatto io le due rotture che
contano:

| rottura | esito |
|---|---|
| filtro anti-doppione rimesso a `!registro.has(chiave)` | **5 rosse**: prove 1, 2, 5, 6, 8 — esattamente quelle che proteggono il riesame |
| `.gitignore` rimesso a `raccolta/` | **1 rossa**: `Atto 0a - gitignore: versiona solo i tre fatti non ricostruibili` |

Entrambe ripristinate, suite di nuovo verde a 393.

**Il registro vero non e' stato toccato:** 254 righe, 61.596 byte, mtime del
02/09 15:31, identico a prima del build. Le prove girano su alberi temporanei.

**Controllo di qualita' su una prova a campione** (prova 1): due partner, uno con
`si` e uno con `no`, e l'asserzione che *il secondo arrivi al suo esito* —
la regola del 02/09 sulla prova che passa per la ragione sbagliata e' rispettata,
non solo citata. Verifica anche che il valore finisca davvero nel file mete e che
la voce sparisca da **entrambe** le code.

**Fuori portata ma corretto:** Codex ha aggiornato anche `STATO_DEL_SITO.md`, che
non era nel contratto. Il contenuto e' accurato e onesto ("in attesa di
review/commit umano"), quindi resta.

**Nessun commit e' stato fatto da Codex.** Il gate umano viene adesso.
