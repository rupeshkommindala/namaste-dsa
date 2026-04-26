var canJump = function (nums) {
  let end = nums.length - 1;
  let dp = new Array(nums.length).fill(-1);

  let dfs = (start) => {
    if (start === end) return true;

    if (dp[start] != -1) return dp[start];

    let ans = false;

    for (let i = 1; i <= nums[start] && !ans; i++) {
      if (start + i <= end) {
        ans = ans || dfs(start + i);
      }
    }

    dp[start] = ans;
    return ans;
  };

  return dfs(0);
};
