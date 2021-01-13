var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let dfs = (t, start) => {
    console.log(t,start);
    res.push(t);
    for (let i = start; i < nums.length; i++) {
      // 同层重复，跳过
      if (i != start && nums[i - 1] == nums[i]) continue;
      t.push(nums[i]);
      dfs(t.slice(), i + 1);
      t.pop();
    }
  };
  dfs([], 0);
  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
