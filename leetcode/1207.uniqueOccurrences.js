var uniqueOccurrences = function (arr) {
  const check={}
  for(const item of arr){
      check[item]? check[item]++:check[item]=1
  }
  return Object.values(check).length === new Set(Object.values(check)).size
};

const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences(arr));
