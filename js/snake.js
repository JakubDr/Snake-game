let snake = [
  { x: 200, y: 200 }
];

const size = 20;
let direction = "RIGHT";

function moveSnake() {
  let head = { ...snake[0] };

  if (direction === "UP") head.y -= size;
  if (direction === "DOWN") head.y += size;
  if (direction === "LEFT") head.x -= size;
  if (direction === "RIGHT") head.x += size;

  snake.unshift(head);
  snake.pop();
}

function drawSnake(ctx) {
  ctx.fillStyle = "lime";
  for (let part of snake) {
    ctx.fillRect(part.x, part.y, size, size);
  }
}
