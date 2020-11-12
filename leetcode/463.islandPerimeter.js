var islandPerimeter = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let element = grid[i];
    for (let j = 0; j < element.length; j++) {
      if (grid[i][j] === 1) {
        count += 4;
        if (j > 0) {
          if (grid[i][j - 1] === 1) {
            count -= 2;
          }
        }
        if (i > 0) {
          if (grid[i - 1][j] === 1) {
            count -= 2;
          }
        }
      }
    }
  }
  return count;
};

var grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));
