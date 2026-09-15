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
- [x] Testo troppo denso: ora «Le mete *giuste per te*, senza perdere una scadenza. Gratis.» con le parole chiave in oro
- [x] Dare più peso alla domanda «a che punto sei?»: ora «A che punto sei con l'Erasmus?», più grande, da sola accanto alle risposte
- [x] «Scegli il momento…»: tolta (tolte anche «2 atenei disponibili…» e «17 dipartimenti disponibili…», che ripetevano la domanda)

### Mappa e mete

- [x] Mappa troppo piccola nell'onboarding: a telefono tolto il titolo fisso in alto e l'elenco delle scelte non supera metà schermo (la mappa resta visibile anche coi 17 dipartimenti). Nel tab Mete si rivede col ripensamento stile Airbnb
- [x] Pallini gialli da subito
- [x] «Ci sono N mete possibili per te!» al passo del livello e nella schermata finale (testo del bando accorciato)
- [x] Domanda e risposta in coppia: la domanda la fa sempre Wiz, subito sopra le risposte (es. «Ci sono 59 mete possibili per te! Triennale o magistrale?»)
- [~] «Le cerco, le metto in ordine» / «Aiutami a esplorare»: oggi fanno quasi la stessa cosa (cursore nella ricerca / scorre alla mappa). Decisione di Nicola: dare al «No» un valore vero (es. le 5 mete più adatte per lingua), dentro il ripensamento della mappa
- [x] Il numero delle mete arriva dopo triennale/magistrale e conta solo gli accordi di quel livello (es. Economia Ca' Foscari: 58 in tutto, 51 triennale, 46 magistrale); le mete senza posti dichiarati restano contate. Aggiornata la prova V5.6
- [ ] Mappa da ripensare in stile Airbnb/Booking: si apre come pagina a sé, si scorrono le schede

### Percorso e Home
- [ ] «Il tuo percorso» come sezione a sé, non solo un ingrandimento
- [ ] Home: percorso in breve, in orizzontale, in basso
- [ ] Pagina del percorso: si clicca, si allarga, mostra dove si va
- [ ] Passi 1-2-3-4 in orizzontale, dettagli in verticale sotto ogni passo, si scorre verso destra
- [ ] Home: sezione «mete scelte» cliccabile, riordinabile, con link «torna alle mete»
- [x] Preferite: prime 5 (o il massimo del bando) con il numero in oro, le altre in blu, separatore «Oltre le 5 della domanda»
- [x] «Confronta queste mete nel Learning Agreement»: tolto dalla testa di Mete, ora sotto l'elenco delle preferite (compare solo se ce n'è almeno una)

### Zaino e dopo la selezione
- [ ] Il nome «Zaino» non si capisce: rinominare
- [ ] 24 cose da fare: raggruppare e chiarire, non un elenco sparso
- [ ] Informazioni ripetute troppe volte: tenerle una volta sola, nella descrizione
- [x] «Completa 2 risposte per personalizzare lo zaino»: ora una riga discreta in fondo allo zaino («Sei cittadino extra-UE o fai ricerca tesi all'estero? … Vai al profilo»)
- [x] Home: stato sempre visibile e cambiabile al volo, sotto il saluto (Esploro · In attesa · Selezionato); si resta in Home. Aggiornato l'ordine dei blocchi nella prova router
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
