var minSubarray = function (nums, p) {
  let res = Infinity;
  const sum = nums.reduce((pre, cur) => (pre += cur), 0);
  const len = nums.length;
  const r = sum % p;
  if (r === 0) return 0;
  const prefixSum = new Array(nums.length + 1).fill(0);
  prefixSum[0] = 0;
  for (let i = 1; i <= len; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }
  const preMap = {};
  for (let i = 0; i <= nums.length; i++) {
    const index = preMap[(prefixSum[i] - r) % p];
    if (index != undefined) {
      res = Math.min(res, i - index);
    }
    preMap[prefixSum[i] % p] = i;
  }
  console.log(res, sum, len, r, prefixSum, preMap);
  return res === Infinity || res === len ? -1 : res;

};
console.log(minSubarray((nums = [6, 3, 5, 2]), (p = 9)));
