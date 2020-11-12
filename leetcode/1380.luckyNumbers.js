var luckyNumbers = function (matrix) {
  const ans = [];

  for (let row of matrix) {
    let min,
      max,
      index,
      col = [];
    min = Math.min(...row);
    index = row.indexOf(min);
    for (let row of matrix) {
      col.push(row[index]);
      console.log(col,min);
    }
    max = Math.max(...col);
    console.log('max', max)
    if (max === min) {
      ans.push(max);
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
