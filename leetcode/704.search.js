/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = ((left + right) / 2) | 0;
    console.log(left, right, mid);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
  target = 2;
console.log(search(nums, target));
