// ============================================================
// CHECKLIST DELLA DOMANDA — "cosa fare e quando"
// ------------------------------------------------------------
// I passi da spuntare durante la candidatura Erasmus.
// Lo STATO delle spunte (fatto / da fare) NON sta qui: viene
// salvato nello "zaino unico" in localStorage. Qui c'è solo
// l'ELENCO dei passi (i dati), separato dal codice.
//
// ✅ PASSI REALI, validati sul bando ufficiale 2026/2027
//    (PDF in /fonti, riferimenti agli articoli del bando).
//
// Ogni voce ha:
//  - id:    identificatore unico e STABILE (non cambiarlo: è la
//           chiave con cui si ricorda se la voce è spuntata)
//  - testo: cosa deve fare lo studente
// ============================================================

const CHECKLIST = [
  { id: "chk-requisiti",     testo: "Verificare di avere i requisiti: iscrizione attiva e CFU minimi verbalizzati nel libretto (6/24/42 per la triennale, 6/24 per la magistrale) entro le 23:59 del 25/02/2026." },
  { id: "chk-mete",          testo: "Studiare le destinazioni su unive.it/erasmus-studio: area disciplinare, offerta formativa, requisiti linguistici e restrizioni di ogni meta." },
  { id: "chk-pdf",           testo: "Leggere le schede delle mete scelte (scadenze dell'ateneo ospitante e prerequisiti) e sceglierne fino a 5 in ordine di priorità." },
  { id: "chk-lingua",        testo: "Verificare il livello di lingua richiesto da ogni destinazione (l'eventuale prova si presenta solo dopo la selezione)." },
  { id: "chk-verbalizzati",  testo: "Controllare che tutti gli esami sostenuti risultino verbalizzati nel libretto: niente autocertificazioni, contattare Campus e docenti se manca qualcosa." },
  { id: "chk-spm",           testo: "Compilare la candidatura online in Esse3 (questionario + iscrizione al bando) tra il 02/02 e il 25/02/2026 ore 12:00. Nessun allegato va caricato." },
  { id: "chk-isee",          testo: "Se rientri nelle categorie 'minori opportunità' (es. ISEE fino a 27.948,60 €): dare il consenso ISEE in candidatura e richiedere l'attestazione 2026 entro il 31/03/2026." },
  { id: "chk-graduatoria",   testo: "Controllare la graduatoria nell'area riservata (pubblicazione entro il 25/03/2026)." },
  { id: "chk-accettazione",  testo: "Se vincitore: accettare il posto entro le 12:00 del 27/03/2026 col modulo indicato dal bando, poi verificare subito le scadenze di application dell'ateneo ospitante." }
];
