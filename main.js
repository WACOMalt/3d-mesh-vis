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
let facesMesh = null;  // Merged faces mesh
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
    uniforms: {},
    vertexShader: `
        attribute float visibility;
        varying float vVisibility;
        varying vec3 vNormal;
        
        void main() {
            vVisibility = visibility;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying float vVisibility;
        varying vec3 vNormal;
        
        void main() {
            vec3 color = vec3(0.0, 0.0, 1.0);
            vec3 light = normalize(vec3(1.0, 1.0, 1.0));
            float brightness = max(dot(vNormal, light), 0.3);
            gl_FragColor = vec4(color * brightness, 0.7 * vVisibility);
        }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthTest: true,
    depthWrite: false,
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
let lightingRotation = 0;
let vertexSize = 0.05;
let animationMaxTime = 2;
const lights = [keyLight, fillLight, backLight];
const lightPositions = [
    { x: 2, y: 2, z: 1 },
    { x: -2, y: 1, z: 1 },
    { x: 0, y: -1, z: -2 }
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

// ===== Settings Panel Listeners =====
document.getElementById('lighting-rotation').addEventListener('input', (e) => {
    lightingRotation = parseFloat(e.target.value);
    rotateLights(lightingRotation);
    document.getElementById('lighting-rotation-value').textContent = lightingRotation + '°';
});

document.getElementById('vertex-size').addEventListener('input', (e) => {
    vertexSize = parseFloat(e.target.value);
    updateVertexGeometry();
    document.getElementById('vertex-size-value').textContent = vertexSize.toFixed(2);
});

document.getElementById('animation-max-time').addEventListener('input', (e) => {
    animationMaxTime = parseFloat(e.target.value);
    document.getElementById('animation-max-time-value').textContent = animationMaxTime.toFixed(1) + 's';
});

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
        const geometry = new THREE.SphereGeometry(vertexSize, 5, 3);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        vertices = new THREE.InstancedMesh(geometry, material, verticesData.length);
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
    const ANIMATION_DURATION = 0.5;
    const MAX_TIME = Math.max(0.5, animationMaxTime);
    const itemCount = verticesData.length;
    const delayPerItem = itemCount > 1 ? (MAX_TIME - ANIMATION_DURATION) / (itemCount - 1) : 0;

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
                    duration: ANIMATION_DURATION,
                    delay: index * delayPerItem,
                    ease: "back.out(1.7)",
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
                    duration: ANIMATION_DURATION,
                    delay: reverseDelay,
                    ease: "power2.in",
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
    const ANIMATION_DURATION = 0.3;
    const MAX_TIME = Math.max(0.3, animationMaxTime);
    const itemCount = edgesData.length;
    const delayPerItem = itemCount > 1 ? (MAX_TIME - ANIMATION_DURATION) / (itemCount - 1) : 0;
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
                    duration: ANIMATION_DURATION,
                    delay: edgeIndex * delayPerItem,
                    ease: "power2.out",
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
                    duration: ANIMATION_DURATION,
                    delay: reverseDelay,
                    ease: "power2.in",
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

        // Clone the material for this instance
        const material = faceShaderMaterial.clone();
        facesMesh = new THREE.Mesh(geometry, material);
        facesMesh.renderOrder = 1; // draw before assembled mesh
        facesMesh.visible = false;
        scene.add(facesMesh);

        // Initialize visibility tracking
        faceVisibility = facesData.map(() => 0);
    }

    // Kill any running animations
    gsap.killTweensOf(faceVisibility);

    // Calculate proportional delays
    const ANIMATION_DURATION = 0.4;
    const MAX_TIME = Math.max(0.4, animationMaxTime);
    const itemCount = facesData.length;
    const delayPerItem = itemCount > 1 ? (MAX_TIME - ANIMATION_DURATION) / (itemCount - 1) : 0;
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
                    duration: ANIMATION_DURATION,
                    delay: faceIndex * delayPerItem,
                    ease: "power2.out",
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
            document.getElementById('form-faces').textContent = 'Show Faces';
        } else {
            const reverseCount = facesData.length - 1;
            facesData.forEach((face, faceIndex) => {
                const reverseDelay = (reverseCount - faceIndex) * delayPerItem;
                gsap.to(faceVisibility, {
                    [faceIndex]: 0,
                    duration: ANIMATION_DURATION,
                    delay: reverseDelay,
                    ease: "power2.in",
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
        
        // Custom shader material with dither dissolve effect
        const material = new THREE.ShaderMaterial({
            uniforms: {
                baseColor: { value: new THREE.Color(0x808080) },
                dissolve: { value: 0 },
                metalness: { value: 0.2 },
                roughness: { value: 0.1 },
                lightPos: { value: new THREE.Vector3(2, 2, 1) }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 baseColor;
                uniform float dissolve;
                uniform vec3 lightPos;
                
                varying vec3 vNormal;
                varying vec3 vPosition;
                
                // Simple hash function for dither pattern
                float hash(vec3 p) {
                    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
                }
                
                void main() {
                    // Create dither pattern using position and dissolve value
                    float dither = hash(vPosition * 10.0 + vec3(dissolve * 5.0));
                    
                    // Use dissolve threshold to progressively reveal mesh
                    if (dither > dissolve) discard;
                    
                    // Simple lighting
                    vec3 light = normalize(lightPos - vPosition);
                    float diff = max(dot(vNormal, light), 0.2);
                    vec3 color = baseColor * diff;
                    
                    gl_FragColor = vec4(color, 1.0);
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
                ease: "power2.out"
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
                    ease: "power2.out"
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
                    ease: "power2.inOut",
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

    renderer.render(scene, camera);
}
animate();

// ===== Window Resize Handler =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
