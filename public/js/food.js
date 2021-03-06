function createFood() {
  food = new Graphics();
  food.beginFill(0xf4eb00);
  food.lineStyle(2, 0x8e8157);
  food.drawCircle(0, 0, 5);
  food.x = getRandomInt(foodMargin, maxFoodX);
  food.y = getRandomInt(foodMargin, maxFoodY);
  food.endFill();
}

function eatFood() {
  placeFood();
  points += 100;
  playerMaxLength += 1;
  document.getElementsByClassName("score-display")[0].innerHTML = points;

  if (points > highScore) {
    highScore = points;
    document.getElementsByClassName("high-score-display")[0].innerHTML = highScore;
  }
}

function foodCollisionCheck() {
  if (hitTestRectangle(playerSnake, food)) {
    eatFood();
  }
}

function setFoodLimits() {
  maxFoodX = Math.floor(gameArea.offsetWidth) - foodMargin;
  maxFoodY = Math.floor(gameArea.offsetHeight) - foodMargin;
}

function placeFood() {
  food.x = getRandomInt(foodMargin, maxFoodX);
  food.y = getRandomInt(foodMargin, maxFoodY);
}

function resetPoints() {
  points = 0;
  document.getElementsByClassName("score-display")[0].innerHTML = points;
}