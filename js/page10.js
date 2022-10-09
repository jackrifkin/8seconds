const cans = ["images/coke.png", "images/mackerel.jpg", "images/paint.jpg", "images/soup.jpg", "images/spam.jpg", "images/toucan.jpg", "images/canada.jpg"];
var tindex = 0;

function swipeRight() {
    tindex = tindex + 1;
    if (tindex >= cans.length) {
        tindex = 0;
    }
    document.getElementById("swipeResults").innerHTML = '<img src="images/bigCheck.png" width="200">';
    setTimeout(function() {
        document.getElementById("swipeResults").innerHTML = '';
        document.getElementById("tinder").innerHTML = '<img src="' + cans[tindex] + '" height="275">';
    }, 500);
}

function swipeLeft() {
    tindex = tindex + 1;
    if (tindex >= cans.length) {
        tindex = 0;
    }
    document.getElementById("swipeResults").innerHTML = '<img src="images/bigX.png" width="200">';
    setTimeout(function() {
        document.getElementById("swipeResults").innerHTML = '';
        document.getElementById("tinder").innerHTML = '<img src="' + cans[tindex] + '" height="275">';
    }, 750);
}