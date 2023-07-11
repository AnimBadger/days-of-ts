"use strict";
// literal type, use : instead of =
let myName;
// functions
const sum = (first, second) => {
    return (first + second);
};
const logMessage = (msg) => {
    console.log(msg);
};
logMessage('Hello');
logMessage(sum(4, 6));
const multiply = (first, second) => {
    return first * second;
};
logMessage(multiply(2, 6));
const division = (first, second) => {
    return first / second;
};
logMessage(division(6, 2));
// optional parameters, optional must always be last
const sumAll = (first, second, op) => {
    if (op === undefined) {
        return first + second;
    }
    return first + second + op;
};
logMessage(sumAll(2, 5));
logMessage(sumAll(2, 5, 1));
// default parameters
const addAll = (first, second, op = 3) => {
    return first + second + op;
};
logMessage(addAll(1, 4));
logMessage(addAll(1, 4));
// first parameter default
const all = (first = 10, second, op = 3) => {
    return first + second + op;
};
// add undefined to skip first
logMessage(all(undefined, 3));
// rest parameters, should always be at the end
const rest = (a, ...numberArray) => {
    return a + numberArray.reduce((prev, curr) => prev + curr);
};
logMessage(rest(1, 3, 5, 6, 7, 9));
// never
const createError = (msg) => {
    throw new Error(msg);
};
// throw error when return never
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 4)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const StringOrNumber = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should not be happening');
};
