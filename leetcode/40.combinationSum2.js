var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const dfs = (start, temp, sum) => {
    if (sum >= target) {
      if (sum == target) {
        res.push(temp.slice());
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
        continue;
      }
      temp.push(candidates[i]);
      dfs(i + 1, temp, sum + candidates[i]);
      temp.pop();
    }
  };
  dfs(0, [], 0);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], (target = 8)));
