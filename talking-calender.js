//object variable for converting month
const month = {
  1: 'January',
  2: 'Febuary',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

//functional variable for day
const day = function (dd) {
  let temp;
  switch (dd) {
    case 1:
      temp = dd + 'st';
      break;
    case 2:
      temp = dd + 'nd';
      break;
    case 3:
      temp = dd + 'rd';
      break;
    default:
      temp = dd + 'th';
      break;
  }
  return temp;
};

const talkingCalendar = function (date) {
  // Your code here
  //split date string
  let tempDate = date.split('/');
  
  //get year from tempDate array
  let yyyy = tempDate[0];
  
  //get month from month object using tempDate array
  let mm = month[Number.parseInt(tempDate[1])];
  
  //get day from day variable function using tempDate array
  let dd = day(Number.parseInt(tempDate[2]));
  
//return converted date
  return (mm + ' ' + dd + ', ' + yyyy);
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));