const numberOfVowels = function(data) {
  // Put your solution here
  //declare local variable to store total number of vowels
  let num = 0;
  //loop thru data string
  for (let i = 0; i < data.length; i++) {
    //check for each character, if match increment the num
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      num++;
    }
  }
  //return the total number of vowels
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));