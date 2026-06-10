# BRIEF PER CLAUDE CODE — FASE 1

> ISTRUZIONI PER NICOLA: apri Claude Code in una CARTELLA NUOVA E VUOTA
> (non quella di UniAI). Incolla TUTTO il testo qui sotto come primo messaggio.
> Costruisci una sola fase alla volta: NON chiedere altre fasi finché questa
> non funziona e l'hai testata nel browser.

---

## CONTESTO DEL PROGETTO

Sto costruendo un cruscotto web per studenti che fanno domanda Erasmus
all'Università Ca' Foscari di Venezia. Sono un principiante: spiega in modo
semplice cosa fai e perché, e non dare per scontato che io conosca termini
tecnici.

VINCOLI TECNICI NON NEGOZIABILI:
- Sito 100% STATICO: solo HTML, CSS e JavaScript puro (vanilla). 
- NESSUN framework (no React, Vue, ecc.), NESSUna libreria esterna, NESSUN
  backend, NESSUN database, NESSUN sistema di build, NESSUN account/login.
- Deve poter essere pubblicato trascinando la cartella su Netlify Drop.
- Deve funzionare bene su telefono (responsive) e su desktop.
- LINGUA: interfaccia SOLO in italiano per ora. Niente toggle bilingue.
- I DATI devono stare in file SEPARATI dal codice (vedi sotto). Questa
  separazione è la regola più importante del progetto.

## ARCHITETTURA RICHIESTA

Due principi:
1. CODICE separato dai DATI. I contenuti (mete, scadenze) vivono in file dati
   JavaScript separati. Il codice li legge e costruisce la pagina. Aggiungere
   una meta o un'università domani = modificare SOLO i file dati, mai il codice.
2. "ACCOUNT-READY": tutti i dati dello studente (profilo + scelte + stato)
   devono stare in UN UNICO oggetto JavaScript, salvato in localStorage.
   In futuro questo stesso oggetto potrà essere salvato su un server senza
   riscrivere la logica. Per ora: solo localStorage.

## STRUTTURA FILE DA CREARE (Fase 1)

- index.html        -> la pagina
- css/style.css     -> stile (pulito, leggibile, responsive, mobile-first)
- js/app.js         -> logica: legge i dati e costruisce la pagina
- js/dati-mete.js   -> i DATI delle mete (separati dal codice)
- js/dati-scadenze.js -> le scadenze di Ca' Foscari (separate dal codice)
- README.md         -> spiegazione per me (principiante) di cosa fa ogni file
                       e come si aggiunge una meta

## COSA DEVE FARE LA FASE 1 (e SOLO questa)

Obiettivo della Fase 1: dimostrare che il cruscotto LEGGE i dati dai file
separati e li MOSTRA correttamente. Niente di più. NON costruire ancora il
profilo studente, il calcolo di compatibilità, i countdown o le checklist:
quelli sono fasi successive.

Concretamente, la pagina deve:
1. Leggere la lista delle mete da js/dati-mete.js e mostrarle come una lista
   di "schede" leggibili (una card per meta) con: università, città+paese,
   dipartimento, area disciplinare, coordinatore, posti (in linguaggio umano,
   es. "3 posti da 10 mesi - triennale"), requisiti linguistici, link al PDF.
2. Leggere le scadenze da js/dati-scadenze.js e mostrarle in una sezione
   "Scadenze" (per ora solo elenco con data leggibile, NIENTE countdown).
3. Essere responsive: su telefono le card stanno in colonna, su desktop in
   griglia.

## DATI DI ESEMPIO DA INSERIRE (sono dati VERI, usali come modello di formato)

In js/dati-mete.js inserisci questo array con UNA meta reale già pronta
(struttura da rispettare esattamente per le mete future):

```javascript
const METE = [
  {
    id: "amu-eco-0311",
    universita: "Aix-Marseille University (AMU) - Faculty of Economics and Management",
    citta: "Aix-en-Provence / Marseille",
    paese: "Francia",
    codiceErasmus: "F MARSEIL84",
    dipartimentoCf: "Economia",
    areeDisciplinari: [{ codice: "0311", nome: "Economics" }],
    coordinatoreCf: "Bastianello Lorenzo",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 6, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
      { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
      { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
    ],
    prerequisiti: "Corsi 3° anno triennale: min. 2 anni di studi in Economia o Management. Magistrale: min. 3 anni.",
    scadenzeOspitante: [
      { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
      { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
      { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
      { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
    ],
    alloggio: "Stanza in residenza su richiesta (CROUS). Assegnata a Aix-en-Provence o Marseille in base ai corsi.",
    visto: "Cittadini UE: nessun visto. Extra-UE: visto obbligatorio.",
    crediti: "30 ECTS/semestre, 60 ECTS/anno.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254565",
    linkSito: "http://www.univ-amu.fr/en",
    notePratiche: "Devi scegliere UN solo campus (Aix o Marseille), niente pendolarismo. Almeno 80% dei corsi nello stesso programma. Corsi serali di francese (SUL) = 4 crediti extra/semestre."
  }
];
```

In js/dati-scadenze.js inserisci:

```javascript
const SCADENZE_CAFOSCARI = [
  { cosa: "Apertura candidature", data: "2026-02-02T12:00", descrizione: "Si aprono le candidature sul portale Ca' Foscari." },
  { cosa: "Chiusura candidature", data: "2026-02-25T12:00", descrizione: "Ultimo momento per candidarsi. Nessuna proroga." }
];
```

## COME LAVORARE CON ME

- Procedi UN passo alla volta. Dopo aver creato i file, FERMATI e spiegami
  in modo semplice: cosa hai creato, come lo testo nel browser, e cosa
  dovrei vedere.
- Quando aggiungi codice, spiega in italiano semplice cosa fa, soprattutto
  le parti che un principiante non capirebbe.
- I pesi della compatibilità (per le fasi future) saranno: lingua 50%,
  livello 30%, posti 20% — tienilo a mente ma NON implementarlo ora.

## CRITERIO DI COMPLETAMENTO DELLA FASE 1

IMPORTANTE — COME TESTARE: aprire index.html con doppio click può impedire
a JavaScript di caricare i file dati separati (regola di sicurezza del
browser sui file locali). Spiegami in modo semplice come avviare un piccolo
SERVER LOCALE per testare correttamente (es. con un comando già presente sul
mio computer), e dimmi quale indirizzo aprire nel browser. Se vedo una pagina
bianca col doppio click, è questo il motivo, non un errore dei dati.

La Fase 1 è finita quando:
- avvio il server locale, apro l'indirizzo nel browser e vedo la meta di
  Aix-Marseille mostrata come scheda leggibile;
- vedo le due scadenze di Ca' Foscari elencate con data leggibile;
- ridimensionando la finestra, il layout si adatta (mobile e desktop);
- il README.md mi spiega come aggiungere una seconda meta modificando SOLO
  js/dati-mete.js.

Quando questi punti sono veri, fermati: testerò io prima di passare alla Fase 2.
