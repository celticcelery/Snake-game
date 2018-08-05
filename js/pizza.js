var pizza = function(x, y) {
    ctx.fillStyle = 'orange';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
}

var makePizza = function() {

    do {
        makeRandomPizzaPosition();
    } while(contains());
}

var contains = function() {
    for (var i = 0; i > snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

        if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX) {
            return true;
        }
    }
    return false;
}

var makeRandomPizzaPosition = function(){
    food = {
        x: Math.floor((Math.random() * 30) +1),
        y: Math.floor((Math.random() * 30) + 1)
    }
}
