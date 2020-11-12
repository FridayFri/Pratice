var diagonalSum = function (mat) {
  const n = mat.length,
    mid = Math.ceil(n / 2);
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    sum += mat[i][i] + mat[i][n - 1 - i];
  }
  console.log(mid);
  return n % 2 ? sum - mat[mid - 1][mid - 1] : sum;
};
console.log(
  diagonalSum(
    (mat = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ])
  )
);
