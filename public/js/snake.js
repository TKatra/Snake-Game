function createPlayerSnake() {
  playerSnake = new Sprite(spriteSheet["Snek right.png"]);
  playerSnake.width = 20;
  playerSnake.height = 20;
  playerSnake.vx = playerSpeed;
  playerSnake.vy = 0;
}

function resetPlayerSnake() {
  for (var i = playerTail.length - 1; i >= 0; i--) {
    stageBackground.removeChild(playerTail[i]);
    playerTail.pop();
  }

  playerSnake.width = 20;
  playerSnake.height = 20;
  playerSnake.texture = spriteSheet["Snek right.png"];
  playerSnake.x = 0;
  playerSnake.y = 0;
  playerSnake.vx = playerSpeed;
  playerSnake.vy = 0;

  playerTail = [];
  playerMaxLength = 5;
  tailFrameTick = 0;
}

function buildSnakeTail() {
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
}

function createTailPart() {
  var tailPart = new Graphics();
  tailPart.beginFill(0x48ea40);
  tailPart.lineStyle(2, 0x000000, 1);
  tailPart.alpha = 0;
  tailPart.drawCircle(0, 0, 10);
  tailPart.x = playerSnake.x + 10;
  tailPart.y = playerSnake.y + 10;
  tailPart.endFill();
  stageBackground.addChild(tailPart);

  return tailPart;
}

function tailCollisionCheck() {
  //Skip checking the first 5 to be able to turn the snake
  //without colliding with the tail instantly
  for (var i = 5; i < playerTail.length; i++) {
    if (hitTestRectangle(playerSnake, playerTail[i])) {
      state = end;
      break;
    }
  }
}