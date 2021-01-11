var frequencySort = function (nums) {
  let map = new Map(),
    res = [];
  for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
  map = new Map(
    [...map].sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]))
  );
  for (let [key, value] of map) res.push(...new Array(value).fill(key));
  return res;
};

console.log(frequencySort([2, 3, 1, 3, 2]));
