# Revisione di Nicola — terza tornata (2026-09-15)

Revisione a 375px sul sito in locale (porta 8123), worktree `redesign-v4`.

Stato: [x] fatto · [ ] da fare · [~] rimandato

## Fatto prima della revisione (Nicola impegnato, 15/09)
- [x] Referente del Learning Agreement a Ca' Foscari: è il **Departmental Coordinator**. La pagina procedure (unive.it/pag/49168) scrive «your academic coordinator at Ca' Foscari (Departmental Coordinator)»: le due diciture indicano la stessa persona, il nome del ruolo è Departmental Coordinator. Allineati `js/la-regole.js` (regola e passo 3) a `dati-postselezione.js` e `dati-attesa.js`.
- [x] Pipeline: riordino delle preferite trascinando la maniglia (sei puntini a sinistra del nome). Le frecce su/giù restano per chi usa la tastiera. Nuova prova Playwright.
- [x] Pipeline: rotte animate nell'onboarding (§V4.12-bis). Scelto l'ateneo, partono dalla sua città verso le città delle sue mete (massimo 24, quelle con più mete) e compaiono in sequenza; scelto il dipartimento restano solo le sue, le altre sfumano; al passo lingue prendono il colore del semaforo. Con «riduci movimento» niente animazione, solo lo stato finale; pausa a scheda nascosta. Nuova prova Playwright.

## Appunti della revisione
- [x] Onboarding full immersion: la pagina non scorre né in orizzontale né in verticale, niente barre in alto o in basso. Con tante scelte (17 dipartimenti Sapienza) scorre solo l'elenco dentro la scheda. Verificato a 375px su tutti i passi, fino all'uscita.

## Da guardare in revisione
- [ ] Rotte: al passo «cosa studi» la scheda di vetro copre quasi tutta la mappa (17 dipartimenti Sapienza), le rotte si vedono poco
- [ ] Preferite: con la maniglia i nomi lunghi si troncano un po' prima
