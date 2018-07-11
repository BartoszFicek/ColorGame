var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.querySelector("#displayColor");
displayColor.textContent = pickedColor;
var message = document.querySelector("#message");

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeber to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct";
      changeColors(pickedColor);
    } else {
      message.textContent = "Try Again";
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
