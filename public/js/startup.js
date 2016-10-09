document.addEventListener("DOMContentLoaded", function(event) {
  gameArea = document.getElementsByClassName("game-area")[0];
  renderer = autoDetectRenderer(Math.floor(gameArea.offsetWidth), Math.floor(gameArea.offsetHeight));
  gameArea.appendChild(renderer.view);

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

  playerSnake = new Sprite(spriteSheet["Snek.png"]);
  snok = new Sprite(spriteSheet["Snok.png"]);

  playerSnake.scale.set(0.5, 0.5);
  snok.scale.set(0.5, 0.5);
  snok.x = 400;

  playerSnake.vx = playerSpeed;
  playerSnake.vy = 0;
  snok.vx = 0;
  snok.vy = 0;

  createBorders();

  rectangle = new Graphics();
  rectangle.beginFill(0x66CCFF, 0.5);
  rectangle.lineStyle(2, 0xFF3300, 1);
  rectangle.drawRect(0, 0, 10, 10);
  rectangle.x = 300;
  rectangle.y = 150;
  rectangle.endFill();

  stage.addChild(playerSnake);
  stage.addChild(snok);
  stage.addChild(rectangle);

  initializeControls();

  state = play;

  gameLoop();
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  state();

  renderer.render(stage);
}