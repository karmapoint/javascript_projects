// Sound settings

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


// Setup Dice objects and activeDice array

function Die(name, type, color){
  this.name = name;
  this.type = type;
  this.color = color;
  this.value = "";
}

let counter = 0;

const activeDice = [];


// Add and remove dice
let diceContainer = document.querySelector('#diceContainer');
let diceSettings = document.getElementsByClassName('delete');
let diceSave = document.getElementsByClassName('save');

function setupDelete() {
  for (let i = 0; i < diceSettings.length ; i++) {
    diceSettings[i].onclick = function(e){
      let child = e.target.parentNode;
      diceContainer.removeChild(child);
      for (let j = 0; j < activeDice.length; j++) {
        if (activeDice[j].name === child.id) {
          activeDice.splice(j, 1);
          render();
        }
      }
    };
  }
}

function setupSave() {
  for (var i = 0; i < diceSettings.length ; i++) {
    diceSave[i].onclick = saveDie;
  }
}


let diceCode = `
  <select class="color">
    <option selected disabled value="">Color of Die</option>
    <option value="white">white</option>
    <option value="blue">blue</option>
    <option value="red">red</option>
    <option value="yellow">yellow</option>
  </select>
  <select class="type">
    <option selected disabled value="">Type of Die</option>
    <option value="d4">d4</option>
    <option value="d6">d6</option>
    <option value="d8">d8</option>
    <option value="d10">d10</option>
    <option value="d12">d12</option>
    <option value="d20">d20</option>
  </select>

  <button class="save">SAVE</button>
  <div class="description hidden"></div>
  <i class="fa fa-times delete" aria-hidden="true"></i><br>
  <div class="error"></div>`;

let addDie = document.querySelector(".add");

function addDieToSettings(e){
  let newDie = document.createElement("div");
  newDie.className = "dieSelects";
  newDie.id = `die${counter}`;
  counter ++;
  newDie.innerHTML = diceCode;
  diceContainer.appendChild(newDie);
  setupDelete();
  setupSave();
}

addDie.addEventListener('click', addDieToSettings, false);




function saveDie(e){
  e.preventDefault();
  let currentDieName = e.target.parentNode.id;

  let currentDieType = document.querySelector(`#${currentDieName} .type`);
  let currentType = currentDieType.options[currentDieType.selectedIndex].value;

  let currentDieColor = document.querySelector(`#${currentDieName} .color`);
  let currentColor = currentDieColor.options[currentDieColor.selectedIndex].value;

  if (currentType === "" || currentColor === "") {
      saveError(e);
  } else {
      clearError(e);
      let saveButton = document.querySelector(`#${currentDieName} .save`);

      // Hide save buttton and select fields
      saveButton.classList.add("hidden");
      currentDieType.classList.add('hidden');
      currentDieColor.classList.add('hidden');

      // Show saved die attributes and close button
      let description = document.querySelector(`#${currentDieName} .description`);

      description.innerHTML = `${currentColor} ${currentType}`;
      description.classList.remove('hidden');
      let newDie = new Die(`${currentDieName}`, `${currentType}`, `${currentColor}`);

      // add saved die into the activeDice array
      activeDice.push(newDie);
      render();
    }
}

function saveError(e){
  let message = "<p class='error'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Must select die type and color!</p>";
  let container = document.querySelector(`#${e.target.parentNode.id} .error`);
  container.innerHTML = message;
}

function clearError(e){
  let container = document.querySelector(`#${e.target.parentNode.id} .error`);
  container.innerHTML = "";
}


// ----------------------------------------------------

// Rendering dice

function render(){
  let results = document.querySelector(".results");
  results.innerHTML = "";

  // check for dice
  if (activeDice.length === 0){
    results.innerHTML = "<h3>No Dice!</h3><p>Add dice in the settings.";
  } else {
    results.innerHTML = "";
    // loop through activeDice and render each
    for (var i = 0; i < activeDice.length; i++) {
      results.innerHTML += `<div class='result'><div class='iconHolder ${activeDice[i].color} ${activeDice[i].type}'> ${activeDice[i].value} </div></div>`;
    }
  }
}


// ----------------------------------------------------

// Rolling the dice

function updateValues(){
  for (var i = 0; i < activeDice.length; i++) {
    let type = activeDice[i].type;
    let max = parseInt(type.substr(1));
    let val = Math.floor(Math.random() * max ) + 1;
    activeDice[i].value = val;
  }
}

function clearValues(){
  for (var i = 0; i < activeDice.length; i++) {
        activeDice[i].value = "";
  }
}

let audioDelay = 2000;

function checkPlayAudio(){
  const audio = document.querySelector('#rollSound');
  audio.currentTime = 0;
  if (sound) {
    audioDelay = 2000;
    audio.play();
  } else {
    audioDelay = 500;
  }
}

function hideModals() {
  const credits = document.querySelector('.credits');
  credits.classList.add('hidden');
  const settings = document.querySelector('.settings');
  settings.classList.add('hidden');
}

function rollDice(e){
  clearValues();
  render();
  checkPlayAudio();
  setTimeout(function() {
    updateValues();
    hideModals();
    render();
  }, audioDelay);

}

const rollButton = document.querySelector('#roll');
rollButton.addEventListener('click', rollDice, false);
