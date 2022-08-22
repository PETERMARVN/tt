//SELECT
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var h1 = document.querySelector('h1');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easyMode');
var hardBtn = document.getElementById('hardMode');
var advancedBtn = document.getElementById('advancedMode');
var numSquares = 12;
/*
init();
function init(){
    
}
*/

//EASY BUTTON FEAUTURES
easyBtn.addEventListener('click', function(){
    //generate three random colors
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //loop through the squares and pick three
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else {
            squares[i].style.display = "none"
        }
        
    }
    h1.style.backgroundColor = "black";
    //change button color
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
});

//HARD BUTTON FEAUTURES
hardBtn.addEventListener('click', function(){
    //generate SIX random colors
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    numSquares = 12;
    //loop through the squares and pick six random colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block";    
    }
    h1.style.backgroundColor = "black";
    colorDisplay.textContent = pickedColor;
    //change the number of squares to 6
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
});
/*
//ADVANCED BUTTON FEAUTURES
advancedBtn.addEventListener('click', function(){
    //GENERATE NINE RANDOM COLORS
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
   
    //loop through the squares and pick nine random colors
    for (let i = 0; i < squares.length; i++) {
        
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else {
            squares[i].style.display = "none"
        }

       squares[i].style.backgroundColor = colors[i]; 
        squares[i].style.display = "block";
    }
    
    colorDisplay.textContent = pickedColor;
    //change h1's background color to black
    h1.style.backgroundColor = "black";
    //switch the number of squares to 9
    advancedBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');
});
*/

/*
resetButton.addEventListener('click', function(){
    //when  clicked, generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor();
    // change colors of squares
})
*/
resetButton.addEventListener('click', function(){
    //when clicked, generate all new colors
    colors = generateRandomColors(numSquares);
    //change messageDisplay to empty
    messageDisplay.textContent = " ";
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color 
    colorDisplay.textContent = pickedColor;
    //CHANge button text
    this.textContent = "NEW COLORS";
    //chamge colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }
    h1.style.backgroundColor = "black";
});
//link color display to the picked color
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add a click listener to each squares
    squares[i].addEventListener('click', function(){
    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT"
        resetButton.textContent =  "PLAY AGAIN"
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "TRY AGAIN";
    }
    });
}
//features the squares same color with the correct color display
function changeColor(color) {
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
         //change  each color of every square to match the correct color
         squares[i].style.backgroundColor = color; 
    } 
}

//feautures to pick random color of selected squares
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//feautures to generate random color that takes a X number of color of random colors inside of an array
function generateRandomColors(num){
    //make an array
    var arr = [];
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
        //get random color and push it into array
    }
    //return the same array
    return arr;
}
function randomColor(){
    //PICK A RED FROM 0-255
    var r = Math.floor(Math.random() * 226) // I used 256 to include 255
    //PICK A GREEN FROM 0-255
    var g = Math.floor(Math.random() * 226)
    //PICK A BLUE FROM 0-255
    var b = Math.floor(Math.random() * 226)
    return "rgb(" + r + ", " + g +", " + b + ")";
}

// hard ands easy button codes