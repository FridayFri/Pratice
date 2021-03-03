function debounce(func, wait = 1000) {
  let timer = null;
  return function anonymous(...params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.call(this, ...params);
    }, wait);
  };
}
function func() {
  console.log(111);
}
const a = debounce1(func);
function debounce1(func, wait = 1000) {
  let timer = null;
  return function (...argus) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(timer);
      func.call(this, argus);
    }, wait);
  };
}

// while(1){
//   a(11)
// }
a(11);
a(11);
a(11);
a(11);
a(11);
a(11);
a(11);
a(11);
a(11);
