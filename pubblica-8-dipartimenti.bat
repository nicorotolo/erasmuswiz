@echo off
REM ============================================================
REM  ErasmusWiz - Pubblica i 3 nuovi dipartimenti (392 mete totali)
REM ------------------------------------------------------------
REM  Cosa fa:
REM   1. Clona l'ultimo "main" da GitHub in una cartella temporanea
REM      (che gia' ha i 3 nuovi file JS creati da Codex)
REM   2. Sovrascrive index.html con la versione locale aggiornata
REM      (che ha i 3 nuovi <script> nella catena _meteAll)
REM   3. Sovrascrive STATO_DEL_SITO.md con la versione aggiornata
REM   4. Commit e push su main
REM ============================================================
setlocal
set "PROJ=%~dp0"
set "WORK=%TEMP%\erasmuswiz-push-8dip"

echo.
echo [1/4] Clono l'ultimo main da GitHub...
if exist "%WORK%" rmdir /s /q "%WORK%"
git clone --depth 1 --branch main https://github.com/nicorotolo/erasmuswiz.git "%WORK%"
if errorlevel 1 ( echo ERRORE durante il clone. & pause & exit /b 1 )

echo.
echo [2/4] Verifico che i 3 nuovi file JS siano presenti sul clone...
if not exist "%WORK%\js\dati-mete-molecolari.js" ( echo ERRORE: dati-mete-molecolari.js non trovato su GitHub! & pause & exit /b 1 )
if not exist "%WORK%\js\dati-mete-linguistici.js" ( echo ERRORE: dati-mete-linguistici.js non trovato su GitHub! & pause & exit /b 1 )
if not exist "%WORK%\js\dati-mete-umanistici.js" ( echo ERRORE: dati-mete-umanistici.js non trovato su GitHub! & pause & exit /b 1 )
echo OK - tutti e 3 i file JS gia' presenti su GitHub.

echo.
echo [3/4] Copio index.html aggiornato (8 dipartimenti in _meteAll) e STATO_DEL_SITO.md...
copy /y "%PROJ%index.html"           "%WORK%\index.html"           >nul
copy /y "%PROJ%STATO_DEL_SITO.md"   "%WORK%\STATO_DEL_SITO.md"   >nul

echo.
echo [4/4] Commit e push su main...
cd /d "%WORK%"
git config user.email "nico.rotolo@gmail.com"
git config user.name "Nicola Rotolo"
git add index.html STATO_DEL_SITO.md
git commit -m "feat: aggiunge 3 dipartimenti in index.html (392 mete su 8 dip.)"
git push origin main
if errorlevel 1 ( echo. & echo ERRORE durante il push. Controlla l'accesso a GitHub. & pause & exit /b 1 )

echo.
echo ============================================================
echo  FATTO! Tra 1-2 minuti il sito mostrera' tutte le 392 mete:
echo  https://nicorotolo.github.io/erasmuswiz/
echo ============================================================
pause
