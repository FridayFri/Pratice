function curry(fn, argus = []) {
  return function () {
    let newArgus = argus.concat(Array.prototype.slice.call(arguments));
    if (newArgus.length < fn.length) {
      return curry.call(this, fn, newArgus);
    } else {
      return fn.apply(this, newArgus);
    }
  };
}
function multiFn(x, y, z) {
  return x * y * z;
}

let multi = curry(multiFn);

console.log(multi(2, 3, 4), multi(2)(3)(4));
