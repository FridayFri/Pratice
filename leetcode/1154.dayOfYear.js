var dayOfYear = function (date) {
  const dateArr = date.split("-");
  let res = 0;
  const isR = !!(
    (dateArr[0] % 4 === 0 && dateArr[0] % 100 !== 0) ||
    dateArr[0] % 400 === 0
  );
  const ds = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < dateArr[1] - 1; i++) {
    res += ds[i];
  }
  console.log(res, isR);
  if (isR && dateArr[1] > 2) {
    res++;
  }
  return res + +dateArr[2];
};

console.log(dayOfYear("2004-03-01"));
