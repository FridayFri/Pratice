var kLengthApart = function (nums, k) {
  let start = 0,
    end = 0,
    res = true;
  for (let i = 0; i < nums.length; i++) {
    end = i;
    if (nums[i] === 1 && i > 1) {
      console.log(start, end);
      if (end - start <= k) {
        res = false;
      }
      start = i;
    }
  }
  return res;
};

console.log(kLengthApart((nums = [0, 1, 0, 1]), (k = 1)));
