//global variables
let possibleComputerChoices = [
  "pear",
  "bootcamp",
  "coffee",
  "breakfast",
  "homework",
  "hangman",
  "computer",
  "logic"
];
let userChoice = "";
let computerChoice = "";
let computerChoiceArray = [];
let userGuesses = [];
let wins = 0;
let losses = 0;
let ties = 0;
let guessesRemaining = 15;
let blanks = [];
let counter = 0;
//computer picking a random word from the array
computerChoice =
  possibleComputerChoices[
    Math.floor(Math.random() * possibleComputerChoices.length)
  ];
console.log(computerChoice);
computerChoiceArray = computerChoice.split("");

//make lines appear on screen

//register for user clicks
document.onkeyup = function(event) {
  if (counter === 0) {
    for (var i = 0; i < computerChoiceArray.length; i++) {
      blanks.push("_ ");
    }
    counter++;
    $(".lettersGuessed").text(blanks.join(""));
  }
  userChoice = event.key;
  console.log(userChoice);
  guessesRemaining--;

  $("#numguesses").text(guessesRemaining);

  $("#userGuesses").append(userChoice);

  if (guessesRemaining === 0) {
    alert("You lose");
    reset();
  }
  function reset() {
    guessesRemaining = 15;
    userGuesses = [];
    blanks = [];
    $("#userGuesses").empty();
    computerChoice =
      possibleComputerChoices[
        Math.floor(Math.random() * possibleComputerChoices.length)
      ];
    console.log(computerChoice);
    computerChoiceArray = computerChoice.split("");
  }
};

// displaying the user clicks to the screen

// acknowledge the guesses

// writing the guesses to the screen
