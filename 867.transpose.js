var transpose = function (A) {
  const B = [];
  for (let i = 0; i < A[0].length; i++) {
    B[i] = [];
    for (let j = 0; j < A.length; j++) {
      B[i][j] = A[j][i];
    }
  }
  console.log(A, "b", B);
  return B;
};

const A = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(transpose(A));
