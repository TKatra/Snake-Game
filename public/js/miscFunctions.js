function resizeRenderer() {
  renderer.resize(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  createBorders();
}

function loadProgressHandler(loader, resource) {
  console.log("Loading: " + resource.url);
  console.log("Progress: " + loader.progress + "%");
}