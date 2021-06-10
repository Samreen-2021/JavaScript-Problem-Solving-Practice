
let element = document.getElementsByClassName("div-class")[0];
document.getElementsByClassName("div-class")[0].className="Changed-class";

document.getElementsByClassName("Changed-class")[0].style.border="blue solid 20px";
document.getElementsByClassName("Changed-class")[0].style.color="red";
document.getElementsByClassName("Changed-class")[0].innerHTML ="This is the added text using JS DOM";

console.log(element);


