// Remove Linked List Elements (LC:203)

// (Way-01) Optimized Solution (TC:O(n), SC:O(1))
var removeElements = function (head, val) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let curr = sentinel;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return sentinel.next;
};

// (Way-02) Optimized Solution (TC:O(n), SC:O(1))
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  let sentinel = new ListNode();
  sentinel.next = head;
  let curr = sentinel;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return sentinel.next;
};
