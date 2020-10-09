var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [root];
  let res = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      res++;
    }
  }
  return res;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(countNodes(root));
