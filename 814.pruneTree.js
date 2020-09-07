var pruneTree = function (root) {
  console.log(root);
  return deleteNode(root)
};

var deleteNode = function (node) {
  if (!node) {
    return null;
  }
  node.left = deleteNode(node.left);
  node.right = deleteNode(node.right);
  if (node.left === null && node.right === null && node.val === 0) {
    return null;
  }
  return node;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(1);
root.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
console.log(pruneTree(root));
