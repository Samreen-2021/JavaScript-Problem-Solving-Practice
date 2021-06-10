// Use QuerySelector and repeat the same steps as above
let element = document.querySelector('.div-class').className ="Changed-class";

document.querySelector('.Changed-class').style.border="blue solid 20px";
document.querySelector('.Changed-class').style.color="red";
document.querySelector('.Changed-class').innerHTML ="This is the added text using JS DOM";

console.log(element);


