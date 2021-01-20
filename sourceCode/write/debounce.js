function debounce(func, wait = 1000) {
  let timer = null;
  return function anonymous(...params) {
      console.log(params,'2')
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
const a = debounce(func);
a(11)
