var rotate = function (nums, k) {
  let last, temp;
  for (let i = 0; i < k; i++) {
    last = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = last;
      last = temp;
    }
  }

  return nums;
};
var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(rotate(nums, k));
