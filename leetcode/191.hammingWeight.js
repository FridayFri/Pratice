var hammingWeight = function(n) {
  const m = String(n.toString(2));
  let res = 0
  for (let i = 0; i < m.length; i++) {
    if (m[i] == 1) {
      res++;
    }
  }

  return res;
};

console.log(hammingWeight(8));
