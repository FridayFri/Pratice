var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);

  let sum = nums.reduce((a, b) => a + b, 0);
  let arr = [];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
    arr.push(nums[i]);
    if (res > sum - res) {
      break;
    }
  }

  return res;
};

console.log(minSubsequence((nums = [4, 3, 10, 9, 8])));
