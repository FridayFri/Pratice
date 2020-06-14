var isMonotonic = function (A) {
  let flag;
  for (let i = 0; i < A.length - 1; i++) {
    if (!flag) {
      if (A[i] > A[i + 1]) {
        flag = 1;
      } else if (A[i] < A[i + 1]) {
        flag = 2;
      }
      continue;
    }
    if (flag === 1 && A[i] < A[i + 1]) return false;
    if (flag === 2 && A[i] > A[i + 1]) return false;
  }
  return true;
};
var nums = [1, 2, 2, 3, 2];
console.log(isMonotonic(nums));
