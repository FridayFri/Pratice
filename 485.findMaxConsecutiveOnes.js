function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      temp += 1;
      if (temp > max) {
        max = temp;
      }
    } else {
      temp = 0;
    }
  }
  return max;
}

const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
