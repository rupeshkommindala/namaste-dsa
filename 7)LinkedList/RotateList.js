// Rotate List (LC:61)

// Optimized Solution (TC:O(n), SC:O(1))
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  k = k % length;
  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }
  while (f.next) {
    s = s.next;
    f = f.next;
  }
  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
};
