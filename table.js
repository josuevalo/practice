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
