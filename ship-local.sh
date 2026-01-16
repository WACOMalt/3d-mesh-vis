#!/bin/bash
set -e # Exit on error

# Ensure gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ Error: 'gh' CLI is not installed. Please install it to use this script."
    exit 1
fi

echo "🚀 Starting Hybrid Release..."

# 1. Build Local (Linux, Windows, Web)
./build-all.sh

# 2. Bump Version & Tag
npm version patch --no-git-tag-version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "📦 Version bumped to $NEW_VERSION"

# Update tauri version
if command -v jq &> /dev/null; then
  jq ".package.version = \"$NEW_VERSION\"" src-tauri/tauri.conf.json > src-tauri/tauri.conf.json.tmp && mv src-tauri/tauri.conf.json.tmp src-tauri/tauri.conf.json
else
  # Fallback sed
  sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" src-tauri/tauri.conf.json
fi

# Commit and Tag
git add package.json package-lock.json src-tauri/tauri.conf.json
git commit -m "chore: bump version to $NEW_VERSION [skip ci]"
git tag "v$NEW_VERSION"

echo "📤 Creating GitHub Release & Uploading Artifacts..."
echo "   (This trigger Mac build in Cloud)"

# 3. Create Release & Upload
# Note: Using [Local Build] in notes to signal Cloud to skip redundant builds
gh release create "v$NEW_VERSION" \
    --title "Release v$NEW_VERSION" \
    --notes "Automated release v$NEW_VERSION. Includes [Local Build] artifacts." \
    build/web/web-release.zip \
    build/linux/*.AppImage \
    build/linux/*.deb \
    build/windows/*.exe \
    build/windows/*.msi

# 4. Push changes (so repo stays in sync)
git push origin master
git push origin "v$NEW_VERSION"

echo "✅ Done! Mac build should be starting in Actions now."
