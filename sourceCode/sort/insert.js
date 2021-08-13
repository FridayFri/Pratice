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

function insert1(arr) {
  let pre, cur;
  for (let i = 1; i < arr.length; i++) {
    pre = i - 1;
    cur = arr[i];
    while (pre >= 0 && arr[pre] > cur) {
      arr[pre + 1] = arr[pre];
      pre--;
    }
    arr[pre + 1] = cur;
  }
  return arr
}

const arr = [3, 2, 1, 4, 6, 5];
console.log(insert1(arr));
