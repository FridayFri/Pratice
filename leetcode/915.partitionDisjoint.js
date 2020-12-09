var partitionDisjoint = function (A) {
  let ans = 0,
    border = A[0],
    max = A[0];

  for (let i = 1; i < A.length; i++) {
    if (border > A[i]) {
      border = Math.max(max, border);
      ans = i;
    console.log(max)
    }
    max = Math.max(max, A[i]);
  }
  return ans + 1;
};

console.log(partitionDisjoint((num = [1, 1, 1, 0, 6, 12])));
