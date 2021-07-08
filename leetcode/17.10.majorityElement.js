var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  nums.sort((a, b) => a - b);
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      res++;
      if (res > nums.length / 2) {
        return nums[i];
      }
    } else {
      res = 1;
    }
  }
  return -1;
};

console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));
