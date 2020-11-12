var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  let res = true
  target.forEach((item, index) => {
    if (item !== arr[index]) {
      res = false
    }
  });
  return res;
};

console.log(canBeEqual((target = [3, 7, 9]), (arr = [3, 7, 11])));
