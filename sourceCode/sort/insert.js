function insert(arr) {
  let preIndex, cur;
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    cur = arr[i];
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  return arr;
}

const arr = [3, 2, 1, 4, 6, 5];
console.log(insert(arr));
