function createFood() {
  food = new Graphics();
  food.beginFill(0x66CCFF, 0.5);
  food.lineStyle(2, 0xFF3300, 1);
  food.drawCircle(0, 0, 5);
  food.x = getRandomInt(foodMargin, maxFoodX);
  food.y = getRandomInt(foodMargin, maxFoodY);
  food.endFill();
}

function placeFood() {
  food.x = getRandomInt(foodMargin, maxFoodX);
  food.y = getRandomInt(foodMargin, maxFoodY);
}