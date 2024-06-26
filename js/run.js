// Run --------------------------------------------------------

function update() {
  updateHelpers();

  if (!sceneSettings.pause) {
    var deltaTime = clock.getDelta();
    neuralNet.update(deltaTime);
    updateGuiInfo();
    cameraCtrl.update();
  }
}

// ----  draw loop
function run() {
  requestAnimationFrame(run);
  renderer.setClearColor(sceneSettings.bgColor, 1);
  renderer.clear();
  update();
  renderer.render(scene, camera);
  stats.update();
  console.log(1);
  FRAME_COUNT++;
}
