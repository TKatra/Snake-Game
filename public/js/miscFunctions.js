function resizeRenderer() {
  renderer.resize(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  createBorders();
  
  maxFoodX = Math.floor(gameArea.offsetWidth) - foodMargin;
  maxFoodY = Math.floor(gameArea.offsetHeight) - foodMargin;

  gameOverImage.x = Math.floor(gameArea.offsetWidth / 2 - (gameOverImage.width / 2));
  gameOverImage.y = Math.floor((gameArea.offsetHeight / 2) - (gameOverImage.height / 2));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}