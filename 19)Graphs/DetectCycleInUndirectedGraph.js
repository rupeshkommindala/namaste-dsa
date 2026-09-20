function hasCycle(edges) {
  let graph = {};
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }
  graph[x].push(y);
  graph[y].push(x);

  let visited = new Set();
  let dfs = (curr, parent) => {
    visited.add(curr);
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        return dfs(neighbor, curr);
      } else if (neighbor != parent) {
        //cycle exists
        return true;
      }
    }
    return false;
  };
  return dfs(0, -1);
}

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
);
// true -> 0-1-2-0 forms a cycle

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 3],
  ]),
);
// false -> no back edge

console.log(
  hasCycle([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
  ]),
);
// true -> 1-2-3-4-1 forms a cycle
