var canFormArray = function (arr, pieces) {
  let arr2Str = arr.toString() + ",";
  console.log(arr2Str);
  for (let it of pieces) {
    console.log("it", it);
    if (!arr2Str.includes(it.toString() + ",")) {
      return false;
    }
  }
  return true;
};

console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
