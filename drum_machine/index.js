

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

function playClickedSample(e) {
  const identifier = e.target.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${identifier}"]`);
  const key = document.querySelector(`.key[data-key="${identifier}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  //this is key because addEventListener was called on key below
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('touchstart click', playClickedSample));

window.addEventListener('keydown', playSample);

// window.addEventListener('click', playClickedSample);
