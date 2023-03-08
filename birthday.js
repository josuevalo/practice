function birthdayCakeCandles(candles) {
  // Write your code here

  let biggestNum = 0;
  let totalNum = [];
  candles.forEach((element) => {
    if (element > biggestNum) {
      biggestNum = element;
    }
  });
  candles.forEach((element) => {
    if (element === biggestNum) {
      totalNum.push(element);
    }
  });
  console.log("biggest num:", biggestNum);
  console.log("total num:", totalNum);
  return totalNum.length;
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
console.log(birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]));
