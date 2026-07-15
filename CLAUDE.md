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
- I documenti-bussola, da leggere a inizio sessione in quest'ordine:
  1. `STATO_DEL_SITO.md` (stato aggiornato)
  2. `ROADMAP.md` (piano di lavoro)
  3. `DISEGNO_BRAND.md` (design/brand, sessioni BRn in §3)
  4. `design/readme.md`
  `PROGETTO_ERASMUS.md` resta il documento di strategia generale: consultarlo
  quando servono le motivazioni di fondo, non serve rileggerlo ogni sessione.

## Skill di progetto

- `/sessione <id>` — apre una sessione di lavoro: legge i documenti-bussola
  nell'ordine giusto e implementa SOLO la sessione indicata (es. BR8).
- `/chiudi-sessione` — chiude la sessione: aggiorna `STATO_DEL_SITO.md`,
  commit e push (il push pubblica su GitHub Pages).

## Trappole note (Windows/OneDrive)

- Il percorso del progetto contiene spazi: citare SEMPRE i path tra virgolette
  nei comandi shell.
- Non annidare mai un percorso `erasmuswiz/` dentro il progetto: la radice del
  sito è QUESTA cartella (esiste una copia vecchia in `C:\Users\ASUS\erasmuswiz`
  da ignorare).
- Non passare codice JS con parentesi/`>` come argomenti non quotati a bash:
  crea file spuri nella radice del repo (è già successo).
