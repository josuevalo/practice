const repeatNumbers = function (data) {
  var repeat = [];
  for (var x = 0; x < data.length; x++) {
    var string = "";
    for (var y = 0; y < data[x][1]; y++) {
      string += data[x][0];
    }
    repeat.push(string);
  }
  return repeat.join(",");
};
