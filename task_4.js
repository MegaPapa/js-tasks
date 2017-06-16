"use strict"

function sequence(start, step) {
    var startValue = start;
    return function() {
        startValue = startValue + step;
        return startValue;
    };
}

function fmap(handler, sequenceGenerator) {
    return function(a, b) {
        return handler(sequenceGenerator(a, b));
    };
}

function sqrt(x) {
    return x * x;
}

function add(a, b) {
    return a + b;
}