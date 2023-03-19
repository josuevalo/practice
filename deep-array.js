const deepArrayToObject = function (arr) {
  // IMPLEMENT ME
  let finalObject = {};

  for (let array of arr) {
    if (!Array.isArray(array[1])) {
      finalObject[array[0]] = array[1];
    } else {
      // console.log(array);
      finalObject[array[0]] = deepArrayToObject(array[1]);
      // console.log("final object", finalObject)
      // deepArrayToObject(array)
    }
  }
  return finalObject;
};
