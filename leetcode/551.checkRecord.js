var checkRecord = function (s) {
  const L = s.indexOf("LLL");
  let A = true
  if(s.indexOf("A") > -1){
    // 找还有没有A，从第一次找到的下标后一位开始
    if(s.indexOf("A", (s.indexOf("A")+1)) > -1){
        A = false;
    }
}

  return A && L === -1;
};
console.log(checkRecord("ALLAPPL"));
