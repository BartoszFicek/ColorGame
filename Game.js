var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var displayColor = document.querySelector("#displayColor");
displayColor.textContent=pickedColor;
var message = document.querySelector("#message");


for(var i=0; i<squares.length;i++){
   //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeber to squares
    squares[i].addEventListener("click",function(){

        var clickedColor =this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {   
            message.textContent="Correct";
            changeColors(pickedColor);
        }    
        else
        {
            message.textContent="Try Again"
            this.style.backgroundColor="#232323";
            
        }

    })
}

function changeColors(color){
    for(var i=0; i<squares.length;i++){
    squares[i].style.backgroundColor=color;
    }
}