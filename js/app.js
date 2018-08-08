(function(window, document, drawModule, undefined) {
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function() {
        drawModule.init();
    });

    document.onkeydown = function(event) {
        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {
            case LEFT:
                if (direction != 'right') {
                    direction = 'left';
                }
                break;
            case RIGHT:
                if (direction != 'left') {
                    direction = 'right';
                }
                break;

            case UP:
                if (direction != 'down') {
                    direction = 'up';
                }
                break;
            case DOWN:
                if (direction != 'up') {
                    direction = 'down';
                }
                break;
        }

    }
})(window, document, drawModule);
