const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const RADICE = path.resolve(__dirname, "..");
const PORTA = 8123;
const HOST = "127.0.0.1";

const TIPI = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function rispondi(res, stato, testo) {
  res.writeHead(stato, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(testo);
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    rispondi(res, 405, "Metodo non consentito");
    return;
  }

  let percorsoUrl;
  try {
    percorsoUrl = decodeURIComponent(new URL(req.url, `http://${HOST}:${PORTA}`).pathname);
  } catch (errore) {
    rispondi(res, 400, "Indirizzo non valido");
    return;
  }

  if (percorsoUrl.endsWith("/")) percorsoUrl += "index.html";
  const candidato = path.resolve(RADICE, `.${percorsoUrl}`);
  const dentroLaRadice = candidato === RADICE ||
    candidato.startsWith(`${RADICE}${path.sep}`);
  if (!dentroLaRadice) {
    rispondi(res, 403, "Percorso non consentito");
    return;
  }

  fs.stat(candidato, (errore, stat) => {
    if (errore || !stat.isFile()) {
      rispondi(res, 404, "File non trovato");
      return;
    }

    res.writeHead(200, {
      "Content-Type": TIPI[path.extname(candidato).toLowerCase()] ||
        "application/octet-stream",
      "Content-Length": stat.size,
      "Cache-Control": "no-store",
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    fs.createReadStream(candidato).pipe(res);
  });
});

server.on("error", errore => {
  // Se la 8123 e' occupata non si termina alcun processo: la prova fallisce
  // dichiarando la causa, come richiesto dalle regole operative del progetto.
  console.error(`Server statico non avviato: ${errore.message}`);
  process.exitCode = 1;
});

server.listen(PORTA, HOST, () => {
  console.log(`Server statico Playwright: http://${HOST}:${PORTA}`);
});

function chiudi() {
  server.close(() => process.exit(0));
}

// Questi segnali arrivano da Playwright, che e' l'unico proprietario ammesso
// del server: lo avvia per la suite e lo richiude appena le prove finiscono.
process.on("SIGTERM", chiudi);
process.on("SIGINT", chiudi);
