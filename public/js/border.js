function createBorders() {
  topBorder = new Graphics();
  topBorder.moveTo(0, 0);
  topBorder.lineTo(Math.floor(gameArea.offsetWidth), 0);
  topBorder.x = 0;
  topBorder.y = 0;
  
  rightBorder = new Graphics();
  rightBorder.moveTo(0, 0);
  rightBorder.lineTo(0, Math.floor(gameArea.offsetHeight));
  rightBorder.x = Math.floor(gameArea.offsetWidth);
  rightBorder.y = 0;

  bottomBorder = new Graphics();
  bottomBorder.moveTo(0, 0);
  bottomBorder.lineTo(Math.floor(gameArea.offsetWidth), 0);
  bottomBorder.x = 0;
  bottomBorder.y = Math.floor(gameArea.offsetHeight);

  leftBorder = new Graphics();
  leftBorder.moveTo(0, 0);
  leftBorder.lineTo(0, Math.floor(gameArea.offsetHeight));
  leftBorder.x = 0;
  leftBorder.y = 0;
}

function borderCollisionCheck() {
  if (hitTestRectangle(playerSnake, topBorder)) {
    state = end;
  }
  if (hitTestRectangle(playerSnake, rightBorder)) {
    state = end;
  }
  if (hitTestRectangle(playerSnake, bottomBorder)) {
    state = end;
  }
  if (hitTestRectangle(playerSnake, leftBorder)) {
    state = end;
  }
}