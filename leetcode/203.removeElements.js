var removeElements = function (head, val) {
  let newHead = new ListNode(null),
    prev = newHead,
    curr = head;
  newHead.next = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return newHead.next;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var a1 = new ListNode(1);
var a2 = new ListNode(2);
a1.next = a2;
var a3 = new ListNode(6);
a2.next = a3;
var a4 = new ListNode(3);
a3.next = a4;
var a5 = new ListNode(4);
a4.next = a5;
var a6 = new ListNode(5);
a5.next = a6;
var a7 = new ListNode(6);
a6.next = a7;
console.log(removeElements(a1, 6));
