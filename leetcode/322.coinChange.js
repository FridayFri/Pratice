const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      console.log('111', dp[i])
    }
      console.log('111', dp[amount])
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

const coins = [1, 2, 5],
  amount = 120;
console.log(coinChange(coins, amount));
