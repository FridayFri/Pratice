var canThreePartsEqualSum = function (A) {
  const sum = A.reduce((sum, cur) => (sum += cur), 0);
  if (sum % 3) {
    return false;
  }
  const res = sum / 3;
  let temp = 0;
  let times = 0;
  for (let i = 0; i < A.length; i++) {
    temp += A[i];
    if (temp === res) {
      temp = 0;
      times++;
    }
  }
  return temp === 0 && times >= 3 ? true : false;
};

console.log(canThreePartsEqualSum([10,-10,10,-10,10,-10,10,-10]));
