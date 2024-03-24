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


// document.getElementById("love").onclick = function(){
//     let age = +prompt("Enter your age");
//     if(age>=18)
//     {
//          let weight = +prompt("enter your weight")
//     }
//     if(weight<=65)
//     {
//         console.log("you are young man")
//     }
//     else{
//         console.log("you are fat man")
//     }
// }


//     else
//      {
//         console.log("you are baby")

//         }
    


document.getElementById("love").onclick = function(){
    let age = +prompt("your age?")
    
    if(age >= 18){
        let weight = +prompt("your weight")
    
        if (weight<=70){
            console.log("your are smart man")
        }
        else{
            console.log("you are a fat man")
        }
    }
    else{
        console.log("you are a baby")
    }
    }
    


    

