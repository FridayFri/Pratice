var threeSum = function (nums) {
  if (nums.length < 3) return [];
  const res = [];
  for (let i = 0; i < nums.length-2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let m = j + 1; m < nums.length; m++) {
        if (nums[i] + nums[j] + nums[m] === 0) {
          res.push([nums[i], nums[j], nums[m]]);
        }
      }
    }
  }
  return duplicate2(res);
};
function duplicate2(arr) {
  let res = {};
  arr.forEach((item) => {
    item.sort((a, b) => a - b);
    res[item] = item;
  });
  return Object.values(res);
}

console.log(threeSum([0, 0,0]));
