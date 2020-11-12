var massage = function (nums) {
  if (!nums.length) {
    return 0;
  }
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

const nums = [2,1,4,5,3,1,1,3];
console.log(massage(nums));
