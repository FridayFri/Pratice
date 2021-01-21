function throttle(fn, delay = 500) {
  let timer = null,
    flag = true;
  return function anonymous(...args) {
    if (!flag) return;
    flag = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, args);
      flag = true
    }, delay);
  };
}

function fn() {
  console.log(111);
}

const a = throttle(fn, 1000);
  a()
  a()
  a()
  a()
  a()
