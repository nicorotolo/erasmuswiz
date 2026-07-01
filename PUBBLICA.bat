@echo off
REM ============================================================
REM  ErasmusWiz - PUBBLICA (lancia QUANDO HAI FINITO di lavorare)
REM  Salva le tue modifiche su GitHub in modo sicuro:
REM  1) le registra (commit) - ANCHE i file NUOVI, non solo quelli
REM     gia' tracciati (git add -A, non piu' "git add -u")
REM  2) assorbe prima le novita' di Codex (pull --rebase)
REM  3) pubblica (push)
REM  La spazzatura (node_modules, backup, file rotti) resta fuori
REM  perche' e' elencata nel .gitignore, NON perche' viene saltata
REM  qui: PRIMA di confermare il commit ti mostro cosa sto per
REM  aggiungere, cosi' puoi controllare ed eventualmente fermarti
REM  con Ctrl+C.
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
