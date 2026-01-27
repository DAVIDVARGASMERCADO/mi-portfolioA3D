import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- A. CONFIGURACIÓN BÁSICA ---
//Escene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25501020); // Color de fondo gris oscuro


//1. Camara
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 50); // Movemos la cámara un poco atrás y arriba


//2. Rende
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias para que se vea suave
renderer.setSize(window.innerWidth, window.innerHeight);
//añadimos este nuevo elemento al DOM
document.body.appendChild(renderer.domElement);


// --- B. LUCES  ---
// Luz ambiental (ilumina todo suavemente)
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


// Luz direccional (como el sol)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);
// Luz direccional (como el sol)
const dirLight7 = new THREE.DirectionalLight(0xffffff, 1);
dirLight7.position.set(5, -5, -5);
scene.add(dirLight);
// Luz direccional (como el sol)
const dirLight5 = new THREE.DirectionalLight(0xffffff, 1);
dirLight5.position.set(5, -5, -5);
scene.add(dirLight5);
// Luz direccional (como el sol)
const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
dirLight2.position.set(-5, 5, 5);
scene.add(dirLight2);
// Luz direccional (como el sol)
const dirLight3 = new THREE.DirectionalLight(0xffffff, 1);
dirLight3.position.set(-5, -5, 5);
scene.add(dirLight3);
// Luz direccional (como el sol)
const dirLight4 = new THREE.DirectionalLight(0xffffff, 1);
dirLight4.position.set(-5, 5, -5);
scene.add(dirLight4);
// Luz direccional (como el sol)
const dirLight6 = new THREE.DirectionalLight(0xffffff, 1);
dirLight6.position.set(-5, -5, -5);
scene.add(dirLight6);


// CREAR EL LOADER, objeto que me permite cargar un modelo GLB
const loader = new GLTFLoader();

// CARGAR MODELO
loader.load(
  'models/cascoMalenia.glb',
  function (gltf) {
    scene.add(gltf.scene);

    const cascoMalenia = gltf.scene;
    cascoMalenia.position.set(3, 0, 2.2);
    scene.add(cascoMalenia);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }
);

// CARGAR MODELO
loader.load(
  'models/HachaLeviatan.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const HachaLeviatan = gltf.scene;
    HachaLeviatan.position.set(-3, 0, 2.2);
    scene.add(HachaLeviatan);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// LOOP
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// --- D. CONTROLES (La navegación) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Añade inercia al movimiento (más suave)


// Ajustar si cambian el tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);


});
