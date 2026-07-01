# js/atenei/ — dati per ateneo

Ogni ateneo ha la sua sottocartella con i file dati (regola d'oro: codice
separato dai dati). `app.js` resta unico e legge l'ateneo **attivo** scelto dal
selettore (salvato in localStorage, dentro lo "zaino").

```
js/atenei/
  cafoscari/   ← Ca' Foscari Venezia (completo: 392 mete, 8 dipartimenti)
  sapienza/    ← Sapienza Roma (placeholder, da riempire in Fase 3)
```

## Come è collegato (in index.html)

1. Si caricano in sequenza i file `dati-*.js` di un ateneo. Ogni file mete
   dichiara `var METE`; bando/scadenze/checklist dichiarano i loro `var` globali.
2. Subito dopo, si "fotografa" il set nel registro: `ATENEI['<key>'] = {...}`.
3. Si ripete per l'ateneo successivo (i `var` vengono sovrascritti e ri-fotografati).
4. Si sceglie l'ateneo attivo (da localStorage) e si assegnano i globali che
   `app.js` legge: `METE`, `REQUISITI_BANDO`, `BANDO_INFO`, `SCADENZE_INFO`,
   `SCADENZE_CAFOSCARI`, `CHECKLIST`, `CHECKLIST_POST`.

## Aggiungere un ateneo nuovo

1. Crea `js/atenei/<key>/` con gli stessi file dati (stesso formato, stessi nomi
   di variabile `var`).
2. In `index.html`: carica i suoi file, poi registra `ATENEI['<key>'] = {...}`
   con `disponibile:true`.
3. Niente da toccare in `app.js`.

Nota: ogni ateneo ha un suo bando/scadenze/checklist (sono diversi tra atenei).
Le scadenze nomination/application delle singole mete restano fissate dai partner.
