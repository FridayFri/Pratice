var wordBreak = function (s, wordDict) {
    let _result = new Array(s.length + 1).fill(false);
    console.log(_result)
	_result[0] = true;
	for (let i = 0; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (_result[j] && wordDict.includes(s.substring(j, i))) {
				_result[i] = true;
				break
			}
		}
	}
	return _result[s.length]
};

let s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict));
