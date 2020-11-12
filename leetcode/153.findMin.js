var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    console.log('mid', mid)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

var nums = [4, 5, 6, 7, 8, 0, 1, 2];
console.log(findMin(nums));
