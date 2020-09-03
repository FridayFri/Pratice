/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const arr = [...new Set(nums)];
  arr.sort((a, b) => a - b);
  if (arr.length < 3) {
    return arr[arr.length - 1];
  }
  console.log(arr)
  return arr[arr.length - 3];
};

const nums = [3, 2, 1]
console.log(thirdMax(nums));
