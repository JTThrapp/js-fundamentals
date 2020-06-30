// For-in-loop will return to you the KEYS of some collection
// For-of-loops only work for collections that are ordered, have an iterable key

let grades = ["A", "F", "F-", "C++", "B+" ];
for (x of grades){
    console.log(x);
}

 grades = {
    first_period: "A",
    second_period: "B",
    third_period: "C"
}

for (x of grades){
    console.log(x);
}