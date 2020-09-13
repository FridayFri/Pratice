/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length - 1 === nums[nums.length - 1]) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
};

const nums = [0];
console.log(missingNumber(nums));
