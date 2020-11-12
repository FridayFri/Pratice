var isCousins = function (root, x, y) {
  let first = {};
  let second = {};
  function getHeight(root, prev, target, height) {
    if (!root) {
      return;
    }
    if (root.val === target) {
      if (target === x) {
        first.parent = prev;
        first.height = height;
      } else {
        second.parent = prev;
        second.height = height;
      }
      return;
    }
    getHeight(root.left, root, target, height + 1);
    getHeight(root.right, root, target, height + 1);
  }
  getHeight(root, null, x, 1);
  getHeight(root, null, y, 1);
  return first.height === second.height && first.parent !== second.parent;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      right: null,
      left: null,
    },
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};

console.log(isCousins(root, (x = 4), (y = 3)));
