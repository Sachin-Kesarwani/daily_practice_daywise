// Problem Statement
// Given a sorted array of integers nums and a target value target, find two numbers such that they add up to target. Return their indices.

// Input
// nums = [2, 7, 11, 15]
// target = 9
// Output
// [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

//Solution
// function targetPairSum(arr,t){

//   let left=0;
//   let right= arr.length-1
//   while(left<right){
//     let curSum = arr[left]+arr[right]
//     if(curSum ==t){
//         return [left , right]
//     } else if(curSum<t){
//         left++
//     }else{
//         right--
//     }
//   }
//   return "not found"
// }
// console.log(targetPairSum([2, 7, 11, 15], 13))

// 2. Problem: Remove Duplicates from Sorted Array
// Problem Statement
// Given a sorted array nums, remove duplicates in-place such that each element appears only once and return the new length.

// Input
// nums = [0, 0, 1, 1, 2, 2, 3, 3, 4]
// Output
// 5 (unique elements are [0, 1, 2, 3, 4])
// Solution

// Solution:
// function removeDuplicates(nums) {
//     let left = 0;
//     for (let right = 1; right < nums.length; right++) {
//         if (nums[left] !== nums[right]) {
//             left++;
//             nums[left] = nums[right];
//         }
//     }
//     return left + 1;
// }

// // Example:
// let nums1 = [1, 1, 2, 2, 3];
// console.log(removeDuplicates(nums1)); // Output: 3
// console.log(nums1); // Modified array: [1, 2, 3, ...]





// Here are some real-world problems that can be solved using the two-pointer approach in JavaScript:

// 1. Problem: Finding the Pair of Items with the Closest Sum
// Problem Statement:
// You are given a list of product prices, and you need to find two products whose sum is as close as possible to a target amount. The list of prices is already sorted.

// Input:
// A sorted array of product prices.
// A target sum.
// Output:
// The pair of product prices whose sum is closest to the target sum.

function closestPair(arr , t){
  let left = 0 ;
  let right= arr.length-1;
  let smallSum=Infinity;
  let pair=[]
  while(left < right){
    let sum= arr[left] + arr[right];
    if(sum == t){
        return [arr[left] , arr[right]]
    }
    if(Math.abs(sum-t)<Math.abs(smallSum-t)){
        smallSum=sum;
        pair=[arr[left] , arr[right]]
    }
    if(sum<t){
        left++
    }else{
        right--
    }
  }
  return pair
}

console.log(closestPair([1, 3, 5, 8, 11, 15], 10)); // Output: [3, 8]
