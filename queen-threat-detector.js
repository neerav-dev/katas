let whiteQueen = [0, 5];
let blackQueen = [5, 0];

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];

let generatedBoard = generateBoard(whiteQueen, blackQueen);

function generateBoard(whiteQueen, blackQueen) {

  //variable to store result array
  let result = [];
  //variable to store temp array
  let temp = [];

  //chess board limit
  let limit = 8;

  //loop col indexes and row indexes, if indexes matches either queen location push 1 else push 0
  for (let col = 0; col < limit; col++) {
    for (let row = 0; row < limit; row++) {
      if (
        (whiteQueen[0] === col && whiteQueen[1] === row) ||
        (blackQueen[0] === col && blackQueen[1] === row)
      ) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    result.push(temp);
    temp = [];
  }
  return result;
}

function queenThreat(generatedBoard) {
  let result = false;

  //chess board limit
  let limit = 7;

  //start postion, select any queen positon, I have choosen whiteQueen
  let row = whiteQueen[0];
  let col = whiteQueen[1];

  //move top left, check for 1 if found set result to true else keep moving
  let r = row;
  let c = col;
  while (r > 0 && c > 0) {
    r -= 1;
    c -= 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move bottom right, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (r < limit && c < limit) {
    r += 1;
    c += 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move top right, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (r < limit && c > 0) {
    r += 1;
    c -= 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move bottom left, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (r > 0 && c < limit) {
    r -= 1;
    c += 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move left, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (r > 0) {
    r -= 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move right, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (r < limit) {
    r += 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move top, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (c > 0) {
    c -= 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }

  //move bottom, check for 1 if found set result to true else keep moving
  r = row;
  c = col;
  while (c < limit) {
    c += 1;
    if (generatedBoard[r][c] === 1) {
      result = true;
    }
  }
  //return the result
  return result;
}

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
