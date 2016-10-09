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
  if (direction === "left") {
    //goes right, turns to up
    if (playerSnake.vx > 0) {
      playerSnake.vx = 0;
      playerSnake.vy = -playerSpeed;
    }
    //goes up, turns to left
    else if(playerSnake.vy < 0) {
      playerSnake.vx = -playerSpeed;
      playerSnake.vy = 0;
    }
    //goes left, turns to down
    else if(playerSnake.vx < 0) {
      playerSnake.vx = 0;
      playerSnake.vy = playerSpeed;
    }
    //goes down, turns to right
    else if(playerSnake.vy > 0) {
      playerSnake.vx = playerSpeed;
      playerSnake.vy = 0;
    }
  }
  else if (direction === "right") {
    //goes right, turns to down
    if (playerSnake.vx > 0) {
      playerSnake.vx = 0;
      playerSnake.vy = playerSpeed;
    }
    //goes down, turns to left
    else if(playerSnake.vy > 0) {
      playerSnake.vx = -playerSpeed;
      playerSnake.vy = 0;
    }
    //goes left, turns to up
    else if(playerSnake.vx < 0) {
      playerSnake.vx = 0;
      playerSnake.vy = -playerSpeed;
    }
    //goes up, turns to right
    else if(playerSnake.vy < 0) {
      playerSnake.vx = playerSpeed;
      playerSnake.vy = 0;
    }
  }
}