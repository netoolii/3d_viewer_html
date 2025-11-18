function createOrbitControls(camera, renderer) {
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Configurações básicas
  controls.enableDamping = true;   // suaviza movimento
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;      // zoom com scroll
  controls.enablePan = true;       // mover cena
  controls.enableRotate = true;    // rotacionar

  // Limites opcionais
  controls.minDistance = 2;        // zoom mínimo
  controls.maxDistance = 100;       // zoom máximo
  controls.maxPolarAngle = Math.PI / 2; // limita rotação vertical

  return controls;
}
