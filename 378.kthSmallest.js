/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res = [...matrix[i], ...res];
  }
  const result = res.sort((a, b) => a - b);
  return result[k - 1];
};

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
console.log(kthSmallest(matrix, k));
