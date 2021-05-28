const passingMarks = 50;

function check(){
   let englishMarks =parseInt(document.querySelector('#english').value);
   let mathMarks =parseInt(document.querySelector('#math').value);

   let isEnglishPass = englishMarks >= passingMarks;
   let isMathPass = mathMarks >= passingMarks;

    let isExamPass = isEnglishPass && isMathPass;
   alert(isExamPass); 
}

let x = 5, y = 8;
let f= x<=y;
let a =4, b= 1;
let e= a<= b;
 let istrue = a && e;
 console.log(istrue);

 



