const numberOfVowels = function (data) {
  var total = 0;
  var vowel = ["a", "e", "i", "o", "u"];
  for (i = 0; i < data.length; i++) {
    var letter = data[i];
    if (vowel.indexOf(letter) !== -1) {
      total++;
    }
  }
  return total;
};
