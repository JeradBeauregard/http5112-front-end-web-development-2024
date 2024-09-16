var firstName ="Jerad";

if (firstName == "Jerad"){
    alert("Hello Jerad");
}

if (firstName === "Jerad" || firstName === "your mom"){
    alert("Hello Jerad or your mom");
}

var userInput = confirm("Are we having fun yet");
console.log(userInput);

if(userInput === true){
    alert("You said yes!");
}
    else{
        alert("Why didn't you say yes?");
    }

var stopLight = prompt("What Colour is the light?");

switch(stopLight){
    case "Green" || "green":
            alert("GO!")
            break;
    
    case "Yellow":
            alert("Slow!")
            break;
    
    case "Red" :
            alert("STOP!")
            break;

    default:
            alert("Get out of the car")
}

// if (the thing you want to compare){
// the output you want to execute}