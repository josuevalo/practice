const partition = function (arr, callback) {
  // IMPLEMENT ME
  let firstArray = [];
  let secondArray = [];
  let finalArray = [];

  for (let ar of arr) {
    if (callback(ar)) {
      firstArray.push(ar);
    } else {
      secondArray.push(ar);
    }
  }
  finalArray.push(firstArray, secondArray);
  return finalArray;
};
