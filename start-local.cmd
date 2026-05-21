@echo off
cd /d "%~dp0"
echo Starting local server...
echo.
"C:\Program Files\nodejs\npm.cmd" run dev -- --hostname 127.0.0.1 --port 3000
echo.
echo Server stopped. Press any key to close this window.
pause > nul
