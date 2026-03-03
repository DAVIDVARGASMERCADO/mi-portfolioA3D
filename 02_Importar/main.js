import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- A. CONFIGURACIÓN BÁSICA ---
//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25501020); // Color de fondo gris oscuro

//1. Camara
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 5, 50); // Movemos la cámara un poco atrás y arriba


//2. Render
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias para que se vea suave
renderer.setSize(window.innerWidth, window.innerHeight);
//añadimos este nuevo elemento al DOM
document.body.appendChild(renderer.domElement);

// LOOP
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// --- D. CONTROLES (La navegación) ---
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = false;

// Estado inicial: navegación libre
controls.enabled = true;


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

// CARGAR MODELO HABITACIÓN
loader.load(
  'models/DavidVargas_Habitación.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const HachaLeviatan = gltf.scene;
    HachaLeviatan.position.set(-1, 0, 2.2);
    scene.add(HachaLeviatan);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO CASCO MALENIA
loader.load(
'models/CascoMalenia.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const MaleniaHelmetFigure = gltf.scene;
    MaleniaHelmetFigure.position.set(-1, 0, 2.2);
    scene.add(MaleniaHelmetFigure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO MONITOR
loader.load(
'models/Monitor.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const MonitorFigure = gltf.scene;
    MonitorFigure.position.set(-1, 0, 2.2);
    scene.add(MonitorFigure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO HACHA LEVIATAN
loader.load(
'models/HachaLeviatan.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const HachaFigure = gltf.scene;
    HachaFigure.position.set(-1, 0, 2.2);
    scene.add(HachaFigure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO RENDER1
loader.load(
'models/Render1.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const Render1Figure = gltf.scene;
    Render1Figure.position.set(-1, 0, 2.2);
    scene.add(Render1Figure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO RENDER1
loader.load(
'models/Render2.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const Render2Figure = gltf.scene;
    Render2Figure.position.set(-1, 0, 2.2);
    scene.add(Render2Figure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO RENDER2
loader.load(
'models/Render2.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const Render2Figure = gltf.scene;
    Render2Figure.position.set(-1, 0, 2.2);
    scene.add(Render2Figure);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO DANIELLE_FREIRE
loader.load(
'models/Danielle_Freire.glb',
  function (gltf) {
    scene.add(gltf.scene);
    
    const Danielle_Freire = gltf.scene;
    Danielle_Freire.position.set(-1, 0, 2.2);
    scene.add(Danielle_Freire);
  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }

);

// CARGAR MODELO VILEFIGURE
let VileFigure;

loader.load(
  'models/VileFigure.glb',
  function (gltf) {

    VileFigure = gltf.scene;
    VileFigure.position.set(-1, 0, 2.2);
    scene.add(VileFigure);

  },
  undefined,
  function (error) {
    console.error('Error cargando GLB:', error);
  }
);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', onClick, false);

function onClick(event) {

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObject(VileFigure, true);

  if (intersects.length > 0) {
    activarModoVista();
  }
}

function activarModoVista() {

  scene.traverse(function(obj) {
    if (obj.isLight) {
      obj.intensity = 0.2; // oscurece luces
    }
  });

  centrarModelo();
}

// Ajustar si cambian el tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);


});
