function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = arr[i];
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 找到最小元素
      if (arr[j] < minVal) {
        minVal = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i];
    arr[i] = minVal;
  }
  return arr;
}

function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    arr[index] = arr[i];
    arr[i] = min;
  }
  return arr;
}

const arr = [3, 2, 1, 4, 6, 5];
console.log(selectSort(arr));
console.log(select(arr));
