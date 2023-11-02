const divArray = document.getElementsByClassName("square");
const goPlay = document.getElementById("StartBtn");
let gameScore = 0;
let rndmChk = 6;

//Random number generator - tested, generates a random number from 1 to 6 - not sure about how it's passing the number out?

function randomSix() {
    let divNo = Math.floor(Math.random() * 6);
  /*   console.log(divNo); //remove later */
  return divNo
    }

//Deactivate all the divs: untested
function deactivate() {
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].style.backgroundColor = 'blue';
        // divArray[i].removeEventListener('click', function(){});
    }    
//the function needs to be the same as the function name called in Active - this might also need to be applied to divActive after click
}

//Activate one div, on click: increment the game score, deactivate ALL divs, then activate new div
function activate() {
    i = randomSix();
    console.log('random '+ i);
    if (i = rndmChk) {
        i=randomSix();
        console.log('check ' + i)
        };
    divArray[i].style.backgroundColor = 'red';
    divArray[i].addEventListener("click", function(){
        deactivate()
        gameScore++;
        console.log("Gamescore " + gameScore);
        divArray[i].addEventListener("mouseUp",   activate());
    });
    
}

// console timer - v2

function startCountdown(seconds) {
    let counter = 15;
  
    const interval = setInterval(() => {
      console.log("counter" + counter);
      counter--;
  
      if (counter < 0) {
        clearInterval(interval);
        alert('Game Over! Your score is: ' + gameScore);
      }
    }, 1000);
  }
  


//Programm to run here:
goPlay.addEventListener("click", function(){
    startCountdown(15);
    gameScore = 0;
    activate();
    // console.log('Game started');
    });




// Trying to figure out how to change the color of the squares?

// var colors =["blue", "purple", "green", "red", "rgb(250, 175, 72)"];

// var square =document.querySelectorAll(".square");
 
// Array.prototype.forEach.call(square, function(square) {
//   square.addEventListener("click", function() {
//     var colorNum = Math.floor(Math.random() * colors.length);
//     square.style['background-color'] = colors[colorNum];
//   });
// }); 