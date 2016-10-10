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
      break;
    }
  }

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
    playerMaxLength += 1;
    placeFood();
  }
}

function end() {
  
}