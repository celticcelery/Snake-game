var bodySnake = function(x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
}

var drawSnake = function() {
    snake = [];
    for (var i = startingLength; i > 0; i--) {
        snake.push({
            x: i,
            y: 0
        });
    }
}

var move = function() {
    btn.setAttribute('disabled', true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;
        if (direction == 'right') {
            snakeX++;
        }
        if (direction == 'left') {
            snakeX--;
        }
        if (direction == 'up') {
            snakeY--;
        }
        if (direction == "down") {
            snakeY++;
        }


        checkBoundsOrContinue(snakeX, snakeY);

}

var checkBoundsOrContinue = function(snakeX, snakeY) {
    if (snakeX < 0 || snakeX >= canvasRightEdge || snakeY < 0 || snakeY >= canvasBottomEdge || checkCollision(snakeX, snakeY, snake)) {
        btn.removeAttribute('disabled', true);

        ctx.clearRect(0,0,width,height);
        score = 0;
        gameloop = clearInterval(gameloop);
        return;
    }
    if (snakeX == food.x && snakeY == food.y) {
        var tail = {x: snakeX, y: snakeY};
        score++;

        makePizza();
    } else {
        var tail = snake.pop();
        tail.x = snakeX;
        tail.y = snakeY;
    }
    snake.unshift(tail);

    for(var i = 0; i < snake.length; i++) {
        bodySnake(snake[i].x, snake[i].y);
    }
    pizza(food.x, food.y);
    scoreText();
}



var checkCollision = function(x, y, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
    }
    return false;
}
