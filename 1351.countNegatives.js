/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) {
        res++;
      }
    }
  }
  return res;
};

console.log(
  countNegatives(
    (grid = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ])
  )
);
