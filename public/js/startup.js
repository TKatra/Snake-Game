document.addEventListener("DOMContentLoaded", function(event) {
  gameArea = document.getElementsByClassName("game-area")[0];
  renderer = autoDetectRenderer(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  gameArea.appendChild(renderer.view);
  
  maxFoodX = Math.floor(gameArea.offsetWidth) - foodMargin;
  maxFoodY = Math.floor(gameArea.offsetHeight) - foodMargin;

  window.addEventListener("resize", resizeRenderer);

  renderer.backgroundColor = 0x061639;

  loader
    .add("assets/images/snake-game.json")
    .on("progress", loadProgressHandler)
    .load(setup);
});

function setup() {
  console.log("Files loaded!");
  spriteSheet = resources["assets/images/snake-game.json"].textures;

  createPlayerSnake();
  createBorders();
  createFood();
  points = 0;
  document.getElementsByClassName("score-display")[0].innerHTML = points;
  document.getElementsByClassName("high-score-display")[0].innerHTML = highScore;

  stage.addChild(stageBackground);
  stage.addChild(playerSnake);
  stage.addChild(food);
  initializeControls();

  state = play;

  gameLoop();
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  state();

  renderer.render(stage);
}