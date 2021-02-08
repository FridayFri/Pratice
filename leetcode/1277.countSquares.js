var countSquares = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  let rowLimit = matrix.length,
    colLimit = matrix[0].length,
    count = 0;
  let dp = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < rowLimit; i++) {
    for (let j = 0; j < colLimit; j++) {
      if (matrix[i][j] !== 0) {
        if (i - 1 >= 0 && j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          count += dp[i][j];
        } else {
          count++;
        }
      }
    }
  }
  console.log(dp);
  return count;
};

const matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
console.log(countSquares(matrix));
