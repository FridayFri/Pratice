const nums = [8, 3, 30, 34, 5, 9]; // 9534330

function maxNumber(nums) {
  let str = "";
  nums.forEach((item) => {
    item = String(item);
  });
  nums.sort();
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log("nums[i]", nums[i],nums[i].length );
    if (nums[i].length === 1) {
      str += nums[i];
      console.log("nums[i]", nums[i]);
    }
  }
  console.log(nums, "str", str);
}
console.log(maxNumber(nums));
