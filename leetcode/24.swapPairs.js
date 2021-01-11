var swapPairs = function (head) {
  let p = new ListNode(0);
  let cur = head;
  head = p;
  const stack = [];

  while (cur && cur.next) {
    stack.push(cur);
    stack.push(cur.next);
    cur = cur.next.next;
    p.next = stack.pop();
    p = p.next;
    p.next = stack.pop();
    p = p.next;
  }
  if (cur) {
    p.next = cur;
  } else {
    p.next = null;
  }
  return head.next;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};
console.log(swapPairs(head));
