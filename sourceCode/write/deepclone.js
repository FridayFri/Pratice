function deepCopy(obj) {
  // 创建一个新对象
  let result = {};
  let keys = Object.keys(obj),
    key = null,
    temp = null;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    temp = obj[key];
    // 如果字段的值也是一个对象则递归操作
    if (temp && typeof temp === "object") {
      result[key] = deepCopy(temp);
    } else {
      // 否则直接赋值给新对象
      result[key] = temp;
    }
  }
  return result;
}
const isObject = (target) =>
  (typeof target === "object" || typeof target === "function") &&
  target !== null;

function deepClone(target, map = new Map()) {
  let result = {};
  let keys = Object.keys(target),
    key = null,
    temp = null;
    for(let i = 0;i<keys.length;i++){
      key = keys[i]
      temp = target[key]
      if(isObject(temp)){
        map.set(temp, true)
        result[key] = deepClone(temp, map)
      }else{
        return target
      }
    }
  // 先判断该引用类型是否被 拷贝过
  if (map.get(target)) {
    return target;
  }
}
var A = {
  a: 1,
  b: [1, 2, 3],
  c: {
    0: 0,
  },
  d: undefined,
  e: null,
  f: new Date(),
};
A.A = A;
console.log(deepClone(A));
