'use strict'

function sequence(start, step) {
    var startValue = start;
    return function(){
        startValue = startValue + step;
        return startValue;
    };
}