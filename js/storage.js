var   myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d'),
      width = myCanvas.getAttribute("width"),
      height = myCanvas.getAttribute("height"),
      startingLength = 3,
      score = 0,
      snake,
      snakeSize = 10,
      canvasRightEdge = width / snakeSize,
      canvasBottomEdge = height / snakeSize;
const MS_PER_SECOND = 40;
const LEFT = 37,
      RIGHT = 39,
      UP = 38,
      DOWN = 40;
