let Stephen = "anim"
console.log(Stephen)

// simple function to take two values and return the 'sum'
// without the return declaration you can add a string and number
const sum = (a:number, b: string) => {
    return a + b
}

// same function but makes sure of the return type
const sum2 = (a: number, b: number): number => {
    return a + b
}
