# Test Bruno - Learning Agreement V7

> Protocollo per una sessione di 45-60 minuti. Il test ricostruisce un caso
> storico reale e complesso, ma usa soltanto dati accademici anonimizzati.
> Non è una prova di domanda di mercato: serve a capire se ErasmusWiz aiuta
> davvero quando un Learning Agreement deve essere rifatto.

## 1. Decisione che dobbiamo prendere

Alla fine della sessione dobbiamo poter rispondere a una domanda concreta:

> ErasmusWiz riduce il tempo e gli errori necessari per trasformare un piano
> ormai irrealizzabile in una nuova proposta verificabile da inviare al
> coordinatore?

Il test non deve dimostrare che il prodotto è bello, completo o pronto per
tutti gli studenti. Bruno ha contribuito alla scoperta del problema: un buon
risultato con lui valida la solidità del flusso, non la sua generalizzabilità.

## 2. Materiali già pronti

- Sito locale: `C:\erasmuswiz\RUN-SITO.bat`.
- Caso iniziale anonimo da importare:
  `C:\erasmuswiz\validazione\fixture-la-lisbona-iniziale.json`.
- Scheda da compilare:
  `C:\erasmuswiz\validazione\RISULTATI_TEST_BRUNO.md`.
- Tre consegne da stampare e separare:
  `C:\erasmuswiz\validazione\BUSTE_TEST_BRUNO.md`.
- Documenti originali, da tenere chiusi durante la prova:
  `fonti/caso-bruno/LearningAgreement (3).pdf` e
  `fonti/caso-bruno/ChangeForm (1).pdf`.

Il file importabile contiene soltanto università, corsi, codici e crediti. Non
contiene nome, data di nascita, matricola, email, firme o nomi dei referenti.

## 2-bis. Parte 0 - prova a freddo dell'ingresso, massimo 3 minuti

> Aggiunta dopo la tranche 1 pre-Bruno (`PLAN.md`, addendum 2026-08-07): il
> nuovo ingresso smista davvero, quindi va provato **prima** e **separatamente**
> dal caso storico. I due risultati non si mescolano: questa parte misura
> l'intuitività, la Parte C misura il compito.

Si svolge in una finestra privata **vuota**, senza alcuna fixture importata.

1. Apri `RUN-SITO.bat`, rispondi `n`, apri una finestra in incognito su
   `http://localhost:8001/index.html` (indirizzo nudo, senza rotta profonda).
2. Consegna una sola frase, senza altre spiegazioni:

   > Sei stato selezionato e devi modificare il Learning Agreement.
   > Da dove inizieresti?

3. Ferma il cronometro appena Bruno raggiunge il dossier corretto. **Non
   proseguire oltre quel punto**: qui non si compila nulla.
4. Annota separatamente, senza mescolarli con la Parte C:
   - se sceglie da solo il ramo `Sono stato selezionato`;
   - se sceglie `Modificare un Learning Agreement già preparato`;
   - se trova UCP fra le mete oppure la inserisce a mano quando non compare;
   - se distingue ErasmusWiz dal portale ufficiale e dall'approvazione;
   - ogni suggerimento dato (uno solo basta a rendere l'onboarding da correggere).

**Supera** se entro 3 minuti, senza aiuti, arriva al punto corretto.
Un solo suggerimento ⇒ onboarding `da correggere`. Impossibilità di arrivare al
dossier ⇒ **blocco della pubblicazione**.

Nota attesa: con Giurisprudenza selezionata, la Universidade Católica
Portuguesa **non** compare fra le mete proponibili (il suo accordo nei dati
Sapienza è di Psicologia). Il prodotto lo dichiara e offre l'inserimento
manuale: è il comportamento corretto, non un difetto da correggere durante la
prova.

### Passaggio obbligato fra Parte 0 e il resto

5. Chiudi **tutte** le finestre private, non solo la scheda.
6. Apri una finestra privata nuova e verifica che siano assenti storage e
   service worker della sessione precedente: su
   `http://localhost:8001/index.html` la schermata di benvenuto deve ripartire
   dal primo contatto.

Solo dopo questa verifica si prepara il caso storico.

## 3. Preparazione del caso storico - 15 minuti prima

1. Apri `RUN-SITO.bat` con doppio clic.
2. Alla domanda sullo scaricamento dei dati rispondi `n`.
3. Apri nel browser:
   `http://localhost:8001/index.html#learning-agreement/sapienza`.
4. Usa la finestra in incognito **pulita** aperta al punto 6 della Parte 0,
   così il test non mescola dati precedenti.
5. Dal Learning Agreement scegli `Ripristina da backup` e importa
   `fixture-la-lisbona-iniziale.json`.
6. Conferma che compaiano:
   - Universidade Católica Portuguesa;
   - ciclo 2025/26;
   - versione 1;
   - 8 corsi host per 44 ECTS;
   - 6 esami Sapienza per 45 CFU.
7. Stampa e separa le tre sezioni di `BUSTE_TEST_BRUNO.md`.
8. Chiudi i PDF originali prima di far sedere Bruno. Tieni il protocollo
   stampato o su un secondo dispositivo non visibile al tester; sul computer
   della prova lascia aperti soltanto il sito e, se serve, la scheda risultati.
9. Disattiva notifiche e programmi che possono mostrare messaggi personali.
10. Se registri schermo o voce, chiedi prima il consenso. In caso contrario
   prendi appunti: la registrazione non è obbligatoria.

Se l'importazione non mostra questi dati, non iniziare la sessione: annota il
problema come blocco tecnico e usa un'altra finestra in incognito.

## 4. Regole per chi facilita

- Non spiegare l'interfaccia e non indicare dove cliccare.
- Non correggere subito un errore: lascia che Bruno provi a riconoscerlo.
- Se resta fermo, la prima frase ammessa è soltanto:
  `Cosa stai cercando di fare in questo momento?`
- Dopo 90 secondi senza progresso, registra un blocco e puoi dare un solo
  suggerimento minimo. Conta ogni suggerimento nella scheda.
- Non dire parole come `versione`, `backup`, `mappatura` o `preflight` prima
  che Bruno le trovi da solo.
- Non giudicare il suo comportamento. Se sbaglia, il problema è del prodotto
  o della consegna, non del tester.
- Le nuove idee non diventano automaticamente funzionalità. Prima vengono
  classificate alla fine della sessione.

## 5. Apertura da leggere a Bruno

> Stiamo provando se questo strumento avrebbe reso più semplice un problema
> che hai già vissuto. Non stiamo provando te e non ci sono risposte sbagliate.
> Durante la prova dimmi ad alta voce cosa pensi, cosa cerchi e cosa non ti
> convince. Io cercherò di non aiutarti, perché dobbiamo capire se il prodotto
> si spiega da solo. Puoi interrompere la registrazione o la sessione in
> qualsiasi momento.

## 6. Parte A - racconto senza prodotto, 10 minuti

Fai una domanda alla volta e aspetta la risposta completa.

1. `Quando hai preparato il primo Learning Agreement, da dove sei partito?`
2. `Come hai trovato il catalogo e come hai deciso che quei corsi erano
   realmente frequentabili?`
3. `Quando e attraverso quale canale hai scoperto che sei corsi non erano
   disponibili?`
4. `Come hai trovato i corsi sostitutivi? Qual è stato il passaggio più lento?`
5. `Quanto tempo pensi di aver impiegato tra ricerca, correzioni e messaggi?`
6. `Quale errore o sorpresa ti sarebbe stato più utile evitare?`

Non mostrare ancora il Change Form. Annota fatti, date approssimative, fonti e
parole usate spontaneamente da Bruno.

## 7. Parte B - orientamento, 5 minuti

Mostra il dossier già importato senza spiegazioni e leggi:

> Questo è il tuo piano iniziale ricostruito senza dati personali. Guardalo
> come se fossi appena arrivato a Lisbona. Dimmi cosa pensi che rappresenti,
> in quale fase ti trovi e cosa faresti dopo.

Misura:

- tempo per riconoscere che è il Learning Agreement iniziale;
- comprensione della fase;
- primo elemento cliccato;
- eventuale confusione tra ErasmusWiz e il portale ufficiale;
- capacità di trovare la prossima azione senza aiuto.

## 8. Parte C - ricostruzione progressiva, massimo 25 minuti

### Busta 1 - il problema

Leggi soltanto questo testo:

> La mobilità è iniziata. Scopri che sei degli otto corsi del piano approvato
> non sono disponibili. Devi preparare una nuova proposta senza perdere la
> fotografia del piano precedente. Usa ErasmusWiz come preferisci.

I sei corsi non disponibili sono:

- Administrative Litigation A/B/C/D - 6 ECTS;
- European Fundamental and Human Rights Law - 4 ECTS;
- International Law of the Sea - 4 ECTS;
- Introduction to Global Law, vecchia voce con codice 000 - 6 ECTS;
- Performance and Non-Performance of Obligation - 6 ECTS;
- Public Finance - 4 ECTS.

Non indicare come cambiare lo stato dei corsi né come creare una nuova versione.

### Busta 2 - i corsi trovati sul posto

Consegnala quando Bruno dice di voler cercare o aggiungere sostituzioni:

| Codice | Corso host | ECTS |
|---|---|---:|
| 144213 | Introduction to Global Law | 6 |
| 144297 | Public International Law Code | 6 |
| 144334 | Right to a Fair Trial | 3 |
| 144414 | International Taxation | 4 |
| 144415 | Law and Literature | 4 |
| 144432 | The Law of Fighting Poverty | 3 |
| 144462 | International Arbitration | 3 |
| 144463 | EU Asylum and Migration Law | 4 |
| 144485 | Ius Cogens | 3 |
| 144504 | Climate Change | 3 |

Restano attivi anche:

- Law of the European Union A/B/C/D - 6 ECTS;
- Private International Law - 8 ECTS.

Non fornire il totale finale, a meno che Bruno non lo chieda espressamente o
non abbia finito di inserire i corsi.

### Busta 3 - il lato Sapienza

Consegnala quando Bruno arriva agli esami da riconoscere:

- aggiungere Analisi delle Politiche Pubbliche, codice 1052282, 6 CFU;
- aggiungere Diritto dell'Immigrazione, codice 10612400, 6 CFU;
- conservare i sei esami presenti nel piano iniziale.

I due nuovi esami non facevano parte della prima versione del Learning
Agreement. Se necessario, Bruno deve quindi riuscire ad aggiungerli prima al
suo piano personale e poi alla nuova versione del dossier. Non indicargli il
percorso nell'interfaccia.

Chiedi poi:

> Prepara il dossier come se dovessi inviarlo al referente. Quando pensi che
> sia pronto, dimmelo e mostrami cosa invieresti.

Non chiedere esplicitamente di creare gruppi, completare controlli, copiare il
testo o scaricare un backup: dobbiamo verificare se il prodotto rende visibili
questi passaggi.

## 9. Risultato corretto da controllare dopo che Bruno ha finito

Apri il Change Form originale solo adesso. Il risultato non deve essere
graficamente identico al PDF, ma deve conservare questi fatti:

- versione 1 ancora leggibile: 8 corsi host, 44 ECTS; 6 esami casa, 45 CFU;
- nuova versione distinta;
- 6 corsi originali segnati non disponibili o sostituiti;
- 2 corsi originali ancora attivi;
- 10 corsi nuovi;
- totale attivo host: 12 corsi e 53 ECTS;
- totale casa: 8 esami e 57 CFU;
- ogni corso ed esame attivo appartiene ad almeno un gruppo di riconoscimento;
- link e crediti risultano da controllare, senza dichiarazioni automatiche di
  approvazione;
- esiste un testo o una stampa utilizzabile per il referente;
- il piano iniziale non è stato sovrascritto;
- Bruno sa dove scaricare una copia di sicurezza.

Il test non deve inventare il riconoscimento finale: Transcript of Records e
convalida non sono ancora presenti tra i materiali disponibili.

## 10. Parte D - domande finali, 10 minuti

Fai una domanda alla volta.

1. `In quale punto il prodotto ti ha fatto risparmiare più tempo?`
2. `In quale punto ti ha aggiunto lavoro o confusione?`
3. `C'è qualcosa che sembrava ufficialmente approvato senza esserlo?`
4. `Ti saresti fidato delle informazioni sui corsi? Che prova avresti voluto?`
5. `Con questo strumento, cosa avresti fatto diversamente nel tuo Erasmus?`
6. `Lo avresti usato prima della partenza, all'arrivo o in entrambi i momenti?`
7. `Lo consiglieresti a uno studente con lo stesso problema? Per quale motivo
   concreto?`
8. `Se dovessi descriverlo a un collega in una frase, cosa diresti?`

Evita di chiedere soltanto un voto da 0 a 10. Un voto positivo non dimostra che
il prodotto cambi un comportamento reale.

## 11. Criteri di decisione

> I criteri qui sotto valgono per il **compito storico** (Parti B-C). L'esito
> della Parte 0 si annota a parte e non entra in questa colonna: un ingresso
> poco intuitivo non annulla un compito riuscito, e un compito riuscito non
> dimostra che l'ingresso funzioni.

### Superato

- nessuna perdita della versione iniziale;
- nessuna falsa approvazione;
- risultato accademico corretto;
- compito completato in non più di 25 minuti;
- non più di 2 suggerimenti del facilitatore;
- Bruno identifica un risparmio o un errore evitato concreto.

### Da correggere prima del caso di Economia

- compito completato, ma con più di 2 suggerimenti;
- versione e totali corretti, ma prossimo passo o fonti non comprensibili;
- percorso superiore a 25 minuti ma ancora percepito come migliore del metodo
  originale;
- esportazione o backup trovati soltanto dopo un suggerimento.

### Blocco critico

- perdita o sovrascrittura del piano approvato;
- corsi non disponibili ancora conteggiati come attivi;
- totale sbagliato presentato come pronto;
- impossibilità di distinguere ErasmusWiz dal portale ufficiale;
- impossibilità di completare il compito anche con due suggerimenti;
- Bruno giudica più semplice tornare a foglio, email e PDF, spiegandone il
  motivo con un passaggio concreto.

Un blocco critico ferma il pilot di tua sorella finché non viene corretto.
Preferenze estetiche e nuove idee non fermano il pilot: entrano nel backlog.

## 12. Dopo la sessione - 20 minuti

1. Completa `RISULTATI_TEST_BRUNO.md` mentre il ricordo è fresco.
2. Salva il backup finale generato dall'app nella cartella privata del caso,
   non nella parte pubblica del repository.
3. Classifica ogni problema come:
   - `P0`: dato perso, errore accademico, falsa approvazione;
   - `P1`: blocco del compito o prossimo passo incomprensibile;
   - `P2`: rallentamento, testo o gerarchia migliorabile;
   - `Backlog`: idea nuova non necessaria al compito.
4. Non modificare subito il prodotto durante l'intervista.
5. Confronta il risultato con LA e Change Form originali.
6. Usa ciò che impariamo per preparare il caso vivo Sapienza Economia - ISEG,
   senza copiare automaticamente regole di Giurisprudenza.
