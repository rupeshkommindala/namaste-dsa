// Palindrome Linked List (LC:234)

function isPalindrome(head) {
  // Find the middle element of the Linked List
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Reverse the second half of the Linked List
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // Checking for Palindrome
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
}
