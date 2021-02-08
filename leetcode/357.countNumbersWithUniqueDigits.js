var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 10;
  if (n > 10) n = 10;
  let sum = 10,
    a = 9,
    b = 9,
    c = n - 2,
    i = 0;
  while (i <= c) {
    a = a * (b - i);
    sum += a;
    i++;
  }
  return sum;
};

console.log(countNumbersWithUniqueDigits(3));
