"use strict";
// convert to more or less specific
let a = 'hello';
let b = a;
let c = b;
console.log(c);
b = 'strict';
console.log(b);
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// bug! string is returned but no error found. 22 instead of 4
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// double casting => converting number to string
10;
// The DOM
// use ! to say not null
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
img.src;
myImg.src;
