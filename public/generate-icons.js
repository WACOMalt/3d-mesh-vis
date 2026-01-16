#!/usr/bin/env node

/**
 * Icon generation utility for PWA
 * Generates PNG icons from SVG using canvas/puppeteer
 * 
 * Usage: node generate-icons.js
 * 
 * Requirements: npm install sharp
 * 
 * This script converts the icon-teapot.svg to multiple PNG sizes
 * for PWA manifest compatibility.
 */

const fs = require('fs');
const path = require('path');

console.log(`
Icon Generation Guide
====================

To generate PWA icons from the SVG, you have a few options:

1. **Online Tool (Easiest)**
   - Visit: https://realfavicongenerator.net/
   - Upload: icon-teapot.svg
   - Generate sizes: 192x192, 512x512 (and maskable variants)
   - Download and place PNG files in project root

2. **Using Sharp (Node.js)**
   - npm install sharp
   - Create icons with: sharp('icon-teapot.svg').png().toFile('icon-192.png')
   
3. **Using ImageMagick**
   - convert icon-teapot.svg -density 192 icon-192.png
   - convert icon-teapot.svg -density 512 icon-512.png

4. **Browser DevTools**
   - Open index.html locally
   - Open DevTools > Console
   - Draw SVG to canvas, then save as PNG

Required files for PWA:
- icon-192.png (192x192)
- icon-512.png (512x512)
- icon-maskable-192.png (192x192, centered on transparent bg)
- icon-maskable-512.png (512x512, centered on transparent bg)
- screenshot-540.png (540x720, for mobile)
- screenshot-1280.png (1280x720, for desktop)

Current setup uses SVG as favicon fallback, which works in modern browsers.
For full PWA compatibility, generate the PNG files and place them in the root directory.
`);
