function initializeControls() {
  left = keyboard(37);
  right = keyboard(39);

  left.press = function() {
    turnSnake("left");
  }

  right.press = function() {
    turnSnake("right");
  }
}

function turnSnake(direction) {
  if (currentState === "startState") {
    state = play;
  }
  else if (currentState === "endState") {
    reset();
  }
  else if (currentState === "playState") {
    if (direction === "left") {
      //goes right, turns to up
      if (playerSnake.vx > 0) {
        playerSnake.vx = 0;
        playerSnake.vy = -playerSpeed;
        playerSnake.texture = spriteSheet["Snek up.png"];
      }
      //goes up, turns to left
      else if(playerSnake.vy < 0) {
        playerSnake.vx = -playerSpeed;
        playerSnake.vy = 0;
        playerSnake.texture = spriteSheet["Snek left.png"];
      }
      //goes left, turns to down
      else if(playerSnake.vx < 0) {
        playerSnake.vx = 0;
        playerSnake.vy = playerSpeed;
        playerSnake.texture = spriteSheet["Snek down.png"];
      }
      //goes down, turns to right
      else if(playerSnake.vy > 0) {
        playerSnake.vx = playerSpeed;
        playerSnake.vy = 0;
        playerSnake.texture = spriteSheet["Snek right.png"];
      }
    }
    else if (direction === "right") {
      //goes right, turns to down
      if (playerSnake.vx > 0) {
        playerSnake.vx = 0;
        playerSnake.vy = playerSpeed;
        playerSnake.texture = spriteSheet["Snek down.png"];
      }
      //goes down, turns to left
      else if(playerSnake.vy > 0) {
        playerSnake.vx = -playerSpeed;
        playerSnake.vy = 0;
        playerSnake.texture = spriteSheet["Snek left.png"];
      }
      //goes left, turns to up
      else if(playerSnake.vx < 0) {
        playerSnake.vx = 0;
        playerSnake.vy = -playerSpeed;
        playerSnake.texture = spriteSheet["Snek up.png"];
      }
      //goes up, turns to right
      else if(playerSnake.vy < 0) {
        playerSnake.vx = playerSpeed;
        playerSnake.vy = 0;
        playerSnake.texture = spriteSheet["Snek right.png"];
      }
    }
  }
}