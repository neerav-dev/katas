const repeatNumbers = function (data) {
  // Put your solution here

  //declare variable to store the result string
  let result = '';

  for (let j = 0; j < data.length; j++) {
    //Extract and store elements from data array
    const element = data[j];
    //loop second value (amount of times to repeat) and concate first value (value to repeat) from element array
    for (let i = 0; i < element[1]; i++) {
      result = result + element[0];
    }

    //Add coma between the repeat number string
    if (j < data.length - 1) {
      result = result + ', ';
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

console.log(
  repeatNumbers([
    [4557, 4],
    [123, 2],
    [35, 6],
  ])
);