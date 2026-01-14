// 3D Mesh Visualizer - ES Modules Version
// Uses importmap for Three.js imports

import * as THREE from 'three';
import { OrbitControls } from 'three/controls';
import { OBJLoader } from 'three/loaders';

// ===== Scene Setup =====
const scene = new THREE.Scene();

// ===== Sky Shader Setup =====
// Procedural sky shader
const createSkyMesh = () => {
  const vertexShader = `
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    precision highp float;
    varying vec3 vWorldPosition;
    uniform vec3 sunPosition;
    uniform float showHorizonCutoff;
    uniform vec3 horizonColor;
    
    void main() {
      vec3 direction = normalize(vWorldPosition - cameraPosition);
      vec3 up = vec3(0.0, 1.0, 0.0);
      
      // Hard cut at horizon - anything below uses horizonColor (only when enabled)
      if (direction.y < 0.0 && showHorizonCutoff > 0.5) {
        gl_FragColor = vec4(horizonColor, 1.0);
        return;
      }
      
      // Simple sky based on sun position
      float sunDot = dot(direction, normalize(sunPosition));
      float upDot = dot(direction, up);
      
      // Sky color: blue at top, warmer at horizon
      vec3 skyColor = mix(
        vec3(0.5, 0.7, 1.0),  // blue
                vec3(0.2, 0.2, 0.2),  // dark grey
        smoothstep(0.0, -0.3, upDot)
      );
      
      // Sun glow
      vec3 sunColor = vec3(1.0, 0.9, 0.7);
      float sunIntensity = exp(-pow(1.0 - sunDot, 2.0) * 20.0);
      skyColor += sunColor * sunIntensity * 0.5;
      
      gl_FragColor = vec4(skyColor, 1.0);
    }
  `;
  
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.ShaderMaterial({
    name: 'SkyShader',
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      sunPosition: { value: new THREE.Vector3(1, 1, 1).normalize() },
            showHorizonCutoff: { value: 0.0 },
      horizonColor: { value: new THREE.Color(0x333333) }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  });
  
  return new THREE.Mesh(geometry, material);
};

const sky = createSkyMesh();
sky.scale.set(100, 100, 100);

// Sun position for sky shader
let sunElevation = 45;
let sunAzimuth = 135;
const sunVector = new THREE.Vector3();

function updateSunPosition() {
  const phi = THREE.MathUtils.degToRad(90 - sunElevation);
  const theta = THREE.MathUtils.degToRad(sunAzimuth);
  sunVector.setFromSphericalCoords(1, phi, theta);
  sky.material.uniforms.sunPosition.value.copy(sunVector);
  
  // Also update keyLight position to match sun (scaled to reasonable distance)
  const sunDistance = 10;
  keyLight.position.copy(sunVector).multiplyScalar(sunDistance);
}

// Sky follows camera
scene.add(sky);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x333333);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.physicallyCorrectLights = true;
document.getElementById('canvas-container').appendChild(renderer.domElement);

// ===== Lighting Setup =====
// Hemisphere light to match sky colors (blue top, warm bottom)
const hemisphereLight = new THREE.HemisphereLight(
  0x87ceeb, // sky color (blue)
  0xffa644, // ground color (warm orange)
  0.6       // intensity
);
scene.add(hemisphereLight);

// Directional lights grouped to rotate together
const lightsGroup = new THREE.Group();
scene.add(lightsGroup);

// Key light (main) - tracks the sun position
const keyLight = new THREE.DirectionalLight(0xffffff, 6.0);
keyLight.position.set(4, 5, 3);
keyLight.castShadow = false;
scene.add(keyLight);

// Initialize sun position to match sky and keyLight
updateSunPosition();

// Rim light - back left
const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
rimLight.position.set(-4, 5, -3);
rimLight.castShadow = false;
lightsGroup.add(rimLight);

// ===== Helpers =====
// Grid helper
const gridHelper = new THREE.GridHelper(10, 10);
gridHelper.position.y = -1;
scene.add(gridHelper);

// Axes helper (navigation)
const axesHelper = new THREE.AxesHelper(1);
camera.add(axesHelper);
scene.add(camera);
axesHelper.position.set(1, 0.50, -1);
axesHelper.scale.set(0.1, 0.1, 0.1);

// Floor axes helper with custom colors
const floorAxesGeometry = new THREE.BufferGeometry();
const floorAxesPositions = new Float32Array([
    0, 0, 0,  6, 0, 0,  // X axis (red)
    0, 0, 0,  0, 0, 0,  // Y axis (black)
    0, 0, 0,  0, 0, 6   // Z axis (blue)
]);
const floorAxesColors = new Float32Array([
    1, 0, 0,  1, 0, 0,  // Red for X
    0, 0, 0,  0, 0, 0,  // Black for Y
    0, 0, 1,  0, 0, 1   // Blue for Z
]);
floorAxesGeometry.setAttribute('position', new THREE.BufferAttribute(floorAxesPositions, 3));
floorAxesGeometry.setAttribute('color', new THREE.BufferAttribute(floorAxesColors, 3));
const floorAxesMaterial = new THREE.LineBasicMaterial({ vertexColors: true, linewidth: 2 });
const floorAxesHelper = new THREE.LineSegments(floorAxesGeometry, floorAxesMaterial);
floorAxesHelper.scale.set(1, -1, 1);
floorAxesHelper.position.y = -0.999;
scene.add(floorAxesHelper);

// ===== Controls =====
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// ===== Data Storage =====
let currentShape = 'cube';
let currentGeometry = null;
let currentMaterial = null;  // Store original material for textures
let verticesData = [];
let edgesData = [];
let facesData = [];
let vertices = null;  // InstancedMesh
let vertexScales = [];  // Track individual vertex scales for animation
let edgesMesh = null;  // Merged edges mesh
let edgeVisibility = [];  // Track individual edge visibility for animation
let facesMesh = null;  // Merged faces mesh
let facesInnerMesh = null; // Back-side faces for inside color
let faceVisibility = [];  // Track individual face visibility for animation
let mesh = null;

// ===== Custom Shader Material for Edges =====
const edgeShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `
        attribute float visibility;
        varying float vVisibility;
        
        void main() {
            vVisibility = visibility;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying float vVisibility;
        
        void main() {
            gl_FragColor = vec4(0.0, 1.0, 0.0, vVisibility);
        }
    `,
    transparent: true,
    linewidth: 3
});

// ===== Custom Shader Material for Faces =====
const faceShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        keyLightPos: { value: new THREE.Vector3(4, 5, 3) },
        rimLightPos: { value: new THREE.Vector3(-4, 5, -3) },
        outsideColor: { value: new THREE.Color(0x0044ff) },
        insideColor: { value: new THREE.Color(0xff6600) },
        inside: { value: 0.0 }
    },
    vertexShader: `
        attribute float visibility;
        varying float vVisibility;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        
        void main() {
            vVisibility = visibility;
            // Transform normal to world space
            vNormal = normalize(mat3(modelMatrix) * normal);
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 keyLightPos;
        uniform vec3 rimLightPos;
        uniform vec3 outsideColor;
        uniform vec3 insideColor;
        uniform float inside;
        
        varying float vVisibility;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        // Hash for dithered (opaque) visibility reveal
        float hash(vec3 p) {
            return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
        }
        
        void main() {
            // Opaque reveal: discard pixels based on animated visibility
            float dither = hash(vWorldPosition * 10.0);
            if (dither >= vVisibility) discard;

            // Different colors for outside vs inside
            vec3 baseColor = mix(outsideColor, insideColor, inside);
            vec3 N = normalize(mix(vNormal, -vNormal, inside));
            vec3 V = normalize(cameraPosition - vWorldPosition);
            
            // Normalized light directions
            vec3 keyLight = normalize(keyLightPos - vWorldPosition);
            vec3 rimLight = normalize(rimLightPos - vWorldPosition);
            
            // Lambert diffuse
            float keyDiff = max(dot(N, keyLight), 0.0) * 2.0;
            float rimDiff = max(dot(N, rimLight), 0.0) * 1.5;
            
            float totalDiffuse = keyDiff + rimDiff;
            vec3 diffuseColor = baseColor * totalDiffuse;
            
            // Blinn-Phong specular
            float shininess = 32.0;
            float specularStrength = 0.3;
            
            vec3 H1 = normalize(keyLight + V);
            float spec1 = pow(max(dot(N, H1), 0.0), shininess) * 2.0;
            
            vec3 H2 = normalize(rimLight + V);
            float spec2 = pow(max(dot(N, H2), 0.0), shininess) * 1.5;
            
            vec3 specularColor = vec3(1.0) * (spec1 + spec2) * specularStrength;

            vec3 finalColor = diffuseColor + specularColor;

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `,
    transparent: false,
    side: THREE.DoubleSide,
    depthTest: true,
    depthWrite: true,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1
});

// ===== Shape Geometries =====
const shapeGeometries = {
    cube: () => new THREE.BoxGeometry(2, 2, 2),
    cylinder: () => new THREE.CylinderGeometry(1, 1, 2, 16),
    cone: () => new THREE.ConeGeometry(1, 2, 16),
    sphere: () => new THREE.SphereGeometry(1, 16, 16)
};

// ===== Lighting Configuration =====
let lightingRotation = 180;
let skyboxRotation = 212;
let vertexSize = 0.05;
let animationMaxTime = 2;
let floorHelpersVisible = true;
const lights = [rimLight];
const lightPositions = [
    { x: -4, y: 5, z: -3 }
];

function rotateLights(angle) {
    const rad = (angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    lights.forEach((light, index) => {
        const pos = lightPositions[index];
        const x = pos.x * cos - pos.z * sin;
        const z = pos.x * sin + pos.z * cos;
        light.position.set(x, pos.y, z);
    });
    
    // Update shader uniforms if assembled mesh exists
    if (mesh && mesh.material && mesh.material.uniforms) {
        mesh.material.uniforms.rimLightPos.value.copy(rimLight.position);
    }
    
    // Update shader uniforms if faces mesh exists
    if (facesMesh && facesMesh.material && facesMesh.material.uniforms) {
        facesMesh.material.uniforms.rimLightPos.value.copy(rimLight.position);
    }

    // Update shader uniforms if inside faces mesh exists
    if (facesInnerMesh && facesInnerMesh.material && facesInnerMesh.material.uniforms) {
        facesInnerMesh.material.uniforms.rimLightPos.value.copy(rimLight.position);
    }
}

function rotateSkybox(angle) {
    // Update sun azimuth based on slider angle
    sunAzimuth = angle;
    updateSunPosition();

    // Also rotate the skybox mesh itself
    sky.rotation.y = (angle * Math.PI) / 180;

    // Update shader uniforms if assembled mesh exists
    if (mesh && mesh.material && mesh.material.uniforms) {
        mesh.material.uniforms.keyLightPos.value.copy(keyLight.position);
    }

    // Update shader uniforms if faces mesh exists
    if (facesMesh && facesMesh.material && facesMesh.material.uniforms) {
        facesMesh.material.uniforms.keyLightPos.value.copy(keyLight.position);
    }

    // Update shader uniforms if inside faces mesh exists
    if (facesInnerMesh && facesInnerMesh.material && facesInnerMesh.material.uniforms) {
        facesInnerMesh.material.uniforms.keyLightPos.value.copy(keyLight.position);
    }
}

// Safe wrapper to avoid runtime errors if rotateSkybox is unavailable
function applySkyboxRotation(angle) {
    if (typeof rotateSkybox === 'function') {
        rotateSkybox(angle);
    }
}

function updateVertexGeometry() {
    if (vertices) {
        // Kill any running animations before updating geometry
        gsap.killTweensOf(vertexScales);
        
        // Update geometry with new size
        vertices.geometry.dispose();
        vertices.geometry = new THREE.SphereGeometry(vertexSize, 5, 3);
    }
}

// ===== Initialization =====
console.log('Initializing...');
console.log('vertex-size input element:', document.getElementById('vertex-size'));
updateGeometry();
rotateLights(lightingRotation);

// ===== Event Listeners =====
document.getElementById('shape-select').addEventListener('change', (e) => {
    currentShape = e.target.value;
    if (currentShape === 'obj') {
        document.getElementById('obj-file').click();
    } else {
        updateGeometry();
        resetScene();
    }
});

document.getElementById('obj-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const objLoader = new OBJLoader();
            try {
                const object = objLoader.parse(event.target.result);
                if (object.children.length > 0) {
                    currentGeometry = object.children[0].geometry;
                    currentMaterial = object.children[0].material || null;
                    if (!currentGeometry) {
                        currentGeometry = object.children[0];
                    }
                    updateGeometry();
                    resetScene();
                }
            } catch (error) {
                console.error('Error loading OBJ:', error);
                alert('Error loading OBJ file. Make sure it\'s a valid OBJ file.');
            }
        };
        reader.readAsText(file);
    }
});

document.getElementById('show-vertices').addEventListener('click', showVertices);
document.getElementById('connect-edges').addEventListener('click', connectEdges);
document.getElementById('form-faces').addEventListener('click', formFaces);
document.getElementById('assemble-mesh').addEventListener('click', assembleMesh);
document.getElementById('reset').addEventListener('click', resetScene);

// ===== Settings Panel Listeners =====
document.getElementById('lighting-rotation').addEventListener('input', (e) => {
    lightingRotation = parseFloat(e.target.value);
    rotateLights(lightingRotation);
    document.getElementById('lighting-rotation-value').textContent = lightingRotation + '°';
});

document.getElementById('skybox-rotation').addEventListener('input', (e) => {
    skyboxRotation = parseFloat(e.target.value);
    applySkyboxRotation(skyboxRotation);
    document.getElementById('skybox-rotation-value').textContent = skyboxRotation + '°';
});

// Initial sync of controls to defaults
rotateLights(lightingRotation);
applySkyboxRotation(skyboxRotation);
document.getElementById('lighting-rotation').value = lightingRotation;
document.getElementById('lighting-rotation-value').textContent = lightingRotation + '°';
document.getElementById('skybox-rotation').value = skyboxRotation;
document.getElementById('skybox-rotation-value').textContent = skyboxRotation + '°';

// Reset settings to defaults
document.getElementById('settings-reset').addEventListener('click', () => {
    // Defaults
    lightingRotation = 180;
    skyboxRotation = 212;
    vertexSize = 0.05;
    animationMaxTime = 2;
    floorHelpersVisible = true;

    // Sliders + labels
    const lightSlider = document.getElementById('lighting-rotation');
    lightSlider.value = lightingRotation;
    document.getElementById('lighting-rotation-value').textContent = lightingRotation + '°';
    rotateLights(lightingRotation);

    const skySlider = document.getElementById('skybox-rotation');
    skySlider.value = skyboxRotation;
    document.getElementById('skybox-rotation-value').textContent = skyboxRotation + '°';
    applySkyboxRotation(skyboxRotation);

    const vertexSlider = document.getElementById('vertex-size');
    vertexSlider.value = vertexSize;
    document.getElementById('vertex-size-value').textContent = vertexSize.toFixed(2);
    if (vertices) updateVertexGeometry();

    const animSlider = document.getElementById('animation-max-time');
    animSlider.value = animationMaxTime;
    document.getElementById('animation-max-time-value').textContent = animationMaxTime + 's';

    // Background color
    const bgInput = document.getElementById('bg-color');
    bgInput.value = '#333333';
    renderer.setClearColor(0x333333);
    document.body.style.background = '#333333';
    sky.material.uniforms.horizonColor.value.setHex(0x333333);

    // Toggles
    gridHelper.visible = true;
    floorAxesHelper.visible = true;
    document.getElementById('toggle-floor-helpers').style.background = 'rgba(0, 123, 255, 0.8)';

    sky.visible = true;
    document.getElementById('toggle-background').style.background = 'rgba(0, 123, 255, 0.8)';

    sky.material.uniforms.showHorizonCutoff.value = 0.0;
    document.getElementById('toggle-skybox-bottom').style.background = 'rgba(108, 117, 125, 0.8)';
});

let vertexSizeTimeout;
const vertexSizeInput = document.getElementById('vertex-size');
console.log('Setting up vertex-size listener:', vertexSizeInput);

// Test if mouse events are being detected
vertexSizeInput.addEventListener('mousedown', (e) => {
    console.log('vertex-size MOUSEDOWN event fired');
});

vertexSizeInput.addEventListener('touchstart', (e) => {
    console.log('vertex-size TOUCHSTART event fired');
});

vertexSizeInput.addEventListener('input', (e) => {
    console.log('vertex-size INPUT event fired:', e.target.value);
    vertexSize = parseFloat(e.target.value);
    document.getElementById('vertex-size-value').textContent = vertexSize.toFixed(2);
    
    // Debounce the geometry update to avoid lag while dragging
    clearTimeout(vertexSizeTimeout);
    vertexSizeTimeout = setTimeout(() => {
        console.log('vertex-size geometry update, vertices exist:', !!vertices);
        if (vertices) updateVertexGeometry();
    }, 150);
});
console.log('vertex-size listener attached');

document.getElementById('animation-max-time').addEventListener('input', (e) => {
    animationMaxTime = parseFloat(e.target.value);
    document.getElementById('animation-max-time-value').textContent = animationMaxTime.toFixed(1) + 's';
});

document.getElementById('toggle-floor-helpers').addEventListener('click', () => {
    floorHelpersVisible = !floorHelpersVisible;
    gridHelper.visible = floorHelpersVisible;
    floorAxesHelper.visible = floorHelpersVisible;
    const button = document.getElementById('toggle-floor-helpers');
    button.style.background = floorHelpersVisible ? 'rgba(0, 123, 255, 0.8)' : 'rgba(108, 117, 125, 0.8)';
});

document.getElementById('toggle-background').addEventListener('click', () => {
    sky.visible = !sky.visible;
    const button = document.getElementById('toggle-background');
    button.style.background = sky.visible ? 'rgba(0, 123, 255, 0.8)' : 'rgba(108, 117, 125, 0.8)';
});

document.getElementById('toggle-skybox-bottom').addEventListener('click', () => {
    const currentValue = sky.material.uniforms.showHorizonCutoff.value;
    sky.material.uniforms.showHorizonCutoff.value = currentValue > 0.5 ? 0.0 : 1.0;
    const button = document.getElementById('toggle-skybox-bottom');
    button.style.background = sky.material.uniforms.showHorizonCutoff.value > 0.5 ? 'rgba(0, 123, 255, 0.8)' : 'rgba(108, 117, 125, 0.8)';
});

// Initialize toggle state to off (bottom hidden)
document.getElementById('toggle-skybox-bottom').style.background = 'rgba(108, 117, 125, 0.8)';

// ===== Color Picker =====
const bgColorInput = document.getElementById('bg-color');
bgColorInput.addEventListener('input', (e) => {
    const hexColor = e.target.value;
    const decimalColor = parseInt(hexColor.substring(1), 16);
    renderer.setClearColor(decimalColor);
    document.body.style.background = hexColor;
    // Also update skybox bottom color
    sky.material.uniforms.horizonColor.value.setHex(decimalColor);
});

// ===== Core Functions =====

function autoScaleAndPositionModel(geometry) {
    /**
     * Automatically scales and positions a model based on its bounding box:
     * 1. If longest dimension > 10 units: scale down to 10 units
     * 2. If longest dimension < 5 units: scale up to 5 units
     * 3. Apply vertical offset to place bottom of bounding box on floor (Y=-1)
     * Returns object with center and required camera distance to view entire model
     */
    if (!geometry) return { center: new THREE.Vector3(0, 0, 0), distance: 3 };
    
    // Calculate bounding box
    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox;
    const bboxSize = bbox.getSize(new THREE.Vector3());
    const bboxMin = bbox.min;
    
    console.log('Initial bounding box:', { min: bboxMin.clone(), size: bboxSize.clone() });
    
    // Find longest dimension
    const maxDimension = Math.max(bboxSize.x, bboxSize.y, bboxSize.z);
    
    // Determine scale factor
    let scaleFactor = 1.0;
    if (maxDimension > 10) {
        scaleFactor = 10 / maxDimension;
    } else if (maxDimension < 5) {
        scaleFactor = 5 / maxDimension;
    }
    
    console.log('Scale factor:', scaleFactor, 'Max dimension:', maxDimension);
    
    // Apply scaling to all vertices
    if (scaleFactor !== 1.0) {
        const posAttr = geometry.attributes.position;
        for (let i = 0; i < posAttr.count; i++) {
            const vertex = new THREE.Vector3().fromBufferAttribute(posAttr, i);
            vertex.multiplyScalar(scaleFactor);
            posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
        posAttr.needsUpdate = true;
    }
    
    // Recalculate bounding box after scaling
    geometry.computeBoundingBox();
    const scaledBbox = geometry.boundingBox;
    const scaledBboxMin = scaledBbox.min;
    const scaledBboxSize = scaledBbox.getSize(new THREE.Vector3());
    
    console.log('After scaling, new min Y:', scaledBboxMin.y);
    
    // Calculate vertical offset to place bottom on floor (floor is at Y = -1)
    const floorY = -1;
    const verticalOffset = floorY - scaledBboxMin.y;
    
    console.log('Vertical offset to apply:', verticalOffset);
    
    // Apply vertical offset to all vertices
    if (Math.abs(verticalOffset) > 0.0001) {
        const posAttr = geometry.attributes.position;
        for (let i = 0; i < posAttr.count; i++) {
            const vertex = new THREE.Vector3().fromBufferAttribute(posAttr, i);
            vertex.y += verticalOffset;
            posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
        posAttr.needsUpdate = true;
    }
    
    // Verify final position and calculate center
    geometry.computeBoundingBox();
    const finalBbox = geometry.boundingBox;
    const bboxCenter = finalBbox.getCenter(new THREE.Vector3());
    const finalBboxSize = finalBbox.getSize(new THREE.Vector3());
    console.log('Final bounding box min Y:', finalBbox.min.y, '(should be -1 for floor)');
    console.log('Bounding box center:', bboxCenter.clone());
    
    // Calculate required camera distance to view entire model
    // Use the largest dimension of the bounding box
    const maxFinalDimension = Math.max(finalBboxSize.x, finalBboxSize.y, finalBboxSize.z);
    const cameraVFOV = 75; // vertical field of view in degrees
    const aspectRatio = window.innerWidth / window.innerHeight;
    
    // Determine which FOV to use based on window aspect ratio
    let effectiveFOV;
    if (aspectRatio > 1) {
        // Landscape (wider than tall) - use vertical FOV
        effectiveFOV = cameraVFOV;
    } else if (aspectRatio < 1) {
        // Portrait (taller than wide) - convert to horizontal FOV
        const vFOVRad = THREE.MathUtils.degToRad(cameraVFOV);
        const hFOVRad = 2 * Math.atan(Math.tan(vFOVRad / 2) * aspectRatio);
        effectiveFOV = THREE.MathUtils.radToDeg(hFOVRad);
    } else {
        // Square - use horizontal FOV
        const vFOVRad = THREE.MathUtils.degToRad(cameraVFOV);
        const hFOVRad = 2 * Math.atan(Math.tan(vFOVRad / 2) * aspectRatio);
        effectiveFOV = THREE.MathUtils.radToDeg(hFOVRad);
    }
    
    const fovRad = THREE.MathUtils.degToRad(effectiveFOV);
    // Calculate distance: distance = (maxDimension / 2) / tan(fov/2)
    const requiredDistance = (maxFinalDimension / 2) / Math.tan(fovRad / 2);
    // Add buffer (1.43x = 1.3 * 1.1 for comfortable viewing with extra space)
    const cameraDistance = requiredDistance * 1.43;
    
    console.log('Aspect ratio:', aspectRatio, 'Effective FOV:', effectiveFOV, 'Max final dimension:', maxFinalDimension, 'Required distance:', requiredDistance, 'Final distance:', cameraDistance);
    
    return { center: bboxCenter, distance: cameraDistance };
}

function updateGeometry() {
    if (currentShape === 'obj') {
        if (!currentGeometry) return;
    } else {
        currentGeometry = shapeGeometries[currentShape]();
    }
    // Apply auto-scaling and floor positioning to all geometries
    const result = autoScaleAndPositionModel(currentGeometry);
    const { center, distance } = result;
    
    // Update camera target to center on the model
    controls.target.copy(center);
    
    // Position camera back from the center to view entire model
    const cameraDirection = new THREE.Vector3(0.5, 0.6, 0.7).normalize();
    camera.position.copy(center).addScaledVector(cameraDirection, distance);
    
    controls.update();
    extractData();
    updateInfo();
}

function extractData() {
    if (!currentGeometry) return;

    // Extract vertices
    const posAttr = currentGeometry.attributes.position;
    verticesData = [];
    for (let i = 0; i < posAttr.count; i++) {
        verticesData.push(new THREE.Vector3().fromBufferAttribute(posAttr, i));
    }

    // Extract faces (triangles)
    facesData = [];
    if (currentGeometry.index) {
        for (let i = 0; i < currentGeometry.index.count; i += 3) {
            facesData.push([
                currentGeometry.index.array[i],
                currentGeometry.index.array[i + 1],
                currentGeometry.index.array[i + 2]
            ]);
        }
    } else {
        for (let i = 0; i < posAttr.count; i += 3) {
            facesData.push([i, i + 1, i + 2]);
        }
    }

    // Extract edges from faces
    const edgeSet = new Set();
    facesData.forEach(face => {
        const [a, b, c] = face;
        const edgeList = [
            [Math.min(a, b), Math.max(a, b)],
            [Math.min(b, c), Math.max(b, c)],
            [Math.min(c, a), Math.max(c, a)]
        ];
        edgeList.forEach(e => edgeSet.add(`${e[0]}-${e[1]}`));
    });
    edgesData = Array.from(edgeSet).map(s => s.split('-').map(Number));
}

function showVertices() {
    if (!vertices) {
        // Create InstancedMesh for all vertices (one draw call)
        const geometry = new THREE.SphereGeometry(vertexSize, 5, 3);
        const material = new THREE.MeshStandardMaterial({
            color: 0xff0000,
            emissive: new THREE.Color(0xff0000),
            emissiveIntensity: 0.5,
            metalness: 0.3,
            roughness: 0.6,
            envMapIntensity: 0.8
        });
        vertices = new THREE.InstancedMesh(geometry, material, verticesData.length);
        // Expose for debugging/inspection
        window.verticesMesh = vertices;
        vertices.castShadow = true;
        vertices.receiveShadow = true;
        vertices.visible = false;
        scene.add(vertices);

        // Initialize vertex scales and matrices
        vertexScales = verticesData.map(() => 0);
        const matrix = new THREE.Matrix4();
        verticesData.forEach((pos, index) => {
            matrix.compose(
                pos,
                new THREE.Quaternion(),
                new THREE.Vector3(0, 0, 0)
            );
            vertices.setMatrixAt(index, matrix);
        });
    }

    // Kill any running animations
    gsap.killTweensOf(vertexScales);

    // Calculate proportional delays
    const BASE_DURATION = 0.5;
    const MAX_TIME = animationMaxTime;
    const itemCount = verticesData.length;
    const effectiveDuration = Math.min(BASE_DURATION, MAX_TIME);
    const delayPerItem = itemCount > 1 ? Math.max(0, (MAX_TIME - effectiveDuration) / (itemCount - 1)) : 0;

    if (!vertices.visible) {
        // Show with animation
        verticesData.forEach((pos, index) => {
            vertexScales[index] = 0;
            const matrix = new THREE.Matrix4();
            matrix.compose(pos, new THREE.Quaternion(), new THREE.Vector3(0, 0, 0));
            vertices.setMatrixAt(index, matrix);
        });
        vertices.instanceMatrix.needsUpdate = true;
        vertices.visible = true;

        if (MAX_TIME === 0) {
            verticesData.forEach((pos, index) => {
                vertexScales[index] = 1;
                const matrix = new THREE.Matrix4();
                matrix.compose(pos, new THREE.Quaternion(), new THREE.Vector3(1, 1, 1));
                vertices.setMatrixAt(index, matrix);
            });
            vertices.instanceMatrix.needsUpdate = true;
        } else {
            verticesData.forEach((pos, index) => {
                gsap.to(vertexScales, {
                    [index]: 1,
                    duration: effectiveDuration,
                    delay: index * delayPerItem,
                    ease: "none",
                    onUpdate: () => {
                        if (!vertices) return;
                        const matrix = new THREE.Matrix4();
                        matrix.compose(
                            pos,
                            new THREE.Quaternion(),
                            new THREE.Vector3(vertexScales[index], vertexScales[index], vertexScales[index])
                        );
                        vertices.setMatrixAt(index, matrix);
                        vertices.instanceMatrix.needsUpdate = true;
                    }
                });
            });
        }
        document.getElementById('show-vertices').textContent = 'Hide Vertices';
    } else {
        // Hide with reverse animation
        if (MAX_TIME === 0) {
            vertices.visible = false;
            document.getElementById('show-vertices').textContent = 'Show Vertices';
        } else {
            const reverseCount = verticesData.length - 1;
            verticesData.forEach((pos, index) => {
                const reverseDelay = (reverseCount - index) * delayPerItem;
                gsap.to(vertexScales, {
                    [index]: 0,
                    duration: effectiveDuration,
                    delay: reverseDelay,
                    ease: "none",
                    onUpdate: () => {
                        if (!vertices) return;
                        const matrix = new THREE.Matrix4();
                        matrix.compose(
                            pos,
                            new THREE.Quaternion(),
                            new THREE.Vector3(vertexScales[index], vertexScales[index], vertexScales[index])
                        );
                        vertices.setMatrixAt(index, matrix);
                        vertices.instanceMatrix.needsUpdate = true;
                    },
                    onComplete: () => {
                        if (index === 0) {
                            vertices.visible = false;
                            document.getElementById('show-vertices').textContent = 'Show Vertices';
                        }
                    }
                });
            });
        }
    }
}

function connectEdges() {
    // Ensure geometry/data is available independent of vertices mesh
    if (!currentGeometry) {
        updateGeometry();
        if (!currentGeometry) return;
    }
    if (!verticesData || verticesData.length === 0 || !edgesData || edgesData.length === 0) {
        extractData();
    }

    if (!edgesMesh) {
        // Merge all edges into single geometry
        const positions = [];
        const visibilityArray = [];

        edgesData.forEach((edge, edgeIndex) => {
            const p1 = verticesData[edge[0]];
            const p2 = verticesData[edge[1]];
            
            // Add two vertices per line
            positions.push(p1.x, p1.y, p1.z);
            positions.push(p2.x, p2.y, p2.z);
            
            // Both vertices of the line share same visibility for this edge
            visibilityArray.push(0, 0);
        });

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        geometry.setAttribute('visibility', new THREE.BufferAttribute(new Float32Array(visibilityArray), 1));

        // Clone the material for this instance
        const material = edgeShaderMaterial.clone();
        edgesMesh = new THREE.LineSegments(geometry, material);
        edgesMesh.visible = false;
        scene.add(edgesMesh);

        // Initialize visibility tracking
        edgeVisibility = edgesData.map(() => 0);
    }

    // Kill any running animations
    gsap.killTweensOf(edgeVisibility);

    // Calculate proportional delays
    const BASE_DURATION = 0.3;
    const MAX_TIME = animationMaxTime;
    const itemCount = edgesData.length;
    const effectiveDuration = Math.min(BASE_DURATION, MAX_TIME);
    const delayPerItem = itemCount > 1 ? Math.max(0, (MAX_TIME - effectiveDuration) / (itemCount - 1)) : 0;
    const geometry = edgesMesh.geometry;

    if (!edgesMesh.visible) {
        // Show with animation
        edgesData.forEach((edge, edgeIndex) => {
            edgeVisibility[edgeIndex] = 0;
            const visAttr = geometry.attributes.visibility.array;
            visAttr[edgeIndex * 2] = 0;
            visAttr[edgeIndex * 2 + 1] = 0;
        });
        geometry.attributes.visibility.needsUpdate = true;
        edgesMesh.visible = true;

        if (MAX_TIME === 0) {
            edgesData.forEach((edge, edgeIndex) => {
                edgeVisibility[edgeIndex] = 1;
                const visAttr = geometry.attributes.visibility.array;
                visAttr[edgeIndex * 2] = 1;
                visAttr[edgeIndex * 2 + 1] = 1;
            });
            geometry.attributes.visibility.needsUpdate = true;
        } else {
            edgesData.forEach((edge, edgeIndex) => {
                gsap.to(edgeVisibility, {
                    [edgeIndex]: 1,
                    duration: effectiveDuration,
                    delay: edgeIndex * delayPerItem,
                    ease: "none",
                    onUpdate: () => {
                        const visAttr = geometry.attributes.visibility.array;
                        visAttr[edgeIndex * 2] = edgeVisibility[edgeIndex];
                        visAttr[edgeIndex * 2 + 1] = edgeVisibility[edgeIndex];
                        geometry.attributes.visibility.needsUpdate = true;
                    }
                });
            });
        }
        document.getElementById('connect-edges').textContent = 'Hide Edges';
    } else {
        // Hide with reverse animation
        if (MAX_TIME === 0) {
            edgesMesh.visible = false;
            document.getElementById('connect-edges').textContent = 'Show Edges';
        } else {
            const reverseCount = edgesData.length - 1;
            edgesData.forEach((edge, edgeIndex) => {
                const reverseDelay = (reverseCount - edgeIndex) * delayPerItem;
                gsap.to(edgeVisibility, {
                    [edgeIndex]: 0,
                    duration: effectiveDuration,
                    delay: reverseDelay,
                    ease: "none",
                    onUpdate: () => {
                        const visAttr = geometry.attributes.visibility.array;
                        visAttr[edgeIndex * 2] = edgeVisibility[edgeIndex];
                        visAttr[edgeIndex * 2 + 1] = edgeVisibility[edgeIndex];
                        geometry.attributes.visibility.needsUpdate = true;
                    },
                    onComplete: () => {
                        if (edgeIndex === 0) {
                            edgesMesh.visible = false;
                            document.getElementById('connect-edges').textContent = 'Show Edges';
                        }
                    }
                });
            });
        }
    }
}

function formFaces() {
    // Ensure geometry/data is available independent of vertices mesh
    if (!currentGeometry) {
        updateGeometry();
        if (!currentGeometry) return;
    }
    if (!verticesData || verticesData.length === 0 || !facesData || facesData.length === 0) {
        extractData();
    }

    if (!facesMesh) {
        // Merge all faces into single geometry
        const positions = [];
        const visibilityArray = [];

        facesData.forEach((face, faceIndex) => {
            const v0 = verticesData[face[0]];
            const v1 = verticesData[face[1]];
            const v2 = verticesData[face[2]];

            // Add three vertices per triangle
            positions.push(v0.x, v0.y, v0.z);
            positions.push(v1.x, v1.y, v1.z);
            positions.push(v2.x, v2.y, v2.z);

            // All three vertices of the triangle share same visibility for this face
            visibilityArray.push(0, 0, 0);
        });

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        geometry.setAttribute('visibility', new THREE.BufferAttribute(new Float32Array(visibilityArray), 1));
        geometry.computeVertexNormals();

        // Outside pass: front faces only, writes depth (occludes inside)
        const outsideMaterial = faceShaderMaterial.clone();
        outsideMaterial.side = THREE.FrontSide;
        outsideMaterial.uniforms.inside.value = 0.0;
        outsideMaterial.uniforms.keyLightPos.value.copy(keyLight.position);
        outsideMaterial.uniforms.rimLightPos.value.copy(rimLight.position);
        facesMesh = new THREE.Mesh(geometry, outsideMaterial);
        facesMesh.renderOrder = 1; // draw before assembled mesh
        facesMesh.visible = false;
        scene.add(facesMesh);

        // Inside pass: back faces only, draws after outside
        const insideMaterial = faceShaderMaterial.clone();
        insideMaterial.side = THREE.BackSide;
        insideMaterial.uniforms.inside.value = 1.0;
        // Push inside slightly back in depth to avoid silhouette leakage
        insideMaterial.polygonOffset = true;
        insideMaterial.polygonOffsetFactor = 2;
        insideMaterial.polygonOffsetUnits = 2;
        insideMaterial.uniforms.keyLightPos.value.copy(keyLight.position);
        insideMaterial.uniforms.rimLightPos.value.copy(rimLight.position);
        facesInnerMesh = new THREE.Mesh(geometry, insideMaterial);
        facesInnerMesh.renderOrder = 1.05;
        facesInnerMesh.visible = false;
        scene.add(facesInnerMesh);

        // Initialize visibility tracking
        faceVisibility = facesData.map(() => 0);
    }

    // Kill any running animations
    gsap.killTweensOf(faceVisibility);

    // Calculate proportional delays
    const BASE_DURATION = 0.4;
    const MAX_TIME = animationMaxTime;
    const itemCount = facesData.length;
    const effectiveDuration = Math.min(BASE_DURATION, MAX_TIME);
    const delayPerItem = itemCount > 1 ? Math.max(0, (MAX_TIME - effectiveDuration) / (itemCount - 1)) : 0;
    const geometry = facesMesh.geometry;

    if (!facesMesh.visible) {
        // Show with animation
        facesData.forEach((face, faceIndex) => {
            faceVisibility[faceIndex] = 0;
            const visAttr = geometry.attributes.visibility.array;
            visAttr[faceIndex * 3] = 0;
            visAttr[faceIndex * 3 + 1] = 0;
            visAttr[faceIndex * 3 + 2] = 0;
        });
        geometry.attributes.visibility.needsUpdate = true;
        facesMesh.visible = true;
        if (facesInnerMesh) facesInnerMesh.visible = true;

        if (MAX_TIME === 0) {
            facesData.forEach((face, faceIndex) => {
                faceVisibility[faceIndex] = 1;
                const visAttr = geometry.attributes.visibility.array;
                visAttr[faceIndex * 3] = 1;
                visAttr[faceIndex * 3 + 1] = 1;
                visAttr[faceIndex * 3 + 2] = 1;
            });
            geometry.attributes.visibility.needsUpdate = true;
        } else {
            facesData.forEach((face, faceIndex) => {
                gsap.to(faceVisibility, {
                    [faceIndex]: 1,
                    duration: effectiveDuration,
                    delay: faceIndex * delayPerItem,
                    ease: "none",
                    onUpdate: () => {
                        const visAttr = geometry.attributes.visibility.array;
                        visAttr[faceIndex * 3] = faceVisibility[faceIndex];
                        visAttr[faceIndex * 3 + 1] = faceVisibility[faceIndex];
                        visAttr[faceIndex * 3 + 2] = faceVisibility[faceIndex];
                        geometry.attributes.visibility.needsUpdate = true;
                    }
                });
            });
        }
        document.getElementById('form-faces').textContent = 'Hide Faces';
    } else {
        // Hide with reverse animation
        if (MAX_TIME === 0) {
            facesMesh.visible = false;
            if (facesInnerMesh) facesInnerMesh.visible = false;
            document.getElementById('form-faces').textContent = 'Show Faces';
        } else {
            const reverseCount = facesData.length - 1;
            facesData.forEach((face, faceIndex) => {
                const reverseDelay = (reverseCount - faceIndex) * delayPerItem;
                gsap.to(faceVisibility, {
                    [faceIndex]: 0,
                    duration: effectiveDuration,
                    delay: reverseDelay,
                    ease: "none",
                    onUpdate: () => {
                        const visAttr = geometry.attributes.visibility.array;
                        visAttr[faceIndex * 3] = faceVisibility[faceIndex];
                        visAttr[faceIndex * 3 + 1] = faceVisibility[faceIndex];
                        visAttr[faceIndex * 3 + 2] = faceVisibility[faceIndex];
                        geometry.attributes.visibility.needsUpdate = true;
                    },
                    onComplete: () => {
                        if (faceIndex === 0) {
                            facesMesh.visible = false;
                            if (facesInnerMesh) facesInnerMesh.visible = false;
                            document.getElementById('form-faces').textContent = 'Show Faces';
                        }
                    }
                });
            });
        }
    }
}

function assembleMesh() {
    // Ensure we have geometry available independent of faces
    if (!currentGeometry) {
        updateGeometry();
        if (!currentGeometry) return;
    }

    if (!mesh) {
        // Don't hide faces yet - they'll stay visible during dissolve
        // facesMesh.visible = false;
        // document.getElementById('form-faces').textContent = 'Show Faces';

        // Create complete mesh with dither dissolve shader
        const geometry = currentGeometry.clone();
        
        // Get base color from original material or use default
        let baseColor = new THREE.Color(0xffffff);
        if (currentMaterial && currentMaterial.color) {
            baseColor.copy(currentMaterial.color);
        }
        
        // Custom shader material with dither dissolve effect and PBR
        const material = new THREE.ShaderMaterial({
            uniforms: {
                dissolve: { value: 0 },
                keyLightPos: { value: keyLight.position.clone() },
                rimLightPos: { value: rimLight.position.clone() }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                
                void main() {
                    // Transform normal to world space
                    vNormal = normalize(mat3(modelMatrix) * normal);
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float dissolve;
                uniform vec3 keyLightPos;
                uniform vec3 rimLightPos;
                
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                
                // Simple hash function for dither pattern
                float hash(vec3 p) {
                    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
                }
                
                void main() {
                    // Dither dissolve
                    float dither = hash(vWorldPosition * 10.0 + vec3(dissolve * 5.0));
                    if (dither > dissolve) discard;
                    
                    vec3 N = normalize(vNormal);
                    vec3 V = normalize(cameraPosition - vWorldPosition);
                    
                    // Normalized light directions
                    vec3 keyLight = normalize(keyLightPos - vWorldPosition);
                    vec3 rimLight = normalize(rimLightPos - vWorldPosition);
                    
                    // Lambert diffuse
                    float keyDiff = max(dot(N, keyLight), 0.0) * 2.0;
                    float rimDiff = max(dot(N, rimLight), 0.0) * 1.5;
                    
                    float totalDiffuse = keyDiff + rimDiff;
                    vec3 diffuseColor = vec3(0.5) * totalDiffuse;
                    
                    // Blinn-Phong specular
                    float shininess = 32.0;
                    float specularStrength = 0.3;
                    
                    vec3 H1 = normalize(keyLight + V);
                    float spec1 = pow(max(dot(N, H1), 0.0), shininess) * 2.0;
                    
                    vec3 H2 = normalize(rimLight + V);
                    float spec2 = pow(max(dot(N, H2), 0.0), shininess) * 1.5;
                    
                    vec3 specularColor = vec3(1.0) * (spec1 + spec2) * specularStrength;
                    
                    vec3 finalColor = diffuseColor + specularColor;
                    
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `,
            side: THREE.FrontSide,
            depthTest: true,
            depthWrite: true
        });
        
        mesh = new THREE.Mesh(geometry, material);
        mesh.renderOrder = 2; // ensure assembled renders after faces
        scene.add(mesh);

        // Animate dither dissolve - duration equals slider value
        const ASSEMBLY_DURATION = Math.max(0, animationMaxTime);
        // Reset dissolve and kill any previous tweens
        gsap.killTweensOf(material.uniforms.dissolve);
        material.uniforms.dissolve.value = 0;
        if (ASSEMBLY_DURATION === 0) {
            material.uniforms.dissolve.value = 1;
        } else {
            gsap.to(material.uniforms.dissolve, {
                value: 1,
                duration: ASSEMBLY_DURATION,
                ease: "none"
            });
        }
        document.getElementById('assemble-mesh').textContent = 'Hide Assembled Mesh';
    } else {
        // Always animate on toggle
        const material = mesh.material;
        const ASSEMBLY_DURATION = Math.max(0, animationMaxTime);
        gsap.killTweensOf(material.uniforms.dissolve);
        
        if (!mesh.visible) {
            // Show with dissolve-in
            material.uniforms.dissolve.value = 0;
            mesh.visible = true;
            if (ASSEMBLY_DURATION === 0) {
                material.uniforms.dissolve.value = 1;
            } else {
                gsap.to(material.uniforms.dissolve, {
                    value: 1,
                    duration: ASSEMBLY_DURATION,
                    ease: "none"
                });
            }
            document.getElementById('assemble-mesh').textContent = 'Hide Assembled Mesh';
        } else {
            // Hide with dissolve-out
            // Do not force-show faces if they were hidden
            if (ASSEMBLY_DURATION === 0) {
                material.uniforms.dissolve.value = 0;
                mesh.visible = false;
                document.getElementById('assemble-mesh').textContent = 'Show Assembled Mesh';
            } else {
                gsap.to(material.uniforms.dissolve, {
                    value: 0,
                    duration: ASSEMBLY_DURATION,
                    ease: "none",
                    onComplete: () => {
                        mesh.visible = false;
                        document.getElementById('assemble-mesh').textContent = 'Show Assembled Mesh';
                    }
                });
            }
        }
    }
}

function resetScene() {
    clearObjects();
    document.getElementById('info-text').textContent = 'Click buttons to visualize 3D modeling concepts';
    updateInfo();
}

function clearObjects() {
    // Kill all running GSAP animations to prevent null reference errors
    gsap.killTweensOf(vertexScales);
    gsap.killTweensOf(edgeVisibility);
    gsap.killTweensOf(faceVisibility);
    
    if (vertices) {
        scene.remove(vertices);
        vertices = null;
        window.verticesMesh = null;
        vertexScales = [];
        document.getElementById('show-vertices').textContent = 'Show Vertices';
    }
    if (edgesMesh) {
        scene.remove(edgesMesh);
        edgesMesh = null;
        edgeVisibility = [];
        document.getElementById('connect-edges').textContent = 'Show Edges';
    }
    if (facesMesh) {
        scene.remove(facesMesh);
        facesMesh = null;
        faceVisibility = [];
        document.getElementById('form-faces').textContent = 'Show Faces';
    }
    if (facesInnerMesh) {
        scene.remove(facesInnerMesh);
        facesInnerMesh = null;
    }
    if (mesh) scene.remove(mesh);
    mesh = null;
    document.getElementById('assemble-mesh').textContent = 'Show Assembled Mesh';
}

function updateInfo() {
    document.getElementById('vertex-count').textContent = verticesData.length;
    document.getElementById('edge-count').textContent = edgesData.length;
    document.getElementById('face-count').textContent = facesData.length;
}

// ===== Animation Loop =====
function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Update navigation axes orientation
    const camQuat = camera.quaternion.clone();
    camQuat.invert();
    axesHelper.quaternion.copy(camQuat);

    // Sky follows camera position
    sky.position.copy(camera.position);

    renderer.render(scene, camera);
}
animate();

// ===== Window Resize Handler =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
