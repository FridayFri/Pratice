/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len === 0 || k === 0) {
    return 0;
  }
  const res = new Array(len - k + 1);
  for (let i = 0; i < len - k + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
      res[i] = max;
    }
  }
  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
