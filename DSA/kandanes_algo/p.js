// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


function findMaximumuSum(nums){
    let curSum=nums[0];
    let mexSum=nums[0];
    let n=nums.length
    for(let i=1;i<n;i++){
        curSum = Math.max(nums[i] , curSum + nums[i]);
         mexSum = Math.max( mexSum ,curSum )
    }
return mexSum
}

console.log(findMaximumuSum( [-2,1,-3,4,-1,2,1,-5,4]))