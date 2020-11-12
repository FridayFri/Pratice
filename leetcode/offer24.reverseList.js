/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  console.log("head", head);
  const stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  while (stack.length) {
    if (!head) {
      head = new ListNode(stack.pop());
    } else {
      let p = head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = new ListNode(stack.pop());
    }
  }
  return head;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(listNode));
