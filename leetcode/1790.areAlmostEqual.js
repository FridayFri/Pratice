/*
 * @Author: your name
 * @Date: 2021-05-10 23:38:46
 * @LastEditTime: 2021-05-11 00:05:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Practice/leetcode/1790.areAlmostEqual.js
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true;
  }
  let diff = [],
    len = s1.length;
  while (len--) {
    if (s1.charAt(len) !== s2.charAt(len)) {
        diff.push([s1.charAt(len), s2.charAt(len)])
    } 
  }
  return diff.length === 2 && diff[0][0] === diff[1][1] && diff[0][1] === diff[1][0]

};

console.log(areAlmostEqual("bank", "kanb"));
