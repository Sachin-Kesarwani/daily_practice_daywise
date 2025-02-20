// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// solution 


function bestTimetobuyandSell(prices){
  let minPirce=prices[0]
  let n=prices.length
  let maxProfit=0
  for(let i=0;i<n;i++){
    const profit = prices[i]-maxProfit
    if(maxProfit<profit){
        maxProfit=profit
    }
    if(minPirce>prices[i]){
        minPirce=prices[i]
    }
  }
}
const prices = [7,1,5,3,6,4]
console.log(bestTimetobuyandSell(prices))