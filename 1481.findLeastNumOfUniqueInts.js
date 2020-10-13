var findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const time = map.get(arr[i]) || 0;
    if (map.has(arr[i])) {
      map.set(arr[i], time + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  const res = [...map];
  res.sort((a, b) => a[1] - b[1]);
  let flag = 0;
  const len = res.length;
  for (let j = 0; j < res.length; j++) {
    if (k >= res[j][1]) {
      flag++;
      k -= res[j][1];
    } else {
      res[j][1] -= k;
    }
  }
  console.log(map, res);
  return res.slice(flag, len).length;
};

const arr = [4, 3, 1, 1, 3, 3, 2],
  k = 3;
console.log(findLeastNumOfUniqueInts(arr, k));
