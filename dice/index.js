var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage =  "images/dice"+randomNumber1+".png";
var randomImage2 =  "images/dice"+randomNumber2+".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var heading1 = document.querySelector("h1");

// console.log(randomNumber1);

image1.setAttribute("src", randomImage);
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    heading1.innerHTML="Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    heading1.innerHTML= "Player 2 Wins!";
} else {
    heading1.innerHTML="Draw!";
}
