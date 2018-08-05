var scoreText = function() {
    var score_text = "Score " + score;
    ctx.fillStyle = 'blue';
    ctx.font = "20px Georgia";
    var textWidth = ctx.measureText(score_text).width;
    ctx.fillText(score_text, (width - textWidth) / 2 , 15);
}
