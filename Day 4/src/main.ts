// type alias
type StringNumber = number | string
type StringNumberArray = (number | string)[]

interface Guitarist{
    name: string
    number_of_albums: number
    is_active?: boolean
    artist_id: StringNumber
    albums: StringNumberArray
}

// literal type, use : instead of =
let myName: "Stephen"

// functions
const sum = (first: number, second: number): number => {
    return (first + second)
}

const logMessage = (msg: any): void => {
    console.log(msg)
}

logMessage('Hello')
logMessage(sum(4,6))

// using type alias with functions
type MathType = (a: number, b: number) => number

const multiply: MathType = (first, second) => {
    return first * second
}

logMessage(multiply(2, 6))

// using interface
interface MathInterface {
    (a: number, b: number): number
}

const division: MathInterface = (first, second) => {
    return first / second
}

logMessage(division(6, 2))

// optional parameters, optional must always be last
const sumAll = (first: number, second: number, op?: number): number => {
    if (op === undefined){
        return first + second
    }
    return first + second + op
}
logMessage(sumAll(2,5))
logMessage(sumAll(2,5,1))

// default parameters
const addAll = (first: number, second: number, op = 3): number => {
    return first + second + op
}
logMessage(addAll(1,4))
logMessage(addAll(1,4))

// first parameter default
const all = (first: number = 10, second: number, op = 3): number => {
    return first + second + op
}
// add undefined to skip first
logMessage(all(undefined, 3))

// rest parameters, should always be at the end
const rest = (a: number, ...numberArray: number[]): number => {
    return a + numberArray.reduce((prev, curr) => prev + curr)
}

logMessage(rest(1,3,5,6,7,9))

// never
const createError = (msg: string): never => {
    throw new Error(msg)
}

// throw error when return never
const infinite = () => {
    let i: number = 1
    while (true){
        i++
        if (i > 4 )  break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

const StringOrNumber = (value: string | number): string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('This should not be happening')
}