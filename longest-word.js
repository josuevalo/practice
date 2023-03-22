function findLongestWord(str) {
  var longest = str.split(" ").reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
  return longest;
}
