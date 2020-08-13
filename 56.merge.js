var merge = function (intervals) {
  if (intervals.length == 0) return [];
  var res = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  res.push(intervals[0]);
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) res.push(intervals[i]);
    else if (intervals[i][1] > res[res.length - 1][1])
      res[res.length - 1][1] = intervals[i][1];
  }
  return res;
};

const intervals = [
  [1, 4],
  [0, 4],
];
// console.log(merge(intervals));
console.log(merges(intervals));

function merges() {
  if (intervals.length == 0) return [];
  intervals.sort(function (a, b) {
    console.log(a, b);
    return a[0] - b[0];
  });
  const res = [intervals[0]];
  console.log("inter", intervals, "res", res);
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else if (intervals[i][1] > res[res.length - 1][1]) {
      res[res.length - 1][1] = intervals[i][1];
    }
  }
  return res;
}
