var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  while (--n) {
    fast = fast.next;
  }
  if (!fast.next) return head.next;
  fast = fast.next
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
