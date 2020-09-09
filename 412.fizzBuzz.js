/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    const item = i + 1;
    if (!(item % 5)) {
      arr[i] = item % 3 ? "Buzz" : "FizzBuzz";
    } else if (!(item % 3)) {
      arr[i] = item % 5 ? "Fizz" : "FizzBuzz";
    } else {
      arr[i] = `${item}`;
    }
  }
  return arr;
};

console.log(fizzBuzz(15));
