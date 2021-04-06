const multiplicationTable = function (maxValue) {
  // Your code here
  //variable to store final result string
  let result = '';
  //loop thru 1 to maxValue
  for (let i = 1; i <= maxValue; i++) {
    //call multiplyBy function which will return the table string and add to result string
    result = result + multiplyBy(i, maxValue) + '\n';
  }
  //return final result string
  return result;
};

//function to create table string for each number till highest value
const multiplyBy = function (num, highestValue) {
  //store table for each number
  let table = '';

  //loop from 1 to highestValue
  for (let i = 1; i <= highestValue; i++) {
    //multiply i with number and store to table sting adding space at the end
    table = table + num * i + ' ';
  }
  //return the final table string
  return table;
};

multiplyBy(2, 5);

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(2));
