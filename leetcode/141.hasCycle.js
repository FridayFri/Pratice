var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
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
          next: head,
        },
      },
    },
  },
};

var head = {
  val: 1,
  next: listNode,
};

console.log(hasCycle(head));
