function _instanceof(instanceObject, classFunc1) {
  let classFunc = classFunc1.prototype; // 取得当前类的原型
  let proto = instanceObject.__proto__; // 取得当前实例对象的原型链

  while (true) {
    if (proto === null) {
      // 找到了 Object的基类 Object.prototype.__proto__
      return false;
    }
    if (proto === classFunc) {
      // 在当前实例对象的原型链上，找到了当前类
      return true;
    }
    proto = proto.__proto__; // 沿着原型链__ptoto__一层一层向上查找
  }
}

// 定义构造函数
function C() {}
function D() {}

var o = new C();
console.log(_instanceof(o, C));
console.log(o instanceof C); // true，因为 Object.getPrototypeOf(o) === C.prototype

function instanceof1(instanceObject, origin) {
  let classFunc = origin.prototype;
  let proto = instanceObject.__proto__;
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === classFunc) {
      return true;
    }
    proto = proto.__proto__;
  }
}
console.log(instanceof1(o, C));
