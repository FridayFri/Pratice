var longestCommonPrefix = function(strs) {
  let arr = [];
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    arr.push(strs[i].length);
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let j = 0; j < arr[0]; j++) {
    let s = strs[0][j];
    console.log(strs[0]);
    if (strs.every(val => val[j] === s)) {
      result += s;
      console.log(result);
    } else {
      break;
    }
  }
  return result;
};

var common = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(common));
