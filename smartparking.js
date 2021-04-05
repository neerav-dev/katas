const whereCanIPark = function (spots, vehicle) {
  // Code here!

  //if Upper Case letter means AVAILABLE, lower case UNAVAILABLE

  for (let y = 0; y < spots.length; y++) {
    const row = spots[y];
    for (let x = 0; x < row.length; x++) {
      const element = row[x];

      if (vehicle === 'regular') { //Regular car - R spots
        if (element === 'R') {
          return [x, y];
        }
      } else if (vehicle === 'small') { //Small car - R or S spots

        if (element === 'R' || element === 'S') {
          return [x, y];
        }
      } else if (vehicle === 'motorcycle') {   //Motorcycles - R or S or M spots
        if (element === 'R' || element === 'S' || element === 'M') {
          return [x, y];
        }
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ],
    'regular'
  )
);

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M'],
    ],
    'small'
  )
);

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S'],
    ],
    'motorcycle'
  )
);
