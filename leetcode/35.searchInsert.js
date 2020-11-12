var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(i);
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

var nums = [1, 3, 5, 6];
var target = 5;
console.log(searchInsert(nums, target));
