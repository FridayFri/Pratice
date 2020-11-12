/**
 * @param {number[][]} grid
 * @return {number}
 */
// var countNegatives = function (grid) {
//   let res = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] < 0) {
//         res++;
//       }
//     }
//   }
//   return res;
// };

var countNegatives = function (grid) {
  let res = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    let row = grid[i];
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (row[mid] < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res += n - left;
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
