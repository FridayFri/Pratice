var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkIfExist((arr = [7, 1, 14, 11])));
