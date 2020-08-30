/**
 * @param {number} n
 * @return {number}
 */
// var waysToStep = function (n) {
//   const dp = new Array(n + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = 1;
//   dp[2] = 2;
//   dp[3] = 4;
//   for (let i = 4; i <= n; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007;
//   }
//   console.log(dp);
//   return dp[n];
// };

// Better
var waysToStep = function (n) {
  if (n < 3) {
    return n;
  }
  let cur = 4;
  let one = 1;
  let two = 2;
  let three = 4;

  for (let i = 4; i <= n; i++) {
    cur = (one + two + three) % 1000000007;
    one = two;
    two = three;
    three = cur;
  }
  return cur;
};

console.log(waysToStep(5));
