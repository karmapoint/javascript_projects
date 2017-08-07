let colors = generateRandomColors(6);
console.log(colors);

let squares = document.getElementsByClassName('square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#targetColor");
let messageBar = document.querySelector("#bar");
colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageBar.textContent = "Correct";
      changeColors(pickedColor);
      let top = document.querySelector("header");
      top.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#333333";
      messageBar.textContent = "Try again";
    }
  });
}


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
