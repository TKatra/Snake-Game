document.addEventListener("DOMContentLoaded", function(event) {
  document.body.appendChild(renderer.view);

  renderer.view.style.border = "1px dashed black";
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

function play() {
  // playerSnake.vx = 1;
  // playerSnake.vy = 0.5;

  snok.vx = -1;
  // snok.vy = 0.5;

  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

  snok.x += snok.vx;
  snok.y += snok.vy;

  if (hitTestRectangle(playerSnake, rectangle)) {
    rectangle.tint = 0x66CCFF;
  }
  else {
    rectangle.tint = 0xFF3300;
  }
}

function loadProgressHandler(loader, resource) {
  console.log("Loading: " + resource.url);
  console.log("Progress: " + loader.progress + "%");
}