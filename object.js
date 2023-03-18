const objectToArray = function (obj) {
  // IMPLEMENT ME
  // let newArray2 = [];
  let finalArray = [];

  for (let ob in obj) {
    let newArray = [];
    newArray.push(ob);
    newArray.push(obj[ob]);

    finalArray.push(newArray);
  }

  return finalArray;
};
