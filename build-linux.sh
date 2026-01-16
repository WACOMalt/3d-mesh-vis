#!/bin/bash
echo "🐧 Building for Linux..."

# Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run Tauri Build
echo "🚀 Starting Build..."
npm run tauri build

# Prepare Output Directory
mkdir -p build/linux

# Copy Artifacts
echo "📂 Copying artifacts to build/linux/..."
# Copy AppImage (matches any version)
cp src-tauri/target/release/bundle/appimage/*.AppImage build/linux/ 2>/dev/null
# Copy DEB (matches any version)
cp src-tauri/target/release/bundle/deb/*.deb build/linux/ 2>/dev/null

echo "✅ Build Complete!"
echo "📍 Artifacts are in: build/linux/"
