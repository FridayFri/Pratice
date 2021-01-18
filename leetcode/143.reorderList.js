var reorderList = function (head) {
  const queue = [];
  let cur = head;
  let next;
  let tail;
  // 先遍历一遍链表，把节点存放到数组里
  while (cur) {
    const temp = cur;
    cur = cur.next;
    temp.next = null;
    queue.push(temp);
  }
  while (queue.length) {
    cur = queue.shift();
    tail = queue.pop();
    if (tail) {
      cur.next = tail;
      tail.next = queue.length ? queue[0] : null;
    } else {
      cur.next = null;
    }
  }
  return cur;
};

const head = {
  val: 5,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  },
};

console.log(reorderList(head));
