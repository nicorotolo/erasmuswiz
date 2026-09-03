# Plan: ErasmusWiz — Fase 7: la mappatura che non lascia mete mute

_Bloccato con la grigliatura — Claude + Nicola, 2026-09-03._
_Revisione 5 — approvato da Codex al round 5 di 5 (36 rilievi, 35 accolti)._

> **Precedenza documentale.** Questo piano **assorbe e sostituisce gli Atti 2 e
> 3 di `PLAN_FASE6.md`**, che restano validi nel contenuto ma scendono dal
> primo al quarto e quinto posto. La ragione è una misura, non un ripensamento:
> la riserva L4 vale 264 mete, e c'è una strada da 410 mete che costa meno e
> che nessuno aveva contato. Gli Atti 0 e 1 di Fase 6 sono chiusi e non si
> toccano.

---

## Goal

Portare la mappatura a uno stato in cui **nessuna meta è muta**: per ognuna
delle 1.987 mete e per ognuno dei cinque campi, lo studente trova **o il dato o
il motivo per cui non ce l'abbiamo**, e il motivo dice esattamente quanto
abbiamo guardato — né più né meno. Per arrivarci si recupera prima tutto il dato
vero già raggiungibile con il materiale che abbiamo sul disco, e si ripara **la
macchina** che lo raccoglie, non solo i dati di oggi.

---

## Il punto di partenza, misurato il 2026-09-03

Non dai documenti: da `statoPartner()`, dal report di copertura e da un conteggio
diretto su `raccolta/pagine/**`.

**Copertura per campo (mete su 1.987):**

| Campo | Ha il dato | Copertura |
|---|---:|---:|
| scadenzeOspitante | 1.775 | 89% |
| linkSito | 1.771 | 89% |
| requisitoLingua | 1.538 | 77% |
| **linkCatalogo** | **580** | **29%** |
| notaDisponibilita | 359 | 18% |

**Stato dei 613 partner:**

| Stato | Partner | Mete |
|---|---:|---:|
| `fatto` | 479 | 1.716 |
| `nonRaggiunto` | 111 | 226 |
| `daRaccogliere` (nessun indirizzo) | 17 | 17 |
| `senzaTestoUtile` (sito in JavaScript) | 6 | 21 |

**Il fatto che ribalta l'impostazione precedente:** delle 1.407 mete senza
`linkCatalogo`, **1.353 appartengono a partner già chiusi come `fatto`**. La
catena non ha lavoro arretrato — ha finito, e il campo è al 29%. Quindi
«completare la mappatura» non può voler dire «svuotare la coda».

**Le due strozzature, e solo una morde davvero.**

- **Tetto di raccolta: 25 pagine per partner** (`raccogli-partner.mjs:430`,
  `while (coda.length && indice.pagine.length < 25)`). Raggiunto da **380 partner
  su 585**: il crawler si è fermato per budget, non per esaurimento del sito.
- **Budget di lettura: 250.000 caratteri** (`leggi-partner.mjs:51`). Taglia prima
  delle 25 pagine in 352 partner su 474, ma la mediana di pagine effettivamente
  inviate è **22 su 25**: non è qui il collo di bottiglia.

**E il punteggio guarda dalla parte sbagliata.** In `raccogli-partner.mjs:20-23`
la famiglia `incoming / exchange student / erasmus` vale **4 punti**, mentre
`course catalogue / vorlesungsverzeichnis / studienangebot` ne vale **3**. Le
pagine che *parlano* dello scambio battono sistematicamente il catalogo vero. E
per `notaDisponibilita` **non esiste alcuna famiglia**: quel campo non ha mai
avuto un modo di attirare una pagina.

**La conseguenza, contata sui link che abbiamo già sul disco** — link presenti
dentro pagine scaricate, il cui indirizzo non è mai stato visitato:

| Campo | Partner | Link mai aperti |
|---|---:|---:|
| catalogo | 127 | 1.700 |
| notaDisponibilita | 64 | 1.005 |
| scadenzeOspitante | 79 | 610 |
| requisitoLingua | 48 | 176 |

⚠️ Questi quattro numeri vengono da **espressioni regolari scritte per la misura,
non dai dizionari del repo** (`PAROLE` non ha una famiglia per la disponibilità).
Sono un ordine di grandezza, e il passo 1 li rimisura con i classificatori veri.

E la parte immediatamente spendibile: **93 partner oggi privi di `linkCatalogo`
hanno un link che si chiama letteralmente «catalogo» in una pagina che possediamo
e non abbiamo mai aperto — 410 mete.** Esempio verificato: `AINNSBRU01`, link
«Vorlesungsverzeichnis» → `lfuonline.uibk.ac.at/public/lfuonline_lv.home`, che
è esattamente il catalogo cercato.

**Il confronto fra le strade, che è la ragione del riordino:**

| Strada | Mete raggiungibili | Costo |
|---|---:|---|
| Aprire i link-catalogo già in casa | **410** | Basso — il materiale è sul disco |
| Riserva L4, i 134 mai raggiunti (Fase 6 Atto 2) | 264 | Medio — indirizzi indovinati da un modello |
| I 708 PDF illeggibili (Fase 6 Atto 3) | 915 passano da frase prudente a forte | Alto — forse una dipendenza nuova |

**L'arbitrato, che è la risorsa scarsa.** Registro `raccolta/giudizi.jsonl`:
`linkCatalogo` **63% di sì** (60 sì / 25 no / 11 non so), `requisitoLingua` 89%
(8/9, campione minimo). Ritmo reale: **85 giudizi in una giornata piena**, 20 il
giorno dopo. Esiste però una classe più affidabile: quando la prova è la coppia
**testo del link → indirizzo** (correzione del 01/09), la precisione sale da 62%
a **93%** — ma su **41 casi**, sotto i 100 che la regola di casa impone per
dichiarare un tasso, e per giunta **non indipendenti**: molti dello stesso ateneo
o della stessa piattaforma.

**E il difetto già visto una volta.** `nonTrovabile` esiste nel modello dati, è
per meta, porta `cercatoIl` e `fonte`, ed è reversibile (`togliNonTrovabile`).
Ma è scritto solo per `requisitoLingua` (165 voci) e **nessuna riga di
front-end lo legge**: `grep -rn nonTrovabile js/ *.html` trova solo i file dati.
È lo stesso difetto di `linkCatalogo`, che è stato nei dati per mesi senza che
una riga lo mostrasse.

---

## Approach

### Passo 0 — La validazione degli indirizzi, da sola *(nessun tempo di Nicola)*

Il crawler segue link trovati dentro pagine di terzi e chiama `fetch`
direttamente (`raccogli-partner.mjs:135`, `redirect: "follow"`), senza controllare
dove l'indirizzo porta. Il rischio non nasce con questo piano — vale già per le
5.555 pagine scaricate — ma stiamo per aggiungerne migliaia, e la revisione di
Fase 6 aveva già stabilito che questo passo va **da solo, prima**.

1. Una **funzione condivisa chiamata prima di ogni `fetch`**, non dentro
   `lib-link.mjs`: `statoLink()` non è sul percorso: homepage, seed, `robots.txt`,
   sitemap, sottodomini e pagine scoperte passano tutti dal `fetch` diretto. Vanno
   migrati tutti i chiamanti, non uno.
2. **Ogni salto della catena di redirect si valida prima di chiederlo.** Con
   `redirect: "follow"` la libreria esegue i salti successivi al primo e guardare
   `res.url` dopo significa guardare quando la richiesta è già partita. Si passa
   a `redirect: "manual"` con un tetto di salti e validazione a ogni passo.
   ⚠️ **E ogni salto passa dal limitatore, con l'host di destinazione.** Oggi
   `Limitatore` prende il turno da `new URL(url).hostname` dell'indirizzo di
   partenza (`raccogli-partner.mjs:105`): una catena manuale eseguita *dentro*
   quella chiamata farebbe arrivare richieste a un host nuovo senza il suo
   contatore e senza la pausa di un secondo — cioè si comincerebbe a martellare un
   sito terzo proprio mentre si aggiunge il controllo di sicurezza. Ogni salto,
   **`robots.txt` compreso**, passa da `Limitatore.esegui()` con l'hostname di
   arrivo. **Prova:** due redirect concorrenti verso lo stesso host restano
   distanziati.
3. **La regola si inverte: si ammette solo ciò che è global unicast.** Due giri di
   revisione hanno prodotto due elenchi di reti vietate e il secondo era ancora
   incompleto (mancavano multicast `224/4` e `ff00::/8`, riservato `240/4`,
   benchmarking `198.18/15`). Un elenco di divieti «per esteso» è una falsa
   garanzia: se ne dimentica sempre uno. Quindi si accetta **solo** un IP
   classificato **global unicast** secondo le tabelle IANA, e tutto il resto —
   loopback, privato, CGNAT, link-local, ULA, multicast, riservato, benchmarking,
   documentazione, non specificato, IPv4 mappato in IPv6 — è rifiutato **perché
   non è nell'elenco degli ammessi**, non perché qualcuno si è ricordato di
   vietarlo. Restano fuori dall'elenco IANA e vanno rifiutati a parte: schemi
   diversi da http/https, suffissi `.local`/mDNS, **credenziali nell'URL**
   (`http://user:pass@…`) e le porte fuori da una **politica esplicita** (80, 443
   e le porte http alternative dichiarate). **Prove per classe**, comprese
   multicast, riservato, documentazione e benchmarking.
4. **L'IP si fissa, non si ricontrolla — ed è un prerequisito non negoziabile.**
   Risolvere il nome, validarlo e poi lasciare che `fetch` risolva di nuovo **non
   garantisce niente**: fra i due momenti la risposta DNS può cambiare (*DNS
   rebinding*). La validazione avviene sull'IP che verrà **effettivamente usato**,
   tramite un `lookup` personalizzato nel dispatcher di `undici`, e vale **per
   ogni salto**. ⚠️ La revisione ha colto una contraddizione nella versione
   precedente, che come ripiego proponeva l'elenco di domini approvati a mano —
   cioè esattamente la cosa respinta al punto 9 delle decisioni. Corretto: **non
   c'è ripiego che restringe i domini.** Se il `lookup` personalizzato non
   funzionasse, l'alternativa è tecnica e non di copertura: connettersi
   direttamente all'IP validato impostando a mano `Host` e SNI. Se nemmeno questo
   fosse praticabile, il passo 0 non è finito e il passo 1 non parte.
5. **`robots.txt` si ricontrolla a ogni cambio di origine.** Seguire un redirect
   verso un host nuovo significa interrogare un sito su cui non abbiamo mai letto
   le regole: si carica il suo `robots.txt` e si verifica il permesso **prima**
   della richiesta.
6. **Il corpo si limita mentre arriva, non dopo.** Oggi `scaricaUnaVolta()` fa
   `arrayBuffer()` e solo dopo applica un limite: una risposta enorme è già in
   memoria. Si legge a flusso e si interrompe oltre due limiti distinti, uno per
   HTML e uno per PDF.
7. **Campione di regressione, già esistente e già giusto:** i **15 casi** che il
   30/08 il ramo «dominio cambiato» ha recuperato — Salisburgo, Karlsruhe e gli
   altri — devono restare raggiunti dopo la modifica. Se anche uno solo si perde,
   il passo non è finito.

**Criterio d'uscita:** i 15 casi ancora raggiunti; una prova per **ciascuna**
classe di indirizzi rifiutati del punto 3; una prova che un redirect verso un
indirizzo privato viene fermato **prima** della richiesta; una prova che una
risposta oltre il limite viene troncata senza essere accumulata.

### Passo 1 — La macchina impara a seguire i link giusti *(nessun tempo di Nicola)*

Questo è il passo che vale 410 mete sul catalogo e tocca anche gli altri tre
campi deboli. **Si ripara la raccolta, e il recupero dei dati di oggi è la stessa
riparazione fatta girare all'indietro.**

1. **La pagina si porta dietro i motivi per cui è stata presa — al plurale.**
   Ogni voce di `indice.json` guadagna `motivi: []`, non `motivo`: un link
   «Course catalogue and language requirements» riguarda due campi, e sceglierne
   uno butterebbe l'altro. Se lo stesso URL viene incontrato più volte, i motivi
   si **uniscono**, non si sovrascrivono.
2. **Quattro classificatori separati, scritti e provati**, uno per campo debole —
   compresa la famiglia per `notaDisponibilita`, che oggi **non esiste** in
   `PAROLE`. Non sono i gruppi di punteggio anonimi riusati: quelli servono a
   ordinare, questi a decidere se una pagina va aperta. Ogni classificatore ha le
   sue prove, con i casi in lingua straniera che hanno già fatto danni una volta
   (radici, non parole intere).
3. **Le pagine con un motivo si seguono anche oltre il tetto delle 25.** Il tetto
   generale resta 25; le pagine motivate hanno un **budget proprio** (proposta:
   fino a 8 per partner, cioè al più 2 per campo debole), così una pagina che si
   chiama «Vorlesungsverzeichnis» non compete con la ventesima pagina di notizie
   sull'Erasmus. Il budget è anche il tetto dell'esposizione: un sito ostile può
   farci aprire al più 8 indirizzi in più, tutti passati dal passo 0.
4. **Le pagine motivate si inviano per prime, fuori concorso.** In
   `scegliPagine()` l'ordinamento diventa: prima le motivate (in ordine di
   punteggio fra loro), poi le altre. Senza questo, le pagine appena scaricate
   finiscono in fondo alla fila e all'IA **non arrivano lo stesso**: il budget di
   250.000 caratteri taglia già oggi in 3 partner su 4.
5. **Il recupero sui dati vecchi è un'aggiunta, non una riraccolta.**
   `--recupera-motivi` rilegge gli `indice.json` esistenti, cerca nei `link` già
   salvati gli indirizzi mai visitati che corrispondono a un motivo, li scarica e
   li **aggiunge** all'indice. Non tocca le pagine esistenti. ⚠️ Questo è ciò che
   evita la trappola nota: una riraccolta vera azzera il testo dei PDF e
   costringerebbe a `riscarica-pdf.mjs`, e chi non lo sa legge il risultato come
   una regressione.
6. **Il recupero è riavviabile davvero, non a parole.** Oggi pagine e
   `indice.json` si scrivono separatamente: un'interruzione può lasciare file
   orfani, numeri di pagina riusati o un indice che non corrisponde ai file. Il
   recupero **prende lo stesso lock della catena**, scrive `indice.json` su file
   temporaneo e poi `rename` atomico, e tiene un **checkpoint per partner** così
   che una ripartenza non riscarichi ciò che ha già preso.
   **La normalizzazione degli URL è conservativa:** si uniformano schema, host,
   porta predefinita, frammento e parametri di tracciamento; **la barra finale si
   conserva** — `…/x` e `…/x/` possono essere risorse diverse e vanno unificati
   solo quando un redirect osservato lo dimostra. (La versione precedente di
   questo piano diceva il contrario, ed era un errore.)
7. **La rilettura deve poter ripartire, e oggi non può — in due punti, non uno.**
   - `statoPartner()` torna `fatto` guardando `avanzamento[codice].applicato`;
     aggiungere pagine non cambia quello stato, e `esegui-partner.mjs:816` esclude
     i `fatto` da `daFare`.
   - **E anche sistemando quello non basta:** `leggi-partner.mjs:211` salta
     *incondizionatamente* ogni partner che possieda già `letture/<codice>.json`.
     Senza questo secondo punto il passo 1 scarica migliaia di pagine che nessuno
     legge.

   **Correzione:** la lettura diventa **versionata**. La lettura vecchia viene
   **archiviata** (`letture/storico/<codice>-<data>.json`), il partner torna a
   `daLeggere`, e nello stesso gesto si invalidano `fuso`, `applicato` e
   `improntaLettura` in `avanzamento.json` — altrimenti la nuova lettura verrebbe
   considerata già fusa. Tutto sotto il lock, con `rename` atomico.

   **Il confronto NON si fa sull'insieme delle impronte esistenti.** Oggi
   `impronta: hash(brano)` (`leggi-partner.mjs:61`) copre testo e link ma **non
   l'URL**, e un *insieme* perde ordine e duplicati: due pagine con testo identico
   e fonti diverse sembrerebbero la stessa selezione. Si confronta invece
   l'**impronta dell'ingresso completo e ordinato**:
   `[{url, file, improntaContenuto, motivi}] + versionePrompt`. Includere la
   versione del prompt è un guadagno gratuito: cambiare il prompt torna a essere
   una ragione legittima per rileggere, cosa che oggi non è esprimibile.
   **Tre prove:** una pagina motivata aggiunta riapre il partner; **rieseguire
   senza aver aggiunto nulla non riapre nessuno**; un'interruzione a metà
   rilettura non lascia un partner con lettura nuova e `applicato` vecchio.
8. **Lo schema di `nonTrovati` si estende QUI, prima delle riletture.** Oggi è
   `{campo: numeroPagina}` (`leggi-partner.mjs:143`) e non sa dire a quale
   **ambito** si riferisce un'assenza; e `cancelli.mjs:15` classifica come
   **stretti** quattro campi su cinque, `linkCatalogo` e `scadenzeOspitante`
   compresi. Senza ambito **nessuna assenza potrà mai diventare FORTE** (passo 3).
   Se l'estensione arrivasse dopo, il passo 1 rileggerebbe ~180 partner
   producendo letture inutilizzabili per il passo 3, da rileggere una seconda
   volta. Diventa quindi `nonTrovati[campo] = { paginaCitata, livello, ambito }`,
   con prompt, cancelli, validatore e prove aggiornati **nello stesso passo delle
   riletture**, non dopo.
9. **Ogni pagina motivata conserva la sua provenienza:** `scopertaDa` (l'URL della
   pagina padre), il **testo del link** che ci ha portati lì e la **catena dei
   redirect** osservata. Serve a due cose che il piano dà per scontate altrove:
   sostenere che una fonte su dominio esterno sia davvero *indicata dall'ateneo*
   (passo 3), e calcolare la `classeEvidenza` «coppia testo del link → indirizzo»
   dal dato invece che a naso (passo 2). Entra nell'impronta del materiale.
10. **Ordine di esecuzione del recupero:** prima i 93 partner privi di
   `linkCatalogo` con un link-catalogo mai aperto (410 mete), poi il resto. Così
   il numero del criterio d'uscita si vede presto e, se la strada non porta dove
   si crede, ce ne accorgiamo su 93 partner e non su 180.

**Criterio d'uscita, fissato prima di lanciare.** ⚠️ La versione precedente
chiedeva qui la copertura al 45% e il conteggio delle bocciature di Nicola:
**erano entrambi impossibili a questo passo**, perché `linkCatalogo` non entra nel
sito senza arbitrato, che è il passo 2. Il passo 1 misura la **resa della
raccolta**, non la copertura pubblicata:

- **Proposte valide nuove per `linkCatalogo` ≥ 60 sui 93 partner prioritari**
  (65%), **che rappresentino ≥ 250 mete**. ⚠️ La versione precedente diceva
  «≥ 300» ed era aritmeticamente impossibile: `leggi-partner.mjs:235` costruisce
  `campi` come oggetto per nome di campo, quindi **una lettura produce al più una
  proposta di `linkCatalogo` per partner** — 93 partner, 93 proposte al massimo.
  Il numero che conta per la copertura è quello delle **mete rappresentate**, non
  delle proposte. È una previsione, ed è lì per poter essere smentita.
- Un resoconto che divide i **falliti per causa**: link morto · rifiutato dal
  passo 0 (con la classe) · pagina raggiunta ma senza catalogo · proposta
  bocciata dai cancelli (con il motivo). Senza questa tabella il passo può
  «riuscire» avendo scaricato migliaia di pagine inutili.
- **Nessun campo già pieno cambia valore** e **nessun campo si perde**: confronto
  campo per campo con `report-copertura-mappatura.mjs` prima e dopo, sui primi 93
  prima di procedere col resto.
- **Rimisura dei quattro conteggi** dei link mai aperti con i classificatori veri
  invece delle regex di misura.

### Passo 2 — L'arbitrato del raccolto *(1-2 giornate di Nicola)*

1. Nicola arbitra le proposte nuove con lo strumento già usato per i venti e per
   i 77 (pagina privata costruita sui dati veri, impronte SHA-256 mai ribattute a
   mano).
2. **La classe dev'essere scritta nel dato, non ricostruita a memoria.** Oggi
   `origine` è calcolata dentro i cancelli e non finisce né nella proposta né nel
   giudizio, che conservano solo valore, citazione, fonte e impronta
   (`esegui-partner.mjs:189-196`). Si introduce `classeEvidenza`, **versionata**
   (`v1`), calcolata in modo deterministico da una sola funzione, salvata nella
   proposta e nel giudizio.
   ⚠️ **Ma NON dentro `improntaProposta`.** La chiave del registro è
   `chiaveGiudizio(codice, campo, improntaValore(valore))`
   (`esegui-partner.mjs:190` e `:576`): cambiarla renderebbe **irriconoscibili i
   282 giudizi già dati**, cioè tre giornate di lavoro di Nicola.
   ⚠️ **E nemmeno accanto, nello stesso registro.** Aggiungere una seconda
   impronta senza separare i registri lascerebbe due proposte con lo stesso valore
   e classe diversa **sulla stessa chiave**: un `no` umano e un `siAutomatico`
   finirebbero nella stessa sequenza, che `statoGiudizio()` non ammette
   (`esegui-partner.mjs:109` e `:155`), e — peggio — un vecchio `si` umano
   autorizzerebbe una classe nuova che nessuno ha mai visto. Quindi:
   - `raccolta/giudizi.jsonl` resta **il registro umano, intatto**, chiave e
     macchina a stati invariate;
   - i lotti automatici vivono in un registro **separato**,
     `raccolta/lotti-automatici.jsonl`, indicizzato da
     `(codiceCanonico, campo, improntaDecisione)` con
     `improntaDecisione = hash({valore, classeEvidenza})`;
   - ⚠️ **e va aggiunto a `.gitignore` come eccezione, altrimenti non esiste.**
     `.gitignore:14` esclude `raccolta/*` con tre sole eccezioni
     (`giudizi.jsonl`, `collisioni.json`, `indirizzi-l4.json`): un registro nuovo
     vivrebbe **su un disco solo**, che è esattamente il difetto che l'Atto 0a di
     Fase 6 ha chiuso il 03/09 per i giudizi umani. Versionato, sotto lo stesso
     lock, e scritto nella **stessa transazione atomica** che applica o ritira il
     lotto: un lotto applicato e non registrato è peggio di un lotto non applicato.
   - **il verdetto umano ha sempre la precedenza**: un `no` o un `nonSo` umano su
     `(codice, campo)` blocca qualunque ingresso automatico su quel campo,
     qualunque sia la classe. La regola è unidirezionale e va provata.
   - **Il lotto ha la sua macchina a stati, dichiarata come quella dei giudizi.**
     L'Atto 0b di Fase 6 esiste perché tre regole ad hoc in disaccordo rendevano
     un giudizio irrevisionabile; introdurre quarantena, approvazione, ritiro e
     applicazione senza dichiarare le transizioni ripeterebbe l'errore.
     Stati: `inQuarantena → campionato → {approvato | ritirato}`, e solo
     `approvato` autorizza l'applicazione. Vanno definiti e provati:
     **idempotenza** (rieseguire un'applicazione già fatta non fa nulla e non è un
     errore), **ripresa dopo interruzione** (un lotto trovato a metà si conclude o
     si annulla, mai a metà), e il **lotto finale parziale** (< 100 proposte: si
     campiona in proporzione, con un minimo di 10, oppure resta manuale — la
     regola si sceglie ora, non quando capiterà).
3. **La misura si dichiara prima di guardare i risultati**, con numeri concreti e
   non lettere. I casi della classe si contano **prima** che Nicola giudichi. Il
   campione è **stratificato in modo deterministico**: chiave di strato =
   `dominio registrabile del sito del catalogo` (eTLD+1), **al più 1 caso per
   partner e al più 3 per strato**; l'estrazione usa un **seme riproducibile**
   (`hash(codiceCanonico + campo)`) così che chiunque possa rifare lo stesso
   campione. 100 casi dello stesso ateneo non sono 100 misure.
   **E il conteggio si dichiara adesso: solo `si` è un successo; `no` e `nonSo`
   sono insuccessi.** Un caso campionato **non si sostituisce mai**. È la regola
   più severa delle due possibili, ed è quella giusta: escludere i «non so»
   alzerebbe la misura storica di `linkCatalogo` da 63% a 71% senza che nessuno
   abbia verificato niente, e i «non so» sono proprio i casi in cui la prova non
   basta — cioè quelli su cui una macchina non deve decidere da sola.
4. **Due soglie distinte, perché una sola non può valere per entrambi i
   campioni.** La revisione ha colto un errore aritmetico: con Wilson al 95% e
   limite inferiore ≥ 0,90, **nemmeno 20 su 20** passerebbero (il limite inferiore
   sta intorno a 0,84), quindi il campione di controllo non avrebbe **nessun modo
   di superare la prova**. Quindi:
   - **Promozione della classe:** ≥ 100 casi indipendenti, limite inferiore
     Wilson 95% **≥ 0,90** (servono ~96 corretti su 100).
   - **Controllo di un lotto:** 20 casi, limite inferiore Wilson 95% **≥ 0,75**,
     e basta — nessun secondo campione. ⚠️ La versione precedente aggiungeva
     «oppure 19/20 con un secondo campione», che era una contraddizione: 19/20 dà
     già limite inferiore ≈ **0,764** e passa da solo. La regola è una sola, e si
     blocca con **prove di confine**: **18/20 deve fallire** (≈ 0,699) e **19/20
     deve passare** (≈ 0,764). È una soglia di *sorveglianza*, non di promozione:
     serve ad accorgersi di un crollo, non a ridimostrare la precisione.
   Se una delle due non è raggiunta, la classe torna manuale.
5. **L'automatismo non aggira il cancello umano: registra un evento distinto.**
   `applicaEControlla()` rifiuta ogni proposta su un campo d'arbitrato che non
   abbia un `si` o `applicato` nel registro (`esegui-partner.mjs:570-585`), e
   indebolire quel controllo in generale sarebbe pericoloso. Si aggiunge invece un
   esito **`siAutomatico`**, ammesso **solo** dal ramo di quarantena e solo se
   porta con sé `classeEvidenza`, la sua versione e l'identificativo del lotto
   approvato. Il cancello resta chiuso a tutto il resto, e nel registro si vede a
   colpo d'occhio cosa ha deciso un umano e cosa una regola.
6. **Ingresso a lotti in quarantena, con ritiro dell'intero lotto.** Lotti da 100
   proposte; entrano in `approvati` ma **non vengono applicate** finché il
   campione di controllo del lotto non passa. Se fallisce si ritira il lotto
   **intero** — l'unica azione eseguibile senza rileggere tutto. Se la classe non
   regge, tutto resta sotto gli occhi di Nicola e non si è perso niente: la
   misura andava fatta comunque.
7. I tre conflitti aperti (`D SIEGEN01`, `D GREIFS01`, `PL WARSZAW01`) si
   decidono qui, perché sono lo stesso gesto.

**Criterio d'uscita del passo 2** (è qui che vive il numero di copertura, non al
passo 1): **`linkCatalogo` dal 29% ad almeno il 45% delle mete** (da 580 a ≥ 894),
più il conteggio delle bocciature di Nicola diviso per causa.

### Passo 3 — Le due frasi: nessuna meta muta *(nessun tempo di Nicola)*

**Va dopo il raccolto, non prima.** Scrivere «cercato, non trovato» adesso
significherebbe smentirsi da soli poche ore dopo, sulle stesse mete.

**La correzione più importante di questa revisione: la frase prudente NON si
scrive nei dati.** `raccogli-partner.mjs:286` costruisce `campiMancanti`
escludendo i campi in stato `nonTrovabile`; scrivere un marcatore «debole»
farebbe uscire quel campo dai mancanti, il partner diventerebbe `fatto` e **non
verrebbe mai più cercato**. La frase che promette di continuare a cercare avrebbe
chiuso la ricerca. Quindi:

1. **DEBOLE non è un dato: è come il front-end rende un campo vuoto.** Nessun
   marcatore, nessuna scrittura, nessun rischio di chiudere una ricerca. Zero
   record nuovi per 1.186 mete.
2. **FORTE è l'unico marcatore che si scrive**, ed è il `nonTrovabile` che già
   esiste, con in più `forza: "assente"` e la versione di schema.
   ⚠️ **`partner === fatto` NON è una prova sufficiente**, e la versione
   precedente lo trattava come tale. `fatto` significa che la catena ha finito —
   può esserlo anche dopo che una proposta è stata **bocciata dai cancelli**, cioè
   in un caso in cui il dato *era* nel materiale. Le condizioni diventano **tutte
   e cinque**:
   a. la **lettura corrente** dichiara esplicitamente quel campo in `nonTrovati`
      (non basta che il campo sia vuoto);
   b. **nessuna proposta concorrente** su quel campo, né approvata né bocciata né
      in coda: se qualcuno ha proposto qualcosa, l'assenza non è dimostrata;
   c. il partner **non ha alcun PDF con `estrazioneFallita`**;
   d. l'assenza è **all'ambito giusto** (vedi 4);
   e. il marcatore porta l'**impronta del materiale consultato** (la stessa del
      punto 7 del passo 1), così che si sappia *su cosa* è stata fatta
      l'affermazione e la si possa invalidare quando quel materiale cambia.
3. **Il veto dei PDF è sul partner intero, non per campo.** Un solo PDF
   illeggibile impedisce il FORTE su qualunque campo di quel partner. È la
   lettura più severa e l'unica che non indovina. **Misurato oggi:** 238 partner
   / **801 mete** superano *questo* filtro; le condizioni a, b ed e ne toglieranno
   altre, e il numero vero si conosce solo dopo il passo 2. **801 è un tetto, non
   una previsione.**
4. **L'assenza si deduce per partner ma oggi si scrive su tutte le mete di quel
   codice, in tutte le facoltà** (`applica-partner.mjs:200-210`) — e lingua e
   disponibilità **cambiano per facoltà e per livello**. E lo schema attuale non
   sa esprimerlo: `nonTrovati` è `{campo: numeroPagina}`
   (`leggi-partner.mjs:143`), senza `livello` né `ambito`, che invece esistono già
   per i valori trovati. Correzione, con la conseguenza detta apertamente:
   - lo schema diventa `nonTrovati[campo] = { paginaCitata, livello, ambito }`, e
     vanno aggiornati insieme **prompt, cancelli, validatore e prove**;
   - un'assenza si propaga a tutte le mete del codice **solo se `livello:
     "ateneo"`**;
   - ⚠️ **e i campi «d'ateneo per natura» non esistono.** La versione precedente
     dava per larghi `linkCatalogo` e `scadenzeOspitante`: è falso, e contraddice
     una decisione presa dall'arbitrato di Nicola. `cancelli.mjs:15` li elenca fra
     i `CAMPI_STRETTI` («il catalogo di un dipartimento non è il catalogo
     dell'ateneo», 31/08). L'unico campo largo è `linkSito`.
   - **Conseguenza vera: nessuna lettura vecchia può generare FORTE**, perché
     nessuna porta l'ambito. FORTE nasce solo da letture fatte col nuovo schema.
   - **Conseguenza sull'ordine, che è la parte importante:** l'estensione di
     `nonTrovati` **va fatta nel passo 1, prima delle riletture**, non qui.
     Altrimenti il passo 1 rilegge ~180 partner producendo letture che non
     possono generare FORTE, e andrebbero rilette una seconda volta. Il passo 3
     resta il posto dove FORTE viene *scritto e mostrato*; lo schema che lo rende
     possibile si sposta a monte.
5. **Le parole contano, e «l'università non lo pubblica» non è dimostrabile.**
   Abbiamo letto al più ~33 pagine scelte da noi: non è l'intero sito. La frase
   FORTE diventa: **«Non trovato nelle N fonti ufficiali consultate il
   <data>»**, con l'elenco delle fonti apribile. *(Questo modifica la
   formulazione scelta nella grigliatura; i due stati restano, cambia la parola.)*
   La frase DEBOLE resta **«Non l'abbiamo ancora trovato»**.
   ⚠️ **E quella frase ha bisogno di dati che oggi il marcatore non ha.**
   `applica-partner.mjs:146` salva una sola `fonte`, e i file di `raccolta/` non
   sono pubblicati: il sito è statico e vede solo `js/dati-mete-*.js`. Il
   marcatore guadagna quindi `fontiConsultate: [{url, titolo}]`, validata,
   migrata e coperta dalle prove del front-end.
   **Con un tetto, perché il peso conta:** al più **5 fonti** più il conteggio
   totale (`fontiTotali`). I file dati sono già ~109 KB l'uno e li scarica il
   browser dello studente; 25 URL per campo per meta li farebbe esplodere. Cinque
   fonti bastano a rendere l'affermazione verificabile, il totale a dirne la
   portata.
6. **La provenienza di una fonte esterna va conservata, o «ufficiale» è una
   parola vuota.** Un catalogo vive spesso su un dominio diverso da quello
   dell'ateneo (è la ragione per cui l'elenco chiuso di domini è stato respinto):
   senza sapere **da quale pagina dell'ateneo** ci siamo arrivati, non si può
   sostenere che l'ateneo lo indichi. Ogni pagina motivata conserva quindi
   `scopertaDa` (URL della pagina padre), il **testo del link** che ci ha portati
   lì e la **catena dei redirect**, e questi entrano nell'impronta del materiale.
   Non è solo tracciabilità: è esattamente la coppia *testo del link → indirizzo*
   su cui poggia la `classeEvidenza` del passo 2, che oggi verrebbe ricostruita a
   naso.
7. **FORTE scade.** Una volta scritto il marcatore il campo esce da
   `campiMancanti` e nessuno lo cercherà più: se l'ateneo pubblica il catalogo
   l'anno prossimo, non lo sapremo mai. Un marcatore FORTE più vecchio di **12
   mesi** torna a contare come mancante, e la meta rientra da sola nella coda. È
   la stessa trappola del punto 1, alla fine della catena invece che all'inizio.
8. **Il pezzo che è mancato l'ultima volta: il front-end.** `js/app.js` deve
   leggere `nonTrovabile` e rendere le due frasi. **Prova d'accettazione: una
   matrice 5 campi × 3 stati** (dato / FORTE / DEBOLE), verificata a video su
   desktop e su mobile — i cinque campi hanno rendering diversi, e due esempi non
   li coprono. Il mobile non è zelo: a 390×844 l'azione primaria della Home passa
   già per 5 px.
9. **Schema, migrazione e validatori.** Si dichiara una `versioneSchema` per il
   marcatore. I **165 marcatori storici** di `requisitoLingua` non hanno `forza` e
   riguardano proprio uno dei due campi che variano di ambito: vanno riqualificati
   contro le condizioni del punto 2 — chi le supera diventa FORTE, chi no **perde
   il marcatore e torna vuoto** (cioè DEBOLE), che è la condizione da cui riparte
   la ricerca. Un validatore rifiuta prima della pubblicazione ogni marcatore
   senza `forza`, senza fonte, senza data, senza impronta del materiale, o con
   `forza: "assente"` su un partner che ha un PDF cieco.
10. **Il gemello resta vero:** quando il dato arriva, `togliNonTrovabile` lo
   toglie. Una meta non può dire insieme «ecco il valore» e «cercato, non
   trovato» (difetto chiuso il 03/09; la prova va estesa al nuovo schema).

**Criterio d'uscita:** zero mete con un campo vuoto e nessuna delle due frasi
rese a video; la matrice 5×3 verde su desktop e mobile; il conteggio FORTE/DEBOLE
per campo pubblicato nel report di copertura, che oggi non distingue i due; zero
marcatori rifiutati dal validatore.

### Passo 4 — I 134 mai raggiunti: la riserva L4 *(poco tempo di Nicola)*

Invariata rispetto a `PLAN_FASE6.md` Atto 2, che resta il testo di riferimento e
ha già superato una revisione avversariale. Scende al quarto posto per una misura,
non per un giudizio: vale 264 mete contro le 410 del passo 1, e costa di più.

Restano vincolanti i punti che quella revisione aveva estratto: **L4 propone
indirizzi, non valori**; l'ingresso è per stato (`--includi nonRaggiunto` apre ai
111 senza toccare il codice); l'invalidazione per impronta dei seed, calcolata su
URL normalizzati, deduplicati e ordinati; il seed è **esso stesso un candidato** e
si prova per primo, non soggetto al `break` di `candidatiPartner()`; dopo la
riraccolta serve `riscarica-pdf.mjs`.

Il passo 0 di questo piano è **il prerequisito che quella revisione chiedeva** e
che ora arriva prima per conto suo.

### Passo 5 — I 708 PDF illeggibili: prima la diagnosi *(la decisione è di Nicola)*

Invariato rispetto a `PLAN_FASE6.md` Atto 3. Con una ragione in più per non
saltarlo: dopo il passo 3, ogni classe di PDF recuperata **sposta mete da DEBOLE
a FORTE**, cioè paga nella valuta dell'obiettivo di questo piano e non solo in
copertura. `illeggibile` oggi è un cestino, non una diagnosi:
`scripts/diagnosi-pdf.mjs` divide i 708 nelle cinque classi, con almeno tre
esempi per classe aperti a mano. Nessun estrattore nuovo in questa fase.

---

## Key decisions & tradeoffs

1. **«Finita» vuol dire nessuna meta muta, non copertura 100%.** Il dato reale su
   catalogo e disponibilità resterà lontano dal 100% anche a lavoro concluso.
   *Scartato:* un obiettivo di copertura numerica, che avrebbe spinto a scrivere
   dati deboli pur di far salire una percentuale.
2. **Due frasi, ma una sola scritta nei dati.** DEBOLE è resa dal front-end su un
   campo vuoto; FORTE è l'unico marcatore. *Ragione:* scrivere DEBOLE avrebbe
   chiuso la ricerca su 1.186 mete (`campiMancanti` esclude i `nonTrovabile`).
   Trovato dalla revisione di Codex, non dal disegno.
3. **Il veto dei PDF è totale sul partner.** *Scartato:* dedurre dal nome del
   file quali campi quel PDF conteneva — un'euristica travestita da regola.
4. **Prima i link che abbiamo già in casa, non L4.** 410 mete contro 264, con
   materiale già sul disco contro indirizzi da indovinare.
5. **Si ripara la macchina, non i dati.** I motivi entrano nella raccolta
   normale: un ateneo nuovo non ripete l'errore. *Scartato:* uno script
   una-tantum — stesso costo oggi, lavoro doppio domani.
6. **Le pagine motivate hanno la precedenza, non un budget più grande.**
   *Scartato:* alzare i 250.000 caratteri — il tetto vero è la quota Google di
   250.000 token al minuto (31 minuti di attesa su 244 partner, misurati).
   *Scartato anche:* cambiare i punteggi di tutte le pagine, che tocca ciò che
   oggi funziona senza sapere prima quanto costa.
7. **La sicurezza degli indirizzi va prima e va da sola**, e include il fissaggio
   dell'IP per salto: validare un nome e poi lasciarlo risolvere di nuovo non è
   un controllo, è una speranza. **Non negoziabile e senza ripieghi che
   restringono i domini** — un ripiego del genere sarebbe la decisione 9 rientrata
   dalla finestra.
8. **L'accettazione automatica si guadagna con una misura severa**: campione
   stratificato con seme riproducibile, limite inferiore Wilson ≥ 0,90 per
   promuovere e ≥ 0,75 per sorvegliare, lotti in quarantena con ritiro
   dell'intero lotto, e un esito `siAutomatico` distinto nel registro invece di un
   allentamento del cancello. *Scartato:* accettare tutto e controllare dopo.
10. **`improntaProposta` non si tocca.** La classe dell'evidenza vive in una
   seconda impronta. *Ragione:* la chiave del registro è `hash(valore)`, e
   cambiarla renderebbe irriconoscibili 282 giudizi già dati. Trovato dalla
   revisione, non dal disegno.
11. **FORTE ha una scadenza di 12 mesi.** *Ragione:* un marcatore permanente su un
   campo che esce da `campiMancanti` è una ricerca chiusa per sempre. Il costo è
   un po' di lavoro ricorrente; l'alternativa è dire allo studente qualcosa che
   era vero due anni fa.
9. **RIFIUTATO — l'elenco chiuso di domini ammessi** proposto dalla revisione.
   I cataloghi vivono spesso su un dominio diverso da quello dell'ateneo
   (piattaforme di terzi, portali regionali), e il ramo «dominio cambiato» del
   30/08 ha recuperato **15 partner** proprio uscendo dal dominio: un elenco
   chiuso li ri-romperebbe, e sarebbe una regressione misurabile in cambio di una
   sicurezza che il passo 0 già fornisce. L'esposizione resta limitata dal budget
   di 8 pagine motivate per partner, dalla validazione di ogni salto, dal
   controllo `robots.txt` a ogni cambio di origine e dal limite di corpo a flusso.

---

## Risks / open questions

- **Il 93% potrebbe non reggere a 100 casi indipendenti** — ed è più probabile di
  prima, perché il campione indipendente toglie proprio i casi facili dello stesso
  ateneo. Se scende, l'arbitrato resta interamente manuale: il piano non fallisce,
  rallenta.
- **Le pagine motivate possono spingere fuori pagine buone.** Con la precedenza
  fuori concorso, in un partner al limite del budget alcune pagine oggi inviate
  non lo saranno più: una rilettura potrebbe proporre **meno** di prima. Nessun
  dato si perde (i campi pieni non si sovrascrivono mai), ma un campo che stava
  per essere trovato grazie a una pagina che ora non arriva resterebbe vuoto. **Va
  misurato, non assunto:** confronto campo per campo prima/dopo sui primi 93,
  prima di procedere.
- **`campiMancanti` in `partner.json` è ricalcolato alla ricostruzione** e può
  non riflettere l'ultima passata. I numeri che ne dipendono (93 partner, 410
  mete) sono ordini di grandezza; vanno riverificati contro le mete prima di
  dichiarare l'esito del passo 1.
- **I quattro conteggi dei link mai aperti vengono da regex di misura**, non dai
  classificatori del repo. Il passo 1 li rimisura; se calano molto, il criterio
  del 45% va rinegoziato **prima** di lanciare, non dopo.
- **Il fissaggio dell'IP potrebbe non essere pratico** con `fetch` di Node su
  Windows. È l'unico punto del passo 0 che potrebbe richiedere una via tecnica
  diversa (connessione all'IP validato con `Host` e SNI impostati a mano). Se
  nessuna delle due funziona, il passo 0 non è finito: **non esiste un ripiego
  che riduce i domini**, sarebbe la regressione dei 15 casi del 30/08.
- **Il numero delle mete FORTE è ignoto finché non si arriva al passo 3.** 801 è
  il tetto dopo il solo veto dei PDF; le condizioni «la lettura lo dichiara
  esplicitamente» e «nessuna proposta concorrente» ne toglieranno altre, e per
  `requisitoLingua` e `notaDisponibilita` il FORTE non arriva affatto prima delle
  riletture col nuovo schema. Se alla fine FORTE fosse una piccola minoranza, i
  due stati resterebbero comunque giusti — ma la fatica di distinguerli andrebbe
  ridiscussa.
- **Il passo 3 tocca prompt, cancelli, applicatore e front-end insieme.** È il
  passo con più superficie del piano, ed è quello che «mescola» di più. Se durante
  l'implementazione si mostrasse troppo largo, il taglio naturale è: prima lo
  schema `nonTrovati` esteso con le sue prove, poi il front-end con le due frasi.
- **I 111 `nonRaggiunto` sono la voce più grossa fra i fuori portata** (226 mete,
  contro le 38 dei 23 di Fase 6), e il criterio d'uscita di L4 è tarato sui 23.
  Ventitré casi non autorizzano da soli l'estensione ai 111.
- **Il passo 5 potrebbe concludersi con «non si può fare»** per la classe più
  grande, e allora 915 mete resterebbero definitivamente nella frase prudente.
  Sarebbe una risposta, non un fallimento — ma va scritta.

---

## Out of scope

- Nessun estrattore PDF nuovo in questa fase: il passo 5 finisce con la diagnosi.
- Nessuna dipendenza nuova nel **sito**: resta 100% statico a zero dipendenze.
  La porta resta aperta in linea di principio per i soli script di pipeline, e
  solo dopo la diagnosi.
- Nessuna riraccolta completa dei 585 partner.
- Nessun terzo ateneo: la replicabilità qui è garantita riparando la macchina,
  non aggiungendo dati.
- Nessuna modifica al Learning Agreement, alla checklist o al resto del prodotto.
