// ============================================================
// CHECKLIST POST-SELEZIONE — SAPIENZA
// ------------------------------------------------------------
// Fonte primaria: "INFORMAZIONI GENERALI — STUDENTI ERASMUS
// OUTGOING, A.A. 2025/2026", Sapienza Universita' di Roma, Area
// per l'Internazionalizzazione, Settore Erasmus (smout@uniroma1.it).
// Copia in repo: fonti/caso-bruno/638864454957146686_INFORMAZIONI_GENERALI_25_26.pdf
// Integrata, per il solo passo di accettazione della sede, dalle
// pagine di Facolta' (Economia, CoRIS) — vedi nota qui sotto.
//
// ⚠️ VENDEMMIA DEI DATI: 2025/26. Il sito punta al bando 2027/28.
//    La procedura amministrativa Sapienza e' stabile di anno in anno
//    nella FORMA, ma i NUMERI cambiano: fra il 2023/24 e il 2025/26
//    la soglia CFU per non restituire il contributo integrativo e'
//    passata da 6 a 12. Per questo nessuna voce qui sotto contiene
//    una data assoluta del ciclo: dove il termine dipende dall'anno
//    si rimanda al contratto o alle informazioni generali correnti.
//    Rivalidare all'uscita del bando 2027/28 (gate G2).
//
// ⚠️ NON esiste una finestra unica di accettazione della sede:
//    la fissa la FACOLTA'. Economia dichiara 5 giorni, CoRIS 7.
//    Per questo la voce sap-post-acc-1 NON scrive un numero: sarebbe
//    falsa per meta' degli studenti. Se un giorno il dato diventasse
//    per-facolta', questa e' la voce da specializzare.
//
// ⚠️ Da NON confondere con "Erasmus+ ICM" (mobilita' extra-Europa) ne'
//    con "Erasmus Italiano" (mobilita' fra atenei italiani): sono due
//    procedure diverse, con pagine e termini propri.
//
// ⚠️ CAMPO "condizionale" (aggiunto 2026-07-28, LETTO dal codice):
//    vociPostPromuovibili() in app.js salta queste voci quando calcola la
//    stazione corrente e "la prossima mossa". Valgono solo in certi casi
//    ("se sei cittadino extra-UE") o sono un vincolo da conoscere senza
//    un'azione per tutti: restano nella lista e nei contatori, si spuntano
//    normalmente, ma non vengono proposte come mossa — altrimenti uno
//    studente italiano resterebbe fermo per sempre su una voce che non lo
//    riguarda. Stesso campo e stessa regola in cafoscari/dati-postselezione.js.
//
// Ogni voce ha:
//  - id:         stabile (chiave dello zaino — non cambiarlo)
//  - fase:       gruppo di appartenenza (mostrato come sotto-intestazione)
//  - gruppoZaino: capitolo "Lo zaino" (BR6, DISEGNO_BRAND.md §3) — "Prima" |
//                "Durante" | "Dopo" la partenza. Se assente, il codice
//                usa "Prima" come fallback (vedi renderChecklistPost).
//  - testo:      cosa deve fare lo studente
//  - condizionale: (facoltativo) true = non vale per tutti, non promuovibile
//                come "prossima mossa". Assente = vale per tutti.
// ============================================================

var CHECKLIST_POST = [
  // ---- Accettazione ----
  { id: "sap-post-acc-1", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Accetta la sede assegnata entro il termine indicato nella comunicazione: la finestra la fissa la tua Facoltà ed è breve (5-7 giorni). Se rinunci, il posto passa a chi ti segue in graduatoria." },
  { id: "sap-post-acc-2", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Controlla ogni giorno l'email istituzionale: tutte le comunicazioni ufficiali arrivano lì, comprese quelle a scadenza breve." },
  { id: "sap-post-acc-3", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Attendi che l'ufficio Erasmus ti nomini all'università ospitante: è Sapienza a farlo, non tu." },
  { id: "sap-post-acc-4", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Completa la «Application Procedure» presso l'università ospitante seguendo le istruzioni che ti invia: procedure e scadenze le fissa lei, non Sapienza." },
  { id: "sap-post-acc-5", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Conserva la lettera di ammissione dell'università ospitante: ti servirà prima della partenza." },

  // ---- Learning Agreement ----
  { id: "sap-post-la-1", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Cerca sul sito dell'ateneo ospitante i corsi compatibili con il tuo percorso: nel Learning Agreement puoi inserire solo esami del tuo piano di studi non ancora sostenuti." },
  { id: "sap-post-la-2", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Compila il Learning Agreement dalla pagina personale, sezione «PROCEDURE ONLINE», e fallo approvare dal RAM (Responsabile Accademico della Mobilità)." },
  { id: "sap-post-la-3", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Se la sede è collegata a Erasmus Without Paper (EWP) la procedura è tutta digitale: dopo l'approvazione del RAM il documento parte da solo e l'esito ti arriva sulla pagina personale. Altrimenti scarica il PDF, firmalo, fallo firmare e timbrare dall'ospitante e caricalo in «UPLOAD DOCUMENTI»." },
  { id: "sap-post-la-4", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Fai approvare da RAM e università ospitante ogni modifica al Learning Agreement PRIMA della partenza." },
  { id: "sap-post-la-5", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Aggiorna sempre il Learning Agreement dalla pagina personale, anche se l'ospitante ti fa compilare un suo modulo: quello che non passa di lì non viene riconosciuto." },

  // ---- Documenti pre-partenza ----
  { id: "sap-post-doc-1", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Approva il contratto Erasmus dalla pagina personale, sezione «DOCUMENTI PRECOMPILATI DA SCARICARE»: basta la spunta online, non va né scaricato né firmato. Almeno 15 giorni prima della partenza." },
  { id: "sap-post-doc-2", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Attendi l'email che ti avvisa della controfirma di Sapienza: solo dopo potrai inserire i dati bancari." },
  { id: "sap-post-doc-3", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Inserisci e salva le coordinate bancarie nella sezione «MODALITÀ DI PAGAMENTO»: il conto o la carta devono essere intestati o cointestati a te." },
  { id: "sap-post-doc-4", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Rinnova l'iscrizione a Sapienza per l'anno della mobilità: senza, l'anticipo del contributo integrativo (CISM) non ti viene pagato. Se ti sei candidato in triennale ma parti da magistrale, formalizza prima l'iscrizione alla magistrale." },
  { id: "sap-post-doc-5", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Indica la lingua dei corsi nella sezione OLS e fai il test di piazzamento su EU Academy (olsapienza@uniroma1.it per assistenza)." },
  { id: "sap-post-doc-6", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Verifica che carta d'identità o passaporto siano validi per tutto il periodo della mobilità." },
  { id: "sap-post-doc-7", fase: "Documenti pre-partenza", gruppoZaino: "Prima", condizionale: true,
    testo: "Se sei cittadino extra-UE, informati per tempo presso ambasciata o consolato del paese di destinazione e controlla la scadenza del permesso di soggiorno." },
  { id: "sap-post-doc-8", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Procurati la Tessera Europea di Assicurazione Malattia (TEAM) in corso di validità e chiedi alla ASL e all'ateneo ospitante come funziona l'assistenza sanitaria sul posto." },
  { id: "sap-post-doc-9", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Registra il soggiorno su viaggiaresicuri.it prima di partire." },

  // ---- Arrivo ----
  { id: "sap-post-arr-1", fase: "Arrivo", gruppoZaino: "Durante",
    testo: "Scarica la dichiarazione di arrivo dalla pagina personale, falla compilare, firmare e timbrare dall'ateneo ospitante, poi caricala in «UPLOAD DOCUMENTI» indicando la data di arrivo. Entro 15 giorni ricevi l'email di riscontro." },
  { id: "sap-post-arr-2", fase: "Arrivo", gruppoZaino: "Durante", condizionale: true,
    testo: "Ricorda che l'arrivo viene registrato solo se hai già fatto tutte e tre le cose obbligatorie: contratto approvato, Learning Agreement completo, dati bancari salvati." },

  // ---- Durante la permanenza ----
  { id: "sap-post-dur-1", fase: "Durante la permanenza", gruppoZaino: "Durante", condizionale: true,
    testo: "Se cambi o aggiungi esami, compila il Change Form dalla pagina personale (disponibile solo dopo la registrazione dell'arrivo): quello che non è nel Learning Agreement o nel Change Form non viene riconosciuto." },
  { id: "sap-post-dur-2", fase: "Durante la permanenza", gruppoZaino: "Durante",
    testo: "Controlla che i nomi degli esami nel «Study Programme abroad» siano identici a quelli che compariranno nel Transcript of Records." },
  { id: "sap-post-dur-3", fase: "Durante la permanenza", gruppoZaino: "Durante", condizionale: true,
    testo: "Se ti serve più tempo, chiedi il prolungamento almeno un mese prima della fine prevista dal contratto: serve l'autorizzazione dell'ospitante e di Sapienza, e non si può andare oltre la chiusura dell'anno finanziario Erasmus." },

  // ---- Rientro ----
  { id: "sap-post-rit-1", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Prima di rientrare, scarica il certificato di frequenza dalla pagina personale e chiedi all'ateneo ospitante di compilarlo e inviarlo direttamente a smout@uniroma1.it. Chiedi di essere messo in copia, così puoi far correggere subito eventuali errori." },
  { id: "sap-post-rit-2", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Chiedi all'ateneo ospitante di inviare il Transcript of Records direttamente al RAEF (Responsabile Amministrativo Erasmus di Facoltà)." },
  { id: "sap-post-rit-3", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Quando il RAEF ha caricato i documenti, verifica che siano corretti, poi trascrivi i voti esteri nella sezione «PROCEDURE ONLINE» e conferma con «Termina inserimento»." },
  { id: "sap-post-rit-4", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Accetta via email la proposta di convalida del RAM: è l'ultimo passo perché gli esami finiscano su Infostud." },
  { id: "sap-post-rit-5", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Convalida gli esami entro il termine indicato nelle informazioni generali del tuo anno: sotto il minimo di CFU riconosciuti devi restituire tutto il contributo integrativo MUR/Sapienza (nel 2025/26 il minimo era 12 CFU, 3 per la sola ricerca tesi)." },
  { id: "sap-post-rit-6", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Compila il rapporto narrativo (EU Survey) quando ricevi l'invito sull'email istituzionale." },
  { id: "sap-post-rit-7", fase: "Rientro", gruppoZaino: "Dopo", condizionale: true,
    testo: "Non puoi laurearti prima di aver convalidato gli esami o il lavoro di tesi svolti in Erasmus. E dopo l'email di chiusura pratica la posizione non si può più riaprire: controlla tutto prima." },
];
