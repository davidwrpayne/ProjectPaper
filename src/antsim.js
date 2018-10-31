

// main
var canvas = null;
var ctx = null;
var loaded = false;

function setup() {
    var canvasName = "main-viewport";

    canvas = document.getElementById(canvasName);
    ctx = canvas.getContext("2d");
    console.log("received canvas" . canvas);
}



function clearScreen() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}


function update() {

}

function draw() {
    clearScreen();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(100,100,70,0,2*Math.PI);
    ctx.stroke();
}

var lastFrameTimeMs = 0;
var maxFPS = 60;
var delta = 0;

function mainLoop(timestamp) {
    if (!loaded) {
        setup();
    }

    // Throttle the frame rate.
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta = timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    update(delta);
    draw();
    requestAnimationFrame(mainLoop);
}

window.onload = requestAnimationFrame(mainLoop);