var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let k = piles.length / 3;
  let res = 0;
  for (let i = 0; i < k; i++) {
    res += piles[i * 2 + 1];
  }
  return res;
};

console.log( 
  maxCoins((piles = [4, 4, 17, 7, 16, 16, 16, 15, 2, 3, 1, 17, 6]))
);

