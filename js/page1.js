// leaves a trail of circles behind the mouse
document.onmousemove = function (e) {
    var mousePos = getMousePos(e);
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 155) + ',' + 0 + ',' + Math.floor(Math.random() * 155 + 100) + ')';
    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, Math.floor(Math.random() * 15), 0, 2 * Math.PI, true);
    ctx.fill();
}

// returns the x and y coordinates of the mouse
function getMousePos(e) {
    return {
        x: e.clientX + document.body.scrollLeft,
        y: e.clientY + document.body.scrollTop
    };
}