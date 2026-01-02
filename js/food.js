let food = randomFood();

function randomFood() {
  return {
    x: Math.floor(Math.random() * 20) * size,
    y: Math.floor(Math.random() * 20) * size
  };
}

function drawFood(ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, size, size);
}
