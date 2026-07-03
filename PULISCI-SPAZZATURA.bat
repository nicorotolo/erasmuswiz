@echo off
REM ============================================================
REM  ErasmusWiz - Pulisci i file-spazzatura creati per errore
REM  (file vuoti con nomi strani, residui di comandi shell).
REM  Sicuro: tocca solo questi nomi specifici.
REM
REM  Per ognuno fa DUE cose, perche' una sola non basta:
REM  1) "git rm -f --ignore-unmatch" lo toglie anche dalla STORIA
REM     di git, se era gia' stato pubblicato per sbaglio (altrimenti
REM     un file cancellato solo dal disco torna al prossimo
REM     SCARICA.bat, perche' git lo ripristina).
REM  2) "del" lo toglie dal disco se non era mai stato pubblicato.
REM
REM  Dopo aver lanciato questo script, lancia PUBBLICA.bat per
REM  registrare e mandare online la pulizia.
REM ============================================================
cd /d "%~dp0"
echo Rimuovo i file-spazzatura (da git e dal disco)...

for %%N in (
    "({"
    "5)"
    "{"
    "{,"
    "{,+"
    "{,-"
    "nuldel"
    "main"
    "new"
    "Stato"
    "utente"
    "contesto"
    "ZAINO.checklist"
    "b.comp.ordine"
    "m.requisitoLingua.length"
    "togglePreferita(meta.id))"
) do (
    git rm -f --ignore-unmatch -- "%%~N" >nul 2>&1
    del /f /q "%%~N" 2>nul
)

REM Questi nomi iniziano per "!" o contengono "[" "]": vanno passati
REM uno per uno perche' dentro un blocco FOR con "!" attivo danno problemi.
git rm -f --ignore-unmatch -- "!(ZAINO.checklist"        >nul 2>&1
del /f /q "!(ZAINO.checklist"                             2>nul
git rm -f --ignore-unmatch -- "!ZAINO.checklist[v.id]"    >nul 2>&1
del /f /q "!ZAINO.checklist[v.id]"                         2>nul
git rm -f --ignore-unmatch -- "`${a.nome}"                >nul 2>&1
del /f /q "`${a.nome}"                                     2>nul

REM Residui di un test di verifica fatto durante questa sessione (2026-07-03):
git rm -f --ignore-unmatch -- "!futuro-junk"      >nul 2>&1
del /f /q "!futuro-junk"                           2>nul
git rm -f --ignore-unmatch -- "`futuro-junk"      >nul 2>&1
del /f /q "`futuro-junk"                           2>nul
git rm -f --ignore-unmatch -- "{futuro-junk"      >nul 2>&1
del /f /q "{futuro-junk"                           2>nul
git rm -f --ignore-unmatch -- "(futuro-junk"      >nul 2>&1
del /f /q "(futuro-junk"                           2>nul
git rm -f --ignore-unmatch -- "[futuro-junk"      >nul 2>&1
del /f /q "[futuro-junk"                           2>nul
git rm -f --ignore-unmatch -- "$futuro-junk"      >nul 2>&1
del /f /q "$futuro-junk"                           2>nul

echo Fatto.
echo.
echo Se sopra vedi righe "rm 'nomefile'" vuol dire che il file era
echo pubblicato su GitHub ed e' stato tolto anche da li'.
echo.
echo ORA lancia PUBBLICA.bat per completare la pulizia online.
echo.
pause
