// Kata from Leetcode // 

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. //

var sortedSquares = function(nums) {
  let squaredArray = [];
  for (let i = 0; i < nums.length; i++) {
      squaredArray.push(Math.pow(nums[i], 2))                
  }
   return squaredArray.sort((a, b) => a - b)
};

console.log(sortedSquares([-4,-1,0,3,10]));