var arrayRankTransform = function (arr) {
  let temp = [...arr];
  let res = [];
  arr = [...new Set(arr)];
  arr.sort((a, b) => a - b);
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i + 1;
  }
  for (let i = 0; i < temp.length; i++) {
    res.push(map[temp[i]]);
  }

  return res;
};
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
