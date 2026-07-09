// ============================================================
// STIMA BORSA ERASMUS PER GRUPPO-PAESE — SAPIENZA (OP4)
// ------------------------------------------------------------
// Fonte: fonti/caso-bruno/638864454957146686_INFORMAZIONI_GENERALI_25_26.pdf
// (Sapienza, "INFORMAZIONI GENERALI — Studenti Erasmus Outgoing A.A.
// 2025/2026"), pp. 3-4, sezione "CONTRIBUTI MOBILITÀ".
// Dato semplice, aggiornamento annuale (bussola §3: mai un'affermazione
// senza data e fonte — vedi `aggiornatoAl`).
// "Olanda" è incluso come alias di "Paesi Bassi": alcune mete della
// mappatura usano il nome comune invece del nome ufficiale del gruppo.
// ============================================================

var BORSE_INFO = {
  fonte: "Sapienza — Informazioni generali Erasmus Outgoing A.A. 2025/2026 (pp. 3-4)",
  aggiornatoAl: "2026-07-08",
  gruppiPaese: [
    {
      nome: "Gruppo 1 — costo della vita alto",
      paesi: [
        "Austria", "Belgio", "Danimarca", "Finlandia", "Francia", "Germania",
        "Irlanda", "Islanda", "Liechtenstein", "Lussemburgo", "Norvegia",
        "Paesi Bassi", "Olanda", "Svezia",
        // Partner Countries (stesso importo del Gruppo 1, fonte p.3)
        "Regno Unito", "Svizzera"
      ],
      importoMensile: 350
    },
    {
      nome: "Gruppo 2 — costo della vita medio",
      paesi: [
        "Bulgaria", "Cipro", "Croazia", "Estonia", "Grecia", "Lettonia",
        "Lituania", "Macedonia del Nord", "Malta", "Polonia", "Portogallo",
        "Romania", "Serbia", "Slovacchia", "Spagna", "Repubblica Ceca",
        "Slovenia", "Turchia", "Ungheria"
      ],
      importoMensile: 300
    }
  ],
  // Contributo integrativo Sapienza/MUR (CISM), a fasce ISEE — solo per
  // residenti fiscalmente in Italia (fonte p.4). Per i residenti fiscalmente
  // all'estero le fasce sono diverse (fonte p.5, fasce A/B/C per Paese):
  // non riportate qui per non complicare una stima, il link fonte resta il
  // riferimento in caso di dubbio.
  integrazioneMinoriOpportunita: {
    tipo: "isee_a_fasce",
    etichetta: "Contributo integrativo Sapienza/MUR (CISM)",
    fasce: [
      { iseeMax: 27726.79, importoMensile: 500 },
      { iseeMax: 40000.00, importoMensile: 400 },
      { iseeMax: 55000.00, importoMensile: 300 },
      { iseeMax: null,     importoMensile: 200 }
    ]
  },
  note: "Stima del contributo mensile UE, per gruppo-paese di destinazione. Il contributo integrativo Sapienza/MUR si aggiunge in base all'ISEE (residenti in Italia) o alla fascia Paese (residenti all'estero). Verifica sempre l'importo definitivo sul bando ufficiale."
};
