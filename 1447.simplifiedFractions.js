var simplifiedFractions = function (n) {
  const res = [];
  if (n === 1) {
    return [];
  }
  for (let i = 2; i <= n; i++) {
    res.push(`1/${i}`);
    for (let j = 2; j < i; j++) {
      if (gcd(j, i) === 1) {
        res.push(`${j}/${i}`);
      }
    }
  }
  function gcd(a, b) {
      console.log(a,b)
    return b === 0 ? a : gcd(b, a % b);
  }
  return res;
};

console.log(simplifiedFractions(3));
