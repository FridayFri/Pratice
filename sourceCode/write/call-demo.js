Function.prototype.mCall = function (thisArg, ...arr) {
  if (thisArg === null || thisArg === undefined) {
    // 指向null 和 undefined 的this值会自动指向全局对象
    thisArg = window;
  } else {
    console.log('thisArg111', thisArg)
    // thisArg = Object(thisArg);
    console.log('thisArg', thisArg)
  }
  const specialMethod = Symbol("anything");
  thisArg[specialMethod] = this;
  let result = thisArg[specialMethod](...arr);
  delete thisArg[specialMethod];
  return result;
};

const ooo = {
  name: "symbol",
};
function fun1() {
  console.log(this.name);
}
console.log(fun1.mCall(ooo));
