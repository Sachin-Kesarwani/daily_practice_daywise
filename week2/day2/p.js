// function isPalindrome(str) {
//     // Helper function to check if a character is alphanumeric
//     const isAlphanumeric = (char) => /[a-z0-9]/i.test(char);
// console.log(isAlphanumeric("A"))
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         // Move left pointer until it points to an alphanumeric character
//         while (left < right && !isAlphanumeric(str[left])) {
//             left++;
//         }
//         // Move right pointer until it points to an alphanumeric character
//         while (left < right && !isAlphanumeric(str[right])) {
//             right--;
//         }

//         // Compare the characters at the pointers
//         if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//             return false;
//         }

//         // Move pointers inward
//         left++;
//         right--;
//     }

//     return true;
// }






// function isPalindrome(str){
//     let alphanumeric=(char)=>/[a-z0-9]/i.test(char)
//     let left=0
//     let right=str.length-1;
//     while(left<right){
//         while(left<right && !alphanumeric(str[left])){
//             left++
//         }
//         while(left<right && !alphanumeric(str[right])){
//             right--
//         }
//         if(str[left].toLowerCase()!==str[right].toLowerCase()){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }










// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false




// function romanToInt(num){
//  let total=0;
//  let roman={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
//  for(let i=0;i<num.length;i++){
//     if(roman[num[i]] < roman[num[i+1]]){
//       total-=roman[num[i]]
//     }else{
//         total+=roman[num[i]]
//     }
//  }
//  return total
// }
// console.log(romanToInt("XXIV")); // 14

function flattenArray(arr){
    // return arr.reduce((acc,curr)=>{
    //    return Array.isArray(curr)?acc.concat(flattenArray(curr)):acc.concat(curr)
    // },[])

    // or
    
    return arr.flat(Infinity)

}
console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
