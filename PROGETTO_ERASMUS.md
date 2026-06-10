# PROGETTO ERASMUS — Documento-bussola

> Questo file è la "mappa" del progetto. Tienilo nella cartella del progetto e
> incollalo all'inizio di ogni nuova sessione con Claude (chat o Claude Code)
> per ripristinare il contesto. È l'equivalente del PROJECT_STATUS.md di UniAI.

---

## 1. L'IDEA IN UNA FRASE

Un cruscotto web che accompagna lo studente nella pratica Erasmus dall'inizio
alla partenza: inserisci i tuoi dati una volta, vedi solo le mete possibili per
te, e vieni guidato con scadenze e checklist passo-passo.

## 2. IL PROBLEMA

La pratica Erasmus è lunga, ramificata e ansiogena. Le scadenze, se sbagliate,
costano un anno. Le informazioni sono sparse e in burocratese. Nessuno
accompagna lo studente passo-passo. Il dolore vero NON è "scegliere tra troppe
mete" (sono poche per dipartimento) ma "gestire un processo nel tempo senza
sbagliare i tempi".

## 3. LA FORMA DEL PRODOTTO

NON è un wizard (non serve: poche mete per dipartimento).
È un CRUSCOTTO con tre blocchi + una fase successiva:

1. IDONEITÀ — requisiti del bando in chiaro (media, CFU, anno, lingua).
2. METE COMPATIBILI — solo le destinazioni accessibili al profilo, con indice
   di compatibilità. Lista chiara e filtrabile, non un albero decisionale.
3. TIMELINE DELLA DOMANDA — il cuore: scadenze reali, countdown, checklist
   "cosa fare e quando". È ciò che fa tornare lo studente più volte.
4. (Fase successiva) POST-SELEZIONE — quando sei stato preso, la checklist
   cambia e ti guida verso la partenza (learning agreement, alloggio, documenti).

## 4. CONFINI — COSA È v1 E COSA NO

### v1 (prossimi 2-3 mesi) — il minimo che dimostra valore
- Profilo studente salvato SUL DISPOSITIVO (localStorage), niente account.
- Mete filtrate per profilo, con indice di compatibilità.
- Scadenze + checklist + countdown per le mete scelte.
- Sito responsive (funziona benissimo su telefono e desktop, UN solo codice).
- UNA sola università: Ca' Foscari. UN dipartimento per iniziare.
- Tutto statico e gratuito (hosting Netlify, dominio ~10-15€/anno opzionale).

### Nice-to-have (dopo, SE la v1 funziona)
- Fase post-selezione (checklist che cambia stato).
- PWA: "aggiungi a schermata home" + notifiche scadenze.
- Più dipartimenti di Ca' Foscari.

### Avanzate (molto dopo, solo con trazione PROVATA)
- Altre università (la "larghezza" che porta volume vero).
- Terzo pagante (scuole di lingua, alloggi, banche): paga il PUBBLICO, non il
  sito. Possibile solo DOPO aver dimostrato traffico reale.

### DA NON COSTRUIRE ANCORA (decisione consapevole)
- Account / login / password.
- Server e database.
- App native su App Store / Play Store.
Motivo: introducono costi fissi, complessità tecnica e responsabilità GDPR
PRIMA che esista una base di utenti che li giustifichi.

## 5. ARCHITETTURA — LE DUE REGOLE D'ORO

### Regola 1: CODICE separato dai DATI
- I contenuti (requisiti, mete, scadenze di Ca' Foscari) vivono in FILE DATI
  (JSON), separati dal codice. Aggiornare una scadenza = cambiare una riga nel
  file dati, MAI toccare il codice. Aggiungere un'università domani = nuovo file
  dati. Questo rende sostenibili le 3-5 ore/settimana.

### Regola 2: "ACCOUNT-READY" — lo zaino unico
- Tutti i dati dello studente (profilo + mete scelte + stato checklist) vivono
  in UN UNICO oggetto, salvato in localStorage.
- Il giorno in cui servono gli account, lo STESSO oggetto verrà salvato su un
  server invece che sul dispositivo. Cambia DOVE, non COSA. Nessuna riscrittura.

## 6. PIANO IN FASI (cosa far costruire a Claude Code, in ordine)

NON costruire tutto insieme. Una fase, testi, poi avanti.

- Fase 1 — Scheletro + file dati con DATI FINTI (placeholder). Obiettivo: vedere
  che il cruscotto legge i dati e li mostra. Niente contenuti veri.
- Fase 2 — Blocco TIMELINE + countdown (il pezzo forte).
- Fase 3 — Blocco METE filtrabili per profilo + indice compatibilità.
- Fase 4 — Blocco IDONEITÀ (requisiti del bando).
- Fase 5 — Checklist con spunte salvate (localStorage, "zaino unico").
- POI: travaso dei contenuti VERI di Ca' Foscari nei file dati.

Principio: separa SEMPRE "funziona il codice?" da "i dati sono giusti?".

## 7. RIPARTIZIONE DELLE 3-5 ORE / SETTIMANA

- ~1h: codice / Claude Code (poco: con l'architettura giusta si tocca raramente).
- ~3h: contenuti e dati — procurare e validare le info Erasmus. È il 90% del
  valore e del rischio. È il fossato che nessun concorrente vuole scavare.
- ~1h: mostrare il cruscotto a 2-3 studenti Erasmus veri e guardarli usarlo.

## 8. RISCHI PRINCIPALI (in ordine)

1. ACCURATEZZA dei contenuti — un'info sbagliata fa sbagliare una scadenza a uno
   studente. È il rischio n.1. Validare coi contatti Ca' Foscari.
2. TRAFFICO da una sola università — limitato. La via d'uscita scelta è la
   LARGHEZZA (più università), ma solo dopo aver dimostrato il modello.
3. REPLICABILITÀ della FIDUCIA — replicare il codice è facile, replicare la
   validazione dei contenuti su nuove università no. Vero collo di bottiglia.

## 9. COSTI

- v1: ~0€ (Netlify gratis) + eventuale dominio ~10-15€/anno.
- Account (futuro, se mai): piano gratuito Supabase/Firebase all'inizio, poi
  costo a consumo + obblighi GDPR. Da affrontare solo con trazione provata.
