var largestSumOfAverages = function (A, K) {
  const prefixSums = [A[0]];
  for (let i = 1; i < A.length; i++) {
    prefixSums[i] = prefixSums[i - 1] + A[i];
  }
  const dp = new Array(A.length).fill(0).map((_) => new Array(K + 1).fill(0));
  for (let k = 1; k <= K; k++) {
    for (let i = k - 1; i < A.length; i++) {
      if (k === 1) {
        dp[i][k] = prefixSums[i] / (i + 1);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const sumRange = prefixSums[i] - prefixSums[j];
          const avg = sumRange / (i - j);
          dp[i][k] = Math.max(dp[i][k], dp[j][k - 1] + avg);
        }
      }
      console.log(prefixSums, dp);
    }
  }
  return dp[dp.length - 1][K];
};

const A = [9, 1, 2, 3, 9];
K = 3;
console.log(largestSumOfAverages(A, K));
