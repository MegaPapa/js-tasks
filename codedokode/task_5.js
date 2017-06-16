"use strict"

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}

function partial(func) {
    const FIRST_ELEMENT = 1;
    var args = [];

    for (var i = FIRST_ELEMENT; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    return function() {
        var innerArgs = [];
        for (var i = 0; i < args.length; i++) {
            innerArgs.push(args[i]);
        }
        for (var i = 0; i < arguments.length; i++) {
            innerArgs.push(arguments[i]);
        }
        return func(...innerArgs);
    };
}