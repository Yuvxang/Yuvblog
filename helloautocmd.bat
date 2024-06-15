@echo off
start cmd /k "git add ."
start cmd /k "git commit -m "Skip render some pages""
start cmd /k "git push"
echo push end!