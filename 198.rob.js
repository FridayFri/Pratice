var rob = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const dp = new Array(n).fill(0);
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for(let i = 2;i<n;i++){
      dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
  }
  console.log(dp)
  return dp[n-1]
};
const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
