const camelCase = function (input) {
  // Your code here
  //decare variable to store result string
  let result = '';
  //split input string to temp string array
  let temp = input.split(' ');
  //loop thru the temp array, start at position 1 instead of 0
  for (let i = 1; i < temp.length; i++) {
    const element = temp[i];
    let camelCase = '';
    //loop thru each string and capitalize first character
    for (let j = 0; j < element.length; j++) {
      if (j === 0) {
        camelCase = camelCase + element[j].toUpperCase();
      } else {
        camelCase = camelCase + element[j];
      }
    }
    //save back the camelCase string to temp string array
    temp[i] = camelCase;
  }
  //join all the temp string array to result string
  result = temp.join('');
  //return the final result variable
  return result;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
