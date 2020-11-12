var minCount = function (coins) {
  let res = 0;
  for (const item of coins) {
    res += (item / 2) | 0;
    if (item % 2) {
      res++;
    }
  }
  return res;
};

const coins = [2, 3, 10];

console.log(minCount(coins));
