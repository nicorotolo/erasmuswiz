// Service worker (R6.6): shell offline ESPLICITA + cache runtime, niente notifiche.
// Strategia "network-first": prova sempre la rete per primo, cosi' un nuovo deploy
// si vede subito. La cache serve come fallback quando sei offline.
//
// La SHELL elenca tutto cio' che l'app carica al primo avvio PRIMA di sapere
// l'ateneo (index, css, js di bootstrap, mascotte usate nella UI, icone).
// I dati per-ateneo (js/atenei/**) NON si pre-cachiano: sono grandi e ne serve
// solo uno; entrano in cache la prima volta che vengono scaricati (runtime).
// Cambiare CACHE_NOME a ogni modifica di questo file o della shell (cache bump).
const CACHE_NOME = "erasmuswiz-v3";
const FILE_DA_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/atenei/registro.js",
  "./js/carica-atenei.js",
  "./js/dati-mappa-europa.js",
  "./js/dati-coordinate.js",
  "./js/app.js",
  "./img/logo-mark.svg",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/mascotte/wiz-saluto.webp",
  "./img/mascotte/wiz-pensieroso.webp",
  "./img/mascotte/wiz-esulta.webp"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NOME).then((cache) => cache.addAll(FILE_DA_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nomi) =>
      Promise.all(nomi.filter((n) => n !== CACHE_NOME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") return;
  const url = new URL(evento.request.url);
  // In cache runtime va solo la NOSTRA origine: niente analytics o font CDN
  // (risposte opache che gonfiano la cache senza servire all'offline).
  const stessaOrigine = url.origin === self.location.origin;
  evento.respondWith(
    fetch(evento.request)
      .then((risposta) => {
        if (stessaOrigine && risposta.ok) {
          const copia = risposta.clone();
          caches.open(CACHE_NOME).then((cache) => cache.put(evento.request, copia));
        }
        return risposta;
      })
      .catch(() =>
        caches.match(evento.request).then((inCache) => {
          if (inCache) return inCache;
          // Offline su un URL di navigazione mai visto (es. ?query o hash
          // diverso): si risponde con la shell, che poi si orienta da sola.
          if (evento.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return Promise.reject(new Error("offline e non in cache"));
        })
      )
  );
});
