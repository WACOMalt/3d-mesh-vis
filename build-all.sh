#!/bin/bash
set -e # Exit on error

echo "🏗️  Starting All Builds (Linux Host)..."

# 1. Web Build
echo "-----------------------------------"
echo "🌐 Building Web Version..."
./build-web.sh

# 2. Linux Native Build
echo "-----------------------------------"
echo "🐧 Building Linux Native..."
./build-linux.sh

# 3. Windows Cross-Compile
echo "-----------------------------------"
echo "🪟 Building Windows (Cross-Compile)..."
# Check if build-windows.sh exists and is executable
if [ -x "./build-windows.sh" ]; then
    ./build-windows.sh
else
    echo "⚠️  Skipping Windows build: ./build-windows.sh not found or not executable."
    echo "👉 Make sure you have installed 'nsis' and 'lld' and run 'chmod +x build-windows.sh'"
fi

echo "-----------------------------------"
echo "✅ All Builds Complete!"
echo "📂 Artifacts:"
echo "   - Web:     build/web/"
echo "   - Linux:   build/linux/"
echo "   - Windows: build/windows/ (if successful)"
