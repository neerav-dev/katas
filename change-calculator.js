const calculateChange = function (total, cash) {
  // Your code here
  //change object for storing change
  const change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  //variable to store amount to return
  let returnAmount = cash - total;

  //Twenty dollar check
  const twentyCheck = Math.floor(returnAmount / (20 * 100));
  if (twentyCheck > 0) {
    change['twentyDollar'] = twentyCheck;
    returnAmount = returnAmount - twentyCheck * (20 * 100);
  }
  //Ten dollar check
  const tenCheck = Math.floor(returnAmount / (10 * 100));
  if (tenCheck > 0) {
    change['tenDollar'] = tenCheck;
    returnAmount = returnAmount - tenCheck * (10 * 100);
  }
  //Five dollar check
  const fiveCheck = Math.floor(returnAmount / (5 * 100));
  if (fiveCheck > 0) {
    change['fiveDollar'] = fiveCheck;
    returnAmount = returnAmount - fiveCheck * (5 * 100);
  }
  //Two dollar check
  const twoCheck = Math.floor(returnAmount / (2 * 100));
  if (twoCheck > 0) {
    change['twoDollar'] = twoCheck;
    returnAmount = returnAmount - twoCheck * (2 * 100);
  }
  //One dollar check
  const oneCheck = Math.floor(returnAmount / (1 * 100));
  if (oneCheck > 0) {
    change['oneDollar'] = oneCheck;
    returnAmount = returnAmount - oneCheck * (1 * 100);
  }
  //Quarter check
  const quarterCheck = Math.floor(returnAmount / 25);
  if (quarterCheck > 0) {
    change['quarter'] = quarterCheck;
    returnAmount = returnAmount - quarterCheck * 25;
  }
  //Dime check
  const dimeCheck = Math.floor(returnAmount / 10);
  if (dimeCheck > 0) {
    change['dime'] = dimeCheck;
    returnAmount = returnAmount - dimeCheck * 10;
  }
  //Nickel Check
  const nickelCheck = Math.floor(returnAmount / 5);
  if (nickelCheck > 0) {
    change['nickel'] = nickelCheck;
    returnAmount = returnAmount - nickelCheck * 5;
  }
  //Penny check
  const pennyCheck = Math.floor(returnAmount / 1);
  if (pennyCheck > 0) {
    change['penny'] = pennyCheck;
    returnAmount = returnAmount - pennyCheck * 1;
  }

  //variable to store array which change value only
  let result = [];

  //loop thru change object and add to result array of change value is greater the 0
  for (const [key, value] of Object.entries(change)) {
    if (value > 0) {
      result.push([key, value]);
    }
  }
  //convert and return result array to object
  return Object.fromEntries(result);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
