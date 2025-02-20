console.log(Math.max()); 
console.log(Math.min()); 



// function useDebounce(fn , delay){
//     let timeout;
//     return function (...data){
//         if(timeout) clearTimeout(timeout)
//       timeout= setTimeout(() => {
//         fn(...data)
//       }, delay);
//     }
// }

// let debounce=useDebounce(()=>{
//     console.log("hellow wrold")
// } , 100)
// debounce()
// debounce()
// debounce()
// debounce()
// debounce()
// debounce()


// function useTrottle(fn , delay){
//     let lastTime = 0
//   return function (...data){
//   let curTime= new Date().getTime()
//   if(curTime-lastTime>=delay){
//     fn(...data)
//     lastTime = curTime
//   }
//   }
// }
// let throttle = useTrottle(()=>{
//     console.log("used throttle")
// } , 200)
// throttle()
// throttle()
// throttle()
// throttle()
// throttle()