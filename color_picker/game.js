let number = 6;
let colors = generateRandomColors(number);
let squares = document.getElementsByClassName('square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#targetColor");
let messageBar = document.querySelector(".middle");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");


/*  SETUP BOARD */
colorDisplay.textContent = pickedColor;

function setupBoard(){
  colors = generateRandomColors(number);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  let top = document.querySelector("header");
  top.style.backgroundColor = "steelblue";
  messageBar.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageBar.textContent = "Correct";
        changeColors(pickedColor);

        top.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#333333";
        messageBar.textContent = "Try again";
      }
    });
  }
}

setupBoard();

resetButton.addEventListener("click", function(){
  setupBoard();
});

easyBtn.addEventListener("click", function(){
  number = 3;
  setupBoard();
  toggleEasy();
  toggleSquares();
});

hardBtn.addEventListener("click", function(){
  number = 6;
  setupBoard();
  toggleHard();
  toggleSquares();
});


function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function toggleEasy(){
  hardBtn.classList.remove("active");
  easyBtn.classList.add("active");
}
function toggleHard(){
  hardBtn.classList.add("active");
  easyBtn.classList.remove("active");
}

function toggleSquares(){
  let extras = document.querySelectorAll(".extra");
  for (var i = 0; i < extras.length; i++) {
    if (number === 3) {
      extras[i].classList.add("hidden");
    } else {
      extras[i].classList.remove("hidden");
    }
  }
}
