// function numberToroman(n){
//   let romans=[
//     {value:1000 , roman:"M"},
//     {value:900,roman:"CM"},
//     {value:500,roman:"D"},
//     {value:400,roman:"CD"},
//     {value:100,roman:"C"},
//     {value:90,roman:"XC"},
//     {value:50,roman:"L"},
//     {value:40,roman:"XL"},
//     {value:10,roman:"X"},
//     {value:9,roman:"IX"},
//     {value:5,roman:"V"},
//     {value:4,roman:"IV"},
//     {value:1,roman:"I"},
//   ]
//   let res=""
//   for(let {value , roman} of romans){
//     while(n>=value){
//      res=res+roman
//      n=n-value
//     }
//   }
//   return res
// }
// console.log(numberToroman(3300))



// function romanToInteger(roman){
//  let intergers={
//     "M":1000,
//     "D":500,
//     "C":100,
//     "L":50,
//     "X":10,
//     "V":5,
//     "I":1
//  }
//  let ans= 0
//  for(let i=0;i<roman.length;i++ ){
//    if(intergers[roman[i]]<intergers[roman[i+1]]){
//     ans-=intergers[roman[i]]
//    }else{
//     ans+=intergers[roman[i]]
//    }
//  }
//  return ans
// }

// console.log(romanToInteger("XL"))


// function isPalindrome(str){
//     let left = 0;
//     let right= str.length-1
//     let isValidText=(char)=>/[a-zA-Z0-9]/i.test(char)
//     while(left<right){
//         if(!isValidText(str[left])){
//           left++
//         }
//         if(!isValidText(str[right])){
//             right--
//           }
//           if(str[left].toLowerCase()===str[right].toLowerCase()){
//             left++
//             right--
//           }else{
//             return false
//           }
//     }
// return true
// }
// console.log(isPalindrome("racecarw"))


// Input: 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

// javascript
// Copy
// Edit
// Question: Write a function that prints numbers from 1 to n. Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

// function Addfizzbuzz(n){
//     let ans= []
//   for(let i=1;i<=n;i++ ){
//     if(i%3 === 0 && i%5 === 0){
//      ans.push("FizzBuzz")
//     }else if(i%3 === 0 ){
//         ans.push("Fizz")
//     }else if(i%5 === 0 ){
//         ans.push("Buzz")
//     }else{
//         ans.push(i)
//     }
//   }
//   return ans
// }
// console.log(Addfizzbuzz(15))


// Question: Find two numbers in an array that add up to a target.
// Input: [2, 7, 11, 15], 9
// Output: [0, 1]


// function isSumof2numEqualTarget(arr, k){
//     let map=new Map()
//     for(let i=0;i<arr.length;i++){
//         let complemet=k-arr[i]
//         if(map.has(complemet)){
//             return [map.get(complemet) , i]
//         }
//         map.set(arr[i] , i)
//     }
// return []
// }
// console.log(isSumof2numEqualTarget([2, 11, 7,15] ,9))


// 6. Find Duplicates in an Array
// Question: Return all duplicates in an array.
// Input: [1, 2, 3, 1, 2, 4]
// Output: [1, 2]

// function findDuplicates(arr){
//     let obj={}
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//        if(obj[arr[i]]) {
//         res.push(arr[i])
//        }
//        obj[arr[i]]=true
//     }   
//    return res
// }
// console.log(findDuplicates([1, 2, 3, 1, 2, 4 , 3]))


// 7. Remove Duplicates from an Array
// Question: Remove duplicates from an array.
// Input: [1, 2, 3, 1, 2, 4]
// Output: [1, 2, 3, 4]

// function removeDuplicates(arr){
//     let obj={}
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//        if(!obj[arr[i]]) {
//         res.push(arr[i])
//        }
//        obj[arr[i]]=true
//     }   
//    return res
// }
// console.log(removeDuplicates([1, 2, 3, 1, 2, 4 , 3]))



// 10. Find Intersection of Two Arrays
// Question: Find common elements between two arrays.
// Input: [1, 2, 3], [2, 3, 4]
// Output: [2, 3]

// function intersectionoftwoArrays(a1, a2){

//     return a1.filter((el)=>a2.includes(el))

// }
// console.log(intersectionoftwoArrays([1, 2, 3] , [2, 3, 4]))


// 12. Merge Sorted Arrays
// Question: Merge two sorted arrays into a single sorted array.
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]


// function mergeSortedArray(a1, a2){
//   let i=0
//   let j=0
//   let res=[]
//   while(i<a1.length  && j<a2.length){
//     if(a1[i]<a2[j]){
//         res.push(a1[i])
//         i++
//     }else{
//         res.push(a2[j])
//         j++
//     }
//   }
//   return res.concat(a1.slice(i)).concat(a2.slice(j))
// }

// console.log(mergeSortedArray([1, 3, 5],[2, 4, 6] ))


// 14. Implement Binary Search
// Question: Implement binary search to find a target in a sorted array.
// Input: [1, 2, 3, 4, 5], 3
// Output: 2

// function binarySearch(arr , k){
//     let left =0
//     let right =arr.length-1
//     while(left<right){
//         let mid= Math.floor((left+right)/2)
//         if(arr[mid]==k){
//             return mid
//         }else if(arr[mid]<k){
//             leftmid+1
//         }else{
//             right=mid-1
//         }
//     }

// }
// console.log(binarySearch([1, 2, 3, 4, 5] , 3))



// function kadanesAlgo(arr){
//   let currSum=arr[0];
//   let maxSum =arr[0]
//   for(let i=1;i<arr.length;i++){
//     currSum = Math.max(arr[i] ,currSum+arr[i])
//     maxSum = Math.max(maxSum , currSum)

//   }
//   return maxSum
// }
// console.log(kadanesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


// function gcd(a,b){
//     return b==0?a:gcd(b,a%b)
// }
// //   console.log(gcd(36, 60)); // 12

//   function lcm(a,b){
//     return a*b/gcd(a,b)
//   }

//   console.log(lcm(4,6))


// 32. Group Anagrams
// Question: Group words that are anagrams together.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// function groupAnagrams(arr){
//    let obj={}
//    for(let i=0;i<arr.length;i++){
//     let key = arr[i].split("").sort().join("")
//     if(!obj[key]){
//         obj[key]=[arr[i]]
//     }else{
//         obj[key].push(arr[i]) 
//     }
//    }
//    return Object.values(obj)
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))