"use strict";
// array
let stringArray = ['Anim', 'Yayira', 'Felix'];
let numStringArray = ['Mama', 32, 'Oto', 23];
let mixedArray = [true, 'Pat', 30];
let emptyArray = [];
numStringArray.unshift('Jim');
console.log(numStringArray);
numStringArray.push('Latest');
console.log(numStringArray);
// tuple
let myTuple = ['Hello', true, 34];
console.log(myTuple);
// objects
let myObject = {
    'name': 'Stephen',
    'age': 34
};
let first = {
    name: 'Anim',
    number_of_songs: 34,
    active: true,
    songs: ['Letter to satan', 'far fly']
};
const greetGuitarist = (guitarist) => {
    var _a;
    // the .name? means it can be optional
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase}`;
};
console.log(greetGuitarist(first));
// Enums
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 1] = "U";
    Grades[Grades["D"] = 2] = "D";
    Grades[Grades["C"] = 3] = "C";
    Grades[Grades["B"] = 4] = "B";
    Grades[Grades["A"] = 5] = "A";
})(Grades || (Grades = {}));
