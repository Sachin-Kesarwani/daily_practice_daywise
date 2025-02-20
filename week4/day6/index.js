// let input = document.getElementById("input");
// let h1 = document.getElementById("heading");


// function debounce(fn,delay){
//     let timerId;
//   return function(...val){
//     if(timerId){
//         clearTimeout(timerId)
//     }
//     timerId=setTimeout(() => {
//         fn(...val)
//     }, delay);
       
//   }
// }

// let useDebounce=debounce((e) => {
//     h1.innerText = e.target.value;  // Updates heading immediately
//     console.log(e.target.value);    // Logs value in real-time
// } ,3000)

// input.addEventListener("input", useDebounce);


let button = document.getElementById("button");


function throttle(fn , delay){
    let lastTime=0;
    return function (...val){
        let currentTime = new Date().getTime()
        if(currentTime - lastTime >= delay){
            fn(...val)
            lastTime=currentTime
        }
    }
}
let useThrottle=throttle(()=>{
    console.log("button clciked")
} , 3000)
button.addEventListener("click" , useThrottle)