function hitLights() {
    let body = document.body;

    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        document.getElementById("switch").innerHTML = '<a onclick="hitLights()"><img id="lightSwitch" src="images/on.png"></a>';
        document.getElementById("flashlight").style.backgroundColor = "rgba(255, 255, 255, 0)";
        document.getElementById("flashlight2").style.backgroundColor = "rgba(255, 255, 157, 0)";
    } else {
        body.style.backgroundColor = "black";
        document.getElementById("flashlight").style.backgroundColor = "rgba(255, 255, 157, 0.65)";
        document.getElementById("switch").innerHTML = '<a onclick="hitLights()"><img id="lightSwitch" src="images/off.png"></a>';

        if (sessionStorage.getItem("inCycle") == "false") {
            document.getElementById("flashlight2").style.backgroundColor = "rgba(255, 255, 157, 0.65)";
        }
    }
}