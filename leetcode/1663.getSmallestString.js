var getSmallestString = function (n, k) {
  let res = Array(n).fill("a"),
    remain = k - n,
    i = n - 1;
  while (remain) {
    if (remain > 25) {
      res[i] = "z";
      remain -= 25;
      i--;
    } else {
      res[i] = String.fromCharCode(97 + remain);
      break;
    }
  }
  return res.join("");
};

console.log(getSmallestString((n = 5), (k = 73)));
