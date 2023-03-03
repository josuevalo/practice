const keyMatcher = function (firstObj, secondObj, key) {
  /* IMPLEMENT ME */
  let firstToCompare = "";
  let secondToCompare = "";
  for (let first in firstObj) {
    // console.log("first", first)
    if (first === key) {
      firstToCompare = firstObj[first];
      // console.log("NAME --->", firstToCompare)
    }
  }

  for (let second in secondObj) {
    // console.log("second: ", second)
    if (second === key) {
      secondToCompare = secondObj[second];
      // console.log("------------->>>>>>>>", secondToCompare)
    }
  }

  if (firstToCompare === secondToCompare) {
    return true;
  } else {
    return false;
  }
};
