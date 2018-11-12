var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add the initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// First we need to grab the color of the clicked square
		var clickedColor = this.style.backgroundColor;
		// Then we are going to compare it to the picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
	// change all of the colors to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}