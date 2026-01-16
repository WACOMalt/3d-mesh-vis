@echo off
echo 🪟 Building for Windows...

if not exist node_modules (
    echo 📦 Installing dependencies...
    call npm install
)

echo 🚀 Starting Build...
call npm run tauri build

echo 📂 Copying artifacts...
if not exist "build\windows" mkdir "build\windows"

:: Copy MSI installer
xcopy /y /s "src-tauri\target\release\bundle\msi\*.msi" "build\windows\"
:: Copy EXE installer (NSIS)
xcopy /y /s "src-tauri\target\release\bundle\nsis\*.exe" "build\windows\"

echo ✅ Build Complete!
echo 📍 Artifacts are in: build\windows\
pause
