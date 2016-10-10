function play() {
  playerSnake.x += playerSnake.vx;
  playerSnake.y += playerSnake.vy;

  tailFrameTick++;
  if (tailFrameTick === 3) {
    playerTail.unshift(createTailPart());
    tailFrameTick = 0;
  }

  if (playerTail.length >=2) {
    playerTail[1].alpha = 1;
  }

  if (playerTail.length > playerMaxLength) {
    stageBackground.removeChild(playerTail[playerTail.length-1]);
    playerTail.pop();
  }

  for (var i = 5; i < playerTail.length; i++) {
    if (hitTestRectangle(playerSnake, playerTail[i])) {
      state = end;
      break;
    }
  }

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

  if (hitTestRectangle(playerSnake, food)) {
    eatFood();
  }
}

function end() {
  // console.log("Game Over");
  gameOverScreen.visible = true;
}

function start() {
  console.log("Start");
}