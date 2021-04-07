const urlDecode = function (text) {
  // Put your solution here
  //array to store multiple key value pairs 
  const pairs = text.split('&');
  //temporary array
  let arr = [];

  //loop thru each key value pairs
  pairs.forEach((element) => {
    //split the pairs to individual pair
    let pair = element.split('=');
    //loop thru each pair
    for (let [index, elem] of pair.entries()) {
      //check for '%20' and replace with ' ' (space)
      if (elem.includes('%20')) {
        pair[index] = elem.replaceAll('%20', ' ');
      }
    }
    //build temp array for pair
    arr.push(pair);
  });
  //convert the temp array of pair to object and return
  return Object.fromEntries(arr);
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
