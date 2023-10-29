const divClass = document.getElementsByClassName("square");
const Go = document.getElementById("StartBtn");

//Random number generator - tested, generates a random number from 1 to 6 - not sure about how it's passing the number out?
function randomSix() {
    let divNo = Math.floor(Math.random() * 6) + 1;
    console.log(divNo); //remove later
    }

//Deactivate all the divs: untested
function deactivate() {
divClass.style.backgroundColor = 'blue';
divClass.removeEventListener('click', function(){});//the function needs to be the same as the function name called in Active - this might also need to be applied to divActive after click
}


//Activate one div - untested and needs the click functionality added
function activate() {
    randomSix();
    const divActive = document.getElementById(divNo);
    divActive.style.backgroundColor = 'red';
    divActive.addEventListener("click", function(){ //add function here
        
    });
}

//Timer
function timer() {
    let countdown = 60
    while (countdown > 0){
     console.log(countdown);
     countdown--;
    }
    console.log("Game over");     
}

//Programm to run here:
//alert("Success") - testing js linked to html, it is... but the below doesn't work
// startBtn.addEventListener("click", activate());
Go.addEventListener("click", function(){alert("go")}); //test code
