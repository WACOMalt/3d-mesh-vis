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
let vertices = null;  // InstancedMesh
let vertexScales = [];  // Track individual vertex scales for animation
let edgesMesh = null;  // Merged edges mesh
let edgeVisibility = [];  // Track individual edge visibility for animation
let faces = [];
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
    if (!vertices) {
        // Create InstancedMesh for all vertices (one draw call)
        const geometry = new THREE.SphereGeometry(0.05, 5, 3);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        vertices = new THREE.InstancedMesh(geometry, material, verticesData.length);
        vertices.castShadow = true;
        vertices.receiveShadow = true;
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

        // Animate each vertex scale
        verticesData.forEach((pos, index) => {
            gsap.to(vertexScales, {
                [index]: 1,
                duration: 0.5,
                delay: index * 0.05,
                ease: "back.out(1.7)",
                onUpdate: () => {
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
    } else {
        // Toggle visibility
        vertices.visible = !vertices.visible;
    }
}

function connectEdges() {
    if (!vertices) return;

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
        scene.add(edgesMesh);

        // Initialize visibility tracking
        edgeVisibility = edgesData.map(() => 0);

        // Animate each edge to appear
        edgesData.forEach((edge, edgeIndex) => {
            gsap.to(edgeVisibility, {
                [edgeIndex]: 1,
                duration: 0.3,
                delay: edgeIndex * 0.03,
                ease: "power2.out",
                onUpdate: () => {
                    const visAttr = geometry.attributes.visibility.array;
                    // Update both vertices of this line segment
                    visAttr[edgeIndex * 2] = edgeVisibility[edgeIndex];
                    visAttr[edgeIndex * 2 + 1] = edgeVisibility[edgeIndex];
                    geometry.attributes.visibility.needsUpdate = true;
                }
            });
        });
    } else {
        // Toggle visibility
        edgesMesh.visible = !edgesMesh.visible;
    }
}

function formFaces() {
    if (!vertices) return;

    if (faces.length === 0) {
        // Create faces
        facesData.forEach((face, index) => {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array([
                verticesData[face[0]].x, verticesData[face[0]].y, verticesData[face[0]].z,
                verticesData[face[1]].x, verticesData[face[1]].y, verticesData[face[1]].z,
                verticesData[face[2]].x, verticesData[face[2]].y, verticesData[face[2]].z
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
    if (vertices) {
        scene.remove(vertices);
        vertices = null;
        vertexScales = [];
    }
    if (edgesMesh) {
        scene.remove(edgesMesh);
        edgesMesh = null;
        edgeVisibility = [];
    }
    faces.forEach(obj => scene.remove(obj));
    if (mesh) scene.remove(mesh);
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
