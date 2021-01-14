var bstFromPreorder = function (preorder) {
  if (!preorder.length) {
    return null;
  }
  let val = preorder.shift();
  console.log(val);
  let root = new TreeNode(val);
  root.left = bstFromPreorder(preorder.filter((item) => item < val));
  root.right = bstFromPreorder(preorder.filter((item) => item > val));
  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
