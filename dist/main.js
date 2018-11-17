/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/antsim.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ant.js":
/*!********************!*\
  !*** ./src/ant.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class Ant {\n\n    constructor(postion) {\n        this.position = postion;\n    }\n\n    draw(canvas, ctx) {\n        \n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.lineWidth = 1;\n        ctx.arc(this.position.x,this.position.y-10,10,0,2*Math.PI);\n        ctx.stroke();\n        ctx.beginPath();\n        ctx.arc(this.position.x,this.position.y+10,10,0,2*Math.PI);\n        ctx.stroke();\n        ctx.beginPath();\n        ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI);\n        ctx.stroke();\n        ctx.moveTo(this.position.x, this.position.y);\n        ctx.beginPath();\n        ctx.lineTo(this.position.x+5, this.position.y +5);\n        ctx.stroke();\n    }\n\n    setLocation(location) {\n        this.position = location;\n    }\n\n    update(board) {\n        //\n        // var currentCell = board.cells[]\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/ant.js?");

/***/ }),

/***/ "./src/antsim.js":
/*!***********************!*\
  !*** ./src/antsim.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ant */ \"./src/ant.js\");\n/* harmony import */ var _ant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// main\nvar canvasName = \"main-viewport\";\nvar canvas = null;\nvar ctx = null;\nvar loaded = false;\nvar mouseLocation = null;\n\n// simulation objects\nvar numberOfCells = 25;\nvar board = null;\nvar objects = [];\nvar ant = null;\n\n\n/**\n * The function that setups up the canvas and things like that\n */\nfunction screenSetup() {\n\n    canvas = document.getElementById(canvasName);\n    ctx = canvas.getContext(\"2d\");\n    mouseLocation = {x: 100, y: 100};\n    canvas.addEventListener('mousemove', handleMouseEvent)\n}\n\n/**\n * The function that sets up objects for the simulation\n */\nfunction objectSetup() {\n    ant = new _ant__WEBPACK_IMPORTED_MODULE_0___default.a({x:100,y:100},null);\n    objects.push(ant);\n    board = new _board__WEBPACK_IMPORTED_MODULE_1___default.a([]);\n}\n\nfunction clearScreen() {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(0,0,canvas.width, canvas.height);\n    ctx.stroke();\n}\n\n\n/**\n * Function that handles timesteps.\n */\nfunction update(timeDiff) {\n    ant.setLocation(mouseLocation);\n    board.update();\n    objects.forEach(function(value,index) {\n        value.update(board);\n    })\n}\n\n\nfunction handleMouseEvent(evt) {\n    mouseLocation = getMousePos(canvas,evt);\n}\n\n\nfunction getMousePos(canvas, evt) {\n    var rect = canvas.getBoundingClientRect();\n    return {\n        x: evt.clientX - rect.left,\n        y: evt.clientY - rect.top\n    };\n}\n\nfunction drawCircle(location) {\n    ctx.beginPath();\n    ctx.fillStyle = \"black\";\n    ctx.lineWidth = 2;\n    ctx.arc(location.x,location.y,70,0,2*Math.PI);\n    ctx.stroke();\n}\n\n\nfunction draw() {\n    clearScreen();\n\n    objects.forEach(function (obj) {\n        obj.draw(canvas,ctx);\n    })\n\n}\n\nvar lastFrameTimeMs = 0;\nvar maxFPS = 60;\nvar delta = 0;\n\nfunction mainLoop(timestamp) {\n    if (!loaded) {\n        console.log('performing setup');\n        screenSetup();\n        objectSetup();\n        loaded = true;\n    }\n\n    // Throttle the frame rate.\n    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {\n        requestAnimationFrame(mainLoop);\n        return;\n    }\n    delta = timestamp - lastFrameTimeMs;\n    lastFrameTimeMs = timestamp;\n\n    update(delta);\n    draw();\n    requestAnimationFrame(mainLoop);\n}\n\nwindow.onload = requestAnimationFrame(mainLoop);\n\n//# sourceURL=webpack:///./src/antsim.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// this file contains a bunch of functions that are used to update\n// the constructor\n\n\nmodule.exports = class Board {\n\n    constructor(cells) {\n        var numberOfCells = 0;\n        this.cells = cells;\n        for ( var i = 0 ; i <= numberOfCells ; i++ ) {\n            cells[i] = [];\n            for ( var j = 0 ; j <= numberOfCells ; j ++ ) {\n                cells[i][j] = [];\n            }\n        }\n    }\n\n\n    update() {\n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ })

/******/ });