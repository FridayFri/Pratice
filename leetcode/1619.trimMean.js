var trimMean = function (arr) {
  const start = arr.length / 20,
    end = start * 19;
    console.log(start,end)
  let res = 0;
  arr.sort((a, b) => a - b);
  for (let i = start; i < end; i++) {
    res += arr[i];
  }
  return res / (end - start);
};

console.log(
  trimMean(
    (arr = [
      6,
      0,
      7,
      0,
      7,
      5,
      7,
      8,
      3,
      4,
      0,
      7,
      8,
      1,
      6,
      8,
      1,
      1,
      2,
      4,
      8,
      1,
      9,
      5,
      4,
      3,
      8,
      5,
      10,
      8,
      6,
      6,
      1,
      0,
      6,
      10,
      8,
      2,
      3,
      4,
    ])
  )
);
