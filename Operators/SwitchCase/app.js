// JavaScript program to print the grade of person using the following conditions:

// ->A if percentage >85

// ->A- if %<=85 and >80

// ->B if %<=80 and >70

// ->C if %<=70 and >60

// ->D if %<=60 and >40

// ->E if %<=40 and also should print 'candidate failed' if %<=35

function checkGrade(){
const percent = parseInt(document.querySelector('input').value);
switch(true){
    case percent<=35:
       alert("candidate failed");
    break;
  // ->E if %<=40
    case percent<=40:
        alert("grade E");
    break;
// ->D if %<=60 and >40
    case percent<=60:
        alert("grade D");
    break;
// ->C if %<=70 and >60
    case percent<=70:
        alert("grade C");
    break;
// ->B if %<=80 and >70
    case percent<=80:
        alert("grade B");
    break;
// ->A- if %<=85 and >80
    case percent<=85:
        alert("grade A-");
    break;
// ->A if percentage >85
    case percent >85:
        alert("grade A");
    break;
    default:
        alert("default Condition");
}
}
checkGrade();

    
        


      



