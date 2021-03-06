/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
};

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    return list.push([...tempList]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) continue;
    tempList.push(nums[i]);
    console.log('1', tempList);
    backtrack(list, tempList, nums);
    tempList.pop();
    console.log('2',i, tempList);
  }
}

const nums = [1, 2, 3];
console.log(permute(nums));
