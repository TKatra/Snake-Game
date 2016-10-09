function resizeRenderer() {
  renderer.resize(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  createBorders();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadProgressHandler(loader, resource) {
  console.log("Loading: " + resource.url);
  console.log("Progress: " + loader.progress + "%");
}