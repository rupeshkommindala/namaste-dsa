// Best Time to Buy and Sell Stock (LC:121)
// Brute Force Approach
let nums = [7, 1, 5, 3, 6, 4];
let maxProfit = 0;
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] - nums[i] > maxProfit && nums[j] - nums[i] > 0) {
      maxProfit = nums[j] - nums[i];
    }
  }
}
console.log(maxProfit);

// Optimized Approach
// We will keep track of minimum value that we have seen so far and the maximum profit that we get so far
let prices = [7, 1, 5, 3, 6, 4];
let min = prices[0];
let profit = 0;
for (let i = 1; i < prices.length; i++) {
  if (prices[i] - min > profit) {
    profit = prices[i] - min;
  }
  if (prices[i] < min) {
    min = prices[i];
  }
}
console.log(profit);
