let prompt = require('prompt-sync')();

// code below (replace this example)

const secretNumber = Math.floor(Math.random() * 11) + 1;
let tries = 0;
//array to store answer to check later if it was used or not
let answers = [];

//loop until player gets correct answer
do {
  //Showing prompt to Guess the number
  let answer = parseInt(prompt('Guess a number: '));

  //same number multiples times only count as one try
  if (!answers.includes(answer)) {
    //push answer to answers array
    answers.push(answer);
    //no of tries
    tries++;
    //number too large
    if (answer > secretNumber) {
      console.log('Too High!');
    }

    //number too small
    if (answer < secretNumber) {
      console.log('Too Low!');
    }

    //check if not a number, print error and do not count this as a try
    if (isNaN(answer)) {
      console.log('Not a number! Try again!');
    }

    //check if answer matches secret number, print message with no of attempts.
    if (answer === secretNumber) {
      console.log(`You got it! You took ${tries} attempts!`);
      break;
    }
  } else {
    console.log('Already Gussed!');
  }
} while (true);
