// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//generate all new colors.
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array.
	pickedColor = pickColor();
	//change colorDisplay to match picked color.
	colorDisplay.textContent = pickedColor;
	//change colors of squares.
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}
	else{
	    squares[i].style.display = "none";	
	}
	}
});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
    //generate all new colors.
	colors = generateRandomColors(6);
	//pick a new random color from array.
	pickedColor = pickColor();
	//change colorDisplay to match picked color.
	colorDisplay.textContent = pickedColor;
	//change colors of squares.
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	    squares[i].style.display = "block";	
	}
});

resetButton.addEventListener("click",function(){
	//generate all new colors.
	colors = generateRandomColors(numSquares);
	//pick a new random color from array.
	pickedColor = pickColor();
	//change colorDisplay to match picked color.
	colorDisplay.textContent = pickedColor;
	//change colors of squares.
	messageDisplay.textContent = "";
	this.textContent = "New colors";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
	//Add initial colors to the squares.
	squares[i].style.backgroundColor = colors[i];
	//Add eventListeners to all the squares.
	squares[i].addEventListener("click",function(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //Compare the color
        if(clickedColor === pickedColor){
        	//alert("You are Right!!!");
        	messageDisplay.textContent = "Correct";
        	changeColors(clickedColor);
        	h1.style.backgroundColor = clickedColor;
        	resetButton.textContent = "Play Again?";
        }
        else{
        	//alert("Wrong!!");
        	this.style.backgroundColor = "#232323";
        	messageDisplay.textContent = "Try again";
        }
	});
}

function changeColors(color){
	for(var i=0 ; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//create an array
	var arr = [];
	//loop through the array
	for(var i=0;i<num;i++){
		//get random color and push into array.
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()* 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()* 256);
	//pick a "blue" from 0 to 255 
	var b = Math.floor(Math.random()* 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}