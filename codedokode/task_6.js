"use strict"

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}

function partialAny(func) {
    const FIRST_ELEMENT = 1;
    var args = [];

    for (var i = FIRST_ELEMENT; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    
    return function() {
        var innerArgs = [];
        var index = 0;
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] == "undefined") {
                innerArgs.push(arguments[index++]);    
            } else {
                innerArgs.push(args[i]);
            }
        }
        for (var i = index; i < arguments.length; i++) {
            innerArgs.push(arguments[i]);
        }
        console.log(innerArgs);
        return func(...innerArgs);
    };
}