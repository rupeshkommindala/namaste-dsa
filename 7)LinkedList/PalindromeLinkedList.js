// Palindrome Linked List (LC:234)

// Optimized Solution (TC:O(n), SC:O(1))
var isPalindrome = function (head) {
  // Find the Middle Element of LinkedList
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Reverse the second half of LinkedList
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // Check for Palindrome
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
