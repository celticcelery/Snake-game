var field = function(){
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, width, height);
    move();
}
