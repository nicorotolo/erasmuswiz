# aggiorna-dashboard.ps1
# Legge mappatura-stato.json, aggiorna dashboard-mappatura.html e lo apre in Chrome.

$root   = Split-Path $PSScriptRoot -Parent
$json   = Join-Path $root "mappatura-stato.json"
$html   = Join-Path $root "dashboard-mappatura.html"

# Leggi il JSON come testo grezzo (preserva la formattazione)
$jsonText = Get-Content $json -Raw -Encoding UTF8

# Leggi l'HTML corrente
$htmlText = Get-Content $html -Raw -Encoding UTF8

# Sostituisci il blocco  const STATO = { ... };
# Il pattern cerca dall'inizio di "const STATO = {" fino al ";" su riga propria prima di </script>
$pattern     = '(?s)(const STATO = )(\{.*?\})\r?\n?;(\r?\n</script>)'
$replacement = "`${1}$jsonText;`${3}"

$nuovoHtml = [regex]::Replace($htmlText, $pattern, $replacement)

if ($nuovoHtml -eq $htmlText) {
    Write-Host "ATTENZIONE: nessuna sostituzione effettuata. Controlla il pattern nel file HTML." -ForegroundColor Yellow
} else {
    Set-Content $html $nuovoHtml -Encoding UTF8
    Write-Host "Dashboard aggiornata con dati del $(Get-Date -Format 'yyyy-MM-dd HH:mm')." -ForegroundColor Green
}

# Apri in Chrome (o nel browser predefinito se Chrome non e' trovato)
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chrome) {
    & $chrome $html
} else {
    Start-Process $html
}
