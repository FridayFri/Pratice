/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  if (!n) {
    return `${n}`;
  }
  let count = 0;
  let ans = "";
  while (n) {
    let cur = n % 10;
    n = Math.floor(n / 10);
    ans = cur.toString() + ans;
    ++count;
    if (count % 3 == 0 && n) {
      ans = "." + ans;
    }
  }
  return ans;
};

console.log(thousandSeparator(987));
