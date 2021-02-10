var combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (start, temp, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice());
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]); // 选这个数
      dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
      temp.pop();
    }
  };
  dfs(0, [], 0);
  return res;
};

console.log(combinationSum((candidates = [2, 3, 6, 7]), (target = 7)));
