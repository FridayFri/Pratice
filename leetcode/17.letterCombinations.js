/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let result = [""];
  for (const d of digits) {
    let temp = [];
    for (const p of result) {
      for (const t of obj[d]) {
        temp.push(p + t);
      }
    }
    console.log('temp',temp)
    result = temp;
  }
  return result;
};

console.log(letterCombinations("23"));
