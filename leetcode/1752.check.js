/*
 * @Author: your name
 * @Date: 2021-05-12 00:29:01
 * @LastEditTime: 2021-05-12 00:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Practice/leetcode/1752.check.js
 */

var check = function (nums) {
  const origin = nums.slice().sort((a, b) => a - b);
  return nums.concat(nums).join(",").includes(origin.join(","));
};

console.log(check([3, 4, 5, 1, 2]));
