// 不用每次都去硬盘里找，在内存中缓存

var LURCache = function (capacity) {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];

}
LURCache
LURCache.prototype.get = function (key) {
  //有 返回值
  if (key) {
    var val = this.obj[key];
    if (val > 0) {
      var index = this.arr.indexOf(key); this.arr.splice(index,1);this.arr.unshift(key);
    }else{
      return -1;
    }
  } else {
    return -1;
  }
  //    设置为最近使用
  //没有 -1
}
LURCache.prototype.set = function (key, value) {
  // 如果有key，返回 没有的话，两种可能  1.如果内存满了，arr.pop()   2.如果没满，arr.push()
  if (this.obj[key]) {
    this.obj[key] = value;//更新
    // 最近使用 数组的最前面[0]
    var index = this.arr.indexOf(key)
    this.arr.splice(index, 1)
    this.arr.unshift(key)
  }
  if (this.capacity === this.arr.length) {
    // 放满
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  this.arr.unshift(key);

}
