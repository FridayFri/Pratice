/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
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
  const res=[]
  const temp = digits.split('')
  console.log('temp', temp)
};

console.log(letterCombinations("23"));
