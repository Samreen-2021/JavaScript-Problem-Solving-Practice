// Declare a variable using let inside a function. Add that same variable in another function and see what happens.

function sumVariables(){
    let a= 3;
    let b = 4;
    let sum = a + b;
    console.log(a);
    console.log(sum);
}
sumVariables();

function produvtVariables(){
    let a= 3;
    let c = 4;
    let sum = a * c;
    console.log(a);
    console.log(sum);
}
produvtVariables();


// Now declare a variable using var in a block and try reassigning the value to that variable in another block and see if it throws an error or not.

function diffVariables(){
    var x= 8;
    let y = 4;
    let diff = x - y;
    console.log("the var x is  ", x);
    console.log(diff);
}
diffVariables();

function divVariables(){
    var x= 8;
    let y = 4;
    let div = x / y;
    console.log(x);
    console.log(div);
}
divVariables();

// it is not showing error. check in console

// Create a global variable and try using that variable in another function and see if you're able to access that variable.

let f = 24

{
    let z= 6
    let remain = f % z;
    console.log(remain);
}



