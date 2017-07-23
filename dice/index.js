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

function Die(name, type, color){
  this.name = name;
  this.type = type;
  this.color = color;
}




// Add and remove dice
let diceContainer = document.querySelector('#diceContainer');
let diceSettings = document.getElementsByClassName('delete');
let diceSave = document.getElementsByClassName('save');

function setupDelete() {
  for (var i = 0; i < diceSettings.length ; i++) {
    diceSettings[i].onclick = function(e){
      let child = e.target.parentNode;
      diceContainer.removeChild(child);
      // !!!!!!----- Add functionality to remove from active dice
    };
  }
}

function setupSave() {
  for (var i = 0; i < diceSettings.length ; i++) {
    diceSave[i].onclick = saveDie;
  }
}


// Initial event listeners for defaul die
setupDelete();
setupSave();


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
  <button class="save">SAVE</button>
  <i class="fa fa-times delete" aria-hidden="true"></i>`;

let addDie = document.querySelector(".add");
function addDieToSettings(e){
  let newDie = document.createElement("div");
  newDie.className = "dieSelects";
  newDie.id = `die${diceSettings.length}`;
  newDie.innerHTML = diceCode;
  diceContainer.appendChild(newDie);
  setupDelete();
  setupSave();
}

addDie.addEventListener('click', addDieToSettings, false);

const activeDice = [];


function saveDie(e){
  e.preventDefault();
  let currentDieName = e.target.parentNode.id;

  let currentDieType = document.querySelector(`#${currentDieName} .type`);
  let currentType = currentDieType.options[currentDieType.selectedIndex].value;

  let currentDieColor = document.querySelector(`#${currentDieName} .color`);
  let currentColor = currentDieType.options[currentDieType.selectedIndex].value;

  if (currentType === "" || currentColor === "") {
      saveError();
  } else {
    console.log("save successful");
  };

  // create new die object
  // push die object into active Dice
  // hide save button
  // remove error messages
  // display close button
}

function saveError(){
  let message = "<p class='error'>Must select die type and color!</p>";
  console.log(message);

}
