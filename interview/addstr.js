// 实现大数相加： add('294732947329847328947328947382', '11')  返回'294732947329847328947328947393'

function add(s, t) {
  s = BigInt(s);
  t = BigInt(t);
  return (s + t).toString();
}

function add1(a, b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  let t = 0;
  let f = 0;
  let sum = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    console.log(sum)
    sum = (t % 10) + sum;
  }
  if (f == 1) {
    sum = "1" + sum;
  }
  return sum;
}
console.log(add1("294732947329847328947328947382", "21"));
