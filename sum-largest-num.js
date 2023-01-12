const sumLargestNumbers = function(findLargest) {
  var firstBiggest = 0
  var secondBiggest = 0
  for (let i = 0; i < findLargest.length; i++) {
    if (findLargest[i] > firstBiggest) {
      firstBiggest = findLargest[i]
    }
  }
  for (let i = 0; i < findLargest.length; i++) {
    if (findLargest[i] < firstBiggest && findLargest[i] > secondBiggest) {
      secondBiggest = findLargest[i]
    }
  }
  return firstBiggest + secondBiggest
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));