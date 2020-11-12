var findDisappearedNumbers = function (nums) {
  const res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      res.push(i);
    }
  }
  return res;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
