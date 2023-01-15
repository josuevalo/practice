const multiplicationTable = function (maxValue) {
  var table = "";
  for (i = 1; i <= maxValue; i++) {
    table += i;
    var two = i;
    for (j = 1; j < maxValue; j++) {
      two = two + i;

      table += " " + two;
    }
    table = table + "\n";
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
