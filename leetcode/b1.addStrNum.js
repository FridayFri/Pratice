function addSerial(arr) {
  var result = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const num = map.get(arr[i]);
      map.set(arr[i], num + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (const [item, key] of map) {
    if (key > 1) {
      map.set(item, key + 1);
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const time = map.get(arr[i]);
    if (time > 1) {
      result[i] = `${arr[i]}${time - 1}`;
      map.set(arr[i], time - 1);
    } else {
      result[i] = arr[i];
    }
  }
  return result;
}

console.log(addSerial(["ab", "c", "ab", "d", "c"]));
