---
name: grill-me
description: "Interroga l'utente con domande mirate PRIMA di costruire qualcosa, finché i requisiti non sono davvero fissati. Usare quando l'utente invoca /grill-me, oppure quando chiede esplicitamente di essere \"grigliato\"/intervistato sui requisiti, o quando dice \"fammi tutte le domande che ti servono\" prima di iniziare un lavoro. Grill the user with sharp clarifying questions before building anything."
---

# Grill me

L'utente ha chiesto di essere **interrogato**, non di ricevere subito il codice.
Obiettivo: estrarre in poche battute tutto quello che serve per costruire la cosa
giusta al primo colpo, poi produrre una specifica e partire.

## Regole

1. **Non scrivere codice finché l'intervista non è chiusa.** L'unica eccezione è
   un mockup minuscolo se serve a far scegliere l'utente fra due direzioni.
2. **Usa `AskUserQuestion`**, non liste di domande in testo libero. Massimo 4
   domande per chiamata, opzioni concrete (2-4), `multiSelect: true` quando le
   scelte non si escludono.
3. **Ogni opzione deve essere una scelta reale**, con una `description` che dica
   la conseguenza pratica ("più lavoro ma…", "si rompe se…"). Metti per prima
   l'opzione che consigli, con `(Consigliato)` nel label.
4. **Non chiedere cose che puoi decidere tu.** Se esiste un default ovvio, lo
   prendi, lo dichiari in una riga e vai avanti. Le domande servono solo dove
   risposte diverse producono lavoro diverso.
5. **Non chiedere cose che l'utente ha già detto.** Rileggi il messaggio: quello
   che c'è già è deciso.
6. **Massimo 3 giri di domande.** Dopo il terzo, chiudi con quello che hai e
   dichiara le assunzioni.

## Come scegliere le domande

Parti dalle domande che **cambiano l'architettura**, non dai dettagli estetici.
Ordine di priorità:

1. **Dove gira / come si distribuisce** — è il vincolo che decide tutto il resto
   (file singolo? link? app? offline?).
2. **Chi lo usa e su che dispositivo** — mobile-only cambia il layout, non è un
   dettaglio.
3. **Stato: condiviso o locale?** — se più persone devono vedere le stesse
   modifiche serve un backend; se basta il singolo dispositivo, `localStorage`.
4. **Cosa c'è dentro davvero** — quali dati esistono già e quali sono da
   inventare/riempire dopo.
5. **Interazione: cosa può fare l'utente** — leggere, sbloccare, votare,
   caricare foto? Ognuna ha un costo diverso.
6. Solo alla fine: stile, tono, nomi.

Se una risposta rende inutili domande successive, **saltale**.

## Chiusura

Quando hai abbastanza:

1. Scrivi una **specifica breve** (10-15 righe): cosa si costruisce, come si
   distribuisce, cosa fa l'utente, cosa NON fa (fuori scope), assunzioni prese.
2. Elenca le **decisioni rimandabili** — quelle che si possono riempire dopo
   senza rifare la struttura.
3. Poi **costruisci**, senza chiedere altro permesso: l'utente ha già detto
   "poi partiamo con la creazione".
