const circle = document.getElementById("circleButton");
// r, g, and b initial values
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
// initial radius
var radius = 40;
// initial change in tint
var tint = 0;

// draws a circle behind the existing elements of the canvas
function drawCircle() {
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    
    ctx.globalCompositeOperation = 'destination-over'; 
    ctx.fillStyle = 'rgb(' + (r - tint) + ',' + (g - tint) + ',' + (b - tint) + ')';
    ctx.beginPath();
    ctx.arc(getOffset(circle).x + 22.5, getOffset(circle).y + 22.5, radius, 0, 2 * Math.PI, true);
    ctx.fill();

    radius = radius + 20;
    tint = tint + 7;
}

// returns the x and y coordinates of the given element
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      x: rect.left,
      y: rect.top
    };
  }