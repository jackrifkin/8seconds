const beginTime = Date.now();

function descend() {
    let elapsed = Date.now() - beginTime;
    let miner = document.getElementById("miner");
    
    document.getElementById("miner").style.bottom = '-' + (elapsed / 10) + 'px';
    console.log(document.getElementById("miner").style.bottom);
}

window.onload = setTimeout(function() {
    console.log("digging");
    setInterval(descend, 500);
}, 1000);