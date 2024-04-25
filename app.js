//User selects their number and checks to verify its a number
let maximum = parseInt(prompt("Enter the maximum number!"));
// Checking to see if a valid number was entered and loops until one is
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid maximum number"));
}
/*
Generates a random number between 0 and 1 and the .floor chops off the .
* maximum gives max random number up to our maximum entered
set to variable to give us the target set
*/
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "quit") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too High! Guess Again!");
  } else {
    guess = prompt("Too Low! Guess Again!");
  }
}
if (guess === "quit") {
  console.log("Not everyone can be a winner!");
} else {
  console.log(
    `Congrats! That is the correct number! It took you a total of ${attempts} guesses to get it correct!`
  );
}
