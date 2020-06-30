
function hi() {
    console.log('Ayo');
}

hi(); // run the function
hi;  
console.log(hi);
console.log(hi());

//Challenge: Create a function that, when invoked, lists out the numbers between 1-10;

let printNumbers = function potato() {
    for (let i=1; i<10; i++) {
        console.log(i);
    }
}
printNumbers ();

console.log(printNumbers);

//IIFE = Immediately Invoked Function Expression
(function() {console.log('Why is this working')})()