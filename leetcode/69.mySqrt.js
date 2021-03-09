/*
 * @Author: your name
 * @Date: 2020-05-03 16:17:25
 * @LastEditTime: 2021-03-09 23:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Practice/leetcode/69.mySqrt.js
 */
var mySqrt = function (x) {
  if (x === 1) {
    return 1;
  }
  let min = 0,
    max = x;
  while (max - min > 1) {
    let mid = (max + min) / 2;
    if (mid * mid > x) {
      max = mid;
    } else {
      min = mid;
    }
  }
  return parseInt(min);
};

const x = 8;
console.log(mySqrt(x));
