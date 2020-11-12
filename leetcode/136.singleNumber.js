/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  for (const item of nums) {
    result = result ^ item;
  }
  return result;
};

var nums = [2, 2, 1];
console.log(singleNumber(nums));
