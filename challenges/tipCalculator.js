/*
Make a tip calculator using a function
That takes in the BILL (number)
Have it RETURN the TIP (number)
Capture that returned TIP in a VARIABLE
Print that variable
*/

let calculateTip = (bill) => 
     ["10%: " + bill * 0.1, "15%: " + bill * 0.15, "20%: " + bill * 0.2];


let nightOut = [234.45];

let tip = calculateTip(nightOut);
console.log(tip)

