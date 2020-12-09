var addOneRow = function (root, v, d) {
  if (d === 1) {
    const node = new TreeNode(v);
    node.left = root;
    return node;
  }
  insert(root, 1);
  return root
  function insert(node, curDepth) {
    if (!node) return;
    if (curDepth === d - 1) {
      let tree = node.left;
      node.left = new TreeNode(v);
      node.left.left = tree;
      tree = node.right;
      node.right = new TreeNode(v);
      node.right.right = tree;
    } else {
      insert(node.left, curDepth + 1);
      insert(node.right, curDepth + 1);
    }
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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
console.log(addOneRow(root, 1, 2));
