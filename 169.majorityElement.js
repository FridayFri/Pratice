/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const time = map.get(nums[i]) || 0;
    if (map.has(nums[i])) {
      map.set(nums[i], time + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const res = [...map]
  res.sort((a, b) => b[1] - a[1]);
  return res[0][0]
};
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
