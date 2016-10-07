document.addEventListener("DOMContentLoaded", function(event) {
  document.body.appendChild(renderer.view);

  renderer.view.style.border = "1px dashed black";

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

  stage.addChild(playerSnake);
  stage.addChild(snok);

  initializeControls();

  state = play;

  gameLoop();
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  state();

  renderer.render(stage);
}

function play() {
  // playerSnake.vx = 1;
  // playerSnake.vy = 0.5;

  snok.vx = -1;
  // snok.vy = 0.5;

  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

  snok.x += snok.vx;
  snok.y += snok.vy;
}

function loadProgressHandler(loader, resource) {
  console.log("Loading: " + resource.url);
  console.log("Progress: " + loader.progress + "%");
}