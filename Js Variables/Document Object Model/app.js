
// let inputElement = document.querySelector('input');
// let inputValue = inputElement.value;
// console.log(inputValue);
// console.log(inputElement);


function alertONClick(){
        let inputElement = document.querySelector('#input1');
        let inputValue = inputElement.value;
        console.log(inputValue);
        console.log(inputElement);
        let headingElement = document.querySelector('h1 span');
        console.log(headingElement);
        headingElement.innerHTML =inputValue;
            alert('The message has been sent on your given number')
}