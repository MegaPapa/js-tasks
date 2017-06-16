"use strict"

function map(handler, array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(handler(array[i]));
    }
    return result;
}

function sqrt(x) {
    return x * x;
}
