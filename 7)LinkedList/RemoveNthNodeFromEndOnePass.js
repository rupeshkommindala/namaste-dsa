// Remove Nth Node From End of List (LC:19)

// Optimized Solution (TC:O(n), SC:O(1))
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let f = sentinel;
  for (let i = 0; i < n; i++) {
    f = f.next;
  }
  let s = sentinel;
  while (f.next) {
    s = s.next;
    f = f.next;
  }
  s.next = s.next.next;
  return sentinel.next;
};
