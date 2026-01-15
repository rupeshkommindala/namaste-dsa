// Best Time to Buy and Sell Stock (LC:121)

// Brute Force Solution (TC:O(n^2), SC:O(1))
var maxProfit1 = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
};

let prices1 = [7, 1, 5, 3, 6, 4];
let res1 = maxProfit1(prices1);
console.log(res1);

// Optimized Solution (TC:O(n), SC:O(1))
var maxProfit2 = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};

let prices2 = [1, 5, 8, 4, 9, 10];
let res2 = maxProfit2(prices2);
console.log(res2);
