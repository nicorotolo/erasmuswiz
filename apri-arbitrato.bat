@echo off
REM Rigenera la pagina d'arbitrato dalle code vere e la apre nel browser.
REM Rigenerarla ogni volta e' voluto: la coda cambia a ogni giro della catena e
REM a ogni verdetto applicato, e una pagina vecchia farebbe rigiudicare cose
REM gia' chiuse.
node "%~dp0scripts\pagina-arbitrato.mjs"
if errorlevel 1 (
  echo.
  echo La pagina NON e' stata rigenerata: leggi l'errore qui sopra.
  pause
  exit /b 1
)
start "" "%~dp0raccolta\arbitrato.html"
