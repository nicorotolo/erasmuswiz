@echo off
REM ============================================================
REM  ErasmusWiz - Pulisci i file-spazzatura creati per errore
REM  (file vuoti con nomi strani, residui di comandi shell).
REM  Sicuro: tocca solo questi nomi specifici.
REM ============================================================
cd /d "%~dp0"
echo Rimuovo i file-spazzatura...
del /f /q "({"                      2>nul
del /f /q "5)"                      2>nul
del /f /q "{"                       2>nul
del /f /q "{,"                      2>nul
del /f /q "{,+"                     2>nul
del /f /q "b.comp.ordine"           2>nul
del /f /q "m.requisitoLingua.length" 2>nul
del /f /q "togglePreferita(meta.id))" 2>nul
echo Fatto.
pause
