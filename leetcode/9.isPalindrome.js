/*
 * @Author: your name
 * @Date: 2021-03-26 00:36:20
 * @LastEditTime: 2021-03-26 00:39:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Practice/leetcode/9.isPalindrome.js
 */
var isPalindrome = function (x) {
    return x.toString() == x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
