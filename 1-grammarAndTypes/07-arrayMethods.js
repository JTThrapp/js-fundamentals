let coffee = ['espresso', 'nitro cold brew', 'americano', 'cappuccino', 'frappuccino'];

console.log(coffee[2]);

let veryBest = coffee.pop();
console.log (veryBest);

veryBest = coffee.pop();
console.log (veryBest);

console.log(coffee);

// stack (LIFO) vs. Queue (FIFO)

coffee.push('latte')

console.log(coffee);

// Stack (LIFO) stack of plates/pancakes
// Array.pop()   [can't put anything in parenthesis, removes last item, returns removed item]
// Array.push(<item>)

// Queue (FIFO) line for a roller coaster
// Array.shift();    [can't put anything in parenthesis, removes first item, returns removed item]
// Array.unshift(<item>)  [can add multiple items at once]

let firstItem = coffee.shift(1);
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);


//.indexOf tells you index for the item you type
// if there are repeating occurrences, it will return the first one
console.log(coffee.indexOf('americano'));

coffee.forEach((item) => {
    console.log(item.length)
});

function forEach (callbackfn) {
    for(let i=0; i<coffee.length; i++) {
        itemToUse = coffee[i];
        index = i;
        currentArray = coffee;

        callbackfn(itemToUse, index, currentArray);
    }
}

//Call back function 

forEach((item, index, myArray) => {
    console.log (item, index, myArray)
})