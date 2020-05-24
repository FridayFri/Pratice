var minSubArrayLen = function (s, nums) {
  let max = Number.MAX_SAFE_INTEGER;
  let i = 0;
  sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      max = Math.min(max, j - i + 1);
      sum -= nums[i++];
    }
  }
  return  max === Number.MAX_SAFE_INTEGER ? 0 : max;
};
var s = 3;
var nums = [1, 1];
console.log(minSubArrayLen(s, nums));
