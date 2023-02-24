// Convert a given object into an array of arrays.

// Given an object, create an array which contains arrays with the key/value pairs.

// To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

// Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

// Examples

// - objectToArray({ a: 1, b: 2, c: 3 })
//   => [['a', 1], ['b', 2], ['c', 3]]
// - objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
//   => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

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
