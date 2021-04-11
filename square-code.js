const squareCode = function (message) {
  // Put your solution here
  //variable to store massage after removing all the spaces
  let msg = message.split(' ').join('');
  //vriable to store length of msg without spaces
  let length = msg.length;
  //variable to store no of character to create square
  let noofchars = Math.ceil(Math.sqrt(msg.length));

  //variable to hold temporary array
  let square = [];
  //variable to store result array
  let result = [];
  let counter = 0;

  for (let i = 0; i < noofchars; i++) {
    for (let j = 0 + counter; j < msg.length; j += noofchars) {
      square.push(msg[j]);
    }
    counter++;
    result.push(square.join(''));
    square = [];
  }
  return (result);
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(
  squareCode(
    'if man was meant to stay on the ground god would have given us roots'
  )
);
