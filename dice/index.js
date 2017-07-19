function rollDice(e){
  const audio = document.querySelector('#rollSound');
  audio.currentTime = 0;
  audio.play();
}

const rollButton = document.querySelector('#roll');
rollButton.addEventListener('click', rollDice, false);
