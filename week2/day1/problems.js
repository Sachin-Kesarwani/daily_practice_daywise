
////1
// function convertTonumberfromRoman(s){
//     let roman={
//         "I":1,
//         "V":5,
//         "X":10,
//         "L":50,
//         "C":100,
//         "D":500,
//         "M":1000
//     }
//     let total=0;
//     let preVal=0;
//     for(let i=s.length-1;i>=0;i--){
//         const currVal=roman[s[i]]
//         console.log("currVal===>" , currVal)
//           if(currVal<preVal){
//             total-=currVal
//           }else{
//             total+=currVal
//           }
//           console.log("total===>" , total)
//           preVal = currVal
//     }
//     return total
// }

// console.log(convertTonumberfromRoman("MCMXCIV"))

//// 2
// console.log(1/0)
// console.log(1-"a")

////3
// let a=[1,2,3,4,5,6,2,3,4]//[2,3,4]
// let obj={}
// console.log(a.filter((item,index)=>a.indexOf(item)!== index))

////4

// let str="MyNameIsSachin"
// let text="";
// str.split("").forEach((item)=>{
//     if(item.toUpperCase()===item){
//         text = text+" "+item
//     }else{
//         text=text+item
//     }
// })
// console.log(text)