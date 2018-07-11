var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.querySelector("#displayColor");
displayColor.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");
var modeOn = 6;

easy.addEventListener("click", () => {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  modeOn = 3;
  colors = generateColors(3);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
});

hard.addEventListener("click", () => {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  colors = generateColors(6);
  modeOn = 6;
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
});

reset.addEventListener("click", () => {
  message.textContent = "";
  reset.textContent = "New Colors";
  colors = generateColors(modeOn);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeber to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      reset.textContent = "Play again?";
      message.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      message.textContent = "Not this";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    //pick red 0-255
    var r = Math.floor(Math.random() * 256);
    //pick green 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue 0-255
    var b = Math.floor(Math.random() * 256);
    arr.push("rgb(" + r + ", " + g + ", " + b + ")");
  }

  return arr;
}
