# ORDINE 2b-3 — `scripts/applica-partner.mjs` — **CONGELATO 2026-08-30**

> Ordine di lavoro per Codex. Chi esegue non prende decisioni di progetto: se
> qualcosa qui non torna, si ferma e lo scrive, non improvvisa.
>
> **Perimetro: UN SOLO FILE NUOVO più le sue prove.** Non toccare
> `leggi-partner.mjs`, `cancelli.mjs`, `lib-mete.mjs`, `lib-output-batch.mjs`,
> `raccogli-partner.mjs`. Non toccare `esegui-partner.mjs`: è Fase 5.
> Due consegne di questo progetto sono già collassate in abbozzi perché
> l'ordine era troppo grande. Questo è volutamente piccolo.

## 0. Cosa esiste già, e va letto prima di scrivere

| File | Perché serve |
|---|---|
| `scripts/applica-batch.mjs` | **Il modello da imitare.** Scrittura nei file dati, `node --check`, tutto-o-niente, sidecar delle fonti. Leggerlo per intero. |
| `scripts/lib-mete.mjs` | `spanTutteMete`, `impostaCampo`, `valoreCampo`, `campoVuoto`, `statoCampo`, `caricaMete`, `serializza`. **Usare queste, non riscriverle.** |
| `scripts/cancelli.mjs` | Produce l'ingresso: `raccolta/approvati.json`. Esporta anche **`fileMete(radice)`**, che trova tutti i `dati-mete*.js`: **usala, non riscriverla.** |
| `scripts/bonifica-codici-sintetici.mjs` | La regola del tutto-o-niente, già scritta lì. |
| `SPEC_FASE4B_lettura.md` §3.4 | La specifica di questo file. **Prevale su questo ordine se divergono.** |

## 1. Cosa deve fare, in una riga

Legge `raccolta/approvati.json` e scrive i valori nei file
`js/atenei/**/dati-mete*.js`, senza mai sovrascrivere un campo già pieno.

## 2. La forma dell'ingresso, misurata (non supposta)

Ogni voce di `raccolta/approvati.json` è un oggetto piatto:

```json
{
  "codiceNorm": "A GRAZ02",
  "campo": "linkCatalogo",
  "valore": "https://online.tugraz.at/tug_online/webnav.ini",
  "livello": "ateneo",
  "dichiarato": "ateneo",
  "declassato": false,
  "approvato": true,
  "ambito": null,
  "paginaCitata": 23,
  "fonte": { "url": "https://…", "citazione": "…", "verificataIl": "2026-08-30" }
}
```

`campo` è uno dei cinque di `CAMPI_RIEMPIBILI`. `valore` ha la forma che
`validaValore` accetta per quel campo (albero per `requisitoLingua`, array per
`scadenzeOspitante`, stringa per gli altri).

I `nonTrovati` **non** stanno negli approvati: si leggono da
`raccolta/letture/<CODICE>.json`, chiave `nonTrovati`.

## 3. Cosa deve fare, punto per punto

1. **Ogni file che contiene quel codice.** `spanTutteMete()` su **tutti** i file
   `dati-mete*.js` che contengono il codice: 302 partner su 615 stanno su più di
   un file, fino a 14. Non fermarsi al primo.
2. **Mai una sovrascrittura.** `impostaCampo(..., { soloSeVuoto: true })`.
3. **I disaccordi si registrano, non si risolvono.** Se il campo era già pieno
   con un valore **diverso**, la riga va in
   `raccolta/riconciliazione/disaccordi.json` e nei dati non si tocca niente.
   Registrare: `codiceNorm`, `campo`, `file`, `valoreEsistente`, `valoreProposto`,
   `fonte`. Un valore **uguale** non è un disaccordo: si conta e basta.
4. **`nonTrovabile` solo se la pagina era stata inviata (D7).** Per ogni
   `nonTrovati: { <campo>: <numeroPagina> }` della lettura, scrivere nei dati
   `nonTrovabile: { <campo>: { cercatoIl, fonte } }` con l'URL di **quella**
   pagina numerata, e **solo** se quel numero compare in `pagineInviate` della
   stessa lettura. Se non compare, saltare e contarlo.
   *La chiave `nonTrovabile` esiste già nei file dati* con forma
   `{ campo: { origine, nota } }` (scritta dalla pipeline V1): **non
   sovrascrivere una voce già presente**, valgono le stesse regole del punto 2.
5. **Le fonti dove il progetto le mette già.** Misurato: i file dati **non
   hanno** una chiave `fonti`. `applica-batch.mjs` scrive un file affiancato
   `batch/FONTI-<id>.json` nella forma `{ <codice>: { <campo>: <url> } }`.
   Fare lo stesso in `raccolta/FONTI-partner.json`, con la stessa forma.
   **Non inventare una chiave `fonti` dentro i file dati.**
6. **Tutto o niente.** Dopo la scrittura, `node --check` su **ogni** file
   toccato. Se anche uno solo non passa, **si annulla tutto**: nessun file resta
   modificato. Stessa regola di `bonifica-codici-sintetici.mjs`.
7. **I due cancelli di sistema.** Alla fine eseguire
   `node scripts/verifica-completezza.mjs` e `node scripts/valida-stato.mjs`:
   devono restare verdi. Se uno si lamenta, il lavoro non è finito.
8. **Niente git.** Non committa, non pusha, non crea rami.
9. **`--prova`** scrive tutto in un file di anteprima senza toccare i dati.

## 4. Forma del codice (non negoziabile)

- Zero dipendenze nuove.
- `applicaPartner({ radice, approvati, letture, prova })` **esportata**, con i
  parametri iniettabili, così le prove girano su una radice finta senza toccare
  il repo. La stessa tecnica di `statoLink` nei cancelli e di `chiamaModello`
  nella lettura.
- Guardia in fondo al file per partire solo da riga di comando.
- Una sola definizione di campo vuoto: `statoCampo()` / `campoVuoto()` di
  `lib-mete.mjs`. Non scriverne un'altra.

## 5. Le prove, in `test/applica-partner.test.mjs`

Ognuna **va vista fallire**, e il fatto va scritto nel resoconto: una prova mai
vista rossa non dimostra niente.

1. **Più file.** Un codice presente in tre file `dati-mete*.js` viene riempito
   in tutti e tre.
2. **Mai sovrascrivere.** Un campo già pieno con un valore diverso resta
   **identico byte per byte**, e la riga compare in `disaccordi.json`.
3. **Uguale non è disaccordo.** Un campo già pieno con lo **stesso** valore non
   finisce in `disaccordi.json` e non modifica il file.
4. **D7.** Un `nonTrovati` che punta a una pagina **non** presente in
   `pagineInviate` non produce nessun `nonTrovabile`. Uno che punta a una pagina
   inviata lo produce, con l'URL di quella pagina.
5. **Tutto o niente, da un capo all'altro.** Con tre file da toccare, se il
   secondo diventa sintatticamente rotto, **nessuno dei tre** resta modificato.
   Costruire il caso end-to-end, non provare la sola funzione di rollback.
   *Rottura da mostrare*: togliendo il rollback, la prova diventa rossa.
6. **`--prova` non tocca niente.** I file dati restano identici byte per byte.
7. `npm run test:unit` resta verde. **Misurato ora: 233 prove, 233 verdi.**
   Riportare il numero nuovo.

## 6. Cosa NON fare

- Non toccare `esegui-partner.mjs` né crearlo: è Fase 5.
- Non modificare i cancelli, la lettura o le librerie.
- Non "sistemare" i dati esistenti: questo file **aggiunge**, non corregge.
- Non committare.
- Non allargare `CAMPI_RIEMPIBILI`.
