
var r1 = Math.floor(Math.random() * 6) + 1;

var diceImage = "images/dice"+r1+".png";

var image1 = document.querySelector(".img1");
image1.setAttribute("src", diceImage);

var r2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "images/dice"+r2+".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", diceImage2);

if( r1 > r2){
    document.querySelector("h1").innerHTML = ("Player 1 Wins! 🤾🏽‍♂️");
}
else if( r2 > r1){
    document.querySelector("h1").innerHTML = ("🤾‍♀️Player 2 Wins!");
}else{
    document.querySelector("h1").innerHTML = ("🎭 It was a draw! 🎭");
}