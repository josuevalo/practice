const encrypt = function (plaintext, key) {
  // IMPLEMENT ME
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let array = plaintext.split("");
  let map = array.map((element) => {
    let looped = alphabet.indexOf(element);
    let cipher = looped + key;
    if (element === " ") {
      return " ";
    }
    if (cipher < 0) {
      cipher = cipher + 26;
    } else if (cipher > 26) {
      cipher = cipher - 26;
    }
    let result1 = alphabet[cipher];
    return result1;
  });
  return map.join("");
};
