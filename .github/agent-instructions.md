# 3D Mesh Visualizer - AI Agent Instructions

## Architecture Overview

This is a **vanilla JavaScript PWA** for interactive 3D mesh visualization using Three.js. No build system—files are served directly.

**Key Files:**
- `index.html` - Single-page app with embedded CSS (~600 lines including styles)
- `main.js` - All 3D logic, animations, UI state management (~1500 lines, ES modules)
- `server.js` - Express dev server on port 5678
- `service-worker.js` - PWA offline caching

**External Libraries (vendored, not npm):**
- `three.min.js` - Three.js r149 with importmap in index.html
- `gsap.min.js` - GSAP for animations
- `OrbitControls.js`, `OBJLoader.js` - Three.js addons

## Development Workflow

```bash
npm start          # Start dev server at http://localhost:5678
# No build step - edit files and refresh browser
```

**Testing UI changes:** Use browser DevTools or Chrome DevTools MCP. Note that programmatic click events via DevTools protocol may not trigger JS event listeners—manual testing is more reliable.

## Responsive Design Pattern

**Breakpoint: 535px** - Single breakpoint for mobile/desktop switching.

```css
@media (max-width: 535px) { /* Mobile styles */ }
@media (min-width: 536px) { /* Desktop styles */ }
```

```javascript
const isMobile = () => window.innerWidth <= 535;
```

**UI State Management** (in `main.js` IIFE at bottom):
- `isCollapsed` - tracks settings panel state independently from layout
- `syncPanelState()` - applies `.collapsed`/`.expanded` classes based on state
- `applyMobileStyles()` - sets layout-specific CSS, then syncs state
- State persists across breakpoint changes via `currentMode` tracking

## CSS Conventions

- Shared styles go **outside** media queries (base `#settings`, `#settings h3`, etc.)
- Media queries only override layout-specific properties (position, width, transform)
- Mobile uses `transform: translateY()` for settings panel slide animation
- Desktop uses `max-height` for collapse animation
- Use `.collapsed` and `.expanded` classes for state—not inline styles

## Three.js Patterns

- Scene setup and all 3D objects are in module scope at top of `main.js`
- Custom sky shader with `SkyShader` material for procedural background
- Geometry visualization uses GSAP for vertex/edge/face animations
- **Models loaded from `models/models.json`** - add new OBJ files to `models/` and register in the JSON array with `id`, `title`, and `path`

## PWA & Deployment

- Auto-deploys to GitHub Pages via `.github/workflows/deploy-pages.yml`
- All paths are relative (`./`) for subdirectory hosting compatibility
- Service worker uses network-first strategy with cache fallback
- Dual endpoints: GitHub Pages and custom domain (bsums.xyz)

## Common Gotchas

1. **Server keeps restarting:** Terminal may have npm start running in background. Check with `lsof -i :5678` or `pkill -f "node server.js"`
2. **CSS not updating:** Service worker cache—use cache-busting query param (`?t=timestamp`) or hard refresh
3. **Settings panel position:** Desktop uses `position: absolute`, mobile uses `position: fixed`—JS toggles this in `applyMobileStyles()`
4. **Button click handlers:** Collapse button works on both mobile/desktop. Panel click toggles only on mobile.
