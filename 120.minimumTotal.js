var minimumTotal = function (triangle) {
  //创建和triangle一样行数的dp状态数组
  let dp = triangle.map(() => []);
  //初始状态数组的初始值，也是临界值
  dp[0][0] = triangle[0][0];
  //建立状态数组表，记录triangle数组中，每个值的路径和
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      //三种情况
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (i === j) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }
    }
  }
  //返回最后一行最小值
  return Math.min(...dp[triangle.length - 1]);
};

const triangle = [[-10]];
// [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
