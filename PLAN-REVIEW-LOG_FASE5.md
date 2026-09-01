# Plan Review Log: Fase 5 — `esegui-partner.mjs`

Act 1 (grill) complete — plan locked with the user 2026-09-01. MAX_ROUNDS=5.
PLAN_FILE=PLAN_FASE5.md

## Decisioni dell'Act 1 (quattro domande, quattro risposte)

1. **Campi applicati da soli:** solo i tre promossi 16/16 dall'arbitrato del
   31/08 (`scadenzeOspitante`, `linkSito`, `notaDisponibilita`).
   `linkCatalogo` E `requisitoLingua` vanno entrambi in coda di arbitrato.
2. **`nonTrovabile`:** non si scrivono in questa fase. Restano calcolati.
3. **Commit e push:** la catena li fa da sola, per blocco, dopo i cancelli di
   sistema e il confronto strutturale delle METE.
4. **Coda di arbitrato:** file JSON in `raccolta/` + pagina da aprire nel
   browser costruita a parte, fuori dal repo.

## Correzioni ai numeri del brief, misurate prima di pianificare

- I partner mai raccolti sono **277**, non 319 (603 con buchi − 326 raccolti).
- 18 di quei 277 non hanno alcun indirizzo nell'accordo: contati a parte.
- `raccolta/partner.json` è del 30/08 e non vede le applicazioni del 31/08-01/09.
- `raccogli-partner.mjs:224` ha una guardia (`daRaccogliere` 603±31) che
  **esplode proprio quando la Fase 5 riesce**: va corretta per prima.

---

## Round 1 — Codex (`gpt-5.6-sol`, effort medium, codex-cli 0.144.5)

VERDICT: REVISE — 14 obiezioni. Sintesi, in ordine di gravità com'erano poste:

1. La ripartenza non funziona: selezionare i partner per «manca indice.json»
   esclude chi è stato raccolto ma non letto (2 casi già presenti).
2. `costruisciPartner()` non è esportata (`raccogli-partner.mjs:209`) e il
   comando riusa `partner.json` se esiste (`:369`): il piano non poteva chiamarla.
3. La guardia proposta era contraddittoria: `daRaccogliere >= 1` e insieme
   «a mete tutte piene non deve lanciare». A lavoro finito zero è corretto.
4. Collisione reale fra codici: `D AACHEN 01` e `D AACHEN01` → stessa cartella.
5. `FONTI-partner.json` viene sovrascritto a ogni applicazione e perde le fonti.
6. «Annulla tutto al primo errore» è falso: il rollback non copre
   `disaccordi.json` né `FONTI-partner.json`, scritti dopo.
7. Un processo ucciso lascia i file a metà: serve scrittura atomica.
8. Le code riproporranno i valori già giudicati e respinti: `statoCampo === "dato"`
   toglie i «sì» ma non i «no».
9. La fusione a chiave nei tre file può lasciare lo stesso dato in due esiti.
10. «PDF eseguito per tutto il blocco» non è definito né persistente.
11. Le cause non sono nove ma dodici, e «raggiunto» conta anche pagine vuote.
12. `--solo` e `--prova` non hanno un contratto eseguibile.
13. Manca un lock: due processi si intreccerebbero prima del push divergente.
14. Il commit non delimita i percorsi: `git add -A` prenderebbe i file non
    tracciati; `raccolta/` è ignorata (`.gitignore:12`).

### Claude's response — verifica prima di accettare

Ho controllato ogni affermazione contro il codice, non contro il testo. **Cinque
erano fatti che non avevo verificato, e uno descrive una perdita già avvenuta:**

- collisione codici: **confermata, 1 caso** (`D AACHEN 01` / `D AACHEN01`);
- cause dei cancelli: **dodici, non nove** — mancavano `livelloAmbiguo`,
  `paginaCambiata`, `codiceSconosciuto`;
- `FONTI-partner.json`: **8 chiavi** a fronte di 176+ campi applicati. La perdita
  è già successa, non è un rischio futuro;
- `costruisciPartner()` **non è esportata**: confermato;
- `.gitignore:12` ignora `raccolta/`: confermato, quindi i soli file da
  committare sono `js/atenei/**/dati-mete*.js`;
- **e una cosa peggiore del punto 8:** i verdetti dell'arbitrato del 01/09 non
  esistono in nessun file del repo — cercati. I 68 «sì» vivono nei dati, i 23
  «no» e i 12 «non so» solo nella pagina fuori dal repo. Senza registro, i
  respinti tornano in coda di sicuro.

**Accolte tutte e 14.** Una sola in **forma ridotta**: il punto 7 chiedeva un
worktree Git separato per preparare e validare; per una ventina di file è più
macchina di quanta ne serva, e la stessa garanzia la dà `.tmp` + rename (atomico
sullo stesso volume). Motivo messo nel piano, non nascosto.

**Aggiunte non chieste da Codex ma emerse verificando:** il registro
`giudizi.json` con la semina ricostruibile dai 103 in `approvati.json`; il
criterio di «raggiunto» ridefinito e riportato **accanto** a quello vecchio;
`codiceCanonico()` come definizione unica in `lib-mete.mjs`; le rotture
deliberate salite da 6 a 10, quattro delle quali nascono da queste obiezioni.

---

## Round 2 — Codex

VERDICT: REVISE — 11 obiezioni nuove. Le sei precedenti dichiarate chiuse
(guardia a zero, export di `costruisciPartner`, fusione esclusiva dei tre esiti,
verifica PDF, percorsi Git espliciti, selezione dal primo passo incompleto).

1. `.tmp` + rename è atomico su **un** file, non su venti: un blackout a metà
   lascia dieci file nuovi e dieci vecchi, e la fotografia in memoria è sparita.
2. Fermarsi davanti alla collisione Aachen, avendo messo la fusione fuori ambito,
   è un fermo **permanente**.
3. I 277 sono record grezzi; i codici canonici sono 276.
4. `daFondere`/`daApplicare` non sono derivabili: una lettura con `campi: {}`,
   un `facolta`, un `uguale` e un `disaccordo` non scrivono nulla da nessuna parte.
5. `applicaPartner({prova:true})` non restituisce la struttura METE simulata:
   il confronto in prova non ha niente su cui girare.
6. Seminare i 23 «no» e i 12 «non so» tutti come `no` inventa un esito; e i 12
   `requisitoLingua` in cache non erano nominati.
7. `giudizi.json` era insieme append-only e a stato mutabile; e l'impronta di un
   oggetto richiede una serializzazione canonica.
8. La fusione di `FONTI-partner.json` impedisce le perdite nuove ma non ripara
   quella già avvenuta.
9. Le cause strutturate non possono nascere nell'orchestratore: il raccoglitore
   ingoia i fallimenti e salva note libere.
10. «Controlla se il lock esiste, poi scrivilo» lascia entrare due processi.
11. «Spingi qualunque commit locale non spinto» può pubblicare un commit di Nicola.

### Claude's response — accolte tutte e undici

Nessuna respinta: sono tutte specifiche e tutte verificabili nel codice.
Verificate direttamente prima di accettare: la forma di ritorno di
`applicaPartner` in prova (`applica-partner.mjs:135-141` — conteggi e
`fileToccati`, nessun contenuto) e il fatto che i 40 file mete siano **tracciati
da Git**.

Modifiche al piano:

- **§2.7 transazione riscritta.** Manifesto persistente `.transazione.json`
  (`preparato`/`commesso`), ripristino dei file mete con `git checkout --` — il
  repo **è** già il backup, e questo è più solido di copie scritte a mano —,
  copie + rename per i soli accessori. Nel giro 1 avevo ridotto la proposta di
  Codex a «rename e basta»: era **troppo**, e il suo controesempio dei dieci
  file su venti lo dimostra. Il worktree Git separato resta non necessario, ma
  per una ragione diversa da quella che avevo scritto.
- **§0b:** i collisi si **isolano** (`collisioni.json`) e la catena prosegue coi
  274 sani, invece di fermarsi per sempre.
- **§0e e §0f nuovi:** l'array `tentativi` strutturato dentro `indice.json` (la
  modifica al raccoglitore che il §5 richiedeva senza dirlo) e
  `preparaApplicazione()` estratta come funzione pura, usata da prova e run vero.
- **§0c:** aggiunta la ricostruzione **all'indietro** delle fonti, più
  `fonti-irrecuperabili.json`.
- **§2 selezione:** `avanzamento.json` con l'impronta della lettura e le fasi
  concluse; i quattro esiti che non scrivono niente contano come **conclusi** e
  sono riportati per esito.
- **§2 lock:** `fs.openSync(lock, "wx")`. **§2 riavvio:** si spinge solo il
  commit il cui hash sta nel diario della pipeline.
- **§3 registro:** `giudizi.jsonl`, log di **eventi** con stato ricostruito,
  impronta su serializzazione canonica; semina a due esiti onesti (`applicato`
  e **`legacyGiudicato`**, che non inventa il verdetto perduto), estesa ai 12
  `requisitoLingua`. 115 voci.
- **§6 rotture: da 10 a 14**, le quattro nuove nate da queste obiezioni
  (blackout a metà scrittura, lock non atomico, push di un commit estraneo,
  partner senza proposte che deve risultare concluso).

---

## Round 3 — Codex

VERDICT: REVISE — 8 obiezioni + un refuso. Le altre del giro 2 dichiarate chiuse.

1. Guardia e isolamento Aachen incompatibili; e l'ordine `0a → 0b` è circolare,
   perché `0a` usa la normalizzazione che `0b` introduce.
2. L'esclusione dei collisi era dichiarata ma non concreta: `applicaPartner`
   legge tutto `approvati.json` se non gli si passa niente.
3. `avanzamento.json` nasce vuoto: le 259 letture esistenti tornerebbero
   `daFondere`, rifacendo il lavoro dichiarato intoccabile.
4. Crash **subito dopo `git commit`**: manifesto `preparato` + `HEAD` avanzata →
   `git checkout` ripristina dalla HEAD nuova, gli accessori dalle copie vecchie.
   Di nuovo metà e metà, per la strada opposta.
5. Il manifesto era armato prima che i backup fossero completi; e serve
   `esisteva` per sapere cosa **cancellare** invece di ripristinare.
6. I conteggi storici erano contraddittori (68/23/12 poi 23/4). Misura vera:
   103 proposte, 76 col valore già pubblicato, 27 vuote. E «campo pieno» deve
   voler dire «valore uguale».
7. Il recupero di un lock abbandonato conserva una corsa più rara.
8. Aritmetica dei partner ancora sbagliata.
Refuso: «le dieci rotture» seguito da quattordici voci.

### Claude's response — accolte tutte e otto, e sull'aritmetica avevamo torto entrambi

Rimisurato invece di argomentare:

- **6 confermato esattamente:** `isDeepStrictEqual` fra proposta e valore
  pubblicato dà **76 uguali, 27 vuoti, 0 divergenti**. I «68 sì + 8 motori di
  ricerca» del diario fanno 76: diario e file coincidono. Registro: 76
  `applicato` + 27 `legacyGiudicato` + 12 di lingua = 115.
- **8: né i miei numeri né quelli di Codex.** Contando le chiavi canoniche fra i
  partner mai raccolti: **276 record, 276 chiavi, ZERO collisioni**; 259 con un
  indirizzo, 17 senza. Il «277» nasceva da `603 − 326`, che sottrae *cartelle* da
  *record* — lo stesso errore di categoria del 319 del brief. E il «275 sani /
  257 lavorabili» di Codex parte dal 276 canonico ma toglie una collisione che
  in quell'insieme non c'è.
- **E la collisione non è dove l'avevo messa.** `DAACHEN01` contiene già 25
  pagine e una lettura: il danno è **avvenuto**, non incombente, e sta nel ramo
  lettura→applicazione. Attenuante misurata: sono lo **stesso ateneo** (RWTH
  Aachen, stesso dominio, 2+5 mete), quindi un codice duplicato nei dati, non due
  università confuse. Questo abbassa la gravità ma non toglie il difetto.

Modifiche: ordine `0b → 0a` (era circolare); guardia dell'unicità applicata
**dopo** aver separato i collisi dichiarati; `approvati` filtrato passato
esplicitamente ad `applicaPartner`; **§0g nuovo**, la migrazione di
`avanzamento.json` con `avanzamento-ambigui.json` e stop sugli ambigui;
manifesto con `baseHead`, armato **dopo** le copie, accessori con `esisteva`, e
la regola `HEAD === baseHead` → rollback / `HEAD` avanzata → **completa**;
recupero del lock serializzato da `.esegui.recupero.lock`; refuso corretto.
**Rotture: da 14 a 18**, le quattro nuove sono i casi che queste obiezioni
descrivono.

---

## Round 4 — Codex

Aritmetica **verificata da Codex sui dati correnti e confermata**: 276 record,
276 chiavi, 0 collisioni, 259 con indirizzo, 17 senza; la collisione Aachen sta
fra i già letti ed è lo stesso ateneo.

VERDICT: REVISE — 5 obiezioni + tre numeri vecchi rimasti nel testo.

1. `git checkout -- <percorsi>` ripristina **dall'indice**: morto fra `git add`
   e `git commit`, l'indice ha già i file nuovi e il ripristino è a vuoto.
2. «`HEAD` avanzata» non dimostra che sia avanzata **per il commit della
   pipeline**: potrebbe essere un commit di Nicola fatto dopo il blackout.
3. La migrazione dà `fuso` se il **codice** compare in un esito: nasconde una
   fusione parziale (lettura con tre campi, uno mai fuso).
4. `--prova` non vieta esplicitamente i checkpoint `fuso`/`applicato`: una prova
   farebbe **saltare** quel lavoro al run vero.
5. Il lock di recupero può restare orfano e bloccare ogni riavvio.

### Claude's response — accolte tutte e cinque

Il punto 1 è un errore mio di semantica Git, non una sfumatura: `checkout --`
legge l'indice. Corretto in
`git restore --source=<baseHead> --staged --worktree -- <percorsi>`.
Il punto 2 diventa **tre condizioni congiunte** — `baseHead` genitore di `HEAD`,
percorsi esattamente quelli del manifesto, identificativo di transazione nel
messaggio — e se una sola non regge la catena si ferma senza né ripristinare né
pubblicare. Il 3 diventa «ogni coppia `(codice, campo)` esattamente una volta nei
tre esiti». Il 4 vieta i checkpoint in prova, con la ragione scritta: una prova
che marca il lavoro come fatto è il danno peggiore che una prova possa fare.
Il 5 dà al lock di recupero PID, identificativo e scadenza.
Corretti anche i tre numeri vecchi rimasti (274 / 277 / 18).

---

## Round 5 — Codex (ultimo, MAX_ROUNDS)

VERDICT: REVISE — 2 obiezioni, ed esplicitamente «non vedo altri nuovi problemi
materiali». I tre numeri del giro 4 confermati corretti.

1. Il piano prescriveva ancora **due rollback Git incompatibili**: la procedura
   giusta (`git restore --source=<baseHead> --staged --worktree`) e, poche righe
   dopo, un residuo `git checkout -- <percorsi>` con la motivazione sbagliata.
2. Il lock di recupero **riproduce la corsa che doveva chiudere**: due processi
   possono riconoscerlo scaduto entrambi.

### Claude's response — accolte entrambe. Fine del ciclo.

1. `git checkout --` **eliminato dal piano**, con una riga che dice che non deve
   ricomparire e perché (legge l'indice). Corretto anche nella tabella delle
   decisioni, dov'era rimasto.
2. Accolta nella forma che Codex stesso indica come sicura in assenza di un
   compare-and-swap vero: **niente rimozione automatica**. Davanti a un lock di
   recupero orfano la catena si ferma e stampa il comando da dare a mano.
   È una rinuncia deliberata, scritta come tale nel piano: ogni rimozione
   automatica sarebbe lo stesso errore un piano più in basso.

**Esito del ciclo:** cinque giri, **40 obiezioni** (14 + 11 + 8 + 5 + 2), tutte
verificate contro il codice e **tutte accolte** — una sola in forma diversa da
quella proposta (il worktree Git del giro 1, sostituito da manifesto + `git
restore`, per una ragione che il giro 2 ha poi costretto a riscrivere).
Nessuna respinta.

Non è arrivato un `VERDICT: APPROVED` formale: il tetto dei cinque giri è caduto
sullo stesso turno in cui Codex ha dichiarato che non restavano altri problemi
materiali oltre ai due applicati qui sopra. **Non si finge una convergenza che
non c'è stata**: quello che c'è è un piano senza obiezioni aperte note, non un
piano approvato.

Cosa il ciclo ha cambiato davvero, in una riga: ha trovato **una perdita di dati
già in corso** (`FONTI-partner.json`, 8 chiavi per 176+ campi), **una collisione
di codice già attiva** (i due Aachen su una sola cartella), **un errore di
categoria nei conteggi** che avevo ereditato dal brief (cartelle sottratte a
record) e **un errore di semantica Git** nel mio piano di ripristino.
