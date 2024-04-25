/* The code `let maximum = parseInt(prompt("Enter the maximum number!"));` is prompting the user to
enter a maximum number for a number guessing game. The `prompt` function displays a dialog box with
the message "Enter the maximum number!" where the user can input a value. The `parseInt` function is
used to convert the user's input (which is initially a string) into an integer. This ensures that
the user's input is treated as a number for setting the maximum value for the game. */
let maximum = parseInt(prompt("Enter the maximum number!"));

/* The code `while (isNaN(maximum)) {
  maximum = parseInt(prompt("Enter a valid maximum number"));
}` is a while loop that checks if the value of `maximum` is not a number (NaN). If the user enters a
value that is not a valid number when prompted to enter the maximum number, the loop will continue
to prompt the user to enter a valid maximum number until a valid number is provided. This ensures
that the user enters a valid numerical value for the maximum number before proceeding with the rest
of the code. */
while (isNaN(maximum)) {
  maximum = parseInt(prompt("Enter a valid maximum number"));
}

/* The code `const targetNum = Math.floor(Math.random() * maximum) + 1;` is generating a random number
between 1 and the maximum number entered by the user. Here's a breakdown of what each part of the
code does: Without + 1 the range would be 0 to maximum number. The + 1 will make the range 1 to maximum
number */
const targetNum = Math.floor(Math.random() * maximum) + 1;

/* The code `let guess = prompt("Enter your first guess! Type Quit to stop the game."); let attempts =
1;` is initializing two variables. */
let guess = prompt("Enter your first guess! Type Quit to stop the game.");
let attempts = 1;

/* This part of the code is a while loop that continues running as long as the parsed integer value of
the user's guess is not equal to the target number. Here's a breakdown of what each part of the code
inside the while loop is doing: */
while (parseInt(guess) !== targetNum) {
  /* The code `if (guess === "quit") break;` is checking if the user entered "quit" as their guess. If
the user did enter "quit", the `break` statement is used to immediately exit the while loop,
stopping the game. */
  if (guess === "quit") break;
  /* The code `guess = parseInt(guess);` is converting the user's input stored in the variable `guess`
  from a string to an integer using the `parseInt` function. This conversion is necessary to ensure
  that the user's input is treated as a number for comparison with the target number in the number
  guessing game. By converting the input to an integer, the program can accurately evaluate whether
  the user's guess matches the randomly generated target number. */
  guess = parseInt(guess);
  /* The code block `if (guess > targetNum) {
      guess = prompt("Too High! Guess Again!");
      attempts++;` is checking if the user's guess is higher than the target number. If the user's
  guess is indeed higher than the target number, it prompts the user with "Too High! Guess Again!"
  to provide a new guess. Additionally, the variable `attempts` is incremented by 1 to keep track of
  the number of attempts the user has made in the guessing game. This code segment helps guide the
  user in providing subsequent guesses based on whether their previous guess was too high. */
  if (guess > targetNum) {
    guess = prompt("Too High! Guess Again!");
    attempts++;
    /* The code `} else if (guess < targetNum) {
      guess = prompt("Too Low! Guess Again!");
      attempts++;` is part of an if-else statement block within the while loop that handles the
  scenario where the user's guess is lower than the target number. */
  } else if (guess < targetNum) {
    guess = prompt("Too Low! Guess Again!");
    attempts++;
    /* The code `} else {
     guess = prompt(
       "Invalid guess. Please enter a number or quit to stop the game."
     );
 ` is part of the logic within the while loop that handles the scenario where the user's input is
 neither "quit" nor a valid number. */
  } else {
    guess = prompt(
      "Invalid guess. Please enter a number or quit to stop the game."
    );
  }
}
/* This part of the code is checking if the user entered "quit" as their guess. If the user enters
"quit", it will log "Not everyone can be a winner!". If the user did not enter "quit" and instead
guessed the correct number, it will log "Congrats! That is the correct number! It took you a total
of [attempts] guesses to get it correct!". This message informs the user of the outcome of their
guessing game. */
if (guess === "quit") {
  console.log("Not everyone can be a winner!");
} else {
  console.log(
    `Congrats! That is the correct number! It took you a total of ${attempts} guesses to get it correct!`
  );
}
