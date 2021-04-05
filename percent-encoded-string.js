const urlEncode = function(text) {
  // Put your solution here
  //local variable string to store the result 
  let result = '';
  //temp array of words after removing whitespace outside string
  let temp  = text.trim().split(' ');
  // joining temp array back to string with joining '%20'
  result = temp.join('%20');
  //return the result string
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));