// Create a variable my_num and assign it a number. Convert my_num into a string using a toString() method

let a = 87;
let b = a.toString();
console.log(b);
console.log(typeof b);   // string


// Create a variable myString and assign it a value of "2.3". Now create 2 more new variables. One integer and assign it a value of parsInt(myString) and another float and assign it a value of parseFloat(myString). Check the value and type of integer and float in the console. 

let myString;
myString = "2.3";


let integer;
integer = parseInt(myString);
console.log(integer);
console.log(typeof integer);

let float;
float = parseFloat(myString);
console.log(float);
console.log(typeof float);
