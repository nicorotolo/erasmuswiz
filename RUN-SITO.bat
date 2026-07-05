@echo off
REM ============================================================
REM  ErasmusWiz - RUN-SITO (avvia il sito localmente)
REM  Serve il sito su http://localhost:8001
REM  Opzionalmente scarica i dati fresh da GitHub prima di partire.
REM ============================================================
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ===== AVVIO il sito localmente =====
echo.

REM Pulisci eventuali lock di git rimasti da operazioni precedenti
if exist ".git\index.lock"  del /f /q ".git\index.lock"
if exist ".git\config.lock" del /f /q ".git\config.lock"

REM Chiedi se vuol sincronizzare i dati da GitHub
set /p "SCARICA=Vuoi scaricare i dati fresh da GitHub? (s/n, default=n): "
if /i "%SCARICA%"=="s" (
	echo --- Scarico da GitHub...
	git checkout main 2>nul
	git pull --rebase origin main
	if errorlevel 1 (
		echo ERRORE: conflitto durante il pull. Vedi sopra, risolvi e riprova.
		pause
		exit /b 1
	)
	echo --- Dati aggiornati.
	echo.
)

REM Avvia il server HTTP sulla porta 8001
echo --- Avvio il server HTTP sulla porta 8001...
echo.
echo ============================================================
echo  SITO LIVE su http://localhost:8001
echo  Premi Ctrl+C per fermare il server.
echo ============================================================
echo.

python -m http.server 8001

echo.
echo Server fermato.
pause
exit /b 0
