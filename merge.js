const merge = function (array1, array2) {
  var full = [].concat(array1, array2);
  full.sort((a, b) => a - b);
  return full.sort((a, b) => a - b);
};
