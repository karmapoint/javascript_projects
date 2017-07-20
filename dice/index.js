// SOUND CONTROLS

let sound = true;

let label = document.querySelector(".label");
let box = document.querySelector(".switch");
function toggleLabel(e) {
  if (label.innerHTML === "Sound OFF") {
      label.innerHTML = "Sound ON";
      sound = true;
    }
    else {
      label.innerHTML = "Sound OFF";
      sound = false;
    }
}
  box.addEventListener("change", toggleLabel, false);





// Rolling the dice

function rollDice(e){
  const audio = document.querySelector('#rollSound');
  audio.currentTime = 0;
  if (sound) {
    audio.play();
  }
}

const rollButton = document.querySelector('#roll');
rollButton.addEventListener('click', rollDice, false);




// Toggle credit modals

function toggleCredits(e){
  const settings = document.querySelector('.settings');
  settings.classList.add('hidden');
  const credits = document.querySelector('.credits');
  credits.classList.toggle('hidden');
}


const creditsButton = document.querySelector("#creditsBtn");
creditsButton.addEventListener('click', toggleCredits, false);

const creditsCloseButton = document.querySelector(".creditClose");
creditsCloseButton.addEventListener('click', toggleCredits, false);




// Toggle settings modals

function toggleSettings(e){
  const credits = document.querySelector('.credits');
  credits.classList.add('hidden');
  const settings = document.querySelector('.settings');
  settings.classList.toggle('hidden');
}

const settingsButton = document.querySelector("#settingsBtn");
settingsButton.addEventListener('click', toggleSettings, false);

const settingsCloseButton = document.querySelector(".settingClose");
settingsCloseButton.addEventListener('click', toggleSettings, false);
