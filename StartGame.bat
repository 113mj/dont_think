@echo off
echo Starting local server for Boo!m Night...
start http://localhost:8000/Boom%%20Night_demo1.html
python -m http.server 8000
pause
