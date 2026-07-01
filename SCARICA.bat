@echo off
REM ============================================================
REM  ErasmusWiz - SCARICA (lancia PRIMA di iniziare a lavorare)
REM  Scarica da GitHub l'ultimo stato (incluse le mete di Codex)
REM  cosi parti sempre allineato e non crei divergenze.
REM ============================================================
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ===== SCARICO l'ultimo stato da GitHub =====
echo.
if exist ".git\index.lock"  del /f /q ".git\index.lock"
if exist ".git\config.lock" del /f /q ".git\config.lock"

git checkout main 2>nul
git pull --rebase origin main
if errorlevel 1 goto :conflitto

echo.
echo ============================================================
echo  Sei aggiornato. Puoi iniziare a lavorare.
echo ============================================================
echo.
pause
exit /b 0

:conflitto
echo.
echo ************************************************************
echo  C'e' un conflitto o un problema. NON forzare nulla.
echo  Fai uno screenshot di questo messaggio e mandamelo.
echo ************************************************************
echo.
pause
exit /b 1
