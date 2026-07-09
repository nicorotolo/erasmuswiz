// ============================================================
// STIMA BORSA ERASMUS PER GRUPPO-PAESE — CA' FOSCARI (OP4)
// ------------------------------------------------------------
// Fonte: fonti/Bando_Erasmus__per_studio__Europa__2026_2027.pdf (Art. 6 +
// tabella riepilogativa) e fonti/Allegato_1.pdf ("Importi borse comunitarie
// definite dall'Agenzia Nazionale Erasmus+ INDIRE per mobilità fisica").
// Dato semplice, aggiornamento annuale (bussola §3: mai un'affermazione
// senza data e fonte — vedi `aggiornatoAl`).
// "Olanda" è incluso come alias di "Paesi Bassi": alcune mete della
// mappatura usano il nome comune invece del nome ufficiale del gruppo.
// ============================================================

var BORSE_INFO = {
  fonte: "Ca' Foscari — Bando Erasmus+ per studio Europa 2026/2027, Allegato 1 (INDIRE)",
  aggiornatoAl: "2026-07-08",
  gruppiPaese: [
    {
      nome: "Gruppo 1 — costo della vita alto",
      paesi: [
        "Austria", "Belgio", "Danimarca", "Finlandia", "Francia", "Germania",
        "Irlanda", "Islanda", "Liechtenstein", "Lussemburgo", "Norvegia",
        "Paesi Bassi", "Olanda", "Svezia"
      ],
      importoMensile: 400
    },
    {
      nome: "Gruppo 2 — costo della vita medio",
      paesi: [
        "Cipro", "Estonia", "Grecia", "Lettonia", "Malta", "Portogallo",
        "Repubblica Ceca", "Slovacchia", "Slovenia", "Spagna"
      ],
      importoMensile: 350
    },
    {
      nome: "Gruppo 3 — costo della vita basso",
      paesi: [
        "Bulgaria", "Croazia", "Lituania", "Polonia", "Macedonia del Nord",
        "Repubblica del Nord Macedonia", "Romania", "Serbia", "Turchia",
        "Ungheria"
      ],
      importoMensile: 350
    }
  ],
  // Top-up per studentesse/studenti con minori opportunità (ISEE ≤ 27.948,60
  // o altre categorie dell'Art. 6 comma 2 del bando): importo fisso, non a
  // fasce come a Sapienza (fonte Art. 6 comma 3 lettera c).
  integrazioneMinoriOpportunita: {
    tipo: "flat",
    etichetta: "Top-up minori opportunità",
    importoMensile: 250
  },
  note: "Stima del contributo mensile UE, per gruppo-paese di destinazione. Il top-up per minori opportunità si aggiunge in base ai requisiti dell'Art. 6 del bando (ISEE o altre categorie). Verifica sempre l'importo definitivo sul bando ufficiale."
};
