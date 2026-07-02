// Service worker minimo: cache di base dei file statici, niente notifiche/offline completo.
// Strategia "network-first": prova sempre la rete per primo, cosi' un nuovo deploy
// si vede subito. La cache serve solo come fallback se sei offline.
const CACHE_NOME = "erasmuswiz-v1";
const FILE_DA_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./img/wiz-hero.png",
  "./manifest.json"
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
  evento.respondWith(
    fetch(evento.request)
      .then((risposta) => {
        const copia = risposta.clone();
        caches.open(CACHE_NOME).then((cache) => cache.put(evento.request, copia));
        return risposta;
      })
      .catch(() => caches.match(evento.request))
  );
});
