"use strict";




let username = prompt("What is your name?");
alert("Hello " + username + "! we are going to play a game.");
alert("I am going to ask you some questions about me");
alert("You will answer with a yes or no");



let answer = prompt("Do I Like Sports");
if (answer.toLowerCase() === "yes") alert("Yes I like Sports!");
else if (answer.toLowerCase() === "no") alert("Wrong Of Course I Like Sports!");
// console.log(answer);

let answer2 = prompt("Do I Love Insects?");
if (answer2.toLowerCase() === "no") alert("You are correct I hate bugs!");
else if (answer2.toLowerCase() === "yes") alert("That is not correct I dont like bugs!");
// console.log(answer2);

let answer3 = prompt("Is my favorite food steak?");
if (answer3.toLowerCase() === "yes") alert("Yes you are correct I love steak!");
else if (answer3.toLowerCase() === "no") alert("That is no not correct I love steaks!");
// console.log(answer3);

let answer4 = prompt("Am I am Aries?");
if (answer4.toLowerCase() === "yes") alert("You are correct I am an aries");
else if (answer4.toLowerCase() == "no") alert("That is not correct I am an aries");
// console.log(answer4);

let answer5 = prompt("Do I have children?");
if (answer5.toLowerCase() === "yes") alert("you are correct I have 2 daughters");
else if (answer5.toLowerCase() === "no")
  alert("That is incorrect I have 2 daughters");
// console.log(answer5);


//question 6

let numOfAttempts = 4;
while (numOfAttempts > 0){
  let guess = prompt('How many do I have?');
  let numberOfGuess = parseInt(guess);

  if (numberOfGuess === 42){
    console.log('correct',numberOfGuess);
    alert('You\'re right!');
    break;

  } else if (numberOfGuess > 42){
    console.log('too high',numberOfGuess);
    numOfAttempts--;
    alert('Too high, try again');

  }else if (numberOfGuess < 42){
    console.log('Too low',numberOfGuess);
    alert('Too high, try again')
    numOfAttempts--;
}


}


alert('The correct answer was 42');

let sodasIlike = ["dr pepper", "dietcoke", "cokezero", "mrpibb", "dietpepsi"];
//console.log(sodaNames);
let attempts = 6;
let correctAnswer = false;
console.log ('try again');

while (attempts> 0 && !correctAnswer){
  let guesses = prompt('Guess My Favorite Soda');
  attempts--;
  for (let i=0; i < 6; i++){
    if (guesses === sodasIlike[i]){
      alert('correct');
      correctAnswer = true;
    }
  }
}

alert('I like soda  ' + sodasIlike);







