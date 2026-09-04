// I MOTIVI per cui vale la pena APRIRE una pagina.
//
// Non sono i gruppi di `PAROLE` in raccogli-partner.mjs, e la differenza non e'
// stilistica: quelli danno un punteggio e servono a ORDINARE una coda, questi
// rispondono a una domanda binaria — questo link porta al catalogo dei corsi,
// si' o no? Un punteggio alto non vuol dire "e' un catalogo": la pagina che
// PARLA dell'Erasmus vale 4 punti, il catalogo vero ne vale 3, ed e' esattamente
// il motivo per cui 1.353 mete sono senza `linkCatalogo` mentre il link era gia'
// dentro pagine che possediamo.
//
// RADICI, non parole intere. Il dizionario della specifica cercava
// "internazionale" e mancava "internazionalita'"; cercava "exchange student" e
// mancava "student exchange", che in inglese e' la forma piu' comune. Qui lo
// stesso errore costerebbe una pagina non aperta, cioe' un campo vuoto.
//
// Un link puo' avere PIU' motivi: "Course catalogue and language requirements"
// ne ha due, e sceglierne uno butterebbe l'altro.

export const CAMPI_MOTIVATI = ["linkCatalogo", "notaDisponibilita", "scadenzeOspitante", "requisitoLingua"];

// Le lingue sono quelle che compaiono davvero negli accordi: inglese, tedesco,
// francese, spagnolo, italiano, portoghese, polacco, turco, svedese.
const RADICI = {
  linkCatalogo: [
    "course catalog", "course catalogue", "module catalog", "module catalogue",
    "programme catalogue", "program catalogue", "course list", "list of courses",
    "course offer", "courses offered", "module handbook", "book of modules",
    "study programmes", "study programs", "subjects offered",
    "vorlesungsverzeichnis", "modulhandbuch", "studienangebot", "lehrveranstaltung",
    "catalogue de cours", "offre de formation", "liste des cours",
    "oferta academica", "oferta formativa", "guia docente", "catalogo de cursos",
    "catalogo dei corsi", "offerta formativa", "elenco dei corsi",
    "unidades curriculares", "plano de estudos",
    "ders katalog", "katalog przedmiot", "oferta dydaktyczna", "kursutbud",
  ],
  notaDisponibilita: [
    "not available", "not open to", "closed to exchange", "open to exchange",
    "limited places", "limited availability", "availability for exchange",
    "restriction", "restricted", "excluded", "exclusions",
    "fields of study", "subject areas", "areas open",
    "einschrank", "beschrank", "nicht verfugbar", "zulassungsbeschrank",
    "numerus clausus", "gesperrte facher",
    "places limitees", "domaines ouverts", "restrictions d'acces",
    "disponibilidad", "plazas disponibles", "restriccion", "areas restringidas",
    "posti disponibili", "restrizioni", "aree aperte", "corsi esclusi",
    "vagas disponiveis", "ograniczenia", "kontenjan",
  ],
  scadenzeOspitante: [
    "deadline", "application period", "application dates", "nomination",
    "key dates", "important dates", "academic calendar",
    "frist", "bewerbungsschluss", "anmeldefrist", "akademischer kalender",
    "date limite", "dates cles", "calendrier academique",
    "plazo de solicitud", "fecha limite", "calendario academico",
    "scadenz", "termine di iscrizione", "calendario accademico",
    "prazo de candidatura", "termin skladania", "son basvuru",
    "ansokningsperiod", "sista ansokningsdag",
  ],
  requisitoLingua: [
    "language requirement", "language of instruction", "language skills",
    "language proficiency", "language certificate", "cefr",
    "sprachnachweis", "sprachkenntnis", "sprachvoraussetzung", "sprachanforderung",
    "niveau de langue", "exigences linguistiques", "competences linguistiques",
    "requisitos de idioma", "nivel de idioma", "competencia linguistica",
    "requisiti linguistici", "competenze linguistiche", "conoscenza della lingua",
    "requisitos linguisticos", "wymagania jezykowe", "dil yeterlilik",
    "sprakkrav", "sprakkunskaper",
  ],
};

// La stessa normalizzazione di `punteggioLink`: senza diacritici e minuscolo,
// cosi' "Bewerbungsfrist" e "bewerbungsfrist" sono la stessa cosa, e la ş turca
// di "son başvuru" si riduce alla s che cerchiamo.
export const normalizzaTesto = (valore) => String(valore || "")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

// Un classificatore per campo, esportato singolarmente: le prove interrogano
// ciascuno da solo, ed e' l'unico modo per vedere quale dizionario sbaglia.
// SI GUARDA IL TESTO DEL LINK, NON L'URL — e questa e' una misura, non un gusto.
// Cercando le radici anche nell'indirizzo, "studienangebot" scattava 9.344
// volte: compare nel PERCORSO di ogni singola pagina di corso di laurea
// austriaca, quindi `fh-ooe.at/studienangebot/digital-energy-solutions-master`
// — un corso, non il catalogo — risultava un catalogo. Un partner arrivava a
// 744 falsi positivi. Misurato sui dati veri: col solo testo si passa da 242 a
// 175 partner e da 9.051 a 2.742 link, e i 67 partner persi sono proprio quelli
// dove l'unico segnale era l'indirizzo. La variante "anche l'ultimo segmento
// del percorso" recupera UN partner solo: non vale la regola in piu'.
export const classificatori = Object.fromEntries(
  CAMPI_MOTIVATI.map((campo) => [campo, (testo) => {
    const pagliaio = normalizzaTesto(testo);
    return RADICI[campo].some((radice) => pagliaio.includes(radice));
  }]),
);

// Quanto un link "e' " quel motivo, invece di limitarsi a nominarlo.
// Serve a scegliere: un partner ha in media 15,7 link che parlano di catalogo e
// il budget ne apre 2, quindi a decidere non e' il classificatore ma l'ordine.
// Un link il cui testo E' "Vorlesungsverzeichnis" vale piu' di uno che dice
// "An overview of all courses offered in English is available here": la radice
// copre tutto il testo nel primo caso, un quinto nel secondo.
export function forzaMotivo(testo) {
  const pagliaio = normalizzaTesto(testo).trim();
  if (!pagliaio) return 0;
  let piuLunga = 0;
  for (const radici of Object.values(RADICI)) {
    for (const radice of radici) if (pagliaio.includes(radice)) piuLunga = Math.max(piuLunga, radice.length);
  }
  return piuLunga ? piuLunga / pagliaio.length : 0;
}

// Il punto d'ingresso vero: restituisce TUTTI i motivi di un link, in ordine
// stabile. Ordine stabile perche' i motivi entrano nell'impronta del materiale
// (Passo 1b): due insiemi uguali in ordine diverso non devono sembrare diversi.
export function motiviDelLink(testo) {
  return CAMPI_MOTIVATI.filter((campo) => classificatori[campo](testo));
}

// L'unione, non la sovrascrittura. Lo stesso indirizzo si incontra piu' volte —
// nel menu, nel corpo, nel pie' di pagina — e ogni volta con un'etichetta
// diversa: "Course catalogue" in un punto, "Language requirements" in un altro.
// Tenere solo l'ultima perderebbe meta' dell'informazione.
export function unisciMotivi(esistenti = [], nuovi = []) {
  const insieme = new Set([...esistenti, ...nuovi]);
  return CAMPI_MOTIVATI.filter((campo) => insieme.has(campo));
}
