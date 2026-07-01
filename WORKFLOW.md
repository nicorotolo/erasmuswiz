# Workflow ErasmusWiz — come tenere online e locale sempre allineati

> Obiettivo: **una sola fonte di verità = `main` su GitHub.**
> Sia tu (in locale) sia Codex (online, sull'altro PC) lavorate su `main`.
> Se segui la regola d'oro, non si creano mai più divergenze silenziose.

## La regola d'oro (2 mosse)

1. **Prima di metterti a lavorare:** doppio clic su **`SCARICA.bat`**
   → scarica da GitHub l'ultimo stato, comprese le mete che Codex ha
   aggiunto nel frattempo. Parti sempre allineato.

2. **Quando hai finito:** doppio clic su **`PUBBLICA.bat`**
   → registra le tue modifiche, assorbe le novità di Codex e pubblica.

Analogia: è come un documento condiviso. **Scarica** prima di scrivere,
**salva** quando hai finito. Se scrivi su una copia vecchia senza scaricare,
nascono due versioni diverse — ed è esattamente il pasticcio che abbiamo
appena sistemato.

## Perché serviva (cos'era successo)

- Codex, sull'altro PC, ha continuato a caricare mete su `main` (online).
- Tu lavoravi in locale su un branch vecchio (`feature/pipeline-imbuto`) senza
  scaricare le novità → online era avanti su 392 mete + architettura a 8 file,
  il locale aveva funzioni nuove (v2) mai pubblicate. Due versioni divergenti.
- In più l'`index.html` locale era rotto (salvataggio interrotto).

L'unificazione (`00-RIPARA-E-UNIFICA.bat`) ha preso la base online completa e
ci ha rimesso sopra le tue funzioni v2. Da lì in poi: solo `main`, regola d'oro.

## Convivenza con l'automazione Codex

Codex continua a fare il suo lavoro (caricare mete su `main` ogni pochi minuti).
Non devi fare nulla di speciale: `PUBBLICA.bat` fa `pull --rebase` **prima** del
push, quindi le mete di Codex e le tue modifiche si impilano senza scontrarsi.

## ⚠️ Avvertenza importante (causa-radice tecnica)

La cartella del progetto è dentro **OneDrive**. Va bene per i file del sito, ma:

- **Non lavorare sullo stesso repo da due PC contemporaneamente** senza prima
  fare `SCARICA`. OneDrive sincronizza i *file* ma **non** lo stato di git:
  è così che nascono le divergenze.
- Se vedi errori git tipo *"index.lock"* o *"Another git process is running"*,
  i due script li ripuliscono da soli all'avvio. Se persiste, mandami uno screenshot.

## File di servizio

- `00-RIPARA-E-UNIFICA.bat` → **una tantum**, già usato per l'allineamento.
- `SCARICA.bat` → prima di lavorare.
- `PUBBLICA.bat` → quando hai finito.
- `_backup-sync-*/` → backup completo di sicurezza (puoi cancellarlo quando sei
  sicuro che tutto funzioni).
