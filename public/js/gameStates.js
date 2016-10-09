function play() {
  snok.vx = -1;

  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

  snok.x += snok.vx;
  snok.y += snok.vy;

  if (hitTestRectangle(playerSnake, topBorder)) {
    console.log("hit topBorder!");
  }
  if (hitTestRectangle(playerSnake, rightBorder)) {
    console.log("hit rightBorder!");
  }
  if (hitTestRectangle(playerSnake, bottomBorder)) {
    console.log("hit bottomBorder!");
  }
  if (hitTestRectangle(playerSnake, leftBorder)) {
    console.log("hit leftBorder!");
  }

  if (hitTestRectangle(playerSnake, rectangle)) {
    rectangle.tint = 0x66CCFF;
    console.log("hit!");
  }
  else {
    rectangle.tint = 0xFF3300;
  }
}

function end() {
  
}