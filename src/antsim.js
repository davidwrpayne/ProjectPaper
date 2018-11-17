import Ant from "./ant";
import Board from "./board";

// main
var canvasName = "main-viewport";
var canvas = null;
var ctx = null;
var loaded = false;
var mouseLocation = null;

// simulation objects
var numberOfCells = 25;
var board = null;
var objects = [];
var ant = null;


/**
 * The function that setups up the canvas and things like that
 */
function screenSetup() {

    canvas = document.getElementById(canvasName);
    ctx = canvas.getContext("2d");
    mouseLocation = {x: 100, y: 100};
    canvas.addEventListener('mousemove', handleMouseEvent)
}

/**
 * The function that sets up objects for the simulation
 */
function objectSetup() {
    ant = new Ant({x:100,y:100},null);
    objects.push(ant);
    board = new Board([]);
}

function clearScreen() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.stroke();
}


/**
 * Function that handles timesteps.
 */
function update(timeDiff) {
    ant.setLocation(mouseLocation);
    board.update();
    objects.forEach(function(value,index) {
        value.update(board);
    })
}


function handleMouseEvent(evt) {
    mouseLocation = getMousePos(canvas,evt);
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function drawCircle(location) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(location.x,location.y,70,0,2*Math.PI);
    ctx.stroke();
}


function draw() {
    clearScreen();

    objects.forEach(function (obj) {
        obj.draw(canvas,ctx);
    })

}

var lastFrameTimeMs = 0;
var maxFPS = 60;
var delta = 0;

function mainLoop(timestamp) {
    if (!loaded) {
        console.log('performing setup');
        screenSetup();
        objectSetup();
        loaded = true;
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