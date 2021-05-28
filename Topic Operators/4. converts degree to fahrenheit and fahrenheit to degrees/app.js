// Write a program that converts degree to fahrenheit and fahrenheit to degrees.


// let c= 10;
// let f = (1.8 * c) + 32; 
// console.log(f);
// // when temp is 20 degree celcius

// c = 20;
// f = (1.8 * c) + 32; 
// console.log(f);

function tempConvert(){

let celciusTemp = document.querySelector('input').value;
let C = parseInt(celciusTemp);
let F= (1.8 * C) + 32;
alert("Temperature in Farenheit is " + (F));
}
