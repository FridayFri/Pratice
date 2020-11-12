var findPeakElement = function (nums) {
  let pre = 0,
    end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      pre++;
      end++;
    } else {
      pre--;
      end++;
    }
    if (pre + 2 === end) {
      console.log("pre", pre, end);
      return (pre + end) / 2;
    }
  }
};

const nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));
