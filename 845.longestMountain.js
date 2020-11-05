var longestMountain = function (A) {
  if (A.length < 3) {
    return 0;
  }
  const n = A.length;
  dp1 = new Array(n).fill(1);
  dp2 = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1]) {
      dp1[i] = dp1[i - 1] + 1;
    }
  }
  for (let i = n - 2; i > 0; i--) {
    if (A[i] > A[i + 1]) {
      dp2[i] = dp2[i + 1] + 1;
    }
  }
  console.log(dp1,dp2)
  let res = 0;
  for (let i = 1; i < n-1; i++) {
    if (dp1[i] > 1 && dp2[i] > 1) {
      const cur = dp1[i] + dp2[i] - 1;
      res = Math.max(res, cur);
    }
    console.log(res)
  }
  return res;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
