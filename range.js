const range = function (arr) {
  /* IMPLEMENT ME */
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= lowest) {
      lowest = arr[i];
    }
  }

  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest - lowest;
};
