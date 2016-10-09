function createPlayerSnake() {
  playerSnake = new Sprite(spriteSheet["Snek.png"]);
  playerSnake.scale.set(0.5, 0.5);
  playerSnake.vx = playerSpeed;
  playerSnake.vy = 0;
}