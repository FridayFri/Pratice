// 实现一个call
Function.prototype.myCall = function (thisArg, ...arr) {
  if (thisArg === null || thisArg === undefined) {
    thisArg = window;
  } else {
    thisArg = new Object(thisArg);
  }
  const specialMethod = Symbol("anything");
  console.log(specialMethod);
  thisArg[specialMethod] = this;
  let result = thisArg[specialMethod](...arr);
  delete thisArg[specialMethod];
  return result;
};

let obj = {
  name: "coffe1891",
};

function func() {
  console.log(this.name);
}

//   func.myCall(obj);
console.log(func.myCall(obj));

Function.prototype.mCall = function (thisArg, ...arr) {
  if (thisArg === null || thisArg === undefined) {
      thisArg = window
  }else(
      thisArg = new Object(thisArg)
  )
  const specialMethod = Symbol('any')
  thisArg[specialMethod] = this
  let result = thisArg[specialMethod](...arr)
  delete thisArg[specialMethod]
  return result
};

const ooo = {
    name:'symbol'
}
function fun1(){
    console.log(this.name)
}
console.log(fun1.mCall(ooo))