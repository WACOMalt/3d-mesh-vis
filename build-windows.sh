#!/bin/bash
echo "🪟 Cross-compiling for Windows (from Linux)..."

# 1. Check for NSIS (Required for Windows Installer)
if ! command -v makensis &> /dev/null; then
    echo "❌ Error: 'nsis' is not installed."
    echo "👉 Please run: sudo apt install nsis"
    exit 1
fi

# 2. Check for LLD (Linker for cross-compilation)
if ! command -v lld &> /dev/null; then
    echo "❌ Error: 'lld' (LLVM Linker) is not installed."
    echo "👉 Please run: sudo apt install lld llvm"
    exit 1
fi

# 3. Add Rust Windows Target
echo "🔧 Adding Rust target: x86_64-pc-windows-msvc..."
rustup target add x86_64-pc-windows-msvc

# 4. Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# 5. Run Tauri Build with Windows Target
echo "🚀 Starting Cross-Build..."
npm run tauri build -- --target x86_64-pc-windows-msvc

# 6. Prepare Output Directory
mkdir -p build/windows

# 7. Copy Artifacts
echo "📂 Copying artifacts to build/windows/..."
cp src-tauri/target/x86_64-pc-windows-msvc/release/bundle/nsis/*.exe build/windows/ 2>/dev/null
cp src-tauri/target/x86_64-pc-windows-msvc/release/bundle/msi/*.msi build/windows/ 2>/dev/null

echo "✅ Windows Build Complete!"
echo "📍 Artifacts are in: build/windows/"
