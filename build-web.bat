@echo off
echo 🌐 Packaging for Web...

if not exist "build\web" mkdir "build\web"
set OUTPUT_FILE=build\web\web-release.zip

if exist %OUTPUT_FILE% del %OUTPUT_FILE%

echo 📦 Compressing web assets...
powershell Compress-Archive -Path public,server.js,package.json -DestinationPath %OUTPUT_FILE%

echo ✅ Packaging Complete!
echo 📍 Output: %OUTPUT_FILE%
pause
