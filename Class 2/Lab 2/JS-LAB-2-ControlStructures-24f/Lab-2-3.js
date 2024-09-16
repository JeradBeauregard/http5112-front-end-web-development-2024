//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userInput
var emailAdress


//==== LOGIC =============

userInput = confirm("Would you like to join our email list?");
console.log(userInput);

if (userInput === true){
 emailAdress = prompt("Please enter your email adress: ", "me@example.ca");
    
            if (emailAdress === "" || emailAdress === "me@example.ca" || emailAdress === null){
                alert("Thank you, but your email was not valid.");
            }
            else{ 
            alert("Thank you, our next newsletter will be sent to " + emailAdress);
            }
}

else{
    alert("Thank you, we will not bother you again.");
}






