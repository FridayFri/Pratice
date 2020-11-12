var heightChecker = function (heights) {
  const arr = [].concat(heights);
  heights.sort((a, b) => a - b);
  console.log(arr);
  let res = 0;
  heights.forEach((item, index) => {
    if (item !== arr[index]) {
      res++;
    }
  });
  return res;
};

console.log(heightChecker((heights = [5, 1, 2, 3, 4])));
