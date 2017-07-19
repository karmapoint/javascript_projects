function rollDice(e){
  const audio = document.querySelector('#rollSound');
  audio.currentTime = 0;
  audio.play();
}

function toggleCredits(e){
  const settings = document.querySelector('.settings');
  settings.classList.add('hidden');
  const credits = document.querySelector('.credits');
  credits.classList.toggle('hidden');
}

function toggleSettings(e){
  const credits = document.querySelector('.credits');
  credits.classList.add('hidden');
  const settings = document.querySelector('.settings');
  settings.classList.toggle('hidden');
}

const rollButton = document.querySelector('#roll');
rollButton.addEventListener('click', rollDice, false);

const creditsButton = document.querySelector("#creditsBtn");
creditsButton.addEventListener('click', toggleCredits, false);

const creditsCloseButton = document.querySelector(".creditClose");
creditsCloseButton.addEventListener('click', toggleCredits, false);

const settingsButton = document.querySelector("#settingsBtn");
settingsButton.addEventListener('click', toggleSettings, false);

const settingsCloseButton = document.querySelector(".settingClose");
settingsCloseButton.addEventListener('click', toggleSettings, false);
