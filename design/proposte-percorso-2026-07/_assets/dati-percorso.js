/* ============================================================
   DATI DEMO DEL PERCORSO — mockup P0 (ondata PERCORSO, 2026-07)
   Solo dimostrativo: mete e coordinate vengono da dati-demo.js (reali);
   qui vivono le SCADENZE del bando e la CHECKLIST, che nel sito reale
   sono l'estensione additiva dei metadati prevista in P3.
   NON è il contratto dati finale: serve a far "vedere" il planner.

   Regole rispettate nel mockup (dal PLAN):
   - ogni scadenza ha una FONTE {etichetta, url} con url HTTPS pubblico;
   - le date sono orari civili italiani (Europe/Rome), lette dal motore
     con un unico parser, mai new Date(stringa) diretto;
   - stato formale del bando a 4 valori.
   ============================================================ */
var PERCORSO_DEMO = {
  /* "Oggi" fittizio del mockup: fissato per mostrare un countdown vivo
     a prescindere da quando si guarda la demo. */
  oggi: "2026-07-14",

  ateneoDemo: "sapienza",

  bando: {
    nome: "Erasmus+ Studio 2026/27 — Sapienza",
    /* aperto | ciclo-attivo | scaduto | non-pubblicato */
    stato: "aperto",
    fonte: {
      etichetta: "Bando Erasmus+ Studio Sapienza 2026/27",
      url: "https://www.uniroma1.it/it/pagina/erasmus-studio"
    },
    verificataIl: "2026-07-12"
  },

  /* Stazioni dell'itinerario (= scadenze del ciclo). tipo:
     apertura | candidatura | allegati | chiusura | graduatoria |
     accettazione | learning-agreement */
  scadenze: [
    { id: "apertura", titolo: "Apertura del bando", tipo: "apertura",
      data: "2026-06-20T12:00", passata: true,
      testo: "Il bando è online. Leggilo e prepara le credenziali del portale.",
      fonte: { etichetta: "Pagina Erasmus Studio — Sapienza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "webinar", titolo: "Webinar informativo di facoltà", tipo: "apertura",
      data: "2026-06-28T15:00", passata: true,
      testo: "Incontro di orientamento della Facoltà di Giurisprudenza.",
      fonte: { etichetta: "Ufficio Erasmus Giurisprudenza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "domanda", titolo: "Compilazione domanda online", tipo: "candidatura",
      data: "2026-07-24T14:00", corrente: true,
      testo: "Scegli e ordina le mete sul portale Infostud. L'ordine conta per l'assegnazione.",
      fonte: { etichetta: "Portale Infostud — Domanda Erasmus", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "allegati", titolo: "Caricamento allegati (ISEE, autocertificazioni)", tipo: "allegati",
      data: "2026-07-24T14:00",
      testo: "ISEE 2026 valido e autocertificazione della media esami.",
      fonte: { etichetta: "Istruzioni allegati — Sapienza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "chiusura", titolo: "Chiusura delle candidature", tipo: "chiusura",
      data: "2026-07-28T14:00",
      testo: "Ultimo momento per confermare la domanda. Dopo non si modifica più.",
      fonte: { etichetta: "Bando Erasmus+ Studio 2026/27", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "graduatoria", titolo: "Pubblicazione della graduatoria", tipo: "graduatoria",
      data: "2026-09-15T12:00", futura: true,
      testo: "Escono gli esiti e le sedi assegnate.",
      fonte: { etichetta: "Graduatorie Erasmus — Sapienza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "accettazione", titolo: "Accettazione del posto", tipo: "accettazione",
      data: "2026-09-25T12:00", futura: true,
      testo: "Conferma la sede assegnata entro la scadenza per non perderla.",
      fonte: { etichetta: "Istruzioni accettazione — Sapienza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" },

    { id: "learning", titolo: "Learning Agreement", tipo: "learning-agreement",
      data: "2026-11-30T12:00", futura: true,
      testo: "Concorda gli esami con il coordinatore e la sede ospitante.",
      fonte: { etichetta: "Learning Agreement — Sapienza", url: "https://www.uniroma1.it/it/pagina/erasmus-studio" },
      verificataIl: "2026-07-12" }
  ],

  /* Voci checklist collegate alle scadenze (scadenzaId). fatta:true = spuntata.
     azionabile:true = dipende dallo studente (per il "Sei in linea?"). */
  checklist: [
    { id: "leggi-bando", testo: "Leggi il bando ufficiale 2026/27", scadenzaId: "apertura", fatta: true, azionabile: true, minuti: 20 },
    { id: "spid", testo: "Attiva le credenziali del portale (SPID/Infostud)", scadenzaId: "apertura", fatta: true, azionabile: true, minuti: 15 },
    { id: "scegli-mete", testo: "Scegli almeno 3 mete e mettile in ordine di priorità", scadenzaId: "domanda", fatta: false, azionabile: true, minuti: 30 },
    { id: "verifica-lingua", testo: "Verifica il requisito di lingua delle mete scelte", scadenzaId: "domanda", fatta: false, azionabile: true, minuti: 15 },
    { id: "isee", testo: "Richiedi/carica l'ISEE 2026", scadenzaId: "allegati", fatta: false, azionabile: true, minuti: 40 },
    { id: "media-esami", testo: "Prepara l'autocertificazione della media esami", scadenzaId: "allegati", fatta: false, azionabile: true, minuti: 20 },
    { id: "conferma", testo: "Conferma e invia la domanda", scadenzaId: "chiusura", fatta: false, azionabile: true, minuti: 10 }
  ],

  /* Le 3 rotte preferite (ordine = priorità) — id di mete reali in dati-demo.js */
  preferite: ["sap-ius-salzburg", "sap-ius-assas-p2", "sap-ius-complutense"]
};
