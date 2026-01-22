// Best Time to Buy and Sell Stock (LC:121)

// Brute Force Solution (TC:O(n^2), SC:O(1))
var maxProfit1 = function (prices) {
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

let prices1 = [7, 5, 5, 4, 3, 2, 1];
let res1 = maxProfit1(prices1);
console.log(res1);

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

let prices2 = [1, 5, 8, 4, 9, 10];
let res2 = maxProfit2(prices2);
console.log(res2);
