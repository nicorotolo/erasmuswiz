// ============================================================
// PORTA "IN ATTESA" — SAPIENZA
// "Ho inviato la domanda, aspetto la graduatoria."
// ------------------------------------------------------------
// Fonti: pagina ufficiale "Bando Erasmus+ 2026-2027 per studio"
// (uniroma1.it) per il calendario; "INFORMAZIONI GENERALI —
// STUDENTI ERASMUS OUTGOING A.A. 2025/2026" (Settore Erasmus) per
// cio' che segue l'accettazione; pagine di Facolta' (Economia,
// CoRIS) per la finestra di accettazione.
//
// ⚠️ DIFFERENZA STRUTTURALE DA CA' FOSCARI, da non appiattire.
//    Alla Sapienza la graduatoria esce in DUE tempi (provvisoria,
//    poi definitiva) e c'e' una SECONDA finestra di candidatura a
//    giugno sui posti rimasti. L'attesa quindi non e' un blocco
//    unico: ha un punto intermedio in cui si puo' ancora reagire.
//
// ⚠️ LA FINESTRA DI ACCETTAZIONE LA FISSA LA FACOLTA', non il
//    centro: Economia dichiara 5 giorni, CoRIS 7. Qui non si scrive
//    un numero perche' sarebbe falso per meta' degli studenti.
//    Stessa scelta fatta in dati-postselezione.js (sap-post-acc-1).
//
// ⚠️ REGOLA DEL CICLO (gate G1). Le date del 2026/27 stanno in
//    `esempioCiclo` e servono a dare la MISURA dell'attesa, non a
//    fissare scadenze attuali. Il 2027/28 sposta tutto di un anno.
//
// ⚠️ `inVerifica: true` — il calendario viene dalla pagina del bando,
//    non dall'articolato: la meccanica di assegnazione delle sedi
//    varia per Facolta' (alcune fanno incontri di assegnazione) e va
//    confermata Facolta' per Facolta' prima del test con studenti.
// ============================================================

var ATTESA_INFO = {
  titolo: "Hai inviato la domanda. Adesso si aspetta.",
  sottotitolo: "È la fase in cui non dipende più da te — ma è anche quella in cui puoi portarti avanti. Ecco cosa succede e cosa conviene fare intanto.",

  quantoDura: "Circa un mese fra la chiusura delle domande e la graduatoria provvisoria, e ancora qualche settimana fino alla definitiva. Poi tutto accelera: la finestra per accettare la sede è di pochi giorni.",

  tappe: [
    { titolo: "La commissione valuta",
      testo: "La selezione avviene per Facoltà, sui criteri dichiarati nel bando. Da qui in poi non puoi più modificare la domanda." },
    { titolo: "Esce la graduatoria provvisoria",
      testo: "È il primo esito, e non è quello definitivo: è il momento in cui si segnalano errori, se ce ne sono." },
    { titolo: "Esce la graduatoria definitiva",
      testo: "Qualche settimana dopo la provvisoria. È questa che assegna i posti." },
    { titolo: "Ti viene assegnata la sede",
      testo: "Alcune Facoltà lo fanno con incontri di assegnazione dedicati. La sede assegnata non è modificabile." },
    { titolo: "Accetti la sede",
      testo: "La finestra la fissa la tua Facoltà ed è breve. Se rinunci, il posto passa a chi ti segue in graduatoria." },
    { titolo: "Sapienza ti nomina, poi tocca a te",
      testo: "È l'ufficio Erasmus a comunicare il tuo nome all'ateneo ospitante. Da quel momento sei tu a dover completare la «Application Procedure» secondo le loro istruzioni e le loro scadenze." }
  ],

  intanto: [
    { titolo: "Controlla ogni giorno la posta istituzionale",
      testo: "Tutte le comunicazioni ufficiali arrivano sull'email istituzionale, comprese quelle con pochi giorni di tempo per rispondere. Una casella non letta è il modo più comune di perdere un posto già vinto." },
    { titolo: "Guarda le scadenze dell'ateneo che hai chiesto",
      testo: "L'application la fissa l'università ospitante, non Sapienza. Sapere fin da ora quando apre e cosa chiede ti evita di scoprirlo con una settimana di margine." },
    { titolo: "Comincia a guardare i corsi",
      testo: "Nel Learning Agreement potrai inserire solo esami del tuo piano di studi non ancora sostenuti. Se quelli che ti servono non ci sono, il piano va rifatto con i referenti di Facoltà: meglio scoprirlo adesso." },
    { titolo: "Verifica di poter rinnovare l'iscrizione",
      testo: "Senza iscrizione regolare per l'anno della mobilità il contributo integrativo non viene pagato. Se ti sei candidato in triennale ma partirai da magistrale, informati subito su come si formalizza." },
    { titolo: "Controlla i documenti",
      testo: "Carta d'identità o passaporto validi per tutto il periodo. Se sei cittadino extra-UE, informati per tempo su visto e permesso di soggiorno." },
    { titolo: "Se resti fuori, c'è una seconda finestra",
      testo: "Sui posti rimasti si riapre una seconda scadenza, di solito a giugno — ma la mobilità è per il solo secondo semestre. Vale la pena sapere già quali destinazioni restano scoperte." }
  ],

  attenzione: [
    { titolo: "La provvisoria non è la definitiva",
      testo: "Un posto letto sulla graduatoria provvisoria non è ancora assegnato. Se qualcosa non torna, quello è il momento di segnalarlo." },
    { titolo: "La finestra per accettare la fissa la tua Facoltà",
      testo: "Non c'è un termine unico di ateneo: alcune Facoltà danno 5 giorni, altre 7. Il numero che vale è quello scritto nella comunicazione che ricevi." },
    { titolo: "La sede assegnata non si cambia",
      testo: "Non è possibile chiedere una destinazione diversa da quella assegnata: la scelta vera l'hai fatta al momento della domanda." },
    { titolo: "Vincere non vuol dire essere ammesso",
      testo: "Dopo la nomination devi ancora superare l'application dell'ateneo ospitante, che verifica i suoi requisiti per conto proprio." },
    { titolo: "La seconda finestra è solo per il secondo semestre",
      testo: "Chi entra dalla seconda scadenza parte nel secondo semestre: se ti serve il primo, quella strada non la sostituisce." }
  ],

  esempioCiclo: {
    ciclo: "2026/27",
    domandaEntro: "2026-02-27",
    graduatoriaProvvisoria: "fine marzo – aprile 2026",
    graduatoriaDefinitiva: "aprile – maggio 2026",
    secondaScadenza: "2026-06-15",
    nota: "Misura dell'attesa nel ciclo 2026/27: ~1 mese fino alla provvisoria, ~2 mesi fino alla definitiva. La seconda finestra riguardava i soli posti residui, con mobilità nel secondo semestre."
  },

  fonte: "Bando Erasmus+ 2026-2027 per studio (uniroma1.it) + Informazioni generali studenti Erasmus outgoing A.A. 2025/26, Settore Erasmus Sapienza",
  fonteUrl: "https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio",
  verificatoIl: "2026-07-28",
  inVerifica: true // meccanica di assegnazione sedi da confermare per Facoltà
};
