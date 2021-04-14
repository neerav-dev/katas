const blocksAway = function (directions) {
  // Put your solution here
  let result = { east: 0, north: 0 };
  let northCounter = 0;
  let eastCounter = 0;
  let direction = '';


  for (let i = 0; i < directions.length; i += 2) {
    switch (directions[i]) {
      case 'right':
        switch (direction) {
          case 'north':
            result.east += directions[i + 1];
            direction = 'east';
            break;

          case 'east':
            result.north -= directions[i + 1];
            direction = 'south';
            break;

          case 'west':
            result.north += directions[i + 1];
            direction = 'north';
            break;

          case 'south':
            result.east -= directions[i + 1];
            break;

          default:
            result.east += directions[i + 1];
            direction = 'east';
            break;
        }
        break;

      case 'left':
        switch (direction) {
          case 'north':
            result.east -= directions[i + 1];
            direction = 'west';
            break;

          case 'east':
            result.north += directions[i + 1];
            direction = 'north';
            break;

          case 'west':
            result.north -= directions[i + 1];
            direction = 'south';
            break;

          case 'south':
            result.east += directions[i + 1];
            direction = 'east';
            break;

          default:
            result.north += directions[i + 1];
            direction = 'north';
            break;
        }
        break;
    }
  }
  return (result);
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ])
);
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
