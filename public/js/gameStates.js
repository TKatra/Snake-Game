function play() {
  currentState = "playState";
  startScreen.visible = false;
  gameOverScreen.visible = false;

  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

  buildSnakeTail();

  tailCollisionCheck();
  borderCollisionCheck();
  foodCollisionCheck();
}

function end() {
  playerSnake.texture = spriteSheet["impact.png"];
  currentState = "endState";
  gameOverScreen.visible = true;
}

function start() {
  currentState = "startState";
  startScreen.visible = true;
}