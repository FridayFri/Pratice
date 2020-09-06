/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (!nums.length) return nums;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] & 1) {
      // 奇数则不操作
      left++;
    } else {
      // 偶数则与右指针交换元素
      [nums[left], nums[right]] = [nums[right], nums[left]];
      console.log(nums[left], nums[right])
      right--;
    }
  }
  return nums;
};

const nums = [1, 2, 3, 4];
console.log(exchange(nums));
