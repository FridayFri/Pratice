var mostCommonWord = function (paragraph, banned) {
  const strToArr = paragraph.match(/[a-zA-Z]+/g);
  console.log(strToArr);
  const map = new Map();
  let max = Number.MIN_SAFE_INTEGER,
    result = "";
  for (let i = 0; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i].toLowerCase();
    const time = map.get(strToArr[i]) || 0;
    const index = banned.findIndex((item) => item === strToArr[i]);
    if (time) {
      map.set(strToArr[i], time + 1);
    } else {
      map.set(strToArr[i], 1);
    }
    if (time + 1 > max && index === -1) {
      console.log(max);
      max = time + 1;
      result = strToArr[i];
    }
  }
  return result;
};
const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));
