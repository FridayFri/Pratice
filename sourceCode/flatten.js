/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */
function flatten(data) {
  /* 代码实现 */
  var hashMap = {};

  function helper(data, key = "") {
    for (var i in data) {
      if (data[i] === null || data[i] === undefined) continue;
      var k;
      if (Array.isArray(data)) {
        k = key ? `${key}[${i}]` : i;
      } else {
        k = key ? `${key}.${i}` : i;
      }
      if (typeof data[i] === "object") {
        helper(data[i], k);
      } else {
        hashMap[k] = data[i];
      }
    }
  }

  helper(data);

  return hashMap;
}
var input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
};
// console.log(flatten(input));

function myFlatten(data) {
  const hashMap = {};
  function helper(data, key = "") {
    console.log("param", data, key);
    for (const i in data) {
      if (data[i] === null || data[i] === undefined) continue;
      let k;
      if (Array.isArray(data)) {
        k = key ? `${key}[${i}]` : i;
      } else {
        k = key ? `${key}.${i}` : i;
      }
      if (typeof data[i] === "object") {
        helper(data[i], k);
      } else {
        hashMap[k] = data[i];
      }
      console.log("result", hashMap);
    }
  }
  helper(data);
  return hashMap;
}
console.log(myFlatten(input));
