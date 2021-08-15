let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function myFlat() {
  _this = this; // 保存 this：arr
  let newArr = [];
  // 循环arr中的每一项，把不是数组的元素存储到 newArr中
  let cycleArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        // 元素是数组的话，继续循环遍历该数组
        cycleArray(item);
        continue;
      } else {
        newArr.push(item); // 不是数组的话，直接添加到新数组中
      }
    }
  };
  cycleArray(_this); // 循环数组里的每个元素
  return newArr; // 返回新的数组对象
}

Array.prototype.myFlat = myFlat;

arr = arr.myFlat(); // [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10]
// console.log(arr);

Array.prototype.flat = function () {
  let newArr = [];
  _this = this;
  let cycle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        cycle(item);
      } else {
        newArr.push(item);
      }
    }
  };
  cycle(this);
  return newArr;
};
// console.log(arr.flat());

// reduce
const myFlatReduce = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
  }, []);
};
// console.log(myFlatReduce(arr));
// [12, 23, 34, 56, 78, 90, 100, 110, 120, 130, 140]

const flatReduce = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatReduce(cur) : cur);
  }, []);
};
console.log(arr.flat(),flatReduce(arr));
