var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[n + i]);
  }
  return result;
};

const nums = [2, 5, 1, 3, 4, 7],
  n = 3;
console.log(shuffle(nums, n));
