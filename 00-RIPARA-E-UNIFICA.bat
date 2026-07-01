@echo off
REM ============================================================
REM  ErasmusWiz - Riparazione + Unificazione (UNA TANTUM)
REM ------------------------------------------------------------
REM  Allinea il locale a GitHub (origin/main) e ci riapplica
REM  sopra le tue funzioni v2 (preferiti, ricerca, post-selezione).
REM  Da lanciare con DOPPIO CLIC. Sicuro e ripetibile.
REM ============================================================
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ===== ErasmusWiz: riparazione e unificazione =====
echo Cartella: %CD%
echo.

REM --- 0) Backup di sicurezza dei file v2 ATTUALI (hanno il tuo lavoro) ---
echo [1/7] Backup dei file v2 attuali...
if not exist "_v2tmp" mkdir "_v2tmp"
copy /y "js\app.js"                "_v2tmp\app.js"                >nul 2>&1
copy /y "css\style.css"            "_v2tmp\style.css"            >nul 2>&1
copy /y "js\dati-postselezione.js" "_v2tmp\dati-postselezione.js" >nul 2>&1

REM --- 1) Rimuovo eventuali lock git rimasti appesi ---
echo [2/7] Pulizia lock git...
if exist ".git\index.lock"   del /f /q ".git\index.lock"
if exist ".git\config.lock"  del /f /q ".git\config.lock"
if exist ".git\HEAD.lock"    del /f /q ".git\HEAD.lock"
if exist ".git\objects\maintenance.lock" del /f /q ".git\objects\maintenance.lock"

REM --- 2) Scarico l'ultimo stato da GitHub ---
echo [3/7] Scarico da GitHub (fetch)...
git fetch origin
if errorlevel 1 goto :errore

REM --- 3) Allineo il locale a origin/main (la fonte di verita) ---
echo [4/7] Allineo il locale a origin/main...
git checkout -B main origin/main -f
if errorlevel 1 goto :errore

REM --- 4) Riapplico le funzioni v2 sopra la base online ---
echo [5/7] Riapplico le funzioni v2...
copy /y "_v2tmp\app.js"                "js\app.js"                >nul
copy /y "_v2tmp\style.css"             "css\style.css"            >nul
copy /y "_v2tmp\dati-postselezione.js" "js\dati-postselezione.js" >nul

REM --- 5) Committo SOLO i 3 file v2 ---
echo [6/7] Committo le funzioni v2...
git add "js/app.js" "css/style.css" "js/dati-postselezione.js"
git commit -m "v2: preferiti, ricerca mete, fase post-selezione (unificazione locale+online)"

REM --- 6) Pubblico su GitHub ---
echo [7/7] Pubblico su GitHub (push)...
git pull --rebase origin main
git push origin main
if errorlevel 1 goto :errore

REM --- pulizia temporanei ---
rmdir /s /q "_v2tmp" 2>nul

echo.
echo ============================================================
echo  FATTO. Online e locale ora coincidono su 'main'.
echo  Verifica aprendo index.html nel browser.
echo ============================================================
echo.
pause
exit /b 0

:errore
echo.
echo ************************************************************
echo  ERRORE durante un passaggio git. NIENTE e' perso:
echo  - i tuoi file v2 sono in _v2tmp\
echo  - il backup completo e' in _backup-sync-20260626-110132\
echo  Copia il messaggio di errore qui sopra e mandamelo.
echo ************************************************************
echo.
pause
exit /b 1
