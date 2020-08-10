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
const arr = [1, 5, 4, 2, 9, 7, 8];
console.log(binarySearch(arr, 8));

function twoSearch(arr, target) {
  let max = arr.length - 1;
  let min = 0;
  while (min <= max) {
    let mid = ((max + min) / 2) | 0;
    if (target < arr[mid]) {
      max = mid - 1;
    }else if(target > arr[mid]){
        min = mid -1
    }else{
        return mid
    }
  }
  return 'target不存在'
}
console.log(twoSearch(arr, 0));
