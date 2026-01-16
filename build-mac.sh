#!/bin/bash
echo "🍎 Building for macOS..."

# Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run Tauri Build
echo "🚀 Starting Build..."
npm run tauri build

# Prepare Output Directory
mkdir -p build/mac

# Copy Artifacts
echo "📂 Copying artifacts to build/mac/..."
# Copy DMG (matches any version)
cp src-tauri/target/release/bundle/dmg/*.dmg build/mac/ 2>/dev/null
# Copy App Bundle (recursive)
cp -r src-tauri/target/release/bundle/macos/*.app build/mac/ 2>/dev/null

echo "✅ Build Complete!"
echo "📍 Artifacts are in: build/mac/"
