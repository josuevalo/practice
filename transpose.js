const transpose = function (matrix) {
  let [row] = matrix;

  return row.map((value, column) => matrix.map((row) => row[column]));
};
