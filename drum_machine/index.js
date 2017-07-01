

function playSample(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if(!audio) return; //stops
  audio.currentTime = 0; //rewind each time
  audio.play();
  //console.log(key);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  //this is key because addEventListener was called on key below
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSample);
window.addEventListener('click', playSample);
