var balancedStringSplit = function (s) {
  let L = 0;
  let R = 0;
  let sum = 0;
  for (const item of s) {
    if (item === "L") {
      L++;
    } else R++;
    if (L === R) {
      L = R = 0;
      sum ++;
    }
  }
  return sum;
};
var s = "RLLLLRRRLR";
console.log(balancedStringSplit(s));
