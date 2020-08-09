((arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        //从左往右升序排列
        //交换位置
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log(arr);
})([1, 5, 4, 2, 9, 7, 8]); //>>[1,2,4,5,7,8,9]

function maopao(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}
const arr = [1, 5, 4, 2, 9, 7, 8];
console.log(maopao(arr));
