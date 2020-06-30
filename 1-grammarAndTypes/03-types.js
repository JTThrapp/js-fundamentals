// Booleans
let isOn = true;

let isRaining = false;

// NULL
let empty = null;

// Undefined
let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

//numbers
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999 // this is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999 // this is 16 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 + 10) / 10;
console.log(numbersAreHard);

let created = Number('123'); // turn 123 into the number 123
console.log(created);  //changing data types

let abc = Number('z');
console.log(abc)

//strings
let stringOne = "doubleydoos"
let stringTwo = 'singleydoos' // you can use both. But if you have " or ' in the string, could be issue

let first = 1050 +100;
let second = '1050' + 100;
let third = 1050 + '100';
let fourth = '1050' + '100';
console.log(first, second, third, fourth);

let firstName = "Adam"
let lastName = "Jayne"

console.log(firstName + " " + lastName);

// escape characters
let myMessage = 'don\'t do this'
console.log(myMessage);

//objects > store multiple attributes
let frodo = {
    race: 'Hobbit', //string
    rings: 1, //number
    cloak: true, //boolean 
    primaryWeapon: {
        name: 'Sting', //object within an object
        attack: 30,
        damage: false
    }
};

console.log(typeof frodo)

// arrays
let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];

//instanceof
console.log(aThing instanceof Array)

// STRINGS: methods

let userTitle = "a DaY in tHE lIfe of dev"
console.log(userTitle.toUpperCase());
console.log(userTitle.includes('in'));