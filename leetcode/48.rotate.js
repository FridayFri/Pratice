var rotate = function (matrix) {
  let res = new Array(matrix.length).fill([]);
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      console.log(temp);
      res[j] = res[j].length ? [...res[j], temp] : [temp];
    }
  }

  return res;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [[7,4,1],[8,5,2],[9,6,3]]
