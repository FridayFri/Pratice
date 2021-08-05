Function.prototype.myBind = function (obj) {
  const context = obj || window;
  const that = this;
  const _args = [...arguments].splice(1);

  return function () {
    const args = arguments;
    return that.apply(context, [..._args, ...args]);
  };
};

Function.prototype.aBind = function(obj){
  const context = obj || window
  const that = this
  const _args = [...arguments].splice(1)
  console.log(_args)
  return function(){
    const args = arguments
    return that.apply(context, [..._args,...args])
  }
}

/**
 * this: 要处理的函数 func
 * context: 要改变的函数中的this指向 obj
 * params：要处理的函数传递的实参 [10, 20]
 */
Function.prototype._bind = function(context, ...params) {
  
  let _this = this; // this: 要处理的函数
  return function anonymous (...args) {
    // args： 可能传递的事件对象等信息 [MouseEvent]
    // this：匿名函数中的this是由当初绑定的位置 触发决定的 （总之不是要处理的函数func）
    // 所以需要_bind函数 刚进来时，保存要处理的函数 _this = this
    _this.call(context, ...params.concat(args));
  }
}


Function.prototype.cBind = function(context, ...params){
  let _this = this
  return function anonymous(...args){
    console.log('params', params, ...params)
    _this.call(context, params.concat(args))
  }
}


const a = {
  x: "3",
};
var x = "555";
function xxx() {
  console.log(this.x, this);
}
xxx.aBind(a, '222')();
xxx.cBind(a, '222')('3');
