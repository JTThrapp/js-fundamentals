let num = 6; 

// ternary   (condition) ? (true) : (false)

(num > 0)
    ? console.log('yes')
    : console.log('nah')

// exactly this below
if(num > 0) {
    console.log('yes');
} else {
    console.log('nah')
}

// try writing the ifelse statement about age, but using ternarys
let age = 50;
(age >= 25)
    ? console.log('Yay, you can rent a car!')
    : (age >= 21)
        ? console.log('Yay you can drink')
        : (age >= 18)
            ? console.log('Yay you can vote')
            : console.log('Sorry about it');