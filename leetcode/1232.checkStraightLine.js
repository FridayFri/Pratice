/*
 * @Author: your name
 * @Date: 2021-05-14 09:23:15
 * @LastEditTime: 2021-05-14 09:34:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Practice/leetcode/1232.checkStraightLine.js
 */

var checkStraightLine = function (coordinates) {
  let k =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
  let b = coordinates[0][1] - k * coordinates[0][0];
  if (k == Infinity) {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[0][0] != coordinates[i][0]) return false;
    }
  } else if (k == 0) {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[0][1] != coordinates[i][1]) {
        return false;
      }
    }
  } else {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][1] != k * coordinates[i][0] + b) {
        return false;
      }
    }
  }

  return true;
};
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
