$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $env:LOCALAPPDATA "ErasmusWiz\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$log = Join-Path $logDir "mappatura-$timestamp.log"

Set-Location -LiteralPath $root
Start-Transcript -LiteralPath $log -Force | Out-Null
$code = 1
try {
  & node "scripts/esegui-lotto-automatico.mjs"
  $code = $LASTEXITCODE
} finally {
  Stop-Transcript | Out-Null
}
exit $code
