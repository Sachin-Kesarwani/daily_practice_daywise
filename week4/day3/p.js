// function productExceptSelf(nums) {
//    let n= nums.length
//    let arr = new Array(n).fill(1)
//    let prefix= 1
//    for(let i=0;i<n;i++){
//     arr[i] = prefix
//     prefix=prefix*nums[i]
//    }
// //    [ 1, 1, 2, 6 ]
// let postfix=1
//    for(let i=n-1;i>=0;i--){
//     arr[i]=arr[i]*postfix
//     postfix=postfix * nums[i]
//    }
//    return arr
// }

// // Example usage
// console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]


// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function containerwithmostwater(h){
//   let maxwater=0
//   let i=0;
//   let j=h.length-1
//   while(i<j){
//     const w= j-i
//     let area = Math.min(h[i],h[j]) * w
//     maxwater=Math.max(maxwater , area)
//     if(h[i]<h[j]){
//         i++
//     }else{
//         j--
//     }
//   }
//   return maxwater
// }
// console.log(containerwithmostwater(height))

