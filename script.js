document.getElementById("askNameFromUser").onclick = function(){
    let firstName = prompt("Please Enter your name")
    let lastName = prompt(" Please Enter your lastName ")
    // console.log('firstName',firstName)
    // console.log('lastName',lastName)
    let fullName = firstName + " " + lastName
    console.log(fullName)
}


document.getElementById("Comaparsionoperator").onclick = function(){
    let num1 = 10;
    let num2 = 14;
    
    if(num1 == num2){
        console.log("yes , your condition is true")
    }
    else{
        console.log("No , your condition is false ")
    }
}