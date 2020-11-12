var maxSubArray = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  const dp = new Array(n);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  return Math.max(...dp) 
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
