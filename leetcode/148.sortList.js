var sortList = function (head) {
  const r = [];
  if (!head) return null;
  while (head) {
    r.push(head);
    var tmp = head.next;
    head.next = null;
    head = tmp;
  }
  r.sort((a, b) => a.val - b.val).reduce((p, v) => (p.next = v));
  return r[0]
};

const head = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: null,
      },
    },
  },
};
console.log(sortList(head));
