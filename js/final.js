function endMessage() {
    let text = document.getElementById("endMessage");
    let text2 = document.getElementById("endMessage2");

    if (sessionStorage.getItem("selfControl?") == "true") {
        text.innerHTML = "<h1>All done with your little games?</h1>";
        setTimeout(function () {
            text.innerHTML = "<h1>I was starting to think I'd never see you again!</h1>"
            setTimeout(function () {
                lastMessage();
            }, 3500);
        }, 2500);
    } else {
        text.innerHTML = "<h1>Ok, that's enough</h1>";
        setTimeout(function () {
            text.innerHTML = "<h1>I can't have you wasting any more time</h1>"
            setTimeout(function () {
                lastMessage();
            }, 3000);
        }, 2500);
    }

    function lastMessage() {
        text.style.paddingTop = "12%";
        updateTimeElapsed();
        setInterval(updateTimeElapsed, 1000);
        setTimeout(function () {
            text2.innerHTML = "<h1>You really have nothing better to do, huh?</h1>";
            setTimeout(function () {
                document.getElementById("restart").innerHTML = 
                '<button class="restart-button" onclick="restart()">Restart?</button>';
            }, 2000);
        }, 3000);
    }

    function updateTimeElapsed() {
        text.innerHTML = "<h1>I only asked for 8 seconds,<br>but you gave me<br><span class='big-red'>" + (Math.floor((Date.now() - parseInt(sessionStorage.getItem("beginTime"))) / 1000)).toString() + "</span></h1>";
    }
}

function restart() {
    window.location.href = 'restart.html';
}

window.onload = endMessage();