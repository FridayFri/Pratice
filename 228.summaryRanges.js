//给定一个升序整型数组[0,1,2,4,5,7,13,15,16]
//找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"]

function summaryRange(nums) {
  let temp = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      temp.push(nums[i]);
    } else {
      if (nums[i] - 1 === nums[i - 1]) {
        temp.push(nums[i]);
      }
      if (temp.length) {
        res.push(`${temp[0]}->${temp[temp.length - 1]}`);
        temp = [];
      } else {
        res.push(nums[i].toString());
      }
    }
  }
  return res;
}
const nums = [0, 1, 2, 4, 5, 7, 13, 15, 16];
console.log(summaryRange(nums));
