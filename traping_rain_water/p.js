function trap(height) {
    if (!height || height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let trappedWater = 0;

    // 1, 3, 1 , 2 , 3 , 5
    // 
    //           *
    //           *
    //   *     * *
    //   *   * * *
    // * * * * * *
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            trappedWater += Math.max(0, leftMax - height[left]);
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            trappedWater += Math.max(0, rightMax - height[right]);
        }
    }

    return trappedWater;
}



function trapWater(h){
  let left=[];
  let right=[];
  let n=h.length
   left[0] = h[0]
   for(let i=1;i<h.length;i++){
    left[i] = Math.max(left[i-1] , h[i])
   }
   right[n-1] = h[n-1]
   for(let i=n-2;i>=0;i--){
    right[i] = Math.max(right[i+1] , h[i])
   }
   let ans= 0
   for(let i=0;i<n;i++){
    ans+=Math.min(left[i] , right[i])-h[i]
   }
   console.log(h , left , right , ans)
}
// Example usage:
const height = [1, 3, 1 , 2 , 3 , 5];
console.log(trap(height));  // Output: 6
