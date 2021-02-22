var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  const h = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) head.next = l1;
  if (l2) head.next = l2;
  return h.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(4);
const head2 = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);

console.log(mergeTwoLists(head, head2));
