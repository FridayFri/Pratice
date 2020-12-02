var minTimeToVisitAllPoints = function (points) {
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    let last = points[i - 1];
    let cur = points[i];
    let diff = Math.max(Math.abs(cur[0] - last[0]), Math.abs(cur[1] - last[1]));
    res += diff;
  }
  return res;
};

console.log(
  minTimeToVisitAllPoints(
    (points = [
      [1, 1],
      [3, 4],
      [-1, 0],
    ])
  )
);
