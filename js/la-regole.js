// Regole procedurali verificate per il Learning Agreement v2.
// È un file dati: nessuna regola viene riutilizzata per un ciclo o un ambito
// diverso. Il filtro e i controlli vivono in js/puro.js.
(function (radice) {
  "use strict";

  var SAPIENZA_GUIDA = {
    url: "https://www.uniroma1.it/sites/default/files/field_file_allegati/guida_erasmus_2026_2027.pdf",
    title: "Guida Erasmus+ studio Sapienza 2026/2027"
  };
  var CAFOSCARI_PROCEDURA = {
    url: "https://www.unive.it/pag/49168/",
    title: "Ca' Foscari — Procedure Erasmus+ per studio 2026/2027"
  };
  var CAFOSCARI_FAQ = {
    url: "https://www.unive.it/pag/fileadmin/user_upload/ateneo/internazionale/documenti/andare_estero/studio/erasmus_studio/erasmus_out_2026_2027/FAQs_-_OLA__ENG_.pdf",
    title: "Ca' Foscari — FAQ ufficiali OLA 2026/2027"
  };

  radice.ERASMUSWIZ_LA_REGOLE = Object.freeze([
    {
      id: "sap-home-not-passed", university: "sapienza", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "block",
      title: "Gli esami di casa devono essere ancora da sostenere",
      message: "Nel piano proposto inserisci attività del tuo percorso non ancora superate.",
      check: "home-not-passed", sources: [SAPIENZA_GUIDA]
    },
    {
      id: "sap-outside-plan-prior-approval", university: "sapienza", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "warning",
      title: "Attività fuori piano",
      message: "Un'attività fuori piano richiede prima l'approvazione della modifica del piano di studi.",
      sources: [SAPIENZA_GUIDA]
    },
    {
      id: "sap-route-ewp-or-traditional", university: "sapienza", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "info",
      title: "Segna il percorso usato",
      message: "Annota se la pratica segue EWP oppure il percorso tradizionale indicato dall'ateneo.",
      sources: [SAPIENZA_GUIDA]
    },
    {
      id: "sap-changes-personal-page", university: "sapienza", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "info",
      title: "Le modifiche passano dalla pagina personale",
      message: "Registra ogni variazione attraverso la procedura della pagina personale Sapienza.",
      sources: [SAPIENZA_GUIDA]
    },
    {
      id: "sap-transcript-names", university: "sapienza", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "warning",
      title: "Nomi coerenti con il Transcript",
      message: "Al rientro confronta i nomi delle attività con quelli riportati nel Transcript.",
      sources: [SAPIENZA_GUIDA]
    },
    {
      id: "cf-home-code-required", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "block",
      title: "Codice dell'attività Ca' Foscari richiesto",
      message: "Completa il codice di ogni esame di casa prima di considerare pronta la proposta.",
      check: "home-code-required", sources: [CAFOSCARI_PROCEDURA, CAFOSCARI_FAQ]
    },
    {
      id: "cf-draft-before-ola", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "info",
      title: "Prima la proposta al coordinatore, poi OLA",
      message: "Condividi la proposta con l'Academic Coordinator prima di inserirla nell'Online Learning Agreement.",
      sources: [CAFOSCARI_PROCEDURA, CAFOSCARI_FAQ]
    },
    {
      id: "cf-host-code-optional", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "info",
      title: "Codice del corso host facoltativo",
      message: "Il codice del corso ospitante può restare vuoto; non blocca la proposta.",
      sources: [CAFOSCARI_FAQ]
    },
    {
      id: "cf-credits-not-exact", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "warning",
      title: "ECTS e CFU non devono coincidere esattamente",
      message: "Una differenza tra ECTS e CFU va valutata con il coordinatore, ma non blocca da sola la proposta.",
      sources: [CAFOSCARI_FAQ]
    },
    {
      id: "cf-change-30-days", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "warning",
      title: "Promemoria modifiche entro 30 giorni",
      message: "Il promemoria parte solo dalla data di inizio lezioni che inserisci tu.",
      relativeDeadline: { days: 30, baseEvent: "classesStartedAt" },
      sources: [CAFOSCARI_PROCEDURA, CAFOSCARI_FAQ]
    },
    {
      id: "cf-one-activity-passed", university: "cafoscari", cycle: "2026/27",
      scope: "all", verifiedAt: "2026-08-02", severity: "info",
      stage: "recognition",
      title: "Almeno un'attività OLA superata",
      message: "Questa informazione riguarda la convalida al rientro e non rende pronta o incompleta la proposta.",
      sources: [CAFOSCARI_FAQ]
    }
  ]);
})(typeof globalThis !== "undefined" ? globalThis : this);
