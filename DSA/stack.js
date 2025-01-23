// 1. Reverse a String using a Stack
// Input:reverseString("hello");
// Output:"olleh"

// function reverseString(str){
//   let stack=[];
//   for(let char of str){
//     stack.push(char)
//   }
//   console.log(stack)
//   let res=""
//  while(stack.length>0){
//     res+=stack.pop()
//  }
//   return res
// }
// console.log(reverseString("hello"))


// 3. Check for Balanced Parentheses
// Input:isBalanced("( [ { } ] )");
// Output:true

// function isBalanced(str){
//     str=str.split(" ");
//     let stack=[]
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="("||str[i]=="{"||str[i]=="["){
//             stack.push(str[i])
//         }else{
//             if(str[i]===")" && stack.pop()!=="("){
//                 return false
//             }
//             if(str[i]==="]" && stack.pop()!=="["){
//                 return false
//             }
//             if(str[i]==="}" && stack.pop()!=="{"){
//                 return false
//             }
//         }
//     }
// return true
// }
// console.log(isBalanced("( [ [ [] ] ] )"))


// 4. Evaluate Postfix Expression
// Input:evaluatePostfix("231*+9-");
// Output:-4


// function evaluatePostfix(exp){
//     let stack=[]
//     for(let i=0;i<exp.length;i++){
//         if(!isNaN(exp[i])){
//             stack.push(Number(exp[i]))
//         }else{
//             const a= stack.pop();
//             const b=stack.pop()
//             if(exp[i]==="+"){
//                 stack.push(a+b)
//             }
//             if(exp[i]==="-"){
//                 stack.push(a-b)
//             }
//             if(exp[i]==="*"){
//                 stack.push(a*b)
//             }
//             if(exp[i]==="/"){
//                 stack.push(a/b)
//             }
//         }
//     }
//   return  stack.pop();
// }
// console.log(evaluatePostfix("231*+9-"))


// 8. Find Next Greater Element
// Input:nextGreater([4, 5, 2, 25]);
// Output:[5, 25, 25, -1]

// function nextGreater(arr){
//     const stack = [];
//     const result = new Array(arr.length).fill(-1);
  
//     for (let i = 0; i < arr.length; i++) {
//       while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
//         result[stack.pop()] = arr[i];
//       }
//       stack.push(i);
//     }
  
//     return result;
// }
// console.log(nextGreater([4, 5, 2, 25]))