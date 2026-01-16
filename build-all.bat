@echo off
setlocal
echo 🏗️  Starting All Builds (Windows Host)...

:: 1. Web Build
echo -----------------------------------
echo 🌐 Building Web Version...
call build-web.bat
if %errorlevel% neq 0 exit /b %errorlevel%

:: 2. Windows Native Build
echo -----------------------------------
echo 🪟 Building Windows Native...
call build-windows.bat
if %errorlevel% neq 0 exit /b %errorlevel%

echo -----------------------------------
echo ✅ All Builds Complete!
echo 📂 Artifacts:
echo    - Web:     build\web\
echo    - Windows: build\windows\
pause
