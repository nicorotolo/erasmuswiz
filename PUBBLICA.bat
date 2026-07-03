@echo off
REM ============================================================
REM  ErasmusWiz - PUBBLICA (lancia QUANDO HAI FINITO di lavorare)
REM  Salva le tue modifiche su GitHub in modo sicuro:
REM  1) le registra (commit) - ANCHE i file NUOVI, non solo quelli
REM     gia' tracciati (git add -A, non piu' "git add -u")
REM  2) assorbe prima le novita' di Codex (pull --rebase)
REM  3) pubblica (push)
REM  La spazzatura resta fuori in due modi: quella nota e' elencata
REM  nel .gitignore, quella nuova/imprevista (nomi con $ ` ! { } [ ])
REM  viene riconosciuta ed esclusa in automatico piu' sotto, PRIMA
REM  del commit. In ogni caso, PRIMA di confermare ti mostro cosa
REM  sto per aggiungere, cosi' puoi controllare ed eventualmente
REM  fermarti con Ctrl+C.
REM ============================================================
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ===== PUBBLICO le tue modifiche su GitHub =====
echo.
if exist ".git\index.lock"  del /f /q ".git\index.lock"
if exist ".git\config.lock" del /f /q ".git\config.lock"

echo --- Questo sto per pubblicare (controlla, poi premi un tasto):
git status --short
pause

set "MSG="
set /p "MSG=Descrivi in poche parole cosa hai cambiato: "
if "%MSG%"=="" set "MSG=aggiornamento sito"

git checkout main 2>nul
git add -A

REM --- Rete di sicurezza anti-spazzatura -----------------------------
REM Alcuni strumenti AI, quando va storto un comando, lasciano nella
REM cartella file vuoti con nomi assurdi (es. "!(ZAINO.checklist" o
REM "{,+"). "git add -A" li prenderebbe insieme al resto: qui li
REM riconosco (file vuoto senza estensione, oppure nome con caratteri
REM tipici della shell: $ ` ! { } [ ]) e li tolgo dal commit PRIMA di
REM salvare, cosi' non finiscono mai su GitHub.
for /f "delims=" %%F in ('git diff --cached --name-only') do (
    if exist "%%F" for %%A in ("%%F") do if %%~zA==0 if "%%~xA"=="" (
        echo   [attenzione] Escluso dal commit, file vuoto senza estensione: %%F
        git reset -- "%%F" >nul 2>&1
    )
    echo "%%F"| findstr /C:"$" /C:"`" /C:"!" /C:"{" /C:"}" /C:"[" /C:"]" >nul
    if not errorlevel 1 (
        echo   [attenzione] Escluso dal commit, nome sospetto: %%F
        git reset -- "%%F" >nul 2>&1
    )
)
REM ---------------------------------------------------------------------

git commit -m "%MSG%"
echo.
echo --- Assorbo eventuali novita' di Codex...
git pull --rebase origin main
if errorlevel 1 goto :conflitto
echo --- Pubblico...
git push origin main
if errorlevel 1 goto :conflitto

echo.
echo ============================================================
echo  PUBBLICATO. Online e locale coincidono.
echo ============================================================
echo.
pause
exit /b 0

:conflitto
echo.
echo ************************************************************
echo  Problema o conflitto durante pubblicazione.
echo  NIENTE e' perso (il commit locale c'e').
echo  Fai uno screenshot e mandamelo: ti guido io.
echo ************************************************************
echo.
pause
exit /b 1
