'use strict'

function sequence(start, step) {
    var startValue = start;
    return function(){
        startValue = startValue + step;
        return startValue;
    };
}

function take(sequenceClojure, numberOfCall) {
    var invokeResults = [];
    for (var i = 0; i < numberOfCall; i++) {
        invokeResults.push(sequenceClojure());
    }
    return invokeResults;
}