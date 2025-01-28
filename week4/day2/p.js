
// function findnonRepeatingchar(str){
//     let obj={}
//     for(let i=0;i<str.length;i++){
//         if(!obj[str[i]]){
//             obj[str[i]]=1
//         }else{
//             obj[str[i]]++
//         }
//     }
//     for(let char of str){
//         if(obj[char]==1){
//             return char
//         }
//     }
//     return -1
// }

// console.log(findnonRepeatingchar("swiss"))


// function findlogestSubstringWithoutDuplicate(str){
//   let set= new Set()
//   let maxChar=-Infinity
//   let left = 0
//   for(let i=0;i<str.length;i++){
//     console.log(set)
//     while(set.has(str[i])){
//         set.delete(str[left])
//      left++
//     }
//     set.add(str[i])
//     maxChar=Math.max(maxChar,i-left+1)
//   }
//   return maxChar
// }
// console.log(findlogestSubstringWithoutDuplicate("abcabcbb"))





// function getIndexsofsumEqulaToTarget(arr , t){
//     arr.sort((a,b)=>a-b)
//     let map = new Map()
//     for(let i=0;i<arr.length;i++){
//       let compen=t-arr[i]
//       if(map.has(compen)){
//         return [map.get(compen),i]
//       }
//       map.set(arr[i],i)
//     }
// //   let i=0;
// //   let j=arr.length-1
// //   while(i<j){
// //     let compen=arr[i]+arr[j]
// //     if(compen===t){
// //       return [i,j]
// //     }else if(compen < t){
// //       i++
// //     }else{
// //         j--
// //     }
// //   }
// }
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(getIndexsofsumEqulaToTarget(nums , target))


// function countElemnetsWitchSeenmorethanone(nums){
//  let obj={}

// for(let i=0;i<nums.length;i++){
//    if(!obj[nums[i]]){
//     obj[nums[i]]=1
//    }else{
//     obj[nums[i]]++
//    }
// }
// return Object.values(obj).filter((item)=>item>1).length
// }
// const nums = [1, 2, 3, 1, 2, 4 , 4];

// console.log(countElemnetsWitchSeenmorethanone(nums))



// function isAnagram(str1 , str2){
//     let obj1={};
//     let obj2={};

//   for(let char of str1){
//     if(!obj1[char]){
//         obj1[char]=1
//     }else{
//         obj1[char]++
//     }
//   }
//   for(let char of str2){
//     if(!obj2[char]){
//         obj2[char]=1
//     }else{
//         obj2[char]++
//     }
//   }
//   for(let key in obj1){
//     if(obj1[key]!==obj2[key]){
//         return false
//     }
//   }
//   for(let key in obj2){
//     if(obj2[key]!==obj2[key]){
//         return false
//     }
//   }
//   return true
// }

// function isAnagram2(str1, str2){
//   if(str1.length!==str2.length){
//     return false
//   }
//   let obj={}
//   for(let char of str1){
//     obj[char] = (obj[char]||0)+1
//   }
//   for(let char of str2){
//     if(!obj[char]){
//         return false
//     }else{
//         obj[char]--   
//     }

//   }
//   return true
// }
// console.log(isAnagram( "listen", "silent"))
// console.log(isAnagram2("listen", "silent"))