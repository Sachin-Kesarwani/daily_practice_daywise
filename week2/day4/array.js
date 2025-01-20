// // 1 : Find the largest and smallest elements in an array.

// function findLargeandSmall(arr){
//    return {small:Math.min(...arr),large:Math.max(...arr)}
// }

// console.log(findLargeandSmall([1,2,3,5,8,3,])) // { small: 1, large: 8 }

/////////////////////////////////////////////////////////////////////////

// // 2 : Reverse an array.

// function reverseArray(arr){
//   let left=0;
//   let right=arr.length-1
//   while(left<right){
//    [ arr[left] , arr[right]]=[ arr[right] , arr[left]]
//     left++
//     right--
//   }
//   return arr
// }

// console.log(reverseArray([1,2,3,4,5])) //[ 5, 4, 3, 2, 1 ]



// // 3: Find the "Kth" smallest/largest element.



// function findKthSmalllargeElement(arr , k){
//   arr.sort((a,b)=>a-b)
//   return {kthSmall:arr[k-1],kthLarge:arr[arr.length-k]}
// }
// console.log(findKthSmalllargeElement( [7, 10, 4, 3, 20, 15] , 2)) //{ kthSmall: 4, kthLarge: 15 }

// 4:  Sort an array using Bubble Sort.
// // 5:  Move all zeros to the end while maintaining the order of other elements.

// function moveAllZeroesToend(arr){
//   let left=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         [arr[left] , arr[i]] =  [arr[i] , arr[left]]
//         left++
//     }
//   }
//   return arr
// }

// console.log(moveAllZeroesToend([2,0,1,5,0,4,3])) // [2, 1, 5, 4,3, 0, 0]

// // 6:  Find if an array contains duplicate elements.


// function findforDuplicates(arr){
//   let map=new Map();
//   for(let i=0;i<arr.length;i++){
//     map.set(arr[i],(map.get(arr[i])||0)+1)
//   }
//     for(let j=0;j<arr.length;j++){
//         if(map.get(arr[j])>1){
//             return {value:arr[j],frequecy:map.get(arr[j])}
//            }
//     }
//    return -1
// }

// console.log(findforDuplicates([1,2,3,1]))

// // 7:  Rotate an array to the left by "d" positions.


// function rotateanArrDpositions(arr,d){
//   return [...arr.slice(d) , ...arr.slice(0,d)]
// }
// console.log(rotateanArrDpositions([1,2,3,4,5,6,7] , 3))




// // Find the maximum sum of a subarray (Kadane's Algorithm).

// function findMaximumuSum(arr){
//     // using Kadane's Algorithm
//     let maxSUm=arr[0];
//     let currSum=arr[0]
//     for(let i=0;i<arr.length;i++){
//       currSum = Math.max(arr[i] ,currSum+arr[i] )
//       maxSUm = Math.max(maxSUm  , currSum)
//     }
//     return maxSUm
// }
// console.log(findMaximumuSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]

// ))

// Merge two sorted arrays into one sorted array.
// Find the majority element (element appearing more than n/2 times).