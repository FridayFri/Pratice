/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i].toLowerCase();
  }
  return res;
};

const str = "Hello";
console.log(toLowerCase(str));
