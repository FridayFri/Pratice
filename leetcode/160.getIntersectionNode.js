var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  while (a) {
    let b = headB;
    while (b) {
      if (a === b) {
        return a;
      }
      b = b.next;
    }
    a = a.next;
  }
};
const c = {
  vale: 4,
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
};
const a = {
  val: 7,
  next: {
    val: 6,
    next: {
      val: 5,
      next: c,
    },
  },
};
const b = {
  val: 7,
  next: {
    val: 6,
    next: {
      val: 5,
      next: c,
    },
  },
};
console.log(getIntersectionNode(a, b));
