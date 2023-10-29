const divClass = document.getElementsByClassName("square");
// let divNo = 1;

//Random number generator - tested, generates a random number from 1 to 6 - not sure about how it's passing the number out?
function randomSix (divNo) {
 return Math.floor(Math.random() * 6) + 1;
//  console.log(DivNo)
}

//Activate one div - untested and needs the click functionality added
function activate () {
    randomSix
    const divActive = document.getElementById(divNo);
    divActive.style.backgroundColor = 'red';
    divActive.addEventListener('click', function(){
        
    });
}


//Timer

let countdown = 60

while (countdown > 0){
 console.log(countdown)
 countdown--
}

console.log("Game over")
   