var reverse = function(num) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31) - 1;
  let result;
  let arr = ("" + num).split("");

  arr.reverse();

  if (arr[0] === "0") {
    arr.shift();
  }

  if (arr[arr.length - 1] === "-") {
    arr.pop();
    arr.unshift("-");
  }

  result = +arr.join("");
  return result > MAX || result < MIN ? 0 : result;
};

console.log(reverse(123));
