var sortArr = function (nums) {
  return nums.sort((a, b) => a - b);
};

const nums = [-2, 3, -5];
console.log(sortArr(nums));

// [-2,3,-5]
// 输出：
// [-2,-5,3]
// 预期结果：
// [-5,-2,3]
