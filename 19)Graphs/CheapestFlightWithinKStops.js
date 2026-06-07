var findCheapestPrice = function (n, flights, src, dst, k) {
  let graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  let minPrice = new Array(n).fill(Infinity);
  minPrice[src] = 0;

  // [city, cost, stops]
  let q = [[src, 0, 0]];
  while (q.length) {
    let [curr, currPrice, stops] = q.shift();
    if (stops > k) continue;
    for (let [neighbor, neighborPrice] of graph[curr]) {
      let newPrice = currPrice + neighborPrice;
      if (newPrice < minPrice[neighbor]) {
        minPrice[neighbor] = newPrice;
        q.push([neighbor, newPrice, stops + 1]);
      }
    }
  }
  return minPrice[dst] === Infinity ? -1 : minPrice[dst];
};
