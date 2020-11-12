var customSortString = function (S, T) {
  T = T.split("");
  console.log(T)
  T.sort((a, b) => {
      console.log(S.indexOf(a),S.indexOf(b))
    return S.indexOf(a) - S.indexOf(b);
  });
  return T.join("");
};

const S = "cba",
  T = "abcd";

console.log(customSortString(S, T));
