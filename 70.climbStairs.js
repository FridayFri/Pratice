/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let a = 1,
    b = 2;
  let temp;
  for (let i = 3; i <= n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  return b
};

console.log(climbStairs(10));
