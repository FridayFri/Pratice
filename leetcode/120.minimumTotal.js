var minimumTotal = function (triangle) {
    if(triangle.length===0){
        return 0
    }
    if(triangle.length===1){
        return triangle[0][0]
    }
  for (let i = 2; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      //三种情况
      if (j === 0) {
        triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
      } else if (i === j) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j];
      } else {
        triangle[i][j] = Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]) + triangle[i][j];
      }
    }
  }
  //返回最后一行最小值
  return Math.min(...triangle[triangle.length - 1]);
};

const triangle = 
[[-10]];
// [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
