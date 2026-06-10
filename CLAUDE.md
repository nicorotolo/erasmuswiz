# Istruzioni di progetto — ErasmusWiz

## Regola permanente: aggiornare lo stato a fine sessione

- A OGNI chiusura di sessione (o quando l'utente dice "abbiamo finito",
  "chiudiamo", "per oggi basta", o comunque a fine di un blocco di lavoro),
  AGGIORNA SEMPRE il file `STATO_DEL_SITO.md` prima di salutare.
- Cosa aggiornare in `STATO_DEL_SITO.md`:
  - la **data** in alto ("Ultimo aggiornamento");
  - la **fase raggiunta** e la tabella delle fasi (sezione 2);
  - lo **stato dei contenuti** (sezione 6);
  - i **prossimi passi** (sezione 8).
- Se durante la sessione sono stati creati/rimossi file, aggiorna anche la
  mappa dei file (sezione 4).
- Conferma all'utente, in una riga, che `STATO_DEL_SITO.md` è stato aggiornato.

## Contesto del progetto

- Sito 100% statico (HTML/CSS/JS puro). Nessun framework/backend/database/login.
- Due regole d'oro: (1) codice separato dai dati (`js/dati-*.js`);
  (2) "zaino unico" in localStorage (account-ready).
- I documenti-bussola sono `PROGETTO_ERASMUS.md` (strategia) e
  `STATO_DEL_SITO.md` (stato aggiornato). Leggerli a inizio sessione.
