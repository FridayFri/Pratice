var luckyNumbers = function (matrix) {
  const ans = [];

  for (let row of matrix) {
    let min,
      max,
      index,
      col = null;

    min = Math.min(...row);
    index = row.indexOf(min);
    col = new Array();
    for (let row of matrix) {
      col.push(row[index]);
    }
    max = Math.max(...col);
    if (min === max) {
      ans.push(min);
    }
  }
  return ans;
};
const matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];
console.log(luckyNumbers(matrix));
