var kthLargest = function (root, k) {
  const arr = bst(root);
  console.log(arr);
  return arr[arr.length - k]
};

function bst(root, val = []) {
  if (root) {
    bst(root.left, val);
    val.push(root.val);
    bst(root.right, val);
  }
  return val;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);
root.right = new TreeNode(10);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(12);

const k = 1;
console.log(kthLargest(root, k));
