// import * as THREE from 'https://unpkg.com/three/build/three.module.js';
// import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';
 
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const loader = new THREE.OBJLoader();
//     loader.load(
//         'public/3DModel.obj',
//         function (object) {
//             scene.add(object);
//         },
//         function (xhr) {
//             console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//         },
//         function (error) {
//             console.error('An error happened', error);
//         }


        
//     );

// camera.position.z = 5;
// const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(1, 1, 1).normalize();
// scene.add(directionalLight);

// function animate() {
//     requestAnimationFrame(animate);
//     // You can add animation or controls here
//     renderer.render(scene, camera);
// }
// animate();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Loader para MTL
const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('public/'); // pasta onde estão os arquivos
mtlLoader.load('3DModel.mtl', function (materials) {
    materials.preload();

    // Loader para OBJ
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('public/');
    objLoader.load(
        '3DModel.obj',
        function (object) {
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened', error);
        }
    );
});

// Loader para OBJ
// const loader = new THREE.OBJLoader();
// loader.load(
//   'public/3DModel.obj',
//   function (object) {
//     scene.add(object);
//   },
//   function (xhr) {
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     console.error('An error happened', error);
//   }
// );

camera.position.z = 5;

// Luzes
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Importa controles de arquivo externo
const controls = createOrbitControls(camera, renderer);

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Atualiza os controles
  renderer.render(scene, camera);
}
animate();

// Responsividade
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});