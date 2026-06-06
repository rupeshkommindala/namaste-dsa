function numDecodings(s) {
  const dp = {};

  const fn = (remS) => {
    if (remS === "") return 1;

    if (remS in dp) return dp[remS];

    const n = remS.length;
    let ans = 0;

    // One digit
    const oneDigit = remS.substring(n - 1);
    if (oneDigit !== "0") {
      ans += fn(remS.substring(0, n - 1));
    }

    // Two digits (ONLY if length >= 2)
    if (n >= 2) {
      const twoDigit = remS.substring(n - 2);
      const val = Number(twoDigit);

      if (val >= 10 && val <= 26) {
        ans += fn(remS.substring(0, n - 2));
      }
    }

    dp[remS] = ans;
    return ans;
  };

  return fn(s);
}
