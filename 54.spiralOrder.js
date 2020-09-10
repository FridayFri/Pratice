/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  while (matrix.length) {
    let head = matrix.shift();
    console.log(head);
    res = res.concat(head);
    matrix = rateMatrix(matrix);
  }
  return res;
};

//逆时针旋转矩阵90°
function rateMatrix(matrix) {
  let r = matrix.length;
  if (!r) return [];
  let c = matrix[0].length;
  let list = [];
  for (let i = c - 1; i >= 0; i--) {
    // 列
    let _rlist = [];
    for (let j = 0; j < r; j++) {
      // 行
      _rlist.push(matrix[j][i]);
    }
    list.push(_rlist);
  }
  return list;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
