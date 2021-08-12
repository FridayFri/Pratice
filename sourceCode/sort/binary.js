function binarySearch(arr, target) {
  let max = arr.length - 1;
  let min = 0;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (target < arr[mid]) {
      max = mid - 1;
    } else if (target > arr[mid]) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 7, 8];
// console.log(binarySearch(arr, 8));

function search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
console.log(search(arr, 7));
