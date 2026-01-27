import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// --- A. CONFIGURACIÓN BÁSICA ---
//Escene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25501020); // Color de fondo gris oscuro


//1. Camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); // Movemos la cámara un poco atrás y arriba


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


// --- C. OBJETOS ---
// Vamos a crear un cubo pero con material que reaccione a la luz
const cuerpo = new THREE.CylinderGeometry(1,0.85,3);
const sombrero = new THREE.CylinderGeometry(0.90,0.75, 2);
const legGeometry = new THREE.CylinderGeometry(0.4,0.4, 3);


legGeometry.translate(0,-1.5,0);


const handGeometry = new THREE.SphereGeometry(0.4);
handGeometry.translate(0, 2, 0);
const armGeometry = new THREE.CylinderGeometry(0.5,0.35,2.5);
const cabeza = new THREE.SphereGeometry(0.8);


armGeometry.translate(0, 2, 0);


const materialBlackLeather = new THREE.MeshStandardMaterial({
   color: 0x000000, // Colory
   roughness: 0.75, // Qué tan áspero es
   metalness: 0  // Qué tan metálico es
});
const materialRedLeather = new THREE.MeshStandardMaterial({
   color: 0xff0000, // Color
   roughness: 0.5, // Qué tan áspero es
   metalness: 0  // Qué tan metálico es
});
const materialSkin = new THREE.MeshStandardMaterial({
   color: 0xffc8c4, // Color
   roughness: 0.75, // Qué tan áspero es
   metalness: 0  // Qué tan metálico es
});
const cap = new THREE.Mesh(cabeza, materialSkin);
const sombrer = new THREE.Mesh(sombrero, materialBlackLeather);
const cos = new THREE.Mesh(cuerpo, materialRedLeather);


const leftArm = new THREE.Mesh(armGeometry, materialRedLeather);
const rightArm = new THREE.Mesh(armGeometry, materialRedLeather);
const leftHand = new THREE.Mesh(handGeometry, materialSkin);
const rightHand = new THREE.Mesh(handGeometry, materialSkin);


const leftLeg = new THREE.Mesh(legGeometry, materialBlackLeather);
const rightLeg = new THREE.Mesh(legGeometry, materialBlackLeather);


leftArm.add(leftHand);
rightArm.add(rightHand);


leftHand.position.x=-1.2; leftHand.position.y=0;
rightHand.position.x=1.2; rightHand.position.y=0;
cap.position.y=3;
cos.position.y=1;
leftArm.position.x=-1.2; leftArm.position.y=0;
rightArm.position.x=1.2; rightArm.position.y=0;
sombrer.position.y=4.5;
leftLeg.position.x=-0.45; leftLeg.position.y=-2;
rightLeg.position.x=0.45; rightLeg.position.y=-2;


const brazoIzq = new THREE.Group();


brazoIzq.add(leftArm);
brazoIzq.add(leftHand);
scene.add(brazoIzq);


const cube = new THREE.Mesh(new THREE.BoxGeometry(), materialRedLeather);
scene.add(rightHand);
scene.add(cap);
scene.add(cos);
scene.add(sombrer);
scene.add(rightArm);
scene.add(leftLeg);
scene.add(rightLeg);


// --- D. CONTROLES (La navegación) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Añade inercia al movimiento (más suave)


let walkTime = 0;


// --- E. ANIMACIÓN (Game Loop) ---
function animate() {
   requestAnimationFrame(animate);


   walkTime += 0.01;


   // Pequeña rotación automática
   brazoIzq.rotation.x = Math.sin(walkTime) * 0.5;


   controls.update(); // Necesario por el damping
   renderer.render(scene, camera);
}


animate();


// Ajustar si cambian el tamaño de la ventana
window.addEventListener('resize', () => {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
});

