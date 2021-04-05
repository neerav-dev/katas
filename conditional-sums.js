const conditionalSum = function (values, condition) {
  // Your code here
  //declare local variable to store sum of values with default values of 0.
  let sum = 0;

  //loop thru all the values
  values.forEach((element) => {
    if (condition === 'even' && element % 2 === 0) {
      sum += element;
    } else if (condition === 'odd' && element % 2 !== 0) {
      sum += element;
    }
  });

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
