Function.prototype.mApply = function (context, args) {
  context = context === null ? window : context;
  let result;
  context["fn"] = this;
  console.log(this, ...args);
  result = context["fn"](...args);
  delete context["fn"];
  return result;
};

Function.prototype.cApply = function (context, args) {
  context = context === null ? window : context;
  let result;
  context["fn"] = this;
  result = context["fn"](...args);
  delete context["fn"];
  return result;
};

const ooo = {
  name: "symbol",
};
function fun1(...args) {
  console.log(this.name, args);
}
console.log(fun1.mApply(ooo, [1, 2]));
