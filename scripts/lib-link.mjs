const TIMEOUT_MS = 10000;
import { fetchSicuro } from "./lib-rete.mjs";

export async function statoLink(url) {
  const controller = new AbortController(); const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetchSicuro(url, { method: "HEAD", signal: controller.signal, timeoutMs: TIMEOUT_MS });
    if ([405, 403, 501].includes(res.status)) res = await fetchSicuro(url, { method: "GET", signal: controller.signal, timeoutMs: TIMEOUT_MS });
    const urlFinale = res.url || url;
    if (res.ok) return { stato: "vivo", urlFinale };
    if ([404, 410].includes(res.status)) return { stato: "morto", urlFinale };
    return { stato: "inconcludente", urlFinale };
  } catch { return { stato: "inconcludente", urlFinale: url }; } finally { clearTimeout(t); }
}
