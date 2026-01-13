import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import gsap from 'gsap';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Load HDRI environment
const rgbeLoader = new RGBELoader();
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add file input for OBJ
document.body.insertAdjacentHTML('beforeend', '<input type="file" id="obj-file" accept=".obj" style="display:none; position:absolute; top:10px; right:10px;">');

// Update shape select options
document.getElementById('shape-select').innerHTML = '<option value="cube">Cube</option><option value="cylinder">Cylinder</option><option value="cone">Cone</option><option value="sphere">Sphere</option><option value="obj">OBJ File</option>';

// 3-Point Lighting Setup
// Key light (main)
const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
keyLight.position.set(2, 2, 1);
scene.add(keyLight);

// Fill light (shadow fill)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.1);
fillLight.position.set(-2, 1, 1);
scene.add(fillLight);

// Back light (rim)
const backLight = new THREE.DirectionalLight(0xffffff, 0.6);
backLight.position.set(0, -1, -2);
scene.add(backLight);

// Grid helper
const gridHelper = new THREE.GridHelper(10, 10);
gridHelper.position.y = -1;
scene.add(gridHelper);

// Navigation axes helper (Blender-style)
const axesHelper = new THREE.AxesHelper(1);
camera.add(axesHelper);
scene.add(camera);
axesHelper.position.set(1, 0.50, -1);
axesHelper.scale.set(0.1, 0.1, 0.1);

// Floor Arrows
const floorAxesHelper = new THREE.AxesHelper(6);
floorAxesHelper.setColors(new THREE.Color(0xff0000), new THREE.Color(0x000000), new THREE.Color(0x0000ff));
floorAxesHelper.scale.set(1,-1,1);
floorAxesHelper.position.y = -0.999;
scene.add(floorAxesHelper);


// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();

// Update navigation axes orientation
  const camQuat = camera.quaternion.clone();
  camQuat.invert();
  axesHelper.quaternion.copy(camQuat);
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Shape geometries
const shapeGeometries = {
  cube: () => new THREE.BoxGeometry(2, 2, 2),
  cylinder: () => new THREE.CylinderGeometry(1, 1, 2, 16),
  cone: () => new THREE.ConeGeometry(1, 2, 16),
  sphere: () => new THREE.SphereGeometry(1, 16, 16),
  obj: null
};

let currentShape = 'cube';
let currentGeometry = null;
let verticesData = [];
let edgesData = [];
let facesData = [];

// Initial geometry
updateGeometry();

// Global variables for objects
let vertices = [];
let edges = [];
let faces = [];
let mesh = null;

// Shape select listener
document.getElementById('shape-select').addEventListener('change', (e) => {
  currentShape = e.target.value;
  if (currentShape === 'obj') {
    document.getElementById('obj-file').style.display = 'block';
  } else {
    document.getElementById('obj-file').style.display = 'none';
    updateGeometry();
    resetScene();
  }
});

// OBJ file listener
document.getElementById('obj-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const objLoader = new OBJLoader();
    objLoader.load(URL.createObjectURL(file), (object) => {
      // Assume single mesh
      const child = object.children[0];
      if (child) {
        currentGeometry = child.geometry;
        updateGeometry();
        resetScene();
      }
    });
  }
});

// Button event listeners
document.getElementById('show-vertices').addEventListener('click', showVertices);
document.getElementById('connect-edges').addEventListener('click', connectEdges);
document.getElementById('form-faces').addEventListener('click', formFaces);
document.getElementById('assemble-mesh').addEventListener('click', assembleMesh);
document.getElementById('reset').addEventListener('click', resetScene);

// Functions to implement visualizations
function showVertices() {
  if (vertices.length === 0) {
    // Generate with animation
    verticesData.forEach((pos, index) => {
      const geometry = new THREE.SphereGeometry(0.05, 5, 3);
      const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(pos);
      sphere.scale.set(0, 0, 0);
      scene.add(sphere);
      vertices.push(sphere);

      gsap.to(sphere.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        delay: index * 0.05,
        ease: "back.out(1.7)"
      });
    });
  } else {
    // Toggle visibility
    const visible = !vertices[0].visible;
    vertices.forEach(v => v.visible = visible);
  }
}

function connectEdges() {
  if (vertices.length === 0) return;

  if (edges.length === 0) {
    // Generate with animation
    edgesData.forEach((edge, index) => {
      const points = [
        vertices[edge[0]].position,
        vertices[edge[1]].position
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0, linewidth: 3 });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      edges.push(line);

      gsap.to(material, {
        opacity: 1,
        duration: 0.3,
        delay: index * 0.03,
        ease: "power2.out"
      });
    });
  } else {
    // Toggle visibility
    const visible = !edges[0].visible;
    edges.forEach(e => e.visible = visible);
  }
}

function formFaces() {
  if (vertices.length === 0) return;

  if (faces.length === 0) {
    // Generate with animation
    facesData.forEach((face, index) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array([
        vertices[face[0]].position.x, vertices[face[0]].position.y, vertices[face[0]].position.z,
        vertices[face[1]].position.x, vertices[face[1]].position.y, vertices[face[1]].position.z,
        vertices[face[2]].position.x, vertices[face[2]].position.y, vertices[face[2]].position.z
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
      const triangle = new THREE.Mesh(geometry, material);
      scene.add(triangle);
      faces.push(triangle);

      gsap.to(material, {
        opacity: 0.7,
        duration: 0.4,
        delay: index * 0.05,
        ease: "power2.out"
      });
    });
  } else {
    // Toggle visibility
    const visible = !faces[0].visible;
    faces.forEach(f => f.visible = visible);
  }
}

function assembleMesh() {
  if (faces.length === 0) return;

  if (!mesh) {
    // Hide the raw faces to prevent Z-fighting
    faces.forEach(face => face.visible = false);

    // Create a complete mesh from all faces
    const geometry = currentGeometry.clone();
    const material = new THREE.MeshStandardMaterial({ color: 0x808080, metalness: 0.2, roughness: 0.1 });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animate assembly
    mesh.scale.set(0, 0, 0);
    gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "power2.out" });
  } else {
    // Toggle visibility
    mesh.visible = !mesh.visible;
  }
}

function updateGeometry() {
  if (currentShape === 'obj') {
    if (!currentGeometry) {
      // Wait for file load
      return;
    }
  } else {
    currentGeometry = shapeGeometries[currentShape]();
  }
  extractData();
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
        currentGeometry.index.array[i+1],
        currentGeometry.index.array[i+2]
      ]);
    }
  } else {
    for (let i = 0; i < posAttr.count; i += 3) {
      facesData.push([i, i+1, i+2]);
    }
  }

  // Extract edges: unique from faces
  const edgeSet = new Set();
  facesData.forEach(face => {
    const [a, b, c] = face;
    const edges = [
      [Math.min(a, b), Math.max(a, b)],
      [Math.min(b, c), Math.max(b, c)],
      [Math.min(c, a), Math.max(c, a)]
    ];
    edges.forEach(e => edgeSet.add(`${e[0]}-${e[1]}`));
  });
  edgesData = Array.from(edgeSet).map(s => s.split('-').map(Number));
}

function resetScene() {
  clearObjects();
  document.getElementById('info').textContent = 'Click buttons to visualize 3D modeling concepts';
}

function clearObjects() {
  vertices.forEach(obj => scene.remove(obj));
  edges.forEach(obj => scene.remove(obj));
  faces.forEach(obj => scene.remove(obj));
  if (mesh) scene.remove(mesh);
  vertices = [];
  edges = [];
  faces = [];
  mesh = null;
}
