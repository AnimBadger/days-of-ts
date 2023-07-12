type one = string
type two = string | number
type three = 'hello'

// convert to more or less specific
let a: one = 'hello'
let b = a as two
let c = b as three
console.log(c)
b = 'strict'
console.log(b)

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// bug! string is returned but no error found. 22 instead of 4
let nextVal: number = addOrConcat(2,2,'concat') as number
console.log(nextVal);
// double casting => converting number to string
(10 as unknown) as string

// The DOM
// use ! to say not null
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement

img.src
myImg.src
