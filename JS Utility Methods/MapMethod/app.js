/*A-- Suppose you’re given this array: let agesArray = [12,45,56,4]. Use map method to print all of the values and their indices. After that use map method to make a new array from the same array by multiplying each age value by 10.*/
let agesArray = [12,45,56,4];
let b = agesArray.map(printfunc);
function printfunc(element, index){
   console.log(element);
   console.log(index); 
}

let c = agesArray.map(multiplyfunc);
function multiplyfunc(element){
    return element * 10;
}
console.log(c);


/*B -- Suppose you’re given an array of objects:*/

let usersData = [

{
name: "Saeed", lastName: "Ahmad", school: "UoT",
profession: 'engineer',},

{

name: 'Ali',

lastName: "Khan",

school: 'TUM',

profession: 'researcher',

}

];
let d = usersData.map(printTable)

function printTable(i){
    console.log(i.name +" "+i.lastName +" "+i.school +" "+i.profession +" ");

 }
