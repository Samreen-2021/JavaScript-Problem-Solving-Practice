// Use filter function to filter an array containing values of ages of [40, 56, 80, 90, 100, 101, 102, 23, 22] Use it to filter the ages greater than or equal to 40.

let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];
console.log(ages);
let b= ages.filter(check);
console.log(b);

function check(age){
    return age >= 40;
}