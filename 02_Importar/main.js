import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- A. CONFIGURACIÓN BÁSICA ---
//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25501020); // Color de fondo gris oscuro

//1. Camara
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 1, 2); // Movemos la cámara un poco atrás y arriba


//2. Render
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias para que se vea suave
renderer.setSize(window.innerWidth, window.innerHeight);
//añadimos este nuevo elemento al DOM
document.body.appendChild(renderer.domElement);

// --- D. CONTROLES (Rotación sobre el sitio) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false; 
controls.enableZoom = false; 
controls.target.set(1.999, 1, 2); 
controls.enableDamping = true;
controls.dampingFactor = 0.05;

animate();

// ANIMATE
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Obligatorio para que el damping y el target funcionen bien
  renderer.render(scene, camera);
}

// --- B. LUCES  ---
// Luz ambiental (ilumina todo suavemente)
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);


// Luz direccional (como el sol)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5); scene.add(dirLight);


// CARGAR MODELOS
const loader = new GLTFLoader();
cargarModelo('models/DavidVargas_Habitación.glb', 0, 0, 0);
cargarModelo('models/Render1.glb', 0, 0, 0);
cargarModelo('models/Render2.glb', 0, 0, 0);
cargarModelo('models/HachaLeviatan.glb', 0, 0, 0);
cargarModelo('models/CascoMalenia.glb', 0, 0, 0);
cargarModelo('models/Monitor.glb', 0, 0, 0);
cargarModelo('models/VileFigure.glb', 0, 0, 0);
cargarModelo('models/Danielle_Freire.glb', 0, 0, 0);
cargarModelo('models/Interruptor.glb', 0, 0, 0);

function cargarModelo(path, x, y, z, escala = 1) {
  loader.load(path, (gltf) => {
    const model = gltf.scene;
    model.position.set(x, y, z);
    model.scale.set(escala, escala, escala); // Por si algún modelo es muy grande/pequeño
    scene.add(model);
  }, undefined, (error) => console.error('Error cargando:', path, error));
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  // Convertimos la posición del ratón a coordenadas de Three.js (-1 a 1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // Buscamos si el rayo choca con algo en la escena
  const intersects = raycaster.intersectObjects(scene.children, true);

  for (let i = 0; i < intersects.length; i++) {
    // Si el nombre del modelo o del nodo contiene "Interruptor"
    if (intersects[i].object.name.includes("Interruptor") || 
        intersects[i].object.parent.name.includes("Interruptor")) {
      
      toggleLights(); // Llamamos a la función para cambiar la luz
      break;
    }
  }
});

let lucesEncendidas = true;
function toggleLights() {
  lucesEncendidas = !lucesEncendidas;
  dirLight.intensity = lucesEncendidas ? 1 : 0.1; // Baja la intensidad del "sol"
  ambientLight.intensity = lucesEncendidas ? 1 : 0.2; // Deja una penumbra suave
  
  // Cambiamos el fondo para que parezca de noche
  scene.background = new THREE.Color(lucesEncendidas ? 0x25501020 : 0x050510);
}

// AJUSTAR SI CAMBIAN EL TAMAÑO DE LA VENTANA
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

});
