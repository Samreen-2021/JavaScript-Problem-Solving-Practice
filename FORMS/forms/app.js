 document.querySelector('button').addEventListener('onclick',myFunction);
function myFunction(){
    const email = document.querySelector("#input1").value;
    const password = document.querySelector("#input2").value;

    if (email == "" || password == ""){
        alert("enter required fields")
    }
    else{
        alert("logged in successfully")
    }

}
