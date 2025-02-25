// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

function mergeIntervals(intervals){
 intervals = intervals.sort((a,b)=>a[0]-b[0]) //Sort intervals by the starting value
 let merged = [intervals[0]]
 for(let i=1;i<intervals.length;i++){
   let prev = merged[merged.length-1];
   let cur = intervals[i];
   console.log("prev ===>" , prev)
   console.log("cur ===>" , cur)
   if(cur[0]<=prev[1]){
    prev[1] = Math.max(prev[0] ,cur[1])
   }else{
    merged.push(cur)
   }
 }
 return merged
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))