// SOUND CONTROLS

let sound = true;

let label = document.querySelector(".label");
let box = document.querySelector(".switch");
function toggleLabel(e) {
  if (label.innerHTML === "Sound OFF") {
      label.innerHTML = "Sound ON &nbsp; ";
      sound = true;
    }
    else {
      label.innerHTML = "Sound OFF";
      sound = false;
    }
}
  box.addEventListener("change", toggleLabel, false);


// ----------------------------------------------------

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



// ----------------------------------------------------


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


// ----------------------------------------------------


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



// ----------------------------------------------------


// Add and remove dice
let diceContainer = document.querySelector('#diceContainer');
let diceSettings = document.getElementsByClassName('delete');

function setupDelete() {
  for (var i = 0; i < diceSettings.length ; i++) {
    diceSettings[i].onclick = function(e){
      let child = e.target.parentNode;
      diceContainer.removeChild(child);
    };
  }
}

setupDelete();

let diceCode = `
  <select class="type">
    <option selected disabled value="">Type of Die</option>
    <option value="d4">d4</option>
    <option value="d6">d6</option>
    <option value="d8">d8</option>
    <option value="d10">d10</option>
    <option value="d12">d12</option>
    <option value="d20">d20</option>
  </select>
  <select class="color">
    <option selected disabled value="">Color of Die</option>
    <option value="white">white</option>
    <option value="blue">blue</option>
    <option value="red">red</option>
    <option value="yellow">yellow</option>
  </select>
  <i class="fa fa-times delete" aria-hidden="true"></i>`;

let addDie = document.querySelector(".controls button");
function addDieToSettings(e){
  let newDie = document.createElement("div");
  newDie.className = "dieSelects";
  newDie.id = `die${diceSettings.length}`;
  newDie.innerHTML = diceCode;
  diceContainer.appendChild(newDie);
  setupDelete();
}

addDie.addEventListener('click', addDieToSettings, false);
