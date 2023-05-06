// expose.js

// Variable for selecting which horn to pick
const hornSelect = document.getElementById("horn-select");


// Variable for image of horn to pick
const hornImage = document.querySelector("section img");


// Variable for audio of horn to pick
const hornAudio = document.querySelector("section audio");

// Variable for audio slider
const slider = document.querySelector("section div input");
const sliderImg = document.querySelector("section div img");


// Variable for button to play sound
const soundButton = document.querySelector("section button");


// Variables for horn images
const airHornIcon = new Image();
airHornIcon.src = "./assets/images/air-horn.svg";

const carHornIcon = new Image();
carHornIcon.src = "./assets/images/car-horn.svg";

const partyHornIcon = new Image();
partyHornIcon.src = "./assets/images/party-horn.svg";


// Variables for horn images
const volumeLevel0 = new Image();
volumeLevel0.src = "./assets/icons/volume-level-0.svg";

const volumeLevel1 = new Image();
volumeLevel1.src = "./assets/icons/volume-level-1.svg";

const volumeLevel2 = new Image();
volumeLevel2.src = "./assets/icons/volume-level-2.svg";

const volumeLevel3 = new Image();
volumeLevel3.src = "./assets/icons/volume-level-3.svg";


// Variables for horn audios
const airHornAudio = new Audio();
airHornAudio.src = "./assets/audio/air-horn.mp3";

const carHornAudio = new Audio();
carHornAudio.src = "./assets/audio/car-horn.mp3"

const partyHornAudio = new Audio();
partyHornAudio.src = "./assets/audio/party-horn.mp3"


// Variable for Confetti
const jsConfetti = new JSConfetti();


window.addEventListener('DOMContentLoaded', init);



function init() {
  hornSelect.addEventListener(
    "change",
    () => {
      if (hornSelect.value == "air-horn") {
        hornImage.src = airHornIcon.src;
        hornAudio.src = airHornAudio.src;
      } else if (hornSelect.value == "car-horn") {
        hornImage.src = carHornIcon.src;
        hornAudio.src = carHornAudio.src;
      } else if (hornSelect.value == "party-horn") {
        hornImage.src = partyHornIcon.src;
        hornAudio.src = partyHornAudio.src;
      }
    }
  );

  slider.addEventListener(
    "input",
    () => {
      hornAudio.volume = slider.value / 100;
      if (slider.value == 0) {
        sliderImg.src = volumeLevel0.src;
      } else if (slider.value >= 1 && slider.value < 33) {
        sliderImg.src = volumeLevel1.src;
      } else if (slider.value >= 33 && slider.value < 67) {
        sliderImg.src = volumeLevel2.src;
      } else if (slider.value >= 67) {
        sliderImg.src = volumeLevel3.src;
      }
    }
  );

  soundButton.addEventListener(
    "click",
    () => {
      hornAudio.play();
      if (hornSelect.value == "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  )
}