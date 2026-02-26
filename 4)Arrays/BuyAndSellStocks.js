// Best Time to Buy and Sell Stock (LC:121)

// Brute Force Solution (TC:O(n^2), SC:O(1)) (Time Limit Exceeded)
var maxProfit = function (prices) {
  let maximumProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maximumProfit) {
        maximumProfit = prices[j] - prices[i];
      }
    }
  }
  return maximumProfit;
};
let prices = [7, 1, 5, 3, 6, 4];
let res = maxProfit(prices);
console.log(res);

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

let prices2 = [7, 1, 5, 3, 6, 4];
let res2 = maxProfit2(prices2);
console.log(res2);
