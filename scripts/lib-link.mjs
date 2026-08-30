const TIMEOUT_MS = 10000;
export async function statoLink(url) {
  const controller = new AbortController(); const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if ([405, 403, 501].includes(res.status)) res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    const urlFinale = res.url || url;
    if (res.ok) return { stato: "vivo", urlFinale };
    if ([404, 410].includes(res.status)) return { stato: "morto", urlFinale };
    return { stato: "inconcludente", urlFinale };
  } catch { return { stato: "inconcludente", urlFinale: url }; } finally { clearTimeout(t); }
}
