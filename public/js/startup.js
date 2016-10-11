document.addEventListener("DOMContentLoaded", function(event) {
  gameArea = document.getElementsByClassName("game-area")[0];
  renderer = autoDetectRenderer(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  gameArea.appendChild(renderer.view);
  
  maxFoodX = Math.floor(gameArea.offsetWidth) - foodMargin;
  maxFoodY = Math.floor(gameArea.offsetHeight) - foodMargin;

  document.getElementsByClassName("high-score-display")[0].innerHTML = highScore;

  window.addEventListener("resize", resizeRenderer);

  renderer.backgroundColor = 0xabe6e4;

  loader
    .add("assets/images/snake-game.json")
    .load(setup);
});

function setup() {
  spriteSheet = resources["assets/images/snake-game.json"].textures;

  startImage = new Sprite(spriteSheet["start.png"]);
  startImage.x = Math.floor(gameArea.offsetWidth / 2 - (startImage.width / 2));
  startImage.y = Math.floor((gameArea.offsetHeight / 2) - (startImage.height / 2));
  startScreen.addChild(startImage);
  startScreen.visible = false;

  gameOverImage = new Sprite(spriteSheet["game over.png"]);
  gameOverImage.x = Math.floor(gameArea.offsetWidth / 2 - (gameOverImage.width / 2));
  gameOverImage.y = Math.floor((gameArea.offsetHeight / 2) - (gameOverImage.height / 2));
  gameOverScreen.addChild(gameOverImage);
  gameOverScreen.visible = false;

  createPlayerSnake();
  createBorders();
  createFood();

  resetPoints();

  stage.addChild(stageBackground);
  stage.addChild(playerSnake);
  stage.addChild(food);
  stage.addChild(startScreen);
  stage.addChild(gameOverScreen);

  initializeControls();

  state = start;

  gameLoop();
}

function reset() {
  gameOverScreen.visible = false;

  resetPlayerSnake()
  placeFood();
  resetPoints();

  state = play;
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  state();

  renderer.render(stage);
}