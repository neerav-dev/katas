const instructorWithLongestName = function(instructors) {
  // Put your solution here

  //create a local object to store instructor details with longest name
  let result = {
    name: '',
    course: ''
  };

  //declare local variable to keep track of length of each 'name' element in instructors list
  let len = 0;

  //loop thru list of instructor
  instructors.forEach(element => {
    //check for 'name' property value length
    if (element['name'].length >= len) {
      //copy if longer then previous element in the list
      result.name = element['name'];
      result.course = element['course'];
      len = element['name'].length;
    }
  });

  //return the result object
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));