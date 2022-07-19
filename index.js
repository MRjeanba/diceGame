
/**
 * Creating a first random number to change the dice image of the first dice
 */
var randomNumber1 = Math.ceil(Math.random()*6);
console.log(randomNumber1);

/**
 * Doing the same thing for the second dice
 */
 var randomNumber2 = Math.ceil(Math.random()*6);
 console.log(randomNumber2);


 /**
  * Modifying the dice image by concatenation of string with the setAttribute method of JS
  */
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");


/**
 * Deciding who win based on the random number
 */
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = "That's a tie, Replay !";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}