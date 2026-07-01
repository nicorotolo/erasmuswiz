const {JSDOM, ResourceLoader}=require("jsdom");
class LocalOnly extends ResourceLoader{
  fetch(url,opts){
    if(url.startsWith("http://127.0.0.1")||url.startsWith("http://localhost")) return super.fetch(url,opts);
    return Promise.resolve(Buffer.from("")); // blocca font/analytics esterni
  }
}
(async()=>{
  const dom=await JSDOM.fromURL("http://127.0.0.1:8123/index.html",{
    runScripts:"dangerously", pretendToBeVisual:true, resources:new LocalOnly()
  });
  const w=dom.window;
  await new Promise(r=>{ if(w.document.readyState==="complete") r(); else w.addEventListener("load",r); setTimeout(r,6000); });
  const sel=w.document.getElementById("area-v2");
  console.log("METE totali nel DOM:", w.METE?w.METE.length:"undefined");
  console.log("Opzioni menu Area:", sel?sel.options.length:"n/d");
  console.log("SCADENZE:", w.SCADENZE?w.SCADENZE.length:"n/d", "| CHECKLIST:", w.CHECKLIST?w.CHECKLIST.length:"n/d");
  // simula scelta profilo Filosofia-area e conta card
  console.log("Render mete iniziale (card nel grid):", w.document.querySelectorAll("#griglia-mete-v2 > *").length);
  dom.window.close();
})().catch(e=>console.log("ECCEZIONE:", e.message));
