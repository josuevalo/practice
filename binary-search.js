// Kata from Leetcode // 

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
  return nums.indexOf(target);
};

console.log(search([-1,0,3,5,9,12], 9));

// Expected: 4