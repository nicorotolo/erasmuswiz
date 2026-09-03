# Plan Review Log: ErasmusWiz — Fase 7 (la mappatura che non lascia mete mute)

Atto 1 (grigliatura) completato — piano bloccato con Nicola il 2026-09-03.
PLAN_FILE=`PLAN_FASE7.md` · MAX_ROUNDS=5.

## Atto 1 — le nove decisioni prese con l'utente

1. **Traguardo** = «nessuna meta muta»: o il dato, o il motivo. Non copertura 100%.
2. **Due frasi**, forza secondo l'evidenza: «non lo pubblica» vs «non l'abbiamo ancora trovato».
3. **Veto dei PDF totale sul partner** (misurato: 801 mete FORTE, 915 DEBOLE).
4. **Accettazione automatica** solo dopo aver portato la classe «coppia testo-link» sopra i 100 casi arbitrati.
5. **Si parte dai link già in casa** (410 mete) invece che da L4 (264 mete).
6. **Aggiunta mirata**, non riraccolta: evita l'azzeramento del testo dei PDF.
7. **La pagina si porta dietro il motivo** e le motivate si inviano per prime, fuori concorso.
8. **Si ripara la macchina**, non i dati: il motivo entra nella raccolta normale.
9. **La validazione degli indirizzi va prima e va da sola**, con i 15 casi del 30/08 come regressione.

Misure fatte durante la grigliatura e non presenti nei documenti precedenti:
1.353 delle 1.407 mete senza `linkCatalogo` sono su partner `fatto`; 380/585 partner
al tetto delle 25 pagine; 93 partner senza catalogo hanno un link-catalogo mai aperto
(410 mete); 3.491 link mai aperti sui quattro campi deboli; `nonTrovabile` non è letto
da nessuna riga di front-end.

## Round 1 — Codex (`gpt-5.6-sol`, thread 01a066c5-3e8b-73c1-aa0d-3726139bf48e)

Il piano non è ancora implementabile in sicurezza. Ho trovato questi problemi materiali; non ho modificato alcun file.

1. **DEBOLE blocca le ricerche future.** Il piano salva `forza: "noncercato"` dentro `nonTrovabile`, ma l’attuale `statoCampo()` considera coperta qualunque voce con data e fonte; quindi il partner diventa `fatto` prima dei Passi 4 e 5 e non verrà più cercato ([lib-mete.mjs](C:/erasmuswiz-mappatura/scripts/lib-mete.mjs:77), [PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:219)).  
   **Fix:** trattare `forza: "noncercato"` come campo ancora mancante, oppure mostrare la frase prudente nel front-end senza salvarla come `nonTrovabile`.

2. **La rilettura proposta non può partire.** Anche facendo tornare il partner a `daLeggere`, `leggiPartner()` salta incondizionatamente ogni codice che possiede già `letture/<codice>.json` ([leggi-partner.mjs](C:/erasmuswiz-mappatura/scripts/leggi-partner.mjs:211)).  
   **Fix:** definire una rilettura versionata che archivi/sostituisca atomicamente la vecchia lettura e invalidi coerentemente `fuso`, `applicato` e `improntaLettura`.

3. **“L’università non lo pubblica” non è dimostrabile con questa scansione.** Aver letto al massimo 33 pagine selezionate e nessun PDF fallito non prova l’assenza dell’informazione nell’intero sito; il FORTE produrrebbe affermazioni ingiustificate ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:215)).  
   **Fix:** usare sempre “Non trovato nelle fonti consultate il…” e riservare “non pubblica” esclusivamente a una dichiarazione ufficiale esplicita.

4. **Il classificatore dei motivi descritto non esiste.** `PAROLE` contiene gruppi di punteggio anonimi e non contiene una famiglia per `notaDisponibilita`; inoltre un link può riguardare più campi, mentre `motivo` ammette un solo valore ([raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs:14), [PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:145)).  
   **Fix:** introdurre quattro classificatori separati e testati e salvare `motivi: []`, conservando tutti i motivi quando lo stesso URL compare più volte.

5. **Il recupero non è realmente riavviabile.** Le pagine e `indice.json` vengono scritti separatamente e non atomicamente; un arresto può lasciare file orfani, numerazioni riutilizzate o un indice incompleto ([raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs:440)).  
   **Fix:** eseguire il recupero sotto lo stesso lock della catena e usare file temporanei più rename atomico, URL canonici e un journal/checkpoint per partner.

6. **La protezione SSRF è incompleta e vulnerabile al DNS rebinding.** Risolvere un hostname, validarlo e poi lasciarlo risolvere nuovamente a `fetch` non garantisce che la richiesta usi l’IP controllato; inoltre il piano omette almeno IPv4 `127/8`, IPv6 link-local `fe80::/10`, indirizzi IPv4-mapped, indirizzi non specificati e porte pericolose ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:119)).  
   **Fix:** validare e fissare l’IP effettivamente usato per ogni salto, bloccare tutte le classi non pubbliche e limitare schema, credenziali e porte a una policy esplicita.

7. **Redirect sicuro non significa redirect conforme a robots.txt.** Seguendo manualmente un redirect verso un nuovo host, il piano valida l’indirizzo ma non richiede di consultare le regole robots del nuovo host prima della richiesta.  
   **Fix:** a ogni cambio di origine validare l’URL, caricare il relativo `robots.txt` e controllarne il permesso prima di seguire il redirect.

8. **Un link pubblico esterno può causare crawl arbitrario e consumo di memoria.** I link salvati non sono filtrati per dominio, mentre `scaricaUnaVolta()` carica l’intera risposta con `arrayBuffer()` prima di imporre qualsiasi limite ([raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs:136)).  
   **Fix:** ammettere solo domini dell’ateneo o fornitori di cataloghi esplicitamente autorizzati e interrompere lo stream oltre limiti distinti per HTML/PDF prima di accumularlo in memoria.

9. **La classe candidata all’accettazione automatica non è tracciabile.** `origine` viene calcolata dai cancelli, ma non è inserita nella proposta né nella coda di arbitrato, che conserva solo valore, citazione, fonte e impronta ([esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:193)).  
   **Fix:** salvare nella proposta e nel giudizio una `classeEvidenza` versionata, calcolata deterministicamente e inclusa nell’impronta.

10. **La soglia 90/100 è troppo debole per dati ad alto impatto.** Cento casi correlati per partner o piattaforma non dimostrano un errore reale sotto il 10%; inoltre controllare 20 ingressi dopo averne pubblicati 200 lascia fino a 180 valori non verificati e il piano non prevede rollback ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:201)).  
    **Fix:** campionare partner e domini indipendenti, richiedere un limite inferiore di confidenza prestabilito e tenere ogni lotto in quarantena finché il campione non passa, con rollback dell’intero lotto.

11. **L’assenza è dedotta per partner ma scritta su tutte le mete.** L’applicatore propaga `nonTrovabile` a ogni occorrenza dello stesso codice Erasmus, anche se lingua e disponibilità possono cambiare per facoltà o corso ([applica-partner.mjs](C:/erasmuswiz-mappatura/scripts/applica-partner.mjs:200)).  
    **Fix:** aggiungere livello e ambito anche alle evidenze di assenza e propagare a tutte le mete soltanto un’assenza dimostrata a livello di ateneo.

12. **Mancano migrazione e validazione dello schema.** Esistono marcatori storici senza `forza`, mentre report e `statoCampo()` non distinguono FORTE e DEBOLE; il criterio “zero mete mute” potrebbe quindi risultare verde con dati ambigui ([report-copertura-mappatura.mjs](C:/erasmuswiz-mappatura/scripts/report-copertura-mappatura.mjs:86)).  
    **Fix:** definire una versione dello schema, una politica esplicita per i record legacy e validatori che rifiutino `forza`, fonte o data mancanti/incoerenti prima della pubblicazione.

VERDICT: REVISE
### Claude's response — Round 1

**Verificati nel codice prima di accettare** (non presi per buoni):
- `lib-mete.mjs:73-78` — `statoCampo()` torna `nonTrovabile` per qualunque voce con fonte e data. ✔
- `raccogli-partner.mjs:286` — `campiMancanti` esclude i campi in stato `nonTrovabile`. ✔ **Peggio di come descritto:** non è solo che il partner diventa `fatto`, è che la frase DEBOLE avrebbe *chiuso* la ricerca sulle 1.186 mete a cui prometteva di continuarla.
- `leggi-partner.mjs:211` — `if (fs.existsSync(fuori) || …) continue;` salta incondizionatamente ogni partner con una lettura esistente. ✔
- `applica-partner.mjs:200-210` — `nonTrovabile` propagato a ogni occorrenza del codice, in tutti i file, quindi in tutte le facoltà. ✔
- `raccogli-partner.mjs:14-23` — `PAROLE` non ha alcuna famiglia per `notaDisponibilita`. ✔

**Accolti in pieno:** 1 (con una correzione migliore di quella proposta: DEBOLE non si scrive affatto, è resa dal front-end su campo vuoto — elimina il modo di fallire invece di gestirlo), 2 (lettura versionata + archiviazione + invalidazione coerente di `fuso`/`applicato`/`improntaLettura`), 4 (`motivi: []` al plurale, quattro classificatori provati, famiglia nuova per la disponibilità), 6 (elenco esteso delle classi rifiutate, politica delle porte, credenziali nell'URL, fissaggio dell'IP per salto contro il DNS rebinding), 7 (`robots.txt` a ogni cambio di origine), 9 (`classeEvidenza` versionata, deterministica, nell'impronta), 10 (campione indipendente, limite inferiore di confidenza ≥ 0,90, lotti in quarantena con ritiro del lotto intero), 11 (`livello`/`ambito` sull'evidenza di assenza; propagazione a tutte le mete solo se dimostrata a livello di ateneo), 12 (`versioneSchema`, riqualifica dei 165 marcatori storici, validatore che rifiuta prima della pubblicazione).

**Accolto in forma ridotta:** 5 — lock della catena, file temporaneo + `rename` atomico, URL canonici, checkpoint per partner. Scartato il «journal»: è più macchinario di quanto il problema richieda, e il checkpoint per partner copre il caso reale (interruzione fra due partner).

**Accolto a metà:** 3 — Codex ha ragione che «l'università non lo pubblica» non è dimostrabile da ~33 pagine, e la formulazione cambia in «Cercato sul sito ufficiale il <data> — non risulta pubblicato». Ma **i due stati restano**: non servono solo a parlare allo studente, servono a decidere dove tornare a cercare, e collassarli in uno perderebbe quella distinzione. Cambia la parola, non la struttura. ⚠︎ Da segnalare a Nicola: modifica la formulazione che aveva scelto nella grigliatura.

**Respinto, con ragione a verbale:** 8, la metà dell'elenco chiuso di domini ammessi. I cataloghi vivono spesso su un dominio diverso da quello dell'ateneo, e il ramo «dominio cambiato» del 30/08 ha recuperato **15 partner** proprio uscendo dal dominio: un elenco chiuso li ri-romperebbe: regressione misurabile in cambio di una sicurezza che il passo 0 già fornisce. Accolta invece l'altra metà: il limite di corpo applicato **a flusso** e non dopo `arrayBuffer()`.

## Round 2 — Codex

La revisione risolve gran parte dei rilievi precedenti, ma restano alcuni problemi materiali. Non ho modificato file.

Rilievi precedenti risolti: DEBOLE non chiude più la ricerca; rilettura e stato vengono invalidati insieme; classificatori e motivi plurali sono espliciti; SSRF, redirect, robots e limiti del corpo sono coperti; ambito dell’assenza, migrazione e validazione dello schema sono previsti. Il rilievo 8 non viene riaperto, ma segnalo una contraddizione interna collegata.

1. **Il criterio d’uscita del Passo 1 è temporalmente impossibile.** `linkCatalogo` richiede arbitrato umano, quindi la copertura pubblicata non può salire da 580 a 894 prima del Passo 2; inoltre il resoconto del Passo 1 pretende già le bocciature di Nicola ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:237)).  
   **Fix:** al Passo 1 misurare proposte valide e rendimento della raccolta, spostando copertura ≥45% e bocciature umane dopo il Passo 2.

2. **La nuova impronta è incompatibile con il registro esistente.** Oggi giudizi e cancello applicativo usano `hash(valore)`; includere `classeEvidenza` cambierebbe le chiavi e renderebbe irriconoscibili i giudizi storici ([esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:189), [esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:576)).  
   **Fix:** introdurre una distinta `improntaDecisione = hash({valore, classeEvidenza})`, con migrazione o compatibilità esplicita per le impronte legacy.

3. **Non è definito come l’automatismo superi il cancello umano.** Anche dopo la promozione della classe, `applicaEControlla()` rifiuterà ogni `linkCatalogo` senza evento `si` nel registro; indebolire genericamente quel cancello sarebbe pericoloso.  
   **Fix:** registrare un evento verificabile `siAutomatico` legato a classe, versione e lotto approvato, ammesso soltanto dal ramo di quarantena.

4. **Il campione di controllo da 20 non ha una regola con cui possa passare.** Se si applica ancora Wilson con limite inferiore ≥0,90, persino 20/20 corretti producono un limite inferiore di circa 0,84; se si usa un’altra soglia, il piano non la specifica ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:273)).  
   **Fix:** fissare prima numerosità e soglia del controllo, insieme a metodo e seme riproducibile di campionamento.

5. **Il limite “non più di N” lascia incompleta la misura iniziale.** `N` non è deciso e non è specificato come classificare domini equivalenti o piattaforme condivise.  
   **Fix:** sostituire `N` con un numero concreto e definire una chiave di stratificazione deterministica prima dell’arbitrato.

6. **Lo schema attuale non può rappresentare l’ambito dell’assenza.** `nonTrovati` è ancora `{campo: numeroPagina}` e l’applicatore ne ricava soltanto pagina, data e URL; non esistono `livello` e `ambito` ([leggi-partner.mjs](C:/erasmuswiz-mappatura/scripts/leggi-partner.mjs:143), [applica-partner.mjs](C:/erasmuswiz-mappatura/scripts/applica-partner.mjs:144)).  
   **Fix:** specificare `nonTrovati[campo] = {paginaCitata, livello, ambito}` e aggiungere validazione, prompt, cancelli e test prima di generare FORTE.

7. **`partner === fatto` non è una prova sufficiente per FORTE.** Lo stato significa che la catena ha terminato, non che il campo sia stato cercato esaustivamente; può essere `fatto` anche dopo proposte bocciate o materiale escluso ([esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:332)).  
   **Fix:** richiedere un `nonTrovato` esplicito della lettura corrente, con ambito valido, nessuna proposta concorrente e impronta completa del materiale consultato.

8. **Il rilievo 3 è risolto solo nella frase, non ancora nella prova.** “Non risulta pubblicato” è più prudente, ma la fonte mostrata è una singola pagina mentre la conclusione deriva da un insieme selezionato di pagine.  
   **Fix:** scrivere “Non trovato nelle fonti consultate” e collegare un riepilogo verificabile delle fonti, oppure restringere esplicitamente la frase alla pagina indicata.

9. **L’invalidazione usa un insieme di impronte troppo debole.** L’impronta corrente copre il testo ma non l’URL; due pagine con testo identico ma fonti diverse possono sembrare la stessa selezione, e un insieme perde ordine e duplicati ([leggi-partner.mjs](C:/erasmuswiz-mappatura/scripts/leggi-partner.mjs:61)).  
   **Fix:** confrontare l’impronta dell’input ordinato completo `{url, file, improntaContenuto, motivi, versionePrompt}` anziché il solo insieme delle impronte.

10. **La normalizzazione proposta confonde URL potenzialmente diversi.** `/x` e `/x/` possono essere risorse differenti e non devono essere deduplicati automaticamente ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:209)).  
    **Fix:** normalizzare schema, host, porta predefinita, frammenti e parametri di tracciamento, conservando la barra finale del percorso salvo redirect osservato.

11. **Il ripiego di sicurezza contraddice la decisione registrata.** Il piano respinge un elenco chiuso di domini, ma se il fissaggio IP fallisce propone proprio “domini approvati a mano” ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:150), [PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:391)).  
    **Fix:** rendere il fissaggio IP un prerequisito non negoziabile oppure scegliere un ripiego tecnico equivalente che non reintroduca una allowlist.

12. **La reversibilità futura di FORTE non è raggiungibile automaticamente.** Una volta scritto `nonTrovabile`, il campo esce da `campiMancanti`; quindi una successiva pubblicazione dell’ateneo non verrà cercata senza un comando speciale.  
    **Fix:** definire scadenza annuale dei marcatori FORTE o una modalità di aggiornamento che li rimetta periodicamente tra i campi da cercare.

13. **La prova front-end copre troppo poco.** Una meta FORTE e una DEBOLE non verificano i cinque componenti differenti: lingua, scadenze, sito, catalogo e disponibilità hanno rendering separati.  
    **Fix:** aggiungere una matrice automatizzata dei cinque campi × dato/FORTE/DEBOLE, almeno su viewport desktop e mobile.

VERDICT: REVISE
### Claude's response — Round 2

Codex conferma risolti tutti i rilievi del giro 1. Dei 13 nuovi, **accolti 13**,
due in forma diversa da quella proposta. Verificati nel codice prima di accettare:
`esegui-partner.mjs:190` e `:576` (la chiave del registro è `hash(valore)`) ·
`esegui-partner.mjs:570-585` (il cancello rifiuta senza `si` nel registro) ·
`leggi-partner.mjs:143` (`nonTrovati` è `{campo: numeroPagina}`, senza livello né
ambito) · `leggi-partner.mjs:61` (`impronta: hash(brano)` non include l'URL).

**I tre che cambiano davvero il piano:**
- **(1) Il criterio d'uscita del passo 1 era temporalmente impossibile.** Chiedeva
  copertura al 45% e bocciature umane a un passo che precede l'arbitrato. Spostato:
  il passo 1 misura **proposte valide ≥ 300**, la copertura vive nel passo 2.
- **(4) Il campione di controllo non aveva un modo di passare.** Con Wilson 95% e
  limite ≥ 0,90, nemmeno 20/20 passa (~0,84). Due soglie distinte: 0,90 per
  promuovere una classe, 0,75 per sorvegliare un lotto.
- **(7) `partner === fatto` non prova l'assenza.** Un partner è `fatto` anche dopo
  una proposta *bocciata dai cancelli* — cioè un caso in cui il dato era nel
  materiale. FORTE ora richiede cinque condizioni, non una.

**Conseguenza di scopo, accettata e scritta:** poiché `nonTrovati` non sa esprimere
`livello`/`ambito` (rilievo 6), le letture già fatte **non possono generare FORTE**
per `requisitoLingua` e `notaDisponibilita`. FORTE parte sui tre campi d'ateneo;
gli altri due arrivano con le riletture. Meglio dirlo ora che scoprirlo applicando.

**Due accolti in forma diversa da quella proposta:**
- **(2)** Codex proponeva `improntaDecisione` come sostituzione; qui è
  un'**aggiunta accanto** a `improntaProposta`, che resta intatta. Cambiare la
  chiave romperebbe il riconoscimento dei 282 giudizi storici, che è esattamente
  ciò che l'Atto 0a di Fase 6 era servito a proteggere.
- **(8)** Accolta la sostanza (una fonte sola non dimostra una conclusione tratta
  da un insieme), non la formula: la frase diventa «Non trovato nelle N fonti
  ufficiali consultate il <data>» con l'elenco apribile.

**(11) è il rilievo più utile del giro**, perché coglie una contraddizione mia: il
piano respingeva l'elenco chiuso di domini al punto 9 e poi lo riproponeva come
ripiego di sicurezza al passo 0. Il ripiego è stato sostituito con uno tecnico
(connessione all'IP validato con `Host` e SNI a mano) e il fissaggio dell'IP è
diventato non negoziabile.

## Round 3 — Codex

La revisione affronta sostanzialmente i 13 rilievi precedenti. Restano però cinque problemi materiali, quattro dei quali nuovi.

1. **Il criterio del Passo 1 è matematicamente irraggiungibile.** La lettura produce un solo oggetto `linkCatalogo` per partner; su 93 partner possono quindi esistere al massimo 93 proposte, non 300 ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:257), [leggi-partner.mjs](C:/erasmuswiz-mappatura/scripts/leggi-partner.mjs:235)).  
   **Fix:** esprimere il criterio come numero di mete rappresentate dalle proposte, oppure fissare una soglia di proposte uniche non superiore a 93.

2. **La regola Wilson contiene ancora una contraddizione aritmetica.** Con Wilson bilaterale al 95% e soglia 0,75, 19/20 ha limite inferiore circa 0,764 e passa già; non richiede un secondo campione come afferma il piano ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:304)).  
   **Fix:** scegliere la regola desiderata e bloccarla con test di confine espliciti, per esempio 18/20 fallisce e 19/20 passa, oppure alzare la soglia e definire come combinare i due campioni.

3. **L’impronta aggiuntiva preserva lo storico, ma non risolve le collisioni decisionali.** Due proposte con uguale valore ma diversa `classeEvidenza` condividono ancora la stessa chiave del registro: un precedente `no` umano e un nuovo `siAutomatico` finirebbero nella stessa sequenza, che l’attuale macchina a stati non ammette; viceversa un vecchio `si` potrebbe autorizzare una nuova classe senza verificarne `improntaDecisione` ([esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:109), [esegui-partner.mjs](C:/erasmuswiz-mappatura/scripts/esegui-partner.mjs:155)).  
   **Fix:** mantenere intatto il registro umano e creare un registro di lotti automatici separato, indicizzato da codice, campo e `improntaDecisione`, definendo esplicitamente la precedenza dei verdetti umani.

4. **Catalogo e scadenze non sono “d’ateneo per natura”.** Il codice attuale li considera campi stretti proprio perché possono essere specifici di facoltà; usare le vecchie letture prive di ambito per produrre FORTE contraddice questo cancello ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:379), [cancelli.mjs](C:/erasmuswiz-mappatura/scripts/cancelli.mjs:15)).  
   **Fix:** non generare FORTE da alcuna vecchia lettura senza ambito esplicito; per quei casi richiedere una rilettura col nuovo schema o mantenerli DEBOLE.

5. **Il front-end non possiede le fonti necessarie alla nuova frase.** Il piano vuole mostrare “N fonti” e un elenco apribile, ma il marcatore dati conserva ancora una sola `fonte`; i file di raccolta non fanno parte dei dati statici pubblicati ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:384), [applica-partner.mjs](C:/erasmuswiz-mappatura/scripts/applica-partner.mjs:146)).  
   **Fix:** aggiungere al marcatore una lista pubblicabile `fontiConsultate: [{url, titolo}]`, validarla e includerla nella migrazione e nelle prove front-end.

6. **“Fonte ufficiale” non è ancora verificabile per i domini esterni.** Il piano conserva i motivi della visita, ma non il collegamento padre che ha portato dalla pagina dell’ateneo al catalogo esterno; senza questa provenienza un URL esterno non può essere auditato come ufficialmente indicato dall’università.  
   **Fix:** salvare per ogni pagina motivata `scopertaDa`, testo del link e catena dei redirect, includendo tale provenienza nell’impronta del materiale.

VERDICT: REVISE
### Claude's response — Round 3

**Accolti tutti e sei.** Due erano errori aritmetici miei, due contraddicevano
codice esistente, due erano lacune vere. Verificati prima di accettare:
`leggi-partner.mjs:235` (`campi` è un oggetto per nome di campo → **una proposta
per campo per partner**) · `cancelli.mjs:15` (`CAMPI_STRETTI` contiene
`linkCatalogo` e `scadenzeOspitante`) · `esegui-partner.mjs:109` e `:155`
(macchina a stati del giudizio) · `applica-partner.mjs:146` (una sola `fonte`).

- **(1)** «≥ 300 proposte» era impossibile: 93 partner producono al più 93
  proposte. Ora: **≥ 60 proposte valide che rappresentino ≥ 250 mete** — la
  copertura si misura in mete, non in proposte.
- **(2)** La regola Wilson si contraddiceva ancora: 19/20 dà limite inferiore
  ≈ 0,764 e passa da solo, quindi il «secondo campione» non serviva mai. Regola
  unica, con prove di confine: **18/20 fallisce (≈0,699), 19/20 passa (≈0,764)**.
- **(3)** Il rilievo più fine del giro. L'impronta aggiuntiva salvava lo storico
  ma non le collisioni: stesso valore e classe diversa condividono la chiave, e un
  vecchio `si` umano avrebbe autorizzato una classe mai vista. Ora **due registri
  separati** (`giudizi.jsonl` umano intatto, `lotti-automatici.jsonl` indicizzato
  da `improntaDecisione`) con **precedenza unidirezionale del verdetto umano**.
- **(4)** Contraddicevo un cancello deciso dall'arbitrato di Nicola il 31/08:
  `linkCatalogo` e `scadenzeOspitante` **sono** campi stretti. Cade l'idea dei
  «campi d'ateneo per natura», e con essa la scorciatoia di generare FORTE dalle
  letture vecchie. **Conseguenza sull'ordine, che vale più del rilievo:**
  l'estensione di `nonTrovati` si sposta **nel passo 1, prima delle riletture** —
  altrimenti si rileggono ~180 partner per doverli rileggere di nuovo.
- **(5)** La frase «N fonti consultate» chiedeva dati che il marcatore non ha e
  che il sito statico non vede. Aggiunta `fontiConsultate`, **con un tetto di 5 +
  `fontiTotali`**: i file dati stanno già sui 109 KB e li scarica il browser dello
  studente.
- **(6)** Aggiunta `scopertaDa` + testo del link + catena dei redirect, nel
  passo 1. Non è solo audit: è il dato da cui si calcola la `classeEvidenza` del
  passo 2, che finora sarebbe stata ricostruita a naso.

## Round 4 — Codex

I sei rilievi precedenti sono stati affrontati correttamente. Restano quattro problemi nuovi, due dei quali bloccanti per sicurezza e affidabilità.

1. **La protezione SSRF usa ancora una lista incompleta di indirizzi vietati.** Mancano multicast e varie reti non instradabili o riservate, per esempio IPv4 `224/4`, `240/4`, `198.18/15` e IPv6 `ff00::/8`; dichiarare l’elenco “per esteso” crea una falsa garanzia ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:135)).  
   **Fix:** invertire la regola e accettare esclusivamente indirizzi classificati come global-unicast secondo le tabelle IANA, con prove per multicast, riservati, documentazione e benchmarking.

2. **I redirect manuali possono aggirare il limite per dominio.** Oggi `Limitatore` assegna il turno usando l’hostname dell’URL iniziale; se la catena manuale viene eseguita dentro quella chiamata, il nuovo host non entra nel proprio contatore e può ricevere richieste concorrenti senza la pausa prevista ([raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs:105), [raccogli-partner.mjs](C:/erasmuswiz-mappatura/scripts/raccogli-partner.mjs:134)).  
   **Fix:** far passare ogni singolo salto, compreso `robots.txt`, attraverso `Limitatore.esegui()` usando l’hostname di destinazione e aggiungere una prova su due redirect concorrenti verso lo stesso host.

3. **Il nuovo registro automatico sarebbe ignorato da Git.** `.gitignore` esclude tutto `raccolta/*` salvo tre eccezioni e non include `lotti-automatici.jsonl`; si perderebbero decisioni automatiche già applicate, ripetendo il problema appena risolto per i giudizi umani ([.gitignore](C:/erasmuswiz-mappatura/.gitignore:14), [PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:313)).  
   **Fix:** dichiarare il registro automatico versionato, protetto dallo stesso lock e incluso nella medesima transazione atomica che applica o ritira il lotto.

4. **Manca la macchina a stati del registro automatico.** Il piano introduce quarantena, approvazione, ritiro, `siAutomatico` e applicazione, ma non definisce transizioni valide, idempotenza, recupero dopo interruzione né gestione dell’ultimo lotto con meno di 100 proposte ([PLAN_FASE7.md](C:/erasmuswiz-mappatura/PLAN_FASE7.md:346)).  
   **Fix:** specificare gli stati e le transizioni del lotto, includendo ripetizioni innocue, recupero da crash, lotto parziale e divieto di applicazione prima dello stato `approvato`.

5. **`nonSo` non ha un trattamento statistico dichiarato.** Escluderlo o sostituirlo finché si raggiungono 100 giudizi determinati migliorerebbe artificialmente il tasso e violerebbe il campione prefissato.  
   **Fix:** stabilire prima della misura che solo `si` è un successo e che `no` e `nonSo` sono insuccessi, senza sostituzione del caso campionato.

VERDICT: REVISE
### Claude's response — Round 4

**Accolti tutti e cinque.** Verificati prima di accettare: `.gitignore:11-17`
(`raccolta/*` con tre eccezioni) · `raccogli-partner.mjs:105` (il limitatore
prende il turno dall'hostname dell'URL di partenza).

- **(1)** Accolta l'inversione della regola, che è meglio di quanto avessi
  scritto: due giri hanno prodotto due elenchi di divieti e il secondo era ancora
  incompleto. Ora si ammette **solo global unicast secondo IANA** — un divieto
  dimenticato non è più un buco.
- **(2)** Difetto reale e sgradevole: aggiungendo il controllo di sicurezza si
  sarebbe cominciato a martellare host terzi, perché i salti manuali non
  sarebbero passati dal limitatore. Ogni salto, `robots.txt` compreso, prende il
  turno con l'**hostname di arrivo**.
- **(3)** È **lo stesso difetto dell'Atto 0a**, ripetuto: il registro nuovo
  sarebbe finito fuori da git e sarebbe vissuto su un disco solo. Eccezione in
  `.gitignore`, stesso lock, stessa transazione atomica dell'applicazione.
- **(4)** Stesso parallelo con l'Atto 0b: introdurre quattro stati nuovi senza
  dichiarare le transizioni è come le tre regole ad hoc che rendevano un giudizio
  irrevisionabile. Macchina a stati esplicita, idempotenza, ripresa dopo
  interruzione, e la regola del lotto finale parziale decisa **ora**.
- **(5)** Il più insidioso, perché avrebbe migliorato i numeri senza che nessuno
  mentisse: escludere i `nonSo` porterebbe la misura storica da 63% a 71%.
  Dichiarato prima: solo `si` è successo, nessuna sostituzione del caso estratto.

## Round 5 — Codex

Il piano è ora abbastanza solido per essere implementato passo per passo. Tutti i rilievi precedenti sono stati affrontati:

- Sicurezza basata su IP global-unicast, fissaggio DNS, redirect limitati per host, robots e streaming con limiti.
- Recupero e rilettura riavviabili, versionati e protetti dal lock.
- Criteri d’uscita collocati nel passo corretto e numericamente raggiungibili.
- Arbitrato automatico separato da quello umano, versionato, transazionale e governato da una macchina a stati.
- Campionamento riproducibile, soglie Wilson coerenti e `nonSo` contato come insuccesso.
- Assenze contestualizzate per ambito, provenienza verificabile, fonti pubblicabili e scadenza annuale.
- Front-end verificato mediante la matrice completa dei cinque campi e tre stati.

Rimangono normali decisioni implementative, soprattutto la gestione conservativa del lotto finale parziale. Non impediscono di iniziare: in caso di dubbio può restare manuale, senza compromettere dati o sicurezza.

Non ho individuato nuove contraddizioni materiali, percorsi impossibili o condizioni d’uscita non misurabili.

VERDICT: APPROVED
---

**Convergenza al round 5 di 5.** 4 giri di REVISE, 36 rilievi (12+13+6+5), 35 accolti (due in forma diversa da quella proposta, uno in forma ridotta), 1 respinto con ragione a verbale (l'elenco chiuso di domini ammessi).

---

## Act 3 — Build (Passo 0: la validazione degli indirizzi)

Builder: Codex `gpt-5.6-sol` (`-s workspace-write`, thread `01a066e9-be8f`).
Revisore: Claude. Baseline 398 prove verdi → **411 verdi**.

### Round 1 — Codex build

Costruito `scripts/lib-rete.mjs`, un solo confine HTTP per la pipeline, e migrati
tutti e nove i chiamanti di `fetch`. Scelte che reggono alla lettura del diff:
- **la regola e' davvero positiva**: per IPv6 solo prefissi ALLOCATED IANA; per
  IPv4 lo spazio unicast meno gli special-purpose non globali, con riaggiunte le
  due eccezioni globalmente raggiungibili (`192.0.0.9`, `192.0.0.10`);
- **il fissaggio dell'IP e' reale**: `lookup` passato a `modulo.request`, che Node
  inoltra a `net.connect`; una prova verifica che si risolve **una volta sola**;
- **`robots.txt` non controlla se stesso** — altrimenti servirebbero le regole per
  poter leggere le regole;
- `accept-encoding: identity`, cosi' il limite vale sui byte veri e non su quelli
  compressi. Non era stato chiesto;
- distingue **decisioni da guasti**: un divieto robots o un indirizzo rifiutato
  non si ritentano, un errore di rete si'.

### Claude's verdict — Round 1

Prova rifatta fuori dal sandbox: **407/407**. Il `spawn EPERM` di Codex era
davvero solo l'isolamento, e ha fatto bene a non dichiarare verde.

**Tre rilievi:**
1. **`STATO_DEL_SITO.md` fuori scopo — ripristinato dal revisore.** Ci aveva
   scritto «398 pass / 9 fail»: sarebbe finita un'affermazione falsa nel
   documento-bussola, visto che fuori dal sandbox erano 407/407.
2. **Il timeout aveva cambiato natura.** Prima `AbortSignal.timeout(20_000)` era
   una scadenza TOTALE sull'intera richiesta; `req.setTimeout` e' un timeout di
   INATTIVITA', per giunta riarmato a ogni salto. Un server che manda un byte
   ogni 19 secondi restava attaccato per sempre, e il crawler non aveva piu'
   alcuna scadenza totale: con `paralleli: 6`, sei host lenti fermano la
   raccolta — lo stesso stallo che il commento sul Limitatore racconta gia' per
   il 30/08.
3. **Il troncamento era silenzioso.** `troncato` veniva calcolato e nessuno lo
   guardava: una pagina tagliata si salvava identica a una intera, e allora una
   citazione poteva risultare «verificata» contro un frammento — il cancello
   dell'impronta SHA-256 vero a meta' senza dirlo.

### Round 2 — Codex fix

Entrambe le correzioni applicate e corrette alla lettura: `scadenzaTotaleMs` con
`AbortController` + `AbortSignal.any`, `entroScadenza()` che copre **anche
l'attesa in coda al limitatore**, `clearTimeout` in `finally`; `troncato`
propagato in `paginaSalvata`, nell'indice e nei tentativi, e
`erroreSeRispostaTroncata()` sulle due chiamate Gemini — con `fetchHttp`
iniettabile per poterle provare senza rete. Gemini resta esentato dalla scadenza
totale (`scadenzaTotaleMs: null`): quelle chiamate durano minuti per progetto.
**Ma il round e' finito senza messaggio finale e senza le 4 prove richieste.**

### Claude's verdict — Round 2, e presa in carico

Le prove le ha scritte il revisore, non il builder: la prova di un difetto non la
scrive chi l'ha commesso. Quattro prove nuove in `test/lib-rete.test.mjs`, e
**tutte e tre le rotture di controllo viste rosse e ripristinate**:
- tolta la scadenza totale → prove 10 e 11 rosse (`fail 2`);
- `paginaSalvata` che non dichiara il troncamento → prova 12 rossa;
- Gemini senza il controllo del troncamento → prova 13 rossa.

Una quarta correzione e' nata dalla verifica stessa: la prima versione della
prova 10 usava un trasporto che non si concludeva mai, e **si appendeva invece
di fallire**, cancellando le tre prove successive. Un tentativo con `unref()` ha
peggiorato le cose (senza nulla che tenga vivo il ciclo, Node esce e cancella le
prove in attesa). Versione finale: ritardo reale di 300 ms contro una scadenza di
60 ms, cosi' senza la correzione la prova fallisce **per asserzione**.

**Esito: 411/411 verdi.** Nessuna deviazione residua dalla specifica del Passo 0.
