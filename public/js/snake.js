function createPlayerSnake() {
  playerSnake = new Sprite(spriteSheet["Snek right.png"]);
  // playerSnake.scale.set(0.5, 0.5);
  playerSnake.width = 20;
  playerSnake.height = 20;
  playerSnake.vx = playerSpeed;
  playerSnake.vy = 0;
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