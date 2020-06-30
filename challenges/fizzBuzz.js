/*
​
- write a for loop running between the numbers 0 - 100
- for multiples of 3, instead of the number, console.log "Fizz"
- for multiples of 5 console.log "Buzz";
- for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
- for any other number, console.log the value
​
*/




for (i=0; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0){console.log("fizzbuzz");} else
    if (i % 3 === 0){console.log("fizz");} else
    if (i % 5 === 0){console.log("buzz");} 
    else {console.log(i)}
}

