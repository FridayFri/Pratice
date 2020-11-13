let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16];

// for (let i = 0; i < arr.length - 1; i++) {
//   let item = arr[i]; // 取得当前数组中的每一项
//   let remain = arr.slice(i + 1); // 取剩余
//   if (remain.indexOf(item) > -1) {
//     // 查重
//     arr[i] = arr[arr.length - 1]; // 有的话和最后一个元素交换位置
//     arr.length--; // 删除最后一个
//     i--; // 交互完后再从本身查
//   }
// }

// console.log(arr); // [ 16, 23, 12, 15, 25 ]

let obj = {};
for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  if (typeof obj[item] !== 'undefined') {
    arr[i] = arr[arr.length - 1]; // 有的话和最后一个元素交换位置
    arr.length--; // 删除最后一个
    i--; // 交互完后再从本身查
  }
  obj[item] = item
}
obj = null
console.log(arr)
