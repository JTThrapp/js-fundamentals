let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 40,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

//function createPerson (name, age, canVote) {
//    let person = {
//        name: name,
//        age: age,
//        canVote: canVote
//    }
//    return person
//}

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => `Hello, my name is ${ this.name }`;
}


// The above logs the name of the constructor function when it prints, below doesn't

function Person (name, age) {
    let myobj = {
        name: name,
        age: age,
        canVote: age >= 18,
        greeting: () => `Hello, my name is ${ this.name}`;
    }
    return myobj;
}

person1 = new Person('Macy', 24)
let troy = new Person ('Troy', 12)

console.log(person1);

// Instances of a Person object
let macyJones = new Person ('Macy', 24);
let sseth = new Person ('Seth', 54);


console.log( sseth greeting())

//  Constructor function for Arrays
function Array (item1, item2, item3) {
    this.items = {
        0: item1,
        1: item2,
        2: item3
    }
}

let myList = [1, 2, 3];