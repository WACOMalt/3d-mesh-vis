# GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages on every push to `master` or `main` branch.

## Current Setup

- **GitHub Repository**: https://github.com/WACOMalt/3d-mesh-vis
- **Deployed URL**: https://wacomalt.github.io/3d-mesh-vis
- **Deployment Branch**: `gh-pages` (automatically created and updated by GitHub Actions)

## How It Works

1. **Automatic Deployment**: The `.github/workflows/deploy-pages.yml` workflow automatically:
   - Triggers on every push to `master` or `main` branch
   - Uploads the entire repository contents to GitHub Pages
   - Deploys to `https://wacomalt.github.io/3d-mesh-vis`

2. **PWA Configuration**: The app is configured with relative paths in:
   - `manifest.json`: Uses `start_url: "./index.html"` and `scope: "./"`
   - `index.html`: Service Worker registration uses dynamic scope based on the current URL
   - `service-worker.js`: Caches relative paths that work from any subdirectory

3. **Dual Endpoint Support**:
   - ✅ https://bsums.xyz/3d-mesh-vis (your custom domain)
   - ✅ https://wacomalt.github.io/3d-mesh-vis (GitHub Pages)

## Manual GitHub Pages Configuration

To enable GitHub Pages via the web interface:

1. Go to: https://github.com/WACOMalt/3d-mesh-vis/settings/pages
2. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save

The workflow will handle all deployments automatically.

## Testing the PWA

Both endpoints support the Progressive Web App features:
- Install app from browser menu
- Offline access with cached resources
- Service Worker registration works correctly on both domains

## Troubleshooting

If Pages deployment isn't working:
1. Verify the workflow file exists: `.github/workflows/deploy-pages.yml`
2. Check workflow runs: https://github.com/WACOMalt/3d-mesh-vis/actions
3. Ensure Pages is enabled in repository settings
4. Verify `gh-pages` branch exists
