/**
 * Func: 要操作的类（最后要创建这个类的实例）
 * args：存储未来传递给Func类的实参
 */
function _new(Func, ...args) {
  // 创建一个Func的实例对象（实例.____proto____ = 类.prototype）
  let obj = {};
  obj.__proto__ = Func.prototype;

  // 把Func当做普通函数执行，并改变this指向
  let result = Func.call(obj, ...args);

  // 分析函数的返回值
  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result;
  }
  return obj;
}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);
const car2 = _new(Car, "Eagle", "Talon TSi", 1993);
const car3 = new1(Car, "Eagle3", "Talon TSi3", 1993);
console.log(car1, car2, car3);

function new1(Func, ...args) {
  let obj = {};
  obj.__proto__ = Func.prototype;
  let result = Func.call(obj, ...args);
  console.log('result', result, obj, Func.prototype)
  if (result !== null && /^(object|function)$/.test(typeof result)) {
    return result;
  }
  return obj;
}
