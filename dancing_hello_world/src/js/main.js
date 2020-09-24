'use strict'

import '../css/style.css'
import docReady from './core/core.js';
import './controlers/stopball.js';

export let app = (function (el) {
    let myApp;
    let stateApp = "stop"
    let ballInterval;

    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random()) ? 1 : -1);
    let incY = speed * (Math.round(Math.random()) ? 1 : -1);
    let element = document.getElementsByTagName("h1")[0];

    let dw = function () {
        let x = element.style.left ? parseInt(element.style.left, 10) : 350;
        let y = element.style.top ? parseInt(element.style.top, 10) : 400;
        element.style.left = x + incX + "px";
        element.style.top = y + incY + "px";

        //Detect if we reach X coordinates limits
        if (((x + incX) > (window.innerWidth - 40)) || ((x + incX) <= 0))
            incX = (-1) * incX;

        //Detect if we reach Y coordinates limits
        if (((y + incY) > (window.innerHeight - 40)) || ((y + incY) <= 0))
            incY = (-1) * incY;
    }

    let start = function () {
        stateApp = "run"
        myApp = setInterval(dw, 50);
    }

    let stop = function () {
        stateApp = "stop"
        clearInterval(myApp)
    }

    let toogle = function () {
        (stateApp==="run") ? stop() : start()
    }

    return {start: start, toogle: toogle}
})();

docReady(app.start);