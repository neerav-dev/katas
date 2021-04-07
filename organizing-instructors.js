const organizeInstructors = function(instructors) {
  // Put your solution here
  
  //variable to store final result
  let result = {};

  //loop thru each element in instructors object
  instructors.forEach(element => {
    //variable to store course
    let course = element.course;
    //check if course exist or not, if true then add the instructor's name to array else new property with course name and instructor
    if (course in result) {
      result[course].push(element.name);
    } else {
      result[course] = [element.name];
    }
  });
//return result variable
  return (result);
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));