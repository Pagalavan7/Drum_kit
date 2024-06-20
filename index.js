const drum = document.querySelectorAll(".drum");

drum.forEach(function (x) {
  x.onclick = function () {
    selectDrum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  };
});
document.onkeypress = function (event) {
  selectDrum(event.key);
  buttonAnimation(event.key);
};
function selectDrum(drum) {
  switch (drum) {
    case "w":
      playSound("./sounds/tom-1.mp3");
      addAnimation(drum);
      break;
    case "a":
      playSound("./sounds/tom-2.mp3");
      addAnimation(drum);
      break;
    case "s":
      playSound("./sounds/tom-3.mp3");
      addAnimation(drum);
      break;
    case "d":
      playSound("./sounds/tom-4.mp3");
      addAnimation(drum);
      break;
    case "j":
      playSound("./sounds/snare.mp3");
      addAnimation(drum);
      break;
    case "k":
      playSound("./sounds/crash.mp3");
      addAnimation(drum);
      break;
    case "l":
      playSound("./sounds/kick-bass.mp3");
      addAnimation(drum);
      break;
  }
}
function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}
function addAnimation(drum) {
  document.querySelector("." + drum).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + drum).classList.remove("pressed");
  }, 100);
}
