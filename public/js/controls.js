function initializeControls() {
  left = keyboard(37);
  right = keyboard(39);

  left.press = function() {
    //goes right, turns to up
    if (playerSnake.vx > 0) {
      console.log("goes right, turns to up");

      playerSnake.vx = 0;
      playerSnake.vy = -playerSpeed;
    }
    //goes up, turns to left
    else if(playerSnake.vy < 0) {
      console.log("goes up, turns to left");
      playerSnake.vx = -playerSpeed;
      playerSnake.vy = 0;
    }
    //goes left, turns to down
    else if(playerSnake.vx < 0) {
      console.log("goes left, turns to down");
      playerSnake.vx = 0;
      playerSnake.vy = playerSpeed;
    }
    //goes down, turns to right
    else if(playerSnake.vy > 0) {
      console.log("goes down, turns to right");
      playerSnake.vx = playerSpeed;
      playerSnake.vy = 0;
    }
  }

  right.press = function() {
    //goes right, turns to down
    if (playerSnake.vx > 0) {
      console.log("goes right, turns to down");
      playerSnake.vx = 0;
      playerSnake.vy = playerSpeed;
    }
    //goes down, turns to left
    else if(playerSnake.vy > 0) {
      console.log("goes down, turns to left");
      playerSnake.vx = -playerSpeed;
      playerSnake.vy = 0;
    }
    //goes left, turns to up
    else if(playerSnake.vx < 0) {
      console.log("goes left, turns to up");
      playerSnake.vx = 0;
      playerSnake.vy = -playerSpeed;
    }
    //goes up, turns to right
    else if(playerSnake.vy < 0) {
      console.log("goes up, turns to right");
      playerSnake.vx = playerSpeed;
      playerSnake.vy = 0;
    }
  }
}