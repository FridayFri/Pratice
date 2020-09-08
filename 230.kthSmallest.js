var kthSmallest = function (root, k) {
  const arr = bst(root)
  return arr[k - 1];
};

var bst = function (root, val = []) {
  if (root) {
    bst(root.left, val);
    val.push(root.val);
    bst(root.right, val);
  }
  return val;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(30);
console.log(kthSmallest(root, 3));
