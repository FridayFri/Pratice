/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  if (A.length === 0) {
    return A;
  }
  const m = [];
  const n = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2) {
      m.push(A[i]);
    } else {
      n.push(A[i]);
    }
  }
  console.log(m, n);
  return [...n,...m]
};

const A = [3, 1, 2, 4];
console.log(sortArrayByParity(A));
