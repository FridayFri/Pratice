Function.prototype.myBind = function (obj) {
  const context = obj || window;
  const that = this;
  const _args = [...arguments].splice(1);

  return function () {
    const args = arguments;
    return that.apply(context, [..._args, ...args]);
  };
};

Function.prototype.mBind = function (obj) {
  const context = obj || window;
  const that = this;
  const _args = [...arguments].splice(1);
  console.log("_args", _args);
  return function () {
    const args = arguments;
    console.log("args", args);
    return that.apply(context, [..._args, ...args]);
  };
};

const a = {
  x: "3",
};
var x = "555";
function xxx() {
  console.log(this.x, this);
}
xxx.mBind(a, '222')();
