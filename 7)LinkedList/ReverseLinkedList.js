// Reverse Linked List (LC:206)

/**
 * Approach: Here we have to keep track of previous
 * value and also we have to store the next value
 */

// Optimized Solution (TC:O(n), SC:O(1))
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
};

// Optimized Solution(Interview-Friendly) (TC:O(n), SC:O(1))
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
