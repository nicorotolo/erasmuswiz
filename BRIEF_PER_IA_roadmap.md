# ErasmusWiz — Stato dell'arte (briefing per un'IA)

> Incolla tutto questo a un'IA e chiedile la roadmap (la richiesta è in fondo).

## 1. Cos'è
Cruscotto web per studenti che fanno domanda **Erasmus all'Università Ca' Foscari
Venezia**. Aiuta a capire i requisiti del bando, scegliere le mete per
compatibilità, seguire le scadenze e spuntare una checklist di candidatura.
È un progetto personale, non ufficiale (disclaimer in pagina).

## 2. Profilo di chi lo costruisce (vincolo importante)
Il proprietario è **principiante assoluto** in sviluppo web/app: non dà per
scontati framework, terminale, package manager, database, deploy, API.
Vuole soluzioni **semplici, manutenibili, beginner-friendly**, senza
over-engineering. Niente backend/framework/database/login se non strettamente
giustificati. Risposte concise, dirette, con passi e file espliciti.

## 3. Stack e architettura
- Sito **100% statico**: solo HTML + CSS + JavaScript puro. Nessun framework,
  build step, backend, database o login.
- Hosting: **GitHub Pages** (https://nicorotolo.github.io/erasmuswiz/), deploy
  automatico al push su `main`.
- Analytics: **GoatCounter** (privacy-friendly, già integrato).
- **2 regole d'oro del progetto:**
  1. *Codice separato dai dati*: i contenuti vivono in file `js/dati-*.js`; la
     logica sta in `js/app.js`. Per aggiornare un contenuto si tocca solo il file dati.
  2. *"Zaino unico"*: tutto lo stato dello studente sta in un solo oggetto in
     `localStorage` (`ZAINO = { profilo, checklist }`), già pronto per un futuro
     passaggio a un account server senza riscrivere la logica.
- File principali: `index.html`, `css/style.css`, `js/app.js`,
  `js/dati-bando.js` (requisiti), `js/dati-mete*.js` (5 file, uno per
  dipartimento), `js/dati-scadenze.js` (timeline), `js/dati-checklist.js`.

## 4. Cosa è GIÀ fatto e funzionante (design "v2")
**Funzioni:**
- 4 tab in navigazione (mobile-first, barra in basso): **Oggi** (missione del
  giorno + percorso a tappe + countdown dal vivo + barra preparazione), **Mete**
  (catalogo filtrabile con motore di compatibilità), **Scadenze** (timeline con
  conto alla rovescia), **Checklist** (passi spuntabili + barra progresso).
- 2 schermate ausiliarie: **Idoneità** (requisiti del bando) e **Profilo**.
- **Motore di compatibilità**: filtro per area disciplinare + punteggio pesato
  0-100 (lingua 50 / livello accademico 30 / posti 20) + semaforo onesto
  (✅ compatibile / ⚠️ con riserve / 🔒 non accessibile, con spiegazione di cosa
  manca). Gestisce in modo onesto i dati lingua mancanti (mostra "verifica la
  lingua" invece di inventare un punteggio).
- Persistenza locale: profilo e checklist salvati in `localStorage`.

**UX/Design:**
- Design system curato: dark mode, mascotte "Wiz", micro-celebrazioni al
  completamento, font dedicati. È la parte più matura del progetto.

**Dati (reali, dal bando ufficiale 2026/27):**
- **249 mete su 5 dipartimenti**: Economia (58), Management (76), Lingue (24),
  Scienze (25), Filosofia (66). Quasi tutte complete di lingua (CEFR), scadenze
  ospitante e link alla scheda PDF ufficiale.
- Requisiti bando, scadenze Ca' Foscari e checklist validati sul PDF ufficiale.

**Automazione dati:**
- Un'automazione (OpenAI Codex) gira periodicamente e completa i campi mancanti
  delle mete (lingua/scadenze), facendo merge chirurgico sui file `js/dati-*.js`
  e push su GitHub. *Questa parte (la "mappatura") è già coperta e NON è oggetto
  della roadmap richiesta.*

## 5. Cosa NON è ancora fatto / limiti noti
- **Zero test con utenti reali.** Il prodotto è curato ma non l'ha mai usato uno
  studente vero. Rischio: rifinire dettagli che non interessano e ignorare
  frizioni reali.
- **Scope stretto**: una sola università, e la mappatura completa copre 5
  dipartimenti su molti. (Filosofia è ~70% completa.)
- **Nessuna fase post-selezione**: oggi il sito serve la fase di *candidatura*.
  Dopo l'assegnazione della meta non c'è nulla (learning agreement, alloggio,
  burocrazia pre-partenza, ecc.).
- **Nessuna PWA / notifiche**: niente "aggiungi a schermata home" né promemoria
  scadenze.
- **Nessun account/login** (ma lo "zaino" in localStorage è già predisposto).
- **Discoverability ~nulla**: niente SEO, niente strategia per farsi trovare
  dagli studenti.
- **Manutenzione annuale**: bando, scadenze e checklist cambiano ogni anno e
  vanno ri-validati a mano.
- **Frizioni tecniche**: la cartella di lavoro è dentro OneDrive, che ogni tanto
  blocca operazioni git (lock su `.git`) — da tenere presente per il workflow.
- **Accessibilità e gestione errori** non sono state verificate sistematicamente.

## 6. Cosa ti chiedo (la richiesta)
Costruisci una **roadmap a tappe per l'evoluzione del sito OLTRE la mappatura
delle mete** (la mappatura dati è già gestita da un'automazione, NON includerla).

Concentrati su prodotto, funzionalità, UX, validazione e crescita. Per esempio
— ma proponi tu le priorità giuste: test con utenti reali, onboarding/profilo,
fase post-selezione, PWA/notifiche scadenze, accessibilità, SEO/discoverability,
strategia multi-università, eventuale account/login, manutenzione annuale dei
contenuti, iterazione guidata dagli analytics.

**Requisiti della roadmap:**
1. Organizzala in **fasi/tappe sequenziali**, ognuna con un obiettivo chiaro e un
   risultato verificabile.
2. Per ogni tappa separa nettamente: **MVP**, **nice-to-have**, **avanzato**,
   **da NON fare ancora**.
3. Rispetta i vincoli: principiante, sito statico, niente over-engineering,
   nessun costo/infra pesante se non chiaramente giustificato.
4. Sii **onesto** sulla difficoltà e sui trade-off; se una tappa è troppo
   complessa per un principiante, proponi una prima versione più semplice.
5. Metti per prima la tappa che dà più valore col minor sforzo, e spiega perché.
6. Indica, dove utile, come misurare il successo di ogni tappa.
