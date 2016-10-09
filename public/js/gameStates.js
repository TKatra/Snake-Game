function play() {
  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

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

  if (hitTestRectangle(playerSnake, food)) {
    points += 100;
    console.log("hit food!");
    placeFood();
  }
}

function end() {
  
}