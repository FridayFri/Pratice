function deepClone(target) {
  if (target === null) return null;
  if (typeof target !== 'object') return target;
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop]);
    }
  }
  return cloneTarget;
}

const a = {
  b: 1,
  c: "2",
};
console.log(deepClone(a));
