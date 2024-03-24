document.getElementById("askNameFromUser").onclick = function(){
    let firstName = prompt("Please Enter your name")
    let lastName = prompt(" Please Enter your lastName ")
    // console.log('firstName',firstName)
    // console.log('lastName',lastName)
    let fullName = firstName + " " + lastName
    console.log(fullName)
}