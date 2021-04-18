
// When user click button the function, handleClick, is carried out.


// Detecting Button pressed
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}


//Detecting Keyboard pressed

addEventListener("keypress", function(event) {
  // Passes event that of key that was pressed, which is sent to makeSound to play the sound.
  makeSound(event.key);
  buttonAnimation(buttonInnerHTML);
})


// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();

function makeSound(key) {
  switch (key) { // Person different actions based on different condition.
    case "w":     // First case if buttonInnerHTML = "w"
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;    // Tells code to exist the switch statement.

    case "a":     // Second case if buttonInnerHTML = "a"
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:      // If none of the case occurs, the default is triggered.
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
