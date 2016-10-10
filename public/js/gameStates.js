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
      console.log("hit tail!");
      state = end;
      break;
    }
  }

  if (hitTestRectangle(playerSnake, topBorder)) {
    console.log("hit topBorder!");
    state = end;
  }
  if (hitTestRectangle(playerSnake, rightBorder)) {
    console.log("hit rightBorder!");
    state = end;
  }
  if (hitTestRectangle(playerSnake, bottomBorder)) {
    console.log("hit bottomBorder!");
    state = end;
  }
  if (hitTestRectangle(playerSnake, leftBorder)) {
    console.log("hit leftBorder!");
    state = end;
  }

  if (hitTestRectangle(playerSnake, food)) {
    points += 100;
    console.log("hit food!");
    playerMaxLength += 1;
    placeFood();
  }
}

function end() {
  console.log("Game Over");
}

function start() {
  console.log("Start");
}