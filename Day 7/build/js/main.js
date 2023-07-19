"use strict";
// Index signatures
// interface Transaction{
//     [index: string]: number
// }
let todaysTransactions = {
    Pizza: 10,
    Books: 35,
    Job: 67,
    Banana: 20
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const Student = {
    name: "Doug",
    GPA: 4.0,
    classes: [100, 200]
};
for (const student in Student) {
    // using type assertion 
    console.log(`${student}: ${Student[student]}`);
}
