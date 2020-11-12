var replaceWords = function (dictionary, sentence) {
  sentence = sentence.split(" ");
  dictionary.sort((a, b) => b.length - a.length);
  sentence.forEach((item, index) => {
    for (let i = 0; i < dictionary.length; i++) {
      if (item.slice(0, dictionary[i].length) === dictionary[i]) {
        sentence[index] = dictionary[i];
      }
    }
  });
  return sentence.join(" ");
};

const dictionary = ["a", "aa", "aaa", "aaaa"],
  sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa";
console.log(replaceWords(dictionary, sentence));

