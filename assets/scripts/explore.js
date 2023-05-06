// explore.js

const synth = window.speechSynthesis;

const voiceSelect = document.getElementById("voice-select");

const inputText = document.getElementById("text-to-speak");

const button = document.querySelector("button");

const image = document.querySelector("img");

window.addEventListener('DOMContentLoaded', init);

function init() {


  setTimeout(() => {
    var voices = [];
    voices = synth.getVoices();
    console.log(voices);
    console.log(synth);


    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name}`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }

    button.addEventListener(
      "click", () => {

        console.log(voiceSelect.value);

        const utter = new SpeechSynthesisUtterance(inputText.value);

        for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === voiceSelect.value) {
            console.log(voices[i]);
            utter.voice = voices[i];
          }
        }

        utter.addEventListener("start", () => {
          image.src = "assets/images/smiling-open.png";
        })

        utter.addEventListener("end", () => {
          image.src = "assets/images/smiling.png";
        })

        synth.speak(utter);

      }
    );
  }, 1000);
}