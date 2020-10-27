var diameterOfBinaryTree = function (root) {
  let dis = 0;
  if (!root) {
    return 0;
  }
  function diameter(root) {
    if (!root) {
      return 0;
    }
    const left = diameter(root.left);
    const right = diameter(root.right);
    dis = Math.max(left + right, dis);
    return Math.max(left, right) + 1;
  }
  diameter(root);
  return dis;
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

console.log(diameterOfBinaryTree(root));
