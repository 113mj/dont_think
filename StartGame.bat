@echo off
echo Starting local server for Boo!m Night...
start http://localhost:8000/index.html
python -m http.server 8000
pause
