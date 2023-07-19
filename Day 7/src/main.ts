// Index signatures
// interface Transaction{
//     [index: string]: number
// }

interface Transaction{
    [index: string]: number
    Pizza: number
    Books: number
    Job: number
}

let todaysTransactions: Transaction = {
    Pizza: 10,
    Books: 35,
    Job: 67,
    Banana: 20
}

const todaysNet = (transactions: Transaction): number => {
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

///////////////////////////////////////////////////

interface Students{
    //[index: string]: number | string | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const Student: Students = {
    name: "Doug",
    GPA: 4.0,
    classes: [100, 200]
}

for (const student in Student){
    // using type assertion 
    console.log(`${student}: ${Student[student as keyof Students]}`)
}