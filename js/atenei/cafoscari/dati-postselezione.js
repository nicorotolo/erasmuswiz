// ============================================================
// CHECKLIST POST-SELEZIONE — CA' FOSCARI
// "cosa fare dopo aver vinto"
// ------------------------------------------------------------
// Fonte primaria 1: "Procedure per studenti Erasmus+ outgoing
//   2026/2027", Ufficio Relazioni Internazionali - Settore
//   Mobilita' (erasmusout@unive.it). https://www.unive.it/pag/49167/
//   Letta il 2026-07-28; la pagina dichiara "Last update: 24/07/2026".
// Fonte primaria 2: "Bando di selezione Programma Erasmus+ per
//   studio (Europa) a.a. 2026-2027", artt. 1, 3, 8, 9.
//   Copia in repo: fonti/Bando_Erasmus__per_studio__Europa__2026_2027.pdf
//
// ⚠️ VENDEMMIA DEI DATI: 2026/27. Il sito punta al bando 2027/28.
//    La procedura e' stabile nella FORMA ma non nei NUMERI: le date
//    del ciclo (accettazione, finestra di mobilita', termine di
//    rendicontazione) cambiano ogni anno. Per questo NESSUNA voce
//    qui sotto contiene una data assoluta: dove il termine dipende
//    dall'anno si rimanda al bando, al contratto o alla pagina
//    procedure corrente. Rivalidare all'uscita del bando 2027/28
//    (gate G2).
//
// ⚠️ Le due voci sulla cittadinanza extra-UE e sul visto NON sono la
//    stessa cosa e non vanno fuse: post-doc-2 riguarda il PAESE DI
//    DESTINAZIONE (es. la Turchia chiede il visto a tutti), post-doc-8
//    riguarda la CITTADINANZA DELLO STUDENTE (permesso di soggiorno
//    italiano valido al rientro, procedure che superano i 90 giorni).
//    Il bando le tratta in due punti distinti (art. 8 c. 13).
//
// ⚠️ Ordine dell'array != ordine degli id. Gli id sono chiavi dello
//    zaino e non si rinumerano mai: le voci aggiunte il 2026-07-28
//    hanno numeri alti ma compaiono nel punto giusto del percorso.
//
// ⚠️ CAMPO "condizionale" — SCRITTO QUI, NON ANCORA LETTO DAL CODICE.
//    primaVocePostIncompleta() (app.js:853) e la missione (app.js:1296)
//    prendono la PRIMA voce non spuntata dell'array: e' da li' che V4
//    ricava "la mossa principale" della home. Senza distinguere, a chi
//    ha appena accettato il sito proporrebbe come mossa "Se hai deciso
//    di non partire...". Le voci marcate condizionale: true valgono solo
//    in certi casi, oppure sono un vincolo da conoscere senza un'azione
//    per tutti: NON vanno promosse come prossima mossa, ma restano
//    normalmente nella lista e nelle spunte.
//    Stesso schema da applicare a Sapienza (sap-post-la-4, sap-post-dur-3
//    e le altre condizionali) quando V4 consumera' il campo.
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
  { id: "post-acc-1", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Accetta il posto compilando il modulo online indicato nel bando, entro il giorno e l'ora che il bando fissa. Se non lo compili in tempo decadi dal diritto a partire: non esiste proroga." },
  { id: "post-acc-5", fase: "Accettazione", gruppoZaino: "Prima", condizionale: true,
    testo: "Se la tua mobilità dura fino a 6 mesi, nel modulo di accettazione indica il semestre in cui vuoi partire, rispettando le restrizioni segnalate per la tua destinazione." },
  { id: "post-acc-6", fase: "Accettazione", gruppoZaino: "Prima", condizionale: true,
    testo: "Se hai deciso di non partire, semplicemente non compilare il modulo: è la compilazione a valere come accettazione. Decidi ora, però: chi rinuncia DOPO aver accettato può perdere la possibilità di candidarsi al bando dell'anno successivo, salvo cause di forza maggiore documentate." },
  { id: "post-acc-2", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Controlla regolarmente l'email istituzionale (matricola@stud.unive.it): dall'accettazione in poi tutte le comunicazioni del Settore Mobilità arrivano lì." },
  { id: "post-acc-3", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Attendi che il Settore Mobilità ti nomini all'università ospitante: è Ca' Foscari a farlo, e te ne dà comunicazione." },
  { id: "post-acc-4", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Dopo la nomina fai l'application all'università ospitante: procedure e scadenze le fissa lei, sul suo sito, nella sezione per gli studenti incoming. Guardale subito, perché fra l'accettazione del posto e la scadenza dell'application possono passare pochi giorni: documenti incompleti o in ritardo possono costarti il posto." },
  { id: "post-acc-7", fase: "Accettazione", gruppoZaino: "Prima", condizionale: true,
    testo: "Tieni presente che l'università ospitante può rifiutare la tua candidatura in qualsiasi momento dopo la graduatoria, se in fase di application non risulti in regola con i requisiti che chiede: in quel caso la mobilità decade." },

  // ---- Learning Agreement ----
  { id: "post-la-1", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Cerca sul sito dell'università ospitante i corsi compatibili con il tuo piano di studi, restando dentro l'accordo per il quale sei stato selezionato." },
  { id: "post-la-2", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Presenta una proposta di Learning Agreement al Departmental Coordinator (il docente referente dello scambio a Ca' Foscari) e concorda con lui le attività da inserire." },
  { id: "post-la-3", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Compila l'Online Learning Agreement (OLA) sulla piattaforma dedicata per ottenere le firme dei coordinatori. Prima di iniziare leggi la Guida e le FAQ per la compilazione, pubblicate sulla pagina delle procedure." },
  { id: "post-la-5", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Verifica di aver già sostenuto le propedeuticità richieste dagli esami che metti nell'OLA: è una tua responsabilità, e va fatto prima di partire." },
  { id: "post-la-6", fase: "Learning Agreement", gruppoZaino: "Prima", condizionale: true,
    testo: "Non inserire nell'OLA esami che a Ca' Foscari valgono come parziali: non danno CFU e non potranno esserti riconosciuti al rientro." },
  { id: "post-la-4", fase: "Learning Agreement", gruppoZaino: "Prima", condizionale: true,
    testo: "Se fai ricerca tesi, compila anche il Learning Agreement per ricerca tesi, concordato con il relatore. Se sei iscritto a laurea o laurea magistrale la sola tesi non basta: devi comunque seguire corsi e sostenere esami, perché la ricerca tesi non dà diritto a crediti. I dottorandi invece compilano solo il Learning Agreement per ricerca tesi." },

  // ---- Documenti pre-partenza ----
  { id: "post-doc-1", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Verifica che carta d'identità o passaporto siano validi per tutto il periodo della mobilità." },
  { id: "post-doc-2", fase: "Documenti pre-partenza", gruppoZaino: "Prima", condizionale: true,
    testo: "Se vai in un paese non UE che lo richiede (per esempio la Turchia), chiedi il visto per tempo alla rappresentanza diplomatica di quel paese in Italia." },
  { id: "post-doc-8", fase: "Documenti pre-partenza", gruppoZaino: "Prima", condizionale: true,
    testo: "Se hai cittadinanza extra-UE muoviti con largo anticipo: chiedi all'università ospitante quali documenti servono per entrare e risiedere nel paese, richiedili alle autorità competenti (possono volerci più di 90 giorni) e controlla che il tuo permesso di soggiorno italiano sia valido al momento del rientro. L'Immigration Team aiuta: immigrationteam@unive.it." },
  { id: "post-doc-3", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Chiedi alla tua ASL se la Tessera Sanitaria Europea (TEAM) basta per il paese di destinazione o se ti serve una copertura assicurativa in più. Le informazioni paese per paese sono sul sito del Ministero della Salute." },
  { id: "post-doc-4", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Firma il Contratto Finanziario: senza quella firma la mobilità non può iniziare. È il Settore Mobilità a contattarti per comunicarti date e modalità." },
  { id: "post-doc-5", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Firma la dichiarazione liberatoria di responsabilità: ti viene consegnata durante l'incontro per la firma del contratto finanziario." },
  { id: "post-doc-6", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Fai la verifica linguistica online (OLS) se ti viene richiesta: arriva dopo la firma del contratto finanziario, ed è il Settore Mobilità a darti le istruzioni." },
  { id: "post-doc-7", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Registrati su viaggiaresicuri.it e informati sullo stato di sicurezza della destinazione prima di partire." },
  { id: "post-doc-9", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Cercati l'alloggio da solo, e comincia presto: è una tua responsabilità, non tutti gli atenei partner offrono un servizio di supporto e in molte destinazioni la domanda supera l'offerta." },
  { id: "post-doc-10", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Continua a pagare tasse e contributi di iscrizione a Ca' Foscari anche durante la mobilità. Sei esonerato dalle tasse di iscrizione dell'università ospitante, che però può chiederti un contributo per servizi agli studenti e trasporti." },

  // ---- Arrivo ----
  { id: "post-arr-1", fase: "Arrivo", gruppoZaino: "Durante",
    testo: "Compila la Conferma di Arrivo, falla firmare all'ufficio Erasmus dell'università ospitante e inviala a erasmusout@unive.it entro 7 giorni dall'inizio della mobilità." },
  { id: "post-arr-2", fase: "Arrivo", gruppoZaino: "Durante", condizionale: true,
    testo: "Se devi cambiare qualcosa nel piano, presenta le Variazioni all'OLA entro 30 giorni dall'inizio dei corsi del semestre di riferimento presso l'università ospitante." },

  // ---- Durante la permanenza ----
  { id: "post-dur-1", fase: "Durante la permanenza", gruppoZaino: "Durante",
    testo: "Sostieni almeno uno degli esami previsti dall'OLA. Se sei iscritto a laurea o laurea magistrale e non ne sostieni nemmeno uno, la mobilità viene annullata e ti viene chiesto di restituire il contributo già ricevuto." },
  { id: "post-dur-5", fase: "Durante la permanenza", gruppoZaino: "Durante",
    testo: "Manda i documenti al Settore Mobilità solo via email, a erasmusout@unive.it, e avvisalo subito di qualsiasi problema o variazione della tua mobilità." },
  { id: "post-dur-2", fase: "Durante la permanenza", gruppoZaino: "Durante", condizionale: true,
    testo: "Se vuoi fare anche un tirocinio: non può durare più di 2 mesi, va messo nell'OLA o nelle variazioni, deve essere patrocinato dall'università ospitante (nessuna convenzione con Ca' Foscari) e alla fine devi scrivere una relazione con durata in giorni e ore e la valutazione dell'ente." },
  { id: "post-dur-3", fase: "Durante la permanenza", gruppoZaino: "Durante", condizionale: true,
    testo: "Se vuoi prolungare, muoviti almeno un mese prima della data di fine prevista dal contratto finanziario: compila e fai firmare il modulo di richiesta prolungamento e, se allunghi di un semestre, aggiungi le nuove attività nelle variazioni all'OLA. La mobilità deve comunque chiudersi entro il termine della finestra fissata dal bando." },
  { id: "post-dur-4", fase: "Durante la permanenza", gruppoZaino: "Durante", condizionale: true,
    testo: "Se hai viaggiato con un mezzo ecologico all'andata e al ritorno e vuoi il contributo di viaggio maggiorato, invia via email i biglietti di andata e ritorno e la Declaration on Honour almeno 1 mese prima della fine effettiva della mobilità." },

  // ---- Rientro ----
  { id: "post-rit-1", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Alla fine del periodo compila la Conferma di Partenza, falla firmare dal responsabile dell'ufficio Erasmus ospitante e inviala a erasmusout@unive.it. La data da indicare è quella di effettiva conclusione delle attività accademiche previste dall'OLA: dal giorno successivo puoi tornare a fare attività a Ca' Foscari." },
  { id: "post-rit-2", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Recupera il Transcript of Records (il certificato degli esami sostenuti). Di solito l'università ospitante lo rilascia circa un mese dopo la fine della sessione d'esami, e può mandarlo a te o direttamente al Settore Mobilità: se arriva a te, invialo a erasmusout@unive.it." },
  { id: "post-rit-4", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Aspetta che il Settore Mobilità ti contatti per la procedura di riconoscimento crediti: parte da loro, quando hanno ricevuto il tuo Transcript of Records. La conversione dei voti segue le indicazioni della pagina www.unive.it/ects." },
  { id: "post-rit-5", fase: "Rientro", gruppoZaino: "Dopo", condizionale: true,
    testo: "Sappi in anticipo tre regole del riconoscimento: non puoi rifiutare il voto di un esame che risulta superato nel Transcript of Records; non esistono riconoscimenti parziali (se superi solo alcune componenti di un esame di Ca' Foscari, ti vengono riconosciute con il titolo originale fra i crediti in sovrannumero); e viene riconosciuto solo ciò che compare sia nel Transcript of Records sia nell'OLA." },
  { id: "post-rit-6", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Invia tutta la documentazione entro il termine di rendicontazione indicato per il tuo anno sulla pagina delle procedure: serve all'ufficio per rendicontare il progetto, ed è una scadenza secca." },
  { id: "post-rit-3", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Compila il questionario finale UE (Participant Report - EU Survey) al termine della procedura di riconoscimento crediti." },
  { id: "post-rit-7", fase: "Rientro", gruppoZaino: "Dopo", condizionale: true,
    testo: "Non laurearti prima che il riconoscimento in carriera delle attività svolte in Erasmus sia stato completato: se lo fai la mobilità viene considerata nulla e ti viene chiesta la restituzione del finanziamento." },
];
