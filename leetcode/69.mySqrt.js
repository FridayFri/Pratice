var mySqrt = function (x) {
  if (x === 1) {
    return 1;
  }
  let min = 0,
    max = x;
  while (max - min > 1) {
    let mid = (max + min) / 2;
    if (mid * mid > x) {
      max = mid;
    } else {
      min = mid;
    }
  }

  return parseInt(min);
};

const x = 8;
console.log(mySqrt(x));
