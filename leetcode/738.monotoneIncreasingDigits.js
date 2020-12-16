var monotoneIncreasingDigits = function (N) {
  if (N < 10) {
    return N;
  }

  let str = N.toString();
  let arr = str.split("");
  let index = arr.length - 1;

  for (let i = arr.length - 1; i > 0; i--) {
    console.log(arr);
    if (Number(arr[i]) < Number(arr[i - 1])) {
      arr[i - 1] -= 1;
      index = i - 1;
    }
  }
  for (let i = index + 1; i < arr.length; i++) {
    arr[i] = "9";
  }
  return Number(arr.join(""));
};

console.log(monotoneIncreasingDigits((N = 1234)));
