// 3D Mesh Visualizer - Simple Vanilla JavaScript Version
// No build process required. Open index.html directly in a browser.

// ===== Scene Setup =====
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// ===== Lighting Setup =====
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
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// ===== Data Storage =====
let currentShape = 'cube';
let currentGeometry = null;
let verticesData = [];
let edgesData = [];
let facesData = [];
let vertices = [];
let edges = [];
let faces = [];
let mesh = null;

// ===== Shape Geometries =====
const shapeGeometries = {
    cube: () => new THREE.BoxGeometry(2, 2, 2),
    cylinder: () => new THREE.CylinderGeometry(1, 1, 2, 16),
    cone: () => new THREE.ConeGeometry(1, 2, 16),
    sphere: () => new THREE.SphereGeometry(1, 16, 16)
};

// ===== Initialization =====
updateGeometry();

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
            const objLoader = new THREE.OBJLoader();
            try {
                const object = objLoader.parse(event.target.result);
                if (object.children.length > 0) {
                    currentGeometry = object.children[0].geometry;
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

// ===== Core Functions =====

function updateGeometry() {
    if (currentShape === 'obj') {
        if (!currentGeometry) return;
    } else {
        currentGeometry = shapeGeometries[currentShape]();
    }
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
    if (vertices.length === 0) {
        // Create vertices
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
        // Create edges
        edgesData.forEach((edge, index) => {
            const points = [
                vertices[edge[0]].position,
                vertices[edge[1]].position
            ];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: 0,
                linewidth: 3
            });
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
        // Create faces
        facesData.forEach((face, index) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array([
                vertices[face[0]].position.x, vertices[face[0]].position.y, vertices[face[0]].position.z,
                vertices[face[1]].position.x, vertices[face[1]].position.y, vertices[face[1]].position.z,
                vertices[face[2]].position.x, vertices[face[2]].position.y, vertices[face[2]].position.z
            ]);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.computeVertexNormals();

            const material = new THREE.MeshPhongMaterial({
                color: 0x0000ff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0
            });
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
        // Hide raw faces to prevent Z-fighting
        faces.forEach(face => face.visible = false);

        // Create complete mesh
        const geometry = currentGeometry.clone();
        const material = new THREE.MeshStandardMaterial({
            color: 0x808080,
            metalness: 0.2,
            roughness: 0.1
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animate assembly
        mesh.scale.set(0, 0, 0);
        gsap.to(mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "power2.out"
        });
    } else {
        // Toggle visibility
        mesh.visible = !mesh.visible;
    }
}

function resetScene() {
    clearObjects();
    document.getElementById('info-text').textContent = 'Click buttons to visualize 3D modeling concepts';
    updateInfo();
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

    renderer.render(scene, camera);
}
animate();

// ===== Window Resize Handler =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
