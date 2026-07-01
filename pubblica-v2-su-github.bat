@echo off
REM ============================================================
REM  ErasmusWiz - Pubblica il design v2 + i 5 dipartimenti su GitHub
REM ------------------------------------------------------------
REM  Cosa fa (in sicurezza, senza toccare la tua cartella OneDrive):
REM   1. Clona l'ultimo "main" da GitHub in una cartella temporanea
REM   2. Ci copia sopra i 4 file del design v2 (index/css/app/immagine)
REM   3. Converte const METE -> var METE nei 5 file dati (serve al v2)
REM   4. Fa commit e push su main
REM  Se Git ti chiede di accedere a GitHub, e' normale: completa il login.
REM ============================================================
setlocal
set "PROJ=%~dp0"
set "WORK=%TEMP%\erasmuswiz-push"

echo.
echo [1/4] Clono l'ultimo main da GitHub...
if exist "%WORK%" rmdir /s /q "%WORK%"
git clone --depth 1 --branch main https://github.com/nicorotolo/erasmuswiz.git "%WORK%"
if errorlevel 1 ( echo ERRORE durante il clone. & pause & exit /b 1 )

echo.
echo [2/4] Copio i file del design v2...
copy /y "%PROJ%index.html"      "%WORK%\index.html"        >nul
copy /y "%PROJ%css\style.css"   "%WORK%\css\style.css"     >nul
copy /y "%PROJ%js\app.js"       "%WORK%\js\app.js"         >nul
if not exist "%WORK%\img" mkdir "%WORK%\img"
copy /y "%PROJ%img\wiz-hero.png" "%WORK%\img\wiz-hero.png" >nul

echo.
echo [3/4] Converto const METE -^> var METE nei 5 file dati...
powershell -NoProfile -Command "foreach($n in 'dati-mete','dati-mete-management','dati-mete-lingue','dati-mete-scienze','dati-mete-filosofia'){ $p = Join-Path '%WORK%\js' ($n + '.js'); (Get-Content -Raw $p) -replace '(?m)^const METE = \[', 'var METE = [' | Set-Content -NoNewline $p }"

echo.
echo [4/4] Commit e push su main...
cd /d "%WORK%"
git config user.email "nico.rotolo@gmail.com"
git config user.name "Nicola Rotolo"
git add -A
git commit -m "v2: design tab-based (Wiz, dark mode) + 5 dipartimenti (249 mete)"
git push origin main
if errorlevel 1 ( echo. & echo ERRORE durante il push. Controlla l'accesso a GitHub. & pause & exit /b 1 )

echo.
echo ============================================================
echo  FATTO! Tra 1-2 minuti il sito pubblico mostrera' il v2:
echo  https://nicorotolo.github.io/erasmuswiz/
echo ============================================================
pause
