let i = 7;

// For loop controller ie: ( 1 ; 2 ; 3 )
// pos1: variable declaration and/or initialization
// pos2: condition to run the loop (needs to be true)
// pos3: incrementation or change to allow the condition to fail

for (i = 0; i < 10; i++) {
    console.log('nice');
    // increment i
    // verify conditional (hop up if true, leave loop if false)   
}

console.log(i);

// Challenge: Using a for loop, console log from 0 to 20 counting by 2's

for (i=0; i <= 20; i += 2){
    console.log(i);
}

// Count from 10 to 0
for (let z = 10; z >= 0; z --){
    console.log(z);
}

//Challenge
// Use a for loop, create a name variable, console log each character individually

let challenge = 'Devin';

for (let x = 0; x < challenge.length; x++ ) {
    console.log(challenge[x]);
}

//

for (let c of challenge){
    console.log(c);
}

let invoice = [3.1, 4.1, 89.98, 3.50, 45]
let total = 0

for (let i = 0; i < invoice.length; i++){
    total += invoice[i];
}

console.log(total);

// redo the above invoice example, but using a For Loop

for (x of invoice){  // got stuck
    console.log(x);
}