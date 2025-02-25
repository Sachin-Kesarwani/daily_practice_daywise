// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function productofArrayExceptSelf(nums){
    let n= nums.length
  let ans = new Array(n).fill(1)
  let prefix= 1
  for(let i=0;i<n;i++){
    ans[i] = prefix
    prefix =prefix*nums[i]
  }
  let postFix=1
  for(let i=n-1;i>=0;i--){
    ans[i] = ans[i]*postFix;
    postFix = postFix*nums[i]
  }
  return ans
}
console.log(productofArrayExceptSelf([1,2,3,4]))