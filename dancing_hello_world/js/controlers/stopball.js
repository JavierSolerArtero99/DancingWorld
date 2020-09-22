'use strict'

import {app} from "./../main.js";

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       app.toogle();
    }
}