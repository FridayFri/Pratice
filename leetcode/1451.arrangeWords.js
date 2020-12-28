var arrangeWords = function (text) {
  const tem = text.split(" ").sort((a, b) => a.length - b.length);
  let res = "";
  for (let i = 0; i < tem.length; i++) {
    if (i === 0) {
      res = tem[0].slice(0, 1).toUpperCase() + tem[0].slice(1) + " ";
    } else {
      res += tem[i].toLowerCase() + " ";
    }
  }
  return res.trim();
};

console.log(arrangeWords("Keep calm and code on"));
