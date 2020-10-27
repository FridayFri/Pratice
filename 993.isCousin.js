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

console.log(isCousins((root = [1, 2, 3, 4]), (x = 4), (y = 3)));
