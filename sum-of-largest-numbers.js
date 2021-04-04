const sumLargestNumbers = function(data) {
  // Put your solution here
  const result = sortedNumbers(data);

  //1st largest
  const num1 = result[result.length - 1];

  //2nd largest
  const num2 = result[result.length - 2];

  //return sum
  return num1 + num2;
};

//Function to sort array
const sortedNumbers = function(data) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < data.length; i++) {
      if(data[i - 1] > data[i]) {
        done = false;
        let temp = data[i - 1];
        data[i - 1] = data[i];
        data[i] = temp;
      }
    }
  }
  return data;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
