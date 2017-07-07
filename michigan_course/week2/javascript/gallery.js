
function upDate(thumb){
  var box = document.getElementById("image");
  box.style.backgroundImage = `url(${thumb.src})`;
  box.innerHTML = thumb.alt;
}

function unDo(){
  var box = document.getElementById("image");
  box.style.backgroundImage = `url('')`;
  box.innerHTML = "Hover over an image below to display here.";
}
