// Kata from Leetcode // 


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

searchInsert([1,3,5,6], 5)