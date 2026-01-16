#!/bin/bash
echo "🌐 Packaging for Web..."

# Prepare Output Directory
mkdir -p build/web
OUTPUT_FILE="build/web/web-release.zip"

# Remove old zip if exists
if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
fi

# Zip public folder (requires zip utility)
if command -v zip &> /dev/null; then
    echo "📦 Zipping..."
    # Zip public folder, server.js, and package.json
    zip -r "$OUTPUT_FILE" public/ server.js package.json
    echo "✅ Packaging Complete!"
    echo "📍 Output: $OUTPUT_FILE"
else
    echo "❌ Error: 'zip' command not found. Please install it (e.g., sudo apt install zip)."
    exit 1
fi
