// Best Time to Buy and Sell Stock (LC:121)

// Optimized Solution (TC:O(n), SC:O(1))
var maxProfit2 = function (prices) {
  let maximumProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maximumProfit) {
      maximumProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maximumProfit;
};

let prices2 = [7, 6, 4, 3, 1];
let res2 = maxProfit2(prices2);
console.log(res2);
