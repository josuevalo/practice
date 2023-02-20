const loopyLighthouse = function (range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    let multipleZero = x % multiples[0] === 0;
    let multipleOne = x % multiples[1] === 0;
    if (multipleZero && multipleOne) {
      console.log(words[0] + words[1]);
    } else if (multipleZero) {
      console.log(words[0]);
    } else if (multipleOne) {
      console.log(words[1]);
    } else if (x < range[1]) {
      console.log(x);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);