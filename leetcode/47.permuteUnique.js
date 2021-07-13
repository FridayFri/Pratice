var permuteUnique = function (nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
};

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    return list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.length === nums.length) continue;
    tempList.push(nums[i]);
    backtrack(list, tempList, nums);
    tempList.pop();
  }
}

console.log(permuteUnique([1, 1, 3]));
