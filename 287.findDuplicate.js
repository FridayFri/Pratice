var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};
const nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums));
