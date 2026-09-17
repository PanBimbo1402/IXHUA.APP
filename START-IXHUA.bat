@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo IXHUA needs Node.js 22 or newer.
  echo Install the LTS Windows installer from https://nodejs.org/en/download
  echo Then close this window and double-click START-IXHUA again.
  pause
  exit /b 1
)
node scripts\start-ixhua.cjs
if errorlevel 1 pause
endlocal
