// array
let stringArray = ['Anim', 'Yayira', 'Felix']

let numStringArray = ['Mama', 32, 'Oto', 23]

let mixedArray = [true, 'Pat', 30]

let emptyArray = []

numStringArray.unshift('Jim')
console.log(numStringArray)
numStringArray.push('Latest')
console.log(numStringArray)

// tuple
let myTuple: [string, boolean, number] = ['Hello', true, 34]
console.log(myTuple)

// objects
let myObject = {
    'name': 'Stephen',
    'age': 34
}

// if i want to use interface 
// interface Guitarist {}
type Guitarist = {
    name?: string,
    number_of_songs: number,
    active: boolean,
    songs: (string | number)[]
}

let first: Guitarist = {
    name: 'Anim',
    number_of_songs: 34,
    active: true,
    songs: ['Letter to satan', 'far fly']
}

const greetGuitarist = (guitarist: Guitarist) => {
    // the .name? means it can be optional
    return `Hello ${guitarist.name?.toLocaleUpperCase}`
}

console.log(greetGuitarist(first))

// Enums
enum Grades {
    U = 1,
    D,
    C,
    B,
    A
}