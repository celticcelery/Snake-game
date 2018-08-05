var drawModule = (function() {

    var init = function(){
        direction = 'down';
        drawSnake();
        makePizza();
        gameloop = setInterval(field, MS_PER_SECOND);
    }

    return {
        init: init
    };
}());
