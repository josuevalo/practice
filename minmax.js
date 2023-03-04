const minmax = function (list) {
  let firstLast = [];

  if (typeof list[0] === "string") {
    let stringArray = list.sort();
    firstLast.push(stringArray[0], stringArray[stringArray.length - 1]);
  } else if (typeof list[0] !== "string") {
    let newArray = list.sort((a, b) => a - b);
    firstLast.push(newArray[0], newArray[newArray.length - 1]);
  }
  return firstLast;
};
