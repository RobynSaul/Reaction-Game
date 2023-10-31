const divArray = document.getElementsByClassName("square");
const goPlay = document.getElementById("StartBtn");

//Random number generator - tested, generates a random number from 1 to 6 - not sure about how it's passing the number out?
function randomSix() {
    let divNo = Math.floor(Math.random() * 6);
  /*   console.log(divNo); //remove later */
  return divNo
    }

//Deactivate all the divs: untested
function deactivate() {
divClass.style.backgroundColor = 'blue';
divClass.removeEventListener('click', function(){});//the function needs to be the same as the function name called in Active - this might also need to be applied to divActive after click
}


//Activate one div - untested and needs the click functionality added
function activate() {
    i = randomSix();
    divArray[i].style.backgroundColor = 'red';
    // divArray[i].addEventListener("click", function(){ //add function here
        
    // });
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

// console timer

function startCountdown(seconds) {
    let counter = seconds;
  
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
  
      if (counter < 0) {
        clearInterval(interval)
        console.log('Game Over!')
      }
    }, 1000);
  }
  
//   startCountdown(30)


//Programm to run here:
goPlay.addEventListener("click", function(){
    activate();
    console.log('start pressed');
    }); //test code




// Trying to figure out how to change the color of the squares?

// var colors =["blue", "purple", "green", "red", "rgb(250, 175, 72)"];

// var square =document.querySelectorAll(".square");
 
// Array.prototype.forEach.call(square, function(square) {
//   square.addEventListener("click", function() {
//     var colorNum = Math.floor(Math.random() * colors.length);
//     square.style['background-color'] = colors[colorNum];
//   });
// });
