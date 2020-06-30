let greeting = function (name) {
    console.log(`Hello, ${name}!`);
}

greeting('Becky'); // Becky is the "i" from "i/o" (input/output)

let printMyName = function(fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${ fullName }.`);
}

printMyName('John','Thrapp')

let calculateBalance = function (debits, credits) {
    // parameter debits = [ numbers ]
    // parameter credits = [ number ]
    let total = 0;
    for (debit of debits) {
        total -= debit;
    }
    for (credit of credits) {
        total += credit;
    }
    console.log(total);
}

let mydeb = [150, 34, 23.98]
let mycred = [1000, 50, 25]

calculateBalance(mydeb, mycred)