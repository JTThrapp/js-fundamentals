// For-in-loop will return to you the KEYS of some collection
// For-of-loops only work for collections that are ordered, have an iterable key

let student = {
    name: "Gloria",
    awesome: true,
    specialty: "Javascript",
    week: 1
};

console.log(student.name);

for ( x in student) {
    console.log(x);
}


let grades = ["A", "F", "F-", "C++", "B+" ];
for (x in grades){
    console.log(x);
}

// For-in-loop will return to you the KEYS of some collection
// For-of-loops only work for collections that are ordered, have an iterable key