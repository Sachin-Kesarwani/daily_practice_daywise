// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// function majorityElements(nums){
//    let candidate=nums[0];
//    let count=1
//    for(let i=1;i<nums.length;i++){
//     if(nums[i]==candidate){
//         count++
//     }else{
//         count--
//     }
//     if(count==0){
//         candidate=nums[i]
//         count=1
//     }
//    }

//     return candidate;
// }
// console.log(majorityElements([2,2,1,1,1,2,2]))



// This is a woodcutting problem, also known as the "Eko" problem in competitive programming. The goal is to determine the maximum height at which a saw (cutter) should be set to obtain at least 7 units of wood.

// Approach
// If we cut at height 
// 𝐻
// H, only the parts above 
// 𝐻
// H contribute to wood.
// For each tree 
// 𝑇
// T, the wood obtained is:
// max
// ⁡
// (
// 0
// ,
// 𝑇
// −
// 𝐻
// )
// max(0,T−H)
// We need to find the maximum 
// 𝐻
// H such that the total wood is at least 7.
// Trees Given
// csharp
// Copy
// Edit
// [10, 15, 17, 20]
// Binary Search Approach
// Set low = 0 and high = max(trees) = 20.
// Find mid = (low + high) / 2 and check how much wood is collected.
// If wood ≥ 7, try a higher cut (move low up).
// If wood < 7, try a lower cut (move high down).
// Stop when low reaches high.



// function maxSawBlade(trees , requiredWood){
//   let low=0;
//   let high = Math.max(...trees);
//   let hieghtofblade=0
//   while(low<high){
//     let mid= Math.floor((low+high)/2)
//     let remain = trees.reduce((acc,tree)=>acc+Math.max(0,(tree-mid)),0)
//     if(remain>=requiredWood){
//         hieghtofblade=remain
//         low=mid+1
//     }else{
//         high=mid-1
//     }
//   }
//   return hieghtofblade
// }

// console.log(maxSawBlade([10, 15, 17, 20]  , 7) ,"sjsj")



// function canBobGiveChange(prices){
//    let five=0;
//    let ten=0;
//    let n= prices.length
//    for(let i=0;i<n;i++){
//     console.log("five  =>",five , "ten ==>",ten , "prices[i]", prices[i])
//     if(prices[i]==5){
//         five++
//     }else if(prices[i]==10){
//         if(five>0){
//             ten++
//             five--
//         }else{
//             return "NO"
//         }
//     }else if(prices[i]==20){
//         if(ten>0 && five>0){
//             ten--
//             five--
//         }else if(five >=3){
//             five=five-3
//         }else{
//             return "NO"
//         }
//     }
//    }
//    return "YES"
// }
// console.log(canBobGiveChange([5, 5, 5, 10, 20 , ])); // "YES"
// console.log(canBobGiveChange([5, 5, 10, 10, 20])); // "NO"
// console.log(canBobGiveChange([5, 5, 5, 5, 10, 5, 10, 20])); // "YES"


// console.log(...undefined)