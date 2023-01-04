// Kata from Leetcode // 


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. //

//  You must write an algorithm with O(log n) runtime complexity. //

var searchInsert = function(nums, target) {
  if ( nums.indexOf(target) > 0) {
      return nums.indexOf(target)
  } 
   for (let i = 0; i < nums.length; i++){
      if (nums[i] < target && nums[i+1] > target) {
          return i+1
      } else if (nums[i] >= target) {
           return i
      } else if (i === nums.length -1 ) {
                 return nums.length

       } 
  }
};

console.log(searchInsert([1,3,5,6], 5));

// The above console log should return 2 