var productExceptSelf = function (nums) {
  const ret = [];

  for (let i = 0, temp = 1; i < nums.length; i++) {
    ret[i] = temp;
    temp *= nums[i];
  }
  console.log(ret);
  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)

  // 如果没有上面的循环的话，
  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)

  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)

  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    ret[i] *= temp;
    temp *= nums[i];
  }
  return ret;
};

console.log(productExceptSelf([1, 3, 4, 6]));
