var topKFrequent = function (nums, k) {
  nums.sort((a, b) => a - b);
  const map = new Map();
  for (let item of nums) {
    const time = map.get(item) || 0;
    if (time) {
      map.set(item, time + 1);
    } else {
      map.set(item, 1);
    }
  }
  let res = [...map],
    result = [];
  console.log([...map]);
  res.sort((a, b) => b[1] - a[1]);
  console.log(res);
  for (let i = 0; i < k; i++) {
    result.push(res[i][0]);
  }
  return result;
};
const nums = [4, 1, -1, 2, -1, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
