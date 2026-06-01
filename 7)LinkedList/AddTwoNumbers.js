// Add Two Numbers (LC:2)

// Optimized Solution (TC:O(max(m,n)), SC:O(1)=>O(max(m,n)))
var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let newNode = new ListNode(digit);
    ans.next = newNode;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    ans = ans.next;
  }
  return ansHead.next;
};
