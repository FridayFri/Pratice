var maxArea = function(height) {
  let i = 0, // 左边界
    j = height.length - 1, // 右边界
    res = 0, // 最大值
    lastHeight = 0; // 存放上一次的高度
  while (i < j) {
    if (height[i] < height[j]) {
      // 以左边界为高
      if (height[i] > lastHeight) {
        // 只考虑移动后高度增加的情况（移动后宽度肯定变小，若高度也变小，则面积是一定小于之前的）
        res = Math.max(res, (j - i) * height[i]); // 将最大值赋值给res
        lastHeight = height[i]; // 将高度赋值给lastHeight
      }
      i++;
    } else {
      // 以右边界为高
      if (height[j] > lastHeight) {
        res = Math.max(res, (j - i) * height[j]);
        lastHeight = height[j];
      }
      j--;
    }
  }
  return res;
};

var nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(nums));
