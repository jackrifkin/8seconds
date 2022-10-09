const pages = ["page1.html", "page2.html", "page3.html", "page4.html", "page5.html", "page6.html", "page7.html", "page8.html", "page9.html", "page10.html"];
const timerBar = document.querySelector('#timer');
const startTime = Date.now();
var interval = null;

// sets the page qualities given the currentEndIndex and index
// when the currentEndIndex = index, the page will automatically switch to the next page
// else, the page will have a next button and a back-to-cycle button
function start() {
    // console logs
    console.log(index);
    console.log(parseInt(sessionStorage.getItem("currentEndIndex")));
    console.log(parseInt(sessionStorage.getItem("currentEndIndex")) == index);

    // sets "inCycle" to if currentEndIndex = index
    sessionStorage.setItem("inCycle", parseInt(sessionStorage.getItem("currentEndIndex")) == index);

    // if inCycle, increments currentEndIndex, animates timer bar, and switches pages after 8 seconds
    if (sessionStorage.getItem("inCycle") == "true") {
        console.log("switching pages");

        if (index > 0) {
            setTimeout(switchPage, 8000);
            interval = setInterval(animateTimer, 50);
        } else {
            welcomeMessage();
        }

        sessionStorage.setItem("currentEndIndex", parseInt(sessionStorage.getItem("currentEndIndex")) + 1);

    // else, adds next and back-to-cycle buttons
    } else {
        createNext();
        createContinue();
        console.log("cycle disrupted");
    }

    createPrev();
}

function welcomeMessage() {
    let text = document.getElementById("welcomeText");
    text.innerHTML = '<h1>Hi!</h1>';
    setTimeout(function () {
        text.innerHTML = "<h1>Need some entertainment?</h1>";
        setTimeout(function () {
            text.innerHTML = "<h1>I can help!</h1>";
            setTimeout(function () {
                text.style.paddingTop = "15%";
                text.innerHTML = '<h1>In exchange, I just need<br><span class="big-red">8 seconds</span><br>of your time</h1>';
                setTimeout(function () {
                    text.style.paddingTop = "20%";
                    text.innerHTML = "<h1>Sound good?</h1>";
                    setTimeout(startCountdown, 1000);
                }, 3000);
            }, 2500);
        }, 3000);
    }, 2500);

    function startCountdown() {
        let numInterval = null;
        let num = 9;
    
        function incrementNum() {
            num = num - 1;
            if (num != 0) {
                text.innerHTML = '<h1>' + num.toString() + '</h1>';
            } else {
                text.innerHTML = '';
                clearInterval(numInterval);
                setTimeout(function () {
                    text.innerHTML = '<h1>Thanks!</h1>';
                    setTimeout(function () {
                        text.innerHTML = "<h1>Now for the entertainment</h1>";
                        setTimeout(function () {
                            text.innerHTML = text.innerHTML + '<br><h3>As promised :)</h3>';
                        }, 1500);
                    }, 1500);
                }, 1000);
            }
            console.log(num);
        }

        numInterval = setInterval(incrementNum, 1000);
    }

    setTimeout(switchPage, 27300);
}

// animates the timer bar
function animateTimer() {
    let elapsedTime = Date.now() - startTime;
    let barWidth = elapsedTime / 80;
    let value = Math.floor(barWidth);
    
    timerBar.style.width = value + '%';

    // stops the timer animation
    if (value > 100) {
        clearInterval(interval);
        console.log("timer done");
    }
}

// switches the current window location to the page at the current value of index
// if user reaches end of page list, switches to final.html page
function switchPage() {
    if (index >= pages.length) {
        window.location.href = "final.html";
    } else {
        window.location.href = pages[index];
    }
}

// creates "prev" button
function createPrev() {
    if (document.getElementById("prev") != null) {
        document.getElementById("prev").innerHTML = '<a href="page' + (index - 1).toString() + '.html" onclick="disruptCycle(0)"><img src="images/previous.png">Prev</a>';
    }
}

// creates "next" button
function createNext() {
    if (document.getElementById("next") != null) {
        document.getElementById("next").innerHTML = '<a href="page' + (index + 1).toString() + '.html" onclick="disruptCycle(1)">Next<img src="images/next.png"></a>';
    }
}

// creates the "continue" button
function createContinue() {
    if (document.getElementById("continue") != null) {
        document.getElementById("continue").innerHTML = '<a href="page' + (sessionStorage.getItem("currentEndIndex")) + '.html" onclick="checkCycle()">Continue Cycle</a>';
    }
}

// stops the automatic page-changing cycle, if it was active
// if "next" button was clicked, calls function that determines if cycle should continue
function disruptCycle(direction) {
    if (sessionStorage.getItem("inCycle") == "true") {
        sessionStorage.setItem("currentEndIndex", parseInt(sessionStorage.getItem("currentEndIndex")) - 1);
    }

    sessionStorage.setItem("inCycle", false);

    if (direction == 1) {
        checkCycle();
    }
}

// determines if page-changing cycle should continue
// if so, sets inCycle to true
function checkCycle() {
    if (parseInt(sessionStorage.getItem("currentEndIndex")) == index) {
        console.log("back to cycle");
        sessionStorage.setItem("inCycle", true);
    }
}

// updates to final window, and sets selfControl? to true
function endPressed() {
    sessionStorage.setItem("selfControl?", true);
    window.location.href = 'final.html';
}

// calls start function when window loads
window.onload = start();
