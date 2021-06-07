// A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’
let games = ["football", "hockey", "cricket", "tennis", "polo"]
for(let i = 1; i<games.length; i++){
    if(games[i]=="cricket"){
        console.log("Cricket exists");
    }
    else{
        console.log("Does not exist");
    }     
}

// B --- Write a forEach loop and attempt the same problem as above.
games.forEach(myFunction);

function myFunction(item, index) {
    if(games[index]=="cricket"){
    console.log("Cricket exists");
}
else{
    console.log("Does not exist");
} 
  
}

// C ---Write a for..of loop and attempt the same problem as above
for (index of games){ 
    if(games[index]=="cricket"){
    console.log("Cricket exists");
    }
    else{
    console.log("Does not exist");
    } 
}


