# Revisione di Nicola — terza tornata (2026-09-15)

Revisione a 375px sul sito in locale (porta 8123), worktree `redesign-v4`.

Stato: [x] fatto · [ ] da fare · [~] rimandato

## Fatto prima della revisione (Nicola impegnato, 15/09)
- [x] Referente del Learning Agreement a Ca' Foscari: è il **Departmental Coordinator**. La pagina procedure (unive.it/pag/49168) scrive «your academic coordinator at Ca' Foscari (Departmental Coordinator)»: le due diciture indicano la stessa persona, il nome del ruolo è Departmental Coordinator. Allineati `js/la-regole.js` (regola e passo 3) a `dati-postselezione.js` e `dati-attesa.js`.
- [x] Pipeline: riordino delle preferite trascinando la maniglia (sei puntini a sinistra del nome). Le frecce su/giù restano per chi usa la tastiera. Nuova prova Playwright.
- [x] Pipeline: rotte animate nell'onboarding (§V4.12-bis). Scelto l'ateneo, partono dalla sua città verso le città delle sue mete (massimo 24, quelle con più mete) e compaiono in sequenza; scelto il dipartimento restano solo le sue, le altre sfumano; al passo lingue prendono il colore del semaforo. Con «riduci movimento» niente animazione, solo lo stato finale; pausa a scheda nascosta. Nuova prova Playwright.

## Appunti della revisione
- [x] Onboarding full immersion: la pagina non scorre né in orizzontale né in verticale, niente barre in alto o in basso. Con tante scelte (17 dipartimenti Sapienza) scorre solo l'elenco dentro la scheda. Verificato a 375px su tutti i passi, fino all'uscita.
- [x] Mappa delle mete (tab Mete) come quella dell'onboarding: fondo inchiostro, pallini oro, lo stato lo dice la forma (tondo compatibile, quadrato da verificare, quadrato vuoto non accessibile), legenda sopra la mappa quando c'è un profilo.

## Appunti del 15/09 sera (revisione su telefono)

Decisioni del 15/09: bug LA per primi, poi pubblicare; poi correzioni veloci in 2 blocchi; ripensamenti nell'ordine LA → Zaino → Percorso → Mappa, ognuno con /grill-me; nuovo nome dello Zaino da proporre nella sua sessione.

### Prima schermata
- [ ] Testo troppo denso: meno parole, più incisivo, qualche evidenza in giallo
- [ ] Dare più peso alla domanda «a che punto sei?» prima di partire
- [ ] «Scegli il momento in cui scrivi il tuo percorso»: togliere o ridurre a informazione secondaria

### Mappa e mete
- [ ] Nelle schermate dopo la prima la mappa è sempre troppo piccola
- [ ] Pallini già gialli dalla prima volta che si vedono, non spenti
- [ ] Messaggio più diretto: «Ci sono 58 mete possibili per te!»
- [ ] Domanda e risposta sempre in coppia: prima la domanda, poi l'utente agisce
- [ ] «Le cerco, le metto in ordine» / «Aiutami a esplorare»: valutare se dare alle due strade un valore diverso; altrimenti togliere la scelta
- [ ] Mappa da ripensare in stile Airbnb/Booking: si apre come pagina a sé, si scorrono le schede

### Percorso e Home
- [ ] «Il tuo percorso» come sezione a sé, non solo un ingrandimento
- [ ] Home: percorso in breve, in orizzontale, in basso
- [ ] Pagina del percorso: si clicca, si allarga, mostra dove si va
- [ ] Passi 1-2-3-4 in orizzontale, dettagli in verticale sotto ogni passo, si scorre verso destra
- [ ] Home: sezione «mete scelte» cliccabile, riordinabile, con link «torna alle mete»
- [ ] Elenco mete: prime 5 in oro, le altre in blu, con un separatore
- [ ] «Confronta queste mete nel Learning Agreement»: spostarlo al momento della scelta, non in alto

### Zaino e dopo la selezione
- [ ] Il nome «Zaino» non si capisce: rinominare
- [ ] 24 cose da fare: raggruppare e chiarire, non un elenco sparso
- [ ] Informazioni ripetute troppe volte: tenerle una volta sola, nella descrizione
- [ ] «Completa 2 risposte per personalizzare lo zaino»: marginale, spostarlo di lato
- [ ] Home: stato sempre visibile e cambiabile al volo (sto esplorando / ho fatto domanda / sono stato selezionato)
- [ ] Da selezionato: portare al punto giusto, non al passo 5 se è solo una notifica
- [ ] Fasi separate: prima di accettare · quando accetti (conto alla rovescia, notifica, mail istituzionale) · prima di partire · durante l'Erasmus (restare di più, viaggi ecologici) · al rientro

### Learning Agreement
- [x] BUG: Parigi 1 compare 3 volte nell'elenco. Non erano doppioni: sono 3 accordi diversi con la stessa università (Law L/LM/PhD; Economics L/LM; Economics LM). Nell'elenco del LA, quando il nome si ripete, ora si vede area e livelli (e il coordinatore se non basta)
- [x] BUG: «Conferma piano» cancella tutto. I dati erano salvati, ma la sezione si richiudeva in una riga e sembrava vuota: ora resta aperta con gli esami in vista. Aggiunta una verifica alla prova Playwright del LA
- [ ] Inserimento dei corsi strano e difficile: da ripensare
- [ ] Flusso (individua meta, confronta, prepara proposta, modifica, convalida) non chiaro né guidato: riformulare tutta la sezione perché sia intuitiva

## Da guardare in revisione
- [~] (superato da mappa più grande e ripensamento mappa) Rotte: al passo «cosa studi» la scheda di vetro copre quasi tutta la mappa (17 dipartimenti Sapienza), le rotte si vedono poco
- [~] (superato dai ripensamenti) Preferite: con la maniglia i nomi lunghi si troncano un po' prima
