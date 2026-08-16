@echo off
title MAHESH OS Portfolio
cd /d "%~dp0"
start "MAHESH OS Server" cmd /k "cd /d "%~dp0" && npm run dev -- --host 127.0.0.1 --port 5173"
powershell -NoProfile -Command "$ready=$false; for($attempt=0; $attempt -lt 20; $attempt++){ try { Invoke-WebRequest -Uri 'http://127.0.0.1:5173' -UseBasicParsing | Out-Null; $ready=$true; break } catch { Start-Sleep -Milliseconds 500 } }; if(-not $ready){ exit 1 }"
if errorlevel 1 (
  echo The portfolio server did not start. Check the MAHESH OS Server window for errors.
  pause
  exit /b 1
)
start "" "http://127.0.0.1:5173"
