var search = function (nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) return i;
  //   }
  //   return -1;

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = (end + start) >> 1;
    console.log(mid);
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search((nums = [4, 5, 6, 7, 0, 1]), (target = 0)));
