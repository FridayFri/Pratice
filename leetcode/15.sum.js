var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let n1 = nums[i];
    if (n1 > 0) break;
    if (i - 1 >= 0 && n1 == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let n2 = nums[left],
        n3 = nums[right];
      if (n1 + n2 + n3 === 0) {
        res.push([n1, n2, n3]);
        while (left < right && nums[left] == n2) left++; // 直到指向不一样的数
        while (left < right && nums[right] == n3) right--; // 直到指向不一样的数
      } else if (n1 + n2 + n3 < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res
};

console.log(
  threeSum([
    4, -5, -8, 9, -7, -7, -1, -5, 8, 3, -3, 4, 3, -4, 9, -5, -5, -3, 2, 2,
  ])
);
