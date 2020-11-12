var singleNumber = function (nums) {
  const a = Array.from(new Set(nums));
  return (
    a.reduce((pre, cur) => pre + cur) * 3 -
    nums.reduce((pre, cur) => pre + cur) 
  )/ 2;
};

const nums = [0, 1, 0, 1, 0, 1, 99];
console.log(singleNumber(nums));
