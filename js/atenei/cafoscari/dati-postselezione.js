// ============================================================
// CHECKLIST POST-SELEZIONE — "cosa fare dopo aver vinto"
// ------------------------------------------------------------
// Fonte: Procedure outgoing 2026/2027, Ca' Foscari (aggiornata
// 10/04/2026). https://www.unive.it/pag/49167/
//
// Ogni voce ha:
//  - id:         stabile (chiave dello zaino — non cambiarlo)
//  - fase:       gruppo di appartenenza (mostrato come sotto-intestazione)
//  - gruppoZaino: capitolo "Lo zaino" (BR6, DISEGNO_BRAND.md §3) — "Prima" |
//                "Durante" | "Dopo" la partenza. Se assente, il codice
//                usa "Prima" come fallback (vedi renderChecklistPost).
//  - testo:      cosa deve fare lo studente
// ============================================================

var CHECKLIST_POST = [
  // ---- Accettazione ----
  { id: "post-acc-1", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Accetta il posto Erasmus sulla piattaforma online indicata nel Bando, entro la scadenza indicata nel Bando." },
  { id: "post-acc-2", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Controlla regolarmente l'email istituzionale (matricola@stud.unive.it): tutte le comunicazioni arrivano lì." },
  { id: "post-acc-3", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Attendi che il Settore Mobilità ti nomini ufficialmente all'università ospitante." },
  { id: "post-acc-4", fase: "Accettazione", gruppoZaino: "Prima",
    testo: "Fai la application all'università ospitante: trova procedure e scadenze sul loro sito e invia i documenti in tempo." },

  // ---- Learning Agreement ----
  { id: "post-la-1", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Cerca sul sito dell'università ospitante i corsi compatibili con il tuo piano di studi." },
  { id: "post-la-2", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Concorda il piano con il Departmental Coordinator (docente referente a Ca' Foscari per il tuo scambio)." },
  { id: "post-la-3", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "Compila e fai firmare l'Online Learning Agreement (OLA) su learning-agreement.eu (firma digitale tua e del Coordinator)." },
  { id: "post-la-4", fase: "Learning Agreement", gruppoZaino: "Prima",
    testo: "(Solo se fai ricerca tesi) Compila anche il Learning Agreement per ricerca tesi, concordato con il relatore." },

  // ---- Documenti pre-partenza ----
  { id: "post-doc-1", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Verifica che carta d'identità o passaporto siano validi per tutto il periodo della mobilità." },
  { id: "post-doc-2", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Se vai in un paese non-UE che lo richiede (es. Turchia), richiedi il visto per tempo." },
  { id: "post-doc-3", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Controlla con la ASL la copertura sanitaria: Tessera Sanitaria Europea (TEAM/EHIC) o assicurazione integrativa." },
  { id: "post-doc-4", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Firma il Contratto Finanziario (Grant Agreement) con il Settore Mobilità — obbligatorio per partire e ricevere la borsa." },
  { id: "post-doc-5", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Firma la dichiarazione liberatoria di responsabilità (alla firma del contratto)." },
  { id: "post-doc-6", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Fai il test linguistico online (OLS), se richiesto dopo la firma del contratto." },
  { id: "post-doc-7", fase: "Documenti pre-partenza", gruppoZaino: "Prima",
    testo: "Registrati su viaggiaresicuri.it e informati sulla sicurezza della destinazione." },

  // ---- Arrivo ----
  { id: "post-arr-1", fase: "Arrivo", gruppoZaino: "Durante",
    testo: "Fai firmare la Conferma di Arrivo all'ufficio Erasmus dell'università ospitante e inviala a erasmusout@unive.it entro 7 giorni dall'inizio." },
  { id: "post-arr-2", fase: "Arrivo", gruppoZaino: "Durante",
    testo: "Apporta eventuali Variazioni all'OLA entro 30 giorni dall'inizio dei corsi." },

  // ---- Rientro ----
  { id: "post-rit-1", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Fai firmare la Conferma di Partenza all'ufficio Erasmus ospitante e inviala a erasmusout@unive.it." },
  { id: "post-rit-2", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Recupera il Transcript of Records (ToR) e invialo al Settore Mobilità di Ca' Foscari." },
  { id: "post-rit-3", fase: "Rientro", gruppoZaino: "Dopo",
    testo: "Completa il questionario finale UE (Participant Report — EU Survey)." },
];
